"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCircleNotch, FaCopy, FaTrophy } from 'react-icons/fa'
import { GrDashboard, GrEdit, } from 'react-icons/gr'

const ProfileSidebar = () => {

    const [openedSidebar, setOpenedSidebar] = useState(false)

    return (
        <div className={`sidebar transition-all duration-200 bg-cyan-900 h-full p-2 flex items-center justify-start flex-col gap-3 ${openedSidebar ? "w-[150px]" : "w-[80px]"}`}>
            <span className="w-full block openclosee-sidebar cursor-pointer hover:bg-gray-300 text-left p-3 bg-white rounded-md" onClick={() => setOpenedSidebar(!openedSidebar)}>
                {openedSidebar ? <FaArrowRight /> : <FaArrowLeft />}
            </span>

            <div className="mt-5">
                <Link href={'/profile'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <GrDashboard className='text-3xl' />
                    {openedSidebar ? "Dashboard" : ""}
                </Link>
                <Link href={'/profile/personalinfo'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <GrEdit className='text-3xl' />
                    {openedSidebar ? "Edit Info" : ""}
                </Link>
                <Link href={'/profile/personalinfo'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <GrEdit className='text-3xl' />
                    {openedSidebar ? "Password" : ""}
                </Link>
                <Link href={'/profile/apply'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <FaCopy className='text-3xl' />
                    {openedSidebar ? "Test Apply" : ""}
                </Link>
                <Link href={'/profile/apply'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <FaCopy className='text-3xl' />
                    {openedSidebar ? "Test Apply" : ""}
                </Link>
                <Link href={'/profile/apply'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <FaCopy className='text-3xl' />
                    {openedSidebar ? "Test Apply" : ""}
                </Link>
                <Link href={'/profile/applications'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <FaCircleNotch className='text-3xl' />
                    {openedSidebar ? "Applications" : ""}
                </Link>
                <Link href={'/profile/applications'} className='my-5 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <FaTrophy className='text-3xl' />
                    {openedSidebar ? "Achieveds" : ""}
                </Link>
            </div>
        </div> 
    )
}

export default ProfileSidebar
