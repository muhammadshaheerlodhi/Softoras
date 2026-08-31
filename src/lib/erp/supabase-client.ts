import { createBrowserClient } from '@supabase/ssr'

const PLACEHOLDER_URL = 'https://placeholder.supabase.co'

export function getErpSupabaseUrl(): string {
  return (
    process.env.NEXT_PUBLIC_ERP_SUPABASE_URL ||
    process.env.NEXT_PUBLIC_SUPABASE_URL ||
    PLACEHOLDER_URL
  )
}

export function getErpSupabaseKey(): string {
  return (
    process.env.NEXT_PUBLIC_ERP_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_ERP_SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    'placeholder-anon-key'
  )
}

export function isErpSupabaseConfigured(): boolean {
  const url = getErpSupabaseUrl()
  const key = getErpSupabaseKey()
  if (!url || !key) return false
  if (url.includes('placeholder') || key.includes('placeholder')) return false
  if (url === PLACEHOLDER_URL) return false
  return true
}

export function getErpSupabaseConfigError(): string | null {
  if (isErpSupabaseConfigured()) return null
  return 'ERP auth is not configured. Add NEXT_PUBLIC_ERP_SUPABASE_URL and NEXT_PUBLIC_ERP_SUPABASE_ANON_KEY to .env.local.'
}

export function createErpClient() {
  return createBrowserClient(getErpSupabaseUrl(), getErpSupabaseKey())
}
