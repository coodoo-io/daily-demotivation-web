import Link from "next/link";
import { content } from "@/lib/content";

export function Footer() {
  const { footer } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12 px-6"
      style={{
        borderColor: "var(--t-border-2)",
        backgroundColor: "var(--t-bg-alt)",
        transition: "background-color 0.4s ease",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "var(--t-accent)" }}
              >
                D
              </div>
              <span className="font-semibold text-sm" style={{ color: "var(--t-text)" }}>
                Daily Demotivation
              </span>
            </div>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: "var(--t-text-dim)" }}>
              {footer.tagline}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs transition-colors duration-200"
                style={{ color: "var(--t-text-dimmer)" }}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "var(--t-border-2)" }}
        >
          <span className="text-xs" style={{ color: "var(--t-text-dimmer)" }}>
            © {currentYear} {footer.developer}. Alle Rechte vorbehalten.
          </span>
          <span className="text-xs" style={{ color: "var(--t-text-dimmer)" }}>
            iOS 12+ · Android 6+
          </span>
        </div>
      </div>
    </footer>
  );
}
