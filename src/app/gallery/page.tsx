import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { GalleryGrid } from "@/components/GalleryGrid";
import { CTABanner } from "@/components/CTABanner";
import { galleryImages, pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Gallery",
  description: pageMetadata.gallery.description,
  openGraph: {
    title: pageMetadata.gallery.title,
    description: pageMetadata.gallery.description,
  },
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        eyebrow="Gallery"
        title="A look inside the garage"
        description="MOT testing, servicing, diagnostics and repairs at our Popes Lane garage in Oldbury. Take a look at the work we do, then call us to book your vehicle in."
        image="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&q=80"
        imageAlt="Cars in for work at the garage"
        primaryCta={{ label: "Book Your MOT", href: "/contact" }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <p className="mb-8 text-center text-sm text-muted">
            Images shown are representative examples of the work we carry out. Call us
            to book your vehicle in or ask about a specific job.
          </p>
          <GalleryGrid images={galleryImages} />
        </div>
      </section>

      <CTABanner
        title="Ready to book your vehicle in?"
        description="Call us or drop by the garage on Popes Lane, Oldbury, for your MOT, service or repair."
      />
    </>
  );
}
