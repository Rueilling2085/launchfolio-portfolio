"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ProjectOverview as ProjectOverviewData } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const COPY = {
  heading: { zh: "挑戰與成果", en: "Challenges & Outcomes" },
  challenge: { zh: "挑戰：", en: "Challenge: " },
  action: { zh: "行動：", en: "Action: " },
  result: { zh: "成果：", en: "Result: " },
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
    <RevealOnScroll delay={index * 0.08} className="mt-8 first:mt-0">
      <p className={dark ? "text-base font-semibold text-white" : "text-base font-semibold text-ink"}>
        {item.title[lang]}
      </p>
      <p className={dark ? "mt-3 text-sm leading-relaxed text-white/60 md:text-base" : "mt-3 text-sm leading-relaxed text-muted md:text-base"}>
        <span className={dark ? "font-medium text-white/85" : "font-medium text-ink-soft"}>{COPY.challenge[lang]}</span>
        {item.challenge[lang]}
      </p>
      <p className={dark ? "mt-3 text-sm leading-relaxed text-white/60 md:text-base" : "mt-3 text-sm leading-relaxed text-muted md:text-base"}>
        <span className={dark ? "font-medium text-white/85" : "font-medium text-ink-soft"}>{COPY.action[lang]}</span>
        {item.action[lang]}
      </p>
      <p className={dark ? "mt-3 text-sm leading-relaxed text-white/60 md:text-base" : "mt-3 text-sm leading-relaxed text-muted md:text-base"}>
        <span className={dark ? "font-medium text-white/85" : "font-medium text-ink-soft"}>{COPY.result[lang]}</span>
        {item.result[lang]}
      </p>
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
