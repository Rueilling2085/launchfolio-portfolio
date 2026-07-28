"use client";

import { useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Layers,
  Zap,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { DesignIteration as DesignIterationData } from "@/lib/data";

function BeforeAfterSlider({
  title,
  beforeImage,
  afterImage,
}: {
  title: string;
  beforeImage: string;
  afterImage: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [percent, setPercent] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = (clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPercent(Math.min(100, Math.max(0, pct)));
  };

  return (
    <div className="rounded-xl bg-paper-alt p-5 shadow-[0_12px_32px_-12px_rgba(15,23,42,0.18)] md:p-8">
      <div
        ref={containerRef}
        className="relative aspect-[5128/6232] w-full touch-none select-none overflow-hidden rounded-lg"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          updateFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (!dragging.current) return;
          updateFromClientX(e.clientX);
        }}
        onPointerUp={() => {
          dragging.current = false;
        }}
      >
        <img
          src={afterImage}
          alt={`${title} — After`}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          src={beforeImage}
          alt={`${title} — Before`}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
        />

        <span
          className="absolute top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white"
          style={{ left: 12, opacity: percent > 12 ? 1 : 0 }}
        >
          Before
        </span>
        <span
          className="absolute top-3 rounded-full bg-black/50 px-2.5 py-1 text-[10px] font-medium text-white"
          style={{ right: 12, opacity: percent < 88 ? 1 : 0 }}
        >
          After
        </span>

        <div
          className="absolute inset-y-0 w-0.5 bg-white/80"
          style={{ left: `${percent}%` }}
        >
          <span className="absolute top-1/2 left-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/40 text-white shadow-lg backdrop-blur-sm">
            <ChevronLeft size={13} className="-mr-0.5" />
            <ChevronRight size={13} className="-ml-0.5" />
          </span>
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-muted">Drag to compare</p>
    </div>
  );
}

function AnnotatedBeforeAfter({
  title,
  beforeImage,
  afterImage,
}: {
  title: string;
  beforeImage: string;
  afterImage: string;
}) {
  return (
    <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 px-5 md:px-14">
      <div className="flex justify-center overflow-x-auto">
        <div className="flex min-w-max items-start gap-10">
          <div className="w-[620px] shrink-0">
            <span className="mb-3 inline-flex items-center rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
              Before
            </span>
            <div className="relative flex h-[345px] items-center justify-center">
              <img
                src={beforeImage}
                alt={`${title} — Before`}
                className="h-full w-full rounded-xl object-contain shadow-[0_20px_40px_-16px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>

          <div className="w-[620px] shrink-0">
            <span className="mb-3 inline-flex items-center rounded-full bg-[#006AB7] px-3 py-1 text-xs font-medium text-white">
              After
            </span>
            <div className="relative flex h-[345px] items-center justify-center">
              <img
                src={afterImage}
                alt={`${title} — After`}
                className="h-full w-full rounded-xl object-contain shadow-[0_20px_40px_-16px_rgba(0,0,0,0.35)]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FlowTag({
  icon: Icon,
  label,
  left,
  top,
  muted,
  highlight,
}: {
  icon: LucideIcon;
  label: string;
  left: number;
  top: number;
  muted?: boolean;
  highlight?: boolean;
}) {
  return (
    <span
      className={`absolute inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border px-3 py-1.5 text-xs font-medium shadow-[0_10px_22px_-8px_rgba(11,37,89,0.45)] ${
        highlight
          ? "border-transparent bg-gradient-to-br from-[#14336E] to-[#0A1230] text-white"
          : muted
            ? "border-line bg-paper-alt text-muted"
            : "border-[#0B7DC9]/25 bg-white text-ink-soft"
      }`}
      style={{ left: `${left}%`, top: `${top}%` }}
    >
      <Icon size={13} className={`shrink-0 ${highlight ? "" : muted ? "text-muted" : "text-[#0B7DC9]"}`} />
      {label}
    </span>
  );
}

