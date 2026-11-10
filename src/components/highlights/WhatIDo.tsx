import Image from "next/image";
import { Code2, Sparkles, Box, Check } from "lucide-react";

export function WhatIDo() {
  const capabilities = [
    {
      title: "Frontend Development",
      icon: Code2,
      image: "/images/what-i-do/frontend-development.jpg",
      description: "Building responsive, modern web applications with React, Next.js, and TypeScript, focusing on clean design and smooth user experiences."
    },
    {
      title: "Creative 3D Web",
      icon: Box,
      image: "/images/what-i-do/creative-3d-web.jpg",
      description: "Creating immersive 3D web experiences and interactive digital worlds using Three.js and WebGL."
    },
    {
      title: "AI Integration & Fast Prototyping",
      icon: Sparkles,
      image: "/images/what-i-do/ai-prototyping.jpg",
      description: "Integrating AI models into applications and transforming ideas into intelligent, functional prototypes."
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 lg:px-16 max-w-7xl mx-auto border-t border-black/5">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#111827] tracking-tight">
          What I Do?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {capabilities.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="ref-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                {item.image && (
                  <div className="relative w-full h-48 bg-gray-100 overflow-hidden border-b border-gray-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-8">
                  {!item.image && (
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-[#111827] mb-3">
                    {item.title}
                  </h3>

                  {item.description && (
                    <p className="text-sm font-medium text-[#4B5563] leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
