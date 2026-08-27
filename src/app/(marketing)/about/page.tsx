import Link from 'next/link'
import { ERP_URL } from '@/content/site'

const skills = [
  'GoHighLevel & CRM systems',
  'Automation workflows',
  'AWS cloud architecture',
  'Full-stack development',
  'AI-driven business systems',
  'Softoras ERP product',
]

const experienceHighlights = [
  'Built CRM infrastructures and automation systems for local and international companies.',
  'Worked with teams such as Vivacity NA, Nexus95, and UTCLI LLC on real production projects.',
  'Designed cloud-based applications and scalable workflows for long-term growth.',
]

const leadership = [
  {
    name: 'Muhammad Shaheer Lodhi',
    title: 'Co-Founder',
    description:
      'Software engineer, CRM expert, and AWS Certified Solutions Architect focused on automation systems, CRM infrastructure, and scalable cloud applications.',
  },
  {
    name: 'Muhammad Asim',
    title: 'CTO (Partner)',
    description:
      'Leads technical execution and engineering quality across product development, architecture decisions, and scalable delivery.',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-white pt-28">
      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="card p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sky-700">About Softoras</p>
          <h1 className="section-heading mt-3">A technology partner that ships production systems</h1>
          <p className="section-paragraph mt-5 max-w-3xl">
            Softoras helps businesses transform operations through software, automation, and modern cloud systems. Our
            own product, Softoras ERP, is powered by Softoras — the same team, the same white and sky-blue system.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <h2 className="section-heading">Core skills</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <article key={skill} className="card p-4 text-sm font-semibold text-slate-700">
              {skill}
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <h2 className="section-heading">Leadership</h2>
        <div className="mt-7 grid gap-6 md:grid-cols-2">
          {leadership.map((person) => (
            <article key={person.name} className="card p-7">
              <h3 className="text-xl font-semibold text-sky-700">{person.name}</h3>
              <p className="mt-1 text-sm font-medium text-slate-500">{person.title}</p>
              <p className="mt-4 text-sm leading-7 text-slate-600">{person.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <h2 className="section-heading">Experience highlights</h2>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {experienceHighlights.map((item) => (
            <article key={item} className="card p-6">
              <p className="text-sm leading-7 text-slate-600">{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="card p-7">
            <h3 className="text-xl font-semibold text-sky-700">Mission</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Help businesses transform operations through smart systems, automation, and modern technology.
            </p>
          </article>
          <article className="card p-7">
            <h3 className="text-xl font-semibold text-sky-700">Vision</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Enable companies to scale faster with technology-first operations and AI-powered decision support.
            </p>
          </article>
        </div>
        <div className="mt-8 rounded-3xl bg-gradient-to-r from-sky-600 to-sky-500 p-8 text-white">
          <h2 className="text-3xl font-bold">Let&apos;s build your next system</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-sky-700">
              Contact us
            </Link>
            <a href={ERP_URL} className="rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold">
              See Softoras ERP
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
