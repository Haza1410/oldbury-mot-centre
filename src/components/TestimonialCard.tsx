import { Star, MapPin, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  rating: number;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <blockquote className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 shadow-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-accent text-accent" />
          ))}
        </div>
        <Quote className="h-6 w-6 text-accent-soft" fill="currentColor" />
      </div>
      <p className="mt-5 flex-1 leading-relaxed text-foreground/80">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <footer className="mt-6 flex items-center gap-3 border-t border-border pt-5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 font-serif text-lg font-medium text-foreground">
          {testimonial.name.charAt(0)}
        </span>
        <cite className="not-italic">
          <span className="block text-sm font-medium text-foreground">{testimonial.name}</span>
          <span className="flex items-center gap-1 text-xs text-muted">
            <MapPin className="h-3 w-3" />
            {testimonial.location}
          </span>
        </cite>
      </footer>
    </blockquote>
  );
}
