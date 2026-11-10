import { achievementsData } from "@/data/content";
import { Trophy, Award, Flame, Users, Zap, Timer } from "lucide-react";

export function Achievements() {
  const { featured, hackathonJourney } = achievementsData;

  const virtues = [
    { icon: Zap, label: "Rapid Prototyping", desc: "Formulating architectures and shipping working MVPs within 24–48 hours." },
    { icon: Users, label: "Team Leadership", desc: "Directing engineers and coordinating task distribution under tight deadlines." },
    { icon: Timer, label: "Agile Problem Solving", desc: "Diagnosing complex edge cases on the fly with focused iteration." }
  ];

  return (
    <section id="achievements" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[#00F2FE]">Competitive Engineering</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2">
          Hackathons & Achievements
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-xl">
          Real battle-tested velocity, podium finishes, and high-pressure collaborative development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Featured Card: Code Carnival 3.0 */}
        <div className="lg:col-span-7 p-7 rounded-2xl bg-[#0D1117] border border-amber-500/30 shadow-[0_0_25px_rgba(245,158,11,0.08)] flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">
                <Trophy className="w-3.5 h-3.5" />
                Featured Award
              </span>
              <span className="text-xs font-mono text-[#94A3B8]">{featured.award}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC] mb-2">
              {featured.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5 p-4 rounded-xl bg-[#121821] border border-[#1E293B]">
              <div>
                <div className="text-[11px] font-mono text-[#64748B]">Organizer</div>
                <div className="text-xs font-medium text-[#F8FAFC] mt-0.5">{featured.organizer}</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#64748B]">Team & Code</div>
                <div className="text-xs font-medium text-[#F8FAFC] mt-0.5">{featured.team} ({featured.teamCode})</div>
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#64748B]">Track</div>
                <div className="text-xs font-medium text-amber-400 mt-0.5">{featured.problemStatement}</div>
              </div>
            </div>

            <p className="text-sm text-[#94A3B8] leading-relaxed">
              {featured.description}
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-[#1E293B] flex items-center justify-between text-xs text-[#94A3B8]">
            <span>Verified Hackathon Result</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
        </div>

        {/* Hackathon Odyssey card */}
        <div className="lg:col-span-5 p-7 rounded-2xl bg-[#0D1117] border border-[#1E293B] flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Flame className="w-4 h-4 text-[#00F2FE]" />
              <span className="font-mono text-xs uppercase tracking-wider text-[#00F2FE]">Endurance & Velocity</span>
            </div>

            <div className="flex items-baseline gap-2 mb-3">
              <span className="text-4xl font-extrabold font-mono text-[#F8FAFC]">{hackathonJourney.stat}</span>
              <span className="text-sm text-[#94A3B8]">Participations & Competitions</span>
            </div>

            <h4 className="text-lg font-bold text-[#F8FAFC] mb-2">
              {hackathonJourney.title}
            </h4>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed mb-6">
              {hackathonJourney.description}
            </p>

            <div className="space-y-3">
              {virtues.map((v, i) => {
                const Icon = v.icon;
                return (
                  <div key={i} className="flex items-start gap-3 p-2.5 rounded-lg bg-[#121821] border border-[#1E293B]">
                    <Icon className="w-4 h-4 text-[#00F2FE] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-semibold text-[#F8FAFC]">{v.label}</div>
                      <div className="text-[11px] text-[#64748B] mt-0.5 leading-tight">{v.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
