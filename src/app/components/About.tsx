"use client";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import {
  FaGraduationCap,
  FaBriefcase,
  FaRocket,
  FaDownload,
  FaDumbbell,
  FaMusic,
  FaPaintBrush,
  FaRobot,
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
      "Currently building AI tools, mastering FastAPI, React, and modern full-stack development.",
  },
];

const stats = [
  { label: "Years Experience", value: 4 },
  { label: "Enterprise Apps Delivered", value: 3 },
  { label: "AI Projects", value: 2 },
];

const funFacts = [
  {
    icon: <FaDumbbell className="text-4xl text-white" />,
    title: "Fitness",
    desc: "Early riser & disciplined gym-goer",
  },
  {
    icon: <FaMusic className="text-4xl text-white" />,
    title: "Music",
    desc: "Coding with lo-fi beats on loop",
  },
  {
    icon: <FaPaintBrush className="text-4xl text-white" />,
    title: "UI/UX",
    desc: "Love crafting clean, modern UIs",
  },
  {
    icon: <FaRobot className="text-4xl text-white" />,
    title: "AI Enthusiast",
    desc: "Exploring AI-powered apps",
  },
];

const AnimatedImage = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Get top offset of the section
  const [offsetTop, setOffsetTop] = useState(800);

  useEffect(() => {
    if (ref.current) {
      setOffsetTop(ref.current.offsetTop);
    }
  }, [ref]);

  // Animate only when section is visible
  const y = useTransform(
    scrollY,
    [offsetTop - 600, offsetTop + 600],
    [100, -100]
  );
  const scale = useTransform(
    scrollY,
    [offsetTop - 600, offsetTop + 600],
    [1, 1.05]
  );
  const rotate = useTransform(
    scrollY,
    [offsetTop - 600, offsetTop + 600],
    [0, 5]
  );

  const smoothY = useSpring(y, { stiffness: 100, damping: 20 });
  const smoothScale = useSpring(scale, { stiffness: 100, damping: 20 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 20 });

  return (
    <motion.div
      style={{ y: smoothY, scale: smoothScale, rotate: smoothRotate }}
      className="absolute top-[200px] right-[-300px] w-1/2 h-full hidden md:block pointer-events-none z-0"
    >
      <Image
        src="/about-illustration.svg"
        alt="Animated background"
        className="w-48 h-48 object-contain"
        width={100}
        height={100}
      />
    </motion.div>
  );
};

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
    <section
      id="about"
      className="relative max-w-6xl mx-auto py-20 px-6 text-gray-800 overflow-hidden"
    >
      <div className="relative w-full h-full">
        {/* Scroll-animated background image */}
        <AnimatedImage />
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
                <div className="text-white text-4xl">{fact.icon}</div>
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

      {/* Resume Button with subtle pulse */}
      <motion.div
        className="mt-16 flex justify-center relative z-10"
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
