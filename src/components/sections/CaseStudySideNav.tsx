"use client";

import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Localized } from "@/lib/i18n/resolve";

export type SideNavSection = {
  id: string;
  label: string | Localized;
  children?: { id: string; label: string | Localized }[];
};

export function CaseStudySideNav({
  sections,
  dark,
}: {
  sections: SideNavSection[];
  dark?: boolean;
}) {
  const flatSections = useMemo(
    () => sections.flatMap((s) => [s, ...(s.children ?? [])]),
    [sections]
  );
  const childIds = useMemo(
    () => new Set(sections.flatMap((s) => (s.children ?? []).map((c) => c.id))),
    [sections]
  );

  const [activeId, setActiveId] = useState(sections[0]?.id);
  const [visible, setVisible] = useState(false);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  const itemRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const listRef = useRef<HTMLDivElement>(null);

  // Track which section is in view. A child sits inside its parent, so both
  // report as intersecting — prefer the child so the deepest match wins.
  useEffect(() => {
    const intersecting = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        });

        const inView = flatSections.filter((s) => intersecting.has(s.id)).map((s) => s.id);
        if (inView.length === 0) return;

        const childrenInView = inView.filter((id) => childIds.has(id));
        setActiveId(
          childrenInView.length
            ? childrenInView[childrenInView.length - 1]
            : inView[inView.length - 1]
        );
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    const elements = flatSections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [flatSections, childIds]);

  useEffect(() => {
    const firstEl = sections[0] ? document.getElementById(sections[0].id) : null;
    if (!firstEl) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );
    observer.observe(firstEl);

    return () => observer.disconnect();
  }, [sections]);

  const expandedId = sections.find(
    (s) => s.id === activeId || s.children?.some((c) => c.id === activeId)
  )?.id;

  const measure = useCallback(() => {
    const el = itemRefs.current[activeId ?? ""];
    const list = listRef.current;
    if (!el || !list || el.offsetHeight === 0) return;
    setIndicator({
      top: el.getBoundingClientRect().top - list.getBoundingClientRect().top,
      height: el.offsetHeight,
    });
  }, [activeId]);

  useLayoutEffect(() => {
    measure();
  }, [measure, expandedId, visible]);

  // The list changes height while sub-items expand/collapse, which shifts every
  // item below it — re-measure throughout the animation, not just at the end.
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const observer = new ResizeObserver(() => measure());
    observer.observe(list);
    return () => observer.disconnect();
  }, [measure]);

  const { lang } = useLanguage();
  const resolve = (label: string | Localized) => (typeof label === "string" ? label : label[lang]);

  if (sections.length < 2) return null;

  const itemClass = (isActive: boolean, isChild: boolean) => {
    const size = isChild ? "text-[11px]" : "text-xs";
    if (isActive) {
      return `${size} font-semibold ${dark ? "text-white" : "text-[#006AB7]"}`;
    }
    if (dark) {
      return `${size} font-normal ${isChild ? "text-white/25" : "text-white/35"} hover:text-white/60`;
    }
    return `${size} font-normal ${isChild ? "text-muted-2/60" : "text-muted-2"} hover:text-muted`;
  };

  return (
    <nav
      aria-label="Case study sections"
      className={`fixed top-1/2 z-30 hidden -translate-y-1/2 items-stretch gap-3 text-left transition-opacity duration-300 2xl:flex ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ right: "calc(50% + 580px)" }}
    >
      <div className={`relative w-[3px] shrink-0 rounded-full ${dark ? "bg-white/15" : "bg-line"}`}>
        <span
          className={`absolute left-0 w-[3px] rounded-full transition-all duration-300 ease-out ${
            dark ? "bg-white" : "bg-[#006AB7]"
          }`}
          style={{ top: indicator.top, height: indicator.height }}
        />
      </div>

      <div ref={listRef} className="flex flex-col gap-3">
        {sections.map((s) => (
          <div key={s.id} className="flex flex-col gap-2.5">
            <a
              ref={(el) => {
                itemRefs.current[s.id] = el;
              }}
              href={`#${s.id}`}
              className={`whitespace-nowrap tracking-wide transition-colors duration-300 ${itemClass(
                activeId === s.id,
                false
              )}`}
            >
              {resolve(s.label)}
            </a>

            {s.children && s.children.length > 0 && (
              <AnimatePresence initial={false}>
                {expandedId === s.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-2.5">
                      {s.children.map((c) => (
                        <a
                          key={c.id}
                          ref={(el) => {
                            itemRefs.current[c.id] = el;
                          }}
                          href={`#${c.id}`}
                          className={`whitespace-nowrap tracking-wide transition-colors duration-300 ${itemClass(
                            activeId === c.id,
                            true
                          )}`}
                        >
                          {resolve(c.label)}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
