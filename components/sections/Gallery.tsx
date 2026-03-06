"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { galleryImages } from "@/content/gallery";

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowRight") {
        setActive((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
      }
      if (event.key === "ArrowLeft") {
        setActive((current) => (current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length));
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const next = () => setActive((current) => (current === null ? 0 : (current + 1) % galleryImages.length));
  const prev = () => setActive((current) => (current === null ? 0 : (current - 1 + galleryImages.length) % galleryImages.length));

  return (
    <section id="gallery" className="section section-alt">
      <div className="container">
        <h2>Photo gallery</h2>
        <div className="gallery-grid">
          {galleryImages.map((img, i) => (
            <button
              type="button"
              key={img.src}
              className="gallery-item"
              onClick={() => setActive(i)}
              aria-label={`Open ${img.category} image: ${img.alt}`}
            >
              <Image src={img.src} alt={img.alt} width={600} height={400} />
              <span>{img.category}</span>
            </button>
          ))}
        </div>
        {active !== null && (
          <div className="lightbox" role="dialog" aria-modal="true" aria-label="Image preview" onClick={() => setActive(null)}>
            <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
              <div className="lightbox-actions">
                <button type="button" className="lightbox-close" onClick={prev} aria-label="Previous image">Previous</button>
                <button type="button" className="lightbox-close" onClick={next} aria-label="Next image">Next</button>
                <button type="button" className="lightbox-close" onClick={() => setActive(null)} aria-label="Close gallery">Close</button>
              </div>
              <Image src={galleryImages[active].src} alt={galleryImages[active].alt} width={1200} height={800} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
