import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

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
] as const;

/** One Cartridge Ecosystem — Engineered As a System. */
export function CartridgeEcosystem() {
  return (
    <section className="relative overflow-hidden bg-[#0e1210] py-12 sm:py-14 lg:py-16">
      <Image
        src="/media/products/product-ecosystem.png"
        alt="Rise Power ecosystem"
        fill
        quality={90}
        sizes="100vw"
        className="object-cover object-[center_42%]"
      />
      <div className="absolute inset-0 bg-white/10" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[22%] bg-gradient-to-r from-white/80 via-white/35 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[1] w-[14%] bg-gradient-to-l from-white/55 via-white/20 to-transparent" />

      <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)_minmax(0,0.85fr)] lg:gap-6 lg:px-10">
        <Reveal variant="left" className="relative max-w-[34rem]">
          <div className="relative rounded-xl border border-[#e8e6df] bg-white/95 px-5 py-5 shadow-[6px_6px_0_0_rgba(20,26,20,0.35)] sm:px-6 sm:py-6">
            <p className="text-base font-semibold tracking-[0.14em] text-[#6e7f42] uppercase sm:text-[0.9375rem]">
              ⌁ One Cartridge Ecosystem
            </p>

            <h2 className="mt-3 text-[2rem] leading-[1.08] font-bold tracking-tight text-[#141a14] sm:text-[2.35rem] lg:text-[2.65rem]">
              Engineered
              <br />
              <span className="text-[#6e7f42]">As a System.</span>
            </h2>

            <p className="mt-4 max-w-[28rem] text-[14px] leading-relaxed text-[#3f3c36] sm:text-[15px]">
              Every Rise Power product is designed as a complete system. Power
              generation, fuel delivery, controls, and enclosure working
              together. Integrated system design delivers better performance and
              reliability than assembled from parts alternatives.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-[#252925] bg-white px-6 text-sm font-semibold uppercase shadow-[3px_3px_0_0_rgba(20,26,20,0.28)] transition-colors hover:bg-[#141a14] hover:text-white"
              >
                Request a Briefing
              </Link>

              <Link
                href="/use-cases"
                className="inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#141a14]"
              >
                See Case Studies
                <ArrowRight className="size-4 text-[#6e7f42]" />
              </Link>
            </div>
          </div>
        </Reveal>

        <div className="hidden min-h-[18rem] lg:block" aria-hidden />

        <RevealStagger
          className="flex w-full max-w-md flex-col gap-3 justify-self-end lg:max-w-none"
          step={70}
          variant="right"
        >
          {systemFlow.map((item, index) => (
            <div
              key={item.title}
              className="relative flex items-stretch rounded-md border border-[#e8e6df] bg-white/95 shadow-[5px_5px_0_0_rgba(20,26,20,0.32)]"
            >
              <div className="relative m-2.5 h-14 w-14 shrink-0 self-center overflow-hidden rounded-sm bg-[#f7f6f2] sm:h-16 sm:w-16">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="64px"
                  className="object-contain p-0.5"
                />
              </div>

              <div className="relative w-3 shrink-0">
                {index !== 0 && (
                  <span className="absolute -top-3.5 bottom-1/2 left-1/2 w-px -translate-x-1/2 bg-[#c5c8bf]" />
                )}
                {index !== systemFlow.length - 1 && (
                  <span className="absolute top-1/2 -bottom-3.5 left-1/2 w-px -translate-x-1/2 bg-[#c5c8bf]" />
                )}
                <span className="absolute top-1/2 left-1/2 z-10 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6e7f42] ring-[3px] ring-white" />
              </div>

              <div className="min-w-0 flex-1 self-center py-2.5 pr-3.5 pl-1">
                <h3 className="text-base font-bold leading-tight tracking-wide text-[#141a14] uppercase sm:text-[13px]">
                  {item.title}
                </h3>
                <p className="mt-0.5 text-sm leading-snug text-[#5c584e] sm:text-[13px]">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
