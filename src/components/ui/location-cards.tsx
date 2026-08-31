import { site } from '@/content/site'

type LocationCardsProps = {
  className?: string
  variant?: 'row' | 'stack'
}

export default function LocationCards({ className = '', variant = 'row' }: LocationCardsProps) {
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
    <div className={`location-cards location-cards-${variant} ${className}`.trim()}>
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
