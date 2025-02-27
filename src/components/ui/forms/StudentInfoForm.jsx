"use client"

import React from 'react'
import { CgGenderFemale, CgGenderMale } from 'react-icons/cg'
import { FaCalendar, FaFemale, FaMale, FaPhone, FaUser } from 'react-icons/fa'
import { GrLocation, GrMail } from 'react-icons/gr'
import Input from '@/components/ui/forms/Input'


const StudentInfoForm = () => {
  return (
    <form className='w-full mt-5' onSubmit={(e)=>e.preventDefault()}>
    <div className="pinfo">
      <h3 className="text-2xl font-bold text-cyan-950">Personal Info</h3>
      <div className="flex items-center justify-start gap-x-5 gap-y-1 flex-wrap">
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={GrMail} name={'email'} type={'email'} required={false} placeholder={"Email"} disable={false} />
        </div>
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={FaPhone} name={'phone'} type={'text'} required={true} placeholder={"Phone number"} disable={false} />
        </div>
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={FaCalendar} name={'dateOfBirth'} type={'date'} required={true} placeholder={"Your date of birth"} disable={false} />
        </div>

        <div>
          {/* <h5 className="text-xl font-bold text-black">Gender</h5> */}
          <div className="flex items-center justify-center gap-4">
            <div className="gender-type flex gap-3 items-center cursor-pointer">
              <h6 className="text-lg font-bold text-black">Male</h6>
              <Input Icon={FaMale} name={'gender'} type={'radio'} required={true} placeholder={"Male"} disable={false} />
            </div>
            <div className="gender-type flex gap-3 items-center cursor-pointer">
              <h6 className="text-lg font-bold text-black">Female</h6>
              <Input Icon={FaFemale} name={'gender'} type={'radio'} required={true} placeholder={"Male"} disable={false} />
            </div>
          </div>
        </div>

        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={FaUser} name={'fatherName'} type={'text'} required={true} placeholder={"Father name"} disable={false} />
        </div>
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={FaPhone} name={'fatherPhone'} type={'text'} required={true} placeholder={"Father Phone number"} disable={false} />
        </div>
      </div>
    </div>

    <div className="pinfo mt-5">
      <h3 className="text-2xl font-bold text-cyan-950">Student address </h3>
      <div className="flex items-center justify-start gap-x-5 gap-y-1 flex-wrap">
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={GrLocation} name={'district'} type={'text'} required={false} placeholder={"Student District"} disable={false} />
        </div>
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={GrLocation} name={'Tehsil'} type={'text'} required={false} placeholder={"Student Tehsil"} disable={false} />
        </div>
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={GrLocation} name={'postalAddress'} type={'text'} required={false} placeholder={"Postal Address"} disable={false} />
        </div>
        <div className='md:w-[40%] w-[90%]'>
          <Input Icon={GrLocation} name={'parmanentAddress'} type={'text'} required={false} placeholder={"Parmanent Address"} disable={false} />
        </div>
      </div>
    </div>

  </form>
  )
}

export default StudentInfoForm
