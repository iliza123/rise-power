import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { hydrogenEcosystem } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const pageInset = "mx-auto w-full max-w-[1760px] px-6 lg:px-10";
const sectionY =
  "pt-10 pb-10 sm:pt-12 sm:pb-12 lg:pt-14 lg:pb-14";

export function HydrogenEcosystem() {
  const {
    eyebrow,
    headingBefore,
    headingAccent,
    body,
    imageSrc,
    imageAlt,
    cta,
  } = hydrogenEcosystem;

  return (
    <section
      id="hydrogen-ecosystem"
      className={`scroll-mt-28 bg-[#f3f0e8] ${sectionY}`}
    >
      <div className={pageInset}>
        <Reveal variant="up">
          <header className="mx-auto max-w-3xl text-center">
            <p className="type-eyebrow" style={{ color: sage }}>
              {eyebrow}
            </p>
            <h2 className="type-section-h2 mt-3 text-[#1a1c16]">
              {headingBefore}{" "}
              <span style={{ color: sage }}>{headingAccent}</span>
            </h2>
            <p className="type-section-body mx-auto mt-4 max-w-3xl">{body}</p>
          </header>
        </Reveal>

        <Reveal variant="fade">
          <div className="relative mx-auto mt-8 w-full max-w-[920px] overflow-hidden rounded-2xl border border-[#e4e0d6] bg-white shadow-[0_12px_40px_rgba(20,26,20,0.08)] sm:mt-10 lg:max-w-[1040px]">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1672}
              height={941}
              quality={85}
              className="h-auto w-full"
              sizes="(max-width: 1040px) 100vw, 1040px"
              priority={false}
            />
          </div>

          <div className="mt-8 flex justify-center sm:mt-10">
            <Link
              href={cta.href}
              className="type-cta inline-flex min-h-12 items-center justify-center gap-2 rounded-sm px-7 text-white transition-opacity duration-200 hover:opacity-90"
              style={{ background: sage }}
            >
              {cta.label}
              <ArrowRight className="size-4" strokeWidth={2} aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
