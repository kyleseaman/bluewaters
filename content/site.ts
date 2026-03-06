export const siteContent = {
  name: "Blue Waters Executive Cottages",
  tagline: "Brackley Beach, Prince Edward Island",
  heroTitle: "A peaceful PEI cottage escape close to beach, trails, and Charlottetown",
  heroSubtitle:
    "Blue Waters Executive Cottages are located in Brackley Beach, overlooking Brackley Bay and just minutes from the beautiful north shore beaches of Prince Edward Island.",
  description:
    "Located on ten acres with spacious treed lawn, outdoor deck, play area, heated swimming pool, and heated whirlpool. Features a century farmhouse and three two-bedroom executive cottages.",
  license: "PEI Lic # 2200013",
  rating: "Canada Select 3.5 Stars",
  contact: {
    email: "bluewaterscottages@gmail.com",
    phonePrimary: "902-672-2720",
    phoneSecondary: "902-940-7074",
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
    "All accommodations non-smoking",
    "Laundry, washroom & shower by pool",
    "15 km from airport and Charlottetown",
    "40 minutes from Confederation Bridge",
    "Short drive to National Park beaches",
    "Canada Select 3.5 Stars",
  ],
};

export const fullAddress = [
  siteContent.contact.address.streetAddress,
  siteContent.contact.address.addressLocality,
  siteContent.contact.address.addressRegion,
  siteContent.contact.address.postalCode,
].join(", ");
