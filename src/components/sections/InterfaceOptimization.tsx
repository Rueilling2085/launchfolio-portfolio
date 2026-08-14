import Image from "next/image";
import { AlertTriangle, Lightbulb } from "lucide-react";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { PulseDot } from "@/components/ui/PulseBadge";
import type {
  InterfaceOptimization as InterfaceOptimizationData,
  InterfaceOptimizationCase,
} from "@/lib/data";

function BoldText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith("**") && part.endsWith("**") ? (
          <strong key={i} className="font-bold text-ink">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <span key={i}>{part}</span>
        ),
      )}
    </>
  );
}

function PointCard({
  icon: Icon,
  text,
  accent,
  accentBg,
}: {
  icon: typeof AlertTriangle;
  text: string;
  accent: string;
  accentBg: string;
}) {
  return (
    <div className="rounded-xl border border-line bg-white p-4">
      <div className="flex items-start gap-3">
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
          style={{ background: accentBg, color: accent }}
        >
          <Icon size={14} />
        </span>
        <p className="text-sm leading-relaxed text-ink-soft">{text}</p>
      </div>
    </div>
  );
}

function BeforeMedia({ item }: { item: InterfaceOptimizationCase }) {
  if (item.beforeVideo) {
    return (
      <video
        src={item.beforeVideo}
        autoPlay
        loop
        muted
        playsInline
        className="h-auto w-full rounded-2xl"
      />
    );
  }
  if (item.beforeImage && item.beforeImageWidth && item.beforeImageHeight) {
    return (
      <Image
        src={item.beforeImage}
        alt={item.beforeImageAlt ?? `${item.title} — Before`}
        width={item.beforeImageWidth}
        height={item.beforeImageHeight}
        sizes="(min-width: 768px) 340px, 90vw"
        className="h-auto w-full"
      />
    );
  }
  return null;
}

