export function SectionHeading({ label, title, center }: { label: string; title: string; center?: boolean }) {
  return (
    <div className={`mb-10 lg:mb-16 ${center ? "text-center" : ""}`}>
      <span className="block font-[family-name:var(--font-abc-gaisyr)] text-[1.25rem] lg:text-[1.5rem] font-medium text-brown-700 mb-1">
        {label}
      </span>
      <h2 className="font-[family-name:var(--font-stabil-grotesk)] font-medium text-[2rem] lg:text-[3rem] leading-[1.1] text-brown-700">
        {title}
      </h2>
    </div>
  );
}
