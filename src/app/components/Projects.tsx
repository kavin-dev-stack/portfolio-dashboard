"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { labProjects, workProjects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const tabs = [
  { id: "work", label: "Selected Work" },
  { id: "labs", label: "Labs & POCs" },
] as const;

type ProjectTab = (typeof tabs)[number]["id"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<ProjectTab>("work");
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const projects = activeTab === "labs" ? labProjects : workProjects;

  const handleTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) => {
    let nextIndex: number | undefined;

    if (event.key === "ArrowRight") nextIndex = (currentIndex + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (currentIndex + tabs.length - 1) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== undefined) {
      event.preventDefault();
      const nextTab = tabs[nextIndex];
      setActiveTab(nextTab.id);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section
      id="projects"
      tabIndex={-1}
      aria-labelledby="projects-heading"
      className="scroll-mt-20 bg-gradient-to-r from-gray-100 via-purple-100 to-indigo-200 py-20 dark:from-gray-950 dark:via-gray-900 dark:to-purple-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-purple-800 dark:text-purple-300">
          Selected projects
        </p>
        <h2
          id="projects-heading"
          className="mb-10 text-center text-3xl font-bold text-gray-950 sm:text-4xl dark:text-white"
        >
          Engineering work, with context
        </h2>

        <div
          role="tablist"
          aria-label="Project collections"
          className="mb-10 flex justify-center gap-3 sm:gap-6"
        >
          {tabs.map((tab, index) => {
            const selected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                ref={(element) => {
                  tabRefs.current[index] = element;
                }}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="projects-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveTab(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                className={`min-h-11 rounded-full px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 sm:text-base dark:text-gray-200 dark:hover:bg-gray-800 ${
                  selected
                    ? "bg-white shadow-sm dark:bg-gray-800"
                    : ""
                }`}
              >
                <span
                  className={
                    selected
                      ? "text-purple-900 dark:text-purple-200"
                      : undefined
                  }
                >
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id="projects-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          tabIndex={0}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-700"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3"
            >
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
