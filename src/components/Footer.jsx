import React from 'react'
import Logo from './ui/Logo'
import { FaFacebook, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa"
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full md:px-0 px-2 bg-cyan-900 py-2'>
        <div className="container mx-auto">
            <div className="flex items-center justify-around py-3 flex-wrap">
                <Logo />
                <div className="content-foote">
                    <h4 className="text-xl font-bold text-white">Social Links </h4>
                    <div className="links flex flex-wrap gap-2 mt-2">
                    <Link href={'/'} className='text-xl'><FaFacebook className=' text-white' /></Link>
                    <Link href={'/'} className='text-xl '><FaYoutube className='text-white' /></Link>
                    <Link href={'/'} className='text-xl'><FaLinkedin className=' text-white' /></Link>
                    <Link href={'/'} className='text-xl'><FaWhatsapp className=' text-white' /></Link>
                </div>
                </div>
            </div>

            <div className="footer-para flex items-center justify-around flex-wrap gap-3 mt-3">
                <p className='text-lg text-center text-white'>Copyright&copy; Allrights Reserved 2025 BY <Link href={"https://ghaznaprogrammar.com"}>GHAZNAAS</Link></p>
                <div className="links flex flex-wrap gap-2">
                    <Link href={'/'} className='text-xl'><FaFacebook className=' text-white' /></Link>
                    <Link href={'/'} className='text-xl'><FaLinkedin className=' text-white' /></Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
