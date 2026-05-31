"use client";

import { useCallback, useEffect } from "react";
import { createPortal } from "react-dom";

export interface LightboxImage {
  src: string;
  alt: string;
}

// Shared full-screen image viewer used by both single images and galleries.
// Rendered through a portal to <body> so it never ends up nested inside a <p>
// (which would be invalid markup for content images).
export default function ImageLightbox({
  images,
  index,
  setIndex,
}: {
  images: LightboxImage[];
  index: number | null;
  setIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const close = useCallback(() => setIndex(null), [setIndex]);
  const go = useCallback(
    (dir: number) =>
      setIndex((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      ),
    [images.length, setIndex],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (images.length > 1 && e.key === "ArrowRight") go(1);
      if (images.length > 1 && e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, images.length, close, go]);

  if (index === null || typeof document === "undefined") return null;
  const multi = images.length > 1;

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
      onClick={close}
    >
      <button
        className="absolute right-4 top-4 font-mono text-sm text-white/70 hover:text-white"
        onClick={close}
        aria-label="Close"
      >
        ✕ close
      </button>

      {multi && (
        <span className="absolute left-1/2 top-5 -translate-x-1/2 font-mono text-xs text-white/60">
          {index + 1} / {images.length}
        </span>
      )}

      {multi && (
        <button
          className="absolute left-3 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/60 hover:text-white sm:left-6"
          onClick={(e) => {
            e.stopPropagation();
            go(-1);
          }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      <figure
        className="flex max-h-[88vh] max-w-[92vw] flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[index].src}
          alt={images[index].alt}
          className="max-h-[82vh] max-w-[92vw] rounded-lg object-contain"
        />
        {images[index].alt && (
          <figcaption className="mt-3 text-center font-mono text-xs text-white/60">
            {images[index].alt}
          </figcaption>
        )}
      </figure>

      {multi && (
        <button
          className="absolute right-3 top-1/2 -translate-y-1/2 px-3 py-6 text-3xl text-white/60 hover:text-white sm:right-6"
          onClick={(e) => {
            e.stopPropagation();
            go(1);
          }}
          aria-label="Next"
        >
          ›
        </button>
      )}
    </div>,
    document.body,
  );
}
