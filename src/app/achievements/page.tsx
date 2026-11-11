import Link from "next/link";
import { HardHat, Hammer, Wrench, Sparkles, ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Achievements | Under Update",
  description:
    "Achievements section is currently undergoing a major update. New competitive coding milestones and honors being added soon.",
};

export default function AchievementsPage() {
  return (
    <div className="py-16 sm:py-24 px-6 lg:px-16 max-w-5xl mx-auto min-h-[70vh] flex flex-col justify-center items-center">
      {/* Caution tape / construction banner bar */}
      <div className="w-full max-w-2xl mb-8 overflow-hidden rounded-xl border-2 border-amber-400 shadow-sm">
        <div
          className="h-5 w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #f59e0b, #f59e0b 20px, #1f2937 20px, #1f2937 40px)",
          }}
        />
      </div>

      {/* Main Under Construction Card */}
      <div className="ref-card w-full max-w-2xl p-8 sm:p-12 text-center relative overflow-hidden border-2 border-amber-300/80 shadow-xl bg-white/90 backdrop-blur-sm">
        {/* Subtle background glow */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-yellow-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Animated Construction Helmet Icon badge */}
        <div className="relative inline-flex items-center justify-center mb-6">
          <div className="w-24 h-24 rounded-3xl bg-amber-100/90 border-2 border-amber-300 flex items-center justify-center text-amber-600 shadow-inner">
            <HardHat className="w-12 h-12 animate-bounce" />
          </div>
          <span className="absolute -bottom-2 -right-2 px-3 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider bg-amber-500 text-white shadow-md flex items-center gap-1">
            <Hammer className="w-3 h-3" /> Under Update
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-3">
          Achievements Under Construction
        </h1>

        <p className="text-base sm:text-lg text-[#4B5563] max-w-lg mx-auto leading-relaxed mb-6 font-medium">
          This section is currently undergoing a major update. All prior contents have been cleared while verified certificates, competition trophies, and new podium records are being curated.
        </p>

        {/* Animated Progress Indicator */}
        <div className="max-w-md mx-auto mb-8 bg-amber-50 rounded-2xl p-4 border border-amber-200/80">
          <div className="flex items-center justify-between text-xs font-bold text-amber-900 mb-2">
            <span className="flex items-center gap-1.5">
              <Wrench className="w-3.5 h-3.5 text-amber-600 animate-spin" style={{ animationDuration: "3s" }} />
              Updating Milestones & Badges
            </span>
            <span>Coming Soon</span>
          </div>
          <div className="w-full bg-amber-200/60 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-2.5 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 animate-pulse"
              style={{ width: "72%" }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-white bg-[#111827] hover:bg-blue-600 shadow-md hover:shadow-lg transition-all duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm text-[#111827] bg-gray-100 hover:bg-gray-200 border border-gray-300 transition-all duration-200"
          >
            <Sparkles className="w-4 h-4 text-amber-600" />
            <span>View Experience</span>
          </Link>
        </div>
      </div>

      {/* Bottom caution tape bar */}
      <div className="w-full max-w-2xl mt-8 overflow-hidden rounded-xl border-2 border-amber-400 shadow-sm">
        <div
          className="h-5 w-full"
          style={{
            backgroundImage:
              "repeating-linear-gradient(-45deg, #f59e0b, #f59e0b 20px, #1f2937 20px, #1f2937 40px)",
          }}
        />
      </div>
    </div>
  );
}
