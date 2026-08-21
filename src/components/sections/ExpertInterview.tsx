"use client";

import { useState } from "react";
import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { Localized } from "@/lib/i18n/resolve";
import type { ExpertInterview as ExpertInterviewData } from "@/lib/data";

const STAGGER_INDENT = ["0%", "14%", "6%", "18%", "2%", "16%", "8%"];
const HOVER_TILT = [-5, 4, -4, 5, -6, 3, -3.5];
const BUBBLE_BG = ["bg-paper-alt", "bg-[#D8EEFD]/70"];

function QuoteBubble({
  quote,
  marginLeft,
  hoverTilt,
  bg,
}: {
  quote: Localized;
  marginLeft: string;
  hoverTilt: number;
  bg: string;
}) {
  const { lang } = useLanguage();
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`w-fit max-w-[92%] cursor-default rounded-2xl px-5 py-4 text-sm leading-relaxed text-ink-soft shadow-sm transition-transform duration-300 ease-out ${bg}`}
      style={{
        marginLeft,
        transform: `rotate(${hovered ? hoverTilt : 0}deg) scale(${hovered ? 1.03 : 1})`,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {quote[lang]}
    </div>
  );
}

export function ExpertInterview({ data }: { data: ExpertInterviewData }) {
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

      <RevealOnScroll delay={0.08} className="mt-8">
        <div className="rounded-[2rem] border border-line bg-white p-6 md:p-12">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:items-center md:gap-6 md:text-left">
            <div className="flex shrink-0 -space-x-3">
              {data.avatars.map((src, i) => (
                <span
                  key={src}
                  className="relative h-11 w-11 overflow-hidden rounded-full ring-4 ring-white"
                  style={{ zIndex: data.avatars.length - i }}
                >
                  <Image src={src} alt="" fill sizes="44px" className="object-cover" />
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted">{data.intro[lang]}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div className="relative flex flex-col gap-4">
              {data.quotes.map((quote, i) => (
                <QuoteBubble
                  key={quote.zh}
                  quote={quote}
                  marginLeft={STAGGER_INDENT[i % STAGGER_INDENT.length]}
                  hoverTilt={HOVER_TILT[i % HOVER_TILT.length]}
                  bg={BUBBLE_BG[i % BUBBLE_BG.length]}
                />
              ))}
            </div>

            {data.photo && (
              <div className="relative hidden overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#045CC4] to-[#0493FB] p-[3px] md:block">
                <div className="relative h-full min-h-[520px] overflow-hidden rounded-[1.5rem]">
                  <Image
                    src={data.photo}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 45vw, 90vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
