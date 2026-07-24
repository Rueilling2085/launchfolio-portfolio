import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { avatarUrls, testimonials } from "@/lib/data";

function Star() {
  return (
    <svg width="12" height="12" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0l2.59 6.61L20 7.64l-5 4.87 1.18 6.88L10 15.9l-6.18 3.49L5 12.51 0 7.64l7.41-1.03L10 0z" />
    </svg>
  );
}

export function Testimonials() {
  return (
    <SectionContainer className="py-20 md:py-28">
      <RevealOnScroll className="flex flex-col items-center gap-6 text-center">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Hear from what my clients have to say.
        </h2>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-3">
            {avatarUrls.slice(4, 9).map((src, i) => (
              <span
                key={src}
                className="relative h-9 w-9 overflow-hidden rounded-full ring-2 ring-paper"
                style={{ zIndex: 5 - i }}
              >
                <Image src={src} alt="" fill sizes="36px" className="object-cover" />
              </span>
            ))}
          </div>
          <div className="text-left">
            <div className="flex gap-0.5 text-accent-strong">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} />
              ))}
            </div>
            <p className="text-xs text-muted">99+ Happy clients</p>
          </div>
        </div>
      </RevealOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <RevealOnScroll key={t.name} delay={(i % 3) * 0.08}>
            <div className="flex h-full flex-col rounded-2xl border border-line bg-white p-6">
              <span className="mb-3 font-mono text-2xl text-accent-strong">&ldquo;</span>
              <p className="flex-1 text-sm leading-relaxed text-ink-soft">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="relative h-9 w-9 overflow-hidden rounded-full">
                  <Image src={t.avatar} alt="" fill sizes="36px" className="object-cover" />
                </span>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </SectionContainer>
  );
}
