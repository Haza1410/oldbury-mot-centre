"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { navLinks, contact } from "@/lib/site";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      {/* Local utility bar */}
      <div className="hidden bg-foreground text-background/80 lg:block">
        <Container className="flex items-center justify-between gap-4 py-2 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-brand" />
              2 Popes Lane, Oldbury, B69 4PN
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5 text-brand" />
              Mon–Fri 8:30am–6pm · Sat 8:30am–1pm
            </span>
          </div>
          <div className="flex items-center gap-5">
            <span className="text-background/60">MOT testing, servicing &amp; repairs in Oldbury</span>
            <a
              href={contact.phoneHref}
              className="flex items-center gap-1.5 font-medium text-background transition-colors hover:text-brand"
            >
              <Phone className="h-3.5 w-3.5" />
              {contact.phone}
            </a>
          </div>
        </Container>
      </div>

      <Container className="flex items-center justify-between gap-3 py-2.5">
        <Link
          href="/"
          className="flex h-12 shrink-0 items-center sm:h-14 lg:h-16"
          onClick={() => setOpen(false)}
        >
          <Logo variant="light" className="h-full" />
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/contact" variant="accent" className="px-5 py-2.5 text-sm">
            Book Your MOT
          </Button>
        </div>

        {/* Mobile: quick-call + menu toggle */}
        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={contact.phoneHref}
            className="inline-flex items-center justify-center rounded-full p-2 text-foreground"
            aria-label={`Call ${contact.phone}`}
          >
            <Phone className="h-5 w-5" />
          </a>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <nav
          className="border-t border-border bg-background lg:hidden"
          aria-label="Mobile navigation"
        >
          <Container className="py-3">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-foreground transition-colors hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2 rounded-lg bg-surface px-3 py-3 text-sm text-muted">
                <MapPin className="h-4 w-4 shrink-0 text-accent" />
                2 Popes Lane, Oldbury, B69 4PN
              </div>
              <a
                href={contact.phoneHref}
                className="flex items-center gap-2 px-3 py-3 text-sm font-medium text-foreground"
              >
                <Phone className="h-4 w-4" />
                {contact.phone}
              </a>
              <Button
                href="/contact"
                variant="accent"
                className="mt-2 w-full text-center"
                onClick={() => setOpen(false)}
              >
                Book Your MOT
              </Button>
            </div>
          </Container>
        </nav>
      )}
    </header>
  );
}
