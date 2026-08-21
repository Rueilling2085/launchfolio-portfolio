"use client";

import { UserRound, ListChecks, Target, TriangleAlert, Lightbulb, type LucideIcon } from "lucide-react";
import type { SurveyMotivation, SurveyMotivationGroup } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const GROUP_ICONS: Record<NonNullable<SurveyMotivationGroup["icon"]>, LucideIcon> = {
  profile: UserRound,
  needs: ListChecks,
  positioning: Target,
};

function GroupCard({ group }: { group: SurveyMotivationGroup }) {
  const { lang } = useLanguage();
  const Icon = group.icon ? GROUP_ICONS[group.icon] : null;

  return (
    <div className="rounded-2xl border border-line bg-white p-5 shadow-sm">
      {Icon && (
        <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#E4EEFF] text-[#045CC4]">
          <Icon size={18} />
        </span>
      )}
      <p className="text-sm font-semibold text-ink">{group.label[lang]}</p>
      {group.children && group.children.length > 0 && (
        <div className="mt-3 flex flex-col gap-2">
          {group.children.map((child) => (
            <span
              key={child.zh}
              className="rounded-lg bg-paper-alt px-3 py-2 text-xs leading-relaxed text-ink-soft"
            >
              {child[lang]}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function SurveyMotivationDiagram({ data }: { data: SurveyMotivation }) {
  const { lang } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-line bg-white p-6 md:p-12">
      <div className="relative grid grid-cols-1 items-center gap-10 md:grid-cols-[290px_1fr] md:gap-16">
        <div className="relative rounded-2xl p-5">
          <p className="flex items-center gap-2 text-sm font-semibold text-ink">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDECEA] text-[#D14343]">
              <TriangleAlert size={18} />
            </span>
            {data.problemLabel}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted">{data.problemText[lang]}</p>

          {data.goalLabel && data.goalText && (
            <>
              <span className="my-4 block h-px w-full bg-line" />
              <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E4EEFF] text-[#045CC4]">
                  <Lightbulb size={18} />
                </span>
                {data.goalLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{data.goalText[lang]}</p>
            </>
          )}
        </div>

        <div>
          {data.groupsTitle && (
            <p className="mb-4 text-sm font-semibold text-ink">{data.groupsTitle[lang]}</p>
          )}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {data.groups.map((group) => (
              <GroupCard key={group.label.zh} group={group} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
