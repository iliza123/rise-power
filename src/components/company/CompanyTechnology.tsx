import Image from "next/image";
import { Check } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";

const SAGE = "#6e7f42";

const checklist = [
  "Plug & Play Cartridge Interface",
  "Modular & Scalable Architecture",
  "Advanced Fuel Cell Technology",
  "Intelligent Power Management",
  "Built for Extreme Conditions",
] as const;

export type CompanyTechnologyProps = {
  className?: string;
  /** Placeholder diagram — designer will replace with exploded H₂-CORE render. */
  diagramSrc?: string;
  diagramAlt?: string;
};

/** About page technology section — Plug & Play Hydrogen Platform. */
export function CompanyTechnology({
  className = "",
  diagramSrc = "/media/products/product-ecosystem.png",
  diagramAlt = "Rise Power H₂-CORE platform diagram",
}: CompanyTechnologyProps) {
  return (
    <section
      id="technology"
      className={`scroll-mt-28 bg-white py-14 sm:py-16 lg:py-20 ${className}`.trim()}
      aria-labelledby="company-technology-heading"
    >
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
          <Reveal variant="left" className="min-w-0">
            <p className="type-eyebrow" style={{ color: SAGE }}>
              OUR TECHNOLOGY
            </p>

            <h2
              id="company-technology-heading"
              className="type-section-h2 mt-3 text-[#101820]"
            >
              The Rise Plug &amp; Play Hydrogen Platform
            </h2>

            <div className="type-section-body mt-5 max-w-[34rem] space-y-4 text-[#66717d]">
              <p>
                Proprietary H₂-CORE™ architecture integrates fuel cells, power
                electronics, and a patented Plug &amp; Play Hydrogen Cartridge
                into one modular platform — engineered for field reliability
                across mission profiles.
              </p>
              <p>
                Hydrogen is converted into electricity through a chemical
                reaction in the fuel cell — producing only water and heat.
              </p>
            </div>

            <ul className="mt-8 space-y-3.5 sm:mt-9">
              {checklist.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[15px] leading-snug text-[#101820] sm:text-base"
                >
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full sm:size-[1.35rem]"
                    style={{ backgroundColor: SAGE }}
                    aria-hidden
                  >
                    <Check
                      className="size-3 text-white sm:size-3.5"
                      strokeWidth={3}
                    />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={80} className="min-w-0">
            <div className="relative aspect-[16/11] overflow-hidden rounded-[7px] bg-[#101820]">
              <Image
                src={diagramSrc}
                alt={diagramAlt}
                fill
                quality={90}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
