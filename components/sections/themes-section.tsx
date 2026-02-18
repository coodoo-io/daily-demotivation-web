import { content } from "@/lib/content";

export function ThemesSection() {
  const { themes } = content;

  return (
    <section id="themes" className="py-24 px-6" style={{ backgroundColor: "#080808" }}>
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">{themes.headline}</h2>
          <p className="text-lg" style={{ color: "#888888" }}>
            {themes.subline}
          </p>
        </div>

        {/* Theme grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {themes.items.map((theme) => (
            <ThemeCard key={theme.name} theme={theme} />
          ))}
        </div>
      </div>
    </section>
  );
}

type ThemeItem = (typeof content.themes.items)[number];

function ThemeCard({ theme }: { theme: ThemeItem }) {
  return (
    <div
      className="rounded-2xl overflow-hidden group hover:scale-[1.02] transition-all duration-300"
      style={{ border: "1px solid #2A2A2A" }}
    >
      {/* App preview mockup */}
      <div
        className="relative h-52 p-6 flex flex-col justify-between"
        style={{ backgroundColor: theme.bg }}
      >
        {/* Status bar dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: theme.muted }} />
          <div className="w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: theme.muted }} />
          <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: theme.accent }} />
        </div>

        {/* Mock quote preview */}
        <div>
          <div
            className="text-[10px] font-medium mb-3 uppercase tracking-widest"
            style={{ color: theme.muted }}
          >
            Spruch des Tages
          </div>
          <div
            className="text-sm font-semibold leading-snug mb-4"
            style={{ color: theme.text }}
          >
            &ldquo;Auch heute wird nichts besser. Aber das kennst du ja.&rdquo;
          </div>
          <div
            className="inline-flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5 rounded-full"
            style={{ backgroundColor: theme.surface, color: theme.accent }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: theme.accent }}
            />
            Teilen
          </div>
        </div>
      </div>

      {/* Label */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{ backgroundColor: "#141414" }}
      >
        <div>
          <div className="text-sm font-semibold" style={{ color: "#FFFFFF" }}>
            {theme.name}
          </div>
          <div className="text-xs mt-0.5" style={{ color: "#888888" }}>
            {theme.description}
          </div>
        </div>
        {/* Accent color dot */}
        <div
          className="w-5 h-5 rounded-full ring-2 ring-black/20"
          style={{ backgroundColor: theme.accent }}
        />
      </div>
    </div>
  );
}
