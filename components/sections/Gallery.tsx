"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { cottageImages } from "@/content/gallery";
import { Button } from "@/components/ui/button";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? 0 : (current + 1) % cottageImages.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? 0 : (current - 1 + cottageImages.length) % cottageImages.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const next = () => setActive((current) => (current === null ? 0 : (current + 1) % cottageImages.length));
  const prev = () => setActive((current) => (current === null ? 0 : (current - 1 + cottageImages.length) % cottageImages.length));

  return (
    <section id="cottages-gallery" className="bg-muted py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Inside the cottages
        </h2>
        <p className="mb-6 max-w-[65ch] text-lg text-muted-foreground">
          Each cottage features pine ceilings, a full kitchen, comfortable bedrooms, and a private verandah with BBQ.
        </p>
        <div className="columns-2 gap-3 md:columns-3 lg:columns-4">
          {cottageImages.map((img, i) => (
            <button
              type="button"
              key={img.src}
              className="mb-3 block w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-transparent p-0 text-left break-inside-avoid"
              onClick={() => setActive(i)}
              aria-label={`View: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="w-full transition-transform hover:scale-105"
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
                src={cottageImages[active].src}
                alt={cottageImages[active].alt}
                width={cottageImages[active].width}
                height={cottageImages[active].height}
                className="w-full rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
