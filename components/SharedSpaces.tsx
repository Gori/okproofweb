"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

const features = [
  { title: "Real work, real signal", description: "Candidates build a working project, not solve a puzzle. You see what they'd actually ship on day one.", color: "bg-green-400" },
  { title: "See the thinking, not just the output", description: "Every prompt, every iteration, every file change — captured in a full AI timeline. The process tells you more than the result.", color: "bg-purple-400" },
  { title: "45 minutes, not a week", description: "Candidates finish in one sitting. No calendar coordination, no follow-ups, no ghosting.", color: "bg-yellow-400" },
  { title: "Isolated sandbox per candidate", description: "Each candidate gets their own Linux VM. Same tools, same starting point. No advantage from local setup or outside help.", color: "bg-blue-500" },
  { title: "Claude, GPT, or Gemini", description: "9 models across Anthropic, OpenAI, and Google. Pick the one that matches how your team works.", color: "bg-pink-400" },
  { title: "Review on your schedule", description: "Replay the full session, read their code, and click through what they built. No live session needed.", color: "bg-orange-400" },
  { title: "Templates and starter files", description: "Start from a built-in template or upload your own files. Candidates begin with real context, not a blank page.", color: "bg-turquoise-400" },
  { title: "Send a link, that's it", description: "No accounts for candidates, no IDE installs, no environment setup. They click and start building.", color: "bg-pink-500" },
];

export function SharedSpaces() {
  const { ref, isVisible: visible } = useIntersectionObserver({ threshold: 0.05 });

  return (
    <section id="features" className="min-h-[100svh] flex flex-col justify-center py-20 lg:py-32 px-5 lg:px-10 bg-cream-700" ref={ref}>
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
