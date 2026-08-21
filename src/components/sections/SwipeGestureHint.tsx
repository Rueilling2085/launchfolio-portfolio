"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ARROW_TOP = "83.5%";
const HAND_TOP = "85%";
const TRACK_START = "15%";
const TRACK_RIGHT = 57;
const HAND_START = 35;
const ARROW_LEFT = [TRACK_START, TRACK_START, `${TRACK_RIGHT - 28}%`, `${TRACK_RIGHT - 28}%`];
const HAND_LEFT = [
  `${HAND_START}%`,
  `${HAND_START}%`,
  `${TRACK_RIGHT - 9 + (HAND_START - 15)}%`,
  `${TRACK_RIGHT - 9 + (HAND_START - 15)}%`,
];
const FADE = [0, 1, 1, 0];
const TIMES = [0, 0.15, 0.75, 1];

export function SwipeGestureHint({
  base,
  baseWidth,
  baseHeight,
  hand,
  arrow,
  alt,
}: {
  base: string;
  baseWidth: number;
  baseHeight: number;
  hand: string;
  arrow: string;
  alt: string;
}) {
  return (
    <div className="relative w-full">
      <Image
        src={base}
        alt={alt}
        width={baseWidth}
        height={baseHeight}
        sizes="(min-width: 768px) 340px, 90vw"
        className="h-auto w-full"
      />

      <motion.img
        src={arrow}
        alt=""
        className="pointer-events-none absolute w-[28%]"
        style={{ top: ARROW_TOP, y: "-50%" }}
        animate={{ left: ARROW_LEFT, opacity: FADE }}
        transition={{ duration: 2.8, ease: "easeInOut", times: TIMES, repeat: Infinity, repeatDelay: 3.1 }}
      />

      <motion.img
        src={hand}
        alt=""
        className="pointer-events-none absolute w-[9%]"
        style={{ top: HAND_TOP, y: "-50%" }}
        animate={{ left: HAND_LEFT, opacity: FADE }}
        transition={{
          duration: 2.8,
          ease: "easeInOut",
          times: TIMES,
          repeat: Infinity,
          repeatDelay: 3.1,
          delay: 3.1,
        }}
      />
    </div>
  );
}
