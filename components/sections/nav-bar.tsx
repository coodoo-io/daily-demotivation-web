import Link from "next/link";
import { content } from "@/lib/content";

export function NavBar() {
  const { nav, storeLinks } = content;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        backgroundColor: "rgba(10,10,10,0.85)",
        borderColor: "#1A1A1A",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
            style={{ backgroundColor: "#C0392B" }}
          >
            D
          </div>
          <span className="font-semibold text-sm tracking-tight">{nav.appName}</span>
        </Link>

        {/* Nav links — hidden on mobile */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="#features"
            className="text-sm transition-colors duration-200 hover:text-white"
            style={{ color: "#888888" }}
          >
            {nav.links.features}
          </Link>
          <Link
            href="#themes"
            className="text-sm transition-colors duration-200 hover:text-white"
            style={{ color: "#888888" }}
          >
            {nav.links.themes}
          </Link>
          <Link
            href="#pricing"
            className="text-sm transition-colors duration-200 hover:text-white"
            style={{ color: "#888888" }}
          >
            {nav.links.pricing}
          </Link>
        </nav>

        {/* CTA */}
        <Link
          href={storeLinks.appStore}
          className="text-sm font-semibold px-4 py-2 rounded-lg text-white transition-all duration-200 hover:opacity-90"
          style={{ backgroundColor: "#C0392B" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          {nav.cta}
        </Link>
      </div>
    </header>
  );
}
