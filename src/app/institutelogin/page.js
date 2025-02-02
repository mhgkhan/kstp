import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Input from '@/components/ui/forms/Input'
import SubmitButton from '@/components/ui/forms/SubmitButton'
import SectionHeading from '@/components/ui/SectionHeading'
import Link from 'next/link'
import React from 'react'
import { FaKey, FaUser } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'


const page = () => {
    return (
        <>
            <main className='min-h-screen'>
                <Header />
                <article>
                    <section className="w-full bg-cyan-950">
                        <div className="container mx-auto">
                            <div className="instituteLoginarea w-full px-2 py-10">
                                <div className="md:w-[60%] w-full mx-auto bg-white shadow-md py-5 px-3 shadow-cyan-800 rounded-md">
                                    <SectionHeading heading={'Singin to institute access'} paragraph={'Enter your valid credientials!, also you have only two signin  attempts otherwise you will be blocked for 1 hour if incorrect. On the third incorrect attempt we will automatically send you password resetting email.'} />
                                    <form className="mt-3 w-full p-1">
                                        <Input Icon={FaUser} type={'text'} name={'id'} placeholder={"Insitute Id"} required={true} />
                                        <Input Icon={GrMail} type={'email'} name={'email'} placeholder={'Enter email'} required={true} />
                                        <Input Icon={FaKey} type={'password'} name={'password'} placeholder={'Password'} required={true} />
                                        <SubmitButton loading={false} loadingText={"Logging..."} text={'Login'} key={`1.2`} />
                                    </form>
                                    <div className="my-2 p-2 flex items-center justify-between flex-wrap">
                                        <p>Not have an account <a className='text-blue-600 line-through'>Signup</a></p>
                                        <p>Forget password <Link className='text-blue-700' href={"/"}>Click Here</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <Footer />
            </main>
        </>
    )
}

export default page
