import type { Metadata } from "next";
import {
  Inter,
  Space_Mono,
  Playfair_Display,
  Raleway,
  Orbitron,
  Crimson_Text,
} from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space-mono" });
const playfairDisplay = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const raleway = Raleway({ subsets: ["latin"], variable: "--font-raleway" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" });
const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
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
    <html
      lang="de"
      className={`${inter.variable} ${spaceMono.variable} ${playfairDisplay.variable} ${raleway.variable} ${orbitron.variable} ${crimsonText.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
