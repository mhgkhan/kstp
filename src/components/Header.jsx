"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { GrClose, GrMenu } from "react-icons/gr"
import Logo from './ui/Logo'
import { usePathname } from 'next/navigation'

const Header = () => {

    const [openedSidebar, setOpenedSidebar] = useState(false)

    const pathname = usePathname();
    // console.log(pathname);



    useEffect(() => { }, [pathname])

    return (
        <header className='md:p-0 p-1 header-web w-full bg-cyan-900'>
            <div className="container mx-auto flex md:flex-row flex-col md:items-end items-center justify-between">

                <div className="top-sidebar flex items-end justify-between md:w-auto w-full">
                    <Logo />
                    <div className="menuButton md:hidden">
                        <button onClick={() => setOpenedSidebar(!openedSidebar)} className='cursor-pointer shadow-md shadow-cyan-900 hover:bg-cyan-700 hover:text-white  p-2 bg-white rounded-md text-3xl'>{openedSidebar ? <GrClose /> : <GrMenu />}</button>
                    </div>
                </div>

                <nav className={`md:w-auto w-full md:h-auto h-0 md:overflow-auto transition-all duration-300 overflow-hidden ${openedSidebar ? "md:h-auto h-[300px]" : "md:h-auto h-0"}`}>
                    <ul className="flex w-full md:flex-row flex-col items-end justify-center gap-2 md:mt-0 mt-2">
                        <li className='md:w-auto w-full'>
                            <Link href={"/"} className={` md:w-auto w-full block p-2 hover:text-gray-900 hover:bg-gray-100 font-bold rounded-sm text-center ${pathname=="/"?"bg-gray-100 text-cyan-900":"bg-cyan-900 text-white"}`}>HOME</Link>
                        </li>
                        <li className='md:w-auto w-full'>
                            <Link href={"/candidate/"} className={` md:w-auto w-full block p-2 hover:text-gray-900 hover:bg-gray-100 font-bold rounded-sm text-center ${pathname=="/candidate"?"bg-gray-100 text-cyan-900":"bg-cyan-900 text-white"}`}>Candidate</Link>
                        </li>
                        <li className='md:w-auto w-full'>
                            <Link href={"/institute"} className={` md:w-auto w-full block p-2 hover:text-gray-900 hover:bg-gray-100 font-bold rounded-sm text-center ${pathname=="/institute"?"bg-gray-100 text-cyan-900":"bg-cyan-900 text-white"}`}>Institute</Link>
                        </li>
                        <li className='md:w-auto w-full'>
                            <Link href={"/admin"} className={` md:w-auto w-full block p-2 hover:text-gray-900 hover:bg-gray-100 font-bold rounded-sm text-center ${pathname=="/admin"?"bg-gray-100 text-cyan-900":"bg-cyan-900 text-white"}`}>Admin</Link>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
