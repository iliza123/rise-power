import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import type { MarketGalleryItem } from "@/lib/markets";

import { SAGE, SectionEyebrow } from "./market-ui";

type MarketGallerySectionProps = {
  heading: { before: string; accent: string };
  items: readonly MarketGalleryItem[];
};

function GalleryTile({
  item,
  className,
  sizes,
  quality = 88,
}: {
  item: MarketGalleryItem;
  className: string;
  sizes: string;
  quality?: number;
}) {
  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={sizes}
        quality={quality}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 sm:p-5 lg:p-6">
        <div className="translate-y-3 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <p
            className="font-display text-base font-bold tracking-[0.12em] text-white uppercase drop-shadow-[0_1px_8px_rgba(0,0,0,0.55)] sm:text-lg lg:text-xl"
          >
            {item.title}
          </p>
          {item.caption ? (
            <p className="mt-1.5 max-w-[22rem] text-sm leading-snug font-medium text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] sm:mt-2 sm:text-base">
              {item.caption}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/**
 * Luxury editorial gallery — image-led, minimal hover copy.
 * Lead tile + four tiles = clean 5-image mosaic.
 */
export function MarketGallerySection({
  heading,
  items,
}: MarketGallerySectionProps) {
  if (items.length === 0) return null;

  const [lead, ...rest] = items.slice(0, 5);

  return (
    <section className="overflow-hidden bg-[#0a0f10] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal variant="up">
          <SectionEyebrow light>In Focus</SectionEyebrow>
          <h2 className="mt-3 max-w-3xl font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
            {heading.before}{" "}
            <span style={{ color: SAGE }}>{heading.accent}</span>
          </h2>
        </Reveal>

        <div className="mt-7 grid grid-cols-1 gap-0.5 sm:mt-9 sm:grid-cols-2 sm:gap-1 lg:grid-cols-4 lg:auto-rows-[minmax(150px,1fr)] lg:gap-1">
          {lead ? (
            <Reveal
              variant="fade"
              delay={40}
              className="min-h-[260px] sm:col-span-2 sm:row-span-2 sm:min-h-[320px] lg:min-h-[340px]"
            >
              <GalleryTile
                item={lead}
                className="h-full min-h-[260px] sm:min-h-[320px] lg:min-h-[340px]"
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={92}
              />
            </Reveal>
          ) : null}

          {rest.map((item, index) => (
            <Reveal
              key={item.src}
              variant="fade"
              delay={80 + index * 55}
              className="min-h-[170px] sm:min-h-[190px] lg:min-h-[165px]"
            >
              <GalleryTile
                item={item}
                className="aspect-[4/3] h-full min-h-[170px] sm:aspect-auto sm:min-h-[190px] lg:min-h-[165px]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
