import type { Metadata } from "next";
import Link from "next/link";
import { personalInfo } from "@/data/content";
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Kishan M Patil Portfolio",
  description:
    "Privacy Policy and data governance standards for Kishan M. Patil's developer portfolio (kishanm.me). Transparent policies regarding cookies, analytics, agent queries, and visitor confidentiality.",
  alternates: {
    canonical: "https://kishanm.me/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="py-12 sm:py-16 px-6 lg:px-16 max-w-4xl mx-auto">
      {/* Header */}
      <div className="mb-10 text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-3">
          <ShieldCheck className="w-3.5 h-3.5" />
          Trust &amp; Data Governance
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-3">
          Privacy Policy
        </h1>
        <p className="text-sm text-[#6B7280]">
          Last updated: November 2026 • Effective domain: <span className="font-mono text-gray-800">kishanm.me</span>
        </p>
      </div>

      {/* Policy Sections (Exceeding 500 characters, robust and transparent) */}
      <div className="space-y-8 text-[#374151] leading-relaxed text-base sm:text-lg bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border border-black/5 shadow-sm">
        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <Eye className="w-5 h-5 text-blue-600" />
            1. Overview &amp; Fundamental Philosophy
          </h2>
          <p className="mb-3">
            Welcome to the personal developer portfolio of Kishan M. Patil (accessible at{" "}
            <a href="https://kishanm.me" className="text-blue-600 underline font-medium">
              https://kishanm.me
            </a>
            ). I believe privacy is a fundamental human right. This portfolio serves strictly as a technical showcase for my engineering projects, academic background, achievements, and open-source contributions.
          </p>
          <p>
            This website does not sell, rent, monetize, or broker personal visitor data to any advertising networks, third-party data brokers, or commercial tracking syndicates under any circumstances.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <Lock className="w-5 h-5 text-emerald-600" />
            2. Information Collected &amp; Contact Form Inquiries
          </h2>
          <p className="mb-3">
            When you browse this site, standard non-identifying telemetry (such as your approximate geographic region, browser user agent, and requesting path) is processed solely by our hosting infrastructure (Cloudflare Pages) to deliver static assets efficiently and mitigate malicious DDoS traffic.
          </p>
          <p>
            If you choose to reach out via the interactive Contact Form or direct email (
            <a href={`mailto:${personalInfo.email}`} className="text-blue-600 underline font-mono">
              {personalInfo.email}
            </a>
            ), your name, email address, and message contents are transmitted securely via encrypted channels and stored strictly to review your inquiry and provide a prompt personal response.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <FileText className="w-5 h-5 text-indigo-600" />
            3. AI Agents, LLM Scanners &amp; Machine-Readable Endpoints
          </h2>
          <p className="mb-3">
            This website actively publishes open agent discovery endpoints conforming to modern RFC standards (including RFC 8288 Link headers, RFC 9727 API catalog, RFC 9728 OAuth Protected Resource Metadata, and ARD ai-catalog specifications).
          </p>
          <p>
            Autonomous AI agents and web crawlers accessing machine-readable paths (such as <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">/llms.txt</code>, <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">/auth.md</code>, or <code className="bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono text-gray-800">/.well-known/*</code>) are subject to our public-read licensing. No private user data is ever exposed via these agent endpoints.
          </p>
        </section>

        <section>
          <h2 className="text-xl sm:text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            4. Cookies, Local Storage &amp; User Control
          </h2>
          <p className="mb-3">
            We do not use invasive third-party tracking cookies or fingerprinting scripts. Any local browser storage utilized by this site is restricted to maintaining client-side display preferences (such as animation reduction or navigation states).
          </p>
          <p>
            You have the right to request deletion of any correspondence sent to us. If you have questions regarding your data or wish to have past communications removed, contact Kishan M. Patil directly at{" "}
            <a href={`mailto:${personalInfo.email}`} className="text-blue-600 underline font-medium">
              {personalInfo.email}
            </a>
            .
          </p>
        </section>

        <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            href="/about"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            &larr; Back to About Kishan
          </Link>
          <Link
            href="/contact"
            className="px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-[#111827] hover:bg-black transition-colors"
          >
            Contact Kishan
          </Link>
        </div>
      </div>
    </div>
  );
}
