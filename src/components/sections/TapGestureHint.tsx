"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const OPACITY = [0, 1, 1, 1, 0];
const SCALE = [1, 1, 0.78, 1, 1];
const TIMES = [0, 0.15, 0.45, 0.62, 1];

export function TapGestureHint({
  base,
  baseWidth,
  baseHeight,
  hand,
  handLeft,
  handTop,
  alt,
}: {
  base: string;
  baseWidth: number;
  baseHeight: number;
  hand: string;
  handLeft: string;
  handTop: string;
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
        src={hand}
        alt=""
        className="pointer-events-none absolute w-[14%]"
        style={{ left: handLeft, top: handTop, x: "-50%", y: "-50%" }}
        animate={{ opacity: OPACITY, scale: SCALE }}
        transition={{
          duration: 1.3,
          ease: "easeInOut",
          times: TIMES,
          repeat: Infinity,
          repeatDelay: 1.1,
        }}
      />
    </div>
  );
}
