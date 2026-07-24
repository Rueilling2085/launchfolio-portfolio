type IconProps = { size?: number; className?: string };

export function LinkedInIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 8.98h4v12.02H3V8.98zm7 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1v6.34h-4v-5.62c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.15 1.46-2.15 2.96v5.72h-4V8.98z" />
    </svg>
  );
}

export function DribbbleIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <circle cx="12" cy="12" r="9" />
      <path d="M4 9c4.5 1.6 9.5 1.6 16 0M4.5 16.5c3-4 6.5-8 12-11.5M6.5 20c2-5 4.8-10.5 8-15" />
    </svg>
  );
}

export function BehanceIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 6h6.3c3.7 0 4.9 1.8 4.9 3.8 0 1.4-.6 2.4-1.8 3 1.6.5 2.5 1.7 2.5 3.5 0 2.5-1.9 4-5.3 4H2V6zm3 5.4h2.8c1.2 0 2-.5 2-1.6 0-1.1-.8-1.5-2-1.5H5v3.1zm0 5.4h3c1.4 0 2.3-.6 2.3-1.8 0-1.2-.8-1.8-2.3-1.8H5v3.6zM16.6 8.4h5.4v1.3h-5.4V8.4zM22 15.4c-.1-2.8-1.7-4.9-4.6-4.9-2.9 0-4.9 2-4.9 4.9 0 3 1.9 4.9 5 4.9 2 0 3.6-.9 4.3-2.6h-2.5c-.3.6-1 .9-1.8.9-1.3 0-2.1-.8-2.2-2.2H22zm-6.6-1.6c.2-1.1.9-1.8 2-1.8 1 0 1.8.8 1.9 1.8h-3.9z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function XIcon({ size = 16, className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 3l7.5 9.4L3.2 21h2.4l6.1-6.9 4.9 6.9H21l-7.8-9.9L20.4 3H18l-5.7 6.4L7.4 3H3z" />
    </svg>
  );
}
