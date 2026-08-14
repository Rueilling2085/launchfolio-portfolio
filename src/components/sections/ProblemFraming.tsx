import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { ProblemFraming as ProblemFramingData } from "@/lib/data";

export function ProblemFraming({ data }: { data: ProblemFramingData }) {
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

      <RevealOnScroll delay={0.05} className="mx-auto mt-6 max-w-3xl">
        <p className="text-center text-sm leading-relaxed text-muted md:text-base">
          {data.description}
        </p>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {data.diagrams.map((diagram, i) => (
          <RevealOnScroll key={diagram.title} delay={0.1 + i * 0.08}>
            <div className="overflow-hidden rounded-2xl border border-line bg-white">
              <div className="flex w-full items-center justify-center bg-paper-alt p-4">
                {diagram.image && (
                  <Image
                    src={diagram.image}
                    alt={diagram.imageAlt ?? diagram.title}
                    width={diagram.width ?? 1000}
                    height={diagram.height ?? 1000}
                    sizes="(min-width: 768px) 500px, 100vw"
                    className="h-auto w-full"
                  />
                )}
              </div>
              <p className="border-t border-line px-5 py-3 text-sm font-medium text-ink">
                {diagram.title}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  );
}
