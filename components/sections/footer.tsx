import Link from "next/link";
import { content } from "@/lib/content";

export function Footer() {
  const { footer } = content;
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-t py-12 px-6"
      style={{ borderColor: "#1A1A1A", backgroundColor: "#080808" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-xs font-bold"
                style={{ backgroundColor: "#C0392B" }}
              >
                D
              </div>
              <span className="font-semibold text-sm">Daily Demotivation</span>
            </div>
            <p className="text-xs max-w-xs leading-relaxed" style={{ color: "#555555" }}>
              {footer.tagline}
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footer.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs transition-colors duration-200 hover:text-white"
                style={{ color: "#555555" }}
                {...(link.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`mailto:${footer.contact}`}
              className="text-xs transition-colors duration-200 hover:text-white"
              style={{ color: "#555555" }}
            >
              {footer.contact}
            </a>
          </nav>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-8 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "#1A1A1A" }}
        >
          <span className="text-xs" style={{ color: "#333333" }}>
            © {currentYear} {footer.developer}. Alle Rechte vorbehalten.
          </span>
          <span className="text-xs" style={{ color: "#333333" }}>
            iOS 12+ · Android 6+
          </span>
        </div>
      </div>
    </footer>
  );
}
