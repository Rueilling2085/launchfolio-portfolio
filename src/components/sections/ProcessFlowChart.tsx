"use client";

import { useMemo, useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";
import {
  ScanEye,
  BotMessageSquare,
  Meh,
  Frown,
  ChevronRight,
  type LucideIcon,
} from "lucide-react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { NextStepDecision } from "@/components/ui/NextStepDecision";
import type { ProcessFlow } from "@/lib/data";

const SOLUTION_ICONS: Record<string, LucideIcon> = {
  "scan-eye": ScanEye,
  "bot-message-square": BotMessageSquare,
};

const MOOD_ICONS: Record<number, LucideIcon> = {
  2: Meh,
  3: Meh,
  4: Frown,
};

type Point = { x: number; y: number };
type Segment = { p0: Point; cp1: Point; cp2: Point; p2: Point };

function catmullRomSegments(points: Point[]): Segment[] {
  const segments: Segment[] = [];
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i - 1] ?? points[i];
    const p1 = points[i];
    const p2 = points[i + 1];
    const p3 = points[i + 2] ?? p2;

    segments.push({
      p0: p1,
      cp1: { x: p1.x + (p2.x - p0.x) / 6, y: p1.y + (p2.y - p0.y) / 6 },
      cp2: { x: p2.x - (p3.x - p1.x) / 6, y: p2.y - (p3.y - p1.y) / 6 },
      p2,
    });
  }
  return segments;
}

function segmentsToPath(segments: Segment[]): string {
  if (segments.length === 0) return "";
  let d = `M ${segments[0].p0.x} ${segments[0].p0.y}`;
  for (const seg of segments) {
    d += ` C ${seg.cp1.x} ${seg.cp1.y}, ${seg.cp2.x} ${seg.cp2.y}, ${seg.p2.x} ${seg.p2.y}`;
  }
  return d;
}

function cubicPointAt(seg: Segment, t: number): Point {
  const mt = 1 - t;
  return {
    x: mt * mt * mt * seg.p0.x + 3 * mt * mt * t * seg.cp1.x + 3 * mt * t * t * seg.cp2.x + t * t * t * seg.p2.x,
    y: mt * mt * mt * seg.p0.y + 3 * mt * mt * t * seg.cp1.y + 3 * mt * t * t * seg.cp2.y + t * t * t * seg.p2.y,
  };
}

function sampleCurve(segments: Segment[], samplesPerSegment = 14): Point[] {
  const points: Point[] = [];
  for (const seg of segments) {
    for (let i = 0; i <= samplesPerSegment; i++) {
      points.push(cubicPointAt(seg, i / samplesPerSegment));
    }
  }
  return points;
}

const CURVE_POINTS: Point[] = [
  { x: 9, y: 16 },
  { x: 25, y: 10 },
  { x: 42, y: 56 },
  { x: 59, y: 74 },
  { x: 76, y: 56 },
  { x: 91, y: 14 },
];

const META = [
  { label: "Persona", value: "EHS Specialist" },
  { label: "Services", value: "Precision Machining & Chemical Filter Technology" },
  { label: "Goal", value: "Site Inspection & Safety Supervision" },
];

