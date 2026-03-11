"use client";

import { useRef, useEffect, useState } from "react";

const words = [
  "Your best engineers",
  "use AI every day.",
  "Your hiring test",
  "still bans it.",
];

const subWords = ["Why?"];

function RevealItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "scale(1)" : "scale(0.85)",
        transition: "opacity 0.7s cubic-bezier(0.47, 0.12, 0.5, 0.9), transform 0.7s cubic-bezier(0.47, 0.12, 0.5, 0.9)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

function ProductMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="w-full max-w-[72rem] mx-auto mt-10 lg:mt-14 relative"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(2rem) scale(0.97)",
        transition: "opacity 0.8s ease, transform 0.8s ease",
      }}
    >
      {/* Glow behind the mockup */}
      <div className="absolute -inset-8 lg:-inset-16 bg-gradient-to-b from-pink-400/15 via-purple-400/10 to-blue-500/15 rounded-[3rem] blur-3xl" />

      <div className="relative bg-brown-700 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl shadow-brown-700/50 ring-1 ring-white/[0.08]">
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 lg:px-6 py-3.5 bg-brown-700 border-b border-white/[0.06]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white/15" />
            <div className="w-3 h-3 rounded-full bg-white/15" />
            <div className="w-3 h-3 rounded-full bg-white/15" />
          </div>
          <span className="ml-3 text-white/30 text-xs font-[family-name:var(--font-stabil-grotesk)]">ok.proof — test session</span>
          <div className="ml-auto flex items-center gap-4">
            <span className="hidden sm:inline text-white/20 text-[0.625rem] font-[family-name:var(--font-stabil-grotesk)]">4 / 20 prompts</span>
            <span className="text-yellow-400 text-sm font-[family-name:var(--font-stabil-grotesk)] font-medium tabular-nums">23:41</span>
          </div>
        </div>

        {/* Split panels */}
        <div className="flex flex-col lg:flex-row min-h-[16rem] lg:min-h-[26rem]">
          {/* Chat panel */}
          <div className="flex-1 p-5 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/[0.06] flex flex-col gap-4">
            <div className="flex gap-3 items-start">
              <div className="w-7 h-7 rounded-full bg-green-400 flex-shrink-0 mt-0.5 flex items-center justify-center">
                <span className="text-brown-700 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)] font-medium">NK</span>
              </div>
              <div className="bg-white/10 rounded-2xl rounded-tl-md px-4 py-3 max-w-[85%]">
                <p className="text-white/80 text-sm font-[family-name:var(--font-stabil-grotesk)] leading-relaxed">
                  Build a dashboard that shows real-time metrics with animated charts and a dark theme.
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-purple-400 flex-shrink-0 mt-0.5" />
              <div className="bg-white/[0.04] rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%]">
                <p className="text-white/50 text-sm font-[family-name:var(--font-stabil-grotesk)] leading-relaxed">
                  I&apos;ll create a responsive dashboard with Chart.js. Starting with the layout and metric cards...
                </p>
              </div>
            </div>

            <div className="flex gap-3 items-start flex-row-reverse">
              <div className="w-7 h-7 rounded-full bg-purple-400 flex-shrink-0 mt-0.5" />
              <div className="bg-white/[0.04] rounded-2xl rounded-tr-md px-4 py-3 max-w-[85%] border border-white/[0.04]">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="text-white/40 text-xs font-[family-name:var(--font-stabil-grotesk)]">wrote 3 files</span>
                </div>
                <p className="text-white/25 text-xs font-[family-name:var(--font-stabil-grotesk)] leading-relaxed">
                  index.html · styles.css · app.js
                </p>
              </div>
            </div>

            <div className="mt-auto pt-3 border-t border-white/[0.04]">
              <div className="bg-white/[0.03] rounded-xl px-4 py-3 text-white/15 text-sm font-[family-name:var(--font-stabil-grotesk)]">
                Describe what you want to build...
              </div>
            </div>
          </div>

          {/* Preview panel */}
          <div className="flex-1 bg-[#161625] p-5 lg:p-8 flex flex-col">
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/25 text-xs font-[family-name:var(--font-stabil-grotesk)]">Live preview</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                <span className="text-green-400/50 text-xs font-[family-name:var(--font-stabil-grotesk)]">running</span>
              </div>
            </div>
            <div className="flex-1 bg-[#0d0d1a] rounded-xl p-5 flex flex-col gap-3">
              <div className="flex gap-3">
                <div className="flex-1 bg-white/[0.04] rounded-lg p-4">
                  <div className="text-white/20 text-[0.625rem] font-[family-name:var(--font-stabil-grotesk)] mb-1">Users</div>
                  <div className="text-white/70 text-lg font-[family-name:var(--font-stabil-grotesk)] font-medium">2,847</div>
                  <div className="mt-3 h-8 flex items-end gap-[2px]">
                    {[40, 65, 45, 80, 60, 90, 75, 95, 70, 85].map((h, i) => (
                      <div key={i} className="flex-1 bg-green-400/40 rounded-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="flex-1 bg-white/[0.04] rounded-lg p-4">
                  <div className="text-white/20 text-[0.625rem] font-[family-name:var(--font-stabil-grotesk)] mb-1">Revenue</div>
                  <div className="text-white/70 text-lg font-[family-name:var(--font-stabil-grotesk)] font-medium">$14.2k</div>
                  <div className="mt-3 h-8 flex items-end gap-[2px]">
                    {[30, 50, 35, 70, 55, 80, 65, 85, 90, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-purple-400/40 rounded-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex-1 bg-white/[0.04] rounded-lg p-4">
                <div className="text-white/20 text-[0.625rem] font-[family-name:var(--font-stabil-grotesk)] mb-3">Activity</div>
                <div className="h-full flex items-end gap-[3px] pb-1">
                  {[20, 35, 50, 30, 65, 45, 80, 55, 70, 90, 60, 75, 85, 40, 95, 50, 70, 80, 65, 55].map((h, i) => (
                    <div key={i} className="flex-1 bg-blue-500/25 rounded-sm" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Statement() {
  return (
    <section className="min-h-[100svh] flex flex-col justify-center py-20 lg:py-32 px-5 lg:px-10">
      <div className="max-w-[64rem] mx-auto flex flex-wrap items-center justify-center gap-3 lg:gap-4">
        {words.map((text, i) => (
          <RevealItem key={i} delay={i * 120}>
            <h2 className="font-[family-name:var(--font-labil-grotesk)] text-[1.75rem] lg:text-[3.5rem] font-medium text-brown-500 leading-none tracking-[-0.01em]" style={{ fontFeatureSettings: '"salt"' }}>
              {text}
            </h2>
          </RevealItem>
        ))}
      </div>

      <div className="max-w-[64rem] mx-auto flex flex-wrap items-center justify-center gap-3 lg:gap-4 mt-5 lg:mt-8">
        {subWords.map((text, i) => (
          <RevealItem key={text} delay={600 + i * 120}>
            <h2 className="font-[family-name:var(--font-labil-grotesk)] text-[1.75rem] lg:text-[3.5rem] font-medium text-brown-500 leading-none tracking-[-0.01em]" style={{ fontFeatureSettings: '"salt"' }}>
              {text}
            </h2>
          </RevealItem>
        ))}
      </div>

      <ProductMockup />
    </section>
  );
}
