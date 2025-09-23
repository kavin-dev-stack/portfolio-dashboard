"use client";

import MotionWrapper from "../components/MotionWrapper";
// import Image from "next/image";
import { projects } from "../data/projectsData";

export default function Projects() {
  return (
    <section id="projects" className="container py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj) => (
          <MotionWrapper
            key={proj.id}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col"
          >
            {/* Project Image */}
            <div className="relative w-full h-48">
              {/* <Image
                src={proj.image}
                alt={proj.name}
                fill
                className="object-cover"
              /> */}
            </div>

            {/* Project Info */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2">{proj.name}</h3>
              <p className="text-gray-700 flex-1">{proj.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-600 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex gap-4">
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                  >
                    Live Demo
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
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
        ))}
      </div>
    </section>
  );
}
