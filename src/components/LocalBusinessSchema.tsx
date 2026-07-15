import { siteConfig, contact } from "@/lib/site";

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: contact.phone,
    email: contact.email,
    image: `${siteConfig.url}/images/logo.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.street,
      addressLocality: contact.address.city,
      addressRegion: "West Midlands",
      postalCode: contact.address.postcode,
      addressCountry: "GB",
    },
    // TODO: geo coordinates are approximate for B69 4PN — confirm exact lat/lng.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 52.5016,
      longitude: -2.0132,
    },
    // TODO: opening times are placeholders (Saturday closes earlier) — confirm and refine.
    openingHoursSpecification: contact.hours
      .filter((h) => h.hours !== "Closed")
      .map((h) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: h.day,
        opens: "08:30",
        closes: h.day === "Saturday" ? "13:00" : "18:00",
      })),
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 52.5016,
        longitude: -2.0132,
      },
      geoRadius: "30000",
    },
    priceRange: "££",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
