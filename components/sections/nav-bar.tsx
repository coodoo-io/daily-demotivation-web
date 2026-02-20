import Link from "next/link";
import { content } from "@/lib/content";

export function NavBar() {
  const { nav, storeLinks } = content;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "var(--t-nav-bg)",
        borderColor: "var(--t-border-2)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        transition: "background-color 0.4s ease, border-color 0.3s ease",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: "var(--t-accent)", transition: "background-color 0.3s ease" }}
          >
            D
          </div>
          <span className="font-semibold text-sm tracking-tight" style={{ color: "var(--t-text)" }}>
            {nav.appName}
          </span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "#features", label: nav.links.features },
            { href: "#themes", label: nav.links.themes },
            { href: "#pricing", label: nav.links.pricing },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm transition-colors duration-200"
              style={{ color: "var(--t-text-muted)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link
          href={storeLinks.appStore}
          className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: "var(--t-accent)", transition: "background-color 0.3s ease" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {nav.cta}
        </Link>
      </div>
    </header>
  );
}
