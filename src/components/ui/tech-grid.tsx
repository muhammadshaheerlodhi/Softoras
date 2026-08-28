'use client'

import { useState } from 'react'
import { getToolBySlug, stackGroups, tools } from '@/content/stack'

export default function TechGrid() {
  const [active, setActive] = useState(0)
  const group = stackGroups[active]
  const groupTools = group.tools.map((slug) => getToolBySlug(slug)).filter(Boolean)

  return (
    <div className="tech-ecosystem">
      <div className="tech-tabs" role="tablist">
        {stackGroups.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={active === index}
            className={`tech-tab ${active === index ? 'is-active' : ''}`}
            onClick={() => setActive(index)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="tech-panel card-feature">
        <p className="text-sm leading-6 text-[var(--muted)]">{group.items.join(' · ')}</p>
        <div className="tech-logo-grid mt-5">
          {groupTools.map((tool) =>
            tool ? (
              <article key={tool.slug} className="tech-logo-tile">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tool.logo} alt={tool.name} className="tech-logo-img" />
                <span className="tech-logo-name">{tool.name}</span>
              </article>
            ) : null,
          )}
        </div>
      </div>

      <div className="tech-all-strip mt-6">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted)]">
          Full ecosystem
        </p>
        <div className="tech-all-logos">
          {tools.map((tool) => (
            <div key={tool.slug} className="tech-all-logo" title={tool.name}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tool.logo} alt={tool.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
