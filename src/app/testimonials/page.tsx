import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TestimonialCard } from "@/components/TestimonialCard";
import { CTABanner } from "@/components/CTABanner";
import { testimonials, pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "Testimonials",
  description: pageMetadata.testimonials.description,
  openGraph: {
    title: pageMetadata.testimonials.title,
    description: pageMetadata.testimonials.description,
  },
};

export default function TestimonialsPage() {
  return (
    <>
      <Hero
        eyebrow="Reviews"
        title="What our customers say"
        description="We're proud of the relationships we've built with drivers across Oldbury and the West Midlands. Here's what some of our customers have to say."
        image="https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=1200&q=80"
        imageAlt="Happy driver collecting their car"
        primaryCta={{ label: "Book Your MOT", href: "/contact" }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Join our happy customers"
        description="Call the garage on Popes Lane, Oldbury, for honest MOTs, servicing and repairs you can rely on."
      />
    </>
  );
}
