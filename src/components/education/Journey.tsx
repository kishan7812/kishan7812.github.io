import { personalInfo } from "@/data/content";
import { GraduationCap, BookOpen, Layers } from "lucide-react";

export function Journey() {
  const { education } = personalInfo;

  return (
    <section id="journey" className="py-20 px-4 max-w-6xl mx-auto">
      <div className="mb-14">
        <span className="font-mono text-xs uppercase tracking-widest text-[#00F2FE]">Academic Roots</span>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#F8FAFC] mt-2">
          Education & Engineering Journey
        </h2>
        <p className="text-[#94A3B8] text-sm sm:text-base mt-2 max-w-xl">
          Foundational curriculum paired with relentless self-directed engineering and open-source building.
        </p>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-[#1E293B] space-y-12">
        {/* Timeline node */}
        <div className="relative">
          {/* Node marker */}
          <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#07080B] border-2 border-[#00F2FE] flex items-center justify-center">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FE]" />
          </div>

          <div className="p-6 sm:p-7 rounded-2xl bg-[#0D1117] border border-[#1E293B]">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00F2FE]">
                <GraduationCap className="w-4 h-4" />
                {education.status}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-md bg-[#121821] border border-[#1E293B] text-[#94A3B8]">
                Diploma Program
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] mb-1">
              {education.institution}
            </h3>
            <p className="text-sm font-medium text-[#4FACFE] mb-4">
              {education.program}
            </p>

            <div className="space-y-2 mt-4 pt-4 border-t border-[#1E293B]">
              <div className="text-xs font-mono text-[#64748B] uppercase tracking-wider flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-[#00F2FE]" />
                Core Engineering Curriculum & Independent Exploration
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-3">
                {education.focus.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-[#121821] border border-[#1E293B] text-xs text-[#94A3B8] leading-relaxed flex items-start gap-2"
                  >
                    <Layers className="w-3.5 h-3.5 text-[#00F2FE] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
