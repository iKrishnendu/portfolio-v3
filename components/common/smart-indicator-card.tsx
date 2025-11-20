"use client";

import { motion } from "framer-motion";

type SimpleRippleCardProps = {
  title: string;
  description: string;
  id?: string;
  link?: string;
  clasName?: string;
};

export default function SimpleRippleCard({
  title,
  description,
  id,
  link,
  clasName,
}: SimpleRippleCardProps) {
  const handleClick = () => {
    if (id) {
      document.querySelector("#" + id)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    if (link) {
      window.location.href = link;
    }
  };

  return (
    <div className={`flex justify-center ${clasName}`}>
      <motion.button
        onClick={handleClick}
        className="
          relative overflow-hidden
           p-1 px-2
          rounded-xl bg-background/70 backdrop-blur-sm 
          shadow border border-border/40
          text-left text-sm text-foreground/70 cursor-pointer
        "
        whileHover={{ scale: 1.03 }}
      >
        {/* WATER RIPPLE EFFECT */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          animate={{
            background: [
              "radial-gradient(circle, rgba(255,165,0,0.18) 0%, transparent 60%)",
              "radial-gradient(circle, rgba(255,165,0,0.08) 20%, transparent 70%)",
              "radial-gradient(circle, rgba(255,165,0,0.12) 10%, transparent 80%)",
              "radial-gradient(circle, rgba(255,165,0,0.18) 0%, transparent 60%)",
            ],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* TEXT */}
        <div className="relative z-10 flex flex-row gap-2 items-center">
          <span className="font-semibold border border-orange-400 rounded-3xl px-3 py-1 inline-block w-fit">
            {title}
          </span>

          <span className="text-xs opacity-70">{description}</span>
        </div>
      </motion.button>
    </div>
  );
}
