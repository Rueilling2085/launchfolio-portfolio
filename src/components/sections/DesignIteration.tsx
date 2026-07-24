"use client";

import { useRef, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Video,
  Camera,
  Route,
  ListChecks,
  Layers,
  Zap,
  XCircle,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
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
        className="relative aspect-[3/2] w-full touch-none select-none overflow-hidden rounded-lg"
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

function TreeNode({
  layoutId,
  icon: Icon,
  label,
  highlight,
}: {
  layoutId: string;
  icon: LucideIcon;
  label: string;
  highlight?: boolean;
}) {
  return (
    <motion.span
      layout
      layoutId={layoutId}
      transition={{ type: "spring", stiffness: 260, damping: 26 }}
      className={
        highlight
          ? "relative z-10 inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg bg-gradient-to-br from-[#14336E] to-[#0A1230] px-3.5 py-2 text-[11px] font-semibold text-white shadow-[0_10px_24px_-6px_rgba(11,37,89,0.55)]"
          : "inline-flex items-center gap-1.5 whitespace-nowrap rounded-lg border border-line bg-white px-3.5 py-2 text-[11px] font-medium text-ink-soft shadow-sm"
      }
    >
      <Icon size={12} className={highlight ? "shrink-0" : "shrink-0 text-[#0B2559]"} />
      {label}
    </motion.span>
  );
}

function CameraBranch({ n }: { n: 2 | 3 }) {
  return (
    <motion.li layout>
      <TreeNode layoutId={`camera-${n}`} icon={Camera} label={`Camera ${n}`} />
      <ul>
        <motion.li layout>
          <TreeNode layoutId={`camera-${n}-test`} icon={Route} label="Test" />
          <ul>
            <li>
              <TreeNode layoutId={`camera-${n}-result`} icon={ListChecks} label="Result" />
            </li>
          </ul>
        </motion.li>
      </ul>
    </motion.li>
  );
}

function WorkflowTree({ mode }: { mode: "before" | "after" }) {
  const isAfter = mode === "after";

  return (
    <ul className="org-tree">
      <li>
        <TreeNode layoutId="video-source" icon={Video} label="Video Source" />
        <ul>
          <motion.li layout>
            <TreeNode
              layoutId="main-node"
              icon={isAfter ? Video : Camera}
              label={isAfter ? "Video 1 · Test Zone" : "Camera 1"}
              highlight={isAfter}
            />
            <ul>
              <motion.li layout>
                <TreeNode layoutId="main-test" icon={Route} label="Test" />
                <ul>
                  <motion.li layout>
                    <TreeNode layoutId="main-result" icon={ListChecks} label="Result" />
                    {isAfter && (
                      <ul>
                        <li>
                          <TreeNode
                            layoutId="camera-2"
                            icon={Camera}
                            label="Camera 2 · Auto-applied"
                          />
                        </li>
                        <li>
                          <TreeNode
                            layoutId="camera-3"
                            icon={Camera}
                            label="Camera 3 · Auto-applied"
                          />
                        </li>
                      </ul>
                    )}
                  </motion.li>
                </ul>
              </motion.li>
            </ul>
          </motion.li>

          {!isAfter && <CameraBranch key="camera-2-branch" n={2} />}
          {!isAfter && <CameraBranch key="camera-3-branch" n={3} />}
        </ul>
      </li>
    </ul>
  );
}

function ImpactCard({
  icon: Icon,
  label,
  value,
}: {
  icon: LucideIcon;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-5">
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#0B2559]/10 text-[#0B2559]">
        <Icon size={16} />
      </span>
      <p className="mt-3 text-xs font-medium text-muted">{label}</p>
      <p className="mt-1 text-sm font-semibold text-ink">{value}</p>
    </div>
  );
}

function WorkflowOptimization({
  before: _before,
  after: _after,
}: {
  before: string;
  after: string;
}) {
  const [mode, setMode] = useState<"before" | "after">("before");
  const isAfter = mode === "after";

  return (
    <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 px-5 md:px-14">
      <LayoutGroup id="workflow-tree">
        <div className="grid grid-cols-1 justify-center gap-10 md:grid-cols-[max-content_240px] md:items-start">
          <div>
            <div className="mb-5 flex flex-wrap items-center justify-between gap-4">
              <p className="text-base font-semibold text-ink md:text-lg">
                Video Setup Optimization
              </p>

              <div className="relative inline-flex rounded-full border border-line bg-paper-alt p-1 text-xs font-medium">
                {(["before", "after"] as const).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMode(m)}
                    className={`relative z-10 rounded-full px-3.5 py-1.5 capitalize transition-colors ${
                      mode === m ? "text-white" : "text-muted"
                    }`}
                  >
                    {mode === m && (
                      <motion.span
                        layoutId="mode-toggle-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-[#0B2559] shadow-[0_4px_12px_-2px_rgba(11,37,89,0.55)]"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {m}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex min-w-max pt-2">
              <WorkflowTree mode={mode} />
            </div>

            <div className="relative mt-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={mode}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="flex items-center gap-2"
                >
                  {isAfter ? (
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-500" />
                  ) : (
                    <XCircle size={16} className="shrink-0 text-red-500" />
                  )}
                  <p className="text-xs whitespace-nowrap text-muted">
                    {isAfter
                      ? "Complete validation once and one-click apply it everywhere, cutting repetitive setup by 80%."
                      : "Every added camera requires its own repeated test, so setup time multiplies with each one."}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div>
            <p className="mb-5 text-base font-semibold text-ink md:text-lg">
              Impact
            </p>
            <div className="flex flex-row gap-4 sm:flex-col">
              <ImpactCard icon={Layers} label="Scalability" value="1-to-N Deployment" />
              <ImpactCard icon={Zap} label="Efficiency" value="80% Less Setup Time" />
            </div>
          </div>
        </div>
      </LayoutGroup>
    </div>
  );
}

export function DesignIteration({ data }: { data: DesignIterationData }) {
  return (
    <div className="mt-16 md:mt-24">
      <RevealOnScroll className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
          <PulseDot color="#0B2559" size={7} />
          {data.eyebrow}
        </span>
      </RevealOnScroll>

      {data.items && data.items.length > 0 && (
        <div className="mt-8 flex flex-col gap-12">
          {data.items.map((item, i) => (
            <RevealOnScroll key={item.title} delay={i * 0.08}>
              <div className="mb-5">
                <p className="text-base font-semibold text-ink md:text-lg">{item.title}</p>
                <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
              {item.beforeImage && item.afterImage && (
                <BeforeAfterSlider
                  title={item.title}
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
              )}
              {item.workflowBefore && item.workflowAfter && (
                <WorkflowOptimization
                  before={item.workflowBefore}
                  after={item.workflowAfter}
                />
              )}
            </RevealOnScroll>
          ))}
        </div>
      )}
    </div>
  );
}
