"use client";

import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StatValue } from "@/components/ui/StatValue";
import type { ProjectOverview as ProjectOverviewData } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const COPY = {
  heading: { zh: "挑戰與成果", en: "Challenges & Outcomes" },
  challenge: { zh: "挑戰", en: "Challenge" },
  action: { zh: "行動", en: "Action" },
  result: { zh: "成果", en: "Result" },
} as const;

function ChallengeItem({
  index,
  item,
  dark,
}: {
  index: number;
  item: ProjectOverviewData["challenges"][number];
  dark?: boolean;
}) {
  const { lang } = useLanguage();
  return (
    <RevealOnScroll
      delay={index * 0.08}
      className={
        dark
          ? "mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl first:mt-0 md:p-8"
          : "mt-6 rounded-2xl border border-line bg-white p-6 first:mt-0 md:p-8"
      }
    >
      <p className={dark ? "text-base font-semibold text-white" : "text-base font-semibold text-ink"}>
        {item.title[lang]}
      </p>

      <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <p className={dark ? "text-[11px] font-semibold uppercase tracking-wide text-white/50" : "text-[11px] font-semibold uppercase tracking-wide text-muted"}>
            {COPY.challenge[lang]}
          </p>
          <p className={dark ? "mt-1 text-sm leading-relaxed text-white/70" : "mt-1 text-sm leading-relaxed text-ink-soft"}>
            {item.challenge[lang]}
          </p>
        </div>
        <div>
          <p className={dark ? "text-[11px] font-semibold uppercase tracking-wide text-white/50" : "text-[11px] font-semibold uppercase tracking-wide text-muted"}>
            {COPY.action[lang]}
          </p>
          <p className={dark ? "mt-1 text-sm leading-relaxed text-white/70" : "mt-1 text-sm leading-relaxed text-ink-soft"}>
            {item.action[lang]}
          </p>
        </div>
      </div>

      <div className="mt-4">
        {item.resultStats ? (
          <>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {item.resultStats.map((stat) => (
                <div
                  key={stat.label.zh}
                  className={
                    dark
                      ? "rounded-xl border border-white/10 bg-white/[0.03] px-4 py-5 text-center"
                      : "rounded-xl border border-line bg-paper-alt px-4 py-5 text-center"
                  }
                >
                  <StatValue value={stat.value[lang]} color={dark ? "#B9A6FF" : "#1E116E"} />
                  <p className={dark ? "mt-1 text-xs text-white/50" : "mt-1 text-xs text-muted"}>{stat.label[lang]}</p>
                </div>
              ))}
            </div>
            <p className={dark ? "mt-3 text-xs text-white/50" : "mt-3 text-xs text-muted"}>{item.result[lang]}</p>
          </>
        ) : item.resultTrend ? (
          <>
            <div
              className={
                dark
                  ? "flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-8 text-center backdrop-blur-xl"
                  : "flex flex-col items-center gap-3 rounded-2xl border border-line bg-white px-6 py-8 text-center"
              }
            >
              <p className={dark ? "text-sm text-white/50" : "text-sm text-muted"}>{item.resultTrend.label[lang]}</p>
              <div className="flex items-center gap-3">
                <StatValue value={item.resultTrend.from[lang]} color={dark ? "#B9A6FF" : "#1E116E"} />
                <ArrowRight size={28} className={dark ? "text-white/30" : "text-ink-soft/30"} />
                <StatValue value={item.resultTrend.to[lang]} color={dark ? "#B9A6FF" : "#1E116E"} />
              </div>
            </div>
            <p className={dark ? "mt-3 text-xs text-white/50" : "mt-3 text-xs text-muted"}>{item.result[lang]}</p>
          </>
        ) : (
          <div>
            <p className={dark ? "text-[11px] font-semibold uppercase tracking-wide text-white/50" : "text-[11px] font-semibold uppercase tracking-wide text-muted"}>
              {COPY.result[lang]}
            </p>
            <p
              className={
                dark
                  ? "mt-1 border-l-2 border-white/20 pl-3 text-sm leading-relaxed text-white/70"
                  : "mt-1 border-l-2 border-[#5532FA]/40 pl-3 text-sm leading-relaxed text-ink-soft"
              }
            >
              {item.result[lang]}
            </p>
          </div>
        )}
      </div>
    </RevealOnScroll>
  );
}

export function ProjectOverview({
  overview,
  dark,
}: {
  overview: ProjectOverviewData;
  dark?: boolean;
}) {
  const { lang } = useLanguage();
  return (
    <div className="relative mt-14 md:mt-16">
      <RevealOnScroll>
        <h2 className={dark ? "text-3xl font-bold tracking-tight text-white" : "text-3xl font-bold tracking-tight text-ink"}>
          {COPY.heading[lang]}
        </h2>
        <div className="mt-4">
          {overview.challenges.map((item, i) => (
            <ChallengeItem key={item.title.zh} index={i} item={item} dark={dark} />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
