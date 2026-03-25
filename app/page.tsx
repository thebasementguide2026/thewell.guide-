import Link from 'next/link'
import Image from 'next/image'

const navigationTiles = [
  { label: 'Well Guides', href: '/guides', emoji: '💧', description: 'Maintenance, testing, and care' },
  { label: 'Cost Guides', href: '/cost-guides', emoji: '💰', description: 'What well work actually costs' },
  { label: 'Reviews', href: '/reviews', emoji: '⭐', description: 'Best filters, pumps & treatments' },
  { label: 'Problems', href: '/problems', emoji: '⚠️', description: 'Diagnose and fix common issues' },
  { label: 'Water Testing', href: '/guides/how-to-test-well-water', emoji: '🧪', description: "Know what's in your water" },
  { label: 'Start Here', href: '/guides/complete-well-guide', emoji: '📖', description: 'New to private wells?' },
]

const popularGuides = [
  { title: 'Well Water Testing: What to Test For and When', description: 'How often to test, which contaminants matter, and what to do if results are bad.', href: '/guides/how-to-test-well-water', badge: 'GUIDE' },
  { title: 'Well Pump Maintenance Guide', description: 'Keep your pump running for decades with these maintenance steps.', href: '/guides/well-pump-maintenance', badge: 'GUIDE' },
  { title: 'How to Shock Chlorinate Your Well', description: 'Step-by-step disinfection guide after contamination or flooding.', href: '/guides/how-to-shock-chlorinate-well', badge: 'GUIDE' },
  { title: 'Buying a Home with a Private Well', description: 'What to inspect, test, and negotiate before closing on a well property.', href: '/guides/buying-home-with-private-well', badge: 'GUIDE' },
  { title: 'Well Water Pressure Problems', description: "Low pressure, no water, or pressure surges — here's what causes them.", href: '/problems/well-water-pressure-problems', badge: 'PROBLEM' },
]

const latestArticles = [
  { title: 'How Much Does Well Water Treatment Cost?', href: '/cost-guides/well-water-treatment-cost', badge: 'COST' },
  { title: 'Best Well Water Filters Reviewed', href: '/reviews/best-well-water-filters', badge: 'REVIEW' },
  { title: 'Well Pump Replacement Cost', href: '/cost-guides/well-pump-replacement-cost', badge: 'COST' },
  { title: 'Signs Your Well Pump Is Failing', href: '/problems/well-pump-failing', badge: 'PROBLEM' },
]

const reviewPreviews = [
  { title: 'Best Whole House Well Water Filters', href: '/reviews/best-well-water-filters' },
  { title: 'Best Well Water Test Kits', href: '/reviews/best-well-water-test-kits' },
  { title: 'Best Pressure Tanks for Wells', href: '/reviews/best-pressure-tanks' },
]

const badgeColors: Record<string, { bg: string; text: string }> = {
  GUIDE: { bg: '#E0F0EA', text: '#0D3D30' },
  COST: { bg: '#FFF3E0', text: '#7A4500' },
  PROBLEM: { bg: '#FDECEA', text: '#8B1A1A' },
  REVIEW: { bg: '#E8F5E9', text: '#1B5E20' },
}

const sidebarArticles = [
  { title: 'Well Water Smells Like Sulfur or Rotten Eggs', href: '/problems/well-water-smells-like-sulfur', category: 'PROBLEM', image: '/glassofwater.jpg' },
  { title: 'Well Water Pressure Low: 6 Causes and Fixes', href: '/problems/well-water-pressure-low', category: 'PROBLEM', image: '/well pressure.jpg' },
  { title: 'Well Pump Replacement Cost 2026', href: '/cost-guides/well-pump-replacement-cost', category: 'COST GUIDE', image: '/well cost.jpg' },
  { title: 'How to Test Your Well Water', href: '/guides/how-to-test-well-water', category: 'GUIDE', image: '/watertest.jpg' },
  { title: 'Well Pump Maintenance Guide', href: '/guides/well-pump-maintenance', category: 'GUIDE', image: '/wellguidehero.jpg' },
]

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

      <section className="bg-[#F4FAF7] py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0D1F1A]">Popular Guides</h2>
            <Link href="/guides" className="text-sm font-medium text-[#1D9E75] hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className="group rounded-xl overflow-hidden border border-[#C8DDD7] bg-white hover:shadow-lg transition-shadow p-6">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md mb-3" style={{ backgroundColor: badgeColors[guide.badge]?.bg, color: badgeColors[guide.badge]?.text }}>{guide.badge}</span>
                <h3 className="font-bold text-[#0D1F1A] group-hover:text-[#1D9E75] mb-2">{guide.title}</h3>
                <p className="text-sm text-[#3D5A52] line-clamp-2">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-[#0D1F1A]">Latest Articles</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {latestArticles.map((article) => (
            <Link key={article.href} href={article.href} className="flex items-center gap-4 bg-white p-4 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow group">
              <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0" style={{ backgroundColor: badgeColors[article.badge]?.bg, color: badgeColors[article.badge]?.text }}>{article.badge}</span>
              <h3 className="font-bold text-sm text-[#0D1F1A] group-hover:text-[#1D9E75]">{article.title}</h3>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#F4FAF7] py-12">
        <div className="container-custom">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#0D1F1A]">Top Reviews</h2>
            <Link href="/reviews" className="text-sm font-medium text-[#1D9E75] hover:underline">View All →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {reviewPreviews.map((review) => (
              <Link key={review.href} href={review.href} className="flex items-center gap-3 bg-white p-5 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow group">
                <span className="text-2xl">⭐</span>
                <h3 className="font-semibold text-sm text-[#0D1F1A] group-hover:text-[#1D9E75]">{review.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
