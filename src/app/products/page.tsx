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
import { SnapCarousel } from "@/components/home/SnapCarousel";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";
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

const comparisonRows = [
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
];

const systemFlow = [
  {
    title: "HYDROGEN CARTRIDGE",
    body: "Clean, high-density fuel storage.",
    image: "/media/products/product-e1.png",
  },
  {
    title: "FUEL CELL",
    body: "Converts hydrogen to electricity.",
    image: "/media/products/product-e2.png",
  },
  {
    title: "POWER ELECTRONICS",
    body: "Stabilizes and optimizes power output.",
    image: "/media/products/product-e3.png",
  },
  {
    title: "SYSTEM",
    body: "Integrated, ruggedized and mission-ready.",
    image: "/media/products/product-e4.png",
  },
  {
    title: "MISSION EQUIPMENT",
    body: "Powers what matters most.",
    image: "/media/products/product-e5.png",
  },
];

type ProductItem = (typeof products)[number];
type SystemMeta = (typeof systemMeta)[number];

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

            <span className="truncate text-[11px] leading-none font-bold tracking-[0.1em] text-white uppercase sm:text-[12px]">
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

        <p className="mt-2 text-[12px] font-medium tracking-[0.08em] text-white uppercase">
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

                <p className="truncate text-[12px] font-bold text-white sm:text-[13px]">
                  {value as string}
                </p>

                <p className="mt-0.5 text-[8px] leading-tight font-medium tracking-[0.08em] text-white/55 uppercase">
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
        imageSrc="/media/products/product-hero.png"
        imageAlt="Rise Falcon, Sentinel, and Titan hydrogen power systems"
        imageClassName="object-cover object-[center_40%]"
        tone="#07100d"
      >
        <div className="hero-animate-copy w-full max-w-[620px]">
          <p className="text-mm font-semibold tracking-[0.18em] text-white uppercase">
            ⌁ Products
          </p>

          <h1 className="mt-5 type-page-h1 xl:mt-6">
            Products
          </h1>

          <p className="type-section-body mt-5 max-w-[540px] text-white xl:mt-7">
            Four products. One cartridge ecosystem. Portable hydrogen power
            for everyday resilience — municipal, emergency, field, and
            off-grid applications.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm bg-[#849363] px-7 text-xs font-bold tracking-[0.12em] text-white uppercase transition-opacity hover:opacity-90 sm:w-auto"
            >
              Request a Trial
              <ArrowRight className="size-4 shrink-0" />
            </Link>
            <Link
              href="/use-cases"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 whitespace-nowrap rounded-sm border border-white/35 px-7 text-xs font-bold tracking-[0.12em] text-white uppercase transition-colors hover:bg-white/10 sm:w-auto"
            >
              See Use Cases
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
            <p className="text-mm font-semibold tracking-[0.2em] text-[#6e7f42] uppercase">
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
      <section className="relative overflow-hidden bg-[#f7f6f2] py-10 sm:py-12 lg:py-16">

        <Image
          src="/media/products/product-ecosystem.png"
          alt="Rise Power ecosystem"
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-[center_45%]"
        />

        <div className="absolute inset-0 bg-[#f7f6f2]/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#f7f6f2]/45 via-[#f7f6f2]/15 to-transparent lg:via-[#f7f6f2]/10 lg:to-transparent" />

        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-6 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.35fr_0.7fr] lg:gap-6 lg:px-10">

          {/* CONTENT */}
          <Reveal variant="left" className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-3 -inset-y-4 rounded-lg bg-[#f7f6f2]/20 blur-xl lg:-inset-x-5 lg:-inset-y-5"
            />
            <div className="relative">
            <p className="text-sm font-semibold tracking-[0.18em] text-[#6e7f42] uppercase sm:text-base">
              ⌁ One Cartridge Ecosystem
            </p>

            <h2 className="mt-3 text-[3.7rem] leading-[1.05] font-bold tracking-tight sm:text-[4.3rem] lg:text-[4.9rem]">
              Engineered
              <br />
              <span className="text-[#6e7f42]">As a System.</span>
            </h2>

            <p className="mt-4 max-w-[640px] text-[28px] leading-relaxed text-[#3f3c36] sm:text-[30px]">
              Every Rise Power product is designed as a complete system. Power
              generation, fuel delivery, controls, and enclosure working together.
              Integrated system design delivers better performance and reliability
              than assembled from parts alternatives.
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-12 items-center gap-2 rounded-sm border border-[#252925] px-6 text-base font-semibold uppercase hover:bg-[#141a14] hover:text-white"
              >
                Request a Briefing
              </Link>

              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 text-base font-semibold uppercase"
              >
                See Use Cases
                <ArrowRight className="size-5 text-[#6e7f42]" />
              </Link>
            </div>
            </div>
          </Reveal>


          {/* SPACE FOR BACKGROUND PRODUCT IMAGE */}
          <div className="hidden lg:block" />


          {/* SYSTEM FLOW */}
          <RevealStagger
            className="flex w-full max-w-lg flex-col gap-2.5"
            step={70}
            variant="right"
          >
            {systemFlow.map((item, index) => (
              <div
                key={item.title}
                className="relative flex items-stretch overflow-visible rounded-md border border-[#dcded8] bg-white/70"
              >
                {/* Image */}
                <div className="relative m-3 h-16 w-16 shrink-0 self-center overflow-hidden rounded-md sm:h-[4.5rem] sm:w-[4.5rem]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>

                {/* Dot + connecting line, between image and text */}
                <div className="relative w-3 shrink-0">
                  {index !== 0 && (
                    <span className="absolute -top-3 bottom-1/2 left-1/2 w-px -translate-x-1/2 bg-[#6e7f42]/50" />
                  )}
                  {index !== systemFlow.length - 1 && (
                    <span className="absolute top-1/2 -bottom-3 left-1/2 w-px -translate-x-1/2 bg-[#6e7f42]/50" />
                  )}
                  <span className="absolute top-1/2 left-1/2 z-10 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6e7f42] ring-2 ring-white" />
                </div>

                {/* Text */}
                <div className="min-w-0 flex-1 self-center px-3 py-3">
                  <h3 className="text-[15px] font-bold uppercase leading-tight sm:text-base">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-[13px] leading-snug text-[#5c584e] sm:text-sm">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </RevealStagger>

        </div>

      </section>

      {/* PRODUCT COMPARISON */}
      <section
        id="product-comparison"
        className="scroll-mt-20 bg-[#f7f6f2] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <Reveal variant="up" className="mx-auto max-w-4xl text-center">
            <p className="text-mm font-semibold tracking-[0.2em] text-[#6e7f42] uppercase">
              ⌁ Product Comparison
            </p>

            <h2 className="mt-4 type-section-h2">
              Four Solutions.{" "}
              <span className="text-[#6e7f42]">One Mission.</span>
            </h2>

            <p className="type-section-body mx-auto mt-5 max-w-3xl text-[#596057]">
              Compare our hydrogen power systems and find the right solution
              for your operational needs.
            </p>
          </Reveal>

          <Reveal variant="up" delay={80} className="mt-12 overflow-x-auto lg:mt-14">
            <div className="min-w-[1160px] text-white">
              {/* TABLE HEADER */}
              <div className="grid grid-cols-[240px_repeat(4,minmax(200px,1fr))]">
                <div className="flex flex-col justify-center rounded-tl-lg border border-r-0 border-b-0 border-[#293a40] bg-[#071b23] p-6 shadow-[0_15px_40px_rgba(0,0,0,.08)]">
                  <h3 className="font-display text-2xl font-bold uppercase">
                    Specifications
                  </h3>

                  <p className="type-section-body mt-3 max-w-[190px] !text-white/90">
                    Compare key features across the Rise Power product
                    lineup.
                  </p>
                </div>

                {products.slice(0, 4).map((product, index) => (
                  <div
                    key={product.slug}
                    className={`overflow-hidden border border-b-0 border-[#293a40] bg-[#07151b] shadow-[0_15px_40px_rgba(0,0,0,.08)] ${index === 0
                      ? "rounded-tr-lg border-l border-l-white/15"
                      : "ml-1 rounded-t-lg"
                      }`}
                  >
                    <div className="relative aspect-square overflow-hidden">
                      <Image
                        src={comparisonImages[index] ?? product.image}
                        alt={product.name}
                        fill
                        quality={95}
                        sizes="220px"
                        className="object-cover object-center"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-[#07151b] via-transparent to-transparent" />
                    </div>

                    <div className="px-4 pb-4 text-center">
                      <h3 className="font-display text-lg font-bold uppercase">
                        {product.name}
                        {/* <sup className="ml-1 text-[8px]">™</sup> */}
                      </h3>

                      <p className="mt-1 text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
                        {product.tagline}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* COMPARISON ROWS */}
              {comparisonRows.map((row, rowIndex) => {
                const Icon = row.icon;
                const isLast = rowIndex === comparisonRows.length - 1;

                return (
                  <div
                    key={row.label}
                    className="grid grid-cols-[240px_repeat(4,minmax(200px,1fr))]"
                  >
                    <div
                      className={`flex items-center gap-4 border-l border-[#293a40] border-t border-t-white/15 bg-[#071b23] px-6 py-4 ${
                        isLast ? "rounded-bl-lg border-b" : ""
                      }`}
                    >
                      <Icon
                        className="size-6 shrink-0 text-[#c1df29]"
                        strokeWidth={1.5}
                      />

                      <span className="text-sm font-semibold">
                        {row.label}
                      </span>
                    </div>

                    {row.values.map((value, index) => (
                      <div
                        key={`${row.label}-${index}`}
                        className={`flex min-w-0 items-center border-t border-t-white/15 bg-[#07151b] px-5 py-4 text-base leading-relaxed text-white ${
                          index === 0
                            ? "border-r border-[#293a40] border-l border-l-white/15"
                            : "ml-1 border-x border-[#293a40]"
                        } ${
                          isLast
                            ? `border-b ${
                                index === 0
                                  ? "rounded-br-lg"
                                  : "rounded-b-lg"
                              }`
                            : ""
                        }`}
                      >
                        {value}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </Reveal>

          <p className="mt-4 text-center text-[10px] tracking-[0.08em] text-[#77766f] uppercase sm:hidden">
            Swipe horizontally to compare all products
          </p>
        </div>
      </section>
    </>
  );
}