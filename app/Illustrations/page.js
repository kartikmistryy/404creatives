"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Chivo } from "next/font/google";
import { Button } from "@/components/ui/button"; 
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400"],
});

const TOTAL_IMAGES = 29;
const SUBPREVIEW_COUNT = 8;

const Illustrations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subPreviewStart, setSubPreviewStart] = useState(0);
  const [slide, setSlide] = useState(0);

  const handlePrevious = () => {
    console.log("Previous clicked");
    const newIndex = currentIndex === 0 ? TOTAL_IMAGES - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSlide(newIndex * 100);
    updateSubPreviewRange(newIndex);
  };

  const handleNext = () => {
    const newIndex = (currentIndex + 1) % TOTAL_IMAGES;
    setCurrentIndex(newIndex);
    setSlide(newIndex * 100);
    updateSubPreviewRange(newIndex);
  };

  const handleSubPreviewClick = (index) => {
    setCurrentIndex(index);
    setSlide(index * 100);
    updateSubPreviewRange(index);
  };

  const updateSubPreviewRange = (index) => {
    const newStart = Math.floor(index / SUBPREVIEW_COUNT) * SUBPREVIEW_COUNT;
    setSubPreviewStart(newStart);
  };

  const subPreviewImages = Array.from(
    { length: SUBPREVIEW_COUNT },
    (_, i) => (subPreviewStart + i) % TOTAL_IMAGES
  );

  return (
    <div className={`${chivo.className} flex flex-col items-start justify-start h-full md:mt-[10vh] mt-16 w-full`}>
      <div className="w-full h-full flex md:min-h-[80vh] min-h-auto justify-start items-start m-0 mt-5 md:m-0 p-0 overflow-hidden relative">
        <div className="relative w-full h-full overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${slide}%)`,
            }}
          >
            {[...Array(TOTAL_IMAGES)].map((_, i) => (
              <div key={i} className="w-full flex-shrink-0">
                <Image
                  src={`/photos/${i + 1}.png`}
                  width={2000}
                  height={2000}
                  alt={`Image ${i + 1}`}
                  className="w-full min-h-full object-cover lg:aspect-auto aspect-square"
                />
              </div>
            ))}
          </div>
          
          <Button 
            onClick={handlePrevious} 
            variant="outline"
            className="absolute top-1/2 md:left-5 left-1 -translate-y-1/2 z-10  rounded-full w-14 h-14 bg-white border-none text-black hover:bg-gray-100 scale-[60%] md:scale-100"
          >
            <AiOutlineLeft className="scale-125"/>
          </Button>
          
          <Button 
            onClick={handleNext} 
            variant="outline"
            className="absolute top-1/2 md:right-5 right-1 -translate-y-1/2 z-1 rounded-full w-14 h-14 bg-white border-none text-black hover:bg-gray-100 scale-[60%] md:scale-100"
          >
            <AiOutlineRight className="scale-125"/>
          </Button>
        </div>
      </div>

      <div className="md:py-6 gap-10 w-full">
        <div className="flex w-full h-full flex-row gap-5 overflow-x-scroll md:px-10 px-5 scrollbar-hide py-5 md:p-0">
          {subPreviewImages.map((imgIndex) => (
            <span
              key={imgIndex}
              className="relative flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] bg-blue-300 rounded-xl cursor-pointer"
              onClick={() => handleSubPreviewClick(imgIndex)}
            >
              <span className={`absolute bg-black ${currentIndex == imgIndex ? "opacity-0": "opacity-45"} z-[11] w-full h-full rounded-xl`}></span>
              <Image
                src={`/photos/${imgIndex + 1}.png`}
                height={300}
                width={300}
                alt={`Thumbnail ${imgIndex + 1}`}
                className="w-full h-full object-cover rounded-xl z-[10]"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Illustrations;