export default function ContactVisual() {
  return (
    <div className="contact-visual" aria-hidden>
      <svg viewBox="0 0 420 280" className="contact-visual-svg" fill="none">
        <defs>
          <linearGradient id="contact-glow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0.05" />
          </linearGradient>
        </defs>
        <rect x="8" y="8" width="404" height="264" rx="20" stroke="var(--line)" strokeWidth="1.5" fill="url(#contact-glow)" />
        <circle cx="72" cy="72" r="28" stroke="var(--accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--accent) 12%, var(--panel))" />
        <circle cx="210" cy="56" r="22" stroke="var(--accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--accent) 10%, var(--panel))" />
        <circle cx="348" cy="88" r="26" stroke="var(--accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--accent) 14%, var(--panel))" />
        <circle cx="120" cy="168" r="24" stroke="var(--accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--accent) 10%, var(--panel))" />
        <circle cx="280" cy="176" r="30" stroke="var(--accent)" strokeWidth="1.5" fill="color-mix(in srgb, var(--accent) 16%, var(--panel))" />
        <path d="M72 72 L210 56 L348 88" stroke="var(--accent)" strokeOpacity="0.35" strokeWidth="1.2" />
        <path d="M72 72 L120 168 L280 176" stroke="var(--accent)" strokeOpacity="0.28" strokeWidth="1.2" />
        <path d="M210 56 L280 176 L348 88" stroke="var(--accent)" strokeOpacity="0.28" strokeWidth="1.2" />
        <rect x="48" y="214" width="324" height="36" rx="10" stroke="var(--line)" fill="color-mix(in srgb, var(--panel) 90%, transparent)" />
        <text x="64" y="237" fill="var(--accent)" fontSize="11" fontWeight="700" fontFamily="ui-monospace, monospace">
          POST /inquiry
        </text>
        <text x="168" y="237" fill="var(--muted)" fontSize="11" fontFamily="ui-monospace, monospace">
          CRM → automation → cloud
        </text>
      </svg>
      <div className="contact-visual-stats">
        <div className="contact-visual-stat">
          <strong>8+</strong>
          <span>Live projects</span>
        </div>
        <div className="contact-visual-stat">
          <strong>2</strong>
          <span>Global offices</span>
        </div>
      </div>
    </div>
  )
}
