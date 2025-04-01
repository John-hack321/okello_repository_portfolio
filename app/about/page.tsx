"use client";
import NavBar from "../components/navBAR";
import React from "react";
import { poppins } from "../components/home";
import Technologies from "../components/technologies";
import Services from "../components/services";
import ContactSection from "../components/contact";
import ActualContact from "../components/actual_contact";

function About() {
  return (
    <div className="min-h-screen bg-[#081b29]">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div>
        <div className="items-center mt-10 flex justify-center">
          <h1
            className={`text-7xl text-[#00abf0] tracking-wider font-extrabold ${poppins.className}`}
          >
            ABOUT <br />
            <span className="text-[#00abf0] ml-18">ME</span>
          </h1>
        </div>
        <div className="mt-20 ml-10 hover:translate-x-[-100px] transition-transform duration-1200 ease-in-out tracking-tight ">
          <h2 className="text-[#00abf0] font-extrabold text-[250px]">JOHN</h2>
          <h1
            className={`${poppins.className} font-extrabold text-[300px] text-[#00abf0]`}
          >
            OKELLO
          </h1>
        </div>
        <div className="flex sm:w-full mt-100 mb-18  justify-end">
          <div className="bg-transparent w-full lg:w-1/2 md:w-1/2 mb-20 mr-20 mt-8">
            <p
              className={`${poppins.className} mb-20 text-4xl text-[#00abf0] font-bold`}
            >
              Im a createive software developer and tech enthusiast based in
              Nairobi Kenya
            </p>
            <p
              className={` ${poppins.className} text-2xl  tracking-wider  text-[#ededed]`}
            >
              I’m passionate about crafting accessible, innovative, and
              impactful software solutions. As a developer, I focus on building
              interactive, functional, and user-friendly applications that solve
              real-world challenges. Whether I’m collaborating with peers on
              exciting projects or delving into solo development, I thrive on
              bringing ideas to life. <br /> <br />
              While pursuing my degree in Computer Science at the University of
              Nairobi, I’m continuously refining my skills in technologies like
              Python, React, TypeScript, and Rust. Beyond academics, I aspire to
              make a difference through projects like AI-powered tools and
              e-commerce platforms, exploring how technology can improve lives.{" "}
              <br /> <br /> I’m equally inspired by fostering connections and
              sharing knowledge, and I aim to contribute to the tech community
              by collaborating with others and embracing mentorship
              opportunities in the future.
            </p>
          </div>
        </div>
        <div className="flex mt-80 ">
          <div className="bg-[#081b29] w-full scroll-container lg:w-1/2 md:w-1/2 flex items-center  justify-center ">
            <img
              src="/videos/john.jpg"
              alt="Sliding Image"
              className=" scroll-item h-180 hover:shadow-[#00abf0] hover:shadow-2xl hover:border-[#00abf0] rounded-lg mt-10 mb-50 opacity-30 hover:opacity-80 transition duration-1500 shadow-[#00abf0]"
            />
          </div>
        </div>
        <Technologies />
        <Services />
        <footer>
          <ContactSection />
          <ActualContact />
        </footer>
      </div>
    </div>
  );
}

export default About;
