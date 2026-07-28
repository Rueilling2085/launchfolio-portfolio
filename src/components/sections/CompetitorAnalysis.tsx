"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { AccordionPanel, PlusMinusIcon } from "@/components/ui/Accordion";
import type { CompetitorAnalysis as CompetitorAnalysisData } from "@/lib/data";

function ImageCallout({
  dot,
  label,
  text,
}: {
  dot: { x: number; y: number };
  label: { x: number; y: number };
  text: string;
}) {
  return (
    <>
      <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <line
          x1={`${label.x}%`}
          y1={`${label.y}%`}
          x2={`${dot.x}%`}
          y2={`${dot.y}%`}
          stroke="#0B7DC9"
          strokeWidth="1.25"
          strokeDasharray="3 3"
        />
        <circle cx={`${dot.x}%`} cy={`${dot.y}%`} r="3.5" fill="#0B7DC9" />
      </svg>
      <span
        className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[#0B7DC9]/30 bg-white px-2.5 py-1 text-[11px] font-semibold text-[#0B7DC9] shadow-[0_4px_12px_-4px_rgba(11,125,201,0.4)]"
        style={{ left: `${label.x}%`, top: `${label.y}%` }}
      >
        {text}
      </span>
    </>
  );
}

export function CompetitorAnalysis({ data }: { data: CompetitorAnalysisData }) {
  const [principlesOpen, setPrinciplesOpen] = useState(false);
  const [activeOutcome, setActiveOutcome] = useState(0);
  const [outcomeImageVisible, setOutcomeImageVisible] = useState(true);

  const selectOutcome = (i: number) => {
    if (i === activeOutcome) return;
    setOutcomeImageVisible(false);
    setTimeout(() => {
      setActiveOutcome(i);
      setOutcomeImageVisible(true);
    }, 250);
  };

  return (
    <div className="mt-16 md:mt-24">
      <RevealOnScroll className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
          <PulseDot color="#0B7DC9" size={7} />
          {data.eyebrow}
        </span>
        <h3 className="mt-5 max-w-xl text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {data.title}
        </h3>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted md:text-base">
          {data.description}
        </p>
      </RevealOnScroll>

      {/* Comparison table */}
      <RevealOnScroll delay={0.05} className="mt-10">
        <div className="overflow-x-auto rounded-2xl border border-line bg-white">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th className="w-[160px] px-5 py-4 text-xs font-medium text-muted-2">
                  比較項目
                </th>
                {data.tools.map((tool) => (
                  <th key={tool.name} className="border-l border-line px-5 py-4">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={tool.logo}
                        alt={tool.name}
                        className="h-6 w-auto max-w-[28px] shrink-0 object-contain"
                      />
                      <span className="text-[13px] font-semibold text-ink">{tool.name}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.criteria.map((criterion, i) => (
                <tr key={criterion.label} className={i > 0 ? "border-t border-line" : undefined}>
                  <td className="px-5 py-4 align-top text-[13px] font-medium text-ink-soft">
                    {criterion.label}
                  </td>
                  {criterion.values.map((value, vi) => (
                    <td
                      key={vi}
                      className="border-l border-line px-5 py-4 align-top text-[13px] leading-relaxed text-muted"
                    >
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </RevealOnScroll>

      {/* Shape of AI — Madlibs pattern reference */}
      <RevealOnScroll delay={0.1} className="mt-10">
        <div className="rounded-2xl border border-line bg-paper-alt p-6 md:p-10">
          <p className="text-sm font-semibold text-ink md:text-base">{data.patternRef.title}</p>
          <p className="mt-3 text-[13px] text-muted">
            {data.patternRef.intro}{" "}
            <a
              href={data.patternRef.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B7DC9] underline underline-offset-2"
            >
              {data.patternRef.sourceLabel}
            </a>
          </p>

          <div className="relative mt-5 aspect-[3/1] w-full overflow-hidden rounded-xl border border-line bg-white">
            <img
              src={data.patternRef.image}
              alt={data.patternRef.title}
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <ImageCallout
              dot={{ x: 24, y: 65 }}
              label={{ x: 24, y: 53 }}
              text="固定句構"
            />
            <ImageCallout
              dot={{ x: 55, y: 65 }}
              label={{ x: 55, y: 53 }}
              text="句中填空"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white via-white/85 to-transparent md:h-28" />
          </div>

          <div className="mt-5 rounded-xl border border-line bg-white">
            <button
              type="button"
              onClick={() => setPrinciplesOpen((v) => !v)}
              className="flex w-full items-center gap-3 px-4 py-4 text-left"
            >
              <span className="flex-1 text-[13px] font-medium leading-relaxed text-ink-soft">
                {data.patternRef.lead}
              </span>
              <PlusMinusIcon open={principlesOpen} />
            </button>
            <AccordionPanel open={principlesOpen}>
              <div className="grid gap-4 px-4 pb-5 sm:grid-cols-2">
                {data.patternRef.principles.map((p, i) => (
                  <div key={p.title} className="rounded-xl border border-line bg-paper-alt p-4">
                    <p className="text-[13px] font-semibold text-ink">
                      {i + 1}. {p.title}
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-muted">{p.description}</p>
                  </div>
                ))}
              </div>
            </AccordionPanel>
          </div>

          <p className="mt-5 rounded-xl border border-[#0B7DC9]/25 bg-[#D8EEFD]/40 px-4 py-3 text-[13px] leading-relaxed text-ink-soft">
            {data.patternRef.conclusion}
          </p>
        </div>
      </RevealOnScroll>

      {/* Outcome */}
      <RevealOnScroll delay={0.25} className="mt-10">
        <div className="rounded-2xl border border-line bg-paper-alt p-6 md:p-10">
          <p className="text-sm font-semibold text-ink md:text-base">{data.outcome.title}</p>
          <p className="mt-3 text-[13px] text-muted">{data.outcome.description}</p>

          <div className="mt-6 flex flex-col items-center gap-8 md:flex-row md:items-stretch">
            <div className="w-full max-w-[340px] shrink-0 overflow-hidden rounded-xl border border-line bg-white shadow-[0_12px_32px_-12px_rgba(15,23,42,0.18)]">
              <img
                key={data.outcome.items[activeOutcome].image}
                src={data.outcome.items[activeOutcome].image}
                alt={`${data.outcome.title} — ${data.outcome.items[activeOutcome].tag}`}
                className={`h-auto w-full object-contain transition-opacity duration-500 ease-in-out ${
                  outcomeImageVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center gap-3">
              {data.outcome.items.map((item, i) => {
                const active = i === activeOutcome;
                return (
                  <div
                    key={item.tag}
                    className={`rounded-lg border transition-colors duration-300 ${
                      active ? "border-[#0B7DC9]/30 bg-[#D8EEFD]/40" : "border-line bg-white"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => selectOutcome(i)}
                      className="flex w-full items-center gap-3 px-4 py-3 text-left"
                    >
                      <span
                        className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors duration-300 ${
                          active ? "bg-[#006AB7] text-white" : "bg-ink-soft/10 text-ink-soft"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <p className="text-[13px] text-ink-soft">{item.title}</p>
                    </button>
                    <AccordionPanel open={active}>
                      <div className="px-4 pb-3 pl-[3.25rem]">
                        <p className="text-xs leading-relaxed text-muted">{item.body}</p>
                        <p className="mt-2 border-t border-line/70 pt-2 text-[11px] text-muted-2">
                          {item.refLabel}
                        </p>
                      </div>
                    </AccordionPanel>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
