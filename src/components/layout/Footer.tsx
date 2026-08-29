"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { LinkedInIcon, FacebookIcon } from "@/components/ui/SocialIcons";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { TornDivider } from "@/components/ui/TornDivider";
import { navLinks } from "@/lib/data";

const cycleWords = ["build", "create"];

const socials = [
  { label: "LinkedIn", icon: LinkedInIcon, href: "https://www.linkedin.com/in/juiling" },
  { label: "Gmail", icon: Mail, href: "mailto:2018gsb.linrl@gmail.com" },
  { label: "Facebook", icon: FacebookIcon, href: "#" },
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
    <footer id="site-footer" className="mt-8 bg-ink text-white">
      <TornDivider color="var(--ink)" backdropColor="var(--paper)" />

      <SectionContainer className="py-20 md:py-28">
        <h2 className="text-center text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
          Let&apos;s{" "}
          <span className="relative inline-flex h-[1.1em] w-[6ch] overflow-hidden align-bottom">
            <AnimatePresence mode="wait">
              <motion.span
                key={cycleWords[index]}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 flex items-end justify-start bg-clip-text text-transparent"
                style={{ backgroundImage: "linear-gradient(100deg, #E8916B, #D97757 45%, #A6472C)" }}
              >
                {cycleWords[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          something that ships.
        </h2>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="mailto:2018gsb.linrl@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
          >
            2018gsb.linrl@gmail.com
          </a>
          <a
            href="mailto:2018gsb.linrl@gmail.com"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
          >
            Email me
          </a>
        </div>

        <div className="mt-10 flex justify-center gap-3">
          {socials.map(({ label, icon: Icon, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 text-white/70 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-ink"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>

        <div className="mt-20 flex flex-col items-center gap-6 border-t border-white/10 pt-8 text-xs text-white/50 md:flex-row md:justify-between">
          <p>Copyright © 2026 Jui Ling</p>
          <ul className="flex gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </SectionContainer>
    </footer>
  );
}
