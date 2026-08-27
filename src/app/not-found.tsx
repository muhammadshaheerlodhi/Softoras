import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-sky-50 px-6 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-slate-600">That page does not exist on the Softoras site.</p>
      <Link href="/" className="btn-primary mt-6">
        Back home
      </Link>
    </div>
  )
}
