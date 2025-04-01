"use client";
import React from "react";
import { poppins } from "./home";
import { FaReact } from "react-icons/fa";
import { SiPython, SiNextdotjs, SiTypescript, SiRust } from "react-icons/si";

function Technologies() {
  const tech_icons = [
    {
      icon: <SiPython />,
      name: "Python",
      text: "for problem-solving , backend develpment and data driven applications",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      text: "the best framework for building web application with React.js",
    },
    {
      icon: <SiTypescript />,
      name: "Typescript",
      text: "Combining strong typing and JavaScript to create robust, maintainable codebases.",
    },
    {
      icon: <SiRust />,
      name: "Rust",
      text: "Leveraging memory safety and performance to craft efficient applications.",
    },
    {
      icon: <FaReact />,
      name: "React",
      text: "crafting higly responsive and scallable web applications ",
    },
  ];
  return (
    <div className="min-h-[2000px] bg-transparent relative overflow-hidden">
      {/* Glow in the Background */}
      <div className="sticky top-0 flex justify-center items-center -z-5">
        <div className="bg-[#00abf0] opacity-70 rounded-full h-[600px] w-[600px] blur-[200px] shadow-[0_0_200px_100px_#00abf0] transition-all duration-700"></div>
      </div>

      {/* Title Section */}
      <div className="mt-80">
        <h1
          className={`${poppins.className}  hover:translate-y-[100px] transition-transform duration-500 ease-in-out text-[#00abf0] text-[180px] text-center font-extrabold`}
        >
          TECHNOLOGIES
        </h1>
      </div>

      {/* Description Section */}
      <div>
        <h3
          className={`${poppins.className} text-3xl mt-120 w-full lg:w-1/2 md:w-1/2 ml-20`}
        >
          My technical expertise spans a range of modern programming languages
          and frameworks, enabling me to tackle diverse challenges in software
          development. I’ve been honing my skills with:
        </h3>
      </div>

      {/* Technology Icons Section */}
      <div className="mt-80 flex flex-wrap">
        {tech_icons.map((tech, index) => (
          <div className="w-full lg:w-1/2 md:w-1/2 p-6" key={index}>
            <div className="shadow-2xl group relative hover:shadow-[#00abf0] rounded-lg p-14 hover:translate-y-[5px] hover:shadow-lg transition-transform duration-500 ease-in-out">
              <div className="flex items-center mt-10 mb-10">
                {/* Icon with Hover Effect */}
                <div className="z-10 group relative cursor-pointer overflow-hidden group-hover:text-[#081b29] transition-colors duration-500 h-20 w-20 p-2 text-4xl flex text-[#00abf0] border-[#00abf0] border-2 rounded-full items-center justify-center">
                  {tech.icon}
                  <div className="absolute top-0 left-0 h-full w-0 -z-10 bg-[#00abf0] group-hover:w-full transition-all duration-500 ease-in-out"></div>
                </div>
                <h3
                  className={`${poppins.className} ml-14 text-[#00abf0] text-4xl font-extrabold`}
                >
                  {tech.name}
                </h3>
              </div>
              <div className="p-4 mt-10 mb-10">
                <p className={`font-extrabold tracking-wider text-2xl`}>
                  {tech.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Closing Section */}
      <div className="flex justify-end">
        <h3
          className={`${poppins.className} mr-40 mb-80 bg-transparent text-3xl mt-60 w-full lg:w-1/2 md:w-1/2 ml-20`}
        >
          These tools allow me to innovate and create dynamic solutions, whether
          for web development, system optimization, or creative coding projects.
          I’m committed to continuously exploring and mastering new technologies
          to expand my skill set and deliver impactful results.
        </h3>
      </div>
    </div>
  );
}

export default Technologies;
