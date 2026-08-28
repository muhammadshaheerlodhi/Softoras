import { industries } from '@/content/site'

export const metadata = {
  title: 'Solutions',
  description: 'Industries Softoras can build for: real estate, healthcare, education, ecommerce, professional services, and SaaS.',
}

export default function SolutionsPage() {
  return (
    <div className="band band-paper pb-24 pt-16">
      <div className="wrap">
        <p className="kicker">Solutions</p>
        <h1 className="h2 mt-4">Where Softoras can apply the same engineering</h1>
        <p className="lede mt-4">
          These are domains we can build for — websites, CRM, automation, and custom software. They are capabilities, not
          a claim that we have named logos in every vertical.
        </p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {industries.map((item) => (
            <article key={item.title} className="panel panel-hover p-7">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
