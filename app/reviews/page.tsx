import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Well Water Product Reviews | The Well Guide',
  description: 'Honest, spec-driven reviews of the best well water products — test kits, whole house filters, and more. Every pick matched to real water test results.',
  alternates: { canonical: 'https://www.thewell.guide/reviews' },
}

const reviews = [
  { title: 'Best Well Water Test Kits (2026): Lab and DIY Options Reviewed', href: '/reviews/best-well-water-test-kits', description: 'The four best well water test kits for private well owners, reviewed and compared. Includes certified lab tests for annual baseline testing and DIY strips for monitoring between lab tests.', image: '/welltestkits.jpg', readTime: '14 min read' },
  { title: 'Best Whole House Water Filters for Well Water: 2026 Picks by Contaminant', href: '/reviews/best-whole-house-water-filters', description: 'The best whole house water filters for well water reviewed by contaminant type — iron, sulfur, bacteria, sediment, and comprehensive systems. Real specs, verified availability, honest limitations, and a complete buying guide.', image: '/waterfilters.jpg', readTime: '14 min read' },
  { title: 'Best Iron Filters for Well Water 2026: Reviews by Iron Type', href: '/reviews/best-iron-filters', description: 'The 5 best iron filters for well water in 2026, organized by iron type. Reviews of AIS10-25SXT, iSpring WCFM500K, IRON Pro 2, Durawater Iron Eater, and Premier AIO with specs, costs, and clear recommendations.', image: '/bestironfilters.jpg', readTime: '16 min read' },
  { title: 'Best Well Pressure Tanks (2026): Sizing, Specs, and Real Picks', href: '/reviews/best-pressure-tanks', description: 'The best well pressure tanks for private wells reviewed with real specs, sizing guidance, and honest trade-offs. Bladder and diaphragm tanks compared by household size, budget, and installation type.', image: '/best pressure tanks.jpg', readTime: '14 min read' },
  { title: 'Best Well Pumps 2026: Top Picks for Shallow, Deep, and Convertible Applications', href: '/reviews/best-well-pumps', description: 'Find the right well pump for your home in 2026. Tested picks for shallow wells, deep wells, and convertible jet applications from $300 to $900. Submersible and jet pump comparison with sizing by well depth and household size.', image: '/bestwellpumps.jpg', readTime: '16 min read' },
]

export default function ReviewsIndexPage() {
  return (
    <>
      {/* Hero Header */}
      <section style={{ backgroundColor: '#0D3D30' }} className='text-white py-16'>
        <div className='container-custom'>
          <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEWS</span>
          <h1 className='text-4xl font-extrabold mb-4'>Well Water Product Reviews</h1>
          <p className='text-lg text-white/70 max-w-2xl'>Honest, spec-driven reviews of the best well water products — matched to your actual water test results, not marketing claims.</p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Reviews' }]} />

      {/* Article Grid */}
      <section className='py-16'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {reviews.map((review) => (
              <Link key={review.href} href={review.href} className='group rounded-xl overflow-hidden border border-[#C8DDD7] hover:shadow-lg transition-shadow bg-white'>
                <div className='relative h-48 overflow-hidden'>
                  <Image src={review.image} alt={review.title} fill className='object-cover group-hover:scale-105 transition-transform duration-300' />
                  <span className='absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
                </div>
                <div className='p-4'>
                  <h2 className='font-bold text-[#0D1F1A] group-hover:text-[#1D9E75] mb-2'>{review.title}</h2>
                  <p className='text-sm text-[#3D5A52] line-clamp-2 mb-2'>{review.description}</p>
                  <span className='text-xs text-[#5DCAA5] font-medium'>{review.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Form CTA */}
      <section className='py-16' style={{ backgroundColor: '#0D3D30' }}>
        <div className='container-custom text-center'>
          <h2 className='text-3xl font-bold text-white mb-4'>Need a Well Professional?</h2>
          <p className='text-white/70 text-lg max-w-xl mx-auto mb-8'>Get free quotes from licensed well contractors in your area. No obligation, no spam.</p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
