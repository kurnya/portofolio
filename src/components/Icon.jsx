export default function Icon({ name }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    html: (
      <svg {...commonProps}>
        <path d="M5 3h14l-1.3 15.2L12 21l-5.7-2.8L5 3Z" />
        <path d="m8.5 8 .3 3.5h6.2l-.5 4.5-2.5 1.1-2.4-1-.1-1.4" />
        <path d="M15.2 8H8.3" />
      </svg>
    ),
    css: (
      <svg {...commonProps}>
        <path d="M5 3h14l-1.3 15.2L12 21l-5.7-2.8L5 3Z" />
        <path d="M8.2 8h7.4l-.3 3H9l.2 2.2h5.8l-.4 3-2.6 1.1-2.5-1.1" />
      </svg>
    ),
    javascript: (
      <svg {...commonProps}>
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M10 9v6c0 1-1 2-2 2" />
        <path d="M14 14c.3 1 1 2 2.5 2 1.2 0 2-.6 2-1.5 0-2-4.5-.9-4.5-3.8 0-1.4 1.2-2.4 3-2.4 1.6 0 2.6.7 3 2" />
      </svg>
    ),
    python: (
      <svg {...commonProps}>
        <path d="M8 5.5c0-1.4 1.1-2.5 2.5-2.5h3c1.4 0 2.5 1.1 2.5 2.5V9H9.5A2.5 2.5 0 0 0 7 11.5V14H5.5A2.5 2.5 0 0 1 3 11.5v-2C3 7 5 5.5 8 5.5Z" />
        <path d="M16 18.5c0 1.4-1.1 2.5-2.5 2.5h-3C9.1 21 8 19.9 8 18.5V15h6.5a2.5 2.5 0 0 0 2.5-2.5V10h1.5A2.5 2.5 0 0 1 21 12.5v2c0 2.5-2 4-5 4Z" />
        <circle cx="9.5" cy="7.5" r=".5" fill="currentColor" stroke="none" />
        <circle cx="14.5" cy="16.5" r=".5" fill="currentColor" stroke="none" />
      </svg>
    ),
    laravel: (
      <svg {...commonProps}>
        <path d="m4 8 4-2 4 2v4l-4 2-4-2V8Z" />
        <path d="m12 8 4-2 4 2v4l-4 2-4-2" />
        <path d="M8 14v4l4 2 4-2v-4" />
      </svg>
    ),
    flutter: (
      <svg {...commonProps}>
        <path d="M7 16.5 13.5 10 17 13.5 10.5 20 7 16.5Z" />
        <path d="M7 9.5 12.5 4H17l-7.5 7.5H7Z" />
        <path d="m10.5 13 2-2 4.5 4.5H12.5L10.5 13Z" />
      </svg>
    ),
    github: (
      <svg {...commonProps}>
        <path d="M9 19c-4 1.2-4-2-6-2" />
        <path d="M15 22v-3.4a3 3 0 0 0-.9-2.3c3-.3 6.1-1.5 6.1-6.7A5.2 5.2 0 0 0 18.8 6 4.8 4.8 0 0 0 18.7 2S17.5 1.7 15 3.4a13.4 13.4 0 0 0-6 0C6.5 1.7 5.3 2 5.3 2a4.8 4.8 0 0 0-.1 4A5.2 5.2 0 0 0 3.8 9.6c0 5.1 3.1 6.3 6.1 6.7A3 3 0 0 0 9 18.6V22" />
      </svg>
    ),
    linkedin: (
      <svg {...commonProps}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" rx="1" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    whatsapp: (
      <svg {...commonProps}>
        <path d="M20 11.5A8.5 8.5 0 0 1 7.4 19l-3.4 1 1.1-3.2A8.5 8.5 0 1 1 20 11.5Z" />
        <path d="M9 9.5c.4 2.2 2.3 4.1 4.5 4.5" />
        <path d="M13 14c.8-.1 1.6-.5 2.1-1.1" />
      </svg>
    ),
  };

  return icons[name] ?? null;
}
