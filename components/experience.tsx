"use client";

import { useEffect, useState, useRef } from "react";
import { experiences } from "./common/dummy";

export default function Experience() {
  const [lineHeight, setLineHeight] = useState(0);
  const itemRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const section = document.getElementById("experience");
    if (!section) return;

    const handleScroll = () => {
      const experiencesNodes = itemRefs.current;
      if (!experiencesNodes.length) return;

      const lastItem = experiencesNodes[experiencesNodes.length - 1];
      const lastItemBottom = lastItem.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      // Calculate progress: from top of section to bottom of last item
      let progress =
        (windowHeight - section.getBoundingClientRect().top) /
        (lastItemBottom - section.getBoundingClientRect().top);
      progress = Math.min(Math.max(progress, 0), 1);

      setLineHeight(progress * 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // IntersectionObserver for mobile animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-x-0");
            entry.target.classList.remove(
              "opacity-0",
              "-translate-x-4",
              "sm:-translate-x-10"
            );
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      itemRefs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-4 bg-background relative overflow-x-visible"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Experience</h2>

        <div className="relative">
          {/* Timeline background */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-gray-300 rounded" />

          {/* Dynamic timeline progress */}
          <div
            className="absolute left-6 sm:left-8 top-0 w-1 bg-gradient-to-b from-cyan-500 to-orange-500 rounded transition-all duration-100 ease-out"
            style={{ height: `${lineHeight}%` }}
          />

          <div className="space-y-16 sm:space-y-20">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                ref={(el) => (itemRefs.current[idx] = el!)}
                className="relative pl-12 sm:pl-32 opacity-0 -translate-x-4 sm:-translate-x-10 transition-all duration-500 ease-out"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Node */}
                <div className="absolute left-0 -top-2 w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br from-cyan-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg z-10">
                  <div className="w-10 sm:w-14 h-10 sm:h-14 bg-background rounded-full flex items-center justify-center font-bold text-base sm:text-lg">
                    {idx + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="bg-muted/50 border border-border/50 rounded-lg p-4 sm:p-6 hover:border-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative">
                  {/* Date */}
                  <p className="text-sm font-semibold text-orange-500 mb-2 sm:mb-0 sm:absolute sm:top-4 sm:right-6">
                    {exp.duration}
                  </p>

                  <div className="mb-4 pr-0 sm:pr-40">
                    <h3 className="text-lg sm:text-xl font-bold text-cyan-500 mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-foreground/80 font-medium">
                      @{exp.company}
                    </p>
                  </div>

                  <ul className="space-y-2 sm:space-y-3 break-words">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-foreground/70 flex items-start gap-2 sm:gap-3"
                      >
                        <span className="text-cyan-500 font-bold mt-0.5 flex-shrink-0">
                          •
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
