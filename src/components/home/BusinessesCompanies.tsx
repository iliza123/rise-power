import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { businessesCompanies } from "@/lib/home-content";
import { Reveal, RevealStagger } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const cream = "#f3f0e8";
const ink = "#12150f";

type Company = (typeof businessesCompanies.companies)[number];

function PhotoCompanyCard({
  name,
  body,
  image,
  imageSrc,
  href,
  cta,
  external,
}: Company) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      {...linkProps}
      className="group relative block h-full min-h-[26rem] overflow-hidden rounded-2xl sm:min-h-[28rem] lg:min-h-[30rem]"
    >
      <Image
        src={imageSrc}
        alt={image}
        fill
        quality={85}
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.035]"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />

      <div
        className="absolute inset-0 bg-gradient-to-t from-[#060806]/90 via-[#060806]/28 to-transparent transition-[opacity,background] duration-700 group-hover:from-[#060806]/94 group-hover:via-[#060806]/42"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-[10px] rounded-[14px] ring-1 ring-white/12 transition-[box-shadow,ring-color] duration-700 group-hover:ring-white/22 sm:inset-3"
        aria-hidden
      />

      <div className="absolute inset-x-0 bottom-0 p-7 transition-transform duration-700 ease-out group-hover:-translate-y-1 group-focus-visible:-translate-y-1 sm:p-8 lg:p-9">
        <p className="mb-2.5 text-[10px] font-medium uppercase tracking-[0.22em] text-white/50">
          Group company
        </p>
        <h3 className="type-card-title-lg max-w-sm text-white">{name}</h3>

        {body ? (
          <p className="type-card-body-on-dark mt-4 max-h-32 max-w-md overflow-hidden opacity-100 transition-all duration-500 ease-out [@media(hover:hover)]:mt-0 [@media(hover:hover)]:max-h-0 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:mt-4 [@media(hover:hover)]:group-hover:max-h-32 [@media(hover:hover)]:group-hover:opacity-100 [@media(hover:hover)]:group-focus-visible:mt-4 [@media(hover:hover)]:group-focus-visible:max-h-32 [@media(hover:hover)]:group-focus-visible:opacity-100">
            {body}
          </p>
        ) : null}

        <span className="type-cta-ghost mt-5 inline-flex min-h-11 items-center gap-2.5 rounded-full border border-white/20 bg-white/95 px-5 py-2.5 text-[#3d4a28] backdrop-blur-sm transition-all duration-500 ease-out [@media(hover:hover)]:border-transparent [@media(hover:hover)]:bg-transparent [@media(hover:hover)]:px-0 [@media(hover:hover)]:py-0 [@media(hover:hover)]:text-white/80 [@media(hover:hover)]:backdrop-blur-none [@media(hover:hover)]:group-hover:border-white/20 [@media(hover:hover)]:group-hover:bg-white/95 [@media(hover:hover)]:group-hover:px-5 [@media(hover:hover)]:group-hover:py-2.5 [@media(hover:hover)]:group-hover:text-[#3d4a28] [@media(hover:hover)]:group-hover:backdrop-blur-sm [@media(hover:hover)]:group-focus-visible:border-white/20 [@media(hover:hover)]:group-focus-visible:bg-white/95 [@media(hover:hover)]:group-focus-visible:px-5 [@media(hover:hover)]:group-focus-visible:py-2.5 [@media(hover:hover)]:group-focus-visible:text-[#3d4a28]">
          {cta}
          <ArrowRight
            className="size-3.5 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1"
            strokeWidth={1.6}
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

