"use client";
import React from "react";
import { poppins } from "./home";
import { useRouter } from "next/navigation";

function NavBar() {
  const router = useRouter();
  function handleAboutClick() {
    router.push("/about");
  }

  return (
    <div className="justify-between sticky items-center bg-transparent z-10 px-8 mt-0 py-4 flex">
      <h1
        className={` ${poppins.className} text-[40px] font-extrabold ml-50 mt-3 `}
      >
        john.
      </h1>
      <nav className="flex mt-3  mr-40 space-x-6 text-2xl">
        <a
          href="/"
          className=" active:text-[#00abf0] text-[#ededed] hover:text-[#00abf0]  transition duration-500"
        >
          Home
        </a>
        <a
          href="/about"
          onClick={handleAboutClick}
          className="ml-18 text-[#ededed] hover:text-[#00abf0] "
        >
          About
        </a>
        <a
          href="#services_part"
          className="ml-18 text-[#ededed] hover:text-[#00abf0]"
        >
          Services
        </a>
        <a href="" className="ml-18 text-[#ededed] hover:text-[#00abf0]">
          Portforlio
        </a>
        <a
          href="#contact_sec"
          className="ml-18 text-[#ededed] hover:text-[#00abf0]"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}

export default NavBar;
