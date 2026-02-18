import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum — Daily Demotivation",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm mb-12 transition-colors hover:text-white"
        style={{ color: "#888888" }}
      >
        ← Zurück
      </Link>

      <h1 className="text-3xl font-bold mb-10">Impressum</h1>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#AAAAAA" }}>
        <section>
          <h2 className="text-base font-semibold text-white mb-2">Angaben gemäß § 5 TMG</h2>
          <p>
            coodoo GmbH
            <br />
            [Straße und Hausnummer]
            <br />
            [PLZ Ort]
            <br />
            Deutschland
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white mb-2">Kontakt</h2>
          <p>
            E-Mail:{" "}
            <a href="mailto:support@coodoo.de" className="text-white hover:underline">
              support@coodoo.de
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white mb-2">Handelsregister</h2>
          <p>
            Registergericht: [Amtsgericht]
            <br />
            Registernummer: [HRB-Nummer]
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white mb-2">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
            <br />
            [USt-IdNr.]
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white mb-2">Verantwortlich für den Inhalt</h2>
          <p>coodoo GmbH</p>
        </section>
      </div>
    </main>
  );
}
