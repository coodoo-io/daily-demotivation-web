"use client";

import { Check } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { appThemes, type AppTheme, type ThemeId } from "@/lib/themes";

export function ThemesSection() {
  const { activeTheme, setTheme } = useTheme();

  return (
    <section
      id="themes"
      className="py-24 px-6"
      style={{ backgroundColor: "var(--t-bg-alt)", transition: "background-color 0.4s ease" }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="mb-4">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ color: "var(--t-text)" }}
          >
            6 Themes.
          </h2>
          <p className="text-lg" style={{ color: "var(--t-text-muted)" }}>
            Weil Tristesse auch ästhetisch sein kann. Klick auf ein Theme um es auszuprobieren.
          </p>
        </div>

        {/* Theme grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {appThemes.map((theme) => (
            <ThemeCard
              key={theme.id}
              theme={theme}
              isActive={activeTheme === theme.id}
              onSelect={() => setTheme(theme.id as ThemeId)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ThemeCard({
  theme,
  isActive,
  onSelect,
}: {
  theme: AppTheme;
  isActive: boolean;
  onSelect: () => void;
}) {
  const { bg, surface, text, accent, muted } = theme.preview;

  return (
    <button
      onClick={onSelect}
      className="rounded-2xl overflow-hidden text-left transition-all duration-300 focus:outline-none"
      style={{
        border: isActive ? `2px solid ${accent}` : "1px solid var(--t-border)",
        transform: isActive ? "scale(1.02)" : "scale(1)",
        boxShadow: isActive ? `0 0 24px ${accent}33` : "none",
        cursor: "pointer",
      }}
      aria-pressed={isActive}
    >
      {/* App preview mockup */}
      <div className="relative h-52 p-6 flex flex-col justify-between" style={{ backgroundColor: bg }}>
        {/* Status bar dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: muted }} />
          <div className="w-2 h-2 rounded-full opacity-40" style={{ backgroundColor: muted }} />
          <div className="w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: accent }} />
        </div>

        {/* Mock quote preview */}
        <div>
          <div className="text-[10px] font-medium mb-3 uppercase tracking-widest" style={{ color: muted }}>
            Spruch des Tages
          </div>
          <div className="text-sm font-semibold leading-snug mb-4" style={{ color: text }}>
            &ldquo;Auch heute wird nichts besser. Aber das kennst du ja.&rdquo;
          </div>
          <div
            className="inline-flex items-center gap-1.5 text-[10px] font-medium px-3 py-1.5 rounded-full"
            style={{ backgroundColor: surface, color: accent }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accent }} />
            Teilen
          </div>
        </div>

        {/* Active checkmark */}
        {isActive && (
          <div
            className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: accent }}
          >
            <Check size={12} color="#fff" strokeWidth={3} />
          </div>
        )}
      </div>

      {/* Label */}
      <div
        className="px-5 py-4 flex items-center justify-between"
        style={{
          backgroundColor: "var(--t-surface)",
          transition: "background-color 0.4s ease",
        }}
      >
        <div>
          <div className="text-sm font-semibold" style={{ color: "var(--t-text)" }}>
            {theme.name}
            {isActive && (
              <span
                className="ml-2 text-[10px] font-medium px-1.5 py-0.5 rounded"
                style={{ backgroundColor: "var(--t-accent-subtle)", color: "var(--t-accent)" }}
              >
                Aktiv
              </span>
            )}
          </div>
          <div className="text-xs mt-0.5" style={{ color: "var(--t-text-muted)" }}>
            {theme.description}
          </div>
        </div>
        <div
          className="w-5 h-5 rounded-full ring-2 ring-black/20 shrink-0"
          style={{ backgroundColor: accent }}
        />
      </div>
    </button>
  );
}
