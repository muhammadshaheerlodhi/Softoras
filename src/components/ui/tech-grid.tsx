import { stackGroups, tools } from '@/content/stack'

export default function TechGrid() {
  return (
    <div className="space-y-10">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {tools.map((tool) => (
          <article key={tool.name} className="tech-tile">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={tool.logo} alt="" className="h-7 w-7 shrink-0 object-contain" />
            <span className="text-sm font-semibold leading-tight">{tool.name}</span>
          </article>
        ))}
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {stackGroups.map((group) => (
          <article key={group.title} className="panel card-accent p-5">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--accent)]">{group.title}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{group.items.join(' · ')}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
