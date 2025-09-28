"use client";
import React from "react";
import { poppins } from "./home";
import { Send } from "lucide-react";

function ActualContactSection() {
  return (
    <section className="relative bg-[#081b29] text-[#ededed] py-16 sm:py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className={`${poppins.className} text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#00abf0] mb-6`}>
            Contact Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className={`${poppins.className} text-lg sm:text-xl md:text-2xl text-gray-300`}>
              Got a project idea or just want to say hi? 
              <span className="block sm:inline-block sm:ml-2 mt-2 sm:mt-0">
                Feel free to reach out using the form below!
              </span>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto">
          <form className="bg-[#0a2e42] bg-opacity-50 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12 space-y-6 border border-[#00abf0]/20">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-[#081b29] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00abf0] focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-200"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-[#081b29] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00abf0] focus:border-transparent text-gray-200 placeholder-gray-500 transition-all duration-200"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm sm:text-base font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message..."
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-[#081b29] border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#00abf0] focus:border-transparent text-gray-200 placeholder-gray-500 resize-y min-h-[150px] transition-all duration-200"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="group w-full sm:w-auto flex items-center justify-center gap-2 bg-[#00abf0] hover:bg-[#0088cc] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 hover:shadow-lg hover:shadow-[#00abf0]/30"
              >
                <span>Send Message</span>
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </form>
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center">
          <div className="flex flex-col items-center space-y-2">
            <p className="text-neutral-400 text-sm sm:text-base">
              Built and designed with ❤️ by john_ke
            </p>
            <p className="text-neutral-500 text-xs sm:text-sm">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default ActualContactSection;
