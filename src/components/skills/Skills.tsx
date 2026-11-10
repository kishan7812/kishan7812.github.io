import { Code2, Layers, Box, Cpu, Cloud, Terminal } from "lucide-react";

export function Skills() {
  const domains = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      summary: "Modern client-side application development",
      skills: ["React 19", "Next.js", "TypeScript", "JavaScript (ESNext)", "Tailwind CSS", "HTML5 & CSS3"],
    },
    {
      icon: Layers,
      title: "UI Architecture",
      summary: "Accessible, scalable interface design systems",
      skills: ["Radix UI", "shadcn/ui", "Framer Motion", "Design Tokens", "Responsive Web Design"],
    },
    {
      icon: Box,
      title: "Creative Web & 3D",
      summary: "Browser-based spatial computing and graphics",
      skills: ["Three.js", "WebGL", "Canvas API", "Interactive Shaders", "Camera & Lighting Rigging"],
    },
    {
      icon: Cpu,
      title: "AI Integration",
      summary: "Connecting multimodal models with user products",
      skills: ["Google Gemini API", "OpenRouter Multi-LLM", "FastAPI Python Services", "HTTPX Streams"],
    },
    {
      icon: Cloud,
      title: "Cloud & Databases",
      summary: "Real-time state and production hosting",
      skills: ["Firebase (Firestore)", "Supabase", "Oracle FreeSQL", "Cloudflare Pages", "Docker"],
    },
    {
      icon: Terminal,
      title: "Tooling & DX",
      summary: "Build integrity and developer workflows",
      skills: ["Git & GitHub Workflows", "Vite", "ESLint / Prettier", "Performance Profiling", "CI/CD Deployment"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-white/10">
      <div className="mb-14 max-w-xl">
        <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
          Technical Skills
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mt-1">
          Technical <span className="font-serif italic font-normal text-slate-300">Arsenal.</span>
        </h2>
        <p className="text-sm text-[#94A3B8] mt-3">
          Technologies and tools I leverage to build production-grade web interfaces and intelligent software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((dom, idx) => {
          const Icon = dom.icon;
          return (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#111622] border border-white/8 hover:border-white/20 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/8 text-blue-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white tracking-tight">
                    {dom.title}
                  </h3>
                </div>

                <p className="text-xs text-[#94A3B8] mb-5 font-mono">
                  {dom.summary}
                </p>

                <ul className="space-y-1.5">
                  {dom.skills.map((s, i) => (
                    <li key={i} className="text-sm text-[#CBD5E1] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400/60" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
