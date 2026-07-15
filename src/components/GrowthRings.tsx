// Treezio's signature mark. Concentric, slightly off-center rings like the
// growth rings of a tree, drawn oldest-to-newest on page load (see globals.css).
export default function GrowthRings({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Tree growth rings"
      fill="none"
    >
      <circle className="ring" cx="200" cy="200" r="18" stroke="#dd9a33" strokeWidth="3" />
      <circle className="ring" cx="203" cy="197" r="46" stroke="#1c3626" strokeWidth="2.5" opacity="0.9" />
      <circle className="ring" cx="197" cy="204" r="74" stroke="#2f5a3d" strokeWidth="2.5" opacity="0.8" />
      <circle className="ring" cx="205" cy="198" r="102" stroke="#1c3626" strokeWidth="2" opacity="0.65" />
      <circle className="ring" cx="196" cy="203" r="130" stroke="#2e7d4f" strokeWidth="2" opacity="0.55" />
      <circle className="ring" cx="204" cy="196" r="156" stroke="#1c3626" strokeWidth="1.5" opacity="0.4" />
      <circle className="ring" cx="198" cy="205" r="178" stroke="#2f5a3d" strokeWidth="1.5" opacity="0.3" />
      <circle className="ring" cx="200" cy="200" r="196" stroke="#1c3626" strokeWidth="1" opacity="0.2" />
    </svg>
  );
}
