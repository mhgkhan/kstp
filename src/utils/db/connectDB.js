import EnvObjs from "@/config/FreezeEnvs";
import mongoose, { connection } from "mongoose";
import { NextResponse } from "next/server";

export default async function connectDB() {
    try {

        // const conn = connection || null;

        // if (conn) {
        //     console.log("Already connected")
        //     return
        // }
        // else {
        // }
        const connect = await mongoose.connect(`${EnvObjs.DBURI}`)
        console.log("database connected")
    } catch (error) {
        console.log(error);
        return NextResponse.json({ success: false, message: "DB Connection Error   " })
    }
}
