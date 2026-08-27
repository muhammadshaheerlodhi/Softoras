export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex items-center gap-3">
        <span className="h-3 w-3 animate-pulse rounded-full bg-sky-600" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-sky-500 [animation-delay:120ms]" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-sky-400 [animation-delay:240ms]" />
        <p className="ml-3 text-sm font-semibold text-slate-600">Loading Softoras…</p>
      </div>
    </div>
  )
}
