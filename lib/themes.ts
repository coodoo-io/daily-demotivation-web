export type ThemeId = "midnight" | "concrete" | "parchment" | "coodoo" | "neon" | "bloodmoon";

export interface AppTheme {
  id: ThemeId;
  name: string;
  description: string;
  preview: {
    bg: string;
    surface: string;
    text: string;
    accent: string;
    muted: string;
  };
  cssVars: Record<string, string>;
}

export const appThemes: AppTheme[] = [
  {
    id: "midnight",
    name: "Midnight",
    description: "Klares, minimalistisches Dunkel",
    preview: {
      bg: "#0A0A0A",
      surface: "#141414",
      text: "#FFFFFF",
      accent: "#C0392B",
      muted: "#888888",
    },
    cssVars: {
      "--t-bg": "#0A0A0A",
      "--t-bg-alt": "#080808",
      "--t-surface": "#141414",
      "--t-surface-2": "#1E1E1E",
      "--t-text": "#FFFFFF",
      "--t-text-muted": "#888888",
      "--t-text-dim": "#555555",
      "--t-text-dimmer": "#333333",
      "--t-text-subtle": "#CCCCCC",
      "--t-accent": "#C0392B",
      "--t-accent-subtle": "rgba(192,57,43,0.12)",
      "--t-accent-border": "rgba(192,57,43,0.4)",
      "--t-accent-glow": "rgba(192,57,43,0.15)",
      "--t-border": "#2A2A2A",
      "--t-border-2": "#1A1A1A",
      "--t-nav-bg": "rgba(10,10,10,0.85)",
      "--t-body-gradient": "#0A0A0A",
      "--t-hero-gradient":
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(192,57,43,0.15) 0%, transparent 60%)",
      "--t-font": "var(--font-inter)",
    },
  },
  {
    id: "concrete",
    name: "Concrete",
    description: "Brutalistisch, roh, industrial",
    preview: {
      bg: "#2A2A2A",
      surface: "#333333",
      text: "#D0D0D0",
      accent: "#8B8B8B",
      muted: "#666666",
    },
    cssVars: {
      "--t-bg": "#2A2A2A",
      "--t-bg-alt": "#242424",
      "--t-surface": "#333333",
      "--t-surface-2": "#3A3A3A",
      "--t-text": "#D0D0D0",
      "--t-text-muted": "#888888",
      "--t-text-dim": "#666666",
      "--t-text-dimmer": "#555555",
      "--t-text-subtle": "#AAAAAA",
      "--t-accent": "#8B8B8B",
      "--t-accent-subtle": "rgba(139,139,139,0.15)",
      "--t-accent-border": "rgba(139,139,139,0.4)",
      "--t-accent-glow": "rgba(139,139,139,0.08)",
      "--t-border": "#404040",
      "--t-border-2": "#333333",
      "--t-nav-bg": "rgba(42,42,42,0.92)",
      "--t-body-gradient": "#2A2A2A",
      "--t-hero-gradient": "none",
      "--t-font": "var(--font-space-mono)",
    },
  },
  {
    id: "parchment",
    name: "Parchment",
    description: "Elegant, klassisch, zeitlos",
    preview: {
      bg: "#F5ECD7",
      surface: "#EDE4CC",
      text: "#3E2723",
      accent: "#8D6E63",
      muted: "#7D6A5A",
    },
    cssVars: {
      "--t-bg": "#F5ECD7",
      "--t-bg-alt": "#EDE4CC",
      "--t-surface": "#EDE4CC",
      "--t-surface-2": "#E5DAC0",
      "--t-text": "#3E2723",
      "--t-text-muted": "#7D6A5A",
      "--t-text-dim": "#9D8070",
      "--t-text-dimmer": "#BDA090",
      "--t-text-subtle": "#5D4A3A",
      "--t-accent": "#8D6E63",
      "--t-accent-subtle": "rgba(141,110,99,0.15)",
      "--t-accent-border": "rgba(141,110,99,0.4)",
      "--t-accent-glow": "rgba(141,110,99,0.12)",
      "--t-border": "#D4C4A8",
      "--t-border-2": "#C4B498",
      "--t-nav-bg": "rgba(245,236,215,0.92)",
      "--t-body-gradient": "radial-gradient(ellipse at center, #FFF8EC 0%, #F5ECD7 100%)",
      "--t-hero-gradient":
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(141,110,99,0.2) 0%, transparent 60%)",
      "--t-font": "var(--font-playfair)",
    },
  },
  {
    id: "coodoo",
    name: "coodoo",
    description: "Professionell, markenstark, technisch",
    preview: {
      bg: "#071F2B",
      surface: "#0D2D3E",
      text: "#F2F9FD",
      accent: "#259BD7",
      muted: "#7AACCC",
    },
    cssVars: {
      "--t-bg": "#071F2B",
      "--t-bg-alt": "#051820",
      "--t-surface": "#0D2D3E",
      "--t-surface-2": "#143347",
      "--t-text": "#F2F9FD",
      "--t-text-muted": "#7AACCC",
      "--t-text-dim": "#4A7A99",
      "--t-text-dimmer": "#2A5A79",
      "--t-text-subtle": "#C2E9FD",
      "--t-accent": "#259BD7",
      "--t-accent-subtle": "rgba(37,155,215,0.15)",
      "--t-accent-border": "rgba(37,155,215,0.4)",
      "--t-accent-glow": "rgba(37,155,215,0.15)",
      "--t-border": "#1A3D50",
      "--t-border-2": "#0D2D3E",
      "--t-nav-bg": "rgba(7,31,43,0.92)",
      "--t-body-gradient": "radial-gradient(ellipse at center, #0D3347 0%, #071F2B 100%)",
      "--t-hero-gradient":
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(37,155,215,0.15) 0%, transparent 60%)",
      "--t-font": "var(--font-raleway)",
    },
  },
  {
    id: "neon",
    name: "Neon",
    description: "Cyberpunk, elektrisch, High-Contrast",
    preview: {
      bg: "#0D0D0D",
      surface: "#141414",
      text: "#00FFFF",
      accent: "#FF0080",
      muted: "#00AAAA",
    },
    cssVars: {
      "--t-bg": "#0D0D0D",
      "--t-bg-alt": "#0A0A0A",
      "--t-surface": "#141414",
      "--t-surface-2": "#1A1A1A",
      "--t-text": "#00FFFF",
      "--t-text-muted": "#00AAAA",
      "--t-text-dim": "#007777",
      "--t-text-dimmer": "#004444",
      "--t-text-subtle": "#80FFFF",
      "--t-accent": "#FF0080",
      "--t-accent-subtle": "rgba(255,0,128,0.12)",
      "--t-accent-border": "rgba(255,0,128,0.4)",
      "--t-accent-glow": "rgba(255,0,128,0.2)",
      "--t-border": "#1A0A1A",
      "--t-border-2": "#120812",
      "--t-nav-bg": "rgba(13,13,13,0.92)",
      "--t-body-gradient": "radial-gradient(ellipse at center, #1A0028 0%, #0D0D0D 100%)",
      "--t-hero-gradient":
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,0,128,0.2) 0%, transparent 60%)",
      "--t-font": "var(--font-orbitron)",
    },
  },
  {
    id: "bloodmoon",
    name: "Blood Moon",
    description: "Dunkel, düster, gotisch",
    preview: {
      bg: "#1A0A0A",
      surface: "#250F0F",
      text: "#E0C8C8",
      accent: "#D44444",
      muted: "#A08080",
    },
    cssVars: {
      "--t-bg": "#1A0A0A",
      "--t-bg-alt": "#140808",
      "--t-surface": "#250F0F",
      "--t-surface-2": "#2F1414",
      "--t-text": "#E0C8C8",
      "--t-text-muted": "#A08080",
      "--t-text-dim": "#7A5A5A",
      "--t-text-dimmer": "#4A3030",
      "--t-text-subtle": "#C0A0A0",
      "--t-accent": "#D44444",
      "--t-accent-subtle": "rgba(212,68,68,0.12)",
      "--t-accent-border": "rgba(212,68,68,0.4)",
      "--t-accent-glow": "rgba(212,68,68,0.15)",
      "--t-border": "#4A1A1A",
      "--t-border-2": "#3A1010",
      "--t-nav-bg": "rgba(26,10,10,0.92)",
      "--t-body-gradient": "radial-gradient(ellipse at center, #2A1010 0%, #1A0A0A 100%)",
      "--t-hero-gradient":
        "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(212,68,68,0.15) 0%, transparent 60%)",
      "--t-font": "var(--font-crimson)",
    },
  },
];

export function getTheme(id: ThemeId): AppTheme {
  return appThemes.find((t) => t.id === id) ?? appThemes[0];
}
