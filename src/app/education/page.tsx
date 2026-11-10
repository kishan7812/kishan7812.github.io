import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { personalInfo } from "@/data/content";

export const metadata = {
  title: "Education | Kishan M. Patil",
  description: "Academic qualifications and degrees of Kishan M. Patil",
};

export default function EducationPage() {
  const { education } = personalInfo;

  return (
    <div className="w-full">
      {/* Top Header matching reference layout: Cap on left, Education title on right */}
      <div className="w-full px-6 sm:px-12 lg:px-16 pt-6 pb-12 sm:pb-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Cap Illustration with ideal sweet-spot sizing */}
          <div className="lg:col-span-6 flex justify-center lg:justify-start">
            <div className="w-full max-w-[520px] h-auto flex items-center justify-center">
              <svg
                id="eb113788-f1f1-4c1f-be62-f1d0ea2e1eb6"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 795.39431 574.03802"
                className="w-full h-auto drop-shadow-sm select-none"
              >
              <defs>
                <linearGradient
                  id="b2a81085-935f-40be-bb27-75940df8c338"
                  x1="-450.78971"
                  y1="2803.04671"
                  x2="-450.78971"
                  y2="2729.34772"
                  gradientTransform="translate(3217.53309 1009.65784) rotate(90)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="gray" stopOpacity="0.25" />
                  <stop offset="0.53514" stopColor="gray" stopOpacity="0.12" />
                  <stop offset="1" stopColor="gray" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <title>Graduation</title>
              <ellipse
                cx="232.05775"
                cy="450.06897"
                rx="35.09476"
                ry="5.26421"
                transform="translate(-476.55674 294.92367) rotate(-63.61079)"
                fill="#e0e0e0"
              />
              <ellipse
                cx="670.57742"
                cy="667.85592"
                rx="35.09476"
                ry="3.57677"
                transform="translate(-428.03695 808.73554) rotate(-63.61079)"
                fill="#e0e0e0"
              />
              <rect
                x="397.95325"
                y="566.93514"
                width="21.05685"
                height="70.18951"
                transform="translate(274.52069 -285.26226) rotate(39.54732)"
                fill="#f55f44"
              />
              <rect
                x="409.32507"
                y="573.56618"
                width="23.69234"
                height="70.18951"
                transform="translate(489.54965 1134.58125) rotate(-166.7689)"
                opacity="0.05"
              />
              <rect
                x="411.92558"
                y="573.86778"
                width="21.05685"
                height="70.18951"
                transform="translate(492.0121 1135.47005) rotate(-166.7689)"
                fill="#f55f44"
              />
              <rect
                x="414.48638"
                y="314.08219"
                width="73.69899"
                height="489.57186"
                transform="translate(-452.20218 551.7936) rotate(-63.61079)"
                fill="url(#b2a81085-935f-40be-bb27-75940df8c338)"
              />
              <path
                d="M655.01556,699.105c-8.584-4.11751-444.8438-220.718-438.55625-217.5983,24.21371-36.95739,31.19689-62.87545,31.19689-62.87545l438.55625,217.5983S670.81132,663.25857,655.01556,699.105Z"
                transform="translate(-202.30284 -162.98099)"
                fill="#f5f5f5"
              />
              <rect
                x="421.72508"
                y="519.09383"
                width="40.35897"
                height="70.18951"
                transform="translate(90.06389 -301.64381) rotate(26.38921)"
                opacity="0.05"
              />
              <rect
                x="423.47981"
                y="519.09383"
                width="36.8495"
                height="70.18951"
                transform="translate(90.06389 -301.64381) rotate(26.38921)"
                fill="#f55f44"
              />
              <rect
                x="428.83545"
                y="518.70387"
                width="24.56633"
                height="70.18951"
                transform="translate(89.80867 -301.33512) rotate(26.38921)"
                opacity="0.05"
              />
              <rect
                x="430.59019"
                y="518.70387"
                width="21.05685"
                height="70.18951"
                transform="translate(89.80867 -301.33512) rotate(26.38921)"
                fill="#f55f44"
              />
              <circle cx="261.30557" cy="563.92499" r="2.92569" fill="#dbdbdb" />
              <g opacity="0.5">
                <rect x="29.39431" y="482" width="3" height="17" fill="#47e6b1" />
                <rect
                  x="231.69716"
                  y="644.98099"
                  width="3"
                  height="17"
                  transform="translate(684.3753 257.30284) rotate(90)"
                  fill="#47e6b1"
                />
              </g>
              <g opacity="0.5">
                <rect x="785.39431" y="270" width="3" height="17" fill="#47e6b1" />
                <rect
                  x="987.69716"
                  y="432.98099"
                  width="3"
                  height="17"
                  transform="translate(1228.3753 -710.69716) rotate(90)"
                  fill="#47e6b1"
                />
              </g>
              <g opacity="0.5">
                <rect x="47.39431" y="59" width="3" height="17" fill="#47e6b1" />
                <rect
                  x="249.69716"
                  y="221.98099"
                  width="3"
                  height="17"
                  transform="translate(279.3753 -183.69716) rotate(90)"
                  fill="#47e6b1"
                />
              </g>
              <g opacity="0.5">
                <rect x="695.39431" y="33" width="3" height="17" fill="#47e6b1" />
                <rect
                  x="897.69716"
                  y="195.98099"
                  width="3"
                  height="17"
                  transform="translate(901.3753 -857.69716) rotate(90)"
                  fill="#47e6b1"
                />
              </g>
              <path
                d="M214.59252,416.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,214.59252,416.4373Z"
                transform="translate(-202.30284 -162.98099)"
                fill="#4d8af0"
                opacity="0.5"
              />
              <path
                d="M386.59252,219.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,386.59252,219.4373Z"
                transform="translate(-202.30284 -162.98099)"
                fill="#4d8af0"
                opacity="0.5"
              />
              <path
                d="M596.59252,730.4373a3.67458,3.67458,0,0,1-2.04749-4.441,1.76592,1.76592,0,0,0,.0799-.40754h0a1.84257,1.84257,0,0,0-3.31045-1.22119h0a1.76637,1.76637,0,0,0-.2039.3618,3.67459,3.67459,0,0,1-4.441,2.04749,1.766,1.766,0,0,0-.40754-.07991h0a1.84258,1.84258,0,0,0-1.22119,3.31045h0a1.76606,1.76606,0,0,0,.3618.20389,3.67462,3.67462,0,0,1,2.04749,4.441,1.76594,1.76594,0,0,0-.07991.40754h0a1.84257,1.84257,0,0,0,3.31045,1.22119h0a1.7659,1.7659,0,0,0,.2039-.3618,3.67459,3.67459,0,0,1,4.441-2.04749,1.76665,1.76665,0,0,0,.40755.07991h0a1.84257,1.84257,0,0,0,1.22119-3.31045h0A1.76684,1.76684,0,0,0,596.59252,730.4373Z"
                transform="translate(-202.30284 -162.98099)"
                fill="#4d8af0"
                opacity="0.5"
              />
              <circle cx="759.39431" cy="444" r="6" fill="#f55f44" opacity="0.5" />
              <circle cx="627.39431" cy="482" r="6" fill="#4d8af0" opacity="0.5" />
              <circle cx="103.39431" cy="541" r="6" fill="#47e6b1" opacity="0.5" />
              <circle cx="411.39431" cy="6" r="6" fill="#f55f44" opacity="0.5" />
              <path
                d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z"
                transform="translate(-202.30284 -162.98099)"
                fill="#fca311"
              />
              <path
                d="M407.19716,520.481l-24,36s8,37,185,36,191-36,191-36l-33-48-101-69Z"
                transform="translate(-202.30284 -162.98099)"
                opacity="0.15"
              />
              <polygon
                points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224"
                fill="#fca311"
              />
              <polygon
                points="715.394 224 400.394 363 16.394 224 368.394 64 541.184 143.67 547.374 146.53 715.394 224"
                opacity="0.15"
              />
              <polygon
                points="553.894 257.32 547.894 257.68 541.184 143.67 547.374 146.53 553.894 257.32"
                fill="#f5f5f5"
              />
              <path
                d="M411.19716,386.481l-28,170s201-65,376,0l-26-180S498.19716,347.481,411.19716,386.481Z"
                transform="translate(-202.30284 -162.98099)"
                fill="#fca311"
              />
              <ellipse cx="553.39431" cy="272" rx="29" ry="20" fill="#f5f5f5" />
            </svg>
          </div>
        </div>

        <div className="lg:col-span-6 text-center lg:text-left">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-[#111827] tracking-tight">
            Education
          </h1>
        </div>
      </div>
      </div>

      {/* Degrees Section matching reference layout */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 pb-16">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] text-center mb-8">
          Education and Degrees
        </h2>

        <div className="ref-card overflow-hidden bg-white shadow-md rounded-2xl border border-black/5 transition-all hover:shadow-lg">
          {/* Marwadi University Campus Image (Compact Aspect Ratio) */}
          <div className="relative w-full h-44 sm:h-52 md:h-56 overflow-hidden bg-slate-100">
            <Image
              src="/images/education/marwadi-university.jpg"
              alt="Marwadi University Campus"
              fill
              priority
              quality={90}
              className="object-cover object-center"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-5 right-5 text-white flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-wider font-bold bg-blue-600/90 backdrop-blur-sm px-2.5 py-0.5 rounded shadow-sm">
                NAAC A+ Accredited Campus
              </span>
            </div>
          </div>

          {/* Header Banner */}
          <div className="bg-[#FDE68A]/70 px-5 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2.5 border-b border-amber-200">
            <div>
              <h3 className="font-bold text-base sm:text-lg text-[#111827] leading-snug">
                {education.program}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#4B5563] mt-0.5">
                {education.institution}
              </p>
            </div>
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded bg-white text-gray-800 shadow-sm shrink-0 border border-black/5">
              {education.status}
            </span>
          </div>

          {/* Curriculum Points & CTA Button (Compact Padding & Clean Typography) */}
          <div className="p-5 sm:p-6 space-y-2.5">
            {education.focus.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-[#4B5563] leading-relaxed">
                <span className="text-blue-600 font-bold shrink-0">&bull;</span>
                <span>{item}</span>
              </div>
            ))}

            {/* View Course Details Button */}
            <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-start">
              <a
                href="https://www.marwadiuniversity.ac.in/ict-diploma/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-semibold text-xs text-white bg-[#111827] hover:bg-blue-600 shadow-sm hover:shadow transition-all duration-200 group"
              >
                <span>View Course in Detail</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
