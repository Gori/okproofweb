"use client";

import { useRef, useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
  { title: "Real work, real signal", description: "They build something that matters, not solve a puzzle. You see what they'd actually deliver on the job.", color: "bg-green-400" },
  { title: "See the thinking, not just the output", description: "Watch how they break down the problem, prompt the AI, and iterate. The process tells you more than the result.", color: "bg-purple-400" },
  { title: "45 minutes, not a week", description: "Candidates finish in one sitting. No calendar coordination, no follow-ups, no ghosting.", color: "bg-yellow-400" },
  { title: "Candidates actually want to do it", description: "They build with modern AI tools on a real problem. Top candidates see this as a chance to show off, not a chore.", color: "bg-pink-400" },
  { title: "Same conditions, every candidate", description: "Same task, same tools, same time limit. No advantage from local setup, prior context, or outside help.", color: "bg-blue-500" },
  { title: "Review whenever you want", description: "Full replay, final output, and a working demo — all waiting for you. No scheduling a live session.", color: "bg-orange-400" },
  { title: "Works beyond engineering", description: "Designers, product managers, analysts, leaders. Anyone who works with AI can be evaluated this way.", color: "bg-turquoise-400" },
  { title: "Send a link, that's it", description: "No accounts for candidates, no IDE installs, no environment setup. They click and start building.", color: "bg-pink-500" },
];

export function SharedSpaces() {
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
    <section id="features" className="min-h-[100svh] flex flex-col justify-center py-20 lg:py-32 px-5 lg:px-10 bg-cream-700" ref={sectionRef}>
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading label="Why it works" title="Built for how hiring actually happens" />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`${feature.color} rounded-2xl p-5 lg:p-6`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(1rem)",
                transition: "opacity 0.5s ease, transform 0.5s ease",
                transitionDelay: `${i * 50}ms`,
              }}
            >
              <h3 className="font-[family-name:var(--font-stabil-grotesk)] font-medium text-[1rem] lg:text-[1.125rem] text-brown-700 mb-1.5">
                {feature.title}
              </h3>
              <p className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-700/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
