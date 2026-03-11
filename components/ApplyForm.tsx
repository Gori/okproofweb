"use client";

import { useState, useRef, useEffect } from "react";

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <section id="get-started" className="relative bg-brown-700 py-20 lg:py-32 px-5 lg:px-10 overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-12 left-[10%] w-16 h-16 bg-pink-400/10 rounded-full blur-2xl" />
      <div className="absolute bottom-16 right-[15%] w-20 h-20 bg-purple-400/10 rounded-full blur-2xl" />
      <div className="absolute top-1/3 right-[8%] w-5 h-5 bg-yellow-400/20 rounded-full shape-rotate-slow" />
      <div className="absolute bottom-1/4 left-[12%] w-4 h-4 bg-green-400/15 rounded-sm shape-rotate" />

      <div
        className="max-w-[32rem] mx-auto relative"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(1rem)",
          transition: "opacity 0.6s ease, transform 0.6s ease",
        }}
      >
        <div className="text-center mb-10 lg:mb-12">
          <h2 className="font-[family-name:var(--font-abc-gaisyr)] text-[2rem] lg:text-[3rem] leading-[1.1] text-white mb-4">
            Hire for how work actually happens
          </h2>
          <p className="font-[family-name:var(--font-stabil-grotesk)] text-base text-white/40 leading-relaxed">
            Get early access. We&apos;ll set up your workspace and walk you through your first test.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center ring-1 ring-white/10">
            <div className="w-12 h-12 rounded-full bg-green-400 mx-auto mb-4 flex items-center justify-center">
              <svg className="w-6 h-6 text-brown-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-stabil-grotesk)] font-medium text-xl text-white mb-2">
              You&apos;re on the list.
            </h3>
            <p className="text-white/40 font-[family-name:var(--font-stabil-grotesk)] text-sm">
              We&apos;ll be in touch soon.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                required
                placeholder="Your name"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.07] border border-white/10 text-white font-[family-name:var(--font-stabil-grotesk)] text-sm placeholder:text-white/20 focus:border-white/25 focus:bg-white/10 outline-none transition-all duration-300"
              />
              <input
                type="text"
                required
                placeholder="Company"
                className="w-full px-4 py-3.5 rounded-xl bg-white/[0.07] border border-white/10 text-white font-[family-name:var(--font-stabil-grotesk)] text-sm placeholder:text-white/20 focus:border-white/25 focus:bg-white/10 outline-none transition-all duration-300"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Work email"
              className="w-full px-4 py-3.5 rounded-xl bg-white/[0.07] border border-white/10 text-white font-[family-name:var(--font-stabil-grotesk)] text-sm placeholder:text-white/20 focus:border-white/25 focus:bg-white/10 outline-none transition-all duration-300"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-3 bg-yellow-400 text-brown-700 font-[family-name:var(--font-stabil-grotesk)] font-medium text-base px-8 py-3.5 rounded-full hover:bg-yellow-400/90 transition-all duration-300 disabled:opacity-70 hover:shadow-lg hover:shadow-yellow-400/20"
            >
              {loading ? (
                <span className="w-4 h-4 border-2 border-brown-700/30 border-t-brown-700 rounded-full animate-spin" />
              ) : (
                "Get early access"
              )}
            </button>
            <p className="text-center text-white/15 font-[family-name:var(--font-stabil-grotesk)] text-xs">
              No credit card required.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
