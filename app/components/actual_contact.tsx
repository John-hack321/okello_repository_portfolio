"use client";
import React from "react";
import { poppins } from "./home";

function ActualContactSection() {
  return (
    <div className="flex flex-col bg-[#081b29] text-[#ededed] py-20 px-10">
      <h2
        className={` ${poppins.className} mb-50 text-9xl font-bold text-center text-[#00abf0]`}
      >
        Contact Me
      </h2>
      <p className={`${poppins.className} text-4xl ml-20  mb-10`}>
        Got a project idea or just want to say hi? <br /> <br />{" "}
        <span className="ml-40 ">
          Feel free to reach out using the form below!
        </span>
      </p>

      {/* Contact Form */}
      <form className="lg:w-1/2 justify-end md:w-1/2 w-full mx-auto mt-60 shadow-2xl p-20  space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-lg font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00abf0]"
          />
        </div>

        {/* Email Field */}
        <div>
          <label htmlFor="email" className="block text-lg font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00abf0]"
          />
        </div>

        {/* Message Field */}
        <div>
          <label htmlFor="message" className="block text-lg font-semibold">
            Message
          </label>
          <textarea
            id="message"
            placeholder="Write your message..."
            rows="5"
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00abf0]"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#00abf0] text-white px-6 py-3 w-full rounded-md font-semibold text-lg hover:bg-[#006f9f] transition-colors duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
      <div className="items-center justify-center flex mt-30 flex-col">
        <h3 className="text-neutral-400 font-light text-sm">
          built and designed by john_ke
        </h3>
        <h3 className="text-neutral-400 font-light text-sm">
          all rights reserved
        </h3>
      </div>
    </div>
  );
}

export default ActualContactSection;
