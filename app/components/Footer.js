import Link from 'next/link'
import React from 'react'
import {FaInstagram, FaLinkedin, FaTwitter} from 'react-icons/fa'
import { Chivo } from 'next/font/google';


const chivo = Chivo({
  subsets: ['latin'], // Add subsets as needed
  weight: ['400'], // Specify weights (e.g., '400', '700') based on your needs
});

const Footer = () => {
  return (
    <div className={`${chivo.className} bg-[#1e1e1e]`}>
        <div className={`w-full h-full md:px-10 px-5 py-20 text-[#f2f2f2] flex md:flex-row flex-col justify-between md:gap-0 gap-10`}>
            <div className='w-full h-fit flex flex-col md:gap-8 gap-2'>
                <h2 className='font-normal text-xl text-gray-100'>Need help?</h2>
                <Link className='font-medium underline underline-offset-2 text-gray-300 cursor-pointer' href="#">Contact us</Link>
            </div>

            <div className='w-full h-fit flex flex-col md:gap-8 gap-2'>
                <h2 className='font-normal text-xl text-gray-100'>Get in touch</h2>
                <span className='flex flex-col md:gap-5 gap-2'>
                    <Link className='font-medium underline underline-offset-2 text-gray-300 cursor-pointer'  href="#">404creative.co@gmail.com</Link>
                    <p>+91 98 33 26 7464</p>
                </span>
            </div>

            <div className='w-full h-fit flex flex-col md:gap-8 gap-2'>
                <h2 className='font-normal text-xl text-gray-100'>Follow us</h2>
                <span className='flex flex-row gap-6'>
                    <Link href='https://www.instagram.com/404creative.co.in'><FaInstagram className='text-2xl cursor-pointer'/></Link>
                    <Link href='https://www.linkedin.com/company/404-creatives/'><FaLinkedin className='text-2xl cursor-pointer'/></Link>
                    <Link href='https://www.threads.net/@404creative.co.in'><FaTwitter className='text-2xl cursor-pointer'/></Link>
                </span>
            </div>

            <div className='w-full h-fit flex flex-col md:gap-8 gap-2'>
                <h2 className='font-normal text-xl text-gray-100'>Subscribe to newletter</h2>
                <span className='flex flex-col items-start gap-4 cursor-pointer'>
                    <input className='px-3 py-1.5 text-sm text-[#252222] rounded-full' type='text' placeholder='Type your email'/>
                    <button className='border-[1px] border-[#f2f2f2] px-6 py-1 font-medium active:bg-[#f2f2f2] active:text-[#252222] rounded-full'>Subscribe</button>
                </span>
            </div>
        </div>
        <span className='w-full h-10 flex'>
            <p className='text-center w-full font-normal md:text-base text-sm  text-white'>@404creative.co.in</p>
        </span>
    </div>
  )
}

export default Footer