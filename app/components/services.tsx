"use client";
import React from "react";
import { poppins } from "./home";
import { FaCube, FaCode, FaDatabase, FaDesktop, FaMobileAlt, FaGlobe } from "react-icons/fa";
import Image from 'next/image';

function Services() {
  const servicesIcons = [
    {
      icon: <FaCube className="text-2xl sm:text-3xl" />,
      name: "3D Design",
      text: "/web_images/3d design.png",
      description: "Creating immersive 3D designs and visualizations that bring ideas to life with stunning realism."
    },
    {
      icon: <FaCode className="text-2xl sm:text-3xl" />,
      name: "Web Development",
      text: "/web_images/3dweb.png",
      description: "Building responsive, performant, and accessible websites using modern web technologies."
    },
    {
      icon: <FaDatabase className="text-2xl sm:text-3xl" />,
      name: "Web Scraping",
      text: "/web_images/scraping.png",
      description: "Extracting and processing web data at scale for analysis and business intelligence."
    },
    {
      icon: <FaDesktop className="text-2xl sm:text-3xl" />,
      name: "Desktop Apps",
      text: "/web_images/desktop.png",
      description: "Developing cross-platform desktop applications with Electron and other modern frameworks."
    },
    {
      icon: <FaGlobe className="text-2xl sm:text-3xl" />,
      name: "Cross-platform",
      text: "/web_images/crosplartform.png",
      description: "Creating applications that work seamlessly across multiple platforms and devices."
    },
    {
      icon: <FaCode className="text-2xl sm:text-3xl" />,
      name: "3D Web Dev",
      text: "/web_images/web.png",
      description: "Building interactive 3D web experiences using Three.js and WebGL technologies."
    },
  ];

  return (
    <section id="services" className="relative py-16 sm:py-24 lg:py-32 bg-[#081b29]/90">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className={`${poppins.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#00abf0] mb-8 sm:mb-12 transition-transform duration-500 hover:translate-y-4`}>
            SERVICES
          </h2>
          <p className={`${poppins.className} text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto`}>
            I offer a range of services to help bring your digital ideas to life with cutting-edge technology.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {servicesIcons.map((service, index) => (
            <div 
              key={index}
              className="group relative bg-[#0a2e42] bg-opacity-50 backdrop-blur-sm rounded-xl overflow-hidden border border-[#00abf0]/20 hover:border-[#00abf0]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#00abf0]/10"
            >
              <div className="p-6 sm:p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-[#00abf0] flex items-center justify-center text-[#00abf0] group-hover:bg-[#00abf0] group-hover:text-[#081b29] transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className={`${poppins.className} text-xl sm:text-2xl font-bold text-[#00abf0]`}>
                    {service.name}
                  </h3>
                </div>
                
                <div className="relative h-48 sm:h-56 w-full rounded-lg overflow-hidden mb-4">
                  <Image
                    src={service.text}
                    alt={service.name}
                    fill
                    className="object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081b29] to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"></div>
                </div>
                
                <p className="text-gray-300 text-sm sm:text-base mt-4">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
