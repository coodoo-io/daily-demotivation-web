import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz — Daily Demotivation",
};

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen px-6 py-24 max-w-2xl mx-auto">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm mb-12 transition-colors hover:text-white"
        style={{ color: "#888888" }}
      >
        ← Zurück
      </Link>

      <h1 className="text-3xl font-bold mb-10">Datenschutzerklärung</h1>

      <div className="space-y-8 text-sm leading-relaxed" style={{ color: "#AAAAAA" }}>
        <section>
          <h2 className="text-base font-semibold text-white mb-2">1. Verantwortlicher</h2>
          <p>
            coodoo GmbH
            <br />
            E-Mail: support@coodoo.de
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white mb-2">2. Erhebung von Daten</h2>
          <p>
            Diese Webseite erhebt keine personenbezogenen Daten. Es werden keine Cookies gesetzt und kein
            Tracking eingesetzt.
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white mb-2">3. Hosting</h2>
          <p>
            Diese Webseite wird über Vercel gehostet. Vercel kann beim Aufruf der Seite automatisch
            technische Informationen wie IP-Adresse und Zugriffszeiten erfassen. Weitere Informationen
            finden sich in der{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Datenschutzerklärung von Vercel
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-base font-semibold text-white mb-2">4. Kontakt</h2>
          <p>
            Bei Fragen zum Datenschutz wenden Sie sich an:{" "}
            <a href="mailto:support@coodoo.de" className="text-white hover:underline">
              support@coodoo.de
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
