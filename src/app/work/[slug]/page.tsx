import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { LaptopMockup } from "@/components/ui/LaptopMockup";
import { ProjectBackground } from "@/components/sections/ProjectBackground";
import { ProjectOverview } from "@/components/sections/ProjectOverview";
import { ProjectSummary } from "@/components/sections/ProjectSummary";
import { PriorityMatrix } from "@/components/sections/PriorityMatrix";
import { ProcessFlowChart } from "@/components/sections/ProcessFlowChart";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DesignHighlight } from "@/components/sections/DesignHighlight";
import { DesignIteration } from "@/components/sections/DesignIteration";
import { CompetitorAnalysis } from "@/components/sections/CompetitorAnalysis";
import { NextStepDecision } from "@/components/ui/NextStepDecision";
import { projects } from "@/lib/data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectCaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main className="flex flex-1 flex-col">
        <SectionContainer className="pt-36 md:pt-44">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
          >
            <span aria-hidden="true">←</span> Back to projects
          </Link>

          <div className="mt-10 flex flex-col items-center text-center">
            <h1 className="text-3xl font-semibold tracking-tight text-ink md:whitespace-nowrap md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 text-sm text-muted md:whitespace-nowrap md:text-base">
              {project.description}
            </p>
          </div>
        </SectionContainer>

        {project.deviceMockup ? (
          <div className="mt-14 bg-paper-alt px-6 py-10 md:mt-16 md:py-14">
            <LaptopMockup src={project.image} alt={project.name} />
          </div>
        ) : (
          <div className="relative mt-14 aspect-[21/9] w-full md:mt-16">
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        )}

        <SectionContainer className="pb-16 md:pb-24">
          {project.overview ? (
            <ProjectOverview project={project} overview={project.overview} />
          ) : (
            <>
              <div className="mx-auto mt-14 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16">
                <div className="rounded-2xl border border-line bg-white px-5 py-4">
                  <p className="text-xs font-medium text-muted-2">Duration</p>
                  <p className="mt-1 text-sm text-ink-soft">{project.duration}</p>
                </div>
                <div className="rounded-2xl border border-line bg-white px-5 py-4">
                  <p className="text-xs font-medium text-muted-2">Team</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-ink-soft">
                    {project.team.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-line bg-white px-5 py-4">
                  <p className="text-xs font-medium text-muted-2">Role</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-ink-soft">
                    {project.role.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {project.background && <ProjectBackground items={project.background} />}
            </>
          )}

          {project.summary && (
            <ProjectSummary
              eyebrow={project.summary.eyebrow}
              title={project.summary.title}
              description={project.summary.description}
            >
              {project.priorityMatrix && <PriorityMatrix data={project.priorityMatrix} />}
              {project.processFlow && (
                <div className="mt-14 md:mt-16">
                  <ProcessFlowChart data={project.processFlow} avatar={project.personaAvatar} />
                </div>
              )}
            </ProjectSummary>
          )}

          {project.howItWorks && (
            <>
              <div className="mt-10 md:mt-14">
                <NextStepDecision>
                  為回應上述使用者需求，與 PM 共同定義本產品的操作流程。
                </NextStepDecision>
              </div>
              <HowItWorks data={project.howItWorks} avatar={project.personaAvatar} />
            </>
          )}

          {project.designHighlight && <DesignHighlight data={project.designHighlight} />}

          {project.designIteration && <DesignIteration data={project.designIteration} />}

          {project.competitorAnalysis && (
            <CompetitorAnalysis data={project.competitorAnalysis} />
          )}
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
