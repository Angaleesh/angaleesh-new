import React from 'react'

const Loader = () => {
    return (
        <section className='bg-coreblack w-screen h-screen flex justify-center items-center text-white'>
            <div className="h-48 overflow-hidden">
                <div className="flex gap-5 h-16 overflow-hidden animate-fadeOut delay-[2s]">
                    <p className='text-4xl font-extralight animate-fadeIn1 '>Peeoniring</p>
                    <p className='text-4xl animate-fadeIn2 delay-500'>Creative</p>
                    <p className='text-4xl animate-fadeIn3 delay-1000 font-extralight'>Excellence</p>
                </div>
            </div>
        </section>
    )
}

export default Loader