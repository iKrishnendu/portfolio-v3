"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProfileAvatar1 from "@/public/Images/krish-1.jpeg";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 py-20 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          }`}
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto relative">
            <Image
              src={ProfileAvatar1}
              alt="Krishnendu Sahoo"
              width={160}
              height={160}
              className="w-full h-full object-cover rounded-full border-4 border-orange-500/30 hover:border-orange-500 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500/0 via-cyan-500/0 to-orange-500/0 hover:from-orange-500/10 hover:via-cyan-500/10 hover:to-orange-500/10 transition-all duration-300"></div>
          </div>
        </div>

        <div
          className={`mb-6 text-6xl sm:text-7xl font-bold text-balance transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="block mb-2">Hey! I'm</span>
          <span className="bg-gradient-to-r from-orange-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent animate-shimmer">
            Krishnendu Sahoo
          </span>
        </div>

        <p
          className={`text-lg sm:text-xl text-muted-foreground mb-2 text-balance transition-all duration-1000 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Full Stack Developer & QA Tester | Kolkata, India
        </p>

        <p
          className={`text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto mb-12 text-balance leading-relaxed transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I craft web applications with modern technologies and ensure quality
          through comprehensive testing. Passionate about building scalable
          solutions.
        </p>

        <div
          className={`flex gap-4 justify-center flex-wrap transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Link
            href="#contact"
            className="group px-8 py-3 bg-gradient-to-r from-orange-500 to-cyan-500 text-white rounded-full hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 font-medium relative overflow-hidden hover:scale-105 active:scale-95"
          >
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            href="#projects"
            className="px-8 py-3 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-500/10 hover:shadow-lg transition-all duration-300 font-medium group hover:translate-x-1 hover:scale-105 active:scale-95"
          >
            View Work →
          </Link>
        </div>

        <div
          className={`flex gap-4 justify-center mt-16 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {[
            { icon: "🔗", href: "https://linkedin.com", label: "LinkedIn" },
            { icon: "💻", href: "https://github.com", label: "GitHub" },
            {
              icon: "📧",
              href: "mailto:krishnendusahoo.edu@gmail.com",
              label: "Email",
            },
          ].map((social, idx) => (
            <a
              key={idx}
              href={social.href}
              className="w-12 h-12 rounded-full border-2 border-foreground/20 flex items-center justify-center hover:border-orange-500 hover:bg-orange-500/10 transition-all duration-300 hover:scale-110 hover:-translate-y-2 group"
              title={social.label}
            >
              <span className="text-lg group-hover:scale-125 transition-transform duration-300 group-hover:rotate-12">
                {social.icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
