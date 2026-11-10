import type { Metadata } from "next";
import Link from "next/link";
import { personalInfo } from "@/data/content";
import { Terminal, Key, BookOpen, Code2, Cpu, ExternalLink, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Developer Portal & API Docs | Kishan M Patil",
  description:
    "Official developer portal, API schemas, CLI tooling, and integration sandbox for Kishan M. Patil's developer platform and AI agents.",
  alternates: {
    canonical: "https://kishanm.me/developers",
  },
};

export default function DevelopersPage() {
  return (
    <div className="py-12 sm:py-16 px-6 lg:px-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="mb-12 text-left">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-3">
          <Terminal className="w-3.5 h-3.5" />
          Developer Platform &amp; API Sandbox
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-3">
          Developer Portal
        </h1>
        <p className="text-base sm:text-lg text-[#4B5563] max-w-3xl leading-relaxed">
          Welcome to the official developer hub for Kishan M. Patil&apos;s digital infrastructure. Access machine-readable endpoints, inspect API schemas, explore our CLI tools, and discover how autonomous agents authenticate and interact.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Quickstart Card */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#111827] mb-2">
              API Quickstart &amp; Discovery
            </h2>
            <p className="text-sm text-[#4B5563] mb-4 leading-relaxed">
              Query our RFC 9727 API Catalog and ARD (Agentic Resource Discovery) capabilities directly without pre-configuration.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs overflow-x-auto mb-4">
              <code>curl -sS https://kishanm.me/.well-known/ai-catalog.json</code>
            </div>
          </div>
          <Link
            href="/.well-known/ai-catalog.json"
            target="_blank"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800"
          >
            View ARD Manifest <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* GitHub Repositories Card */}
        <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-black/5 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-4">
              <Code2 className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-[#111827] mb-2">
              Open-Source Repositories &amp; Code
            </h2>
            <p className="text-sm text-[#4B5563] mb-4 leading-relaxed">
              Explore production architectures, full-stack Next.js codebases, Three.js shaders, and AI agents directly on GitHub.
            </p>
            <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs overflow-x-auto mb-4">
              <code>git clone https://github.com/kishan7812/kishan7812.github.io.git</code>
            </div>
          </div>
          <a
            href="https://github.com/kishan-ict"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-purple-600 hover:text-purple-800"
          >
            Visit GitHub Profile <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Sandbox & Authentication Documentation */}
      <div className="bg-white/80 backdrop-blur-sm p-8 sm:p-10 rounded-2xl border border-black/5 shadow-sm space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <Key className="w-5 h-5 text-amber-500" />
            Authentication &amp; API Keys
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed mb-4">
            Public queries (project listings, resume data, and technical articles) require no authentication. For programmatic agent registration and higher rate limits, consult our published Auth.md standard and OAuth Protected Resource metadata.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">OAuth Authorization Server:</span>
              <code className="text-xs text-blue-600 break-all">https://kishanm.me/.well-known/oauth-authorization-server</code>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
              <span className="font-semibold text-gray-900 block mb-1">Protected Resource Metadata:</span>
              <code className="text-xs text-blue-600 break-all">https://kishanm.me/.well-known/oauth-protected-resource</code>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#111827] mb-3 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-emerald-600" />
            Interactive Agent Sandbox
          </h2>
          <p className="text-base text-[#4B5563] leading-relaxed mb-4">
            Test agent content negotiation directly by requesting markdown payloads:
          </p>
          <div className="bg-gray-900 text-gray-100 p-4 rounded-xl font-mono text-xs overflow-x-auto space-y-1">
            <p className="text-gray-400"># Fetch homepage formatted as pure markdown for LLM ingestion:</p>
            <p>curl -sS -H &quot;Accept: text/markdown&quot; https://kishanm.me/</p>
            <p className="text-gray-400 mt-2"># Fetch full developer knowledge graph:</p>
            <p>curl -sS https://kishanm.me/llms.txt</p>
          </div>
        </section>
      </div>
    </div>
  );
}
