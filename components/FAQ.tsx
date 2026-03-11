"use client";

import { useState, useRef, useEffect } from "react";
import { faqItems } from "@/lib/data";
import { SectionHeading } from "@/components/SectionHeading";

export function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
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

  return (
    <section id="faq" className="min-h-[100svh] flex flex-col justify-center py-20 lg:py-32 px-5 lg:px-10" ref={sectionRef}>
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading label="FAQ" title="Common questions" />

        <div className="columns-1 lg:columns-2 gap-4 [&>*]:mb-4">
          {faqItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={item.question}
                className={`${item.color} rounded-2xl lg:rounded-3xl overflow-hidden transition-all duration-300`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1rem)",
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  transitionDelay: `${i * 80}ms`,
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-6 text-left"
                >
                  <span className="font-[family-name:var(--font-labil-grotesk)] font-medium text-base lg:text-[1.125rem] text-brown-700 pr-4" style={{ fontFeatureSettings: '"salt"' }}>
                    {item.question}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 relative">
                    <span className="block w-3.5 h-[2px] bg-brown-700" />
                    <span
                      className={`absolute block w-3.5 h-[2px] bg-brown-700 transition-transform duration-300 ${
                        isOpen ? "rotate-0" : "rotate-90"
                      }`}
                    />
                  </div>
                </button>

                <div
                  className="grid transition-[grid-template-rows] duration-400"
                  style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                    transitionTimingFunction: "cubic-bezier(0.47, 0.12, 0.5, 0.9)",
                  }}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6">
                      <p className="text-brown-700/70 font-[family-name:var(--font-stabil-grotesk)] text-base leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
