import SectionHeading from '@/components/ui/SectionHeading'
import React from 'react'
import { CgClose } from 'react-icons/cg'

import { TiLockClosedOutline, TiTickOutline } from "react-icons/ti";

const page = () => {
  return (
    <div className='p-2'>
      <section className='bg-white w-full my-1'>
        <div className='container mx-auto'>
          <SectionHeading heading={"Recent Applied Test"} paragraph={"Here is a list of all applications applied for the most recent tests that are waiting for last date"} />

          <div className='tests-container flex items-center justify-center flex-col gap-2'>
           
           {Array.from([1,2,3,4,5]).map((ele,ind)=>{
            return  <div key={ind} className='w-full my-1 p-1 odd:bg-cyan-100 flex items-center justify-between gap-2  border-b border-1 border-cyan-700'>
            <span className='bg-cyan-800 rounded-lg text-white font-bold p-3'>{ind+1}</span>
            <p className='text-lg text-gray-700 text-center'>Test Applied for / or test name etc </p>
            <p className='text-lg text-gray-700 text-center'>Institute </p>
            <p className='bg-red-800 rounded-lg text-white font-bold p-3 flex items-center justify-center gap-1 cursor-pointer mx-1'><CgClose className='font-bold' /></p>
          </div>
           })}

          </div>
        </div>
      </section>


      <section className='bg-white w-full my-4'>
        <div className='container mx-auto'>
          <SectionHeading heading={"Previus Applies"} paragraph={"Here is the list of your previus submitted applications etc."} />

          <div className='tests-container flex items-center justify-center flex-col gap-2'>
           
           {Array.from([1,2,3,4,5]).map((ele,ind)=>{
            return  <div key={ind} className='w-full my-1 p-1 odd:bg-green-200 flex items-center justify-between gap-2  border-b border-1 border-cyan-700'>
            <span className='bg-cyan-800 rounded-lg text-white font-bold p-3'>{ind+1}</span>
            <p className='text-lg text-gray-700 text-center'>Test Applied for / or test name etc </p>
            <p className='text-lg text-gray-700 text-center'>Institute </p>
            <p className='bg-green-800 rounded-lg text-white font-bold p-3 flex items-center justify-center gap-1 cursor-pointer mx-1'><TiTickOutline className='font-bold' /></p>
          </div>
           })}

          </div>
        </div>
      </section>


    </div>
  )
}

export default page
