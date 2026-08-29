"use client";

import { Compass, Calendar, Users, Briefcase, Award, type LucideIcon } from "lucide-react";
import type { Project } from "@/lib/data";
import type { Localized } from "@/lib/i18n/resolve";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const COPY = {
  niche: { zh: "產業定位", en: "Industry" },
  duration: { zh: "專案時長", en: "Duration" },
  team: { zh: "團隊組成", en: "Team" },
  role: { zh: "我的角色", en: "My Role" },
  awards: { zh: "得獎紀錄", en: "Awards" },
} as const;

const ME_PREFIX = { zh: "我 - ", en: "Me - " } as const;

function TeamMember({ member, dark, lang }: { member: Localized; dark?: boolean; lang: "zh" | "en" }) {
  const text = member[lang];
  const prefix = ME_PREFIX[lang];
  if (text.startsWith(prefix)) {
    return (
      <span className="block">
        <strong className={dark ? "font-semibold text-white/70" : "font-semibold text-ink-soft"}>
          {prefix}
        </strong>
        {text.slice(prefix.length)}
      </span>
    );
  }
  return <span className="block">{text}</span>;
}

function MetaCard({
  icon: Icon,
  label,
  children,
  dark,
}: {
  icon: LucideIcon;
  label: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={
        dark
          ? "rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-xl"
          : "rounded-2xl border border-line bg-white px-5 py-4"
      }
    >
      <span
        className={
          dark
            ? "mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#5532FA]/15 text-[#B9A6FF]"
            : "mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D8EEFD] text-[#0B7DC9]"
        }
      >
        <Icon size={16} />
      </span>
      <p className={dark ? "text-xs font-medium text-white/40" : "text-xs font-medium text-muted-2"}>
        {label}
      </p>
      <div className={dark ? "mt-1 text-sm leading-relaxed text-white/80" : "mt-1 text-sm leading-relaxed text-ink-soft"}>
        {children}
      </div>
    </div>
  );
}

export function ProjectMetaCards({ project, dark }: { project: Project; dark?: boolean }) {
  const { lang } = useLanguage();
  const niche = project.overview?.niche;
  const awards = project.overview?.awards;

  return (
    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {niche && (
        <MetaCard icon={Compass} label={COPY.niche[lang]} dark={dark}>
          {niche[lang]}
        </MetaCard>
      )}
      <MetaCard icon={Calendar} label={COPY.duration[lang]} dark={dark}>
        {project.duration[lang]}
      </MetaCard>
      <MetaCard icon={Users} label={COPY.team[lang]} dark={dark}>
        {project.team.map((member) => (
          <TeamMember key={member.zh} member={member} dark={dark} lang={lang} />
        ))}
      </MetaCard>
      <MetaCard icon={Briefcase} label={COPY.role[lang]} dark={dark}>
        {project.role.map((item) => (
          <span key={item.zh} className="block">
            {item[lang]}
          </span>
        ))}
      </MetaCard>
      {awards && awards.length > 0 && (
        <MetaCard icon={Award} label={COPY.awards[lang]} dark={dark}>
          {awards.map((award) => (
            <span key={award.name} className="block">
              {award.name}
              {lang === "zh" ? "，" : ", "}
              {award.result[lang]}
            </span>
          ))}
        </MetaCard>
      )}
    </div>
  );
}
