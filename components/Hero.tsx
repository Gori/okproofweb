"use client";

import { useState, useEffect, useRef, useCallback } from "react";

const roles = ["developers", "product managers", "designers", "leaders"];
const INTERVAL = 2800;
const TRANSITION = 500;

function RoleCycler() {
  const [index, setIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const hiddenRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const measureWidth = useCallback((idx: number) => {
    const el = hiddenRefs.current[idx];
    if (el) return el.offsetWidth;
    return undefined;
  }, []);

  useEffect(() => {
    const w = measureWidth(0);
    if (w) setWidth(w);
    setMounted(true);
  }, [measureWidth]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % roles.length;
        const w = measureWidth(next);
        if (w) setWidth(w);
        return next;
      });
    }, INTERVAL);
    return () => clearInterval(timer);
  }, [measureWidth]);

  return (
    <>
      {/* Hidden measurement spans */}
      <span className="absolute left-0 top-0 invisible pointer-events-none" aria-hidden="true">
        {roles.map((role, i) => (
          <span
            key={role}
            ref={(el) => { hiddenRefs.current[i] = el; }}
            className="absolute whitespace-nowrap font-[family-name:var(--font-abc-gaisyr)] text-[clamp(2.5rem,7vw,5rem)] tracking-[-0.02em]"
          >
            {role}
          </span>
        ))}
      </span>

      {!mounted ? (
        <span className="inline">{roles[0]}</span>
      ) : (
        <span
          className="inline-block relative align-bottom"
          style={{
            width: width ? `${width}px` : "auto",
            height: "1.15em",
            clipPath: "inset(-20% -10% -20% 0)",
            transition: `width ${TRANSITION}ms cubic-bezier(0.65, 0, 0.35, 1)`,
          }}
        >
          {roles.map((role, i) => (
            <span
              key={role}
              className="absolute left-0 bottom-0 whitespace-nowrap"
              style={{
                transform: i === index ? "translateY(0)" : i === (index - 1 + roles.length) % roles.length ? "translateY(-120%)" : "translateY(120%)",
                opacity: i === index ? 1 : 0,
                transition: `transform ${TRANSITION}ms cubic-bezier(0.65, 0, 0.35, 1), opacity ${TRANSITION * 0.7}ms ease`,
              }}
            >
              {role}
            </span>
          ))}
        </span>
      )}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative bg-yellow-400 min-h-[100svh] flex flex-col justify-center px-5 lg:px-10 pt-[5rem] pb-10 lg:pb-16 overflow-hidden" style={{ borderRadius: "0 0 1.5rem 1.5rem" }}>
      <div className="max-w-[64rem] mx-auto text-center relative w-full">
        <h1 className="font-[family-name:var(--font-abc-gaisyr)] text-brown-700 leading-[0.95] text-[clamp(2.5rem,7vw,5rem)] tracking-[-0.02em]">
          Hire <RoleCycler /> who<br />
          <span className="text-brown-500">get things done with AI.</span>
        </h1>

        <p className="mt-5 lg:mt-6 max-w-[40rem] mx-auto text-brown-700/70 font-[family-name:var(--font-stabil-grotesk)] text-[1.125rem] lg:text-[1.25rem] leading-[1.5]">
          Give them a real problem and the latest AI model.<br />See exactly how they work.
        </p>

        <div className="mt-6 lg:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://app.okproof.dev"
            className="bg-brown-700 text-white font-[family-name:var(--font-stabil-grotesk)] font-medium text-base px-8 py-3.5 rounded-full hover:bg-brown-500 transition-colors duration-300"
          >
            Create your first test
          </a>
          <a
            href="#how-it-works"
            className="text-brown-700 font-[family-name:var(--font-stabil-grotesk)] font-medium text-base px-8 py-3.5 rounded-full border-2 border-brown-700/20 hover:border-brown-700/50 transition-colors duration-300"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
