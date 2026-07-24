"use client";

import { ReactNode } from "react";

export function Marquee({
  children,
  durationSeconds = 30,
  gap = 56,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  durationSeconds?: number;
  gap?: number;
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`group relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] ${className}`}
    >
      <div
        className="flex w-max items-center will-change-transform group-hover:[animation-play-state:paused]"
        style={{
          animation: `marquee ${durationSeconds}s linear infinite ${reverse ? "reverse" : ""}`,
        }}
      >
        <div className="flex items-center" style={{ gap, paddingRight: gap }}>
          {children}
        </div>
        <div className="flex items-center" style={{ gap, paddingRight: gap }} aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
