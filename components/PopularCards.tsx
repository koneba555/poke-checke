"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { popularCards } from "@/lib/popular-cards-data";
import { EbayPrices } from "@/lib/ebay";

interface Props {
  onSelect: (query: string) => void;
}

interface CardPrice {
  loading: boolean;
  data: EbayPrices | null;
}

export default function PopularCards({ onSelect }: Props) {
  const [prices, setPrices] = useState<Record<string, CardPrice>>({});

  useEffect(() => {
    const init: Record<string, CardPrice> = {};
    popularCards.forEach((c) => {
      init[c.id] = { loading: true, data: null };
    });
    setPrices(init);

    // Load sequentially with 1.5s delay to avoid eBay rate limit
    const loadSequential = async () => {
      for (const card of popularCards) {
        try {
          const r = await fetch(`/api/ebay-prices?q=${encodeURIComponent(card.ebayQuery)}`);
          const data = await r.json();
          setPrices((prev) => ({
            ...prev,
            [card.id]: { loading: false, data: data.prices ?? null },
          }));
        } catch {
          setPrices((prev) => ({
            ...prev,
            [card.id]: { loading: false, data: null },
          }));
        }
        await new Promise((res) => setTimeout(res, 1500));
      }
    };

    loadSequential();
  }, []);

  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-4">การ์ดยอดนิยม</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {popularCards.map((card) => {
          const price = prices[card.id];
          return (
            <button
              key={card.id}
              onClick={() => onSelect(card.ebayQuery)}
              className="bg-gray-800 hover:bg-gray-700 rounded-xl p-3 text-left transition-colors group"
            >
              <div className="relative w-full aspect-[2.5/3.5] mb-2 overflow-hidden rounded-lg bg-gray-700">
                <Image
                  src={card.image}
                  alt={card.name}
                  fill
                  className="object-contain group-hover:scale-105 transition-transform"
                  unoptimized
                />
              </div>
              <p className="text-white text-sm font-medium leading-tight truncate">
                {card.nameTh}
              </p>
              <p className="text-gray-500 text-xs truncate">{card.set}</p>
              <div className="mt-1">
                {price?.loading ? (
                  <div className="h-4 bg-gray-700 rounded animate-pulse w-16" />
                ) : price?.data ? (
                  <p className="text-green-400 text-sm font-semibold">
                    ~${price.data.avg.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                  </p>
                ) : (
                  <p className="text-gray-600 text-xs">ไม่มีข้อมูล</p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
