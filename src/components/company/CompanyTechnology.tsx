import Image from "next/image";
import { Check } from "lucide-react";

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

/** About page technology section — matches Mission / other About section patterns. */
export function CompanyTechnology({
  className = "",
  diagramSrc = "/media/products/product-ecosystem.png",
  diagramAlt = "Rise Power H₂-CORE platform diagram",
}: CompanyTechnologyProps) {
  return (
    <section
      id="technology"
      className={`relative scroll-mt-28 overflow-hidden bg-white pt-10 pb-6 sm:pt-12 sm:pb-8 lg:pt-16 lg:pb-10 ${className}`.trim()}
      aria-labelledby="company-technology-heading"
    >
      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
          <Reveal variant="left" className="min-w-0">
            <div className="min-w-0 lg:pr-2">
              <p className="type-eyebrow" style={{ color: SAGE }}>
                Our Technology
              </p>

              <h2
                id="company-technology-heading"
                className="mt-4 type-section-h2"
              >
                The Rise Plug &amp; Play Hydrogen Platform
              </h2>

              <div className="type-section-body mt-5 max-w-xl space-y-4 break-words text-[#66717d]">
                <p>
                  Proprietary H₂-CORE™ architecture integrates fuel cells, power
                  electronics, and a Plug &amp; Play Hydrogen Cartridge into one
                  modular platform — engineered for field reliability across
                  mission profiles.
                </p>
                <p>
                  Hydrogen is converted into electricity through a chemical
                  reaction in the fuel cell — producing only water and heat.
                </p>
              </div>

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
            </div>
          </Reveal>

          <Reveal variant="right" delay={80} className="min-w-0">
            <div className="relative mx-auto aspect-[1.15/1] w-full max-w-[26rem] overflow-hidden rounded-[7px] lg:ml-auto lg:mr-0">
              <Image
                src={diagramSrc}
                alt={diagramAlt}
                fill
                quality={90}
                sizes="(min-width: 1024px) 26rem, 88vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
