"use client";

import Link from "next/link";
import { personalInfo } from "@/data/content";

export function Footer() {
  return (
    <footer className="py-8 text-center text-sm text-[#6B7280] border-t border-black/5 bg-[#EDF2F7]">
      <div className="flex flex-wrap items-center justify-center gap-6 mb-3 text-xs sm:text-sm font-medium text-gray-600">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Home
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition-colors">
          About
        </Link>
        <Link href="/projects" className="hover:text-blue-600 transition-colors">
          Projects
        </Link>
        <Link href="/achievements" className="hover:text-blue-600 transition-colors">
          Achievements
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition-colors">
          Contact
        </Link>
        <Link href="/privacy" className="hover:text-blue-600 transition-colors">
          Privacy Policy
        </Link>
        <Link href="/developers" className="hover:text-blue-600 transition-colors">
          Developers
        </Link>
      </div>
      <p>
        Made with ❤️ by <span className="font-semibold text-[#111827]">{personalInfo.name}</span>
      </p>
      <p className="text-xs text-gray-400 mt-1">
        Hosted on {personalInfo.domain}
      </p>
    </footer>
  );
}
