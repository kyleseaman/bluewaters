"use client";

import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { Button } from "@/components/ui/button";

type LightboxImage = { src: string; alt: string; width: number; height: number };

export function Lightbox({ images, active, onClose }: { images: LightboxImage[]; active: number; onClose: () => void }) {
  const [index, setIndex] = useState(active);

  useEffect(() => setIndex(active), [active]);

  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, next, prev]);

  const img = images[index];

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Image preview"
      onClick={onClose}
    >
      <div className="w-full max-w-[900px]" onClick={(e) => e.stopPropagation()}>
        <div className="mb-3 flex justify-end gap-2">
          <Button variant="secondary" size="sm" onClick={prev} aria-label="Previous image">Previous</Button>
          <Button variant="secondary" size="sm" onClick={next} aria-label="Next image">Next</Button>
          <Button variant="secondary" size="sm" onClick={onClose} aria-label="Close gallery">Close</Button>
        </div>
        <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="w-full rounded-xl" sizes="(max-width: 900px) 100vw, 900px" />
      </div>
    </div>
  );
}
