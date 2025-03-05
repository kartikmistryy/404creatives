// "use client"
// import React, { useState } from "react";
// import Image from "next/image";
// import { Chivo } from "next/font/google";
// import { Button } from "@/components/ui/button";
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
// import { motion } from "framer-motion";

// const chivo = Chivo({
//   subsets: ["latin"],
//   weight: ["400"],
// });

// const TOTAL_IMAGES = 29;
// const SUBPREVIEW_COUNT = 8;
// const VISIBLE_IMAGES = 8;

// const Illustrations = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [subPreviewStart, setSubPreviewStart] = useState(0);
//   const [dragStart, setDragStart] = useState(0);

//   const handlePrevious = () => {
//     const newIndex = currentIndex === 0 ? TOTAL_IMAGES - VISIBLE_IMAGES : currentIndex - 1;
//     setCurrentIndex(newIndex);
//     updateSubPreviewRange(newIndex);
//   };

//   const handleNext = () => {
//     const newIndex = currentIndex === TOTAL_IMAGES - VISIBLE_IMAGES ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//     updateSubPreviewRange(newIndex);
//   };

//   const handleDragStart = (event) => {
//     setDragStart(event.pageX);
//   };

//   const handleDragEnd = (event) => {
//     const dragDistance = event.pageX - dragStart;
//     if (Math.abs(dragDistance) > 100) {
//       if (dragDistance > 0) {
//         handlePrevious();
//       } else {
//         handleNext();
//       }
//     }
//   };

//   const handleSubPreviewClick = (index) => {
//     setCurrentIndex(index);
//     updateSubPreviewRange(index);
//   };

//   const updateSubPreviewRange = (index) => {
//     const newStart = Math.floor(index / SUBPREVIEW_COUNT) * SUBPREVIEW_COUNT;
//     setSubPreviewStart(newStart);
//   };

//   const subPreviewImages = Array.from(
//     { length: SUBPREVIEW_COUNT },
//     (_, i) => (subPreviewStart + i) % TOTAL_IMAGES
//   );

//   const visibleImages = Array.from(
//     { length: VISIBLE_IMAGES },
//     (_, i) => (currentIndex + i) % TOTAL_IMAGES
//   );

//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.5,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const imageVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <div className={`${chivo.className} flex flex-col w-full mt-24 lg:mt-20 relative`}>
//       {/* Desktop Carousel View */}
//       <div className="w-full h-auto py-4 hidden md:block overflow-hidden">
//         <motion.div
//           id="main"
//           className="relative cursor-grab"
//           drag="x"
//           dragConstraints={{ left: 0, right: 0 }}
//           onDragStart={handleDragStart}
//           onDragEnd={handleDragEnd}
//         >
//           <span className="flex justify-between w-full h-14 absolute top-1/2 md:px-10 px-1 z-10">
//             <Button
//               onClick={handlePrevious}
//               variant="outline"
//               className="rounded-full w-14 h-14 bg-white border-none text-black hover:bg-gray-100 scale-[60%] md:scale-100"
//             >
//               <AiOutlineLeft className="scale-125" />
//             </Button>

//             <Button
//               onClick={handleNext}
//               variant="outline"
//               className="rounded-full w-14 h-14 bg-white border-none text-black hover:bg-gray-100 scale-[60%] md:scale-100"
//             >
//               <AiOutlineRight className="scale-125" />
//             </Button>
//           </span>
//           <motion.div
//             animate={{ x: `-${(currentIndex * 100)}%` }}
//             transition={{ type: "spring", stiffness: 300, damping: 30 }}
//             className="flex"
//           >
//             <div className="flex flex-row basis-1/8 flex-shrink-0">
//               {visibleImages.map((imgIndex) => (
//                 <div key={imgIndex} className="w-full">
//                   <Image
//                     className="w-[100vw] h-auto"
//                     src={`/photos/${imgIndex + 1}.png`}
//                     width={800}
//                     height={800}
//                     alt={`Image ${imgIndex + 1}`}
//                     priority
//                   />
//                 </div>
//               ))}
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Mobile Grid View */}
//       <motion.div
//         className="md:hidden grid grid-cols-1 gap-4 px-4"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {Array.from({ length: TOTAL_IMAGES }).map((_, index) => (
//           <motion.div
//             key={index}
//             variants={imageVariants}
//             viewport={{ once: true, amount: 0.3 }}
//             whileInView="visible"
//             initial="hidden"
//           >
//             <Image
//               src={`/photos/${index + 1}.png`}
//               width={800}
//               height={800}
//               alt={`Image ${index + 1}`}
//               className="w-full h-auto rounded-lg"
//               priority={index < 4}
//             />
//           </motion.div>
//         ))}
//       </motion.div>

