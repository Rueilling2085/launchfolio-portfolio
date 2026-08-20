"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";

const ROTATIONS = [3, -6, 4, -3];

/**
 * The active photo advances as the reader scrolls past the About section
 * (desktop only — see the sticky note below), rather than autoplaying on a
 * timer: motion stays tied to something the reader is actually doing, and
 * nothing moves if they stop scrolling. Clicking a background photo still
 * brings it forward directly; the next scroll tick will pick up from there.
 */
export function AboutPhotoStack({ photos }: { photos: string[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    const track = wrapper.closest<HTMLElement>(".about-scroll-track");
    if (!track) return;

    let ticking = false;
    const updateFromScroll = () => {
      ticking = false;
      const rect = track.getBoundingClientRect();
      // 0 when the track's top just enters the viewport, 1 when its bottom
      // reaches the top — i.e. progress through reading the column, not
      // progress through the whole page.
      const progress = (0 - rect.top) / Math.max(rect.height - window.innerHeight, 1);
      const clamped = Math.min(1, Math.max(0, progress));
      const index = Math.min(photos.length - 1, Math.floor(clamped * photos.length));
      setActiveIndex(index);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(updateFromScroll);
    };

    updateFromScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [photos.length]);

  const order = [activeIndex, ...photos.map((_, i) => i).filter((i) => i !== activeIndex)];

  return (
    <div ref={wrapperRef} className="md:sticky md:top-28">
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
                  : // a background photo hops above the active one on hover, so
                    // just resting your cursor on it reveals it fully — no click
                    // needed to peek. z-index has to live in the class (not the
                    // inline style below) for :hover to be able to win.
                    "z-[var(--stack-z)] cursor-pointer hover:z-50 hover:brightness-95"
              }`}
              style={
                isActive
                  ? { transform: `rotate(${rotation}deg)` }
                  : ({
                      "--stack-z": 30 - stackPos,
                      transform: `rotate(${rotation}deg)`,
                      height: "58%",
                      width: "52%",
                      // fan each background photo further left/down than the
                      // last, so every one peeks out instead of two landing on
                      // nearly the same spot
                      left: `${(stackPos - 1) * 13}%`,
                      bottom: `${(stackPos - 1) * 11}%`,
                    } as CSSProperties)
              }
            >
              <Image src={photos[photoIndex]} alt="" fill sizes="360px" className="object-cover" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
