// The Treezio header lockup, a mini growth-rings mark before the wordmark.
// Chosen over a rings-as-the-final-o treatment after prototyping both.
// The mark reuses cleanly as a favicon and social avatar.
export default function Wordmark() {
  return (
    <a
      href="#top"
      className="group inline-flex items-center gap-2.5 font-display text-3xl font-bold tracking-tight text-pine-900"
    >
      <svg
        viewBox="0 0 40 40"
        className="h-[1.35em] w-[1.35em] transition-transform duration-300 group-hover:scale-110"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="4.5" stroke="#dd9a33" strokeWidth="3" />
        <circle cx="20.8" cy="19.2" r="11" stroke="#1c3626" strokeWidth="3" />
        <circle cx="19.2" cy="20.6" r="17" stroke="#2f5a3d" strokeWidth="2.5" opacity="0.85" />
      </svg>
      Treezio
    </a>
  );
}
