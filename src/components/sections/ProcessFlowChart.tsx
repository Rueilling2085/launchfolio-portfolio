"use client";

import {
  ScanEye,
  BotMessageSquare,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NextStepDecision } from "@/components/ui/NextStepDecision";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ProcessFlow } from "@/lib/data";

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  "scan-eye": ScanEye,
  "bot-message-square": BotMessageSquare,
};

const COPY = {
  decisionLead: {
    zh: "確定驗證場域後，進一步訪談",
    en: "After settling on the validation setting, I went further and interviewed",
  },
  decisionHighlight: {
    zh: "最了解工廠職安合規的角色「職環安人員」",
    en: "the role that knows factory safety compliance best: EHS staff",
  },
  heading: {
    zh: "分析職環安人員工作流程，找出產品導入節點",
    en: "Mapping EHS Workflows to Find Where the Product Fits In",
  },
  imageAlt: {
    zh: "職環安人員於倉儲現場巡檢",
    en: "EHS staff conducting a patrol at a warehouse site",
  },
} as const;

const META = [
  { label: "Persona", value: { zh: "職環安人員（EHS）", en: "EHS staff" } },
  { label: "Services", value: { zh: "精密機械加工廠與化學濾網廠", en: "Precision machining plants & chemical filter factories" } },
  { label: "Goal", value: { zh: "工區巡查與安全監督", en: "Site patrols & safety oversight" } },
] as const;

export function ProcessFlowChart({
  data,
  avatar,
}: {
  data: ProcessFlow;
  avatar?: string;
}) {
  const { lang } = useLanguage();
  return (
    <RevealOnScroll>
      <div>
          <div className="mx-auto max-w-2xl text-center">
            <NextStepDecision>
              {COPY.decisionLead[lang]}
              <span className="text-ink">{COPY.decisionHighlight[lang]}</span>
            </NextStepDecision>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              {COPY.heading[lang]}
            </h3>
          </div>

          <div className="mt-10 rounded-2xl border border-line bg-[#EAEBED] p-6 md:p-8">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/projects/vision-detect/journey-photo-TEMP-watermarked.png"
              alt={COPY.imageAlt[lang]}
              fill
              sizes="(min-width: 768px) 900px, 100vw"
              className="object-cover brightness-90 saturate-75"
            />
            <div className="pointer-events-none absolute inset-0 bg-[#0B2A52] mix-blend-multiply opacity-30" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/70 to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            <div className="absolute inset-x-0 top-0 flex items-center gap-3 p-4 md:p-6">
              {avatar && (
                <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white/50">
                  <Image src={avatar} alt="Persona" fill sizes="36px" className="object-cover" />
                </span>
              )}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-[11px] text-white/85">
                {META.map((item) => (
                  <span key={item.label}>
                    <span className="font-semibold text-white">{item.label}: </span>
                    {item.value[lang]}
                  </span>
                ))}
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-1 p-4 md:p-6">
              {data.steps.map((step, i) => (
                <div key={i} className="flex flex-1 items-end justify-center gap-1">
                  <div className="text-center">
                    <p
                      className={`text-[10px] font-semibold uppercase tracking-wide ${
                        step.emphasis ? "text-white" : "text-white/45"
                      }`}
                    >
                      Step {i + 1}
                    </p>
                    <p
                      className={`mt-0.5 text-[12px] leading-tight ${
                        step.emphasis ? "font-medium text-white" : "text-white/45"
                      }`}
                    >
                      {step.label.map((line) => (
                        <span key={line.zh} className="block whitespace-nowrap">
                          {line[lang]}
                        </span>
                      ))}
                    </p>
                  </div>
                  {i < data.steps.length - 1 && (
                    <ChevronRight
                      size={10}
                      className="mb-3 shrink-0 text-white/35"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.painPoints.map((pp) => (
              <div key={pp.step} className="rounded-xl border border-line bg-white px-4 py-4">
                <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-600">
                  Problem
                </span>
                <p className="mt-2 text-xs text-ink">{pp.title[lang]}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pp.description[lang]}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.painPoints.map((pp) => {
              const SolutionIcon = SOLUTION_ICONS[pp.solution.icon];
              return (
                <div key={pp.step} className="rounded-xl border border-[#0B7DC9]/30 bg-white px-4 py-4">
                  <span className="inline-flex items-center rounded-full bg-[#D8EEFD] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#0B7DC9]">
                    Solution
                  </span>
                  <div className="mt-2 flex items-start gap-2">
                    {SolutionIcon && (
                      <SolutionIcon size={16} className="mt-0.5 shrink-0 text-[#0B7DC9]" />
                    )}
                    <div>
                      <p className="text-xs text-ink">{pp.solution.title[lang]}</p>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft/80">
                        {pp.solution.description[lang]}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
      </div>
    </RevealOnScroll>
  );
}
