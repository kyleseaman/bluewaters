import { faqs } from "@/content/faqs";

export function FAQ() {
  return (
    <section id="faq" className="bg-muted py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Frequently asked questions
        </h2>
        <div className="space-y-2.5">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-lg border border-border bg-card p-3.5">
              <summary className="cursor-pointer font-semibold">{faq.question}</summary>
              <p className="mt-2 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
