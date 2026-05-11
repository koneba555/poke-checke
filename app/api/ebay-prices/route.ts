import { calcPriceStats } from "@/lib/ebay";

export const runtime = "edge";

async function getEbayToken(appId: string, certId: string): Promise<string> {
  const credentials = btoa(`${appId}:${certId}`);
  const res = await fetch("https://api.ebay.com/identity/v1/oauth2/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${credentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials&scope=https%3A%2F%2Fapi.ebay.com%2Foauth%2Fapi_scope",
  });
  const data = await res.json();
  if (!data.access_token) throw new Error("Token fetch failed");
  return data.access_token;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  const appId = process.env.EBAY_APP_ID;
  const certId = process.env.EBAY_CERT_ID;
  if (!appId || !certId) {
    return Response.json({ error: "eBay API not configured" }, { status: 500 });
  }

  try {
    const token = await getEbayToken(appId, certId);

    const q = encodeURIComponent(`${query} pokemon card`);
    const res = await fetch(
      `https://api.ebay.com/buy/browse/v1/item_summary/search?q=${q}&limit=50&filter=buyingOptions%3A%7BFIXED_PRICE%7D`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "X-EBAY-C-MARKETPLACE-ID": "EBAY_US",
        },
      }
    );

    const data = await res.json();
    const items: any[] = data.itemSummaries ?? [];

    if (items.length === 0) {
      return Response.json({ prices: null, items: [] });
    }

    const rawPrices = items
      .map((item) => parseFloat(item.price?.value ?? "0"))
      .filter((p) => p > 0);

    const prices = calcPriceStats(rawPrices);

    const recent = items.slice(0, 6).map((item) => ({
      title: item.title ?? "",
      price: parseFloat(item.price?.value ?? "0"),
      url: item.itemWebUrl ?? "",
      imageUrl: item.thumbnailImages?.[0]?.imageUrl ?? "",
      endTime: "",
    }));

    return Response.json({ prices, items: recent });
  } catch (e: any) {
    return Response.json({ error: e.message ?? "Failed to fetch eBay data" }, { status: 500 });
  }
}
