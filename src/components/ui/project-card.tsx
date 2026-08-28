import Link from 'next/link'
import Image from 'next/image'
import type { Project } from '@/content/projects'

export default function ProjectCard({ project }: { project: Project }) {
  const frame = (
    <div className="project-card-media browser-lift">
      <div className="browser-bar">
        <span className="dot" />
        <span className="dot" />
        <span className="dot" />
        {project.url ? (
          <span className="ml-2 truncate text-[11px] text-[var(--muted)]">
            {project.url.replace(/^https?:\/\//, '')}
          </span>
        ) : null}
      </div>
      <div className="project-shot-wrap">
        <Image
          src={project.image}
          alt={project.name}
          width={1440}
          height={900}
          className="project-shot"
          unoptimized
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>
    </div>
  )

  return (
    <article className="card-project">
      {project.url ? (
        <a href={project.url} target="_blank" rel="noreferrer" className="block">
          {frame}
        </a>
      ) : (
        frame
      )}
      <div className="card-project-body">
        <p className="card-project-kind">{project.kind}</p>
        <h3 className="mt-1.5 text-xl font-semibold">{project.name}</h3>
        <p className="mt-2 text-sm font-medium leading-6">{project.hook}</p>
        <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/projects/${project.slug}`} className="card-project-link">
          Read case study →
        </Link>
      </div>
    </article>
  )
}
