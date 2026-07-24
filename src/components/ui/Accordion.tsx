"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";

export function AccordionPanel({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PlusMinusIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 shrink-0 items-center justify-center">
      <span className="absolute h-[1.5px] w-3 bg-current" />
      <motion.span
        className="absolute h-[1.5px] w-3 bg-current"
        animate={{ rotate: open ? 0 : 90, opacity: open ? 0 : 1 }}
        transition={{ duration: 0.25 }}
      />
    </span>
  );
}
