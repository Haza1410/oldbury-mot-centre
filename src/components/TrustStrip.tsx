import {
  ShieldCheck,
  Car,
  Wrench,
  MapPin,
  Smile,
  Store,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  car: Car,
  wrench: Wrench,
  map: MapPin,
  smile: Smile,
  store: Store,
};

interface TrustItem {
  label: string;
  icon: string;
}

interface TrustStripProps {
  items: TrustItem[];
}

export function TrustStrip({ items }: TrustStripProps) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => {
        const Icon = iconMap[item.icon] ?? ShieldCheck;
        return (
          <li
            key={item.label}
            className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-4 text-sm font-medium text-foreground shadow-sm"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
              <Icon className="h-4 w-4" strokeWidth={2} />
            </span>
            {item.label}
          </li>
        );
      })}
    </ul>
  );
}
