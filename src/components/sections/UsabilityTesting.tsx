"use client";

import { Fragment, useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { RunningIcon } from "@/components/ui/RunningIcon";
import { ExpertInterview } from "@/components/sections/ExpertInterview";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type {
  UsabilityTesting as UsabilityTestingData,
  ExpertInterview as ExpertInterviewData,
  SemiStructuredInterview,
  InterviewOptimizationCategory,
} from "@/lib/data";
import type { Localized } from "@/lib/i18n/resolve";

const CATEGORY_STYLES: Record<InterviewOptimizationCategory, { bg: string; text: string }> = {
  feature: { bg: "#E4EEFF", text: "#045CC4" },
  interface: { bg: "#FDF1D6", text: "#B5790A" },
  tech: { bg: "#E4F6E9", text: "#1C8A47" },
};

const FEATURE_ICONS = {
  calendar: "/images/projects/h2u/icon-race-list.png",
};

const COPY = {
  taskScenario: { zh: "任務情境腳本", en: "Task Scenario" },
  taskGoal: { zh: "任務目標", en: "Goal" },
  participantResponse: { zh: "受測者反應", en: "Participant Response" },
  time: { zh: "時間", en: "Time" },
  error: { zh: "錯誤", en: "Error" },
  efficiency: { zh: "效率", en: "Efficiency" },
  reasonIssueSuggestion: { zh: "原因／問題／建議", en: "Reason / Issue / Suggestion" },
  topic: { zh: "主題", en: "Topic" },
  subtopic: { zh: "子主題", en: "Subtopic" },
  interviewSummary: { zh: "訪談摘要", en: "Interview Summary" },
  optimizationDirection: { zh: "優化方向", en: "Optimization Direction" },
  hasErrorLabel: { zh: "有錯誤", en: "Has error" },
} as const;

function PhaseList({
  phases,
  flowSummary,
}: {
  phases: UsabilityTestingData["phases"];
  flowSummary?: Localized;
}) {
  const { lang } = useLanguage();
  return (
    <div>
      <div className="flex flex-col items-center gap-3 lg:flex-row lg:items-stretch lg:gap-0">
        {phases.map((phase, i) => (
          <div key={phase.title.zh} className="flex w-full flex-col items-center gap-3 lg:contents">
            <RevealOnScroll delay={0.05 + i * 0.06} className="w-full lg:flex-1">
              <div className="h-full overflow-hidden rounded-2xl bg-white shadow-sm">
                <p className="bg-[#045CC4] px-4 py-2.5 text-center text-sm font-semibold text-white">
                  {phase.title[lang]}
                </p>
                <ul className="flex flex-col gap-2 px-4 py-4">
                  {phase.items.map((item) => (
                    <li key={item.zh} className="flex gap-2 text-sm leading-relaxed text-muted">
                      <span className="text-[#0493FB]">・</span>
                      <span>{item[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealOnScroll>
            {i < phases.length - 1 && (
              <span className="flex shrink-0 items-center justify-center text-[#0493FB] lg:px-2">
                <ChevronDown size={20} className="lg:hidden" />
                <ChevronRight size={20} className="hidden lg:block" />
              </span>
            )}
          </div>
        ))}
      </div>

      {flowSummary && (
        <RevealOnScroll delay={0.25} className="mt-4">
          <p className="rounded-full bg-[#E4EEFF] px-5 py-3 text-center text-xs leading-relaxed font-medium text-[#045CC4] md:text-sm">
            {flowSummary[lang]}
          </p>
        </RevealOnScroll>
      )}
    </div>
  );
}

function EfficiencyBadge({ efficiency }: { efficiency: 1 | 2 | 3 | null }) {
  if (efficiency === null) return <span className="text-muted-2">-</span>;
  const styles = {
    1: "bg-[#E4F6E9] text-[#1C8A47]",
    2: "bg-[#FDF1D6] text-[#B5790A]",
    3: "bg-[#FBE4E4] text-[#C23B3B]",
  } as const;
  return (
    <span
      className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${styles[efficiency]}`}
    >
      {efficiency}
    </span>
  );
}

function ErrorBadge({ hasError }: { hasError: boolean | null }) {
  const { lang } = useLanguage();
  if (hasError === null) return <span className="text-muted-2">-</span>;
  return hasError ? (
    <span
      className="inline-flex h-2.5 w-2.5 rounded-full bg-[#C23B3B]"
      aria-label={COPY.hasErrorLabel[lang]}
    />
  ) : (
    <span className="text-muted-2">-</span>
  );
}

function TaskScenarioSection({ data }: { data: NonNullable<UsabilityTestingData["taskScenarios"]> }) {
  const { lang } = useLanguage();
  const [activeFeature, setActiveFeature] = useState(data.features[0]?.icon);
  const numberedRows = data.rows.map((row, i) => ({ row, number: i + 1 }));
  const visibleRows = numberedRows.filter(({ row }) => row.feature === activeFeature);

  return (
    <RevealOnScroll delay={0.1} className="mt-14 md:mt-16">
      {data.title && (
        <p className="text-center text-lg font-semibold text-ink">{data.title[lang]}</p>
      )}
      <p className="mt-3 mb-5 whitespace-pre-line text-center text-sm leading-relaxed text-ink-soft">
        {data.intro[lang]}
      </p>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-[220px_1fr]">
        <div className="flex flex-row gap-3 lg:flex-col">
          {data.features.map((feature) => {
            const active = feature.icon === activeFeature;
            return (
              <button
                key={feature.label.zh}
                type="button"
                onClick={() => setActiveFeature(feature.icon)}
                className={`flex flex-1 flex-col items-center gap-2 rounded-2xl border px-4 py-5 text-left transition-colors lg:flex-none ${
                  active
                    ? "border-[#045CC4] bg-[#045CC4]"
                    : "border-line bg-white hover:border-[#0493FB]/50"
                }`}
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E4EEFF] text-[#045CC4]">
                  {feature.icon === "activity" ? (
                    <RunningIcon size={20} />
                  ) : (
                    <Image src={FEATURE_ICONS[feature.icon]} alt="" width={22} height={22} />
                  )}
                </span>
                <span className={`text-sm font-medium ${active ? "text-white" : "text-ink"}`}>
                  {feature.label[lang]}
                </span>
              </button>
            );
          })}
        </div>

        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[860px] border-collapse text-left text-xs">
            <thead>
              <tr className="bg-paper-alt text-ink-soft">
                <th className="w-8 px-3 py-3 font-medium">#</th>
                <th className="min-w-[220px] px-3 py-3 font-medium">{COPY.taskScenario[lang]}</th>
                <th className="min-w-[120px] px-3 py-3 font-medium">{COPY.taskGoal[lang]}</th>
                <th className="min-w-[180px] px-3 py-3 font-medium">{COPY.participantResponse[lang]}</th>
                <th className="px-3 py-3 font-medium">{COPY.time[lang]}</th>
                <th className="px-3 py-3 font-medium">{COPY.error[lang]}</th>
                <th className="px-3 py-3 font-medium">{COPY.efficiency[lang]}</th>
                <th className="min-w-[220px] px-3 py-3 font-medium">{COPY.reasonIssueSuggestion[lang]}</th>
              </tr>
            </thead>
            <tbody>
              {visibleRows.map(({ row, number }) => (
                <tr key={number} className="border-t border-line align-top">
                  <td className="px-3 py-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-ink text-[10px] font-semibold text-white">
                      {number}
                    </span>
                  </td>
                  <td className="px-3 py-3 leading-relaxed text-ink-soft">{row.scenario[lang]}</td>
                  <td className="px-3 py-3 leading-relaxed text-muted">{row.goal[lang]}</td>
                  <td className="px-3 py-3 leading-relaxed text-muted">{row.response[lang]}</td>
                  <td className="px-3 py-3 whitespace-nowrap text-muted">{row.time}</td>
                  <td className="px-3 py-3">
                    <ErrorBadge hasError={row.hasError} />
                  </td>
                  <td className="px-3 py-3">
                    <EfficiencyBadge efficiency={row.efficiency} />
                  </td>
                  <td className="px-3 py-3 leading-relaxed text-muted">{row.note[lang]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {data.legend && (
        <div className="mt-3 flex flex-wrap items-center justify-end gap-x-4 gap-y-1.5">
          {data.legend.map((item) => (
            <span key={item.efficiency} className="flex items-center gap-1.5 text-xs text-muted-2">
              <EfficiencyBadge efficiency={item.efficiency} />
              {item.label[lang]}
            </span>
          ))}
        </div>
      )}
    </RevealOnScroll>
  );
}

function AnnotatedImage({ finding }: { finding: UsabilityTestingData["findings"][number] }) {
  const { lang } = useLanguage();
  const marker = finding.markerPosition;
  const callout = finding.calloutPosition;
  const imageWidth = finding.imageWidth ?? 1200;
  const imageHeight = finding.imageHeight ?? 2100;
  const vbHeight = (imageHeight / imageWidth) * 100;

  return (
    <div className="relative mx-auto w-full max-w-[280px] overflow-visible rounded-xl">
      <Image
        src={finding.image!}
        alt={(finding.imageAlt ?? finding.title)[lang]}
        width={imageWidth}
        height={imageHeight}
        sizes="280px"
        className="h-auto w-full rounded-xl"
      />

      {marker && callout && (
        <div className="hidden sm:contents">
          <svg
            viewBox={`0 0 100 ${vbHeight}`}
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
          >
            <line
              x1={marker.left}
              y1={(marker.top / 100) * vbHeight}
              x2={callout.left}
              y2={(callout.top / 100) * vbHeight}
              stroke="#045CC4"
              strokeWidth="0.4"
            />
            <circle
              cx={marker.left}
              cy={(marker.top / 100) * vbHeight}
              r="1.3"
              fill="#045CC4"
              stroke="white"
              strokeWidth="0.5"
            />
          </svg>

          {finding.calloutLabel && (
            <span
              className="absolute -translate-y-1/2 whitespace-nowrap rounded-full border border-[#045CC4]/20 bg-white px-3 py-1.5 text-[11px] font-medium leading-none text-[#045CC4] shadow-md"
              style={{ top: `${callout.top}%`, left: `${callout.left}%` }}
            >
              {finding.calloutLabel[lang]}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

function FindingCard({
  finding,
  index,
}: {
  finding: UsabilityTestingData["findings"][number];
  index: number;
}) {
  const { lang } = useLanguage();
  return (
    <RevealOnScroll delay={0.05 * index}>
      <div className="flex h-full flex-col items-center rounded-2xl border border-line bg-white p-5">
        {finding.image && (
          <div className="w-full max-w-[240px] shrink-0">
            <AnnotatedImage finding={finding} />
          </div>
        )}

        <div className="mt-5 min-w-0 w-full">
          <span className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#E4EEFF] text-xs font-semibold text-[#045CC4]">
              {index + 1}
            </span>
            <span className="text-base font-semibold text-ink">{finding.title[lang]}</span>
          </span>
          <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-muted">
            {finding.detail[lang]}
          </p>
        </div>
      </div>
    </RevealOnScroll>
  );
}

function SemiStructuredInterviewTable({ data }: { data: SemiStructuredInterview }) {
  const { lang } = useLanguage();
  return (
    <RevealOnScroll delay={0.05} className="mt-14 text-center md:mt-16">
      <p className="text-lg font-semibold text-ink">{data.title[lang]}</p>
      <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-muted">{data.intro[lang]}</p>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-line bg-white">
        <table className="w-full min-w-[860px] border-collapse text-left text-xs">
          <thead>
            <tr className="bg-paper-alt text-ink-soft">
              <th className="min-w-[140px] px-3 py-3 font-medium">{COPY.topic[lang]}</th>
              <th className="min-w-[160px] px-3 py-3 font-medium">{COPY.subtopic[lang]}</th>
              <th className="min-w-[320px] px-3 py-3 font-medium">{COPY.interviewSummary[lang]}</th>
              <th className="min-w-[200px] px-3 py-3 font-medium">{COPY.optimizationDirection[lang]}</th>
            </tr>
          </thead>
          <tbody>
            {data.groups.map((group) => (
              <Fragment key={group.topic.zh}>
                {group.items.map((item, i) => (
                  <tr key={item.id} className="border-t border-line align-top">
                    {i === 0 && (
                      <td
                        className="px-3 py-3 font-medium text-ink"
                        rowSpan={group.items.length}
                      >
                        {group.topic[lang]}
                      </td>
                    )}
                    <td className="px-3 py-3">
                      {item.priorityCategory ? (
                        <span
                          className="inline-flex items-center rounded-md px-2 py-1 font-medium whitespace-nowrap"
                          style={{
                            background: CATEGORY_STYLES[item.priorityCategory].bg,
                            color: CATEGORY_STYLES[item.priorityCategory].text,
                          }}
                        >
                          {item.id} {item.label[lang]}
                        </span>
                      ) : (
                        <span className="text-ink-soft">
                          {item.id} {item.label[lang]}
                        </span>
                      )}
                    </td>
                    <td className="px-3 py-3 leading-relaxed text-muted">{item.summary[lang]}</td>
                    <td className="px-3 py-3 leading-relaxed text-muted">{item.direction[lang]}</td>
                  </tr>
                ))}
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 flex flex-wrap items-center justify-end gap-x-4 gap-y-1.5">
        {data.legend.map((item) => (
          <span key={item.category} className="flex items-center gap-1.5 text-xs text-muted-2">
            <span
              className="h-3 w-3 rounded-sm"
              style={{ background: CATEGORY_STYLES[item.category].bg }}
            />
            {item.label[lang]}
          </span>
        ))}
      </div>
    </RevealOnScroll>
  );
}

export function UsabilityTesting({
  data,
  expertInterview,
}: {
  data: UsabilityTestingData;
  expertInterview?: ExpertInterviewData;
}) {
  const { lang } = useLanguage();
  return (
    <div className="relative mt-16 md:mt-24">
      {data.eyebrow && (
        <RevealOnScroll className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
            <PulseDot color="#045CC4" size={7} />
            {data.eyebrow[lang]}
          </span>
        </RevealOnScroll>
      )}

      {data.goalTitle && (
        <RevealOnScroll delay={0.05} className="mt-5 text-center">
          <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {data.goalTitle[lang]}
          </h3>
        </RevealOnScroll>
      )}

      <RevealOnScroll delay={0.08} className="mx-auto mt-4">
        <p className="text-center text-sm leading-relaxed text-muted md:whitespace-nowrap md:text-base">
          {data.goal[lang]}
        </p>
      </RevealOnScroll>

      <div className="mt-10">
        <PhaseList phases={data.phases} flowSummary={data.flowSummary} />
      </div>

      {data.taskScenarios && <TaskScenarioSection data={data.taskScenarios} />}

      {expertInterview && (
        <div id="expert-interview" className="scroll-mt-24">
          <ExpertInterview data={expertInterview} />
        </div>
      )}

      {data.findingsIntro && (
        <RevealOnScroll delay={0.05} className="mt-14 text-center md:mt-16">
          <p className="text-sm font-medium text-ink-soft">{data.findingsIntro[lang]}</p>
        </RevealOnScroll>
      )}

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {data.findings.map((finding, i) => (
          <FindingCard key={finding.title.zh} finding={finding} index={i} />
        ))}
      </div>

      {data.semiStructuredInterview && (
        <SemiStructuredInterviewTable data={data.semiStructuredInterview} />
      )}
    </div>
  );
}
