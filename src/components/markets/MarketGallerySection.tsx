import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import type { MarketMedia } from "@/lib/markets";

import { SAGE, SectionEyebrow } from "./market-ui";

type MarketGallerySectionProps = {
  heading: { before: string; accent: string };
  items: readonly MarketMedia[];
};

/**
 * Luxury editorial gallery — image-led, minimal copy.
 * Asymmetric mosaic: lead tile spans 2×2, remaining tiles fill the grid.
 */
export function MarketGallerySection({
  heading,
  items,
}: MarketGallerySectionProps) {
  if (items.length === 0) return null;

  const [lead, ...rest] = items;

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

        <div className="mt-7 grid grid-cols-1 gap-2.5 sm:mt-9 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:auto-rows-[minmax(150px,1fr)] lg:gap-3">
          {lead ? (
            <Reveal
              variant="fade"
              delay={40}
              className="relative min-h-[260px] overflow-hidden sm:col-span-2 sm:row-span-2 sm:min-h-[320px] lg:min-h-[340px]"
            >
              <Image
                src={lead.src}
                alt={lead.alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                quality={92}
              />
            </Reveal>
          ) : null}

          {rest.map((item, index) => (
            <Reveal
              key={item.src}
              variant="fade"
              delay={80 + index * 55}
              className="relative aspect-[4/3] min-h-[170px] overflow-hidden sm:aspect-auto sm:min-h-[190px] lg:min-h-[165px]"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out hover:scale-[1.04]"
                quality={88}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
