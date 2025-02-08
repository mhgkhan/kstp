"use client"

import React, { useEffect, useState } from 'react'
import Logo from '../ui/Logo'
import { FaCaretDown, FaCaretUp, FaUser } from 'react-icons/fa'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const ProfileHeader = () => {

    const [openedLogout, setOpenedLogout] = useState(false)

    const pathname = usePathname()

    useEffect(() => {
        setOpenedLogout(false)
    }, [pathname])

    return (
        <header className='bg-cyan-900'>
            <div className="container mx-auto flex items-end justify-between relative">
                <Logo />
                <div className="logout-section relative">
                    <div onClick={() => setOpenedLogout(!openedLogout)} className="hover:bg-cyan-400 hover:text-black active:scale-50 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 p-2 openlogout  bg-cyan-600 rounded-md text-white font-bold">Profile {openedLogout ? <FaCaretUp /> : <FaCaretDown />}</div>
                    <div className={`${openedLogout ? "h-[100px] p-1" : "h-0 p-0"} dailog-items mt-5 absolute bg-cyan-500  top-6 rounded-md overflow-hidden`}>
                        <Link href={'/profile'} className='flex items-center justify-center gap-1 bg-cyan-700 rounded-md text-white font-bold p-2 my-1 '><FaUser /> Profile </Link>
                        <Link href={'/profile'} className='flex items-center justify-center gap-1 bg-cyan-700 rounded-md text-white font-bold p-2 my-1 '><FaUser /> Logout </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default ProfileHeader
