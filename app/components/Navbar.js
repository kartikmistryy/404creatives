"use client"

import React, { useEffect, useState } from 'react'
import { Poppins, Dancing_Script, Unbounded, Chivo } from 'next/font/google'
import {AiOutlineClose} from 'react-icons/ai'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import Image from 'next/image';
import Link from 'next/link';

const chivo = Chivo({
  subsets: ['latin'], // Add subsets as needed
  weight: ['400'], // Specify weights (e.g., '400', '700') based on your needs
});

const dancingScript = Dancing_Script({
  subsets: ['latin'], // Optional, you can specify the character subsets you need
  weight: ['400', '700'], // Add the weights you plan to use
});

const Navbar = ({ linkTitles, links }) => {
  console.log(linkTitles, links)

  const [showMenu, setShowMenu] = useState(false)
  const [isResponsive, setIsResponsive] = useState(false)

  useEffect(() => {
    window.innerWidth > 700 ? setIsResponsive(false): setIsResponsive(true)
  }, [])

  return (
    <div className={`${chivo.className}  w-full h-20 flex absolute top-0 right-0 z-10`}>
          <div style={{ transition: "all ease 0.3s"}} className={`absolute top-0 right-0 w-full h-[100vh] flex flex-col bg-[#f2f2f2] text-[#252222] items-end justify-start md:px-12 px-5 md:py-8 py-5 gap-10  origin-bottom ${showMenu ? "opacity-100 translate-y-0 z-[99] pointer-events-auto" : "opacity-0 translate-y-10 z- pointer-events-none"} `}>
                <button  onClick={() => {
                  setShowMenu((prev) => !prev)
                }}>
                  <AiOutlineClose className='scale-150'/>
                </button>
                <ul className={`flex flex-col gap-5 items-end ${chivo.className}`}>
                  <li className='font-normal md:text-[1.6vw] text-2xl'><a href="/About">About</a></li>
                  <li className='font-normal md:text-[1.6vw] text-2xl'><a href="#">Contact us</a></li>
                  {
                    linkTitles &&  (
                      linkTitles.map((title, index) => {
                        return (
                          <li key={index} className='font-normal md:text-[1.6vw] text-2xl'><a href={`/${links[index]}`}>{title}</a></li>
                        )
                      })
                    )
                  }
                </ul>
          </div>


          <div className='w-full h-fit'>
            <div className='w-full md:h-[10vh] h-16 md:px-10 px-5 flex items-center justify-start'>
                <div className='w-full md:h-[10vh] h-16 flex items-center justify-between'>
                  <Link href='/' className='font-black w-fit flex items-center justify-start md:w-[200px]'>
                    <Image width={100} height={100} src='/Logo/404.png'  alt='logo' className='md:w-14 md:h-14 w-10 h-10 md:mb-4 mb-2'/>
                  </Link>

                  <ul className="lg:flex hidden flex-row items-center justify-evenly md:gap-24 gap-10 w-fit md:text-[1.1vw] text-xl font-medium ml-[-5vw]">
                      <li><a  href="/GraphicDesign">Graphic Design</a></li>
                      <li><a href="/Illustrations">Illustration</a></li>
                      <li><a href="/About">About</a></li>
                  </ul>

                  <span className='flex items-center justify-between md:w-[200px] w-fit md:gap-10 gap-0'>
                      <Link href='/Shop' 
                      className='font-mono md:flex hidden items-center justify-center md:py-[3px] py-[5px] md:px-[40px] px-[30px] rounded-3xl border-2 border-[#252222] font-medium md:text-[1.1vw] text-lg md:scale-100 scale-75'>SHOP</Link>
                      <button 
                      onClick={() => {
                        setShowMenu((prev) => !prev)
                      }}
                      className='text-3xl cursor-pointer'>
                        <HiOutlineMenuAlt4/>
                      </button>
                  </span>
                </div>      
            </div>
            <div>
              <ul className='lg:hidden flex flex-row justify-center gap-8 w-[100vw] text-[0.7rem] sm:text-[0.8rem] font-medium mx-auto px-8'>
                        <li><a  href="/GraphicDesign">Graphic Design</a></li>
                        <li><a href="/Illustrations">Illustration</a></li>
                        <li className='md:flex hidden'><a href="/About">About</a></li>
                        <li className='flex md:hidden'><a href="/Shop">Shop</a></li>
                    </ul>
              </div>
          </div>
    </div>
    
  )
}

export default Navbar