function StepArrow({ x, delay }: { x: number; delay: number }) {
  return (
    <motion.span
      className="absolute -translate-x-1/2 -translate-y-1/2 text-muted-2"
      style={{ left: `${x}%`, bottom: 30 }}
      animate={{ x: [0, 3, 0], opacity: [0.4, 1, 0.4] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut", delay }}
    >
      <ChevronRight size={12} />
    </motion.span>
  );
}

function TravelingDot({ samples }: { samples: Point[] }) {
  const left = useMotionValue(samples[0]?.x ?? 0);
  const top = useMotionValue(samples[0]?.y ?? 0);
  const progress = useRef(0);

  useAnimationFrame((_, delta) => {
    if (samples.length === 0) return;
    progress.current = (progress.current + delta / 4200) % 1;
    const idx = Math.floor(progress.current * (samples.length - 1));
    left.set(samples[idx].x);
    top.set(samples[idx].y);
  });

  return (
    <motion.span
      className="absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006AB7]"
      style={{
        left: useTransform(left, (v) => `${v}%`),
        top: useTransform(top, (v) => `${v}%`),
        boxShadow: "0 0 10px 2px rgba(0,106,183,0.55)",
      }}
    />
  );
}

export function ProcessFlowChart({
  data,
  avatar,
}: {
  data: ProcessFlow;
  avatar?: string;
}) {
  const fullSegments = useMemo(() => catmullRomSegments(CURVE_POINTS), []);
  const fullPath = useMemo(() => segmentsToPath(fullSegments), [fullSegments]);
  // Reuse the exact same segments as the full curve (not a freshly-fit spline
  // through just points 3-5) so the blue line sits perfectly on the gray one.
  const emphasisSegments = useMemo(() => fullSegments.slice(2, 4), [fullSegments]);
  const emphasisPath = useMemo(() => segmentsToPath(emphasisSegments), [emphasisSegments]);
  const travelSamples = useMemo(() => sampleCurve(fullSegments), [fullSegments]);

  const emphasisStart = CURVE_POINTS[2];
  const emphasisEnd = CURVE_POINTS[4];
  const areaPath = `${emphasisPath} L ${emphasisEnd.x} 100 L ${emphasisStart.x} 100 Z`;

  return (
    <RevealOnScroll>
      <div>
          <div className="mx-auto max-w-2xl text-center">
            <NextStepDecision>
              確定驗證場域後，進一步訪談
              <span className="font-semibold text-ink">最了解工廠職安合規的角色「職環安人員」</span>
            </NextStepDecision>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              分析職環安人員工作流程，找出產品導入節點
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted md:text-base">
              盤點職環安人員現有工作流程中的痛點，思考產品功能可以如何精準回應需求。
            </p>
          </div>

          <div className="mt-10 mb-10 flex items-center gap-3">
            {avatar && (
              <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <Image src={avatar} alt="Persona" fill sizes="40px" className="object-cover" />
              </span>
            )}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 text-xs text-muted">
              {META.map((item) => (
                <span key={item.label}>
                  <span className="font-semibold text-ink-soft">{item.label}: </span>
                  {item.value}
                </span>
              ))}
            </div>
          </div>

          <div className="relative mb-10 aspect-[16/9] w-full overflow-hidden rounded-2xl">
            <Image
              src="/images/projects/vision-detect/ehs-persona-scenario.png"
              alt="職環安人員於現場使用 VisionDetect AI 監控儀表板"
              fill
              sizes="(min-width: 768px) 800px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="relative h-[210px] w-full md:h-[240px]">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="absolute inset-0 h-full w-full overflow-visible"
            >
              <path d={areaPath} fill="var(--color-paper)" stroke="none" />
              <path
                d={fullPath}
                fill="none"
                stroke="var(--color-line)"
                strokeWidth={1.5}
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                d={emphasisPath}
                fill="none"
                stroke="#0B7DC9"
                strokeWidth={2}
                vectorEffect="non-scaling-stroke"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeInOut", delay: 0.3 }}
              />
            </svg>

            <TravelingDot samples={travelSamples} />

            {CURVE_POINTS.slice(0, -1).map((point, i) => (
              <StepArrow
                key={`arrow-${i}`}
                x={(point.x + CURVE_POINTS[i + 1].x) / 2}
                delay={i * 0.25}
              />
            ))}

            {CURVE_POINTS.map((point, i) => {
              const emphasis = data.steps[i]?.emphasis;
              const MoodIcon = MOOD_ICONS[i];
              return (
                <span key={i}>
                  {MoodIcon && (
                    <>
                      <motion.span
                        className="absolute -translate-x-1/2 rounded-lg border border-[#0B7DC9]/40 bg-[#D8EEFD] p-1 text-[#0B7DC9] shadow-sm"
                        style={{ left: `${point.x}%`, top: `calc(${point.y}% - 40px)` }}
                        initial={{ opacity: 0, scale: 0.4 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{
                          type: "spring",
                          stiffness: 260,
                          damping: 14,
                          delay: 0.6 + i * 0.12,
                        }}
                      >
                        <MoodIcon size={14} />
                      </motion.span>
                      <span
                        className="absolute w-px -translate-x-1/2 bg-muted-2"
                        style={{
                          left: `${point.x}%`,
                          top: `calc(${point.y}% - 22px)`,
                          height: 18,
                        }}
                      />
                    </>
                  )}
                  <span
                    className="absolute h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  >
                    {emphasis && (
                      <motion.span
                        className="absolute inset-0 rounded-full bg-[#0B7DC9] blur-[3px]"
                        animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.6, 0.25] }}
                        transition={{
                          duration: 2.8,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.3,
                        }}
                      />
                    )}
                    <span
                      className={`relative block h-full w-full rounded-full ${
                        emphasis
                          ? "border-2 border-[#0B7DC9] bg-[#D8EEFD]"
                          : "border-2 border-muted-2 bg-white"
                      }`}
                    />
                  </span>

                  <div
                    className="absolute w-[15%] -translate-x-1/2 text-center"
                    style={{ left: `${point.x}%`, bottom: 6 }}
                  >
                    <p
                      className={`text-[9px] font-semibold uppercase tracking-wide ${
                        emphasis ? "text-[#006AB7]" : "text-muted-2"
                      }`}
                    >
                      Step {i + 1}
                    </p>
                    <p
                      className={`mt-0.5 text-[10px] leading-tight ${
                        emphasis ? "font-medium text-ink-soft" : "text-muted"
                      }`}
                    >
                      {data.steps[i]?.label.map((line) => (
                        <span key={line} className="block whitespace-nowrap">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                </span>
              );
            })}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {data.painPoints.map((pp) => (
              <div key={pp.step} className="rounded-xl border border-line bg-paper-alt px-4 py-4">
                <p className="text-xs font-semibold text-ink">
                  Step {pp.step} · {pp.title}
                </p>
                <span className="mt-2 inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-600">
                  Problem
                </span>
                <p className="mt-2 text-xs leading-relaxed text-muted">{pp.description}</p>
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
                      <p className="text-xs font-semibold text-ink">{pp.solution.title}</p>
                      <p className="mt-1 text-xs leading-relaxed text-ink-soft/80">
                        {pp.solution.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
      </div>
    </RevealOnScroll>
  );
}
