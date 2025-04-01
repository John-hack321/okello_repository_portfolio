"use client";
import { Poppins } from "next/font/google";

import React from "react";
import { Linkedin, LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";

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
    <div
      className={`flex md:w-1/2 lg:w-1/2 pl-10 pr-10 pb-10 pt-2 sm:w-full  min-h-[500px] ${poppins.className}`}
    >
      <div className="bg-transparent p-4 flex ml-10 flex-col space-y-6">
        <h1
          className={`text-6xl  font-bold mt-10 tracking-wide ${poppins.className} `}
        >
          Hi , its{" "}
          <span
            className={`font-extrabold ${poppins.className} text-6xl text-[#00abf0]`}
          >
            John
          </span>{" "}
          here
        </h1>
        <h1
          className={`font-extrabold tracking-wide text-5xl text-[#00abf0] ${poppins.className}`}
        >
          A Software Engineer
        </h1>
        <p className="tracking-wider font-extralight  text-2xl mt-2">
          I'm a Software Engineer and tech enthusiast based in Nairobi, Kenya. I
          love crafting sleek, functional applications and am passionate about
          solving real-world problems through technology. My current projects
          include an AI-powered medical assistant aimed at improving healthcare
          diagnostics and tools to enhance e-commerce platforms in Kenya.
          Whether it's designing seamless user interfaces or exploring the
          future of cross-platform development, I enjoy working on ideas that
          have impact.
        </p>
        <div className="mt-8 flex  gap-10 space-x-8">
          <button className=" text-2xl group relative overflow-hidden py-3 px-6 font-bold text-[#081b29] bg-[#00abf0] border-2 border-[#00abf0] rounded-lg cursor-pointer z-10 hover:text-[#00abf0] transition-colors duration-500">
            contact me
            {/* This div acts as the ::before pseudo-element */}
            <div className="absolute top-0 left-0 h-full w-0 bg-[#081b29] -z-10 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </button>
          <button
            className={`rounded-md z-10 group relative overflow-hidden cursor-pointer text-[#00abf0] border-2 border-[#00abf0] px-12 font-bold ${poppins.className} py-3 text-center text-2xl hover:text-[#081b29] transition-colors duration-500`}
          >
            lets talk
            <div className="absolute top-0 left-0 h-full w-0 bg-[#00abf0] -z-10 group-hover:w-full transition-all duration-500 ease-in-out"></div>
          </button>
        </div>
        <div className=" ml-2 flex mt-10 pr-10 space-x-20">
          {socialIcons.map((item, index) => (
            <div
              key={index}
              className=" justify-center flex relative border-2 z-10 group overflow-hidden cursor-pointer hover:text-[#081b29] transition-colors duration-500  h-14 w-14 rounded-full items-center   p-4 border-[#00abf0] text-[#00abf0]"
            >
              <a
                target="_blank"
                href={
                  item.name === "https://github.com/John-hack321"
                    ? "https://github.com/John-hack321"
                    : item.name === "linkedin"
                    ? "https://www.linkedin.com/in/john-otieno-2a400327b"
                    : "https://www.linkedin.com/in/john-otieno-2a400327b?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bl6K56EWUSgeQIQGVUafIZg%3D%3D"
                }
              >
                {item.icon}
              </a>
              <div className="absolute top-0 left-0 h-full w-0 -z-10 bg-[#00abf0] group-hover:w-full transition-all duration-500 ease-in-out"></div>
            </div>
          ))}
        </div>
      </div>
      <div className=""></div>
    </div>
  );
}

export default HomeComp;

{
  /*
     <a href="">
            <FacebookIcon />
          </a>
          <a href="">
            <GithubIcon />
          </a>
          <a href="">
            <TwitterIcon />
          </a>
          <a href="">
            <LinkedinIcon />
          </a>
  */
}
