import Image from 'next/image'
import React from 'react'

const Branding = () => {
  return (
    <div className='mt-24 md:mt-[10vh]'>
        <div className='w-full md:h-[90vh] h-full flex md:flex-row flex-col items-start border-t-[1px] border-black'>
            <div className='w-full h-full flex flex-col justify-between items-start  border-r-[1px] border-black'>
                <main className='flex flex-col gap-2 md:px-10 px-5 md:pt-[14vh] pt-10 justify-center min-h-[350px]'>
                    <h2 className='md:text-[3.8vw] text-[2rem]'>New</h2>
                    <h1 className='md:text-[5rem] text-[3.2rem] leading-[100%] md font-medium'>NIRMALA <br /> CREATION</h1>
                    <h4 className='md:text-2xl text-xl md:w-2/3 w-full font-medium py-4'>BRANDING + PACKAGING + WEBSITE + EXTRAS</h4>
                </main>
                <span className='border-t-[1px] border-black w-full h-fit md:px-10 px-5 flex items-center justify-between py-6'>
                    <p className='md:text-lg text-sm'>By Jacqueline Thompson</p>
                    <p lassName='md:text-lg text-sm'>reallygreatsite.com</p>
                </span>
            </div>
            <div className='w-full h-full'>
                <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover' src="/Branding/Header.png" />
            </div>
        </div>

        <div className='w-full md:h-[80vh] h-full flex md:flex-row-reverse flex-col items-start'>
            <div className='w-full h-full flex flex-col justify-between items-start  border-t-[1px] border-black'>
                <main className='flex flex-col md:px-10 px-5 gap-2 h-full w-full items-start border-b-[1px] border-black py-10 justify-center min-h-[350px]'>
                    <h1 className='md:text-[5rem] text-[3.2rem] leading-[100%] md font-medium'>TRUST CONSULT GROUP</h1>
                    <h4 className='md:text-2xl text-xl  md:w-2/3 w-full font-medium py-4'>BRANDING + PPT TEMPLATE + MARKETING MATERIAL</h4>
                </main>
               <span className='md:px-10 px-5 w-full h-full flex flex-col items-start justify-center md:gap-6 gap-2 md:pt-0 py-10'>
                    <h3 className='text-2xl font-medium'>OVERVIEW</h3>
                    <p className='text-lg'>A complete brand identity for Trust Consultant Group, including brand guidelines, stationery and PowerPoint templates. The design focuses on professionalism and consistency, reflecting the company&apos;s core values of trust and expertise</p>
               </span>
            </div>
            <div className='w-full h-full border-t-[1px] border-r-[1px] border-black'>
                <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover' src="https://images.pexels.com/photos/30632452/pexels-photo-30632452/free-photo-of-young-man-exploring-nature-by-a-serene-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
            </div>
        </div>

        <div className='w-full md:h-[80vh] h-full flex md:flex-row flex-col items-start border-t-[1px] border-black'>
            <div className='w-full h-full flex flex-col justify-between items-start'>
                <main className='flex flex-col md:px-10 px-5 py-10 h-full w-full items-start justify-center min-h-[350px] gap-2 border-b-[1px] border-black'>
                    <h1 className='md:text-[5rem] text-[3.2rem] leading-[100%] md font-medium'>AL NUMUU</h1>
                    <h4 className='md:text-2xl text-xl md:w-2/3 w-full font-medium py-4'>BRANDING + MARKETING + STATIONARY</h4>
                </main>
               <span className='md:px-10 px-5 py-10 w-full h-full flex flex-col items-start justify-center md:gap-6 gap-2'>
                    <h3 className='text-2xl font-medium'>OVERVIEW</h3>
                    <p className='text-lg'>A full brand identity for AL Nummu, incorporating logo design, brand guidelines, marketing materials, and stationery, focused on clarity, professionalism and visual impact</p>
               </span>
            </div>
            <div className='w-full h-full flex flex-row border-l-[1px] border-black'>
                <span className='flex flex-col basis-1/2'>
                    <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover border-b-[1px] border-black' src="/Branding/al_nummu1.png" />
                    <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover' src="/Branding/al_nummu2.png" />
                </span>
                <span className='basis-1/2 border-l-[1px] border-black'>
                    <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover' src="/Branding/al_nummu3.png" />
                </span>
            </div>
        </div>

        <div className='w-full md:h-[80vh] h-full flex md:flex-row-reverse flex-col items-start border-t-[1px] border-black'>
            <div className='w-full h-full flex flex-col justify-between items-start'>
                <main className='flex flex-col md:px-10 px-5 h-full w-full items-start justify-center min-h-[350px] gap-2 border-b-[1px] border-black'>
                    <h1 className='md:text-[5rem] text-[3.2rem] leading-[100%] md font-medium'>FOOTY</h1>
                    <h4 className='md:text-2xl text-xl md:w-2/3 w-full font-medium py-4'>BRANDING + WEBSITE + EXTRAS</h4>
                </main>
               <span className='md:px-10 px-5 w-full h-full flex flex-col items-start justify-center md:gap-6 gap-2 py-10'>
                    <h3 className='text-2xl font-medium'>OVERVIEW</h3>
                    <p className='text-lg'>Footy&apos;s brand identity includes a custom logo, brand guidelines, marketing materials, stationrey and a user-friendly website, all designed to be modern dynamic and professional.</p>
               </span>
            </div>
            <div className='w-full h-full border-r-[1px] border-black'>
                <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover' src="/Branding/footy.jpg" />
            </div>
        </div>

        <div className='w-full md:h-[80vh] h-full flex md:flex-row flex-col items-start border-t-[1px] border-black'>
            <div className='w-full h-full flex flex-col justify-between items-start border-r-[1px] border-black'>
                <main className='flex flex-col md:px-10 px-5 h-full w-full items-start justify-center min-h-[350px] gap-2 border-b-[1px] border-black basis-1/2'>
                    <h1 className='md:text-[5rem] text-[3.2rem] leading-[100%] md font-medium'>BAKE "n" CAKE</h1>
                    <h4 className='md:text-2xl text-xl md:w-2/3 w-full font-medium py-4'>BRANDING + WEBSITE + PACKAGING + STATIONARY</h4>
                </main>
               <span className='md:px-10 px-5 py-10 w-full h-full flex flex-col items-start justify-center gap-6 basis-1/2'>
                    <h3 className='text-2xl font-medium'>OVERVIEW</h3>
                    <p className='text-lg'>A full brand identity for Al Nummu, incorporating logo design, brand guidelines, marketing materials and stationery, focused on clarity, professionalism and visual impacy</p>
               </span>
            </div>
            <div className='w-full h-full flex flex-row'>
                <span className='flex flex-col basis-1/2'>
                    <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover border-b-[1px] border-black basis-1/2' src="/Branding/bakencake1.png" />
                    <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover basis-1/2' src="/Branding/bakencake2.png" />
                </span>
                <span className='basis-1/2'>
                    <Image width={1000} height={1000} alt="img" className='w-full h-full object-cover border-l-[1px] border-black' src="/Branding/bakencake3.png" />
                </span>
            </div>
        </div>
    </div>
  )
}

export default Branding