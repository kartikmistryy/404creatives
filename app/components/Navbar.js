// "use client"
// import React, { useEffect, useState } from 'react'
// import { Poppins, Dancing_Script, Unbounded } from 'next/font/google'
// import {AiOutlineClose} from 'react-icons/ai'
// import Image from 'next/image';
// import Link from 'next/link';

// const unbounded = Unbounded({
//   subsets: ['latin'], // Optional, you can specify the character subsets you need
//   weight: ['400', '700'], // Add the weights you plan to use
// });

// const dancingScript = Dancing_Script({
//   subsets: ['latin'], // Optional, you can specify the character subsets you need
//   weight: ['400', '700'], // Add the weights you plan to use
// });

// const poppins = Poppins({
//     subsets: ['latin'], // Choose the subset(s) you need
//     weight: ['400', '700'], // Add specific font weights
//     style: ['normal', 'italic'], // Add font styles
//     variable: '--font-noto-sans', // Optional: Define a CSS variable
//   });

// const Navbar = () => {

//   const [showMenu, setShowMenu] = useState(false)
//   const [isResponsive, setIsResponsive] = useState(false)

//   useEffect(() => {
//     window.innerWidth > 700 ? setIsResponsive(false): setIsResponsive(true)
//   }, [])

//   return (
//     <div className='w-full md:h-[10vh] h-16 md:px-10 px-5 flex items-center justify-start absolute top-0 right-0 z-10'>
//         <div style={{ transition: 'all ease 0.4s', display: showMenu ? 'flex': 'none'}} className={`absolute top-0 right-0 w-full h-[100vh] flex flex-col bg-[#f2f2f2] text-[#252222] items-end justify-start md:px-10 px-5 md:py-10 py-5 gap-10 ${!showMenu ? 'translate-x-[100vw] flex': 'translate-x-0'} z-[99]`}>
//           <button  onClick={() => {
//             setShowMenu((prev) => !prev)
//           }}>
//             <AiOutlineClose className='scale-150'/>
//           </button>
//           <ul className={`flex flex-col gap-5 items-end ${unbounded.className}`}>
//             <li className='font-medium md:text-[1.6vw] text-2xl'><a href="#">Home</a></li>
//             <li className='font-medium md:text-[1.6vw] text-2xl'><a href="#">About</a></li>
//             <li className='font-medium md:text-[1.6vw] text-2xl'><a href="#">Contact us</a></li>
//           </ul>
//         </div>

//         <Link href='/' className={`font-black w-fit flex items-center justify-center ${dancingScript.className}`}>
//           <Image width={100} height={100} src='/Logo/404.png'  alt='logo' className='md:w-14 md:h-14 w-10 h-10 md:mb-4 mb-2'/>
//         </Link>

//         <ul className={`${unbounded.className} lg:flex hidden flex-row justify-between md:gap-32 gap-10 w-fit md:text-[1.4vw] text-2xl font-medium ml-[10vw] }`}>
//             <li><a  href="#">Graphic Design</a></li>
//             <li><a href="/Illustrations">Illustration</a></li>
//             <li><a href="#">About</a></li>
//         </ul>

//         <span className='flex items-center justify-between w-fit md:gap-10 gap-0 ml-auto'>
//             <button 
//             className={`${unbounded.className} font-mono flex items-center justify-center md:py-[3px] py-[5px] px-[25px] rounded-3xl border-2 border-[#252222] font-medium md:text-[1.4vw] text-lg ${isResponsive ? 'scale-75': 'scale-100'}`}>Shop</button>
//             <button 
//             onClick={() => {
//               setShowMenu((prev) => !prev)
//             }}
//             className='md:text-4xl text-3xl p-0 m-0'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button>
//         </span>
//     </div>
//   )
// }

// export default Navbar

// New experiment

"use client"
import React, { useEffect, useState } from 'react'
import { Poppins, Dancing_Script, Unbounded } from 'next/font/google'
import {AiOutlineClose} from 'react-icons/ai'
import Image from 'next/image';
import Link from 'next/link';

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
    <div className='w-full h-20 flex absolute top-0 right-0 z-10'>
          {/* <div style={{ transition: 'all ease 0.4s', display: showMenu ? 'flex': 'none'}} className={`absolute top-0 right-0 w-full h-[100vh] flex flex-col bg-[#f2f2f2] text-[#252222] items-end justify-start md:px-10 px-5 md:py-10 py-5 gap-10 ${!showMenu ? 'translate-x-[100vw] flex': 'translate-x-0'} z-[99]`}>
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
          </div> */}

          <div style={{ transition: "all ease 0.3s"}} className={`absolute top-0 right-0 w-full h-[100vh] flex flex-col bg-[#f2f2f2] text-[#252222] items-end justify-start md:px-10 px-5 md:py-10 py-5 gap-10 z-[99] origin-right ${showMenu ? "scale-x-100" : "scale-x-0"} `}>
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


          <div className='w-full h-fit'>
            <div className='w-full md:h-[10vh] h-16 md:px-10 px-5 flex items-center justify-start '>
                <div className='w-full md:h-[10vh] h-16 flex items-center justify-start'>
                  <Link href='/' className={`font-black w-fit flex items-center justify-center ${dancingScript.className}`}>
                    <Image width={100} height={100} src='/Logo/404.png'  alt='logo' className='md:w-14 md:h-14 w-10 h-10 md:mb-4 mb-2'/>
                  </Link>

                  <ul className={`${unbounded.className} lg:flex hidden flex-row justify-between md:gap-32 gap-10 w-fit md:text-[1.4vw] text-2xl font-medium ml-[10vw]  }`}>
                      <li><a  href="#">Graphic Design</a></li>
                      <li><a href="/Illustrations">Illustration</a></li>
                      <li><a href="#">About</a></li>
                  </ul>

                  <span className='flex items-center justify-between w-fit md:gap-10 gap-0 ml-auto'>
                      <button 
                      className={`${unbounded.className} font-mono md:flex hidden items-center justify-center md:py-[3px] py-[5px] px-[25px] rounded-3xl border-2 border-[#252222] font-medium md:text-[1.4vw] text-lg md:scale-100 scale-75 `}>Shop</button>
                      <button 
                      onClick={() => {
                        setShowMenu((prev) => !prev)
                      }}
                      className='md:text-4xl text-3xl p-0 m-0'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 7a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 13a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg></button>
                  </span>
                </div>      
            </div>
            <div>
              <ul className={`${unbounded.className} lg:hidden flex flex-row justify-center gap-5 w-[100vw] text-[0.7rem] font-medium mx-auto px-8  }`}>
                        <li><a  href="#">Graphic Design</a></li>
                        <li><a href="/Illustrations">Illustration</a></li>
                        <li className='md:flex hidden'><a href="#">About</a></li>
                        <li className='flex md:hidden'><a href="#">Shop</a></li>
                    </ul>
              </div>
          </div>
    </div>
    
  )
}

export default Navbar