import { Monitor, Box, Sparkles, Trophy } from "lucide-react";

export function Highlights() {
  const cards = [
    {
      icon: Monitor,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-500/15 border-cyan-500/30",
      title: "Frontend Engineering",
      subtitle: "Modern, scalable component architectures & responsive design systems."
    },
    {
      icon: Box,
      iconColor: "text-blue-400",
      iconBg: "bg-blue-500/15 border-blue-500/30",
      title: "Creative 3D Web",
      subtitle: "Zero-install spatial environments and WebGL experiences with Three.js."
    },
    {
      icon: Sparkles,
      iconColor: "text-purple-400",
      iconBg: "bg-purple-500/15 border-purple-500/30",
      title: "AI Integration",
      subtitle: "Synthesizing multimodal LLMs, agent workflows, and vision features."
    },
    {
      icon: Trophy,
      iconColor: "text-amber-400",
      iconBg: "bg-amber-500/15 border-amber-500/30",
      title: "Hackathon Track Record",
      subtitle: "100+ competitions, sprint velocity, and 3rd place podium winner."
    }
  ];

  return (
    <section id="highlights" className="py-12 px-4 sm:px-6 max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((card, idx) => {
          const Icon = card.icon;
          return (
            <div
              key={idx}
              className="p-6 rounded-2xl glass-panel hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-13 h-13 rounded-2xl flex items-center justify-center border mb-5 ${card.iconBg} ${card.iconColor} group-hover:scale-105 transition-transform shadow-md`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white tracking-tight mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-[#CBD5E1] leading-relaxed">
                  {card.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
