"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import { Sun, Moon } from "lucide-react";

const sections = [
  { id: "home", label: "Home" },
  { id: "projects", label: "Selected Work" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const scrolledRef = useRef(false);
  const activeRef = useRef("home");

  const navigateFromMobileMenu = (id: string) => {
    setMobileOpen(false);
    window.requestAnimationFrame(() => {
      document.getElementById(id)?.focus({ preventScroll: true });
    });
  };

  useEffect(() => {
    let animationFrame = 0;

    const updateNavigation = () => {
      const isScrolled = window.scrollY > 24;
      if (isScrolled !== scrolledRef.current) {
        scrolledRef.current = isScrolled;
        setScrolled(isScrolled);
      }
      const readingLine = window.scrollY + window.innerHeight * 0.35;
      let currentSection = sections[0].id;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= readingLine) {
          currentSection = section.id;
        }
      }

      if (currentSection !== activeRef.current) {
        activeRef.current = currentSection;
        setActive(currentSection);
      }
    };

    const handleScroll = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(updateNavigation);
    };

    updateNavigation();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const syncTheme = () => {
      setDarkMode(document.documentElement.classList.contains("dark"));
    };

    syncTheme();
    window.addEventListener("themeChange", syncTheme);
    return () => window.removeEventListener("themeChange", syncTheme);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const toggleDarkMode = () => {
    const nextThemeIsDark = !darkMode;
    document.documentElement.classList.toggle("dark", nextThemeIsDark);
    localStorage.setItem("theme", nextThemeIsDark ? "dark" : "light");
    setDarkMode(nextThemeIsDark);
    window.dispatchEvent(new Event("themeChange"));
  };

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <nav
        aria-label="Primary navigation"
        className="relative mx-auto flex min-h-14 max-w-7xl items-center justify-center"
      >
        <div className={`flex items-center rounded-full border px-2 py-1.5 transition-all duration-300 ease-out ${scrolled ? "border-purple-200/80 bg-white/85 shadow-lg backdrop-blur-xl dark:border-purple-300/20 dark:bg-gray-950/85" : "border-transparent bg-transparent shadow-none backdrop-blur-none"}`}>
          <div className="hidden items-center gap-1 md:flex">
            {sections.map(({ id, label }) => (
              <Link
                key={id}
                href={`#${id}`}
                aria-current={active === id ? "location" : undefined}
                className={`relative inline-flex min-h-10 items-center rounded-full px-3 text-sm font-medium transition-colors hover:bg-purple-100/80 hover:text-purple-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:hover:bg-purple-900/60 dark:hover:text-white dark:focus-visible:outline-purple-200 lg:px-4 ${active === id ? "text-purple-950 dark:text-purple-100" : "text-gray-800 dark:text-gray-100"}`}
              >
                {label}
                {active === id && (
                  <span aria-hidden="true" className="absolute inset-x-3 bottom-1 h-0.5 rounded-full bg-purple-600 dark:bg-purple-300" />
                )}
              </Link>
            ))}
            <span aria-hidden="true" className="mx-1 h-7 w-px bg-gray-300 dark:bg-gray-700" />
            <ThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle darkMode={darkMode} onToggle={toggleDarkMode} />
            <button
              ref={menuButtonRef}
              type="button"
              aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full text-xl text-gray-900 hover:bg-purple-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:text-white dark:hover:bg-gray-800 dark:focus-visible:outline-purple-200"
            >
              {mobileOpen ? <FaTimes aria-hidden="true" /> : <FaBars aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-1/2 top-full mt-2 w-[min(calc(100vw-1.5rem),24rem)] -translate-x-1/2 rounded-3xl border border-purple-200/80 bg-white/95 px-4 py-3 shadow-xl backdrop-blur-xl dark:border-purple-300/20 dark:bg-gray-950/95 md:hidden"
        >
          <ul className="mx-auto flex max-w-7xl flex-col gap-1">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  aria-current={active === id ? "location" : undefined}
                  onClick={() => navigateFromMobileMenu(id)}
                  className="flex min-h-11 items-center rounded-lg px-4 font-medium text-gray-900 hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-purple-700 dark:text-gray-100 dark:hover:bg-gray-800 dark:focus-visible:outline-purple-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

function ThemeToggle({
  darkMode,
  onToggle,
}: {
  darkMode: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={darkMode ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={darkMode}
      onClick={onToggle}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-300 bg-white text-purple-800 transition-colors hover:bg-purple-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700 dark:border-gray-700 dark:bg-gray-900 dark:text-purple-200 dark:hover:bg-gray-800 dark:focus-visible:outline-purple-200"
    >
      {darkMode ? (
        <Sun aria-hidden="true" size={18} />
      ) : (
        <Moon aria-hidden="true" size={18} />
      )}
    </button>
  );
}
