import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import WellPumpCostCalculator from './Calculator'
import CtaLink from './CtaLink'
import PremiumPreview from './PremiumPreview'

export const metadata: Metadata = {
  title: 'Well Pump Replacement Cost Calculator 2026: Estimate Your Total Cost | The Well Guide',
  description: 'Estimate well pump replacement cost by pump type, depth, home size, and region. Free 2026 calculator with realistic price ranges before you call a contractor.',
  openGraph: {
    title: 'Well Pump Replacement Cost Calculator 2026: Estimate Your Total Cost',
    description: 'Free calculator that estimates well pump replacement cost by pump type, depth, home demand, and region. Built on real 2026 contractor pricing.',
    url: 'https://www.thewell.guide/cost-guides/well-pump-replacement-cost-calculator',
    siteName: 'The Well Guide',
    type: 'website',
    images: [{ url: 'https://www.thewell.guide/well%20cost.jpg', width: 1200, height: 630, alt: 'Well pump replacement cost calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Well Pump Replacement Cost Calculator 2026',
    description: 'Estimate well pump replacement cost by pump type, depth, and region. Free 2026 calculator from The Well Guide.',
    images: ['https://www.thewell.guide/well%20cost.jpg'],
  },
  alternates: { canonical: 'https://www.thewell.guide/cost-guides/well-pump-replacement-cost-calculator' },
}

const PAGE_URL = 'https://www.thewell.guide/cost-guides/well-pump-replacement-cost-calculator'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to replace a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential well pump replacements cost $1,500 to $4,000 fully installed including pump, drop pipe, wiring, and labor. The national average is around $1,900. Shallow well jet pumps run $800 to $1,800. Submersible pumps in 100 to 250 foot wells run $1,500 to $3,000. Submersible pumps in 250 to 400 foot wells run $2,800 to $5,500. Wells over 400 feet can reach $4,000 to $8,000 or more. This calculator anchors to those published ranges and adjusts for your specific home demand, regional cost factor, replacement difficulty, and whether you are also replacing the pressure tank or controls.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does well depth affect the price?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depth is the single biggest variable in the total cost. Every 100 feet adds roughly $500 to $1,000 in drop pipe, wire, and labor. A 100-foot submersible job costs roughly half what a 400-foot job costs for the same pump unit. On wells over 250 feet, labor and pipe become a larger share of the bill than the pump itself, which is why the calculator weights depth heavily for submersible installs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a submersible pump more expensive than a jet pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For shallow wells under 25 feet, a jet pump is usually cheaper because it sits above ground and is simple to swap. Once the well is deeper than 25 feet, a submersible pump becomes the standard and the cost rises with depth. A shallow jet pump replacement runs $800 to $1,800. A submersible pump in a 100 to 250 foot well runs $1,500 to $3,000. A submersible in a 250 to 400 foot well runs $2,800 to $5,500. The pump unit itself is similarly priced, but pulling and reinstalling at depth is what drives the gap.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I replace the pressure tank at the same time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if the tank is more than 8 years old or near the pump\'s age. Adding pressure tank replacement while the contractor is already on site costs $200 to $500 incremental, far less than scheduling a separate service call later. The calculator includes a Pump + pressure tank + controls option that adds $400 to $1,100 to your range. Replacing them separately later would cost $300 to $700 just for the tank job alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is this calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The calculator is anchored to the published 2026 cost ranges in our well pump replacement cost guide and adjusts for home demand, regional cost factor, replacement difficulty, and additional components. It is meant as a planning estimate so you can spot inflated bids and budget realistically. Local labor rates, permit requirements, drop-pipe length, and electrical condition can move your actual quoted price meaningfully in either direction. Always get two to four itemized written quotes from licensed contractors in your area.',
      },
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: 'Well Pump Replacement Cost Calculator 2026',
  description: 'Free 2026 calculator that estimates well pump replacement cost by pump type, depth, home demand, and region.',
  isPartOf: { '@type': 'WebSite', name: 'The Well Guide', url: 'https://www.thewell.guide' },
  inLanguage: 'en-US',
  mainEntity: { '@id': `${PAGE_URL}#calculator` },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#calculator`,
  name: 'Well Pump Replacement Cost Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Free interactive calculator that estimates well pump replacement cost by pump type, well depth, home demand, regional cost factor, replacement difficulty, and additional components.',
  url: PAGE_URL,
  featureList: [
    'Estimates by pump type (submersible, shallow jet, deep jet, constant-pressure)',
    'Adjusts for well depth from under 100 ft to 400+ ft',
    'Factors in home demand and flow rate',
    'Adjusts for regional cost factor',
    'Accounts for replacement difficulty and access',
    'Adds pressure tank and controls when included in the project',
  ],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'The Well Guide', url: 'https://www.thewell.guide' },
}

export default function WellPumpReplacementCostCalculatorPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className='relative py-16 sm:py-20 overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <div className='relative max-w-7xl mx-auto px-6'>
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#854F0B' }}>Calculator</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-black text-white mb-5 leading-[0.95] tracking-tight max-w-4xl'>
            Well Pump Replacement<br />
            Cost Calculator <span style={{ color: '#5DCAA5' }}>2026</span>
          </h1>
          <p className='text-lg text-white/80 max-w-2xl font-medium leading-relaxed'>
            Estimate your total replacement cost in under a minute. Built on the same 2026 price ranges in our well pump cost guide, with adjustments for your pump type, well depth, demand, region, and project scope.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Well Pump Replacement Cost Calculator' },
      ]} />

      {/* Main */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* Quick answer */}
        <div className='mb-10 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            Most residential well pump replacements cost $1,500 to $4,000 fully installed. Well depth, pump type, and replacement difficulty drive most of the variation. Use the calculator below for a personalized range, then compare it against two to four written contractor quotes. For the full cost breakdown by component, see our <Link href='/cost-guides/well-pump-replacement-cost' className='underline font-semibold' style={{ color: '#0F6E56' }}>well pump replacement cost guide</Link>.
          </p>
        </div>

        {/* Intro */}
        <div className='mb-10'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>
            Most homeowners find out they need a pump replacement at the worst possible moment. This calculator gives you a realistic price range to work from before any contractor quotes arrive, so you can evaluate bids with confidence rather than desperation.
          </p>
          <p className='text-slate-700 leading-relaxed text-sm'>
            The estimate is based on published cost ranges from our parent guide, weighted for the variables that actually move price: pump type, well depth, home demand, regional labor rates, and whether you are also replacing the pressure tank or controls.
          </p>
        </div>

        {/* Calculator */}
        <div className='mb-12'>
          <WellPumpCostCalculator />
        </div>

        {/* Quote CTA below result */}
        <div className='mb-12 rounded-2xl p-6 sm:p-8 text-white' style={{ backgroundColor: '#0D3D30' }}>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div>
              <p className='text-xs font-bold uppercase tracking-[0.2em] mb-2' style={{ color: '#5DCAA5' }}>Need a real number?</p>
              <h2 className='text-2xl font-bold mb-1'>Compare quotes from local well pump pros</h2>
              <p className='text-white/70 text-sm max-w-xl'>See what your replacement should actually cost in your area. Free, no obligation, no spam.</p>
            </div>
            <CtaLink
              href='#get-quotes'
              scrollToId='get-quotes'
              ctaText='Get Free Quotes'
              placement='post_result'
              className='inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-bold text-white whitespace-nowrap transition-colors bg-[#1D9E75] hover:bg-[#178a65]'
            >
              Get Free Quotes &rarr;
            </CtaLink>
          </div>
        </div>

        {/* Premium preview */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Premium</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <PremiumPreview />
        </div>

        {/* What affects cost */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cost Drivers</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What affects well pump replacement cost</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Well depth</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                The single biggest cost driver. Every 100 feet adds roughly $500 to $1,000 in pipe, wire, and labor. A 100-foot well costs roughly half what a 400-foot well costs for the same pump.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump type and horsepower</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Submersible pumps dominate residential wells over 25 feet and run $300 to $1,500 for the unit. Shallow jet pumps are cheaper at $200 to $700. Constant-pressure (VFD) systems add $800 to $2,000 for steadier pressure.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Home demand and flow rate</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                A four-person household with a small irrigation load needs more gallons per minute than a one-person cabin. Higher demand sometimes means a larger pump, larger pressure tank, and slightly higher equipment cost.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Regional cost factor</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Northeast and West Coast labor runs 15 to 30 percent above the national average. Rural Southeast and parts of the Midwest run 5 to 15 percent below. Competitive markets with high well density are usually the cheapest.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Replacement difficulty</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                A clean pull on a recent install is fast and cheap. A stuck pitless adapter, corroded torque arrestor, or compromised wiring can add hours of labor. Difficult site access (steep, muddy, no truck path) raises labor too.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Additional components</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Replacing the pressure tank or control box at the same time adds $400 to $1,100 but avoids a second service call later. If either is more than 8 years old, replace it now.
              </p>
            </div>
          </div>
        </div>

        {/* Typical ranges */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>2026 Pricing</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Typical replacement cost ranges</h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>System type</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Well depth</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Total installed</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className='p-3 border border-slate-200 text-slate-700'>Shallow well jet pump</td><td className='p-3 border border-slate-200 text-slate-700'>Under 25 ft</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$800 to $1,800</td></tr>
                <tr className='bg-slate-50'><td className='p-3 border border-slate-200 text-slate-700'>Deep well jet pump</td><td className='p-3 border border-slate-200 text-slate-700'>25 to 100 ft</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$1,200 to $2,500</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td><td className='p-3 border border-slate-200 text-slate-700'>100 to 250 ft</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$1,500 to $3,000</td></tr>
                <tr className='bg-slate-50'><td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td><td className='p-3 border border-slate-200 text-slate-700'>250 to 400 ft</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$2,800 to $5,500</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td><td className='p-3 border border-slate-200 text-slate-700'>400 ft or deeper</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$4,000 to $8,000+</td></tr>
                <tr className='bg-slate-50'><td className='p-3 border border-slate-200 text-slate-700'>Constant-pressure (VFD)</td><td className='p-3 border border-slate-200 text-slate-700'>Any depth</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Add $800 to $2,000</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-xs text-slate-500 mt-3'>Ranges assume scheduled weekday installation. Emergency or weekend service typically adds 25 to 50 percent to the labor portion.</p>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently asked questions</h2>
          <div className='space-y-3'>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does it cost to replace a well pump?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Most residential well pump replacements cost $1,500 to $4,000 fully installed including pump, drop pipe, wiring, and labor. The national average is around $1,900. Shallow well jet pumps run $800 to $1,800. Submersible pumps in 100 to 250 foot wells run $1,500 to $3,000. Submersible pumps in 250 to 400 foot wells run $2,800 to $5,500. Wells over 400 feet can reach $4,000 to $8,000 or more.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Does well depth affect the price?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Depth is the single biggest variable. Every 100 feet adds roughly $500 to $1,000 in drop pipe, wire, and labor. A 100-foot submersible job costs roughly half what a 400-foot job costs for the same pump unit. On wells over 250 feet, labor and pipe become a larger share of the bill than the pump itself.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Is a submersible pump more expensive than a jet pump?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>For shallow wells under 25 feet, a jet pump is usually cheaper because it sits above ground and is simple to swap. Once the well is deeper than 25 feet, a submersible pump becomes the standard and the cost rises with depth. The pump unit itself is similarly priced, but pulling and reinstalling at depth is what drives the gap.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I replace the pressure tank at the same time?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Yes, if the tank is more than 8 years old or near the pump&apos;s age. Adding pressure tank replacement while the contractor is already on site costs $200 to $500 incremental. The calculator includes a Pump + pressure tank + controls option that adds $400 to $1,100 to your range. Replacing them separately later would cost $300 to $700 just for the tank job alone.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How accurate is this calculator?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>The calculator is anchored to the published 2026 cost ranges in our well pump replacement cost guide and adjusts for home demand, regional cost factor, replacement difficulty, and additional components. It is meant as a planning estimate. Always get two to four itemized written quotes from licensed contractors before committing.</div>
            </details>
          </div>
        </div>

        {/* Newsletter */}
        <div className='mb-12'>
          <BeehiivEmailCapture />
        </div>

        {/* Lead form */}
        <section id='get-quotes' className='py-12 px-6 sm:px-10 rounded-2xl mt-8 scroll-mt-24' style={{ backgroundColor: '#0D3D30' }}>
          <div className='max-w-2xl mx-auto text-center mb-8'>
            <h2 className='text-3xl font-bold text-white mb-3'>Get Free Well Pump Quotes</h2>
            <p className='text-white/70'>Connect with licensed local well professionals. No obligation, no spam, no contractor robo-calls.</p>
          </div>
          <div className='max-w-2xl mx-auto'>
            <LeadForm />
          </div>
        </section>

        {/* Related guides */}
        <div className='mt-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Related</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related well guides</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Link href='/cost-guides/well-pump-replacement-cost' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Cost Guide</p>
              <h3 className='font-bold text-slate-900 mb-1'>Well Pump Replacement Cost 2026</h3>
              <p className='text-sm text-slate-600'>The full breakdown by component, pump type, and depth that this calculator is built on.</p>
            </Link>
            <Link href='/cost-guides/pressure-tank-replacement-cost' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Cost Guide</p>
              <h3 className='font-bold text-slate-900 mb-1'>Pressure Tank Replacement Cost</h3>
              <p className='text-sm text-slate-600'>What it costs to replace the tank alone or alongside a pump job.</p>
            </Link>
            <Link href='/problems/well-pump-failing' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Problem</p>
              <h3 className='font-bold text-slate-900 mb-1'>Signs Your Well Pump Is Failing</h3>
              <p className='text-sm text-slate-600'>Confirm replacement is the right call before scheduling work.</p>
            </Link>
            <Link href='/guides/how-well-pump-works' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Guide</p>
              <h3 className='font-bold text-slate-900 mb-1'>How a Well Pump Works</h3>
              <p className='text-sm text-slate-600'>Background on submersible vs jet pump systems and what each component does.</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
