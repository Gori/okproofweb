"use client";

import { useRef, useEffect, useState } from "react";

const words = [
  { text: "See how they", type: "text" },
  { text: "", type: "shape", color: "#FFBBE4" },
  { text: "build", type: "text" },
  { text: "", type: "shape", color: "#7ACAFF" },
  { text: "not what they", type: "text" },
  { text: "", type: "shape", color: "#69E691" },
  { text: "memorize", type: "text" },
];

function RevealItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.85)",
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: "cubic-bezier(0.47, 0.12, 0.5, 0.9)",
      }}
    >
      {children}
    </div>
  );
}

export function Slogan() {
  return (
    <section id="product" className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
        {words.map((item, i) => (
          <RevealItem key={i} delay={i * 120}>
            {item.type === "text" ? (
              <h2 className="font-[family-name:var(--font-labil-grotesk)] text-[2rem] lg:text-[4.5rem] font-semibold text-brown-500 leading-tight tracking-[-0.01em]">
                {item.text}
              </h2>
            ) : (
              <div
                className="w-[80px] h-[50px] lg:w-[120px] lg:h-[70px] shape-rotate"
                style={{ backgroundColor: item.color, clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)" }}
              />
            )}
          </RevealItem>
        ))}
      </div>

      {/* Sub-slogan */}
      <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6 mt-8 lg:mt-12">
        {["Real work.", "Real time.", "Real proof."].map((text, i) => (
          <RevealItem key={text} delay={600 + i * 120}>
            <h2 className="font-[family-name:var(--font-labil-grotesk)] text-[2rem] lg:text-[4.5rem] font-semibold text-brown-500 leading-tight tracking-[-0.01em]">
              {text}
            </h2>
          </RevealItem>
        ))}
      </div>
    </section>
  );
}
