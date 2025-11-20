"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header({
  isDark,
  toggleTheme,
}: {
  isDark: boolean;
  toggleTheme: () => void;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleResumeDownload = () => {
    setIsPopupOpen(true);
  };

  const confirmDownload = () => {
    const link = document.createElement("a");
    link.href = "/Krishnendu_Sahoo_Resume.pdf";
    link.download = "Krishnendu_Sahoo_Resume.pdf";
    link.click();
    setIsPopupOpen(false);
  };

  const cancelDownload = () => {
    setIsPopupOpen(false);
  };

  return (
    <header className="sticky top-4 z-50 px-4 animate-fadeIn">
      <nav className="max-w-3xl mx-auto">
        <div className="bg-background/80 backdrop-blur-md border border-border/40 rounded-full px-2 py-3 sm:px-8 sm:py-4 flex items-center justify-between shadow-lg hover:shadow-2xl hover:border-orange-500/30 transition-all duration-300">
          <Link
            href="#"
            className="text-lg sm:text-xl font-bold bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent hover:from-cyan-400 hover:to-orange-400 transition-all duration-300 hover:scale-110 active:scale-95"
          >
            Krish.
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-1">
            {navItems.map((item, idx) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-orange-500 transition-all duration-300 relative group"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            {/* Resume Button Desktop */}
            <button
              onClick={handleResumeDownload}
              className="ml-2 px-4 py-2 text-sm font-medium text-foreground/70 bg-muted/50 rounded-lg hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300"
            >
              Resume
            </button>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Resume Text Button */}
            <button
              onClick={handleResumeDownload}
              className="sm:hidden px-3 py-2 text-sm font-medium text-foreground/70 bg-muted/50 rounded-lg hover:bg-orange-500/20 hover:text-orange-500 transition-all duration-300"
            >
              Resume
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-muted/50 hover:bg-muted transition-all duration-300 hover:scale-110 active:scale-95 transform"
              aria-label="Toggle theme"
            >
              {isDark ? "☀️" : "🌙"}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden mt-2 bg-background/90 backdrop-blur-md border border-border/40 rounded-2xl p-4 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-sm text-foreground/70 hover:text-orange-500 hover:bg-muted/50 rounded-lg transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Resume Confirmation Popup */}
      <AnimatePresence>
        {isPopupOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <motion.div
              className="bg-background rounded-xl p-6 max-w-sm w-full text-center shadow-xl"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
            >
              <p className="mb-4 text-lg font-medium text-foreground">
                Do you want to download the resume?
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={confirmDownload}
                  className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-all duration-300"
                >
                  Yes
                </button>
                <button
                  onClick={cancelDownload}
                  className="px-4 py-2 bg-muted/50 text-foreground rounded-lg hover:bg-muted transition-all duration-300"
                >
                  No
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
