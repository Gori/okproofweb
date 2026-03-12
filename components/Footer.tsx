"use client";

import { useWaitlist } from "@/components/WaitlistProvider";

export function Footer() {
  const openWaitlist = useWaitlist();
  return (
    <footer className="bg-cream-500 px-5 lg:px-10 py-10 lg:py-14">
      <div className="max-w-[64rem] mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <a
            href="#"
            className="font-[family-name:var(--font-labil-grotesk)] font-medium text-[1.75rem] lg:text-[2rem] text-brown-700 tracking-tight"
            style={{ fontFeatureSettings: '"salt", "ss01", "ss02", "ss03"' }}
          >
            ok.proof
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-2">
            <a href="#how-it-works" className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">How it works</a>
            <a href="#features" className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">Features</a>
            <a href="#faq" className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">FAQ</a>
            <button onClick={openWaitlist} className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-brown-400 hover:text-brown-700 transition-colors">Get early access</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
