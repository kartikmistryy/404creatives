"use client";
import React from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";

const Contact = () => {
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
    <div className="bg-[#F7F7F7] w-full h-full">
      <div className="w-full h-full md:p-10 p-5">
        <div className="flex w-full flex-col items-start">
          <h1 className="md:text-8xl text-3xl font-semibold tracking-wide">
            HAVE A VISION?
          </h1>
          <h1 className="md:text-8xl text-3xl font-semibold tracking-wide md:mt-6 mt-0">
            LET'S BRING IT TO LIFE!
          </h1>

          <p className="flex lg:w-[60%]  w-full md:mt-10 my-5">
            Every great idea starts with a spark, and we're here to help you
            turn that spark into something real. It's not about flashy designs,
            but about crafting something that feels true and meaningful. Let's
            take that idea and give it the attention it deserves, creating
            something that just clicks.
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
                className="p-2 rounded-[4px] text-sm border-[1px] border-[#E5E5E5]"
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
      <div className="w-full h-full flex flex-row">
        <div className="flex flex-col justify-between items-start">
            <h1>LET'S CONNECT / COLLAB?</h1>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Contact;
