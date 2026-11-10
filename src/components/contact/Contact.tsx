"use client";

import { useState } from "react";
import { personalInfo } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { Mail, Check, Copy } from "lucide-react";

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-black/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Avatar & Description */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Contact Me
          </h2>

          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed mb-6 max-w-xl">
            I am available for remote internships, open-source collaborations, and discussions about frontend architecture. You can message me anytime, and I will reply promptly!
          </p>

          {/* Social Circles */}
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

          {/* Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="ref-card px-5 py-3 flex items-center gap-2.5 text-sm font-semibold text-gray-800 hover:text-black mb-4 border border-gray-200"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Email Copied to Clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-gray-500" />
                <span>{personalInfo.email}</span>
              </>
            )}
          </button>

          <div className="text-xs text-gray-500">
            Resume PDF: <span className="font-semibold text-gray-700">Coming Soon</span>
          </div>
        </div>

        {/* Right Side: Vector Illustration */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="w-full max-w-[340px] aspect-square bg-slate-200/50 rounded-3xl p-8 flex items-center justify-center">
            <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="30" y="40" width="140" height="130" rx="10" fill="#1E293B" />
              <rect x="40" y="55" width="120" height="15" rx="3" fill="#F8FAFC" />
              <rect x="40" y="80" width="120" height="8" rx="2" fill="#94A3B8" />
              <rect x="40" y="95" width="120" height="8" rx="2" fill="#94A3B8" />
              <rect x="40" y="110" width="80" height="8" rx="2" fill="#94A3B8" />
              <rect x="40" y="135" width="50" height="15" rx="3" fill="#3B82F6" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
