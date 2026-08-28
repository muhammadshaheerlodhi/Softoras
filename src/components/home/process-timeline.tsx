import { process } from '@/content/site'

export default function ProcessTimeline() {
  return (
    <div className="process-timeline">
      <div className="process-track" aria-hidden />
      <div className="process-steps">
        {process.map((step, index) => (
          <article key={step.title} className="process-step card-feature">
            <div className="process-step-marker">{index + 1}</div>
            <h3 className="text-base font-semibold">{step.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{step.text}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
