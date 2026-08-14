"use client";

import { Fragment, useState } from "react";
import { RunningIcon } from "@/components/ui/RunningIcon";
import type {
  SurveyResultsSection as SurveyResultsSectionData,
  SurveyResultsHabitTab,
  SurveyResultsFeatureTab,
  SurveyPriorityInsight,
} from "@/lib/data";

const DOMAIN_MAX = 90;
const TICKS = [80, 60, 40, 20, 0];
const CHART_HEIGHT = 200;

const FUNNEL_SPLIT_COLORS = ["#045CC4", "#D9DEE7"];
const FUNNEL_TEXT_COLORS = ["#045CC4", "#999999"];

function FunnelDonut({
  split,
  total,
  size = 108,
}: {
  split: SurveyResultsHabitTab["funnel"]["split"];
  total: number;
  size?: number;
}) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.37;
  const strokeWidth = size * 0.148;
  const circumference = 2 * Math.PI * r;

  const gap = size * 0.04;
  let cumulative = 0;
  const arcs = split.map((item, i) => {
    const length = (item.value / total) * circumference;
    const drawLength = Math.max(length - gap, 0);
    const dasharray = `${drawLength} ${circumference - drawLength}`;
    const dashoffset = -(cumulative + gap / 2);
    cumulative += length;
    return { item, color: FUNNEL_SPLIT_COLORS[i % FUNNEL_SPLIT_COLORS.length], dasharray, dashoffset };
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="shrink-0">
      <g transform={`rotate(-90 ${cx} ${cy})`}>
        {arcs.map((a) => (
          <circle
            key={a.item.label}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={a.color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray={a.dasharray}
            strokeDashoffset={a.dashoffset}
          />
        ))}
      </g>
      <text
        x={cx}
        y={cy - size * 0.03}
        textAnchor="middle"
        className="fill-ink font-bold"
        style={{ fontSize: size * 0.15 }}
      >
        {total}
      </text>
      <text
        x={cx}
        y={cy + size * 0.11}
        textAnchor="middle"
        className="fill-muted-2"
        style={{ fontSize: size * 0.085 }}
      >
        總樣本
      </text>
    </svg>
  );
}

function FunnelChart({ funnel }: { funnel: SurveyResultsHabitTab["funnel"] }) {
  return (
    <div>
      <p className="text-base font-semibold text-ink">{funnel.title}</p>
      <p className="mt-1 text-xs text-muted">總樣本 {funnel.total} 人</p>

      <div className="mt-6 flex flex-col items-start gap-5">
        <FunnelDonut split={funnel.split} total={funnel.total} size={160} />

        <div className="flex flex-col gap-3 self-stretch">
          {funnel.split.map((item, i) => (
            <Fragment key={item.label}>
              <p className="flex items-baseline gap-2 text-sm">
                <span
                  className="text-xl font-bold"
                  style={{ color: FUNNEL_TEXT_COLORS[i % FUNNEL_TEXT_COLORS.length] }}
                >
                  {item.percent}
                </span>
                <span className="text-ink-soft">（{item.value}人）{item.label}</span>
              </p>
              {i === 0 && (
                <p className="flex items-baseline gap-2 text-sm">
                  <span className="mb-0.5 h-1.5 w-1.5 shrink-0 self-center rounded-full bg-[#045CC4]" />
                  <span className="font-bold text-[#045CC4]">{funnel.result.percent}</span>
                  <span className="text-muted">（{funnel.result.value}人）{funnel.result.label}</span>
                </p>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

function BarCrossChart({ chart }: { chart: SurveyResultsHabitTab["crossAnalysis"] }) {
  return (
    <div>
      <p className="text-base font-semibold text-ink">{chart.title}</p>
      <p className="mt-1 text-xs text-muted">{chart.subtitle}</p>

      <div className="mt-6 flex items-start gap-3">
        <div
          className="flex flex-col justify-between text-right text-[10px] text-muted-2"
          style={{ height: CHART_HEIGHT }}
        >
          {TICKS.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        <div className="flex-1">
          <div className="relative border-l border-line" style={{ height: CHART_HEIGHT }}>
            {TICKS.map((t) => (
              <span
                key={t}
                className="pointer-events-none absolute inset-x-0 border-t border-line/70"
                style={{ bottom: (t / DOMAIN_MAX) * CHART_HEIGHT }}
              />
            ))}

            <div className="absolute inset-0 flex items-end justify-around">
              {chart.bars.map((bar) => {
                const hHabit = (bar.withHabit / DOMAIN_MAX) * CHART_HEIGHT;
                const hNoHabit = (bar.withoutHabit / DOMAIN_MAX) * CHART_HEIGHT;

                return (
                  <div key={bar.age} className="relative flex items-end gap-2 px-3">
                    <div className="relative z-10 w-9 rounded-t-sm bg-[#045CC4]" style={{ height: hHabit }} />
                    <div className="relative z-10 w-9 rounded-t-sm bg-[#D9DEE7]" style={{ height: hNoHabit }} />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-2 flex justify-around text-xs text-muted">
            {chart.bars.map((bar) => (
              <span key={bar.age}>{bar.age}</span>
            ))}
          </div>
        </div>

        <div className="shrink-0">
          <p className="text-xs font-medium text-ink-soft">{chart.legendLabel}</p>
          <div className="mt-2 flex flex-col gap-1.5 text-xs text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#045CC4]" />有
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm bg-[#D9DEE7]" />無
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function MotivationList({ data }: { data: SurveyResultsHabitTab["motivation"] }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <div>
        <p className="flex items-center gap-2 text-sm font-semibold text-ink">
          <RunningIcon size={24} className="shrink-0 text-[#045CC4]" />
          {data.withHabitLabel}
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {data.withHabitItems.map((item) => (
            <p key={item.label} className="flex items-baseline gap-4 text-sm">
              <span className="w-14 shrink-0 text-xl font-bold text-[#045CC4]">{item.value}</span>
              <span className="text-ink-soft">{item.label}</span>
            </p>
          ))}
        </div>
      </div>
      <div>
        <p className="flex items-center gap-2 text-sm font-semibold text-muted">
          <RunningIcon size={24} className="shrink-0 text-muted-2" />
          {data.withoutHabitLabel}
        </p>
        <div className="mt-4 flex flex-col gap-3">
          {data.withoutHabitItems.map((item) => (
            <p key={item.label} className="flex items-baseline gap-4 text-sm">
              <span className="w-14 shrink-0 text-xl font-bold text-muted-2">{item.value}</span>
              <span className="text-muted">{item.label}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

const SCORE_MAX = 5;

const PRIORITY_HIGHLIGHT_COUNT = 3;
const PRIORITY_GRAY = "#D9DEE7";

function PriorityBarList({
  title,
  items,
  dotColor,
}: {
  title: string;
  items: { label: string; value: number }[];
  dotColor: string;
}) {
  const sorted = [...items].sort((a, b) => b.value - a.value);

  return (
    <div>
      <p className="flex items-center gap-2 text-sm font-semibold text-ink">
        <span className="shrink-0" style={{ color: dotColor }}>
          <RunningIcon size={24} />
        </span>
        {title}
      </p>
      <div className="mt-4 flex flex-col gap-2.5">
        {sorted.map((item, i) => {
          const color =
            i < PRIORITY_HIGHLIGHT_COUNT ? barGradientColor(i, PRIORITY_HIGHLIGHT_COUNT) : PRIORITY_GRAY;
          return (
            <div key={item.label} className="flex items-center gap-3">
              <span className="w-24 shrink-0 text-xs text-ink-soft md:w-28">{item.label}</span>
              <div className="relative h-3 flex-1 rounded-full bg-paper-alt">
                <div
                  className="h-full rounded-full"
                  style={{ width: `${(item.value / SCORE_MAX) * 100}%`, background: color }}
                />
              </div>
              <span className="w-8 shrink-0 text-right text-[11px] font-semibold text-ink-soft">
                {item.value.toFixed(2)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function PriorityChart({ data }: { data: SurveyResultsFeatureTab["priorityChart"] }) {
  return (
    <div>
      <p className="text-base font-semibold text-ink">{data.title}</p>
      {data.subtitle && <p className="mt-1 text-xs text-muted">{data.subtitle}</p>}

      <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
        <PriorityBarList
          title={data.withHabitLabel}
          items={data.items.map((item) => ({ label: item.label, value: item.withHabit }))}
          dotColor="#045CC4"
        />
        <PriorityBarList
          title={data.withoutHabitLabel}
          items={data.items.map((item) => ({ label: item.label, value: item.withoutHabit }))}
          dotColor="#9AA6B8"
        />
      </div>
    </div>
  );
}

function PriorityInsight({ insight }: { insight: SurveyPriorityInsight }) {
  return (
    <div className="rounded-2xl border border-[#0493FB]/25 bg-[#E4EEFF] p-5 text-sm leading-relaxed text-ink-soft">
      <p className="text-sm font-semibold text-ink">{insight.commonNeeds.title}</p>
      <ul className="mt-2 flex flex-col gap-1.5">
        {insight.commonNeeds.points.map((point) => (
          <li key={point} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#045CC4]" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-[#0493FB]/20 pt-4">
        <p className="text-sm font-semibold text-ink">{insight.groupDifferences.title}</p>
        <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <p className="text-xs font-semibold text-[#045CC4]">{insight.groupDifferences.withHabitLabel}</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {insight.groupDifferences.withHabitItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#045CC4]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold text-muted-2">{insight.groupDifferences.withoutHabitLabel}</p>
            <ul className="mt-2 flex flex-col gap-1.5">
              {insight.groupDifferences.withoutHabitItems.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-2" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-5 border-t border-[#0493FB]/20 pt-4">{insight.summary}</p>
    </div>
  );
}

const COLUMN_CHART_HEIGHT = 160;

const BAR_GRADIENT_FROM: [number, number, number] = [4, 92, 196]; // #045CC4
const BAR_GRADIENT_TO: [number, number, number] = [191, 224, 251]; // #BFE0FB

function barGradientColor(index: number, total: number) {
  const t = total <= 1 ? 0 : index / (total - 1);
  const [r1, g1, b1] = BAR_GRADIENT_FROM;
  const [r2, g2, b2] = BAR_GRADIENT_TO;
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const b = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r}, ${g}, ${b})`;
}

function GoodAppConditionsChart({ data }: { data: SurveyResultsFeatureTab["goodAppConditions"] }) {
  const max = Math.max(...data.items.map((item) => item.value));

  return (
    <div>
      <p className="text-base font-semibold text-ink">{data.title}</p>
      {data.subtitle && <p className="mt-1 text-xs text-muted">{data.subtitle}</p>}

      <div className="mt-8 flex items-end justify-around gap-2" style={{ height: COLUMN_CHART_HEIGHT }}>
        {data.items.map((item, i) => (
          <div key={item.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs font-semibold text-ink-soft">{item.value}</span>
            <div
              className="w-full max-w-9 rounded-t-md"
              style={{
                height: `${(item.value / max) * (COLUMN_CHART_HEIGHT - 28)}px`,
                background: barGradientColor(i, data.items.length),
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-around gap-2 text-center text-[11px] leading-snug text-muted">
        {data.items.map((item) => (
          <span key={item.label} className="flex-1 whitespace-pre-line">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function TrackedMetricsChart({ data }: { data: SurveyResultsFeatureTab["trackedMetrics"] }) {
  const max = Math.max(...data.items.map((item) => item.value));

  return (
    <div>
      <p className="text-base font-semibold text-ink">{data.title}</p>
      {data.subtitle && <p className="mt-1 text-xs text-muted">{data.subtitle}</p>}

      <div className="mt-8 flex items-end justify-around gap-1.5" style={{ height: COLUMN_CHART_HEIGHT }}>
        {data.items.map((item, i) => (
          <div key={item.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
            <span className="text-xs font-semibold text-ink-soft">{item.value}</span>
            <div
              className="w-full max-w-9 rounded-t-md"
              style={{
                height: `${(item.value / max) * (COLUMN_CHART_HEIGHT - 28)}px`,
                background: barGradientColor(i, data.items.length),
              }}
            />
          </div>
        ))}
      </div>
      <div className="mt-2 flex justify-around gap-1.5 text-center text-[10px] leading-snug text-muted">
        {data.items.map((item) => (
          <span key={item.label} className="flex-1">
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function InsightText({ text }: { text: string }) {
  const match = text.match(/^([^：:]{1,20}[：:])(.*)$/);
  if (!match) return <>{text}</>;
  return (
    <>
      <span className="font-semibold text-ink">{match[1]}</span>
      {match[2]}
    </>
  );
}

function InsightBox({ insight }: { insight: string | string[] }) {
  const items = Array.isArray(insight) ? insight : [insight];

  return (
    <div className="rounded-2xl border border-[#0493FB]/25 bg-[#E4EEFF] p-5 text-sm leading-relaxed text-ink-soft">
      {items.length > 1 ? (
        <ul className="flex flex-col gap-2.5">
          {items.map((item) => (
            <li key={item} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#045CC4]" />
              <span>
                <InsightText text={item} />
              </span>
            </li>
          ))}
        </ul>
      ) : (
        <InsightText text={items[0]} />
      )}
    </div>
  );
}

export function SurveyResults({ data }: { data: SurveyResultsSectionData }) {
  const [active, setActive] = useState(data.tabs[0]?.key);

  return (
    <div className="mt-14 md:mt-16">
      <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{data.title}</h3>

      <div className="mt-5 flex gap-6 border-b border-line">
        {data.tabs.map((tab) => (
          <button
            key={tab.key}
            type="button"
            onClick={() => setActive(tab.key)}
            className={`relative pb-3 text-sm transition-colors ${
              active === tab.key ? "font-semibold text-ink" : "font-medium text-muted hover:text-ink-soft"
            }`}
          >
            {tab.label}
            {active === tab.key && (
              <span className="absolute inset-x-0 -bottom-px h-1 rounded-full bg-[#045CC4]" />
            )}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {active === "habit" ? (
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-line bg-white p-6">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <FunnelChart funnel={data.habit.funnel} />
                <BarCrossChart chart={data.habit.crossAnalysis} />
              </div>
              <div className="mt-6">
                <InsightBox insight={data.habit.sampleInsight} />
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6">
              <MotivationList data={data.habit.motivation} />
              <div className="mt-6">
                <InsightBox insight={data.habit.insight} />
              </div>
            </div>
          </div>
        ) : active === "feature" ? (
          <div className="flex flex-col gap-6">
            {data.feature.introTitle && (
              <div>
                <p className="text-base font-semibold text-ink">{data.feature.introTitle}</p>
                {data.feature.introText && (
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">
                    {data.feature.introText}
                  </p>
                )}
              </div>
            )}

            <div className="rounded-2xl border border-line bg-white p-6">
              <PriorityChart data={data.feature.priorityChart} />
              <div className="mt-6">
                <PriorityInsight insight={data.feature.priorityChart.insight} />
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_3fr]">
                <GoodAppConditionsChart data={data.feature.goodAppConditions} />
                <TrackedMetricsChart data={data.feature.trackedMetrics} />
              </div>
              <div className="mt-6">
                <InsightBox insight={data.feature.insight} />
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-line bg-paper-alt p-8 text-center text-sm text-muted">
            此分頁內容準備中
          </div>
        )}
      </div>
    </div>
  );
}
