"use client";

import { ReactNode } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Localized } from "@/lib/i18n/resolve";

export function ProjectSummary({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: Localized;
  title: Localized;
  description: Localized;
  children?: ReactNode;
}) {
  const { lang } = useLanguage();
  return (
    <div className="mt-16 md:mt-24">
      <RevealOnScroll>
        <div className="relative overflow-hidden rounded-2xl border border-line bg-paper-alt px-6 py-14 md:px-10 md:py-16">
          <div className="text-center">
            {eyebrow && (
              <div className="mb-5">
                <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
                  <PulseDot color="#006AB7" size={7} />
                  {eyebrow[lang]}
                </span>
              </div>
            )}
            <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {title[lang]}
            </h3>
            <p className="mx-auto mt-4 max-w-xl whitespace-pre-line text-sm text-muted md:text-base">
              {description[lang]}
            </p>
          </div>

          {children && <div className="mt-12 md:mt-14">{children}</div>}
        </div>
      </RevealOnScroll>
    </div>
  );
}
