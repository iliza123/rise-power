import {
  type MarketDetailPage,
} from "@/lib/markets";

import { MarketLayoutCommercial } from "./MarketLayoutCommercial";
import { MarketLayoutConsumer } from "./MarketLayoutConsumer";
import { MarketLayoutDefense } from "./MarketLayoutDefense";

type MarketDetailProps = {
  market: MarketDetailPage;
};

/**
 * Routes each market to a distinct page layout so Defense, Commercial,
 * and Consumer do not share the same section composition.
 */
export function MarketDetail({ market }: MarketDetailProps) {
  switch (market.layout) {
    case "defense":
      return <MarketLayoutDefense market={market} />;
    case "commercial":
      return <MarketLayoutCommercial market={market} />;
    case "consumer":
      return <MarketLayoutConsumer market={market} />;
    default: {
      const _exhaustive: never = market.layout;
      return _exhaustive;
    }
  }
}
