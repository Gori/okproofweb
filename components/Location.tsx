"use client";

import { useRef, useEffect, useState } from "react";
import { locationItems } from "@/lib/data";

export function Location() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Split into two rows: even indices top, odd indices bottom
  const topRow = locationItems.filter((_, i) => i % 2 === 0);
  const bottomRow = locationItems.filter((_, i) => i % 2 === 1);

  return (
    <section id="tech" className="py-16 lg:py-24 px-5 lg:px-10" ref={sectionRef}>
      <div className="mb-10 lg:mb-14">
        <span className="block font-[family-name:var(--font-abc-gaisyr)] text-[1.25rem] lg:text-[1.5rem] font-medium leading-[1.35] lg:leading-[1.3] text-brown-700">
          Tech stack
        </span>
        <h2 className="mt-2 text-brown-700 font-[family-name:var(--font-stabil-grotesk)] font-medium text-[2rem] lg:text-[3rem] leading-[1.15] lg:leading-[1.1]">
          Built on tools we trust
        </h2>
      </div>

      {/* Desktop: staggered two-row layout */}
      <div className="hidden lg:block">
        {/* Top row */}
        <div className="grid grid-cols-4 gap-x-8 border-b border-cream-800 pb-6 mb-6">
          {topRow.map((item, i) => {
            const idx = i * 2;
            return (
              <div
                key={item.label}
                className="group cursor-pointer"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1rem)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: `${idx * 120}ms`,
                }}
              >
                <span className="font-[family-name:var(--font-abc-gaisyr)] text-[2rem] text-brown-200 group-hover:text-brown-700 transition-colors duration-300 block">
                  {item.time}
                </span>
                <span className="font-[family-name:var(--font-stabil-grotesk)] text-base text-brown-200 group-hover:text-brown-400 transition-colors duration-300 leading-snug block mt-1">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Bottom row */}
        <div className="grid grid-cols-4 gap-x-8">
          {bottomRow.map((item, i) => {
            const idx = i * 2 + 1;
            return (
              <div
                key={item.label}
                className="group cursor-pointer"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(1rem)" : "translateY(2rem)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: `${idx * 120}ms`,
                }}
              >
                <span className="font-[family-name:var(--font-abc-gaisyr)] text-[2rem] text-brown-200 group-hover:text-brown-700 transition-colors duration-300 block">
                  {item.time}
                </span>
                <span className="font-[family-name:var(--font-stabil-grotesk)] text-base text-brown-200 group-hover:text-brown-400 transition-colors duration-300 leading-snug block mt-1">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile: vertical list */}
      <div className="lg:hidden space-y-5">
        {locationItems.map((item, i) => (
          <div
            key={item.label}
            className="flex items-start gap-4 border-b border-cream-800 pb-5 last:border-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-1rem)",
              transition: "opacity 0.5s ease, transform 0.5s ease",
              transitionDelay: `${i * 80}ms`,
            }}
          >
            <div>
              <span className="font-[family-name:var(--font-abc-gaisyr)] text-[1.375rem] text-brown-200 block">
                {item.time}
              </span>
              <span className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-200 block mt-0.5">
                {item.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
