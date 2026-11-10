import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { personalInfo } from "@/data/content";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { Mail, ShieldCheck, Award, Code, Sparkles, UserCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Kishan M Patil | Developer Profile & Mission",
  description:
    "Learn about Kishan M. Patil (kishanm.me), a Frontend Specialist, Creative Developer, and AI Enthusiast building modern web applications, 3D WebGL experiences, and multi-agent platforms.",
  alternates: {
    canonical: "https://kishanm.me/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-12 sm:py-16 px-6 lg:px-16 max-w-5xl mx-auto">
      {/* Header Profile Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center mb-12">
        <div className="md:col-span-4 flex justify-center">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-white shadow-xl bg-slate-100 flex items-center justify-center">
            <Image
              src="/images/kishan-avatar.png"
              alt="Kishan M. Patil"
              fill
              sizes="(max-width: 640px) 192px, 224px"
              priority
              quality={95}
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:col-span-8 flex flex-col items-start text-left">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            Verified Developer Profile &amp; Trust Anchor
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-3">
            About Kishan M. Patil
          </h1>
          <p className="text-lg font-medium text-blue-700 mb-4">
            Frontend Specialist • Creative Developer • AI Enthusiast
          </p>
          <p className="text-base text-[#4B5563] leading-relaxed">
            I am a student developer passionate about building meaningful digital experiences through technology, engineering precision, and interactive creativity. Currently pursuing a Diploma in Information and Communication Technology (ICT) at Marwadi University (2024–2027).
          </p>
        </div>
      </div>

      {/* Main Narrative Content (High Character Depth & Semantic Clarity) */}
      <div className="space-y-8 text-[#374151] leading-relaxed text-base sm:text-lg bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border border-black/5 shadow-sm">
        <section>
          <h2 className="text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <Code className="w-5 h-5 text-blue-600" />
            Engineering Focus &amp; Core Philosophy
          </h2>
          <p className="mb-4">
            My work focuses on bridging high-fidelity user interface design with modern web engineering, real-time 3D graphics, and generative AI systems. I build responsive applications using React, Next.js, and TypeScript, striving for pixel-perfect aesthetics, strict accessibility compliance, and seamless end-user interactions.
          </p>
          <p>
            Beyond conventional web applications, I specialize in creative computing—transforming complex datasets and abstract ideas into tangible digital environments using Three.js and WebGL. Whether developing real-time multi-agent consensus workflows or interactive web games, I emphasize clean code, maintainable architecture, and fast load times.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Featured Software &amp; Active Projects
          </h2>
          <p className="mb-4">
            Over the course of my academic and independent engineering career, I have authored several production-grade open-source and deployed applications:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[#4B5563]">
            <li>
              <strong className="text-[#111827]">Geleya:</strong> An intelligent student wellness companion addressing academic stress and cognitive burnout with localized proactive check-ins and empathetic dialogue.
            </li>
            <li>
              <strong className="text-[#111827]">EARTHVERSE:</strong> An interactive, web-based planetary simulation leveraging native Three.js shaders and WebGL rendering for immersive 3D exploration.
            </li>
            <li>
              <strong className="text-[#111827]">CampusTrace:</strong> An automated smart lost-and-found system powered by Google Gemini Vision multimodal models and secure QR verification protocols.
            </li>
            <li>
              <strong className="text-[#111827]">LLM Council:</strong> A multi-agent consensus engine orchestrating concurrent model evaluations to provide synthesized, high-confidence responses.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <Award className="w-5 h-5 text-emerald-600" />
            Competitive Engineering &amp; Community
          </h2>
          <p className="mb-4">
            I am an active competitor in algorithmic challenges and hackathons, having competed in over 100 nationwide engineering competitions on the Unstop platform. Recently, our team achieved 3rd Place at Code Carnival 3.0 out of hundreds of collegiate participants.
          </p>
          <p>
            I regularly contribute to open-source software, write technical documentation, and collaborate with peer developers globally. My code repositories are public and actively maintained at{" "}
            <a
              href="https://github.com/kishan-ict"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-medium hover:text-blue-800"
            >
              github.com/kishan-ict
            </a>.
          </p>
        </section>

        <section className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
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

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#111827] hover:bg-black transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/privacy"
              className="px-5 py-2.5 rounded-lg text-sm font-semibold text-[#374151] bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
