"use client"

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NewsletterModal from "./components/NewsletterModal";
import Homepage from "./pages/Homepage";
  
export default function App() {

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>

  );
}
