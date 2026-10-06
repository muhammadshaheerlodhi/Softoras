import Image from 'next/image'
import Link from 'next/link'
import { ceo, partner, type Leader } from '@/content/site'

const leaders: Leader[] = [ceo, partner]

export default function LeadershipCards() {
  return (
    <div className="about-leadership-grid">
      {leaders.map((person, index) => (
        <article key={person.name} className="about-ceo-card">
          <div className="about-ceo-photo">
            <Image
              src={person.photo}
              alt={`${person.name}, ${person.title}`}
              fill
              className="about-ceo-img"
              sizes="140px"
              priority={index === 0}
            />
          </div>
          <div className="about-ceo-copy">
            <p className="kicker">Leadership</p>
            <h2 className="about-ceo-name">{person.name}</h2>
            <p className="about-ceo-title">{person.title}</p>
            <p className="about-ceo-credential">{person.credentials || '\u00a0'}</p>
            <p className="about-ceo-bio">{person.bio}</p>
            <div className="about-ceo-actions">
              <a href={person.linkedin} className="btn btn-primary btn-compact" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <Link href="/contact" className="btn btn-secondary btn-compact">
                Start a Project
              </Link>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}
