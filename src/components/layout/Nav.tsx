"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { navLinks } from "@/lib/data";
import { PulseDot } from "@/components/ui/PulseBadge";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="fixed top-4 left-1/2 z-50 w-[calc(100%-2rem)] max-w-[860px] -translate-x-1/2">
        <nav className="flex items-center justify-between gap-2 rounded-[32px] border border-line/70 bg-white/50 px-3 py-2 backdrop-blur-md">
          <Link href="#hero" className="flex items-center gap-2 pl-1">
            <span className="relative h-9 w-9 overflow-hidden rounded-full">
              <Image
                src="/images/profile-headshot.jpg"
                alt="Headshot of Joseph Alexander"
                fill
                sizes="36px"
                className="object-cover"
              />
            </span>
            <span className="hidden text-sm font-medium text-ink sm:inline">
              Joseph Alexander
            </span>
          </Link>

          <ul className="hidden items-center gap-6 text-sm text-ink-soft md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 rounded-full border border-line/70 bg-white/70 px-3 py-1.5 text-xs text-ink-soft sm:flex">
              <PulseDot size={7} />
              Available for Aug&apos;25
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-full bg-ink md:hidden"
            >
              <motion.span
                animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 5.5 : 0 }}
                className="h-[1.5px] w-4 bg-white"
              />
              <motion.span
                animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -5.5 : 0 }}
                className="h-[1.5px] w-4 bg-white"
              />
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-ink text-white md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="text-3xl font-medium"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