function StepCard({
  step,
  title,
  desc,
  image,
  imageAlt,
  hero,
  width,
}: {
  step: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  hero?: boolean;
  width?: number;
}) {
  return (
    <div
      className={`shrink-0 overflow-hidden rounded-b-2xl border ${
        hero
          ? "border-transparent bg-gradient-to-br from-[#14336E] to-[#0A1230] shadow-[0_18px_40px_-14px_rgba(11,37,89,0.55)]"
          : "border-line bg-white"
      }`}
      style={{ width: width ?? 375 }}
    >
      <div className="relative">
        <img
          src={image}
          alt={imageAlt}
          className={`aspect-[900/600] w-full object-cover ${hero ? "" : "border-b border-line"}`}
        />
        <span
          className={`absolute left-2.5 top-2.5 flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold text-white ${
            hero ? "bg-white/20 backdrop-blur-sm" : "bg-black/55 backdrop-blur-sm"
          }`}
        >
          {step}
        </span>
      </div>
      <div className="px-4 py-3.5">
        <p className={`text-[13px] font-semibold ${hero ? "text-white" : "text-ink"}`}>{title}</p>
        <p className={`mt-1 text-[11.5px] leading-snug ${hero ? "text-white/70" : "text-muted"}`}>
          {desc}
        </p>
      </div>
    </div>
  );
}

function LiquidConnector() {
  return (
    <div className="flex w-[84px] shrink-0 items-center justify-center self-center">
      <svg viewBox="0 0 84 40" className="h-10 w-[84px] text-[#D3D8E0]">
        <path d="M4 20H80" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <circle cx="80" cy="20" r="3" fill="currentColor" />
      </svg>
    </div>
  );
}

