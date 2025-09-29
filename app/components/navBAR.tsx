"use client";
import React, { useState, useEffect } from "react";
import { poppins } from "./home";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

function NavBar() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  function handleAboutClick() {
    router.push("/about");
    setIsMenuOpen(false);
  }

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const navLinks = [
    { name: 'Home', href: '/', onClick: () => setIsMenuOpen(false) },
    { name: 'About', href: '/about', onClick: handleAboutClick },
    { name: 'Services', href: '#services_part', onClick: () => setIsMenuOpen(false) },
    { name: 'Portfolio', href: '#portfolio', onClick: () => setIsMenuOpen(false) },
    { name: 'Blog', href: 'https://www.techwithjohn.dev/', onClick: () => setIsMenuOpen(false), external: true },
    { name: 'Contact', href: '#contact_sec', onClick: () => setIsMenuOpen(false) },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#081b29]/90 backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`${poppins.className} text-3xl md:text-4xl font-extrabold text-white`}>
              john.
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="text-white hover:text-[#00abf0] px-3 py-2 text-lg font-medium transition-colors duration-300"
              >
                {link.name}
                {link.external && (
                  <span className="ml-1 text-xs text-[#00abf0]" aria-hidden="true">↗</span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#00abf0] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#081b29]/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                target={link.external ? "_blank" : "_self"}
                rel={link.external ? "noopener noreferrer" : ""}
                className="block px-3 py-2 text-white hover:bg-[#00abf0]/10 hover:text-[#00abf0] rounded-md text-base font-medium"
              >
                {link.name}
                {link.external && (
                  <span className="ml-1 text-xs text-[#00abf0]" aria-hidden="true">↗</span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
