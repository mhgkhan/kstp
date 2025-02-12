import jwt from "jsonwebtoken";

export const genCandidateToken = ({ id, cnic, name }) => jwt.sign({ id, cnic, name }, process.env.JWT_SECRET_KEY);
