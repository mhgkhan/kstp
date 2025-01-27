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

                <div className="top-sidebar flex items-end justify-between md:w-auto w-full">
                    <div className="logo-area flex items-end justify-center gap-2">

                        <div className="logo w-[70px] h-[70px] md:w-[80px] md:h-[80px] my-1 ">
                            <Image src={'/logo.png'} alt='KSTP LOGO' width={70} height={70} className='w-full h-full bg-white rounded-md' />
                        </div>
                        <div>
                            <p className="md:text-xl text-lg font-bold text-center text-white underline">KHYBER STUDENTS</p>
                            <p className="md:text-xl text-lg font-bold text-center text-white underline">TESTING PORTAL</p>
                        </div>
                    </div>
                    <div className="menuButton md:hidden">
                        <button onClick={() => setOpenedSidebar(!openedSidebar)} className='cursor-pointer shadow-md shadow-cyan-900 hover:bg-cyan-700 hover:text-white  p-2 bg-white rounded-md text-3xl'>{openedSidebar ? <GrClose /> : <GrMenu />}</button>
                    </div>
                </div>

                <nav className={`md:w-auto w-full md:h-auto h-0 md:overflow-auto transition-all duration-300 overflow-hidden ${openedSidebar ? "md:h-auto h-[300px]" : "md:h-auto h-0"}`}>
                    <ul className="flex w-full md:flex-row flex-col items-end justify-center gap-2 md:mt-0 mt-2">
                        {
                            Array.from(["home", "apply", "result"]).map((ele, ind) => <li key={ind} className='md:w-auto w-full md:my-0 my-1'>
                                <Link href={`/${ele}`} className={`md:w-auto w-full block p-2 text-white hover:text-gray-900 hover:bg-gray-100 font-bold rounded-sm text-center`}>{ele.toUpperCase()}</Link>
                            </li>)
                        }
                    </ul>
                </nav>

            </div>
        </header>
    )
}

export default Header
