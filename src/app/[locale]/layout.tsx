import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "IYORA — Indonesian Youth Outstanding Recognition Association",
    template: "%s | IYORA",
  },
  description:
    "IYORA is Indonesia's dedicated youth science olympiad institution, organizing national and international competitions in Biology, Physics, Chemistry, Mathematics, Geography, and more.",
  keywords: [
    "IYORA",
    "Indonesian Youth Outstanding Recognition Association",
    "olimpiade sains",
    "science olympiad",
    "IYBO",
    "IYPO",
    "IYCO",
    "IYMO",
    "IYGO",
    "WSO",
    "OS2MN",
    "Indonesia",
    "youth olympiad",
  ],
  openGraph: {
    title: "IYORA — Indonesian Youth Outstanding Recognition Association",
    description:
      "Indonesia's dedicated home for youth science olympiads. Inspiring the next generation of scientists.",
    url: "https://iyora.or.id",
    siteName: "IYORA",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dvcufsiy1/image/upload/v1782429397/IYORA_BRAND_GUIDELINE_a6kwif.png",
        width: 1200,
        height: 630,
        alt: "IYORA — Indonesian Youth Outstanding Recognition Association",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "IYORA — Indonesian Youth Outstanding Recognition Association",
    description:
      "Indonesia's dedicated home for youth science olympiads.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "id" | "en")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dvcufsiy1/image/upload/v1782429397/iyora_icon_logo_okhxbo.png"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
