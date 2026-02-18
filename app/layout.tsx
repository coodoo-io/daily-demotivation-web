import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Daily Demotivation — Garantiert frei von toxischer Positivität",
  description:
    "Anti-Coaching mit schwarzem Humor. Täglich ein ehrlicher, sarkastischer Spruch als Gegengift zur Motivationskultur. Kostenlos für iOS und Android.",
  keywords: ["Daily Demotivation", "Anti-Coaching", "schwarzer Humor", "Spruch des Tages", "App"],
  openGraph: {
    title: "Daily Demotivation",
    description: "Täglich ein Spruch, der dich nicht motiviert.",
    siteName: "Daily Demotivation",
    locale: "de_DE",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
