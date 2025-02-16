import React from 'react'
import { Signika_Font } from '../layout'
import Link from 'next/link'
import Image from 'next/image'
import { CgPassword, CgProfile } from "react-icons/cg"
import { FaPaperPlane, FaTrophy, FaUserEdit } from 'react-icons/fa'
import { TiTickOutline } from "react-icons/ti";
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import SectionHeading from '@/components/ui/SectionHeading'

const page = () => {
  return <div>
    <section className='w-full bg-white shadow-md shadow-gray-500 rounded-md'>
      <div className='container mx-auto flex items-center justify-around flex-wrap-reverse'>

        <div className='text p-2 flex items-center justify-center flex-col'>
          <SectionHeading heading={"Welcome Back"} paragraph={" "} />
          {/* <h1 className={`md:text-4xl text-2xl font-bold my-1 text-center ${Signika_Font.className}`}>Welcome Back </h1> */}
          <h2 className={`md:text-3xl text-xl font-bold text-cyan-700 my-1 text-center ${Signika_Font.className}`}>Muhammad Hasnain </h2>
        </div>

        <div className='profile-image md:w-[180px] md:h-[210px] w-[100px] h-[120px] bg-cyan-50 border border-2 border-cyan-50 my-1 rounded-md shadow-sm shadow-gray-400'>
          <Image src={"/images/profile.jpg"} width={150} height={180} className='w-full h-full' alt='profile image' />
        </div>
      </div>
    </section>

    <section className='my-2 w-full bg-white' >
      <div className='container mx-auto'>
        {/* <h1 className='md:text-4xl text-2xl font-bold my-2 p-2'>Quick Links </h1> */}
        <SectionHeading heading={"Quick Links"} paragraph={"List of the links to access pages quickly."} />

        <div className='blocks flex flex-wrap items-center justify-start gap-1'>
          {
            Array.from([
              { link: "/candidate/userid/", icon: <CgProfile />, text: "View Profile" },
              { link: "/candidate/personalinfo/", icon: <FaUserEdit />, text: "Edit Profile" },
              { link: "/candidate/changepassword/", icon: <CgPassword />, text: "Change Password" },
              { link: "/candidate/apply/", icon: <FaPaperPlane />, text: "Apply for test" },
            ]).map((ele, ind) => {
              return <Link key={ind} href={ele.link} className='text-xl text-white hover:bg-cyan-900 md:w-[200px] w-[100px] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
                <span className='md:text-5xl text-2xl text-cyan-400'> {ele.icon} </span>
                <span className={`mt-1 font-bold ${Signika_Font.className}`}> {ele.text} </span>
              </Link>
            })
          }

        </div>
      </div>
    </section>

    <section className="my-2 w-full bg-white mt-4">
      <div className="container mx-auto">
        {/* <h1 className='md:text-4xl text-2xl font-bold my-2 p-2'>Analytics </h1> */}
        <SectionHeading heading={"Analytics"} paragraph={"Your recent work and achievements"} />
        <div className="blocks flex flex-wrap items-center justify-start gap-1">
          {
            Array.from([
              { link: "/candidate/tests/submittedtests/", icon: <AiOutlineLoading3Quarters />, count: 20, text: "Tests Submitted" },
              { link: "/candidate/tests/passedtests/", icon: <TiTickOutline />, count: 10, text: "Tests Passed" },
              { link: "/candidate/tests/achevements/", icon: <FaTrophy />, count: 15, text: "Positions acheived" }
            ]).map((ele, ind) => {
              return <Link key={ind} href={ele.link} className='text-xl text-cyan-900 hover:text-white bg-cyan-100 hover:bg-cyan-900 md:w-[350px] w-[95%] text-center rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3 flex items-center justify-center flex-col'>
                <span className='text-5xl text-cyan-500'> {ele.icon}  {ele.count}+ </span>
                <span className={`mt-1 font-bold ${Signika_Font.className}`}>{ele.text} </span>
              </Link>
            })
          }
        </div>
      </div>
    </section>

  </div>
}

export default page
