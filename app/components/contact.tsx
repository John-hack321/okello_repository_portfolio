"use client";
import React from "react";
import { poppins } from "./home";
import { Linkedin, Github, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

function ContactSection() {
  const socialLinks = [
    { 
      icon: <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />, 
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile"
    },
    { 
      icon: <Github className="h-6 w-6 sm:h-8 sm:w-8" />, 
      name: "GitHub",
      url: "https://github.com/your-username"
    },
    { 
      icon: <Facebook className="h-6 w-6 sm:h-8 sm:w-8" />, 
      name: "Facebook",
      url: "https://facebook.com/your-profile"
    },
    { 
      icon: <Twitter className="h-6 w-6 sm:h-8 sm:w-8" />, 
      name: "Twitter",
      url: "https://twitter.com/your-handle"
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#00abf0]" />,
      text: "your.email@example.com",
      url: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="h-6 w-6 text-[#00abf0]" />,
      text: "+1 (555) 123-4567",
      url: "tel:+15551234567"
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#00abf0]" />,
      text: "Nairobi, Kenya",
      url: "https://maps.google.com/?q=Nairobi,Kenya"
    }
  ];

  return (
    <section id="contact" className="relative py-20 sm:py-28 lg:py-36 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-[#00abf0] opacity-20 rounded-full h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] blur-[100px] sm:blur-[150px] transition-all duration-700"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-16 sm:mb-24">
          <h2 className={`${poppins.className} text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-[#00abf0] mb-8 sm:mb-12`}>
            CONTACT
          </h2>
          <p className={`${poppins.className} text-lg sm:text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto`}>
            Let's connect! Reach out through any of these platforms.
          </p>
        </div>

        {/* Contact Info */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((item, index) => (
            <a 
              key={index} 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-[#0a2e42] bg-opacity-50 backdrop-blur-sm rounded-xl p-6 hover:bg-opacity-70 transition-all duration-300 hover:-translate-y-1 border border-[#00abf0]/20 hover:border-[#00abf0]/50"
            >
              <div className="flex flex-col items-center text-center">
                <div className="h-14 w-14 rounded-full bg-[#00abf0]/10 flex items-center justify-center mb-4 group-hover:bg-[#00abf0] group-hover:text-[#081b29] transition-colors duration-300">
                  {item.icon}
                </div>
                <span className="text-gray-300 text-sm sm:text-base">
                  {item.text}
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center mt-20">
          <h3 className={`${poppins.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#00abf0] mb-8`}>
            Find me on socials
          </h3>
          <div className="flex justify-center flex-wrap gap-6 mt-10">
            {socialLinks.map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-[#00abf0] text-[#00abf0] hover:bg-[#00abf0] hover:text-[#081b29] transition-all duration-300"
                aria-label={item.name}
              >
                <span className="relative z-10">{item.icon}</span>
                <span className="sr-only">{item.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
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
