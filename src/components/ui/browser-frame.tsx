import Image from 'next/image'

export default function BrowserFrame({
  src,
  alt,
  href,
}: {
  src: string
  alt: string
  href?: string
}) {
  const frame = (
    <div className="browser">
      <div className="browser-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        {href ? <span className="ml-2 truncate text-[11px] text-[var(--muted)]">{href.replace(/^https?:\/\//, '')}</span> : null}
      </div>
      <div className="relative aspect-[16/10] bg-[var(--bg-alt)]">
        <Image src={src} alt={alt} fill className="object-cover object-top" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
    </div>
  )

  if (!href) return frame
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {frame}
    </a>
  )
}
