import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const SAGE = "#6e7f42";

const checklist = [
  "Plug & Play Cartridge Interface",
  "Modular & Scalable Architecture",
  "Advanced Fuel Cell Technology",
  "Built for Extreme Conditions",
] as const;

export type CompanyTechnologyProps = {
  className?: string;
  /** Placeholder diagram — designer will replace with exploded H₂-CORE render. */
  diagramSrc?: string;
  diagramAlt?: string;
};

/** About page technology section — one job: explain the H₂-CORE platform. */
export function CompanyTechnology({
  className = "",
  diagramSrc = "/media/products/product-ecosystem.png",
  diagramAlt = "Rise Power H₂-CORE platform diagram",
}: CompanyTechnologyProps) {
  return (
    <section
      id="technology"
      className={`relative scroll-mt-28 overflow-hidden bg-white py-10 sm:py-12 lg:py-16 ${className}`.trim()}
      aria-labelledby="company-technology-heading"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal variant="left" className="min-w-0">
            <p className="type-eyebrow" style={{ color: SAGE }}>
              Our Technology
            </p>

            <h2
              id="company-technology-heading"
              className="mt-5 type-section-h2"
            >
              The Rise Plug &amp; Play
              <br />
              Hydrogen Platform
            </h2>

            <p className="type-section-body mt-5 max-w-xl text-[#66717d]">
              Proprietary H₂-CORE architecture integrates fuel cells, power
              electronics, and a Plug &amp; Play Hydrogen Cartridge into one
              modular platform. Hydrogen converts to electricity in the fuel
              cell — producing only water and heat.
            </p>

            <ul className="mt-7 space-y-3">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 type-section-body text-[#101820]"
                >
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full"
                    style={{ backgroundColor: SAGE }}
                    aria-hidden
                  >
                    <Check className="size-3 text-white" strokeWidth={3} />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link
                href="/markets"
                className="cta-with-icon inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6e7f42]"
              >
                <span className="leading-none">Explore Markets</span>
                <ArrowRight
                  className="size-4 shrink-0 sm:size-5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal variant="right" delay={80} className="min-w-0">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[7px] bg-[#141814] sm:aspect-[1.05/1] lg:aspect-[1.08/1]">
              <Image
                src={diagramSrc}
                alt={diagramAlt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
