"use client";

import { useState, useEffect } from "react";
import { useScrollDirection } from "@/lib/hooks/useScrollDirection";
import { useWaitlist } from "@/components/WaitlistProvider";

const navItems = [
  { label: "Templates", href: "#roles" },

  { label: "How it works", href: "#how-it-works" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { direction, scrollY } = useScrollDirection();
  const openWaitlist = useWaitlist();
  const isHidden = direction === "down" && scrollY > 100;
  const hasScrolled = scrollY > 50;

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isHidden && !menuOpen ? "-translate-y-full" : "translate-y-0"
        } ${hasScrolled ? "bg-cream-500/80 backdrop-blur-xl" : ""}`}
      >
        <div className="flex items-center justify-between px-5 lg:px-10 h-[4.25rem] lg:h-[5rem] max-w-[72rem] mx-auto">
          <a
            href="#"
            className="font-[family-name:var(--font-labil-grotesk)] font-medium text-[1.75rem] lg:text-[2rem] text-brown-700 tracking-tight z-50 relative" style={{ fontFeatureSettings: '"salt", "ss01", "ss02", "ss03"' }}
          >
            ok.proof
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-[family-name:var(--font-stabil-grotesk)] text-base text-brown-400 hover:text-brown-700 transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={openWaitlist}
              className="bg-brown-700 text-white text-base font-[family-name:var(--font-stabil-grotesk)] font-medium px-6 py-2.5 rounded-full hover:bg-brown-500 transition-colors duration-300"
            >
              Get early access
            </button>
          </nav>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-50 relative"
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-brown-700 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-brown-700 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-brown-700 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream-500 transition-all duration-400 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-start justify-center h-full px-8 gap-6">
          {navItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="font-[family-name:var(--font-abc-gaisyr)] text-[2rem] text-brown-700"
              style={{
                transitionDelay: menuOpen ? `${i * 60 + 80}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateX(0)" : "translateX(-1rem)",
                transition: "opacity 0.3s ease, transform 0.3s ease",
              }}
            >
              {item.label}
            </a>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openWaitlist(); }}
            className="mt-4 bg-brown-700 text-white text-base font-[family-name:var(--font-stabil-grotesk)] font-medium px-6 py-3 rounded-full"
            style={{
              transitionDelay: menuOpen ? "300ms" : "0ms",
              opacity: menuOpen ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
          >
            Get early access
          </button>
        </nav>
      </div>
    </>
  );
}
