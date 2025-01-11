"use client"
import React, { useEffect, useState } from 'react'

const Homepage = () => {

  const [isResponsive, setIsResponsive] = useState(false)

  useEffect(() => {
    window.innerWidth > 700 ? setIsResponsive(false) : setIsResponsive(true)
  })

  return (
    <div className='h-screen w-full'>
      <video className='object-cover w-full h-full' autoPlay loop muted src={`${isResponsive ? "./Phone.mp4" : "./Desktop.mp4"}`}></video>
    </div>
  )
}

export default Homepage