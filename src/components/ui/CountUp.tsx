"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

export function CountUp({
  value,
  durationMs = 1200,
  className = "",
}: {
  value: string;
  durationMs?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduceMotion = useReducedMotion();
  const hasStarted = useRef(false);

  const target = Number(value);
  const isNumeric = value.trim() !== "" && Number.isFinite(target);
  const shouldAnimate = isNumeric && !reduceMotion;

  // Hold the final value until the count actually starts. If the element never
  // scrolls into view — or JS/IntersectionObserver never runs — the real number
  // is what stays on screen rather than a stranded zero.
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    if (!inView || !shouldAnimate || hasStarted.current) return;
    hasStarted.current = true;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setDisplay(Math.round(target * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    setDisplay(0);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, shouldAnimate, target, durationMs]);

  if (!isNumeric) {
    return (
      <span ref={ref} className={className}>
        {value}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={className}
      // Reserve the final width so the unit beside it never shifts mid-count.
      style={{
        display: "inline-block",
        minWidth: `${value.trim().length}ch`,
        fontVariantNumeric: "tabular-nums",
      }}
    >
      {display}
    </span>
  );
}
