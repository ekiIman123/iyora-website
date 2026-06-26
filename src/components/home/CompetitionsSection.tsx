"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { useState } from "react";

const MOBILE_LIMIT = 4;

type Level = "national" | "international" | "madrasah";

interface Olympiad {
  id: string;
  name: string;
  full: string;
  icon: string;
  level: Level;
}

const OLYMPIADS: Olympiad[] = [
  { id: "nybo", name: "NYBO", full: "National Youth Biology Olympiad", icon: "🧬", level: "national" },
  { id: "iybo", name: "IYBO", full: "International Youth Biology Olympiad", icon: "🧬", level: "international" },
  { id: "nypo", name: "NYPO", full: "National Youth Physics Olympiad", icon: "⚛️", level: "national" },
  { id: "iypo", name: "IYPO", full: "International Youth Physics Olympiad", icon: "⚛️", level: "international" },
  { id: "nyco", name: "NYCO", full: "National Youth Chemistry Olympiad", icon: "🧪", level: "national" },
  { id: "iyco", name: "IYCO", full: "International Youth Chemistry Olympiad", icon: "🧪", level: "international" },
  { id: "nymo", name: "NYMO", full: "National Youth Mathematics Olympiad", icon: "➗", level: "national" },
  { id: "iymo", name: "IYMO", full: "International Youth Mathematics Olympiad", icon: "➗", level: "international" },
  { id: "iygo", name: "IYGO", full: "International Youth Geography Olympiad", icon: "🌍", level: "international" },
  { id: "iyeo", name: "IYEO", full: "International Youth Environmental Olympiad", icon: "🌱", level: "international" },
  { id: "os2mn", name: "OS2MN", full: "Olimpiade Sains Siswa Madrasah Nasional", icon: "🕌", level: "madrasah" },
  { id: "wso", name: "WSO", full: "World Science Olympiad", icon: "🏆", level: "international" },
];

const LEVEL_STYLES: Record<Level, { badge: string; border: string }> = {
  national: {
    badge: "bg-teal/10 text-teal border border-teal/25",
    border: "hover:border-teal/50",
  },
  international: {
    badge: "bg-primary/10 text-primary border border-primary/25",
    border: "hover:border-primary/50",
  },
  madrasah: {
    badge: "bg-accent/10 text-accent border border-accent/25",
    border: "hover:border-accent/50",
  },
};

const LEVEL_LABEL: Record<Level, string> = {
  national: "national",
  international: "international",
  madrasah: "madrasah",
};

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const cardVariant: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0, 0, 1] } },
};

export default function CompetitionsSection() {
  const t = useTranslations("competitions_section");
  const locale = useLocale();
  const [showAll, setShowAll] = useState(false);

  const visibleOnMobile = showAll ? OLYMPIADS : OLYMPIADS.slice(0, MOBILE_LIMIT);
  const hidden = OLYMPIADS.slice(MOBILE_LIMIT);

  return (
    <section className="bg-gray-50 py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        {/* Mobile grid: 2 col, limited cards */}
        <div className="sm:hidden">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 gap-3"
          >
            {visibleOnMobile.map((o) => {
              const styles = LEVEL_STYLES[o.level];
              return (
                <motion.div
                  key={o.id}
                  variants={cardVariant}
                  className={`group bg-white rounded-2xl border border-gray-100 ${styles.border} hover:shadow-xl transition-all duration-300 flex flex-col p-4 cursor-pointer`}
                >
                  <div className="text-3xl mb-3 leading-none">{o.icon}</div>
                  <div className="flex items-start gap-1.5 flex-wrap mb-1.5">
                    <h3 className="text-sm font-extrabold text-gray-900">{o.name}</h3>
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide ${styles.badge} self-center`}>
                      {t(LEVEL_LABEL[o.level] as Parameters<typeof t>[0])}
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs leading-snug flex-1 mb-3 line-clamp-2">{o.full}</p>
                  <Link
                    href={`/${locale}/competitions`}
                    className="block text-center py-2 rounded-xl text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200"
                  >
                    {t("view_detail")}
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.25, 0, 0, 1] }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-2 gap-3 mt-3">
                  {hidden.map((o) => {
                    const styles = LEVEL_STYLES[o.level];
                    return (
                      <div
                        key={o.id}
                        className={`group bg-white rounded-2xl border border-gray-100 ${styles.border} hover:shadow-xl transition-all duration-300 flex flex-col p-4 cursor-pointer`}
                      >
                        <div className="text-3xl mb-3 leading-none">{o.icon}</div>
                        <div className="flex items-start gap-1.5 flex-wrap mb-1.5">
                          <h3 className="text-sm font-extrabold text-gray-900">{o.name}</h3>
                          <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wide ${styles.badge} self-center`}>
                            {t(LEVEL_LABEL[o.level] as Parameters<typeof t>[0])}
                          </span>
                        </div>
                        <p className="text-gray-400 text-xs leading-snug flex-1 mb-3 line-clamp-2">{o.full}</p>
                        <Link
                          href={`/${locale}/competitions`}
                          className="block text-center py-2 rounded-xl text-xs font-semibold bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200"
                        >
                          {t("view_detail")}
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold border-2 transition-all duration-200"
              style={{
                borderColor: "#66449b",
                color: showAll ? "#fff" : "#66449b",
                backgroundColor: showAll ? "#66449b" : "transparent",
              }}
            >
              {showAll ? "Tampilkan Lebih Sedikit" : `Selengkapnya (${hidden.length} lainnya)`}
            </button>
          </div>
        </div>

        {/* Desktop grid: all cards, 4 col */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {OLYMPIADS.map((o) => {
            const styles = LEVEL_STYLES[o.level];
            return (
              <motion.div
                key={o.id}
                variants={cardVariant}
                className={`group bg-white rounded-2xl border border-gray-100 ${styles.border} hover:shadow-xl transition-all duration-300 flex flex-col p-6 cursor-pointer`}
              >
                <div className="text-5xl mb-4 leading-none">{o.icon}</div>
                <div className="flex items-start gap-2 flex-wrap mb-2">
                  <h3 className="text-lg font-extrabold text-gray-900">{o.name}</h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide ${styles.badge} self-center`}>
                    {t(LEVEL_LABEL[o.level] as Parameters<typeof t>[0])}
                  </span>
                </div>
                <p className="text-gray-400 text-sm leading-snug flex-1 mb-5">{o.full}</p>
                <Link
                  href={`/${locale}/competitions`}
                  className="block text-center py-2.5 rounded-xl text-sm font-semibold bg-gray-50 text-gray-600 border border-gray-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-200"
                >
                  {t("view_detail")}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
