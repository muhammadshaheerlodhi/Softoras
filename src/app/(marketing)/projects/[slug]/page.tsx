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
  return { title: project.name, description: project.hook }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  return (
    <div className="band band-paper pb-24 pt-16">
      <article className="wrap max-w-5xl">
        <Link href="/projects" className="text-sm font-semibold text-[var(--accent)]">
          ← Projects
        </Link>
        <p className="kicker mt-8">{project.kind}</p>
        <h1 className="display mt-3">{project.hook}</h1>
        <p className="mt-4 text-xl font-semibold">{project.name}</p>
        <p className="lede mt-3">{project.summary}</p>
        <div className="mt-8">
          <BrowserFrame src={project.image} alt={project.name} href={project.url} />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <section className="panel p-6">
            <h2 className="text-lg font-semibold">The problem</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.challenge}</p>
          </section>
          <section className="panel p-6">
            <h2 className="text-lg font-semibold">What we did</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{project.solution}</p>
          </section>
        </div>

        <section className="mt-10">
          <h2 className="h2">Inside the build</h2>
          <div className="mt-6 space-y-5">
            {project.sections.map((item) => (
              <article key={item.heading} className="panel p-6">
                <h3 className="text-lg font-semibold">{item.heading}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold">What shipped</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.work.map((item) => (
              <li key={item} className="panel px-4 py-3 text-sm">
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((tag) => (
            <span key={tag} className="rounded-full border border-[var(--line)] px-3 py-1 text-xs font-semibold">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
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
          <Link href="/contact" className="btn btn-ghost">
            Start a Project
          </Link>
        </div>
      </article>
    </div>
  )
}
