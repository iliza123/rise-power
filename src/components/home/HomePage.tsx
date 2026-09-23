import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  ArrowRight,
  ChevronDown,
  Crosshair,
  Leaf,
  Mouse,
  Play,
  Shield,
  AudioLines,
  Volume2,
  Weight,
} from "lucide-react";
import {
  featuredProducts,
  hero,
  heroImageSrc,
  performanceMetrics,
  threeMarkets,
} from "@/lib/home-content";
import { standards } from "@/lib/content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { FeaturedProductRow } from "./FeaturedProductRow";
import { HowItWorks } from "./HowItWorks";
import { WhyHydrogen } from "./WhyHydrogen";
import { MarketsShowcase } from "./MarketsShowcase";
import { PerformanceMetricCard } from "./PerformanceMetricCard";
import { SectionSkeleton } from "./SectionSkeleton";
import { SnapCarousel } from "./SnapCarousel";

const CustomersPartners = dynamic(
  () => import("./CustomersPartners").then((m) => m.CustomersPartners),
  {
    ssr: true,
    loading: () => <SectionSkeleton tone="cream" className="min-h-[32rem]" />,
  },
);

const BusinessesCompanies = dynamic(
  () => import("./BusinessesCompanies").then((m) => m.BusinessesCompanies),
  {
    ssr: true,
    loading: () => <SectionSkeleton tone="cream" className="min-h-[28rem]" />,
  },
);



const sage = "#6e7f42";
/** Hero accent from Frame 1 reference (slightly brighter olive). */
const heroSage = "#849363";

const gaugeIcons = [AudioLines, Leaf, Crosshair, Weight] as const;
const heroChipIcons = [Leaf, Crosshair, Volume2, Shield] as const;

/** Shared page inset + vertical rhythm (content sections — not hero). */
const pageInset = "mx-auto w-full max-w-[1760px] px-6 lg:px-10";
const sectionY = "py-14 sm:py-18 lg:py-20";

