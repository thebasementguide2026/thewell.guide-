import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'

export const metadata = {
  title: 'Well Water Problems | The Well Guide',
  description: 'Diagnose and fix common private well problems — sulfur smell, low pressure, brown water, no water, pump issues, bad taste, and more.',
  alternates: { canonical: 'https://www.thewell.guide/problems' },
}

const problems = [
  { title: 'Well Water Smells Like Sulfur or Rotten Eggs: Causes and Fixes', href: '/problems/well-water-smells-like-sulfur', description: 'If your well water smells like sulfur or rotten eggs, the cause is hydrogen sulfide gas — but where it comes from determines how you fix it. Covers all four sources, diagnosis, and every treatment option.', image: '/glassofwater.jpg', readTime: '14 min read' },
  { title: 'Well Water Pressure Low: 6 Causes and How to Fix Each One', href: '/problems/well-water-pressure-low', description: 'Low well water pressure has six distinct causes — waterlogged pressure tank, failing pump, dropping water table, clogged well screen, faulty pressure switch, or clogged filters — and each requires a different fix.', image: '/well pressure.jpg', readTime: '15 min read' },
  { title: 'Brown or Rusty Well Water: 6 Causes and How to Fix Each One', href: '/problems/brown-rusty-well-water', description: 'Brown, orange, or rusty well water is almost always caused by iron, manganese, sediment, corroded pipes, disturbed sediment, or surface water infiltration. The color and timing of the discoloration are the diagnostic keys.', image: '/Well guide brown water.jpg', readTime: '15 min read' },
  { title: 'No Water from Well: A Step-by-Step Diagnosis Guide', href: '/problems/no-water-from-well', description: 'Turned on the tap and got nothing? This guide walks you through every cause of no water from a well in order of likelihood, from a tripped breaker you can fix in 30 seconds to a failed pump that needs a contractor.', image: '/nowaterinwell.jpg', readTime: '14 min read' },
  { title: 'Well Pump Running Constantly: 6 Causes and How to Diagnose Each One', href: '/problems/well-pump-running-constantly', description: 'A well pump that won\'t shut off is an emergency. Continuous operation overheats the motor and can destroy a $2,000 pump within hours. This guide shows you how to diagnose every cause in order of likelihood.', image: '/constantlyrunning.jpg', readTime: '13 min read' },
  { title: 'Well Pump Short Cycling: Causes, Diagnosis, and How to Fix It', href: '/problems/well-pump-short-cycling', description: 'A well pump that turns on and off every few seconds is short cycling. The cause is almost always a waterlogged pressure tank. This guide shows you how to diagnose every cause, what to check yourself, and when to call a contractor.', image: '/cycling.jpg', readTime: '12 min read' },
  { title: 'Well Water Tastes Bad: What Each Taste Tells You and How to Fix It', href: '/problems/well-water-tastes-bad', description: 'A complete taste-to-cause diagnostic guide for private well water. Every bad taste mapped to its specific cause, health risk level, required test, and treatment.', image: '/well tastebad.jpg', readTime: '12 min read' },
  { title: 'Well Running Dry: Diagnose the Cause and Know Exactly What to Do', href: '/problems/well-running-dry', description: 'The complete guide to a well running dry. Learn the four distinct scenarios — temporary drawdown, seasonal water table drop, pump set wrong, and true aquifer depletion — and the specific diagnosis and fix for each.', image: '/well dry.png', readTime: '13 min read' },
]

export default function ProblemsIndexPage() {
  return (
    <>
      {/* Hero Header */}
      <section style={{ backgroundColor: '#0D3D30' }} className='text-white py-16'>
        <div className='container-custom'>
          <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEMS</span>
          <h1 className='text-4xl font-extrabold mb-4'>Well Water Problems</h1>
          <p className='text-lg text-white/70 max-w-2xl'>Diagnose and fix common private well issues — from sulfur smell and low pressure to pumps that won&apos;t stop running.</p>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Problems' }]} />

      {/* Article Grid */}
      <section className='py-16'>
        <div className='container-custom'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {problems.map((problem) => (
              <Link key={problem.href} href={problem.href} className='group rounded-xl overflow-hidden border border-[#C8DDD7] hover:shadow-lg transition-shadow bg-white'>
                <div className='relative h-48 overflow-hidden'>
                  <Image src={problem.image} alt={problem.title} fill className='object-cover group-hover:scale-105 transition-transform duration-300' />
                  <span className='absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-md' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
                </div>
                <div className='p-4'>
                  <h2 className='font-bold text-[#0D1F1A] group-hover:text-[#1D9E75] mb-2'>{problem.title}</h2>
                  <p className='text-sm text-[#3D5A52] line-clamp-2 mb-2'>{problem.description}</p>
                  <span className='text-xs text-[#5DCAA5] font-medium'>{problem.readTime}</span>
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
