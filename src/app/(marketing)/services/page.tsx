import Link from 'next/link'
import { services } from '@/content/site'

export default function ServicesPage() {
  return (
    <div className="bg-gradient-to-b from-white via-sky-50 to-white pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-8">
        <div className="card p-10">
          <p className="inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-semibold text-sky-700">
            Think SaaS, think Softoras
          </p>
          <h1 className="section-heading mt-5">Agency services built to scale business systems</h1>
          <p className="section-paragraph mt-5 max-w-3xl">
            Softoras designs, builds, and scales software systems for startups and growth businesses — including
            Softoras ERP, our own cloud ERP product.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((group) => (
            <article key={group.title} className="card p-7 transition hover:-translate-y-1">
              <h2 className="text-xl font-semibold text-sky-700">{group.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{group.description}</p>
              <ul className="mt-5 space-y-2">
                {group.offerings.map((item) => (
                  <li key={item} className="text-sm text-slate-700">
                    – {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <Link href="/contact" className="btn-primary mt-10">
          Book a discovery call
        </Link>
      </section>
    </div>
  )
}
