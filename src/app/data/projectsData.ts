import { IconType } from "react-icons";
import {
  SiAdobe,
  SiAngular,
  SiDotnet,
  SiFastapi,
  SiGooglegemini,
  SiGooglecloud,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiReact,
  SiTypescript,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { FaChartLine, FaCode, FaProjectDiagram } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";

export interface Project {
  id: string;
  name: string;
  classification: string;
  context: string;
  contribution: string;
  technologies: { name: string; icon: IconType }[];
  outcome?: string;
  stage?: "Early-stage initiative" | "Proof of concept";
}

export const workProjects: Project[] = [
  {
    id: "audience-builder",
    name: "Audience Builder",
    classification: "Marketing Assistant · Enterprise AI",
    context:
      "An audience-building capability integrated into a conversational marketing platform.",
    contribution:
      "Developed Audience Builder end-to-end and integrated it into Marketing Assistant, including its Angular/Vite microfrontend, ASP.NET Core BFF, and natural-language query features.",
    outcome: "Reduced initial load time by 40% through migration and integration.",
    technologies: [
      { name: "Angular", icon: SiAngular },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Vite", icon: SiVite },
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    id: "genai-content-suite",
    name: "Enterprise Generative AI Content Suite",
    classification: "Production AI application",
    context:
      "A suite of AI-assisted marketing content workflows delivered to business teams.",
    contribution:
      "Developed production modules for multilingual translation, persona generation, SEO optimization, AI writing assistance, and pitch creation across frontend and backend integration.",
    technologies: [
      { name: "Angular", icon: SiAngular },
      { name: "ASP.NET Core", icon: SiDotnet },
      { name: "Azure AI", icon: VscAzure },
    ],
  },
  {
    id: "cognizant-ai",
    name: "Cognizant.ai",
    classification: "Enterprise RAG application",
    context:
      "An enterprise AI application with retrieval-augmented generation capabilities.",
    contribution:
      "Implemented and validated frontend and backend features using Next.js, React, and FastAPI, integrating Gemini and Vertex AI Search. Separately evaluated session persistence, security, and deployment readiness; those architectural improvements remain pending.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Gemini", icon: SiGooglegemini },
      { name: "Vertex AI Search", icon: SiGooglecloud },
    ],
  },
  {
    id: "camp",
    name: "Creative Asset Management Platform",
    classification: "Enterprise asset workflows",
    context:
      "A component library and digital asset workflow built for an enterprise platform.",
    contribution:
      "Built reusable AEM and Webpack components, integrated Azure Blob Storage through Python APIs, and authored component standards and documentation.",
    outcome:
      "Reduced developer onboarding effort by over 50% across the component library.",
    technologies: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "Adobe Experience Manager", icon: SiAdobe },
      { name: "Webpack", icon: SiWebpack },
      { name: "Python", icon: SiPython },
      { name: "Azure Blob Storage", icon: VscAzure },
    ],
  },
  {
    id: "media-budget-optimizer",
    name: "Media Budget Optimizer",
    classification: "Marketing analytics",
    context:
      "An early-stage initiative exploring deterministic media budget optimization.",
    contribution:
      "Working with business stakeholders to gather historical campaign data, channel taxonomy, business rules, and benchmark requirements before engine development.",
    stage: "Early-stage initiative",
    technologies: [
      { name: "Python", icon: SiPython },
      { name: "Marketing analytics", icon: FaChartLine },
    ],
  },
];

export const labProjects: Project[] = [
  {
    id: "a2ui-a2a-poc",
    name: "Dynamic AI Interface",
    classification: "Labs & POCs · A2UI / A2A",
    context:
      "A proof of concept for agent-driven dynamic user interfaces and agent-to-agent communication.",
    contribution:
      "Built a Lit and Vite frontend with FastAPI, integrated A2UI packages, and used a mock agent transport to explore dynamically rendered UI messages.",
    stage: "Proof of concept",
    technologies: [
      { name: "Lit", icon: FaCode },
      { name: "Vite", icon: SiVite },
      { name: "TypeScript", icon: SiTypescript },
      { name: "FastAPI", icon: SiFastapi },
      { name: "A2UI / A2A", icon: FaProjectDiagram },
    ],
  },
];
