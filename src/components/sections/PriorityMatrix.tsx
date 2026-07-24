"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type {
  PriorityMatrix as PriorityMatrixData,
  MatrixBubble,
  MatrixDot,
  MatrixExcluded,
  MatrixSideCard,
} from "@/lib/data";

const TIER_COLOR: Record<1 | 2, string> = {
  1: "#0B2559",
  2: "#5C7DA6",
};

const PLOT_HEIGHT = "h-[300px] sm:h-[360px] lg:h-[440px]";

function Bubble({ bubble }: { bubble: MatrixBubble }) {
  const color = TIER_COLOR[bubble.tier];
  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ top: `${bubble.top}%`, left: `${bubble.left}%`, width: bubble.size, height: bubble.size }}
    >
      {bubble.pulse && (
        <motion.span
          className="absolute inset-0 rounded-full blur-lg"
          style={{ backgroundColor: color }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.25, 0.5, 0.25] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}
      <div
        className="relative flex h-full w-full items-center justify-center rounded-full px-2.5 text-center text-[11px] font-medium leading-tight text-white shadow-md"
        style={{ backgroundColor: color }}
      >
        {bubble.label}
      </div>
    </div>
  );
}

function Dot({ dot }: { dot: MatrixDot }) {
  return (
    <div
      className="absolute flex -translate-y-1/2 items-center gap-1.5 whitespace-nowrap text-[11px] text-ink-soft"
      style={{ top: `${dot.top}%`, left: `${dot.left}%` }}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: TIER_COLOR[dot.tier] }}
      />
      {dot.label}
    </div>
  );
}

function Excluded({ item }: { item: MatrixExcluded }) {
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dashed border-muted-2 px-2 text-center text-[10px] leading-tight text-muted"
      style={{ top: `${item.top}%`, left: `${item.left}%`, width: item.size, height: item.size }}
    >
      {item.label}
    </div>
  );
}

function LegendDot({ tier }: { tier: 1 | 2 | 3 }) {
  if (tier === 3) {
    return <span className="h-3 w-3 shrink-0 rounded-full border border-dashed border-muted-2" />;
  }
  return (
    <span
      className="h-3 w-3 shrink-0 rounded-full"
      style={{ backgroundColor: TIER_COLOR[tier] }}
    />
  );
}

function CaptionOverlay({ card }: { card: MatrixSideCard }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="text-xs font-semibold text-white">{card.title}</p>
      <p className="mt-1 text-[11px] leading-snug text-white/80">{card.description}</p>
    </div>
  );
}

function PositionedImageCard({ card, top }: { card: MatrixSideCard; top: number }) {
  return (
    <div className="absolute left-0 right-0 -translate-y-1/2" style={{ top: `${top}%` }}>
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line shadow-sm">
        <Image
          src={card.image}
          alt={card.title}
          fill
          sizes="300px"
          style={{ objectPosition: card.imagePosition }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <CaptionOverlay card={card} />
      </div>
    </div>
  );
}

function SimpleImageCard({ card }: { card: MatrixSideCard }) {
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line">
      <Image
        src={card.image}
        alt={card.title}
        fill
        sizes="(max-width: 640px) 50vw, 320px"
        style={{ objectPosition: card.imagePosition }}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <CaptionOverlay card={card} />
    </div>
  );
}

export function PriorityMatrix({ data }: { data: PriorityMatrixData }) {
  const imageTops = [24, 79];

  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-muted">
        {data.legend.map((item) => (
          <span key={item.label} className="flex items-center gap-2">
            <LegendDot tier={item.tier} />
            {item.label}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
        <div className="flex-1 overflow-x-auto">
          <div className="min-w-[480px] pl-9">
            <div className="relative">
              <span className="absolute -top-6 left-0 text-[11px] text-muted">{data.axis.top}</span>
              <span className="absolute top-1/2 left-[-2rem] -translate-y-1/2 -rotate-90 whitespace-nowrap text-[11px] text-muted">
                {data.axis.yLabel} ↑
              </span>

              <div className={`relative w-full border-b border-l border-line ${PLOT_HEIGHT}`}>
                <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-line" />
                <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-line" />

                {data.excluded.map((item) => (
                  <Excluded key={item.label} item={item} />
                ))}
                {data.dots.map((dot) => (
                  <Dot key={dot.label} dot={dot} />
                ))}
                {data.bubbles.map((bubble) => (
                  <Bubble key={bubble.label} bubble={bubble} />
                ))}
              </div>

              <div className="mt-2 flex items-center justify-between text-[11px] text-muted">
                <span>{data.axis.bottom}</span>
                <span>{data.axis.right}</span>
              </div>
              <p className="mt-1 text-center text-[11px] text-muted">{data.axis.xLabel} →</p>
            </div>
          </div>
        </div>

        <div className={`relative hidden w-[300px] shrink-0 lg:block ${PLOT_HEIGHT}`}>
          {data.sideCards.map((card, i) => (
            <PositionedImageCard key={card.title} card={card} top={imageTops[i]} />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:hidden">
        {data.sideCards.map((card) => (
          <SimpleImageCard key={card.title} card={card} />
        ))}
      </div>
    </div>
  );
}
