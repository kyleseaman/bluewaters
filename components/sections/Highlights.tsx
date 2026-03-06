import { highlights } from "@/content/cottages";
import { siteContent } from "@/content/site";

export function Highlights() {
  return (
    <section id="highlights" className="py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Why guests choose Blue Waters
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((h) => (
            <article key={h.title} className="rounded-xl border border-border bg-card p-4">
              <h3 className="mt-0 font-semibold">{h.title}</h3>
              <p className="text-muted-foreground">{h.description}</p>
            </article>
          ))}
        </div>
        <ul className="mt-6 columns-1 gap-8 text-muted-foreground md:columns-2">
          {siteContent.propertyHighlights.map((item) => (
            <li key={item} className="mb-2">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
