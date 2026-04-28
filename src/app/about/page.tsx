import Link from 'next/link'
import type { Metadata } from 'next'
import {
  Award,
  BadgeCheck,
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Target,
  TrendingUp,
} from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `About ${SITE_CONFIG.name}`,
  description: `Learn more about ${SITE_CONFIG.name}, your trusted directory for verified annuity providers and financial services businesses.`,
}

const STATS = [
  { value: '10+', label: 'Years Of Experience' },
  { value: '13K+', label: 'Happy Customers' },
  { value: '500+', label: 'Verified Providers' },
  { value: '4.9★', label: 'Average Rating' },
]

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Trust First',
    description:
      'Every business on our directory is vetted and verified so you know you are talking to the right people.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Focused',
    description:
      'We put your goals first — simple comparisons, honest advice, and no pushy salespeople.',
  },
  {
    icon: Target,
    title: 'Clear Outcomes',
    description:
      'Our process is built to get you predictable income plans and peace of mind for retirement.',
  },
  {
    icon: TrendingUp,
    title: 'Always Improving',
    description:
      'We continuously refine the platform based on user feedback and industry best practices.',
  },
]


export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5F1E8]">
        <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
          <div className="absolute top-10 left-10 h-56 w-56 rounded-full bg-[#FFC531]/25 blur-3xl" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-[#1B2A5B]/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B2A5B]">
              About {SITE_CONFIG.name}
            </div>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1B2A5B] sm:text-5xl lg:text-6xl">
              Helping Families Retire
              <br />
              With Confidence Since 2015
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              {SITE_CONFIG.name} is a trusted directory of licensed annuity providers and financial services businesses.
              Our mission is simple — connect you with the right provider, without the noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-6 py-3 text-sm font-bold text-[#1B2A5B] shadow-lg shadow-[#FFC531]/30 hover:bg-[#f3b91d]"
              >
                Talk To An Advisor
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/listings"
                className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/20 bg-white px-6 py-3 text-sm font-semibold text-[#1B2A5B] hover:bg-slate-50"
              >
                Browse Listings
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="mx-auto -mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 rounded-3xl bg-[#1B2A5B] p-8 shadow-xl">
          <div className="grid grid-cols-2 gap-6 text-white sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-extrabold text-[#FFC531] sm:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-300">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=700&q=80"
              alt="Team collaborating"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover"
            />
            <div className="space-y-4 pt-10">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=700&q=80"
                alt="Business meeting"
                className="aspect-square w-full rounded-[2rem] object-cover"
              />
              <div className="flex flex-col items-center justify-center rounded-[2rem] bg-[#FFC531] p-6 text-center">
                <Award className="h-10 w-10 text-[#1B2A5B]" />
                <div className="mt-3 text-2xl font-extrabold text-[#1B2A5B]">A+ BBB</div>
                <div className="text-xs font-semibold text-[#1B2A5B]/80">Accredited</div>
              </div>
            </div>
          </div>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
              Our Story
            </div>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#1B2A5B] sm:text-4xl">
              Built On Trust. Driven By Real Results.
            </h2>
            <p className="mt-5 text-slate-600 leading-7">
              What started as a small team helping local families compare annuity providers has grown into a
              nationwide directory of verified financial services businesses. We believe retirement planning
              should feel clear, calm, and fully on your terms.
            </p>
            <p className="mt-4 text-slate-600 leading-7">
              Today we&apos;re proud to partner with hundreds of licensed providers and support thousands of
              customers every month through honest listings, transparent comparisons, and real human guidance.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                'Licensed and certified advisors',
                'Verified provider network',
                'Transparent, no-pressure process',
                '24/7 customer assistance',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#FFC531]" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#F5F1E8]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-slate-600">
              What We Stand For
            </div>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#1B2A5B] sm:text-4xl">
              The Values That Guide Every Decision
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-3xl bg-white p-7 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FFC531]/20">
                  <v.icon className="h-7 w-7 text-[#1B2A5B]" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-[#1B2A5B]">{v.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1B2A5B] via-[#26366E] to-[#1B2A5B] p-10 sm:p-14">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#FFC531]/20 blur-3xl" />
          <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Ready To Plan Your Retirement?
              </h2>
              <p className="mt-4 text-slate-300">
                Connect with a verified advisor today. It&apos;s free, fast, and there is zero pressure to commit.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-7 py-4 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
