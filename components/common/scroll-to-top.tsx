"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!showScrollTop) return null;

  return (
    <button
      onClick={scrollToTop}
      className="
        fixed bottom-6 right-6 z-50
        bg-orange-300 text-primary-foreground
        p-3 rounded-full shadow-lg
        hover:scale-110 hover:bg-orange-500 transition-all duration-300
        dark:bg-white dark:text-black cursor-pointer
      "
    >
      ↑
    </button>
  );
}
