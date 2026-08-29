import { SectionContainer } from "@/components/ui/SectionContainer";
import { FitText } from "@/components/ui/FitText";
import { DottedBackdrop } from "@/components/ui/DottedBackdrop";
import { CursorTag } from "@/components/ui/CursorTag";
import { EnterOnLoad } from "@/components/ui/EnterOnLoad";
import { HeroMetaChips } from "@/components/sections/HeroMetaChips";
import { HeroTagline } from "@/components/sections/HeroTagline";
import { Localized } from "@/lib/i18n/Localized";

const SUBTITLE = {
  zh: "擅長把複雜的問題釐清、理解，並將它們轉化為有意義的體驗。",
  en: "Skilled at making sense of complex problems and turning them into meaningful experiences.",
} as const;

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
              <Localized value={SUBTITLE} />
            </p>
          </EnterOnLoad>
        </div>
      </SectionContainer>
    </div>
  );
}
