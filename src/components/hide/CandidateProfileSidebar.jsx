"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaCircleNotch, FaCopy, FaTrophy } from 'react-icons/fa'
import { GrDashboard, GrEdit, GrKey, } from 'react-icons/gr'

const CandidateProfileSidebar = () => {

    const [openedSidebar, setOpenedSidebar] = useState(false)

    return (
        <div className={`sidebar transition-all duration-200 bg-cyan-900 h-full p-2 flex items-center justify-start flex-col gap-3 ${openedSidebar ? "w-[160px]" : "w-[80px]"}`}>
            <span className="w-full block openclosee-sidebar cursor-pointer hover:bg-gray-300 text-left p-3 bg-white rounded-md" onClick={() => setOpenedSidebar(!openedSidebar)}>
                {openedSidebar ? <FaArrowRight /> : <FaArrowLeft />}
            </span>

            <div className="mt-5">
                {
                    Array.from([
                        { link: "/candidate", icon: <GrDashboard className='text-3xl' />, text: "Dashboard" },
                        { link: "/candidate/personalinfo", icon: <GrEdit className='text-3xl' />, text: "User Info" },
                        { link: "/candidate/changepassword", icon: <GrKey className='text-3xl' />, text: "Password" },
                        { link: "/candidate/apply", icon: <FaCopy className='text-3xl' />, text: "Apply" },
                        { link: "/candidate/applications/", icon: <FaCircleNotch className='text-3xl' />, text: "Applications" },
                        { link: "/candidate/tests/achevements", icon: <FaTrophy className='text-3xl' />, text: "Achevements" },
                    ]).map((ele, ind) => {
                        return <Link key={ind} href={ele.link} className='my-2 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                            {ele.icon}
                            {openedSidebar ? ele.text : ""}
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default CandidateProfileSidebar
