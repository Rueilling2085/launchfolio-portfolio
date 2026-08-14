import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import type { ProjectOverview as ProjectOverviewData } from "@/lib/data";

function ChallengeItem({
  index,
  item,
  dark,
}: {
  index: number;
  item: ProjectOverviewData["challenges"][number];
  dark?: boolean;
}) {
  return (
    <RevealOnScroll delay={index * 0.08} className="mt-8 first:mt-0">
      <p className={dark ? "text-base font-semibold text-white" : "text-base font-semibold text-ink"}>
        {item.title}
      </p>
      <p className={dark ? "mt-3 text-sm leading-relaxed text-white/60 md:text-base" : "mt-3 text-sm leading-relaxed text-muted md:text-base"}>
        <span className={dark ? "font-medium text-white/85" : "font-medium text-ink-soft"}>挑戰：</span>
        {item.challenge}
      </p>
      <p className={dark ? "mt-3 text-sm leading-relaxed text-white/60 md:text-base" : "mt-3 text-sm leading-relaxed text-muted md:text-base"}>
        <span className={dark ? "font-medium text-white/85" : "font-medium text-ink-soft"}>行動：</span>
        {item.action}
      </p>
      <p className={dark ? "mt-3 text-sm leading-relaxed text-white/60 md:text-base" : "mt-3 text-sm leading-relaxed text-muted md:text-base"}>
        <span className={dark ? "font-medium text-white/85" : "font-medium text-ink-soft"}>成果：</span>
        {item.result}
      </p>
    </RevealOnScroll>
  );
}

export function ProjectOverview({
  overview,
  dark,
}: {
  overview: ProjectOverviewData;
  dark?: boolean;
}) {
  return (
    <div className="relative mt-14 md:mt-16">
      <RevealOnScroll>
        <h2 className={dark ? "text-3xl font-bold tracking-tight text-white" : "text-3xl font-bold tracking-tight text-ink"}>
          挑戰與成果
        </h2>
        <div className="mt-4">
          {overview.challenges.map((item, i) => (
            <ChallengeItem key={item.title} index={i} item={item} dark={dark} />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}
