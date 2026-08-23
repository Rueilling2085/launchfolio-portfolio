"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { NOISE_URL, surfaceGlow, surfaceGradient, surfaceNebula } from "@/lib/surface";
import type { Project } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const DEFAULT_COLOR = "#1F2937";
const COPY = { viewCase: { zh: "查看案例", en: "View case study" } } as const;

/** Perceived brightness, so light card colours can flip to dark type. */
function isLightColor(hex: string) {
  const value = hex.replace("#", "");
  if (value.length !== 6) return false;
  const r = parseInt(value.slice(0, 2), 16);
  const g = parseInt(value.slice(2, 4), 16);
  const b = parseInt(value.slice(4, 6), 16);
  return (0.299 * r + 0.587 * g + 0.114 * b) / 255 > 0.62;
}

/**
 * Static mockup by default; on hover-capable devices the demo video only
 * starts on mouseenter and the crossfade waits for the browser's `playing`
 * event (real frames rendering) rather than firing on `mouseenter` itself —
 * that's what keeps the reveal from landing on a stalled/blank frame. On
 * touch devices (no hover) the same crossfade is driven by an
 * IntersectionObserver instead, so the clip just autoplays while in view.
 * Lives at the ProjectCard level (not the media box) because the video
 * bleeds edge-to-edge across the whole panel, past the media box's padding.
 */
function useHoverVideo(hasVideo: boolean) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const hasHoverRef = useRef(true);
  const [videoVisible, setVideoVisible] = useState(false);

  useEffect(() => {
    if (!hasVideo) return;
    hasHoverRef.current = window.matchMedia("(hover: hover)").matches;
    if (hasHoverRef.current) return;

    const video = videoRef.current;
    const panel = panelRef.current;
    if (!video || !panel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
          setVideoVisible(false);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(panel);
    return () => observer.disconnect();
  }, [hasVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlaying = () => setVideoVisible(true);
    video.addEventListener("playing", onPlaying);
    return () => video.removeEventListener("playing", onPlaying);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoVisible) return;
    // pause only once the fade-out finishes, so playback doesn't visibly cut
    const onTransitionEnd = (e: TransitionEvent) => {
      if (e.propertyName === "opacity") video.pause();
    };
    video.addEventListener("transitionend", onTransitionEnd);
    return () => video.removeEventListener("transitionend", onTransitionEnd);
  }, [videoVisible]);

  const handleMouseEnter = () => {
    if (!hasVideo || !hasHoverRef.current) return;
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    if (!hasVideo || !hasHoverRef.current) return;
    setVideoVisible(false);
  };

  return { videoRef, panelRef, videoVisible, handleMouseEnter, handleMouseLeave };
}

