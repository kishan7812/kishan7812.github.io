"use client";

import { projectsData } from "@/data/content";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-black/5">
      {/* Section Header with Human Layout matching reference style */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        <div className="lg:col-span-5 flex justify-center">
          {/* Decorative Vector matching the reference illustration mood */}
          <div className="w-full max-w-[320px] aspect-[4/3] bg-amber-50/60 rounded-3xl p-6 flex items-center justify-center border border-amber-100">
            <svg viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="20" y="20" width="160" height="110" rx="8" fill="#1E293B" />
              <rect x="26" y="32" width="148" height="92" rx="4" fill="#FFFFFF" />
              {/* diagram nodes */}
              <rect x="85" y="65" width="30" height="20" rx="3" fill="#F59E0B" />
              <rect x="45" y="45" width="25" height="15" rx="3" fill="#93C5FD" />
              <rect x="130" y="45" width="25" height="15" rx="3" fill="#93C5FD" />
              <rect x="45" y="95" width="25" height="15" rx="3" fill="#93C5FD" />
              <rect x="130" y="95" width="25" height="15" rx="3" fill="#93C5FD" />
              {/* connecting lines */}
              <line x1="70" y1="52" x2="85" y2="70" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="130" y1="52" x2="115" y2="70" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="70" y1="102" x2="85" y2="80" stroke="#CBD5E1" strokeWidth="2" />
              <line x1="130" y1="102" x2="115" y2="80" stroke="#CBD5E1" strokeWidth="2" />
            </svg>
          </div>
        </div>

        <div className="lg:col-span-7 text-left">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#111827] tracking-tight mb-4">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-[#4B5563] leading-relaxed">
            My projects make use of modern web standards and practical technology tools. From full-stack responsive web apps in React 19 to browser-based 3D simulations in WebGL and multi-model AI consensus workflows.
          </p>
        </div>
      </div>

      {/* Clean White Project Cards Grid (Reference Style) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="ref-card p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-gray-100 text-gray-700">
                  {project.category}
                </span>

                {project.isHosted ? (
                  <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live Demo
                  </span>
                ) : (
                  <span className="text-xs font-semibold text-amber-600">
                    Open Source
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-bold text-[#111827] mb-2">
                {project.title}
              </h3>

              <p className="text-sm font-medium text-blue-700 mb-3">
                {project.hook}
              </p>

              <p className="text-sm text-[#4B5563] leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-gray-50 border border-gray-200 text-[#4B5563]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              {project.isHosted && project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-2.5 px-4 rounded-md font-semibold text-xs sm:text-sm text-white bg-[#0F172A] hover:bg-[#1E293B] transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              )}

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  project.isHosted ? "flex-1" : "w-full"
                } text-center py-2.5 px-4 rounded-md font-semibold text-xs sm:text-sm text-[#111827] bg-gray-100 hover:bg-gray-200 border border-gray-200 transition-colors inline-flex items-center justify-center gap-1.5`}
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://github.com/kishan-ict?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="ref-button text-sm uppercase tracking-wide inline-flex items-center gap-2"
        >
          More Projects on GitHub
        </a>
      </div>
    </section>
  );
}
