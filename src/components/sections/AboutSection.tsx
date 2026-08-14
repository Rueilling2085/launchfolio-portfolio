import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { TornDivider } from "@/components/ui/TornDivider";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { AboutPhotoStack } from "@/components/ui/AboutPhotoStack";
import { aboutContent } from "@/lib/data";

export function AboutSection() {
  return (
    <div>
      <TornDivider color="var(--paper)" />

      <SectionContainer id="about" className="bg-paper py-20 md:py-28">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1.2fr_0.8fr] md:gap-16">
          <div>
            <RevealOnScroll>
              <h2 className="text-3xl font-bold tracking-tight text-ink uppercase md:text-5xl">
                About
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.08}>
              <div className="mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted md:text-base">
                {aboutContent.bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={0.16}>
              <div className="mt-10">
                <p className="text-xs font-semibold tracking-wide text-muted-2 uppercase">
                  Education
                </p>
                <div className="mt-3 flex flex-col gap-4 border-t border-line">
                  {aboutContent.education.map((entry) => (
                    <div
                      key={entry.title}
                      className="flex flex-col gap-1 border-b border-line pt-4 pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                    >
                      <span className="shrink-0 text-xs font-medium text-muted-2">
                        {entry.dates}
                      </span>
                      <div className="sm:text-right">
                        <p className="text-sm font-semibold text-ink">{entry.title}</p>
                        <p className="text-xs text-muted">{entry.org}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={0.1}>
            <AboutPhotoStack photos={aboutContent.photos} />
          </RevealOnScroll>
        </div>
      </SectionContainer>
    </div>
  );
}
