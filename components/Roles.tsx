"use client";

import { SectionHeading } from "@/components/SectionHeading";
import { useIntersectionObserver } from "@/lib/hooks/useIntersectionObserver";

const roles = [
  {
    id: "developers",
    label: "Developers",
    oneLiner: "Can they ship, or just talk about shipping?",
    color: "bg-green-400",
    templates: [
      "Fix a broken API with 3 failing endpoints",
      "Build a dashboard from an empty project",
      "Refactor a 400-line component into clean modules",
    ],
  },
  {
    id: "product-managers",
    label: "Product",
    oneLiner: "Can they turn messy inputs into a clear plan?",
    color: "bg-yellow-400",
    templates: [
      "Write a product spec from raw customer research",
      "Build a competitive analysis from a brief",
      "Create a launch plan page from a spec",
    ],
  },
  {
    id: "designers",
    label: "Designers",
    oneLiner: "Can they spot what's broken and make it better?",
    color: "bg-pink-400",
    templates: [
      "Redesign a checkout flow with 68% drop-off",
      "Build a design system from inconsistent components",
      "Fix a page that scores 34 on accessibility",
    ],
  },
  {
    id: "leaders",
    label: "Leaders",
    oneLiner: "Can they find the signal in the noise?",
    color: "bg-blue-500",
    templates: [
      "Build a board update page from raw metrics",
      "Write a vendor evaluation from 4 proposals",
      "Create a strategy memo from messy data",
    ],
  },
];

function RoleCard({ role, index }: { role: typeof roles[number]; index: number }) {
  const { ref, isVisible: visible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <div
      ref={ref}
      className={`${role.color} rounded-2xl lg:rounded-3xl p-8 lg:p-12 flex flex-col`}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(2rem)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
        transitionDelay: `${index * 80}ms`,
      }}
    >
      <h3
        className="font-[family-name:var(--font-labil-grotesk)] font-medium text-[2rem] lg:text-[3.5rem] text-brown-700 leading-[1] tracking-[-0.01em]"
        style={{ fontFeatureSettings: '"salt"' }}
      >
        {role.label}
      </h3>

      <p className="font-[family-name:var(--font-stabil-grotesk)] text-base lg:text-lg text-brown-700/60 mt-3 lg:mt-4">
        {role.oneLiner}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto pt-6 lg:pt-8">
        {role.templates.map((tpl, i) => (
          <span
            key={i}
            className="bg-brown-700/10 text-brown-700 font-[family-name:var(--font-stabil-grotesk)] text-sm px-4 py-2 rounded-full"
            style={{
              opacity: visible ? 1 : 0,
              transition: "opacity 0.4s ease",
              transitionDelay: `${300 + i * 80}ms`,
            }}
          >
            {tpl}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Roles() {
  return (
    <section id="roles" className="pt-20 lg:pt-32 pb-4 lg:pb-6 px-5 lg:px-10">
      <div className="max-w-[64rem] mx-auto">
        <SectionHeading label="Templates" title="Tests for every role" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {roles.map((role, i) => (
            <RoleCard key={role.id} role={role} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
