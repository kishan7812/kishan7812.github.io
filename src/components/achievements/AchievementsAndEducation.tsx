import { Trophy, GraduationCap, Flame, Award, BookOpen } from "lucide-react";

export function AchievementsAndEducation() {
  return (
    <section id="milestones" className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-white/10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Side: Hackathons & Milestones */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-amber-400">
              Competitive Track Record
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              Hackathons &amp; <span className="font-serif italic font-normal text-slate-300">Milestones.</span>
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2">
              High-pressure team leadership, rapid prototyping, and verified podium finishes.
            </p>
          </div>

          {/* Featured Trophy Card */}
          <div className="p-7 rounded-2xl bg-[#111622] border border-amber-500/25 relative overflow-hidden">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                <Trophy className="w-7 h-7" />
              </div>

              <div>
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <Award className="w-3.5 h-3.5" />
                  3rd Place Award
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Code Carnival 3.0
                </h3>
                <div className="text-sm font-semibold text-amber-400/90 mt-0.5">
                  ADSC, Atmiya University
                </div>
                <div className="text-xs font-mono text-[#94A3B8] mt-0.5">
                  Problem Statement PS-3 &bull; Team: Event HUB (ZZCF)
                </div>
                <p className="text-sm text-[#CBD5E1] mt-3 leading-relaxed">
                  Led frontend engineering and delivered a production-ready application within an intense 24-hour hackathon sprint, securing 3rd place overall.
                </p>
              </div>
            </div>
          </div>

          {/* 100+ Hackathons Stat */}
          <div className="p-6 rounded-2xl bg-[#111622] border border-white/8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 shrink-0">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <div className="font-mono text-xl font-bold text-white">100+ Participations</div>
              <div className="text-xs text-[#94A3B8] mt-0.5">
                Competitions on Unstop &mdash; honing agile sprint velocity, real-time debugging, and cross-functional leadership.
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Academic Background */}
        <div id="education" className="lg:col-span-6 space-y-6">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-blue-400">
              Academic Background
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
              Education &amp; <span className="font-serif italic font-normal text-slate-300">Journey.</span>
            </h2>
            <p className="text-sm text-[#94A3B8] mt-2">
              Formal computer science foundations paired with independent hands-on product building.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#111622] border border-white/8 space-y-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-blue-500/15 border border-blue-500/25 flex items-center justify-center text-blue-400 font-extrabold text-xl shrink-0">
                  MU
                </div>

                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <GraduationCap className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-wide">Diploma Program</span>
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    Marwadi University
                  </h3>
                  <p className="text-sm font-medium text-slate-300 mt-0.5">
                    Diploma in Information &amp; Communication Technology (Diploma-ICT)
                  </p>
                </div>
              </div>

              <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold shrink-0">
                Pursuing
              </div>
            </div>

            <div className="pt-5 border-t border-white/8 space-y-2.5">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Foundational Curriculum</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div className="p-3 rounded-lg bg-white/4 border border-white/5 text-xs text-[#CBD5E1]">
                  Web Engineering &amp; Client Standards
                </div>
                <div className="p-3 rounded-lg bg-white/4 border border-white/5 text-xs text-[#CBD5E1]">
                  Data Structures &amp; Computational Logic
                </div>
                <div className="p-3 rounded-lg bg-white/4 border border-white/5 text-xs text-[#CBD5E1]">
                  Networks &amp; Distributed Systems
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
