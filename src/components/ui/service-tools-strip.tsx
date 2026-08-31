type ServiceToolsStripProps = {
  tools: string[]
}

export default function ServiceToolsStrip({ tools }: ServiceToolsStripProps) {
  return (
    <article className="service-tools-strip card-feature">
      <div className="service-tools-strip-head">
        <h2 className="card-heading-sm">Tools we use</h2>
        <p className="service-tools-strip-desc">Technologies and platforms we use to deliver this service.</p>
      </div>
      <div className="service-tools-strip-row" role="list" aria-label="Tools and technologies">
        {tools.map((tool) => (
          <span key={tool} className="service-tool-tag" role="listitem">
            {tool}
          </span>
        ))}
      </div>
    </article>
  )
}
