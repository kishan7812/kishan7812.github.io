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
      skills: ["Figma", "Radix UI", "shadcn/ui", "Framer Motion", "Responsive Web Design"],
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
    <section id="skills" className="py-12 sm:py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="mb-14 max-w-2xl">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-blue-600">
          Technical Skills
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827] mt-1">
          Technical <span className="font-serif italic font-normal text-[#374151]">Arsenal.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#4B5563] mt-3 leading-relaxed">
          Technologies and tools I leverage to build production-grade web interfaces and intelligent software.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {domains.map((dom, idx) => {
          const Icon = dom.icon;
          return (
            <div
              key={idx}
              className="ref-card p-7 rounded-2xl bg-white border border-black/10 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 text-blue-600">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-bold text-[#111827] tracking-tight">
                    {dom.title}
                  </h2>
                </div>

                <p className="text-xs text-[#6B7280] mb-5 font-mono">
                  {dom.summary}
                </p>

                <ul className="space-y-2">
                  {dom.skills.map((s, i) => (
                    <li key={i} className="text-sm font-medium text-[#374151] flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
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
