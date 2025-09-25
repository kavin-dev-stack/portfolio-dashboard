export interface Project {
  id: number;
  name: string;
  description: string;
  images?: string[]; // multiple images for carousel
  tech: string[];
  link?: string;
  github?: string;
}

export const personalProjects: Project[] = [
  {
    id: 1,
    name: "My Portfolio Website",
    description:
      "Modern responsive portfolio with animations, showcasing skills, projects, and contact info.",
    images: ["/projects/portfolio-1.png", "/projects/portfolio-2.png"],
    tech: ["Next.js", "TailwindCSS", "Framer Motion"],
    link: "https://myportfolio.com",
    github: "https://github.com/username/portfolio",
  },
  {
    id: 2,
    name: "E-commerce Website",
    description:
      "Full-stack app with admin panel, JWT auth, cart, filters, and payment gateway.",
    images: ["/projects/ecom-1.png", "/projects/ecom-2.png"],
    tech: ["Angular", "Node.js", "MongoDB"],
  },
];

export const workProjects: Project[] = [
  {
    id: 1,
    name: "Generative AI Suite",
    description:
      "Enterprise-ready AI suite with modules for persona generation, translation, SEO, and pitch creation. Contributed heavily to the AI Translator module.",
    tech: ["Angular", "ASP.NET Core", "Python", "Azure"],
  },
  {
    id: 2,
    name: "CAMP (Creative Asset Management Platform)",
    description:
      "Scalable front-end for asset workflows with Azure Blob integration. Improved onboarding time by 50%.",
    tech: ["JavaScript", "AEM", "Webpack", "Azure Blob"],
  },
];
