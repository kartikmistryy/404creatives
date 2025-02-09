"use client"

import React, { useEffect, useState } from 'react'
import {GrClose} from 'react-icons/gr'
import { motion } from 'framer-motion'

const NewsletterModal = ({closeModal}) => {

  return (
    <div className='w-screen h-screen z-[222] bg-transparent flex justify-center items-center fixed'>
      <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{ type: "spring", stiffness: 200, damping: 100}}
          style={{ boxShadow: "10px 14px 0px #000"}}
          className={`w-[450px] h-[275px] md:scale-100 scale-75 bg-white rounded-[20px] border-2 border-black`}>
          <span onClick={() => closeModal(false)} className='p-3 w-full h-10 flex items-start justify-end border-b-2 border-black'><GrClose className='cursor-pointer'/></span>
          <h1 className='font-vandoesburg font-bold text-6xl px-4 pt-8 pb-0 text-center'>SUBSCRIBE</h1>
          <p className='px-4 pb-2 -mt-4 text-lg'>Join the 404Club crew today - we've got tons of creative perks waiting for you!</p>
          <input type="email" placeholder='Email*' className='w-[410px] mx-4 border-2 border-black px-1.5 py-1 font-medium text-lg'/>
          <button type="submit" className='w-fit flex ml-auto mr-5 border-2 border-black px-6 py-1 my-2 text-sm font-extrabold active:bg-black active:text-white'>SUBSCRIBE</button>
      </motion.div>
    </div>
  )
}

export default NewsletterModal