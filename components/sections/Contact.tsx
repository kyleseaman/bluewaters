import { fullAddress, siteContent } from "@/content/site";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-[min(1080px,92%)]">
        <h2 className="mb-4 text-[clamp(1.6rem,2.2vw,2.2rem)] text-primary">
          Contact
        </h2>
        <p className="mb-6 max-w-[65ch] text-lg text-muted-foreground">
          Call or email to check availability and book your stay.
        </p>
        <div className="rounded-xl border border-border bg-card p-4">
          <p><strong>Email:</strong> <a href={`mailto:${siteContent.contact.email}`} className="text-primary hover:underline">{siteContent.contact.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${siteContent.contact.phonePrimary}`} className="text-primary hover:underline">{siteContent.contact.phonePrimary}</a></p>
          <p><strong>Phone (alt):</strong> <a href={`tel:${siteContent.contact.phoneSecondary}`} className="text-primary hover:underline">{siteContent.contact.phoneSecondary}</a></p>
          <p><strong>Address:</strong> {fullAddress}</p>
          <p><strong>Season:</strong> {siteContent.seasonWindow}</p>
        </div>
      </div>
    </section>
  );
}
