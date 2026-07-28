import { ChartLine, Smile, ScanEye, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { ProjectBackgroundItem } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  "chart-line": ChartLine,
  smile: Smile,
  "scan-eye": ScanEye,
};

export function ProjectBackground({ items }: { items: ProjectBackgroundItem[] }) {
  return (
    <div className="mt-16 md:mt-24">
      <RevealOnScroll className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
          <PulseDot color="#006AB7" size={7} />
          Project Background
        </span>
      </RevealOnScroll>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {items.map((item, i) => {
          const Icon = icons[item.icon];
          return (
            <RevealOnScroll key={item.title} delay={i * 0.08}>
              <div className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-white px-6 py-6">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D8EEFD] text-[#0B7DC9]">
                  {Icon ? <Icon size={20} /> : null}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}
