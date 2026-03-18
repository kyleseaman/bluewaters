export const siteContent = {
  name: "Blue Waters Executive Cottages",
  tagline: "Brackley Beach, Prince Edward Island",
  heroTitle: "A peaceful PEI cottage escape close to the beach, trails, and Charlottetown",
  heroSubtitle:
    "Blue Waters Executive Cottages are located in Brackley Beach, overlooking Brackley Bay and just minutes from the beautiful North Shore beaches of Prince Edward Island.",
  description:
    "Set on ten acres, the property features a spacious treed lawn, outdoor deck, play area, heated swimming pool, and heated whirlpool, along with a century farmhouse and three two-bedroom executive cottages.",
  license: "PEI Lic # 2200013",
  contact: {
    email: "bluewaterscottages@gmail.com",
    address: {
      streetAddress: "3694 Brackley Point Road",
      addressLocality: "Brackley Beach",
      addressRegion: "PE",
      postalCode: "C1E 2N3",
      addressCountry: "CA",
    },
  },
  seasonWindow: "Open June to October",
  trustBullets: ["3 cottages", "2 bedrooms each", "Sleeps 4", "Bay views"],
  propertyHighlights: [
    "All accommodations are non-smoking",
    "Laundry, washroom, and shower facilities by the pool",
    "15 km from airport and Charlottetown",
    "40 minutes from Confederation Bridge",
    "Short drive to National Park beaches",
  ],
};

export const fullAddress = [
  siteContent.contact.address.streetAddress,
  siteContent.contact.address.addressLocality,
  siteContent.contact.address.addressRegion,
  siteContent.contact.address.postalCode,
].join(", ");
