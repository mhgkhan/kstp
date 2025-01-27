import mongoose from "mongoose";


const defType = {
    type: String,
    required: true
}
const studentApplyStr = mongoose.Schema({

    stdName: defType,
    fatherName: defType,
    cnic: defType,
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

    testId: defType,
    paymentVerified: {
        type: Boolean,
        default: false
    },

}, {
    timesatamps: true
})

const StudentApplyModel = mongoose.models.studentstestapplys || mongoose.model("studentstestapplys", studentApplyStr)
export default StudentApplyModel;
