"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TornDivider } from "@/components/ui/TornDivider";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { workExperience } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

// full-width and light-themed, split out from the About column so a résumé
// (scanned entry by entry) isn't competing for attention with the bio prose
// (read as continuous narrative) inside the same narrow column.
export function WorkExperience() {
  const { lang } = useLanguage();

  return (
    <div>
      <TornDivider color="var(--ink)" backdropColor="var(--paper)" />

      <SectionContainer id="work-experience" className="bg-ink py-20 text-white md:py-28">
        {/* matches About/What Can I Bring's narrower side padding, so all
            three sections' content areas line up at the same width. */}
        <div className="-mx-5 px-4 md:-mx-14 md:px-6">
          <RevealOnScroll>
            <h2 className="text-3xl font-bold tracking-tight uppercase md:text-5xl">
              Work Experience
            </h2>
          </RevealOnScroll>

          <div className="mt-12 flex flex-col border-t border-white/10 md:mt-16">
            {workExperience.map((job, i) => (
              <RevealOnScroll key={`${job.company}-${job.dates}`} delay={i * 0.1}>
                <div className="flex flex-col gap-2 border-b border-white/10 py-8 sm:flex-row sm:gap-10">
                  <span className="shrink-0 text-sm font-medium text-white/50 sm:w-40">
                    {job.dates}
                  </span>
                  <div className="max-w-2xl">
                    <p className="text-lg font-semibold text-white md:text-xl">{job.title}</p>
                    <p className="text-base text-white/60">{job.company}</p>
                    <div className="mt-3 flex flex-col gap-2">
                      {job.points.map((point, pi) => (
                        <RevealOnScroll key={point.zh} delay={0.1 + pi * 0.1}>
                          <p className="text-base leading-relaxed text-white/75">{point[lang]}</p>
                        </RevealOnScroll>
                      ))}
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </SectionContainer>

      <TornDivider color="var(--ink)" backdropColor="var(--paper)" flip />
    </div>
  );
}
