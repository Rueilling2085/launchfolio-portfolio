"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export function RevealText({
  lines,
  delay = 0,
  stagger = 0.12,
  className = "",
}: {
  lines: ReactNode[];
  delay?: number;
  stagger?: number;
  className?: string;
}) {
  return (
    <span className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
