import type { Project } from "../data/projectsData";
import { technologyTone } from "../data/skillsData";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-purple-200/80 bg-white/85 p-6 shadow-md transition-shadow hover:shadow-xl dark:border-purple-400/20 dark:bg-gray-900/75">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-purple-800 dark:text-purple-300">
          {project.classification}
        </p>
        {project.stage && (
          <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900 dark:border-amber-500/50 dark:bg-amber-950/60 dark:text-amber-200">
            {project.stage}
          </span>
        )}
      </div>

      <h3 className="mb-3 text-2xl font-semibold leading-tight text-gray-950 dark:text-white">
        {project.name}
      </h3>

      <p className="mb-5 text-gray-700 dark:text-gray-300">{project.context}</p>

      <div className="space-y-4">
        <div>
          <h4 className="mb-1 text-sm font-semibold text-gray-950 dark:text-white">
            Contribution
          </h4>
          <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-300">
            {project.contribution}
          </p>
        </div>

        {project.outcome && (
          <p className="rounded-xl border-l-4 border-purple-500 bg-purple-50 px-4 py-3 text-sm font-medium text-purple-950 dark:bg-purple-950/50 dark:text-purple-100">
            <span className="font-bold">Outcome: </span>
            {project.outcome}
          </p>
        )}
      </div>

      <ul
        aria-label={`Technologies used for ${project.name}`}
        className="mt-auto flex flex-wrap gap-2 pt-6"
      >
        {project.technologies.map(({ name, icon: Icon }) => (
          <li
            key={name}
            className={`technology-pill inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm ${technologyTone(name)}`}
          >
            <Icon aria-hidden="true" className="technology-icon shrink-0" />
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
