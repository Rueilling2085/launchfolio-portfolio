import type { ReactNode } from "react";
import { ChevronDown, Rocket } from "lucide-react";
import { Localized } from "@/lib/i18n/Localized";

function GlowLine() {
  return (
    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#0B7DC9]/70 to-transparent" />
  );
}

export function NextStepDecision({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="mx-auto w-fit max-w-xl px-6 py-5">
        <GlowLine />
        <span className="mx-auto mb-2 mt-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D8EEFD] text-[#0B7DC9]">
          <Rocket size={20} />
        </span>
        <p className="text-[11px] font-semibold text-ink-soft">
          <Localized value={{ zh: "下一步決策", en: "Next Step" }} />
        </p>
        <p className="mt-2.5 text-sm leading-relaxed text-muted md:text-base">{children}</p>
        <div className="mt-5">
          <GlowLine />
        </div>
      </div>

      <div className="mx-auto mt-2.5 flex flex-col items-center">
        <span className="h-4 w-px bg-[#C7CBD1]" />
        <ChevronDown size={14} className="-mt-1 text-[#C7CBD1]" />
      </div>
    </div>
  );
}
