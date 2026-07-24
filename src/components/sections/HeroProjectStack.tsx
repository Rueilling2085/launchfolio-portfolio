"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";

const layout = [
  { rotate: -14, x: -92, y: 10, scale: 0.82, z: 1, dim: true },
  { rotate: -6, x: -34, y: -4, scale: 0.92, z: 2, dim: true },
  { rotate: 4, x: 30, y: 0, scale: 1, z: 3, dim: false },
  { rotate: 13, x: 96, y: 14, scale: 0.82, z: 1, dim: true },
];

export function HeroProjectStack() {
  return (
    <div className="relative mx-auto h-[280px] w-full max-w-[420px] sm:h-[340px] md:mx-0 md:h-[400px]">
      {projects.slice(0, layout.length).map((project, i) => {
        const c = layout[i];
        return (
          <motion.div
            key={project.id}
            className="absolute left-1/2 top-1/2 aspect-[4/3] w-[220px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-black/10 shadow-[0_25px_25px_-3.75px_rgba(0,0,0,0.15),0_0_0_1px_rgba(0,0,0,0.06)] sm:w-[260px] md:w-[280px]"
            style={{ zIndex: c.z }}
            initial={{ opacity: 0, rotate: 0, x: 0, y: 40, scale: 0.9 }}
            animate={{
              opacity: 1,
              rotate: c.rotate,
              x: c.x,
              y: c.y,
              scale: c.scale,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: c.scale * 1.05,
              rotate: 0,
              zIndex: 10,
              transition: { duration: 0.3 },
            }}
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="280px"
              className={`object-cover transition-[filter] duration-300 ${
                c.dim ? "brightness-[0.65]" : ""
              }`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
