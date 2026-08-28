type Pattern = 'bricks' | 'grid' | 'dots' | 'boxes'

type SectionBackdropProps = {
  pattern?: Pattern
  intensity?: 'light' | 'medium' | 'strong'
  className?: string
}

const intensityMap = {
  light: 'opacity-40',
  medium: 'opacity-60',
  strong: 'opacity-80',
}

export default function SectionBackdrop({
  pattern = 'bricks',
  intensity = 'medium',
  className = '',
}: SectionBackdropProps) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <div className={`section-pattern section-pattern-${pattern} ${intensityMap[intensity]}`} />
      <div className="section-glow section-glow-left" />
      <div className="section-glow section-glow-right" />
    </div>
  )
}
