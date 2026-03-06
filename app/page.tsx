import { AreaGuide } from "@/components/sections/AreaGuide";
import { Contact } from "@/components/sections/Contact";
import { Cottages } from "@/components/sections/Cottages";
import { FAQ } from "@/components/sections/FAQ";
import { Gallery } from "@/components/sections/Gallery";
import { Hero } from "@/components/sections/Hero";
import { Highlights } from "@/components/sections/Highlights";
import { RatesSeason } from "@/components/sections/RatesSeason";
import { Header } from "@/components/ui/Header";
import { faqSchema, lodgingSchema } from "@/lib/schema";

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lodgingSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Cottages />
        <RatesSeason />
        <Gallery />
        <AreaGuide />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}
