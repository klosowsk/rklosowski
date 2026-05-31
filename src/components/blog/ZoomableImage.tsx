"use client";

import { useState } from "react";
import ImageLightbox from "./ImageLightbox";

// A single content image that opens full-screen on click.
export default function ZoomableImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  const [index, setIndex] = useState<number | null>(null);
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onClick={() => setIndex(0)}
        className="cursor-zoom-in"
      />
      <ImageLightbox images={[{ src, alt }]} index={index} setIndex={setIndex} />
    </>
  );
}
