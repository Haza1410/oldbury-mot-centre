import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { FAQAccordion } from "@/components/FAQAccordion";
import { CTABanner } from "@/components/CTABanner";
import { faqs, pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "FAQs",
  description: pageMetadata.faq.description,
  openGraph: {
    title: pageMetadata.faq.title,
    description: pageMetadata.faq.description,
  },
};

export default function FAQPage() {
  return (
    <>
      <Hero
        eyebrow="FAQs"
        title="Frequently asked questions"
        description="Got a question about MOT classes, timings, repairs or booking your vehicle in? Find answers below — or get in touch and we'll be happy to help."
        image="https://images.unsplash.com/photo-1493238792000-8113da705763?w=1200&q=80"
        imageAlt="Mechanic at work in the garage"
        primaryCta={{ label: "Contact Us", href: "/contact" }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-3xl px-4 lg:px-5">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>

      <CTABanner
        title="Still have questions?"
        description="Our friendly team is here to help. Call us, email us, or drop by the garage on Popes Lane for a straight answer."
      />
    </>
  );
}
