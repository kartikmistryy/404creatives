"use client";
import React from "react";
import Link from "next/link";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsDownload } from "react-icons/bs";

const Contact = () => {
  const [response, setResponse] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    
    try {
      // Save to Google Sheets only
      const response = await fetch("/api/contact-sheets", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        setResponse(true);
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        alert(`Error: ${result.error || 'Failed to submit form. Please try again.'}`);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDownload = async () => {
    let password = prompt("Enter the password..", "");
    if (!password) return;

    setIsDownloading(true);
    try {
      const response = await fetch("/api/download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!response.ok) {
        alert("Incorrect password!");
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
    } catch (error) {
      alert("Download failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleFreeDownload = async() => {
    setIsDownloading(true);
    try {
      const response = await fetch("/api/freeDownload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        alert("Download failed. Please try again.");
        return;
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "solutionsOverview.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      alert("Download failed. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <div className="bg-[#F7F7F7] w-full h-full md:mt-[10vh] mt-24">
      <div className="w-full h-full max-w-[1600px] mx-auto">
        <div className="w-full h-full md:p-10 p-5">
          <div className="flex w-full flex-col items-start">
            <h1 className="md:text-8xl text-3xl font-semibold tracking-wide pt-10">
              HAVE A VISION?
            </h1>
            <h1 className="md:text-8xl text-3xl font-semibold tracking-wide md:mt-6 mt-0">
              LET&apos;S BRING IT TO LIFE!
            </h1>

            <p className="flex lg:w-[60%]  w-full md:mt-10 my-5">
              Every great idea starts with a spark, and we&apos;re here to help you
              turn that spark into something real. It&apos;s not about flashy designs,
              but about crafting something that feels true and meaningful. Let&apos;s
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
                  className="p-2 rounded-[4px] text-sm border-[1px] border-[#000]"
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
                    className="p-2 rounded-[4px] text-sm border-[1px] border-[#000]"
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
                    className="p-2 rounded-[4px] text-sm border-[1px] border-[#000]"
                  />
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full gap-4">
              <span className="flex flex-col gap-4 h-full">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us about the Project(Scope, Timeline, Budget, etc.)"
                  className="p-2 rounded-[4px] text-sm h-full flex border-[1px] border-[#000]"
                  rows={6}
                  disabled={response}
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </span>
              <button
                disabled={response || isSubmitting}
                type="submit"
                className="w-fit px-6 py-2 bg-black text-white rounded-[4px] text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : response ? "Form Submitted" : "SUBMIT"}
              </button>
            </div>
          </form>
        </div>
        <div className="md:px-10 px-5 mb-16">
          <div className="flex flex-col md:w-[80%] w-full">
            <span className="w-full h-20 flex flex-row items-center md:gap-16 gap-4">
              <h2 className="md:text-4xl text-xl font-medium">Download PDF</h2>
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
        </div>
        <div className="w-full h-full flex md:flex-row flex-col justify-between">
        <div className="w-full flex flex-col justify-between items-start md:p-10 p-5">
            <h1 className="md:text-[5.5rem] text-3xl font-semibold tracking-wide leading-tight md:w-full w-2/3">LET&apos;S CONNECT / COLLAB?</h1>

            <span className='flex flex-row gap-6 md:mt-0 mt-5'>
                    <Link href='https://www.instagram.com/404creative.co.in'><FaInstagram className='md:text-5xl text-3xl cursor-pointer'/></Link>
                    <Link href='https://www.linkedin.com/company/404-creatives/'><FaLinkedin className='md:text-5xl text-3xl cursor-pointer'/></Link>
                    <Link href='https://www.threads.net/@404creative.co.in'>
                        <svg className='md:text-5xl text-3xl w-[28px] h-[28px] md:w-[42px] md:h-[42px] cursor-pointer mt-[2px]' xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 16 16">
                            <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161"/>
                        </svg>
                    </Link>
                    <Link href='https://x.com/404creative_Co'>
                        <svg className='md:text-5xl text-3xl w-[28px] h-[28px] md:w-[42px] md:h-[42px] cursor-pointer mt-[2px]' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                        </svg>
                    </Link>
            </span>
        </div>
        <div id="imgGrid" className="flex flex-row w-full h-full items-start justify-start gap-5 md:px-10 px-5 py-5">
          <span className="flex flex-col gap-2 w-[40%] h-full">
            <Image src='/Contact/1.jpg' alt="contact1" height={2000} width={2000} className="w-full h-[70%] md:min-h-[450px] object-cover border-[1px] border-black"/>
            <Image src='/Contact/2.jpg' alt="contact1" height={2000} width={2000} className="w-full h-[30%] object-cover border-[1px] border-black"/>
          </span>
          <span className="flex flex-col gap-2 w-[60%]">
            <Image src='/Contact/4.jpg' alt="contact1" height={2000} width={2000} className="w-full h-[55%] object-cover border-[1px] border-black"/>
            <Image src='/Contact/3.jpg' alt="contact1" height={2000} width={2000} className="w-full h-[45%] object-cover border-[1px] border-black"/>
          </span>
        </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;