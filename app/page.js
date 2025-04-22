"use client"

import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {Analytics } from '@vercel/analytics/react'  
import dynamic from "next/dynamic";

const Homepage = dynamic(() => import('./pages/Homepage'), { ssr: false });

export default function App() {

  return (
    <div className="w-full h-full flex flex-col justify-between">
      <Analytics/>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>

  );
}
