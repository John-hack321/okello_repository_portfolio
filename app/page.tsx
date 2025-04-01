import NavBar from "./components/navBAR";
import HomeComp from "./components/home";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#081b29]">
      <NavBar />
      <HomeComp />
    </div>
  );
}
