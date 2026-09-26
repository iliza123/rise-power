import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { threeMarkets } from "@/lib/home-content";
import { marketDetails } from "@/lib/markets";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Markets",
  description:
    "Hydrogen power for military & defence, commercial, and consumer applications. Rise Mission Power systems for every mission.",
  path: "/markets",
});

const SAGE = "#6e7f42";
const SAGE_CTA = "#849363";
const MUTED = "#66717d";
const CREAM = "#fbfaf7";

function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  const color = light ? "#ffffff" : SAGE;

  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="relative block h-[13px] w-[38px]">
        <span
          className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: color }}
        />
        <span
          className="absolute top-1/2 left-0 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-b border-l"
          style={{ borderColor: color }}
        />
      </span>
      <p
        className="text-base font-semibold tracking-[0.14em] uppercase sm:text-[0.9375rem]"
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

export default function MarketsPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        layout="split"
        imageSrc="/media/markets/defense-military.png"
        imageAlt="Rise Mission Power across defense, commercial, and consumer markets"
        imageClassName="object-cover object-[center_45%]"
        imageWidth={3840}
        imageHeight={1300}
        tone="#0a0f10"
        splitWash="linear-gradient(90deg, #0a0f10 0%, #0a0f10 44%, rgba(10,15,16,0.82) 52%, rgba(10,15,16,0.35) 62%, transparent 74%)"
      >
        <div className="hero-animate-copy w-full text-left">
          <SectionEyebrow light>Markets</SectionEyebrow>

          <h1 className="mt-4 type-page-h1 text-white [text-shadow:none] sm:mt-5">
            {threeMarkets.headingBefore}{" "}
            <span style={{ color: SAGE }}>{threeMarkets.headingAccent}</span>
          </h1>

          <p className="type-section-body mt-5 max-w-[32rem] !text-white/90 sm:mt-6">
            {threeMarkets.body}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
              style={{ background: SAGE_CTA }}
            >
              Request a Briefing
              <ArrowRight className="size-5 shrink-0" aria-hidden />
            </Link>
            <Link
              href="#markets"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Explore Markets
            </Link>
          </div>
        </div>
      </StackedPageHero>

      <section
        id="markets"
        className="scroll-mt-28 py-10 sm:py-12 lg:py-14"
        style={{ background: CREAM }}
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>{threeMarkets.eyebrow}</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              Choose Your <span style={{ color: SAGE }}>Theater.</span>
            </h2>
            <p
              className="mt-4 max-w-[42rem] text-[1.0625rem] leading-[1.65] sm:text-lg"
              style={{ color: MUTED }}
            >
              Three markets. One cartridge ecosystem. Select a market to see
              applications, recommended systems, and how Rise Mission Power
              performs in the field.
            </p>
          </Reveal>

          <RevealStagger
            className="mt-8 grid gap-6 sm:mt-10 md:grid-cols-3 md:gap-5 lg:gap-6"
            step={80}
            variant="up"
          >
            {marketDetails.map((market) => (
              <Link
                key={market.slug}
                href={market.href}
                className="group block h-full"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                  <Image
                    src={market.images.hero.src}
                    alt={market.images.hero.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f10]/70 via-transparent to-transparent" />
                  <p className="absolute bottom-3 left-3 font-display text-sm font-bold tracking-[0.18em] text-white uppercase">
                    {market.label}
                  </p>
                </div>

                <h3 className="mt-4 font-display text-xl leading-[1.05] font-bold tracking-tight text-[#101820] uppercase transition-colors group-hover:text-[#6e7f42] sm:text-2xl">
                  {market.title}
                </h3>

                <p
                  className="type-card-body mt-2 line-clamp-3"
                  style={{ color: MUTED }}
                >
                  {market.heroBody}
                </p>

                <span
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase"
                  style={{ color: SAGE }}
                >
                  Explore Solutions
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
