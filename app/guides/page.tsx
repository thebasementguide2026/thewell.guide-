import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Well Water Guides | The Well Guide',
  description: 'Comprehensive guides for private well owners — maintenance, testing, treatment, pressure tanks, contaminants, and more.',
  alternates: { canonical: 'https://www.thewell.guide/guides' },
}

const guides = [
  { title: 'The Complete Guide to Private Well Water Systems (2026)', href: '/guides/complete-well-guide', description: 'The definitive guide to private well water systems for homeowners. How wells work, the full system from aquifer to faucet, all 12 components explained, water quality by region, annual maintenance schedule, 10-year cost table, seasonal care, what fails when, and links to every deep-dive guide on well.guide.', image: '/complete-well-guide.jpg', readTime: '22 min read' },
  { title: 'How to Test Your Well Water', href: '/guides/how-to-test-well-water', description: '43 million Americans on private wells are solely responsible for testing their own water. This guide covers what to test for, when to test, how to collect a sample correctly, and what to do when something comes back wrong.', image: '/watertest.jpg', readTime: '16 min read' },
  { title: 'How a Well Pump Works: The Complete System Explained', href: '/guides/how-well-pump-works', description: 'Understanding how a well pump works is the foundation for diagnosing every well problem. This guide explains the full pressure cycle, how submersible and jet pumps differ, what the pressure tank actually does, and what two-wire vs three-wire means for repairs.', image: '/howwellworks.jpg', readTime: '14 min read' },
  { title: 'Well Water Contaminants: The Complete Guide for Private Well Owners', href: '/guides/well-water-contaminants', description: 'A complete reference guide to every contaminant found in private well water. For each contaminant: where it comes from, what it does to health, the EPA limit, which regions are most affected, how to test, and how to treat.', image: '/wellguidecontaminants.jpg', readTime: '18 min read' },
  { title: 'Arsenic in Well Water: How to Test, Treat, and Protect Your Family 2026', href: '/guides/arsenic-in-well-water', description: 'Arsenic in well water is a serious health risk at levels above 10 ppb. Complete guide to testing, treatment options (reverse osmosis, activated alumina, whole-house systems), costs, and EPA standards for private well owners.', image: '/Arsenic in well water .jpg', readTime: '16 min read' },
  { title: 'Iron in Well Water: Types, Treatment, and Costs 2026', href: '/guides/iron-in-well-water', description: 'Iron in well water causes orange staining, metallic taste, and plumbing damage. Complete guide to the 4 types of iron, treatment options (air injection, water softeners, chlorination), costs, and the 0.3 mg/L EPA limit.', image: '/ironinwellwater.jpg', readTime: '14 min read' },
  { title: 'Well Water Treatment Options: Match the Right System to Your Contaminant', href: '/guides/well-water-treatment-options', description: 'The complete neutral guide to well water treatment. Every treatment technology explained — sediment filters, carbon filters, UV disinfection, water softeners, reverse osmosis, oxidizing filters, and more.', image: '/well treatmentoptions.jpg', readTime: '14 min read' },
  { title: 'Annual Well Maintenance Checklist', href: '/guides/well-maintenance-checklist', description: 'The complete seasonal and annual maintenance schedule every well owner needs. Covers spring startup, summer monitoring, fall winterization, and professional inspections.', image: '/well maintance.jpg', readTime: '14 min read' },
  { title: 'Well Pressure Tank: The Complete Guide for Private Well Owners', href: '/guides/well-pressure-tank-guide', description: 'Everything a private well owner needs to know about pressure tanks: how they work, the three types, how to size one correctly, the best brands, maintenance schedule, failure signs, and when to replace.', image: '/pressureguide.jpg', readTime: '16 min read' },
  { title: 'Buying a House With a Well: The Complete Homebuyer\'s Due Diligence Guide', href: '/guides/buying-house-with-well', description: 'Everything a homebuyer needs to know before purchasing a house with a private well. Well inspection checklist, water tests by contaminant, loan requirements, negotiation dollar amounts, walk-away conditions, and a 30-day post-closing checklist.', image: '/buying a home on well.jpg', readTime: '18 min read' },
  { title: 'Well Water vs. City Water: An Honest Comparison for Homeowners', href: '/guides/well-water-vs-city-water', description: 'A complete comparison of well water and city water covering cost, quality, taste, health risk, maintenance, reliability, and which is better for your specific situation. Includes side-by-side comparison table, annual cost breakdown, and the honest answer to which is actually safer.', image: '/_well-water-vs-city-water.jpg', readTime: '20 min read' },
  { title: 'Hard Water in Wells: What It Is, What It Costs You, and How to Fix It', href: '/guides/hard-water-well', description: 'The complete guide to hard water in private wells. What hardness levels mean in grains per gallon, how to test for hardness at home, the real cost of untreated hard water on appliances and plumbing, and the correct treatment sequence for wells with both iron and hardness.', image: '/hard-water-well.jpg', readTime: '13 min read' },
  { title: 'Dug Well vs. Drilled Well: The Complete Comparison for Homeowners', href: '/guides/dug-well-vs-drilled-well', description: 'The complete comparison of dug wells and drilled wells covering depth, contamination risk, drought vulnerability, water quality, construction standards, setback requirements, cost, lifespan, and what to do if you are buying a property with a dug well.', image: '/dug-well-vs-drilled-well.jpg', readTime: '13 min read' },
  { title: 'How to Shock Chlorinate a Well: Step-by-Step Instructions', href: '/guides/how-to-shock-chlorinate-well', description: 'Complete instructions for shock chlorinating a private well after a positive bacteria test, flooding, or well service. Includes the casing volume calculation, correct bleach dose, the full 8-step procedure, and retest requirement.', image: '/how-to-shock-chlorinate-well.jpg', readTime: '14 min read' },
  { title: 'Well Pump Maintenance: The Complete Annual Schedule', href: '/guides/well-pump-maintenance', description: 'The complete well pump and system maintenance guide. Annual schedule, pressure tank pre-charge check, wellhead inspection checklist, seasonal tasks, yield monitoring, professional inspection scope, and maintenance log guidance.', image: '/well-pump-maintenance.jpg', readTime: '13 min read' },
]

export default function GuidesIndexPage() {
  return (
    <>
      {/* Hero Header */}
      <section style={{ backgroundColor: '#0D3D30' }} className='text-white py-16'>
        <div className='container-custom'>
          <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>GUIDES</span>
          <h1 className='text-4xl font-extrabold mb-4'>Well Water Guides</h1>
          <p className='text-lg text-white/70 max-w-2xl'>Comprehensive, homeowner-focused guides on every aspect of private well ownership.</p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Guides' }]} />

      {/* Article Grid */}
      <section className='py-16'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {guides.map((guide) => (
              <Link key={guide.href} href={guide.href} className='group rounded-xl overflow-hidden border border-[#C8DDD7] hover:shadow-lg transition-shadow bg-white'>
                <div className='relative h-48 overflow-hidden'>
                  <Image src={guide.image} alt={guide.title} fill className='object-cover group-hover:scale-105 transition-transform duration-300' />
                  <span className='absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>GUIDE</span>
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
