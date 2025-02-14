import mongoose from "mongoose";
import { defType } from "./StudentPersonalinfo";


const studentResultStr = mongoose.Schema({
    stdId : {
        type: mongoose.Schema.Types.ObjectId,
        unique:true,
        required:true
    },

    rollNo: defType,
    testTotalMarks:defType,
    obtMarks: {
        type: Number,
        required:true
    },
    remarks: defType,
    correctAns: {
        type: Number,
        required:true
    },
    wrongAns:{
        type: Number,
        required:true
    },
    position: {
        type: Number,
        required:true
    }
},{
    timestamps: true
})

const ResultModel = mongoose.models.studentresult || mongoose.model("studentresult", studentResultStr);
export default ResultModel;
