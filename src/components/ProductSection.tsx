import Image from "next/image";
import { Check } from "lucide-react";

interface ProductSectionProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  reversed?: boolean;
}

export function ProductSection({
  title,
  description,
  features,
  image,
  reversed = false,
}: ProductSectionProps) {
  return (
    <div
      className={`grid items-center gap-12 lg:grid-cols-2 ${
        reversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <div>
        <span className="rule-accent mb-5" />
        <h3 className="font-serif text-3xl font-medium">{title}</h3>
        <p className="mt-4 leading-relaxed text-muted">{description}</p>
        <ul className="mt-6 space-y-3">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-3 text-sm">
              <Check className="h-4 w-4 shrink-0 text-accent" strokeWidth={2} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
