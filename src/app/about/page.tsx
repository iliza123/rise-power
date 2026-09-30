import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  AudioLines,
  Check,
  Crosshair,
  Leaf,
  Weight,
} from "lucide-react";

import { PerformanceMetricCard } from "@/components/home/PerformanceMetricCard";
import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { CartridgeEcosystem } from "@/components/CartridgeEcosystem";
import { StackedPageHero } from "@/components/StackedPageHero";
import { performanceMetrics } from "@/lib/home-content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Rise Power builds quiet, zero-emission hydrogen systems for municipal, emergency, field, and off-grid use — engineered in British Columbia.",
  path: "/about",
});

const sage = "#6e7f42";
const performanceGaugeIcons = [AudioLines, Leaf, Crosshair, Weight] as const;

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

const technologyChecklist = [
  "Plug & Play Cartridge Interface",
  "Modular & Scalable Architecture",
  "Advanced Fuel Cell Technology",
  "Built for Extreme Conditions",
] as const;

const values = [
  {
    number: "01",
    title: "Everyday\nResilience",
    description:
      "Portable hydrogen power engineered for backup, outdoor, and off-grid use when the grid cannot be trusted.",
    image: "/media/company/company-value-1.png",
  },
  {
    number: "02",
    title: "Safety\nEngineered In",
    description:
      "Pressure vessels, leak detection, and thermal management are designed in from day one.",
    image: "/media/company/company-value-2.png",
  },
  {
    number: "03",
    title: "Canadian\nManufacturing",
    description:
      "Engineered and built in British Columbia for quiet, reliable, rapidly deployable operations.",
    image: "/media/company/company-value-3.png",
  },
  {
    number: "04",
    title: "Clean &\nSustainable",
    description:
      "Zero-emissions at the point of use. Refillable cartridges and long service life reduce waste.",
    image: "/media/company/company-value-4.png",
  },
];

/* -------------------------------------------------------------------------- */
/* DECORATIVE CONTOUR LINES                                                   */
/* -------------------------------------------------------------------------- */

