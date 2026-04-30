import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import WellWaterTreatmentCostCalculator from './Calculator'
import CtaLink from './CtaLink'

export const metadata: Metadata = {
  title: 'Well Water Treatment Cost Calculator (2026): How Much Does Well Water Treatment Cost? | The Well Guide',
  description: 'Free 2026 well water treatment cost calculator. Get an instant estimate by water issue, treatment level, home size, and region. Most well water treatment systems cost $800 to $4,000 installed.',
  openGraph: {
    title: 'Well Water Treatment Cost Calculator 2026: Estimate Your Total Cost',
    description: 'Free calculator that estimates well water treatment cost by issue, treatment level, home size, occupancy, and region. Built on real 2026 contractor pricing.',
    url: 'https://www.thewell.guide/cost-guides/well-water-treatment-cost-calculator',
    siteName: 'The Well Guide',
    type: 'website',
    images: [{ url: 'https://www.thewell.guide/well%20treatmentoptions.jpg', width: 1200, height: 630, alt: 'Well water treatment cost calculator' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Well Water Treatment Cost Calculator 2026',
    description: 'Estimate well water treatment cost by water issue, home size, and region. Free 2026 calculator from The Well Guide.',
    images: ['https://www.thewell.guide/well%20treatmentoptions.jpg'],
  },
  alternates: { canonical: 'https://www.thewell.guide/cost-guides/well-water-treatment-cost-calculator' },
}

const PAGE_URL = 'https://www.thewell.guide/cost-guides/well-water-treatment-cost-calculator'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does well water treatment cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential well water treatment systems cost $800 to $4,000 fully installed depending on the water issue. Sediment prefilters run $200 to $1,200. Water softeners for hard water run $800 to $2,800. Iron and manganese filters run $900 to $4,000. Sulfur removal systems run $1,500 to $4,000. UV disinfection for bacteria runs $1,000 to $2,500. Wells with multiple problems that need a multi-stage system run $2,500 to $8,000 or more. This calculator anchors to those published ranges and adjusts for your specific home size, occupancy, regional cost factor, install complexity, and equipment grade.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of treatment do I need for my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on what your water test shows. Hard water is treated with an ion-exchange water softener. Sediment is removed with a whole-house prefilter. Iron and manganese require a dedicated iron filter, often air injection or catalytic media. Sulfur (rotten egg smell) needs an oxidizing filter or chemical feed system. Bacteria require a UV disinfection system paired with a sediment prefilter. Wells with more than one problem need a multi-stage system designed in the right sequence: sediment first, then iron or sulfur removal, then softener, then UV.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I test my water before buying any equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, always. A $50 to $200 lab test tells you exactly what is in your water, what concentrations you have, and what equipment is the right size. Buying equipment without a test is the most common reason homeowners end up with the wrong system or an oversized softener that wastes salt. The EPA recommends testing well water annually for coliform bacteria and nitrates, and every two to three years for hardness, iron, manganese, and sulfur compounds.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does well water treatment equipment last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Quality equipment lasts a long time when sized and maintained correctly. Water softeners last 10 to 15 years, sometimes 20. Iron filters last 8 to 12 years. UV systems last 10+ years on the housing, with the bulb replaced every 12 months. Sediment prefilter cartridges are replaced every 3 to 12 months depending on water quality. Annual service costs run $100 to $300 for most systems. Premium equipment with stainless tanks and smart controls lasts longer and is easier to service.',
      },
    },
    {
      '@type': 'Question',
      name: 'How accurate is this calculator?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The calculator is anchored to published 2026 cost ranges for each well water treatment category and adjusts for treatment level, home size, occupancy, regional cost factor, and install complexity. It is meant as a planning estimate so you can spot inflated bids and budget realistically before any contractor walks the basement. Local labor rates, water test results, plumbing condition, and equipment brand can move your actual quoted price in either direction. Always test your well water first and get two to three itemized written quotes from licensed installers.',
      },
    },
  ],
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': PAGE_URL,
  url: PAGE_URL,
  name: 'Well Water Treatment Cost Calculator 2026',
  description: 'Free 2026 calculator that estimates well water treatment cost by water issue, treatment level, home size, occupancy, and region.',
  isPartOf: { '@type': 'WebSite', name: 'The Well Guide', url: 'https://www.thewell.guide' },
  inLanguage: 'en-US',
  mainEntity: { '@id': `${PAGE_URL}#calculator` },
}

const softwareSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': `${PAGE_URL}#calculator`,
  name: 'Well Water Treatment Cost Calculator',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Free interactive calculator that estimates well water treatment cost by water issue, treatment level, home size, occupancy, regional cost factor, and install complexity. Recommends a treatment setup based on the issue you select.',
  url: PAGE_URL,
  featureList: [
    'Estimates by water issue (sediment, hardness, iron, sulfur, bacteria, multiple)',
    'Recommends a specific treatment setup for each issue',
    'Adjusts for treatment level (basic, standard, premium equipment)',
    'Adjusts for home size and occupancy',
    'Factors in regional cost differences',
    'Accounts for install complexity and access',
  ],
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'The Well Guide', url: 'https://www.thewell.guide' },
}

export default function WellWaterTreatmentCostCalculatorPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src='/well treatmentoptions.jpg'
          alt='Well water treatment cost calculator'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0D3D30] via-[#0D3D30]/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#854F0B' }}>Calculator</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Well Water Treatment<br />
            Cost Calculator <span style={{ color: '#5DCAA5' }}>2026</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-4 font-medium leading-relaxed'>
            Estimate your total well water treatment cost in under a minute. Built on the same 2026 price ranges in our well water treatment options guide, with adjustments for your water issue, equipment grade, home size, region, and install scope.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Well Water Treatment Cost Calculator' },
      ]} />

      {/* Main */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* Quick answer */}
        <div className='mb-10 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            How much does well water treatment cost? Most residential well water treatment systems cost $800 to $4,000 fully installed. The water issue you are treating, the equipment grade, and your home size drive most of the variation. Use the calculator below for a personalized range and a recommended setup, then compare it against two to three written installer quotes. For the full breakdown of treatment options, see our <Link href='/guides/well-water-treatment-options' className='underline font-semibold' style={{ color: '#0F6E56' }}>well water treatment options guide</Link>.
          </p>
        </div>

        {/* Intro */}
        <div className='mb-10'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>
            Well water treatment pricing depends almost entirely on what is in your water. A simple sediment problem can be solved for a few hundred dollars. A combination of hardness, iron, and bacteria can require a multi-stage system that approaches eight thousand dollars installed. Knowing the right range before contractors arrive is the difference between a fair quote and an inflated one.
          </p>
          <p className='text-slate-700 leading-relaxed text-sm'>
            This calculator is anchored to the published 2026 cost ranges for each treatment category and weighted for the variables that actually move price: equipment grade, home size, occupancy, regional labor rates, and install complexity. The result includes a recommended setup so you can compare apples to apples on every quote.
          </p>
        </div>

        {/* Calculator */}
        <div className='mb-12'>
          <WellWaterTreatmentCostCalculator />
        </div>

        {/* Quote CTA below result */}
        <div className='mb-12 rounded-2xl p-6 sm:p-8 text-white' style={{ backgroundColor: '#0D3D30' }}>
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div>
              <p className='text-xs font-bold uppercase tracking-[0.2em] mb-2' style={{ color: '#5DCAA5' }}>Need a real number?</p>
              <h2 className='text-2xl font-bold mb-1'>Compare quotes from local water treatment pros</h2>
              <p className='text-white/70 text-sm max-w-xl'>See what your treatment system should actually cost in your area. Free, no obligation, no spam.</p>
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

        {/* Recommended systems by problem */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Recommended Systems</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Recommended treatment by water problem</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Sediment / sand / cloudy water</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Whole-house sediment prefilter, typically 5 to 20 micron. Removes sand, silt, and rust particles before they reach a softener, water heater, or fixtures. Cheapest fix and the first stage of nearly every multi-stage well treatment system. Typical installed cost: $200 to $1,200.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Hard water / scale buildup</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Whole-house ion-exchange water softener sized to your hardness level (grains per gallon) and household demand. Salt-based softeners are the only treatment that actually removes calcium and magnesium ions from water. Typical installed cost: $800 to $2,800.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Iron and manganese (orange or black staining)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Dedicated iron filter (air injection or catalytic media) for moderate to high iron, or a softener plus iron filter combo when hardness is also present. Low dissolved iron (under 3 ppm) can sometimes be handled by a softener with iron-removing resin. Typical installed cost: $900 to $4,000.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Sulfur smell (rotten egg odor)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Air-injection oxidizing filter for most household sulfur loads. Heavier sulfur or iron-bacteria cases use a chemical feed system (chlorine or hydrogen peroxide) followed by a contact tank and carbon filter. Typical installed cost: $1,500 to $4,000.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Bacteria or coliform contamination</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Whole-house ultraviolet (UV) disinfection system sized for peak flow rate, paired with a 5-micron sediment prefilter. UV inactivates bacteria, viruses, and protozoa as water passes the bulb. Shock chlorinate the well first, then commission UV. Typical installed cost: $1,000 to $2,500.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Multiple issues at once</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Multi-stage whole-house system in the correct order: sediment prefilter, then iron or sulfur removal, then softener, then UV. Sequence matters because each stage protects the next. Have one licensed installer design the full system after a complete water test. Typical installed cost: $2,500 to $8,000 or more.
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
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Typical Well Water Treatment Cost by System</h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>System</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Solves</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Total installed</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className='p-3 border border-slate-200 text-slate-700'>Sediment prefilter</td><td className='p-3 border border-slate-200 text-slate-700'>Sand, silt, cloudy water</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$200 to $1,200</td></tr>
                <tr className='bg-slate-50'><td className='p-3 border border-slate-200 text-slate-700'>Water softener</td><td className='p-3 border border-slate-200 text-slate-700'>Hard water, scale</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$800 to $2,800</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700'>Iron filter</td><td className='p-3 border border-slate-200 text-slate-700'>Iron, manganese, staining</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$900 to $4,000</td></tr>
                <tr className='bg-slate-50'><td className='p-3 border border-slate-200 text-slate-700'>Sulfur / oxidizing filter</td><td className='p-3 border border-slate-200 text-slate-700'>Rotten egg smell</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$1,500 to $4,000</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700'>UV disinfection</td><td className='p-3 border border-slate-200 text-slate-700'>Bacteria, coliform, viruses</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$1,000 to $2,500</td></tr>
                <tr className='bg-slate-50'><td className='p-3 border border-slate-200 text-slate-700'>Multi-stage system</td><td className='p-3 border border-slate-200 text-slate-700'>Two or more issues</td><td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$2,500 to $8,000+</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-xs text-slate-500 mt-3'>Ranges assume scheduled weekday installation by a licensed water treatment contractor. Annual service runs $100 to $300 per system. Cartridge or media changes are extra.</p>
        </div>

        {/* What can increase price */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cost Drivers</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What can increase well water treatment cost</h2>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Multiple issues in one well</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                A well with hardness alone might cost $1,500 to fix. Add iron and bacteria and you are looking at a multi-stage system in the $4,000 to $8,000 range. Each stage adds equipment, plumbing, and labor.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Equipment grade</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Premium equipment (stainless tanks, smart controls, longer warranties, higher-grade media) costs 20 to 40 percent more than basic gear, but lasts longer and is easier to service. Basic gear can be the right call on a rental or short-term plan.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Home size and occupancy</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Larger homes and households need higher-flow equipment, larger softener resin tanks, larger contact tanks for oxidizing systems, and more capable UV units. Sizing the system correctly avoids premature failure and saves on operating cost.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Regional labor rates</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Northeast and West Coast labor runs 15 to 30 percent above the national average. Rural Southeast and parts of the Midwest run 5 to 15 percent below. Shop two to three local installers, not just franchise dealers.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Install complexity</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                An open basement with the main line, a drain, and an outlet within reach is the cheapest install. A crawl space, new electrical, new drain line, or repiping can add $300 to $1,500 to the labor portion.
              </p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Annual service and consumables</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Salt for a softener runs $50 to $150 per year. UV bulbs run $80 to $150 annually. Cartridge prefilters run $20 to $80 each, replaced every 3 to 12 months. Media beds are rebedded every 8 to 15 years for a few hundred dollars.
              </p>
            </div>
          </div>
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
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How much does well water treatment cost?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Most residential well water treatment systems cost $800 to $4,000 fully installed depending on the issue. Sediment prefilters run $200 to $1,200. Water softeners run $800 to $2,800. Iron filters run $900 to $4,000. Sulfur removal systems run $1,500 to $4,000. UV disinfection runs $1,000 to $2,500. Multi-stage systems for wells with several issues run $2,500 to $8,000 or more.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>What kind of treatment do I need for my well water?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>It depends entirely on what your water test shows. Hard water needs an ion-exchange softener. Sediment needs a whole-house prefilter. Iron and manganese need a dedicated iron filter, often air injection or catalytic media. Sulfur needs an oxidizing filter or chemical feed system. Bacteria need a UV disinfection system with a sediment prefilter. Wells with multiple problems need a multi-stage system in the right sequence.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>Should I test my water before buying any equipment?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Yes, always. A $50 to $200 lab test tells you exactly what is in your water and what equipment is the right size. Buying equipment without a test is the most common reason homeowners end up with the wrong system. The EPA recommends testing well water annually for coliform bacteria and nitrates and every two to three years for hardness, iron, manganese, and sulfur compounds.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How long does well water treatment equipment last?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Water softeners last 10 to 15 years, sometimes 20. Iron filters last 8 to 12 years. UV systems last 10+ years on the housing, with the bulb replaced every 12 months. Sediment cartridges are replaced every 3 to 12 months depending on water quality. Annual service runs $100 to $300 for most systems.</div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg group'>
              <summary className='p-4 font-semibold text-slate-900 text-sm cursor-pointer hover:bg-slate-50 rounded-lg'>How accurate is this calculator?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>The calculator is anchored to published 2026 cost ranges for each treatment category and adjusts for treatment level, home size, occupancy, regional cost factor, and install complexity. It is meant as a planning estimate. Always test your well water and get two to three itemized written quotes from licensed installers before committing.</div>
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
            <h2 className='text-3xl font-bold text-white mb-3'>Get Free Well Water Treatment Quotes</h2>
            <p className='text-white/70'>Connect with licensed local water treatment professionals. No obligation, no spam, no contractor robo-calls.</p>
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
            <Link href='/guides/well-water-treatment-options' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Guide</p>
              <h3 className='font-bold text-slate-900 mb-1'>Well Water Treatment Options</h3>
              <p className='text-sm text-slate-600'>The full breakdown of every treatment type that this calculator is built on.</p>
            </Link>
            <Link href='/cost-guides/whole-house-water-filter-cost' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Cost Guide</p>
              <h3 className='font-bold text-slate-900 mb-1'>Whole House Water Filter Cost</h3>
              <p className='text-sm text-slate-600'>Equipment costs, install costs, and 10-year ownership picture for whole house filters.</p>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Guide</p>
              <h3 className='font-bold text-slate-900 mb-1'>How to Test Well Water</h3>
              <p className='text-sm text-slate-600'>Test before you buy any equipment. Here is what to test for and where.</p>
            </Link>
            <Link href='/cost-guides/well-water-testing-cost' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
              <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Cost Guide</p>
              <h3 className='font-bold text-slate-900 mb-1'>Well Water Testing Cost</h3>
              <p className='text-sm text-slate-600'>What lab testing actually costs in 2026 and which panels are worth it.</p>
            </Link>
          </div>
        </div>
      </article>
    </>
  )
}
