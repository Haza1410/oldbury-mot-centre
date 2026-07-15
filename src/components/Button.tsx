import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "accent";

interface ButtonProps extends React.ComponentProps<typeof Link> {
  variant?: ButtonVariant;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-foreground text-background border border-foreground hover:bg-foreground/90 shadow-sm hover:shadow-md",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-2",
  outline:
    "bg-transparent text-foreground border border-foreground/25 hover:border-foreground hover:bg-foreground/5",
  accent:
    "bg-accent text-white border border-accent hover:bg-accent/90 shadow-sm hover:shadow-md",
};

export function Button({
  variant = "primary",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-wide transition-all",
        variants[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
