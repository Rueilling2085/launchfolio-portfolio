"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const ACCENT = "#D97757";

/**
 * Replaces the native pointer with a multiplayer-canvas style cursor while the
 * pointer is inside `targetId`. Springs give it a slight trailing lag so it
 * reads as a live collaborator rather than a pinned graphic.
 *
 * Only engages for fine pointers — touch devices keep their normal behaviour.
 */
export function CursorTag({
  targetId,
  label = "You",
}: {
  targetId: string;
  label?: string;
}) {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const springX = useSpring(x, { stiffness: 620, damping: 42, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 620, damping: 42, mass: 0.45 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const handleMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
    };
    const handleEnter = (event: MouseEvent) => {
      // jump straight to the entry point instead of gliding in from the corner
      x.jump(event.clientX);
      y.jump(event.clientY);
      setVisible(true);
    };
    const handleLeave = () => setVisible(false);

    el.style.cursor = "none";
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.style.cursor = "";
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [targetId, x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[60] flex select-none items-start"
      style={{ x: springX, y: springY }}
      animate={{ opacity: visible ? 1 : 0, scale: visible ? 1 : 0.7 }}
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      <div className="flex items-start" style={{ transform: "translate(-5px, -3px)" }}>
        <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0 drop-shadow-sm">
          <path
            d="M4.5 2.2 L18.4 11.6 L11.7 12.4 L8.5 18.6 Z"
            fill={ACCENT}
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
        </svg>
        <span
          className="-mt-0.5 -ml-1 rounded-full px-3 py-1 text-[13px] font-bold text-white shadow-sm"
          style={{ background: ACCENT }}
        >
          {label}
        </span>
      </div>
    </motion.div>
  );
}
