import Link from "next/link";

export const metadata = {
  title: "Love Note 💌",
};

export default function LovePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-rose-50 p-6">
      <div className="max-w-lg w-full text-center bg-white rounded-3xl shadow-xl border border-rose-200 p-10">
        <div className="text-5xl animate-bounce">💗</div>
        <h1 className="mt-4 text-3xl font-bold text-rose-700">You are loved</h1>
        <p className="mt-2 text-gray-700">
          Every day, in small and big ways. Thanks for being you.
        </p>

        <div className="mt-6 flex justify-center gap-3">
          <Link
            href="/photo"
            className="px-5 py-2 rounded-xl bg-rose-600 text-white font-medium hover:bg-rose-700 transition"
          >
            See our photo 📸
          </Link>
          <Link
            href="/"
            className="px-5 py-2 rounded-xl border border-rose-300 text-rose-700 bg-rose-50 hover:bg-rose-100 transition"
          >
            Back home
          </Link>
        </div>
      </div>
    </main>
  );
}
