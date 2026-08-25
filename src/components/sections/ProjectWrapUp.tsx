"use client";

import {
  Users,
  SlidersHorizontal,
  Expand,
  ClipboardCheck,
  Database,
  Route,
  BarChart3,
  TrendingUp,
  Layers,
  FlaskConical,
  Library,
  RefreshCw,
  Rocket,
  BookOpen,
  Repeat,
  Cpu,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import type { ProjectWrapUp as ProjectWrapUpData } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  users: Users,
  sliders: SlidersHorizontal,
  expand: Expand,
  "clipboard-check": ClipboardCheck,
  database: Database,
  route: Route,
  "bar-chart": BarChart3,
  "trending-up": TrendingUp,
  layers: Layers,
  flask: FlaskConical,
  library: Library,
  refresh: RefreshCw,
  rocket: Rocket,
  book: BookOpen,
  repeat: Repeat,
  cpu: Cpu,
  "message-circle": MessageCircle,
};

function WrapUpColumn({
  label,
  items,
  dark,
  iconAccent,
}: {
  label: string;
  items: ProjectWrapUpData["worked"];
  dark?: boolean;
  iconAccent?: string;
}) {
  const { lang } = useLanguage();
  return (
    <div>
      <RevealOnScroll className="text-center">
        <p className={dark ? "text-sm font-semibold text-white/40" : "text-sm font-semibold text-muted-2"}>{label}</p>
      </RevealOnScroll>
      <div className="mt-4 flex flex-col gap-4">
        {items.map((item, i) => {
          const Icon = ICONS[item.icon];
          return (
            <RevealOnScroll key={item.title.zh} delay={0.05 * i}>
              <div
                className={
                  dark
                    ? "rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl md:p-7"
                    : "rounded-2xl border border-line bg-white p-6 md:p-7"
                }
              >
                <div className="flex items-center gap-3">
                  {Icon && (
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                      style={
                        iconAccent
                          ? { backgroundColor: `${iconAccent}26`, color: iconAccent }
                          : dark
                            ? { backgroundColor: "rgba(85,50,250,0.15)", color: "#B9A6FF" }
                            : { backgroundColor: "#D8EEFD", color: "#0B7DC9" }
                      }
                    >
                      <Icon size={16} />
                    </span>
                  )}
                  <p className={dark ? "text-lg font-bold text-white" : "text-lg font-bold text-ink"}>{item.title[lang]}</p>
                </div>
                <p className={dark ? "mt-3 text-sm leading-relaxed text-white/70" : "mt-3 text-sm leading-relaxed text-muted"}>
                  {item.body[lang]}
                </p>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
}

export function ProjectWrapUp({ data, dark }: { data: ProjectWrapUpData; dark?: boolean }) {
  const { lang } = useLanguage();
  return (
    <div
      className={
        dark
          ? "mt-16 rounded-[2rem] bg-white/[0.03] px-6 py-16 md:mt-24 md:px-12 md:py-20"
          : "mt-16 rounded-[2rem] bg-paper-alt px-6 py-16 md:mt-24 md:px-12 md:py-20"
      }
    >
      {data.eyebrow && (
        <RevealOnScroll className="flex flex-col items-center text-center">
          <span
            className={
              dark
                ? "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm"
                : "inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft"
            }
          >
            <PulseDot color={dark ? "#8B7BFF" : "#0B7DC9"} size={7} />
            {data.eyebrow[lang]}
          </span>
        </RevealOnScroll>
      )}
      <RevealOnScroll delay={0.05} className="text-center">
        <h2 className={dark ? "mt-2 text-2xl font-semibold tracking-tight text-white md:text-3xl" : "mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl"}>
          {data.heading[lang]}
        </h2>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
        <WrapUpColumn label={data.workedLabel[lang]} items={data.worked} dark={dark} iconAccent={data.iconAccent} />
        <WrapUpColumn label={data.nextLabel[lang]} items={data.next} dark={dark} iconAccent={data.iconAccent} />
      </div>
    </div>
  );
}
