import React from 'react'
import { Signika_Font } from '../layout'
import Link from 'next/link'

const page = () => {
  return <div>
    <section className='w-full bg-white shadow-md shadow-gray-500 rounded-md'>
      <div className='container mx-auto flex items-center justify-around flex-wrap-reverse'>

          <div className='text p-2 flex items-center justify-center flex-col'>
            <h1 className={`md:text-4xl text-2xl font-bold my-1 text-center ${Signika_Font.className}`}>Welcome Back </h1>
            <h2 className={`md:text-3xl text-xl font-bold text-cyan-700 my-1 text-center ${Signika_Font.className}`}>Muhammad Hasnain </h2>
          </div>

          <div className='profile-image w-[180px] h-[210px] bg-cyan-50 my-1 rounded-md shadow-sm shadow-gray-400'></div>
      </div>
    </section>

    <section className='my-2 w-full bg-white' >
      <div className='container mx-auto'>
        <h1 className='md:text-4xl text-2xl font-bold my-2 p-2'>Quick Links </h1>

        <div className='blocks flex items-center justify-center flex-wrap gap-3'>

            <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[30%] w-[90%] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3'>
              Home 
            </Link>
            <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[30%] w-[90%] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3'>
              Home 
            </Link>
            <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[30%] w-[90%] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3'>
              Home 
            </Link>
            <Link href={"/profile"} className='text-xl text-white hover:bg-cyan-900 md:w-[30%] w-[90%] text-center bg-cyan-800 rounded-md shadow-md shadow-cyan-600 m-1 mx-auto p-3'>
              Home 
            </Link>


        </div>
      </div>
    </section>

    Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim facere veritatis reiciendis aperiam consequuntur voluptas officiis provident atque eveniet, neque dolore, eos id accusamus optio necessitatibus modi iusto tenetur ab doloremque earum fugit quas praesentium tempore? Iste sint neque qui nemo eius rem quo ipsa, possimus fugit odit officiis, exercitationem, numquam libero. Minus, culpa quis assumenda, exercitationem blanditiis nostrum, earum deleniti beatae dolorum iusto aut odit ipsam facilis. Facilis aliquid commodi quod in, placeat deserunt, nostrum, vero amet dicta quam adipisci assumenda. Accusamus saepe debitis nulla! Obcaecati, beatae. Doloremque, placeat. Tenetur voluptatum dolorem corporis doloremque. Cupiditate enim nesciunt repellat reprehenderit numquam, exercitationem ipsa. Rem eos assumenda tempora. Numquam ipsam corrupti reprehenderit blanditiis suscipit tempore quam, placeat consequuntur, molestiae magnam ducimus odio fugiat? Rerum fugiat rem aut. Illo veritatis architecto animi cumque sit id reprehenderit quas sapiente! Hic architecto adipisci, numquam labore ipsa magnam! Eius delectus nostrum pariatur omnis quaerat perferendis consequatur architecto natus laboriosam est voluptate necessitatibus, quo debitis aspernatur quasi, illo illum non odit deleniti soluta, magni molestias fuga possimus id! Doloremque eveniet dignissimos non dolore eius quae ea facere sed! Assumenda alias voluptatum magnam delectus, aut dolor ad tenetur reprehenderit, doloremque sapiente id praesentium placeat suscipit distinctio aliquam voluptates quos! Et ut eum eius quia porro minima! Consequatur ipsam, incidunt aperiam reprehenderit nisi possimus quo repellendus nostrum iste, placeat minus, dolores quae. Voluptates quisquam qui, ipsa distinctio nulla quaerat rem placeat est consectetur ullam, odit ut, nisi suscipit. Eum itaque quam, excepturi beatae sint aspernatur eos, incidunt fugiat temporibus veniam animi quas fuga eaque accusamus error dolor suscipit repudiandae autem amet? Tempora, est? Placeat quisquam accusamus, nisi rem vero aspernatur asperiores qui aliquid voluptatibus sunt labore omnis impedit ducimus hic odio deleniti fugiat cumque quis itaque magni rerum perferendis voluptates. Provident nulla tempora et magni vel consequuntur perferendis.
  </div>
}

export default page
