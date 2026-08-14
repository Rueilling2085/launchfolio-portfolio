import { Search, Layers, Cpu, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TornDivider } from "@/components/ui/TornDivider";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { bringItems } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  search: Search,
  layers: Layers,
  cpu: Cpu,
};

export function WhatCanIBring() {
  return (
    <div>
      <TornDivider color="var(--ink)" />

      <SectionContainer id="bring" className="bg-ink py-20 text-white md:py-28">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold tracking-tight uppercase md:text-5xl">
            What Can I Bring
          </h2>
        </RevealOnScroll>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-16">
          {bringItems.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <RevealOnScroll key={item.title} delay={i * 0.08}>
                <div className="flex flex-col gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-accent-strong">
                    <Icon size={20} />
                  </span>
                  <p className="text-sm font-bold tracking-wide uppercase">{item.title}</p>
                  <p className="text-sm leading-relaxed text-white/65">{item.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </SectionContainer>
    </div>
  );
}
