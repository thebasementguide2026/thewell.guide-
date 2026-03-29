import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Water Testing Cost: What You\'ll Pay in 2026 | The Well Guide',
  description: 'Well water testing costs range from free to $500 or more depending on what you test for and where you get it done. Most homeowners spend $50 to $200 for annual testing. This guide breaks down every cost by contaminant type, explains how to find free testing programs in your state, and covers what mortgage lenders require.',
  openGraph: {
    title: 'Well Water Testing Cost: What You\'ll Pay in 2026',
    description: 'Well water testing costs range from free to $500 depending on what you test for and where you get it done. Most homeowners spend $50 to $200 for annual testing.',
    url: 'https://www.thewell.guide/cost-guides/well-water-testing-cost',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/watertestingcost.jpg', width: 1200, height: 630, alt: 'Water testing kit with sample bottle and printed results on a kitchen counter' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/cost-guides/well-water-testing-cost' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to test well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Annual routine testing costs $20 to $100 for most households, with many county health departments offering free or subsidized basic bacteria and nitrate testing. A comprehensive baseline test when you first own a well costs $150 to $300. PFAS testing costs $150 to $300 separately. A full comprehensive panel runs $300 to $500. Call your county health department before paying commercial rates.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there free well water testing available?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in many areas. County health departments in most states offer free or subsidized basic testing (bacteria and nitrates) for private well owners. Penn State Extension offers free testing for Pennsylvania residents through a CDC-funded program. Minnesota offers free nitrate testing in high-risk counties. New York offers free PFAS testing in affected areas. The EPA Drinking Water Hotline (800-426-4791) can identify free programs in your state. Always call your county health department first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does well water testing cost for a home sale?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Testing for an FHA, VA, or USDA loan typically costs $100 to $175 for the minimum required panel (bacteria, nitrates, nitrites, lead, arsenic) through a certified lab with results on official letterhead. Conventional loans vary by lender and typically require at least bacteria and nitrates, costing $50 to $100. New homeowners should conduct a full baseline test beyond what the lender required within the first year of occupancy.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the cheapest way to test well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cheapest valid option is your county health department, which offers certified bacteria and nitrate testing for free or $20 to $50 in most states. State university extension labs (Penn State, University of Massachusetts, Cornell Cooperative Extension) offer certified testing below commercial rates for state residents. Home test strips are cheaper but cannot detect bacteria, PFAS, arsenic, or lead reliably and are not accepted by health authorities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does PFAS testing for a well cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PFAS testing costs $150 to $300 for a panel covering 40 or more PFAS compounds by EPA Method 533 or 537.1. This is separate from standard well water panels because it requires specialized certified labs. Some states (New York, Maine, Michigan) offer free PFAS testing for well owners near contaminated sites. Check your state department of health website before paying for commercial testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does well water testing cost differ by state?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, significantly. States with strong county health department programs (many Midwest and Mid-Atlantic states) often have free or very low-cost basic testing. Western states typically rely more on private certified labs where individual tests run $30 to $100 each. States with known contamination issues may have state-funded programs covering arsenic, PFAS, or nitrates that do not exist elsewhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does annual well water testing cost over time?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A realistic annual budget is $75 to $150 per year when using county health programs for routine annual testing and commercial labs for periodic comprehensive panels every three to five years. The first year typically costs more ($150 to $300) for a comprehensive baseline. Subsequent years cost $20 to $100 for annual routine testing. Targeted testing after flooding or repairs adds $50 to $150 when needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I test my own well water at home with DIY kits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Home test strips work for monitoring pH, hardness, and iron between annual lab tests but are not reliable substitutes for certified laboratory testing for health decisions. They cannot reliably detect bacteria at safe or unsafe levels, cannot detect PFAS, arsenic, or lead at health-relevant concentrations, and are not accepted by health departments or mortgage lenders as certification of safe water.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Well Water Testing Cost: What You'll Pay in 2026",
  description: 'Well water testing costs range from free to $500 depending on what you test for and where you get it done. Most homeowners spend $50 to $200 for annual testing. This guide breaks down every cost by contaminant type, explains free testing programs by state, and covers mortgage requirements.',
  image: 'https://www.thewell.guide/watertestingcost.jpg',
  datePublished: '2026-03-25',
  dateModified: '2026-03-25',
  author: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://well.guide',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://well.guide',
  },
  mainEntityOfPage: 'https://www.thewell.guide/cost-guides/well-water-testing-cost',
}

