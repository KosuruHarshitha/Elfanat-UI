export function Logo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 4C8.5 14 6 27 20 38C16.5 26 16.8 13 20 4Z"
        fill="#6B5344"
      />
      <path
        d="M20 4C31.5 14 34 27 20 38C23.5 26 23.2 13 20 4Z"
        fill="#C4A574"
      />
    </svg>
  )
}

export function LightbulbIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 5a7 7 0 0 0-4 12.8V20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.2A7 7 0 0 0 16 5Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M13 24h6M14 27h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function PeopleIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="11" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M9.5 23c.8-3.2 3.3-5 6.5-5s5.7 1.8 6.5 5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="9" cy="12.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5.8 22.5c.5-2.2 1.9-3.6 4-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="23" cy="12.5" r="2.4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M26.2 22.5c-.5-2.2-1.9-3.6-4-4.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function LeafIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 24C8 14 14 7 25 7 25 18 19 25 8 24Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M12 20c3-3 7-6 12-8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function EnvelopeIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        d="M24 6v6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M16 8l2.5 5M32 8l-2.5 5M10 13l4 4M38 13l-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="10"
        y="18"
        width="28"
        height="20"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 20.5 24 29l12-8.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}
