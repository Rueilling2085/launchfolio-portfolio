"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { ProjectCard } from "@/components/sections/ProjectCard";
import type { Project } from "@/lib/data";

export function NextProjects({ projects }: { projects: Project[] }) {
  const [index, setIndex] = useState(0);
  if (projects.length === 0) return null;

  const project = projects[index];

  return (
    <div className="mt-20 border-t border-line pt-16 md:mt-28 md:pt-20">
      <RevealOnScroll>
        <h2 className="text-3xl font-bold tracking-tight text-ink uppercase md:text-5xl">
          Next Projects
        </h2>
      </RevealOnScroll>

      <div className="relative mt-8">
        <RevealOnScroll key={project.slug} delay={0.05}>
          <ProjectCard project={project} />
        </RevealOnScroll>

        {projects.length > 1 && (
          <button
            type="button"
            aria-label="Next project"
            onClick={() => setIndex((i) => (i + 1) % projects.length)}
            className="absolute top-1/2 -right-5 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-[#D97757] shadow-[0_14px_34px_-8px_rgba(217,119,87,0.45)] transition-transform duration-300 hover:scale-105 md:-right-6"
          >
            <ChevronRight size={20} strokeWidth={2.5} />
          </button>
        )}
      </div>
    </div>
  );
}
