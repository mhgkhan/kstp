"use client";
import React, { useState } from 'react'
import Input from './Input'
import SubmitButton from './SubmitButton'
import { FaKey, FaUser } from "react-icons/fa";
import { TiWarningOutline } from 'react-icons/ti';


const CandidateRegisterationForm = () => {

    const [formInputs, setFormInputs] = useState({ fullName: "", cnic: "", password: "", cpassword: "" });

    const [isValidInputs, setIsValidInputs] = useState({
        cnic: true,
        password: true,
        confirmpassword: true,
        name: true
    })

    const changeInput = e => {
        setFormInputs({ ...formInputs, [e.target.name]: e.target.value })
        // checkValidation(e.target.name)
    }
 
    return (
        <form className="my-4">
            <Input Icon={FaUser} onchange={changeInput} value={formInputs.cnic} name={'cnic'} type={"text"} required={true} placeholder={"Enter valid CNIC/Form-b"} />
            {!isValidInputs.cnic ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Cnic is not valid </span> : ""}
            <Input Icon={FaUser} onchange={changeInput} value={formInputs.fullName} name={'name'} type={"text"} required={true} placeholder={"Enter full name"} />
            {!isValidInputs.name ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Enter fullname </span> : ""}
            <Input Icon={FaKey} onchange={changeInput} value={formInputs.password} name={'password'} type={"password"} required={true} placeholder={"Password"} />
            {!isValidInputs.password ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Password must be atleast 5 characters </span> : ""}
            <Input Icon={FaKey} onchange={changeInput} value={formInputs.cpassword} name={'cpassword'} type={"password"} required={true} placeholder={"Confirm password"} />
            {!isValidInputs.password ? <span className="text-red-900 font-bold text-sm px-1 text-center flex items-center justify-center gap-1"><TiWarningOutline /> Confirm password must be atleast 5 characters and Passwords Must be same </span> : ""}
            <SubmitButton loadingText={"Wait..."} text={"Register now"} loading={false} disable={false} />
        </form>
    )
}
export default CandidateRegisterationForm
