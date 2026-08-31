'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, Eye, EyeOff } from 'lucide-react'
import { toast, Toaster } from 'sonner'
import { createErpClient, getErpSupabaseConfigError } from '@/lib/erp/supabase-client'
import { ERP_LOGIN, ERP_ONBOARDING } from '@/lib/erp/paths'
import '@/app/erp-landing.css'

const registerSchema = z
  .object({
    fullName: z.string().min(2, 'Full name is required'),
    companyName: z.string().min(2, 'Company name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

type RegisterForm = z.infer<typeof registerSchema>

function passwordStrength(password: string) {
  if (!password) return { score: 0, label: '' }
  let score = 0
  if (password.length >= 8) score++
  if (/[A-Z]/.test(password)) score++
  if (/[0-9]/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  const labels = ['Weak', 'Fair', 'Good', 'Strong']
  return { score, label: labels[Math.max(0, score - 1)] || 'Weak' }
}

export default function ErpRegisterPage() {
  const router = useRouter()
  const supabase = createErpClient()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState<string | null>(null)
  const configError = getErpSupabaseConfigError()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: zodResolver(registerSchema),
  })

  const passwordValue = watch('password') || ''
  const strength = useMemo(() => passwordStrength(passwordValue), [passwordValue])

  const onSubmit = async (data: RegisterForm) => {
    if (configError) {
      setFormError(configError)
      return
    }

    setIsLoading(true)
    setFormError(null)

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email: data.email,
        password: data.password,
        options: {
          data: { full_name: data.fullName },
        },
      })

      if (authError) throw authError
      if (!authData.user) throw new Error('Registration failed')

      if (!authData.session) {
        toast.success('Account created! Check your email to verify, then sign in.')
        router.push(ERP_LOGIN)
        return
      }

      const { error: bootstrapError } = await supabase.rpc('bootstrap_new_organization', {
        p_company_name: data.companyName,
        p_email: data.email,
      })

      if (bootstrapError) {
        throw new Error(bootstrapError.message)
      }

      toast.success('Account created successfully!')
      window.location.href = ERP_ONBOARDING
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Registration failed'
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
            <h1 className="h2 mt-2">Create account</h1>
            <p className="section-desc mt-2">Start your 15-day free trial. No credit card required.</p>

            {configError ? <div className="erp-auth-alert mt-4">{configError}</div> : null}
            {formError ? <div className="erp-auth-alert mt-4">{formError}</div> : null}

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
              <div className="field">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" placeholder="John Doe" {...register('fullName')} />
                {errors.fullName ? <p className="field-error">{errors.fullName.message}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="companyName">Company Name</label>
                <input id="companyName" placeholder="Acme Inc." {...register('companyName')} />
                {errors.companyName ? <p className="field-error">{errors.companyName.message}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="you@company.com" {...register('email')} />
                {errors.email ? <p className="field-error">{errors.email.message}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="password">Password</label>
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
                {passwordValue ? (
                  <div className="mt-2">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className={`h-1 flex-1 rounded-full ${i <= strength.score ? 'bg-[var(--accent)]' : 'bg-[var(--line)]'}`}
                        />
                      ))}
                    </div>
                    <p className="mt-1 text-xs text-[var(--muted)]">{strength.label} password</p>
                  </div>
                ) : null}
                {errors.password ? <p className="field-error">{errors.password.message}</p> : null}
              </div>

              <div className="field">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input id="confirmPassword" type="password" placeholder="••••••••" {...register('confirmPassword')} />
                {errors.confirmPassword ? <p className="field-error">{errors.confirmPassword.message}</p> : null}
              </div>

              <button type="submit" className="btn btn-primary w-full" disabled={isLoading || !!configError}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : null}
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-[var(--muted)]">
              Already have an account?{' '}
              <Link href={ERP_LOGIN} className="font-semibold text-[var(--accent)]">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
