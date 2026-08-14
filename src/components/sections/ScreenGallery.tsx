import Image from "next/image";
import { Marquee } from "@/components/ui/Marquee";
import type { ScreenGallery as ScreenGalleryData } from "@/lib/data";

export function ScreenGallery({ data }: { data: ScreenGalleryData }) {
  return (
    <div>
      <Marquee
        durationSeconds={70}
        gap={32}
        className="relative left-1/2 w-screen -translate-x-1/2"
      >
        {data.images.map((img) => (
          <div
            key={img.src}
            className="h-[300px] shrink-0 transition-transform duration-300 hover:-translate-y-2 md:h-[380px]"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={img.width}
              height={img.height}
              sizes="(min-width: 768px) 210px, 165px"
              className="h-full w-auto drop-shadow-[0_24px_48px_rgba(85,50,250,0.28)]"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
