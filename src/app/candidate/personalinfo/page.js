import StudentInfoForm from '@/components/ui/forms/StudentInfoForm'
import SectionHeading from '@/components/ui/SectionHeading'
import React from 'react'


const page = () => {
  return (
    <section className='w-full'>
      <div className='container mx-auto'>
        <SectionHeading heading={'About you!'} paragraph={'Enter your valid personal info.'} />
        <StudentInfoForm />
      </div>
    </section>
  )
}

export default page
