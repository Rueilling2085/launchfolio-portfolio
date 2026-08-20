"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { ResearchBackground as ResearchBackgroundData } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const HIGHLIGHT = { zh: "「聽」", en: "Hear" } as const;

function StatValue({ value, color }: { value: string; color: string }) {
  const match = value.match(/^([+\-]?[\d.,]+)(.*)$/);
  const number = match ? match[1] : value;
  const unit = match ? match[2] : "";
  return (
    <span className="text-[40px] font-bold leading-none md:text-[48px]" style={{ color }}>
      {number}
      {unit && <span className="text-[22px] font-semibold md:text-[26px]">{unit}</span>}
    </span>
  );
}

function HighlightedText({ text, highlight }: { text: string; highlight: string }) {
  const parts = text.split(highlight);
  if (parts.length < 2) return <>{text}</>;
  return (
    <>
      {parts[0]}
      <span className="font-semibold text-[#B9A6FF]">{highlight}</span>
      {parts.slice(1).join(highlight)}
    </>
  );
}

export function ResearchBackground({
  data,
  dark,
}: {
  data: ResearchBackgroundData;
  dark?: boolean;
}) {
  const { lang } = useLanguage();
  return (
    <div className="relative mt-16 md:mt-24">
      {data.eyebrow && (
        <RevealOnScroll className="flex justify-center">
          <span
            className={
              dark
                ? "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
                : "inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft"
            }
          >
            <PulseDot color={dark ? "#8B7BFF" : "#5532FA"} size={7} />
            {data.eyebrow[lang]}
          </span>
        </RevealOnScroll>
      )}

      {data.source && (
        <RevealOnScroll delay={0.05} className="mx-auto mt-5 max-w-2xl text-center md:max-w-none">
          <p
            className={
              dark
                ? "text-sm leading-relaxed text-white/60 md:whitespace-nowrap md:text-base"
                : "text-sm leading-relaxed text-muted md:whitespace-nowrap md:text-base"
            }
          >
            {data.source[lang]}
          </p>
        </RevealOnScroll>
      )}

      <div className="relative isolate mt-6 grid grid-cols-1 gap-4 sm:grid-cols-4">
        {dark && (
          <div className="pointer-events-none absolute -bottom-24 -right-16 -z-10 h-80 w-80 rounded-full bg-[#5532FA]/40 blur-[110px]" />
        )}

        {data.growthStat && (
          <RevealOnScroll className="sm:col-span-2">
            <div
              className={
                dark
                  ? "flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center backdrop-blur-xl"
                  : "flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-6 py-8 text-center"
              }
            >
              <p className={dark ? "text-sm text-white/50" : "text-sm text-muted"}>
                {data.growthStat.label[lang]}
              </p>
              <div className="flex items-center gap-3">
                <StatValue value={data.growthStat.from} color={dark ? "#B9A6FF" : "#1E116E"} />
                <ArrowRight
                  size={28}
                  className={dark ? "text-white/30" : "text-ink-soft/30"}
                />
                <StatValue value={data.growthStat.to} color={dark ? "#B9A6FF" : "#1E116E"} />
              </div>
            </div>
          </RevealOnScroll>
        )}

        {data.stats.map((stat, i) => (
          <RevealOnScroll key={stat.label.zh} delay={0.05 + i * 0.08}>
            <div
              className={
                dark
                  ? "flex h-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center backdrop-blur-xl"
                  : "flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-6 py-8 text-center"
              }
            >
              <p className={dark ? "text-sm text-white/50" : "text-sm text-muted"}>{stat.label[lang]}</p>
              <StatValue value={stat.value} color={dark ? "#B9A6FF" : "#1E116E"} />
            </div>
          </RevealOnScroll>
        ))}
      </div>

      {data.image && (
        <RevealOnScroll delay={0.2} className="mt-10">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl sm:aspect-[16/10] md:aspect-[21/10]">
            <Image
              src={data.image}
              alt={data.imageAlt?.[lang] ?? ""}
              fill
              sizes="(min-width: 768px) 1200px, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1E116E]/80 via-[#5532FA]/10 to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-[#1E116E] mix-blend-color opacity-40" />

            <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/15 bg-black/30 p-6 backdrop-blur-xl md:inset-x-8 md:bottom-8 md:p-8">
              <h3 className="text-xl font-semibold leading-snug text-white md:text-2xl">
                <HighlightedText text={data.subtitle[lang]} highlight={HIGHLIGHT[lang]} />
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-base">
                {data.body[lang]}
              </p>
            </div>
          </div>
        </RevealOnScroll>
      )}
    </div>
  );
}
