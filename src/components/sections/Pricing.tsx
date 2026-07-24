import Image from "next/image";
import { Check, Zap } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { Marquee } from "@/components/ui/Marquee";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { PulseDot } from "@/components/ui/PulseBadge";

const subscriptionBenefits = [
  "No contracts or commitments",
  "Pause or cancel anytime",
  "Multiple brands",
  "Unlimited requests",
  "Avg. 48 hour turnaround",
  "Framer development",
];

const projectBenefits = [
  "Clearly defined scope",
  "Fixed timeline",
  "One-time payment",
  "Direct collaboration",
];

const clientLogos = ["Nimbus", "Solace", "Fieldnote", "Orbit", "Layerhouse", "Vantage"];

export function Pricing() {
  return (
    <SectionContainer id="pricing" className="py-20 md:py-28">
      <RevealOnScroll className="flex flex-col items-center text-center">
        <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink md:text-5xl">
          Simple pricing. Standout designs.
        </h2>
        <p className="mt-4 max-w-md text-sm text-muted md:text-base">
          Select from monthly subscriptions or individual project rates. Clear
          costs, no hidden fees.
        </p>
      </RevealOnScroll>

      <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
        <RevealOnScroll delay={0.05}>
          <div className="relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink px-7 py-8 text-white md:px-10 md:py-10">
            <div className="mb-6 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-xs">
                <PulseDot color="var(--color-accent)" size={7} />
                Slots available
              </span>
              <Zap size={18} className="text-accent" />
            </div>

            <h3 className="text-2xl font-semibold">Unlimited Design</h3>
            <p className="mt-2 text-sm text-white/60">
              One flat monthly rate for unlimited design requests, ideal for
              ongoing design needs.
            </p>

            <div className="my-8 h-px w-full bg-white/10" />

            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-semibold">$8,000</span>
              <span className="text-sm text-white/60">/ month</span>
            </div>

            <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {subscriptionBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-white/80">
                  <Check size={14} className="shrink-0 text-accent" />
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ink transition-transform hover:scale-[1.01]"
            >
              Hire me today
            </a>

            <Image
              src="/images/pricing-graphic.png"
              alt=""
              width={140}
              height={140}
              className="pointer-events-none absolute -right-6 -bottom-6 opacity-20"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.1}>
          <div className="flex h-full flex-col rounded-3xl border border-line bg-white px-7 py-8 md:px-10 md:py-10">
            <h3 className="text-2xl font-semibold text-ink">Single Project</h3>
            <p className="mt-2 text-sm text-muted">
              Comprehensive design services for any project scope — ideal for
              one-off needs or individual tasks.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {projectBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-2 text-sm text-ink-soft">
                  <Check size={14} className="shrink-0 text-accent-strong" />
                  {benefit}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-auto inline-flex w-full items-center justify-center rounded-full border border-ink px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Get a quote
            </a>
          </div>
        </RevealOnScroll>
      </div>

      <RevealOnScroll delay={0.15} className="mt-16">
        <p className="mb-4 text-center text-xs text-muted-2">Trusted by many</p>
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
