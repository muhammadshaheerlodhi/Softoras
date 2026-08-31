import { process } from '@/content/site'

export default function ProcessTimeline() {
  return (
    <ol className="process-list">
      {process.map((step, index) => (
        <li key={step.title} className="process-row">
          <span className="process-row-num" aria-hidden>
            {index + 1}
          </span>
          <div className="process-row-body">
            <h3 className="process-row-title">{step.title}</h3>
            <p className="process-row-text">{step.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
