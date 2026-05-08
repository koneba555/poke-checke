"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import PriceResults from "@/components/PriceResults";
import { EbayResult } from "@/lib/ebay";

const CardUploader = dynamic(() => import("@/components/CardUploader"), {
  ssr: false,
  loading: () => (
    <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center">
      <p className="text-gray-500">กำลังโหลด...</p>
    </div>
  ),
});

const PopularCards = dynamic(() => import("@/components/PopularCards"), {
  ssr: false,
});

export default function Home() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState<EbayResult | null>(null);
  const [loading, setLoading] = useState(false);

  const search = async (cardName: string) => {
    setQuery(cardName);
    setResult(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/ebay-prices?q=${encodeURIComponent(cardName)}`);
      const data: EbayResult = await res.json();
      setResult(data);
    } catch {
      setResult({ prices: null, items: [], error: "เชื่อมต่อไม่สำเร็จ" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="border-b border-gray-800 px-4 py-4">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <span className="text-2xl">🃏</span>
          <div>
            <h1 className="text-white font-bold text-xl leading-none">Pokemon Card Price</h1>
            <p className="text-gray-500 text-sm">เช็คราคาการ์ดจาก eBay</p>
          </div>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6 space-y-8">
        <section className="bg-gray-800 rounded-2xl p-5 space-y-4">
          <h2 className="text-white font-semibold">ถ่ายรูปหรืออัปโหลดการ์ด</h2>
          <CardUploader onSearch={search} />
        </section>

        {(loading || result) && (
          <section>
            <PriceResults query={query} result={result} loading={loading} />
          </section>
        )}

        <section>
          <PopularCards onSelect={search} />
        </section>
      </main>

      <footer className="text-center text-gray-700 text-xs py-6">
        ราคาจาก eBay sold listings · ไม่ใช่ราคาอย่างเป็นทางการ
      </footer>
    </div>
  );
}
