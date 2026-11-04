import { skills } from "../data/skillsData";

const categoryOrder = [
  "Frontend & UI Engineering",
  "Backend & API Engineering",
  "AI & Generative AI",
  "Cloud & Platform Engineering",
  "Architecture & Security",
  "Development Tools",
];

export default function Skills() {
  return (
    <section
      id="skills"
      tabIndex={-1}
      aria-labelledby="skills-heading"
      className="scroll-mt-20 bg-gray-50 py-20 dark:bg-gray-950"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.18em] text-purple-800 dark:text-purple-300">
          Engineering capabilities
        </p>
        <h2
          id="skills-heading"
          className="mb-10 text-center text-3xl font-bold text-gray-950 sm:text-4xl dark:text-white"
        >
          Skills & technologies
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categoryOrder.map((category) => (
            <section
              key={category}
              aria-labelledby={`skill-${category.replaceAll(" ", "-").replaceAll("&", "and")}`}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <h3
                id={`skill-${category.replaceAll(" ", "-").replaceAll("&", "and")}`}
                className="mb-5 text-xl font-semibold text-gray-950 dark:text-white"
              >
                {category}
              </h3>
              <ul className="flex flex-wrap gap-2.5">
                {skills
                  .filter((skill) => skill.category === category)
                  .map(({ name, icon: Icon, color, bg, ring }) => (
                    <li
                      key={name}
                      className={`skill-pill inline-flex min-h-10 items-center gap-2 rounded-full px-3 py-2 text-sm font-medium ring-1 ring-inset ${bg} ${ring} dark:bg-gray-900/80`}
                    >
                      <Icon
                        aria-hidden="true"
                        className={`shrink-0 ${color} dark:brightness-125`}
                      />
                      <span className="text-gray-900 dark:text-gray-100">
                        {name}
                      </span>
                    </li>
                  ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
