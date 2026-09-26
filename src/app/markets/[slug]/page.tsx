import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { MarketDetail } from "@/components/markets/MarketDetail";
import { getMarketBySlug, getMarketStaticParams } from "@/lib/markets";
import { pageMetadata } from "@/lib/seo";

type MarketPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getMarketStaticParams();
}

export async function generateMetadata({
  params,
}: MarketPageProps): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);

  if (!market) {
    return pageMetadata({
      title: "Markets",
      description:
        "Hydrogen power for defense, commercial, and consumer applications.",
      path: "/markets",
    });
  }

  return pageMetadata({
    title: market.metaTitle,
    description: market.metaDescription,
    path: `/markets/${market.slug}`,
  });
}

export default async function MarketDetailPage({ params }: MarketPageProps) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) notFound();

  return <MarketDetail market={market} />;
}
