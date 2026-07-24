import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { articles } from "@/lib/data";

export function Articles() {
  const [featured, ...rest] = articles;

  return (
    <SectionContainer id="blog" className="py-20 md:py-28">
      <RevealOnScroll className="flex items-end justify-between gap-4">
        <h2 className="text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          From my blog, design insights.
        </h2>
        <a href="#" className="hidden shrink-0 items-center gap-2 text-sm font-medium text-ink sm:flex">
          View All
          <span className="h-px w-6 bg-ink" />
        </a>
      </RevealOnScroll>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <RevealOnScroll className="lg:row-span-2">
          <a href="#" className="group block h-full overflow-hidden rounded-2xl border border-line bg-white">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="text-xs text-muted-2">{featured.date}</p>
              <h3 className="mt-2 text-lg font-medium text-ink">{featured.title}</h3>
              <p className="mt-2 text-sm text-muted">{featured.description}</p>
            </div>
          </a>
        </RevealOnScroll>

        <div className="flex flex-col gap-5">
          {rest.map((article, i) => (
            <RevealOnScroll key={article.title} delay={(i + 1) * 0.08}>
              <a
                href="#"
                className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-line bg-white p-3"
              >
                <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    sizes="112px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-2">{article.date}</p>
                  <h3 className="mt-1 truncate text-sm font-medium text-ink">
                    {article.title}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-muted">
                    {article.description}
                  </p>
                </div>
              </a>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
