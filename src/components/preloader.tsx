"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Preloader({ onComplete }: { onComplete?: () => void }) {
  const [complete, setComplete] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    // Start exit animation after 2 seconds
    const timer = setTimeout(() => {
      setExit(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (exit) {
      // Remove component from DOM after exit animation (0.5s)
      const timer = setTimeout(() => {
        setComplete(true);
        if (onComplete) {
          onComplete();
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [exit, onComplete]);

  if (complete) return null;

  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
    >
      <svg
        viewBox="0 0 100 100"
        className="w-24 h-24 sm:w-32 sm:h-32 stroke-foreground"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* < */}
        <motion.path
          d="M 35 30 L 15 50 L 35 70"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
        />
        {/* / */}
        <motion.path
          d="M 55 20 L 45 80"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1, duration: 1.5, ease: "easeInOut" }} // Staggered slightly
        />
        {/* > */}
        <motion.path
          d="M 65 30 L 85 50 L 65 70"
          variants={pathVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 1.5, ease: "easeInOut" }} // Staggered slightly
        />
      </svg>
    </motion.div>
  );
}
