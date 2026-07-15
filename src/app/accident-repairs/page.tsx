import type { Metadata } from "next";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";
import { pageMetadata, contact } from "@/lib/site";

export const metadata: Metadata = {
  title: "Accident Repairs & Bodywork",
  description: pageMetadata.accidentRepairs.description,
  openGraph: {
    title: pageMetadata.accidentRepairs.title,
    description: pageMetadata.accidentRepairs.description,
  },
};

const repairServices = [
  {
    title: "Accident Repairs",
    description:
      "Been in a knock? We put your vehicle back to a safe, roadworthy condition — panel work, mechanical repairs and everything in between.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
  },
  {
    title: "Welding",
    description:
      "Professional welding for chassis, sills, exhausts and bodywork — including welding repairs to help your vehicle pass its MOT.",
    image: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?w=800&q=80",
  },
  {
    title: "Wheel Tracking & Alignment",
    description:
      "Uneven tyre wear or pulling to one side? We check and adjust your wheel alignment so your vehicle drives straight and true.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
  },
  {
    title: "General Repairs",
    description:
      "Whatever's gone wrong, our technicians can diagnose it and put it right — with honest advice and a fair, upfront price.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=800&q=80",
  },
];

export default function AccidentRepairsPage() {
  return (
    <>
      <Hero
        eyebrow="Accident Repairs & Bodywork"
        title="Straight, safe and back on the road"
        description="Accident repairs, welding and wheel tracking & alignment at our Oldbury garage. We get your vehicle looking right and driving right, whatever's happened."
        image="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80"
        imageAlt="Vehicle in for accident repair and bodywork"
        primaryCta={{ label: "Book Your Vehicle In", href: "/contact" }}
        phoneCta={{ label: `Call ${contact.phone}`, href: contact.phoneHref }}
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <SectionHeading
            eyebrow="What we do"
            title="Bodywork, welding & alignment"
            description="From accident damage to welding repairs and wheel alignment, our team restores your vehicle to a safe, roadworthy condition — with the same honest approach we bring to every job."
            align="center"
          />
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid gap-8 sm:grid-cols-2">
            {repairServices.map((item) => (
              <div key={item.title} className="group overflow-hidden border border-border">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl font-medium">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <SectionHeading
            eyebrow="One garage, everything covered"
            title="Repairs, MOTs and servicing in one place"
            description="Because we handle accident repairs, welding and alignment alongside MOTs and servicing, you only need to deal with one trusted local team — from first inspection to final drive-away."
            align="center"
          />
        </div>
      </section>

      <CTABanner
        title="Need a repair or some welding done?"
        description="Call us on Popes Lane, Oldbury, or drop by the garage and we'll take a look and give you an honest quote."
      />
    </>
  );
}
