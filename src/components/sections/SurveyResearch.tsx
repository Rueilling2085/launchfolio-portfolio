"use client";

import { ArrowRight, ArrowDown } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { NextStepDecision } from "@/components/ui/NextStepDecision";
import { SurveyMotivationDiagram } from "@/components/sections/SurveyMotivationDiagram";
import { SurveyResults } from "@/components/sections/SurveyResults";
import { CountUp } from "@/components/ui/CountUp";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { SurveyResearch as SurveyResearchData } from "@/lib/data";

const COPY = {
  bridge: {
    zh: "除了易用性測試驅動的介面優化，我同時展開另一條研究線：\n透過大規模問卷調查，為產品下一步的功能規劃收集方向。",
    en: "Alongside the usability-testing-driven interface fixes, I ran a second research thread in parallel, a large-scale survey to gather direction for the product's next phase of feature planning.",
  },
  closingLead: {
    zh: "這些洞察將",
    en: "These insights will",
  },
  closingHighlight: {
    zh: "指引產品下一步的功能開發方向",
    en: "guide the product's next round of feature development",
  },
} as const;

function StructureColumn({ column }: { column: SurveyResearchData["structure"][number] }) {
  const { lang } = useLanguage();
  return (
    <div className="w-full flex-1 rounded-2xl border border-line bg-white p-5">
      <p className="text-xs font-semibold text-[#045CC4]">{column.label[lang]}</p>
      <ul className="mt-3 flex flex-col gap-2">
        {column.items.map((item) => (
          <li
            key={item.zh}
            className="rounded-xl bg-paper-alt px-3 py-2 text-sm leading-relaxed text-ink-soft"
          >
            {item[lang]}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MotivationSection({ data }: { data: NonNullable<SurveyResearchData["motivation"]> }) {
  return <SurveyMotivationDiagram data={data} />;
}

function FindingCard({ finding }: { finding: SurveyResearchData["findings"][number] }) {
  const { lang } = useLanguage();
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <p className="text-sm font-semibold text-ink">{finding.title[lang]}</p>
      {finding.stat && (
        <p className="mt-3 leading-none">
          <span className="text-3xl font-bold text-[#045CC4]">{finding.stat.value}</span>
          <span className="ml-2 text-xs text-muted">{finding.stat.label[lang]}</span>
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted">{finding.description[lang]}</p>
    </div>
  );
}

export function SurveyResearch({ data }: { data: SurveyResearchData }) {
  const { lang } = useLanguage();
  return (
    <div className="relative mt-16 md:mt-24">
      <RevealOnScroll className="mx-auto max-w-2xl text-center">
        <p className="whitespace-pre-line text-sm leading-relaxed text-muted md:text-base">{COPY.bridge[lang]}</p>
      </RevealOnScroll>

      {data.eyebrow && (
        <RevealOnScroll delay={0.05} className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
            <PulseDot color="#045CC4" size={7} />
            {data.eyebrow[lang]}
          </span>
        </RevealOnScroll>
      )}

      {data.goalTitle && (
        <RevealOnScroll delay={0.05} className="mt-8 text-center md:mt-10">
          <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {data.goalTitle[lang]}
          </h3>
        </RevealOnScroll>
      )}

      <RevealOnScroll delay={0.08} className="mt-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_320px] md:gap-14">
          <p className="whitespace-pre-line text-sm leading-relaxed text-muted md:text-base">{data.goal[lang]}</p>

          <div className="flex flex-col gap-4">
            {data.stats.map((stat) => (
              <div
                key={stat.label.zh}
                className="rounded-2xl border border-line bg-white px-7 py-6 shadow-sm"
              >
                <p className="leading-none">
                  <CountUp
                    value={stat.value}
                    className="text-4xl font-bold tracking-tight text-[#045CC4] md:text-5xl"
                  />
                  {stat.unit && (
                    <span className="ml-1.5 text-xl font-semibold text-[#045CC4]/70 md:text-2xl">
                      {stat.unit[lang]}
                    </span>
                  )}
                </p>
                <p className="mt-3 text-xs font-medium text-muted md:text-sm">{stat.label[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-10">
        {data.motivation ? (
          <MotivationSection data={data.motivation} />
        ) : (
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
            {data.structure.map((column, i) => (
              <div key={column.label.zh} className="flex flex-col items-center gap-3 lg:contents">
                <StructureColumn column={column} />
                {i < data.structure.length - 1 && (
                  <span className="flex shrink-0 justify-center text-muted-2">
                    <ArrowDown size={18} className="lg:hidden" />
                    <ArrowRight size={18} className="hidden lg:block" />
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </RevealOnScroll>

      {data.results && <SurveyResults data={data.results} />}

      {data.findings.length > 0 && (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {data.findings.map((finding, i) => (
            <RevealOnScroll key={finding.title.zh} delay={0.05 * i}>
              <FindingCard finding={finding} />
            </RevealOnScroll>
          ))}
        </div>
      )}

      <div className="mt-14">
        <NextStepDecision>
          {COPY.closingLead[lang]}
          <span className="text-ink">{COPY.closingHighlight[lang]}</span>
        </NextStepDecision>
      </div>
    </div>
  );
}
