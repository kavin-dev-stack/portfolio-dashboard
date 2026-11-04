"use client";

import { skills, technologyTone } from "../data/skillsData";

const featuredNames = [
  "Angular 13–22",
  "React",
  "TypeScript",
  "Python",
  "ASP.NET Core",
  "FastAPI",
  "Gemini",
  "RAG",
];

const featuredSkills = featuredNames
  .map((name) => skills.find((skill) => skill.name === name))
  .filter((skill): skill is (typeof skills)[number] => Boolean(skill));

export default function HeroCarousel() {
  const skillItems = () =>
    featuredSkills.map((skill) => {
      const Icon = skill.icon;
      return (
        <span
          key={skill.name}
          className={`technology-pill inline-flex shrink-0 items-center gap-2 rounded-full border px-3 py-2 text-sm font-medium shadow-sm ${technologyTone(skill.name)}`}
        >
          <Icon aria-hidden="true" className="technology-icon" />
          {skill.name}
        </span>
      );
    });

  return (
    <div className="w-full max-w-2xl py-2">
      <ul className="sr-only" aria-label="Featured technologies">
        {featuredSkills.map((skill) => (
          <li key={skill.name}>{skill.name}</li>
        ))}
      </ul>

      <div aria-hidden="true" className="hero-skills-mask relative overflow-hidden py-1">
        <div className="hero-skills-track flex w-max">
          <div className="hero-skills-group flex shrink-0 gap-2.5 pr-2.5">
            {skillItems()}
          </div>
          <div className="hero-skills-group hero-skills-group--duplicate flex shrink-0 gap-2.5 pr-2.5">
            {skillItems()}
          </div>
        </div>
      </div>
    </div>
  );
}
