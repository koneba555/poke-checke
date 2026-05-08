"use client";

import { useState, useRef, useCallback } from "react";

interface Props {
  onSearch: (cardName: string) => void;
}

function extractCardName(text: string): string {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l.length > 2 && !/^\d+$/.test(l) && !/^HP\s*\d+/i.test(l));
  return lines[0] ?? "";
}

export default function CardUploader({ onSearch }: Props) {
  const [preview, setPreview] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "ocr" | "done" | "error">("idle");
  const [progress, setProgress] = useState(0);
  const [cardName, setCardName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const runOCR = useCallback(async (file: File) => {
    setStatus("ocr");
    setProgress(0);
    try {
      const { createWorker } = await import("tesseract.js");
      const worker = await createWorker("eng", 1, {
        logger: (m: any) => {
          if (m.status === "recognizing text") {
            setProgress(Math.round(m.progress * 100));
          }
        },
      });
      const { data } = await worker.recognize(file);
      await worker.terminate();
      const name = extractCardName(data.text);
      setCardName(name);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }, []);

  const handleFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
    runOCR(file);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) handleFile(file);
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  };

  const handleSearch = () => {
    if (cardName.trim()) onSearch(cardName.trim());
  };

  return (
    <div className="space-y-4">
      {/* Drop zone */}
      <div
        onDrop={onDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => fileRef.current?.click()}
        className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center cursor-pointer hover:border-red-500 transition-colors"
      >
        {preview ? (
          <img
            src={preview}
            alt="card preview"
            className="mx-auto max-h-64 rounded-lg object-contain"
          />
        ) : (
          <div className="space-y-2">
            <div className="text-4xl">📸</div>
            <p className="text-gray-300 font-medium">ลากรูปมาวาง หรือคลิกเพื่ออัปโหลด</p>
            <p className="text-gray-500 text-sm">รองรับ JPG, PNG, WEBP</p>
          </div>
        )}
      </div>

      {/* Camera button for mobile */}
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={onFileChange}
        className="hidden"
      />

      {/* OCR Status */}
      {status === "ocr" && (
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-gray-400">
            <span>กำลังอ่านชื่อการ์ด...</span>
            <span>{progress}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-red-500 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {status === "error" && (
        <p className="text-red-400 text-sm">อ่านรูปไม่สำเร็จ กรุณาพิมพ์ชื่อการ์ดด้านล่างแทน</p>
      )}

      {/* Card name input */}
      {(status === "done" || status === "error") && (
        <div className="space-y-2">
          <label className="text-sm text-gray-400">ชื่อการ์ด (แก้ไขได้)</label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            placeholder="เช่น Charizard ex, Pikachu VMAX"
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
          />
          <button
            onClick={handleSearch}
            disabled={!cardName.trim()}
            className="w-full bg-red-600 hover:bg-red-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold py-2 rounded-lg transition-colors"
          >
            ค้นหาราคา eBay
          </button>
        </div>
      )}

      {/* Manual search when idle */}
      {status === "idle" && (
        <div className="space-y-2">
          <label className="text-sm text-gray-400">หรือพิมพ์ชื่อการ์ดโดยตรง</label>
          <div className="flex gap-2">
            <input
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
              placeholder="เช่น Charizard ex 199"
              className="flex-1 bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-red-500"
            />
            <button
              onClick={handleSearch}
              disabled={!cardName.trim()}
              className="bg-red-600 hover:bg-red-700 disabled:bg-gray-700 text-white font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              ค้นหา
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
