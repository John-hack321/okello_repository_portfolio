"use client";
import NavBar from "../components/navBAR";
import React, { useEffect } from "react";
import { poppins } from "../components/home";
import Technologies from "../components/technologies";
import Services from "../components/services";
import ContactSection from "../components/contact";
import ActualContact from "../components/actual_contact";
import Image from 'next/image';

function About() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e: MouseEvent) => {
          const targetId = anchor.getAttribute('href');
          if (targetId && targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
              window.scrollTo({
                top: (targetElement as HTMLElement).offsetTop - 80,
                behavior: 'smooth' as ScrollBehavior
              });
            }
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#081b29] scroll-smooth">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-16 pb-8 md:pt-24 md:pb-16">
          <div className="text-center">
            <h1 className={`text-5xl sm:text-6xl md:text-7xl text-[#00abf0] font-extrabold tracking-tight ${poppins.className}`}>
              ABOUT <span className="block sm:inline-block">ME</span>
            </h1>
          </div>
          
          <div className="mt-8 md:mt-16 text-center md:text-left">
            <div className="relative w-full overflow-hidden">
              <h2 className="text-[#00abf0] font-extrabold text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] leading-none tracking-tight">
                JOHN
              </h2>
              <h1 className={`${poppins.className} font-extrabold text-7xl sm:text-9xl md:text-[12rem] lg:text-[15rem] xl:text-[18rem] text-[#00abf0] leading-none tracking-tight`}>
                OKELLO
              </h1>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <p className={`${poppins.className} text-2xl sm:text-3xl md:text-4xl text-[#00abf0] font-bold mb-8 md:mb-12`}>
              I'm a creative software developer and tech enthusiast based in Nairobi, Kenya
            </p>
            <div className={`${poppins.className} text-base sm:text-lg md:text-xl text-[#ededed] space-y-6`}>
              <p>
                I'm passionate about crafting accessible, innovative, and impactful software solutions. 
                As a developer, I focus on building interactive, functional, and user-friendly applications 
                that solve real-world challenges. Whether I'm collaborating with peers on exciting projects 
                or delving into solo development, I thrive on bringing ideas to life.
              </p>
              <p>
                While pursuing my degree in Computer Science at the University of Nairobi, I'm continuously 
                refining my skills in technologies like Python, React, TypeScript, and Rust. Beyond academics, 
                I aspire to make a difference through projects like AI-powered tools and e-commerce platforms, 
                exploring how technology can improve lives.
              </p>
              <p>
                I'm equally inspired by fostering connections and sharing knowledge, and I aim to contribute 
                to the tech community by collaborating with others and embracing mentorship opportunities in the future.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <section className="py-12 md:py-20">
          <div className="flex justify-center">
            <div className="relative w-full max-w-2xl h-64 sm:h-80 md:h-96 lg:h-[32rem] rounded-xl overflow-hidden">
              <Image
                src="/videos/john.jpg"
                alt="John Okello"
                fill
                className="object-cover opacity-70 hover:opacity-100 transition-opacity duration-500 rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        {/* Technologies and Services */}
        <Technologies />
        <Services />
      </main>

      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactSection />
        <ActualContact />
      </section>
    </div>
  );
}

export default About;
