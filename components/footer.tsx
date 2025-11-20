"use client";

import { SiLinkedin, SiGithub, SiGmail } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-border/40">
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Krishnendu Sahoo
            </h3>
            <p className="text-sm text-foreground/60">
              Full Stack Developer & QA Tester
            </p>
          </div>

          <div className="flex gap-3 text-foreground/80">
            <a
              href="mailto:krishnendusahoo.edu@gmail.com"
              className="p-2 rounded-full bg-muted/50 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 border border-border/50 hover:border-orange-500"
              aria-label="Email"
            >
              <SiGmail className="w-5 h-5 text-orange-500" />
            </a>
            <a
              href="https://linkedin.com/in/krishnendu-sahoo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 border border-border/50 hover:border-orange-500 "
              aria-label="LinkedIn"
            >
              <SiLinkedin className="w-5 h-5 text-orange-500" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-muted/50 hover:bg-orange-500/20 transition-all duration-300 hover:scale-110 border border-border/50 hover:border-orange-500 "
              aria-label="GitHub"
            >
              <SiGithub className="w-5 h-5 text-orange-500" />
            </a>
          </div>
        </div>

        <div className="text-center text-sm text-foreground/60">
          <p>
            © {currentYear} Krishnendu Sahoo. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
