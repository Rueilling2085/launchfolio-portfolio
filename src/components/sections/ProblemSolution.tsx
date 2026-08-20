"use client";

import { Music } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { ProblemSolution as ProblemSolutionData, ProblemSolutionPoint } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const COPY = {
  problem: { zh: "問題", en: "Problem" },
  solution: { zh: "解決方案", en: "Solution" },
} as const;

function PointItem({
  index,
  point,
  lang,
}: {
  index: number;
  point: ProblemSolutionPoint;
  lang: "zh" | "en";
}) {
  return (
    <div className="flex gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5532FA]/15 text-[11px] font-semibold text-[#B9A6FF]">
        {index}
      </span>
      <div>
        <p className="text-sm font-semibold text-white">{point.title[lang]}</p>
        <p className="mt-1 text-sm leading-relaxed text-white/60">{point.description[lang]}</p>
      </div>
    </div>
  );
}

export function ProblemSolution({ data }: { data: ProblemSolutionData }) {
  const { lang } = useLanguage();
  return (
    <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden bg-[#0A0118] px-5 py-16 md:px-14 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(85,50,250,0.35),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {data.eyebrow && (
          <RevealOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              <PulseDot color="#8B7BFF" size={7} />
              {data.eyebrow[lang]}
            </span>
          </RevealOnScroll>
        )}

        {data.heading && (
          <RevealOnScroll delay={0.05} className="mt-6 max-w-xl md:max-w-none">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl md:whitespace-nowrap">
              {data.heading.line1[lang]}
            </h2>
            <h2 className="mt-1 text-3xl font-semibold leading-tight tracking-tight md:text-4xl md:whitespace-nowrap">
              {data.heading.line2Prefix && (
                <span className="text-white">
                  {data.heading.line2Prefix[lang]}
                  {lang === "en" ? " " : ""}
                </span>
              )}
              <span className="bg-gradient-to-r from-[#8B7BFF] to-[#5532FA] bg-clip-text text-transparent">
                {data.heading.line2Highlight[lang]}
              </span>
            </h2>
          </RevealOnScroll>
        )}

        <div className="relative mt-8 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-x-16 md:gap-y-24">
          <svg
            viewBox="0 0 1000 500"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
          >
            <path
              d="M 160,350 C 480,350 520,150 840,150"
              fill="none"
              stroke="#5532FA"
              strokeWidth="1.5"
              strokeOpacity="0.6"
            />
            <circle cx="160" cy="350" r="4" fill="#5532FA" />
            <circle cx="840" cy="150" r="4" fill="#5532FA" />
          </svg>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2">
              <div className="h-full w-full animate-[breathe-glow_3.5s_ease-in-out_infinite] rounded-full bg-[#5532FA]/40 blur-3xl" />
            </div>
            <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
            <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-full w-full animate-[breathe_3.5s_ease-in-out_infinite] items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                <Music size={22} className="text-white" />
              </div>
            </div>
          </div>

          <RevealOnScroll className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl md:mt-12">
            <h3 className="text-lg font-semibold text-white">{COPY.problem[lang]}</h3>
            <div className="mt-6 flex flex-col gap-5">
              {data.problemPoints.map((p, i) => (
                <PointItem key={p.title.zh} index={i + 1} point={p} lang={lang} />
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll
            delay={0.1}
            className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold text-[#B9A6FF]">{COPY.solution[lang]}</h3>
            {data.solutionIntro && (
              <p className="mt-4 text-sm leading-relaxed text-white/70">{data.solutionIntro[lang]}</p>
            )}
            <div className="mt-6 flex flex-col gap-5">
              {data.solutionPoints.map((p, i) => (
                <PointItem key={p.title.zh} index={i + 1} point={p} lang={lang} />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </div>
  );
}