function WorkflowRow({
  mode,
  labelSub,
  children,
}: {
  mode: "before" | "after";
  labelSub: string;
  children: React.ReactNode;
}) {
  const isAfter = mode === "after";

  return (
    <div>
      <div className="mb-5 flex items-center gap-2.5">
        <span
          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold capitalize text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-md ${
            isAfter
              ? "border-emerald-200/70 bg-emerald-50/60"
              : "border-red-200/70 bg-red-50/60"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${isAfter ? "bg-emerald-500" : "bg-red-500"}`} />
          {mode}
        </span>
        <span className="text-xs text-ink">{labelSub}</span>
      </div>

      <div className={`flex items-stretch overflow-x-auto pb-1 ${isAfter ? "" : "opacity-90"}`}>
        {children}
      </div>
    </div>
  );
}

function ImpactCard({
  icon: Icon,
  label,
  valueHighlight,
  valueRest,
}: {
  icon: LucideIcon;
  label: string;
  valueHighlight: string;
  valueRest: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#D8EEFD] text-[#0B7DC9]">
        <Icon size={16} />
      </span>
      <p className="mt-3 text-xs font-medium text-muted">{label}</p>
      <p className="mt-1 text-[32px] font-bold text-[#006AB7]">{valueHighlight}</p>
      <p className="mt-0.5 text-sm font-semibold text-ink">{valueRest}</p>
    </div>
  );
}

function WorkflowOptimization() {
  const base = "/images/projects/vision-detect";

  return (
    <>
      <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 px-5 md:px-14">
        <div className="flex justify-center">
          <div className="inline-flex flex-col">
            <p className="mb-6 text-base font-semibold text-ink md:text-lg">
              影像設定流程優化
            </p>

            <div className="flex flex-col gap-10">
              <WorkflowRow
                mode="before"
                labelSub="3 支攝影機，3 次重複設定"
              >
                <StepCard
                  step="1"
                  title="攝影機 1．測試與設定"
                  desc="從零撰寫並測試偵測 Prompt。"
                  image={`${base}/flow1-cam1-v2.jpg`}
                  imageAlt="Camera 1 setup screen"
                />
                <LiquidConnector />
                <StepCard
                  step="2"
                  title="攝影機 2．測試與設定"
                  desc="同樣的 Prompt，重新輸入並再次測試。"
                  image={`${base}/flow1-cam2-v2.jpg`}
                  imageAlt="Camera 2 setup screen"
                />
                <LiquidConnector />
                <StepCard
                  step="3"
                  title="攝影機 3．測試與設定"
                  desc="……再重複一次，時間隨攝影機數量線性增加。"
                  image={`${base}/flow1-cam3-v2.jpg`}
                  imageAlt="Camera 3 setup screen"
                />
              </WorkflowRow>

              <WorkflowRow
                mode="after"
                labelSub="1 個測試區，套用到所有場域"
              >
                <StepCard
                  step="1"
                  title="影像來源 1．測試區"
                  desc="在這裡微調一次偵測 Prompt 即可。"
                  image={`${base}/flow2-testzone-v2.jpg`}
                  imageAlt="Test Zone screen"
                  width={405}
                />
                <LiquidConnector />
                <StepCard
                  step="N"
                  title="套用到營運區"
                  desc="一鍵將同一範本套用到其他所有攝影機。"
                  image={`${base}/flow2-operational-v2.jpg`}
                  imageAlt="Operational Zone screen with 6 auto-applied cameras"
                  width={510}
                />
              </WorkflowRow>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 max-w-[900px]">
        <p className="mb-5 text-base font-semibold text-ink md:text-lg">成效</p>
        <div className="grid grid-cols-2 gap-4">
          <ImpactCard
            icon={Layers}
            label="擴展性"
            valueHighlight="1-to-N"
            valueRest="部署模式"
          />
          <ImpactCard
            icon={Zap}
            label="效率"
            valueHighlight="80%"
            valueRest="設定時間減少"
          />
        </div>
      </div>
    </>
  );
}

function QuoteHighlight({ children }: { children: React.ReactNode }) {
  return <span className="font-medium text-[#006AB7]">{children}</span>;
}

function SpecialistCard({
  avatar,
  name,
  quote,
}: {
  avatar: string;
  name: string;
  quote: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3">
      <img
        src={avatar}
        alt={name}
        className="h-11 w-11 shrink-0 rounded-full object-cover"
      />
      <div>
        <p className="text-[12.5px] font-semibold text-ink">{name}</p>
        <p className="mt-0.5 text-[12px] italic leading-snug text-muted">&ldquo;{quote}&rdquo;</p>
      </div>
    </div>
  );
}

function PromptOptimization() {
  const base = "/images/projects/vision-detect";

  return (
    <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 px-5 md:px-14">
      <p className="mb-6 text-base font-semibold text-ink md:ml-[max(0px,calc((100vw-1080px)/2))] md:text-lg">
        Prompt 輸入介面優化
      </p>

      <div className="flex justify-center">
      <div className="inline-flex flex-col gap-8">
        {/* Before */}
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-red-200/70 bg-red-50/60 px-3 py-1 text-xs font-semibold capitalize text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
              Before
            </span>
            <span className="text-xs text-ink">3 位人員，3 句自由輸入的 Prompt</span>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-line bg-[#EAEBED] p-6 opacity-95 md:flex-row md:items-center md:gap-6 md:p-8">
            <img
              src={`${base}/key2-scene-before.webp`}
              alt="Free-form prompt input screen"
              className="w-full shrink-0 md:w-[500px]"
            />
            <div className="flex w-full shrink-0 flex-col gap-2.5 md:w-[300px]">
              <SpecialistCard
                avatar={`${base}/avatar-ehs1.jpg`}
                name="職安人員 1"
                quote={
                  <>
                    偵測<QuoteHighlight>現場人員</QuoteHighlight>是否配戴
                    <QuoteHighlight>安全帽</QuoteHighlight>。
                  </>
                }
              />
              <SpecialistCard
                avatar={`${base}/avatar-manager.jpg`}
                name="工地經理"
                quote={
                  <>
                    確認<QuoteHighlight>工地人員</QuoteHighlight>是否正確配戴
                    <QuoteHighlight>安全帽</QuoteHighlight>。
                  </>
                }
              />
              <SpecialistCard
                avatar={`${base}/avatar-ehs2.jpg`}
                name="職安人員 2"
                quote={
                  <>
                    找出現場未配戴<QuoteHighlight>安全帽</QuoteHighlight>的
                    <QuoteHighlight>人員</QuoteHighlight>。
                  </>
                }
              />
            </div>
          </div>
        </div>

        {/* After */}
        <div>
          <div className="mb-4 flex items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/70 bg-emerald-50/60 px-3 py-1 text-xs font-semibold capitalize text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_3px_rgba(0,0,0,0.05)] backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              After
            </span>
            <span className="text-xs text-ink">1 個共用範本，變數可替換</span>
          </div>

          <div className="flex flex-col gap-6 rounded-2xl border border-line bg-[#EAEBED] p-6 md:flex-row md:items-center md:gap-6 md:p-8">
            <img
              src={`${base}/key2-scene-after.webp`}
              alt="Structured prompt template input screen"
              className="w-full shrink-0 md:w-[500px]"
            />
            <div className="flex w-full shrink-0 flex-col gap-4 md:w-[300px]">
              <div className="flex items-center -space-x-2">
                <img src={`${base}/avatar-ehs1.jpg`} alt="EHS Specialist 1" className="h-9 w-9 rounded-full border-2 border-white object-cover" />
                <img src={`${base}/avatar-manager.jpg`} alt="Site Manager" className="h-9 w-9 rounded-full border-2 border-white object-cover" />
                <img src={`${base}/avatar-ehs2.jpg`} alt="EHS Specialist 2" className="h-9 w-9 rounded-full border-2 border-white object-cover" />
                <span className="pl-4 text-[11.5px] text-muted">職安人員 1．工地經理．職安人員 2</span>
              </div>
              <div className="rounded-xl border border-line bg-white p-4">
                <p className="text-[11px] font-medium text-muted">偵測 Prompt 範本</p>
                <p className="mt-1 text-[13px] font-semibold text-ink">
                  裝備偵測 — 是否配戴指定裝備
                </p>
                <p className="mt-3 text-[11px] font-medium text-muted">Prompt</p>
                <p className="mt-1 text-[12.5px] leading-relaxed text-ink-soft">
                  請確認{" "}
                  <span className="rounded-full border border-[#0B7DC9]/30 bg-[#D8EEFD] px-2 py-0.5 text-[#0B7DC9]">
                    該名人員
                  </span>{" "}
                  是否依照安全規範，正確配戴指定的{" "}
                  <span className="rounded-full border border-[#0B7DC9]/30 bg-[#D8EEFD] px-2 py-0.5 text-[#0B7DC9]">
                    安全帽
                  </span>
                  。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

function SecondaryImagePanel({
  image,
  caption,
}: {
  image: string;
  caption: string;
}) {
  return (
    <div className="mt-6 rounded-xl bg-paper-alt p-5 shadow-[0_12px_32px_-12px_rgba(15,23,42,0.18)] md:p-8">
      <div className="relative overflow-hidden rounded-lg">
        <img src={image} alt="Prompt field reference" className="h-auto w-full" />
        <FlowTag icon={MessageSquare} label="Prompt" left={57.5} top={13} highlight />
      </div>
      <p className="mt-4 text-center text-xs leading-relaxed text-muted">{caption}</p>
    </div>
  );
}

export function DesignIteration({ data }: { data: DesignIterationData }) {
  return (
    <div className="mt-16 md:mt-24">
      {data.items && data.items.length > 0 && (
        <div className="mt-8 flex flex-col gap-12">
          {data.items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.08}>
              <div id={`opt-${i + 1}`} className="mb-5 scroll-mt-24">
                <div className="flex items-center gap-2.5">
                  {item.tag && (
                    <span className="inline-flex items-center rounded-full bg-ink-soft/10 px-2.5 py-1 text-[10px] font-semibold text-ink-soft">
                      {item.tag}
                    </span>
                  )}
                  <p className="text-base font-semibold text-ink md:text-lg">{item.title}</p>
                </div>

                <div className="mt-3 flex w-full items-start justify-between gap-4">
                  <div className="shrink-0">
                    <span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-red-600">
                      Before
                    </span>
                    <p className="mt-2 whitespace-nowrap text-sm leading-relaxed text-muted">{item.painPoint}</p>
                  </div>

                  <div className="flex flex-1 items-center justify-center pt-2">
                    <svg viewBox="0 0 40 16" className="h-4 w-10 text-[#C7CBD1]">
                      <path d="M0 8h32" stroke="currentColor" strokeWidth="1.5" fill="none" />
                      <path
                        d="M26 3l6 5-6 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        fill="none"
                      />
                    </svg>
                  </div>

                  <div className="max-w-[320px]">
                    <span className="inline-flex items-center rounded-full bg-[#D8EEFD] px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-[#0B7DC9]">
                      After
                    </span>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{item.solution}</p>
                  </div>
                </div>
              </div>
              {item.beforeImage && item.afterImage && (
                item.stackedBeforeAfter ? (
                  <AnnotatedBeforeAfter
                    title={item.title}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                  />
                ) : (
                  <BeforeAfterSlider
                    title={item.title}
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                  />
                )
              )}
              {item.workflowBefore && item.workflowAfter && <WorkflowOptimization />}
              {item.promptOptimization && <PromptOptimization />}
              {item.secondaryImage && item.secondaryImageCaption && (
                <SecondaryImagePanel
                  image={item.secondaryImage}
                  caption={item.secondaryImageCaption}
                />
              )}
            </RevealOnScroll>
          ))}
        </div>
      )}
    </div>
  );
}
