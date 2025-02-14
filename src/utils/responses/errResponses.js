import { NextResponse } from "next/server";

export const  apiErrResponse = (success, status, message) => NextResponse.json({success, message},{status}) 
export const serverErrResponse = (err) => {
    console.log(err);
    return NextResponse.json({success:false, message: err.message},{status:500})
}
