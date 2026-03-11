import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { WaitlistProvider } from "@/components/WaitlistProvider";

const abcGaisyr = localFont({
  src: "../public/fonts/ABCGaisyr-Medium.woff2",
  variable: "--font-abc-gaisyr",
  weight: "500",
  display: "swap",
});

const labilGrotesk = localFont({
  src: "../public/fonts/LabilGrotesk-Medium.woff2",
  variable: "--font-labil-grotesk",
  weight: "500",
  display: "swap",
});

const stabilGrotesk = localFont({
  src: "../public/fonts/StabilGroteskLite-Variable.woff2",
  variable: "--font-stabil-grotesk",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ok.proof — Hire engineers who can build with AI",
  description:
    "A coding test where candidates use AI to build real projects. You watch every prompt, decision, and iteration. Replace outdated take-homes in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${abcGaisyr.variable} ${labilGrotesk.variable} ${stabilGrotesk.variable}`}
      >
        <WaitlistProvider>
          {children}
        </WaitlistProvider>
      </body>
    </html>
  );
}
