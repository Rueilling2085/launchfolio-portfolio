import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";

export function BookACall() {
  return (
    <SectionContainer id="contact" className="py-16 md:py-20">
      <RevealOnScroll className="flex flex-col items-center gap-6 rounded-3xl bg-white px-6 py-14 text-center md:px-16 md:py-16">
        <span className="relative h-14 w-14 overflow-hidden rounded-full">
          <Image
            src="/images/profile-headshot.jpg"
            alt="Headshot of Joseph Alexander"
            fill
            sizes="56px"
            className="object-cover"
          />
        </span>
        <h2 className="max-w-md text-2xl font-semibold tracking-tight text-ink md:text-4xl">
          Still not sure? Book a free discovery call.
        </h2>
        <p className="max-w-md text-sm text-muted">
          Learn more about how I work and how I can help your business take the
          next step.
        </p>
        <a
          href="mailto:hello@josephalexander.design"
          className="mt-2 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
        >
          Schedule a call
        </a>
      </RevealOnScroll>
    </SectionContainer>
  );
}
