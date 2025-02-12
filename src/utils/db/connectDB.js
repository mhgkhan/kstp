import EnvObjs from "@/config/FreezeEnvs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const connectDB = async ()=> {
    try {
        const connect = await mongoose.connect(EnvObjs.DBURI)  
        console.log("database connected")
    } catch (error) {
        return NextResponse.json({success:false, message:"DB Connection Error   "})
    }
}
