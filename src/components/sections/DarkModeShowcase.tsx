"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Marquee } from "@/components/ui/Marquee";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { DarkModeShowcase as DarkModeShowcaseData } from "@/lib/data";

export function DarkModeShowcase({ data }: { data: DarkModeShowcaseData }) {
  const { lang } = useLanguage();
  return (
    <div className="relative mt-16 md:mt-24">
      <RevealOnScroll className="overflow-hidden rounded-[2rem] bg-ink px-6 py-10 md:px-12 md:py-14">
        <h3 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
          {data.heading[lang]}
        </h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
          {data.description[lang]}
        </p>

        <div className="mt-8 md:mt-10">
          <Marquee durationSeconds={70} gap={32}>
            {data.gallery.images.map((img) => (
              <div
                key={img.src}
                className="h-[300px] shrink-0 transition-transform duration-300 hover:-translate-y-2 md:h-[380px]"
              >
                <Image
                  src={img.src}
                  alt={img.alt[lang]}
                  width={img.width}
                  height={img.height}
                  sizes="(min-width: 768px) 210px, 165px"
                  className="h-full w-auto rounded-2xl drop-shadow-[0_24px_48px_rgba(0,0,0,0.4)]"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </RevealOnScroll>
    </div>
  );
}
