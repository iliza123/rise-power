import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { MARKET_PRODUCT_CATALOG } from "@/lib/markets/product-catalog";
import type { MarketProductUsesSection } from "@/lib/markets";
import {
  MUTED,
  SAGE,
  SECTION_RULE,
  SectionEyebrow,
} from "./market-ui";

export type MarketProductUsesTone = "light" | "dark";

export type MarketProductUsesProps = {
  section: MarketProductUsesSection;
  tone?: MarketProductUsesTone;
  /** Consumer overview-style centered header. */
  headerAlign?: "standard" | "center";
};

/**
 * How Sentinel, Falcon, and Titan are used in this market —
 * shared across defense / commercial / consumer layouts.
 */
export function MarketProductUses({
  section,
  tone = "light",
  headerAlign = "standard",
}: MarketProductUsesProps) {
  const isDark = tone === "dark";
  const centered = headerAlign === "center";
  const gridBorder = isDark ? "rgba(255,255,255,0.15)" : SECTION_RULE;
  const imageWell = isDark ? "bg-[#141a18]" : "bg-[#eef1eb]";

  return (
    <section
      className={[
        "relative scroll-mt-28 border-t py-10 sm:py-12 lg:py-14",
        isDark ? "border-white/10 bg-[#0c1210]" : "border-[#e0e3dd] bg-[#fbfaf7]",
      ].join(" ")}
      aria-labelledby="market-product-uses-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal
          variant="up"
          className={centered ? "mx-auto max-w-3xl text-center" : "max-w-4xl"}
        >
          <div className={centered ? "flex justify-center" : undefined}>
            <SectionEyebrow light={isDark} center={centered}>
              {section.eyebrow}
            </SectionEyebrow>
          </div>

          <h2
            id="market-product-uses-heading"
            className={[
              "mt-3 font-display tracking-tight",
              centered
                ? "text-[1.65rem] leading-[1.18] font-semibold tracking-[-0.02em] normal-case sm:text-[2.05rem] lg:text-[2.4rem]"
                : "text-[1.75rem] leading-[0.95] font-bold uppercase sm:text-[2.25rem] lg:text-[2.75rem]",
              isDark ? "text-white" : "text-[#101820]",
            ].join(" ")}
          >
            <span className="block">{section.headingBefore}</span>
            <span className="mt-1 block" style={{ color: SAGE }}>
              {section.headingAccent}
            </span>
          </h2>

          <p
            className={[
              "mt-4 max-w-[42rem] text-base leading-[1.65] sm:text-lg",
              centered ? "mx-auto" : "",
            ].join(" ")}
            style={
              isDark
                ? { color: "rgba(255,255,255,0.78)" }
                : { color: MUTED }
            }
          >
            {section.intro}
          </p>
        </Reveal>

        {/* Desktop: ruled 3-column grid */}
        <div
          className="mt-8 hidden overflow-hidden border sm:mt-10 sm:grid sm:grid-cols-3 sm:divide-x"
          style={{ borderColor: gridBorder }}
        >
          {section.items.map((item, index) => {
            const product = MARKET_PRODUCT_CATALOG[item.slug];
            const imageSrc = item.imageSrc ?? product.imageSrc;
            const isScene = Boolean(item.imageSrc);

            return (
              <Reveal
                key={item.slug}
                variant="up"
                delay={index * 60}
                className="min-h-0"
              >
                <article className="flex h-full flex-col">
                  <Link
                    href={product.href}
                    className={[
                      "group relative block aspect-[4/3] overflow-hidden border-b",
                      imageWell,
                    ].join(" ")}
                    style={{ borderColor: gridBorder }}
                  >
                    <Image
                      src={imageSrc}
                      alt={product.imageAlt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className={
                        isScene
                          ? "object-cover transition-opacity group-hover:opacity-90"
                          : "object-contain p-4 transition-opacity group-hover:opacity-90 sm:p-5"
                      }
                    />
                  </Link>

                  <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">
                    <p
                      className="text-xs font-semibold tracking-[0.14em] uppercase sm:text-[0.8125rem]"
                      style={{ color: SAGE }}
                    >
                      {product.shortName}
                    </p>
                    <h3
                      className={[
                        "mt-2 font-display text-lg font-bold tracking-tight uppercase sm:text-xl",
                        isDark ? "text-white" : "text-[#101820]",
                      ].join(" ")}
                    >
                      {item.role}
                    </h3>
                    <p
                      className="mt-3 flex-1 text-base leading-[1.55]"
                      style={
                        isDark
                          ? { color: "rgba(255,255,255,0.78)" }
                          : { color: MUTED }
                      }
                    >
                      {item.body}
                    </p>
                    <div
                      className="mt-5 border-t pt-5"
                      style={{ borderColor: gridBorder }}
                    >
                      <Link
                        href={product.href}
                        className={[
                          "inline-flex min-h-11 w-full items-center justify-center gap-2 border px-3 text-sm font-semibold tracking-[0.06em] uppercase transition-colors",
                          isDark
                            ? "border-white/25 text-white hover:border-[#6e7f42] hover:text-[#6e7f42]"
                            : "border-[#d9dfe3] bg-white text-[#20251f] hover:border-[#6e7f42] hover:text-[#6e7f42]",
                        ].join(" ")}
                      >
                        View {product.shortName}
                        <ArrowRight className="size-4 shrink-0" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Mobile: stacked rows */}
        <ul className="mt-8 space-y-0 sm:hidden">
          {section.items.map((item, index) => {
            const product = MARKET_PRODUCT_CATALOG[item.slug];
            const imageSrc = item.imageSrc ?? product.imageSrc;
            const isScene = Boolean(item.imageSrc);

            return (
              <Reveal key={item.slug} variant="up" delay={index * 50} as="li">
                <div
                  className={[
                    "border-b py-6",
                    index === 0 ? "border-t" : "",
                  ].join(" ")}
                  style={{ borderColor: gridBorder }}
                >
                  <div className="grid grid-cols-[7.5rem_1fr] gap-4">
                    <Link
                      href={product.href}
                      className={[
                        "relative aspect-square overflow-hidden border",
                        imageWell,
                      ].join(" ")}
                      style={{ borderColor: gridBorder }}
                    >
                      <Image
                        src={imageSrc}
                        alt={product.imageAlt}
                        fill
                        sizes="120px"
                        className={
                          isScene ? "object-cover" : "object-contain p-2"
                        }
                      />
                    </Link>
                    <div className="min-w-0">
                      <p
                        className="text-xs font-semibold tracking-[0.14em] uppercase"
                        style={{ color: SAGE }}
                      >
                        {product.shortName}
                      </p>
                      <h3
                        className={[
                          "mt-1 font-display text-base font-bold tracking-tight uppercase",
                          isDark ? "text-white" : "text-[#101820]",
                        ].join(" ")}
                      >
                        {item.role}
                      </h3>
                      <p
                        className="mt-2 text-sm leading-[1.55]"
                        style={
                          isDark
                            ? { color: "rgba(255,255,255,0.78)" }
                            : { color: MUTED }
                        }
                      >
                        {item.body}
                      </p>
                      <Link
                        href={product.href}
                        className="mt-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.08em] uppercase"
                        style={{ color: isDark ? "#ffffff" : "#101820" }}
                      >
                        View product
                        <ArrowRight
                          className="size-3.5"
                          style={{ color: SAGE }}
                          aria-hidden
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
