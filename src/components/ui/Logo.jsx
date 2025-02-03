import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Logo = () => {
    return (
        <Link href={`/`}>
            <div className="logo-area flex items-end justify-center gap-2 cursor-pointer">

                <div className="logo w-[70px] h-[70px] md:w-[80px] md:h-[80px] my-1 rounded-md">
                    <Image src={'/logo.png'} alt='KSTP LOGO' width={320} height={20} className='w-full h-full bg-white rounded-md' />
                </div>
                <div>
                    <p className="md:text-xl text-lg font-bold text-white underline">KHYBER STUDENTS</p>
                    <p className="md:text-xl text-lg font-bold text-white underline">TESTING PORTAL</p>
                </div>
            </div>
        </Link>
    )
}

export default Logo