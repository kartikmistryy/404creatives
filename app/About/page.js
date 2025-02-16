"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
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
          to: "kartikmistry301@gmail.com", // Set a fixed recipient email
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
    <div className="mt-24 w-full h-full bg-gray-100">
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
          <div className="flex xl:w-[60%] w-full h-full flex-row justify-between items-center">
            <div className="w-full bg-white h-full p-4 rounded-xl flex sm:flex-row flex-col gap-5">
              <div className="flex flex-row h-full min-h-[180px] lg:max-h-[200px] max-h-full basis-1/2 gap-4">
                <span className="w-full flex flex-col">
                  <h1 className="lg:w-1/2 w-full text-base font-medium">
                    NEHA PATIL
                  </h1>
                  <hr className="border-gray-600 my-2 w-1/2" />
                  <p className="text-sm font-medium">
                    Neha is a visual artist, known for her minimalistic style.
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
        <div className="md:p-10 p-5">
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
                <h1 className="lg:w-1/2 w-full text-base font-medium">TIKKO</h1>
                <hr className="border-gray-600 my-2 w-1/2" />
                <p className="text-sm font-medium">
                  Tiko makes sure he&apos;s not working.
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
          <div>{/* Down arrow icon */}</div>
        </div>
      </main>
      <div className="w-full h-full md:p-10 p-5">
        <div className="flex w-full flex-col items-start">
          <h1 className="md:text-8xl text-3xl font-semibold tracking-wide">
            CONTACT US
          </h1>
          <p className="flex lg:w-[60%]  w-full md:mt-10 my-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            similique ad nihil earum distinctio accusamus, suscipit voluptatem.
            Aspernatur, repellat quasi!
          </p>
          <Link
            target="_blank"
            href="https://wa.link/r4o0wm"
            className="flex items-center justify-start gap-3 text-sm font-semibold text-white bg-black rounded-[5px] p-2"
          >
            <BsWhatsapp />
            CONNECT ON WHATSAPP
          </Link>
        </div>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex md:flex-row flex-col lg:w-[90%] w-full h-full lg:gap-20 gap-4"
        >
          <div className="flex flex-col w-full gap-4 md:pb-14 pb-0">
            <span className="flex flex-col gap-2">
              <label htmlFor="name" className="text-lg">
                Name
              </label>
              <input
                type="text"
                name="name"
                disabled={response}
                value={formData.name}
                onChange={handleChange}
                placeholder="Fransico Andrade"
                className="p-2 rounded-[4px] text-sm"
              />
            </span>
            <div className="flex md:flex-row flex-col gap-4 w-full">
              <span className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-lg">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  disabled={response}
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="fransicoandrade@gmail.com"
                  className="p-2 rounded-[4px] text-sm"
                />
              </span>
              <span className="flex flex-col gap-2 w-full">
                <label htmlFor="phone" className="text-lg">
                  Phone Number
                </label>
                <input
                  type="number"
                  name="phone"
                  disabled={response}
                  value={formData.phone}
                  placeholder="+123-456-7890"
                  onChange={handleChange}
                  className="p-2 rounded-[4px] text-sm"
                />
              </span>
            </div>
          </div>
          <div className="flex flex-col w-full gap-4">
            <span className="flex flex-col gap-4 h-full">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                placeholder="Hi, we love the cats!"
                className="p-2 rounded-[4px] text-sm h-full flex"
                rows={6}
                disabled={response}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </span>
            <button
              disabled={response}
              type="submit"
              className="w-fit px-6 py-2 bg-black text-white rounded-[4px] text-sm font-semibold"
            >
              {response ? "Form Submitted" : "SUBMIT"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default About;
