"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type {
  PriorityMatrix as PriorityMatrixData,
  MatrixBubble,
  MatrixDot,
  MatrixExcluded,
  MatrixSideCard,
} from "@/lib/data";

const TIER_COLOR: Record<1 | 2, string> = {
  1: "#006AB7",
  2: "#B7BCC4",
};

const PLOT_HEIGHT = "h-[300px] sm:h-[360px] lg:h-[440px]";

function Bubble({ bubble }: { bubble: MatrixBubble }) {
  const { lang } = useLanguage();
  const isPrimary = bubble.tier === 1;
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
        className={`relative flex h-full w-full items-center justify-center rounded-full border px-2.5 text-center text-[11px] leading-tight shadow-md ${
          isPrimary
            ? "border-[#0B7DC9]/50 font-semibold text-[#006AB7]"
            : "border-[#B7BCC4] font-medium text-muted"
        }`}
        style={{ backgroundColor: isPrimary ? "#D8EEFD" : "rgba(148,153,161,0.18)" }}
      >
        {bubble.label[lang].split("\n").map((line, i) => (
          <span key={i} className={lang === "zh" ? "block whitespace-nowrap" : "block"}>
            {line}
          </span>
        ))}
      </div>
    </div>
  );
}

function Dot({ dot }: { dot: MatrixDot }) {
  const { lang } = useLanguage();
  return (
    <div
      className="absolute flex -translate-y-1/2 items-center gap-1.5 whitespace-nowrap text-[11px] text-muted"
      style={{ top: `${dot.top}%`, left: `${dot.left}%` }}
    >
      <span
        className="h-2 w-2 shrink-0 rounded-full"
        style={{ backgroundColor: TIER_COLOR[dot.tier] }}
      />
      {dot.label[lang]}
    </div>
  );
}

function Excluded({ item }: { item: MatrixExcluded }) {
  const { lang } = useLanguage();
  return (
    <div
      className="absolute flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-dashed border-muted-2 px-2 text-center text-[10px] leading-tight text-muted"
      style={{ top: `${item.top}%`, left: `${item.left}%`, width: item.size, height: item.size }}
    >
      {item.label[lang]}
    </div>
  );
}

function AxisPill({ label, direction }: { label: string; direction: "up" | "down" | "right" }) {
  const glyph = direction === "up" ? "▲" : direction === "down" ? "▼" : "▶";
  const isLow = direction === "down";
  return (
    <span
      className={`inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2.5 py-1 text-[10px] font-semibold ${
        isLow ? "bg-ink-soft/10 text-ink-soft" : "bg-[#0B7DC9]/15 text-[#006AB7]"
      }`}
    >
      {label}
      <span className="text-[7px]">{glyph}</span>
    </span>
  );
}

function CardImageCaption({
  title,
  description,
}: {
  title: MatrixSideCard["title"];
  description: MatrixSideCard["description"];
}) {
  const { lang } = useLanguage();
  return (
    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/75 via-black/10 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
      <p className="text-xs font-semibold text-white">{title[lang]}</p>
      <p className="mt-1 text-[11px] leading-snug text-white/80">{description[lang]}</p>
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

function PositionedImageCard({ card, top }: { card: MatrixSideCard; top: number }) {
  const { lang } = useLanguage();
  return (
    <div className="absolute left-0 right-0 -translate-y-1/2" style={{ top: `${top}%` }}>
      <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line shadow-sm">
        <Image
          src={card.image}
          alt={card.title[lang]}
          fill
          sizes="300px"
          style={{ objectPosition: card.imagePosition }}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <CardImageCaption title={card.title} description={card.description} />
      </div>
    </div>
  );
}

function SimpleImageCard({ card }: { card: MatrixSideCard }) {
  const { lang } = useLanguage();
  return (
    <div className="group relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-line">
      <Image
        src={card.image}
        alt={card.title[lang]}
        fill
        sizes="(max-width: 640px) 50vw, 320px"
        style={{ objectPosition: card.imagePosition }}
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <CardImageCaption title={card.title} description={card.description} />
    </div>
  );
}

export function PriorityMatrix({ data }: { data: PriorityMatrixData }) {
  const { lang } = useLanguage();
  const imageTops = [24, 79];

  return (
    <div>
      <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-muted">
        {data.legend.map((item) => (
          <span key={item.label.zh} className="flex items-center gap-2">
            <LegendDot tier={item.tier} />
            {item.label[lang]}
          </span>
        ))}
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-8">
        <div className="flex-1">
            <div className="flex items-stretch gap-2.5">
              <div className={`flex w-16 shrink-0 flex-col items-center justify-between text-[11px] text-ink ${PLOT_HEIGHT}`}>
                <AxisPill label={data.axis.top[lang]} direction="up" />
                <span className="flex flex-1 items-center justify-center">
                  <span className="-rotate-90 whitespace-nowrap font-medium">
                    {data.axis.yLabel[lang]} →
                  </span>
                </span>
                <AxisPill label={data.axis.bottom[lang]} direction="down" />
              </div>

              <div className="relative min-w-0 flex-1">
                <div className={`relative w-full overflow-hidden border-b border-l border-line ${PLOT_HEIGHT}`}>
                  <span className="absolute right-0 top-0 h-1/2 w-1/2 bg-[#EAF6FE]" />
                  <span className="absolute bottom-0 left-0 h-1/2 w-1/2 bg-[#F0F2F5]" />
                  <span className="absolute inset-x-0 top-1/2 border-t border-dashed border-[#B7BCC4]" />
                  <span className="absolute inset-y-0 left-1/2 border-l border-dashed border-[#B7BCC4]" />

                  {data.excluded.map((item) => (
                    <Excluded key={item.label.zh} item={item} />
                  ))}
                  {data.dots.map((dot) => (
                    <Dot key={dot.label.zh} dot={dot} />
                  ))}
                  {data.bubbles.map((bubble) => (
                    <Bubble key={bubble.label.zh} bubble={bubble} />
                  ))}
                </div>

                <div className="mt-2 flex items-center justify-end">
                  <AxisPill label={data.axis.right[lang]} direction="right" />
                </div>
                <p className="mt-1 text-center text-[11px] font-medium text-ink">{data.axis.xLabel[lang]} →</p>
              </div>
            </div>
        </div>

        <div className={`relative hidden w-[300px] shrink-0 lg:block ${PLOT_HEIGHT}`}>
          {data.sideCards.map((card, i) => (
            <PositionedImageCard key={card.title.zh} card={card} top={imageTops[i]} />
          ))}
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 lg:hidden">
        {data.sideCards.map((card) => (
          <SimpleImageCard key={card.title.zh} card={card} />
        ))}
      </div>
    </div>
  );
}
