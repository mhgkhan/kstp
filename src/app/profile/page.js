import React from 'react'
import { Signika_Font } from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import { CgKey, CgPassword, CgProfile } from "react-icons/cg"
import { FaPaperPlane, FaTrophy, FaUserEdit } from 'react-icons/fa'
import { TiTickOutline } from "react-icons/ti";
import {AiOutlineLoading3Quarters} from "react-icons/ai"

const page = () => {
  return <div>
    <section className='w-full bg-white shadow-md shadow-gray-500 rounded-md'>
      <div className='container mx-auto flex items-center justify-around flex-wrap-reverse'>

        <div className='text p-2 flex items-center justify-center flex-col'>
          <h1 className={`md:text-4xl text-2xl font-bold my-1 text-center ${Signika_Font.className}`}>Welcome Back </h1>
          <h2 className={`md:text-3xl text-xl font-bold text-cyan-700 my-1 text-center ${Signika_Font.className}`}>Muhammad Hasnain </h2>
        </div>

        <div className='profile-image md:w-[180px] md:h-[210px] w-[100px] h-[120px] bg-cyan-50 border border-2 border-cyan-50 my-1 rounded-md shadow-sm shadow-gray-400'>
          <Image src={"/images/profile.jpg"} width={150} height={180} className='w-full h-full' alt='profile image' />
        </div>
      </div>
    </section>

    <section className='my-2 w-full bg-white' >
      <div className='container mx-auto'>
        <h1 className='md:text-4xl text-2xl font-bold my-2 p-2'>Quick Links </h1>

        <div className='blocks flex flex-wrap items-center justify-start gap-1'>
          <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[200px] w-[100px] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
            <span className='md:text-5xl text-2xl text-cyan-400'> <CgProfile /> </span>
            <span className="mt-1 font-bold">View profile </span>
          </Link>
          <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[200px] w-[100px] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
            <span className='md:text-5xl text-2xl text-cyan-400'> <FaUserEdit /> </span>
            <span className="mt-1 font-bold">Edit Profile </span>
          </Link>
          <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[200px] w-[100px] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
            <span className='md:text-5xl text-2xl text-cyan-400'> <CgPassword /> </span>
            <span className="mt-1 font-bold">Change Password </span>
          </Link>
          <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[200px] w-[100px] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
            <span className='md:text-5xl text-2xl text-cyan-400'> <FaPaperPlane /> </span>
            <span className="mt-1 font-bold">Apply for test </span>
          </Link>
        </div>
      </div>
    </section>

    <section className="my-2 w-full bg-white mt-4">
      <div className="container mx-auto">
        <h1 className='md:text-4xl text-2xl font-bold my-2 p-2'>Analytics </h1>
        <div className="blocks flex flex-wrap items-center justify-start gap-1">
        <Link href={"/profile"} className='text-xl text-cyan-900 hover:text-white bg-cyan-100 hover:bg-cyan-900 md:w-[350px] w-[95%] text-center rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
            <span className='text-5xl text-cyan-500'> <AiOutlineLoading3Quarters />   10+ </span>
            <span className="mt-1 font-bold">Tests Submitted </span>
          </Link>
        <Link href={"/profile"} className='text-xl text-cyan-900 hover:text-white bg-cyan-100 hover:bg-cyan-900 md:w-[350px] w-[95%] text-center rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
            <span className='text-5xl text-cyan-500'> <TiTickOutline /> 10+ </span>
            <span className="mt-1 font-bold"> Tests Passed </span>
          </Link>
        <Link href={"/profile"} className='text-xl text-cyan-900 hover:text-white bg-cyan-100 hover:bg-cyan-900 md:w-[350px] w-[95%] text-center rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
            <span className='text-5xl text-cyan-500'> <FaTrophy /> 10+ </span>
            <span className="mt-1 font-bold"> Positions Achieved </span>
          </Link>
        </div>
      </div>
    </section>

  </div>
}

export default page
