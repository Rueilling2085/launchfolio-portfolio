import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { OptimizationResults as OptimizationResultsData, OptimizationResultItem } from "@/lib/data";

function ResultCard({ item, index }: { item: OptimizationResultItem; index: number }) {
  return (
    <RevealOnScroll delay={index * 0.08}>
      <div className="rounded-[2rem] border border-line bg-white p-6 md:p-10">
        <div className="flex flex-wrap justify-center gap-4">
          {item.images.map((image) => (
            <div key={image.src} className="w-[140px] shrink-0 sm:w-[170px]">
              <Image
                src={image.src}
                alt={image.alt ?? item.title}
                width={image.width}
                height={image.height}
                sizes="170px"
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-2xl text-center">
          <p className="text-2xl font-bold tracking-tight text-ink md:text-3xl">{item.title}</p>
          <div className="mt-5 flex flex-col gap-4 text-left">
            {item.points.map((point, i) => (
              <p key={point.label} className="text-sm leading-relaxed text-muted">
                <span className="font-semibold text-ink">
                  {i + 1}. {point.label}：
                </span>
                {point.description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </RevealOnScroll>
  );
}

export function OptimizationResults({ data }: { data: OptimizationResultsData }) {
  return (
    <div className="relative mt-16 md:mt-24">
      {data.eyebrow && (
        <RevealOnScroll className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
            <PulseDot color="#045CC4" size={7} />
            {data.eyebrow}
          </span>
        </RevealOnScroll>
      )}

      {data.title && (
        <RevealOnScroll delay={0.05} className="mt-5 text-center">
          <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{data.title}</h2>
        </RevealOnScroll>
      )}

      <div className="mt-10 flex flex-col gap-6">
        {data.items.map((item, i) => (
          <ResultCard key={item.title} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