function ContourDecoration({
  position = "left",
}: {
  position?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute ${
        position === "left" ? "-left-24 -top-8" : "-right-24 -top-8"
      } h-[280px] w-[440px] opacity-70`}
    >
      <svg viewBox="0 0 440 330" className="h-full w-full" fill="none">
        <path
          d="M-20 35C55 80 85 0 165 28C240 55 275 4 350 36C405 60 430 40 465 15"
          stroke="#e2e7e1"
          strokeWidth="1"
        />
        <path
          d="M-25 65C45 108 88 25 164 57C238 88 284 29 354 65C405 91 432 70 465 45"
          stroke="#e5e9e5"
          strokeWidth="1"
        />
        <path
          d="M-25 95C42 137 91 54 164 87C237 119 288 59 355 94C405 121 433 101 465 75"
          stroke="#e8ece8"
          strokeWidth="1"
        />
        <path
          d="M-25 125C43 167 92 84 165 117C238 150 287 90 356 124C406 151 434 131 465 105"
          stroke="#ebeeeb"
          strokeWidth="1"
        />
        <path
          d="M-25 155C42 197 93 114 165 147C238 180 288 120 357 154C406 181 434 161 465 135"
          stroke="#edf0ed"
          strokeWidth="1"
        />
        <path
          d="M-25 185C42 227 94 144 166 177C238 210 288 150 357 184C406 211 434 191 465 165"
          stroke="#eff2ef"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* SECTION EYEBROW                                                            */
/* -------------------------------------------------------------------------- */

function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  const color = light ? "#ffffff" : sage;

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
        className={`text-base font-semibold tracking-[0.14em] uppercase sm:text-[0.9375rem] ${light ? "text-white" : ""}`}
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

function ValueCard({ value }: { value: (typeof values)[number] }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white">
      <div className="flex flex-1 flex-col px-4 pt-4 sm:px-5 sm:pt-5">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-[30px] font-bold leading-none"
            style={{ color: sage }}
          >
            {value.number}
          </span>

          <span className="h-px w-14 bg-[#aeb6bd]" aria-hidden="true" />
        </div>

        <h3 className="mt-4 min-h-[2.1em] whitespace-pre-line font-display text-[26px] leading-[1.05] font-bold tracking-tight uppercase sm:text-[28px]">
          {value.title}
        </h3>

        <p className="mt-3 flex-1 text-base leading-[1.5] text-[#66717d]">
          {value.description}
        </p>
      </div>

      <div className="relative mt-5 aspect-[1.45/1] w-full shrink-0 overflow-hidden">
        <Image
          src={value.image}
          alt={value.title.replace(/\n/g, " ")}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 88vw"
          className="object-cover"
        />
      </div>
    </article>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        layout="split"
        imageSrc="/media/company/company-hero.png"
        mobileImageSrc="/media/company/company-hero-mobile.png"
        imageAlt="Soldier with a drone in mountain terrain"
        imageWidth={1920}
        imageHeight={650}
        tone="#0a0f10"
        splitWash="linear-gradient(90deg, #0a0f10 0%, #0a0f10 44%, rgba(10,15,16,0.82) 52%, rgba(10,15,16,0.35) 62%, transparent 74%)"
      >
        <div className="hero-animate-copy w-full text-left">
          <SectionEyebrow light>About</SectionEyebrow>

          <h1 className="mt-6 type-page-h1">
            Canadian
            <br />
            Engineered.
            <br />
            <span style={{ color: sage }}>Field Validated.</span>
          </h1>

          <p className="type-section-body mt-6 max-w-[760px] text-white sm:mt-8">
            Rise Power builds quiet, zero-emission hydrogen systems engineered
            in British Columbia.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <a
              href="/contact"
              className="cta-with-icon inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span className="leading-none">Request a Briefing</span>
              <ArrowRight className="size-4 shrink-0 sm:size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* ================================================================== */}
      {/* MISSION + TECHNOLOGY                                               */}
      {/* ================================================================== */}

      <section
        id="mission"
        className="relative scroll-mt-28 overflow-hidden bg-[#fbfaf7] py-10 sm:py-12 lg:py-16"
        aria-labelledby="company-mission-heading"
      >
        <ContourDecoration position="left" />
        <ContourDecoration position="right" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <Reveal variant="left" className="min-w-0">
              <div className="relative min-h-[280px] overflow-hidden rounded-[7px] sm:min-h-[360px] lg:h-full lg:min-h-[520px]">
                <Image
                  src="/media/company/company-mission.png"
                  alt="Rise Power units deployed in mountain field operations"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="right" delay={80} className="min-w-0">
              <div className="flex h-full flex-col justify-center">
                <SectionEyebrow>Our Mission</SectionEyebrow>

                <h2
                  id="company-mission-heading"
                  className="mt-4 type-section-h2"
                >
                  Clean Power
                  <br />
                  For Critical Work.
                </h2>

                <p className="type-section-body mt-4 max-w-xl text-[#66717d]">
                  Quiet, zero-emission portable hydrogen systems for municipal,
                  emergency, field, and off-grid use — engineered in British
                  Columbia. We partner through product trials and clean-energy
                  pilots to replace diesel trucks and generators with refillable
                  cartridge logistics.
                </p>

                <div
                  id="technology"
                  className="mt-7 scroll-mt-28 border-t pt-7"
                  style={{ borderColor: "rgba(110, 127, 66, 0.22)" }}
                >
                  <p className="type-eyebrow" style={{ color: sage }}>
                    Our Technology
                  </p>

                  <h3 className="mt-2 font-display text-[1.25rem] leading-[1.1] font-bold tracking-tight text-[#101820] uppercase sm:text-[1.4rem] lg:text-[1.55rem]">
                    H₂-CORE Plug &amp; Play Platform
                  </h3>

                  <p className="type-section-body mt-3 max-w-xl text-[#66717d]">
                    Fuel cells, power electronics, and a Plug &amp; Play Hydrogen
                    Cartridge in one modular platform — converting hydrogen to
                    electricity with only water and heat as byproducts.
                  </p>

                  <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                    {technologyChecklist.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-base leading-snug text-[#101820]"
                      >
                        <span
                          className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                          style={{ backgroundColor: sage }}
                          aria-hidden
                        >
                          <Check
                            className="size-3 text-white"
                            strokeWidth={3}
                          />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BUILT TO OUTPERFORM */}
      <section
        id="performance-metrics"
        className="scroll-mt-28 pt-6 pb-10 sm:pt-8 sm:pb-12 lg:pt-10 lg:pb-14"
        style={{ background: "#fafaf8" }}
      >
        <div className="mx-auto w-full max-w-[1760px] px-6 lg:px-10">
          <Reveal variant="up">
            <p className="type-eyebrow text-center" style={{ color: sage }}>
              {performanceMetrics.eyebrow}
            </p>
            <h2 className="type-section-h2 mt-3 text-center">
              {performanceMetrics.headingBefore}{" "}
              <span style={{ color: sage }}>
                {performanceMetrics.headingAccent}
              </span>
            </h2>
            <p className="type-section-body mx-auto mt-3 max-w-2xl text-center">
              {performanceMetrics.body}
            </p>
          </Reveal>
          <RevealStagger
            className="mx-auto mt-8 grid w-full max-w-5xl grid-cols-1 items-stretch gap-4 sm:mt-9 sm:grid-cols-2 sm:gap-4 xl:mt-10 xl:max-w-none xl:grid-cols-4 xl:gap-5"
            step={70}
          >
            {performanceMetrics.gauges.map((item, index) => {
              const Icon = performanceGaugeIcons[index] ?? Crosshair;
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

      {/* ONE CARTRIDGE ECOSYSTEM */}
      <CartridgeEcosystem />

      {/* ================================================================== */}
      {/* VALUES                                                              */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-white py-10 sm:py-12 lg:py-16">
        <ContourDecoration position="left" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="text-center">
              <div className="flex justify-center">
                <SectionEyebrow>Our Values</SectionEyebrow>
              </div>

              <h2 className="mt-4 type-section-h2">
                Our Values
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 xl:hidden">
            <SnapCarousel
              ariaLabel="Our values"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {values.map((value, index) => (
                <Reveal key={value.number} variant="up" delay={index * 70}>
                  <ValueCard value={value} />
                </Reveal>
              ))}
            </SnapCarousel>
          </div>

          <RevealStagger
            className="mt-8 hidden gap-4 xl:grid xl:grid-cols-4"
            step={70}
          >
            {values.map((value) => (
              <ValueCard key={value.number} value={value} />
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