export function ProjectCard({ project }: { project: Project }) {
  const { lang } = useLanguage();
  const color = project.color ?? DEFAULT_COLOR;
  const light = isLightColor(color);

  const mockupWidth = project.cardImageWidth ?? 1800;
  const mockupHeight = project.cardImageHeight ?? 1105;
  const wideMockup = mockupWidth / mockupHeight > 1.3;
  // side-by-side row layout: wide (browser/laptop-shaped) mockups fill the
  // media column; tall/narrow ones (phone screenshots) stay capped and
  // centered so they don't blow up to an oversized column.
  const sizeClass = `h-auto w-full ${wideMockup ? "" : "max-w-[280px] mx-auto"}`;

  const hoverMockupWidth = project.cardHoverImageWidth ?? mockupWidth;
  const hoverMockupHeight = project.cardHoverImageHeight ?? mockupHeight;
  const hoverWideMockup = hoverMockupWidth / hoverMockupHeight > 1.3;
  const hoverSizeClass = `h-auto w-full ${hoverWideMockup ? "" : "max-w-[280px] mx-auto"}`;

  const { videoRef, panelRef, videoVisible, handleMouseEnter, handleMouseLeave } = useHoverVideo(
    !!project.cardVideo
  );
  const bleedImage = !!project.cardImageFit;
  const imageFitClass = project.cardImageFit === "contain" ? "object-contain" : "object-cover";

  return (
    <Link href={`/work/${project.slug}`} className="group block">
      {/* one shared frame gives the row its "single object" feel; colour is
          scoped to just the media panel (like a screenshot mounted on a
          coloured backing board), while the copy stays plain and readable. */}
      <div className="overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_20px_45px_-20px_rgba(10,13,18,0.15)]">
        <div className="flex flex-col sm:flex-row sm:items-stretch">
          <div className="flex w-full flex-col justify-center px-6 py-10 sm:w-[36%] sm:px-10 sm:py-12 md:px-14">
            {project.cardTags && (
              <div className="flex flex-wrap items-center gap-2">
                {project.cardTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-paper-alt px-2.5 py-1 text-[11px] font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <h3 className="mt-3 whitespace-pre-line text-2xl leading-snug font-bold text-ink md:text-3xl">
              {project.cardHeadline?.[lang]}
            </h3>

            {project.cardDescription && (
              <p className="mt-4 text-sm leading-relaxed text-muted">{project.cardDescription[lang]}</p>
            )}

            <span
              className={`mt-7 inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform duration-300 group-hover:scale-105 ${
                light ? "text-ink" : "text-white"
              }`}
              style={{ backgroundColor: color }}
            >
              {COPY.viewCase[lang]}
              <ArrowUpRight size={16} />
            </span>
          </div>

          <div
            ref={panelRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            // only invert the nav over genuinely dark artwork
            {...(light ? {} : { "data-nav-dark": true })}
            className="group/media relative flex w-full items-center justify-center overflow-hidden sm:w-[64%]"
          >
            {/* base layer: either a full-bleed poster (own or backdrop
                colour) or the usual branded gradient + floating mockup */}
            {bleedImage ? (
              <>
                {project.cardImageBackdrop && (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    style={{ backgroundColor: project.cardImageBackdrop }}
                  />
                )}
                {project.cardImage && (
                  <div
                    className="absolute inset-3 sm:inset-4"
                    style={{
                      transform:
                        project.cardImageFit === "contain"
                          ? `scale(${project.cardImageScale ?? 1.25}) scaleX(${
                              project.cardImageFlip ? -1 : 1
                            })`
                          : undefined,
                    }}
                  >
                    {/* nested so the hover zoom composes on top of the base
                        scale above instead of being clobbered by it (inline
                        style always wins over a Tailwind class on the same
                        element, so the two scales can't live on one node) */}
                    <div className="relative h-full w-full transition-transform duration-500 ease-out group-hover/media:scale-[1.06]">
                      <Image
                        src={project.cardImage}
                        alt={project.name}
                        fill
                        quality={90}
                        sizes="(max-width: 768px) 92vw, 1000px"
                        className={`z-10 ${imageFitClass} transition-opacity duration-500 ${
                          videoVisible ? "opacity-0" : "opacity-100"
                        } ${project.cardHoverImage ? "group-hover/media:opacity-0" : ""}`}
                      />
                    </div>
                  </div>
                )}
              </>
            ) : (
              <div
                className="absolute inset-0 px-6 py-10 sm:px-8 md:px-12"
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
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  {project.cardImage ? (
                    // transparent mockup: no frame or crop. Wide (browser/laptop-shaped)
                    // ones fill the column; tall/narrow ones stay capped and centered.
                    <Image
                      src={project.cardImage}
                      alt={project.name}
                      width={mockupWidth}
                      height={mockupHeight}
                      sizes="(max-width: 768px) 92vw, 1000px"
                      // width-driven so the aspect box is reserved before load
                      className={`${sizeClass} transition-[opacity,transform] duration-500 group-hover:scale-[1.02] ${
                        videoVisible ? "opacity-0" : "opacity-100"
                      }`}
                    />
                  ) : (
                    <div className="mx-auto w-full max-w-[420px]">
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
            )}

            {project.cardHoverImage && (
              // reveal layer: the usual branded-gradient + floating-mockup
              // treatment, overlaid and cross-faded in on hover (desktop
              // only — no autoplay/touch fallback, since there's no motion
              // here to reveal on scroll).
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 px-6 py-10 opacity-0 transition-opacity duration-500 group-hover/media:opacity-100 sm:px-8 md:px-12"
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
                <div className="relative z-10 flex h-full w-full items-center justify-center">
                  <Image
                    src={project.cardHoverImage}
                    alt={project.name}
                    width={hoverMockupWidth}
                    height={hoverMockupHeight}
                    sizes="(max-width: 768px) 92vw, 1000px"
                    className={`${hoverSizeClass} scale-[1.3]`}
                  />
                </div>
              </div>
            )}

            {project.cardVideo && (
              // matches the video's own backdrop colour, so a letterboxed
              // clip reads as part of the panel instead of a cutout on top of it
              <span
                aria-hidden
                className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${
                  videoVisible ? "opacity-100" : "opacity-0"
                }`}
                style={{ backgroundColor: project.cardVideoBackdrop ?? "#000000" }}
              />
            )}

            {project.cardVideo && (
              // bleeds past the media box's own padding to fill the whole
              // panel edge-to-edge, since `inset-0` here measures against
              // this panel's padding box, not the padded content box above.
              <video
                ref={videoRef}
                src={project.cardVideo}
                muted
                loop
                playsInline
                preload="auto"
                className={`absolute inset-0 z-10 h-full w-full ${
                  project.cardVideoFit === "cover" ? "object-cover" : "object-contain"
                } transition-opacity duration-300 ${
                  videoVisible ? "opacity-100" : "opacity-0"
                }`}
              />
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
