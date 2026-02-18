export const content = {
  nav: {
    appName: "Daily Demotivation",
    links: {
      features: "Features",
      themes: "Themes",
      pricing: "Preise",
    },
    cta: "App laden",
  },

  hero: {
    badge: "Anti-Coaching App",
    headline: "Garantiert frei von\ntoxischer Positivität.",
    subline: "Jeden Tag ein Spruch, der dich nicht motiviert.",
    description:
      "Während andere Apps dir sagen, du schaffst das, sagen wir dir die Wahrheit. Täglich. Kostenlos.",
    ctaAppStore: "App Store",
    ctaGooglePlay: "Google Play",
    ctaAppStoreHint: "Kostenlos für iOS",
    ctaGooglePlayHint: "Kostenlos für Android",
    scrollHint: "Mehr erfahren",
  },

  quote: {
    sectionLabel: "Spruch des Tages",
    example: "Der Montag ist das einzige, das zuverlässiger kommt als deine Ausreden.",
    attribution: "— Daily Demotivation",
  },

  features: {
    headline: "Was die App kann.",
    subline: "Alles, was du brauchst, um den Tag realistisch zu beginnen.",
    items: [
      {
        icon: "Calendar",
        title: "Täglicher Spruch",
        description: "Ein neuer Spruch pro Tag. Auf Deutsch und Englisch. Pünktlich, ob du willst oder nicht.",
      },
      {
        icon: "Palette",
        title: "6 visuelle Themes",
        description: "Von minimalistisch-dunkel bis gothic-düster. Für jeden Grad an Nihilismus.",
      },
      {
        icon: "Share2",
        title: "Als Bild teilen",
        description: "Teile deine Demotivation mit Freunden. Sie werden es schätzen. Oder nicht.",
      },
      {
        icon: "Layout",
        title: "Homescreen-Widget",
        description: "Direkt auf dem Sperrbildschirm. Damit du gleich morgens weißt, woran du bist.",
      },
      {
        icon: "Archive",
        title: "Archiv",
        description: "365 Tage Demotivation auf Abruf. Für Premium-Nutzer, die es wirklich ernst nehmen.",
      },
      {
        icon: "Bell",
        title: "Benachrichtigungen",
        description: "Tägliche Erinnerung. Weil du sonst vergisst, wie aussichtslos alles ist.",
      },
    ],
  },

  themes: {
    headline: "6 Themes.",
    subline: "Weil Tristesse auch ästhetisch sein kann.",
    items: [
      {
        name: "Midnight",
        description: "Klares, minimalistisches Dunkel",
        bg: "#0A0A0A",
        surface: "#141414",
        accent: "#C0392B",
        text: "#FFFFFF",
        muted: "#888888",
      },
      {
        name: "Concrete",
        description: "Brutalistisch, roh, industrial",
        bg: "#2C2C2C",
        surface: "#3A3A3A",
        accent: "#8B8B8B",
        text: "#E8E8E8",
        muted: "#666666",
      },
      {
        name: "Parchment",
        description: "Elegant, klassisch, hell",
        bg: "#F5F0E8",
        surface: "#EDE8DC",
        accent: "#8B4513",
        text: "#1A1A1A",
        muted: "#6B6B6B",
      },
      {
        name: "coodoo",
        description: "Corporate, professionell",
        bg: "#0D1117",
        surface: "#161B22",
        accent: "#238636",
        text: "#C9D1D9",
        muted: "#8B949E",
      },
      {
        name: "Neon",
        description: "Cyberpunk, elektrisch",
        bg: "#0A0010",
        surface: "#110020",
        accent: "#FF00FF",
        text: "#FFFFFF",
        muted: "#AA00AA",
      },
      {
        name: "Blood Moon",
        description: "Gothic, düster",
        bg: "#0D0005",
        surface: "#1A000A",
        accent: "#8B0000",
        text: "#E8D5D5",
        muted: "#7A4040",
      },
    ],
  },

  pricing: {
    headline: "Preise.",
    subline: "Kostenlos ist schon mehr als genug.",
    free: {
      name: "Kostenlos",
      price: "0 €",
      description: "Für alle, die täglich erinnert werden wollen, dass es schlimmer geht.",
      features: [
        "Täglicher Spruch (DE/EN)",
        "Alle 6 Themes",
        "Als Bild teilen",
        "Kein Abo. Keine Pflichten.",
      ],
      cta: "Kostenlos laden",
    },
    premium: {
      name: "Premium",
      price: "0,99 €",
      period: "/ Jahr",
      trialLabel: "14 Tage kostenlos testen",
      description: "Für Enthusiasten, die auch gestern und vorgestern wissen wollen, wie hoffnungslos alles war.",
      features: [
        "Alles aus Kostenlos",
        "Archiv — alle 365 Tage",
        "Homescreen-Widget",
        "Tägliche Benachrichtigungen",
        "Favoriten speichern",
      ],
      cta: "14 Tage testen",
    },
  },

  footer: {
    tagline: "Daily Demotivation — weil Realismus keine Lernkurve hat.",
    developer: "coodoo GmbH",
    links: [
      { label: "Impressum", href: "https://www.coodoo.de/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
  },

  storeLinks: {
    appStore: "https://apps.apple.com/app/daily-demotivation/id123456789",
    googlePlay: "https://play.google.com/store/apps/details?id=io.coodoo.daily_demotivation",
  },
} as const;
