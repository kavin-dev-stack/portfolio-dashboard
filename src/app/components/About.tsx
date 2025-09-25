"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { milestones, stats, funFacts } from "../data/aboutData";
import { FaDownload, FaEye } from "react-icons/fa";
import SpeechBubble from "../util_components/SpeechBubble";
import React from "react";
import { HelloTiger } from "../util_components/HelloTiger";

const About = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [showToast, setShowToast] = useState(true);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Counter animation
  useEffect(() => {
    stats.forEach((stat, i) => {
      let start = 0;
      const end = stat.value;
      const duration = 1000;
      const step = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += step;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[i] = start;
          return newCounts;
        });
      }, 16);
    });
  }, []);

  // Show toast only when About section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowToast(true);
          } else {
            setShowToast(false);
          }
        });
      },
      { threshold: 0.5 } // 50% of section must be visible
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative max-w-6xl mx-auto py-20 px-6 text-gray-800 overflow-hidden"
    >
      <div className="relative w-full">
        {/* Scroll-animated background image */}
        <SpeechBubble message="Hover the cards to flip!" show={showToast} />
        <HelloTiger />
      </div>

      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* Vertical Stepper */}
      <div className="border-l-4 border-orange-400 pl-10 space-y-12 relative z-10">
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            {/* Dot + Icon */}
            <div className="absolute -left-15.5 -top-2 flex items-center justify-center w-10 h-10 rounded-full bg-orange-100 shadow">
              {React.createElement(item.icon, {
                className: "text-orange-600 w-5 h-5",
              })}
            </div>

            {/* Content */}
            <p className="text-sm text-gray-500">{item.date}</p>
            <h3 className="text-xl font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-1">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {stats.map((stat, i) => (
          <div key={i} className="space-y-2">
            <p className="text-4xl font-bold text-orange-600">{counts[i]}+</p>
            <p className="text-gray-700">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Fun Facts Flip Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20 relative z-10">
        {funFacts.map((fact, i) => (
          <div
            key={i}
            className="relative h-44 [perspective:1000px] cursor-pointer"
            onMouseEnter={() => setShowToast(false)}
          >
            <motion.div
              className="relative w-full h-full"
              whileHover={{ rotateY: 180, scale: 1.05 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl 
          bg-gradient-to-br from-orange-400 to-amber-700 shadow-xl border border-white/20
          backface-hidden hover:shadow-[0_0_20px_rgba(255,200,100,0.8)] transition-shadow duration-100"
              >
                <div className="text-white text-4xl">
                  {React.createElement(fact.icon)}
                </div>
                <p className="mt-3 text-lg font-semibold text-white">
                  {fact.title}
                </p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded-2xl 
          bg-gradient-to-br from-amber-500 to-orange-400 text-center px-4
          [transform:rotateY(180deg)] backface-hidden hover:shadow-[0_0_20px_rgba(255,200,100)] transition-shadow duration-100"
              >
                <div className="[transform:rotateY(360deg)]">
                  <h3>{fact.desc}</h3>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Resume Buttons */}
      <motion.div
        className="mt-16 flex flex-col sm:flex-row gap-8 justify-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* View Resume */}
        <motion.a
          href="/Kavin_Balamurugan_resume_WebDev.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-600 text-black font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
          animate={{ scale: [1, 1.05, 1.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaEye className="text-lg" />
          View Resume
        </motion.a>

        {/* Download Resume */}
        <motion.a
          href="/Kavin_Balamurugan_resume_WebDev.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
          animate={{ scale: [1, 1.05, 1.2] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <FaDownload className="text-lg" />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
};

export default About;
