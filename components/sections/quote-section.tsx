import { content } from "@/lib/content";

export function QuoteSection() {
  const { quote } = content;

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "var(--t-bg)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1" style={{ backgroundColor: "var(--t-border)" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "var(--t-text-muted)" }}>
            {quote.sectionLabel}
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "var(--t-border)" }} />
        </div>

        {/* Quote card */}
        <div
          className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden"
          style={{
            backgroundColor: "var(--t-surface)",
            border: "1px solid var(--t-border)",
            transition: "background-color 0.4s ease, border-color 0.3s ease",
          }}
        >
          {/* Accent left bar */}
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
            style={{ backgroundColor: "var(--t-accent)" }}
          />

          {/* Quote marks */}
          <div
            className="text-8xl font-serif leading-none mb-4 select-none"
            style={{ color: "var(--t-accent-subtle)" }}
          >
            &ldquo;
          </div>

          <blockquote
            className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8"
            style={{ color: "var(--t-text)" }}
          >
            {quote.example}
          </blockquote>

          <cite className="not-italic text-sm font-medium" style={{ color: "var(--t-text-muted)" }}>
            {quote.attribution}
          </cite>
        </div>
      </div>
    </section>
  );
}
