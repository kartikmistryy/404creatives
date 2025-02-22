import Image from 'next/image'
import React from 'react'

const NirmalaCreation = () => {
  return (
    <div className='mt-24 md:mt-[10vh] md:px-10 px-5'>
        <div className='flex flex-row items-center justify-start gap-4 my-4'>
            <span>
                <Image src='/Branding/nirmala_logo.png' width={500} height={500} alt='nirmala_logo' className='w-fit h-12'/>
            </span>
            <span>
                <h1 className='text-base font-medium'>Nirmala Creation</h1>
                <p>@404creative.co.in</p>
            </span>
        </div>

        <main>
            <video src='/Branding/nirmala/1.mp4' autoPlay loop muted className='w-full h-auto'></video>
            <Image src='/Branding/nirmala/2.png' width={1000} height={1000} alt='nirmala' className='w-full h-auto'/>
            <video src='/Branding/nirmala/3.mp4' autoPlay loop muted className='w-full h-auto'></video>
            <Image src='/Branding/nirmala/4.png' width={1000} height={1000} alt='nirmala' className='w-full h-auto'/>
        </main>
    </div>
  )
}

export default NirmalaCreation