import mongoose from "mongoose";
import { defType } from "../StudentApply";

const adminOrganizationStr = mongoose.Schema({
    orgName: defType,
    adminId: mongoose.Schema.Types.ObjectId,
    orgAddress: defType,
    orgDescription: defType,
    orgType: defType,
    orgConact:defType,
    orgEmail: defType,
    orgAuthor: defType,
    orgImg: defType,
    orgWeb: {
        type: defType.type
    },
},{
    timestamps:true
})

const adminOrgModel = mongoose.models.adminorganizations || mongoose.model("adminorganizations", adminOrganizationStr);
export default adminOrgModel;
