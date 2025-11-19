"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ProfileAvatar2 from "@/public/Images/krish-2.webp";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 px-4 bg-muted/30 relative">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`relative w-full h-64 sm:h-100 rounded-2xl border-2 border-orange-500/20 overflow-hidden transition-all duration-1000 hover:border-orange-500 hover:shadow-2xl hover:shadow-orange-500/30 group ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <Image
              src={ProfileAvatar2}
              alt="Krishnendu Sahoo"
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>

          <div
            className={`space-y-4 text-foreground/80 leading-relaxed transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="hover:text-foreground transition-colors duration-300">
              I'm a passionate Full Stack Developer and QA Tester from Kolkata,
              India, graduating from Techno International Batnagar in July 2025.
              I combine development expertise with meticulous testing to deliver
              robust, production-ready applications.
            </p>
            <p className="hover:text-foreground transition-colors duration-300">
              During my internship at 0101digital, I developed RESTful APIs with
              Node.js and Express, collaborated with QA teams, and worked in
              Agile environments. I'm well-versed in MERN stack, and have
              hands-on experience with testing methodologies.
            </p>
            <p className="hover:text-foreground transition-colors duration-300">
              I enjoy building solutions that solve real problems. Recently, I
              achieved 6th place in the SIH 2023 hackathon and have completed
              projects spanning e-commerce and QA testing frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
