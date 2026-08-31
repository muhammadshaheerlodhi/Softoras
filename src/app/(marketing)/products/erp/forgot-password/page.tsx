import Link from 'next/link'
import { ERP_LOGIN } from '@/lib/erp/paths'

export const metadata = {
  title: 'Forgot Password',
  description: 'Reset your Softoras ERP account password.',
}

export default function ErpForgotPasswordPage() {
  return (
    <div className="erp-auth section-y">
      <div className="wrap">
        <div className="erp-auth-shell">
          <div className="erp-auth-panel">
            <p className="kicker">Softoras ERP</p>
            <h1 className="h2 mt-2">Forgot password</h1>
            <p className="section-desc mt-4">
              Password reset is handled on the live ERP app. Use the link below to continue on the secure ERP site.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://softoras-erp.vercel.app/forgot-password"
                className="btn btn-primary"
              >
                Open ERP password reset
              </a>
              <Link href={ERP_LOGIN} className="btn btn-secondary">
                Back to sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
