'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Eye, EyeOff } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import { createErpClient, getErpSupabaseConfigError } from '@/lib/erp/supabase-client'
import { ERP_DASHBOARD, ERP_FORGOT_PASSWORD, ERP_REGISTER } from '@/lib/erp/paths'
import '@/app/erp-landing.css'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginForm = z.infer<typeof loginSchema>

export default function ErpLoginPage() {
  const supabase = createErpClient()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const configError = getErpSupabaseConfigError()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginForm) => {
    if (configError) {
      setFormError(configError)
      return
    }

    setIsLoading(true)
    setFormError(null)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: data.email,
        password: data.password,
      })

      if (error) {
        if (error.message.toLowerCase().includes('email not confirmed')) {
          throw new Error("Please verify your email first, then sign in again.");
        }
        throw error
      }

      toast.success('Welcome back!')
      window.location.href = ERP_DASHBOARD
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Login failed'
      setFormError(message)
      toast.error(message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="erp-auth section-y">
      <Toaster richColors position="top-center" />
      <div className="wrap">
        <div className="erp-auth-shell">
          <div className="erp-auth-panel">
            <p className="kicker">Softoras ERP</p>
            <h1 className="h2 mt-2">Sign in</h1>
            <p className="section-desc mt-2">Enter your credentials to access your ERP account.</p>

            {configError ? (
              <div className="erp-auth-alert mt-4">{configError}</div>
            ) : null}

            {formError ? <div className="erp-auth-alert mt-4">{formError}</div> : null}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@company.com" {...register('email')} />
                {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
              </div>

              <div className="field">
                <div className="flex items-center justify-between gap-2">
                  <label htmlFor="password">Password</label>
                  <Link href={ERP_FORGOT_PASSWORD} className="text-xs font-semibold text-[var(--accent)]">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="pr-10"
                    {...register('password')}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password ? <p className="field-error">{errors.password.message}</p> : null}
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={isLoading || !!configError}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Sign In
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[var(--muted)]">
              Don&apos;t have an account?{' '}
              <Link href={ERP_REGISTER} className="font-semibold text-[var(--accent)]">
                Create account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
