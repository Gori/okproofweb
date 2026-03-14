"use client";

import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

/* ── Mockup: VS Code-style editor with a GitHub issue ── */
function CodeMockup() {
  return (
    <div className="bg-[#1a0d12] rounded-lg overflow-hidden ring-1 ring-white/[0.06]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <span className="ml-2 text-white/25 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">api/routes/checkout.ts</span>
      </div>
      {/* Editor content */}
      <div className="p-3 font-mono text-[0.55rem] leading-[1.6] space-y-0 flex-1 overflow-hidden">
        <div><span className="text-white/20 w-4 inline-block">14</span> <span className="text-pink-400/70">async</span> <span className="text-blue-500/70">function</span> <span className="text-green-400/70">processCheckout</span><span className="text-white/30">(req) {"{"}</span></div>
        <div><span className="text-white/20 w-4 inline-block">15</span> <span className="text-white/30">  </span><span className="text-purple-400/70">const</span> <span className="text-white/50">cart</span> <span className="text-white/30">= </span><span className="text-pink-400/70">await</span> <span className="text-white/50">getCart</span><span className="text-white/30">(req.id)</span></div>
        <div className="bg-orange-400/10 -mx-3 px-3 border-l-2 border-orange-400/60"><span className="text-white/20 w-4 inline-block">16</span> <span className="text-white/30">  </span><span className="text-orange-400/60">// BUG: returns null for guest users</span></div>
        <div><span className="text-white/20 w-4 inline-block">17</span> <span className="text-white/30">  </span><span className="text-purple-400/70">const</span> <span className="text-white/50">total</span> <span className="text-white/30">= </span><span className="text-white/50">cart</span><span className="text-white/30">.items.reduce(</span><span className="text-white/30">...)</span></div>
        <div><span className="text-white/20 w-4 inline-block">18</span> <span className="text-white/30">  </span><span className="text-pink-400/70">return</span> <span className="text-white/50">charge</span><span className="text-white/30">(total)</span></div>
        <div><span className="text-white/20 w-4 inline-block">19</span> <span className="text-white/30">{"}"}</span></div>
      </div>
    </div>
  );
}

