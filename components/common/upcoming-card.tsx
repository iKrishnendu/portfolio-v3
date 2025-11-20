"use client";

import { motion } from "framer-motion";

interface UpcomingCardProps {
  title: string;
  buttonText: string;
  targetId: string;
  icon?: string;
}

export default function UpcomingCard({
  title,
  buttonText,
  targetId,
  icon = "🚀",
}: UpcomingCardProps) {
  const handleClick = () => {
    document.querySelector("#" + targetId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-12 pt-2 flex justify-center">
      <motion.button
        onClick={handleClick}
        className="
          w-full max-w-xl p-3 rounded-xl border border-border/40
          bg-background/80 backdrop-blur-sm shadow-lg
          text-center flex items-center justify-center
          transition-all duration-300 hover:scale-[1.06]
          hover:border-orange-500
        "
        animate={{
          scale: [1, 1.04, 0.97, 1.03, 1],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <p className="text-sm text-foreground/70">
          {icon} Tap to go to {buttonText} ↓
        </p>
      </motion.button>
    </div>
  );
}
