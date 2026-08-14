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

      <SectionContainer id="work" className="bg-paper-alt pt-4 pb-20 md:pt-6 md:pb-28">
        <ScrollFillHeading text="Selected Work" className="text-5xl md:text-7xl" />

        <div className="mt-14 flex flex-col gap-8 md:gap-10">
          {projects.map((project, i) => (
            <RevealOnScroll key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} />
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll className="mt-10 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
          >
            View all projects
            <span className="h-px w-6 bg-ink transition-all duration-300 group-hover:w-10" />
          </a>
        </RevealOnScroll>
      </SectionContainer>

      <div className="relative">
        <DottedBackdrop className="absolute inset-0" />
        <TornDivider className="relative" color="var(--paper-alt)" flip />
      </div>
    </div>
  );
}
