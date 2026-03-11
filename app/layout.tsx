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
  title: "ok.proof — Hire people who get things done with AI",
  description:
    "Give candidates a real problem and an AI model. Watch every prompt, decision, and iteration. Replace take-homes with 45-minute sessions that show how people actually work.",
  openGraph: {
    title: "Hire those who get things done with AI",
    description:
      "Give candidates a real task and the latest AI model. See exactly how they work.",
    siteName: "ok.proof",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire those who get things done with AI",
    description:
      "Give candidates a real task and the latest AI model. See exactly how they work.",
  },
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
