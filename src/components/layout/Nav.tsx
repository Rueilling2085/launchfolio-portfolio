"use client";

import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";
import { useLanguage } from "@/lib/i18n/LanguageProvider";

// lucide dropped brand marks, so the LinkedIn glyph is inlined here
function LinkedinIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.65h.05A4.17 4.17 0 0 1 17.6 8.7c4 0 4.4 2.5 4.4 5.9V21h-4v-5.6c0-1.34-.03-3.06-1.9-3.06-1.9 0-2.2 1.46-2.2 2.96V21h-4V9Z" />
    </svg>
  );
}

const sectionLinks = navLinks.filter((link) => link.href.includes("#"));

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [onDark, setOnDark] = useState(false);
  const [activeHref, setActiveHref] = useState<string | null>(null);
  const [logoSpins, setLogoSpins] = useState(0);
  const { lang, toggle: toggleLang } = useLanguage();
  const spinLogo = () => setLogoSpins((s) => s + 1);

  useEffect(() => {
    // the band the floating nav occupies
    const NAV_TOP = 16;
    const NAV_BOTTOM = 84;

    const update = () => {
      const overlaps = [...document.querySelectorAll("[data-nav-dark]")].some((el) => {
        const { top, bottom } = el.getBoundingClientRect();
        return top < NAV_BOTTOM && bottom > NAV_TOP;
      });
      setOnDark(overlaps);

      // scroll-spy: whichever linked section owns the upper third of the screen
      const marker = window.innerHeight * 0.35;
      let current: string | null = null;
      for (const link of sectionLinks) {
        const section = document.getElementById(link.href.split("#")[1]);
        if (!section) continue;
        const { top, bottom } = section.getBoundingClientRect();
        if (top <= marker && bottom > marker) current = link.href;
      }
      setActiveHref(current);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const iconButton = `flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 hover:scale-105 ${
    onDark ? "bg-white text-ink hover:bg-white/85" : "bg-ink text-white hover:bg-ink/85"
  }`;

  return (
    <>
      <motion.div
        className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-fit -translate-x-1/2"
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <nav
          className={`flex h-[68px] items-center gap-3 rounded-[48px] px-4 backdrop-blur-md transition-colors duration-500 md:gap-8 md:px-6 ${
            onDark ? "bg-ink/85" : "bg-white/90"
          }`}
          style={{ boxShadow: "0 1px 20px rgba(18, 22, 43, 0.08)" }}
        >
          <Link
            href="/#hero"
            className={`flex items-center gap-2 text-xl font-bold tracking-tight transition-colors duration-500 ${
              onDark ? "text-white" : "text-ink"
            }`}
            onMouseEnter={spinLogo}
            onTouchStart={spinLogo}
          >
            <motion.span
              className="inline-flex h-5 w-5 shrink-0"
              animate={{ rotate: logoSpins * 360 }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              <Image src="/images/logo.png" alt="" width={20} height={20} className="h-5 w-5" unoptimized />
            </motion.span>
            Jui Ling
          </Link>

          <ul className="hidden items-center gap-1 text-sm md:flex">
            {sectionLinks.map((link) => {
              const active = activeHref === link.href;
              // hover previews the active treatment, so both states match
              const state = onDark
                ? active
                  ? "bg-white/15 text-white"
                  : "text-white/75 hover:bg-white/15 hover:text-white"
                : active
                  ? "bg-[#FBEEE8] text-[#D97757]"
                  : "text-ink-soft hover:bg-[#FBEEE8] hover:text-[#D97757]";

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`block rounded-full px-4 py-3 transition-colors duration-300 ${state}`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/juiling?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`hidden md:flex ${iconButton}`}
            >
              <LinkedinIcon size={17} />
            </a>
            <a
              href="https://drive.google.com/file/d/1uCh0yC3Sc1q5G_CqmXM9fm_HkHCaT7bY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
              className={`hidden md:flex ${iconButton}`}
            >
              <FileText size={17} />
            </a>
            <button
              type="button"
              aria-label="Toggle language"
              onClick={toggleLang}
              className={`hidden md:flex ${iconButton}`}
            >
              <span className="text-xs font-semibold">{lang === "zh" ? "EN" : "中"}</span>
            </button>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className={`flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl transition-colors duration-500 md:hidden ${
                onDark ? "bg-white" : "bg-ink"
              }`}
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 5.5 : 0 }}
                className={`h-[1.5px] w-4 ${onDark ? "bg-ink" : "bg-white"}`}
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -5.5 : 0 }}
                className={`h-[1.5px] w-4 ${onDark ? "bg-ink" : "bg-white"}`}
              />
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink text-white md:hidden"
          >
            {navLinks.map((link, i) => {
              const external = link.href.startsWith("http") || link.href.startsWith("/files/");
              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="text-3xl font-medium"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {link.label}
                </motion.a>
              );
            })}
            <motion.button
              type="button"
              onClick={() => {
                toggleLang();
                setMobileOpen(false);
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.05 }}
              className="text-3xl font-medium"
            >
              {lang === "zh" ? "English" : "中文"}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
