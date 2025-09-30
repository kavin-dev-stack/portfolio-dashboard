"use client";

import { useState } from "react";
import { personalProjects, workProjects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";
import { AnimatePresence, motion } from "framer-motion";

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"personal" | "work">("personal");

  const projects = activeTab === "personal" ? personalProjects : workProjects;

  // Variants for stagger effect
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const, // ✅ cast to satisfy TS
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn" as const, // ✅
      },
    },
  };

  return (
    <section
      id="projects"
      className={`py-20 transition duration-500 dark:text-white/80 bg-gradient-to-r from-gray-200 to-orange-300 dark:from-black dark:to-orange-600`}
    >
      {/* Title */}
      <h2 className="text-4xl font-bold mb-12 text-center">
        {activeTab === "personal" ? "Personal Projects" : "Work Projects"}
      </h2>

      {/* Animated Tabs */}
      <div className="flex justify-center gap-8 mb-10 relative">
        {["personal", "work"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as "personal" | "work")}
            className={`relative px-4 py-2 font-semibold text-lg transition-colors cursor-pointer ${
              activeTab === tab
                ? "text-purple-700 dark:text-orange-600 hover:text-gray-800  dark:hover:text-gray-200"
                : "text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
            }`}
          >
            {tab === "personal" ? "Personal" : "Work"}
            {activeTab === tab && (
              <motion.div
                layoutId="tab-underline"
                className="absolute left-0 right-0 -bottom-1 h-[3px] bg-gradient-to-tr from-purple-400 to-amber-500 dark:from-orange-500 dark:to-red-500 rounded-full"
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Animated Cards with stagger */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container"
        >
          {projects.map((proj) => (
            <motion.div key={proj.id} variants={cardVariants}>
              <ProjectCard project={proj} type={activeTab} />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
