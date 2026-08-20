"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { DesignPrinciples } from "@/components/sections/DesignPrinciples";
import type { DesignSketches as DesignSketchesData } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

function SketchFrame({
  src,
  alt,
  aspect,
  className = "",
}: {
  src: string;
  alt?: string;
  aspect?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={aspect ? { aspectRatio: aspect } : undefined}
    >
      <Image src={src} alt={alt ?? ""} fill sizes="(min-width: 768px) 500px, 100vw" className="object-contain" />
    </div>
  );
}

export function DesignSketches({ data }: { data: DesignSketchesData }) {
  const { lang } = useLanguage();
  const [first, second, third] = data.images;

  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0A0118] px-5 pb-8 pt-16 md:px-14 md:pb-10 md:pt-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(85,50,250,0.25),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {data.eyebrow && (
          <RevealOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              <PulseDot color="#8B7BFF" size={7} />
              {data.eyebrow[lang]}
            </span>
          </RevealOnScroll>
        )}

        <RevealOnScroll delay={0.05} className="mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row">
              {first && (
                <SketchFrame src={first.src} alt={first.alt?.[lang]} aspect="1386 / 990" className="sm:w-[54%]" />
              )}
              {third && (
                <SketchFrame
                  src={third.src}
                  alt={third.alt?.[lang]}
                  aspect="933 / 1311"
                  className="sm:w-[28%]"
                />
              )}
              {second && (
                <SketchFrame
                  src={second.src}
                  alt={second.alt?.[lang]}
                  aspect="762 / 1691"
                  className="sm:w-[18%]"
                />
              )}
            </div>
          </div>
        </RevealOnScroll>

        {data.principles && (
          <DesignPrinciples intro={data.principlesIntro} principles={data.principles} />
        )}
      </div>
    </div>
  );
}
