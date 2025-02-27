"use client";
import React, { useState } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { FaKey, FaUser } from "react-icons/fa";
import { TiWarningOutline } from 'react-icons/ti';
import toast, { Toaster } from 'react-hot-toast';
import { postApiCall } from '../functions/ApiCall';
import { useRouter } from 'next/navigation';


const CandidateRegisterationForm = ({domain}) => {

    const router = useRouter();

    const [formInputs, setFormInputs] = useState({ name: "", cnic: "", password: "", cpassword: "" });


    const [isValidCnic, setIsvalidCnic] = useState(true);
    const [isValidName, setIsValidName] = useState(true)
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true)
    const [isConfirmMatched, setIsConfirmMatched] = useState(true)
    const checkConfirmPassword = () => setIsConfirmMatched(formInputs.password == formInputs.cpassword)

    
    const changeInput = e => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
    }


    const [loading, setLoading] = useState(false);
    const [recieveData, setRecieveData] = useState("");
    const [isResErr, setIsResErr] = useState(false);
    const [resMsg, setResMsg] = useState(false);

    const submitReigsterForm = async e => {
        e.preventDefault();
        if (!isValidCnic || !isValidName || !isValidPassword || !isValidConfirmPassword || !isConfirmMatched) {
            toast.error("Fields are not valid");
            return;
        }
        else {
            const response = {};
            try {
                const request = await postApiCall(`${domain}api/candidate/auth/signup`, formInputs);
                if (request.error) {
                    response.isResErr = true;
                    response.resMsg = request.message;
                }
                else {
                    if (!request.success) {
                        response.isResErr = true;
                        response.resMsg = request.message;
                    }
                    else {
                        response.isResErr = false;
                        response.resMsg = request.message;
                        response.data = request.data;
                        response.succed = true;
                    }
                }

            } catch (error) {
                response.isResErr = true;
                response.resMsg = error.message
            }
            finally {
                setLoading(false)
                setResMsg(response.resMsg);
                setIsResErr(response.isResErr);
                setRecieveData(response.data);
                response.isResErr ? toast.error(response.resMsg) : toast.success(response.resMsg);
                if (response.succed) {
                    setTimeout(() => {
                        return router.push("/candidate")
                    }, 2000);
                }
            }
        }
    }

    return (
        <>
            <Toaster />
            <form className="my-4" onSubmit={submitReigsterForm} method='POST'>
                <Input onblue={(e) => {
                    e.target.value.length < 12 ? setIsvalidCnic(false) : setIsvalidCnic(true)
                }} Icon={FaUser} onchange={(e) => {
                    changeInput(e)
                    e.target.value.length < 12 ? setIsvalidCnic(false) : setIsvalidCnic(true)
                }} value={formInputs.cnic} name={'cnic'} type={"number"} required={true} placeholder={"Enter valid CNIC/Form-b"} disable={loading} />
                {!isValidCnic ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Cnic is not valid </span> : ""}
                <Input
                    onblue={(e) => {
                        setIsValidName(e.target.value.length < 4 ? false : true)
                    }}
                    Icon={FaUser} onchange={(e) => {
                        setIsValidName(e.target.value.length < 4 ? false : true)
                        changeInput(e);
                    }} value={formInputs.fullName} name={'name'} type={"text"} required={true} placeholder={"Enter full name"} disable={loading} />
                {!isValidName ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Enter fullname </span> : ""}
                <Input onblue={(e) => {
                    setIsValidPassword(e.target.value.length < 6 ? false : true);
                    setIsValidPassword(e.target.value.length < 6 ? false : true);
                }} Icon={FaKey} onchange={(e) => {
                    changeInput(e);
                    setIsValidPassword(e.target.value.length < 6 ? false : true);
                }} value={formInputs.password} name={'password'} type={"password"} required={true} placeholder={"Password"} disable={loading} />
                {!isValidPassword ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Password must be atleast 5 characters </span> : ""}
                <Input onblue={(e) => {
                    setIsValidConfirmPassword(e.target.value.length < 6 ? false : true);
                    checkConfirmPassword();
                    changeInput(e);
                }} Icon={FaKey} onchange={(e) => {
                    setIsValidConfirmPassword(e.target.value.length < 6 ? false : true);
                    changeInput(e);
                    checkConfirmPassword();
                }} value={formInputs.cpassword} name={'cpassword'} type={"password"} required={true} placeholder={"Confirm password"}  disable={loading}/>
                {!isValidConfirmPassword ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> {isConfirmMatched ? "Confirm password must be atleast 5 characters and Passwords Must be same" : "Confirm Password Not Matched"} </span> : ""}
                <SubmitButton loadingText={"Wait..."} text={"Register now"} loading={loading} disable={!isValidCnic || !isValidName || !isValidPassword || !isValidConfirmPassword || !isConfirmMatched} />
            </form>
        </>
    )
}
export default CandidateRegisterationForm
