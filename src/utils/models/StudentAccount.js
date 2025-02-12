import mongoose from "mongoose";

const studentAccountStr = mongoose.Schema({
    cnic:{
        type:String,
        required:true,
        unique:true,
    }, 
    fullname:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
})

const studentAccount = mongoose.models.studentaccounts || mongoose.model("studentaccounts", studentAccountStr);
export default studentAccount;
