"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  const t = useTranslations("cta_section");
  const locale = useLocale();

  return (
    <section className="gradient-cta py-24 px-6 overflow-hidden relative">
      {/* Decorative blobs */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 rounded-full opacity-10"
        style={{ backgroundColor: "#39bcbe" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-56 h-56 rounded-full opacity-10"
        style={{ backgroundColor: "#fb9722" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-6"
        >
          {t("title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-white/75 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
        >
          {t("desc")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href={`/${locale}/competitions`}
            className="inline-block px-10 py-4 rounded-full font-bold text-white text-base shadow-lg shadow-black/30 hover:scale-105 hover:shadow-xl transition-all duration-200"
            style={{ backgroundColor: "#fb9722" }}
          >
            {t("button")}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
