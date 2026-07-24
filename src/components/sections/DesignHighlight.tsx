import { Sparkles } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { DesignHighlight as DesignHighlightData } from "@/lib/data";

export function DesignHighlight({ data }: { data: DesignHighlightData }) {
  return (
    <div className="mt-16 md:mt-24">
      <RevealOnScroll>
        <div className="rounded-3xl bg-gradient-to-br from-[#0A1230] via-[#0B2559] to-[#0A1230] px-8 py-10 text-center md:px-16 md:py-12">
          <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
            <Sparkles size={22} />
          </span>
          <h3 className="mx-auto max-w-2xl whitespace-pre-line text-xl font-semibold leading-snug text-white md:text-2xl">
            {data.heading}
          </h3>
          {data.subtitle && (
            <p className="mx-auto mt-3 max-w-xl text-sm text-white/60">{data.subtitle}</p>
          )}
        </div>
      </RevealOnScroll>
    </div>
  );
}
