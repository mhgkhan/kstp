import mongoose from "mongoose";
import { defType } from "../StudentApply";

const adminModelStr = mongoose.Schema({
    email: {
        ...defType,
        unique:true
    },
    password: defType,
    
    verified:{
        type: Boolean,
        default: false
    },
},{
    timestamps:true
})

const adminModel = mongoose.models.admins || mongoose.model("admins", adminModelStr)
export default adminModel;