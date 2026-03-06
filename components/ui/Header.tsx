"use client";

import { useEffect, useState } from "react";

const links = [
  ["Stay", "#highlights"],
  ["Cottages", "#cottages"],
  ["Rates", "#rates"],
  ["Gallery", "#gallery"],
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
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container nav-wrap">
        <a href="#top" className="brand">Blue Waters Cottages</a>

        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          Menu
        </button>

        <nav className="desktop-nav">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">{label}</a>
          ))}
        </nav>

        <a href="#contact" className="button button-small">Check Availability</a>
      </div>

      {mobileOpen && (
        <nav id="mobile-nav" className="mobile-nav container" aria-label="Mobile">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link" onClick={() => setMobileOpen(false)}>{label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}
