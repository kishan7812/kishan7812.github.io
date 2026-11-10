import { GraduationCap, Award, Trophy, Flame } from "lucide-react";

export function EducationAndAchievements() {
  return (
    <section id="education" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Section matching reference layout */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Education &amp; Degrees
            </h2>
          </div>

          <div className="ref-card overflow-hidden">
            {/* Degree Card Header */}
            <div className="bg-[#FDE68A]/60 px-6 py-4 flex items-center justify-between border-b border-amber-200/50">
              <div>
                <h3 className="font-bold text-base sm:text-lg text-[#111827]">
                  Diploma in Information &amp; Communication Technology
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-0.5">
                  Marwadi University
                </p>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 rounded bg-white text-gray-800 shadow-sm shrink-0">
                Pursuing
              </span>
            </div>

            {/* Degree Card Body */}
            <div className="p-6 space-y-3">
              <div className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                <span className="text-blue-600 font-bold shrink-0 mt-0.5">&bull;</span>
                <span>Specializing in modern client-side architectures, React ecosystem, and web performance.</span>
              </div>
              <div className="flex items-start gap-2.5 text-sm text-[#4B5563]">
                <span className="text-blue-600 font-bold shrink-0 mt-0.5">&bull;</span>
                <span>Studying foundational data structures, algorithms, and distributed network protocols.</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section matching reference layout */}
        <div id="achievements">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
              <Award className="w-5 h-5" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827]">
              Achievements &amp; Hackathons
            </h2>
          </div>

          <div className="space-y-4">
            {/* Code Carnival Card */}
            <div className="ref-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-800 uppercase tracking-wide">
                    3rd Place Winner
                  </span>
                  <span className="text-xs text-gray-500 font-mono">Code Carnival 3.0</span>
                </div>
                <h3 className="text-lg font-bold text-[#111827] mt-1">
                  ADSC, Atmiya University
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-relaxed">
                  Secured 3rd place in Problem Statement PS-3 with Team Event HUB (ZZCF), architecting a complete working frontend prototype in 24 hours.
                </p>
              </div>
            </div>

            {/* 100+ Hackathons Card */}
            <div className="ref-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                <Flame className="w-6 h-6" />
              </div>
              <div>
                <div className="text-lg font-bold text-[#111827]">
                  100+ Hackathon Competitions on Unstop
                </div>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-relaxed">
                  Active participant and team lead in 100+ engineering hackathons, building velocity in agile prototyping, real-time debugging, and rapid shipping under tight deadlines.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
