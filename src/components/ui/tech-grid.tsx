import { tools } from '@/content/stack'

export default function TechGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {tools.map((tool) => (
        <article key={tool.name} className="tech-tile">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={tool.logo} alt="" className="h-7 w-7 object-contain" />
          <span className="text-sm font-semibold">{tool.name}</span>
        </article>
      ))}
    </div>
  )
}

