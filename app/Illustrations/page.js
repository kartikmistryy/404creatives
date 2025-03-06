"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Chivo } from "next/font/google";
import { Button } from "@/components/ui/button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

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
    <div className={`${chivo.className} flex flex-col w-full md:mt-[12vh] mt-[10vh] lg:mt-[10vh] relative`}>
      <div className="w-full h-auto py-4">
        <div id="main" className="relative">
        <span className="flex justify-between w-full h-14 absolute top-1/2 md:px-10 px-1">
          <Button
            onClick={handlePrevious}
            variant="outline"
            className="rounded-full w-14 h-14 bg-white border-none text-black hover:bg-gray-100 scale-[60%] md:scale-100"
          >
            <AiOutlineLeft className="scale-125" />
          </Button>

          <Button
            onClick={handleNext}
            variant="outline"
            className="rounded-full w-14 h-14 bg-white border-none text-black hover:bg-gray-100 scale-[60%] md:scale-100"
          >
            <AiOutlineRight className="scale-125" />
          </Button>
        </span>
          <Image
            className="w-full h-auto"
            src={`/photos/${currentIndex + 1}.png`}
            width={800}
            height={800}
            alt="img"
          />
        </div>
      </div>

      <div className="py-4">
        <div className="flex w-full md:w-4/5 h-full flex-row gap-3 overflow-x-scroll px-5 scrollbar-hide py-5 md:p-0 mx-auto">
          {subPreviewImages.map((imgIndex) => (
            <span
              key={imgIndex}
              className="relative flex md:max-w-[240px] max-w-[150px] md:max-h-[150px] max-h-[120px] min-h-[90px] min-w-[130px] rounded-[5px] cursor-pointer"
              onClick={() => handleSubPreviewClick(imgIndex)}
            >
              <span
                className={`absolute bg-black ${
                  currentIndex == imgIndex ? "opacity-0" : "opacity-45"
                } z-[11] w-full h-full rounded-[5px]`}
              ></span>
              <Image
                src={`/photos/${imgIndex + 1}.png`}
                height={300}
                width={300}
                alt={`Thumbnail ${imgIndex + 1}`}
                className="w-full h-full object-cover rounded-[5px] z-[10]"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Illustrations;