import { achievementsData } from "@/data/content";
import { Trophy, Flame, Award, Sparkles, Medal } from "lucide-react";

export const metadata = {
  title: "Achievements & Certifications | Kishan M. Patil",
  description:
    "Competitive hackathon achievements, awards, and technical certifications won by Kishan M. Patil.",
  keywords: [
    "Kishan M Patil Achievements",
    "Kishan M Patil Awards",
    "Code Carnival 3.0 Winner",
    "Unstop Hackathons Kishan",
    "Kishan M Patil Certifications"
  ],
};

export default function AchievementsPage() {
  const { featured } = achievementsData;

  return (
    <div className="py-12 sm:py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Header matching reference aesthetic */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="w-20 h-20 rounded-3xl bg-amber-100/70 border border-amber-200 flex items-center justify-center text-amber-600 mb-6 shadow-sm">
          <Trophy className="w-10 h-10" />
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-[#111827] tracking-tight mb-3">
          Achievements
        </h1>
        <p className="text-lg font-semibold text-[#4B5563]">
          Competitive Coding Honors, Hackathons &amp; Recognition
        </p>
      </div>

      {/* Main Grid matching reference cards exactly */}
      <div className="max-w-4xl mx-auto space-y-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] text-center mb-8">
          Certifications &amp; Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Code Carnival 3.0 Card */}
          <div className="ref-card p-8 flex flex-col justify-between border-2 border-amber-300/80 shadow-md hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                  <Trophy className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="text-xs font-bold px-2.5 py-1 rounded bg-amber-100 text-amber-800 uppercase tracking-wide">
                      3rd Place Winner
                    </span>
                    <span className="text-xs text-gray-500 font-mono">Code Carnival 3.0</span>
                  </div>
                  <h3 className="text-lg font-extrabold text-[#111827]">
                    {featured.organizer}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                Ranked 3rd place in the Code Carnival 3.0 offline state-level hackathon. Tackled Problem Statement PS-3 with Team <strong className="text-[#111827]">{featured.team}</strong> ({featured.teamCode}), architecting and shipping a full-stack production prototype in 24 hours.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
              <span>National Level Hackathon</span>
              <span className="text-amber-700 font-semibold flex items-center gap-1">
                <Medal className="w-4 h-4" /> Podium Finish
              </span>
            </div>
          </div>

          {/* 100+ Hackathons Card */}
          <div className="ref-card p-8 flex flex-col justify-between border-2 border-blue-300/80 shadow-md hover:shadow-lg transition-all duration-300">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <Flame className="w-7 h-7" />
                </div>
                <div>
                  <div className="inline-block text-xs font-bold px-2.5 py-1 rounded bg-blue-100 text-blue-800 uppercase tracking-wide mb-1">
                    Verified Participation
                  </div>
                  <h3 className="text-lg font-extrabold text-[#111827]">
                    100+ Hackathons on Unstop
                  </h3>
                </div>
              </div>

              <p className="text-sm text-[#4B5563] leading-relaxed mb-4">
                Active competitive developer with 100+ hackathons completed across university, corporate, and open innovation circuits. Specialized in rapid product architecture, rapid frontend delivery, and multi-model AI integrations.
              </p>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500 font-medium">
              <span>Unstop Platform</span>
              <span className="text-blue-700 font-semibold flex items-center gap-1">
                <Sparkles className="w-4 h-4" /> 100+ Contests
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
