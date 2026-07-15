import Image from "next/image";
import { MapPin, Phone, Check } from "lucide-react";
import { Button } from "./Button";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  phoneCta?: { label: string; href: string };
  badges?: string[];
  floatingCard?: { title: string; text: string };
  compact?: boolean;
}

export function Hero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryCta,
  secondaryCta,
  phoneCta,
  badges,
  floatingCard,
  compact = false,
}: HeroProps) {
  return (
    <section className={`relative overflow-hidden bg-surface ${compact ? "py-10 lg:py-14" : ""}`}>
      <div className={`mx-auto grid w-full items-center lg:grid-cols-2 ${compact ? "max-w-screen-2xl gap-8 px-4 lg:px-5" : "gap-10 lg:gap-12"}`}>
        <div
          className={`flex flex-col justify-center ${
            compact ? "" : "px-4 py-12 lg:py-16 lg:pl-8 xl:pl-16 lg:pr-4"
          }`}
        >
          <div className="mx-auto w-full max-w-xl lg:mx-0">
            {eyebrow && (
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-muted">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                {eyebrow}
              </p>
            )}
            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
              {description}
            </p>
            {(primaryCta || secondaryCta || phoneCta) && (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {primaryCta && (
                  <Button href={primaryCta.href}>{primaryCta.label}</Button>
                )}
                {secondaryCta && (
                  <Button href={secondaryCta.href} variant="outline">
                    {secondaryCta.label}
                  </Button>
                )}
                {phoneCta && (
                  <a
                    href={phoneCta.href}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-accent"
                  >
                    <Phone className="h-4 w-4" />
                    {phoneCta.label}
                  </a>
                )}
              </div>
            )}
            {badges && badges.length > 0 && (
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5 border-t border-border pt-6">
                {badges.map((badge) => (
                  <li key={badge} className="flex items-center gap-2 text-sm text-muted">
                    <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2.5} />
                    {badge}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div
          className={`relative ${
            compact ? "h-64 overflow-hidden rounded-2xl sm:h-72" : "h-72 min-h-[320px] sm:h-96 lg:h-full lg:min-h-[560px]"
          }`}
        >
          <Image
            src={image}
            alt={imageAlt}
            fill
            className={`object-cover ${compact ? "" : "lg:rounded-l-[2rem]"}`}
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {floatingCard && !compact && (
            <div className="absolute bottom-6 left-6 max-w-[15rem] rounded-2xl border border-border bg-background/95 p-5 shadow-lg backdrop-blur-sm">
              <p className="text-xs font-medium uppercase tracking-[0.15em] text-accent">
                {floatingCard.title}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground">
                {floatingCard.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
