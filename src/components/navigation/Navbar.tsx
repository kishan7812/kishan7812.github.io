"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Education", href: "/education" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Achievements", href: "/achievements" },
    { name: "Contact Me", href: "/contact" },
  ];

  // Prevent background scrolling completely when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close menu automatically whenever route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[rgb(228,229,229)]/95 backdrop-blur-sm border-b border-black/5 py-4 px-6 lg:px-16 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Handwritten signature logo: < Kishan Patil /> */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827] font-[family-name:var(--font-signature)] hover:text-blue-700 transition-colors">
              &lt; Kishan Patil /&gt;
            </span>
          </Link>

          {/* Desktop navigation links matching reference routes */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname === `${link.href}/`;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`transition-colors relative py-1 ${
                    isActive
                      ? "text-[#111827] font-bold after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#111827]"
                      : "text-[#4B5563] hover:text-[#111827]"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile menu trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="p-2.5 -mr-2 text-[#111827] hover:text-black focus:outline-none rounded-xl active:scale-95 transition-all md:hidden z-50 touch-manipulation cursor-pointer select-none"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Modal with Deep Blur Backdrop */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-40 md:hidden flex flex-col justify-between bg-[rgb(228,229,229)]/90 backdrop-blur-xl animate-in fade-in duration-200"
        >
          {/* Menu Items Container */}
          <div className="pt-24 px-8 pb-8 flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link, idx) => {
                const isActive = pathname === link.href || pathname === `${link.href}/`;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-xl font-bold tracking-tight transition-all active:scale-98 ${
                      isActive
                        ? "text-[#111827] bg-white/80 shadow-sm border border-black/5"
                        : "text-[#4B5563] hover:text-[#111827] hover:bg-white/40"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-sm font-mono text-gray-400">0{idx + 1}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Bottom Branding / Close helper */}
          <div className="p-8 text-center border-t border-black/5 text-xs text-[#6B7280]">
            Kishan M. Patil &bull; Portfolio
          </div>
        </div>
      )}
    </>
  );
}
