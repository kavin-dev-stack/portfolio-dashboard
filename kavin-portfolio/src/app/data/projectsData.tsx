export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  tech: string[];
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "Generative AI Suite",
    description:
      "Enterprise-ready AI suite with modules for persona generation, translation, SEO, and pitch creation. Contributed heavily to the AI Translator module.",
    image: "/projects/ai-suite.jpg", // add your own image
    tech: ["Angular", "ASP.NET Core", "Python", "Azure"],
  },
  {
    id: 2,
    name: "Creative Asset Management Platform (CAMP)",
    description:
      "Scalable front-end for asset workflows with Azure Blob integration. Improved onboarding time by 50%.",
    image: "/projects/camp.jpg",
    tech: ["JavaScript", "AEM", "Webpack", "Azure Blob"],
  },
  {
    id: 3,
    name: "E-commerce Website",
    description:
      "Full-stack app with admin panel, JWT auth, lazy loading, cart, filters, and integrated payment gateway.",
    image: "/projects/ecommerce.jpg",
    tech: ["Angular", "Node.js", "MongoDB"],
  },
  {
    id: 4,
    name: "Internal Tools",
    description:
      "Developed a Next.js SEO generator and employee tracker (MERN stack) for internal productivity improvements.",
    image: "/projects/internal.jpg",
    tech: ["Next.js", "Express", "MongoDB", "React"],
  },
];
