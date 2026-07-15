import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata, contact } from "@/lib/site";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Servicing & Repairs",
  description: pageMetadata.servicing.description,
  openGraph: {
    title: pageMetadata.servicing.title,
    description: pageMetadata.servicing.description,
  },
};

const servicingBenefits = [
  "Full and interim servicing to keep your vehicle reliable",
  "Brakes — pads, discs, calipers and handbrake repairs",
  "Clutches — replacements and hydraulic repairs",
  "Exhausts, batteries, filters and general mechanical repairs",
  "Honest diagnostics with a clear price before any work starts",
];

const serviceAreas = [
  {
    room: "Servicing",
    advice:
      "Interim and full services carried out to a high standard, helping your vehicle run smoothly and hold its value. Ideal alongside your MOT.",
  },
  {
    room: "Brakes, clutches & exhausts",
    advice:
      "From squealing brakes to a slipping clutch or blowing exhaust, we diagnose the fault and fix it properly with quality parts.",
  },
  {
    room: "German car specialists",
    advice:
      "Audi, BMW, Mercedes, VW and more. We know German vehicles well and offer specialist servicing and repairs at fair prices.",
  },
];

export default function ServicingPage() {
  return (
    <>
      <Hero
        eyebrow="Servicing & Repairs"
        title="Keeping you safely on the road"
        description="Full servicing and mechanical repairs at our Oldbury garage — brakes, clutches, exhausts, diagnostics and general repairs, with German car specialists on the team."
        image="https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=1200&q=80"
        imageAlt="Mechanic servicing a car engine"
        primaryCta={{ label: "Book Your Vehicle In", href: "/contact" }}
        secondaryCta={{ label: "MOT Testing", href: "/mot-testing" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=800&q=80"
                alt="Running diagnostics on a vehicle"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Why us"
                title="Skilled mechanics, honest prices"
                description="A well-maintained vehicle is a safer, more reliable vehicle. At Oldbury MOT Centre our experienced technicians look after everything from routine servicing to complex repairs — always explaining what's needed and what it'll cost, before we start."
              />
              <ul className="mt-8 space-y-3">
                {servicingBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3 text-sm">
                    <Check className="h-4 w-4 shrink-0 text-accent" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="What we cover"
            title="Everything your vehicle needs"
            align="center"
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {serviceAreas.map((item) => (
              <div key={item.room} className="border border-border bg-background p-8">
                <h3 className="font-serif text-xl font-medium">{item.room}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted">{item.advice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <SectionHeading
            eyebrow="Failed your MOT?"
            title="We can fix it and retest"
            description="Because we're a full garage as well as a test centre, there's no need to trail around different places. If your vehicle fails, we'll carry out the repairs and get it retested — all in one place."
            align="center"
          />
        </div>
      </section>

      <CTABanner
        title="Book your service or repair"
        description="Call us or drop by the garage on Popes Lane and we'll get your vehicle booked in at a time that suits you."
      />
    </>
  );
}
