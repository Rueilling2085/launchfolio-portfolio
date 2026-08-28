import Image from "next/image";
import { MapPin } from "lucide-react";
import { ReactNode } from "react";
import { Localized } from "@/lib/i18n/Localized";
import { widestString } from "@/lib/i18n/resolve";

const ACCENT = "#D97757";

type FaceText = string | { zh: string; en: string };

function Face({ label, value }: { label: FaceText; value: FaceText }) {
  return (
    <span className="text-left leading-tight">
      <span className="block text-[11px] whitespace-nowrap text-muted-2">
        {typeof label === "string" ? label : <Localized value={label} />}
      </span>
      <span className="block text-base font-semibold whitespace-nowrap text-ink">
        {typeof value === "string" ? value : <Localized value={value} />}
      </span>
    </span>
  );
}

/**
 * Chip whose text block flips to a second message on hover. The media slot
 * (avatar / map pin) stays put so only the wording turns over.
 */
function FlipChip({
  media,
  mediaSide = "right",
  front,
  back,
}: {
  media: ReactNode;
  mediaSide?: "left" | "right";
  front: { label: FaceText; value: FaceText };
  back: { label: FaceText; value: FaceText };
}) {
  return (
    <div
      className={`group flex items-center gap-3 rounded-2xl bg-white py-2 shadow-sm ${
        mediaSide === "right" ? "pr-2 pl-4" : "pr-4 pl-2"
      }`}
    >
      {mediaSide === "left" && media}

      <span
        className="relative block"
        style={{ perspective: "600px" }}
      >
        {/* invisible spacer keeps the chip from resizing mid-flip — sized off
            whichever wording (in either language) is longest */}
        <span className="invisible block">
          <Face
            label={widestString(front.label).length >= widestString(back.label).length ? front.label : back.label}
            value={
              widestString(front.value).length >= widestString(back.value).length
                ? front.value
                : back.value
            }
          />
        </span>

        <span
          className="absolute inset-0 transition-transform duration-500 ease-out group-hover:[transform:rotateX(180deg)]"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span className="absolute inset-0" style={{ backfaceVisibility: "hidden" }}>
            <Face {...front} />
          </span>
          <span
            className="absolute inset-0"
            style={{ backfaceVisibility: "hidden", transform: "rotateX(180deg)" }}
          >
            <Face {...back} />
          </span>
        </span>
      </span>

      {mediaSide === "right" && media}
    </div>
  );
}

export function HeroMetaChips() {
  return (
    <div className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-[20px] bg-black/[0.04] p-1.5">
      <FlipChip
        mediaSide="right"
        media={
          <span className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#D97757]/40">
            <Image
              src="/images/profile-headshot.jpg"
              alt="Jui-Ling Lin"
              fill
              sizes="40px"
              className="object-cover"
            />
          </span>
        }
        front={{ label: { zh: "嗨，我是", en: "Hey, I am" }, value: { zh: "林瑞苓", en: "Jui Ling" } }}
        back={{ label: { zh: "你也可以叫我", en: "You can also call me" }, value: "Lina" }}
      />

      <FlipChip
        mediaSide="left"
        media={
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D97757]/10">
            <MapPin size={18} color={ACCENT} />
          </span>
        }
        front={{
          label: { zh: "目前居住於", en: "Currently based in" },
          value: { zh: "新北市", en: "New Taipei City" },
        }}
        back={{ label: { zh: "家鄉", en: "Hometown" }, value: { zh: "新竹縣", en: "Hsinchu County" } }}
      />
    </div>
  );
}
