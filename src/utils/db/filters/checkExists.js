import adminModel from "@/utils/models/admin/AdminModel";

const { default: studentAccount } = require("@/utils/models/StudentAccount")

export const checkUserExistssByCnic = async cnic => {
    try {
        // checking user 
        const checkUser = await studentAccount.findOne({ cnic });
        if (!checkUser) return {
            success: false
        }
        else return {
            success: true,
            data: checkUser
        }
    } catch (error) {
        console.log(error);
        
        return {
            error: true,
            message: error.message
        }
    }
}


export const checkUserExistssById = async id => {
    try {
        // checking user 
        const checkUser = await studentAccount.findOne({ _id: id });
        if (!checkUser) return {
            success: false
        }
        else return {
            success: true,
            data: checkUser
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}



export const checkInstituteById = async id => {
    try {
        //    checking institute 
        const checkInst = await adminModel.findOne({ id })
        if (!checkInst) return {
            success: false
        }
        else return {
            success: true,
            data: checkInst
        }
    } catch (error) {
        return {
            error: true,
            message: error.message
        }
    }
}

