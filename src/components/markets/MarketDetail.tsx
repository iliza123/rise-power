import { type MarketDetailPage } from "@/lib/markets";
import { aiBackupReferencePage } from "@/lib/markets/ai-backup-reference-content";

import { MarketLayout } from "./MarketLayout";
import { MarketLayoutAiBackup } from "./MarketLayoutAiBackup";

type MarketDetailProps = {
  market: MarketDetailPage;
};

/** Routes AI Backup to its lean layout; other markets use the shared template. */
export function MarketDetail({ market }: MarketDetailProps) {
  if (market.layout === "ai-backup") {
    return <MarketLayoutAiBackup tone="dark" page={aiBackupReferencePage} />;
  }

  return <MarketLayout market={market} />;
}
