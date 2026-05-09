import { calcPriceStats } from "@/lib/ebay";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q");

  if (!query) {
    return Response.json({ error: "Missing query" }, { status: 400 });
  }

  const appId = process.env.EBAY_APP_ID;
  if (!appId) {
    return Response.json({ error: "eBay API not configured" }, { status: 500 });
  }

  const keywords = encodeURIComponent(`${query} pokemon card`);
  const url =
    `https://svcs.ebay.com/services/search/FindingService/v1` +
    `?OPERATION-NAME=findCompletedItems` +
    `&SERVICE-VERSION=1.0.0` +
    `&SECURITY-APPNAME=${appId}` +
    `&RESPONSE-DATA-FORMAT=JSON` +
    `&keywords=${keywords}` +
    `&itemFilter(0).name=SoldItemsOnly` +
    `&itemFilter(0).value=true` +
    `&paginationInput.entriesPerPage=50` +
    `&sortOrder=EndTimeSoonest`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    const response = data?.findCompletedItemsResponse?.[0];
    const ack = response?.ack?.[0];

    if (ack !== "Success") {
      const msg = response?.errorMessage?.[0]?.error?.[0]?.message?.[0] ?? `eBay error`;
      return Response.json({ error: msg, prices: null, items: [] });
    }

    const items: any[] = response?.searchResult?.[0]?.item ?? [];

    if (items.length === 0) {
      return Response.json({ prices: null, items: [] });
    }

    const rawPrices = items.map((item) =>
      parseFloat(
        item.sellingStatus?.[0]?.currentPrice?.[0]?.__value__ ?? "0"
      )
    );

    const prices = calcPriceStats(rawPrices);

    const recent = items.slice(0, 6).map((item) => ({
      title: item.title?.[0] ?? "",
      price: parseFloat(
        item.sellingStatus?.[0]?.currentPrice?.[0]?.__value__ ?? "0"
      ),
      url: item.viewItemURL?.[0] ?? "",
      imageUrl: item.galleryURL?.[0] ?? "",
      endTime: item.listingInfo?.[0]?.endTime?.[0] ?? "",
    }));

    return Response.json({ prices, items: recent });
  } catch {
    return Response.json({ error: "Failed to fetch eBay data" }, { status: 500 });
  }
}
