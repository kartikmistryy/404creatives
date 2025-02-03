"use client"
import React from 'react'
import { BsArrowRight, BsDownload } from 'react-icons/bs'
import { motion, useScroll, useTransform } from 'framer-motion'

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

import { Chivo } from 'next/font/google'

const chivo = Chivo({
  subsets: ['latin'], // Add subsets as needed
  weight: ['400'], // Specify weights (e.g., '400', '700') based on your needs
});


const GraphicDesign = () => {

  return (
    <div className={`${chivo.className} mt-16`}>
        <main className='md:px-10 px-5 pt-20 pb-10'>
            <h1 className='md:text-[7vw] h-full leading-[100%] text-3xl font-extralight'>GRAPHIC DESIGN <br /><i className='font-lovelace'>Portfolio</i></h1>

            <span className='flex items-center justify-between w-fit md:gap-10 gap-4 md:mt-20 mt-10'>
                <p className='md:text-4xl text-xl'>BRANDING</p>
                <button className='rounded-full'>
                    <Image 
                    className='md:w-36 w-20 h-full'
                    src="/rightArrow.png" alt='arrowIcon' width={200} height={200}/>
                </button>
            </span>

            <p className='md:w-2/5 w-full md:mt-10 mt-4 font-normal md:text-base text-sm'>Together, we bring your hand your brand to life. By blending your vision with our creativity, we craft vibrant identities that stand out and leave a lasting impact.</p>
        </main>

        <div className='p-4'>
            <Carousel className="flex flex-col relative pb-12">
                <CarouselContent>
                    <CarouselItem className="md:basis-1/4 basis-full">
                        <Image className='md:w-[400px] md:h-[370px] h-[370px] w-full rounded-xl object-fill' src="/Branding/1.png" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-full">
                        <Image className='md:w-[400px] md:h-[370px] h-[370px] w-full rounded-xl object-fill' src="/Branding/2.png" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-full">
                        <div className='flex flex-col gap-2'>
                            <Image className='md:w-[400px] w-full h-[180px] rounded-xl object-fill' src="/Branding/3.png" alt='img' width={500} height={500}/>
                            <Image className='w-[500px] h-[180px] rounded-xl object-fill' src="/Branding/4.png" alt='img' width={500} height={500}/>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-2/5 basis-full">
                        <Image className='md:w-[400px] md:h-[370px] h-[370px] w-full rounded-xl object-fill' src="/Branding/5.png" alt='img' width={500} height={500}/>
                    </CarouselItem>
                </CarouselContent>
                <span className='absolute bottom-0 right-0 flex flex-row justify-start items-center w-[100px] bg-red-300 mb-5'>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-12" />
                </span>
            </Carousel>
        </div>
        <div className='flex md:flex-row flex-col-reverse gap-10 w-full md:px-10 px-5 py-10 relative'>
            <div className='flex md:flex-row flex-col md:gap-10 gap-4 w-full relative'>
                <span className='w-full h-full basis-2/3 px-10'>
                    <Image className='md:w-[500px] md:h-full w-[70%] mx-auto h-[300px]' src='/gd_newsletter.png' height={1000} width={1000} alt='img'/>
                </span>
                <span className='relative md:flex md:flex-col grid grid-cols-2 md:gap-5 gap-2 h-full w-full basis-1/3'>
                    <motion.img 
                    initial={{ translateX: -50 }}
                    whileInView={{ translateX: 0 }}
                    transition={{ duration: 2 }} className='md:w-[280px] md:h-auto w-full h-[200px] md:absolute top-0 right-4' src="/Newsletter/4.png" height={500} width={500} alt='img'/>
                    <motion.img 
                    initial={{ translateX: 100 }}
                    whileInView={{ translateX: 0 }}
                    transition={{ duration: 2 }}
                    className='md:w-[280px] md:h-auto w-full h-[200px] md:absolute top-[30px]' src="/Newsletter/3.png" height={500} width={500} alt='img'/>
                    <motion.img 
                    initial={{ translateY: -30, translateX: 30 }}
                    whileInView={{ translateY: 0, translateX: 0 }}
                    transition={{ duration: 2 }}
                    className='md:w-[280px] md:h-auto  w-full h-[200px] md:absolute top-[30%] right-10' src="/Newsletter/2.png" height={500} width={500} alt='img'/>
                    <motion.img 
                    initial={{ translateY: -30 }}
                    whileInView={{ translateY: 0 }}
                    transition={{ duration: 2 }}
                    className='md:w-[280px] md:h-auto w-full h-[200px] md:absolute top-[50%] -right-2' src="/Newsletter/1.png" height={500} width={500} alt='img'/>
                </span>
            </div>
            <div className='flex flex-col md:w-[80%] w-full mt-10'>
                <span className='flex md:flex-col flex-row gap-4'>
                    <h2 className='md:text-4xl text-xl font-medium'>EMAIL DESIGN</h2>
                    <button className='rounded-full'>
                        <Image 
                        className='md:w-36 w-20 h-full'
                        src="/rightArrow.png" alt='arrowIcon' width={200} height={200}/>
                    </button>
                </span>
                <div className='flex flex-col mt-10'>
                    <span className='flex flex-row items-center justify-start gap-2 '>
                        <Image className='h-8 w-8 rounded-full' src="https://images.pexels.com/photos/7915359/pexels-photo-7915359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width={200} height={200} alt='img'/>
                        <p className='text-md font-medium'>404CREATIVE.CO.IN</p>
                    </span>
                    <p className='md:w-[80%] w-full mt-2 font-normal'>Reach your audience with beutifully crafted emails - completely free to send. We design, you  connect. Simple, effective and impactful.</p>
                </div>
            </div>
        </div>

        <div className='md:px-10 px-5 my-16'>
            <div className='flex flex-col md:w-[80%] w-full'>
                <span className='w-full h-20 flex flex-row items-center md:gap-16 gap-4'>
                    <h2 className='md:text-4xl text-xl font-medium'>PRINT DESIGN</h2>
                    <button className='rounded-full'>
                    <Image 
                    className='md:w-36 w-20 h-full'
                    src="/rightArrow.png" alt='arrowIcon' width={200} height={200}/>
                </button>
                </span>
                <p className='md:w-[70%] w-full md:mt-2 mt-0 font-normal'>Get your design in hand and feel the difference. From brochures and flyers to custom invitations, we bring your vision to life with high-quality prints that leave a lasting </p>
            </div>

            <Carousel className="flex flex-col w-full h-full relative pb-12 mt-10">
                <CarouselContent>
                    <CarouselItem className="md:basis-2/5 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-[5px] object-cover object-center' src="/Print/1.png" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/4 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-[5px] object-cover object-center' src="/Print/2.png" alt='img' width={500} height={500}/>
                    </CarouselItem >
                    <CarouselItem className="md:basis-2/4 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-[5px] object-cover object-center' src="/Print/3.png" alt='img' width={500} height={500}/>
                    </CarouselItem>
                </CarouselContent>
                <span className='absolute bottom-0 right-0 flex flex-row justify-start items-center w-[100px] bg-red-300 mb-5'>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-12" />
                </span>
            </Carousel>
        </div>

        <div className='md:px-10 px-5 my-10'>
            <div className='flex flex-col md:w-[80%] w-full'>
                <span className='w-full h-20 flex flex-row items-center md:gap-16 gap-4'>
                    <h2 className='md:text-4xl text-xl font-medium'>WEB DESIGN</h2>
                    <button className='rounded-full'>
                    <Image 
                    className='md:w-36 w-20 h-full'
                    src="/rightArrow.png" alt='arrowIcon' width={200} height={200}/>
                </button>
                </span>
                <p className='md:w-[55%] w-full mt-2 font-normal'>Get a website that's as unique as your brand. We create sleek, responsive designs that captivate and convert-on any device. <br/> Let's build something great together. </p>
            </div>

            <div className='relative md:flex md:flex-row grid grid-cols-3 items-end justify-between my-10 min-h-[400px] max-w-[60%] mx-auto'>
                <motion.img
                initial={{ translateX: -30 }}
                whileInView={{ translateX: 0 }}
                transition={{ duration: 1 }} 
                src='/Webdes/tablet.png' className='md:w-[180px] md:h-[280px] w-[350px] h-[250px] col-span-1 mt-auto z-20'/>
                <img
                src='/Webdes/desktop.png' className='md:w-[500px] md:h-full w-[350px] h-[250px] col-span-1 absolute left-1/2 translate-x-[-50%] z-0'/>
                <motion.img
                initial={{ translateX: 30 }}
                whileInView={{ translateX: 0 }}
                transition={{ duration: 1 }} 
                src='/Webdes/laptop.png' className='md:w-[300px] md:h-full w-[350px] h-[250px] col-span-1 z-20'/>
                <motion.img
                initial={{ translateX: 30 }}
                whileInView={{ translateX: 0 }}
                transition={{ duration: 1 }} 
                src='/Webdes/phone.png' className='md:w-[80px] md:h-[150px] w-[150px] h-[100px] col-span-1 z-20'/>
            </div>
        </div>

        <div className='md:px-10 px-5 my-16'>
            <div className='flex flex-col md:w-[80%] w-full'>
                <span className='w-full h-20 flex flex-row items-center md:gap-16 gap-4'>
                    <h2 className='md:text-4xl text-xl font-medium'>CONTACT US</h2>
                    <button className='rounded-full'>
                    <Image 
                    className='md:w-36 w-20 h-full'
                    src="/rightArrow.png" alt='arrowIcon' width={200} height={200}/>
                </button>
                </span>
                <p className='md:w-[55%] w-full mt-2 font-normal'>No hidden charges-choose what you need, from custom designs to tailored packages. Download our rate card for full transparency and clear pricing for your brand's needs.</p>
            </div>

            <div className='flex md:flex-row flex-col justify-center gap-10 my-10'>
               <span className='flex flex-row items-end gap-4'>
                    <img src='/contactus/1.png' alt='img' className='md:w-[35vw] w-[90%] h-full'/>
                    <BsDownload className='text-xl'/>
               </span>
               <span className='flex flex-row items-end gap-4'>
                <img src='/contactus/2.png' alt='img' className='md:w-[35vw] w-[90%] h-full'/>
                <BsDownload className='text-xl'/>
               </span>
            </div>
        </div>
    </div>
  )
}

export default GraphicDesign