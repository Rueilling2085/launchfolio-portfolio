import Image from "next/image";
import Link from "next/link";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { projects } from "@/lib/data";

export function LatestProjects() {
  return (
    <SectionContainer id="work" className="py-20 md:py-28">
      <RevealOnScroll className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Latest Projects
        </h2>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <RevealOnScroll key={project.id} delay={i * 0.08}>
            <Link
              href={`/work/${project.slug}`}
              className="group block overflow-hidden rounded-2xl border border-line bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute right-4 top-4 translate-y-1 rounded-full bg-white px-4 py-2 text-xs font-medium text-ink opacity-0 shadow-sm transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View Project
                </span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-medium text-ink">{project.name}</p>
                  <p className="text-xs text-muted">{project.type}</p>
                </div>
                <span className="text-xs text-muted-2">{project.client}</span>
              </div>
            </Link>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-10 flex justify-center">
        <a
          href="#"
          className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
        >
          View all projects
          <span className="h-px w-6 bg-ink transition-all duration-300 group-hover:w-10" />
        </a>
      </RevealOnScroll>
    </SectionContainer>
  );
}
