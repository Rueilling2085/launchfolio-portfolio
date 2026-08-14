"use client";

import Image from "next/image";
import { useState } from "react";

const ROTATIONS = [3, -6, 4, -3];

export function AboutPhotoStack({ photos }: { photos: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const order = [activeIndex, ...photos.map((_, i) => i).filter((i) => i !== activeIndex)];

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[360px]">
      {order.map((photoIndex, stackPos) => {
        const isActive = stackPos === 0;
        const rotation = ROTATIONS[photoIndex % ROTATIONS.length];

        return (
          <button
            key={photos[photoIndex]}
            type="button"
            onClick={() => setActiveIndex(photoIndex)}
            aria-label={isActive ? undefined : "Bring this photo to front"}
            className={`absolute overflow-hidden rounded-2xl border border-line bg-paper-alt shadow-lg transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isActive
                ? "top-0 right-0 z-40 h-[78%] w-[68%] cursor-default"
                : "cursor-pointer hover:brightness-95"
            }`}
            style={
              isActive
                ? { transform: `rotate(${rotation}deg)` }
                : {
                    zIndex: 30 - stackPos,
                    transform: `rotate(${rotation}deg)`,
                    height: "58%",
                    width: "52%",
                    left: stackPos % 2 === 0 ? "0%" : "8%",
                    bottom: stackPos % 2 === 0 ? "0%" : "10%",
                  }
            }
          >
            <Image
              src={photos[photoIndex]}
              alt=""
              fill
              sizes="360px"
              className="object-cover"
            />
          </button>
        );
      })}
    </div>
  );
}
