import { ReactNode } from 'react'

export function FormLabel({ children, htmlFor }: { children: ReactNode; htmlFor?: string }) {
  return (
    <label htmlFor={htmlFor} className="form-label">
      {children}
    </label>
  )
}

export function FormShell({
  children,
  title,
  subtitle,
  className = '',
}: {
  children: ReactNode
  title?: string
  subtitle?: string
  className?: string
}) {
  return (
    <div className={`form-shell ${className}`}>
      {title ? (
        <div className="form-head">
          <p className="form-title">{title}</p>
          {subtitle ? <p className="form-subtitle">{subtitle}</p> : null}
        </div>
      ) : null}
      {children}
    </div>
  )
}

export function FormStatus({ type, children }: { type: 'success' | 'error'; children: ReactNode }) {
  return <p className={`form-status form-status-${type}`}>{children}</p>
}
