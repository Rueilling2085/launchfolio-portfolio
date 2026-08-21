"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

const photos = [
  {
    src: "/images/profile-headshot.jpg",
    alt: { zh: "Jui-Ling Lin", en: "Jui-Ling Lin" },
    caption: { zh: "嗨，這是我！", en: "Hi, this is me!" },
  },
  {
    src: "/images/hero/ida-award.jpg",
    alt: { zh: "19th IDA Design Awards", en: "19th IDA Design Awards" },
    caption: { zh: "19th IDA Design Awards", en: "19th IDA Design Awards" },
  },
  {
    src: "/images/hero/presentation.jpg",
    alt: { zh: "研究成果發表", en: "Presenting my research findings" },
    caption: { zh: "成果發表會", en: "Research presentation" },
  },
  {
    src: "/images/hero/presentation-landscape.jpg",
    alt: { zh: "研究發表", en: "Research presentation" },
    caption: { zh: "研究發表", en: "Research presentation" },
  },
];

export function HeroProjectStack() {
  const { lang } = useLanguage();
  const [index, setIndex] = useState(0);
  const photo = photos[index];

  return (
    <div className="relative mx-auto flex w-full max-w-[360px] flex-col items-center md:mx-0 md:items-start">
      <motion.div
        className="relative w-full overflow-hidden rounded-2xl bg-white/40 p-1.5 shadow-[0_20px_30px_-8px_rgba(0,0,0,0.22),0_0_0_1px_rgba(255,255,255,0.35)] backdrop-blur-md"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={photo.src}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -28 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src={photo.src}
                alt={photo.alt[lang]}
                fill
                sizes="360px"
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      <motion.div
        className="mt-4 flex w-full items-center justify-between"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div>
          <AnimatePresence mode="wait">
            <motion.p
              key={photo.caption.zh}
              className="text-sm text-muted-2"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
            >
              {photo.caption[lang]}
            </motion.p>
          </AnimatePresence>
          <div className="mt-2 flex gap-1.5">
            {photos.map((p, i) => (
              <span
                key={p.src}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-4 bg-ink" : "w-1.5 bg-line"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next photo"
          onClick={() => setIndex((i) => (i + 1) % photos.length)}
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-ink text-white transition-transform hover:scale-105 active:scale-95"
        >
          <ChevronRight size={20} />
        </button>
      </motion.div>
    </div>
  );
}
