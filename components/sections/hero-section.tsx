import Link from "next/link";
import { content } from "@/lib/content";

export function HeroSection() {
  const { hero, storeLinks } = content;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(192,57,43,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8">
          <span
            className="text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full border"
            style={{
              color: "#C0392B",
              borderColor: "rgba(192,57,43,0.4)",
              backgroundColor: "rgba(192,57,43,0.08)",
            }}
          >
            {hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          {hero.headline.split("\n").map((line, i) => (
            <span key={i} className={i === 0 ? "block" : "block"} style={i === 1 ? { color: "#C0392B" } : {}}>
              {line}
            </span>
          ))}
        </h1>

        {/* Subline */}
        <p className="text-xl md:text-2xl font-medium mb-4" style={{ color: "#888888" }}>
          {hero.subline}
        </p>

        <p className="text-base md:text-lg max-w-lg mx-auto mb-12" style={{ color: "#555555" }}>
          {hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={storeLinks.appStore}
            className="group flex items-center gap-3 px-7 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{ backgroundColor: "#C0392B" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleIcon />
            <span>
              <span className="block text-[11px] font-normal opacity-80 leading-none mb-0.5">
                {hero.ctaAppStoreHint}
              </span>
              <span className="block text-base font-semibold leading-none">{hero.ctaAppStore}</span>
            </span>
          </Link>

          <Link
            href={storeLinks.googlePlay}
            className="group flex items-center gap-3 px-7 py-4 rounded-xl font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
            style={{
              backgroundColor: "#141414",
              border: "1px solid #2A2A2A",
              color: "#FFFFFF",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <PlayIcon />
            <span>
              <span className="block text-[11px] font-normal opacity-60 leading-none mb-0.5">
                {hero.ctaGooglePlayHint}
              </span>
              <span className="block text-base font-semibold leading-none">{hero.ctaGooglePlay}</span>
            </span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-24 flex flex-col items-center gap-2" style={{ color: "#3A3A3A" }}>
          <span className="text-xs tracking-widest uppercase">{hero.scrollHint}</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#3A3A3A] to-transparent" />
        </div>
      </div>
    </section>
  );
}

function AppleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.3.17.64.24.99.19l13.01-11.95L3.18.24C2.83.19 2.49.26 2.19.43 1.6.79 1.25 1.43 1.25 2.14v19.72c0 .71.35 1.35.94 1.71l.99-.01zm1.45-20.7 9.03 8.3-9.03 8.3V3.06zm13.17 7.77L15.2 12l2.6 1.17-1-.34zm-12.18 9.21 10.28-9.46-1.62-.58-8.66 10.04z" />
    </svg>
  );
}
