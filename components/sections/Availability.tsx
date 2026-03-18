import { availability } from "@/content/availability";

export function Availability() {
  if (availability.weeks.length === 0) return null;

  return (
    <section className="bg-primary py-4 text-primary-foreground">
      <div className="mx-auto flex w-[min(1080px,92%)] flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center">
        <span className="font-semibold">
          {availability.season} availability:
        </span>
        {availability.weeks.map((w) => (
          <span
            key={w.label}
            className="rounded-full bg-primary-foreground/15 px-3 py-1 text-sm font-medium"
          >
            {w.label}
          </span>
        ))}
        <a
          href="#contact"
          className="rounded-full bg-primary-foreground px-4 py-1.5 text-sm font-semibold text-primary no-underline hover:opacity-90"
        >
          Book now
        </a>
      </div>
    </section>
  );
}
