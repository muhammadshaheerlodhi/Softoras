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
        <p className="tech-panel-summary">{group.items.join(' · ')}</p>
        <div className="tech-logo-grid">
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

      <div className="tech-all-strip">
        <p className="tech-all-label">Full ecosystem</p>
        <div className="tech-all-logos">
          {tools.map((tool) => (
            <div key={tool.slug} className="tech-all-logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={tool.logo} alt={tool.name} />
              <span className="tech-all-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
