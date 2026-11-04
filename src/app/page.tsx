import { MotionConfig } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

export default function HomePage() {
  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="skip-to-content"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
    </MotionConfig>
  );
}
