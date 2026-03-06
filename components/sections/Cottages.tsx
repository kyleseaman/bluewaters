import { cottageFeatures, cottageDescription } from "@/content/cottages";

export function Cottages() {
  return (
    <section id="cottages" className="bg-muted py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Cottage details
        </h2>
        <p className="max-w-[65ch] text-lg text-muted-foreground">
          {cottageDescription}
        </p>
        <ul className="mt-4 columns-1 gap-8 md:columns-2">
          {cottageFeatures.map((f) => (
            <li key={f} className="mb-3">{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
