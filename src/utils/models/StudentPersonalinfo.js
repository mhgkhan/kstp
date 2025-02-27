import mongoose from "mongoose";


export const defType = {
    type: String,
    required: true
}
const studentPersonalInfoStr = mongoose.Schema({

    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        unique:true
    },
    image: defType,
    fatherName: defType,
    gender: defType,
    fatherPhone: defType,
    dateOfBirth: defType,
    postalAddress:defType,
    parmanentAddress: defType,
    district: {
        type: defType.type,
        default: "khyber"
    },
    tehsil: defType,

    schoolName: defType,
    schoolClass: defType,
    schoolRollNo: defType,
    schoolAddress: defType,

    paymentVerified: {
        type: Boolean,
        default: false
    },

}, {
    timesatamps: true
})

const StudentInfoModel = mongoose.models.studentinfos || mongoose.model("studentinfos", studentPersonalInfoStr)
export default StudentInfoModel;
