import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowRight, BookOpen, Calendar, Clock, User } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'

export const metadata: Metadata = {
  title: `Blog & Insights | ${SITE_CONFIG.name}`,
  description: 'Smart annuity advice, retirement tips, and industry insights from trusted financial experts.',
}

const CATEGORIES = ['All Posts', 'Annuities', 'Retirement', 'Tax Planning', 'Industry News', 'Guides']

const FEATURED = {
  date: 'Oct 22, 2025',
  author: 'Margaret Wilson',
  read: '6 min read',
  title: 'The Complete Guide To Fixed Vs Variable Annuities In 2026',
  excerpt:
    'Understand the key differences, pros and cons, and how to choose the right product for your retirement goals. We break down everything you need to know in plain language.',
  image:
    'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1400&q=80',
  category: 'Annuities',
}

const POSTS = [
  {
    date: 'Oct 18, 2025',
    author: 'David Martinez',
    read: '4 min read',
    title: 'Top 5 Signs Your Annuity Plan Needs A Review',
    excerpt: 'Is your annuity still working as hard as it should? Here are clear warning signs you should not ignore.',
    image: 'https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&w=800&q=80',
    category: 'Retirement',
  },
  {
    date: 'Oct 15, 2025',
    author: 'Sarah Chen',
    read: '5 min read',
    title: 'Choosing The Right Business Listing For Your Needs',
    excerpt: 'A practical framework for evaluating providers based on your goals, budget, and timeline.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=800&q=80',
    category: 'Guides',
  },
  {
    date: 'Oct 10, 2025',
    author: 'James Hall',
    read: '3 min read',
    title: 'How To Maximize Your Social Security Benefits',
    excerpt: 'Simple strategies to help you claim at the right time and boost your lifetime payout.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    category: 'Retirement',
  },
  {
    date: 'Oct 05, 2025',
    author: 'Margaret Wilson',
    read: '7 min read',
    title: '2026 Tax Changes Every Retiree Should Know',
    excerpt: 'Recent updates to retirement tax rules and how they may affect your plan next year.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80',
    category: 'Tax Planning',
  },
  {
    date: 'Sep 28, 2025',
    author: 'David Martinez',
    read: '4 min read',
    title: 'Why Verified Business Listings Matter More Than Ever',
    excerpt: 'With scams on the rise, knowing how to spot a trustworthy provider has never been more important.',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    category: 'Industry News',
  },
  {
    date: 'Sep 20, 2025',
    author: 'Autumn Phillips',
    read: '5 min read',
    title: 'Deferred Annuities Explained In Plain English',
    excerpt: 'A no-jargon breakdown of how deferred annuities grow your savings and when they make sense.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    category: 'Annuities',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <NavbarShell />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#F5F1E8]">
        <div className="absolute inset-0 opacity-40 pointer-events-none" aria-hidden>
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-[#FFC531]/25 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1B2A5B]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#1B2A5B]">
            <BookOpen className="h-3.5 w-3.5" />
            Our Blog
          </div>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1B2A5B] sm:text-5xl lg:text-6xl">
            Smart Advice For A Stronger Retirement
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600">
            Fresh insights, expert guides, and plain-English explanations of annuities, retirement planning, and more.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((cat, i) => (
            <button
              key={cat}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                i === 0
                  ? 'bg-[#1B2A5B] text-white'
                  : 'border border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <article className="group overflow-hidden rounded-[2rem] bg-white shadow-lg border border-slate-100 hover:shadow-2xl transition-all">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative h-72 overflow-hidden lg:h-full">
              <img src={FEATURED.image} alt={FEATURED.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className="absolute top-5 left-5 rounded-full bg-[#FFC531] px-4 py-1.5 text-xs font-bold text-[#1B2A5B]">
                Featured
              </span>
            </div>
            <div className="p-8 lg:p-12">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-[#1B2A5B]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#1B2A5B]">
                {FEATURED.category}
              </div>
              <h2 className="mt-4 text-2xl font-extrabold leading-tight text-[#1B2A5B] sm:text-3xl lg:text-4xl">
                {FEATURED.title}
              </h2>
              <p className="mt-4 text-slate-600 leading-7">{FEATURED.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5" />
                  {FEATURED.author}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5" />
                  {FEATURED.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5" />
                  {FEATURED.read}
                </span>
              </div>
              <Link
                href="/blog"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#FFC531] px-6 py-3 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
              >
                Read Article
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </article>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#1B2A5B]">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-[#1B2A5B] group-hover:text-[#142049]">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 line-clamp-2">{p.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {p.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {p.read}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-[#1B2A5B] via-[#26366E] to-[#1B2A5B] p-10 sm:p-14">
          <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-[#FFC531]/20 blur-3xl" />
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
                Get Smart Retirement Tips In Your Inbox
              </h2>
              <p className="mt-4 text-slate-300">
                One helpful email a week. No spam. Unsubscribe anytime.
              </p>
            </div>
            <form className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="you@example.com"
                className="h-12 flex-1 rounded-full border border-white/20 bg-white/10 px-5 text-sm text-white placeholder:text-slate-400 outline-none backdrop-blur focus:bg-white/20"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#FFC531] px-6 text-sm font-bold text-[#1B2A5B] hover:bg-[#f3b91d]"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
