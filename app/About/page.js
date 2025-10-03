"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const About = () => {
  const [response, setResponse] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "kartikmistry301@gmail.com", 
          subject: "REACHING OUT",
          text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
          `,
        }),
      });

      const result = await response.json();
      console.log(result);
      setResponse(true);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="mt-24 w-full h-full min-h-[75vh] bg-gray-100 relative">
      <div className="w-full h-full max-w-[1600px] mx-auto">
        <main className="flex flex-col w-full h-full">
          <div className="flex xl:flex-row flex-col justify-between items-center w-full h-full md:p-10 p-5 gap-10">
            <div className="flex flex-col xl:w-[45%] w-full items-start justify-start">
              <h1 className="md:text-8xl text-3xl font-semibold tracking-wider">
                ABOUT US
              </h1>
              <p className="flex md:w-[70%] sm:w-[80%] w-full md:mt-10 mt-5">
                From eye-catching visuals to powerful digital experiences, we
                blend artistry with technology to help businesses stand out in a
                crowded marketplace. Our expertise spans branding, web design,
                content creation, and digital marketing, ensuring that every
                project we take on leaves a lasting impact.
              </p>
            </div>
            <div className="flex xl:w-[70%] w-full h-full flex-row justify-between items-center">
              <div className="w-full bg-white h-full p-4 rounded-xl flex sm:flex-row flex-col gap-5">
                <div className="flex flex-row h-full min-h-[180px] lg:max-h-[200px] max-h-full basis-1/2 gap-4">
                  <span className="w-full flex flex-col">
                    <h1 className="lg:w-1/2 w-full text-base font-medium">
                      NEHA PATIL
                    </h1>
                    <hr className="border-gray-600 my-2 w-1/2" />
                    <p className="text-sm font-medium">
                      Neha is the creative force behind the aesthetics, crafting minimalism that’s not just seen, but deeply felt.
                    </p>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/neha-patil-38ab63146?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      className="w-full flex items-center mt-auto text-md underline gap-2 font-medium"
                    >
                      LinkedIn <AiOutlinePlus />
                    </Link>
                  </span>
                  <span className="w-full p-2 flex items-center justify-center border-[1px] rounded-[10px] border-gray-200">
                    <Image
                      className="w-full h-full rounded-[5px] object-cover min-h-[180px] max-h-[180px]"
                      width={500}
                      height={500}
                      src="/about/neha.png"
                      alt="neha-pfp"
                    />
                  </span>
                </div>

                <div className="flex flex-row-reverse h-full min-h-[180px] lg:min-h-[200px] lg:max-h-[200px] max-h-full basis-1/2 gap-4">
                  <span className="w-full flex flex-col">
                    <h1 className="lg:w-1/2 w-full text-base font-medium">
                      KAUSHIK YAMBER
                    </h1>
                    <hr className="border-gray-600 my-2 w-1/2" />
                    <p className="text-sm font-medium">
                      Kaushik is a concept and comic artist, known for his great
                      art and realistic render.
                    </p>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/kaushik-yamber-3673171b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                      className="w-full flex items-center mt-auto text-md underline gap-2 font-medium"
                    >
                      LinkedIn <AiOutlinePlus />
                    </Link>
                  </span>
                  <span className="w-full p-2 flex items-center justify-center border-[1px] rounded-[10px] border-gray-200">
                    <Image
                      className="w-full h-full rounded-[5px] object-cover min-h-[180px] max-h-[180px]"
                      width={500}
                      height={500}
                      src="/about/kaushik.png"
                      alt="kaushik-pfp"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="md:p-10 p-5 flex flex-row w-full h-full justify-between">
            <div className="xl:w-[60%] w-full bg-white h-full  rounded-xl flex sm:flex-row flex-col gap-5 xl:pl-20 p-4">
              <div className="flex flex-row h-full min-h-[180px] lg:max-h-[200px] max-h-full basis-1/2 gap-4">
                <span className="w-full flex flex-col">
                  <h1 className="lg:w-1/2 w-full text-base font-medium">
                    BABITA
                  </h1>
                  <hr className="border-gray-600 my-2 w-1/2" />
                  <p className="text-sm font-medium">
                    Babita makes sure that everyone is working!
                  </p>
                </span>
                <span className="w-full p-2 flex items-center justify-center border-[1px] rounded-[10px] border-gray-200">
                  <Image
                    className="w-full h-full rounded-[5px] object-cover"
                    width={500}
                    height={500}
                    src="/about/babita.png"
                    alt="babita-pfp"
                  />
                </span>
              </div>

              <div className="flex flex-row-reverse h-full min-h-[180px] lg:max-h-[200px] max-h-full basis-1/2 gap-4">
                <span className="w-full flex flex-col">
                  <h1 className="lg:w-1/2 w-full text-base font-medium">
                    TIKKO
                  </h1>
                  <hr className="border-gray-600 my-2 w-1/2" />
                  <p className="text-sm font-medium">
                    Tikko makes sure he&apos;s not working.
                  </p>
                </span>
                <span className="w-full p-2 flex items-center justify-center border-[1px] rounded-[10px] border-gray-200">
                  <Image
                    className="w-full h-full rounded-[5px] object-cover"
                    width={500}
                    height={500}
                    src="/about/tikko.png"
                    alt="tikko-pfp"
                  />
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div className="xl:flex hidden absolute bottom-[-10px] right-[-5px]">
              <Image src="/Logo/404.png" width={1000} height={1000} className="w-[250px] h-[250px]"/>
            </div>
    </div>
  );
};

export default About;
