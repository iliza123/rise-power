import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  ArrowRight,
  Lock,
  RefreshCw,
  ShieldCheck,
  VolumeX,
} from "lucide-react";
import { closingCta } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const cream = "#f3efe4";

const chipIcons: LucideIcon[] = [
  ShieldCheck,
  VolumeX,
  RefreshCw,
  Lock,
];

export function ClosingCta() {
  return (
    <section
      id="demo"
      className="relative flex min-h-[22rem] w-full items-center overflow-hidden bg-[#061018] text-[#f3efe4] sm:min-h-[26rem] lg:min-h-[28rem]"
    >
      <Image
        src={closingCta.imageSrc ?? "/media/cta/closing.jpg"}
        alt={closingCta.image}
        fill
        quality={90}
        priority={false}
        sizes="100vw"
        className="object-cover object-[center_48%]"
      />

      {/* Overall dark mood */}
      <div className="absolute inset-0 bg-[#061018]/30" />

      {/* Left text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061018]/80 via-[#061018]/45 to-transparent" />

      {/* Right side slight dark */}
      <div className="absolute inset-0 bg-gradient-to-l from-[#061018]/25 via-transparent to-transparent" />

      {/* Bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#061018]/75 via-[#061018]/35 to-transparent" />

      <div className="relative mx-auto w-full max-w-[1716px] px-5 py-8 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div className="grid items-start xl:grid-cols-[minmax(0,1.75fr)_minmax(0,0.55fr)] xl:items-center xl:gap-10">
          {/* Story — shown once */}
          <div className="min-w-0">
            <Reveal variant="up">
              <h2 className="type-section-h2">
                {closingCta.headingBefore}
                <br />
                <span style={{ color: sage }}>{closingCta.headingAccent}</span>
              </h2>

              <p className="type-section-body mt-4 max-w-[650px] !text-white sm:mt-6">
                {closingCta.body}
              </p>
            </Reveal>

            <RevealStagger
              className="mt-6 grid grid-cols-2 gap-x-5 gap-y-4 sm:mt-8 sm:gap-x-6 sm:gap-y-5 lg:mt-9 lg:grid-cols-4 lg:gap-x-6"
              step={70}
              variant="up"
              baseDelay={40}
            >
              {closingCta.chips.map((chip, index) => {
                const Icon = chipIcons[index] ?? ShieldCheck;

                return (
                  <div
                    key={chip.title}
                    className="group relative flex min-w-0 items-start gap-2.5 sm:gap-3"
                  >
                    <span
                      className="relative grid size-9 shrink-0 place-items-center rounded-full sm:size-11"
                      aria-hidden
                    >
                      <span
                        className="absolute inset-0 rounded-full opacity-35 transition-opacity duration-300 group-hover:opacity-60"
                        style={{
                          background: `radial-gradient(circle, ${sage}40 0%, transparent 72%)`,
                        }}
                      />
                      <span
                        className="absolute inset-0 rounded-full border"
                        style={{ borderColor: `${sage}70` }}
                      />
                      <span className="absolute inset-[2px] rounded-full border border-white/10 bg-[#061018]/40" />
                      <Icon
                        className="relative size-4 sm:size-[18px]"
                        strokeWidth={1.45}
                        style={{ color: cream }}
                      />
                    </span>

                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="type-card-label text-base leading-tight text-white">
                        {chip.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-snug text-white sm:text-[0.9375rem]">
                        {chip.subtitle}
                      </p>
                      <span
                        className="mt-1.5 block h-px w-6 origin-left transition-transform duration-300 group-hover:scale-x-125 sm:mt-2"
                        style={{ background: sage }}
                        aria-hidden
                      />
                    </div>
                  </div>
                );
              })}
            </RevealStagger>
          </div>

          {/* Actions only — no repeated headline/body */}
          <Reveal variant="right" delay={120} className="mt-6 sm:mt-7 xl:mt-0">
            <div className="border-t border-white/15 pt-5 xl:border-t-0 xl:pt-0 xl:pl-10">
              <p className="type-eyebrow text-white">
                {closingCta.panelEyebrow}
              </p>

              <div className="mt-3 flex max-w-[430px] flex-col gap-2.5 sm:mt-4 sm:gap-3">
                <Link
                  href={closingCta.primaryCta.href}
                  className="type-cta motion-hover-glow inline-flex min-h-11 items-center justify-center gap-3 rounded-sm bg-[#849363] px-6 transition-transform hover:-translate-y-0.5 sm:min-h-12"
                  style={{ color: cream }}
                >
                  {closingCta.primaryCta.label}
                  <ArrowRight className="size-5" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
