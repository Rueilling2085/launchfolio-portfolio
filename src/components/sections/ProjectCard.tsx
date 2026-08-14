"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NOISE_URL, surfaceGlow, surfaceGradient, surfaceNebula } from "@/lib/surface";
import type { Project } from "@/lib/data";

const DEFAULT_COLOR = "#1F2937";

/** Perceived brightness, so light card colours can flip to dark type. */
function isLightColor(hex: string) {
  const value = hex.replace("#", "");
  if (value.length !== 6) return false;
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
}

export function ProjectCard({ project }: { project: Project }) {
  const color = project.color ?? DEFAULT_COLOR;
  const light = isLightColor(color);

  const mockupWidth = project.cardImageWidth ?? 1800;
  const mockupHeight = project.cardImageHeight ?? 1105;
  const wideMockup = mockupWidth / mockupHeight > 1.3;
  // cancels the card's bottom padding so the artwork meets the edge
  const anchorBottom = project.cardImageAnchor === "bottom";

  const tone = {
    client: light ? "text-ink/70" : "text-white/90",
    tag: light ? "bg-black/[0.07] text-ink/75" : "bg-white/15 text-white/90",
    title: light ? "text-ink" : "text-white",
    body: light ? "text-ink/65" : "text-white/70",
    cta: light ? "bg-ink text-white" : "bg-white text-ink",
  };

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {/* white mat + soft shadow, so each poster reads as a mounted print */}
      <div className="rounded-[2.5rem] bg-white p-2 shadow-[0_20px_45px_-20px_rgba(10,13,18,0.3)] md:p-2.5">
        <div
          // only invert the nav over genuinely dark artwork
          {...(light ? {} : { "data-nav-dark": true })}
          className="relative overflow-hidden rounded-[2rem] px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-16"
          style={{
            backgroundImage: project.cardAccent
              ? surfaceNebula(color, project.cardAccent)
              : surfaceGradient(color, light),
          }}
        >
          {!project.cardAccent && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ backgroundImage: surfaceGlow(color) }}
            />
          )}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
            style={{ backgroundImage: `url("${NOISE_URL}")`, backgroundSize: "200px 200px" }}
          />

          <div className="relative z-10 flex flex-col-reverse items-center gap-8 md:flex-row md:items-center md:justify-between md:gap-10">
            <div
              className={`w-full text-center md:text-left ${
                project.cardImage ? "md:max-w-[42%]" : "md:max-w-[46%]"
              }`}
            >
              <p className={`text-sm font-bold tracking-tight ${tone.client}`}>{project.client}</p>

              {project.cardTags && (
                <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
                  {project.cardTags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-[11px] font-medium ${tone.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <h3 className={`mt-5 text-2xl leading-snug font-bold md:text-4xl ${tone.title}`}>
                {project.cardHeadline}
              </h3>

              {project.cardDescription && (
                <p className={`mt-4 text-sm leading-relaxed md:text-base ${tone.body}`}>
                  {project.cardDescription}
                </p>
              )}

              <span
                className={`mt-7 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-300 group-hover:scale-105 ${tone.cta}`}
              >
                查看案例
                <ArrowUpRight size={16} />
              </span>
            </div>

            {project.cardImage ? (
              // transparent mockup: no frame or crop. Wide ones bleed off the
              // card edge; tall ones stay inside and are height-capped so they
              // can't stretch the card.
              <div
                className={`flex w-full shrink-0 justify-center ${
                  wideMockup ? "md:w-[54%] md:-mr-6 lg:-mr-10" : "md:w-[52%]"
                } ${anchorBottom ? "-mb-14 self-end sm:-mb-16 md:-mb-24" : ""}`}
              >
                <Image
                  src={project.cardImage}
                  alt={project.name}
                  width={mockupWidth}
                  height={mockupHeight}
                  sizes="(max-width: 768px) 92vw, 50vw"
                  // width-driven so the aspect box is reserved before load
                  className={`h-auto w-full transition-transform duration-500 ${
                    anchorBottom
                      ? "origin-bottom group-hover:scale-[1.03]"
                      : "group-hover:scale-[1.03]"
                  } ${wideMockup ? "" : "max-w-[340px] md:max-w-none"}`}
                />
              </div>
            ) : (
              <div className="w-full max-w-[360px] shrink-0 md:w-[44%] md:max-w-none">
                <div
                  className="relative aspect-[4/3] w-full -rotate-2 overflow-hidden rounded-2xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.45)] transition-transform duration-500 group-hover:rotate-0"
                  style={{ aspectRatio: project.heroAspect }}
                >
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 90vw, 44vw"
                    className="object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
