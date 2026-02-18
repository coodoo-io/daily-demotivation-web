@/Users/mkuehle/Projekte/DailyDemotivation/CLAUDE.md

# Daily Demotivation — Landingpage

## Projektbeschreibung

Marketing-Landingpage für die **Daily Demotivation App** — eine Anti-Coaching-App mit schwarzem Humor.
Separates Web-Projekt (Next.js), deployed auf Vercel oder GitHub Pages.

**Zweck:** App vorstellen, Store-Links anbieten, Humor & Tonalität der App transportieren.

---

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Sprache:** TypeScript
- **Deployment:** Vercel
- **Fonts:** Google Fonts (Inter, Orbitron via @next/font)
- **Icons:** Lucide React

---

## Design & Branding

Die Landingpage orientiert sich am **Midnight-Theme** der App (Standard-Theme):

| Token         | Wert               |
|---------------|--------------------|
| Background    | `#0A0A0A`          |
| Text          | `#FFFFFF`          |
| Accent        | `#C0392B` (rot)    |
| Secondary     | `#888888`          |
| Font Primary  | Inter 600           |
| Font Hero     | Span (lokal, falls vorhanden) |
| Border Radius | 8px standard, 16px cards |

**Tonalität:** Ironisch, trocken, selbstbewusst. Kein Ausrufezeichen. Keine positiven Floskeln.
**Gegenteil von typischen App-Landingpages** — das ist bewusst das Stilmittel.

---

## Seitenstruktur

### `/` — Hauptseite

1. **Hero Section**
   - Tagline: *„Garantiert frei von toxischer Positivität."*
   - Sub: *„Jeden Tag ein Spruch, der dich nicht motiviert."*
   - CTA-Buttons: App Store | Google Play
   - Hintergrund: Dunkles Gradient, optional animierter Demotivations-Spruch

2. **Spruch des Tages** (optional, via Supabase API)
   - Zeigt den aktuellen täglichen Spruch live an
   - Styled wie die App (Midnight-Theme)

3. **Features Section**
   - Täglicher Spruch (DE/EN)
   - 6 visuelle Themes
   - Teilen als Bild
   - Homescreen-Widget
   - Archiv (365 Tage mit Premium)

4. **Themes Showcase**
   - Visuelle Vorschau aller 6 Themes als Cards
   - Themes: Midnight, Concrete, Parchment, coodoo, Neon, Blood Moon

5. **Pricing Section**
   - Kostenlos: Täglicher Spruch, Themes, Teilen
   - Premium (€0,99/Jahr): Archiv, Widgets, Benachrichtigungen, Favoriten
   - 14-Tage Trial hervorheben

6. **Social Proof** (falls vorhanden)
   - Screenshots, Bewertungen, Zitate

7. **Footer**
   - Impressum-Link
   - Datenschutz-Link
   - GitHub-Link
   - Kontakt: support@coodoo.de

---

## Lokalisierung

- Primärsprache: **Deutsch**
- Englische Version: `/en/` Route (optional, zweite Phase)
- Alle User-facing Strings in Konstanten-Datei `lib/content.ts`

---

## App-Inhalte (für Landingpage-Texte)

**App Name:** Daily Demotivation
**Entwickler:** coodoo GmbH
**Version:** 1.0.0
**Platforms:** iOS 12+, Android 6+
**Preis:** Kostenlos + €0,99/Jahr Premium
**Sprachen:** Deutsch, Englisch

**Kurzbeschreibung:**
> Anti-Coaching mit schwarzem Humor. Täglich ein ehrlicher, sarkastischer Spruch als Gegengift zur Motivationskultur.

**6 Themes:**
- Midnight — Klares, minimalistisches Dunkel
- Concrete — Brutalistisch, roh, industrial
- Parchment — Elegant, klassisch, hell
- coodoo — Corporate, professionell
- Neon — Cyberpunk, elektrisch
- Blood Moon — Gothic, düster

---

## Entwicklungs-Commands

```bash
npm install          # Dependencies installieren
npm run dev          # Dev-Server starten (localhost:3000)
npm run build        # Production Build
npm run lint         # ESLint
npm run format       # Prettier
```

---

## Dateistruktur (empfohlen)

```
app/
├── page.tsx                    # Hauptseite
├── impressum/page.tsx          # Impressum
├── datenschutz/page.tsx        # Datenschutz
├── layout.tsx                  # Root Layout
components/
├── sections/
│   ├── hero-section.tsx
│   ├── quote-section.tsx
│   ├── features-section.tsx
│   ├── themes-section.tsx
│   ├── pricing-section.tsx
│   └── footer.tsx
├── ui/
│   ├── button.tsx
│   ├── card.tsx
│   └── badge.tsx
lib/
├── content.ts                  # Alle statischen Texte
├── supabase.ts                 # Supabase Client (optional, für Quote-API)
└── utils.ts
public/
├── screenshots/                # App-Screenshots
└── icons/                      # App-Icon, Store-Badges
```

---

## Store Links (Platzhalter bis Launch)

- **iOS:** https://apps.apple.com/app/daily-demotivation/id[ID]
- **Android:** https://play.google.com/store/apps/details?id=io.coodoo.daily_demotivation

---

## Wichtige Hinweise

- **Keine** positiven Superlative, keine Ausrufezeichen im Herotext
- Design folgt dem App-Midnight-Theme (dunkel, minimalistisch, roter Akzent)
- Alle Texte trocken-ironisch formulieren, passend zur App-Tonalität
- Mobile-first responsive Design
- Core Web Vitals optimieren (LCP < 2.5s)
