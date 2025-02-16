import connectDB from "@/utils/db/connectDB";
import { checkUserExistssByCnic } from "@/utils/db/filters/checkExists";
import { apiErrResponse, serverErrResponse } from "@/utils/responses/errResponses";
// import { apiSuccessResponse } from "@/utils/responses/successResponses";
import { genCandidateToken } from "@/utils/tokens/CandidateTokenProcesses";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

await connectDB();
export async function POST(request) {
    try {
        const body = await request.json();
        const { cnic, password } = body;

        // checking if user data is valid or not 
        if (!cnic || cnic.length < 12 || !password || password.length < 5) return apiErrResponse(false, 401, "Invilid credientials");
        else {
            // checking if user is exists in the database or not 
            const checkUserExists = await checkUserExistssByCnic(cnic);
            // if user is exists 
            if (checkUserExists.error) return serverErrResponse({ message: checkUserExists.message });
            else {
                // if not exists 
                // xyz 

                if (!checkUserExists.success) return apiErrResponse(false, 400, "User with this cnic not exists");
                else {
                    // checking if the user password is mathing or not 
                    const checkingPassword = await bcrypt.compare(password, checkUserExists.data.password);
                    // if password is incorrect 
                    if (!checkingPassword) return apiErrResponse(false, 400, "Password is incorrect!");
                    // if password is correct 
                    else {
                        const response = NextResponse.json({success:true, message:"User logged sucessfully", data:null})
                        const { _id, cnic, fullname } = checkUserExists.data;
                        // generate token 
                        const token = genCandidateToken({ _id, cnic, name: fullname });

                        response.cookies.set("CANDIDATEAUTHTOKEN", token, {
                            secure: true,
                            httpOnly: true,
                            name: "CANDIDATEAUTHTOKEN"
                        });
                        // response.cookies.set("CANDIDATE")


                        // return apiSuccessResponse(true, 200, "Signin sucessfully", null)
                        return response;
                    }
                }
            }
        }
    } catch (error) {
        return serverErrResponse(error);
    }
}