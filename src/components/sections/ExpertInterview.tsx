import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { ExpertInterview as ExpertInterviewData } from "@/lib/data";

const STAGGER_INDENT = ["0%", "14%", "6%", "18%", "2%", "16%", "8%"];

export function ExpertInterview({ data }: { data: ExpertInterviewData }) {
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
            <p className="text-sm leading-relaxed text-muted">{data.intro}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <div className="flex flex-col gap-4">
              {data.quotes.map((quote, i) => (
                <div
                  key={quote}
                  className="w-fit max-w-[92%] rounded-2xl bg-paper-alt px-5 py-4 text-sm leading-relaxed text-ink-soft"
                  style={{ marginLeft: STAGGER_INDENT[i % STAGGER_INDENT.length] }}
                >
                  {quote}
                </div>
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
