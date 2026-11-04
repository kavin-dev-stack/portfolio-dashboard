"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  const [auroraDismissed, setAuroraDismissed] = useState(false);

  useEffect(() => {
    const dismissAurora = () => {
      if (window.scrollY > 24) {
        setAuroraDismissed(true);
        window.removeEventListener("scroll", dismissAurora);
      }
    };

    window.addEventListener("scroll", dismissAurora, { passive: true });
    dismissAurora();
    return () => window.removeEventListener("scroll", dismissAurora);
  }, []);

  return (
    <section
      id="home"
      tabIndex={-1}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4rem)] scroll-mt-16 items-center overflow-hidden bg-gradient-to-br from-purple-100 via-violet-100 to-indigo-300 px-5 pb-16 pt-24 text-gray-950 dark:from-gray-950 dark:via-purple-950 dark:to-indigo-950 dark:text-white sm:px-8 sm:py-16 lg:pt-20 lg:pb-11.5"
    >
      <div
        aria-hidden="true"
        className={`hero-aurora ${auroraDismissed ? "hero-aurora--dismissed" : ""}`}
      />
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-purple-900 dark:text-purple-200">
            Software Engineer
          </p>
          <h1
            id="hero-heading"
            className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-purple-800 dark:text-purple-300">
              Kavin Balamurugan
            </span>
          </h1>
          <p className="mt-5 text-xl font-semibold text-gray-800 dark:text-gray-100 sm:text-2xl">
            Full-Stack &amp; AI Applications
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg">
            I build enterprise applications across frontend, backend, and AI —
            from microfrontend platforms and APIs to retrieval-augmented
            applications.
          </p>

          <div className="mt-5 w-full max-w-2xl">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400">
              Selected technologies
            </p>
            <HeroCarousel />
          </div>

          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row lg:justify-start">
            <Link
              href="#projects"
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 py-3 font-semibold text-white shadow-lg transition hover:from-purple-700 hover:to-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-800 dark:focus-visible:outline-purple-200"
            >
              Explore selected work
            </Link>
            <Link
              href="/Kavin_Balamurugan_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple-800/30 bg-white/70 px-6 py-3 font-semibold text-purple-950 transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-purple-800 dark:border-purple-200/30 dark:bg-gray-900/60 dark:text-white dark:hover:bg-gray-800 dark:focus-visible:outline-purple-200"
            >
              View résumé
            </Link>
          </div>
        </div>

        <div className="relative mx-auto flex w-full max-w-lg items-center justify-center lg:max-w-none">
          <div className="relative z-10 aspect-square w-[min(82vw,27rem)]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="/profile-img.png"
                  alt="Kavin Balamurugan"
                  fill
                  priority
                  sizes="(max-width: 768px) 82vw, (max-width: 1024px) 42vw, 432px"
                  className="hero-portrait-image"
                />
              </div>
              <div className="hero-portrait-head-breakout" aria-hidden="true">
                <Image
                  src="/profile-img.png"
                  alt=""
                  fill
                  sizes="(max-width: 768px) 82vw, (max-width: 1024px) 42vw, 432px"
                  className="hero-portrait-image"
                />
              </div>
            </motion.div>
          </div>
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute aspect-square w-[min(82vw,27rem)] rounded-full bg-[conic-gradient(from_180deg,#c084fc,#a855f7,#6366f1)] shadow-2xl dark:bg-[conic-gradient(from_180deg,#a855f7,#7c3aed,#4f46e5)]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: [0.75, 1, 1], opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
          />
        </div>
      </div>

      <Image
        src="/gifs/cat-movement.gif"
        alt=""
        aria-hidden="true"
        className="hero-cat pointer-events-none absolute bottom-[-11px] right-2 z-10 w-14 opacity-50 sm:bottom-[-11px] sm:right-5 sm:w-20"
        width={128}
        height={128}
        unoptimized
      />
    </section>
  );
}
