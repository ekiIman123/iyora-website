import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Tentang IYORA",
  description:
    "Pelajari kisah lahirnya IYORA, visi, misi, dan nilai-nilai yang kami pegang sebagai lembaga olimpiade sains pemuda Indonesia.",
};

function AboutContent() {
  const t = useTranslations("about");

  const values = [
    { key: "excellence", icon: "⭐" },
    { key: "integrity", icon: "🛡️" },
    { key: "inclusivity", icon: "🌏" },
    { key: "innovation", icon: "💡" },
    { key: "collaboration", icon: "🤝" },
  ] as const;

  const missions = [
    t("mission_1"),
    t("mission_2"),
    t("mission_3"),
    t("mission_4"),
  ];

  return (
    <>
      {/* Hero */}
      <section className="gradient-hero pt-32 pb-20 text-white text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{t("hero_title")}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">{t("hero_subtitle")}</p>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">{t("story_title")}</h2>
        {t("story_body")
          .split("\n\n")
          .map((para, i) => (
            <p key={i} className="text-gray-700 text-lg leading-relaxed mb-6">
              {para}
            </p>
          ))}
      </section>

      {/* Vision & Mission */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{t("vision_title")}</h2>
            <p className="text-gray-700 text-lg leading-relaxed italic border-l-4 border-teal pl-6">
              {t("vision_body")}
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">{t("mission_title")}</h2>
            <ul className="space-y-4">
              {missions.map((m, i) => (
                <li key={i} className="flex gap-3 text-gray-700">
                  <span className="text-accent font-bold mt-1 shrink-0">
                    0{i + 1}
                  </span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          {t("values_title")}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {values.map(({ key, icon }) => (
            <div
              key={key}
              className="text-center p-6 rounded-2xl border border-gray-100 hover:border-teal hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold text-primary text-sm">
                {t(`val_${key}` as Parameters<typeof t>[0])}
              </h3>
              <p className="text-gray-500 text-xs mt-2">
                {t(`val_${key}_desc` as Parameters<typeof t>[0])}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default function AboutPage() {
  return <AboutContent />;
}
