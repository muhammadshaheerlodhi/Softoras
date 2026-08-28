import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="h2">Page not found</h1>
      <p className="lede mt-3">That route does not exist on the Softoras site.</p>
      <Link href="/" className="btn btn-primary mt-6">
        Back home
      </Link>
    </div>
  )
}
