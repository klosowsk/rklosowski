"use client";

import { useState } from "react";
import ImageLightbox, { type LightboxImage } from "./ImageLightbox";

export type GalleryImage = LightboxImage;

export default function Gallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState<number | null>(null);

  return (
    <div className="gallery-breakout my-8">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {images.map((im, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className="group relative aspect-square cursor-zoom-in overflow-hidden rounded-lg border border-black/10 dark:border-white/10"
            aria-label={`Open image ${i + 1}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={im.src}
              alt={im.alt}
              loading="lazy"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/0 transition group-hover:bg-black/10" />
          </button>
        ))}
      </div>

      <ImageLightbox images={images} index={index} setIndex={setIndex} />
    </div>
  );
}
