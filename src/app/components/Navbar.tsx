"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = ["hero", "about", "projects", "skills", "contact"];

export default function FloatingDots() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
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
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4 z-50">
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
    </div>
  );
}
