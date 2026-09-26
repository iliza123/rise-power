// import type { Metadata } from "next";
// import Image from "next/image";
// import { Button } from "@/components/Button";
// import { PageHero } from "@/components/PageHero";
// import { products } from "@/lib/content";

// export const metadata: Metadata = {
//   title: "Products",
// };

// export default function ProductsPage() {
//   return (
//     <>
//       <PageHero
//         eyebrow="Products"
//         title="Four products. One cartridge ecosystem."
//         description="Engineered for defense, disaster response, remote operations, and critical backup."
//       />

//       <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-10 lg:py-24">
//         <div className="space-y-20">
//           {products.map((product, index) => (
//             <article
//               key={product.slug}
//               id={product.slug}
//               className="scroll-mt-28 grid items-center gap-10 lg:grid-cols-2"
//             >
//               <div
//                 className={`relative aspect-4/3 overflow-hidden ${
//                   index % 2 === 1 ? "lg:order-2" : ""
//                 }`}
//               >
//                 <Image
//                   src={product.image}
//                   alt={product.name}
//                   fill
//                   sizes="(min-width: 1024px) 50vw, 100vw"
//                   className="image-grade object-cover"
//                 />
//               </div>
//               <div>
//                 <p className="text-xs tracking-[0.18em] text-accent uppercase">
//                   {product.number}
//                 </p>
//                 <h2 className="mt-3 font-display text-4xl tracking-tight uppercase lg:text-5xl">
//                   {product.name}
//                 </h2>
//                 <p className="mt-2 text-sm tracking-wide text-accent uppercase">
//                   {product.tagline}
//                 </p>
//                 <p className="mt-5 text-base leading-relaxed text-muted">
//                   {product.description}
//                 </p>
//                 <ul className="mt-6 space-y-2 text-sm text-foreground/85">
//                   {product.specs.map((spec) => (
//                     <li key={spec} className="flex gap-3">
//                       <span className="mt-2 h-1 w-1 shrink-0 bg-accent" />
//                       {spec}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </article>
//           ))}
//         </div>

//         <div className="mt-24 border border-border bg-surface p-10 text-center lg:p-16">
//           <h2 className="font-display text-4xl tracking-tight uppercase">
//             Engineered as a system
//           </h2>
//           <p className="mx-auto mt-4 max-w-2xl text-muted">
//             Every Rise Power product is designed as a complete system. Power
//             generation, fuel delivery, controls, and enclosure working together.
//           </p>
//           <div className="mt-8">
//             <Button href="/datasheets">Download Specs</Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }




import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BatteryCharging,
  Box,
  Clock3,
  Crosshair,
  Infinity,
  Leaf,
  ShieldCheck,
  Users,
  Weight,
  Zap,
} from "lucide-react";
import { CustomersPartners } from "@/components/home/CustomersPartners";
import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
import { CartridgeEcosystem } from "@/components/CartridgeEcosystem";
import { StackedPageHero } from "@/components/StackedPageHero";
import { products } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Products",
  description:
    "Rise Sentinel, Falcon, Titan, and hydrogen cartridge systems. Portable fuel cell power for everyday resilience — municipal, emergency, field, and off-grid applications.",
  path: "/products",
});

const sage = "#6e7f42";
const lime = "#b5d13c";

const systemMeta = [
  {
    category: "EVERYDAY BACKUP",
    icon: ShieldCheck,
    stats: [
      [Zap, "QUIET", "OPERATION"],
      [Leaf, "ZERO", "EMISSIONS"],
      [Weight, "LIGHT", "WEIGHT"],
    ],
  },
  {
    category: "DRONE POWER",
    icon: BatteryCharging,
    stats: [
      [Clock3, "UP TO 5×", "FLIGHT RANGE"],
      [Infinity, "UNDER 30s", "CARTRIDGE SWAP"],
      [Leaf, "ZERO", "EMISSIONS"],
    ],
  },
  {
    category: "PORTABLE GENERATOR",
    icon: Zap,
    stats: [
      [Zap, "1.5 kW", "CAPACITY"],
      [Clock3, "UNLIMITED", "RUNTIME"],
      [Weight, "40 LB", "PORTABLE"],
    ],
  },
  {
    category: "FUEL SOLUTIONS",
    icon: BatteryCharging,
    stats: [
      [BatteryCharging, "HIGH", "ENERGY DENSITY"],
      [ShieldCheck, "SAFE", "& RELIABLE"],
      [Infinity, "QUICK", "SWAP SYSTEM"],
    ],
  },
];

