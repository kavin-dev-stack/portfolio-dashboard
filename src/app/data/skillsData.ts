import { IconType } from "react-icons";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiDotnet,
  SiFastapi,
  SiNodedotjs,
  SiGooglecloud,
  SiSnowflake,
  SiGooglegemini,
  SiDocker,
  SiKubernetes,
  SiVite,
  SiWebpack,
  SiStorybook,
  SiPostman,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import {
  FaBrain,
  FaCloud,
  FaCode,
  FaProjectDiagram,
  FaServer,
  FaShieldAlt,
  FaTools,
} from "react-icons/fa";

export interface Skill {
  name: string;
  icon: IconType;
  color: string;
  bg: string;
  ring: string;
  category: string;
}

export function technologyTone(name: string) {
  const normalized = name.toLowerCase();
  if (normalized.includes("angular")) return "border-red-200 bg-red-50 text-red-800 dark:border-red-400/30 dark:bg-red-950/40 dark:text-red-200 [&_.technology-icon]:text-red-600 dark:[&_.technology-icon]:text-red-300";
  if (normalized.includes("typescript")) return "border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-200 [&_.technology-icon]:text-blue-600 dark:[&_.technology-icon]:text-blue-300";
  if (normalized.includes("javascript")) return "border-amber-200 bg-amber-100 text-amber-950 dark:border-yellow-400/30 dark:bg-yellow-950/40 dark:text-yellow-200 [&_.technology-icon]:text-amber-700 dark:[&_.technology-icon]:text-yellow-300";
  if (normalized.includes("python")) return "border-yellow-200 bg-yellow-100 text-blue-900 dark:border-yellow-400/30 dark:bg-slate-800 dark:text-yellow-200 [&_.technology-icon]:text-blue-700 dark:[&_.technology-icon]:text-yellow-300";
  if (normalized.includes(".net") || normalized === "c#") return "border-violet-200 bg-violet-50 text-violet-900 dark:border-violet-400/30 dark:bg-violet-950/40 dark:text-violet-200 [&_.technology-icon]:text-violet-700 dark:[&_.technology-icon]:text-violet-300";
  if (normalized.includes("react")) return "border-cyan-200 bg-cyan-50 text-cyan-900 dark:border-cyan-400/30 dark:bg-cyan-950/40 dark:text-cyan-100 [&_.technology-icon]:text-cyan-700 dark:[&_.technology-icon]:text-cyan-300";
  if (normalized.includes("next.js")) return "border-gray-300 bg-gray-100 text-gray-950 dark:border-gray-600 dark:bg-gray-100 dark:text-gray-950 [&_.technology-icon]:text-gray-950";
  if (normalized.includes("azure")) return "border-sky-200 bg-sky-50 text-sky-900 dark:border-sky-400/30 dark:bg-sky-950/40 dark:text-sky-100 [&_.technology-icon]:text-sky-700 dark:[&_.technology-icon]:text-sky-300";
  return "border-purple-200 bg-purple-50 text-gray-900 dark:border-purple-400/25 dark:bg-purple-950/50 dark:text-gray-100 [&_.technology-icon]:text-purple-800 dark:[&_.technology-icon]:text-purple-300";
}

