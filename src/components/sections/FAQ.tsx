"use client";

import { useState } from "react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { AccordionPanel, PlusMinusIcon } from "@/components/ui/Accordion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { faqs } from "@/lib/data";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionContainer id="faq" className="py-20 md:py-28">
      <RevealOnScroll className="flex flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Your questions answered.
        </h2>
      </RevealOnScroll>

      <div className="mx-auto mt-12 max-w-2xl divide-y divide-line rounded-2xl border border-line bg-white">
        {faqs.map((faq, i) => {
          const open = openIndex === i;
          return (
            <RevealOnScroll key={faq.question} delay={i * 0.04}>
              <div>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center gap-4 px-6 py-5 text-left"
                >
                  <span className="font-mono text-xs text-muted-2">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-sm font-medium text-ink md:text-base">
                    {faq.question}
                  </span>
                  <PlusMinusIcon open={open} />
                </button>
                <AccordionPanel open={open}>
                  <p className="px-6 pb-5 pl-[3.25rem] text-sm text-muted">{faq.answer}</p>
                </AccordionPanel>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </SectionContainer>
  );
}
