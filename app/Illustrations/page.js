"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Chivo } from "next/font/google";

const chivo = Chivo({
  subsets: ["latin"], // Add subsets as needed
  weight: ["400"], // Specify weights (e.g., '400', '700') based on your needs
});

const TOTAL_IMAGES = 29; // Total number of images
const SUBPREVIEW_COUNT = 8; // Number of sub-preview images to display

const Illustrations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subPreviewStart, setSubPreviewStart] = useState(0);
  const carouselRef = useRef(null);
  const isDragging = useRef(false);
  const startX = useRef(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev - 1 + TOTAL_IMAGES) % TOTAL_IMAGES;
      updateSubPreviewRange(newIndex);
      return newIndex;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const newIndex = (prev + 1) % TOTAL_IMAGES;
      updateSubPreviewRange(newIndex);
      return newIndex;
    });
  };

  const handleSubPreviewClick = (index) => {
    setCurrentIndex(index);
    updateSubPreviewRange(index);
  };

  const updateSubPreviewRange = (index) => {
    const newStart = Math.floor(index / SUBPREVIEW_COUNT) * SUBPREVIEW_COUNT;
    setSubPreviewStart(newStart);
  };

  const handleDragStart = (e) => {
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const handleDragEnd = (e) => {
    if (!isDragging.current) return;

    const endX = e.clientX;
    const diffX = startX.current - endX;

    if (diffX > 50) {
      handleNext(); // Dragged left
    } else if (diffX < -50) {
      handlePrevious(); // Dragged right
    }

    isDragging.current = false;
  };

  const handleDragMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault(); // Prevent text selection while dragging
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;

    if (carouselElement) {
      carouselElement.addEventListener("mousedown", handleDragStart);
      carouselElement.addEventListener("mousemove", handleDragMove);
      carouselElement.addEventListener("mouseup", handleDragEnd);
      carouselElement.addEventListener("mouseleave", handleDragEnd); // Handle mouse leaving the carousel

      // Clean up events
      return () => {
        carouselElement.removeEventListener("mousedown", handleDragStart);
        carouselElement.removeEventListener("mousemove", handleDragMove);
        carouselElement.removeEventListener("mouseup", handleDragEnd);
        carouselElement.removeEventListener("mouseleave", handleDragEnd);
      };
    }
  }, []);

  // Calculate the sub-preview images
  const subPreviewImages = Array.from(
    { length: SUBPREVIEW_COUNT },
    (_, i) => (subPreviewStart + i) % TOTAL_IMAGES
  );

  return (
    <div
      className={`${chivo.className} flex flex-col items-start justify-start h-full md:mt-[10vh] mt-16 w-full`}
    >
      <div
        ref={carouselRef}
        className="w-full h-full flex md:min-h-[80vh] min-h-auto justify-start items-start m-0 mt-5 md:m-0 p-0 overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <Carousel className="p-0 relative h-full w-full flex m-0 scale-x-105">
          <CarouselContent className="p-0 h-full w-full m-0 -ml-1.5">
            {[...Array(TOTAL_IMAGES)].map((_, i) => (
              <CarouselItem key={i}>
                <Image
                  src={`/photos/${currentIndex + 1}.png`}
                  width={2000}
                  height={2000}
                  alt="img"
                  className="w-full min-h-full object-cover lg:aspect-auto aspect-square"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious
            onClick={handlePrevious}
            className="absolute top-1/2 md:left-16 left-5 bg-white text-gray-700 md:scale-100 scale-100"
          />
          <CarouselNext
            onClick={handleNext}
            className="absolute top-1/2 md:right-16 right-5 bg-white text-gray-700 md:scale-100 scale-100"
          />
        </Carousel>
      </div>
      <div className="md:py-6 gap-10 w-full h-full">
        <div className="flex w-full h-full flex-row gap-5 overflow-x-scroll md:px-10 px-5 scrollbar-hide py-5 md:p-0">
          {subPreviewImages.map((imgIndex) => (
            <span
              key={imgIndex}
              className={`flex md:max-w-[340px] max-w-[150px] md:max-h-[180px] max-h-[100px] min-h-[100px] min-w-[150px] rounded-xl ${
                imgIndex === currentIndex ? "scale-105" : "scale-100"
              }`}
              onClick={() => handleSubPreviewClick(imgIndex)}
            >
              <Image
                src={`/photos/${imgIndex + 1}.png`}
                height={300}
                width={300}
                alt="img"
                className="w-full h-full object-cover rounded-xl"
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Illustrations;
