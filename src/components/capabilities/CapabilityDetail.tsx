import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import {
  getRelatedCapabilities,
  type CapabilityDetailPage,
} from "@/lib/capabilities";
import { capabilities } from "@/lib/home-content";

const SAGE = "#6e7f42";
const CREAM = "#fbfaf7";
const MUTED = "#66717d";
const SECTION_PAD = "py-8 sm:py-10 lg:py-12";
const SECTION_RULE = "#e0e3dd";

function isSchematicAsset(src: string) {
  return src.includes("engineering.png");
}

function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  const color = light ? "#ffffff" : SAGE;

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

/** Accent a short trailing phrase after " & ", else the final word. */
function TitleWithAccent({ title }: { title: string }) {
  if (title.includes(" & ")) {
    const [before, after] = title.split(" & ");
    const afterWords = after.trim().split(/\s+/);
    if (afterWords.length <= 2) {
      return (
        <>
          {before} & <span style={{ color: SAGE }}>{after}</span>
        </>
      );
    }
  }

  const parts = title.trim().split(/\s+/);
  if (parts.length < 2) return <>{title}</>;

  const head = parts.slice(0, -1).join(" ");
  const tail = parts[parts.length - 1];

  return (
    <>
      {head} <span style={{ color: SAGE }}>{tail}</span>
    </>
  );
}

function galleryHeading(capability: CapabilityDetailPage) {
  switch (capability.id) {
    case "engineering":
      return {
        before: "From concept to",
        accent: "hardware.",
      };
    case "integration":
      return {
        before: "Platforms in",
        accent: "context.",
      };
    case "field":
      return {
        before: "Deployed where it",
        accent: "matters.",
      };
    case "safety":
      return {
        before: "Safety in",
        accent: "practice.",
      };
    default:
      return {
        before: `${capability.label} in`,
        accent: "focus.",
      };
  }
}

type CapabilityDetailProps = {
  capability: CapabilityDetailPage;
};

