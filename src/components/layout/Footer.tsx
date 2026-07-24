"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  LinkedInIcon,
  DribbbleIcon,
  BehanceIcon,
  InstagramIcon,
  XIcon,
} from "@/components/ui/SocialIcons";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { navLinks } from "@/lib/data";

const cycleWords = ["design", "build", "create"];

const socials = [
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "Behance", icon: BehanceIcon },
  { label: "Dribbble", icon: DribbbleIcon },
  { label: "Instagram", icon: InstagramIcon },
  { label: "X", icon: XIcon },
];

export function Footer() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % cycleWords.length);
    }, 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-8 bg-ink text-white">
      <SectionContainer className="py-20 md:py-28">
        <h2 className="text-center text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Let&apos;s{" "}
          <span className="relative inline-flex h-[1.1em] w-[4.5ch] items-baseline justify-center overflow-hidden align-bottom md:w-[4.5ch]">
            <AnimatePresence mode="wait">
              <motion.span
                key={cycleWords[index]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-1/2 -translate-x-1/2 text-accent"
              >
                {cycleWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>{" "}
          <br className="hidden md:block" />
          incredible work together.
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@josephalexander.design"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            hello@josephalexander.design
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.02]"
          >
            Book a call
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-5 text-white/60">
          {socials.map(({ label, icon: Icon }) => (
            <a key={label} href="#" aria-label={label} className="transition-colors hover:text-white">
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} Joseph Alexander. Based in New York.</p>
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <ul className="flex gap-5">
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-white">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </SectionContainer>
    </footer>
  );
}
