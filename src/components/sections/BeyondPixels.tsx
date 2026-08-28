import Image from "next/image";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { Marquee } from "@/components/ui/Marquee";
import { Localized } from "@/lib/i18n/Localized";
import { beyondPixels } from "@/lib/data";

const ROTATIONS = [-4, 3, -2, 5, -3, 2];

export function BeyondPixels() {
  return (
    <div className="py-16 md:py-24">
      <SectionContainer>
        <RevealOnScroll>
          <h2 className="text-center text-3xl leading-snug font-bold text-ink md:text-5xl">
            Beyond Pixels{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(100deg, #E8916B, #D97757 45%, #A6472C)" }}
            >
              &amp; Screens
            </span>
          </h2>
        </RevealOnScroll>
      </SectionContainer>

      {/* breaks out of SectionContainer's max-width so the strip runs edge to
          edge, independent of how wide the viewport is */}
      <RevealOnScroll delay={0.1} className="relative left-1/2 mt-12 w-screen -translate-x-1/2 md:mt-16">
        {/* duration scales with the photo count (~20px/s) so the scroll speed
            stays constant regardless of how many cards are in the strip */}
        <Marquee durationSeconds={beyondPixels.length * 13} gap={32}>
          {beyondPixels.map((photo, i) => (
            <div
              key={photo.src}
              className="w-[220px] shrink-0 rounded-sm bg-white p-3 pb-6 shadow-[0_12px_30px_-10px_rgba(10,13,18,0.25)]"
              style={{ transform: `rotate(${ROTATIONS[i % ROTATIONS.length]}deg)` }}
            >
              <div className="relative aspect-square w-full overflow-hidden bg-paper-alt">
                <Image src={photo.src} alt={photo.alt} fill sizes="220px" className="object-cover" />
              </div>
              <p className="mt-3 text-center text-sm text-muted">
                <Localized value={photo.caption} />
              </p>
            </div>
          ))}
        </Marquee>
      </RevealOnScroll>
    </div>
  );
}
