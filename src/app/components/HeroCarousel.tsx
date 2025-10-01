import { skills } from "../data/skillsData";
import { motion } from "framer-motion";

export default function HeroCarousel() {
  return (
    <div className="relative overflow-hidden max-w-sm md:max-w-sm lg:max-w-2xl mx-auto py-4">
      <motion.div
        className="flex gap-4"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...skills, ...skills].map((skill, i) => {
          const Icon = skill.icon;
          return (
            <span
              key={i}
              className={`flex items-center gap-2 px-4 py-2 rounded-full shadow-md ${skill.bg} ${skill.color} whitespace-nowrap`}
            >
              <Icon className="text-lg" />
            </span>
          );
        })}
      </motion.div>
      {/* Fade overlay on the left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-purple-100 dark:from-black to-white/0"></div>

      {/* Fade overlay on the right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-purple-400 md:from-gray-300 dark:from-purple-900 to-white/0"></div>
    </div>
  );
}
