"use client";

import { Search, LayoutDashboard, Bot, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { bringItems } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const ICONS: Record<string, LucideIcon> = {
  search: Search,
  "layout-dashboard": LayoutDashboard,
  bot: Bot,
};

// plain looping CSS keyframes (defined in globals.css) instead of the
// animate-ui package's imperative animate+loop API — that API's
// `controls.start('animate')` promise never resolves in this project's
// React/motion setup, so the icons never actually played.
const LOOP_ANIMATION: Record<string, string> = {
  search: "animate-[icon-wiggle_2.4s_ease-in-out_infinite]",
  "layout-dashboard": "animate-[breathe_2s_ease-in-out_infinite]",
  bot: "animate-[icon-blink_3s_ease-in-out_infinite]",
};

export function WhatCanIBring() {
  const { lang } = useLanguage();

  return (
    <div>
      {/* LatestProjects already renders the torn transition into this section
          (its own trailing divider has backdropColor="var(--ink)"), so this
          section doesn't own a leading divider itself — a second one here
          would stack directly on top of it and leave a flat double-band. */}
      <SectionContainer id="bring" className="bg-ink py-20 text-white md:py-28">
        {/* claws back some of SectionContainer's side padding — just for this
            section, so the three-column row gets more breathing room without
            changing the shared container everywhere else uses. */}
        <div className="-mx-5 px-2 md:-mx-14 md:px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold tracking-tight uppercase md:text-5xl">
              What Can I Bring
            </h2>
          </RevealOnScroll>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3 md:mt-16">
            {bringItems.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <RevealOnScroll key={item.title.zh} delay={i * 0.08}>
                  <div className="flex flex-col gap-4">
                    {/* the site's signature orange, matching the hero — the
                        `accent-strong` token is a leftover green used elsewhere */}
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-[#D97757]">
                      <Icon size={30} className={LOOP_ANIMATION[item.icon]} />
                    </span>

                    <p className="text-base font-bold tracking-wide uppercase md:text-lg">
                      {item.title[lang]}
                    </p>

                    <p className="text-base leading-relaxed text-white/75 md:text-lg">
                      {item.description[lang]}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
