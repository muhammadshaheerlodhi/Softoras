import Link from 'next/link'
import BrowserFrame from '@/components/ui/browser-frame'
import { projects } from '@/content/projects'

export const metadata = {
  title: 'Projects',
  description: 'Selected Softoras systems and sites with live URLs.',
}

export default function ProjectsPage() {
  return (
    <div className="band band-paper pb-24 pt-16">
      <div className="wrap">
        <p className="kicker">Projects</p>
        <h1 className="h2 mt-4">Work you can open</h1>
        <p className="lede mt-4">Live sites and systems. Click a shot to open the real URL.</p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.slug} className="panel panel-hover space-y-4 p-4">
              <BrowserFrame src={project.image} alt={project.name} href={project.url} />
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--accent)]">{project.kind}</p>
              <h2 className="text-2xl font-semibold">{project.name}</h2>
              <p className="text-sm font-semibold">{project.hook}</p>
              <p className="text-sm leading-7 text-[var(--muted)]">{project.summary}</p>
              <Link href={`/projects/${project.slug}`} className="inline-block text-sm font-semibold text-[var(--accent)]">
                Read the case
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
