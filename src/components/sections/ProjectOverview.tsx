import { Compass, Calendar, Users, Briefcase, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { Project, ProjectOverview as ProjectOverviewData } from "@/lib/data";

function SidebarCard({
  icon: Icon,
  label,
  children,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-white px-5 py-4">
      <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D8EEFD] text-[#0B7DC9]">
        <Icon size={16} />
      </span>
      <p className="text-xs font-medium text-muted-2">{label}</p>
      <div className="mt-1 text-sm leading-relaxed text-ink-soft">{children}</div>
    </div>
  );
}

function ChallengeItem({
  index,
  item,
}: {
  index: number;
  item: ProjectOverviewData["challenges"][number];
}) {
  return (
    <RevealOnScroll delay={index * 0.08} className="mt-8 first:mt-0">
      <p className="text-base font-semibold text-ink">{item.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        <span className="font-medium text-ink-soft">挑戰：</span>
        {item.challenge}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        <span className="font-medium text-ink-soft">行動：</span>
        {item.action}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">
        <span className="font-medium text-ink-soft">成果：</span>
        {item.result}
      </p>
    </RevealOnScroll>
  );
}

export function ProjectOverview({
  project,
  overview,
}: {
  project: Project;
  overview: ProjectOverviewData;
}) {
  return (
    <div className="mt-14 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-[260px_1fr]">
      <RevealOnScroll className="flex flex-col gap-4">
        <SidebarCard icon={Compass} label="產業定位">
          {overview.niche}
        </SidebarCard>
        <SidebarCard icon={Calendar} label="專案時長">
          {project.duration}
        </SidebarCard>
        <SidebarCard icon={Users} label="團隊組成">
          {project.team.map((member) => (
            <span key={member} className="block">
              {member}
            </span>
          ))}
        </SidebarCard>
        <SidebarCard icon={Briefcase} label="我的角色">
          {project.role.map((item) => (
            <span key={item} className="block">
              {item}
            </span>
          ))}
        </SidebarCard>
      </RevealOnScroll>

      <div>
        <RevealOnScroll delay={0.05}>
          <h2 className="text-3xl font-bold tracking-tight text-ink">專案介紹</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
            {overview.projectIntro}
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1} className="mt-10">
          <h2 className="text-3xl font-bold tracking-tight text-ink">
            挑戰與成果
          </h2>
          <div className="mt-4">
            {overview.challenges.map((item, i) => (
              <ChallengeItem key={item.title} index={i} item={item} />
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}
