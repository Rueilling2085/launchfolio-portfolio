"use client";

import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef } from "react";

const BASE_PX = 100;

/**
 * Scales its content so every line rendered with FitText ends up exactly as
 * wide as the shared container — the trick that keeps stacked headline lines
 * visually flush on both edges regardless of character count.
 */
export function FitText({
  children,
  className = "",
  maxSize = 220,
}: {
  children: ReactNode;
  className?: string;
  maxSize?: number;
}) {
  const outerRef = useRef<HTMLSpanElement>(null);
  const innerRef = useRef<HTMLSpanElement>(null);

  const measure = useCallback(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    inner.style.fontSize = `${BASE_PX}px`;
    const natural = inner.scrollWidth;
    const available = outer.clientWidth;
    if (!natural || !available) return;

    inner.style.fontSize = `${Math.min(maxSize, (BASE_PX * available) / natural)}px`;
  }, [maxSize]);

  useLayoutEffect(() => {
    measure();
  }, [measure, children]);

  useEffect(() => {
    const outer = outerRef.current;
    if (!outer) return;

    const observer = new ResizeObserver(measure);
    observer.observe(outer);

    // webfonts land after first paint and change the natural width
    document.fonts?.ready.then(measure).catch(() => {});

    return () => observer.disconnect();
  }, [measure]);

  return (
    <span ref={outerRef} className={`block w-full ${className}`}>
      <span
        ref={innerRef}
        className="inline-flex items-center whitespace-nowrap"
        style={{ fontSize: `${BASE_PX}px`, lineHeight: 1.04 }}
      >
        {children}
      </span>
    </span>
  );
}
