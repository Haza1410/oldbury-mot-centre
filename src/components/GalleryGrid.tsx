import Image from "next/image";
import { withBasePath } from "@/lib/utils";

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.src}
          className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border shadow-sm"
        >
          <Image
            src={withBasePath(image.src)}
            alt={image.alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-foreground/0 transition-colors group-hover:bg-foreground/15" />
          <span className="absolute bottom-4 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium uppercase tracking-wider text-foreground backdrop-blur-sm">
            {image.category}
          </span>
        </div>
      ))}
    </div>
  );
}