export const skills: Skill[] = [
  // Frontend
  { name: "Angular 13–22", icon: SiAngular, color: "text-red-600", bg: "bg-red-100", ring: "ring-red-500", category: "Frontend & UI Engineering" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-700", bg: "bg-blue-100", ring: "ring-blue-600", category: "Frontend & UI Engineering" },
  { name: "JavaScript ES6+", icon: SiJavascript, color: "text-yellow-600", bg: "bg-yellow-100", ring: "ring-yellow-500", category: "Frontend & UI Engineering" },
  { name: "React", icon: SiReact, color: "text-blue-600", bg: "bg-blue-100", ring: "ring-blue-500", category: "Frontend & UI Engineering" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black", bg: "bg-gray-200", ring: "ring-gray-400", category: "Frontend & UI Engineering" },
  { name: "RxJS", icon: FaCode, color: "text-purple-600", bg: "bg-purple-100", ring: "ring-purple-500", category: "Frontend & UI Engineering" },
  { name: "HTML5", icon: FaCode, color: "text-orange-600", bg: "bg-orange-100", ring: "ring-orange-500", category: "Frontend & UI Engineering" },
  { name: "SCSS", icon: FaCode, color: "text-pink-600", bg: "bg-pink-100", ring: "ring-pink-500", category: "Frontend & UI Engineering" },

  // Architecture
  { name: "Microfrontends", icon: FaProjectDiagram, color: "text-indigo-600", bg: "bg-indigo-100", ring: "ring-indigo-500", category: "Architecture & Security" },
  { name: "Module Federation", icon: FaProjectDiagram, color: "text-violet-600", bg: "bg-violet-100", ring: "ring-violet-500", category: "Architecture & Security" },
  { name: "Native Federation", icon: FaProjectDiagram, color: "text-fuchsia-600", bg: "bg-fuchsia-100", ring: "ring-fuchsia-500", category: "Architecture & Security" },
  { name: "BFF Pattern", icon: FaServer, color: "text-sky-600", bg: "bg-sky-100", ring: "ring-sky-500", category: "Architecture & Security" },
  { name: "REST APIs", icon: FaServer, color: "text-cyan-600", bg: "bg-cyan-100", ring: "ring-cyan-500", category: "Backend & API Engineering" },
  { name: "Distributed Application Integration", icon: FaProjectDiagram, color: "text-teal-600", bg: "bg-teal-100", ring: "ring-teal-500", category: "Architecture & Security" },

  // Backend
  { name: "Python", icon: SiPython, color: "text-green-600", bg: "bg-green-100", ring: "ring-green-500", category: "Backend & API Engineering" },
  { name: "FastAPI", icon: SiFastapi, color: "text-emerald-600", bg: "bg-emerald-100", ring: "ring-emerald-500", category: "Backend & API Engineering" },
  { name: "ASP.NET Core", icon: SiDotnet, color: "text-purple-700", bg: "bg-purple-100", ring: "ring-purple-500", category: "Backend & API Engineering" },
  { name: "C#", icon: SiDotnet, color: "text-violet-700", bg: "bg-violet-100", ring: "ring-violet-500", category: "Backend & API Engineering" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-700", bg: "bg-green-100", ring: "ring-green-600", category: "Backend & API Engineering" },

  // AI & Generative AI
  { name: "LLM Integration", icon: FaBrain, color: "text-amber-600", bg: "bg-amber-100", ring: "ring-amber-500", category: "AI & Generative AI" },
  { name: "Azure AI Foundry", icon: FaBrain, color: "text-blue-700", bg: "bg-blue-100", ring: "ring-blue-600", category: "AI & Generative AI" },
  { name: "Gemini", icon: SiGooglegemini, color: "text-cyan-700", bg: "bg-cyan-100", ring: "ring-cyan-600", category: "AI & Generative AI" },
  { name: "Vertex AI", icon: SiGooglecloud, color: "text-blue-600", bg: "bg-blue-100", ring: "ring-blue-500", category: "AI & Generative AI" },
  { name: "RAG", icon: FaBrain, color: "text-purple-600", bg: "bg-purple-100", ring: "ring-purple-500", category: "AI & Generative AI" },
  { name: "Natural Language Query", icon: FaBrain, color: "text-indigo-600", bg: "bg-indigo-100", ring: "ring-indigo-500", category: "AI & Generative AI" },
  { name: "AI Agents", icon: FaBrain, color: "text-pink-600", bg: "bg-pink-100", ring: "ring-pink-500", category: "AI & Generative AI" },
  { name: "A2A", icon: FaBrain, color: "text-rose-600", bg: "bg-rose-100", ring: "ring-rose-500", category: "AI & Generative AI" },
  { name: "A2UI", icon: FaBrain, color: "text-orange-600", bg: "bg-orange-100", ring: "ring-orange-500", category: "AI & Generative AI" },

  // Cloud & Data
  { name: "Microsoft Azure", icon: VscAzure, color: "text-blue-700", bg: "bg-blue-100", ring: "ring-blue-500", category: "Cloud & Platform Engineering" },
  { name: "Google Cloud Platform", icon: SiGooglecloud, color: "text-blue-600", bg: "bg-blue-100", ring: "ring-blue-500", category: "Cloud & Platform Engineering" },
  { name: "AKS", icon: FaCloud, color: "text-sky-600", bg: "bg-sky-100", ring: "ring-sky-500", category: "Cloud & Platform Engineering" },
  { name: "GKE", icon: FaCloud, color: "text-emerald-600", bg: "bg-emerald-100", ring: "ring-emerald-500", category: "Cloud & Platform Engineering" },
  { name: "Snowflake", icon: SiSnowflake, color: "text-cyan-600", bg: "bg-cyan-100", ring: "ring-cyan-500", category: "Cloud & Platform Engineering" },
  { name: "Azure Table Storage", icon: VscAzure, color: "text-blue-500", bg: "bg-blue-100", ring: "ring-blue-400", category: "Cloud & Platform Engineering" },
  { name: "Azure Blob Storage", icon: VscAzure, color: "text-indigo-500", bg: "bg-indigo-100", ring: "ring-indigo-400", category: "Cloud & Platform Engineering" },
  { name: "PostgreSQL", icon: FaServer, color: "text-blue-800", bg: "bg-blue-100", ring: "ring-blue-600", category: "Cloud & Platform Engineering" },

  // Security
  { name: "OIDC", icon: FaShieldAlt, color: "text-green-700", bg: "bg-green-100", ring: "ring-green-500", category: "Architecture & Security" },
  { name: "OAuth Concepts", icon: FaShieldAlt, color: "text-cyan-700", bg: "bg-cyan-100", ring: "ring-cyan-600", category: "Architecture & Security" },
  { name: "SSO", icon: FaShieldAlt, color: "text-emerald-700", bg: "bg-emerald-100", ring: "ring-emerald-600", category: "Architecture & Security" },
  { name: "AES-GCM", icon: FaShieldAlt, color: "text-sky-600", bg: "bg-sky-100", ring: "ring-sky-500", category: "Architecture & Security" },
  { name: "Antiforgery", icon: FaShieldAlt, color: "text-violet-600", bg: "bg-violet-100", ring: "ring-violet-500", category: "Architecture & Security" },
  { name: "API Governance", icon: FaShieldAlt, color: "text-indigo-600", bg: "bg-indigo-100", ring: "ring-indigo-500", category: "Architecture & Security" },
  { name: "Secure API Integration", icon: FaShieldAlt, color: "text-teal-600", bg: "bg-teal-100", ring: "ring-teal-500", category: "Architecture & Security" },

  // Tools
  { name: "Git", icon: FaTools, color: "text-orange-600", bg: "bg-orange-100", ring: "ring-orange-500", category: "Development Tools" },
  { name: "Docker", icon: SiDocker, color: "text-blue-500", bg: "bg-blue-100", ring: "ring-blue-400", category: "Development Tools" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-700", bg: "bg-blue-100", ring: "ring-blue-600", category: "Development Tools" },
  { name: "Azure DevOps", icon: VscAzure, color: "text-blue-600", bg: "bg-blue-100", ring: "ring-blue-500", category: "Development Tools" },
  { name: "Vite", icon: SiVite, color: "text-purple-600", bg: "bg-purple-100", ring: "ring-purple-500", category: "Development Tools" },
  { name: "Webpack", icon: SiWebpack, color: "text-blue-600", bg: "bg-blue-100", ring: "ring-blue-500", category: "Development Tools" },
  { name: "Storybook", icon: SiStorybook, color: "text-pink-600", bg: "bg-pink-100", ring: "ring-pink-500", category: "Development Tools" },
  { name: "Postman", icon: SiPostman, color: "text-orange-600", bg: "bg-orange-100", ring: "ring-orange-500", category: "Development Tools" },
  { name: "GitHub Copilot", icon: FaTools, color: "text-gray-700", bg: "bg-gray-200", ring: "ring-gray-500", category: "Development Tools" },
];
