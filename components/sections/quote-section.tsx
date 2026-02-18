import { content } from "@/lib/content";

export function QuoteSection() {
  const { quote } = content;

  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#0A0A0A" }}>
      <div className="max-w-4xl mx-auto">
        {/* Label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-px flex-1" style={{ backgroundColor: "#2A2A2A" }} />
          <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: "#888888" }}>
            {quote.sectionLabel}
          </span>
          <div className="h-px flex-1" style={{ backgroundColor: "#2A2A2A" }} />
        </div>

        {/* Quote card — styled like the app's Midnight theme */}
        <div
          className="relative rounded-2xl p-10 md:p-16 text-center overflow-hidden"
          style={{
            backgroundColor: "#141414",
            border: "1px solid #2A2A2A",
          }}
        >
          {/* Decorative accent top-left */}
          <div
            className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
            style={{ backgroundColor: "#C0392B" }}
          />

          {/* Quote marks */}
          <div
            className="text-8xl font-serif leading-none mb-4 select-none"
            style={{ color: "rgba(192,57,43,0.2)" }}
          >
            &ldquo;
          </div>

          <blockquote
            className="text-2xl md:text-3xl font-semibold leading-relaxed mb-8"
            style={{ color: "#FFFFFF" }}
          >
            {quote.example}
          </blockquote>

          <cite className="not-italic text-sm font-medium" style={{ color: "#888888" }}>
            {quote.attribution}
          </cite>
        </div>
      </div>
    </section>
  );
}
