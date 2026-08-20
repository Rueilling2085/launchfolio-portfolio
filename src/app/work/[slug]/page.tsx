import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { LaptopMockup } from "@/components/ui/LaptopMockup";
import { ProjectBackground } from "@/components/sections/ProjectBackground";
import { ProjectOverview } from "@/components/sections/ProjectOverview";
import { ProjectMetaCards } from "@/components/sections/ProjectMetaCards";
import { PresentationEmbed } from "@/components/sections/PresentationEmbed";
import { ResearchBackground } from "@/components/sections/ResearchBackground";
import { ProblemFraming } from "@/components/sections/ProblemFraming";
import { AppIntroVisual } from "@/components/sections/AppIntroVisual";
import { UsabilityTesting } from "@/components/sections/UsabilityTesting";
import { SurveyResearch } from "@/components/sections/SurveyResearch";
import { InterfaceOptimization } from "@/components/sections/InterfaceOptimization";
import { OptimizationResults } from "@/components/sections/OptimizationResults";
import { ProblemSolution } from "@/components/sections/ProblemSolution";
import { ProductFeatures } from "@/components/sections/ProductFeatures";
import { DesignSketches } from "@/components/sections/DesignSketches";
import { Prototyping } from "@/components/sections/Prototyping";
import { InterfaceDesign } from "@/components/sections/InterfaceDesign";
import { ProjectReflection } from "@/components/sections/ProjectReflection";
import { ProjectSummary } from "@/components/sections/ProjectSummary";
import { PriorityMatrix } from "@/components/sections/PriorityMatrix";
import { ProcessFlowChart } from "@/components/sections/ProcessFlowChart";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { DesignHighlight } from "@/components/sections/DesignHighlight";
import { DesignIteration } from "@/components/sections/DesignIteration";
import { CompetitorAnalysis } from "@/components/sections/CompetitorAnalysis";
import { CaseStudySideNav, type SideNavSection } from "@/components/sections/CaseStudySideNav";
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

  const dark = project.theme === "dark";
  const darkBg = "bg-[#0A0118]";
  const dotGrid =
    "bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:22px_22px]";

  const sideNavSections: SideNavSection[] = [
    project.overview ? { id: "overview", label: "專案總覽" } : null,
    project.researchBackground ? { id: "research-background", label: "研究背景" } : null,
    project.problemFraming ? { id: "problem-framing", label: "功能盤點與對齊依據" } : null,
    project.usabilityTesting ? { id: "usability-testing", label: "易用性測試" } : null,
    project.surveyResearch ? { id: "survey-research", label: "問卷調查" } : null,
    project.interfaceOptimization ? { id: "interface-optimization", label: "介面優化" } : null,
    project.optimizationResults ? { id: "optimization-results", label: "介面優化結果" } : null,
    project.problemSolution ? { id: "problem-solution", label: "問題與解決方案" } : null,
    project.designSketches ? { id: "design-sketches", label: "設計草圖" } : null,
    project.prototyping ? { id: "prototyping", label: "原型製作" } : null,
    project.productFeatures ? { id: "product-features", label: "產品功能" } : null,
    project.interfaceDesign
      ? {
          id: "interface-design",
          label: "介面設計",
          children: [
            { id: "information-architecture", label: "資訊架構圖" },
            ...(project.interfaceDesign.deviceConnection?.title
              ? [
                  {
                    id: "device-connection",
                    label: project.interfaceDesign.deviceConnection.title,
                  },
                ]
              : []),
          ],
        }
      : null,
    project.reflection ? { id: "reflection", label: project.reflection.eyebrow ?? "反思與展望" } : null,
    project.summary
      ? { id: "user-research", label: project.summary.eyebrow ?? "使用者研究" }
      : null,
    project.howItWorks ? { id: "how-it-works", label: "定義" } : null,
    project.designHighlight || project.designIteration
      ? { id: "design-iteration", label: "設計迭代" }
      : null,
    project.competitorAnalysis ? { id: "competitor-analysis", label: "競品分析" } : null,
  ].filter((s): s is SideNavSection => s !== null);

  return (
    <>
      <Nav />
      <CaseStudySideNav sections={sideNavSections} dark={dark} />
      <main className="flex flex-1 flex-col">
        <SectionContainer
          className={
            dark
              ? `relative isolate overflow-hidden pb-14 pt-36 md:pt-44 ${darkBg} ${dotGrid}`
              : "pt-36 md:pt-44"
          }
        >
          {dark && (
            <div className="pointer-events-none absolute -top-24 right-[-5%] -z-10 h-96 w-96 rounded-full bg-[#5532FA]/25 blur-[110px]" />
          )}

          <Link
            href="/#work"
            className={`relative inline-flex items-center gap-2 text-sm font-medium transition-colors ${
              dark ? "text-white/60 hover:text-white" : "text-muted hover:text-ink"
            }`}
          >
            <span aria-hidden="true">←</span> Back to projects
          </Link>

          <div className="relative mt-10 flex flex-col items-start text-left">
            <h1
              className={`text-3xl font-semibold tracking-tight md:text-5xl ${
                dark ? "text-white" : "text-ink"
              }`}
            >
              {project.name}
            </h1>
            {project.cardHeadline && (
              <p
                className={`mt-3 text-base font-medium md:text-lg ${
                  dark ? "text-white/80" : "text-ink-soft"
                }`}
              >
                {project.cardHeadline}
              </p>
            )}
            <p
              className={`mt-5 w-full whitespace-pre-line text-sm leading-relaxed md:text-base ${
                dark ? "text-white/60" : "text-muted"
              }`}
            >
              {project.description}
            </p>

            {!project.presentationEmbedUrl && (
              <div className="w-full">
                <ProjectMetaCards project={project} dark={dark} />
              </div>
            )}
          </div>
        </SectionContainer>

        {project.presentationEmbedUrl ? null : project.deviceMockup ? (
          <div className="mt-14 bg-paper-alt px-6 py-10 md:mt-16 md:py-14">
            <LaptopMockup src={project.image} alt={project.name} />
          </div>
        ) : dark ? (
          <div className={`w-full pb-14 ${darkBg}`}>
            <div className="mx-auto w-full max-w-[1080px] px-5 md:px-14">
              <div
                className="relative w-full overflow-hidden rounded-2xl"
                style={{ aspectRatio: project.heroAspect ?? "7/2" }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(min-width: 1080px) 1080px, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="mx-auto mt-14 w-full max-w-[1080px] px-5 md:mt-16 md:px-14">
            <div
              className="relative w-full overflow-hidden rounded-2xl"
              style={{ aspectRatio: project.heroAspect ?? "21/9" }}
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(min-width: 1080px) 1080px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        <SectionContainer
          className={
            dark
              ? `relative isolate overflow-hidden pb-16 pt-16 md:pb-24 ${darkBg} ${dotGrid}`
              : "pb-16 md:pb-24"
          }
        >
          {dark && (
            <>
              <div className="pointer-events-none absolute -left-[10%] top-[8%] -z-10 h-[420px] w-[420px] rounded-full bg-[#5532FA]/20 blur-[120px]" />
              <div className="pointer-events-none absolute -right-[5%] top-[55%] -z-10 h-[380px] w-[380px] rounded-full bg-[#8B7BFF]/15 blur-[120px]" />
            </>
          )}
          <div id="overview" className="scroll-mt-24">
            {project.appIntroVisual && <AppIntroVisual data={project.appIntroVisual} />}
            {project.overview ? (
              <ProjectOverview overview={project.overview} dark={dark} />
            ) : (
              <>
                {!project.presentationEmbedUrl && (
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
                )}

                {project.background && <ProjectBackground items={project.background} />}
                {project.presentationEmbedUrl && (
                  <PresentationEmbed url={project.presentationEmbedUrl} />
                )}
              </>
            )}
          </div>

          {project.researchBackground && (
            <div id="research-background" className="scroll-mt-24">
              <ResearchBackground data={project.researchBackground} dark={dark} />
            </div>
          )}

          {project.problemFraming && (
            <div id="problem-framing" className="scroll-mt-24">
              <ProblemFraming data={project.problemFraming} />
            </div>
          )}

          {project.usabilityTesting && (
            <div id="usability-testing" className="scroll-mt-24">
              <UsabilityTesting data={project.usabilityTesting} expertInterview={project.expertInterview} />
            </div>
          )}

          {project.surveyResearch && (
            <div id="survey-research" className="scroll-mt-24">
              <SurveyResearch data={project.surveyResearch} />
            </div>
          )}

          {project.interfaceOptimization && (
            <div id="interface-optimization" className="scroll-mt-24">
              <InterfaceOptimization data={project.interfaceOptimization} />
            </div>
          )}

          {project.optimizationResults && (
            <div id="optimization-results" className="scroll-mt-24">
              <OptimizationResults data={project.optimizationResults} />
            </div>
          )}

          {project.problemSolution && (
            <div id="problem-solution" className="scroll-mt-24">
              <ProblemSolution data={project.problemSolution} />
            </div>
          )}

          {project.designSketches && (
            <div id="design-sketches" className="scroll-mt-24">
              <DesignSketches data={project.designSketches} />
            </div>
          )}

          {project.prototyping && (
            <div id="prototyping" className="scroll-mt-24">
              <Prototyping data={project.prototyping} />
            </div>
          )}

          {project.productFeatures && (
            <div id="product-features" className="scroll-mt-24">
              <ProductFeatures data={project.productFeatures} />
            </div>
          )}

          {project.interfaceDesign && (
            <div id="interface-design" className="scroll-mt-24">
              <InterfaceDesign data={project.interfaceDesign} />
            </div>
          )}

          {project.reflection && (
            <div id="reflection" className="scroll-mt-24">
              <ProjectReflection data={project.reflection} />
            </div>
          )}

          {project.summary && (
            <div id="user-research" className="scroll-mt-24">
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
            </div>
          )}

          {project.howItWorks && (
            <div id="how-it-works" className="scroll-mt-24">
              <div className="mt-10 md:mt-14">
                <NextStepDecision>
                  為回應上述使用者需求，與 PM 共同定義本產品的操作流程。
                </NextStepDecision>
              </div>
              <HowItWorks data={project.howItWorks} avatar={project.personaAvatar} />
            </div>
          )}

          {(project.designHighlight || project.designIteration) && (
            <div id="design-iteration" className="scroll-mt-24">
              {project.designHighlight && <DesignHighlight data={project.designHighlight} />}
              {project.designIteration && <DesignIteration data={project.designIteration} />}
            </div>
          )}

          {project.competitorAnalysis && (
            <div id="competitor-analysis" className="scroll-mt-24">
              <CompetitorAnalysis data={project.competitorAnalysis} />
            </div>
          )}
        </SectionContainer>
      </main>
      <Footer />
    </>
  );
}
