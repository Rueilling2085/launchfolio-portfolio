"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ProjectWrapUp as ProjectWrapUpData } from "@/lib/data";

function WrapUpColumn({
  label,
  items,
}: {
  label: string;
  items: ProjectWrapUpData["worked"];
}) {
  const { lang } = useLanguage();
  return (
    <div>
      <RevealOnScroll className="text-center">
        <p className="text-sm font-semibold text-muted-2">{label}</p>
      </RevealOnScroll>
      <div className="mt-4 flex flex-col gap-4">
        {items.map((item, i) => (
          <RevealOnScroll key={item.title.zh} delay={0.05 * i}>
            <div className="rounded-2xl border border-line bg-white p-6 md:p-7">
              <p className="text-lg font-bold text-ink">{item.title[lang]}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.body[lang]}</p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}

export function ProjectWrapUp({ data }: { data: ProjectWrapUpData }) {
  const { lang } = useLanguage();
  return (
    <div className="mt-16 rounded-[2rem] bg-paper-alt px-6 py-16 md:mt-24 md:px-12 md:py-20">
      {data.eyebrow && (
        <RevealOnScroll className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
            <PulseDot color="#0B7DC9" size={7} />
            {data.eyebrow[lang]}
          </span>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.05} className="text-center">
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
          {data.heading[lang]}
        </h2>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <WrapUpColumn label={data.workedLabel[lang]} items={data.worked} />
        <WrapUpColumn label={data.nextLabel[lang]} items={data.next} />
      </div>
    </div>
  );
}
