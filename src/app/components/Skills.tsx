"use client";

import { skills } from "../data/skillsData";
import MotionWrapper from "../components/MotionWrapper";

export default function Skills() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <section id="skills" className="container py-20">
      <h2 className="text-4xl font-bold mb-12 text-center">Skills</h2>

      <div className="space-y-16">
        {categories.map((cat, catIndex) => (
          <div key={cat}>
            {/* Category Header */}
            <MotionWrapper
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: catIndex * 0.2 }}
            >
              <h3
                className="text-2xl font-semibold mb-8 
                             text-gray-800 dark:text-transparent 
                             dark:bg-clip-text dark:bg-gradient-to-r 
                             dark:from-purple-400 dark:to-indigo-400"
              >
                {cat}
              </h3>
            </MotionWrapper>

            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              {skills
                .filter((s) => s.category === cat)
                .map((skill, i) => {
                  const Icon = skill.icon;
                  return (
                    <MotionWrapper
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.75, delay: i * 0.1 }}
                      whileHover={{ scale: 1.08 }}
                      className={`
                        flex items-center gap-2 px-4 py-2 rounded-full shadow-md hover:shadow-xl transition
                        ${skill.bg} ${skill.color}
                        dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 dark:text-white/90
                        dark:hover:ring-2 dark:hover:ring-offset-1 dark:hover:ring-offset-gray-900 
                        ${skill.ring}
                      `}
                    >
                      <Icon className={`${skill.color}`} size={20} />
                      <span className="font-medium">{skill.name}</span>
                    </MotionWrapper>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
