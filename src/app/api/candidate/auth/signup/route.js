import connectDB from "@/utils/db/connectDB";
import { checkUserExistssByCnic } from "@/utils/db/filters/checkExists";
import studentAccount from "@/utils/models/StudentAccount";
import { apiErrResponse, serverErrResponse } from "@/utils/responses/errResponses";
import { genCandidateToken } from "@/utils/tokens/CandidateTokenProcesses";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

await connectDB();
export async function POST(request) {
    
    try {
        
        const body = await request.json();
        const { name:fullname, cnic, password, cpassword } = body;
        console.log(body)

        if (!fullname || !cnic || !password || fullname.length < 2 || cnic.length < 12 || password.length < 5) return apiErrResponse(false, 401, "Recieved Credientials are not valid");
        else {
            if (password !== cpassword) return apiErrResponse(false, 401, "Confirm password not matching");
            else {

                const checkExistsUser = await checkUserExistssByCnic(cnic);

                if (checkExistsUser.error) return serverErrResponse({ message: checkExistsUser.message });
                else {

                    if (checkExistsUser.success) return apiErrResponse(false, 400, "This Cnic already registered");
                    else {
                        const encryptPassword = await bcrypt.hash(password, 10);
                        const response = NextResponse.json({success:true, message:"Candidate Registeraton sucessfull", data:null})
                        // saving this data into the datababse 
                        const saveData = studentAccount({ cnic, fullname, password: encryptPassword })
                        await saveData.save();

                        // creating token 
                        const payload = { id: saveData._id, cnic: saveData.cnic, name: saveData.fullname }
                        const token = genCandidateToken(payload);
                        response.cookies.set("CANDIDATEAUTHTOKEN", token, {
                            secure: true,
                            httpOnly: true,
                            name: "CANDIDATEAUTHTOKEN"
                        });
                        return response;
                    }
                }
            }
        }

    } catch (error) {
        return serverErrResponse(error);
    }
}