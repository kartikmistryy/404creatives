"use client";
import React, { useEffect, useState } from "react";
import NewsletterModal from "../components/NewsletterModal";

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
    localStorage.getItem('modalShow')

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

    const [modal, showModal] = useState(false)


    const useScrollPercentage = () => {
      useEffect(() => {
        const handleScroll = () => {
          // Calculate total scrollable height (total page height - viewport height)
          const scrollable = document.documentElement.scrollHeight - window.innerHeight;
          
          // Calculate how far the user has scrolled
          const scrolled = window.scrollY;
          
          // Calculate scroll percentage
          const percentage = (scrolled / scrollable) * 100;
          console.log(percentage)
          // If scrolled past 80%
          if (percentage >= 80) {
            localStorage.setItem('modalShow', true);
            showModal(true)
            // Remove listener after setting localStorage to avoid multiple sets
            window.removeEventListener('scroll', handleScroll);
          }
        };
    
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
    
        // Cleanup
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);
    };

    useScrollPercentage()

  return (
    <div className="relative w-full h-auto overflow-hidden">
      {modal && (
        <NewsletterModal closeModal={showModal} />
      )}
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
