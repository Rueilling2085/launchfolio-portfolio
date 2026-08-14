"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

/**
 * Page-load entrance (as opposed to RevealOnScroll's viewport trigger) — used
 * to stagger the hero so elements pop in one after another on first paint.
 */
export function EnterOnLoad({
  children,
  delay = 0,
  y = 26,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
