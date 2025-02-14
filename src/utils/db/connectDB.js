import EnvObjs from "@/config/FreezeEnvs";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export default async function connectDB() {
    try {
        await mongoose.connect(`${EnvObjs.DBURI}`)
        console.log("database connected")
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "DB Connection Error   " })
    }
}
