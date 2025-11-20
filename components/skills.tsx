"use client";

import { useEffect, useState } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMui,
  SiMongodb,
  SiGit,
  SiPostman,
  SiVercel,
  SiFirebase,
  SiLinux,
} from "react-icons/si";
import { TbCompass } from "react-icons/tb";
import { BiTestTube } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { FaJava } from "react-icons/fa";
import UpcomingCard from "./common/upcoming-card";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleSlides, setVisibleSlides] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const section = document.getElementById("skills");
    if (!section) return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    sectionObserver.observe(section);

    const slideObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-slide-id");
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleSlides((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.5 }
    );

    const slides = Array.from(
      section.querySelectorAll<HTMLElement>(".mobile-slide")
    );
    slides.forEach((el) => slideObserver.observe(el));

    return () => {
      sectionObserver.disconnect();
      slideObserver.disconnect();
    };
  }, []);

  const skills: Record<
    string,
    { name: string; Icon: React.ComponentType<any> }[]
  > = {
    Languages: [
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss3 },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Java", Icon: FaJava },
      { name: "SQL", Icon: SiMysql },
    ],
    Frameworks: [
      { name: "React.js", Icon: SiReact },
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Express", Icon: SiExpress },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Material UI", Icon: SiMui },
      { name: "MongoDB", Icon: SiMongodb },
    ],
    "QA Testing": [
      { name: "Manual Testing", Icon: AiOutlineEdit },
      { name: "Smoke & Regression", Icon: BiTestTube },
      { name: "Compatibility", Icon: TbCompass },
      { name: "Exploratory", Icon: BiTestTube },
      { name: "Usability", Icon: AiOutlineEdit },
      { name: "Test Case Design", Icon: AiOutlineEdit },
    ],
    Tools: [
      { name: "Git", Icon: SiGit },
      { name: "Postman", Icon: SiPostman },
      { name: "Vercel", Icon: SiVercel },
      { name: "Firebase", Icon: SiFirebase },
      { name: "Linux", Icon: SiLinux },
      { name: "MongoDB Compass", Icon: TbCompass },
    ],
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className={`text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Skills & Expertise
        </h2>

        {/* MOBILE */}
        <div className="lg:hidden snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-none">
          {Object.entries(skills).map(([category, items], idx) => {
            const slideId = `slide-${idx}`;
            const shown = !!visibleSlides[slideId];

            return (
              <div
                key={category}
                data-slide-id={slideId}
                className="mobile-slide snap-start h-screen flex flex-col justify-start items-center px-4 pt-10"
              >
                <h3 className="text-left w-full font-semibold text-xl text-orange-500 mb-4">
                  {category}
                </h3>
                <div className="text-orange-500 font-semibold mb-3 text-sm">
                  {idx + 1} / {Object.keys(skills).length}
                </div>

                <div
                  className={`w-full max-w-xl p-5 rounded-xl border border-border/40 bg-background/70 backdrop-blur-sm shadow-md transform transition-all duration-700 ${
                    shown
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-24"
                  }`}
                  style={{ transitionDelay: `${idx * 120}ms` }}
                >
                  <ul className="grid grid-cols-2 gap-3">
                    {items.map((skill, sidx) => {
                      const Icon = skill.Icon;
                      return (
                        <li
                          key={skill.name}
                          className="flex items-center gap-2 bg-muted/30 p-2 rounded-lg transition-all"
                          style={{ transitionDelay: `${sidx * 25}ms` }}
                        >
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-400/10 to-cyan-400/10 text-lg text-orange-500">
                            <Icon />
                          </div>
                          <span className="font-medium text-xs">
                            {skill.name}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                {/* Upcoming Card */}
                <UpcomingCard
                  title="Upcoming"
                  buttonText="Upcoming Projects"
                  targetId="projects"
                />
              </div>
            );
          })}
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items], idx) => {
            const FirstIcon = items[0]?.Icon || SiReact;
            return (
              <div
                key={category}
                className={`p-6 bg-background rounded-xl border border-border/50 hover:border-orange-500 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${idx * 120}ms` }}
              >
                <div className="h-32 bg-gradient-to-br from-orange-400/20 to-cyan-400/20 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-5xl text-orange-500">
                    <FirstIcon />
                  </div>
                </div>
                <h3 className="font-bold text-lg mb-3 group-hover:text-orange-500">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((skill) => {
                    const Icon = skill.Icon;
                    return (
                      <li
                        key={skill.name}
                        className="flex items-center gap-3 text-sm text-foreground/70 hover:text-foreground transition-all"
                      >
                        <div className="w-8 h-8 rounded-md flex items-center justify-center bg-muted/20">
                          <Icon className="text-lg" />
                        </div>
                        <span>{skill.name}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
