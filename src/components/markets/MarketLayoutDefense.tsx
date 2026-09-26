import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { type MarketDetailPage } from "@/lib/markets";
import {
  DARK,
  HeroCtas,
  MUTED,
  SAGE,
  SectionEyebrow,
  SPLIT_WASH,
  TitleWithAccent,
} from "./market-ui";

/** Tactical dossier — dark mission brief, timeline applications, compact product rows. */
export function MarketLayoutDefense({ market }: { market: MarketDetailPage }) {
  return (
    <main className="bg-[#0a0f10] text-white">
      <StackedPageHero
        layout="split"
        imageSrc={market.images.hero.src}
        mobileImageSrc={market.images.hero.mobileSrc}
        imageAlt={market.images.hero.alt}
        imageClassName="object-cover object-[center_40%]"
        tone={DARK}
        splitWash={SPLIT_WASH}
      >
        <div className="hero-animate-copy w-full text-left">
          <SectionEyebrow light>{market.eyebrow}</SectionEyebrow>
          <h1 className="mt-4 type-page-h1 text-white [text-shadow:none] sm:mt-5">
            <TitleWithAccent title={market.title} />
          </h1>
          <p className="type-section-body mt-5 max-w-[32rem] !text-white/90 sm:mt-6">
            {market.heroBody}
          </p>
          <HeroCtas
            primaryHref={market.cta.href}
            primaryLabel={market.cta.label}
          />
        </div>
      </StackedPageHero>

      {/* Dark mission brief + horizontal stats */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#0c1210] py-10 sm:py-12 lg:py-14">
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <Reveal variant="up">
              <SectionEyebrow light>Mission Brief</SectionEyebrow>
              <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight text-white uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
                <TitleWithAccent title={market.heading} />
              </h2>
              <p className="mt-4 max-w-[42rem] text-base leading-[1.7] text-white sm:text-lg">
                {market.body}
              </p>
            </Reveal>

            <Reveal variant="fade" delay={80} className="hidden lg:block">
              <p className="font-display text-[6rem] leading-none font-bold tracking-tight text-white/25 select-none sm:text-[7rem]">
                01
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden bg-white/15 sm:mt-12 sm:grid-cols-2 lg:grid-cols-4">
            {market.stats.map((stat, index) => (
              <Reveal key={stat.label} variant="up" delay={index * 50}>
                <article className="bg-[#0c1210] px-5 py-6 sm:px-6 sm:py-7">
                  <p
                    className="font-display text-[1.75rem] leading-none font-bold tracking-tight uppercase sm:text-[2rem]"
                    style={{ color: SAGE }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm font-semibold tracking-[0.14em] text-white uppercase sm:text-[0.9375rem]">
                    {stat.label}
                  </p>
                  <p className="mt-3 max-w-[28ch] text-base leading-[1.55] text-white">
                    {stat.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <ul className="mt-8 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-7 lg:grid-cols-4">
            {market.callouts.map((callout, index) => (
              <Reveal key={callout.title} variant="up" delay={index * 40}>
                <li>
                  <p
                    className="text-sm font-bold tracking-[0.12em] uppercase sm:text-[0.9375rem]"
                    style={{ color: SAGE }}
                  >
                    {String(index + 1).padStart(2, "0")} · {callout.title}
                  </p>
                  <p className="mt-2.5 text-base leading-[1.55] text-white">
                    {callout.body}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Deployment / How It Works — left sticky, right scrolls */}
      <section className="relative bg-[#f3f0e8] py-10 text-[#101820] sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            {/* Sticky left: stays fixed while steps scroll past */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Reveal variant="left" className="flex flex-col">
                <SectionEyebrow>Deployment</SectionEyebrow>
                <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.5rem]">
                  How It <span style={{ color: SAGE }}>Works.</span>
                </h2>
                <p
                  className="mt-4 max-w-[28rem] text-base leading-[1.65] sm:text-[1.0625rem]"
                  style={{ color: MUTED }}
                >
                  {market.applicationsIntro}
                </p>
                <div className="relative mt-8 aspect-[5/4] w-full overflow-hidden bg-[#dfe4dc] sm:aspect-[4/3] lg:mt-10">
                  <Image
                    src={market.images.secondary.src}
                    alt={market.images.secondary.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal variant="right" delay={60} className="lg:pt-1">
              <ol
                className="relative space-y-10 border-l-2 sm:space-y-12 lg:space-y-16"
                style={{ borderColor: `${SAGE}55` }}
              >
                {market.applications.map((item, index) => (
                  <li key={item} className="relative min-h-[4.5rem] pl-8 sm:pl-10 lg:min-h-[5.5rem]">
                    <span
                      aria-hidden
                      className="absolute top-0.5 left-0 flex size-7 -translate-x-1/2 items-center justify-center rounded-full border-2 bg-[#f3f0e8] text-[0.7rem] font-bold"
                      style={{ borderColor: SAGE, color: SAGE }}
                    >
                      {index + 1}
                    </span>
                    <p
                      className="font-display text-sm font-bold tracking-[0.16em] uppercase"
                      style={{ color: SAGE }}
                    >
                      Step {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 max-w-[36rem] text-base leading-[1.55] text-[#20251f] sm:text-[1.0625rem]">
                      {item}
                    </p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Compact product dossier rows */}
      <section className="bg-[#fbfaf7] py-10 text-[#101820] sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>Systems</SectionEyebrow>
            <h2 className="mt-2.5 type-section-h2">
              Mission <span style={{ color: SAGE }}>Hardware.</span>
            </h2>
            <p className="type-section-body mt-3 max-w-[42rem]" style={{ color: MUTED }}>
              {market.productsIntro}
            </p>
          </Reveal>

          <div className="mt-8 divide-y divide-[#d9d8d0] border-y border-[#d9d8d0]">
            {market.products.map((product, index) => (
              <Reveal key={product.name} variant="up" delay={index * 50}>
                <Link
                  href={product.href}
                  className="group grid items-center gap-4 py-5 sm:grid-cols-[7.5rem_1fr_auto] sm:gap-6 sm:py-6"
                >
                  <div className="relative aspect-[5/4] w-full max-w-[7.5rem] overflow-hidden bg-[#101820]">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      sizes="120px"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold tracking-[0.16em] uppercase" style={{ color: SAGE }}>
                      {product.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-xl font-bold tracking-tight uppercase transition-colors group-hover:text-[#6e7f42] sm:text-2xl">
                      {product.name}
                    </h3>
                    <p className="mt-1.5 max-w-[40rem] text-sm leading-[1.5]" style={{ color: MUTED }}>
                      {product.body}
                    </p>
                  </div>
                  <ArrowRight
                    className="hidden size-5 text-[#6e7f42] transition-transform group-hover:translate-x-1 sm:block"
                    aria-hidden
                  />
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
