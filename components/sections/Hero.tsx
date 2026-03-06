import { siteContent } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="bg-gradient-to-br from-muted to-secondary py-20 pt-32">
      <div className="mx-auto w-[min(1080px,92%)]">
        <p className="text-xs font-bold uppercase tracking-wider text-primary">
          {siteContent.tagline}
        </p>
        <h1 className="mt-2 max-w-[20ch] text-[clamp(2rem,4vw,3.2rem)] leading-tight font-bold">
          {siteContent.heroTitle}
        </h1>
        <p className="mt-4 max-w-[65ch] text-lg text-muted-foreground">
          {siteContent.heroSubtitle}
        </p>
        <p className="mt-3 max-w-[65ch] text-muted-foreground">
          {siteContent.description}
        </p>
        <ul className="mt-6 flex list-none flex-wrap gap-2 p-0">
          {siteContent.trustBullets.map((item) => (
            <li key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted-foreground">
          {siteContent.license} · {siteContent.rating}
        </p>
      </div>
    </section>
  );
}
