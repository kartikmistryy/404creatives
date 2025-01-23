import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

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
        <main className='md:px-10 px-5 py-20'>
            <h1 className='md:text-[7vw] h-full leading-[100%] text-3xl font-extralight'>GRAPHIC DESIGN <br /><i className='font-lovelace'>Portfolio</i></h1>

            <span className='flex items-center justify-between w-fit md:gap-10 gap-4 md:mt-20 mt-10'>
                <p className='md:text-4xl text-xl'>BRANDING</p>
                <button className='rounded-full'>
                    <Image 
                    className='md:w-36 w-20 h-full'
                    src="/rightArrow.png" alt='arrowIcon' width={200} height={200}/>
                </button>
            </span>

            <p className='md:w-2/5 w-full md:mt-10 mt-4 font-normal md:text-base text-sm'>We are a team of creative experts from Mumbai, India, having years of experience in the field of Graphic Design.</p>
        </main>

        <div className='p-4'>
            <Carousel className="flex flex-col relative pb-12">
                <CarouselContent>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='md:w-[500px] md:h-[500px] h-[450px] w-full rounded-xl object-fill' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <div className='flex flex-col gap-2'>
                            <Image className='md:w-[500px] md:h-[250px] w-full h-[200px] rounded-xl object-fill' src="https://images.pexels.com/photos/19942412/pexels-photo-19942412/free-photo-of-portrait-of-woman-in-hat-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                            <span className='flex flex-row gap-5'>
                                <Image className='w-[250px] h-[240px] rounded-xl object-fill' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                                <Image className='w-[250px] h-[240px] rounded-xl object-fill' src="https://images.pexels.com/photos/30056477/pexels-photo-30056477/free-photo-of-woman-with-la-sieta-bag-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                            </span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='md:w-[500px] md:h-[500px] h-[450px] w-full rounded-xl object-fill' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <div className='flex flex-col gap-2'>
                            <Image className='md:w-[500px] md:h-[250px] w-full h-[200px] rounded-xl object-fill' src="https://images.pexels.com/photos/19942412/pexels-photo-19942412/free-photo-of-portrait-of-woman-in-hat-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                            <span className='flex flex-row gap-5'>
                                <Image className='w-[250px] h-[240px] rounded-xl object-fill' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                                <Image className='w-[250px] h-[240px] rounded-xl object-fill' src="https://images.pexels.com/photos/30056477/pexels-photo-30056477/free-photo-of-woman-with-la-sieta-bag-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                            </span>
                        </div>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='md:w-[500px] md:h-[500px] h-[450px] w-full rounded-xl object-fill' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <div className='flex flex-col gap-2'>
                            <Image className='md:w-[500px] md:h-[250px] w-full h-[200px] rounded-xl object-fill' src="https://images.pexels.com/photos/19942412/pexels-photo-19942412/free-photo-of-portrait-of-woman-in-hat-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                            <span className='flex flex-row gap-5'>
                                <Image className='w-[250px] h-[240px] rounded-xl object-fill' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                                <Image className='w-[250px] h-[240px] rounded-xl object-fill' src="https://images.pexels.com/photos/30056477/pexels-photo-30056477/free-photo-of-woman-with-la-sieta-bag-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                            </span>
                        </div>
                    </CarouselItem>

                    
                </CarouselContent>
                <span className='absolute bottom-0 right-0 flex flex-row justify-start items-center w-[100px] bg-red-300 mb-5'>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-12" />
                </span>
            </Carousel>
        </div>

        <div className='flex md:flex-row flex-col gap-10 w-full md:px-10 px-5 py-10'>
            <div className='flex md:flex-row flex-col md:gap-10 gap-4 w-full'>
                <span>
                    <Image className='md:w-[500px] md:h-full w-[70%] mx-auto h-[300px]' src='/gd_newsletter.png' height={1000} width={1000} alt='img'/>
                </span>
                <span className='flex md:flex-col flex-row gap-5'>
                    <Image className='md:w-[300px] md:h-[300px] w-full h-[250px] rounded-xl' src="https://images.pexels.com/photos/29657241/pexels-photo-29657241/free-photo-of-vibrant-chinese-new-year-market-with-lanterns.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={500} width={500} alt='img'/>
                    <Image className='md:w-[300px] md:h-[300px] w-full h-[250px] rounded-xl' src="https://images.pexels.com/photos/30160371/pexels-photo-30160371/free-photo-of-colorful-umbrella-in-front-of-la-poste-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" height={500} width={500} alt='img'/>
                </span>
            </div>
            <div className='flex flex-col md:w-[80%] w-full'>
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
                    <p className='md:w-[80%] w-full mt-2 font-normal'>We are a team of creative experts from Mumbai, India, having years of experience in the field of Graphic Design.</p>
                </div>
            </div>
        </div>

        <div className='md:px-10 px-5 my-10'>
            <div className='flex flex-col md:w-[80%] w-full'>
                <span className='w-full h-20 flex flex-row items-center md:gap-16 gap-4'>
                    <h2 className='md:text-4xl text-xl font-medium'>PRINT DESIGN</h2>
                    <button className='rounded-full'>
                    <Image 
                    className='md:w-36 w-20 h-full'
                    src="/rightArrow.png" alt='arrowIcon' width={200} height={200}/>
                </button>
                </span>
                <p className='md:w-[70%] w-full mt-2 font-normal'>We are a team of creative experts from Mumbai, India, having years of experience in the field of Graphic Design.</p>
            </div>

            <Carousel className="flex flex-col w-full h-full relative pb-12 mt-10">
                <CarouselContent>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-xl object-cover object-center' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-xl object-cover object-center' src="https://images.pexels.com/photos/19942412/pexels-photo-19942412/free-photo-of-portrait-of-woman-in-hat-in-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                    </CarouselItem >
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-xl object-cover object-center' src="https://images.pexels.com/photos/19271544/pexels-photo-19271544/free-photo-of-women-in-coats-smiling-at-night.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                    </CarouselItem>

                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-xl object-cover object-center' src="https://images.pexels.com/photos/15422173/pexels-photo-15422173/free-photo-of-woman-wearing-a-headband-and-a-white-scarf-standing-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-xl object-cover object-center' src="https://images.pexels.com/photos/27598715/pexels-photo-27598715/free-photo-of-a-tray-with-cheese-jam-and-other-items-on-it.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt='img' width={500} height={500}/>
                    </CarouselItem >
                    <CarouselItem className="md:basis-1/3 basis-full">
                        <Image className='w-[600px] h-[350px] rounded-xl object-cover object-center' src="https://images.pexels.com/photos/29983706/pexels-photo-29983706/free-photo-of-charming-hilltop-village-in-bormes-les-mimosas.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt='img' width={500} height={500}/>
                    </CarouselItem>

                    
                </CarouselContent>
                <span className='absolute bottom-0 right-0 flex flex-row justify-start items-center w-[100px] bg-red-300 mb-5'>
                    <CarouselPrevious className="ml-16" />
                    <CarouselNext className="mr-12" />
                </span>
            </Carousel>
        </div>
    </div>
  )
}

export default GraphicDesign