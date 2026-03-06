"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImages } from "@/content/gallery";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <h2>Photo gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <button type="button" key={img.src} className="gallery-item" onClick={() => setActive(i)}>
              <Image src={img.src} alt={img.alt} width={600} height={400} />
              <span>{img.category}</span>
            </button>
          ))}
        </div>
        {active !== null && (
          <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
            <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="lightbox-close" onClick={() => setActive(null)}>Close</button>
              <Image src={galleryImages[active].src} alt={galleryImages[active].alt} width={1200} height={800} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