export function HomePage() {
  return (
    <div className="flex w-full flex-col overflow-x-clip bg-[#f3f0e8] text-[#1a1c16]">
      {/* 1. HERO — image above / copy below below xl; full-bleed overlay on xl+ */}
      <section
        id="hero"
        className="relative flex w-full flex-col overflow-hidden bg-[#060806] text-white xl:min-h-[max(100svh,780px)]"
      >
        <div className="relative aspect-[5/4] w-full shrink-0 sm:aspect-[16/10] lg:aspect-[21/9] xl:absolute xl:inset-0 xl:aspect-auto">
          <Image
            src={heroImageSrc}
            alt="Rise Power tactical field deployment"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="hero-animate-media object-cover object-[58%_center]"
          />
          {/* Overlays only when copy sits on the photo (xl+) */}
          <div className="pointer-events-none absolute inset-0 hidden xl:block">
            <div className="absolute inset-0 bg-gradient-to-r from-[#060806]/95 via-[#060806]/35 to-transparent xl:w-[60%]" />
            <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#060806]/45 via-transparent to-transparent" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060806]/25 to-transparent" />
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-6 pt-8 pb-14 sm:pt-10 sm:pb-16 lg:px-10 xl:pt-32 xl:pb-14">
          <div className="flex flex-col justify-center xl:pt-10">
            <div className="hero-animate-copy max-w-xl lg:max-w-3xl xl:max-w-4xl [&_p]:!text-white">
              <p className="type-eyebrow text-white">
                {hero.eyebrow}
              </p>
              <h1 className="mt-5 type-page-h1">
                {hero.headlineLine1}
                <br />
                <span style={{ color: sage }}>{hero.headlineLine2}</span>
              </h1>
              <p className="type-section-body mt-6 max-w-md !text-white">
                {hero.body}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={hero.primaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2.5 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-90 rounded-sm"
                  style={{ background: heroSage }}
                >
                  <span className="grid size-5 place-items-center rounded-full border border-white/80">
                    <Play className="size-2.5 fill-current" />
                  </span>
                  {hero.primaryCta.label}
                </Link>
                <Link
                  href={hero.secondaryCta.href}
                  className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/75 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors hover:bg-white/10 rounded-sm"
                >
                  {hero.secondaryCta.label}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-animate-chips mt-16 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-5 sm:mt-20 sm:grid-cols-4 sm:gap-x-8 lg:mt-24 lg:pb-2">
            {hero.chips.map((chip, index) => {
              const Icon = heroChipIcons[index] ?? Leaf;
              return (
                <div key={chip.title} className="flex items-center gap-3">
                  <div className="flex size-13 shrink-0 items-center justify-center rounded-full border border-[#849363]">
                    <Icon
                      className="mt-0.5 size-8 shrink-0"
                      strokeWidth={1.6}
                      style={{ color: heroSage }}
                    />
                  </div>
                  <div>
                    <p className="font-display text-xs font-bold tracking-[0.08em] text-white uppercase sm:text-sm">
                      {chip.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-snug text-white sm:text-sm">
                      {chip.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <a
          href="#performance-metrics"
          className="absolute bottom-3 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-1 text-white/75 transition-colors hover:text-white xl:flex"
          aria-label="Scroll to next section"
        >
          <Mouse className="size-5" strokeWidth={1.4} />
          <ChevronDown className="size-3.5 animate-bounce" strokeWidth={1.6} />
        </a>
      </section>

      {/* Standards strip — auto-scroll marquee */}
      {/* <section
        aria-label="Engineered to standards"
        className="border-y border-[#e4e6e0] bg-[#f3f1eb]"
      >
        <div className={`${pageInset} py-5 sm:py-6`}>
          <div className="standards-marquee min-w-0">
            <ul className="standards-marquee__track items-center gap-x-10">
              {[...standards, ...standards].map((label, index) => (
                <li
                  key={`${label}-${index}`}
                  className="shrink-0 text-xs font-semibold tracking-[0.12em] text-[#252925] uppercase sm:text-[13px]"
                >
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section> */}

      {/* 2. Performance Metrics — Built to Outperform */}
      <section
        id="performance-metrics"
        className="scroll-mt-28 py-7 sm:py-8 lg:py-9"
        style={{ background: "#fafaf8" }}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <p
              className="type-eyebrow text-center text-[14px] sm:text-[15px]"
              style={{ color: "#6e7f42" }}
            >
              {performanceMetrics.eyebrow}
            </p>
            <h2 className="type-section-h2 mt-2 text-center sm:mt-2.5">
              {performanceMetrics.headingBefore}{" "}
              <span style={{ color: "#6e7f42" }}>
                {performanceMetrics.headingAccent}
              </span>
            </h2>
            <p className="type-section-body mx-auto mt-2 max-w-2xl text-center text-[1.0625rem] sm:mt-2.5 sm:text-[1.2rem]">
              {performanceMetrics.body}
            </p>
          </Reveal>
          <RevealStagger
            className="mx-auto mt-5 grid w-full max-w-5xl grid-cols-1 items-stretch gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-3.5 xl:mt-7 xl:max-w-none xl:grid-cols-4 xl:gap-4"
            step={70}
          >
            {performanceMetrics.gauges.map((item, index) => {
              const Icon = gaugeIcons[index] ?? Crosshair;
              return (
                <PerformanceMetricCard
                  key={item.title}
                  icon={Icon}
                  value={item.value}
                  unit={item.unit}
                  title={item.title}
                  body={item.body}
                  percent={item.percent}
                />
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* 3. Three Markets — standard image-led panels */}
      <section
        id="three-markets"
        className={`scroll-mt-28 bg-[#f3f0e8] ${sectionY}`}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <header className="max-w-3xl">
              <p
                className="type-eyebrow"
                style={{ color: sage }}
              >
                {threeMarkets.eyebrow}
              </p>
              <h2 className="type-section-h2 mt-3 text-[#1a1c16]">
                {threeMarkets.headingBefore}{" "}
                <span style={{ color: sage }}>
                  {threeMarkets.headingAccent}
                </span>
              </h2>
              <p className="type-section-body mt-4 max-w-xl">
                {threeMarkets.body}
              </p>
            </header>
          </Reveal>

          <MarketsShowcase />
        </div>
      </section>

      <HowItWorks />
      <WhyHydrogen />

      {/* 5. Featured Products — snap carousel on mobile, grid on desktop */}
      <section
        id="featured-products"
        className="scroll-mt-28 py-14 sm:py-16 lg:py-20"
        style={{ background: "#f3f0e8" }}
      >
        <div className={pageInset}>
          <Reveal variant="up">
            <header className="mx-auto max-w-3xl text-center">
              <p
                className="type-eyebrow"
                style={{ color: sage }}
              >
                {featuredProducts.eyebrow}
              </p>
              <h2 className="type-section-h2 mt-4 text-[#1a1c16]">
                {featuredProducts.headingBefore}{" "}
                <span style={{ color: sage }}>
                  {featuredProducts.headingAccent}
                </span>
              </h2>
              <p className="type-section-body mx-auto mt-5 max-w-xl">
                {featuredProducts.body}
              </p>
            </header>
          </Reveal>

          <div className="mt-10 sm:mt-12 xl:hidden">
            <SnapCarousel
              ariaLabel="Featured products"
              showArrows
              showDots
              loop
              autoPlayMs={5500}
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {featuredProducts.products.map((product) => (
                <FeaturedProductRow key={product.name} {...product} />
              ))}
            </SnapCarousel>
          </div>

          <RevealStagger
            className="mt-10 hidden items-stretch gap-4 sm:mt-12 xl:grid xl:grid-cols-2 xl:gap-5 2xl:grid-cols-4"
            step={70}
            variant="fade"
          >
            {featuredProducts.products.map((product) => (
              <FeaturedProductRow key={product.name} {...product} />
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* 6. Customers & Partners */}
      <div className="cv-auto">
        <CustomersPartners />
      </div>

      {/* 8. Businesses & Companies */}
      <BusinessesCompanies />
    </div>
  );
}
