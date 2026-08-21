"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Localized } from "@/lib/i18n/resolve";

export function ProjectHighlights({
  items,
  color,
  dark,
}: {
  items: { value: Localized; label: Localized }[];
  color: string;
  dark?: boolean;
}) {
  const { lang } = useLanguage();
  return (
    <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-4">
      {items.map((item, i) => (
        <RevealOnScroll key={item.label.zh} delay={i * 0.1} className="border-l-2 pl-4" style={{ borderColor: color }}>
          <p className={dark ? "text-[10px] font-semibold uppercase tracking-wide text-white/40" : "text-[10px] font-semibold uppercase tracking-wide text-muted-2"}>
            {item.label[lang]}
          </p>
          <p className={dark ? "mt-1 whitespace-pre-line text-2xl font-bold leading-tight text-white md:text-3xl" : "mt-1 whitespace-pre-line text-2xl font-bold leading-tight text-ink md:text-3xl"}>
            {item.value[lang]}
          </p>
        </RevealOnScroll>
      ))}
    </div>
  );
}
