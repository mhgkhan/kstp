import SectionHeading from '@/components/ui/SectionHeading'
import React from 'react'

const page = () => {
  return (
    <div>
      <section className="w-full">
        <div className="container mx-auto">
            <SectionHeading heading={"Your Achievements"} paragraph={"You can see your acievemments history etc"} />
        </div>
      </section>
    </div>
  )
}

export default page
