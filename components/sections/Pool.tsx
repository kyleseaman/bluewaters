"use client";

import Image from "next/image";
import { useState } from "react";
import { poolImages } from "@/content/gallery";
import { Lightbox } from "@/components/ui/Lightbox";

export function Pool() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="pool" className="py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Pool & hot tub
        </h2>
        <p className="mb-6 max-w-[65ch] text-lg text-muted-foreground">
          Relax in the heated outdoor pool or unwind in the hot tub after a day at the beach.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          {poolImages.map((img, i) => (
            <button
              type="button"
              key={img.src}
              className="w-full cursor-pointer overflow-hidden rounded-lg border border-border bg-transparent p-0 text-left sm:w-[calc(50%-0.375rem)] md:w-[calc(33.333%-0.5rem)]"
              onClick={() => setActive(i)}
              aria-label={`View: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                className="aspect-[4/3] w-full object-cover transition-transform hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </button>
          ))}
        </div>
        {active !== null && (
          <Lightbox images={poolImages} active={active} onClose={() => setActive(null)} />
        )}
      </div>
    </section>
  );
}
