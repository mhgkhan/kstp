import React from 'react'
import { Signika_Font } from '../layout'

const page = () => {
  return <div>
    <section className='w-full bg-white shadow-md shadow-gray-500 rounded-md'>
      <div className='container mx-auto flex items-center justify-around flex-wrap'>

          <div className='text p-2 flex items-center justify-center flex-col'>
            <h1 className={`text-4xl font-bold my-1 ${Signika_Font.className}`}>Welcome Back </h1>
            <h2 className={`text-3xl font-bold text-cyan-700 my-1 ${Signika_Font.className}`}>Muhammad Hasnain </h2>
          </div>

          <div className='profile-image w-[180px] h-[210px] bg-cyan-50 my-1 rounded-md shadow-sm shadow-gray-400'></div>
      </div>


    </section>
  </div>
}

export default page
