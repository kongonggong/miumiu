"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState(
    "อ้วนรักเค้ามั้ยย💖"
  );
  const [scale, setScale] = useState(1); // scale factor for Yes button

  const handleNoClick = () => {
    setMessage("ให้เลือกใหม่🤨");
    setScale((prev) => prev + 0.3); // increase scale each time No is clicked
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 p-6">
      <article className="w-full max-w-md rounded-3xl shadow-xl bg-white overflow-hidden border border-pink-200">
        {/* Top image */}
        <img
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1600&auto=format&fit=crop"
          alt="Pink hearts"
          className="w-full h-48 object-cover"
        />

        <div className="p-6 text-center">
          {/* Title */}
          <h1 className="text-2xl font-bold text-pink-700 mb-2">❤</h1>

          {/* Message */}
          <p className="mt-2 text-gray-700">{message}</p>

          {/* Buttons */}
          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/love"
              className="px-4 py-2 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition transform"
              style={{ transform: `scale(${scale})` }}
            >
              รักกกกกก
            </Link>

            <button
              onClick={handleNoClick}
              className="px-4 py-2 rounded-xl border border-pink-300 text-pink-700 bg-pink-50 hover:bg-pink-100 transition"
            >
              ไม่
            </button>
          </div>
        </div>
      </article>
    </main>
  );
}
