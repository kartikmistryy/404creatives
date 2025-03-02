"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Chivo } from "next/font/google";

const chivo = Chivo({
  subsets: ["latin"], // Add subsets as needed
  weight: ["400"], // Specify weights (e.g., '400', '700') based on your needs
});

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    console.log(email);
    if (!email) {
      return;
    }

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setEmail("");
        alert("Subscribed successfully!");
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (error) {
      alert("Error occurred! Please try again.");
    }
  };

  return (
    <div className={`${chivo.className} bg-[#1e1e1e] w-full h-full`}>
      <div className="w-full h-full max-w-[1600px] mx-auto">
        <div
          className={`w-full h-full md:px-10 px-5 py-20 text-[#f2f2f2] flex md:flex-row flex-col md:gap-10 gap-10 justify-between`}
        >
          <div className="w-fit h-fit flex flex-col md:gap-8 gap-2">
            <h2 className="font-normal text-xl text-gray-100">Need help?</h2>
            <Link
              className="font-medium underline underline-offset-2 text-gray-300 cursor-pointer"
              href="#"
            >
              Contact us
            </Link>
          </div>

          <div className="w-fit h-fit flex flex-col md:gap-8 gap-2">
            <h2 className="font-normal text-xl text-gray-100">Get in touch</h2>
            <span className="flex flex-col md:gap-4 gap-2">
              <Link
                className="font-medium underline underline-offset-2 text-gray-300 cursor-pointer"
                href="#"
              >
                404creative.co@gmail.com
              </Link>
              <p>+91 98 33 26 7464</p>
              <p>+91 95 94 98 7676</p>
            </span>
          </div>

          <div className="w-fit h-fit flex flex-col md:gap-8 gap-2">
            <h2 className="font-normal text-xl text-gray-100">Follow us</h2>
            <span className="flex flex-row gap-6">
              <Link href="https://www.instagram.com/404creative.co.in">
                <FaInstagram className="text-2xl cursor-pointer" />
              </Link>
              <Link href="https://www.linkedin.com/company/404-creatives/">
                <FaLinkedin className="text-2xl cursor-pointer" />
              </Link>
              <Link href="https://www.threads.net/@404creative.co.in">
                <svg
                  className="text-2xl cursor-pointer mt-[1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.321 6.016c-.27-.18-1.166-.802-1.166-.802.756-1.081 1.753-1.502 3.132-1.502.975 0 1.803.327 2.394.948s.928 1.509 1.005 2.644q.492.207.905.484c1.109.745 1.719 1.86 1.719 3.137 0 2.716-2.226 5.075-6.256 5.075C4.594 16 1 13.987 1 7.994 1 2.034 4.482 0 8.044 0 9.69 0 13.55.243 15 5.036l-1.36.353C12.516 1.974 10.163 1.43 8.006 1.43c-3.565 0-5.582 2.171-5.582 6.79 0 4.143 2.254 6.343 5.63 6.343 2.777 0 4.847-1.443 4.847-3.556 0-1.438-1.208-2.127-1.27-2.127-.236 1.234-.868 3.31-3.644 3.31-1.618 0-3.013-1.118-3.013-2.582 0-2.09 1.984-2.847 3.55-2.847.586 0 1.294.04 1.663.114 0-.637-.54-1.728-1.9-1.728-1.25 0-1.566.405-1.967.868ZM8.716 8.19c-2.04 0-2.304.87-2.304 1.416 0 .878 1.043 1.168 1.6 1.168 1.02 0 2.067-.282 2.232-2.423a6.2 6.2 0 0 0-1.528-.161" />
                </svg>
              </Link>
              <Link href="https://x.com/404creative_Co">
                <svg
                  className="text-2xl cursor-pointer mt-[1px]"
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                </svg>
              </Link>
            </span>
          </div>

          <div className="w-fit h-fit flex flex-col md:gap-8 gap-2">
            <h2 className="font-normal text-xl text-gray-100">
              Subscribe to newletter
            </h2>
            <span className="flex flex-col items-start gap-4 cursor-pointer">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-3 py-1.5 text-sm text-[#252222] rounded-full"
                type="text"
                placeholder="Type your email"
              />
              <button
                onClick={handleSubmit}
                className="border-[1px] border-[#f2f2f2] px-6 py-1 font-medium active:bg-[#f2f2f2] active:text-[#252222] rounded-full"
              >
                Subscribe
              </button>
            </span>
          </div>
        </div>
        <span className="w-full h-10 flex">
          <Link href="/" className="text-center w-full font-normal md:text-base text-sm  text-white">
            @404creative.co.in
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Footer;
