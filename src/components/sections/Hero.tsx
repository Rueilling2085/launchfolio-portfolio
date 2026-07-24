import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { Marquee } from "@/components/ui/Marquee";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { avatarUrls } from "@/lib/data";
import { HeroProjectStack } from "@/components/sections/HeroProjectStack";

const clientLogos = [
  "Nimbus",
  "Solace",
  "Fieldnote",
  "Orbit",
  "Layerhouse",
  "Vantage",
];

export function Hero() {
  return (
    <SectionContainer id="hero" className="pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <RevealOnScroll y={12}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
              <PulseDot size={7} />
              Available for August&apos;25
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={0.05}>
            <h1 className="max-w-lg text-[2.75rem] leading-[1.05] font-semibold tracking-tight text-ink sm:text-6xl">
              Design that delivers results.
            </h1>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="mt-6 max-w-md text-base text-muted md:text-lg">
              <span className="text-ink-soft">
                Strategic design that drives growth, not just looks good.
              </span>{" "}
              I create everything your brand needs to attract customers and
              turn them into sales.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.15}>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
            >
              Book a call with me
            </a>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <div className="mt-10 flex items-center gap-3">
              <div className="flex -space-x-3">
                {avatarUrls.slice(0, 5).map((src, i) => (
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
        </div>

        <HeroProjectStack />
      </div>

      <RevealOnScroll delay={0.3} className="mt-16 md:mt-24">
        <Marquee durationSeconds={26}>
          {clientLogos.map((name) => (
            <span
              key={name}
              className="text-xl font-semibold tracking-tight text-muted-2 md:text-2xl"
            >
              {name}
            </span>
          ))}
        </Marquee>
      </RevealOnScroll>
    </SectionContainer>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 0l2.59 6.61L20 7.64l-5 4.87 1.18 6.88L10 15.9l-6.18 3.49L5 12.51 0 7.64l7.41-1.03L10 0z" />
    </svg>
  );
}
