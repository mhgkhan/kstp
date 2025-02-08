"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import { FaArrowLeft, FaArrowRight, FaDashcube, FaPencilAlt, FaUser } from 'react-icons/fa'
import { GrDashboard, GrEdit, GrPin, GrStatusInfo, GrTest } from 'react-icons/gr'

const ProfileSidebar = () => {

    const [openedSidebar, setOpenedSidebar] = useState(false)

    return (
        <aside className={`sidebar transition-all duration-200 bg-cyan-900 h-full p-2 flex items-center justify-start flex-col gap-3 ${openedSidebar ? "md:w-[150px]" : "w-[80px]"}`}>
            <span className="w-full block openclosee-sidebar cursor-pointer hover:bg-gray-300 text-left p-3 bg-white rounded-md" onClick={() => setOpenedSidebar(!openedSidebar)}>
                {openedSidebar ? <FaArrowRight /> : <FaArrowLeft />}
            </span>

            <div className="mt-5">
                <Link href={'/'} className='my-3 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <GrDashboard className='text-2xl' />
                    {openedSidebar ? "Dashboard" : ""}
                </Link>
                <Link href={'/'} className='my-3 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <GrEdit className='text-2xl' />
                    {openedSidebar ? "Edit Info" : ""}
                </Link>
                <Link href={'/'} className='my-3 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <FaPencilAlt className='text-2xl' />
                    {openedSidebar ? "Test Apply" : ""}
                </Link>
                <Link href={'/'} className='my-3 flex w-full items-center justify-start gap-3 p-2 text-white bg-cyan-600 rounded-md font-bold'>
                    <GrStatusInfo className='text-2xl' />
                    {openedSidebar ? "Applications" : ""}
                </Link>
            </div>
        </aside>
    )
}

export default ProfileSidebar
