"use client";

import { useState, useEffect } from "react";
import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Experience from "@/components/experience";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDarkMode =
      localStorage.getItem("theme") === "dark" ||
      (!localStorage.getItem("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setIsDark(isDarkMode);
    if (isDarkMode) document.documentElement.classList.add("dark");
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  if (!mounted) return null;

  return (
    <div className="bg-background text-foreground transition-colors duration-300">
      <Header isDark={isDark} toggleTheme={toggleTheme} />

      <main
        className="
    snap-y snap-mandatory h-screen overflow-y-scroll
    lg:snap-none lg:h-auto lg:overflow-visible
  "
      >
        <section className="snap-start">
          <Hero />
        </section>
        <section className="snap-start">
          <About />
        </section>
        <section className="snap-start">
          <Skills />
        </section>
        <section className="snap-start">
          <Experience />
        </section>
        <section className="snap-start">
          <Projects />
        </section>
        <section className="snap-start">
          <Contact />
        </section>
        <section className="snap-start">
          <Footer />
        </section>
      </main>
    </div>
  );
}