const comparisonImages = [
  "/media/products/compare-sentinel.png",
  "/media/products/compare-falcon.png",
  "/media/products/compare-titan.png",
  "/media/products/compare-cartridge.png",
] as const;

const comparisonFields = [
  {
    label: "Primary Use",
    icon: Crosshair,
    values: [
      "Everyday backup and outdoor portable power",
      "Drone range extender for compatible platforms",
      "Everyday and emergency portable generation",
      "Clean hydrogen fuel storage and delivery",
    ],
  },
  {
    label: "Power Output",
    icon: Zap,
    values: [
      "Compact Power Cube output",
      "Up to 5x extended flight range",
      "1.5 kW capacity",
      "High energy density",
    ],
  },
  {
    label: "Runtime",
    icon: Clock3,
    values: [
      "Unlimited with cartridge swap",
      "Extended endurance via 5x range",
      "Unlimited with cartridge swap",
      "N/A (fuel supply)",
    ],
  },
  {
    label: "Weight",
    icon: Weight,
    values: [
      "Lightweight and easy to carry",
      "Lightweight modular design",
      "40 lb portable generator",
      "Compact & portable",
    ],
  },
  {
    label: "Form Factor",
    icon: Box,
    values: [
      "Power Cube — compact portable",
      "Modular, UAV-ready",
      "24 × 18 × 24 in portable",
      "Cartridge-based system",
    ],
  },
  {
    label: "Ideal For",
    icon: Users,
    values: [
      "Camping, home outages, emergency kits",
      "Inspection, mapping, public safety",
      "Municipalities, utilities, home backup",
      "Rapid deployment, field refuel, resupply",
    ],
  },
] as const;

const productSpecSections = products.slice(0, 4).map((product, index) => ({
  product,
  image: comparisonImages[index] ?? product.image,
  rows: comparisonFields.map((field) => ({
    label: field.label,
    icon: field.icon,
    value: field.values[index],
  })),
}));

type ProductItem = (typeof products)[number];
type SystemMeta = (typeof systemMeta)[number];

