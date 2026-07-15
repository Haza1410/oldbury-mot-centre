import { Phone } from "lucide-react";
import { Button } from "./Button";
import { Container } from "./Container";
import { contact } from "@/lib/site";

interface CTABannerProps {
  title?: string;
  description?: string;
}

export function CTABanner({
  title = "Book your MOT or repair today",
  description = "Call the garage for friendly advice, book your vehicle in, or ask us for an honest, no-obligation quote — whatever's easiest for you.",
}: CTABannerProps) {
  return (
    <section className="texture-warm bg-surface py-16 lg:py-20">
      <Container className="flex flex-col items-center text-center">
        <span className="rule-accent mb-6" />
        <h2 className="font-serif text-3xl font-medium sm:text-4xl">{title}</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">{description}</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/contact" variant="accent">Book Your MOT</Button>
          <Button href="/contact" variant="outline">
            Contact Us
          </Button>
          <a
            href={contact.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4" />
            {contact.phone}
          </a>
        </div>
      </Container>
    </section>
  );
}
