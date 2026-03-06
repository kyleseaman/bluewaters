"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { poolImages } from "@/content/gallery";
import { Button } from "@/components/ui/button";

export function Pool() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? 0 : (current + 1) % poolImages.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? 0 : (current - 1 + poolImages.length) % poolImages.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const next = () => setActive((current) => (current === null ? 0 : (current + 1) % poolImages.length));
  const prev = () => setActive((current) => (current === null ? 0 : (current - 1 + poolImages.length) % poolImages.length));

  return (
    <section id="pool" className="py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Pool & hot tub
        </h2>
        <p className="mb-6 max-w-[65ch] text-lg text-muted-foreground">
          Relax in the heated outdoor pool or unwind in the hot tub after a day at the beach.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {poolImages.map((img, i) => (
            <button
              type="button"
              key={img.src}
              className="cursor-pointer overflow-hidden rounded-lg border border-border bg-transparent p-0 text-left"
              onClick={() => setActive(i)}
              aria-label={`View: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="aspect-[4/3] w-full object-cover transition-transform hover:scale-105"
              />
            </button>
          ))}
        </div>
        {active !== null && (
          <div
            className="fixed inset-0 z-50 grid place-items-center bg-black/85 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image preview"
            onClick={() => setActive(null)}
          >
            <div className="w-full max-w-[900px]" onClick={(e) => e.stopPropagation()}>
              <div className="mb-3 flex justify-end gap-2">
                <Button variant="secondary" size="sm" onClick={prev} aria-label="Previous image">Previous</Button>
                <Button variant="secondary" size="sm" onClick={next} aria-label="Next image">Next</Button>
                <Button variant="secondary" size="sm" onClick={() => setActive(null)} aria-label="Close gallery">Close</Button>
              </div>
              <Image
                src={poolImages[active].src}
                alt={poolImages[active].alt}
                width={poolImages[active].width}
                height={poolImages[active].height}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
