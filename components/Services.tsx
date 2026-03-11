"use client";

import { useState, useRef, useEffect } from "react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function Services() {
  const [activeTab, setActiveTab] = useState<"students" | "parents">("students");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const current = services[activeTab];
  const isTeams = activeTab === "students";

  return (
    <section id="for-teams" className="min-h-[100svh] flex flex-col justify-center py-20 lg:py-32 px-5 lg:px-10" ref={sectionRef}>
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading label="Better for everyone" title="Teams and candidates" />

        {/* Tab buttons */}
        <div className="flex gap-3 mb-8">
          <button
            onClick={() => setActiveTab("students")}
            className={`px-6 py-3.5 rounded-full transition-all duration-300 font-[family-name:var(--font-labil-grotesk)] font-medium text-base ${
              isTeams
                ? "bg-yellow-400 text-brown-700 shadow-lg shadow-yellow-400/30"
                : "bg-cream-700 text-brown-400 hover:bg-cream-800"
            }`}
            style={{ fontFeatureSettings: '"salt"' }}
          >
            For hiring teams
          </button>
          <button
            onClick={() => setActiveTab("parents")}
            className={`px-6 py-3.5 rounded-full transition-all duration-300 font-[family-name:var(--font-labil-grotesk)] font-medium text-base ${
              !isTeams
                ? "bg-pink-400 text-brown-700 shadow-lg shadow-pink-400/30"
                : "bg-cream-700 text-brown-400 hover:bg-cream-800"
            }`}
            style={{ fontFeatureSettings: '"salt"' }}
          >
            For candidates
          </button>
        </div>

        {/* Content grid */}
        <div
          className={`${isTeams ? "bg-yellow-400/20" : "bg-pink-400/20"} rounded-3xl p-6 lg:p-10 transition-colors duration-500`}
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(1rem)",
            transition: "opacity 0.6s ease, transform 0.6s ease, background-color 0.5s ease",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {current.items.map((item, i) => (
              <div
                key={item}
                className="bg-white rounded-xl px-5 py-4 flex items-start gap-3"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(0.5rem)",
                  transition: "opacity 0.4s ease, transform 0.4s ease",
                  transitionDelay: `${i * 50}ms`,
                }}
              >
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-brown-700 font-[family-name:var(--font-stabil-grotesk)] text-sm leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
