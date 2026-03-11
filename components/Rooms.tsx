"use client";

import { useState } from "react";
import { rooms } from "@/lib/data";

const stepFeatures: Record<string, string[]> = {
  "For teams": [
    "Choose AI model per test (Claude, GPT, Gemini)",
    "Set time limits and prompt caps",
    "Generate unique invite links",
    "No candidate accounts required",
    "Full chat replay with timestamps",
    "Code snapshots preserved after teardown",
    "Live preview of working result",
    "Admin dashboard for test management",
  ],
  "For candidates": [
    "No signup or account creation",
    "No IDE installation needed",
    "AI agent handles code execution",
    "Live preview updates in real time",
    "Clear timer and progress indicators",
    "Chat history shows full work log",
    "Markdown rendering for AI responses",
    "Submit anytime before deadline",
  ],
};

export function Rooms() {
  const [activeRoom, setActiveRoom] = useState(0);
  const [activeVariant, setActiveVariant] = useState(0);

  const room = rooms[activeRoom];
  const variant = room.variants[activeVariant];

  return (
    <section id="how-it-works" className="py-16 lg:py-24 px-5 lg:px-10">
      <div className="mb-8 lg:mb-12">
        <span className="block font-[family-name:var(--font-abc-gaisyr)] text-[1.25rem] lg:text-[1.5rem] font-medium leading-[1.35] lg:leading-[1.3] text-brown-700">
          How it works
        </span>
        <h2 className="mt-2 text-brown-700 font-[family-name:var(--font-stabil-grotesk)] font-medium text-[2rem] lg:text-[3rem] leading-[1.15] lg:leading-[1.1]">
          Three steps. Zero friction.
        </h2>
      </div>

      {/* Audience Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {rooms.map((r, i) => (
          <button
            key={r.type}
            onClick={() => {
              setActiveRoom(i);
              setActiveVariant(0);
            }}
            className={`px-5 py-3 rounded-2xl font-[family-name:var(--font-stabil-grotesk)] text-[1.5rem] transition-all duration-300 ${
              i === activeRoom
                ? "bg-brown-700 text-white"
                : "bg-cream-700 text-brown-700 hover:bg-cream-800"
            }`}
          >
            <span className="block font-[family-name:var(--font-stabil-grotesk)] font-medium">{r.type}</span>
            <span className="block text-xs mt-0.5 opacity-75">{r.priceLabel}</span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-cream-700 rounded-3xl p-6 lg:p-10">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Steps */}
          <div className="flex-1">
            {/* Step tabs */}
            <div className="flex flex-wrap gap-2 mb-6">
              {room.variants.map((v, i) => (
                <button
                  key={v.floor}
                  onClick={() => setActiveVariant(i)}
                  className={`px-4 py-2 rounded-xl text-base font-[family-name:var(--font-stabil-grotesk)] transition-all duration-300 ${
                    i === activeVariant
                      ? "bg-brown-400 text-white"
                      : "bg-cream-800 text-brown-700 hover:bg-brown-200/30"
                  }`}
                >
                  {v.floor}
                </button>
              ))}
            </div>

            <p className="text-brown-700 font-[family-name:var(--font-stabil-grotesk)] text-base leading-relaxed">
              {variant.price}
            </p>

            <p className="mt-4 font-[family-name:var(--font-stabil-grotesk)] font-medium text-lg text-brown-700">
              {variant.size}
            </p>
          </div>

          {/* Right: Features */}
          <div className="lg:w-[22rem] flex-shrink-0">
            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-[family-name:var(--font-stabil-grotesk)] font-medium text-brown-700 mb-4">
                What you get
              </h4>
              <ul className="space-y-3">
                {(stepFeatures[room.type] || []).map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-base text-brown-700 font-[family-name:var(--font-stabil-grotesk)]">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="#get-started"
                className="flex items-center justify-center gap-2 bg-brown-700 text-white font-[family-name:var(--font-stabil-grotesk)] text-base font-semibold px-6 py-3 rounded-full hover:bg-brown-500 transition-colors"
              >
                Request access
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
