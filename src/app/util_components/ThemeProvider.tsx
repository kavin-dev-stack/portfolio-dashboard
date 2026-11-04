"use client";
import { useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const shouldUseDark = savedTheme
      ? savedTheme === "dark"
      : systemPrefersDark;

    document.documentElement.classList.toggle("dark", shouldUseDark);
    window.dispatchEvent(new Event("themeChange"));
  }, []);

  return <>{children}</>;
}
