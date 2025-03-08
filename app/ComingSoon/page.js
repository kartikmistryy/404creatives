import React from 'react'
import { Chivo } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';

const chivo = Chivo({
  subsets: ["latin"], // Add subsets as needed
  weight: ["400"], // Specify weights (e.g., '400', '700') based on your needs
});

const ComingSoon = () => {
  return (
    <div className={`${chivo.className} w-full h-screen min-h-screen bg-[url(/comingSoon.gif)] bg-cover bg-center pt-[10vh] lg:pl-10 pl-5 relative`}>
        <div className='flex lg:flex-row flex-col justify-between w-full max-w-[1600px] h-full mx-auto'>
            <span className='flex flex-col justify-start items-start py-20 lg:w-2/3 sm:w-[75%] w-full'>
                <h1 className='lg:text-7xl sm:text-5xl text-3xl  font-semibold lg:leading-[130%] sm:leading-[170%] leading-[180%] tracking-wider pr-10 lg:pr-0'>WE'RE STILL PLUGGING THIS PAGE</h1>
                <p className='lg:text-xl text-lg w-full'>This page is still under construction! We're plugging it in the meantime, head back to the homepage or checkout our latest projects.</p>
            </span>

            <Image src="/Logo/404.png" width={1000} height={1000} alt='404Logo' className='w-[250px] h-[250px] mt-auto absolute bottom-0 right-0'/>
        </div>
    </div>
  )
}

export default ComingSoon