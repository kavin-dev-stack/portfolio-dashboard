import { IconType } from "react-icons";
import {
  SiAngular,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiDotnet,
  SiExpress,
  SiPython,
  SiMongodb,
  SiDocker,
  SiAdobe,
  SiWebpack,
  SiChartdotjs,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: IconType;
  color: string; // text color
  bg: string; // background color
  ring: string; // hover glow color
  category: string;
}

export const skills: Skill[] = [
  // Frontend
  {
    name: "Angular",
    icon: SiAngular,
    color: "text-red-600",
    bg: "bg-red-100",
    ring: "ring-red-500",
    category: "Frontend",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-blue-600",
    bg: "bg-blue-100",
    ring: "ring-blue-500",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black",
    bg: "bg-gray-200",
    ring: "ring-gray-400",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-700",
    bg: "bg-blue-100",
    ring: "ring-blue-600",
    category: "Frontend",
  },
  {
    name: "JavaScript (ES6+)",
    icon: SiJavascript,
    color: "text-yellow-600",
    bg: "bg-yellow-100",
    ring: "ring-yellow-500",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-600",
    bg: "bg-cyan-100",
    ring: "ring-cyan-500",
    category: "Frontend",
  },

  // Backend
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-500",
    bg: "bg-gray-200",
    ring: "ring-gray-500",
    category: "Backend",
  },
  {
    name: "Python (FastAPI)",
    icon: SiPython,
    color: "text-green-600",
    bg: "bg-green-100",
    ring: "ring-green-500",
    category: "Backend",
  },
  {
    name: "ASP.NET Core",
    icon: SiDotnet,
    color: "text-purple-700",
    bg: "bg-purple-100",
    ring: "ring-purple-500",
    category: "Backend",
  },

  // Database / Cloud
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-700",
    bg: "bg-green-100",
    ring: "ring-green-600",
    category: "Database",
  },
  {
    name: "Azure Blob Storage",
    icon: VscAzure,
    color: "text-blue-700",
    bg: "bg-blue-100",
    ring: "ring-blue-500",
    category: "Database",
  },

  // Tools
  {
    name: "Docker",
    icon: SiDocker,
    color: "text-blue-500",
    bg: "bg-blue-100",
    ring: "ring-blue-400",
    category: "Tools",
  },
  {
    name: "AEM",
    icon: SiAdobe,
    color: "text-red-600",
    bg: "bg-red-100",
    ring: "ring-red-500",
    category: "Tools",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    color: "text-blue-600",
    bg: "bg-blue-100",
    ring: "ring-blue-500",
    category: "Tools",
  },
  {
    name: "Chart.js",
    icon: SiChartdotjs,
    color: "text-pink-600",
    bg: "bg-pink-100",
    ring: "ring-pink-500",
    category: "Tools",
  },
];
