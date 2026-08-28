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
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={700}
        className="shot"
        quality={100}
        unoptimized
        sizes="(min-width: 1180px) 1180px, 100vw"
      />
    </div>
  )

  if (!href) return frame
  return (
    <a href={href} target="_blank" rel="noreferrer" className="block">
      {frame}
    </a>
  )
}
