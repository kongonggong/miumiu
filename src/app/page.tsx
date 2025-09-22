"use client";

import { useMemo, useState } from "react";

/**
 * Airmail Envelope (TH) → Click to open letter
 * - Clean, production-safe TSX
 * - FROM / TO / POSTCODE on envelope
 * - Letter shows static paragraphs from CONFIG.letter (read-only)
 */

const CONFIG = {
  dearName: "",
  signature: "— หมูก้อง",
  anniversaryDate: new Date(),
  from: {
    name: "ชื่อผู้ส่ง : ภานุวัฒน์ วงศ์พัฒนวุฒิ​",
    line1: "บ้านเลขที่/ถนน : 40-40/1 สุขานิมิคร",
    line2: "แขวง/เขต : เมือง  จังหวัด : มุกดาหาร",
    postcode: "49000",
    country: "THAILAND",
  },
  to: {
    name: "ชื่อผู้รับ : Chayanit Veerapong ",
    line1:
      "บ้านเลขที่/ถนน : Glion institute of higher education route de glion  Glion switzerland",
    line2: "แขวง/อำเภอ :  จังหวัด : Montreux",
    postcode: "1111823",
  },
  letter: [
    // เขียนจดหมายเป็นย่อหน้า ๆ ตรงนี้
    "ครบ 1 เดือนแล้วนะ ตั้งแต่วันที่เราเริ่มจับมือกัน โลกก็ดูสว่างขึ้นอีกนิดทุกวัน ๆ ขอบคุณที่อยู่ข้าง ๆ กัน ทั้งในวันที่ง่ายและวันที่ยาก",
    "ฉันชอบเวลาที่เธอยิ้ม ชอบเสียงหัวเราะของเธอ และชอบความใส่ใจเล็ก ๆ น้อย ๆ ที่เธอมีให้เสมอ ต่อจากนี้อยากเดินไปด้วยกัน เรียนรู้กัน และเก็บเรื่องราวดี ๆ ให้มากกว่านี้",
    "ไม่ว่าเราจะอยู่ใกล้หรือไกล ฉันอยากให้เธอรู้ว่า ฉันเลือกเธอทุกวัน ❤️",
  ],
};

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const dateText = useMemo(() => {
    const d = CONFIG.anniversaryDate;
    try {
      return d.toLocaleDateString("th-TH", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return d.toDateString();
    }
  }, []);

  const greeting = CONFIG.dearName ? `สวัสดี ${CONFIG.dearName},` : "สวัสดี";

  return (
    <main className="min-h-screen grid place-items-center bg-pink-50 p-6">
      {/* ENVELOPE */}
      <section className="text-center w-full">
        <button
          aria-label="Open love letter"
          onClick={() => setIsOpen(true)}
          className="relative mx-auto block"
          style={{ width: 720, height: 550 }}
        >
          {/* Airmail border */}
          <div
            className="absolute inset-0 rounded-xl overflow-hidden border"
            style={{
              borderColor: "#e5e7eb",
              backgroundImage:
                "repeating-linear-gradient(45deg, #e11d48 0 16px, white 16px 24px, #1d4ed8 24px 40px, white 40px 48px)",
            }}
          />

          {/* Inner white panel */}
          <div className="absolute inset-0 p-6">
            <div className="w-full h-full rounded-lg bg-white border border-slate-300 relative">
              {/* FROM + STAMP */}
              <div className="grid grid-cols-[1fr_140px] gap-6 p-6">
                <div className="text-[13px] leading-[1.9] text-slate-800">
                  <div className="font-semibold text-slate-700 mb-1">จาก / FROM</div>
                  <Dashed value={CONFIG.from.name} placeholder="ชื่อผู้ส่ง" />
                  <Dashed value={CONFIG.from.line1} placeholder="บ้านเลขที่/ถนน" />
                  <Dashed value={CONFIG.from.line2} placeholder="แขวง/เขต • จังหวัด" />

                  <div className="mt-3 flex items-end gap-4">
                    <div>
                      <div className="font-semibold text-slate-700">รหัสไปรษณีย์ / POSTCODE</div>
                      <Dashed value={CONFIG.from.postcode} width={180} />
                    </div>
                    {CONFIG.from.country ? (
                      <div className="text-[12px] text-slate-600 pb-1">{CONFIG.from.country}</div>
                    ) : null}
                  </div>
                </div>

                {/* Stamp box */}
                <div className="justify-self-end w-[140px] h-[120px] border border-slate-400" />
              </div>

              {/* TO block */}
              <div className="px-6" style={{ marginTop: 12 }}>
                <div className="text-[13px] font-semibold text-slate-700">ถึง / TO</div>
                <div className="mt-4 text-[13px] leading-[1.9] text-slate-800">
                  <Dashed value={CONFIG.to.name} placeholder="ชื่อผู้รับ" wide />
                  <Dashed value={CONFIG.to.line1} placeholder="บ้านเลขที่/ถนน" wide />
                  <Dashed value={CONFIG.to.line2} placeholder="แขวง/อำเภอ • จังหวัด" wide />
                </div>
              </div>

              {/* Bottom row */}
              <div className="flex items-end justify-between px-6 pb-6 pt-4">
                <div className="flex items-center gap-3 text-[12px] text-blue-900">
                  <div className="w-12 h-12 bg-blue-600" />
                  <div>
                    <div className="font-bold leading-5">AIR MAIL</div>
                    <div className="leading-5">ไปรษณีย์อากาศ</div>
                  </div>
                </div>

                {/* POSTCODE (number on top, dashed full-width below) */}
                <div className="text-[13px] text-slate-700 min-w-[220px]">
                  <div className="font-semibold mb-1 text-right">POSTCODE</div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-right min-w-[90px]">{CONFIG.to.postcode}</div>
                    <div className="w-full">
                      <Dashed value="" width="100%" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </button>
        <p className="mt-3 text-sm text-slate-500">คลิกซองเพื่อเปิดจดหมาย</p>
      </section>

      {/* LETTER MODAL (static content) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-slate-900/60 grid place-items-center p-6 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <article className="w-full max-w-3xl bg-amber-50 rounded-2xl border border-amber-200 overflow-hidden">
            <header className="flex items-center gap-4 p-6 bg-rose-100">
              <div className="w-12 h-12 rounded-full bg-rose-500 text-white grid place-items-center font-bold border-2 border-rose-700">
                💌
              </div>
              <h1 className="text-lg font-semibold text-slate-800">จดหมายของเรา</h1>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-auto px-4 py-2 rounded-md bg-white text-rose-700 border border-rose-200"
              >
                ปิด
              </button>
            </header>

            <div className="px-8 py-8">
              <div className="mx-auto" style={{ maxWidth: 820 }}>
                <p className="mb-5 text-[18px] leading-[2.1] text-slate-700">{greeting}</p>

                {/* Static paragraphs from CONFIG.letter */}
                <div className="space-y-5 text-[18px] leading-[2.1] text-slate-700">
                  {CONFIG.letter.map((t, i) => (
                    <p key={i}>{t}</p>
                  ))}
                </div>

                <div className="mt-8">
                  <div className="font-semibold text-slate-700 text-[16px]">{CONFIG.signature}</div>
                  <div className="text-xs text-slate-500 mt-3">
                    ครบรอบ: <span>{dateText}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}

function Dashed({
  value,
  placeholder = "",
  width = 260,
  wide = false,
}: {
  value?: string;
  placeholder?: string;
  width?: number | string;
  wide?: boolean;
}) {
  return (
    <div
      className={`border-b border-dashed border-slate-400 pt-1 ${wide ? "w-full" : ""}`}
      style={{ width: wide ? "100%" : typeof width === "number" ? `${width}px` : width }}
    >
      <span className={`text-[13px] ${value ? "text-slate-800" : "text-slate-400"}`}>
        {value || placeholder}
      </span>
    </div>
  );
}
