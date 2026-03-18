import { areaGuide } from "@/content/area-guide";
import { fullAddress } from "@/content/site";
import { Button } from "@/components/ui/button";

export function AreaGuide() {
  return (
    <section id="location" className="py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Location & area guide
        </h2>
        <p className="max-w-[65ch] text-lg text-muted-foreground">{fullAddress}</p>
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <iframe
            title="Blue Waters Cottages location"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {areaGuide.map((item) => (
            <article key={item.title} className="rounded-xl border border-border bg-card p-4">
              <h3 className="mt-0 font-semibold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-4">
          <Button asChild variant="outline" size="lg">
            <a target="_blank" rel="noreferrer" href={`https://maps.google.com/?q=${encodeURIComponent(fullAddress)}`}>
              Open in Google Maps
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
