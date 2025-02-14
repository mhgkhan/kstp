import connectDB from "@/utils/db/connectDB";
import { checkUserExistssByCnic } from "@/utils/db/filters/checkExists";
import studentAccount from "@/utils/models/StudentAccount";
import { apiErrResponse, serverErrResponse } from "@/utils/responses/errResponses";
import { apiSuccessResponse } from "@/utils/responses/successResponses";
import { genCandidateToken } from "@/utils/tokens/CandidateTokenProcesses";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

await connectDB();
export async function POST(request) {


    try {

        const body = await request.json();
        const { fullname, cnic, password, cpassword } = body;

        if (!fullname || !cnic || !password || fullname.length < 2 || cnic.length < 12 || password.length < 5 || password!==cpassword) return apiErrResponse(false, 401, "Recieved Credientials are not valid");
        else {

            const checkExistsUser = await checkUserExistssByCnic(cnic);
            console.log(checkExistsUser);

            if (checkExistsUser.error) return serverErrResponse({ message: checkExistsUser.message });
            else {

                if (checkExistsUser.success) return apiErrResponse(false, 400, "This Cnic already registered");
                else {

                    const encryptPassword = await bcrypt.hash(password, 10);

                    // saving this data into the datababse 
                    const saveData = studentAccount({cnic, fullname, password:encryptPassword})
                    await saveData.save();

                    const response = new NextResponse();
                    // creating token 
                    const payload = {id:saveData._id,cnic:saveData.cnic,name:saveData.name}
                    const token = genCandidateToken(payload);
                    response.cookies.set("CANDIDATEAUTHTOKEN", token,{httpOnly:true, secure:true});
                    return apiSuccessResponse(true, 201, "Registered Sucessfully", null);
                    // return NextResponse.json({ encryptPassword, realPassword: password, data:saveData, token })
                }
            }
        }

    } catch (error) {
        return serverErrResponse(error);
    }
}