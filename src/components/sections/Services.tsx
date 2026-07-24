import {
  Code2,
  Palette,
  LayoutGrid,
  MonitorSmartphone,
  Clapperboard,
  Box,
  MessagesSquare,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Marquee } from "@/components/ui/Marquee";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { techStack } from "@/lib/data";

const services = [
  { name: "Framer Dev", icon: Code2 },
  { name: "Brand Design", icon: Palette },
  { name: "Web Apps", icon: MonitorSmartphone },
  { name: "Landing Pages", icon: LayoutGrid },
  { name: "Motion Graphics", icon: Clapperboard },
  { name: "3D Design", icon: Box },
  { name: "UI UX Consultation", icon: MessagesSquare },
];

export function Services() {
  return (
    <SectionContainer id="services" className="py-20 md:py-28">
      <RevealOnScroll className="flex flex-col items-center text-center">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Services that supercharge your business.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-10">
        <p className="mb-3 text-center font-mono text-xs uppercase tracking-widest text-muted-2">
          My tech stack
        </p>
        <Marquee durationSeconds={22}>
          {techStack.map((tool) => (
            <span
              key={tool}
              className="group relative flex h-14 w-14 items-center justify-center rounded-2xl border border-line bg-white text-xs font-medium text-ink-soft"
            >
              {tool.slice(0, 2)}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-ink px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">
                {tool}
              </span>
            </span>
          ))}
        </Marquee>
      </RevealOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <RevealOnScroll key={service.name} delay={i * 0.05}>
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-white px-5 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper">
                  <Icon size={18} className="text-ink" />
                </span>
                <span className="text-sm font-medium text-ink">{service.name}</span>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </SectionContainer>
  );
}
