"use client";

import Image from "next/image";
import { useState } from "react";
import { cottageImages } from "@/content/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

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
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>
        {active !== null && (
          <Lightbox images={cottageImages} active={active} onClose={() => setActive(null)} />
        )}
      </div>
    </section>
  );
}
