import Link from 'next/link'
import { notFound } from 'next/navigation'
import BrowserFrame from '@/components/ui/browser-frame'
import { getProject, projects } from '@/content/projects'

type PageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project' }
  return { title: project.name, description: project.summary }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <div className="band band-paper pb-24 pt-16">
      <article className="wrap max-w-4xl">
        <Link href="/projects" className="text-sm font-semibold text-[var(--accent)]">
          ← Projects
        </Link>
        <p className="kicker mt-8">{project.kind}</p>
        <h1 className="h2 mt-3">{project.name}</h1>
        <p className="lede mt-4">{project.summary}</p>
        <div className="mt-8">
          <BrowserFrame src={project.image} alt={project.name} href={project.url} />
        </div>
        <div className="mt-8 space-y-4 text-sm leading-7 text-[var(--muted)]">
          {project.body.map((para) => (
            <p key={para}>{para}</p>
          ))}
        </div>
        <ul className="mt-8 grid gap-2 sm:grid-cols-2">
          {project.work.map((item) => (
            <li key={item} className="panel px-4 py-3 text-sm">
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          {project.url ? (
            <a href={project.url} className="btn btn-primary" target="_blank" rel="noreferrer">
              Visit live site
            </a>
          ) : null}
          {project.secondaryUrl ? (
            <a href={project.secondaryUrl} className="btn btn-ghost" target="_blank" rel="noreferrer">
              {project.secondaryLabel || 'Related site'}
            </a>
          ) : null}
        </div>
      </article>
    </div>
  )
}
