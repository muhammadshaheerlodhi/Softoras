'use client'

import { useState } from 'react'
import { ERP_URL } from '@/content/site'

export default function ErpEmbed() {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="erp-embed-shell">
      {!loaded ? (
        <div className="erp-embed-loading" aria-hidden>
          <span className="erp-embed-spinner" />
          <p>Loading Softoras ERP…</p>
        </div>
      ) : null}
      <iframe
        src={ERP_URL}
        title="Softoras ERP"
        className="erp-embed-frame"
        loading="eager"
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}
