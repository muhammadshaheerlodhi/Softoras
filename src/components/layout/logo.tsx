import Image from 'next/image'
import Link from 'next/link'

export default function Logo({ className = '' }: { className?: string }) {
  return (
    <Link href="/" className={`flex shrink-0 items-center ${className}`} aria-label="Softoras home">
      <Image
        src="/brand/softoras-mark.png"
        alt="Softoras"
        width={360}
        height={118}
        className="logo-img"
        priority
      />
    </Link>
  )
}
