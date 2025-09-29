"use client";

import MotionWrapper from "./MotionWrapper";
import HeroCarousel from "./HeroCarousel";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [showindicator, setShowIndicator] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.3) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the top of the section
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-20 md:pt-15 md:pb-10 lg:pt-0 flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-black to-orange-600 text-white px-8 relative"
    >
      {/* Left: Text + CTA */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
        <MotionWrapper
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Hi, I’m <span className="text-amber-300">Kavin Balamurugan</span>
          </h1>
          <p className="text-xl md:text-2xl">
            Web Developer | UI Specialist | Full stack
          </p>
          <HeroCarousel />
          <p className="text-lg max-w-lg">
            Delivering high-performance, scalable frontends and AI-powered
            applications with 4 years of enterprise experience.
          </p>
        </MotionWrapper>

        {/* CTA Button + Down Indicator */}
        <MotionWrapper
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col items-center md:items-start space-y-3"
        >
          <button
            onClick={() => handleScroll("projects")}
            className="relative inline-flex items-center justify-center px-8 py-3 font-semibold rounded-lg shadow-lg bg-gradient-to-r from-amber-400 to-orange-500 text-black transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl"
          >
            See My Work
          </button>
        </MotionWrapper>
      </div>

      {/* Right: Image */}
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 relative overflow-visible">
        {/* Background Circle */}
        <motion.div
          className="absolute bg-amber-300 rounded-full shadow-2xl z-0 
               w-[min(90vw,250px)] h-[min(90vw,250px)]
               md:w-[min(80vw,300px)] md:h-[min(80vw,300px)]
               lg:w-[min(70vw,380px)] lg:h-[min(70vw,380px)]"
          initial={{ scale: 0.75, opacity: 0 }}
          animate={{ scale: [0.5, 1, 1], opacity: 1 }}
          transition={{ duration: 3, ease: "easeInOut", delay: 0.2 }}
          style={{
            background:
              "conic-gradient(from 180deg, #fbbf24, #f59e0b, #fbbf24)",
          }}
        ></motion.div>

        {/* Image Container - Overflowing */}
        <MotionWrapper
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-10 
               w-[min(95vw,250px)] h-[min(95vw,270px)]
               md:w-[min(85vw,300px)] md:h-[min(85vw,320px)]
               lg:w-[min(75vw,380px)] lg:h-[min(75vw,400px)]
               -translate-y-2.25"
        >
          <Image
            src="/profile-img.png"
            alt="Kavin Balamurugan"
            fill
            priority
            className="rounded-full object-contain"
            sizes="(max-width: 768px) 95vw, (max-width: 1024px) 85vw, 75vw"
          />
        </MotionWrapper>
      </div>
      {/* Floating Scroll Indicator (Bottom Center) */}
      <AnimatePresence>
        {showindicator && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.4 }}
            className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-amber-300"
          >
            <FaChevronDown className="text-2xl animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
      {/* Decorative GIF */}
      <Image
        src="/gifs/cat-movement.gif"
        alt="Rocket"
        className="absolute md:-bottom-8.5 right-2 -bottom-7 w-20 md:w-31.5 opacity-70"
        width={128}
        height={128}
      />
    </section>
  );
}
