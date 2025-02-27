import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
    return (
        <Link href={`/`} aria-label="Home">
            <div className="logo-area flex items-end justify-center gap-2 cursor-pointer" role="img" aria-label="KSTP Logo">

                <div className="logo w-[50px] h-[50px] md:w-[80px] md:h-[80px] my-1 rounded-md md:p-0 p-1">
                    <Image src={'/logo.png'} alt='KSTP LOGO' width={80} height={80} className='w-full h-full bg-white rounded-md' />
                </div>
                <div>
                    <p className="md:text-xl text-sm font-bold text-white underline">KHYBER STUDENTS</p>
                    <p className="md:text-xl text-sm font-bold text-white underline">TESTING PORTAL</p>
                </div>
            </div>
        </Link>
    )
}

export default Logo