import Link from "next/link";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { siteConfig, contact, navLinks } from "@/lib/site";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <Container className="py-14">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="h-14 sm:h-16">
              <Logo variant="dark" className="h-full" />
            </div>
            <p className="text-sm leading-relaxed text-background/70">
              An independent MOT test centre and full garage on Popes Lane, Oldbury.
              Class 4, 5 &amp; 7 MOTs, servicing, brakes, clutches, exhausts, welding
              and accident repairs — with honest advice and German car specialists.
            </p>
            <a
              href={contact.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-brand transition-colors hover:text-background"
            >
              <Navigation className="h-4 w-4" />
              Get directions to the garage
            </a>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-medium">Explore</h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/70 transition-colors hover:text-brand"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-medium">Visit or call us</h3>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
                <span>{contact.address.full}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand" />
                <a href={contact.phoneHref} className="hover:text-background">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand" />
                <a href={contact.emailHref} className="hover:text-background">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-serif text-lg font-medium">Opening Hours</h3>
            <ul className="space-y-2">
              {contact.hours.map((item) => (
                <li
                  key={item.day}
                  className="flex items-center gap-2 text-sm text-background/70"
                >
                  <Clock className="h-3.5 w-3.5 shrink-0 text-background/40" />
                  <span className="w-24">{item.day}</span>
                  <span>{item.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-background/20 pt-8 text-sm text-background/50 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p>Serving {siteConfig.serviceArea}</p>
        </div>
      </Container>
    </footer>
  );
}