//       {/* Thumbnails */}
//       <div className="py-4 hidden md:block">
//         <div className="flex w-full md:w-4/5 h-full flex-row gap-3 overflow-x-scroll px-5 scrollbar-hide py-5 md:p-0 mx-auto">
//           {subPreviewImages.map((imgIndex) => (
//             <motion.span
//               key={imgIndex}
//               className="relative flex md:max-w-[240px] max-w-[150px] md:max-h-[150px] max-h-[120px] min-h-[90px] min-w-[130px] rounded-[5px] cursor-pointer"
//               onClick={() => handleSubPreviewClick(imgIndex)}
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span
//                 className={`absolute bg-black ${
//                   currentIndex == imgIndex ? "opacity-0" : "opacity-45"
//                 } z-[11] w-full h-full rounded-[5px]`}
//               ></span>
//               <Image
//                 src={`/photos/${imgIndex + 1}.png`}
//                 height={300}
//                 width={300}
//                 alt={`Thumbnail ${imgIndex + 1}`}
//                 className="w-full h-full object-cover rounded-[5px] z-[10]"
//               />
//             </motion.span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Illustrations;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Chivo } from "next/font/google";
import { Button } from "@/components/ui/button";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { motion } from "framer-motion";

const chivo = Chivo({
  subsets: ["latin"],
  weight: ["400"],
});

const TOTAL_IMAGES = 29;
const SUBPREVIEW_COUNT = 8;
const VISIBLE_IMAGES = 8;

const Illustrations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [subPreviewStart, setSubPreviewStart] = useState(0);
  const [dragStart, setDragStart] = useState(0);

  const handlePrevious = () => {
    const newIndex =
      currentIndex === 0 ? TOTAL_IMAGES - VISIBLE_IMAGES : currentIndex - 1;
    setCurrentIndex(newIndex);
    updateSubPreviewRange(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === TOTAL_IMAGES - VISIBLE_IMAGES ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    updateSubPreviewRange(newIndex);
  };

  const handleDragStart = (event) => {
    setDragStart(event.pageX);
  };

  const handleDragEnd = (event) => {
    const dragDistance = event.pageX - dragStart;
    if (Math.abs(dragDistance) > 100) {
      if (dragDistance > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }
  };

  const handleSubPreviewClick = (index) => {
    setCurrentIndex(index);
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

  const visibleImages = Array.from(
    { length: VISIBLE_IMAGES },
    (_, i) => (currentIndex + i) % TOTAL_IMAGES
  );

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1.2,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div
      className={`${chivo.className} flex flex-col w-full mt-24 lg:mt-20 relative`}
    >
      <div className="w-full max-w-[1000px] mx-auto">
{/* Desktop Carousel View */}
<div className="w-full h-auto py-4 hidden md:block overflow-hidden">
        <motion.div
          id="main"
          className="relative cursor-grab"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          <span className="flex justify-between w-full h-14 absolute top-1/2 md:px-10 px-1 z-10">
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
          <motion.div
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="flex"
          >
            <div className="flex flex-row flex-shrink-0 overflow-hidden justify-center items-center">
              <div className="w-full max-max-w-[1000px]">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/1.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/2.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/3.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/4.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/5.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/6.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/7.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/8.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/9.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/10.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/11.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/12.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/13.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/14.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/15.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/16.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/17.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/18.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/19.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/20.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/21.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-max-w-[1000px] w-full w-full h-auto"
                    src={`/photos/22.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/23.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/24.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/25.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/26.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/27.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/28.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
              <div className="w-full">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false, margin: "-20%" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <Image
                    className="max-w-[1000px] w-full h-auto"
                    src={`/photos/29.png`}
                    width={800}
                    height={800}
                    alt={`Image`}
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Grid View */}
      <motion.div
        className="md:hidden grid grid-cols-1 gap-1 px-4 pb-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Array.from({ length: TOTAL_IMAGES }).map((_, index) => (
          <motion.div
            key={index}
            variants={imageVariants}
            viewport={{ once: true, amount: 0.3 }}
            whileInView="visible"
            initial="hidden"
          >
            <Image
              src={`/photos/${index + 1}.png`}
              width={800}
              height={800}
              alt={`Image ${index + 1}`}
              className="w-full h-auto rounded-lg"
              priority={index < 4}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Thumbnails */}
      <div className="py-4 hidden md:block">
        <div className="flex lg:max-w-[1050px] max-w-[800px] h-full flex-row gap-3 overflow-x-scroll px-10 scrollbar-hide py-5 md:p-0 mx-auto overflow-visible">
          {subPreviewImages.map((imgIndex) => (
            <motion.span
              key={imgIndex}
              className="relative flex md:max-w-[240px] max-w-[150px] md:max-h-[130px] max-h-[80px] min-h-[80px] min-w-[120px] rounded-[5px] cursor-pointer"
              onClick={() => handleSubPreviewClick(imgIndex)}
              whileHover={{ transform: "translateY(-5px)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className={`absolute bg-black ${
                  currentIndex == imgIndex ? "opacity-0" : "opacity-55"
                } z-[11] w-full h-full rounded-[5px]`}
              ></span>
              <Image
                src={`/photos/${imgIndex + 1}.png`}
                height={500}
                width={500}
                alt={`Thumbnail ${imgIndex + 1}`}
                className={`w-full h-full object-cover rounded-[5px] z-[10] ${
                  currentIndex == imgIndex ? "scale-105" : "scale-100"
                }`}
              />
            </motion.span>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Illustrations;
