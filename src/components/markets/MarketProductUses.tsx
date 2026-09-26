import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { SnapCarousel } from "@/components/home/SnapCarousel";
import { MARKET_PRODUCT_CATALOG } from "@/lib/markets/product-catalog";
import type {
  MarketProductUseEntry,
  MarketProductUsesSection,
} from "@/lib/markets";
import { MUTED, SAGE, SectionEyebrow } from "./market-ui";

export type MarketProductUsesTone = "light" | "dark";

export type MarketProductUsesProps = {
  section: MarketProductUsesSection;
  tone?: MarketProductUsesTone;
  /** Consumer overview-style centered header. */
  headerAlign?: "standard" | "center";
};

function ProductUseCard({
  item,
  index,
  isDark,
  sizes,
}: {
  item: MarketProductUseEntry;
  index: number;
  isDark: boolean;
  sizes: string;
}) {
  const product = MARKET_PRODUCT_CATALOG[item.slug];
  const imageSrc = item.imageSrc ?? product.imageSrc;
  const indexLabel = String(index + 1).padStart(2, "0");

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={product.href}
        className="relative block aspect-[771/650] w-full overflow-hidden"
      >
        <Image
          src={imageSrc}
          alt={product.imageAlt}
          fill
          sizes={sizes}
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col pt-4 sm:pt-6">
        <div className="flex items-baseline justify-between gap-3">
          <p
            className="text-xs font-semibold tracking-[0.18em] uppercase"
            style={{ color: SAGE }}
          >
            {product.shortName}
          </p>
          <p
            className="font-display text-xs font-semibold tracking-[0.16em] uppercase"
            style={{
              color: isDark ? "rgba(255,255,255,0.35)" : "#a3a89c",
            }}
          >
            {indexLabel}
          </p>
        </div>
        <h3
          className={[
            "mt-2 font-display text-lg font-bold tracking-tight uppercase sm:mt-2.5 sm:text-xl lg:text-[1.35rem]",
            isDark ? "text-white" : "text-[#141914]",
          ].join(" ")}
        >
          {item.role}
        </h3>
        <p
          className="mt-2.5 flex-1 text-sm leading-[1.65] sm:mt-3 sm:text-[0.975rem] lg:text-base"
          style={
            isDark ? { color: "rgba(255,255,255,0.68)" } : { color: MUTED }
          }
        >
          {item.body}
        </p>
        <Link
          href={product.href}
          className={[
            "mt-5 inline-flex items-center gap-2.5 self-start border-b pb-1 text-xs font-semibold tracking-[0.12em] uppercase transition-colors sm:mt-6 sm:text-sm",
            isDark
              ? "border-white/25 text-white hover:border-[#6e7f42] hover:text-[#849363]"
              : "border-[#c5c9bc] text-[#1a1f1a] hover:border-[#6e7f42] hover:text-[#6e7f42]",
          ].join(" ")}
        >
          Explore {product.shortName}
          <ArrowRight
            className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            style={{ color: SAGE }}
            aria-hidden
          />
        </Link>
      </div>
    </article>
  );
}

/**
 * How Sentinel, Falcon, and Titan are used in this market —
 * shared across defense / commercial / consumer layouts.
 * Elevated editorial presentation with image-true frames.
 */
export function MarketProductUses({
  section,
  tone = "light",
  headerAlign = "standard",
}: MarketProductUsesProps) {
  const isDark = tone === "dark";
  const centered = headerAlign === "center";

  return (
    <section
      className={[
        "relative scroll-mt-28 overflow-hidden py-14 sm:py-16 lg:py-20 xl:py-24",
        isDark ? "bg-[#0a0f10]" : "",
      ].join(" ")}
      aria-labelledby="market-product-uses-heading"
    >
      {!isDark ? (
        <>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(165deg, #f3f1ea 0%, #faf9f5 45%, #eef0e8 100%)",
            }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute top-0 right-0 h-[28rem] w-[28rem] translate-x-1/4 -translate-y-1/4 rounded-full blur-3xl"
            style={{ background: `${SAGE}12` }}
          />
        </>
      ) : (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 80% 0%, rgba(110,127,66,0.18), transparent 60%)",
          }}
        />
      )}

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal
          variant="up"
          className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
        >
          <div className={centered ? "flex justify-center" : undefined}>
            <SectionEyebrow light={isDark} center={centered}>
              {section.eyebrow}
            </SectionEyebrow>
          </div>

          <h2
            id="market-product-uses-heading"
            className={[
              "mt-5 font-display tracking-tight",
              centered
                ? "text-[1.65rem] leading-[1.15] font-semibold tracking-[-0.02em] normal-case sm:text-[2.1rem] lg:text-[2.5rem]"
                : "text-[1.85rem] leading-[0.98] font-bold uppercase sm:text-[2.35rem] lg:text-[2.85rem]",
              isDark ? "text-white" : "text-[#141914]",
            ].join(" ")}
          >
            <span className="block">{section.headingBefore}</span>
            <span className="mt-1.5 block" style={{ color: SAGE }}>
              {section.headingAccent}
            </span>
          </h2>

          <p
            className={[
              "mt-5 max-w-[36rem] text-base leading-[1.75] sm:text-[1.0625rem]",
              centered ? "mx-auto" : "",
            ].join(" ")}
            style={
              isDark
                ? { color: "rgba(255,255,255,0.72)" }
                : { color: MUTED }
            }
          >
            {section.intro}
          </p>

          <div
            aria-hidden
            className={[
              "mt-8 h-px w-16 sm:mt-10",
              centered ? "mx-auto" : "",
            ].join(" ")}
            style={{ background: isDark ? "rgba(255,255,255,0.2)" : `${SAGE}55` }}
          />
        </Reveal>

        {/* Mobile / tablet — snap slider with dots + arrows */}
        <div className="mt-12 lg:hidden">
          <SnapCarousel
            ariaLabel={`${section.headingBefore} ${section.headingAccent}`}
            showArrows
            showDots
            arrowPlacement="bottom"
            loop
            itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
            trackClassName="gap-4 px-1 pb-1"
          >
            {section.items.map((item, index) => (
              <ProductUseCard
                key={item.slug}
                item={item}
                index={index}
                isDark={isDark}
                sizes="(max-width: 1023px) 88vw, 30vw"
              />
            ))}
          </SnapCarousel>
        </div>

        {/* Desktop — three-up grid */}
        <div className="mt-16 hidden gap-8 lg:grid lg:grid-cols-3 xl:gap-10">
          {section.items.map((item, index) => (
            <Reveal
              key={item.slug}
              variant="up"
              delay={index * 80}
              className="min-h-0"
            >
              <ProductUseCard
                item={item}
                index={index}
                isDark={isDark}
                sizes="30vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
