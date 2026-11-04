"use client";

import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import { milestones } from "../data/aboutData";
import { HelloTiger } from "../util_components/HelloTiger";

export default function About() {
  return (
    <section
      id="experience"
      tabIndex={-1}
      aria-labelledby="experience-heading"
      className="relative scroll-mt-20 overflow-hidden bg-white px-5 py-20 text-gray-900 dark:bg-gray-950 dark:text-white sm:px-8"
    >
      <div
        className="pointer-events-none absolute bottom-4 left-3 z-0 hidden h-40 w-40 opacity-80 xl:block 2xl:h-48 2xl:w-48"
        aria-hidden="true"
      >
        <HelloTiger />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-purple-800 dark:text-purple-300">
          Experience
        </p>
        <h2
          id="experience-heading"
          className="mb-4 text-center text-3xl font-bold sm:text-4xl"
        >
          Career progression
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-700 dark:text-gray-300">
          I grew from enterprise frontend delivery into full-stack and AI
          application engineering at Cognizant.
        </p>

        <ol className="career-timeline relative space-y-8">
          {milestones.slice(1).map((item) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.35 }}
                className="career-timeline__entry relative"
              >
                <span className="career-timeline__badge absolute left-0 top-6 flex items-center justify-center rounded-full border-4 border-white bg-purple-100 text-purple-800 dark:border-gray-950 dark:bg-purple-900 dark:text-purple-200">
                  <Icon aria-hidden="true" className="h-4 w-4" />
                </span>
                <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900 sm:p-7">
                  <p className="mb-2 text-sm font-semibold text-purple-800 dark:text-purple-300">
                    {item.date}
                  </p>
                  <h3 className="text-xl font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-gray-700 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>

        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href="/Kavin_Balamurugan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition hover:from-purple-700 hover:to-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-800 dark:focus-visible:outline-purple-200"
          >
            <FaEye aria-hidden="true" />
            View résumé
          </a>
          <a
            href="/Kavin_Balamurugan_Resume.pdf"
            download
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-purple-800/30 bg-white px-6 py-3 font-semibold text-purple-950 transition hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-800 dark:border-purple-200/30 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:focus-visible:outline-purple-200"
          >
            <FaDownload aria-hidden="true" />
            Download résumé
          </a>
        </div>
      </div>
    </section>
  );
}
