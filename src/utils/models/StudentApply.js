import mongoose from "mongoose";


export const defType = {
    type: String,
    required: true
}
const studentApplyStr = mongoose.Schema({

    accountId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    fatherName: defType,
    gender: defType,
    fatherPhone: defType,
    dateOfBirth: defType,
    district: {
        type: defType.type,
        default: "khyber"
    },
    address: defType,


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

const StudentApplyModel = mongoose.models.studentstestapplys || mongoose.model("studentstestapplys", studentApplyStr)
export default StudentApplyModel;
