import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureGrid } from "@/components/FeatureGrid";
import { CTABanner } from "@/components/CTABanner";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: pageMetadata.about.description,
  openGraph: {
    title: pageMetadata.about.title,
    description: pageMetadata.about.description,
  },
};

const whyChooseUs = [
  {
    title: "Independent & Local",
    description:
      "We're a proud independent garage rooted in Oldbury — not a faceless chain. Every customer and every vehicle matters to us.",
    icon: "heart" as const,
  },
  {
    title: "Qualified & Approved",
    description:
      "DVSA-approved MOT testing for Class 4, 5 & 7, backed by experienced technicians who take pride in doing the job properly.",
    icon: "shield" as const,
  },
  {
    title: "Honest, Fair Pricing",
    description:
      "We explain exactly what your vehicle needs and what it'll cost before we start — no surprises, no unnecessary work.",
    icon: "pound" as const,
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About us"
        title="Your local MOT test centre & garage in Oldbury"
        description="Oldbury MOT Centre is an independent garage on Popes Lane, looking after drivers across Oldbury and the West Midlands. From MOTs and servicing to repairs and welding, we're German car specialists who believe in honest, no-pressure advice."
        image="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=1200&q=80"
        imageAlt="Cars parked outside the garage"
        primaryCta={{ label: "Book Your MOT", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/mot-testing" }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow="Our story"
              title="Keeping local drivers safely on the road"
              description="Based at 2 Popes Lane in Oldbury, we've built our reputation on three things: proper technical know-how, genuinely friendly service, and fair pricing. Whether it's an MOT, a full service, a clutch, an exhaust or accident repairs, we're here to make the whole thing simple and stress-free."
              align="center"
            />
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Why us"
            title="What sets us apart"
            align="center"
          />
          <div className="mt-12">
            <FeatureGrid features={whyChooseUs} />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our expertise"
                title="Mechanics you can rely on"
                description="From MOT testing and servicing to brakes, clutches, exhausts, welding and wheel alignment, our team understands what it takes to keep a vehicle safe and reliable. Because we're a full garage as well as a test centre, we can handle whatever your vehicle needs, all in one place."
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="German car specialists"
                title="At home with German vehicles"
                description="Audi, BMW, Mercedes, Volkswagen and more — we know German cars inside out. From routine servicing and diagnostics to more involved repairs, you get specialist knowledge without the main-dealer price tag."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-foreground py-12 text-background">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-background/60">
            Visit us today
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium sm:text-4xl">
            Pop in or give us a call
          </h2>
          <p className="mt-4 text-background/70">
            Book your MOT, service or repair with a local team that treats your vehicle like
            its own. No pressure, no hard sell — just honest, helpful advice.
          </p>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
