import EnvObjs from "@/config/FreezeEnvs";
import jwt from "jsonwebtoken";

export const genCandidateToken = ({ id, cnic, name }) => jwt.sign({ id, cnic, name }, EnvObjs.CANDIDATESECRETKEY);
