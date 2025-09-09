"use client";

import { useState } from "react";
import Link from "next/link";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1600&auto=format&fit=crop",
    caption: "For you 💖",
  },
  {
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1600&auto=format&fit=crop",
    caption: "Another sweet memory 🌸",
  },
  {
    src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop",
    caption: "Always together 💕",
  },
];

export default function PhotoPage() {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % photos.length);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Image */}
        <img
          src={photos[index].src}
          alt={photos[index].caption}
          className="w-full h-[420px] object-cover"
        />

        {/* Caption + Buttons */}
        <div className="p-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            {photos[index].caption}
          </h2>

          <div className="flex gap-3">
            <Link
              href="/"
              className="px-4 py-2 rounded-xl border text-black border-gray-300 hover:bg-gray-100 transition"
            >
              ← Back
            </Link>
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-xl bg-pink-600 text-white font-medium hover:bg-pink-700 transition"
            >
              Next →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
