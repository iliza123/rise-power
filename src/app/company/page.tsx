import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Company",
  description:
    "Rise Power is engineered, manufactured, and validated in British Columbia. A CIMtech Green Energy company built on 20+ years of Canadian advanced manufacturing.",
  path: "/company",
});

const sage = "#6e7f42";

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

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

const focusAreas = [
  {
    number: "01",
    title: "Military &\nDefence",
    description:
      "Silent hydrogen power for tactical communications, UAV operations, and ISR systems in forward deployments.",
    image: "/media/markets/defense-military.png",
    href: "/use-cases#defense-security",
    cta: "Explore Solutions",
  },
  {
    number: "02",
    title: "Commercial",
    description:
      "Construction sites, telecom backup, mining, and remote industrial power without diesel fuel-truck dependency.",
    image: "/media/markets/commercial.png",
    href: "/use-cases#remote-operations",
    cta: "Explore Solutions",
  },
  {
    number: "03",
    title: "Consumer",
    description:
      "Camping, RV power, and emergency home backup with quiet, zero-emission operation at the point of use.",
    image: "/media/markets/field-consumer.png",
    href: "/use-cases#disaster-response",
    cta: "Explore Solutions",
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
        className={`text-mm font-semibold tracking-[0.18em] uppercase ${light ? "text-white" : ""}`}
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

function FocusCard({ area }: { area: (typeof focusAreas)[number] }) {
  return (
    <Link
      href={area.href}
      className="group flex h-full flex-col overflow-hidden rounded-[7px] border border-[#d9dfe3] bg-white transition-colors hover:border-[#b8c4a8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e7f42]"
    >
      <div className="flex flex-1 flex-col px-5 pt-4 sm:px-5 sm:pt-5">
        <div className="flex items-center gap-4">
          <span
            className="font-display text-[30px] font-bold leading-none"
            style={{ color: sage }}
          >
            {area.number}
          </span>

          <span className="h-px w-14 bg-[#aeb6bd]" />
        </div>

        <h3 className="mt-4 whitespace-pre-line font-display text-[27px] leading-[1.02] font-bold tracking-tight uppercase sm:text-[29px]">
          {area.title}
        </h3>

        <p className="type-card-body mt-3 min-h-[4.5em] text-[#66717d]">
          {area.description}
        </p>
      </div>

      <div className="mt-auto px-5 pt-4 sm:px-5">
        <div className="relative aspect-[1.45/1] overflow-hidden rounded-[5px]">
          <Image
            src={area.image}
            alt={area.title.replace(/\n/g, " ")}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 88vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>

        <span
          className="mt-4 mb-4 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-opacity group-hover:opacity-80 sm:mb-5"
          style={{ color: sage }}
        >
          {area.cta}
          <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
        </span>
      </div>
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function CompanyPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        layout="split"
        imageSrc="/media/company/company-hero.png"
        mobileImageSrc="/media/company/company-hero-mobile.png"
        imageAlt="Soldier with a drone in mountain terrain"
        imageWidth={1920}
        imageHeight={650}
        tone="#101820"
      >
        <div className="hero-animate-copy w-full text-left">
          <SectionEyebrow light>Company</SectionEyebrow>

          <h1 className="mt-6 type-page-h1">
            Canadian
            <br />
            Engineered.
            <br />
            <span style={{ color: sage }}>Field Validated.</span>
          </h1>

          <p className="type-section-body mt-6 max-w-[760px] text-white sm:mt-8">
            Rise Power is engineered, manufactured, and validated in British
            Columbia. A CIMtech Green Energy company.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Request a Demo
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>

            <a
              href="#focus"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Explore Focus Areas
              <ArrowRight className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* ================================================================== */}
      {/* MISSION                                                            */}
      {/* ================================================================== */}

      <section className="relative overflow-hidden bg-[#fbfaf7] py-10 sm:py-12 lg:py-16">
        <ContourDecoration position="left" />
        <ContourDecoration position="right" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-center gap-6 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
            <Reveal variant="left" className="min-w-0">
              <div className="relative aspect-[1.08/1] overflow-hidden rounded-[7px]">
                <Image
                  src="/media/company/company-mission.png"
                  alt="Military camp with a generator and mountains"
                  fill
                  sizes="(min-width: 1024px) 52vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="right" delay={80} className="min-w-0">
              <div className="min-w-0 lg:pl-2">
                <SectionEyebrow>Our Mission</SectionEyebrow>

                <h2 className="mt-4 type-section-h2">
                  Mission.
                </h2>

                <div className="type-section-body mt-5 max-w-xl space-y-4 break-words text-[#66717d]">
                  <p>
                    Rise Mission Power builds zero-emissions, portable hydrogen
                    power for municipal, emergency, field, and off-grid
                    applications. Engineered and built in British Columbia, our
                    systems are quiet, rapidly deployable, and designed for
                    reliable everyday operations when the grid is down. The
                    company is a CIMtech Green Energy subsidiary, built on a
                    20-plus-year Canadian advanced manufacturing track record.
                  </p>
                  <p>
                    We welcome municipalities, utilities, and community partners
                    through product trials and clean-energy pilot programs —
                    delivering refillable cartridge logistics instead of diesel
                    trucks and noisy generators.
                  </p>
                </div>

                <div className="mt-7">
                  <a
                    href="/contact"
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e7f42]"
                  >
                    Request a Demo
                    <ArrowRight className="size-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

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

      {/* ================================================================== */}
      {/* FOCUS AREAS                                                         */}
      {/* ================================================================== */}

      <section className="relative bg-[#fbfaf7] py-10 sm:py-12 lg:py-16">
        <div id="focus" className="pointer-events-none absolute top-0 h-0 w-0 scroll-mt-28" />
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <ContourDecoration position="left" />
          <ContourDecoration position="right" />
        </div>

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="text-center">
              <div className="flex justify-center">
                <SectionEyebrow>Focus Areas</SectionEyebrow>
              </div>

              <h2 className="mt-4 type-section-h2">
                Built For The Missions That Matter.
              </h2>

              <p className="type-section-body mx-auto mt-4 max-w-[640px] text-[#66717d]">
                Silent, field-validated hydrogen power for defense, civic
                operations, and emergency response.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 xl:hidden">
            <SnapCarousel
              ariaLabel="Focus areas"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {focusAreas.map((area, index) => (
                <Reveal key={area.number} variant="up" delay={index * 70}>
                  <FocusCard area={area} />
                </Reveal>
              ))}
            </SnapCarousel>
          </div>

          <RevealStagger
            className="mt-8 hidden gap-4 xl:grid xl:grid-cols-3"
            step={70}
          >
            {focusAreas.map((area) => (
              <FocusCard key={area.number} area={area} />
            ))}
          </RevealStagger>
        </div>
      </section>
    </main>
  );
}
