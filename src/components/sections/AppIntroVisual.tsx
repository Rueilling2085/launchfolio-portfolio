import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { AppIntroVisual as AppIntroVisualData } from "@/lib/data";

function QuickOverviewText({ segments }: { segments: AppIntroVisualData["quickOverviewSegments"] }) {
  return (
    <p className="text-lg leading-relaxed text-white/80 md:text-xl">
      {segments.map((segment, i) => (
        <span key={i} className={segment.bold ? "font-semibold text-white" : undefined}>
          {segment.text}
        </span>
      ))}
    </p>
  );
}

export function AppIntroVisual({ data }: { data: AppIntroVisualData }) {
  return (
    <div className="relative mt-14 md:mt-16">
      <RevealOnScroll>
        <div className="rounded-[2rem] bg-ink px-6 py-8 md:px-10 md:py-10">
          {data.eyebrow && (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/70">
              <PulseDot color="#045CC4" size={6} />
              {data.eyebrow}
            </span>
          )}
          <div className="mt-5 flex flex-col gap-5">
            {data.aboutParagraphs.map((paragraph, i) => (
              <p key={i} className="text-sm leading-relaxed text-white/70 md:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </RevealOnScroll>

      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <RevealOnScroll delay={0.05}>
          <div className="flex h-full flex-col justify-center rounded-[2rem] bg-ink px-6 py-8 md:px-10 md:py-10">
            {data.quickOverviewEyebrow && (
              <p className="text-xs font-medium text-white/40">{data.quickOverviewEyebrow}</p>
            )}
            <div className="mt-4">
              <QuickOverviewText segments={data.quickOverviewSegments} />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-line bg-white">
            <div className="flex items-center justify-center gap-3 px-6 py-8">
              <span className="relative h-12 w-12 overflow-hidden rounded-xl">
                <Image
                  src={data.logo.image}
                  alt={data.logo.imageAlt ?? data.logo.name}
                  fill
                  sizes="48px"
                  className="object-contain"
                />
              </span>
              <span className="text-xl font-semibold text-ink">{data.logo.name}</span>
            </div>
            {data.mockup.image && (
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={data.mockup.image}
                  alt={data.mockup.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 768px) 500px, 100vw"
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
