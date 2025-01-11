"use client"
import React, { useEffect, useState } from 'react'
import { Poppins, Dancing_Script, Unbounded } from 'next/font/google'
import {AiOutlineClose} from 'react-icons/ai'

const unbounded = Unbounded({
  subsets: ['latin'], // Optional, you can specify the character subsets you need
  weight: ['400', '700'], // Add the weights you plan to use
});

const dancingScript = Dancing_Script({
  subsets: ['latin'], // Optional, you can specify the character subsets you need
  weight: ['400', '700'], // Add the weights you plan to use
});

const poppins = Poppins({
    subsets: ['latin'], // Choose the subset(s) you need
    weight: ['400', '700'], // Add specific font weights
    style: ['normal', 'italic'], // Add font styles
    variable: '--font-noto-sans', // Optional: Define a CSS variable
  });

const Navbar = () => {

  const [showMenu, setShowMenu] = useState(false)
  const [isResponsive, setIsResponsive] = useState(false)

  useEffect(() => {
    window.innerWidth > 700 ? setIsResponsive(false): setIsResponsive(true)
  }, [])

  return (
    <div className='w-full h-[10vh] bg-gray-00 md:px-10 px-5 flex items-center justify-between absolute top-0 right-0 z-10'>
        <div style={{ transition: 'all ease 0.4s', display: showMenu ? 'flex': 'none'}} className={`absolute top-0 right-0 w-full h-[100vh] flex flex-col bg-[#f2f2f2] text-[#252222] items-end justify-start md:px-10 px-5 md:py-10 py-5 gap-10 ${!showMenu ? 'translate-x-[100vw] flex': 'translate-x-0'} z-[99]`}>
          <button  onClick={() => {
            setShowMenu((prev) => !prev)
          }}>
            <AiOutlineClose className='scale-150'/>
          </button>
          <ul className={`flex flex-col gap-5 items-end ${unbounded.className}`}>
            <li className='font-medium md:text-[1.6vw] text-2xl'><a href="#">Home</a></li>
            <li className='font-medium md:text-[1.6vw] text-2xl'><a href="#">About</a></li>
            <li className='font-medium md:text-[1.6vw] text-2xl'><a href="#">Contact us</a></li>
          </ul>
        </div>

        <h1 className={`font-black text-3xl ${dancingScript.className}`}>404</h1>

        <ul className={`${unbounded.className} flex flex-row justify-between gap-32 w-[50vw] md:text-[1.6vw] text-2xl font-medium mr-auto ml-[10vw] ${isResponsive ? 'hidden': 'flex'}`}>
            <li><a  href="#">Graphic Design</a></li>
            <li><a href="#">Illustration</a></li>
            <li><a href="#">About</a></li>
        </ul>

        <span className='flex items-center justify-between w-fit md:gap-10 gap-5'>
            <button 
            className={`${unbounded.className} font-mono flex items-center justify-center py-[3px] px-[30px] rounded-3xl border-2 border-gray-600 font-medium md:text-[1.6vw] text-2xl ${isResponsive ? 'scale-75': 'scale-100'}`}>Shop</button>
            <button 
            onClick={() => {
              setShowMenu((prev) => !prev)
            }}
            className='text-4xl'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button>
        </span>
    </div>
  )
}

export default Navbar