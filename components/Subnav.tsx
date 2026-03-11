"use client";

import { useState } from "react";
import { subnavItems } from "@/lib/data";

export function Subnav() {
  const [active, setActive] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="sticky top-[0.75rem] lg:top-[5.125rem] z-30 px-5 lg:px-10 py-3 -mt-3">
      <nav className="bg-white rounded-2xl shadow-[0_2px_16px_rgba(44,17,29,0.06)]">
        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden w-full flex items-center justify-between px-5 py-3.5 font-[family-name:var(--font-stabil-grotesk)] font-medium text-base text-brown-700"
        >
          <span>{subnavItems[active].label}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-300 ${mobileOpen ? "rotate-180" : ""}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {/* Nav items */}
        <div className={`lg:flex items-center gap-1 p-1.5 ${mobileOpen ? "flex flex-col pb-3 pt-0" : "hidden"}`}>
          {subnavItems.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => {
                setActive(i);
                setMobileOpen(false);
              }}
              className={`px-5 py-2.5 rounded-xl text-base font-[family-name:var(--font-stabil-grotesk)] transition-all duration-300 whitespace-nowrap w-full lg:w-auto text-center ${
                i === active
                  ? "bg-brown-400 text-white"
                  : "text-brown-700 hover:bg-cream-700"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
