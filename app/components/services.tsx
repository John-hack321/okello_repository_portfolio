"use client";
import React from "react";
import { poppins } from "./home";
import { FaCube } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

function Services() {
  const servicesIcons = [
    {
      icon: <FaCube />,
      name: "3D Design",
      text: "/web_images/3d design.png",
    },
    {
      icon: <FaCode />,
      name: "Web Development",
      text: "/web_images/3dweb.png",
    },
    {
      icon: <FaDatabase />,
      name: "Web Scraping",
      text: "/web_images/scraping.png",
    },
    {
      icon: <FaMobileAlt />,
      name: "Desktop Applications",
      text: "/web_images/desktop.png",
    },
    {
      icon: <FaGlobe />,
      name: "Crossplartform Applications",
      text: "/web_images/crosplartform.png",
    },
    {
      icon: <FaDesktop />,
      name: "3D Website Development",
      text: "/web_images/web.png",
    },
  ];

  return (
    <div id="services_part" className="min-h-[800px] mb-300">
      <div className=" mt-100">
        <h1
          className={` ml-12 font-extrabold text-[300px] ${poppins.className} text-[#00abf0] scroll-m-10`}
        >
          SERVICES
        </h1>
      </div>
      <div className="mt-60 flex flex-wrap ">
        {servicesIcons.map((service, index) => (
          <div className="w-full lg:w-1/2 md:w-1/2 p-4" key={index}>
            <div className="rounded-lg  p-10 shadow-2px">
              <div className=" hover:shadow-[#00abf0] group relative cursor-pointer   duration-500 ease-in-out transition-transform  hover:translate-y-3 shadow-2xl rounded-lg  flex flex-col">
                <div className="flex group-hover:ml-8 duration-1200 group-hover:mt-6 rounded-lg items-center">
                  <div className="z-10 group-hover:text-[#081b29] group relative text-[#00abf0] transform-colors ease-in-out overflow-hidden duration-500 h-20 w-20 rounded-full items-center border-2 flex justify-center p-2 border-[#00abf0] text-2xl">
                    {service.icon}
                    <div className="absolute top-0 left-0 h-full w-0 -z-10 bg-[#00abf0] group-hover:w-full transition-all duration-500 ease-in-out"></div>
                  </div>
                  <h3
                    className={`${poppins.className} text-[#00abf0] text-4xl ml-8 font-bold`}
                  >
                    {service.name}
                  </h3>
                </div>
                <div className=" rounded-lg p-10">
                  <img
                    className="rounded-lg shadow-2xl h-100 opacity-50 "
                    src={service.text}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
