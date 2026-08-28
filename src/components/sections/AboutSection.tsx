"use client";

import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TornDivider } from "@/components/ui/TornDivider";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AboutPhotoStack } from "@/components/ui/AboutPhotoStack";
import { aboutContent } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

export function AboutSection() {
  const { lang } = useLanguage();

  return (
    <div>
      <TornDivider color="var(--paper)" backdropColor="var(--ink)" />

      <SectionContainer id="about" className="bg-paper py-20 md:py-28">
        {/* matches What Can I Bring's narrower side padding, so the two
            sections' content areas line up at the same width. */}
        <div className="-mx-5 px-4 md:-mx-14 md:px-6">
          <div className="about-scroll-track grid grid-cols-1 gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
            <div>
              <RevealOnScroll>
                <h2 className="text-3xl font-bold tracking-tight text-ink uppercase md:text-5xl">
                  About
                </h2>
              </RevealOnScroll>

              <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted md:text-lg">
                {aboutContent.bio.map((paragraph, i) => (
                  <RevealOnScroll key={paragraph.zh} delay={0.08 + i * 0.15}>
                    <p className={i === 0 ? "whitespace-pre-line font-semibold text-ink" : "whitespace-pre-line"}>
                      {paragraph[lang]}
                    </p>
                  </RevealOnScroll>
                ))}
              </div>

              <RevealOnScroll delay={0.08 + aboutContent.bio.length * 0.15}>
                <div className="mt-10">
                  <p className="text-base font-bold tracking-wide text-ink uppercase">
                    Education
                  </p>
                  <div className="mt-3 flex flex-col gap-4 border-t border-line">
                    {aboutContent.education.map((entry, i) => (
                      <RevealOnScroll key={entry.title.zh} delay={0.08 + i * 0.15}>
                        <div className="flex flex-col gap-1 border-b border-line pt-4 pb-4 sm:flex-row sm:items-baseline sm:gap-6">
                          <span className="shrink-0 text-sm font-medium text-muted-2 sm:w-32">
                            {entry.dates}
                          </span>
                          <div>
                            <p className="text-base font-semibold text-ink">{entry.title[lang]}</p>
                            <p className="text-sm text-muted">{entry.org[lang]}</p>
                          </div>
                        </div>
                      </RevealOnScroll>
                    ))}
                  </div>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll delay={0.1}>
              <AboutPhotoStack photos={aboutContent.photos} />
            </RevealOnScroll>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
}
