import Link from "next/link";
import { Check } from "lucide-react";
import { content } from "@/lib/content";

export function PricingSection() {
  const { pricing, storeLinks } = content;

  return (
    <section id="pricing" className="py-24 px-6" style={{ backgroundColor: "var(--t-bg)" }}>
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <div className="mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-3"
            style={{ color: "var(--t-text)" }}
          >
            {pricing.headline}
          </h2>
          <p className="text-lg" style={{ color: "var(--t-text-muted)" }}>
            {pricing.subline}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Free */}
          <div
            className="rounded-2xl p-8"
            style={{
              backgroundColor: "var(--t-surface)",
              border: "1px solid var(--t-border-2)",
            }}
          >
            <div className="mb-6">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--t-text-muted)" }}
              >
                {pricing.free.name}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold" style={{ color: "var(--t-text)" }}>
                  {pricing.free.price}
                </span>
              </div>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                {pricing.free.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pricing.free.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={15} className="mt-0.5 shrink-0" style={{ color: "var(--t-text-muted)" }} />
                  <span className="text-sm" style={{ color: "var(--t-text-subtle)" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={storeLinks.appStore}
              className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-80"
              style={{
                backgroundColor: "var(--t-surface-2)",
                border: "1px solid var(--t-border)",
                color: "var(--t-text)",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pricing.free.cta}
            </Link>
          </div>

          {/* Premium */}
          <div
            className="rounded-2xl p-8 relative overflow-hidden"
            style={{
              backgroundColor: "var(--t-surface)",
              border: "1px solid var(--t-accent-border)",
            }}
          >
            {/* Top glow */}
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, var(--t-accent), transparent)",
              }}
            />

            {/* Trial badge */}
            <div
              className="absolute top-5 right-5 text-[10px] font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: "var(--t-accent-subtle)",
                color: "var(--t-accent)",
                border: "1px solid var(--t-accent-border)",
              }}
            >
              {pricing.premium.trialLabel}
            </div>

            <div className="mb-6">
              <div
                className="text-xs font-semibold tracking-widest uppercase mb-3"
                style={{ color: "var(--t-accent)" }}
              >
                {pricing.premium.name}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-bold" style={{ color: "var(--t-text)" }}>
                  {pricing.premium.price}
                </span>
                <span className="text-lg" style={{ color: "var(--t-text-muted)" }}>
                  {pricing.premium.period}
                </span>
              </div>
              <p className="text-sm mt-3 leading-relaxed" style={{ color: "var(--t-text-muted)" }}>
                {pricing.premium.description}
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {pricing.premium.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <Check size={15} className="mt-0.5 shrink-0" style={{ color: "var(--t-accent)" }} />
                  <span className="text-sm" style={{ color: "var(--t-text-subtle)" }}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              href={storeLinks.appStore}
              className="block w-full text-center py-3.5 rounded-xl text-sm font-semibold text-white transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: "var(--t-accent)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {pricing.premium.cta}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
