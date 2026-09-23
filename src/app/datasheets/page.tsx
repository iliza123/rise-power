import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

import {
  DatasheetProductSection,
  type DatasheetProduct,
} from "@/components/datasheets/DatasheetProductSection";
import { StackedPageHero } from "@/components/StackedPageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Datasheets",
  description:
    "Technical specifications and engineering targets for Rise Power hydrogen power systems.",
  path: "/datasheets",
});

const sage = "#6e7f42";
const sageOnDark = "#849363";

const products: DatasheetProduct[] = [
  {
    number: "01",
    id: "sentinel",
    name: "Rise Sentinel™",
    image: "/media/datasheets/datasheet-1.png",
    imageAlt: "Rise Sentinel hydrogen power system",
    description:
      "Compact hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play setup with refillable hydrogen cartridges. Lightweight and easy to carry — no grid connection required, zero-emissions power at the point of use.",
    specs: [
      ["Positioning", "Everyday backup & outdoor use"],
      ["Operation", "Quiet, plug-and-play setup"],
      ["Fuel", "Refillable hydrogen cartridges"],
      ["Portability", "Lightweight and easy to carry"],
      ["Grid", "No grid connection required"],
      ["Emissions", "Zero at point of use"],
      ["Supports", "Lights, charging, laptops, small devices"],
    ],
    sectionTitle: "Product Highlights",
    productHref: "/products#sentinel",
  },
  {
    number: "02",
    id: "falcon",
    name: "Rise Falcon™",
    image: "/media/datasheets/datasheet-2.png",
    imageAlt: "Rise Falcon hydrogen range extender mounted to a drone",
    description:
      "Plug-and-play hydrogen range extender for compatible drones. Up to 5x extended flight range with low-noise, zero-emission operation. Quick-swap cartridges for inspection, mapping, public safety, industrial sites, and remote operations.",
    specs: [
      ["Flight Range", "Up to 5x extended range"],
      ["Compatible Platforms", "Plug-and-play for compatible drones"],
      ["Operating Temperature", "−20 °C to +50 °C"],
      ["Cartridge Load Time", "Less than 30 seconds"],
      ["Operation", "Low noise, zero emissions"],
      ["Design", "Lightweight modular"],
    ],
    sectionTitle: "Technical Specifications",
    productHref: "/products#falcon",
  },
  {
    number: "03",
    id: "titan",
    name: "Rise Titan™",
    image: "/media/datasheets/datasheet-3.png",
    imageAlt: "Rise Titan hydrogen power generator",
    description:
      "Clean backup power for everyday and emergency use. A 1.5 kW zero-emissions portable generator with quiet operation, plug-and-play setup, and refillable hydrogen cartridges for municipalities, utilities, communities, and businesses.",
    specs: [
      ["Capacity", "1.5 kW"],
      ["Weight", "40 lb"],
      ["Size", "24 × 18 × 24 in"],
      ["Runtime", "Unlimited with cartridge swap"],
      ["Cartridges", "3"],
      ["Operating Temperature", "−22 °C to +50 °C"],
      ["Cartridge Swap", "Less than 30 seconds"],
    ],
    sectionTitle: "Technical Specifications",
    productHref: "/products#titan",
  },
  {
    number: "04",
    id: "hydrogen-cartridge-kit",
    name: "Hydrogen Cartridge Kit",
    nameLines: ["Hydrogen", "Cartridge Kit"],
    image: "/media/datasheets/datasheet-4.png",
    imageAlt: "Hydrogen cartridge kit with rugged Rise Power case",
    description:
      "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
    specs: [
      ["Cartridge Diameter", "6 in (152 mm)"],
      ["Cartridge Height", "24 in (610 mm)"],
      ["Coupler", "Stainless quick-disconnect, push-to-connect"],
      ["Shelf Life", "Effectively indefinite"],
      ["Pack Configuration", "4x cartridges, Pelican 1610 case"],
      ["Transport", "Ground / air (certification in progress)"],
    ],
    sectionTitle: "Engineering Targets",
    productHref: "/products#hydrogen-cartridge-kit",
  },
];

function SectionEyebrow({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  const color = onDark ? sageOnDark : sage;

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
        className="text-xs font-semibold tracking-[0.18em] uppercase"
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

export default function DatasheetsPage() {
  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      {/* HERO */}
      <StackedPageHero
        imageSrc="/media/datasheets/datasheet-hero.png"
        imageAlt="Rise Power hydrogen systems in a field environment"
        tone="#0a0f10"
      >
        <div className="hero-animate-copy max-w-[780px]">
          <SectionEyebrow onDark>Resources</SectionEyebrow>

          <h1 className="mt-5 type-page-h1">
            Datasheets
          </h1>

          <p className="type-section-body mt-5 max-w-[640px] text-white sm:mt-6">
            Technical specifications for Rise Power systems. Beta-stage hardware
            in active validation — full datasheets are available on briefing
            request as compliance work completes.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3 sm:mt-8 sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-7 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Request Full Datasheets
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </Link>
            <a
              href="#sentinel"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/45 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Browse systems
              <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* PRODUCTS */}
      {products.map((product, index) => (
        <DatasheetProductSection
          key={product.id}
          product={product}
          index={index}
        />
      ))}
    </main>
  );
}
