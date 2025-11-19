"use client";

import { useEffect, useState } from "react";

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("projects");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Shoppers Stack",
      description:
        "Comprehensive QA testing project on multi-module e-commerce app. Designed 200+ functional, 150+ integration, and 200+ system test cases with 150+ defects identified.",
      tags: [
        "Manual Testing",
        "Functional Testing",
        "Regression",
        "WhatsApp",
        "GPay",
        "Amazon",
      ],
      duration: "Aug – Nov 2025",
      icon: "✅",
    },
    {
      title: "Doctor Appointment Website",
      description:
        "Full MERN stack application with user, doctor, and admin modules. Implemented secure JWT authentication, appointment booking system, and admin CRUD operations.",
      tags: ["React.js", "Node.js", "Express", "MongoDB", "JWT", "Vercel"],
      duration: "June – July 2025",
      icon: "⚕️",
    },
    {
      title: "ODOP E-Commerce Solution",
      description:
        "Built for SIH 2023 hackathon, an e-commerce platform promoting One District One Product for Jammu & Kashmir. Achieved 6th place in internal hackathon.",
      tags: ["React", "Node.js", "MongoDB", "E-Commerce", "Hackathon"],
      duration: "SIH 2023",
      icon: "🏆",
    },
  ];

  return (
    <section id="projects" className="py-50 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2
          className={`text-4xl font-bold mb-12 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Projects
        </h2>

        {/* ---------- MOBILE: Snap Scroll (One Project Per Screen) ---------- */}
        <div className="lg:hidden snap-y snap-mandatory h-screen overflow-y-scroll space-y-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`snap-start flex flex-col justify-center transition-all duration-700 
              ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-20"
              }
            `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div className="p-6 bg-background rounded-xl border border-border/50 shadow-lg">
                <div
                  className="h-40 bg-gradient-to-br from-orange-400/20 to-cyan-400/20 
                  rounded-lg mb-5 flex items-center justify-center"
                >
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
          ))}
        </div>

        {/* ---------- DESKTOP GRID ---------- */}
        <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`p-6 bg-background rounded-xl border border-border/50 hover:border-orange-500 
              transition-all duration-500 group hover:shadow-xl hover:-translate-y-2 
              ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }
            `}
              style={{ transitionDelay: `${idx * 150}ms` }}
            >
              <div
                className="h-32 bg-gradient-to-br from-orange-400/20 to-cyan-400/20 
                rounded-lg mb-4 flex items-center justify-center"
              >
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
