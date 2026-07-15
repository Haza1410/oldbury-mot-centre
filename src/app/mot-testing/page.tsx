import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { ProductSection } from "@/components/ProductSection";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { motClasses, pageMetadata, contact } from "@/lib/site";
import { Truck, Bike, Caravan, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "MOT Testing",
  description: pageMetadata.mot.description,
  openGraph: {
    title: pageMetadata.mot.title,
    description: pageMetadata.mot.description,
  },
};

const specialistVehicles = [
  { label: "Motorhomes & campervans", icon: Caravan },
  { label: "Quad bikes", icon: Bike },
  { label: "Larger vans & goods vehicles", icon: Truck },
  { label: "Park homes & luxury lodges", icon: Home },
];

export default function MotTestingPage() {
  return (
    <>
      <Hero
        eyebrow="MOT Testing"
        title="Class 4, 5 & 7 MOTs in Oldbury"
        description="Approved MOT testing for cars, vans, minibuses, motorhomes, quad bikes and larger vehicles. Straight-talking results and, because we're a full garage, we can put right anything that fails."
        image="https://images.unsplash.com/photo-1530046339160-ce3e530c7d2f?w=1200&q=80"
        imageAlt="Vehicle undergoing an MOT inspection in the workshop"
        primaryCta={{ label: "Book Your MOT", href: "/contact" }}
        secondaryCta={{ label: "Servicing & Repairs", href: "/servicing" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="MOT classes"
            title="The right MOT for your vehicle"
            description="Not sure which class you need? We test Class 4, 5 and 7 vehicles — please allow 2 hours for Class 5 and Class 7 inspections. If you're unsure, give us a call and we'll point you in the right direction."
            align="center"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-screen-2xl space-y-20 px-4 lg:px-5">
          {motClasses.map((type, index) => (
            <ProductSection
              key={type.title}
              title={type.title}
              description={type.description}
              features={type.features}
              image={type.image}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="Specialist & large vehicles"
            title="We're set up for the bigger jobs too"
            description="As well as everyday cars and vans, we can test and look after larger and specialist vehicles. Get in touch to discuss what you've got."
            align="center"
          />
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {specialistVehicles.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-4 border border-border bg-background p-8 text-center"
              >
                <Icon className="h-8 w-8 text-accent" />
                <p className="text-sm font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Is your MOT due?"
        description="Book your Class 4, 5 or 7 MOT today. Call us or drop by the garage and we'll get you booked in."
      />
    </>
  );
}
