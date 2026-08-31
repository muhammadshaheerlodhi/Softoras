'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'softoras-theme'

const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  mounted: boolean
} | null>(null)

function readThemeFromDocument(): Theme {
  if (typeof window === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.add('theme-switching')
  root.classList.toggle('dark', theme === 'dark')
  root.style.colorScheme = theme
  root.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff'
  window.requestAnimationFrame(() => {
    root.classList.remove('theme-switching')
  })
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setThemeState(readThemeFromDocument())
    setMounted(true)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      mounted,
      setTheme: (next: Theme) => {
        setThemeState(next)
        window.localStorage.setItem(STORAGE_KEY, next)
        applyTheme(next)
      },
      toggleTheme: () => {
        const next: Theme = theme === 'dark' ? 'light' : 'dark'
        setThemeState(next)
        window.localStorage.setItem(STORAGE_KEY, next)
        applyTheme(next)
      },
    }),
    [theme, mounted],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return context
}
