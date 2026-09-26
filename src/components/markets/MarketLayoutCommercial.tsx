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
  SAGE,
  SECTION_RULE,
  SectionEyebrow,
  SPLIT_WASH,
  TitleWithAccent,
} from "./market-ui";

/** Industrial grid — callouts first, alternating application rows, featured product. */
export function MarketLayoutCommercial({
  market,
}: {
  market: MarketDetailPage;
}) {
  const [featured, ...otherProducts] = market.products;
  const applicationMedia = [
    market.images.secondary,
    ...market.gallery,
  ].slice(0, market.applications.length);

  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        layout="split"
        imageSrc={market.images.hero.src}
        mobileImageSrc={market.images.hero.mobileSrc}
        imageAlt={market.images.hero.alt}
        imageClassName="object-cover object-[center_50%]"
        tone="#0a0f10"
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

      {/* Callout tiles first, then body */}
      <section className="py-10 sm:py-12 lg:py-14" style={{ background: CREAM }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>Site Requirements</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              Construction Sites, Telecom Backup &{" "}
              <span style={{ color: SAGE }}>Mining.</span>
            </h2>
          </Reveal>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
            {market.callouts.map((callout, index) => (
              <Reveal key={callout.title} variant="up" delay={index * 60}>
                <article
                  className="border border-[#d9d8d0] bg-white p-5 sm:p-6"
                  style={{ borderColor: SECTION_RULE }}
                >
                  <p className="font-display text-3xl font-bold tabular-nums" style={{ color: SAGE }}>
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-display text-xl font-bold tracking-tight uppercase sm:text-2xl">
                    {callout.title}
                  </h3>
                  <p className="mt-2 text-base leading-[1.55]" style={{ color: MUTED }}>
                    {callout.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal variant="up" delay={100}>
            <p
              className="mt-8 max-w-[48rem] border-t pt-6 text-[1.0625rem] leading-[1.65] sm:mt-10 sm:text-lg"
              style={{ color: MUTED, borderColor: SECTION_RULE }}
            >
              {market.body}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Alternating application rows */}
      <section className="border-t bg-white py-10 sm:py-12 lg:py-14" style={{ borderColor: SECTION_RULE }}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up" className="mx-auto max-w-2xl text-center">
            <SectionEyebrow center>Applications</SectionEyebrow>
            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem]">
              How It <span style={{ color: SAGE }}>Works.</span>
            </h2>
            <p className="mt-4 text-base leading-[1.65]" style={{ color: MUTED }}>
              {market.applicationsIntro}
            </p>
          </Reveal>

          <div className="mt-10 space-y-8 sm:mt-12 sm:space-y-10">
            {market.applications.map((item, index) => {
              const media = applicationMedia[index % applicationMedia.length];
              const imageFirst = index % 2 === 0;

              return (
                <Reveal key={item} variant="up" delay={index * 40}>
                  <article className="grid items-center gap-5 overflow-hidden border border-[#e0e3dd] bg-[#f7f6f2] lg:grid-cols-2 lg:gap-0">
                    <div
                      className={`relative min-h-[200px] overflow-hidden bg-[#101820] sm:min-h-[260px] ${
                        imageFirst ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      {media ? (
                        <Image
                          src={media.src}
                          alt={media.alt}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <div
                      className={`flex flex-col justify-center px-5 py-6 sm:px-8 sm:py-8 ${
                        imageFirst ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <p className="font-display text-3xl font-bold" style={{ color: SAGE }}>
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-3 text-lg leading-[1.5] font-medium text-[#20251f] sm:text-xl">
                        {item}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Titan + siblings */}
      <section className="bg-[#f3f0e8] py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>Systems</SectionEyebrow>
            <h2 className="mt-2.5 type-section-h2">
              Recommended <span style={{ color: SAGE }}>Products.</span>
            </h2>
            <p className="type-section-body mt-3 max-w-[42rem]" style={{ color: MUTED }}>
              {market.productsIntro}
            </p>
          </Reveal>

          {featured ? (
            <Reveal variant="up" delay={60}>
              <Link
                href={featured.href}
                className="group mt-8 grid overflow-hidden border border-[#d9d8d0] bg-white lg:grid-cols-[1.15fr_0.85fr]"
              >
                <div className="relative min-h-[240px] overflow-hidden bg-[#101820] sm:min-h-[320px]">
                  <Image
                    src={featured.imageSrc}
                    alt={featured.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 55vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col justify-center px-6 py-7 sm:px-8 sm:py-9">
                  <p className="text-sm font-semibold tracking-[0.16em] uppercase" style={{ color: SAGE }}>
                    Featured · {featured.tagline}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight uppercase transition-colors group-hover:text-[#6e7f42] sm:text-3xl">
                    {featured.name}
                  </h3>
                  <p className="mt-3 text-base leading-[1.6]" style={{ color: MUTED }}>
                    {featured.body}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase" style={{ color: SAGE }}>
                    View Product
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ) : null}

          {otherProducts.length > 0 ? (
            <div className="mt-5 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {otherProducts.map((product, index) => (
                <Reveal key={product.name} variant="up" delay={index * 60}>
                  <Link href={product.href} className="group block h-full bg-white p-4 sm:p-5">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                      <Image
                        src={product.imageSrc}
                        alt={product.imageAlt}
                        fill
                        sizes="(min-width: 640px) 30vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-3 font-display text-lg font-bold tracking-tight uppercase transition-colors group-hover:text-[#6e7f42]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm leading-[1.45]" style={{ color: MUTED }}>
                      {product.tagline}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {/* Stats as bottom comparison strip */}
      <section className="bg-[#101820] py-8 sm:py-10">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
            {market.stats.map((stat, index) => (
              <Reveal key={stat.label} variant="up" delay={index * 40}>
                <div>
                  <p className="font-display text-[1.75rem] font-bold tracking-tight text-white uppercase sm:text-[2rem]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold tracking-[0.14em] uppercase" style={{ color: SAGE }}>
                    {stat.label}
                  </p>
                  <p className="mt-2 text-base leading-[1.55] text-white">
                    {stat.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
