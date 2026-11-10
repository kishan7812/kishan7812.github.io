export function Philosophy() {
  const pillars = [
    {
      num: "01",
      title: "Frontend Engineering Rigor",
      desc: "Architecting component-driven interfaces in React 19, Next.js, and TypeScript. Engineering systems where performance budgets, accessible semantic HTML, and fluid user feedback loops merge naturally.",
    },
    {
      num: "02",
      title: "Creative Web & 3D Experiences",
      desc: "Exploring browser capabilities beyond static flat planes using Three.js and WebGL. Implementing real-time lighting, interactive camera rigging, and zero-install spatial environments like Earthverse.",
    },
    {
      num: "03",
      title: "Generative AI Product Workflows",
      desc: "Integrating state-of-the-art models (Google Gemini API, OpenRouter, FastAPI) into practical digital products. Building multi-model consensus systems, automated campus recovery tools, and student well-being companions.",
    },
    {
      num: "04",
      title: "Sprint Velocity & Team Leadership",
      desc: "Over 100 competitive hackathons on Unstop. Proven endurance to lead cross-functional squads under intense 24-48h deadlines, formulate rapid architectures, and secure verified podium finishes.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Sticky Header */}
        <div className="lg:col-span-4 sticky top-28">
          <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
            About &amp; Focus
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-2 leading-tight">
            How I approach <br />
            <span className="font-serif italic font-normal text-[#94A3B8]">software and design.</span>
          </h2>
          <p className="text-sm text-[#94A3B8] leading-relaxed mt-4">
            A developer who bridges visual design sensibility with deep client-side architecture. Every interaction should feel intentional, tactile, and fast.
          </p>
        </div>

        {/* Right Pillars */}
        <div className="lg:col-span-8 space-y-10">
          {pillars.map((item) => (
            <div
              key={item.num}
              className="pb-8 border-b border-white/8 hover:border-white/20 transition-colors"
            >
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono text-sm text-blue-400 font-bold">{item.num}</span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-base text-[#94A3B8] leading-relaxed pl-8">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
