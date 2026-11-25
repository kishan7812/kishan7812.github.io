"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { achievementsData } from "@/data/content";
import {
  Trophy,
  Award,
  Sparkles,
  ExternalLink,
  Calendar,
  Building,
  CheckCircle2,
  X,
  Maximize2,
  Filter
} from "lucide-react";

export default function AchievementsPage() {
  const { certificates, featured, hackathonJourney } = achievementsData;
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalCert, setActiveModalCert] = useState<(typeof certificates)[0] | null>(null);

  const categories = [
    "All",
    "Hackathon",
    "Systems & Networking",
    "Artificial Intelligence",
    "Web Development",
    "Open Source",
    "Entrepreneurship",
    "National Initiative"
  ];

  const filteredCerts =
    selectedCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 px-6 lg:px-16 max-w-7xl mx-auto">
      {/* Top Header matching Education & Experience layout: Illustration on left, Title on right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Optimized Illustration on Left */}
        <div className="lg:col-span-6 flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[480px] aspect-[1024/682] drop-shadow-sm select-none">
            <Image
              src="/images/achievements/achievements-hero.webp"
              alt="Achievements and Certifications Illustration"
              fill
              priority
              quality={90}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          </div>
        </div>

        {/* Title and Intro on Right */}
        <div className="lg:col-span-6 text-center lg:text-left space-y-3">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#111827] tracking-tight">
            Achievements
          </h1>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed max-w-xl mx-auto lg:mx-0">
            Official credentials, national hackathon podiums, industry certifications from Cisco &amp; NSDC, and technical masterclasses earned by <strong className="text-[#111827]">Kishan M. Patil</strong>.
          </p>
        </div>
      </div>

      {/* Featured Hackathon Spotlight Banner */}
      <div className="mb-14 overflow-hidden rounded-3xl border-2 border-amber-300/80 bg-gradient-to-br from-amber-50 via-white to-orange-50/50 p-6 sm:p-10 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-white shadow-sm flex items-center gap-1">
                <Trophy className="w-3.5 h-3.5" /> Featured Podium Honor
              </span>
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white text-gray-700 border border-gray-200">
                National Level 36h Sprint
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
              {featured.title}
            </h2>

            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
              {featured.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200/60">
                <span className="text-[11px] uppercase font-bold text-gray-500 block">Organizer</span>
                <span className="text-xs sm:text-sm font-bold text-[#111827]">{featured.organizer}</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200/60">
                <span className="text-[11px] uppercase font-bold text-gray-500 block">Team &amp; Code</span>
                <span className="text-xs sm:text-sm font-bold text-[#111827]">{featured.team} ({featured.teamCode})</span>
              </div>
              <div className="bg-white/80 p-3 rounded-xl border border-amber-200/60 col-span-2 sm:col-span-1">
                <span className="text-[11px] uppercase font-bold text-gray-500 block">Sprint Track</span>
                <span className="text-xs sm:text-sm font-bold text-amber-700">{featured.problemStatement}</span>
              </div>
            </div>
          </div>

          {/* Certificate 04 preview card */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              onClick={() => setActiveModalCert(certificates[0])}
              className="group cursor-pointer relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border-2 border-amber-300 shadow-lg hover:shadow-xl transition-all"
            >
              <Image
                src={certificates[0].image}
                alt={certificates[0].title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div className="text-white flex items-center justify-between w-full">
                  <span className="text-xs font-bold flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5" /> Click to View Certificate
                  </span>
                  <span className="text-[11px] bg-amber-500 px-2 py-0.5 rounded font-bold">
                    Podium
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-black/5">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-500 mr-2 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Filter:
        </span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`text-xs font-bold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
              selectedCategory === cat
                ? "bg-[#111827] text-white shadow-sm"
                : "bg-white/80 text-gray-600 hover:bg-gray-100 hover:text-black border border-black/5"
            }`}
          >
            {cat} {cat === "All" ? `(${certificates.length})` : ""}
          </button>
        ))}
      </div>

      {/* Certificates Grid: Responsive 2-column on tablet/desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-16">
        {filteredCerts.map((cert) => (
          <div
            key={cert.id}
            className="ref-card bg-white rounded-2xl border border-black/10 overflow-hidden shadow-md hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              {/* Certificate Image Frame */}
              <div
                onClick={() => setActiveModalCert(cert)}
                className="relative w-full aspect-[16/10] bg-slate-100 overflow-hidden cursor-pointer border-b border-gray-100"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 550px"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <span className="bg-white/95 backdrop-blur-sm text-[#111827] text-xs font-bold px-3.5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5">
                    <Maximize2 className="w-3.5 h-3.5 text-blue-600" /> View Full Certificate
                  </span>
                </div>

                {/* Top Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`text-[11px] font-extrabold uppercase tracking-wide px-2.5 py-0.5 rounded-md border shadow-sm ${cert.badgeColor}`}>
                    {cert.badge}
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-gray-500 mb-2 gap-2">
                  <span className="flex items-center gap-1 font-medium truncate">
                    <Building className="w-3.5 h-3.5 shrink-0 text-gray-400" />
                    {cert.issuer}
                  </span>
                  <span className="flex items-center gap-1 shrink-0 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {cert.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] leading-snug mb-3">
                  {cert.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                  {cert.note}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {cert.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Footer Action */}
            <div className="px-6 py-4 bg-gray-50/70 border-t border-gray-100 flex items-center justify-between gap-3 text-xs">
              <span className="text-gray-500 font-mono">
                {cert.certNo ? `Cert ID: ${cert.certNo}` : `Verified Credential`}
              </span>

              <button
                type="button"
                onClick={() => setActiveModalCert(cert)}
                className="inline-flex items-center gap-1 font-bold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Inspect</span>
                <Maximize2 className="w-3 h-3" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox / Modal for High-Res Inspection */}
      {activeModalCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveModalCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between bg-gray-50">
              <div>
                <h4 className="font-bold text-base text-[#111827]">{activeModalCert.title}</h4>
                <p className="text-xs text-gray-500">{activeModalCert.issuer} &bull; {activeModalCert.date}</p>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalCert(null)}
                className="p-1.5 rounded-lg hover:bg-gray-200 text-gray-500 hover:text-black transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative w-full h-[60vh] sm:h-[68vh] bg-black/5 flex items-center justify-center p-2">
              <Image
                src={activeModalCert.image}
                alt={activeModalCert.title}
                fill
                quality={95}
                className="object-contain"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-white border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-600 leading-relaxed max-w-xl text-center sm:text-left">
                {activeModalCert.note}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <a
                  href={activeModalCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-[#111827] text-white hover:bg-blue-600 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Open Full Size</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
