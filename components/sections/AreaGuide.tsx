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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2772.5!2d-63.1842!3d46.3547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b5e52d0a47c0d5d%3A0x2e8e0c0a6b0a0b0a!2s3694+Brackley+Point+Rd%2C+Brackley+Beach%2C+PE+C1E+2N3%2C+Canada!5e0!3m2!1sen!2sca!4v1709000000000"
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
