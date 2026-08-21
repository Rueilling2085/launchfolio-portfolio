"use client";

import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { DesignSystemShowcase as DesignSystemShowcaseData } from "@/lib/data";

export function DesignSystemShowcase({ data }: { data: DesignSystemShowcaseData }) {
  const { lang } = useLanguage();
  return (
    <div className="relative mt-16 md:mt-24">
      <RevealOnScroll className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1fr_1fr]">
        <div className="flex flex-col gap-6">
          <Image
            src={data.typography.src}
            alt=""
            width={data.typography.width}
            height={data.typography.height}
            sizes="(min-width: 1024px) 260px, 45vw"
            className="h-auto w-full rounded-2xl border border-line"
          />
          <Image
            src={data.color.src}
            alt=""
            width={data.color.width}
            height={data.color.height}
            sizes="(min-width: 1024px) 260px, 45vw"
            className="h-auto w-full rounded-2xl border border-line"
          />
        </div>

        <Image
          src={data.component.src}
          alt=""
          width={data.component.width}
          height={data.component.height}
          sizes="(min-width: 1024px) 260px, 90vw"
          className="h-auto w-full rounded-2xl border border-line"
        />

        <div className="lg:pt-2">
          <h3 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">
            {data.heading[lang]}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            {data.description[lang]}
          </p>
        </div>
      </RevealOnScroll>
    </div>
  );
}
