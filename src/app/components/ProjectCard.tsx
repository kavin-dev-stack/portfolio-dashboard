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
      className={`rounded-xl shadow-lg overflow-hidden flex flex-col h-full transition duration-300
  ${
    type === "personal"
      ? "bg-gradient-to-br from-amber-50 to-red-50 hover:shadow-lg hover:shadow-orange-200/70"
      : "bg-gradient-to-br from-red-50 to-amber-50 border border-gray-200 hover:shadow-lg hover:shadow-blue-200/70"
  }`}
    >
      {/* Image / Carousel */}
      {project.images && <Carousel images={project.images} />}

      <div className="p-6 flex-1 flex flex-col">
        <h3
          className={`text-2xl font-semibold mb-2 ${
            type === "personal" ? "text-orange-600" : "text-gray-900"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`flex-1 ${
            type === "personal" ? "text-gray-700" : "text-gray-600"
          }`}
        >
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`px-3 py-1 text-sm rounded-full ${
                type === "personal"
                  ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white"
                  : "bg-blue-100 text-blue-700"
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
              className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
            >
              Live Demo
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-900 transition"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </MotionWrapper>
  );
}
