import { Calendar, Palette, Share2, Layout, Archive, Bell } from "lucide-react";
import { content } from "@/lib/content";

const iconMap = {
  Calendar,
  Palette,
  Share2,
  Layout,
  Archive,
  Bell,
} as const;

type IconName = keyof typeof iconMap;

export function FeaturesSection() {
  const { features } = content;

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">{features.headline}</h2>
          <p className="text-lg" style={{ color: "#888888" }}>
            {features.subline}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.items.map((item) => {
            const Icon = iconMap[item.icon as IconName];
            return (
              <div
                key={item.title}
                className="group rounded-2xl p-7 transition-all duration-300 hover:border-[#C0392B]/30"
                style={{
                  backgroundColor: "#141414",
                  border: "1px solid #2A2A2A",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    backgroundColor: "rgba(192,57,43,0.12)",
                    color: "#C0392B",
                  }}
                >
                  <Icon size={18} strokeWidth={1.5} />
                </div>

                <h3 className="text-base font-semibold mb-2" style={{ color: "#FFFFFF" }}>
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#888888" }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
