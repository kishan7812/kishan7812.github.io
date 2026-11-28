"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { Mail, FileText, MapPin, Clock } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="pt-8 sm:pt-16 pb-16 px-6 lg:px-16 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Typography & Human Introduction */}
        <div className="lg:col-span-6 flex flex-col items-start text-left z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#111827] tracking-tight mb-2">
            Kishan M. Patil
          </h1>

          <div className="text-lg sm:text-xl font-semibold text-[#374151] mb-6">
            Frontend Specialist &bull; Creative Developer &bull; AI Enthusiast
          </div>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-5 max-w-xl">
            I&apos;m Kishan M. Patil, a student developer passionate about building meaningful digital experiences through technology and creativity.
          </p>

          {/* Availability, Location & Timezone */}
          <div className="flex flex-wrap items-center gap-3 mb-7 text-xs sm:text-sm font-medium text-[#374151]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to Internships &amp; Freelance
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[#374151] border border-gray-200">
              <MapPin className="w-3.5 h-3.5 text-gray-500" />
              Rajkot, India
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 text-[#374151] border border-gray-200">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              IST (UTC+5:30)
            </span>
          </div>

          {/* Social Circles matching the reference style */}
          <div className="flex items-center gap-3.5 mb-8">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="social-circle bg-[#181717] hover:bg-black shadow-sm"
            >
              <GithubIcon className="w-5 h-5 text-white" />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="social-circle bg-[#0A66C2] shadow-sm"
            >
              <LinkedinIcon className="w-5 h-5 text-white" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Me"
              className="social-circle bg-[#EA4335] shadow-sm"
            >
              <Mail className="w-5 h-5 text-white" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-button text-sm tracking-wide uppercase inline-flex items-center gap-2"
            >
              Follow Me On GitHub
            </a>

            <button
              type="button"
              disabled
              title="Resume PDF is being finalized — coming soon"
              className="px-5 py-3 rounded-md font-semibold text-sm text-[#111827] bg-white border border-gray-300 shadow-sm inline-flex items-center gap-2 opacity-85 cursor-not-allowed"
            >
              <FileText className="w-4 h-4 text-blue-600" />
              <span>Download Resume (PDF)</span>
              <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 border border-amber-200">
                Upcoming
              </span>
            </button>

            <Link
              href="/contact"
              className="px-5 py-3 rounded-md font-semibold text-sm text-[#111827] bg-white hover:bg-gray-100 border border-gray-300 transition-colors shadow-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column: Prominent Hero Artwork (SVG Feeling Proud) */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-[540px] lg:max-w-[600px] flex items-center justify-center select-none">
            <Image
              src="/images/feeling-proud.svg"
              alt="Kishan M. Patil developer desk illustration"
              width={712}
              height={670}
              priority
              className="w-full h-auto object-contain drop-shadow-sm transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
