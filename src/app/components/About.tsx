"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaDownload,
} from "react-icons/fa";

const milestones = [
  {
    date: "June 2021",
    title: "Graduated in Mechanical Engineering",
    icon: <FaGraduationCap className="text-orange-500 text-xl" />,
    description:
      "Built a foundation in problem-solving & software learning alongside engineering.",
  },
  {
    date: "Oct 2021 – Present",
    title: "Web Developer at Cognizant",
    icon: <FaBriefcase className="text-orange-500 text-xl" />,
    description:
      "4+ years delivering enterprise apps, building internal tools, and exploring AI-powered solutions.",
  },
  {
    date: "2025",
    title: "Upskilling & AI Projects",
    icon: <FaRocket className="text-orange-500 text-xl" />,
    description:
      "Currently building PromptMate & Business Process Optimizer, mastering FastAPI, React, and modern full-stack development.",
  },
];

const stats = [
  { label: "Years Experience", value: 4 },
  { label: "Enterprise Apps Delivered", value: 3 },
  { label: "AI Projects", value: 2 },
];

const funFacts = [
  { icon: "🏋️", title: "Fitness", desc: "Early riser & disciplined gym-goer" },
  { icon: "🎶", title: "Music", desc: "Coding with lo-fi beats on loop" },
  { icon: "🎨", title: "UI/UX", desc: "Love crafting clean, modern UIs" },
  { icon: "🤖", title: "AI Enthusiast", desc: "Exploring AI-powered apps" },
];

const About = () => {
  const [counts, setCounts] = useState(stats.map(() => 0));

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

  return (
    <section id="about" className="max-w-6xl mx-auto py-20 px-6 text-gray-800">
      {/* Title */}
      <motion.h2
        className="text-4xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      {/* LinkedIn-style Vertical Stepper */}
      <div className="relative border-l-4 border-orange-400 pl-10 space-y-12">
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
              {item.icon}
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
        className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 text-center"
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
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {funFacts.map((fact, i) => (
          <motion.div
            key={i}
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6 }}
            className="relative h-40 cursor-pointer [perspective:1000px]"
          >
            {/* Front */}
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-white shadow-lg backface-hidden">
              <span className="text-4xl">{fact.icon}</span>
              <p className="mt-2 text-lg font-semibold text-gray-800">
                {fact.title}
              </p>
            </div>
            {/* Back */}
            <div className="absolute inset-0 flex items-center justify-center rounded-xl bg-orange-500 text-white text-center px-4 [transform:rotateY(180deg)] backface-hidden">
              <p>{fact.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Resume Button with subtle pulse */}
      <motion.div
        className="mt-16 flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="/resume.pdf"
          download
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-black font-semibold rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-xl"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
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
