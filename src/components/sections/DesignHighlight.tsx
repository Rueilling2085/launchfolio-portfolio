import { ArrowRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { DesignHighlight as DesignHighlightData } from "@/lib/data";

function BranchCard({
  label,
  title,
  description,
  targetId,
}: {
  label: string;
  title: string;
  description: string;
  targetId: string;
}) {
  return (
    <div className="relative rounded-2xl border border-line bg-white px-5 py-5 text-left">
      <a
        href={`#${targetId}`}
        title="查看詳細內容"
        aria-label="查看詳細內容"
        className="absolute top-4 right-4 flex h-6 w-6 items-center justify-center rounded-full border border-line text-ink-soft transition-colors hover:border-[#0B7DC9]/40 hover:bg-[#D8EEFD]/40 hover:text-[#0B7DC9]"
      >
        <ArrowRight size={12} />
      </a>
      <span className="inline-flex items-center rounded-full bg-ink-soft/10 px-2.5 py-1 text-[10px] font-semibold text-ink-soft">
        {label}
      </span>
      <p className="mt-3 pr-6 text-sm font-semibold text-ink md:text-base">{title}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-muted">{description}</p>
    </div>
  );
}

export function DesignHighlight({ data }: { data: DesignHighlightData }) {
  return (
    <div className="mt-16 md:mt-24">
      <RevealOnScroll className="flex justify-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
          <PulseDot color="#006AB7" size={7} />
          {data.eyebrow}
        </span>
      </RevealOnScroll>

      <RevealOnScroll delay={0.05} className="mt-6">
        <div className="mx-auto w-full max-w-[560px]">
          <div className="mx-auto w-full max-w-[520px] rounded-2xl bg-white px-5 py-5 text-center">
            <span className="inline-flex items-center gap-1 rounded-full bg-[#006AB7] px-2.5 py-1 text-[10px] font-semibold text-white">
              {data.stepLabel}
            </span>
            <p className="mt-3 text-sm font-semibold text-ink">{data.stepTitle}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted">{data.stepDescription}</p>
          </div>

          <div className="relative mx-auto mt-2 max-w-[520px]">
            <svg
              viewBox="0 0 100 28"
              preserveAspectRatio="none"
              className="absolute inset-x-0 top-0 h-7 w-full text-[#C7CBD1]"
            >
              <path
                d="M50,0 V10 M25,10 H75 M25,10 V26 M75,10 V26"
                stroke="currentColor"
                strokeWidth="1"
                fill="none"
                vectorEffect="non-scaling-stroke"
              />
            </svg>

            <div className="grid grid-cols-2 gap-6 pt-7">
              <BranchCard
                label="優化一"
                title={data.branches[0].title}
                description={data.branches[0].description}
                targetId="opt-1"
              />
              <BranchCard
                label="優化二"
                title={data.branches[1].title}
                description={data.branches[1].description}
                targetId="opt-2"
              />
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
