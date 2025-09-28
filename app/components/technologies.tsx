"use client";
import React from "react";
import { poppins } from "./home";
import { FaReact } from "react-icons/fa";
import { SiPython, SiNextdotjs, SiTypescript, SiRust } from "react-icons/si";

function Technologies() {
  const tech_icons = [
    {
      icon: <SiPython className="text-3xl sm:text-4xl" />,
      name: "Python",
      text: "for problem-solving, backend development and data driven applications",
    },
    {
      icon: <SiNextdotjs className="text-3xl sm:text-4xl" />,
      name: "Next.js",
      text: "the best framework for building web application with React.js",
    },
    {
      icon: <SiTypescript className="text-3xl sm:text-4xl" />,
      name: "Typescript",
      text: "Combining strong typing and JavaScript to create robust, maintainable codebases.",
    },
    {
      icon: <SiRust className="text-3xl sm:text-4xl" />,
      name: "Rust",
      text: "Leveraging memory safety and performance to craft efficient applications.",
    },
    {
      icon: <FaReact className="text-3xl sm:text-4xl" />,
      name: "React",
      text: "Crafting highly responsive and scalable web applications",
    },
  ];

  return (
    <section id="technologies" className="relative py-16 sm:py-24 lg:py-32">
      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="bg-[#00abf0] opacity-20 rounded-full h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] blur-[100px] sm:blur-[150px] transition-all duration-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className={`${poppins.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#00abf0] mb-8 sm:mb-12 transition-transform duration-500 hover:translate-y-4`}>
            TECHNOLOGIES
          </h2>
          
          <div className="max-w-3xl mx-auto">
            <p className={`${poppins.className} text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed`}>
              My technical expertise spans a range of modern programming languages
              and frameworks, enabling me to tackle diverse challenges in software
              development. I've been honing my skills with:
            </p>
          </div>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {tech_icons.map((tech, index) => (
            <div 
              key={index}
              className="group relative bg-[#0a2e42] bg-opacity-50 backdrop-blur-sm rounded-xl p-6 sm:p-8 hover:shadow-xl hover:shadow-[#00abf0]/20 transition-all duration-300 hover:-translate-y-1 border border-[#00abf0]/20"
            >
              <div className="flex items-start space-x-4 sm:space-x-6">
                <div className="flex-shrink-0">
                  <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-[#00abf0] flex items-center justify-center text-[#00abf0] group-hover:bg-[#00abf0] group-hover:text-[#081b29] transition-colors duration-300">
                    {tech.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className={`${poppins.className} text-xl sm:text-2xl font-bold text-[#00abf0] mb-2`}>
                    {tech.name}
                  </h3>
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                    {tech.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Section */}
        <div className="mt-20 sm:mt-28 max-w-4xl mx-auto">
          <p className={`${poppins.className} text-center text-lg sm:text-xl text-gray-300 leading-relaxed`}>
            These tools allow me to innovate and create dynamic solutions, whether
            for web development, system optimization, or creative coding projects.
            I'm committed to continuously exploring and mastering new technologies
            to expand my skill set and deliver impactful results.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Technologies;
