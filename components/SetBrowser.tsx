"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { cardSets, CardSet, SetCard } from "@/lib/sets-data";

interface Props {
  onSearch: (query: string) => void;
}

interface CardWithPrice extends SetCard {
  price: number | null;
  loading: boolean;
}

const ERA_TABS = [
  { id: "all", label: "ทั้งหมด" },
  { id: "mega2025", label: "🆕 Mega (2025 JP)" },
  { id: "sv", label: "Scarlet & Violet" },
  { id: "swsh", label: "Sword & Shield" },
  { id: "xy", label: "XY (Mega)" },
];

function getEra(setId: string) {
  if (setId.startsWith("m")) return "mega2025";
  if (setId.startsWith("sv")) return "sv";
  if (setId.startsWith("swsh")) return "swsh";
  if (setId.startsWith("xy")) return "xy";
  return "other";
}

// Fallback when card image fails to load
function CardImg({ src, alt }: { src: string; alt: string }) {
  const [err, setErr] = useState(false);
  if (err) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-gray-700 rounded-lg">
        <span className="text-3xl">🃏</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      onError={() => setErr(true)}
      className="w-full h-full object-contain group-hover:scale-105 transition-transform"
    />
  );
}

export default function SetBrowser({ onSearch }: Props) {
  const [selectedSet, setSelectedSet] = useState<CardSet | null>(null);
  const [cards, setCards] = useState<CardWithPrice[]>([]);
  const [loading, setLoading] = useState(false);
  const [era, setEra] = useState("all");
  const cancelRef = useRef(false);

  const openSet = async (set: CardSet) => {
    // Cancel any previous load
    cancelRef.current = true;
    // Clear immediately so old cards disappear
    setCards([]);
    setSelectedSet(set);
    setLoading(true);

    // Small delay to let cancel propagate
    await new Promise((r) => setTimeout(r, 50));
    cancelRef.current = false;

    const initial: CardWithPrice[] = set.cards.map((c) => ({
      ...c,
      price: null,
      loading: true,
    }));
    setCards(initial);

    const updated = [...initial];
    for (let i = 0; i < set.cards.length; i++) {
      if (cancelRef.current) break;
      const card = set.cards[i];
      try {
        const res = await fetch(`/api/ebay-prices?q=${encodeURIComponent(card.ebayQuery)}`);
        const data = await res.json();
        updated[i] = { ...card, price: data.prices?.avg ?? null, loading: false };
      } catch {
        updated[i] = { ...card, price: null, loading: false };
      }
      if (!cancelRef.current) setCards([...updated]);
      if (i < set.cards.length - 1) await new Promise((r) => setTimeout(r, 1500));
    }
    if (!cancelRef.current) setLoading(false);
  };

  const goBack = () => {
    cancelRef.current = true;
    setSelectedSet(null);
    setCards([]);
    setLoading(false);
  };

  const sortedCards = [...cards].sort((a, b) => {
    if (a.price === null && b.price === null) return 0;
    if (a.price === null) return 1;
    if (b.price === null) return -1;
    return b.price - a.price;
  });

  return (
    <div>
      <h2 className="text-white font-bold text-xl mb-4">เลือกตามชุดการ์ด</h2>

      {!selectedSet ? (
        <div className="space-y-4">
          {/* Era tabs */}
          <div className="flex gap-2 flex-wrap">
            {ERA_TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setEra(tab.id)}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  era === tab.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {cardSets
              .filter((s) => era === "all" || getEra(s.id) === era)
              .map((set) => (
                <button
                  key={set.id}
                  onClick={() => openSet(set)}
                  className="bg-gray-800 hover:bg-gray-700 rounded-xl p-4 text-center transition-colors"
                >
                  <div className="relative h-12 mb-2">
                    <Image
                      src={set.logo}
                      alt={set.name}
                      fill
                      className="object-contain"
                      unoptimized
                      onError={() => {}}
                    />
                  </div>
                  <p className="text-white text-xs font-medium">{set.nameTh}</p>
                  <p className="text-gray-500 text-xs">{set.cards.length} การ์ด</p>
                </button>
              ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Header */}
          <div className="flex items-center gap-3">
            <button
              onClick={goBack}
              className="text-gray-400 hover:text-white text-sm"
            >
              ← กลับ
            </button>
            <div className="relative h-8 w-32">
              <Image
                src={selectedSet.logo}
                alt={selectedSet.name}
                fill
                className="object-contain object-left"
                unoptimized
              />
            </div>
            <span className="text-gray-400 text-sm">
              {loading ? "กำลังโหลดราคา..." : "เรียงจากแพงสุด"}
            </span>
          </div>

          {/* Loading skeleton */}
          {cards.length === 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="bg-gray-800 rounded-xl p-3 animate-pulse">
                  <div className="w-full aspect-[2.5/3.5] bg-gray-700 rounded-lg mb-2" />
                  <div className="h-4 bg-gray-700 rounded w-3/4 mb-1" />
                  <div className="h-3 bg-gray-700 rounded w-1/2" />
                </div>
              ))}
            </div>
          )}

          {/* Cards sorted by price */}
          {cards.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {sortedCards.map((card, rank) => (
                <button
                  key={card.id}
                  onClick={() => onSearch(card.ebayQuery)}
                  className="bg-gray-800 hover:bg-gray-700 rounded-xl p-3 text-left transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                        rank === 0
                          ? "bg-yellow-500 text-black"
                          : rank === 1
                          ? "bg-gray-400 text-black"
                          : rank === 2
                          ? "bg-amber-700 text-white"
                          : "bg-gray-700 text-gray-400"
                      }`}
                    >
                      #{rank + 1}
                    </span>
                  </div>
                  <div className="w-full aspect-[2.5/3.5] mb-2 overflow-hidden rounded-lg bg-gray-700">
                    <CardImg src={card.image} alt={card.name} />
                  </div>
                  <p className="text-white text-sm font-medium leading-tight truncate">
                    {card.nameTh}
                  </p>
                  <div className="mt-1">
                    {card.loading ? (
                      <div className="h-4 bg-gray-700 rounded animate-pulse w-16" />
                    ) : card.price ? (
                      <div>
                        <p className="text-green-400 text-sm font-semibold">
                          ~${card.price.toLocaleString("en-US", { maximumFractionDigits: 0 })}
                        </p>
                        <p className="text-gray-500 text-xs">
                          ≈ {Math.round(card.price * 33).toLocaleString()} ฿
                        </p>
                      </div>
                    ) : (
                      <p className="text-gray-600 text-xs">ไม่มีข้อมูล</p>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
