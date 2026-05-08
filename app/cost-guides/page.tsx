import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Well Water Cost Guides | The Well Guide',
  description: 'Real-world cost breakdowns for well pump replacement, water testing, pressure tank replacement, and more — with 2026 pricing.',
  alternates: { canonical: 'https://www.thewell.guide/cost-guides' },
}

const costGuides = [
  { title: 'Well Pump Replacement Cost 2026: What You\'ll Actually Pay', href: '/cost-guides/well-pump-replacement-cost', description: 'Well pump replacement costs $1,500 to $4,000 for most residential systems. This guide breaks down every cost factor by depth and pump type, explains when to repair vs replace, and shows how to get an accurate quote.', image: '/well cost.jpg', readTime: '14 min read' },
  { title: 'Well Pump Replacement Cost Calculator 2026', href: '/cost-guides/well-pump-replacement-cost-calculator', description: 'Free homeowner calculator that estimates well pump replacement cost by pump type, depth, demand, region, and project scope. Built on the same 2026 cost ranges as our cost guide.', image: '/WellPumpReplacementCostCalculator.jpg', readTime: 'Calculator' },
  { title: 'Well Drilling Cost Calculator 2026', href: '/cost-guides/well-drilling-cost-calculator', description: 'Free homeowner calculator that estimates the cost to drill and equip a new water well by depth, geology, casing size, pump system, trenching distance, and region.', image: '/well-drilling-cost.jpg', readTime: 'Calculator' },
  { title: 'Well Water Treatment Cost Calculator 2026', href: '/cost-guides/well-water-treatment-cost-calculator', description: 'Free homeowner calculator that estimates well water treatment cost by water issue, treatment level, home size, occupancy, and region. Recommends a treatment setup based on the issue you select.', image: '/TreatmentCostCalculator.jpg', readTime: 'Calculator' },
  { title: 'Well Water Testing Cost: What You\'ll Pay in 2026', href: '/cost-guides/well-water-testing-cost', description: 'Well water testing costs range from free to $500 depending on what you test for and where you get it done. Most homeowners spend $50 to $200 for annual testing.', image: '/watertestingcost.jpg', readTime: '13 min read' },
  { title: 'Pressure Tank Replacement Cost: What to Expect in 2026', href: '/cost-guides/pressure-tank-replacement-cost', description: 'The complete cost breakdown for well pressure tank replacement: tank prices by size and brand, labor rates, what add-ons are worth it, regional price differences, DIY vs professional, and how to avoid overpaying.', image: '/pressurecost.jpg', readTime: '11 min read' },
  { title: 'Well Drilling Cost: What Homeowners Actually Pay in 2026', href: '/cost-guides/well-drilling-cost', description: 'The complete well drilling cost guide for 2026. Per-foot drilling rates, all-in system costs by depth, regional price differences, what every contractor quote should include, and the hidden costs most homeowners miss.', image: '/well-drilling-cost.jpg', readTime: '14 min read' },
  { title: 'Whole House Water Filter Cost: What Well Owners Actually Pay in 2026', href: '/cost-guides/whole-house-water-filter-cost', description: 'The complete cost guide to whole house water filtration for well water. Equipment costs by system type, installation costs, annual maintenance costs, cost by contaminant problem, the 10-year ownership picture, and exactly what a quote should include.', image: '/whole-house-water-filter-cost.jpg', readTime: '13 min read' },
]

export default function CostGuidesIndexPage() {
  return (
    <>
      {/* Hero Header */}
      <section style={{ backgroundColor: '#0D3D30' }} className='text-white py-16'>
        <div className='container-custom'>
          <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDES</span>
          <h1 className='text-4xl font-extrabold mb-4'>Well Water Cost Guides</h1>
          <p className='text-lg text-white/70 max-w-2xl'>Real-world pricing for well pumps, testing, pressure tanks, and more — so you know what to expect before you call a contractor.</p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Cost Guides' }]} />

      {/* Article Grid */}
      <section className='py-16'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {costGuides.map((guide) => (
              <Link key={guide.href} href={guide.href} className='group rounded-xl overflow-hidden border border-[#C8DDD7] hover:shadow-lg transition-shadow bg-white'>
                <div className='relative h-48 overflow-hidden'>
                  <Image src={guide.image} alt={guide.title} fill className='object-cover group-hover:scale-105 transition-transform duration-300' />
                  <span className='absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
                </div>
                <div className='p-4'>
                  <h2 className='font-bold text-[#0D1F1A] group-hover:text-[#1D9E75] mb-2'>{guide.title}</h2>
                  <p className='text-sm text-[#3D5A52] line-clamp-2 mb-2'>{guide.description}</p>
                  <span className='text-xs text-[#5DCAA5] font-medium'>{guide.readTime}</span>
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
