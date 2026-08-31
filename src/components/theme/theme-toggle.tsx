'use client'

import { useTheme } from '@/components/theme/theme-provider'

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggleTheme, mounted } = useTheme()
  const isDark = mounted && theme === 'dark'

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`theme-toggle inline-flex h-10 w-10 items-center justify-center rounded-full ${className}`}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
    >
      <span suppressHydrationWarning aria-hidden>
        {mounted ? (isDark ? '☀' : '☾') : '☾'}
      </span>
    </button>
  )
}
