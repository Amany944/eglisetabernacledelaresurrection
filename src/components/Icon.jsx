const PATHS = {
  menu: (
    <>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </>
  ),
  close: (
    <>
      <path d="M6 6l12 12M18 6L6 18" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 006 6L15 14l5 2v3a2 2 0 01-2 2A15 15 0 013 6a2 2 0 012-2z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5l8.5 6 8.5-6" />
    </>
  ),
  'map-pin': (
    <>
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20a6 6 0 0112 0" />
      <path d="M16 5.5a3 3 0 010 5.5M18 20a6 6 0 00-2-4.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4a1 1 0 001 1h3l7 4V5L8 9H5a1 1 0 00-1 1z" />
      <path d="M8 15v4a1 1 0 001 1h1" />
    </>
  ),
  'heart-hands': (
    <>
      <path d="M12 20s-7-4.4-7-9a4 4 0 017-2.6A4 4 0 0119 11c0 4.6-7 9-7 9z" />
      <path d="M9.5 10.5l1.6 1.6 3-3" />
    </>
  ),
  'user-check': (
    <>
      <circle cx="10" cy="8" r="3" />
      <path d="M4 20a6 6 0 0112 0" />
      <path d="M16 12.5l2 2 3.5-3.5" />
    </>
  ),
  check: (
    <>
      <path d="M4.5 12.5l5 5 10-11" />
    </>
  ),
  'alert-circle': (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5v5.5M12 16.3v.2" />
    </>
  ),
  trash: (
    <>
      <path d="M4 7h16M10 4h4M6 7l1 13h10l1-13M10 11v6M14 11v6" />
    </>
  ),
  'arrow-right': (
    <>
      <path d="M4 12h15M13 6l6 6-6 6" />
    </>
  ),
  star: (
    <>
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z" />
    </>
  ),
}

export default function Icon({ name, className = 'h-5 w-5' }) {
  const path = PATHS[name]
  if (!path) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {path}
    </svg>
  )
}
