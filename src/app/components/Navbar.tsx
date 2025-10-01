"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

const sections = ["home", "about", "projects", "skills", "contact"];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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

      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <>
      {/* 🔹 Top Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="pt-2 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src={
                darkMode
                  ? "/kavin-webDev-logo-amber-white.png"
                  : "/kavin-webDev-logo-amber-black.png"
              }
              alt="Logo"
              width={70}
              height={70}
              priority
            />
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="relative font-medium text-black dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {active === section && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-0.5 bg-purple-600 dark:bg-purple-400 w-full rounded"
                  />
                )}
              </button>
            ))}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Toggle dark mode"
            >
              <motion.div
                className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                animate={{ x: darkMode ? 28 : 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {darkMode ? (
                  <Moon size={16} className="text-gray-800" />
                ) : (
                  <Sun size={16} className="text-purple-500" />
                )}
              </motion.div>
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl text-black/90 dark:text-purple-400"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="md:hidden backdrop-blur-md flex flex-col items-center py-8 space-y-6 text-black bg-white/80 dark:bg-black/95 dark:text-white "
            >
              {sections.map((section, i) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`font-medium text-lg ${
                    active === section ? "text-purple-400" : ""
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </motion.button>
              ))}

              {/* Dark Mode Toggle (mobile) */}
              <button
                onClick={toggleDarkMode}
                className="relative w-14 h-8 rounded-full bg-gray-300 dark:bg-gray-700 flex items-center transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                aria-label="Toggle dark mode"
              >
                <motion.div
                  className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center"
                  animate={{ x: darkMode ? 28 : 2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {darkMode ? (
                    <Moon size={16} className="text-gray-800" />
                  ) : (
                    <Sun size={16} className="text-purple-500" />
                  )}
                </motion.div>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
