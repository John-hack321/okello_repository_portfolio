import NavBar from "./components/navBAR";
import HomeComp from "./components/home";
import Portfolio from "./components/portfolio"; // Corrected import path
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#081b29]">
      <NavBar />
      <HomeComp />
      <Portfolio />
    </div>
  );
}
