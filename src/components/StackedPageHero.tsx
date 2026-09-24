import Image from "next/image";

/** Matches Header bar: h-16 / sm:h-[4.5rem] */
const HEADER_SPACER = "h-16 shrink-0 sm:h-[4.5rem]";

type StackedPageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  /** Optional banner for stacked layout below xl. Falls back to `imageSrc`. */
  mobileImageSrc?: string;
  /**
   * Extra framing classes (object-position, etc.). Applied on mobile and desktop.
   * Desktop always fills the banner with object-cover (no stretch).
   */
  imageClassName?: string;
  /** Section background when copy sits below the photo (below xl). */
  tone?: string;
  /**
   * @deprecated All heroes now share the Products page size.
   * Kept for call-site compatibility.
   */
  compact?: boolean;
  /** Max width for the copy column (default 1440px). */
  contentMaxWidthClassName?: string;
  /**
   * `split` (default): left content + clear right image (xl+).
   * `overlay`: full-bleed image with left gradient for copy.
   */
  layout?: "overlay" | "split";
  /** Intrinsic width for layout / Next Image sizing. */
  imageWidth?: number;
  /** Intrinsic height for layout / Next Image sizing. */
  imageHeight?: number;
  /** Next/Image quality 1–100. Overlay defaults to 90; split to 100. */
  quality?: number;
  /** Soft kenburns on mobile overlay media only. Disabled on desktop. */
  animateMedia?: boolean;
  /**
   * Split layout only: replace the default left→right wash.
   * Pass a full CSS `background` value (e.g. linear-gradient).
   */
  splitWash?: string;
  children: React.ReactNode;
};

/**
 * Page hero — sized like the Products banner.
 * Header spacer keeps media below the fixed nav. Desktop fills the banner
 * with object-cover (uniform scale, slight crop as needed — no stretch).
 */
export function StackedPageHero({
  imageSrc,
  imageAlt,
  mobileImageSrc,
  imageClassName,
  tone = "#0a0f10",
  contentMaxWidthClassName = "max-w-[1440px]",
  layout = "split",
  quality,
  animateMedia = true,
  splitWash,
  children,
}: StackedPageHeroProps) {
  /**
   * Fill the banner without distortion. Prefer caller framing; otherwise
   * split biases right (photo column), overlay centers.
   */
  const framedCover =
    imageClassName ??
    (layout === "split"
      ? "object-cover object-right"
      : "object-cover object-center");
  const mediaClassName = framedCover.includes("object-cover")
    ? framedCover
    : `object-cover ${framedCover}`;
  const mobileSrc = mobileImageSrc ?? imageSrc;
  const overlayQuality = quality ?? 90;
  const splitQuality = quality ?? 100;

  /** Same as Products page hero. */
  const heroMinH = "xl:min-h-[min(78svh,680px)]";
  const copyPad = "xl:pt-32 xl:pb-16";
  /** Strong left band so title/copy read like main marketing heroes (Resources pattern). */
  const defaultSplitWash = `linear-gradient(90deg, ${tone} 0%, ${tone} 44%, ${tone}d1 52%, ${tone}59 62%, transparent 74%)`;
  const overlayWashHorizontal = `linear-gradient(90deg, ${tone}f2 0%, ${tone}59 42%, transparent 70%)`;
  const overlayWashVertical = `linear-gradient(to top, ${tone}73 0%, transparent 55%)`;

  if (layout === "split") {
    return (
      <section
        className="relative isolate w-full overflow-hidden text-white"
        style={{ backgroundColor: tone }}
      >
        <div className={HEADER_SPACER} aria-hidden style={{ backgroundColor: tone }} />

        <div className={`relative w-full ${heroMinH}`}>
          <div
            className="relative h-[min(48svh,400px)] w-full overflow-hidden sm:h-[min(44svh,460px)] xl:hidden"
            style={{ backgroundColor: tone }}
          >
            <Image
              src={mobileSrc}
              alt={imageAlt}
              fill
              priority
              quality={splitQuality}
              sizes="100vw"
              className={mediaClassName}
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
              aria-hidden
              style={{
                background: `linear-gradient(to top, ${tone} 0%, ${tone}00 100%)`,
              }}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] overflow-hidden xl:block"
            aria-hidden
            style={{ backgroundColor: tone }}
          >
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              quality={splitQuality}
              sizes="58vw"
              className={mediaClassName}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0 z-[1] hidden xl:block"
            aria-hidden
            style={{
              background: splitWash ?? defaultSplitWash,
            }}
          />

          <div
            className={`relative z-10 mx-auto flex w-full ${contentMaxWidthClassName} flex-col px-6 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 lg:px-10 ${heroMinH} xl:justify-center xl:px-10 2xl:px-14 ${copyPad} [&_p]:!text-white`}
          >
            <div className="w-full max-w-[34rem]">{children}</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="relative flex w-full flex-col overflow-hidden text-white"
      style={{ backgroundColor: tone }}
    >
      <div className={HEADER_SPACER} aria-hidden style={{ backgroundColor: tone }} />

      <div className={`relative flex w-full flex-col ${heroMinH}`}>
        <div
          className="relative aspect-[3/2] w-full shrink-0 sm:aspect-[16/10] lg:aspect-[21/9] xl:absolute xl:inset-0 xl:aspect-auto"
          style={{ backgroundColor: tone }}
        >
          <Image
            src={mobileSrc}
            alt={imageAlt}
            fill
            priority
            quality={overlayQuality}
            sizes="100vw"
            className={`${animateMedia ? "hero-animate-media" : ""} ${mediaClassName} xl:hidden`}
          />
          <Image
            src={imageSrc}
            alt=""
            fill
            priority
            quality={overlayQuality}
            sizes="100vw"
            className={`hidden xl:block ${mediaClassName}`}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-20 xl:hidden"
            aria-hidden
            style={{
              background: `linear-gradient(to top, ${tone} 0%, ${tone}00 100%)`,
            }}
          />
          <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden>
            <div
              className="absolute inset-0"
              style={{ background: overlayWashHorizontal }}
            />
            <div
              className="absolute inset-0"
              style={{ background: overlayWashVertical }}
            />
          </div>
        </div>

        <div
          className={`relative z-10 mx-auto flex w-full ${contentMaxWidthClassName} flex-1 flex-col justify-center px-6 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 lg:px-10 ${heroMinH} ${copyPad} [&_p]:!text-white`}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
