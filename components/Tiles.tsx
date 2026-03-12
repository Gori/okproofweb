"use client";

import { useRef, useEffect, useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

const steps = [
  {
    number: "01",
    title: "Describe the task",
    description: "Pick a template or write your own task. Set a time limit, prompt cap, and AI model. Send each candidate a unique invite link.",
    color: "bg-yellow-400",
    image: (
      <div className="bg-brown-700 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <span className="text-white/30 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">New test</span>
        </div>
        <div className="space-y-2">
          <div className="bg-white/10 rounded-lg px-3 py-2">
            <span className="text-white/30 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Title</span>
            <p className="text-white/70 text-xs font-[family-name:var(--font-stabil-grotesk)]">Build a dashboard</p>
          </div>
          <div className="flex gap-2">
            <div className="flex-1 bg-white/10 rounded-lg px-3 py-2">
              <span className="text-white/30 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Time</span>
              <p className="text-white/70 text-xs font-[family-name:var(--font-stabil-grotesk)]">45 min</p>
            </div>
            <div className="flex-1 bg-white/10 rounded-lg px-3 py-2">
              <span className="text-white/30 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Model</span>
              <p className="text-white/70 text-xs font-[family-name:var(--font-stabil-grotesk)]">Claude</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "They build with AI",
    description: "Candidates chat with an AI agent that writes code and builds the project. They see it come together live as they work. No IDE, no setup — just a link.",
    color: "bg-pink-400",
    image: (
      <div className="bg-brown-700 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-white/30 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Live session</span>
          <span className="ml-auto text-yellow-400 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)] font-medium">32:15</span>
        </div>
        <div className="space-y-2">
          <div className="flex gap-2 items-start">
            <div className="w-4 h-4 rounded-full bg-green-400 flex-shrink-0 mt-0.5" />
            <div className="bg-white/10 rounded-lg px-2.5 py-1.5">
              <p className="text-white/60 text-[0.625rem] font-[family-name:var(--font-stabil-grotesk)]">Add a chart component</p>
            </div>
          </div>
          <div className="flex gap-2 items-start flex-row-reverse">
            <div className="w-4 h-4 rounded-full bg-purple-400 flex-shrink-0 mt-0.5" />
            <div className="bg-white/5 rounded-lg px-2.5 py-1.5">
              <p className="text-white/40 text-[0.625rem] font-[family-name:var(--font-stabil-grotesk)]">Creating Chart.js line chart...</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "03",
    title: "You see everything",
    description: "Read every prompt they wrote. See how they broke down the problem and changed direction. Click through a working demo of what they built.",
    color: "bg-green-400",
    image: (
      <div className="bg-brown-700 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-white/30 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Review</span>
        </div>
        <div className="flex gap-1.5 mb-3">
          {["Preview", "Code", "Chat", "Timeline"].map((tab, j) => (
            <span key={tab} className={`text-[0.5rem] px-2 py-1 rounded-md font-[family-name:var(--font-stabil-grotesk)] ${j === 0 ? "bg-white/15 text-white/70" : "text-white/30"}`}>{tab}</span>
          ))}
        </div>
        <div className="bg-white/5 rounded-lg p-3 flex gap-2">
          <div className="flex-1">
            <div className="h-2 w-3/4 bg-white/10 rounded mb-1.5" />
            <div className="h-2 w-1/2 bg-white/10 rounded mb-1.5" />
            <div className="h-2 w-full bg-white/10 rounded" />
          </div>
          <div className="flex-1 flex items-end gap-[2px]">
            {[40, 65, 45, 80, 60, 90, 75].map((h, k) => (
              <div key={k} className="flex-1 bg-green-400/30 rounded-sm" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export function Tiles() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="min-h-[100svh] flex flex-col justify-center py-20 lg:py-32 px-5 lg:px-10" ref={sectionRef}>
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading label="How it works" title="Set up in minutes, not days" center />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`${step.color} rounded-2xl lg:rounded-3xl p-8 lg:p-10 flex flex-col`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(2rem)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: `${i * 120}ms`,
              }}
            >
              <span className="font-[family-name:var(--font-abc-gaisyr)] text-[3rem] lg:text-[4rem] text-brown-700/15 leading-none mb-4">
                {step.number}
              </span>
              <h3 className="font-[family-name:var(--font-stabil-grotesk)] font-medium text-[1.375rem] lg:text-[1.5rem] text-brown-700 mb-3">
                {step.title}
              </h3>
              <p className="font-[family-name:var(--font-stabil-grotesk)] text-base text-brown-700/70 leading-relaxed">
                {step.description}
              </p>
              <div className="mt-auto pt-6">
                {step.image}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
