import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

const Illustrations = () => {
  return (
    <div className='flex flex-col items-start justify-start h-full md:mt-[10vh] mt-16 w-full'>
        <div className='w-full h-full flex md:min-h-[80vh] min-h-auto justify-start items-start m-0 mt-5 md:m-0 p-0 overflow-hidden'>
            <Carousel className="p-0 relative h-full w-full flex m-0 scale-x-105 ">
                <CarouselContent className="p-0 h-full w-full m-0 -ml-1.5">
                    <CarouselItem>
                        <Image src='https://images.pexels.com/photos/30208102/pexels-photo-30208102/free-photo-of-historic-ruins-in-the-marrakech-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' width={2000} height={2000} alt='img' className='w-full min-h-full object-cover lg:aspect-auto aspect-square'/>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src='https://images.pexels.com/photos/27927887/pexels-photo-27927887/free-photo-of-a-large-square-with-people-walking-around.jpeg?auto=compress&cs=tinysrgb&w=1260& h=750&dpr=1' width={2000} height={2000} alt='img' className='w-full h-full object-cover aspect-video'/>
                    </CarouselItem>
                    <CarouselItem>
                        <Image src='https://images.pexels.com/photos/27927887/pexels-photo-27927887/free-photo-of-a-large-square-with-people-walking-around.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' width={2000} height={2000} alt='img' className='w-full h-full object-cover aspect-video'/>   
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="absolute top-1/2 md:left-16 left-5 bg-white text-gray-700 md:scale-100 scale-100"/>
                <CarouselNext className="absolute top-1/2 md:right-16 right-5 bg-white text-gray-700 md:scale-100 scale-100"/>
            </Carousel>
        </div>
        <div className="md:py-6 gap-10 w-full">
  <div className="flex w-full h-full flex-row gap-5 overflow-x-scroll md:px-10 px-5 scrollbar-hide py-5 md:p-0">
    <span className="flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] bg-blue-300 rounded-xl">
      <Image src="file.svg" height={300} width={300} alt="img" />
    </span>
    <span className="flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] bg-blue-300 rounded-xl">
      <Image src="file.svg" height={300} width={300} alt="img" />
    </span>
    <span className="flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] bg-blue-300 rounded-xl">
      <Image src="file.svg" height={300} width={300} alt="img" />
    </span>
    <span className="flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] bg-blue-300 rounded-xl">
      <Image src="file.svg" height={300} width={300} alt="img" />
    </span>
    <span className="flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] bg-blue-300 rounded-xl">
      <Image src="file.svg" height={300} width={300} alt="img" />
    </span>
    <span className="flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] bg-blue-300 rounded-xl">
      <Image src="file.svg" height={300} width={300} alt="img" />
    </span>
  </div>
</div>

    </div>
  )
}

export default Illustrations