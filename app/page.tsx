"use client";

import NavBar from "./components/navBAR";
import HomeComp from "./components/home";
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
      <main>
        <HomeComp />
        <div id="portfolio" className="pt-8 md:pt-12 lg:pt-16">
          <Portfolio />
        </div>
      </main>
    </div>
  );
}
