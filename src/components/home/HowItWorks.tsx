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
        sizes="(max-width: 1024px) 80px, 96px"
      />
    </div>
  );
}

function FlowArrow({ className }: { className?: string }) {
  return (
    <ArrowRight
      className={`size-4 shrink-0 text-[#8a8f82] sm:size-[1.125rem] lg:size-5 ${className ?? ""}`}
      strokeWidth={2}
      aria-hidden
    />
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
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-5">
          {/* Left — shared section type scale */}
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
              className="type-cta mt-6 inline-flex w-fit min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-white transition-opacity duration-200 hover:opacity-90"
              style={{ background: sage }}
            >
              {cta.label}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
            </Link>
          </Reveal>

          {/* Center — single-row process diagram (scroll on narrow viewports) */}
          <Reveal variant="fade" className="h-full min-w-0 lg:col-span-6">
            <div className="flex h-full min-h-0 flex-col justify-center rounded-2xl border border-[#e0dcd3] bg-white px-3 py-6 sm:px-5 sm:py-7 lg:px-6 lg:py-8">
              <div className="overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]">
                <div
                  className="mx-auto flex w-max flex-nowrap items-center justify-center gap-1.5 px-1 sm:gap-2.5 lg:gap-3 xl:gap-3.5"
                  role="img"
                  aria-label="Hydrogen flows through a fuel cell to produce electricity, water, and heat"
                >
                  {hydrogenIn ? (
                    <CircleAsset
                      src={hydrogenIn.imageSrc}
                      alt={hydrogenIn.alt}
                      sizeClass="size-[4.5rem] sm:size-20 lg:size-[5.25rem] xl:size-24"
                    />
                  ) : null}

                  <FlowArrow />

                  <div className="relative h-[4.5rem] w-[5.25rem] shrink-0 sm:h-20 sm:w-24 lg:h-[5.25rem] lg:w-28 xl:h-24 xl:w-32">
                    <Image
                      src={diagram.stackImageSrc}
                      alt={diagram.stackAlt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 96px, 128px"
                    />
                  </div>

                  {diagram.outputs.map((out) => (
                    <div key={out.label} className="contents">
                      <FlowArrow />
                      <CircleAsset
                        src={out.imageSrc}
                        alt={out.alt}
                        sizeClass="size-[4.5rem] sm:size-20 lg:size-[5.25rem] xl:size-24"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5 border-t border-[#eeeae3] pt-5 sm:mt-6 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-5 sm:gap-y-2 sm:pt-6 md:gap-x-6">
                {diagram.legend.map((item, index) => (
                  <li
                    key={item}
                    className="type-card-label flex max-w-full items-center gap-2 text-[#5c5f56]"
                  >
                    <span
                      className="size-2 shrink-0 rounded-full"
                      style={{
                        background: legendColors[index] ?? "#8a8f82",
                      }}
                      aria-hidden
                    />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right — Zero Emissions */}
          <Reveal variant="up" className="h-full min-w-0 lg:col-span-3">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-[#141814] px-6 py-7 text-white sm:px-7 sm:py-8 lg:gap-8 lg:px-6 lg:py-8 xl:px-7">
              <div>
                <span
                  className="relative mb-4 grid size-11 place-items-center lg:mb-5"
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

                <h3 className="type-card-title text-white">
                  {zeroEmissions.title}
                </h3>
                <p className="type-card-body-on-dark mt-2 text-white/70">
                  {zeroEmissions.subtitle}
                </p>
              </div>

              <div className="h-px w-full shrink-0 bg-white/15" aria-hidden />

              <ul className="space-y-4 sm:space-y-5">
                {zeroEmissions.bullets.map((item, index) => {
                  const Icon = index === 0 ? Leaf : VolumeX;
                  return (
                    <li key={item} className="flex items-center gap-3">
                      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-white/20 bg-white/5">
                        <Icon
                          className="size-4 text-white/90"
                          strokeWidth={1.6}
                          aria-hidden
                        />
                      </span>
                      <span className="type-card-label text-white/90">
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
