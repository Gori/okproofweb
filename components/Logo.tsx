export function Logo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="0"
        y="24"
        fontFamily="var(--font-abc-gaisyr), serif"
        fontSize="26"
        fontWeight="500"
        letterSpacing="-0.02em"
      >
        all.inn
      </text>
    </svg>
  );
}
