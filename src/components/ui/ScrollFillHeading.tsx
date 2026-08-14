"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Outlined heading that fills solid while it sits in the middle of the
 * viewport and returns to outline once it scrolls away — same reversible
 * in/out behaviour as the adaptive nav.
 */
export function ScrollFillHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setFilled(entry.isIntersecting),
      { rootMargin: "-25% 0px -35% 0px", threshold: 0 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <h2
      ref={ref}
      className={`text-center font-bold tracking-tight transition-colors duration-700 ease-out ${className}`}
      style={{
        color: filled ? "var(--ink)" : "transparent",
        WebkitTextStroke: `1.5px ${filled ? "transparent" : "#c9d2de"}`,
      }}
    >
      {text}
    </h2>
  );
}
