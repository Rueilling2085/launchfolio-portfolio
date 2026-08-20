import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ScrollFillHeading } from "@/components/ui/ScrollFillHeading";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TornDivider } from "@/components/ui/TornDivider";
import { DottedBackdrop } from "@/components/ui/DottedBackdrop";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { projects } from "@/lib/data";

export function LatestProjects() {
  return (
    <div>
      {/* dotted paper keeps running behind the tear, so the torn sheet reads as
          a separate layer lying on top of it */}
      <div className="relative">
        <DottedBackdrop className="absolute inset-0" />
        <TornDivider className="relative" color="var(--paper-alt)" />
      </div>

      <SectionContainer id="work" className="bg-paper-alt pt-4 pb-10 md:pt-6 md:pb-14">
        {/* matches About/What Can I Bring/Work Experience's narrower side
            padding, so all sections' content areas line up at the same width */}
        <div className="-mx-5 px-2 md:-mx-14 md:px-6">
          <ScrollFillHeading text="Selected Work" className="text-5xl md:text-7xl" />

          <div className="mt-14 flex flex-col gap-8 md:gap-10">
            {projects.map((project, i) => (
              <RevealOnScroll key={project.id} delay={i * 0.08}>
                <ProjectCard project={project} />
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </SectionContainer>

      <div className="relative">
        <DottedBackdrop className="absolute inset-0" />
        <TornDivider
          className="relative"
          color="var(--paper-alt)"
          backdropColor="var(--ink)"
          flip
        />
      </div>
    </div>
  );
}
