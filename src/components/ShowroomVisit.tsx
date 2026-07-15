import Image from "next/image";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";
import { contact } from "@/lib/site";
import { Button } from "./Button";

// TODO: placeholder opening hours — confirm actual hours with the garage.
const shortHours = [
  { label: "Mon – Fri", hours: "8:30 am – 6:00 pm" },
  { label: "Saturday", hours: "8:30 am – 1:00 pm" },
  { label: "Sunday", hours: "Closed" },
];

export function ShowroomVisit() {
  return (
    <section className="bg-foreground py-16 text-background lg:py-20">
      <div className="mx-auto grid w-full max-w-screen-2xl items-stretch gap-10 px-4 lg:grid-cols-2 lg:px-5">
        <div className="flex flex-col justify-center">
          <p className="inline-flex w-fit items-center gap-2 rounded-full bg-background/10 px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-brand">
            <MapPin className="h-3.5 w-3.5" />
            Visit our Oldbury garage
          </p>
          <h2 className="mt-5 font-serif text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
            Bring your vehicle in and get honest advice
          </h2>
          <p className="mt-5 max-w-lg leading-relaxed text-background/70">
            Whether it&apos;s an MOT, a service or a repair, our friendly local team is here to
            help. Pop in to the garage on Popes Lane, give us a call, and we&apos;ll tell you
            exactly what your vehicle needs — no jargon, no pressure.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">Address</p>
                <p className="mt-1 text-sm text-background/70">{contact.address.full}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">Call the garage</p>
                <a
                  href={contact.phoneHref}
                  className="mt-1 block text-sm text-background/70 transition-colors hover:text-brand"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:col-span-2">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
              <div>
                <p className="text-sm font-medium">Opening hours</p>
                <ul className="mt-1 space-y-0.5">
                  {shortHours.map((row) => (
                    <li key={row.label} className="flex gap-3 text-sm text-background/70">
                      <span className="w-20">{row.label}</span>
                      <span>{row.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-all hover:shadow-md"
            >
              <Navigation className="h-4 w-4" />
              Get directions
            </a>
            <Button href="/contact" variant="accent">
              Book Your MOT
            </Button>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-2xl lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1000&q=80"
            alt="Technician working on a vehicle at the Oldbury garage"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
