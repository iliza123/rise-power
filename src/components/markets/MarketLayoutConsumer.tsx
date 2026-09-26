import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { type MarketDetailPage } from "@/lib/markets";
import {
  CREAM,
  HeroCtas,
  MUTED,
  OVERLAY_WASH,
  SAGE,
  SECTION_RULE,
  SectionEyebrow,
  TitleWithAccent,
} from "./market-ui";

/** Lifestyle / open — centered copy, feature rows, Sentinel spotlight. */
export function MarketLayoutConsumer({
  market,
}: {
  market: MarketDetailPage;
}) {
  const [featured, ...otherProducts] = market.products;

  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      {/* Overlay hero — different from split used on defense/commercial */}
      <StackedPageHero
        layout="overlay"
        imageSrc={market.images.hero.src}
        mobileImageSrc={market.images.hero.mobileSrc}
        imageAlt={market.images.hero.alt}
        imageClassName="object-cover object-[center_45%]"
        tone="#0a0f10"
        splitWash={OVERLAY_WASH}
      >
        <div className="hero-animate-copy mx-auto w-full max-w-3xl text-center sm:mx-0 sm:max-w-[34rem] sm:text-left">
          <div className="flex justify-center sm:justify-start">
            <SectionEyebrow light>{market.eyebrow}</SectionEyebrow>
          </div>
          <h1 className="mt-4 type-page-h1 text-white [text-shadow:none] sm:mt-5">
            <TitleWithAccent title={market.title} />
          </h1>
          <p className="type-section-body mt-5 !text-white/90 sm:mt-6">
            {market.heroBody}
          </p>
          <div className="flex justify-center sm:justify-start">
            <HeroCtas
              primaryHref={market.cta.href}
              primaryLabel={market.cta.label}
            />
          </div>
        </div>
      </StackedPageHero>

      {/* Centered overview */}
      <section className="py-12 sm:py-14 lg:py-16" style={{ background: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <SectionEyebrow center>Overview</SectionEyebrow>
            <h2 className="mt-4 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.35rem] lg:text-[2.75rem]">
              <TitleWithAccent title={market.heading} />
            </h2>
            <p
              className="mt-5 text-[1.0625rem] leading-[1.7] sm:text-lg"
              style={{ color: MUTED }}
            >
              {market.body}
            </p>
          </Reveal>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-4">
            {market.stats.map((stat, index) => (
              <Reveal key={stat.label} variant="up" delay={index * 50} className="text-center">
                <p className="font-display text-[1.75rem] font-bold tracking-tight uppercase sm:text-[2rem]" style={{ color: SAGE }}>
                  {stat.value}
                </p>
                <p className="mt-1.5 text-xs font-semibold tracking-[0.14em] text-[#101820] uppercase">
                  {stat.label}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Large feature rows — not a dense 4-col grid */}
      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[900px] px-6 lg:px-10">
          <Reveal variant="up" className="text-center">
            <SectionEyebrow center>Consumer</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem]">
              Camping, RV Power &{" "}
              <span style={{ color: SAGE }}>Emergency Home Backup.</span>
            </h2>
          </Reveal>

          <ul className="mt-10 space-y-0">
            {market.callouts.map((callout, index) => (
              <Reveal key={callout.title} variant="up" delay={index * 50}>
                <li
                  className="border-b py-6 first:border-t sm:py-7"
                  style={{ borderColor: SECTION_RULE }}
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <h3 className="font-display text-2xl font-bold tracking-tight uppercase sm:text-[1.75rem]">
                      {callout.title}
                    </h3>
                    <p className="max-w-md text-base leading-[1.55] sm:text-right" style={{ color: MUTED }}>
                      {callout.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works — soft image + short list */}
      <section className="overflow-hidden py-10 sm:py-12 lg:py-14" style={{ background: "#f7f4ec" }}>
        <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-6 lg:grid-cols-[1fr_1fr] lg:gap-12 lg:px-10">
          <Reveal variant="left">
            <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[5/4]">
              <Image
                src={market.images.secondary.src}
                alt={market.images.secondary.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>
          <Reveal variant="right" delay={70}>
            <SectionEyebrow>Applications</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem]">
              How It <span style={{ color: SAGE }}>Works.</span>
            </h2>
            <p className="mt-4 text-base leading-[1.65]" style={{ color: MUTED }}>
              {market.applicationsIntro}
            </p>
            <ol className="mt-6 space-y-4">
              {market.applications.slice(0, 4).map((item, index) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-0.5 flex size-7 shrink-0 items-center justify-center font-display text-sm font-bold"
                    style={{ color: SAGE, background: `${SAGE}18` }}
                  >
                    {index + 1}
                  </span>
                  <p className="text-base leading-[1.5] text-[#20251f]">{item}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Sentinel spotlight */}
      <section className="bg-white py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <SectionEyebrow center>Systems</SectionEyebrow>
            <h2 className="mt-3 type-section-h2">
              Power You Can <span style={{ color: SAGE }}>Depend On.</span>
            </h2>
            <p className="type-section-body mt-3" style={{ color: MUTED }}>
              {market.productsIntro}
            </p>
          </Reveal>

          {featured ? (
            <Reveal variant="up" delay={60}>
              <Link
                href={featured.href}
                className="group relative mx-auto mt-8 block max-w-4xl overflow-hidden"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#101820] sm:aspect-[2.1/1]">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 900px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f10]/85 via-[#0a0f10]/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-8">
                    <p className="text-sm font-semibold tracking-[0.16em] text-white/70 uppercase">
                      {featured.tagline}
                    </p>
                    <h3 className="mt-1 font-display text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl">
                      {featured.name}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-[1.5] text-white/75 sm:text-base">
                      {featured.body}
                    </p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ) : null}

          {otherProducts.length > 0 ? (
            <div className="mx-auto mt-6 flex max-w-4xl flex-col gap-3 sm:flex-row sm:gap-4">
              {otherProducts.map((product, index) => (
                <Reveal key={product.name} variant="up" delay={index * 60} className="min-w-0 flex-1">
                  <Link
                    href={product.href}
                    className="group flex h-full items-center gap-4 border border-[#e8e6de] bg-[#fbfaf7] p-4 transition-colors hover:border-[#6e7f42]"
                  >
                    <div className="relative size-16 shrink-0 overflow-hidden bg-[#101820] sm:size-20">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-display text-base font-bold tracking-tight uppercase transition-colors group-hover:text-[#6e7f42] sm:text-lg">
                        {product.name}
                      </h3>
                      <p className="mt-0.5 text-sm" style={{ color: MUTED }}>
                        {product.tagline}
                      </p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
