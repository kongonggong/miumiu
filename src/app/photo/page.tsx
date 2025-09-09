"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const photos = [
  {
    src: "pen.jpg",
    caption: "เป็น",
  },
  {
    src: "fan.jpg",
    caption: "เเฟน",
  },
  {
    src: "kun.jpg",
    caption: "กัน",
  },
  {
    src: "naa.jpg",
    caption: "นะ",
  },
  {
    src: "1.jpg",
    caption: "ก็เป็นอยู่เเล้วนิ",
  },
];

export default function PhotoPage() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const go = (next: number) => {
    // simple fade-out/fade-in animation
    setFade(false);
    setTimeout(() => {
      setIndex(next);
      setFade(true);
    }, 120);
  };

  const handleBack = () => {
    go((index - 1 + photos.length) % photos.length);
  };

  const handleNext = () => {
    go((index + 1) % photos.length);
  };

  // Keyboard shortcuts: ← / →
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handleBack();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index]);

  // progress percent
  const progress = ((index + 1) / photos.length) * 100;

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-pink-50 to-rose-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden border border-rose-100">
        {/* Progress bar */}
        <div className="h-1 bg-rose-100">
          <div
            className="h-full bg-pink-500 transition-all"
            style={{ width: `${progress}%` }}
            aria-hidden
          />
        </div>

        {/* Image wrapper with soft fade */}
        <div className="relative">
          <img
            src={photos[index].src}
            alt={photos[index].caption}
            className={`w-full h-[700px] object-cover transition-opacity duration-300 ${
              fade ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* Bottom gradient & caption over image */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
            <div className="from-black/50 to-transparent bg-gradient-to-t rounded-2xl">
              <div className="p-4">
                <h2 className="text-white/95 text-2xl font-semibold drop-shadow">
                  {photos[index].caption}
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="p-5 sm:p-6 flex flex-col gap-4">
          {/* Dots indicator */}
          <div className="flex items-center justify-center gap-2">
            {photos.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-pink-600 w-6" : "bg-rose-200"
                }`}
                aria-label={i === index ? "current" : "dot"}
              />
            ))}
          </div>

          <div className="flex items-center justify-between gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
            >
              ไม่ดูเเละ
            </Link>

            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={handleBack}
                className="px-4 sm:px-5 py-2 rounded-xl bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition"
              >
                ย้อนกลับ
              </button>
              <button
                onClick={handleNext}
                className="px-4 sm:px-5 py-2 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition shadow"
              >
                ดูต่อ →
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
