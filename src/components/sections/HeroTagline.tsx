"use client";

import { motion } from "framer-motion";

const ACCENT = "#D97757";

const TRACK_EM = 1.02; // reserved lane the arrow travels inside
const ARROW_EM = 0.46;
const TRAVEL_EM = TRACK_EM - ARROW_EM;

/**
 * The arrow lives in its own fixed-width lane, so however far it slides it can
 * never overlap the glyphs on either side — the gap is reserved up front
 * rather than being whatever the animation happens to leave over.
 */
function Arrow() {
  return (
    <span
      aria-hidden
      className="relative inline-flex shrink-0 items-center"
      style={{ width: `${TRACK_EM}em`, height: "1em" }}
    >
      <motion.svg
        viewBox="0 0 32 24"
        className="absolute top-1/2 left-0"
        style={{ width: `${ARROW_EM}em`, height: `${ARROW_EM}em`, y: "-50%" }}
        animate={{ x: ["0em", `${TRAVEL_EM}em`], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.22, 0.72, 1],
        }}
      >
        <path
          d="M2 12 H20"
          fill="none"
          stroke="currentColor"
          strokeWidth="4.5"
          strokeLinecap="round"
        />
        <path d="M17 4 L30 12 L17 20 Z" fill="currentColor" />
      </motion.svg>
    </span>
  );
}

export function HeroTagline() {
  return (
    <span className="flex items-center gap-[0.3em] font-bold tracking-tight text-ink">
      <span>Designing</span>

      <span className="flex items-center">
        <svg viewBox="0 0 40 40" className="h-[0.76em] w-[0.76em] shrink-0" aria-hidden>
          <circle cx="20" cy="20" r="14" fill="none" stroke={ACCENT} strokeWidth="7.5" />
        </svg>
        <Arrow />
        <span style={{ color: ACCENT }}>1</span>
      </span>

      <span className="text-muted-2">&amp;</span>

      <span>Beyond</span>
    </span>
  );
}
