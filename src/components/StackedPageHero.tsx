import Image from "next/image";

type StackedPageHeroProps = {
  imageSrc: string;
  imageAlt: string;
  /** Optional banner for stacked layout below xl. Falls back to `imageSrc`. */
  mobileImageSrc?: string;
  /** Extra classes for desktop (xl+) framing — object-position, translate, etc.
   * Mobile always uses object-cover object-center. */
  imageClassName?: string;
  /** Section background when copy sits below the photo (below xl). */
  tone?: string;
  /** Shorter desktop height for article / detail heroes. */
  compact?: boolean;
  /** Max width for the copy column (default 1440px). */
  contentMaxWidthClassName?: string;
  /**
   * `overlay` (default): full-bleed image with left gradient for copy.
   * `split`: left content + clear right image (xl+).
   */
  layout?: "overlay" | "split";
  /** Intrinsic width for split layout. */
  imageWidth?: number;
  /** Intrinsic height for split layout. */
  imageHeight?: number;
  /** Next/Image quality 1–100. Overlay defaults to 90; split to 100. */
  quality?: number;
  /** Soft kenburns on overlay media. Disable for low-res assets. */
  animateMedia?: boolean;
  /**
   * Split layout only: replace the default left→right wash.
   * Pass a full CSS `background` value (e.g. linear-gradient).
   */
  splitWash?: string;
  children: React.ReactNode;
};

/**
 * Page hero: image above / copy below below xl; cinematic on xl+.
 * Split keeps copy left + photo right. Non-panoramic assets fill the
 * right column with cover so wide viewports don't show tone gaps.
 * Mobile always centers the crop; `imageClassName` framing applies at xl+.
 */
export function StackedPageHero({
  imageSrc,
  imageAlt,
  mobileImageSrc,
  imageClassName,
  tone = "#0a100e",
  compact = false,
  contentMaxWidthClassName = "max-w-[1440px]",
  layout = "overlay",
  imageWidth = 1920,
  imageHeight = 1080,
  quality,
  animateMedia = true,
  splitWash,
  children,
}: StackedPageHeroProps) {
  /** Mobile/tablet — always centered regardless of desktop framing. */
  const mobileMediaClassName = "object-cover object-center";
  /** Desktop — caller framing or default center. */
  const desktopMediaClassName = imageClassName ?? "object-cover object-center";
  const mobileSrc = mobileImageSrc ?? imageSrc;
  const overlayQuality = quality ?? 90;
  const splitQuality = quality ?? 100;
  const aspectRatio = imageWidth / Math.max(imageHeight, 1);
  /** Ultra-wide (≥2.2) can sit uncropped; narrower assets fill with cover. */
  const panoramic = aspectRatio >= 2.2;
  const splitMinH = compact
    ? "xl:min-h-[min(78svh,680px)]"
    : "xl:min-h-[min(90svh,860px)]";
  const splitCopyPad = compact
    ? "xl:pt-32 xl:pb-16"
    : "xl:pt-36 xl:pb-20";
  const desktopMinH = compact
    ? "xl:min-h-[min(78svh,680px)]"
    : "xl:min-h-[min(100svh,900px)]";
  const copyPad = compact
    ? "xl:pt-32 xl:pb-16"
    : "xl:pt-36 xl:pb-24";
  const defaultSplitWash = `linear-gradient(90deg, ${tone} 0%, ${tone} 38%, ${tone}f2 44%, ${tone}cc 50%, ${tone}66 56%, transparent 64%)`;

  if (layout === "split") {
    return (
      <section
        className={`relative isolate w-full overflow-hidden text-white ${splitMinH}`}
        style={{ backgroundColor: tone }}
      >
        {/* Mobile / tablet — centered crop + fade into tone */}
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
            className={mobileMediaClassName}
          />
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
            aria-hidden
            style={{
              background: `linear-gradient(to top, ${tone} 0%, ${tone}00 100%)`,
            }}
          />
        </div>

        {/* Desktop — fill right column; panoramic keeps natural width */}
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-0 hidden w-[58%] overflow-hidden xl:block"
          aria-hidden
        >
          {panoramic ? (
            <div className="flex h-full w-full items-center justify-end">
              <Image
                src={imageSrc}
                alt=""
                width={imageWidth}
                height={imageHeight}
                priority
                quality={splitQuality}
                sizes="58vw"
                className={`h-full w-auto max-w-none ${imageClassName ?? ""}`}
              />
            </div>
          ) : (
            <Image
              src={imageSrc}
              alt=""
              fill
              priority
              quality={splitQuality}
              sizes="58vw"
              className={desktopMediaClassName}
            />
          )}
        </div>

        {/* Overlay wash — solid under copy, soft blend across the mid seam */}
        <div
          className="pointer-events-none absolute inset-0 z-[1] hidden xl:block"
          aria-hidden
          style={{
            background: splitWash ?? defaultSplitWash,
          }}
        />

        <div
          className={`relative z-10 mx-auto flex w-full ${contentMaxWidthClassName} flex-col px-6 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 lg:px-10 ${splitMinH} xl:justify-center xl:px-10 2xl:px-14 ${splitCopyPad} [&_p]:!text-white`}
        >
          <div className="w-full max-w-[34rem]">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section
      className={`relative flex w-full flex-col overflow-hidden text-white ${desktopMinH}`}
      style={{ backgroundColor: tone }}
    >
      <div className="relative aspect-[3/2] w-full shrink-0 sm:aspect-[16/10] lg:aspect-[21/9] xl:absolute xl:inset-0 xl:aspect-auto">
        {/* Mobile: always centered. Desktop: optional framing via imageClassName. */}
        <Image
          src={mobileSrc}
          alt={imageAlt}
          fill
          priority
          quality={overlayQuality}
          sizes="100vw"
          className={`${animateMedia ? "hero-animate-media" : ""} object-cover object-center xl:hidden`}
        />
        <Image
          src={imageSrc}
          alt=""
          fill
          priority
          quality={overlayQuality}
          sizes="100vw"
          className={`${animateMedia ? "hero-animate-media" : ""} hidden xl:block ${desktopMediaClassName}`}
          aria-hidden
        />
        {/* Mobile seam into tone */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 xl:hidden"
          aria-hidden
          style={{
            background: `linear-gradient(to top, ${tone} 0%, ${tone}00 100%)`,
          }}
        />
        <div className="pointer-events-none absolute inset-0 hidden xl:block" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-r from-[#071016]/95 via-[#071016]/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/45 via-transparent to-transparent" />
        </div>
      </div>

      <div
        className={`relative z-10 mx-auto flex w-full ${contentMaxWidthClassName} flex-1 flex-col justify-center px-6 pt-6 pb-10 sm:px-8 sm:pt-8 sm:pb-12 lg:px-10 ${desktopMinH} ${copyPad} [&_p]:!text-white`}
      >
        {children}
      </div>
    </section>
  );
}
