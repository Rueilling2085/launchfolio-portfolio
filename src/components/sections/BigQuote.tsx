import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { avatarUrls } from "@/lib/data";

export function BigQuote() {
  return (
    <SectionContainer className="py-16 md:py-24">
      <RevealOnScroll className="flex flex-col items-center rounded-3xl bg-white px-6 py-14 text-center md:px-16 md:py-20">
        <p className="max-w-2xl text-xl leading-snug text-ink md:text-3xl">
          &ldquo;Bringing Joseph onto the project felt less like hiring a
          designer and more like adding a partner who genuinely cared about
          the outcome.&rdquo;
        </p>
        <div className="mt-8 flex items-center gap-3">
          <span className="relative h-11 w-11 overflow-hidden rounded-full">
            <Image src={avatarUrls[6]} alt="" fill sizes="44px" className="object-cover" />
          </span>
          <div className="text-left">
            <p className="text-sm font-medium text-ink">Elias Thorne</p>
            <p className="text-xs text-muted">Co-founder of Fieldnote</p>
          </div>
        </div>
      </RevealOnScroll>
    </SectionContainer>
  );
}
