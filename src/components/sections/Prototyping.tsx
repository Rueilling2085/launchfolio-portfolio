import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { Prototyping as PrototypingData } from "@/lib/data";

export function Prototyping({ data }: { data: PrototypingData }) {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0A0118] px-5 pb-16 pt-8 md:px-14 md:pb-24 md:pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(85,50,250,0.25),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {data.eyebrow && (
          <RevealOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              <PulseDot color="#8B7BFF" size={7} />
              {data.eyebrow}
            </span>
          </RevealOnScroll>
        )}

        <RevealOnScroll delay={0.05} className="mt-10">
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-8">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-10">
              <div className="grid w-full max-w-sm grid-cols-2 gap-5 sm:max-w-xl sm:gap-8 md:shrink-0">
                {data.items.map((item) => (
                  <div
                    key={item.label}
                    className="relative aspect-[799/2047] w-full overflow-hidden rounded-2xl"
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        maskImage: "linear-gradient(to bottom, black 60%, transparent 96%)",
                        WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 96%)",
                      }}
                    >
                      <Image
                        src={item.src}
                        alt={item.alt ?? item.label}
                        fill
                        sizes="(min-width: 768px) 320px, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <p className="absolute inset-x-0 bottom-4 text-center text-sm font-medium text-white">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {data.description && (
                <p className="text-sm leading-relaxed text-white/70 md:text-base">
                  {data.description}
                </p>
              )}
            </div>
          </div>
        </RevealOnScroll>

        {data.wearingFlow && (
          <RevealOnScroll delay={0.1} className="mt-6">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 md:p-8">
              {data.wearingFlow.title && (
                <h3 className="text-center text-sm font-bold text-white">
                  {data.wearingFlow.title}
                </h3>
              )}
              {data.wearingFlow.description && (
                <p className="mx-auto mt-2 max-w-none text-center text-sm leading-relaxed text-white/70 md:whitespace-nowrap md:text-base">
                  {data.wearingFlow.description}
                </p>
              )}

              {data.wearingFlow.steps.length > 0 && (
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2">
                  {data.wearingFlow.steps.map((step, i) => (
                    <div
                      key={step.number}
                      className={`relative min-h-[220px] overflow-hidden rounded-2xl border border-white/15 ${
                        i === 0 ? "sm:row-span-2 sm:min-h-[460px]" : ""
                      }`}
                    >
                      <Image
                        src={step.image}
                        alt={step.imageAlt ?? step.label}
                        fill
                        sizes="(min-width: 768px) 450px, 100vw"
                        className="object-contain object-bottom"
                      />
                      <div
                        className={`absolute flex flex-col ${
                          i === 0 ? "bottom-6 left-6 items-start" : "right-6 top-6 items-end text-right"
                        }`}
                      >
                        <span className="text-3xl font-normal text-[#B9A6FF]/70">
                          {step.number}
                        </span>
                        <p className="mt-1 text-sm font-medium text-white/80">{step.label}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </RevealOnScroll>
        )}
      </div>
    </div>
  );
}
