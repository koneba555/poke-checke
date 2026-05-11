"use client";

import { EbayResult } from "@/lib/ebay";

const THB_RATE = 33;

interface Props {
  query: string;
  result: EbayResult | null;
  loading: boolean;
}

function fmt(usd: number) {
  return usd.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export default function PriceResults({ query, result, loading }: Props) {
  if (loading) {
    return (
      <div className="bg-gray-800 rounded-xl p-6 space-y-4 animate-pulse">
        <div className="h-6 bg-gray-700 rounded w-3/4" />
        <div className="grid grid-cols-3 gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 bg-gray-700 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  if (!result) return null;

  if (result.error) {
    return (
      <div className="bg-gray-800 rounded-xl p-6">
        <p className="text-red-400">เกิดข้อผิดพลาด: {result.error}</p>
      </div>
    );
  }

  if (!result.prices) {
    return (
      <div className="bg-gray-800 rounded-xl p-6">
        <p className="text-gray-400">ไม่พบข้อมูลราคาสำหรับ &ldquo;{query}&rdquo;</p>
        <p className="text-gray-500 text-sm mt-1">ลองเพิ่มชื่อชุดการ์ด เช่น &ldquo;{query} Paldea Evolved&rdquo;</p>
      </div>
    );
  }

  const { prices, items } = result;

  return (
    <div className="bg-gray-800 rounded-xl p-6 space-y-5">
      {/* Header */}
      <div>
        <h3 className="text-white font-semibold text-lg">{query}</h3>
        <p className="text-gray-400 text-sm">
          จากราคาขายปัจจุบันบน eBay {prices.count} รายการ
        </p>
      </div>

      {/* Price stats */}
      <div className="grid grid-cols-3 gap-3">
        <StatCard label="ราคาต่ำสุด" usd={prices.min} />
        <StatCard label="ราคาเฉลี่ย" usd={prices.avg} highlight />
        <StatCard label="ราคาสูงสุด" usd={prices.max} />
      </div>

      {/* THB note */}
      <p className="text-gray-500 text-xs">
        * อัตราแลกเปลี่ยนประมาณ ~{THB_RATE} บาท/USD (ใช้เพื่อประมาณเท่านั้น)
      </p>

      {/* Recent sales */}
      {items.length > 0 && (
        <div>
          <h4 className="text-gray-400 text-sm font-medium mb-2">ขายล่าสุด</h4>
          <div className="space-y-2">
            {items.map((item, i) => (
              <a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-gray-700 hover:bg-gray-600 rounded-lg p-3 transition-colors"
              >
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    alt=""
                    className="w-12 h-12 object-contain rounded flex-shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm truncate">{item.title}</p>
                  <p className="text-gray-400 text-xs">ราคาปัจจุบัน</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-green-400 font-semibold">${fmt(item.price)}</p>
                  <p className="text-gray-500 text-xs">
                    ≈ {Math.round(item.price * THB_RATE).toLocaleString()} ฿
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  usd,
  highlight = false,
}: {
  label: string;
  usd: number;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-lg p-3 text-center ${
        highlight ? "bg-red-900/40 border border-red-700" : "bg-gray-700"
      }`}
    >
      <p className="text-gray-400 text-xs mb-1">{label}</p>
      <p className={`font-bold text-lg ${highlight ? "text-red-400" : "text-white"}`}>
        ${usd.toLocaleString("en-US", { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
      </p>
      <p className="text-gray-500 text-xs">
        ≈ {Math.round(usd * 33).toLocaleString()} ฿
      </p>
    </div>
  );
}
