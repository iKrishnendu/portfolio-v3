"use client";

import { useEffect, useState } from "react";
import { projects } from "./common/dummy";
import SimpleRippleCard from "./common/smart-indicator-card";

export default function Projects() {
  const [visibleSlides, setVisibleSlides] = useState<Record<string, boolean>>(
    {}
  );

  useEffect(() => {
    const section = document.getElementById("projects");
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-slide-id");
          if (!id) return;
          if (entry.isIntersecting) {
            setVisibleSlides((prev) => ({ ...prev, [id]: true }));
          }
        });
      },
      { threshold: 0.4 }
    );

    const slides = Array.from(
      section.querySelectorAll<HTMLElement>(".mobile-slide")
    );
    slides.forEach((slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>

        <SimpleRippleCard
          title="Archive"
          description="Tap to view complete project list"
          link="/projects"
          clasName="mb-10"
        />

        {/* ---------- MOBILE: Snap Scroll ---------- */}
        <div className="lg:hidden snap-y snap-mandatory h-screen overflow-y-scroll scrollbar-none">
          {projects.slice(0, 3).map((project, idx) => {
            const slideId = `slide-${idx}`;
            const shown = !!visibleSlides[slideId];

            return (
              <div
                key={idx}
                data-slide-id={slideId}
                className="mobile-slide snap-start h-screen flex flex-col justify-start px-4"
              >
                <div
                  className={`p-6 bg-background rounded-xl border border-border/50 shadow-lg transform transition-all duration-700 ${
                    shown
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-24"
                  }`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  <div className="h-40 bg-gradient-to-br from-orange-400/20 to-cyan-400/20 rounded-lg mb-5 flex items-center justify-center">
                    <div className="text-6xl">{project.icon}</div>
                  </div>

                  <h3 className="font-bold text-xl mb-2">{project.title}</h3>
                  <p className="text-sm text-orange-500 mb-2">
                    {project.duration}
                  </p>
                  <p className="text-sm text-foreground/70 mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-orange-500/20 text-orange-500 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------- DESKTOP GRID ---------- */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, 3).map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-background rounded-xl border border-border/50 hover:border-orange-500 transition-all duration-500 group hover:shadow-xl hover:-translate-y-2"
            >
              <div className="h-32 bg-gradient-to-br from-orange-400/20 to-cyan-400/20 rounded-lg mb-4 flex items-center justify-center">
                <div className="text-5xl">{project.icon}</div>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-orange-500">
                {project.title}
              </h3>
              <p className="text-xs text-orange-500 mb-2">{project.duration}</p>
              <p className="text-sm text-foreground/70 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-orange-500/20 text-orange-500 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
