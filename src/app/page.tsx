"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [message, setMessage] = useState("อ้วนรักเค้ามั้ยย💖");
  const [scale, setScale] = useState(1);

  const handleNoClick = () => {
    setMessage("ให้เลือกใหม่🤨");
    setScale((prev) => prev + 0.3);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-pink-50 p-6">
      {/* Make this wrapper relative so we can place stickers on top */}
      <div className="relative w-full max-w-md">
        {/* --- STICKER (top-right) --- */}
        <img
          src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/1f437.png" // 🐷 pig emoji PNG
          alt="sticker pig"
          className="pointer-events-none select-none absolute -top-6 -right-6 w-16 md:w-20 rotate-12 drop-shadow-xl"
        />
        <img
          src="JI.png" // ❤️ heart PNG
          alt="sticker heart"
          className="pointer-events-none select-none absolute -bottom-6 -left-6 w-12 md:w-14 -rotate-90 drop-shadow-xl"
        />
        {/* (optional) second sticker bottom-left */}
        {/* <img
          src="https://raw.githubusercontent.com/twitter/twemoji/master/assets/72x72/2764.png" // ❤️ heart PNG
          alt="sticker heart"
          className="pointer-events-none select-none absolute -bottom-6 -left-6 w-12 md:w-14 -rotate-12 drop-shadow-xl"
        /> */}

        {/* Card */}
        <article className="rounded-3xl shadow-xl bg-white overflow-hidden border border-pink-200">
        <img
          src="/2.jpg"
          alt="Pink hearts"
          className="w-full
          
           h-84 object-cover"
        />


          <div className="p-6 text-center">
            <h1 className="text-2xl font-bold text-pink-700 mb-2">❤ MiuMiu Auann ❤</h1>
            <p className="mt-2 text-gray-700">{message}</p>

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
      </div>
    </main>
  );
}
