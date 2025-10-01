"use client";

import MotionWrapper from "../components/MotionWrapper";
import Carousel from "../util_components/Carousel";

interface Project {
  id: number;
  name: string;
  description: string;
  images?: string[];
  tech: string[];
  link?: string;
  github?: string;
}

export default function ProjectCard({
  project,
  type,
}: {
  project: Project;
  type: "personal" | "work";
}) {
  return (
    <MotionWrapper
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden flex flex-col h-full 
                 transition duration-300 shadow-xl border border-white/20
                 bg-gradient-to-tl from-gray-200 to-gray-300 
                 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Image / Carousel */}
      {project.images && <Carousel images={project.images} />}

      <div className="p-6 flex-1 flex flex-col text-black dark:text-white/80 transition-colors duration-300">
        {/* Title */}
        <h3
          className={`text-2xl font-semibold mb-2 transition-colors duration-300 ${
            type === "personal"
              ? "text-purple-800 dark:text-purple-300"
              : "text-gray-900 dark:text-white"
          }`}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p className="flex-1 text-gray-800 dark:text-gray-300 transition-colors duration-300">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-sm rounded-full transition-colors duration-300
                ${
                  type === "personal"
                    ? "bg-gradient-to-r from-purple-200 to-indigo-200 text-gray-900 dark:from-purple-400 dark:to-indigo-600 dark:text-white"
                    : "bg-blue-100 text-blue-700 dark:bg-blue-600 dark:text-white"
                }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-6 flex gap-4">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-medium shadow-md 
                         bg-gradient-to-r from-purple-400 to-indigo-500 
                         text-white 
                         dark:from-purple-500 dark:to-indigo-600 
                         hover:scale-105 transform transition-all duration-300"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-lg font-medium shadow-md 
                         bg-gray-800 text-white hover:bg-gray-900 
                         dark:bg-gray-700 dark:hover:bg-gray-600 
                         transition-all duration-300"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
}
