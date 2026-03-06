export const siteContent = {
  name: "Blue Waters Executive Cottages",
  tagline: "Quiet coastal stays near Brackley Beach, PEI",
  heroTitle: "A peaceful PEI cottage escape close to beach, trails, and Charlottetown",
  heroSubtitle:
    "Stay on a private 10-acre setting with bay views, heated pool and hot tub access, and quick access to Prince Edward Island National Park.",
  ctaPrimary: "Check Availability",
  ctaSecondary: "View the Cottages",
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
  seasonWindow: "Open June 1 – October 17",
  trustBullets: ["4 guests", "2 bedrooms", "1 bath", "Bay view"],
};

export const fullAddress = [
  siteContent.contact.address.streetAddress,
  siteContent.contact.address.addressLocality,
  siteContent.contact.address.addressRegion,
  siteContent.contact.address.postalCode,
].join(", ");
