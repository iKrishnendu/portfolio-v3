"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    const isDarkActive = document.documentElement.classList.contains("dark");
    setIsDark(isDarkActive);
  }, []);

  const toggleTheme = () => {
    const isDarkActive = document.documentElement.classList.contains("dark");

    if (isDarkActive) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

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

        <section className="snap-start h-screen md:h-auto">
          <Skills />
        </section>

        <section className="snap-start">
          <Experience />
        </section>

        <section className="snap-start h-screen md:h-auto">
          <Projects />
        </section>

        <section className="snap-start">
          <Contact />
          <Footer />
        </section>
      </main>
    </div>
  );
}
