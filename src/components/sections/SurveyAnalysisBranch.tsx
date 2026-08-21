"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ListChecks, Target, UserRound, type LucideIcon } from "lucide-react";
import type { SurveyMotivationGroup } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ICONS: Record<NonNullable<SurveyMotivationGroup["icon"]>, LucideIcon> = {
  profile: UserRound,
  needs: ListChecks,
  positioning: Target,
};

export function SurveyAnalysisBranch({
  group,
  dark = false,
}: {
  group: SurveyMotivationGroup;
  dark?: boolean;
}) {
  const { lang } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLSpanElement>(null);
  const childRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [paths, setPaths] = useState<string[]>([]);

  const children = group.children ?? [];
  const Icon = group.icon ? ICONS[group.icon] : null;

  // Draw each connector from the parent pill's right edge to the child's left
  // edge, measured from the live layout so the curves stay attached when the
  // labels wrap or the container resizes.
  const measure = useCallback(() => {
    const container = containerRef.current;
    const parent = parentRef.current;
    if (!container || !parent) return;

    const cb = container.getBoundingClientRect();
    const pb = parent.getBoundingClientRect();
    const startX = pb.right - cb.left;
    const startY = pb.top + pb.height / 2 - cb.top;

    const next = childRefs.current
      .filter((el): el is HTMLSpanElement => el !== null)
      .map((el) => {
        const b = el.getBoundingClientRect();
        const endX = b.left - cb.left;
        const endY = b.top + b.height / 2 - cb.top;
        const midX = (startX + endX) / 2;
        return `M ${startX},${startY} C ${midX},${startY} ${midX},${endY} ${endX},${endY}`;
      });

    setPaths(next);
  }, []);

  useLayoutEffect(() => {
    measure();
  }, [measure, children.length]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(() => measure());
    observer.observe(container);
    childRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [measure]);

  if (children.length === 0) {
    return (
      <span
        className={`rounded-lg px-2.5 py-1.5 text-xs leading-relaxed ${
          dark ? "bg-white/[0.06] text-white/70" : "bg-paper-alt text-ink-soft"
        }`}
      >
        {group.label[lang]}
      </span>
    );
  }

  return (
    <div ref={containerRef} className="relative flex items-center gap-10">
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      >
        {paths.map((d) => (
          <path
            key={d}
            d={d}
            fill="none"
            stroke={dark ? "#4DB5FF" : "#0493FB"}
            strokeOpacity={dark ? 0.55 : 0.45}
            strokeWidth={1.5}
            strokeLinecap="round"
          />
        ))}
      </svg>

      <span
        ref={parentRef}
        className={`relative z-10 inline-flex shrink-0 items-center gap-1.5 rounded-full px-3.5 py-2 text-xs font-medium ${
          dark
            ? "border border-white/15 bg-white/[0.07] text-white"
            : "border border-line bg-white text-ink-soft shadow-sm"
        }`}
      >
        {Icon && (
          <Icon size={13} className={`shrink-0 ${dark ? "text-[#4DB5FF]" : "text-[#0493FB]"}`} />
        )}
        {group.label[lang]}
      </span>

      <div className="relative z-10 flex flex-1 flex-col gap-2.5">
        {children.map((child, i) => (
          <span
            key={child.zh}
            ref={(el) => {
              childRefs.current[i] = el;
            }}
            className={`inline-block self-start rounded-full px-3.5 py-1.5 text-xs leading-relaxed ${
              dark
                ? "bg-white/[0.05] text-white/70 ring-1 ring-white/10"
                : "bg-white text-ink-soft shadow-sm ring-1 ring-line/70"
            }`}
          >
            {child[lang]}
          </span>
        ))}
      </div>
    </div>
  );
}
