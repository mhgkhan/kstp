import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <main >
            <section className='w-full bg-cyan-900'>
                <div className='container mx-auto sm:p-2'>
                    <div className='flex flex-col items-center justify-center py-20'>
                        <h1 className='text-5xl font-bold text-white'>404</h1>
                        <h2 className='text-4xl font-bold text-white'>Page Not Found</h2>
                        <p className='text-lg my-3 text-center text-gray-200'>
                            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                        </p>
                <Link href={"/"} className="p-4 w-auto rounded-md hover:bg-cyan-950 bg-cyan-800 text-yellow-500 font-bold my-5"> Back to home </Link>

                    </div>
                </div>
            </section>
        </main>
    )
}

export default NotFound
