import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/Button";
import { contact, pageMetadata, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: pageMetadata.contact.description,
  openGraph: {
    title: pageMetadata.contact.title,
    description: pageMetadata.contact.description,
  },
};

export default function ContactPage() {
  return (
    <>
      <Hero
        eyebrow="Contact"
        title="Book your MOT or get in touch"
        description="Call us to book your MOT, service or repair, drop by the garage on Popes Lane, or send us an email — our team is ready to help and give you an honest quote."
        image="https://images.unsplash.com/photo-1567808291548-fc3ee04dbcf0?w=1200&q=80"
        imageAlt="Oldbury MOT Centre garage"
        compact
      />

      <section className="py-12">
        <div className="mx-auto w-full max-w-screen-2xl px-4 lg:px-5">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-3xl font-medium">Get in touch</h2>
                <p className="mt-4 text-muted">
                  Call to book your MOT, service or repair, or drop by the garage on
                  Popes Lane and we'll get your vehicle booked in.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 border border-border p-6">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="mt-2 text-sm text-muted">{contact.address.full}</p>
                    <a
                      href={contact.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium hover:underline"
                    >
                      <Navigation className="h-4 w-4" />
                      Get directions
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-border p-6">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <a
                      href={contact.phoneHref}
                      className="mt-2 block text-sm text-muted hover:text-foreground"
                    >
                      {contact.phone}
                    </a>
                    <p className="mt-2 text-xs text-muted">
                      Call us to book your MOT, service or repair
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-border p-6">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <a
                      href={contact.emailHref}
                      className="mt-2 block text-sm text-muted hover:text-foreground"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-border p-6">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0" />
                  <div>
                    <h3 className="font-medium">Opening hours</h3>
                    <ul className="mt-3 space-y-2">
                      {contact.hours.map((item) => (
                        <li
                          key={item.day}
                          className="flex justify-between gap-8 text-sm text-muted"
                        >
                          <span>{item.day}</span>
                          <span>{item.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button href={contact.phoneHref}>Call Us Now</Button>
                <Button href={contact.directionsUrl} variant="outline">
                  Get Directions
                </Button>
              </div>

              <p className="text-xs text-muted">
                Please allow 2 hours for Class 5 &amp; 7 MOT inspections.
              </p>
            </div>

            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden border border-border lg:aspect-auto lg:h-full lg:min-h-[500px]">
                <iframe
                  src={contact.mapEmbedUrl}
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`${siteConfig.name} location map`}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-16">
        <div className="mx-auto w-full max-w-3xl px-4 text-center lg:px-5">
          <h2 className="font-serif text-2xl font-medium sm:text-3xl">
            Serving Oldbury & the West Midlands
          </h2>
          <p className="mt-4 text-muted">
            We welcome drivers from Oldbury, Smethwick, West Bromwich, Tipton,
            Rowley Regis, Halesowen, and surrounding areas. Call us or drop by the
            garage to book your vehicle in.
          </p>
        </div>
      </section>
    </>
  );
}
