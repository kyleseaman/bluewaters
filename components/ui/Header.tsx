"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  ["Stay", "#highlights"],
  ["Cottages", "#cottages-gallery"],
  ["Pool", "#pool"],
  ["Rates", "#rates"],
  ["Location", "#location"],
  ["FAQ", "#faq"],
  ["Contact", "#contact"],
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 bg-transparent transition-all duration-200",
        scrolled && "border-b border-border bg-background/96 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex min-h-16 w-[min(1080px,92%)] items-center justify-between gap-4">
        <a href="#top" className="font-bold text-primary no-underline">
          Blue Waters Cottages
        </a>

        <button
          type="button"
          className="inline-block rounded-full border border-border px-3 py-2 font-semibold text-primary md:hidden"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="hidden flex-wrap gap-3 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-muted-foreground no-underline hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>

      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="mx-auto flex w-[min(1080px,92%)] flex-wrap gap-2 pb-3 md:hidden" aria-label="Mobile">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-sm text-muted-foreground no-underline hover:text-foreground"
              onClick={() => setMobileOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
