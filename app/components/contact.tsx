"use client";
import React from "react";
import { poppins } from "./home";
import { Linkedin, LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";

function ContactSection() {
  const socialIcons = [
    { icon: <LinkedinIcon /> },
    { icon: <FacebookIcon /> },
    { icon: <GithubIcon /> },
    { icon: <TwitterIcon /> },
  ];

  return (
    <div id="contact_sec" className="min-h-[800px]">
      <div className="   flex justify-center mt-100 items-center sticky -top-50">
        <div className="bg-[#00abf0] opacity-70 rounded-full h-[300px] w-[300px] blur-[150px] shadow-[0_0_120px_60px_#00abf0] transition-all duration-700"></div>
      </div>
      <div className="sticky  -top-50 flex -mt-100 justify-center items-center">
        <div className="mt-8 bg-[#00abf0] opacity-50 rounded-full h-80 w-80 shadow-[0_0_60px_20px_#00abf0]"></div>
      </div>

      <div className="mt-100">
        <h1
          className={` ${poppins.className} text-[#00abf0] font-extrabold uppercase text-[300px] `}
        >
          contact
        </h1>
      </div>
      <div className="mt-80 ml-30">
        <h2 className={`${poppins.className} text-7xl font-extrabold`}>
          Find me on socials as :
        </h2>
      </div>
      <div className=" mx-30 mb-60 justify-between flex mt-80  pr-10 space-x-20">
        {socialIcons.map((item, index) => (
          <div
            key={index}
            className=" justify-center flex relative border-2 z-10 group overflow-hidden cursor-pointer hover:text-[#081b29] transition-colors duration-500  h-14 w-14 rounded-full items-center   p-4 border-[#00abf0] text-[#00abf0]"
          >
            <a href="relative z-10">{item.icon}</a>
            <div className="absolute top-0 left-0 h-full w-0 -z-10 bg-[#00abf0] group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactSection;

{
  /*
<div className="  bottom-[50px] flex justify-center items-center sticky top-0">
        <div className="bg-[#00abf0] opacity-70 rounded-full h-[300px] w-[300px] blur-[150px] shadow-[0_0_120px_60px_#00abf0] transition-all duration-700"></div>
      </div>




<div className="min-h-[800px]">
      <div className="sticky top-80 flex mt-100 justify-center items-center">
        <div className="mt-8 bg-[#00abf0] opacity-50 rounded-full h-80 w-80 shadow-[0_0_60px_20px_#00abf0]"></div>
      </div>
      <div className="mt-100">
        <h1
          className={` ${poppins.className} text-[#00abf0] font-extrabold uppercase text-[300px] `}
        >
          contact
        </h1>
      </div>
    </div>
  );
    */
}
