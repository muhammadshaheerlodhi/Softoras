import { clientProjects } from '@/content/projects'
import SectionHeader from '@/components/ui/section-header'
import ProjectCard from '@/components/ui/project-card'

export const metadata = {
  title: 'Projects',
  description: 'Selected Softoras systems and sites with live URLs.',
}

export default function ProjectsPage() {
  return (
    <div className="band band-paper section-y">
      <div className="wrap">
        <SectionHeader
          kicker="Projects"
          title="Work you can open"
          description="Live sites and client systems. Click a preview to open the real URL."
        />
        <div className="card-grid-2 mt-10">
          {clientProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--muted)]">
          Looking for Softoras ERP?{' '}
          <a href="https://softoras-erp.vercel.app" target="_blank" rel="noreferrer" className="font-semibold text-[var(--accent)]">
            Open the flagship product →
          </a>
        </p>
      </div>
    </div>
  )
}
