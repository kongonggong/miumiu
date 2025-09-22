"use client";

import { useMemo, useState } from "react";

/**
 * Airmail Envelope (TH) → Click to open letter (IMAGE ONLY)
 * - เปิดซองแล้วแสดง "รูปภาพ" อย่างเดียว (ไม่มีข้อความ)
 * - รองรับหลายรูปได้ แค่เพิ่มพาธใน CONFIG.images
 */

const CONFIG = {
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
  // === รูปจดหมาย ===
  // ชี้ไปที่ public/images/... (เช่น /images/letter1.jpg) หรือ URL ภายนอกก็ได้
  images: [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
    "/8.png",
    "/9.png",
    "/10.png",
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

  return (
    <main className="min-h-screen grid place-items-center bg-pink-50 p-6">
      {/* ENVELOPE */}
      <section className="text-center w-full">
        <button
          aria-label="Open letter image"
          onClick={() => setIsOpen(true)}
          className="relative mx-auto block"
          style={{ width: 720, height: 560 }}
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
                      <div className="font-semibold text-slate-700">
                        รหัสไปรษณีย์ / POSTCODE
                      </div>
                      <Dashed value={CONFIG.from.postcode} width={180} />
                    </div>
                    {CONFIG.from.country ? (
                      <div className="text-[12px] text-slate-600 pb-1">
                        {CONFIG.from.country}
                      </div>
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
                {/* POSTCODE */}
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

      {/* LETTER MODAL — IMAGE ONLY */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 bg-slate-900/60 grid place-items-center p-6 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsOpen(false);
          }}
        >
          <article className="w-full max-w-3xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
            <header className="flex items-center gap-4 p-4 bg-slate-50">
              <div className="w-9 h-9 rounded-full bg-rose-500 text-white grid place-items-center font-bold">
                💌
              </div>
              <h1 className="text-base font-semibold text-slate-800">จดหมาย</h1>
              <div className="ml-auto text-xs text-slate-500">ครบรอบ: {dateText}</div>
              <button
                onClick={() => setIsOpen(false)}
                className="ml-3 px-3 py-1.5 rounded-md bg-white text-rose-700 border border-rose-200"
              >
                ปิด
              </button>
            </header>

            {/* Scroll area with images only */}
            <div className="max-h-[86vh] overflow-y-auto p-6">
              <div className="mx-auto max-w-[820px] space-y-6">
                {CONFIG.images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`letter page ${i + 1}`}
                    className="w-full h-auto rounded-lg border border-slate-200 object-contain"
                    loading="lazy"
                  />
                ))}
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
