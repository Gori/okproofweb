"use client";

import { useState, useEffect, useCallback } from "react";
import { useMutation } from "convex/react";
import { api } from "../convex/_generated/api";

export function WaitlistModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "joined" | "already_joined" | "error">("idle");
  const joinWaitlist = useMutation(api.waitlist.join);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      setEmail("");
      setStatus("idle");
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    try {
      const result = await joinWaitlist({ email: email.trim() });
      setStatus(result.status);
    } catch {
      setStatus("error");
    }
  }, [email, joinWaitlist]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-5"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-brown-700/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative bg-cream-500 rounded-2xl lg:rounded-3xl p-6 lg:p-10 w-full max-w-[36rem] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-brown-400 hover:text-brown-700 transition-colors"
          aria-label="Close"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>

        {status === "joined" || status === "already_joined" ? (
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-green-400 mx-auto mb-5 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10L8.5 14.5L16 5.5" stroke="#2C111D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3
              className="font-[family-name:var(--font-labil-grotesk)] font-medium text-[1.5rem] lg:text-[1.75rem] text-brown-700 leading-tight"
              style={{ fontFeatureSettings: '"salt"' }}
            >
              {status === "joined" ? "You're on the list." : "You're already on the list."}
            </h3>
            <p className="font-[family-name:var(--font-stabil-grotesk)] text-base text-brown-400 mt-3 leading-relaxed">
              We'll let you know as soon as ok.proof is ready.
            </p>
          </div>
        ) : (
          <>
            <h3
              className="font-[family-name:var(--font-labil-grotesk)] font-medium text-[1.5rem] lg:text-[1.75rem] text-brown-700 leading-tight"
              style={{ fontFeatureSettings: '"salt"' }}
            >
              Get early access
            </h3>
            <p className="font-[family-name:var(--font-stabil-grotesk)] text-base text-brown-400 mt-2 leading-relaxed">
              Leave your email and we'll notify you when ok.proof launches.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <input
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-cream-700 text-brown-700 font-[family-name:var(--font-stabil-grotesk)] text-base px-4 py-3 rounded-xl border-none outline-none focus:ring-2 focus:ring-brown-700/20 placeholder:text-brown-200 transition-shadow"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brown-700 text-white font-[family-name:var(--font-stabil-grotesk)] font-medium text-base px-6 py-3 rounded-full hover:bg-brown-500 transition-colors duration-300 disabled:opacity-50"
              >
                {status === "loading" ? "Joining..." : "Join the waitlist"}
              </button>
            </form>

            {status === "error" && (
              <p className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-orange-400 mt-3">
                Something went wrong. Try again.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
