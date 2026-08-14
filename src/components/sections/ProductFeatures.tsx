import Image from "next/image";
import { AudioWaveform, Smile, Smartphone, type LucideIcon } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type { ProductFeatures as ProductFeaturesData, ProductFeatureItem } from "@/lib/data";

const ICONS: Record<ProductFeatureItem["icon"], LucideIcon> = {
  waveform: AudioWaveform,
  emotion: Smile,
  app: Smartphone,
};

function FeatureIcon({ icon }: { icon: ProductFeatureItem["icon"] }) {
  const Icon = ICONS[icon];
  return (
    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5532FA]/15 text-[#B9A6FF]">
      <Icon size={16} />
    </span>
  );
}

function FeatureCard({
  item,
}: {
  item: Pick<ProductFeatureItem, "icon" | "title" | "description">;
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/10 p-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-xl">
      <FeatureIcon icon={item.icon} />
      <div>
        <p className="text-sm font-semibold text-white">{item.title}</p>
        <p className="mt-1 text-xs leading-relaxed text-white/70">{item.description}</p>
      </div>
    </div>
  );
}

export function ProductFeatures({ data }: { data: ProductFeaturesData }) {
  return (
    <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0A0118] px-5 py-16 md:px-14 md:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-2/3 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(85,50,250,0.3),transparent_70%)]" />

      <div className="relative mx-auto max-w-5xl">
        {data.eyebrow && (
          <RevealOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur-sm">
              <PulseDot color="#8B7BFF" size={7} />
              {data.eyebrow}
            </span>
          </RevealOnScroll>
        )}

        <RevealOnScroll
          delay={0.05}
          className="relative mt-10 hidden overflow-hidden rounded-3xl border border-white/10 md:block"
        >
          <div className="pointer-events-none absolute inset-0 scale-110">
            <Image
              src="/images/projects/touchtune/concert-hero.jpg"
              alt=""
              fill
              sizes="(min-width: 768px) 900px, 100vw"
              className="object-cover object-[65%_30%] opacity-60 blur-2xl brightness-125 saturate-125"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-[#0A0118]/35" />

          <div className="relative aspect-[3508/2136] w-full p-8">
            <Image
              src={data.image}
              alt={data.imageAlt ?? ""}
              fill
              sizes="(min-width: 768px) 900px, 100vw"
              className="object-contain"
            />
          </div>

          {data.items.map((item) => (
            <div
              key={item.title}
              className="absolute w-[240px]"
              style={{ top: item.position.top, left: item.position.left }}
            >
              <FeatureCard item={item} />
            </div>
          ))}
        </RevealOnScroll>

        <div className="mt-10 md:hidden">
          <div className="relative aspect-[3508/2136] w-full overflow-hidden rounded-2xl border border-white/10">
            <div className="pointer-events-none absolute inset-0 scale-110">
              <Image
                src="/images/projects/touchtune/concert-hero.jpg"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-[65%_30%] opacity-60 blur-2xl brightness-125 saturate-125"
              />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[#0A0118]/35" />
            <div className="relative h-full w-full p-4">
              <Image
                src={data.image}
                alt={data.imageAlt ?? ""}
                fill
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-4">
            {data.items.map((item) => (
              <FeatureCard key={item.title} item={item} />
            ))}
          </div>
        </div>

        {data.appShowcase && (
          <RevealOnScroll delay={0.15} className="mt-10 md:mt-16">
            <div className="relative aspect-[12288/8730] w-full overflow-hidden rounded-3xl">
              <Image
                src={data.appShowcase.image}
                alt={data.appShowcase.imageAlt ?? ""}
                fill
                sizes="(min-width: 768px) 1024px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 flex justify-center md:mt-8">
              <div className="w-full max-w-sm">
                <FeatureCard
                  item={{
                    icon: "app",
                    title: data.appShowcase.title,
                    description: data.appShowcase.description,
                  }}
                />
              </div>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </div>
  );
}
