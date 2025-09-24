"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);

      const scrollPos = window.scrollY + window.innerHeight / 2;
      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActive(section);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false); // close mobile menu on click
    }
  };

  return (
    <>
      {/* 🔹 Top Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
          {/* Logo / Name */}
          <div
            className="text-2xl font-bold text-amber-400 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            Kavin
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative font-medium text-white hover:text-amber-400 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {active === section && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-0.5 bg-amber-400 w-full rounded"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl text-amber-400"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-md flex flex-col items-center py-6 space-y-4 text-white"
          >
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`font-medium text-lg ${
                  active === section ? "text-amber-400" : ""
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* 🔹 Floating Dots (Right Side) */}
      {/* <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-40">
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            className="relative w-4 h-4 rounded-full bg-gray-400 hover:bg-amber-400 transition-colors"
          >
            {active === section && (
              <motion.span
                layoutId="activeDot"
                className="absolute inset-0 w-4 h-4 rounded-full bg-amber-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
            )}
          </button>
        ))}
      </div> */}
    </>
  );
}
