"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { RefreshCw } from "lucide-react";
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
    <div className="mt-16 md:mt-24">
      <RevealOnScroll className="flex flex-col items-center text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
          <PulseDot color="#0B2559" size={7} />
          {data.eyebrow}
        </span>
        <h2 className="mt-6 max-w-2xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          {data.title}
        </h2>
        <p className="mt-4 max-w-xl text-sm text-muted md:text-base">{data.subtitle}</p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-10">
        <div className="flex items-start gap-4 rounded-2xl border border-line bg-[#0B2559]/[0.04] px-6 py-6 md:px-8 md:py-7">
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0B2559]/10">
            {avatar && (
              <Image src={avatar} alt="Persona" fill sizes="36px" className="object-cover" />
            )}
          </span>
          <p className="text-sm italic leading-relaxed text-ink-soft md:text-base">
            &ldquo;{data.query}&rdquo;
          </p>
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
                    ? "border-[#0B2559] shadow-[0_12px_28px_-10px_rgba(11,37,89,0.4)]"
                    : "border-line hover:border-muted-2"
                }`}
              >
                <div className="bg-white px-5 py-5">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold ${
                      isActive ? "bg-[#0B2559] text-white" : "bg-paper-alt text-muted"
                    }`}
                  >
                    {i + 1} <span className="opacity-70">STEP</span>
                  </span>
                  <p className="mt-3 text-sm font-semibold text-ink">{step.title}</p>
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

      <RevealOnScroll delay={0.25} className="mt-6">
        <div className="flex items-center justify-center gap-2 rounded-full border border-line bg-paper-alt px-5 py-3 text-center text-xs text-muted">
          <RefreshCw size={14} className="shrink-0 text-[#0B2559]" />
          {data.feedbackLoop}
        </div>
      </RevealOnScroll>
    </div>
  );
}