function LeadershipCompanyCard({
  name,
  body,
  image,
  imageSrc,
  href,
  external,
  tagline,
  headlineBefore,
  headlineAccent,
  role,
  organization,
  primaryCta,
  cta,
}: Company) {
  const linkProps = external
    ? { target: "_blank" as const, rel: "noopener noreferrer" }
    : {};

  const buttonLabel = primaryCta ?? cta;

  return (
    <article className="group relative flex h-full min-h-[28rem] flex-col overflow-hidden rounded-2xl bg-[#0b0e0c] transition-[box-shadow] duration-700 ease-out hover:shadow-[0_28px_60px_-36px_rgba(0,0,0,0.65)] sm:min-h-[30rem] lg:min-h-[32rem] lg:flex-row">
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 92% 18%, rgba(110,127,66,0.16), transparent 42%), radial-gradient(circle at 78% 78%, rgba(110,127,66,0.06), transparent 36%), linear-gradient(165deg, #121712 0%, #0b0e0c 48%, #080a08 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
        aria-hidden
        style={{
          background:
            "radial-gradient(circle at 88% 22%, rgba(110,127,66,0.28), transparent 45%)",
        }}
      />
      <div
        className="pointer-events-none absolute -right-10 top-1/2 hidden h-[22rem] w-[22rem] -translate-y-1/2 scale-100 rounded-full border border-[#6e7f42]/12 transition-all duration-700 ease-out group-hover:scale-105 group-hover:border-[#6e7f42]/28 lg:block"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-2 top-1/2 hidden h-[14rem] w-[14rem] -translate-y-1/2 scale-100 rounded-full border border-[#6e7f42]/08 transition-all duration-700 ease-out group-hover:scale-110 group-hover:border-[#6e7f42]/22 lg:block"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-[10px] rounded-[14px] ring-1 ring-white/[0.08] transition-[ring-color,box-shadow] duration-700 group-hover:ring-white/18 group-hover:shadow-[inset_0_0_0_1px_rgba(110,127,66,0.18)] sm:inset-3"
        aria-hidden
      />

      {/* Portrait */}
      <div className="relative z-[1] w-full shrink-0 p-3 sm:p-3.5 lg:w-[40%] lg:self-stretch lg:pr-1.5">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#161b17] ring-1 ring-white/10 transition-[ring-color,box-shadow] duration-700 group-hover:ring-white/25 group-hover:shadow-[0_20px_40px_-24px_rgba(0,0,0,0.8)] sm:aspect-[3/4] lg:aspect-auto lg:h-full">
          <Image
            src={imageSrc}
            alt={image}
            fill
            quality={90}
            className="object-cover object-[center_18%] transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
            sizes="(max-width: 1024px) 90vw, 20vw"
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/80 via-black/35 to-transparent transition-opacity duration-700 group-hover:from-black/85"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <p className="type-card-title-sm text-white">
              {name}
            </p>
            <span
              className="mt-2 mb-2 block h-px w-10 transition-[width,background-color] duration-700 group-hover:w-14"
              style={{ background: sage }}
              aria-hidden
            />
            {role ? (
              <p className="type-card-label text-white/75">{role}</p>
            ) : null}
            {organization ? (
              <p className="type-card-label mt-0.5 text-white/65">
                {organization}
              </p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Content — shared site type scale */}
      <div className="relative z-[1] flex min-w-0 flex-1 flex-col justify-center gap-5 px-5 pb-6 pt-1 sm:gap-6 sm:px-7 sm:pb-7 lg:gap-7 lg:px-7 lg:py-8 xl:px-8">
        {tagline ? (
          <p className="type-card-label inline-flex items-center gap-2.5 text-white/80 transition-colors duration-500 group-hover:text-white">
            <span
              className="inline-block size-1.5 rotate-45 transition-transform duration-500 group-hover:scale-125"
              style={{ background: sage }}
              aria-hidden
            />
            {tagline}
          </p>
        ) : null}

        <h3 className="type-card-title-lg text-white">
          {headlineBefore ? (
            <>
              {headlineBefore}{" "}
              {headlineAccent ? (
                <span style={{ color: sage }}>{headlineAccent}</span>
              ) : null}
            </>
          ) : (
            name
          )}
        </h3>

        {body ? (
          <p className="type-card-body-on-dark text-white/85 transition-colors duration-500 group-hover:text-white">
            {body}
          </p>
        ) : null}

        <div className="pt-1">
          <Link
            href={href}
            {...linkProps}
            className="type-cta inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 text-white transition-all duration-500 group-hover:brightness-110 group-hover:shadow-[0_10px_28px_-12px_rgba(110,127,66,0.75)]"
            style={{ background: sage }}
          >
            {buttonLabel}
            <ArrowRight
              className="size-3.5 shrink-0 transition-transform duration-500 ease-out group-hover:translate-x-1"
              strokeWidth={1.7}
              aria-hidden
            />
          </Link>
        </div>
      </div>
    </article>
  );
}

function CompanyCard(company: Company) {
  if (company.variant === "leadership") {
    return <LeadershipCompanyCard {...company} />;
  }
  return <PhotoCompanyCard {...company} />;
}

export function BusinessesCompanies() {
  const { eyebrow, headingBefore, headingAccent, body, companies } =
    businessesCompanies;

  const photo = companies.find((c) => c.variant !== "leadership");
  const leadership = companies.find((c) => c.variant === "leadership");

  return (
    <section
      id="businesses-companies"
      className="cv-auto w-full scroll-mt-28"
      style={{ background: cream }}
    >
      <div className="mx-auto w-full max-w-[1680px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <Reveal variant="up">
          <div className="grid gap-6 border-b border-[#161616]/10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-14 lg:pb-12">
            <div>
              <p
                className="type-eyebrow tracking-[0.2em]"
                style={{ color: sage }}
              >
                {eyebrow}
              </p>
              <h2
                className="type-section-h2 mt-4 max-w-xl"
                style={{ color: ink }}
              >
                {headingBefore}{" "}
                <span style={{ color: sage }}>{headingAccent}</span>
              </h2>
            </div>
            <p className="type-section-body max-w-md text-[1.02rem] leading-relaxed text-[#55554c] lg:justify-self-end lg:pb-1 lg:text-right">
              {body}
            </p>
          </div>
        </Reveal>

        <RevealStagger
          className="mt-10 grid items-stretch gap-5 sm:mt-12 lg:grid-cols-2 lg:gap-6"
          step={90}
          variant="fade"
        >
          {photo ? <CompanyCard key={photo.name} {...photo} /> : null}
          {leadership ? (
            <CompanyCard key={leadership.name} {...leadership} />
          ) : null}
        </RevealStagger>
      </div>
    </section>
  );
}
