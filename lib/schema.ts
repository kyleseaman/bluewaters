import { faqs } from "@/content/faqs";
import { siteContent } from "@/content/site";

export const lodgingSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: siteContent.name,
  description: siteContent.heroSubtitle,
  email: siteContent.contact.email,
  address: {
    "@type": "PostalAddress",
    ...siteContent.contact.address,
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.answer,
    },
  })),
};
