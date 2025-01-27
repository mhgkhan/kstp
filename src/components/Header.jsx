"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GrClose, GrMenu } from "react-icons/gr"

const Header = () => {

    const [openedSidebar, setOpenedSidebar] = useState(false)


    return (
        <header className='md:p-0 p-1 header-web w-full bg-cyan-900'>
            <div className="container mx-auto flex md:flex-row flex-col md:items-end items-center justify-between">

                <div className="top-sidebar flex items-center justify-between md:w-auto w-full">
                    <div className="logo w-[80px] h-[80px] md:w-[100px] md:h-[100px]">
                        <Image src={'/logo.png'} alt='KSTP LOGO' width={150} height={150} className='w-full h-full bg-white rounded-md' />
                    </div>
                    <div className="menuButton md:hidden">
                        <button onClick={() => setOpenedSidebar(!openedSidebar)} className='cursor-pointer shadow-md shadow-cyan-900 hover:bg-cyan-700 hover:text-white  p-2 bg-white rounded-md text-3xl'>{openedSidebar ? <GrClose /> : <GrMenu />}</button>
                    </div>
                </div>

                <nav className='md:w-auto w-full'>
                    <ul className={`flex items-center justify-center md:gap-5 gap-2 md:flex-row flex-col md:p-0 h-0 overflow-hidden transition-all duration-300 ${openedSidebar?"h-[300px]":"h-0"} md:w-auto w-full`}>
                        <li className='md:w-auto w-full'>
                            <Link href={'/'} className='md:w-auto w-full block text-center  p-2 rounded-md md:text-white font-bold text-cyan-900 md:bg-none bg-white hover:bg-gray-100 hover:text-cyan-900'>HOME</Link>
                        </li>
                        <li className='md:w-auto w-full'>
                            <Link href={'/'} className='md:w-auto w-full block text-center  p-2 rounded-md md:text-white font-bold text-cyan-900 md:bg-none bg-white hover:bg-gray-100 hover:text-cyan-900'>Apply</Link>
                        </li>
                        <li className='md:w-auto w-full'>
                            <Link href={'/'} className='md:w-auto w-full block text-center  p-2 rounded-md md:text-white font-bold text-cyan-900 md:bg-none bg-white hover:bg-gray-100 hover:text-cyan-900'>Roll No</Link>
                        </li>
                        <li className='md:w-auto w-full'>
                            <Link href={'/'} className='md:w-auto w-full block text-center  p-2 rounded-md md:text-white font-bold text-cyan-900 md:bg-none bg-white hover:bg-gray-100 hover:text-cyan-900'>Result </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header
