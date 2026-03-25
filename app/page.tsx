import Link from 'next/link'
import Image from 'next/image'
import { articles } from '@/lib/articles'

const navigationTiles = [
  { label: 'Well Guides', href: '/guides', emoji: '💧', description: 'Maintenance, testing, and care' },
  { label: 'Cost Guides', href: '/cost-guides', emoji: '💰', description: 'What well work actually costs' },
  { label: 'Reviews', href: '/reviews', emoji: '⭐', description: 'Best filters, pumps & treatments' },
  { label: 'Problems', href: '/problems', emoji: '⚠️', description: 'Diagnose and fix common issues' },
  { label: 'Water Testing', href: '/guides/how-to-test-well-water', emoji: '🧪', description: "Know what's in your water" },
  { label: 'Start Here', href: '/guides/complete-well-guide', emoji: '📖', description: 'New to private wells?' },
]

const badgeColors: Record<string, { bg: string; text: string }> = {
  Guide: { bg: '#E1F5EE', text: '#0F6E56' },
  Problem: { bg: '#FCEBEB', text: '#A32D2D' },
  'Cost Guide': { bg: '#FAEEDA', text: '#854F0B' },
  Review: { bg: '#E8F5E9', text: '#1B5E20' },
}

const sidebarArticles = [
  { title: 'Well Water Smells Like Sulfur or Rotten Eggs', href: '/problems/well-water-smells-like-sulfur', category: 'PROBLEM', image: '/glassofwater.jpg' },
  { title: 'Well Water Pressure Low: 6 Causes and Fixes', href: '/problems/well-water-pressure-low', category: 'PROBLEM', image: '/well pressure.jpg' },
  { title: 'Well Pump Replacement Cost 2026', href: '/cost-guides/well-pump-replacement-cost', category: 'COST GUIDE', image: '/well cost.jpg' },
  { title: 'How to Test Your Well Water', href: '/guides/how-to-test-well-water', category: 'GUIDE', image: '/watertest.jpg' },
  { title: 'How a Well Pump Works: The Complete System Explained', href: '/guides/how-well-pump-works', category: 'GUIDE', image: '/howwellworks.jpg' },
]

const getArticleHref = (slug: string) => `/${slug}`

export default function HomePage() {
  return (
    <>
      {/* Publisher-style Hero: Featured + Sidebar */}
      <section className="container-custom py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main featured story */}
          <Link href="/guides/complete-well-guide" className="lg:col-span-2 group relative rounded-xl overflow-hidden block" style={{ minHeight: '400px' }}>
            <Image
              src="/wellguidehero.jpg"
              alt="The Complete Guide to Private Well Water Systems 2026"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>
                GUIDE
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">
                The Complete Guide to Private Well Water Systems — 2026 Edition
              </h2>
              <p className="text-sm text-gray-200 line-clamp-2">
                Everything a well owner needs to know: how wells work, types of wells and pumps, water quality testing, common contaminants including PFAS and bacteria, maintenance schedules, and when to call a pro.
              </p>
            </div>
          </Link>

          {/* Sidebar stories */}
          <div className="space-y-4">
            {sidebarArticles.map((article) => (
              <Link key={article.href} href={article.href} className="flex gap-4 group">
                {article.image && (
                  <div className="relative w-24 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-semibold uppercase" style={{ color: '#1D9E75' }}>
                    {article.category}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#1D9E75] line-clamp-2 mt-0.5">
                    {article.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Navigation Bar */}
      <section className="border-y border-[#C8DDD7] bg-[#F4FAF7]">
        <div className="container-custom py-4">
          <div className="flex flex-wrap justify-center gap-3">
            {navigationTiles.map((tile) => (
              <Link
                key={tile.href}
                href={tile.href}
                className="px-4 py-2 text-sm font-medium text-[#3D5A52] bg-white rounded-full border border-[#C8DDD7] hover:border-[#1D9E75] hover:text-[#1D9E75] transition-colors shadow-sm"
              >
                {tile.emoji} {tile.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides — image card grid like theseptic.guide */}
      <section className="container-custom py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0D1F1A]">Popular Guides</h2>
          <Link href="/guides" className="text-sm font-medium text-[#1D9E75] hover:underline">View All →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles
            .filter((a) => a.image)
            .map((article) => (
              <Link key={article.slug} href={getArticleHref(article.slug)} className="group rounded-xl overflow-hidden border border-[#C8DDD7] hover:shadow-lg transition-shadow">
                {article.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md"
                      style={{ backgroundColor: badgeColors[article.category]?.bg ?? '#E1F5EE', color: badgeColors[article.category]?.text ?? '#0F6E56' }}
                    >
                      {article.category.toUpperCase()}
                    </span>
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-[#0D1F1A] group-hover:text-[#1D9E75] mb-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-[#3D5A52] line-clamp-2">
                    {article.description}
                  </p>
                </div>
              </Link>
            ))}
        </div>
      </section>

      {/* Need a Well Professional CTA */}
      <section className="py-16" style={{ backgroundColor: '#0D3D30' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Well Professional?</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Get free quotes from licensed well contractors in your area. No obligation, no spam.</p>
          <Link href="/get-quote" className="inline-block font-bold py-4 px-10 rounded-lg text-white text-lg transition-colors" style={{ backgroundColor: '#1D9E75' }}>Get Free Quotes →</Link>
        </div>
      </section>
    </>
  )
}
