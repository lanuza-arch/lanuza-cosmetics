type IconProps = { className?: string };

const base = "h-10 w-10 stroke-current";

export function FlaskIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={`${base} ${className ?? ""}`}
    >
      <path d="M19 6h10" />
      <path d="M20 6v12L10 38a4 4 0 0 0 3.5 6h21A4 4 0 0 0 38 38L28 18V6" />
      <path d="M15 30h18" />
      <circle cx="20" cy="35" r="0.8" fill="currentColor" />
      <circle cx="27" cy="38" r="0.8" fill="currentColor" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={`${base} ${className ?? ""}`}
    >
      <circle cx="24" cy="24" r="18" />
      <ellipse cx="24" cy="24" rx="9" ry="18" />
      <path d="M6 24h36" />
      <path d="M9 14h30M9 34h30" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={`${base} ${className ?? ""}`}
    >
      <path d="M4 22l6-6 8 4 6-4 6 4 8-4 6 6" />
      <path d="M10 16v14l10 6 4-4 4 4 10-6V16" />
      <path d="M18 28l4-4 4 4 4-4" />
    </svg>
  );
}

export function LightbulbIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={`${base} ${className ?? ""}`}
    >
      <path d="M24 6v4" />
      <path d="M10 12l4 4" />
      <path d="M38 12l-4 4" />
      <path d="M24 18c-5.5 0-10 4.5-10 10 0 4 2 7 5 9v5h10v-5c3-2 5-5 5-9 0-5.5-4.5-10-10-10z" />
      <path d="M19 42h10" />
      <path d="M21 46h6" />
    </svg>
  );
}

export function LayersIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={`${base} ${className ?? ""}`}
    >
      <path d="M24 6l18 10-18 10L6 16z" />
      <path d="M6 24l18 10 18-10" />
      <path d="M6 32l18 10 18-10" />
    </svg>
  );
}

export function GearIcon({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      strokeWidth="1"
      strokeLinecap="square"
      strokeLinejoin="miter"
      aria-hidden
      className={`${base} ${className ?? ""}`}
    >
      <circle cx="24" cy="24" r="7" />
      <path d="M24 8v3" />
      <path d="M24 37v3" />
      <path d="M9 24h3" />
      <path d="M36 24h3" />
      <path d="M13.5 13.5l2 2" />
      <path d="M32.5 32.5l2 2" />
      <path d="M13.5 34.5l2-2" />
      <path d="M32.5 15.5l2-2" />
    </svg>
  );
}
