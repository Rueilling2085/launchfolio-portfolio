"use client";

import { useEffect, useRef, useState } from "react";
import { X, ZoomIn, ZoomOut } from "lucide-react";

const MIN_SCALE = 1;
const MAX_SCALE = 4;

/** Full-screen click-to-zoom viewer for a single image, with scroll/pinch to
 *  zoom further and drag to pan once zoomed in. Renders nothing when `src`
 *  is null — mount it once per gallery and just flip `src` on click. */
export function ImageLightbox({ src, alt, onClose }: { src: string | null; alt?: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragRef = useRef<{ startX: number; startY: number; origX: number; origY: number } | null>(null);
  const [dragging, setDragging] = useState(false);

  // reset zoom/pan whenever a new image is opened
  useEffect(() => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, [src]);

  useEffect(() => {
    if (!src) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [src, onClose]);

  if (!src) return null;

  const clampScale = (next: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));

  const zoomBy = (delta: number) => {
    setScale((prev) => {
      const next = clampScale(prev + delta);
      if (next === MIN_SCALE) setPos({ x: 0, y: 0 });
      return next;
    });
  };

  const onWheel: React.WheelEventHandler = (e) => {
    e.preventDefault();
    zoomBy(-e.deltaY * 0.0015);
  };

  const onDoubleClick: React.MouseEventHandler = (e) => {
    e.stopPropagation();
    setScale((prev) => (prev > 1 ? 1 : 2));
    setPos({ x: 0, y: 0 });
  };

  const onPointerDown: React.PointerEventHandler = (e) => {
    if (scale <= 1) return;
    e.stopPropagation();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startY: e.clientY, origX: pos.x, origY: pos.y };
    setDragging(true);
  };

  const onPointerMove: React.PointerEventHandler = (e) => {
    if (!dragRef.current) return;
    const { startX, startY, origX, origY } = dragRef.current;
    setPos({ x: origX + (e.clientX - startX), y: origY + (e.clientY - startY) });
  };

  const endDrag = () => {
    dragRef.current = null;
    setDragging(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black/85 p-6 backdrop-blur-sm md:p-12"
    >
      <div className="absolute right-5 top-5 flex items-center gap-2">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            zoomBy(-0.6);
          }}
          aria-label="Zoom out"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
          disabled={scale <= MIN_SCALE}
        >
          <ZoomOut size={18} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            zoomBy(0.6);
          }}
          aria-label="Zoom in"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 disabled:opacity-30"
          disabled={scale >= MAX_SCALE}
        >
          <ZoomIn size={18} />
        </button>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        >
          <X size={20} />
        </button>
      </div>

      {/* fixed-size box (not just a max-size cap) so the image always scales
          up to fill the viewport regardless of its native pixel resolution —
          object-contain on a sized parent, rather than relying on the img's
          own intrinsic size, which a low-res source would never exceed */}
      <div className="h-[85vh] w-[90vw] md:h-[88vh] md:w-[88vw]" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element -- arbitrary
            zoomed image, not worth Next/Image's fixed-size optimization here */}
        <img
          src={src}
          alt={alt ?? ""}
          onWheel={onWheel}
          onDoubleClick={onDoubleClick}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          draggable={false}
          className={`h-full w-full select-none rounded-xl object-contain shadow-2xl ${
            scale > 1 ? (dragging ? "cursor-grabbing" : "cursor-grab") : "cursor-zoom-in"
          }`}
          style={{
            transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
            transition: dragging ? "none" : "transform 0.15s ease-out",
          }}
        />
      </div>
    </div>
  );
}
