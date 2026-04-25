'use client'

import { FormEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowRight, CheckCircle2, Eye, EyeOff, Lock, Mail, ShieldCheck, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'

export const REGISTER_PAGE_OVERRIDE_ENABLED = true

const PERKS = [
  'List your financial services business',
  'Receive verified leads and inquiries',
  'Manage everything from one dashboard',
  'Boost your trust with verified status',
]

export function RegisterPageOverride() {
  const router = useRouter()
  const { signup, isLoading } = useAuth()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreed, setAgreed] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setError(null)

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all required fields.')
      return
    }
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    if (!agreed) {
      setError('You must agree to the Terms & Privacy Policy.')
      return
    }

    try {
      await signup(name.trim(), email.trim(), password)
      setSuccess(true)
      setTimeout(() => router.push('/'), 700)
    } catch (err) {
      setError('Unable to create account. Please try again.')
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F1E8] text-slate-900">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
          <aside className="relative overflow-hidden rounded-[2rem] bg-[#1B2A5B] p-10 text-white">
            <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-[#FFC531]/20 blur-3xl" />
            <div className="absolute -bottom-10 -left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#FFC531] backdrop-blur">
                <ShieldCheck className="h-3.5 w-3.5" />
                Join Free
              </div>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">
                Create your {SITE_CONFIG.name} account
              </h1>
              <p className="mt-5 text-sm leading-7 text-slate-300">
                Build trust, reach more clients, and grow your annuity or financial services business with
                a verified directory profile.
              </p>
              <ul className="mt-10 space-y-4">
                {PERKS.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFC531]">
                      <CheckCircle2 className="h-5 w-5 text-[#1B2A5B]" />
                    </div>
                    <span className="pt-1 text-sm text-slate-200">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <section className="rounded-[2rem] bg-white p-8 shadow-xl sm:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Create Account</div>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#1B2A5B]">
                Get started for free
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Your data is saved securely on this device — no credit card required.
              </p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Full Name</label>
                  <div className="mt-2 relative">
                    <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      autoComplete="name"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Email Address</label>
                  <div className="mt-2 relative">
                    <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      autoComplete="email"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Password</label>
                  <div className="mt-2 relative">
                    <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 6 characters"
                      autoComplete="new-password"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-900 outline-none transition focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-500 hover:bg-slate-100"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#1B2A5B]">Confirm Password</label>
                  <div className="mt-2 relative">
                    <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter your password"
                      autoComplete="new-password"
                      className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition focus:border-[#1B2A5B] focus:bg-white focus:ring-2 focus:ring-[#FFC531]/40"
                    />
                  </div>
                </div>

                <label className="flex items-start gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#1B2A5B] focus:ring-[#FFC531]"
                  />
                  <span>
                    I agree to the{' '}
                    <Link href="/terms" className="font-semibold text-[#1B2A5B] hover:underline">Terms of Service</Link>
                    {' '}and{' '}
                    <Link href="/privacy" className="font-semibold text-[#1B2A5B] hover:underline">Privacy Policy</Link>.
                  </span>
                </label>

                {error ? (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    {error}
                  </div>
                ) : null}

                {success ? (
                  <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700 flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Account created. Redirecting...
                  </div>
                ) : null}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FFC531] px-6 text-sm font-bold text-[#1B2A5B] shadow-lg shadow-[#FFC531]/30 hover:bg-[#f3b91d] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isLoading ? 'Creating your account...' : (
                    <>
                      Create Account
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </button>
              </form>

              <div className="mt-8 text-center text-sm text-slate-600">
                Already a member?{' '}
                <Link href="/login" className="font-bold text-[#1B2A5B] hover:underline">
                  Sign in
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
