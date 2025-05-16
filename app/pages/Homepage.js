"use client";
import React, { useEffect, useState } from "react";
import NewsletterModal from "../components/NewsletterModal";

const Homepage = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [modal, showModal] = useState(false); // Show modal on page load

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth <= 700);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    setTimeout(() => {
      showModal(true);
    }, [60000]);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {modal && <NewsletterModal closeModal={showModal} />}
      <video
        className="w-full h-auto"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        controls={false}
        preload="auto"
        src={isResponsive ? "./Phone.mp4" : "./Desktop.mp4"}
      ></video>
    </div>
  );
};

export default Homepage;
