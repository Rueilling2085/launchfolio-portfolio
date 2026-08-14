import Image from "next/image";
import { Activity, Home, NotebookPen, Share2, SlidersHorizontal, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import { InformationArchitecture } from "@/components/sections/InformationArchitecture";
import { DeviceConnectionFlow } from "@/components/sections/DeviceConnectionFlow";
import { ScreenGallery } from "@/components/sections/ScreenGallery";
import type {
  FeatureScreen,
  FeatureWidget,
  InterfaceDesign as InterfaceDesignData,
} from "@/lib/data";

const ICONS: Record<FeatureScreen["icon"], LucideIcon> = {
  home: Home,
  activity: Activity,
  journal: NotebookPen,
  personalization: SlidersHorizontal,
};

function WidgetCard({ widget }: { widget: FeatureWidget }) {
  return (
    <Image
      src={widget.image}
      alt={widget.imageAlt ?? ""}
      width={widget.width}
      height={widget.height}
      sizes="(min-width: 768px) 230px, 50vw"
      className="h-auto w-full"
    />
  );
}

function PhoneFrame({ image, imageAlt }: { image: string; imageAlt?: string }) {
  return (
    <div className="relative mx-auto w-full max-w-[210px] rounded-[2rem] border border-white/15 bg-[#0A0118] p-1.5 shadow-[0_40px_80px_-30px_rgba(85,50,250,0.35)] md:max-w-[250px]">
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <Image
          src={image}
          alt={imageAlt ?? ""}
          width={1572}
          height={3408}
          sizes="(min-width: 768px) 250px, 210px"
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}

function ScreenMedia({ screen }: { screen: FeatureScreen }) {
  return screen.bare ? (
    <Image
      src={screen.image}
      alt={screen.imageAlt ?? screen.title}
      width={screen.imageWidth ?? 2000}
      height={screen.imageHeight ?? 1500}
      sizes="(min-width: 768px) 420px, 360px"
      className="h-auto w-full drop-shadow-[0_40px_80px_rgba(85,50,250,0.25)]"
    />
  ) : (
    <PhoneFrame image={screen.image} imageAlt={screen.imageAlt ?? screen.title} />
  );
}

function DescriptionBlock({ screen }: { screen: FeatureScreen }) {
  const Icon = ICONS[screen.icon];
  return (
    <div className="w-full max-w-sm shrink-0 text-center md:w-[260px] md:text-left">
      <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-[#5532FA]/10 text-[#5532FA] md:mx-0">
        <Icon size={18} />
      </span>
      <p className="mt-4 text-lg font-semibold text-ink">{screen.title}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{screen.description}</p>
    </div>
  );
}

function FeatureRow({ screen }: { screen: FeatureScreen }) {
  if (screen.looseWidgets) {
    return (
      <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-16">
        <DescriptionBlock screen={screen} />

        <div className="relative my-16 w-full max-w-[440px] md:my-28 md:w-[600px] md:max-w-none">
          <ScreenMedia screen={screen} />
          {screen.widgets?.map((widget) => (
            <div
              key={widget.image}
              className={`absolute z-10 drop-shadow-[0_20px_40px_rgba(30,17,110,0.25)] ${widget.loosePosition ?? ""}`}
            >
              <WidgetCard widget={widget} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  const descOrder = screen.textOnLeft ? "md:order-1" : "md:order-3";
  const widgetsOrder = screen.textOnLeft ? "md:order-2" : "md:order-1";
  const mediaOrder = screen.textOnLeft ? "md:order-3" : "md:order-2";
  const mediaMaxWidth = screen.bare ? screen.mediaMdWidth ?? screen.mediaWidth ?? 400 : undefined;

  return (
    <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-center md:gap-10">
      <div className={`order-3 ${descOrder}`}>
        <DescriptionBlock screen={screen} />
      </div>

      {screen.widgets && screen.widgets.length > 0 && (
        <div
          className={`order-2 flex w-full max-w-[300px] shrink-0 flex-row gap-3 md:w-[210px] md:flex-col ${widgetsOrder}`}
        >
          {screen.widgets.map((widget) => (
            <div key={widget.image} className="flex-1 md:flex-none">
              <WidgetCard widget={widget} />
            </div>
          ))}
        </div>
      )}

      <div
        className={`order-1 w-full min-w-0 ${mediaOrder} ${screen.bare ? "" : "max-w-[210px] md:max-w-[250px]"}`}
        style={mediaMaxWidth ? { maxWidth: mediaMaxWidth } : undefined}
      >
        <ScreenMedia screen={screen} />
      </div>
    </div>
  );
}

export function InterfaceDesign({ data }: { data: InterfaceDesignData }) {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0A0118] px-5 py-16 md:px-14 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(85,50,250,0.25),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {data.eyebrow && (
          <RevealOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              <PulseDot color="#8B7BFF" size={7} />
              {data.eyebrow}
            </span>
          </RevealOnScroll>
        )}

        <div id="information-architecture" className="scroll-mt-24">
          <RevealOnScroll delay={0.05} className="mt-14 md:mt-20">
            <h3 className="mb-6 text-center text-sm font-medium text-white/50">資訊架構圖</h3>
            <InformationArchitecture legend="紫色標示為下方說明的核心功能與畫面" />
          </RevealOnScroll>
        </div>

        {data.screens && data.screens.length > 0 && (
          <div
            className="relative mt-14 rounded-[2.5rem] p-6 md:mt-20 md:p-16"
            style={{
              backgroundColor: "#FBFAFF",
              backgroundImage:
                "radial-gradient(ellipse 70% 55% at 50% 10%, rgba(122,178,255,0.35), transparent 60%), radial-gradient(ellipse 55% 45% at 10% 90%, rgba(185,166,255,0.35), transparent 60%), radial-gradient(ellipse 55% 45% at 90% 85%, rgba(85,50,250,0.18), transparent 60%)",
            }}
          >
            <div className="relative flex flex-col gap-16 md:gap-24">
              {data.screens.map((screen, i) => (
                <RevealOnScroll key={screen.title} delay={0.05 * i}>
                  <FeatureRow screen={screen} />
                </RevealOnScroll>
              ))}
            </div>
          </div>
        )}

        {data.sceneShowcase && (
          <RevealOnScroll delay={0.05} className="mt-14 md:mt-20">
            <div className="relative">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-[#120A2E]">
                  <Image
                    src={data.sceneShowcase.appInHand.image}
                    alt={data.sceneShowcase.appInHand.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 768px) 1000px, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10">
                  <Image
                    src={data.sceneShowcase.concertPhoto.image}
                    alt={data.sceneShowcase.concertPhoto.imageAlt ?? ""}
                    fill
                    sizes="(min-width: 768px) 480px, 100vw"
                    className="object-cover object-[65%_50%] [filter:hue-rotate(18deg)_saturate(1.2)]"
                  />
                </div>
              </div>

              <div
                aria-label="情感互動分享"
                className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block"
              >
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="h-full w-full animate-[breathe-glow_3.5s_ease-in-out_infinite] rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(85,50,250,0.55) 0%, rgba(85,50,250,0.25) 45%, rgba(85,50,250,0) 72%)",
                    }}
                  />
                </div>
                <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-white/20" />
                <div className="absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2">
                  <div className="flex h-full w-full animate-[breathe_3.5s_ease-in-out_infinite] items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-md">
                    <Share2 size={22} className="text-white" />
                  </div>
                </div>
              </div>
            </div>

            {data.sceneShowcase.caption && (
              <p className="mx-auto mt-6 max-w-md text-center text-sm leading-relaxed text-white/70 md:mt-8 md:text-base">
                {data.sceneShowcase.caption}
              </p>
            )}

            <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-3xl border border-white/10 md:mt-14">
              <Image
                src={data.sceneShowcase.hero.image}
                alt={data.sceneShowcase.hero.imageAlt ?? ""}
                fill
                sizes="(min-width: 768px) 1024px, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-[16%] items-center justify-center bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 backdrop-blur-md">
                <p className="text-center text-lg font-medium text-white md:text-2xl">
                  {data.sceneShowcase.hero.slogan}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {data.deviceConnection && (
          <RevealOnScroll delay={0.05} className="mt-14 md:mt-20">
            {data.deviceConnection.title && (
              <h3
                id="device-connection"
                className="mb-6 scroll-mt-24 text-center text-sm font-medium text-white/50"
              >
                {data.deviceConnection.title}
              </h3>
            )}
            <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2 md:gap-8">
              <div className="relative aspect-[4/5] w-full self-start overflow-hidden rounded-3xl border border-white/10 bg-[#120A2E]">
                <Image
                  src={data.deviceConnection.render.image}
                  alt={data.deviceConnection.render.imageAlt ?? ""}
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  className="object-cover"
                />
              </div>
              <DeviceConnectionFlow />
            </div>
          </RevealOnScroll>
        )}

        {data.screenGallery && (
          <RevealOnScroll delay={0.05} className="mt-16 md:mt-24">
            <ScreenGallery data={data.screenGallery} />
          </RevealOnScroll>
        )}
      </div>
    </div>
  );
}
