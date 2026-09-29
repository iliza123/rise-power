import Image from "next/image";

import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import type { MarketGalleryItem, MarketLayout } from "@/lib/markets";

import { SAGE, SectionEyebrow } from "./market-ui";

type MarketGallerySectionProps = {
  heading: { before: string; accent: string };
  items: readonly MarketGalleryItem[];
  variant?: MarketLayout;
};

/** Wave stagger — peaks on the ends (different from capabilities’ even/odd). */
function staggerOffset(index: number, total: number): string {
  if (total <= 1) return "";
  if (index === 0 || index === total - 1) return "xl:mt-0";
  if (index === 1 || index === total - 2) return "xl:mt-8";
  return "xl:mt-14";
}

function GalleryCard({
  item,
  index,
  total,
}: {
  item: MarketGalleryItem;
  index: number;
  total: number;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-xl bg-[#101713] aspect-[3/4] ${staggerOffset(index, total)}`}
    >
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 88vw"
        quality={90}
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        style={
          item.objectPosition
            ? { objectPosition: item.objectPosition }
            : undefined
        }
      />

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3.5 sm:p-4">
        <div className="translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:translate-y-0 group-focus-within:opacity-100">
          <p className="font-display text-[0.8125rem] font-bold tracking-[0.14em] text-white uppercase drop-shadow-[0_1px_6px_rgba(0,0,0,0.55)] sm:text-sm">
            {item.title}
          </p>
          {item.caption ? (
            <p className="mt-1 text-xs leading-snug text-white/95 drop-shadow-[0_1px_4px_rgba(0,0,0,0.45)] sm:text-[0.8125rem]">
              {item.caption}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

/**
 * Market “In Focus” — cream visual-proof strip with a wave stagger
 * (inspired by Capabilities Systems in Context, not a copy).
 */
export function MarketGallerySection({
  heading,
  items,
}: MarketGallerySectionProps) {
  if (items.length === 0) return null;

  const tiles = items.slice(0, 5);

  return (
    <section className="overflow-hidden bg-[#f3f0e8] pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-14 lg:pb-10">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal variant="up">
          <div className="mx-auto max-w-3xl text-center">
            <SectionEyebrow center>In Focus</SectionEyebrow>
            <h2 className="mt-4 type-section-h2">
              {heading.before}{" "}
              <span style={{ color: SAGE }}>{heading.accent}</span>
            </h2>
          </div>
        </Reveal>

        <Reveal variant="up" delay={80} className="mt-8 xl:hidden">
          <SnapCarousel
            ariaLabel="Market gallery"
            showArrows
            showDots
            itemClassName="w-[min(78vw,18rem)] sm:w-[min(55vw,20rem)] md:w-[min(42vw,22rem)]"
            trackClassName="gap-4 px-1 pb-1"
          >
            {tiles.map((item, index) => (
              <GalleryCard
                key={item.src}
                item={item}
                index={index}
                total={tiles.length}
              />
            ))}
          </SnapCarousel>
        </Reveal>

        <RevealStagger
          className="mt-10 hidden gap-4 xl:grid xl:grid-cols-5"
          step={70}
          variant="fade"
        >
          {tiles.map((item, index) => (
            <GalleryCard
              key={item.src}
              item={item}
              index={index}
              total={tiles.length}
            />
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
