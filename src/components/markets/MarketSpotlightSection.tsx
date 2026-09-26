import Image from "next/image";
import {
  Clock3,
  Database,
  Leaf,
  Plane,
  VolumeX,
  type LucideIcon,
} from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import type { MarketSpotlight } from "@/lib/markets";
import { SAGE } from "./market-ui";

const FEATURE_ICONS: LucideIcon[] = [
  VolumeX,
  Leaf,
  Database,
  Clock3,
  Plane,
];

type MarketSpotlightSectionProps = {
  spotlight: MarketSpotlight;
};

/**
 * Use-cases-style spotlight — same layout on all market pages:
 * white feature card (left) + large photo (right).
 */
export function MarketSpotlightSection({
  spotlight,
}: MarketSpotlightSectionProps) {
  return (
    <section className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto grid max-w-[1440px] items-stretch gap-5 px-6 lg:grid-cols-[0.92fr_1fr] lg:gap-8 lg:px-10">
        {/* Content card — always left on desktop */}
        <Reveal
          variant="left"
          className="flex h-full rounded-xl border border-[#e0e3dd] bg-white"
        >
          <div className="flex h-full w-full flex-col p-7 sm:p-9 lg:p-11">
            <h2 className="font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight text-[#101820] uppercase sm:text-[2.25rem] lg:text-[2.5rem]">
              <span className="block text-[#101820]">
                {spotlight.headingBefore}
              </span>
              <span className="mt-1 block" style={{ color: SAGE }}>
                {spotlight.headingAccent}
              </span>
            </h2>

            <p className="mt-4 text-base leading-[1.65] text-[#646c65] sm:text-[1.0625rem]">
              {spotlight.body}
            </p>

            <div className="mt-7 grid border-y border-[#e1e3de] sm:grid-cols-2">
              {spotlight.features.map((feature, index) => {
                const Icon = FEATURE_ICONS[index % FEATURE_ICONS.length];
                const isLast = index === spotlight.features.length - 1;
                const isOddLast =
                  spotlight.features.length % 2 === 1 && isLast;

                return (
                  <div
                    key={feature}
                    className={[
                      "flex items-center gap-4 py-5",
                      !isLast ? "border-b border-[#e1e3de]" : "",
                      index % 2 === 0 && index < spotlight.features.length - 1
                        ? "sm:border-r sm:border-[#e1e3de] sm:pr-4"
                        : "",
                      index % 2 === 1 ? "sm:pl-4" : "",
                      isOddLast ? "sm:col-span-2" : "",
                    ].join(" ")}
                  >
                    <Icon
                      className="size-8 shrink-0"
                      strokeWidth={1.5}
                      style={{ color: SAGE }}
                    />
                    <span className="text-base leading-snug text-[#303630]">
                      {feature}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Temporarily hidden: Featured Products CTAs */}
            {/* <div className="mt-auto border-t border-[#e1e3de] pt-7">
              <p className="text-center text-sm font-semibold tracking-[0.16em] text-[#8a9089] uppercase sm:text-base">
                Featured Products
              </p>
              <div className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {spotlight.featuredProducts.map((product) => (
                  <Link
                    key={product.href}
                    href={product.href}
                    className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-sm border border-[#d9dfe3] bg-[#fbfaf7] px-3 text-sm font-semibold tracking-[0.06em] text-[#20251f] uppercase transition-colors hover:border-[#6e7f42] hover:bg-white hover:text-[#6e7f42]"
                  >
                    {product.label}
                    <ArrowRight className="size-4 shrink-0" aria-hidden />
                  </Link>
                ))}
              </div>
            </div> */}
          </div>
        </Reveal>

        {/* Photo — always right on desktop */}
        <Reveal variant="right" delay={80} className="min-h-0">
          <div className="relative h-full min-h-[280px] overflow-hidden rounded-xl bg-[#dfe4dc] sm:min-h-[360px] lg:min-h-full lg:aspect-auto">
            <Image
              src={spotlight.imageSrc}
              alt={spotlight.imageAlt}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