export default function WellWaterTestingCost() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src='/watertestingcost.jpg'
          alt='Water testing kit with sample bottle and printed results on a kitchen counter'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0D3D30] via-[#0D3D30]/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#854F0B' }}>Cost Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Well Water Testing Cost:<br />
            <span style={{ color: '#5DCAA5' }}>What You{`'`}ll Pay in 2026</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            What you test for determines the cost. Most annual testing is free or under $100 through county programs most people do not know about.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 13 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Well Water Testing Cost' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Most well owners pay $0 to $50 for annual bacteria and nitrate testing through their county health department — the free option most people do not know exists. Commercial certified lab annual panels run $50 to $150. Comprehensive testing covering metals, PFAS, and organic compounds runs $200 to $500. A baseline comprehensive test when you first move into a home with a well typically costs $150 to $300. Before spending anything on testing, call your county health department first — many offer certified basic testing at no charge or well below commercial rates.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm'>Most of the variation in well water testing costs comes from one factor: what you are actually testing for. Basic bacteria and nitrates can cost $20 at a county health lab. Testing for PFAS alone can cost $150 to $300 because it requires specialized certified labs and methods that most routine testing facilities do not offer. Testing for everything simultaneously can reach $500 or more. Understanding which tests you actually need — based on your location, well conditions, and household situation — prevents overpaying for tests that add no useful information for your specific well.</p>
        </div>

        {/* Start Here: Free and Low-Cost Testing */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Start Here</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Free and Low-Cost Testing You Probably Do Not Know About</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before spending a dollar on private lab testing, check these options. Many well owners pay $100 to $200 for routine annual testing when the same tests are available at no cost through local programs.</p>

          <div className='space-y-4 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>County health departments</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The USGS and EPA both recommend calling your county health department before contacting any private lab. Many counties offer basic bacteria (total coliform and E. coli) and nitrate testing for private well owners at no charge or at heavily subsidized rates of $20 to $50. Florida{`'`}s Department of Health, for example, lists typical county health department testing at $20 to $30 per sample. Wisconsin{`'`}s State Lab of Hygiene offers individual tests starting at $30 for bacteria through county programs. Indiana{`'`}s State Department of Health Laboratory charges $10 for bacteria, fluoride, or nitrate tests.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>State university extension programs</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Land-grant university extension systems in many states operate certified water testing laboratories that serve the public at below-market rates. Penn State{`'`}s Agricultural Analytical Services Laboratory (AASL) is one of the most well-known. Penn State Extension offers free limited well water testing for Pennsylvania residents through a CDC-funded program. University of Massachusetts, University of Minnesota, and Cornell Cooperative Extension all offer certified water testing services to state residents at subsidized rates.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>EPA referral</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The EPA{`'`}s Drinking Water Hotline at (800) 426-4791 can direct you to state-certified labs and identify any free testing programs available in your area. The EPA{`'`}s private well program page also lists state-by-state resources at <a href='https://www.epa.gov/privatewells' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: '#1D9E75' }}>epa.gov/privatewells</a>.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>State-Specific Free Testing Programs</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Several states fund targeted free testing programs based on regional contamination issues. These change annually so confirm current availability before counting on them.</p>

          <div className='overflow-x-auto rounded-lg border border-slate-200 mb-6'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-semibold text-slate-900'>State</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>What Is Available</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>How to Access</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700 font-bold'>Pennsylvania</td>
                  <td className='p-3 text-slate-700'>Free limited testing through Penn State Extension (CDC-funded)</td>
                  <td className='p-3 text-slate-700'>Contact Penn State Extension Drinking Water Program</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700 font-bold'>Minnesota</td>
                  <td className='p-3 text-slate-700'>Free nitrate testing in 8 SE counties; free RO systems if nitrate exceeds 10 mg/L</td>
                  <td className='p-3 text-slate-700'>TAP-IN Program via county Soil and Water Conservation Districts</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700 font-bold'>New York</td>
                  <td className='p-3 text-slate-700'>Free PFAS testing in several counties; treatment rebates if results exceed state standards</td>
                  <td className='p-3 text-slate-700'>NY State Dept of Health PFAS pilot program</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700 font-bold'>Maine</td>
                  <td className='p-3 text-slate-700'>Free arsenic testing vouchers for low-income households</td>
                  <td className='p-3 text-slate-700'>Maine Recovery and Jobs Plan well water program</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700 font-bold'>Washington</td>
                  <td className='p-3 text-slate-700'>Free nitrate and coliform testing in Lower Yakima Valley</td>
                  <td className='p-3 text-slate-700'>Washington State Dept of Health online eligibility form</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700 font-bold'>Indiana</td>
                  <td className='p-3 text-slate-700'>State lab testing at $10 for bacteria, fluoride, or nitrates</td>
                  <td className='p-3 text-slate-700'>Indiana State Dept of Health Laboratory</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700 font-bold'>Florida</td>
                  <td className='p-3 text-slate-700'>County health dept testing at $20 to $30 per sample</td>
                  <td className='p-3 text-slate-700'>Local county health department</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700 font-bold'>Wisconsin</td>
                  <td className='p-3 text-slate-700'>State Lab of Hygiene testing at $30 per test through counties</td>
                  <td className='p-3 text-slate-700'>County health department or SLH directly</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700 font-bold'>Michigan</td>
                  <td className='p-3 text-slate-700'>Free PFAS testing in affected areas near contaminated sites</td>
                  <td className='p-3 text-slate-700'>Michigan EGLE private well program</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700 font-bold'>Massachusetts</td>
                  <td className='p-3 text-slate-700'>UMass Extension certified testing for state residents at below-commercial rates</td>
                  <td className='p-3 text-slate-700'>UMass Amherst Water Testing Lab</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700 font-bold'>New Jersey</td>
                  <td className='p-3 text-slate-700'>Seller-required comprehensive testing at sale; labs certified by NJ DEP</td>
                  <td className='p-3 text-slate-700'>NJ DEP private well testing resources</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700 font-bold'>North Carolina</td>
                  <td className='p-3 text-slate-700'>County health dept basic testing widely available</td>
                  <td className='p-3 text-slate-700'>Local county environmental health office</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm mb-4'>For states not listed: call your county health department directly and ask what they offer for private well owners. Even states without formal programs often have relationships with state labs that provide subsidized testing. The EPA{`'`}s private well program page at <a href='https://www.epa.gov/privatewells' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: '#1D9E75' }}>epa.gov/privatewells</a> lists state-by-state program contacts.</p>

          <p className='text-slate-700 leading-relaxed text-sm'>The practical sequence: call your county health department first. If they offer testing, use it. If not, ask which certified labs they recommend and what they charge. Then consider mail-in certified lab services for anything the county program does not cover.</p>
        </div>

        {/* Cost by Test Type Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Breakdown</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Cost by Test Type: What You Are Actually Paying For</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The most useful way to understand well water testing cost is by contaminant type rather than by package name. Different contaminants require different laboratory methods, different sample containers, and different analytical equipment. That is what drives price variation.</p>

          <div className='overflow-x-auto rounded-lg border border-slate-200 mb-6'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-semibold text-slate-900'>Test Type</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>What It Detects</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Typical Cost</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Analysis Complexity</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Frequency</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Total coliform bacteria</td>
                  <td className='p-3 text-slate-700'>Contamination pathway indicator</td>
                  <td className='p-3 text-slate-700'>$15 to $40</td>
                  <td className='p-3 text-slate-700'>Low — simple culture media</td>
                  <td className='p-3 text-slate-700'>Annual</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>E. coli</td>
                  <td className='p-3 text-slate-700'>Fecal contamination</td>
                  <td className='p-3 text-slate-700'>$15 to $40 (usually bundled with coliform)</td>
                  <td className='p-3 text-slate-700'>Low — culture-based</td>
                  <td className='p-3 text-slate-700'>Annual</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Nitrates</td>
                  <td className='p-3 text-slate-700'>Agricultural and septic contamination</td>
                  <td className='p-3 text-slate-700'>$10 to $30</td>
                  <td className='p-3 text-slate-700'>Low — colorimetric method</td>
                  <td className='p-3 text-slate-700'>Annual</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>pH</td>
                  <td className='p-3 text-slate-700'>Corrosiveness, pipe protection</td>
                  <td className='p-3 text-slate-700'>$10 to $20</td>
                  <td className='p-3 text-slate-700'>Low — electrode measurement</td>
                  <td className='p-3 text-slate-700'>Annual</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Total dissolved solids (TDS)</td>
                  <td className='p-3 text-slate-700'>General mineral load</td>
                  <td className='p-3 text-slate-700'>$10 to $20</td>
                  <td className='p-3 text-slate-700'>Low — gravimetric or conductivity</td>
                  <td className='p-3 text-slate-700'>Annual</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Hardness</td>
                  <td className='p-3 text-slate-700'>Calcium and magnesium, scale formation</td>
                  <td className='p-3 text-slate-700'>$10 to $20</td>
                  <td className='p-3 text-slate-700'>Low — titration</td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Iron</td>
                  <td className='p-3 text-slate-700'>Staining, metallic taste</td>
                  <td className='p-3 text-slate-700'>$10 to $25</td>
                  <td className='p-3 text-slate-700'>Low — colorimetric</td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Manganese</td>
                  <td className='p-3 text-slate-700'>Staining, neurological concern</td>
                  <td className='p-3 text-slate-700'>$10 to $25</td>
                  <td className='p-3 text-slate-700'>Low — colorimetric</td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Arsenic</td>
                  <td className='p-3 text-slate-700'>Natural carcinogen in certain geology</td>
                  <td className='p-3 text-slate-700'>$20 to $50</td>
                  <td className='p-3' style={{ backgroundColor: '#FFFDE7' }}><span className='text-slate-700'>Moderate — ICP-MS required</span></td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Lead</td>
                  <td className='p-3 text-slate-700'>Pipe leaching, health concern</td>
                  <td className='p-3 text-slate-700'>$20 to $50</td>
                  <td className='p-3' style={{ backgroundColor: '#FFFDE7' }}><span className='text-slate-700'>Moderate — ICP-MS required</span></td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Radon</td>
                  <td className='p-3 text-slate-700'>Radioactive gas from uranium geology</td>
                  <td className='p-3 text-slate-700'>$25 to $109</td>
                  <td className='p-3' style={{ backgroundColor: '#FFFDE7' }}><span className='text-slate-700'>Moderate — liquid scintillation</span></td>
                  <td className='p-3 text-slate-700'>Every 5 years</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Volatile organic compounds (VOCs)</td>
                  <td className='p-3 text-slate-700'>Industrial solvents, fuels</td>
                  <td className='p-3 text-slate-700'>$100 to $250</td>
                  <td className='p-3' style={{ backgroundColor: '#FEF3C7' }}><span className='text-slate-700 font-medium'>High — GC-MS with purge and trap</span></td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years or if near risk sources</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Pesticides and herbicides</td>
                  <td className='p-3 text-slate-700'>Agricultural runoff</td>
                  <td className='p-3 text-slate-700'>$100 to $200</td>
                  <td className='p-3' style={{ backgroundColor: '#FEF3C7' }}><span className='text-slate-700 font-medium'>High — GC-MS or LC-MS</span></td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years or if near farmland</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>PFAS</td>
                  <td className='p-3 text-slate-700'>Industrial {`"`}forever chemicals{`"`}</td>
                  <td className='p-3 text-slate-700'>$150 to $300</td>
                  <td className='p-3' style={{ backgroundColor: '#FEF3C7' }}><span className='text-slate-700 font-medium'>High — LC-MS/MS, specialized EPA method</span></td>
                  <td className='p-3 text-slate-700'>Baseline plus annually if near risk sources</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Comprehensive metals panel</td>
                  <td className='p-3 text-slate-700'>20+ metals including arsenic, lead, mercury</td>
                  <td className='p-3 text-slate-700'>$50 to $150</td>
                  <td className='p-3' style={{ backgroundColor: '#FFFDE7' }}><span className='text-slate-700'>Moderate — ICP-MS multi-element scan</span></td>
                  <td className='p-3 text-slate-700'>Every 3 to 5 years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm'>Individual tests at a county health department typically run at the lower end of these ranges. The same tests at a commercial certified lab run slightly higher. Mail-in lab services like Tap Score bundle multiple tests into packages that reduce per-contaminant cost.</p>
        </div>

        {/* Cost by Testing Scenario */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Scenarios</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Cost by Testing Scenario</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The most practical way to think about testing cost is by situation, not by individual contaminant.</p>

          <div className='space-y-8'>
            {/* Annual Routine */}
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Annual Routine Testing</h3>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>What you need:</strong> Total coliform bacteria, E. coli, nitrates, pH.</p>
              <div className='space-y-2 mb-3'>
                <p className='text-slate-700 text-sm'><strong>Through county health department:</strong> Free to $60 in most states for basic bacteria and nitrate testing.</p>
                <p className='text-slate-700 text-sm'><strong>Through a certified mail-in lab:</strong> $50 to $100 for a basic annual panel.</p>
                <p className='text-slate-700 text-sm'><strong>Through a local certified lab:</strong> $40 to $80 depending on region.</p>
              </div>
              <p className='text-slate-700 leading-relaxed text-sm'>The annual routine test is the cheapest scenario and the one where free county testing most often applies. Do not pay commercial rates for annual bacteria and nitrate testing until you have confirmed that free or low-cost options are not available in your county.</p>
            </div>

            {/* New Home Baseline */}
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>New Home Baseline Test</h3>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>What you need:</strong> A comprehensive first test when you move into a home with an existing well. This establishes your baseline, identifies any issues before they become chronic, and gives you documented results for future reference.</p>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>Recommended scope:</strong> Bacteria, E. coli, nitrates, pH, TDS, hardness, iron, manganese, arsenic, lead, and any contaminants of regional concern identified by your county health department.</p>
              <p className='text-slate-700 leading-relaxed text-sm'><strong>Typical cost:</strong> $150 to $300 through a certified lab or mail-in service. Tap Score{`'`}s Essential Well Water test covers bacteria, E. coli, heavy metals, minerals, general chemistry, silica, hardness, and nitrates for this price range. National Testing Laboratories offers well water packages starting around $170 for 32 analytes.</p>
            </div>

            {/* After a Contamination Event */}
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>After a Contamination Event</h3>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>What you need:</strong> Bacteria and nitrates at minimum, plus whatever contaminants the specific event could have introduced (flood: bacteria, nitrates, turbidity; nearby spill: VOCs or specific industrial chemicals; pump or well work: bacteria, E. coli).</p>
              <p className='text-slate-700 leading-relaxed text-sm'><strong>Typical cost:</strong> $50 to $150 for a focused post-event test. Use a local certified lab you can deliver to in person when possible, because bacteria samples must reach the lab within 24 hours.</p>
            </div>

            {/* PFAS Testing */}
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>PFAS Testing</h3>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>What you need:</strong> Testing by EPA Method 533 or EPA Method 537.1 at a lab specifically certified for these methods. Standard lab panels do not include PFAS.</p>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>Typical cost:</strong> $150 to $300 for a dedicated PFAS test covering 40 or more PFAS compounds. Some state programs (New York, Maine, Michigan) offer free PFAS testing for well owners in affected regions.</p>
              <p className='text-slate-700 leading-relaxed text-sm'><strong>Who needs it:</strong> Well owners within 10 miles of a military installation, airport, industrial facility, or area where firefighting foam has been used. Well owners near agricultural land where biosolids (sewage sludge) have been applied. Anyone who wants a complete baseline.</p>
            </div>

            {/* Real Estate Transaction */}
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Real Estate Transaction Testing</h3>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>What you need:</strong> Depends on loan type. FHA, VA, and USDA loans require bacteria (total coliform and E. coli), nitrates, nitrites, lead, and arsenic at minimum. Conventional loans typically require at least bacteria and nitrates, but the specific lender determines the requirements.</p>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>Typical cost:</strong> $100 to $200 for the minimum required panel. Tap Score{`'`}s Certified Home Loan Water Test is designed specifically for FHA, VA, and USDA requirements and includes results on certified laboratory letterhead with EPA ID number. An upgraded version adds 40+ additional contaminants for about $60 more.</p>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>Important for buyers:</strong> Real estate transaction water tests are a snapshot in time. A test that passes on the day it is collected tells you nothing about seasonal variation, conditions after heavy rain, or long-term contaminant trends. Passing the minimum required lender test does not mean the water is comprehensively safe. New homeowners should conduct a full baseline test beyond what the lender required within the first year of occupancy.</p>
              <p className='text-slate-700 leading-relaxed text-sm'><strong>Who pays:</strong> In most states, this is negotiated as part of the real estate transaction. Sellers commonly pay for pre-listing testing. Buyers typically pay for testing conducted as part of due diligence. New Jersey law requires the seller to pay for testing before the sale of any property served by a private well.</p>
            </div>

            {/* Comprehensive Full Panel */}
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Comprehensive Full Panel</h3>
              <p className='text-slate-700 leading-relaxed text-sm mb-3'><strong>What you need:</strong> Everything — bacteria, nitrates, metals, VOCs, pesticides, PFAS, radon, and any regional contaminants.</p>
              <p className='text-slate-700 leading-relaxed text-sm'><strong>Typical cost:</strong> $300 to $500 for a comprehensive panel through a mail-in certified lab service. Some labs offer panels covering 100 or more analytes for $400 to $700. A full comprehensive test should not cost more than $500 for a residential well in normal circumstances.</p>
            </div>
          </div>
        </div>

        {/* Testing Scenario Cost Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Comparison</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Where to Get Your Water Tested: Cost and Tradeoff Comparison</h2>

          <div className='overflow-x-auto rounded-lg border border-slate-200 mb-8'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-semibold text-slate-900'>Option</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Typical Cost</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Turnaround</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Best For</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Limitation</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>County health department</td>
                  <td className='p-3 text-slate-700'>Free to $75</td>
                  <td className='p-3 text-slate-700'>1 to 2 weeks</td>
                  <td className='p-3 text-slate-700'>Annual bacteria and nitrates</td>
                  <td className='p-3 text-slate-700'>Limited to basic tests; bacteria delivery window</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>State university extension lab</td>
                  <td className='p-3 text-slate-700'>$30 to $150</td>
                  <td className='p-3 text-slate-700'>1 to 2 weeks</td>
                  <td className='p-3 text-slate-700'>Comprehensive testing at lower cost</td>
                  <td className='p-3 text-slate-700'>Only available to state residents</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Local certified private lab</td>
                  <td className='p-3 text-slate-700'>$50 to $300</td>
                  <td className='p-3 text-slate-700'>3 to 10 days</td>
                  <td className='p-3 text-slate-700'>Real estate transactions; post-flood testing</td>
                  <td className='p-3 text-slate-700'>Must deliver sample in person</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Mail-in certified lab (Tap Score, NTL)</td>
                  <td className='p-3 text-slate-700'>$100 to $500</td>
                  <td className='p-3 text-slate-700'>5 to 14 days</td>
                  <td className='p-3 text-slate-700'>Baseline testing; comprehensive panels</td>
                  <td className='p-3 text-slate-700'>Bacteria samples require overnight shipping</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Home test strips</td>
                  <td className='p-3 text-slate-700'>$15 to $50</td>
                  <td className='p-3 text-slate-700'>Immediate</td>
                  <td className='p-3 text-slate-700'>Monitoring between lab tests</td>
                  <td className='p-3 text-slate-700'>Cannot detect bacteria, PFAS, arsenic, lead reliably</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>County Health Department Labs</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>The most underused option. Most county health departments have a relationship with a state lab of hygiene or operate their own certified water testing facility. They provide sample containers, collection instructions specific to their lab{`'`}s requirements, and results that are accepted by local health authorities. Basic bacteria and nitrate testing is often free or at very low cost. The limitation is that they typically handle only the most common tests — comprehensive metals or PFAS testing usually requires a commercial lab.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Mail-In Certified Lab Services</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>The most convenient option for comprehensive testing. Tap Score (SimpleLab) is the most widely recommended by independent reviewers, endorsed by the Water Systems Council, and recommended by the New York Times Wirecutter for well water testing. Their well water packages include prepaid shipping, all collection materials, certified laboratory analysis, and plain-English reports with treatment recommendations. Turnaround is 5 to 10 business days after the lab receives the sample. The limitation for bacteria testing is that samples must arrive at the lab within 24 hours — overnight shipping is required, which the higher-tier packages include.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Local Certified Private Labs</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>Best for situations requiring fast turnaround or in-person sample delivery (important for bacteria testing in rural areas where overnight shipping transit times are uncertain). Laboratory prices vary significantly by region. The same test that costs $30 at a Midwest county lab may cost $80 at a private certified lab in a coastal metro area. Always ask for an itemized quote rather than a single package price — bundled tests frequently include parameters you do not need.</p>
            </div>
          </div>
        </div>

        {/* How Often You Need to Test */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Schedule</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How Often You Need to Test: The Annual Cost Over Time</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Testing is not a one-time expense. It is a recurring annual cost with periodic comprehensive re-tests. Understanding the multi-year cost helps you budget appropriately.</p>

          <div className='space-y-4 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Year 1 (New ownership or first comprehensive test)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>$150 to $300 for a baseline comprehensive panel covering bacteria, metals, and standard chemistry.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Years 2 through 5 (Annual routine testing)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>$20 to $100 per year for annual bacteria and nitrate testing, using county health department programs where available.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Every 3 to 5 years (Periodic extended panel)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>$100 to $200 to recheck metals, hardness, pH, iron, and manganese.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>As needed (PFAS, VOCs, radon)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>$150 to $300 per test, conducted once as a baseline and annually if near contamination sources.</p>
            </div>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm'><strong>Five-year average annual testing cost for a typical rural well owner:</strong> $75 to $150 per year when county health department programs are used for routine annual testing and commercial labs are used for periodic comprehensive panels. This is modest relative to the cost of treating a contaminated well, addressing health effects, or paying for remediation after contamination goes undetected for years.</p>
        </div>

        {/* What the $30 Test Cannot Tell You */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Limitations</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What the $30 Test Cannot Tell You</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The cheapest annual bacteria and nitrate test answers one question: are the most urgent health threats at safe levels today? It does not answer many of the questions that matter for long-term well ownership.</p>

          <div className='space-y-3 mb-8'>
            <p className='text-slate-700 leading-relaxed text-sm'>It cannot detect PFAS, arsenic, lead, radon, VOCs, or pesticides. All of these can be present at dangerous concentrations in perfectly clear, odorless water that passes a bacteria and nitrate test.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>It cannot tell you whether your water is corrosive (low pH) and therefore leaching lead or copper from your plumbing.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>It cannot detect manganese above the health advisory threshold that can affect children{`'`}s neurological development.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>It does not establish a documented baseline that allows you to detect slow changes in water quality over time.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>The $30 annual test is necessary but not sufficient. It should be combined with a comprehensive baseline test every three to five years and targeted testing whenever your location or circumstances suggest additional contaminants may be relevant.</p>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Upgrade your test if any of these apply to your well:</h3>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Within 10 miles of a military base, airport, industrial facility, or firefighting foam area:</strong> Test for PFAS by EPA Method 533 or 537.1 at a specialized certified lab ($150 to $300).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Near agricultural land, a golf course, or an orchard:</strong> Test for nitrates more frequently and add a pesticide panel every three years ($100 to $200).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Home built before 1986 or has brass fittings:</strong> Test for lead using the first-draw method annually ($20 to $50).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>In New England, the Southwest, or parts of the Midwest with known arsenic geology:</strong> Test for arsenic every three years even if previous results were low ($20 to $50).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Pregnant, have an infant under six months, or immunocompromised household members:</strong> Test for bacteria and nitrates twice per year rather than annually.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Water has changed in taste, smell, color, or clarity:</strong> Test immediately — do not wait for the annual cycle.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Never tested the well:</strong> Start with a comprehensive $150 to $300 baseline, not an annual basic test. A comprehensive panel establishes your starting point and prevents years of testing that misses what is actually in your water.</p>
            </div>
          </div>
        </div>

        {/* How to Avoid Overpaying */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Tips</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Avoid Overpaying</h2>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Call the county health department first</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Every year. Some counties add programs, change pricing, or expand their testing scope. A five-minute phone call can save you $100 annually.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Know your regional contaminants</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Your county health department or state environmental agency can tell you which contaminants are commonly found in groundwater in your area. You do not need to test for pesticides if you are in an urban area with no agricultural activity nearby. You do not need to test for arsenic annually if your previous tests showed undetectable levels and your geology does not suggest risk.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Ask for itemized quotes</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>When using a commercial lab, request a breakdown of individual test costs. Some labs bundle tests that are not relevant to your situation to increase package prices.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Do not duplicate tests</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If you tested comprehensively two years ago and your results were clean, you do not need another comprehensive test this year. Annual bacteria and nitrates are the required recurrence. Comprehensive metals panels are a 3 to 5 year frequency.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Avoid upselling during contamination events</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>When something goes wrong with your water, you will be in a heightened state of concern. Some contractors and water treatment companies recommend exhaustive testing panels as a prerequisite for selling treatment equipment. Targeted testing based on the specific event or symptom is almost always sufficient.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Compare mail-in labs before ordering</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Tap Score, National Testing Laboratories, and state university extension labs all offer certified testing at competitive prices. The specific analytes covered, the interpretation report quality, and the customer support level vary. Look up what each package covers before assuming the lowest price provides the right tests.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>

          <div className='space-y-4'>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>How much does it cost to test well water?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Annual routine testing costs $20 to $100 for most households, with many county health departments offering basic bacteria and nitrate testing for free or at very low cost. A comprehensive baseline test when you first own a well costs $150 to $300 through a certified mail-in lab. PFAS testing costs $150 to $300 separately at a specialized certified lab. A full comprehensive panel covering all common contaminants runs $300 to $500. Call your county health department before paying commercial rates — many offer free or subsidized basic testing that most well owners do not know about.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Is there free well water testing available?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Yes, in many areas. County health departments in most states offer free or subsidized basic testing (bacteria and nitrates) for private well owners. Penn State Extension offers free testing for Pennsylvania residents through a CDC-funded program. Minnesota offers free nitrate testing in high-risk counties. New York offers free PFAS testing in affected areas. Maine offers free arsenic testing for low-income residents. The EPA{`'`}s Drinking Water Hotline (800-426-4791) can identify free programs in your state. Always call your county health department first before paying for testing.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>How much does well water testing cost for a home sale?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Testing for an FHA, VA, or USDA loan typically costs $100 to $175 for the minimum required panel (bacteria, nitrates, nitrites, lead, arsenic) through a certified lab with results on official letterhead. Conventional loans vary by lender and typically require at minimum bacteria and nitrates, costing $50 to $100. An upgraded comprehensive test that goes beyond lender minimums adds $50 to $100 and is recommended for buyers who want a full picture of their water quality beyond what the lender requires.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>What is the cheapest way to test well water?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>The cheapest valid option is your county health department, which offers certified bacteria and nitrate testing for free or at $20 to $50 in most states. For more comprehensive testing, state university extension labs (Penn State, University of Massachusetts, Cornell Cooperative Extension, and similar) offer certified testing at below-commercial rates for state residents. Home test strips are cheaper still but are not reliable for health-critical decisions — they cannot detect bacteria, PFAS, arsenic, or lead at relevant concentrations.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>How much does PFAS testing for a well cost?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>PFAS testing for a private well costs $150 to $300 for a panel covering 40 or more PFAS compounds by EPA Method 533 or 537.1. This testing is separate from standard well water panels because it requires specialized certified labs and analytical methods. Some states (New York, Maine, Michigan) offer free PFAS testing for well owners near contaminated sites. Search your state{`'`}s department of health website for PFAS well testing programs before paying for commercial testing.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Does well water testing cost differ by state?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Yes, significantly. States with strong county health department programs (many Midwest and Mid-Atlantic states) often have free or very low-cost basic testing available. Western states with fewer county health infrastructure resources typically rely more on private certified labs, where individual test prices run $30 to $100 each. Regional contamination issues also affect testing recommendations — states with known arsenic geology or PFAS contamination near military bases may have state-funded programs that do not exist elsewhere.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>How much does annual well water testing cost over time?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>A realistic annual budget for responsible well ownership is $75 to $150 per year when using county health programs for routine annual testing and commercial labs for periodic comprehensive panels every three to five years. The first year typically costs more ($150 to $300) for the initial comprehensive baseline. Subsequent years cost less ($20 to $100) for annual routine testing. Targeted testing after events (flooding, nearby contamination, system repairs) adds $50 to $150 when needed.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Can I test my own well water at home?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Home test strips and DIY kits provide useful screening for some parameters but are not reliable substitutes for certified laboratory testing for health-critical decisions. Home strips work reasonably well for pH, hardness, chlorine, and iron as monitoring tools between annual lab tests. They cannot reliably detect bacteria at safe or unsafe levels, cannot detect PFAS, arsenic, or lead at health-relevant concentrations, and are not accepted by health departments or mortgage lenders as certification of safe water. Use certified lab testing for any decision that affects your family{`'`}s health.</p>
              </div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Certified Laboratory</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A laboratory that has been certified by the state or by a recognized accreditation body (NELAC/TNI) to perform specific drinking water analyses using validated methods. Results from a certified lab are legally defensible and accepted by health departments and mortgage lenders. The EPA maintains a directory of state-certified drinking water laboratories at epa.gov/dwlabcert.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>EPA Method 533 / 537.1</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The two EPA-approved analytical methods for PFAS testing in drinking water. Only labs specifically certified for these methods can produce reliable PFAS results. Most standard certified water testing labs are not certified for these methods, which is why PFAS testing costs more and requires a specialized lab.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>FHA Minimum Property Requirements</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Federal Housing Administration loan requirements for water quality when a property is served by a private well. The minimum required tests are total coliform bacteria, E. coli, nitrates, nitrites, lead, and arsenic. Results must be provided on certified laboratory letterhead with an EPA laboratory identification number. VA and USDA loans have the same requirements.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>National Testing Laboratories (NTL)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A national certified private laboratory that offers mail-in well water testing packages at several price points. NTL{`'`}s packages range from around $170 for 32 analytes to about $290 for 115 analytes and are a commonly cited alternative to Tap Score for comprehensive testing.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>State Lab of Hygiene</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>State-operated laboratory facilities that provide certified water testing services, typically at below-commercial rates, through county health departments or directly to residents. The Wisconsin State Lab of Hygiene, Indiana State Department of Health Laboratory, and similar facilities are excellent cost-effective options for well owners in states that operate them.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Tap Score (SimpleLab)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A national mail-in certified laboratory network that offers well water testing packages combining certified lab analysis, plain-English results reports, health risk assessments, and unbiased treatment recommendations. Recommended by the Water Systems Council and the New York Times Wirecutter. Packages range from essential well water tests to comprehensive panels including VOCs, PFAS, and radiologicals.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Related</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Guide to Private Well Water Systems</span>
            </Link>
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants Guide</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Smells Like Sulfur</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/guides/buying-house-with-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>What to Do When You Buy a House With a Well</span>
            </Link>
          </div>
        </div>

        {/* Lead Form */}
        <section className='py-12 bg-[#E1F5EE] rounded-2xl mt-12'>
          <div className='max-w-2xl mx-auto px-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#0F6E56] text-center mb-3'>Get Expert Well Help</h2>
            <p className='text-gray-600 text-center mb-8'>Connect with qualified well professionals in your area. Free quotes, no obligation.</p>
            <LeadForm />
          </div>
        </section>

      </article>
    </>
  )
}
