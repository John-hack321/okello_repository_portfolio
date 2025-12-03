"use client";

import NavBar from "./components/navBAR";
import HomeComp from "./components/home";
import AdaDynamicsAffiliation from "./components/ada_dynamics";
import Portfolio from "./components/portfolio";
import { useEffect } from 'react';

export default function Home() {
  // Smooth scroll behavior for anchor links
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Smooth scroll for anchor links
      document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e: MouseEvent) => {
          e.preventDefault();
          const targetId = anchor.getAttribute('href');
          if (!targetId || targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            window.scrollTo({
              top: (targetElement as HTMLElement).offsetTop - 80, // Adjust for fixed header
              behavior: 'smooth' as ScrollBehavior
            });
          }
        });
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#081b29] scroll-smooth">
      <NavBar />
      <main className="relative">
        <HomeComp />
        
        {/* Ada Dynamics Affiliation - Prominently displayed after intro */}
        <div className="relative z-10">
          <AdaDynamicsAffiliation />
        </div>
        
        <div id="portfolio" className="relative z-10">
          <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#081b29] to-transparent -mt-16"></div>
          <div className="relative z-20 bg-[#081b29] pt-12 md:pt-16 lg:pt-20">
            <Portfolio />
          </div>
        </div>
        
        {/* Built with love section */}
        <div className="py-8 text-center text-gray-500 text-sm">
          <p>Built with <span className="text-[#00abf0]">❤️</span> by John Okello</p>
          <p className="mt-1 text-xs">© {new Date().getFullYear()} All Rights Reserved</p>
        </div>
      </main>
    </div>
  );
}