export function CapabilityDetail({ capability }: CapabilityDetailProps) {
  const roadmap = capabilities.certificationRoadmap;
  const related = getRelatedCapabilities(capability);
  const galleryCopy = galleryHeading(capability);

  return (
    <main className="bg-[#fbfaf7] text-[#101820]">
      {/* 1. Hero */}
      <StackedPageHero
        imageSrc={capability.images.hero.src}
        imageAlt={capability.images.hero.alt}
        tone="#101820"
        compact
      >
        <div className="hero-animate-copy max-w-[720px]">
          <SectionEyebrow light>
            {capability.eyebrow || "Capability"}
          </SectionEyebrow>

          <h1 className="mt-4 type-page-h1">
            <TitleWithAccent title={capability.title} />
          </h1>

          <p className="type-section-body mt-5 max-w-xl !text-white/90 sm:mt-6">
            {capability.heroBody}
          </p>

          <div className="mt-7 sm:mt-8">
            <Link
              href="/capabilities"
              className="group inline-flex min-h-11 items-center justify-center gap-2.5 rounded-sm border border-white/45 px-6 text-xs font-semibold tracking-[0.12em] text-white uppercase transition-colors hover:border-white hover:bg-white/10 sm:min-h-12 sm:px-7"
            >
              <ArrowLeft
                className="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
                strokeWidth={2}
                aria-hidden
              />
              All Capabilities
            </Link>
          </div>
        </div>
      </StackedPageHero>

      {/* 2. Overview — body + stats + callouts */}
      <section
        className="relative overflow-hidden py-8 sm:py-9 lg:py-10"
        style={{ background: CREAM }}
      >
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <div className="max-w-2xl">
              <SectionEyebrow>Overview</SectionEyebrow>
              <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
                <TitleWithAccent title={capability.heading} />
              </h2>
              <p
                className="mt-4 max-w-[42rem] text-[1.0625rem] leading-[1.65] font-normal sm:text-lg"
                style={{ color: MUTED }}
              >
                {capability.body}
              </p>
            </div>
          </Reveal>

          {capability.stats.length > 0 ? (
            <div className="mt-7 border-t border-[#c9c4b8] sm:mt-8">
              <div className="grid grid-cols-1 divide-y divide-[#c9c4b8] sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4">
                {capability.stats.map((stat, index) => {
                  const isOdd = index % 2 === 1;
                  const isBottomRow = index >= 2;

                  return (
                    <Reveal key={stat.label} variant="up" delay={index * 60}>
                      <article
                        className={[
                          "px-0 py-5 sm:px-4 sm:py-6 lg:px-5 lg:py-6",
                          isOdd ? "sm:border-l sm:border-[#c9c4b8]" : "",
                          isBottomRow
                            ? "sm:border-t sm:border-[#c9c4b8] lg:border-t-0"
                            : "",
                          index > 0 ? "lg:border-l lg:border-[#c9c4b8]" : "",
                        ].join(" ")}
                      >
                        <p className="font-display text-xs font-medium tracking-[0.2em] text-[#8a9186] uppercase">
                          {String(index + 1).padStart(2, "0")}
                        </p>
                        <p className="mt-2.5 font-display text-[1.5rem] leading-[1.05] font-bold tracking-tight text-[#101820] uppercase sm:text-[1.75rem] lg:text-[1.875rem]">
                          {stat.value}
                        </p>
                        <p
                          className="mt-2.5 text-[13px] font-semibold tracking-[0.12em] uppercase sm:text-sm"
                          style={{ color: SAGE }}
                        >
                          {stat.label}
                        </p>
                        <p
                          className="mt-2.5 max-w-[24ch] text-[0.9375rem] leading-[1.5] font-normal sm:text-base"
                          style={{ color: MUTED }}
                        >
                          {stat.body}
                        </p>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          ) : null}

          {capability.callouts.length > 0 ? (
            <ul
              className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 border-t pt-6 sm:mt-7 sm:grid-cols-2 sm:pt-6 lg:grid-cols-4 lg:gap-x-8"
              style={{ borderColor: SECTION_RULE }}
            >
              {capability.callouts.map((callout, index) => (
                <Reveal key={callout.title} variant="up" delay={index * 50}>
                  <li className="min-w-0">
                    <div className="flex items-start gap-2.5">
                      <span
                        aria-hidden
                        className="mt-2 size-1.5 shrink-0 rounded-full"
                        style={{ background: SAGE }}
                      />
                      <div>
                        <p className="text-[13px] font-bold tracking-[0.1em] text-[#101820] uppercase sm:text-sm">
                          {callout.title}
                        </p>
                        <p
                          className="mt-1.5 text-[0.9375rem] leading-[1.5] font-normal sm:text-base"
                          style={{ color: MUTED }}
                        >
                          {callout.body}
                        </p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ul>
          ) : null}
        </div>
      </section>

      {/* 3. What We Deliver */}
      <section
        className="relative overflow-hidden border-t py-7 sm:py-8 lg:py-9"
        style={{ background: "#f3f0e8", borderColor: SECTION_RULE }}
      >
        <div className="relative mx-auto grid max-w-[1440px] items-start gap-5 px-6 lg:grid-cols-[1.35fr_0.65fr] lg:gap-7 lg:px-10">
          <Reveal variant="left">
            <SectionEyebrow>What We Deliver</SectionEyebrow>

            <h2 className="mt-3 font-display text-[1.75rem] leading-[0.95] font-bold tracking-tight uppercase sm:text-[2.25rem] lg:text-[2.75rem]">
              Scope of <span style={{ color: SAGE }}>Work.</span>
            </h2>

            <p
              className="mt-4 max-w-[560px] text-base leading-[1.65] font-normal sm:text-[1.0625rem]"
              style={{ color: MUTED }}
            >
              {capability.deliverablesIntro}
            </p>

            <ol className="mt-5 space-y-0 sm:mt-5">
              {capability.deliverables.map((item, index) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 border-b py-2.5 first:border-t first:pt-2.5 last:border-b-0 sm:gap-5 sm:py-3"
                  style={{ borderColor: SECTION_RULE }}
                >
                  <span
                    className="w-8 shrink-0 font-display text-lg leading-none font-bold sm:w-9 sm:text-xl"
                    style={{ color: SAGE }}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-[1.5] font-medium text-[#20251f] sm:text-[1.0625rem]">
                    {item}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal variant="right" delay={80} className="min-w-0 lg:justify-self-end lg:w-full lg:max-w-[380px]">
            <div className="relative aspect-[4/3] overflow-hidden bg-[#dfe4dc] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image
                src={capability.images.secondary.src}
                alt={capability.images.secondary.alt}
                fill
                sizes="(min-width: 1024px) 380px, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. Certification roadmap — safety only */}
      {capability.showRoadmap ? (
        <section className={`relative overflow-hidden bg-white ${SECTION_PAD}`}>
          <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <div className="max-w-3xl">
                <SectionEyebrow>{roadmap.eyebrow}</SectionEyebrow>

                <h2 className="mt-2.5 type-section-h2">
                  {roadmap.heading}
                </h2>

                <p
                  className="type-section-body mt-3 max-w-[680px]"
                  style={{ color: MUTED }}
                >
                  {roadmap.body}
                </p>
              </div>
            </Reveal>

            <div
              className="mt-6 space-y-0 border-t sm:mt-7"
              style={{ borderColor: SECTION_RULE }}
            >
              {roadmap.items.map((item, index) => (
                <Reveal key={item.standard} variant="up" delay={index * 40}>
                  <article
                    className="grid gap-2 border-b py-4 sm:grid-cols-[140px_1fr] sm:gap-8 sm:py-5 lg:grid-cols-[140px_1.1fr_1fr] lg:gap-10"
                    style={{ borderColor: SECTION_RULE }}
                  >
                    <p
                      className="text-xs font-semibold tracking-[0.16em] uppercase"
                      style={{ color: SAGE }}
                    >
                      {item.status}
                    </p>

                    <h3 className="font-display text-xl leading-snug font-bold tracking-tight uppercase sm:text-2xl">
                      {item.standard}
                    </h3>

                    <p
                      className="type-section-body lg:pt-1"
                      style={{ color: MUTED }}
                    >
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 5. In Focus gallery — equal cells, shared aspect */}
      <section className={`overflow-hidden bg-white ${SECTION_PAD}`}>
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal variant="up">
            <SectionEyebrow>In Focus</SectionEyebrow>
            <h2 className="mt-2.5 max-w-3xl type-section-h2">
              {galleryCopy.before}{" "}
              <span style={{ color: SAGE }}>{galleryCopy.accent}</span>
            </h2>
          </Reveal>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-3 lg:gap-4">
            {capability.gallery.map((item, index) => (
              <Reveal
                key={item.src}
                variant="fade"
                delay={index * 70}
                className="min-w-0"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 33vw, 100vw"
                    className={
                      isSchematicAsset(item.src)
                        ? "object-contain object-center transition-transform duration-700 hover:scale-[1.02]"
                        : "object-cover transition-transform duration-700 hover:scale-[1.03]"
                    }
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Related capabilities */}
      {related.length > 0 ? (
        <section
          className={`border-t ${SECTION_PAD}`}
          style={{ background: CREAM, borderColor: SECTION_RULE }}
        >
          <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
            <Reveal variant="up">
              <SectionEyebrow>Related</SectionEyebrow>
              <h2 className="mt-2.5 type-section-h2">
                Other capabilities
              </h2>
            </Reveal>

            <div className="mt-5 grid gap-6 sm:mt-6 md:grid-cols-3 md:gap-5 lg:gap-6">
              {related.map((item, index) => (
                <Reveal key={item.slug} variant="up" delay={index * 80} className="min-w-0">
                  <Link href={item.href} className="group block h-full">
                    <div className="relative aspect-[16/10] overflow-hidden bg-[#101820]">
                      <Image
                        src={item.images.hero.src}
                        alt={item.images.hero.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 100vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <p
                      className="mt-3 text-[11px] font-semibold tracking-[0.16em] uppercase"
                      style={{ color: SAGE }}
                    >
                      {item.label}
                    </p>

                    <h3 className="mt-1 font-display text-xl leading-[1.05] font-bold tracking-tight text-[#101820] uppercase transition-colors group-hover:text-[#6e7f42] sm:text-2xl">
                      {item.title}
                    </h3>

                    <p
                      className="type-card-body mt-2 line-clamp-3"
                      style={{ color: MUTED }}
                    >
                      {item.body}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
