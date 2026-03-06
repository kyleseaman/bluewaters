import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="hero section">
      <div className="container">
        <p className="eyebrow">{siteContent.tagline}</p>
        <h1>{siteContent.heroTitle}</h1>
        <p className="lead">{siteContent.heroSubtitle}</p>
        <div className="hero-cta-row">
          <a href="#contact" className="button">{siteContent.ctaPrimary}</a>
          <a href="#cottages" className="button button-secondary">{siteContent.ctaSecondary}</a>
        </div>
        <ul className="trust-list">
          {siteContent.trustBullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </div>
    </section>
  );
}
