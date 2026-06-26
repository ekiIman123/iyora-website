"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Target, Globe, ShieldCheck } from "lucide-react";

interface Feature {
  icon: React.ReactNode;
  titleKey: "focus_title" | "network_title" | "trust_title";
  descKey: "focus_desc" | "network_desc" | "trust_desc";
  accent: string;
  bg: string;
}

const FEATURES: Feature[] = [
  {
    icon: <Target size={24} />,
    titleKey: "focus_title",
    descKey: "focus_desc",
    accent: "#66449b",
    bg: "#66449b1a",
  },
  {
    icon: <Globe size={24} />,
    titleKey: "network_title",
    descKey: "network_desc",
    accent: "#39bcbe",
    bg: "#39bcbe1a",
  },
  {
    icon: <ShieldCheck size={24} />,
    titleKey: "trust_title",
    descKey: "trust_desc",
    accent: "#fb9722",
    bg: "#fb97221a",
  },
];

export default function WhyIYORA() {
  const t = useTranslations("why");

  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">{t("subtitle")}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="bg-gray-50 rounded-2xl p-8 flex flex-col gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: feature.bg, color: feature.accent }}
              >
                {feature.icon}
              </div>
              <h3
                className="text-xl font-bold"
                style={{ color: feature.accent }}
              >
                {t(feature.titleKey)}
              </h3>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                {t(feature.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
