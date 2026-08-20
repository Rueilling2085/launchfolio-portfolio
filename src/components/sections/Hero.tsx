import { SectionContainer } from "@/components/ui/SectionContainer";
import { FitText } from "@/components/ui/FitText";
import { DottedBackdrop } from "@/components/ui/DottedBackdrop";
import { CursorTag } from "@/components/ui/CursorTag";
import { EnterOnLoad } from "@/components/ui/EnterOnLoad";
import { HeroMetaChips } from "@/components/sections/HeroMetaChips";
import { HeroTagline } from "@/components/sections/HeroTagline";

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <DottedBackdrop className="absolute inset-0" />
      <CursorTag targetId="hero" />

      <SectionContainer id="hero" className="relative pt-36 pb-10 md:pt-44 md:pb-14">
        <div className="flex flex-col items-center text-center">
          <EnterOnLoad delay={0.15} y={16}>
            <HeroMetaChips />
          </EnterOnLoad>

          <h1 className="mx-auto mt-10 w-full max-w-[840px] font-bold tracking-tight">
            <EnterOnLoad delay={0.3}>
              <FitText>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(100deg, #E8916B, #D97757 45%, #A6472C)",
                  }}
                >
                  Multidisciplinary
                </span>
              </FitText>
            </EnterOnLoad>

            <EnterOnLoad delay={0.42} className="mt-1">
              <FitText className="text-ink">Product Designer</FitText>
            </EnterOnLoad>

            <EnterOnLoad delay={0.54} className="mt-2">
              <FitText>
                <HeroTagline />
              </FitText>
            </EnterOnLoad>
          </h1>

          <EnterOnLoad delay={0.68} y={16}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg">
              Making sense of complex problems and turning them into meaningful experiences.
            </p>
          </EnterOnLoad>
        </div>
      </SectionContainer>
    </div>
  );
}
