import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Hexagon, Leaf, VolumeX } from "lucide-react";
import { howItWorks } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";

const sage = "#6e7f42";
/** Match HomePage section rhythm */
const pageInset = "mx-auto w-full max-w-[1760px] px-6 lg:px-10";
const sectionY = "py-14 sm:py-18 lg:py-20";

const legendColors = [
  "#6e7f42",
  "#7eb8d4",
  "#e8c547",
  "#5b9fd4",
  "#d4544a",
] as const;

function CircleAsset({
  src,
  alt,
  sizeClass,
}: {
  src: string;
  alt: string;
  sizeClass: string;
}) {
  return (
    <div className={`relative shrink-0 ${sizeClass}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain"
        sizes="(max-width: 640px) 96px, 128px"
      />
    </div>
  );
}

export function HowItWorks() {
  const { eyebrow, heading, body, cta, diagram, zeroEmissions } = howItWorks;
  const hydrogenIn = diagram.inputs[0];

  return (
    <section
      id="how-it-works"
      className={`scroll-mt-28 bg-[#f3f0e8] ${sectionY}`}
    >
      <div className={pageInset}>
        <div className="grid items-stretch gap-6 lg:grid-cols-12">
          {/* Left — shared type scale (eyebrow / h2 / body) */}
          <Reveal
            variant="up"
            className="flex h-full flex-col justify-center lg:col-span-3"
          >
            <p className="type-eyebrow" style={{ color: sage }}>
              {eyebrow}
            </p>
            <h2 className="type-section-h2 mt-3 text-[#1a1c16]">{heading}</h2>
            <p className="type-section-body mt-4 max-w-md">{body}</p>
            <Link
              href={cta.href}
              className="mt-6 inline-flex w-fit min-h-12 items-center gap-2 px-7 text-sm font-semibold tracking-[0.08em] text-white uppercase transition-colors duration-200 hover:opacity-90"
              style={{ background: sage }}
            >
              {cta.label}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
            </Link>
          </Reveal>

          {/* Center — one-line process diagram */}
          <Reveal variant="fade" className="h-full lg:col-span-6">
            <div className="flex h-full flex-col justify-center rounded-2xl border border-[#e0dcd3] bg-white px-4 py-6 sm:px-6 sm:py-7 lg:px-7">
              <div className="-mx-1 overflow-x-auto px-1 [scrollbar-width:thin]">
                <div className="mx-auto flex w-max min-w-full items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                  {hydrogenIn ? (
                    <CircleAsset
                      src={hydrogenIn.imageSrc}
                      alt={hydrogenIn.alt}
                      sizeClass="size-20 sm:size-24 lg:size-[6.5rem]"
                    />
                  ) : null}

                  <ArrowRight
                    className="size-5 shrink-0 text-[#8a8f82]"
                    strokeWidth={2}
                    aria-hidden
                  />

                  <div className="relative h-24 w-[6.5rem] shrink-0 sm:h-28 sm:w-32 lg:h-32 lg:w-36">
                    <Image
                      src={diagram.stackImageSrc}
                      alt={diagram.stackAlt}
                      fill
                      className="object-contain"
                      sizes="160px"
                    />
                  </div>

                  {diagram.outputs.map((out) => (
                    <div key={out.label} className="contents">
                      <ArrowRight
                        className="size-5 shrink-0 text-[#8a8f82]"
                        strokeWidth={2}
                        aria-hidden
                      />
                      <CircleAsset
                        src={out.imageSrc}
                        alt={out.alt}
                        sizeClass="size-20 sm:size-24 lg:size-[6.5rem]"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 border-t border-[#eeeae3] pt-5 sm:mt-6 sm:gap-x-6 sm:pt-5">
                {diagram.legend.map((item, index) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 font-display text-[11px] font-semibold tracking-[0.14em] text-[#5c5f56] uppercase sm:text-xs"
                  >
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{
                        background: legendColors[index] ?? "#8a8f82",
                      }}
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right — Zero Emissions (type-card-* tokens) */}
          <Reveal variant="up" className="h-full lg:col-span-3">
            <div className="flex h-full flex-col justify-between gap-8 rounded-2xl bg-[#141814] px-7 py-7 text-white sm:px-8 sm:py-8">
              <div>
                <span
                  className="relative mb-5 grid size-11 place-items-center"
                  aria-hidden
                >
                  <Hexagon
                    className="absolute inset-0 size-11"
                    style={{ color: sage }}
                    strokeWidth={1.35}
                  />
                  <Leaf
                    className="relative size-4"
                    style={{ color: sage }}
                    strokeWidth={1.75}
                  />
                </span>

                <h3 className="type-card-title-lg text-white">
                  {zeroEmissions.title}
                </h3>
                <p className="type-card-body-on-dark mt-2.5 !text-white/70">
                  {zeroEmissions.subtitle}
                </p>
              </div>

              <div
                className="h-px w-full bg-white/15"
                aria-hidden
              />

              <ul className="space-y-5">
                {zeroEmissions.bullets.map((item, index) => {
                  const Icon = index === 0 ? Leaf : VolumeX;
                  return (
                    <li key={item} className="flex items-center gap-3.5">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5">
                        <Icon
                          className="size-4 text-white/90"
                          strokeWidth={1.6}
                          aria-hidden
                        />
                      </span>
                      <span className="font-display text-[15px] font-bold tracking-[0.1em] text-white uppercase sm:text-base">
                        {item}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
