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
      icon: <LinkedinIcon className="text-2xl" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/john-otieno-2a400327b"
    },
    { 
      icon: <FacebookIcon className="text-2xl" />, 
      name: "Facebook",
      url: "#"
    },
    { 
      icon: <GithubIcon className="text-2xl" />, 
      name: "GitHub",
      url: "https://github.com/John-hack321" 
    },
    { 
      icon: <TwitterIcon className="text-2xl" />, 
      name: "Twitter",
      url: "https://x.com/the20xdev" 
    },
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
              {/* Contact Me Button - Links to Contact Section */}
              <a 
                href="/about#contact"
                className="relative overflow-hidden px-6 py-3 text-lg md:text-xl font-bold text-[#081b29] bg-[#00abf0] border-2 border-[#00abf0] rounded-lg 
                          hover:bg-transparent hover:text-[#00abf0] transition-all duration-300 group inline-flex items-center"
              >
                <span className="relative z-10 flex items-center">
                  Contact Me
                  <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
              </a>
              
              {/* Let's Talk Button - Links to Contact Form */}
              <a 
                href="/about#contact-form"
                className={`relative overflow-hidden px-6 py-3 text-lg md:text-xl font-bold text-[#00abf0] border-2 border-[#00abf0] rounded-lg 
                          hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300 group ${poppins.className} inline-flex items-center`}
              >
                <span className="relative z-10">Let's Talk</span>
              </a>
              
              {/* Resume Button */}
              <a
                href="https://drive.google.com/file/d/1fcqvvAg7k5nU0Udb3UG9Bv6UzVOqJVY-/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="relative overflow-hidden px-5 py-2.5 text-base font-medium text-white border border-white/50 rounded-lg 
                          hover:bg-white/10 hover:border-white/80 transition-all duration-300 flex items-center group"
              >
                <span className="flex items-center">
                  Resume
                  <svg className="ml-1.5 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </span>
              </a>
            </div>
            
            <div className="flex flex-wrap gap-4 md:gap-6 pt-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-14 h-14 rounded-full border-2 border-[#00abf0] 
                            text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-colors duration-300"
                  aria-label={item.name}
                >
                  <span className="relative z-10">{item.icon}</span>
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
