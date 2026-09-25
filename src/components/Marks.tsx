export function Arrow({
  diagonal = false,
  className = "",
}: {
  diagonal?: boolean;
  className?: string;
}) {
  return (
    <svg
      className={`arrow ${className}`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={diagonal ? "M5 19 19 5M5 5h14v14" : "M4 12h16M13 5l7 7-7 7"}
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function Monogram() {
  return (
    <svg viewBox="0 0 48 40" fill="none" aria-hidden="true">
      <path
        d="M4 36V19C4 10.7 10.7 4 19 4s15 6.7 15 15v17M14 36V19a5 5 0 0 1 10 0v17M44 4v22c0 5.5-4.5 10-10 10"
        stroke="currentColor"
        strokeWidth="5.5"
      />
    </svg>
  );
}
