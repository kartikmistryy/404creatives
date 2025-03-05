import React from 'react'
import { Chivo } from 'next/font/google';
import Image from 'next/image';

const chivo = Chivo({
  subsets: ['latin'], // Add subsets as needed
  weight: ['400'], // Specify weights (e.g., '400', '700') based on your needs
});

const Shop = () => {
  return (
    <div className={`${chivo.className} flex flex-col items-start justify-start min-h-[100vh] h-full md:mt-[10vh] mt-16 w-full max-w-[100vw]`}>
        <div className='w-full h-full max-w-[1600px] mx-auto  md:px-10 px-5'>
        <h1 className='py-32 md:text-8xl text-6xl text-[#252222]'>COMING <br /> SOON</h1>

        <main className="w-full h-full max-w-[100vw] grid grid-cols-2 lg:grid-cols-4 justify-between items-center py-10 gap-20 font-sans">
           <span className="w-full flex flex-col justify-center items-center">            <Image
              width={200}
              height={200}
              className="w-[100px] h-[100px] md:h-[120px] md:w-[120px] my-5 object-contain"
              alt="image"
              src="/shopIcons/shop1.png"
            />
            <h3 className="text-xl md:text-3xl font-medium">
              HANDMADE
              <br /> RUGS
            </h3>
          </span>

          <span className="w-full flex flex-col justify-center items-center">
            <Image
              width={200}
              height={200}
              className="w-[100px] h-[100px] md:h-[120px] md:w-[120px] my-5 object-contain"
              alt="image"
              src="/shopIcons/shop2.png"
            />
            <h3 className="text-xl md:text-3xl font-medium">
              CUSTOM
              <br /> STICKERS
            </h3>
          </span>

          <span className="w-full flex flex-col justify-center items-center">
            <Image
              width={200}
              height={200}
              className="w-[100px] h-[100px] md:h-[120px] md:w-[120px] my-5 object-contain"
              alt="image"
              src="/shopIcons/shop3.png"
            />
            <h3 className="text-xl md:text-3xl font-medium">
              404
              <br /> COMIC
            </h3>
          </span>

          <span className="w-full flex flex-col justify-center items-center">
            <Image
              width={200}
              height={200}
              className="w-[100px] h-[100px] md:h-[120px] md:w-[120px] my-5 object-contain"
              alt="image"
              src="/shopIcons/shop4.png"
            />
            <h3 className="text-xl md:text-3xl font-medium">
              DIGITAL
              <br /> PRINTS
            </h3>
          </span>
        </main>
        </div>
    </div>
  )
}

export default Shop