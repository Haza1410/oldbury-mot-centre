import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
}

export function Logo({ variant = "light", className }: LogoProps) {
  const text = variant === "light" ? "#111111" : "#FFFFFF";

  return (
    <svg
      viewBox="0 0 820 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Oldbury MOT Centre"
      className={cn("block h-full w-auto", className)}
    >
      <text
        x="410"
        y="96"
        textAnchor="middle"
        fill={text}
        style={{
          fontFamily: "var(--font-logo), 'Nunito', sans-serif",
          fontSize: "84px",
          fontWeight: 700,
          letterSpacing: "0.01em",
        }}
      >
        OLDBURY
      </text>

      <text
        x="410"
        y="150"
        textAnchor="middle"
        fill={text}
        style={{
          fontFamily: "var(--font-logo), 'Nunito', sans-serif",
          fontSize: "29px",
          fontWeight: 400,
          letterSpacing: "0.44em",
        }}
      >
        MOT CENTRE
      </text>

      <rect x="150" y="166" width="520" height="3" fill={text} rx="1.5" />
    </svg>
  );
}
