"use client";
import React, { useEffect } from "react";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

import { Chivo } from "next/font/google";
import Link from "next/link";

const chivo = Chivo({
  subsets: ["latin"], // Add subsets as needed
  weight: ["400"], // Specify weights (e.g., '400', '700') based on your needs
});

const GraphicDesign = () => {

  const handleDownload = async () => {

    let password = prompt("Enter the password..", "");
    const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
    });

    if (!response.ok) {
        console.log("Incorrect!");
        return;
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "socialMediaKit.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  const handleFreeDownload = async() => {
    const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "solutionsOverview.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  return (
    <div className={`${chivo.className} mt-24 w-full h-full`}>
      <div className="w-full h-full max-w-[1600px] mx-auto">
        <main className="md:px-10 px-5 pt-14 pb-10">
          <h1 className="md:text-[7vw] h-full leading-[100%] text-3xl font-extralight">
            BRAND IDENTITY <br />
            <i className="font-lovelace">Portfolio</i>
          </h1>

          <span className="flex items-center justify-between w-fit md:gap-10 gap-4 md:mt-20 mt-10">
            <p className="md:text-4xl text-xl">BRANDING</p>
            <Link href="/BrandIdentity/Branding" className="rounded-full">
              <Image
                className="md:w-36 w-20 h-full"
                src="/rightArrow.png"
                alt="arrowIcon"
                width={200}
                height={200}
              />
            </Link>
          </span>

          <p className="md:w-2/5 w-full md:mt-10 mt-4 font-normal md:text-base text-sm">
          Together, We Bring Your Brand to Life. <br /> We blend your vision with our creativity to craft unique, impactful identities. From logos to full branding packages, we’ve got you covered.
Explore some of our past projects!
          </p>
        </main>

        <div className="p-4">
          <Carousel className="flex flex-col relative pb-12">
            <CarouselContent>
              <CarouselItem className="relative sm:w-[350px] h-full sm:basis-auto w-full basis-full">
                <Image
                  className="md:w-full lg:h-[410px] h-[370px] w-full sm:max-w-[350px] max-w-full rounded-[5px] object-fill"
                  src="/Branding/1.png"
                  alt="img"
                  width={3000}
                  height={3000}
                />
              </CarouselItem>
              <CarouselItem className="relative sm:w-[350px] h-full sm:basis-auto w-full basis-full">
                <Image
                  className="md:w-[400px] lg:h-[410px] h-[370px] w-full rounded-[5px] object-fill"
                  src="/Branding/2.png"
                  alt="img"
                  width={3000}
                  height={3000}
                />
              </CarouselItem>
              <CarouselItem className="relative sm:w-[450px] h-full sm:basis-auto w-full basis-full">
                <div className="flex flex-col gap-2">
                  <Image
                    className="w-full lg:h-[260px] h-[240px] rounded-[5px] object-center object-cover"
                    src="/Branding/3.png"
                    alt="img"
                    width={3000}
                    height={3000}
                  />
                  <Image
                    className="w-full lg:h-[145px] h-[120px] rounded-[5px] object-cover"
                    src="/Branding/4.png"
                    alt="img"
                    width={3000}
                    height={3000}
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="basis-auto w-fit">
                <Image
                  className="md:w-full lg:h-[410px] h-[370px] w-full rounded-[5px] object-fill"
                  src="/Branding/5.png"
                  alt="img"
                  width={3000}
                  height={3000}
                />
              </CarouselItem>
            </CarouselContent>
            <span className="absolute bottom-0 right-0 flex flex-row justify-start items-center w-[100px] bg-red-300 mb-5">
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-12" />
            </span>
          </Carousel>
        </div>
        <div className="flex md:flex-row flex-col-reverse gap-10 w-full md:px-10 px-5 py-10 relative">
          <div className="flex md:flex-row flex-col md:gap-10 gap-4 w-full relative">
            <span className="w-full h-full basis-2/3 px-10">
              <Image
                className="md:w-[500px] md:h-full w-[90%] rounded-[5px] mx-auto h-[300px] object-contain"
                src="/gd_newsletter.png"
                height={2000}
                width={2000}
                alt="img"
              />
            </span>
            <span className="relative md:flex hidden md:flex-col grid-cols-2 md:gap-5 gap-2 h-full w-full basis-1/3">
              <motion.img
                initial={{ translateX: -50 }}
                whileInView={{ translateX: 0 }}
                transition={{ duration: 2 }}
                className="md:w-[280px] md:h-auto w-full h-[200px] md:absolute top-0 right-4 rounded-[5px]"
                src="/Newsletter/4.png"
                height={500}
                width={500}
                alt="img"
              />
              <motion.img
                initial={{ translateX: 100 }}
                whileInView={{ translateX: 0 }}
                transition={{ duration: 2 }}
                className="md:w-[280px] md:h-auto w-full h-[200px] rounded-[5px] md:absolute top-[30px]"
                src="/Newsletter/3.png"
                height={500}
                width={500}
                alt="img"
              />
              <motion.img
                initial={{ translateY: -30, translateX: 30 }}
                whileInView={{ translateY: 0, translateX: 0 }}
                transition={{ duration: 2 }}
                className="md:w-[280px] md:h-auto  w-full h-[200px] rounded-[5px] md:absolute top-[30%] right-10"
                src="/Newsletter/2.png"
                height={500}
                width={500}
                alt="img"
              />
              <motion.img
                initial={{ translateY: -30 }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 2 }}
                className="md:w-[280px] md:h-auto w-full h-[200px] rounded-[5px] md:absolute top-[50%] -right-2"
                src="/Newsletter/1.png"
                height={500}
                width={500}
                alt="img"
              />
            </span>
            <span className="relative flex md:hidden flex-col items-center md:gap-5 gap-2 h-full w-full basis-1/3 pb-40">
              <motion.img
                initial={{ translateX: -50 }}
                whileInView={{ translateX: 0 }}
                transition={{ duration: 1 }}
                className="md:w-[280px] md:h-auto w-[65%] max-w-[280px] h-[320px] md:absolute top-0 right-[50%] rounded-[5px]"
                src="/Newsletter/4.png"
                height={500}
                width={500}
                alt="img"
              />
              <motion.img
                initial={{ translateX: 100 }}
                whileInView={{ translateX: 50 }}
                transition={{ duration: 2 }}
                className="md:w-[280px] md:h-auto w-[65%] max-w-[280px] h-[320px] absolute top-[50px] rounded-[5px]"
                src="/Newsletter/3.png"
                height={500}
                width={500}
                alt="img"
              />
              <motion.img
                initial={{ translateY: -30, translateX: 30 }}
                whileInView={{ translateY: 0, translateX: 0 }}
                transition={{ duration: 3 }}
                className="md:w-[280px] md:h-auto w-[65%] max-w-[280px] h-[320px] absolute top-[30%] right-10 rounded-[5px]"
                src="/Newsletter/2.png"
                height={500}
                width={500}
                alt="img"
              />
              <motion.img
                initial={{ translateY: -30 }}
                whileInView={{ translateY: 0 }}
                transition={{ duration: 2 }}
                className="md:w-[280px] md:h-auto w-[65%] max-w-[280px] h-[320px] absolute -bottom-[8%] left-3 rounded-[5px]"
                src="/Newsletter/1.png"
                height={500}
                width={500}
                alt="img"
              />
            </span>
          </div>
          <div className="flex flex-col md:w-[80%] w-full mt-10">
            <span className="flex md:flex-col flex-row gap-4">
              <h2 className="md:text-4xl text-xl font-medium">EMAIL DESIGN</h2>
              <Link href="/ComingSoon" className="rounded-full">
                <Image
                  className="md:w-36 w-20 h-full"
                  src="/rightArrow.png"
                  alt="arrowIcon"
                  width={200}
                  height={200}
                />
              </Link>
            </span>
            <div className="flex flex-col mt-10">
              <span className="flex flex-row items-center justify-start gap-0">
                <Image
                  className="h-12 w-12 rounded-full scale-125 -ml-3 -mr-1"
                  src="/404pfp.png"
                  width={300}
                  height={300}
                  alt="img"
                />
                <p className="text-md font-medium">404CREATIVE.CO.IN</p>
              </span>
              <p className="md:w-[80%] w-full mt-2 font-normal">
              Reach Your Audience with Beautifully Crafted Emails

            We design, you connect. Simple, effective, and impactful. <br /> Stay ahead with our expertly designed newsletters, delivering your message in style, every week
              </p>
            </div>
          </div>
        </div>

        <div className="md:px-10 px-5 my-16">
          <div className="flex flex-col md:w-[80%] w-full">
            <span className="w-full h-20 flex flex-row items-center md:gap-16 gap-4">
              <h2 className="md:text-4xl text-xl font-medium">PRINT DESIGN</h2>
              <Link href="/ComingSoon" className="rounded-full">
                <Image
                  className="md:w-36 w-20 h-full"
                  src="/rightArrow.png"
                  alt="arrowIcon"
                  width={200}
                  height={200}
                />
              </Link>
            </span>
            <p className="md:w-[70%] w-full md:mt-2 mt-0 font-normal">
            From brochures to ready-to-publish books (KDP-compliant) and more, bring your print ideas to life. You dream it! We design it!
            </p>
          </div>

          <Carousel className="flex flex-col w-full h-full relative pb-12 mt-10">
            <CarouselContent>
              <CarouselItem className="md:basis-2/5 basis-full">
                <Image
                  className="w-[600px] h-[350px] rounded-[5px] object-cover object-center"
                  src="/Print/1.png"
                  alt="img"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/4 basis-full">
                <Image
                  className="w-[600px] h-[350px] rounded-[5px] object-cover object-center"
                  src="/Print/2.png"
                  alt="img"
                  width={500}
                  height={500}
                />
              </CarouselItem>
              <CarouselItem className="md:basis-2/4 basis-full">
                <Image
                  className="w-[600px] h-[350px] rounded-[5px] object-cover object-center"
                  src="/Print/3.png"
                  alt="img"
                  width={500}
                  height={500}
                />
              </CarouselItem>
            </CarouselContent>
            <span className="absolute bottom-0 right-0 flex flex-row justify-start items-center w-[100px] bg-red-300 mb-5">
              <CarouselPrevious className="ml-16" />
              <CarouselNext className="mr-12" />
            </span>
          </Carousel>
        </div>

        <div className="md:px-10 px-5 my-10">
          <div className="flex flex-col md:w-[80%] w-full">
            <span className="w-full h-20 flex flex-row items-center md:gap-16 gap-4">
              <h2 className="md:text-4xl text-xl font-medium">WEB DESIGN</h2>
              <Link href="/ComingSoon" className="rounded-full">
                <Image
                  className="md:w-36 w-20 h-full"
                  src="/rightArrow.png"
                  alt="arrowIcon"
                  width={200}
                  height={200}
                />
              </Link>
            </span>
            <p className="md:w-[55%] w-full mt-2 font-normal">
              Get a website that&apos;s as unique as your brand. We create
              sleek, responsive designs that captivate and convert-on any
              device. <br /> Let&apos;s build something great together.{" "}
            </p>
          </div>

          <div
            id="webdes"
            className="relative md:flex hidden md:flex-row  items-end justify-between my-10 min-h-[400px] lg:max-w-[800px] md:max-w-[650px] max-w-full mx-auto overflow-x-visible"
          >
            <motion.img
              initial={{ translateX: -30 }}
              whileInView={{ translateX: 10 }}
              transition={{ duration: 1 }}
              src="/Webdes/tablet.png"
              className="md:w-[150px] md:h-[200px] w-[350px] h-[250px] col-span-1 mt-auto z-20"
            />
            <Image
              width={600}
              height={600}
              src="/Webdes/desktop.png"
              alt="desktop-png"
              className="md:w-[500px] md:h-full w-[350px] h-[250px] col-span-1 absolute left-1/2 translate-x-[-50%] z-0"
            />
            <motion.img
              initial={{ translateX: 70 }}
              whileInView={{ translateX: 90 }}
              transition={{ duration: 1 }}
              src="/Webdes/laptop.png"
              className="md:w-[300px] md:h-full w-[350px] h-[250px] col-span-1 z-20"
            />
            <motion.img
              initial={{ translateX: 30 }}
              whileInView={{ translateX: -50 }}
              transition={{ duration: 1 }}
              src="/Webdes/phone.png"
              className="md:w-[80px] md:h-[150px] w-[150px] h-[100px] col-span-1 z-20"
            />
          </div>
          <div className="md:hidden flex my-10">
            <Image
              alt="webdes-img"
              src="/mockup_webdes.png"
              width={300}
              height={300}
              className="object-contain flex w-full h-full"
            />
          </div>
        </div>

        <div className="md:px-10 px-5 my-16">
          <div className="flex flex-col md:w-[80%] w-full">
            <span className="w-full h-20 flex flex-row items-center md:gap-16 gap-4">
              <h2 className="md:text-4xl text-xl font-medium">CONTACT US</h2>
              <Link href="/Contact" className="rounded-full">
                <Image
                  className="md:w-36 w-20 h-full"
                  src="/rightArrow.png"
                  alt="arrowIcon"
                  width={200}
                  height={200}
                />
              </Link>
            </span>
            <p className="md:w-[55%] w-full mt-2 font-normal">
            No hidden charges – choose what you need, from custom designs to tailored packages. We offer full transparency and clear pricing for your brand&apos;s needs.
            </p>
          </div>

          <div className="flex md:flex-row flex-col justify-center gap-10 my-10">
            <span 
              onClick={() => handleDownload()}
              className="flex flex-row items-end gap-4 cursor-pointer">
              <Image
                src="/contactus/1.png"
                width={500}
                height={500}
                alt="img"
                className="md:w-[35vw] w-[90%] h-full"
              />
              <BsDownload 
              className="text-xl" />
            </span>
            <span 
            onClick={() => handleFreeDownload()}
            className="flex flex-row items-end gap-4 cursor-pointer">
              <Image
                src="/contactus/2.png"
                width={500}
                height={500}
                alt="img"
                className="md:w-[35vw] w-[90%] h-full"
              />
              <BsDownload className="text-xl" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphicDesign;
