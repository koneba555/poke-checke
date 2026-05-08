export interface EbayPrices {
  min: number;
  max: number;
  avg: number;
  count: number;
  currency: string;
}

export interface EbayItem {
  title: string;
  price: number;
  url: string;
  imageUrl: string;
  endTime: string;
}

export interface EbayResult {
  prices: EbayPrices | null;
  items: EbayItem[];
  error?: string;
}

export function calcPriceStats(rawPrices: number[]): EbayPrices | null {
  const prices = rawPrices.filter((p) => p > 0 && p < 10000).sort((a, b) => a - b);
  if (prices.length === 0) return null;

  const trim = Math.floor(prices.length * 0.1);
  const trimmed = prices.slice(trim, prices.length - trim || undefined);
  const src = trimmed.length > 0 ? trimmed : prices;
  const avg = src.reduce((s, p) => s + p, 0) / src.length;

  return {
    min: prices[0],
    max: prices[prices.length - 1],
    avg: Math.round(avg * 100) / 100,
    count: prices.length,
    currency: "USD",
  };
}
