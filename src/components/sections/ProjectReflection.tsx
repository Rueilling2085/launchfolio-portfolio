"use client";

import { Compass, Lightbulb, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { Reflection } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ICONS: Record<Reflection["blocks"][number]["icon"], LucideIcon> = {
  insight: Lightbulb,
  limitation: Compass,
};

export function ProjectReflection({ data }: { data: Reflection }) {
  const { lang } = useLanguage();
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0A0118] px-5 py-16 md:px-14 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(85,50,250,0.22),transparent_70%)]" />

      <div className="relative mx-auto max-w-3xl">
        {data.eyebrow && (
          <RevealOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              <PulseDot color="#8B7BFF" size={7} />
              {data.eyebrow[lang]}
            </span>
          </RevealOnScroll>
        )}

        <div className="mt-10 flex flex-col gap-6 md:mt-14 md:gap-8">
          {data.blocks.map((block, i) => {
            const Icon = ICONS[block.icon];
            return (
              <RevealOnScroll key={block.title.zh} delay={0.05 * i}>
                <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5532FA]/15 text-[#B9A6FF]">
                      <Icon size={18} />
                    </span>
                    <div>
                      <p className="text-base font-semibold text-white md:text-lg">
                        {block.title[lang]}
                      </p>
                      {block.subtitle && (
                        <p className="mt-0.5 text-xs tracking-wide text-white/40">
                          {block.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-4">
                    {block.paragraphs.map((p) => (
                      <p key={p.zh} className="text-sm leading-relaxed text-white/65 md:text-base">
                        {p[lang]}
                      </p>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </div>
  );
}
