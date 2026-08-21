"use client";

import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { StatValue } from "@/components/ui/StatValue";
import type { ProjectOverview as ProjectOverviewData, ProjectChallengeItem } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const COPY = {
  heading: { zh: "挑戰與成果", en: "Challenges & Outcomes" },
  challenge: { zh: "挑戰", en: "Challenge" },
  action: { zh: "行動", en: "Action" },
  result: { zh: "成果", en: "Result" },
} as const;

function Tag({ children, tone, dark }: { children: ReactNode; tone: "neutral" | "result"; dark?: boolean }) {
  const classes =
    tone === "result"
      ? dark
        ? "bg-[#B9A6FF]/15 text-[#B9A6FF]"
        : "bg-[#D8EEFD] text-[#0B7DC9]"
      : dark
        ? "bg-white/10 text-white/60"
        : "bg-ink-soft/10 text-ink-soft";
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide ${classes}`}>
      {children}
    </span>
  );
}

function ChallengeItem({
  index,
  item,
  dark,
}: {
  index: number;
  item: ProjectChallengeItem;
  dark?: boolean;
}) {
  const { lang } = useLanguage();
  return (
    <RevealOnScroll
      delay={index * 0.08}
      className={
        dark
          ? "flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-8"
          : "flex h-full flex-col rounded-2xl border border-line bg-white p-6 md:p-8"
      }
    >
      <p className={dark ? "text-base font-semibold text-white" : "text-base font-semibold text-ink"}>
        {item.title[lang]}
      </p>

      <div className="mt-4 flex flex-1 flex-col gap-4">
        <div>
          <Tag tone="neutral" dark={dark}>
            {COPY.challenge[lang]}
          </Tag>
          <p className={dark ? "mt-2 text-sm leading-relaxed text-white/70" : "mt-2 text-sm leading-relaxed text-ink-soft"}>
            {item.challenge[lang]}
          </p>
        </div>
        {item.action && (
          <div>
            <Tag tone="neutral" dark={dark}>
              {COPY.action[lang]}
            </Tag>
            <p className={dark ? "mt-2 text-sm leading-relaxed text-white/70" : "mt-2 text-sm leading-relaxed text-ink-soft"}>
              {item.action[lang]}
            </p>
          </div>
        )}

        <div>
          <Tag tone="result" dark={dark}>
            {COPY.result[lang]}
          </Tag>

          {item.resultStats ? (
            <>
              <p className={dark ? "mt-2 text-sm leading-relaxed text-white/70" : "mt-2 text-sm leading-relaxed text-ink-soft"}>
                {item.result[lang]}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {item.resultStats.map((stat) => (
                  <div
                    key={stat.label.zh}
                    className={dark ? "rounded-2xl bg-white/[0.04] px-4 py-4 text-left" : "rounded-2xl bg-paper-alt px-4 py-4 text-left"}
                  >
                    <StatValue value={stat.value[lang]} color={dark ? "#B9A6FF" : "#1E116E"} />
                    <p className={dark ? "mt-1.5 text-xs leading-snug text-white/50" : "mt-1.5 text-xs leading-snug text-muted"}>{stat.label[lang]}</p>
                  </div>
                ))}
              </div>
            </>
          ) : item.resultTrend ? (
            <>
              <p className={dark ? "mt-2 text-sm leading-relaxed text-white/70" : "mt-2 text-sm leading-relaxed text-ink-soft"}>
                {item.result[lang]}
              </p>
              <div className="mt-3 flex items-center gap-2">
                <StatValue value={item.resultTrend.from[lang]} color={dark ? "#B9A6FF" : "#1E116E"} />
                <ArrowRight size={20} className={dark ? "text-white/30" : "text-ink-soft/30"} />
                <StatValue value={item.resultTrend.to[lang]} color={dark ? "#B9A6FF" : "#1E116E"} />
              </div>
            </>
          ) : (
            <p
              className={
                dark
                  ? "mt-2 border-l-2 border-[#B9A6FF]/40 pl-3 text-sm font-medium leading-relaxed text-white/85"
                  : "mt-2 border-l-2 border-[#0B7DC9]/40 pl-3 text-sm font-medium leading-relaxed text-ink"
              }
            >
              {item.result[lang]}
            </p>
          )}
        </div>
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
  if (!overview.challenges || overview.challenges.length === 0) return null;
  return (
    <div className="relative mt-14 md:mt-16">
      <RevealOnScroll>
        <h2 className={dark ? "text-3xl font-bold tracking-tight text-white" : "text-3xl font-bold tracking-tight text-ink"}>
          {COPY.heading[lang]}
        </h2>
        <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {overview.challenges.map((item, i) => (
            <ChallengeItem key={item.title.zh} index={i} item={item} dark={dark} />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
