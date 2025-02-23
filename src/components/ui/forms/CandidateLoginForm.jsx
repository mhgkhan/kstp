"use client";

import React, { useState } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { FaKey, FaUser } from "react-icons/fa";
import { TiWarningOutline } from 'react-icons/ti';
import { postApiCall } from '../functions/ApiCall';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';

function CandidateLoginForm({domain}) {


    const router = useRouter();

    const [formInputs, setFormInputs] = useState({ cnic: "", password: "" });
    const [isValid, setIsValid] = useState({ cnic: true, password: true });


    const onchangeInput = e => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value });
        checkValidation(e.target.name);
    }

    const checkValidation = name => {
        if (name == "cnic") {
            formInputs.cnic.length < 12 ? setIsValid({ cnic: false, password: isValid.password }) : setIsValid({ cnic: true, password: isValid.password })
        }
        else if (name == "password") {
            formInputs.password.length < 5 ? setIsValid({ password: false, cnic: isValid.cnic }) : setIsValid({ password: true, cnic: isValid.cnic })
        }
        else {
            formInputs.cnic.length < 12 ? setIsValid({ cnic: false, password: isValid.password }) : setIsValid({ cnic: true, password: isValid.password })
            formInputs.password.length < 5 ? setIsValid({ password: false, cnic: isValid.cnic }) : setIsValid({ password: true, cnic: isValid.cnic })
        }
    }


    const [loading, setLoading] = useState(false);
    const [isResErr, setIsResErr] = useState(false)
    const [resMsg, setResMsg] = useState(null);
    const [recieveData, setRecieveData] = useState(null)

    const [successRes, setSuccessRes] = useState(false);

    const submitLoginForm = async e => {
        e.preventDefault();
        checkValidation();

        const response = {}
        try {
            // submitting 
            const request = await postApiCall(`${domain}api/candidate/auth/signin`, formInputs);

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
                    setSuccessRes(true)
                }
            }

        } catch (error) {
            response.isResErr = true;
            response.resMsg = error.message
        } finally {
            setLoading(false)
            setResMsg(response.resMsg);
            setIsResErr(response.isResErr);
            setRecieveData(response.data);
            response.isResErr ? toast.error(response.resMsg) : toast.success(response.resMsg);
            if(response.succed){
                return router.push("/candidate")
            }
        }
    }


    return (
        <>
            <Toaster />
            {isResErr ? <div onClick={() => setIsResErr(false)} className={`transition-all duration-300 p-2 rounded-md text-white font-bold ${isResErr ? "bg-red-800" : "bg-green-800"} flex items-center gap-1`}>{resMsg}</div> : ""}
            <form className="my-1" onSubmit={submitLoginForm} method="post">
                <Input onblue={(e)=>checkValidation(e.target.name)} Icon={FaUser} type={'number'} name={'cnic'} onchange={onchangeInput} value={formInputs.cnic} disable={loading} key={122} required={true} placeholder={'Enter CNIC/Form-B'} />
                {!isValid.cnic ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Cnic is not valid </span> : ""}
                <Input onblue={(e)=>checkValidation(e.target.name)} Icon={FaKey} type={'password'} name={'password'} onchange={onchangeInput} value={formInputs.password} disable={loading} key={1222} required={true} placeholder={'Password'} />
                {!isValid.password ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Password must be atleast 5 characters </span> : ""}
                <SubmitButton disable={!isValid.cnic || !isValid.password} loading={loading} loadingText={'Logging..'} text={"Login"} key={1} />
            </form>
        </>
    )
}

export default CandidateLoginForm
