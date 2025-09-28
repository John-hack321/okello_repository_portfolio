'use client';

import { Poppins } from "next/font/google";
import React, { Suspense } from "react";
import { Linkedin, LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import dynamic from 'next/dynamic';
import '../cssFiles/home.css';

// Dynamically import the 3D component with no SSR
const FloatingCube = dynamic(() => import('./FloatingCube'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-[#00abf0]/10 rounded-lg">
      <div className="animate-pulse text-white">Loading 3D Scene...</div>
    </div>
  ),
});

//import "../cssFiles/btn.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function HomeComp() {
  const socialIcons = [
    {
      icon: <LinkedinIcon />,
      name: "https://www.linkedin.com/in/john-otieno-2a400327b",
    },
    { icon: <FacebookIcon />, name: "facebook" },
    { icon: <GithubIcon />, name: "https://github.com/John-hack321" },
    { icon: <TwitterIcon />, naem: "twitte" },
  ];

  return (
    <div className={`w-full overflow-hidden ${poppins.className} relative`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-8 md:pb-12 lg:pb-16 xl:pb-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 lg:space-y-8">
            <div className="space-y-2 md:space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                Hi, it's <span className="text-[#00abf0]">John</span> here
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00abf0]">
                A Software Engineer
              </h2>
            </div>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm a Software Engineer and tech enthusiast based in Nairobi, Kenya. I love crafting sleek, 
              functional applications and am passionate about solving real-world problems through technology. 
              My current projects include an AI-powered medical assistant and tools to enhance e-commerce platforms.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                className="relative overflow-hidden px-6 py-3 text-lg md:text-xl font-bold text-[#081b29] bg-[#00abf0] border-2 border-[#00abf0] rounded-lg 
                          hover:text-[#00abf0] transition-all duration-500 group"
              >
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-[#081b29] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </button>
              
              <button 
                className={`relative overflow-hidden px-6 py-3 text-lg md:text-xl font-bold text-[#00abf0] border-2 border-[#00abf0] rounded-lg 
                          hover:text-[#081b29] transition-all duration-500 group ${poppins.className}`}
              >
                <span className="relative z-10">Let's Talk</span>
                <div className="absolute inset-0 bg-[#00abf0] -z-10 w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>
              </button>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={
                    item.name === "https://github.com/John-hack321"
                      ? "https://github.com/John-hack321"
                      : item.name === "linkedin"
                      ? "https://www.linkedin.com/in/john-otieno-2a400327b"
                      : "#"
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 border-2 border-[#00abf0] rounded-full 
                            text-[#00abf0] hover:text-[#081b29] transition-colors duration-300"
                  aria-label={item.name}
                >
                  <span className="relative z-10">{item.icon}</span>
                  <div className="absolute inset-0 bg-[#00abf0] rounded-full -z-10 w-0 group-hover:w-full transition-all duration-300"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* 3D Cube Container */}
          <div className="w-full lg:w-1/2 flex items-center justify-center pt-8 lg:pt-0">
            <div className="w-full max-w-lg h-[400px] sm:h-[500px] lg:h-[550px] relative z-10">
              <Suspense fallback={<div className="w-full h-full bg-[#00abf0]/10 rounded-lg animate-pulse flex items-center justify-center">
                <span className="text-white">Loading 3D Scene...</span>
              </div>}>
                <FloatingCube />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeComp;
