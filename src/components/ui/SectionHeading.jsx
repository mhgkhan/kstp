import { Signika_Font } from '@/app/layout'
import React from 'react'

const SectionHeading = ({ heading, paragraph }) => {
    return (
        <>
            <h2 className={`md:text-4xl text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-cyan-400 to-cyan-800  ${Signika_Font.className}`}>{heading}</h2>
            <p className="px-2 text-gray-600 text-lg my-3">
                {paragraph}
            </p>
        </>
    )
}

export default SectionHeading
