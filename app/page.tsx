import Link from 'next/link'

const navigationTiles = [
  { label: 'Well Guides', href: '/guides', emoji: '💧', description: 'Maintenance, testing, and care' },
  { label: 'Cost Guides', href: '/cost-guides', emoji: '💰', description: 'What well work actually costs' },
  { label: 'Reviews', href: '/reviews', emoji: '⭐', description: 'Best filters, pumps & treatments' },
  { label: 'Problems', href: '/problems', emoji: '⚠️', description: 'Diagnose and fix common issues' },
  { label: 'Water Testing', href: '/guides/well-water-testing', emoji: '🧪', description: "Know what's in your water" },
  { label: 'Start Here', href: '/guides/private-well-complete-guide', emoji: '📖', description: 'New to private wells?' },
]

const popularGuides = [
  { title: 'Complete Guide to Private Well Ownership', description: 'Everything you need to know about owning and maintaining a private well.', href: '/guides/private-well-complete-guide', badge: 'GUIDE' },
  { title: 'Well Water Testing: What to Test For and When', description: 'How often to test, which contaminants matter, and what to do if results are bad.', href: '/guides/well-water-testing', badge: 'GUIDE' },
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

export default function HomePage() {
  return (
    <>
      <section style={{ backgroundColor: '#0D3D30' }} className="text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Your Private Well,{' '}
            <span style={{ color: '#5DCAA5' }}>Explained.</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Water quality and health guidance written for the 13 million US homeowners on private wells. No contractors, no sales pitches — just honest answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/guides/private-well-complete-guide" className="inline-block font-bold py-3 px-8 rounded-lg transition-colors text-white" style={{ backgroundColor: '#1D9E75' }}>
              Start Here →
            </Link>
            <Link href="/get-quote" className="inline-block font-bold py-3 px-8 rounded-lg transition-colors border-2 border-white/30 text-white hover:bg-white/10">
              Get Free Quotes
            </Link>
          </div>
        </div>
      </section>

      <section className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {navigationTiles.map((tile) => (
            <Link key={tile.href} href={tile.href} className="group flex flex-col items-center text-center p-4 rounded-xl border border-[#C8DDD7] bg-white hover:border-[#1D9E75] hover:shadow-md transition-all">
              <span className="text-2xl mb-2">{tile.emoji}</span>
              <span className="font-semibold text-sm text-[#0D1F1A]">{tile.label}</span>
              <span className="text-xs text-[#7A9E96] mt-1">{tile.description}</span>
            </Link>
          ))}
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
