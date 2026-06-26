import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Berita",
  description: "Berita dan pengumuman terbaru dari IYORA.",
};

function NewsContent() {
  const t = useTranslations("nav");

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("news")}</h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto opacity-90">
          Informasi terbaru seputar olimpiade sains IYORA.
        </p>
      </section>

      {/* Coming Soon */}
      <section className="py-32 px-6 flex flex-col items-center justify-center text-center">
        {/* Icon */}
        <div className="relative mb-10">
          <div className="w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
            <svg
              className="w-14 h-14 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          {/* Decorative ping */}
          <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-accent animate-ping opacity-75" />
          <span className="absolute top-1 right-1 w-5 h-5 rounded-full bg-accent" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Segera Hadir
        </h2>
        <p className="text-gray-500 text-lg max-w-md mb-10 leading-relaxed">
          Halaman berita sedang dalam pengembangan. Nantikan informasi terbaru,
          pengumuman olimpiade, dan pencapaian peserta IYORA di sini.
        </p>

        {/* Divider with brand styling */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-16 h-px bg-primary/20" />
          <span className="text-xs font-semibold uppercase tracking-widest text-primary/40">
            Coming Soon
          </span>
          <div className="w-16 h-px bg-primary/20" />
        </div>

        {/* Suggest contacting */}
        <p className="text-sm text-gray-400">
          Untuk informasi terkini, hubungi kami melalui{" "}
          <a
            href="/id/contact"
            className="text-teal font-semibold hover:underline underline-offset-4"
          >
            halaman kontak
          </a>
          .
        </p>
      </section>
    </>
  );
}

export default function NewsPage() {
  return <NewsContent />;
}
