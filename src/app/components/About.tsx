"use client";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-gray-800"
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg sm:text-xl text-center mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        I am a passionate Frontend & Fullstack Developer with a knack for
        building modern, responsive, and user-friendly web applications. I love
        exploring new technologies and creating projects that make a real
        impact.
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {/* Example skill badges */}
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
          React
        </span>
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
          Next.js
        </span>
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
          Node.js
        </span>
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
          Tailwind CSS
        </span>
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">
          FastAPI
        </span>
      </motion.div>
    </section>
  );
};

export default About;