function SideBySideBeforeAfter({ item }: { item: InterfaceOptimizationCase }) {
  const hasPainPoints = Boolean(item.painPoints && item.painPoints.length > 0);
  const hasSolutions = Boolean(item.solutions && item.solutions.length > 0);

  return (
    <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
      <div className="flex flex-col items-center text-center">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-2">
          Before
        </span>
        <div className="relative mt-4 w-full max-w-[340px]">
          <BeforeMedia item={item} />
        </div>
        {hasPainPoints && (
          <div className="mt-5 flex w-full flex-col gap-3 text-left">
            <span className="inline-flex w-fit items-center rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-600">
              Pain Points
            </span>
            {item.painPoints!.map((point) => (
              <PointCard key={point} icon={AlertTriangle} text={point} accent="#DC2626" accentBg="#FEE2E2" />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-col items-center text-center">
        <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-2">
          After
        </span>
        {item.afterImage && item.afterImageWidth && item.afterImageHeight && (
          <div className="relative mt-4 w-full max-w-[340px]">
            <Image
              src={item.afterImage}
              alt={item.afterImageAlt ?? `${item.title} — After`}
              width={item.afterImageWidth}
              height={item.afterImageHeight}
              sizes="(min-width: 768px) 340px, 90vw"
              className="h-auto w-full"
            />
          </div>
        )}
        {hasSolutions && (
          <div className="mt-5 flex w-full flex-col gap-3 text-left">
            <span className="inline-flex w-fit items-center rounded-full bg-[#E4EEFF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#045CC4]">
              Solution
            </span>
            {item.solutions!.map((solution) => (
              <PointCard key={solution} icon={Lightbulb} text={solution} accent="#045CC4" accentBg="#E4EEFF" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function OptimizationCase({ item, index }: { item: InterfaceOptimizationCase; index: number }) {
  const hasBeforeMedia = Boolean(item.beforeVideo || item.beforeImage);
  const hasAfterMedia = Boolean(item.afterImage && item.afterImageWidth && item.afterImageHeight);
  const hasPainPoints = Boolean(item.painPoints && item.painPoints.length > 0);
  const hasHmw = Boolean(item.hmw && item.hmw.length > 0);
  const hasSolutions = Boolean(item.solutions && item.solutions.length > 0);

  return (
    <RevealOnScroll delay={index * 0.08}>
      <div id={`opt-${item.number}`} className="scroll-mt-24">
        <div className="flex items-baseline justify-center gap-3 text-center">
          <span className="text-lg font-bold text-[#045CC4]">{item.number}.</span>
          <h3 className="text-xl font-semibold tracking-tight text-ink md:text-2xl">{item.title}</h3>
        </div>

        {item.sideBySide ? (
          <SideBySideBeforeAfter item={item} />
        ) : (
          <>
        {(hasBeforeMedia || hasPainPoints) && (
          <div className="mt-8 grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_1fr] md:gap-12">
            {hasBeforeMedia && (
              <div className="mx-auto w-full max-w-[340px] text-center">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-2">
                  Before
                </span>
                <div className="relative mt-2">
                  <BeforeMedia item={item} />
                </div>
              </div>
            )}

            {hasPainPoints && (
              <div>
                <span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-red-600">
                  Pain Points
                </span>
                <div className="mt-4 flex flex-col gap-3">
                  {item.painPoints!.map((point) => (
                    <PointCard key={point} icon={AlertTriangle} text={point} accent="#DC2626" accentBg="#FEE2E2" />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {hasHmw && (
          <div className="mx-auto mt-12 max-w-2xl text-center">
            <p className="text-base font-semibold text-ink md:text-lg">How Might We?</p>
            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {item.hmw!.map((question) => (
                <div
                  key={question}
                  className="rounded-xl border border-[#0493FB]/25 bg-[#E4EEFF] p-4 text-left"
                >
                  <p className="text-sm leading-relaxed text-ink-soft">
                    <BoldText text={question} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {(hasAfterMedia || hasSolutions) && (
          <div className="mt-12 grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_1.3fr] md:gap-12">
            {hasSolutions && (
              <div className="order-2 md:order-1">
                <span className="inline-flex items-center rounded-full bg-[#E4EEFF] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#045CC4]">
                  Solution
                </span>
                <div className="mt-4 flex flex-col gap-3">
                  {item.solutions!.map((solution) => (
                    <PointCard key={solution} icon={Lightbulb} text={solution} accent="#045CC4" accentBg="#E4EEFF" />
                  ))}
                </div>
              </div>
            )}

            {hasAfterMedia && (
              <div className="order-1 mx-auto w-full max-w-[620px] text-center md:order-2">
                <span className="text-[10px] font-semibold uppercase tracking-wide text-muted-2">
                  After
                </span>
                <div className="relative mt-2">
                  <Image
                    src={item.afterImage!}
                    alt={item.afterImageAlt ?? `${item.title} — After`}
                    width={item.afterImageWidth!}
                    height={item.afterImageHeight!}
                    sizes="(min-width: 768px) 620px, 90vw"
                    className="h-auto w-full"
                  />
                </div>
              </div>
            )}
          </div>
        )}
          </>
        )}
      </div>
    </RevealOnScroll>
  );
}

export function InterfaceOptimization({ data }: { data: InterfaceOptimizationData }) {
  return (
    <div className="mt-16 rounded-[2rem] bg-paper-alt py-16 md:mt-24 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        {data.eyebrow && (
          <RevealOnScroll className="flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-medium text-ink-soft">
              <PulseDot color="#045CC4" size={7} />
              {data.eyebrow}
            </span>
          </RevealOnScroll>
        )}

        {data.title && (
          <RevealOnScroll delay={0.05} className="mt-5 text-center">
            <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{data.title}</h2>
          </RevealOnScroll>
        )}

        <div className="mt-14 flex flex-col gap-24">
          {data.items.map((item, i) => (
            <OptimizationCase key={item.number} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
