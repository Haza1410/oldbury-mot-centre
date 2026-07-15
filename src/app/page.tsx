import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { CategoryCard } from "@/components/CategoryCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { TrustStrip } from "@/components/TrustStrip";
import { ProcessSteps } from "@/components/ProcessSteps";
import { ShowroomVisit } from "@/components/ShowroomVisit";
import { CTABanner } from "@/components/CTABanner";
import { Button } from "@/components/Button";
import {
  categories,
  testimonials,
  localTrust,
  bookingSteps,
  contact,
} from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Oldbury, West Midlands"
        title="MOT testing, servicing & repairs you can trust"
        description="Your local independent garage and MOT test centre on Popes Lane, Oldbury. Class 4, 5 & 7 MOTs, full servicing, brakes, clutches, exhausts, welding and accident repairs — with honest advice and German car specialists."
        image="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1200&q=80"
        imageAlt="Technician working on a vehicle in the workshop"
        primaryCta={{ label: "Book Your MOT", href: "/contact" }}
        secondaryCta={{ label: "Our Services", href: "/mot-testing" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        badges={[
          "Class 4, 5 & 7 MOTs",
          "German car specialists",
          "Oldbury & the West Midlands",
        ]}
        floatingCard={{
          title: "Honest advice",
          text: "We tell you exactly what your vehicle needs — no upselling, no surprises. Just call and book in.",
        }}
      />

      <section className="border-b border-border py-12 lg:py-14">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <TrustStrip items={localTrust} />
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What we do"
              title="A full garage under one roof"
              description="From MOTs to mechanical repairs and accident work, we look after your vehicle from start to finish — all from our Oldbury garage."
            />
            <Button href="/gallery" variant="outline">
              See the gallery
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.href} {...category} />
            ))}
          </div>
        </div>
      </section>

      <section className="texture-warm bg-surface py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="How it works"
            title="Booking your vehicle in couldn't be simpler"
            description="No hassle, no jargon. Here's how it works from the moment you call to driving away — handled by a friendly local team."
            align="center"
          />
          <div className="mt-12">
            <ProcessSteps steps={bookingSteps} />
          </div>
          <div className="mt-12 flex justify-center">
            <Button href="/mot-testing">Explore MOT Testing</Button>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="What local drivers say"
              title="Trusted by drivers across Oldbury & Sandwell"
            />
            <Button href="/testimonials" variant="outline">
              Read all reviews
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <ShowroomVisit />

      <CTABanner />
    </>
  );
}
