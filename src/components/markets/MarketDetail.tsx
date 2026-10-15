import { type MarketDetailPage } from "@/lib/markets";

import { MarketLayout } from "./MarketLayout";
import { MarketLayoutAiBackup } from "./MarketLayoutAiBackup";

type MarketDetailProps = {
  market: MarketDetailPage;
};

/** Routes AI Backup to its lean layout; other markets use the shared template. */
export function MarketDetail({ market }: MarketDetailProps) {
  if (market.layout === "ai-backup") {
    return <MarketLayoutAiBackup />;
  }

  return <MarketLayout market={market} />;
}
