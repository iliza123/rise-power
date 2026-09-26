import Image from "next/image";
import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BarChart3,
  Check,
  LayoutGrid,
  ShieldCheck,
} from "lucide-react";

import { Reveal, RevealStagger } from "@/components/motion/Reveal";

const SAGE = "#6e7f42";

const checklist = [
  "Plug & Play Cartridge Interface",
  "Modular & Scalable Architecture",
  "Advanced Fuel Cell Technology",
  "Intelligent Power Management",
  "Built for Extreme Conditions",
] as const;

const features: {
  title: string;
  body: string;
  icon: LucideIcon;
}[] = [
  {
    title: "Modular",
    body: "One platform. Many solutions.",
    icon: LayoutGrid,
  },
  {
    title: "Scalable",
    body: "From 1kW to 5MW+",
    icon: BarChart3,
  },
  {
    title: "Smart",
    body: "Real-time monitoring & diagnostics",
    icon: Activity,
  },
  {
    title: "Safe",
    body: "Multiple safety systems built-in",
    icon: ShieldCheck,
  },
];

export type CompanyTechnologyProps = {
  className?: string;
  /** Placeholder diagram — designer will replace with exploded H₂-CORE render. */
  diagramSrc?: string;
  diagramAlt?: string;
};

/** Company page technology section — cream content block below StackedPageHero. */
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

        <RevealStagger
          className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[#e5e2d9] pt-10 sm:mt-14 sm:gap-x-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-10 lg:pt-12"
          step={50}
          variant="up"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="flex min-w-0 gap-3.5 sm:gap-4">
                <span
                  className="mt-0.5 grid size-10 shrink-0 place-items-center rounded-full border sm:size-11"
                  style={{
                    borderColor: `${SAGE}55`,
                    color: SAGE,
                    backgroundColor: "rgba(110, 127, 66, 0.06)",
                  }}
                  aria-hidden
                >
                  <Icon className="size-[18px] sm:size-5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0">
                  <p className="font-display text-sm font-bold tracking-[0.14em] text-[#101820] uppercase sm:text-[0.9375rem]">
                    {feature.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-snug text-[#66717d] sm:text-[0.9375rem]">
                    {feature.body}
                  </p>
                </div>
              </div>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
