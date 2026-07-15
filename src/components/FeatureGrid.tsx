import {
  ShieldCheck,
  Wrench,
  Car,
  BadgePoundSterling,
  Heart,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  wrench: Wrench,
  car: Car,
  pound: BadgePoundSterling,
  heart: Heart,
  lightbulb: Lightbulb,
  "badge-pound": BadgePoundSterling,
};

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface FeatureGridProps {
  features: Feature[];
  columns?: 2 | 3;
}

export function FeatureGrid({ features, columns = 3 }: FeatureGridProps) {
  return (
    <div
      className={`grid gap-8 ${
        columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2"
      }`}
    >
      {features.map((feature) => {
        const Icon = iconMap[feature.icon] ?? ShieldCheck;
        return (
          <div
            key={feature.title}
            className="rounded-2xl border border-border bg-background p-7 shadow-sm"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <h3 className="mt-5 font-serif text-xl font-medium">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
}
