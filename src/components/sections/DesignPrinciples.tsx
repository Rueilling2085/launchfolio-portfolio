"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Shapes, Hand, Cpu, ChevronDown, type LucideIcon } from "lucide-react";
import type { DesignPrinciple } from "@/lib/data";
import type { Localized } from "@/lib/i18n/resolve";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ICONS: Record<DesignPrinciple["icon"], LucideIcon> = {
  structure: Shapes,
  ergonomics: Hand,
  interaction: Cpu,
};

function PrincipleAccordionItem({
  principle,
  isOpen,
  onToggle,
  lang,
}: {
  principle: DesignPrinciple;
  isOpen: boolean;
  onToggle: () => void;
  lang: "zh" | "en";
}) {
  const Icon = ICONS[principle.icon];

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-3 px-5 py-4 text-left"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#5532FA]/15 text-[#B9A6FF]">
          <Icon size={18} />
        </span>
        <span className="flex-1 text-sm font-semibold text-white md:text-base">
          {principle.title[lang]}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="text-white/50"
        >
          <ChevronDown size={18} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-4 px-5 pb-5 pl-[68px]">
              {principle.items.map((item) => (
                <div key={item.label.zh}>
                  <p className="text-sm font-medium text-white/90">{item.label[lang]}</p>
                  <p className="mt-1 text-xs leading-relaxed text-white/60 md:text-sm">
                    {item.description[lang]}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function DesignPrinciples({
  intro,
  principles,
}: {
  intro?: Localized;
  principles: DesignPrinciple[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { lang } = useLanguage();

  return (
    <div className="mt-10">
      {intro && (
        <p className="whitespace-nowrap text-center text-sm leading-relaxed text-white/60 md:text-base">
          {intro[lang]}
        </p>
      )}
      <div className="mt-6 flex flex-col gap-3">
        {principles.map((principle, i) => (
          <PrincipleAccordionItem
            key={principle.title.zh}
            principle={principle}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            lang={lang}
          />
        ))}
      </div>
    </div>
  );
}
