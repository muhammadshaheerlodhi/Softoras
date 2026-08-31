import { site } from '@/content/site'

type LocationCardsProps = {
  className?: string
  compact?: boolean
}

export default function LocationCards({ className = '', compact = false }: LocationCardsProps) {
  const locations = [
    {
      region: 'Pakistan',
      phone: site.phones.pakistan,
      address: site.offices.pakistan,
    },
    {
      region: 'United Arab Emirates',
      phone: site.phones.uae,
      address: site.offices.uae,
    },
  ]

  return (
    <div className={`location-cards${compact ? ' location-cards-compact' : ''} ${className}`.trim()}>
      {locations.map((item) => (
        <article key={item.region} className="location-card">
          <p className="location-card-region">{item.region}</p>
          <a href={item.phone.href} className="location-card-phone">
            {item.phone.label}
          </a>
          <p className="location-card-address">{item.address}</p>
        </article>
      ))}
    </div>
  )
}
