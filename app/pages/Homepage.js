"use client";
import React, { useEffect, useState } from "react";

const Homepage = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check window width and update state
      setIsResponsive(window.innerWidth <= 700); // Adjust breakpoint as needed
    };

    // Initial check
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-auto overflow-hidden">
      <video
        className="w-full h-auto"
        autoPlay
        loop  
        muted
        playsInline
        controls={false}
        src={isResponsive ? "./Phone.mp4" : "./Desktop.mp4"}
      ></video>
    </div>
  );
};

export default Homepage;