function ProductSpecSection({
  product,
  image,
  rows,
  reverse = false,
}: {
  product: ProductItem;
  image: string;
  rows: {
    label: string;
    icon: (typeof comparisonFields)[number]["icon"];
    value: string;
  }[];
  reverse?: boolean;
}) {
  return (
    <article
      id={`${product.slug}-specs`}
      className="scroll-mt-28 overflow-hidden rounded-lg border border-[#d9d8d0] bg-[#07151b] text-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
    >
      <div
        className={`grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative aspect-[16/10] min-h-[160px] sm:min-h-[180px] lg:aspect-auto lg:min-h-full">
          <Image
            src={image}
            alt={product.name}
            fill
            quality={95}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07151b] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#07151b]/40" />
        </div>

        <div className="flex flex-col">
          <div className="border-b border-white/15 px-4 pt-5 pb-3 sm:px-5 sm:pt-6 sm:pb-3.5">
            <p className="type-eyebrow text-[0.8125rem] sm:text-sm" style={{ color: sage }}>
              ⌁ Specifications
            </p>
            <h3 className="type-card-title mt-1.5 text-white">
              {product.name}
            </h3>
            <p className="type-card-label mt-1 text-white/70">
              {product.tagline}
            </p>
          </div>

          <ul className="divide-y divide-white/15 pb-4 sm:pb-5">
            {rows.map((row) => {
              const Icon = row.icon;
              return (
                <li
                  key={row.label}
                  className="flex items-center gap-3 px-4 py-2 sm:gap-3.5 sm:px-5 sm:py-2.5 first:pt-3 last:pb-1 sm:first:pt-3.5 sm:last:pb-1.5"
                >
                  <Icon
                    className="size-4 shrink-0 sm:size-5"
                    strokeWidth={1.5}
                    style={{ color: lime }}
                    aria-hidden
                  />
                  <div className="grid min-w-0 flex-1 gap-0.5 sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-center sm:gap-3">
                    <p className="type-card-label text-[0.75rem] leading-tight text-white/55 sm:text-[0.8125rem]">
                      {row.label}
                    </p>
                    <p className="type-card-body-on-dark !text-[0.9375rem] !leading-snug sm:!text-base">
                      {row.value}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </article>
  );
}

function ProductSystemCard({
  product,
  meta,
  includeAnchorId = false,
}: {
  product: ProductItem;
  meta: SystemMeta;
  includeAnchorId?: boolean;
}) {
  const CategoryIcon = meta.icon;

  return (
    <article
      id={includeAnchorId ? product.slug : undefined}
      className="group flex h-full min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-lg border border-[#d9d8d0] bg-[#07151b] text-white shadow-[0_12px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1"
    >
      {/* CARD IMAGE */}
      <div className="relative aspect-[1.12/1] overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/25" />

        <div className="absolute top-3 left-3 right-3 sm:top-4 sm:left-4 sm:right-4">
          <span className="inline-flex max-w-full items-center gap-2 rounded-sm border border-white/20 bg-[#061018]/82 py-1.5 pr-3 pl-1.5 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md">
            <span
              className="grid size-8 shrink-0 place-items-center rounded-full border sm:size-9"
              style={{
                borderColor: `${lime}`,
                color: lime,
                background: "rgba(7, 18, 12, 0.55)",
              }}
            >
              <CategoryIcon className="size-4 sm:size-[18px]" strokeWidth={1.5} />
            </span>

            <span className="truncate text-sm leading-none font-bold tracking-[0.1em] text-white uppercase">
              {meta.category}
            </span>
          </span>
        </div>
      </div>

      {/* CARD CONTENT */}
      <div className="flex flex-1 flex-col px-5 pt-5 pb-4">
        <h3 className="font-display text-2xl leading-none font-bold uppercase sm:text-[25px]">
          {product.name}
          {/* <sup className="ml-1 text-[9px]">™</sup> */}
        </h3>

        <p className="mt-2 text-sm font-medium tracking-[0.08em] text-white uppercase">
          {product.tagline}
        </p>

        <p className="type-card-body-on-dark mt-4 mb-3 min-h-[72px]">
          {product.description}
        </p>

        {/* STATS */}
        <div className="mt-auto grid grid-cols-3 border-y border-white/15 py-4">
          {meta.stats.map(([Icon, value, label]) => {
            const StatIcon = Icon as typeof Zap;

            return (
              <div
                key={`${value}-${label}`}
                className="min-w-0 border-r border-white/10 px-2 first:pl-0 last:border-r-0 last:pr-0"
              >
                <StatIcon
                  className="mb-2 size-5 text-[#b5d13c]"
                  strokeWidth={1.5}
                />

                <p className="truncate text-sm font-bold text-white sm:text-[13px]">
                  {value as string}
                </p>

                <p className="mt-0.5 text-sm leading-tight font-medium tracking-[0.08em] text-white/55 uppercase">
                  {label as string}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </article>
  );
}

export default function ProductsPage() {
  return (
    <>
      <StackedPageHero
        layout="split"
        imageSrc="/media/products/product-hero.png"
        mobileImageSrc="/media/products/product-hero-mobile.png"
        imageAlt="Camouflage Rise product lineup"
        imageWidth={1920}
        imageHeight={1081}
        imageClassName="object-cover object-[center_55%]"
        tone="#0a0f10"
        splitWash="linear-gradient(90deg, #0a0f10 0%, #0a0f10 44%, rgba(10,15,16,0.82) 52%, rgba(10,15,16,0.35) 62%, transparent 74%)"
      >
        <div className="hero-animate-copy w-full text-left">
          <p className="text-base font-semibold tracking-[0.14em] text-white uppercase sm:text-[0.9375rem]">
            ⌁ Products
          </p>

          <h1 className="mt-4 type-page-h1 sm:mt-5">
            Products
          </h1>

          <p className="type-section-body mt-5 max-w-[32rem] !text-white/90 sm:mt-6">
            Four products. One cartridge ecosystem. Portable hydrogen power
            for everyday resilience — municipal, emergency, field, and
            off-grid applications.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#849363] px-7 text-sm font-bold tracking-[0.12em] text-white uppercase transition-opacity hover:opacity-90"
            >
              Request a Demo
              <ArrowRight className="size-4 shrink-0" />
            </Link>
            <Link
              href="/use-cases"
              className="inline-flex min-h-12 items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-white/35 px-7 text-sm font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-white/10"
            >
              See Case Studies
              <ArrowRight className="size-4 shrink-0" />
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* PRODUCT SYSTEMS */}
      <section
        id="product-systems"
        className="scroll-mt-20 bg-[#f7f6f2] py-12 sm:py-16 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
          <Reveal variant="up" className="mx-auto max-w-4xl text-center">
            <p className="text-base font-semibold tracking-[0.14em] text-[#6e7f42] uppercase sm:text-[0.9375rem]">
              ⌁ Our Product Systems
            </p>

            <h2 className="mt-4 type-section-h2">
              Power for{" "}
              <span className="text-[#6e7f42]">Every Mission.</span>
            </h2>

            <p className="type-section-body mx-auto mt-5 max-w-2xl text-[#596057]">
              A complete ecosystem of hydrogen power systems engineered for the
              world&apos;s most demanding environments.
            </p>
          </Reveal>

          <Reveal variant="up" delay={80} className="mt-12 xl:hidden lg:mt-14">
            <SnapCarousel
              ariaLabel="Product systems"
              showArrows
              showDots
              itemClassName="w-[min(88vw,22rem)] sm:w-[min(70vw,26rem)] md:w-[min(55vw,28rem)]"
              trackClassName="gap-4 px-1 pb-1"
            >
              {products.slice(0, 4).map((product, index) => {
                const meta = systemMeta[index] ?? systemMeta[0];
                return (
                  <ProductSystemCard
                    key={product.slug}
                    product={product}
                    meta={meta}
                  />
                );
              })}
            </SnapCarousel>
          </Reveal>

          <RevealStagger
            className="mt-12 hidden gap-5 lg:mt-14 xl:grid xl:grid-cols-4"
            step={70}
          >
            {products.slice(0, 4).map((product, index) => {
              const meta = systemMeta[index] ?? systemMeta[0];
              return (
                <ProductSystemCard
                  key={product.slug}
                  product={product}
                  meta={meta}
                  includeAnchorId
                />
              );
            })}
          </RevealStagger>
        </div>
      </section>

      {/* ENGINEERED AS A SYSTEM */}
      <CartridgeEcosystem />

      {/* CUSTOMERS & PARTNERS — Built for Real-World Use (cards only; marquee stays on home) */}
      <CustomersPartners showMarquee={false} />

      {/* PRODUCT SPECIFICATIONS — one section per product */}
      <section
        id="product-comparison"
        className="scroll-mt-20 bg-[#f7f6f2] py-8 sm:py-10 lg:py-12"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="mx-auto max-w-4xl text-center">
            <p className="type-eyebrow" style={{ color: sage }}>
              ⌁ Product Specifications
            </p>

            <h2 className="mt-2 type-section-h2 sm:mt-2.5">
              Four Solutions.{" "}
              <span style={{ color: sage }}>One Mission.</span>
            </h2>

            <p className="type-section-body mx-auto mt-2.5 max-w-3xl sm:mt-3">
              Specs for each Rise Power system — review Sentinel, Falcon, Titan,
              and the Hydrogen Cartridge Kit on their own.
            </p>
          </Reveal>

          <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:gap-4 lg:mt-8">
            {productSpecSections.map((item, index) => (
              <Reveal key={item.product.slug} variant="up" delay={index * 40}>
                <ProductSpecSection
                  product={item.product}
                  image={item.image}
                  rows={item.rows}
                  reverse={index % 2 === 1}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}