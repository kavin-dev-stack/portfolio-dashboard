import Hero from "./components/hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "PromptMate",
    description: "AI Prompt Manager web app built with Next.js & Tailwind.",
    image: "/projects/promptmate.png",
  },
  {
    id: 2,
    name: "Food Recipe App",
    description: "Recipe finder using Angular & Python backend.",
    image: "/projects/recipeapp.png",
  },
];

const skills: string[] = [
  "Next.js",
  "Tailwind CSS",
  "React",
  "Node.js",
  "Python",
  "Framer Motion",
];

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Contact />
    </main>
  );
}
