import Link from 'next/link'
import { clientProjects } from '@/content/projects'
import { ERP_PATH } from '@/content/site'
import SectionHeader from '@/components/ui/section-header'
import ProjectCard from '@/components/ui/project-card'

export const metadata = {
  title: 'Projects',
  description: 'Systems built by Softoras: digital products, platforms and business systems for real-world use.',
}

export default function ProjectsPage() {
  return (
    <div className="band band-paper section-y">
      <div className="wrap">
        <SectionHeader
          kicker="Projects"
          title="Systems we've built"
          description="A selection of digital products, platforms and business systems built for real-world use. Client work, separate from Softoras-owned products like ERP."
        />
        <div className="card-grid-2 mt-10">
          {clientProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <p className="mt-10 text-sm text-[var(--muted)]">
          Looking for Softoras ERP?{' '}
          <Link href={ERP_PATH} className="font-semibold text-[var(--accent)]">
            Explore Softoras ERP →
          </Link>
        </p>
      </div>
    </div>
  )
}
