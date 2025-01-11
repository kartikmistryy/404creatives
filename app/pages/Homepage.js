"use client"
import React, { useEffect, useState } from 'react'

const Homepage = () => {

  const [isResponsive, setIsResponsive] = useState(false)

  useEffect(() => {
    window.innerWidth > 700 ? setIsResponsive(false) : setIsResponsive(true)
  })

  return (
    <div className='w-full'>
      <video className='md:aspect-video aspect-auto w-full h-auto' autoPlay loop muted playsInline controls={false} src={`${isResponsive ? "./Phone.mp4" : "./Desktop.mp4"}`}></video>
    </div>
  )
}

export default Homepage