/* ── Mockup: Figma-style design tool ── */
function DesignMockup() {
  return (
    <div className="bg-[#1a0d12] rounded-lg overflow-hidden ring-1 ring-white/[0.06]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <span className="ml-2 text-white/25 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Checkout — Redesign v2</span>
      </div>
      {/* Canvas area */}
      <div className="p-3 flex gap-2 flex-1 overflow-hidden">
        {/* Phone frame */}
        <div className="w-[45%] bg-white/[0.03] rounded-md p-2 ring-1 ring-white/[0.04]">
          <div className="bg-white/[0.06] rounded h-3 w-3/4 mb-2" />
          <div className="space-y-1.5">
            <div className="bg-white/[0.04] rounded h-6 w-full" />
            <div className="bg-white/[0.04] rounded h-6 w-full" />
            <div className="flex gap-1">
              <div className="bg-white/[0.04] rounded h-6 flex-1" />
              <div className="bg-white/[0.04] rounded h-6 flex-1" />
            </div>
            <div className="bg-pink-400/20 rounded h-5 w-full mt-1 flex items-center justify-center">
              <span className="text-pink-400/50 text-[0.4rem] font-[family-name:var(--font-stabil-grotesk)]">Pay now</span>
            </div>
          </div>
          {/* Annotation */}
          <div className="mt-1.5 flex items-center gap-1">
            <div className="w-1 h-1 rounded-full bg-orange-400/70" />
            <span className="text-orange-400/50 text-[0.35rem] font-[family-name:var(--font-stabil-grotesk)]">68% drop-off here</span>
          </div>
        </div>
        {/* Sidebar panel */}
        <div className="flex-1 space-y-2">
          <div className="bg-white/[0.03] rounded-md p-2 ring-1 ring-white/[0.04]">
            <span className="text-white/20 text-[0.4rem] font-[family-name:var(--font-stabil-grotesk)]">Layers</span>
            <div className="space-y-1 mt-1">
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-sm bg-blue-500/30" /><div className="bg-white/[0.06] rounded h-1.5 flex-1" /></div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-sm bg-pink-400/30" /><div className="bg-white/[0.06] rounded h-1.5 w-3/4" /></div>
              <div className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-sm bg-green-400/30" /><div className="bg-white/[0.06] rounded h-1.5 w-1/2" /></div>
            </div>
          </div>
          <div className="bg-white/[0.03] rounded-md p-2 ring-1 ring-white/[0.04]">
            <span className="text-white/20 text-[0.4rem] font-[family-name:var(--font-stabil-grotesk)]">Properties</span>
            <div className="grid grid-cols-2 gap-1 mt-1">
              <div className="bg-white/[0.06] rounded h-2.5" />
              <div className="bg-white/[0.06] rounded h-2.5" />
              <div className="bg-white/[0.06] rounded h-2.5" />
              <div className="bg-white/[0.06] rounded h-2.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Mockup: Spreadsheet / data view ── */
function DataMockup() {
  const rows = [
    { label: "Enterprise", vals: ["$48k", "12", "Q2"], highlight: false },
    { label: "Growth", vals: ["$124k", "38", "Q1"], highlight: true },
    { label: "Starter", vals: ["$8k", "204", "Q3"], highlight: false },
    { label: "Agency", vals: ["$31k", "7", "Q2"], highlight: false },
  ];
  return (
    <div className="bg-[#1a0d12] rounded-lg overflow-hidden ring-1 ring-white/[0.06]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <span className="ml-2 text-white/25 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Q1 Revenue by Segment.csv</span>
      </div>
      {/* Table */}
      <div className="p-2 flex-1 overflow-hidden">
        <table className="w-full text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">
          <thead>
            <tr className="text-white/25">
              <th className="text-left font-normal px-2 py-1">Segment</th>
              <th className="text-right font-normal px-2 py-1">ARR</th>
              <th className="text-right font-normal px-2 py-1">Accts</th>
              <th className="text-right font-normal px-2 py-1">Renewal</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className={r.highlight ? "bg-yellow-400/8" : ""}>
                <td className="text-white/50 px-2 py-1">{r.label}</td>
                <td className="text-white/40 text-right px-2 py-1">{r.vals[0]}</td>
                <td className="text-white/40 text-right px-2 py-1">{r.vals[1]}</td>
                <td className="text-white/40 text-right px-2 py-1">{r.vals[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Mini chart */}
        <div className="mt-2 px-2 flex items-end gap-[3px] h-8">
          {[35, 55, 40, 75, 60, 90, 50, 70, 85, 45, 65, 80].map((h, i) => (
            <div key={i} className="flex-1 bg-yellow-400/20 rounded-sm" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Mockup: Document / Google Docs style ── */
function DocMockup() {
  return (
    <div className="bg-[#1a0d12] rounded-lg overflow-hidden ring-1 ring-white/[0.06]">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <div className="w-2 h-2 rounded-full bg-white/10" />
        <span className="ml-2 text-white/25 text-[0.5rem] font-[family-name:var(--font-stabil-grotesk)]">Vendor Evaluation — Draft</span>
      </div>
      {/* Doc content */}
      <div className="p-4 space-y-2.5 flex-1 overflow-hidden">
        <div>
          <div className="bg-white/[0.08] rounded h-2 w-2/3 mb-1.5" />
          <div className="bg-white/[0.04] rounded h-1.5 w-full" />
          <div className="bg-white/[0.04] rounded h-1.5 w-full mt-0.5" />
          <div className="bg-white/[0.04] rounded h-1.5 w-4/5 mt-0.5" />
        </div>
        {/* Highlighted comment */}
        <div className="bg-blue-500/8 border-l-2 border-blue-500/40 pl-2 py-1">
          <div className="bg-white/[0.04] rounded h-1.5 w-full" />
          <div className="bg-white/[0.04] rounded h-1.5 w-3/4 mt-0.5" />
          {/* Comment bubble */}
          <div className="mt-1.5 flex items-start gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500/30 flex-shrink-0 mt-0.5" />
            <div className="bg-white/[0.03] rounded px-1.5 py-1 ring-1 ring-white/[0.04]">
              <span className="text-blue-500/50 text-[0.35rem] font-[family-name:var(--font-stabil-grotesk)]">This section needs a clearer recommendation</span>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-white/[0.04] rounded h-1.5 w-full" />
          <div className="bg-white/[0.04] rounded h-1.5 w-5/6 mt-0.5" />
        </div>
      </div>
    </div>
  );
}

const examples = [
  {
    title: "Your codebase",
    description: "A real bug from your issue tracker. A feature from your roadmap.",
    color: "bg-green-400",
    mockup: <CodeMockup />,
  },
  {
    title: "Your designs",
    description: "A screen that needs rethinking. A flow with real drop-off data.",
    color: "bg-pink-400",
    mockup: <DesignMockup />,
  },
  {
    title: "Your data",
    description: "A messy spreadsheet that needs a story. A dashboard that needs building.",
    color: "bg-yellow-400",
    mockup: <DataMockup />,
  },
  {
    title: "Your documents",
    description: "A brief that needs sharpening. A proposal that needs structure.",
    color: "bg-blue-500",
    mockup: <DocMockup />,
  },
];

export function BringYourOwn() {
  const { ref, isVisible: visible } = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section id="your-product" ref={ref} className="px-5 lg:px-10 pt-0 pb-20 lg:pb-32">
      <div className="max-w-[64rem] mx-auto bg-brown-700 rounded-2xl lg:rounded-3xl overflow-hidden relative">
        {/* Gradient glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/8 via-transparent to-green-400/8 pointer-events-none" />

        <div className="relative p-8 lg:p-16">
          {/* Headline */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(2rem)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <h2
              className="font-[family-name:var(--font-labil-grotesk)] font-medium text-[2.5rem] lg:text-[4.5rem] text-white leading-[1] tracking-[-0.02em]"
              style={{ fontFeatureSettings: '"salt"' }}
            >
              Or bring your own product.
            </h2>

            <p className="font-[family-name:var(--font-stabil-grotesk)] text-base lg:text-lg text-white/70 mt-4 lg:mt-6 leading-relaxed">
              Upload starter files from your actual product. Candidates open the sandbox with your code, your data, or your docs already inside.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mt-10 lg:mt-14">
            {examples.map((ex, i) => (
              <div
                key={ex.title}
                className="group relative rounded-xl lg:rounded-2xl bg-white/[0.04] ring-1 ring-white/[0.06] hover:bg-white/[0.07] transition-colors duration-300 overflow-hidden"
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(1.5rem)",
                  transition: "opacity 0.5s ease, transform 0.5s ease, background-color 0.3s ease",
                  transitionDelay: `${300 + i * 100}ms`,
                }}
              >
                {/* Mockup illustration — fixed height so all cards match */}
                <div className="p-4 pb-0 lg:p-5 lg:pb-0">
                  <div className="h-[10rem] lg:h-[12rem] [&>div]:h-full [&>div]:flex [&>div]:flex-col">
                    {ex.mockup}
                  </div>
                </div>

                {/* Text */}
                <div className="p-5 lg:p-6 pt-4 lg:pt-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className={`w-2 h-2 rounded-full ${ex.color}`} />
                    <h3 className="font-[family-name:var(--font-labil-grotesk)] font-medium text-[1.125rem] lg:text-[1.25rem] text-white leading-tight tracking-[-0.01em]" style={{ fontFeatureSettings: '"salt"' }}>
                      {ex.title}
                    </h3>
                  </div>
                  <p className="font-[family-name:var(--font-stabil-grotesk)] text-sm text-white/60 leading-relaxed">
                    {ex.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
