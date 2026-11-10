"use client";

import Link from "next/link";
import { personalInfo } from "@/data/content";
import { GithubIcon, LinkedinIcon, InstagramIcon, TwitterXIcon } from "@/components/icons/SocialIcons";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[rgb(228,229,229)] text-[#111827] pt-16 pb-12 px-6 lg:px-16 border-t border-black/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Brand info on left, link columns on right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12">
          {/* Brand & Socials Column (5 cols on lg) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-4">
            {/* Logo matching navbar */}
            <Link href="/" className="inline-block group">
              <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] font-[family-name:var(--font-signature)] hover:text-blue-700 transition-colors">
                &lt; Kishan Patil /&gt;
              </span>
            </Link>

            {/* Tagline / Hook */}
            <p className="text-sm text-[#4B5563] max-w-sm leading-relaxed">
              Frontend Specialist & Creative Technologist architecting high-performance web applications, 3D interactive experiences, and AI-driven products.
            </p>

            {/* Social Icons row */}
            <div className="flex items-center gap-3 pt-2 text-[#4B5563]">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-black/10 bg-white/50 text-[#111827] hover:bg-[#181717] hover:text-white hover:border-[#181717] transition-all"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-black/10 bg-white/50 text-[#111827] hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter) Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-black/10 bg-white/50 text-[#111827] hover:bg-black hover:text-white hover:border-black transition-all"
              >
                <TwitterXIcon className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
                className="w-9 h-9 rounded-full flex items-center justify-center border border-black/10 bg-white/50 text-[#111827] hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* 3 Nav Columns: Navigation, Work & Projects, Resources / Legal */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1: Navigation */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111827] mb-4">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm text-[#4B5563]">
                <li>
                  <Link href="/" className="hover:text-blue-700 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-700 transition-colors">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/education" className="hover:text-blue-700 transition-colors">
                    Education
                  </Link>
                </li>
                <li>
                  <Link href="/experience" className="hover:text-blue-700 transition-colors">
                    Experience
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Work & Highlights */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111827] mb-4">
                Work
              </h3>
              <ul className="space-y-2.5 text-sm text-[#4B5563]">
                <li>
                  <Link href="/projects" className="hover:text-blue-700 transition-colors">
                    Featured Projects
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="hover:text-blue-700 transition-colors">
                    Achievements
                  </Link>
                </li>
                <li>
                  <a
                    href="https://geleya.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                  >
                    Geleya (AI)
                  </a>
                </li>
                <li>
                  <a
                    href="https://kishan-ict.github.io/EARTHVERSE/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition-colors"
                  >
                    EARTHVERSE (3D)
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Connect & Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#111827] mb-4">
                Connect
              </h3>
              <ul className="space-y-2.5 text-sm text-[#4B5563]">
                <li>
                  <Link href="/contact" className="hover:text-blue-700 transition-colors">
                    Contact Me
                  </Link>
                </li>
                <li>
                  <Link href="/developers" className="hover:text-blue-700 transition-colors">
                    Developers & API
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-blue-700 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="hover:text-blue-700 transition-colors truncate block max-w-[170px]"
                    title={personalInfo.email}
                  >
                    Email Direct
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright on left, Terms & Privacy on right */}
        <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6B7280]">
          <p>
            © {currentYear} {personalInfo.name} ({personalInfo.domain}). All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-[#111827] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/developers" className="hover:text-[#111827] transition-colors">
              Terms & Developers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
