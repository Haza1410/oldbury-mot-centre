import {
  Phone,
  Car,
  Search,
  Receipt,
  CircleCheck,
  Store,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  phone: Phone,
  car: Car,
  search: Search,
  receipt: Receipt,
  check: CircleCheck,
  store: Store,
};

interface Step {
  title: string;
  text: string;
  icon: string;
}

interface ProcessStepsProps {
  steps: Step[];
}

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => {
        const Icon = iconMap[step.icon] ?? Phone;
        return (
          <li key={step.title} className="relative flex flex-col">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-accent shadow-sm">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="font-serif text-2xl font-medium text-accent/40">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <h3 className="font-serif text-lg font-medium leading-snug">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
          </li>
        );
      })}
    </ol>
  );
}
