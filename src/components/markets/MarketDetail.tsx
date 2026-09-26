import { type MarketDetailPage } from "@/lib/markets";

import { MarketLayout } from "./MarketLayout";

type MarketDetailProps = {
  market: MarketDetailPage;
};

/** Renders the shared market detail layout for Defense, Commercial, and Consumer. */
export function MarketDetail({ market }: MarketDetailProps) {
  return <MarketLayout market={market} />;
}
