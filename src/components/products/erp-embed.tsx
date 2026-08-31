'use client'

import { useEffect, useRef, useState } from 'react'
import { ERP_URL } from '@/content/site'

export default function ErpEmbed() {
  const shellRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const el = shellRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin: '120px' },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={shellRef} className="erp-embed-shell">
      {!loaded ? (
        <div className="erp-embed-loading" aria-hidden>
          <span className="erp-embed-spinner" />
          <p>{shouldLoad ? 'Loading Softoras ERP…' : 'Preparing Softoras ERP…'}</p>
        </div>
      ) : null}
      {shouldLoad ? (
        <iframe
          src={ERP_URL}
          title="Softoras ERP"
          className="erp-embed-frame"
          loading="lazy"
          onLoad={() => setLoaded(true)}
        />
      ) : null}
    </div>
  )
}
