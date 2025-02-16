import connectDB from "@/utils/db/connectDB";
import { checkUserExistssByCnic } from "@/utils/db/filters/checkExists";
import StudentInfoModel from "@/utils/models/StudentPersonalinfo";
import { apiErrResponse, serverErrResponse } from "@/utils/responses/errResponses";
import { apiSuccessResponse } from "@/utils/responses/successResponses";
import { decrCandidateToken } from "@/utils/tokens/CandidateTokenProcesses";
import { cookies } from "next/headers";
await connectDB();

export async function POST(request) {
    try {
        const body = await request.json();
        const candidateCookie = (await cookies()).get("CANDIDATEAUTHTOKEN");
        if (!candidateCookie) return apiErrResponse(false, 401, "Please login or registered first");
        else {
            const { image, fatherName, gender, fatherPhone, dateofBirth, district, address, tehsil, schoolName, schoolClass, schoolRollno, schoolAddress } = body;
            for (i = 0; i < Object.keys(body).length > 15 ? 15 : Object.keys(body).length; i++) {
                if (Object.values(body)[i].length < 2 || Object.values(body)[i].length > 120) return apiErrResponse(false, 400, "Recieved data is not valid! please check fields ");
            }
            // checking and verifying the token 
            const thisCookie = candidateCookie.value;
            const decryptToken = decrCandidateToken(thisCookie);
            if (!decryptToken.id || !decryptToken.cnic || !decryptToken.name) return apiErrResponse(false, 401, "Invilid Token or session");
            else {
                // checking if the user is exists or not 
                const checkIfExists = await checkUserExistssByCnic(decryptToken.cnic);
                if (checkIfExists.error) return serverErrResponse(checkIfExists.message);
                else {
                    if (!checkIfExists.success) return apiErrResponse(false, 401, "Unauthorize User");
                    else {
                        // checking if user data is already exists or not 
                        const checkUserInfo = await StudentInfoModel.findOne({ accountId: decryptToken.id });
                        if (checkUserInfo) return apiErrResponse(false, 400, "Your information is already avaliable");
                        else {
                            const recievedData = { fatherName, gender, fatherPhone, dateofBirth, district, address, tehsil, schoolName, schoolClass, schoolRollno, schoolAddress, accountId: decryptToken.id, image };
                            const savingCandidateInfo = StudentInfoModel({
                                ...recievedData
                            })
                            await savingCandidateInfo.save();
                            return apiSuccessResponse(true, 201, "Candidate Information Updated", savingCandidateInfo);
                        }
                    }
                }
            }
        }
    } catch (error) {
        return serverErrResponse(error)
    }
}


export async function PUT(request) {

    try {

        const UserCookie = (await cookies()).get("CANDIDATEAUTHTOKEN");
        if (!UserCookie) return apiErrResponse(false, 401, "you need to login");

        else {
            const body = await request.json();
            for (i = 0; i < Object.keys(body).length > 15 ? 15 : Object.keys(body).length; i++) {
                if (Object.values(body)[i].length < 2 || Object.values(body)[i].length > 120) return apiErrResponse(false, 400, "Recieved data is not valid! please check fields ");
            }

            const { fatherName, gender, fatherPhone, dateofBirth, district, address, tehsil, schoolName, schoolClass, schoolRollno, schoolAddress, image } = body;
            const dataObj = { fatherName, gender, fatherPhone, dateofBirth, district, address, tehsil, schoolName, schoolClass, schoolRollno, schoolAddress, image };

            // checking if token is valid or not 
            const checkToken = decrCandidateToken(UserCookie.value);
            const { cnic, id } = checkToken;

            // checking if the id or cninc is exists or not 
            const checkUser = await checkUserExistssByCnic(cnic);
            if (checkUser.error) return serverErrResponse(error);
            else {
                if (!checkUser.success) return apiErrResponse(false, 401, "unAuthorize User");
                else {
                    try {
                        const checkInfoIntheInfoModel = await StudentInfoModel.findOneAndUpdate({ accountId: checkUser.id }, { $set: { ...dataObj } }, { new: true });
                        return apiSuccessResponse(true, 201, "Information has been updated.")
                    } catch (error) {
                        return serverErrResponse(error)
                    }
                }
            }
        }

    } catch (error) {
        return serverErrResponse(error);
    }
}

export async function GET(request) {
    try {
        // checking if in the request has cookies or not 
        const userCookie = (await cookies()).get("CANDIDATEAUTHTOKEN");
        // verifying the cookie 
        const verifyToken = decrCandidateToken(userCookie.value);
        if (!verifyToken.id || !verifyToken.cnic || !verifyToken.name) return apiErrResponse(false, 401, "You need to login first");
        else {
            // checking if the user is exists or not 
            const checkExists = await checkUserExistssByCnic(verifyToken.cnic);
            if (checkExists.error) return serverErrResponse(checkExists.message);
            else {
                if (!checkExists.success) return apiErrResponse(false, 401, "Unauthorized Request");
                else {
                    // fetching the user information 
                    const userInfo = await StudentInfoModel.findOne({ accountId: verifyToken.id });
                    if (!userInfo) return apiErrResponse(false, 400, "Student info are not found");
                    else {
                        // sending information to user 
                        const sendingInfo = Object.freeze({
                            fullname: checkExists.data.fullname,
                            cnic: checkExists.data.cnic,
                            img: userInfo.image,
                            fathername: userInfo.fatherName,
                            dateOfBirth: userInfo.dateOfBirth,
                            gender: userInfo.gender,
                            fatherPhone: userInfo.fatherPhone,
                            tehsil: userInfo.tehsil,
                            district: userInfo.district,
                            address: userInfo.address,
                            schoolName: userInfo.schoolName,
                            schoolClass: userInfo.schoolClass,
                            schoolRollNo: userInfo.schoolRollNo,
                            schoolAddress: userInfo.schoolAddress,
                        })
                        return apiSuccessResponse(true, 200, "Candidate information fetched", sendingInfo)
                    }
                }
            }
        }

    } catch (error) {
        return serverErrResponse(error)
    }
}