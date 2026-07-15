import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  href: string;
  image: string;
  tag?: string;
}

export function CategoryCard({ title, description, href, image, tag }: CategoryCardProps) {
  return (
    <Link
      href={href}
      className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-border shadow-sm transition-shadow duration-300 hover:shadow-lg"
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent" />

      {tag && (
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[0.7rem] font-medium uppercase tracking-wider text-foreground backdrop-blur-sm">
          {tag}
        </span>
      )}

      <div className="relative p-6 text-background">
        <h3 className="font-serif text-2xl font-medium">{title}</h3>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-background/85">{description}</p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-brand">
          Browse {title.toLowerCase()}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
