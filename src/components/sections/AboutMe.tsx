"use client";

import Image from "next/image";
import { useState } from "react";
import { LinkedInIcon, DribbbleIcon, InstagramIcon } from "@/components/ui/SocialIcons";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PlusMinusIcon } from "@/components/ui/Accordion";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { workHistory } from "@/lib/data";

export function AboutMe() {
  const [expanded, setExpanded] = useState(false);
  const visibleHistory = expanded ? workHistory : workHistory.slice(0, 2);

  return (
    <SectionContainer id="about" className="py-20 md:py-28">
      <RevealOnScroll>
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Designing experiences that solve real problems.
        </h2>
      </RevealOnScroll>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-[320px_1fr]">
        <RevealOnScroll delay={0.1}>
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl bg-paper-alt">
            <Image
              src="/images/profile-portrait.png"
              alt="Portrait of Joseph Alexander"
              fill
              sizes="320px"
              className="object-cover"
            />
          </div>
          <div className="mt-4">
            <p className="text-sm font-medium text-ink">Joseph Alexander</p>
            <p className="text-xs text-muted">Full-stack Designer</p>
            <div className="mt-4 flex gap-3 text-muted">
              <LinkedInIcon size={16} />
              <DribbbleIcon size={16} />
              <InstagramIcon size={16} />
            </div>
          </div>
        </RevealOnScroll>

        <div className="flex flex-col gap-10">
          <RevealOnScroll delay={0.15}>
            <div className="space-y-4 text-sm leading-relaxed text-muted md:text-base">
              <p>
                I fell into design almost by accident — tinkering with layouts
                for fun turned into a career once I realized how much a
                thoughtful interface can change the way a product feels.
              </p>
              <p className="text-ink-soft">
                My focus is on interfaces that earn their keep, not just ones
                that look good in a portfolio — whether that&apos;s a mobile
                app or a marketing site, the goal is always the same: make it
                feel obvious to use.
              </p>
              <p>
                I care a lot about the small details most people skip past,
                and that habit is usually what clients remember most when we
                work together again.
              </p>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div>
              <h3 className="mb-4 text-sm font-medium text-ink">My work history</h3>
              <div className="divide-y divide-line rounded-2xl border border-line bg-white">
                {visibleHistory.map((item) => (
                  <div
                    key={item.company}
                    className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"
                  >
                    <div>
                      <p className="text-sm font-medium text-ink">{item.company}</p>
                      <p className="text-xs text-muted">{item.role}</p>
                    </div>
                    <span className="text-xs text-muted-2">{item.dates}</span>
                  </div>
                ))}
              </div>
              {workHistory.length > 2 && (
                <button
                  type="button"
                  onClick={() => setExpanded((v) => !v)}
                  className="mt-4 flex items-center gap-2 text-xs font-medium text-ink"
                >
                  <PlusMinusIcon open={expanded} />
                  {expanded ? "Show less" : "Show all"}
                </button>
              )}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </SectionContainer>
  );
}
