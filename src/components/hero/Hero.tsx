"use client";

import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { Mail } from "lucide-react";

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

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-xl">
            I&apos;m Kishan M. Patil, a student developer passionate about building meaningful digital experiences through technology and creativity.
          </p>

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
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ref-button text-sm tracking-wide uppercase inline-flex items-center gap-2"
            >
              Follow Me On GitHub
            </a>

            <Link
              href="/contact"
              className="px-6 py-3 rounded-md font-semibold text-sm text-[#111827] bg-white hover:bg-gray-100 border border-gray-300 transition-colors shadow-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Right Column: Prominent, Zoomed-In Hero Artwork (Eliminating Empty Space) */}
        <div className="lg:col-span-6 flex justify-center items-center">
          <div className="relative w-full max-w-[580px] lg:max-w-[640px] flex items-center justify-center overflow-visible">
            <Image
              src="/images/hero-kishan.png"
              alt="Kishan M. Patil at workspace desk"
              width={900}
              height={675}
              priority
              quality={95}
              className="w-full h-auto object-contain transform scale-110 lg:scale-120 origin-center transition-transform"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
