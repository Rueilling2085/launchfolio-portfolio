"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { HowItWorks as HowItWorksData } from "@/lib/data";

const STEP_DURATION = 5;

function isVideo(src: string) {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export function HowItWorks({
  data,
  avatar,
}: {
  data: HowItWorksData;
  avatar?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = data.steps[activeIndex];
  const activeIsVideo = Boolean(activeStep.image && isVideo(activeStep.image));
  const activeFitClass = activeStep.fit === "cover" ? "object-cover" : "object-contain";
  const videoProgress = useMotionValue("0%");

  const advance = () => setActiveIndex((i) => (i + 1) % data.steps.length);

  useEffect(() => {
    videoProgress.set("0%");
  }, [activeIndex, videoProgress]);

  return (
    <div className="mt-6 md:mt-8">
      <div className="rounded-2xl border border-line bg-paper-alt px-6 py-14 md:px-10 md:py-16">
      <RevealOnScroll className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
          <PulseDot color="#006AB7" size={7} />
          {data.eyebrow}
        </span>
        {data.title && (
          <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
            {data.title}
          </h2>
        )}
        <p
          className={`max-w-none whitespace-nowrap text-2xl font-semibold tracking-tight text-ink md:text-3xl ${
            data.title ? "mt-4" : "mt-6"
          }`}
        >
          {data.subtitle}
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-10">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border border-line">
          <Image
            src="/images/projects/vision-detect/ehs-persona-scenario.png"
            alt="職環安人員於現場使用 VisionDetect AI 監控儀表板"
            fill
            sizes="(min-width: 768px) 800px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-start gap-3 p-6 md:p-8">
            {avatar && (
              <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full ring-2 ring-white/50">
                <Image src={avatar} alt="Persona" fill sizes="36px" className="object-cover" />
              </span>
            )}
            <p className="text-sm italic leading-relaxed text-white md:text-base">
              &ldquo;{data.query}&rdquo;
            </p>
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.15} className="mt-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch lg:gap-4">
          {data.steps.map((step, i) => {
            const isActive = i === activeIndex;
            const stepIsVideo = Boolean(step.image && isVideo(step.image));
            return (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveIndex(i)}
                className={`flex-1 overflow-hidden rounded-2xl border text-left transition-all ${
                  isActive
                    ? "border-[#006AB7] shadow-[0_12px_28px_-10px_rgba(0,106,183,0.4)]"
                    : "border-line hover:border-muted-2"
                }`}
              >
                <div className="bg-white px-5 py-5">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      isActive ? "bg-[#006AB7] text-white" : "bg-paper-alt text-muted"
                    }`}
                  >
                    {i + 1} <span className="opacity-70">步驟</span>
                  </span>
                  <p className="mt-3 text-sm text-ink">{step.title}</p>
                  <p className="mt-1.5 text-xs leading-relaxed text-muted">
                    {step.description}
                  </p>
                </div>
                {isActive &&
                  (stepIsVideo ? (
                    <motion.div
                      aria-hidden
                      className="h-0 w-full opacity-0"
                      style={{ width: videoProgress }}
                    />
                  ) : (
                    <motion.div
                      key={activeIndex}
                      aria-hidden
                      className="h-0 w-full opacity-0"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: STEP_DURATION, ease: "linear" }}
                      onAnimationComplete={advance}
                    />
                  ))}
              </button>
            );
          })}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-6">
        <div className="overflow-hidden rounded-2xl border border-line bg-paper-alt">
          <div className="relative aspect-[3328/2160] w-full bg-line">
            <AnimatePresence mode="wait">
              {activeStep.image ? (
                activeIsVideo ? (
                  <motion.video
                    key={activeStep.image}
                    src={activeStep.image}
                    autoPlay
                    muted
                    playsInline
                    onEnded={advance}
                    onTimeUpdate={(e) => {
                      const el = e.currentTarget;
                      if (el.duration) {
                        videoProgress.set(`${(el.currentTime / el.duration) * 100}%`);
                      }
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 h-full w-full ${activeFitClass}`}
                  />
                ) : (
                  <motion.img
                    key={activeStep.image}
                    src={activeStep.image}
                    alt={activeStep.title}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className={`absolute inset-0 h-full w-full ${activeFitClass}`}
                  />
                )
              ) : (
                <motion.div
                  key="placeholder"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex items-center justify-center text-sm text-muted-2"
                >
                  Preview coming soon
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </RevealOnScroll>
      </div>
    </div>
  );
}
