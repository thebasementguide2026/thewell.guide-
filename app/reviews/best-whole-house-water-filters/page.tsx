import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Best Whole House Water Filters for Well Water: 2026 Picks by Contaminant | The Well Guide',
  description: 'The best whole house water filters for well water reviewed by contaminant type - iron, sulfur, bacteria, sediment, and comprehensive systems. Real specs, verified Amazon availability, honest limitations, and a complete buying guide so you buy the right system for your actual water test results.',
  openGraph: {
    title: 'Best Whole House Water Filters for Well Water: 2026 Picks by Contaminant',
    description: 'The best whole house water filters for well water reviewed by contaminant type with real specs, honest limitations, and complete buying guidance.',
    url: 'https://www.thewell.guide/reviews/best-whole-house-water-filters',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/waterfilters.jpg', width: 1200, height: 630, alt: 'Whole house water filtration system with blue tanks and UV unit mounted on a utility room wall with copper plumbing' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/reviews/best-whole-house-water-filters' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Whole House Water Filters for Well Water: 2026 Picks by Contaminant',
  description: 'The best whole house water filters for well water reviewed by contaminant type with real specs, honest limitations, and complete buying guidance.',
  image: 'https://www.thewell.guide/waterfilters.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/reviews/best-whole-house-water-filters',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Whole House Water Filters for Well Water 2026',
  description: 'Top whole house water filter picks for well water organized by contaminant type',
  numberOfItems: 5,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home Master HMF3SDGFEC',
      description: 'Best for iron, manganese, and sulfur up to 3 ppm combined. 3-stage radial flow cartridge system. 15 GPM flow rate. Annual filter replacement.',
      url: 'https://www.thewell.guide/reviews/best-whole-house-water-filters#pick-1',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Aquasana Rhino EQ-WELL-UV-PRO-AST',
      description: 'Best for bacteria plus broad chemical contamination. Integrated carbon, KDF, Class A UV, and salt-free conditioner. 7 GPM flow rate. 500,000 gallon media life.',
      url: 'https://www.thewell.guide/reviews/best-whole-house-water-filters#pick-2',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'iSpring WGB32B',
      description: 'Best budget system for mild well water. 3-stage sediment and dual carbon cartridge. 15 GPM flow rate. Lowest annual maintenance cost.',
      url: 'https://www.thewell.guide/reviews/best-whole-house-water-filters#pick-3',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'iSpring WGB32BM',
      description: 'Best budget iron and manganese filter. 3-stage with dedicated iron/manganese reduction cartridge. 15 GPM flow rate.',
      url: 'https://www.thewell.guide/reviews/best-whole-house-water-filters#pick-4',
    },
    {
      '@type': 'ListItem',
      position: 5,
      name: 'iSpring WSP-50 Spin-Down Sediment Filter',
      description: 'Best reusable sediment pre-filter. 50-micron spin-down, 20+ GPM, no cartridge replacement. Essential upstream pre-filter for wells with sediment loading.',
      url: 'https://www.thewell.guide/reviews/best-whole-house-water-filters#pick-5',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best whole house water filter for well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single best system for all wells. For iron and sulfur up to 3 ppm without bacteria, the Home Master HMF3SDGFEC is the best cartridge-based option. For wells with bacteria plus general chemical contamination, the Aquasana EQ-WELL-UV-PRO-AST provides the broadest single-package coverage. For mild wells with primarily sediment concerns on a tight budget, the iSpring WGB32B is the most cost-effective starting point. Test your water first and match the system to your results.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a whole house filter or just a drinking water filter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For iron and manganese causing staining throughout the house, a whole house filter is necessary. For health contaminants like arsenic, nitrates, and PFAS that are only concerns when consumed, a point-of-use reverse osmosis system at the kitchen sink is equally protective at lower cost. Many well owners use both: whole-house treatment for iron and bacteria, point-of-use RO for drinking water purity.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do whole house water filter cartridges need to be replaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most cartridge systems recommend annual replacement for a family of four under normal contamination levels. Wells with very high sediment, iron, or organic matter will exhaust cartridges faster. Monitoring water pressure is the practical indicator - a pressure drop of more than 15 PSI across the filter indicates a clogged cartridge requiring replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a whole house water filter myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cartridge-based systems like the iSpring WGB32B and Home Master HMF3SDGFEC are DIY-capable for homeowners comfortable with basic pipe cutting and threaded fitting work. UV systems require electrical connections and professional installation is recommended. Complex multi-tank systems benefit from professional installation to ensure correct sequencing, flow rates, and programming.',
      },
    },
    {
      '@type': 'Question',
      name: 'What flow rate do I need for a whole house water filter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A standard 3-bedroom, 2-bathroom home requires 8 to 10 GPM peak capacity. Larger homes need 12 to 15 GPM minimum. The Aquasana Rhino's 7 GPM limit is a constraint for larger households, particularly for UV disinfection where flow rate cannot be compromised without reducing disinfection effectiveness.",
      },
    },
    {
      '@type': 'Question',
      name: 'Does a whole house water filter remove bacteria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard carbon and sediment whole house filters do not reliably remove bacteria. UV filtration systems disinfect by inactivating bacteria with ultraviolet light. If your well water tests positive for bacteria, you need a UV system with NSF/ANSI 55 Class A certification. The Aquasana EQ-WELL-UV-PRO-AST includes a Class A UV unit.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a whole house water filter and a water softener?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A whole house water filter removes contaminants - sediment, iron, bacteria, chemicals - by physical filtration, adsorption, or UV disinfection. A water softener removes hardness minerals through ion exchange and does not remove other contaminants. They serve different purposes and are often used together.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do whole house water filter systems last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tank-based systems last 10 to 20 years with proper maintenance. Cartridge housing systems last indefinitely with proper maintenance. UV unit controllers last 5 to 10 years with annual lamp replacement throughout. Control valves on backwashing systems typically last 10 to 15 years.',
      },
    },
  ],
}

export default function BestWholeHouseWaterFilters() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src='/waterfilters.jpg'
          alt='Whole house water filtration system with blue tanks and UV unit mounted on a utility room wall with copper plumbing'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0D3D30] via-[#0D3D30]/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#5DCAA5' }}>Review</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Best Whole House<br />
            <span style={{ color: '#5DCAA5' }}>Water Filters (2026)</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Picks by contaminant. The best whole house water filters for well water, reviewed with real specs, honest limitations, and a complete buying guide.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Reviews', href: '/reviews' },
        { label: 'Best Whole House Water Filters' }
      ]} />

      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* Affiliate Disclosure */}
        <p className='text-sm text-slate-400 mb-6'>
          Some links on this page are affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you. This does not affect our recommendations.
        </p>

        {/* TL;DR */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The right whole house water filter depends entirely on what your water test shows. There is no single best system for all wells. For iron and sulfur, the Home Master HMF3SDGFEC handles up to 3 ppm combined at an honest price. For bacteria plus general filtration, the Aquasana Rhino EQ-WELL-UV-PRO-AST pairs carbon and KDF filtration with UV disinfection in one package. For budget sediment and chlorine on mild well water, the iSpring WGB32B delivers solid cartridge-based filtration without the price tag of tank systems. For severe iron and sulfur above 7 ppm, a purpose-built air injection system is needed. This guide covers the best option for each scenario, what each system actually removes, what it cannot, and the honest trade-offs no product page will tell you.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>One rule before buying anything:</strong> Get your well water tested at a certified lab first. A system purchased without test results is a guess. See the <Link href='/guides/how-to-test-well-water' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>how to test your well water guide</Link> for the full testing protocol, or the <Link href='/reviews/best-well-water-test-kits' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>best well water test kits</Link> review for at-home options.
          </p>
        </div>

        {/* How We Selected */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How We Selected These Products</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Every product in this guide was verified as currently available through major retailers and distributors. Specifications were confirmed against manufacturer documentation and independent testing data where available. We evaluated each product on five criteria:
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Verified contaminant removal:</strong> Does the system actually remove what it claims? We prioritized systems with third-party testing or NSF certification to back their claims. We noted where manufacturer claims lack independent verification.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Honest limitations:</strong> Every system has contaminants it does not address. We state these explicitly. A system that removes iron but not bacteria is only appropriate for wells without bacterial contamination.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Flow rate vs. household size:</strong> A system rated for 7 GPM is adequate for a 2-bathroom home drawing peak demand of about 4 to 5 GPM. A 4-bathroom home during morning rush needs 10 to 12 GPM minimum. We matched each pick to appropriate household sizes.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Annual ownership cost:</strong> Purchase price is not total cost. We calculated annual cartridge or media replacement costs for each system.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Installation complexity:</strong> Some systems require only basic plumbing. Others need electrical work for UV lamps or programming of backwash controllers. We flagged which require professional installation.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            For a complete cost breakdown by system type including installation costs, annual maintenance costs, and the 10-year total cost of ownership, see the <Link href='/cost-guides/whole-house-water-filter-cost' className='underline' style={{ color: '#1D9E75' }}>whole house water filter cost guide</Link>.
          </p>
        </div>

        {/* At a Glance Comparison Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>At a Glance: Top Picks by Contaminant</h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse min-w-[700px]'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Best For</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>System</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Purchase Price</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Annual Upkeep</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Iron Limit</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Bacteria</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Iron + sulfur + manganese</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Home Master HMF3SDGFEC</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~$220 to $260</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$150 to $250/yr</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>3 ppm combined</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>2 year</td>
                </tr>
                {/* Aquasana row - teal highlight */}
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Bacteria + broad contamination</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Aquasana EQ-WELL-UV-PRO-AST</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~$700 to $900</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$190 to $280/yr</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>0.3 ppm max</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Yes (Class A UV)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10yr tank / 1yr UV</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Budget sediment + chlorine</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>iSpring WGB32B</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~$160 to $200</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$60 to $100/yr</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Not rated</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>1 year</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Budget iron + manganese</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>iSpring WGB32BM</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~$185 to $230</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$80 to $130/yr</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~1 to 2 ppm</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>1 year</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Sediment pre-filter only</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>iSpring WSP-50 Spin Down</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~$40 to $60</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$0 (reusable)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>N/A</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The Five Best Picks */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>The Five Best Whole House Water Filters</h2>

          {/* Pick 1: Home Master HMF3SDGFEC */}
          <div id='pick-1' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#1</span>
              <h3 className='text-2xl font-black text-slate-900'>Home Master HMF3SDGFEC</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Iron, manganese, and sulfur up to 3 ppm combined, wells without bacteria</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: HMF3SDGFEC &middot; Purchase price: approximately $220 to $260</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The Home Master HMF3SDGFEC is the most honest cartridge-based system for well water with moderate iron and sulfur problems. Where most competitors use undersized housings that create pressure drops and require frequent cartridge changes, Home Master built this system around oversized radial-flow filter cartridges that maintain up to 15 GPM flow with less than 1 PSI pressure drop and need replacement only once per year for most households.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it removes:</strong> Sediment down to 1 micron (four-gradient depth filter in Stage 1), iron and manganese up to 3 ppm combined and hydrogen sulfide up to 1 ppm (radial flow iron filter in Stage 2), herbicides, pesticides, and organic chemicals (granular activated coconut shell carbon in Stage 3).
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it cannot remove:</strong> Bacteria and viruses &mdash; this is not a disinfection system. Iron bacteria (biological iron contamination) will defeat the iron filter over time without upstream disinfection. Hardness minerals are not removed. Arsenic, nitrates, and PFAS are not addressed. Water pH must be between 7.0 and 10.0 &mdash; acidic wells with pH below 7.0 require pH correction upstream before this system.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Three ppm limit:</strong> The 3 ppm combined iron, manganese, and hydrogen sulfide ceiling is a real constraint. If your iron alone is 2 ppm and your hydrogen sulfide registers 1 ppm, you are at the limit and filter life will be shorter than the rated 12 months. If your iron is above 3 ppm, you need a higher-capacity system.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Filter stages</span><span className='text-slate-900 font-medium'>3 (sediment, radial flow iron, GAC carbon)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Flow rate</span><span className='text-slate-900 font-medium'>15 GPM maximum</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1-inch NPT</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Stage 1 (sediment)</span><span className='text-slate-900 font-medium'>6 to 12 months</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Stage 2 (iron)</span><span className='text-slate-900 font-medium'>12 months at rated levels</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Stage 3 (carbon)</span><span className='text-slate-900 font-medium'>12 months or 95,000 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Operating pH</span><span className='text-slate-900 font-medium'>7.0 to 10.0</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>2-year limited</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Annual ownership cost:</strong> Replacement filter set is approximately $100 to $150 per year. Steel mounting bracket and housing wrench are included. No electricity required.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Installation:</strong> DIY-capable for homeowners with basic plumbing experience. The 1-inch ports require planning if your home plumbing is 3/4-inch &mdash; budget for adapters. Dimensions are 27 inches tall by 24 inches wide by 9 inches deep. Verify installation space before ordering.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>The honest limitation no product page mentions:</strong> This system is not appropriate for wells with iron bacteria. If you see reddish-brown slime inside toilet tanks or notice a viscous reddish film on fixtures, you have iron bacteria. Install this system into an iron bacteria problem and the bacteria will colonize the filter media within months, defeating the iron removal capability. Shock chlorinate the well first, address iron bacteria, then install the Home Master. See the <a href='/guides/how-to-shock-chlorinate-well' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>shock chlorination guide</a> for the procedure.
            </p>

            <a href='https://amzn.to/4s1qVLY' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>

          {/* Pick 2: Aquasana Rhino EQ-WELL-UV-PRO-AST */}
          <div id='pick-2' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#2</span>
              <h3 className='text-2xl font-black text-slate-900'>Aquasana Rhino EQ-WELL-UV-PRO-AST</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Wells with bacteria risk, broad chemical contaminants, moderate hardness, and households wanting one integrated system</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: EQ-WELL-UV-PRO-AST &middot; Purchase price: approximately $700 to $900 depending on configuration</p>
            </div>

            <div className='rounded-xl p-5 mb-6 bg-slate-50 border border-slate-200'>
              <p className='text-sm font-bold text-slate-900 mb-2'>Aquasana configuration guide:</p>
              <p className='text-sm text-slate-700 leading-relaxed'>
                The Aquasana Rhino well water line comes in four configurations that differ by tank size and included components. EQ-WELL-UV includes the filter tanks and UV but no conditioner. EQ-WELL-UV-PRO adds a larger pro-size filter tank. EQ-WELL-UV-AST includes the filter tanks, UV, and the salt-free SCM conditioner. EQ-WELL-UV-PRO-AST is the largest configuration with the pro tank, UV, and conditioner. For most households, the EQ-WELL-UV-PRO-AST reviewed here is the recommended choice because the SCM conditioner protects the UV lamp sleeve from scale. If hardness is below 5 gpg and you do not want the conditioner, the EQ-WELL-UV-PRO saves approximately $100 to $150. Do not confuse any of these with the EQ-1000 series, which is designed for city water, not well water.
              </p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The Aquasana Rhino EQ-WELL-UV-PRO-AST is the most comprehensive all-in-one well water system available at the consumer level. It combines carbon and KDF media filtration with a Class A UV disinfection unit (Sterilight UV system) and a salt-free scale control conditioner in a single integrated package. For well owners who have confirmed bacteria in their water and also want whole-house chemical filtration, this system eliminates the need to purchase and integrate separate components.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it removes:</strong> Up to 97 percent of chlorine (from shock-chlorinated wells), sediment, rust, silt, pesticides, herbicides, water-soluble metals, industrial solvents, and VOCs through carbon and KDF media. UV unit removes 99.9 percent of bacteria and viruses including E. coli, Giardia, and Cryptosporidium. Salt-free SCM conditioner reduces scale buildup in pipes without removing minerals.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it cannot remove:</strong> Iron above 0.3 ppm &mdash; the KDF media has limited iron removal capacity and the UV lamp&apos;s quartz sleeve will scale rapidly if iron is present above this threshold. Hardness minerals are not removed (the SCM conditioner reduces scale formation but does not soften water in the traditional ion-exchange sense). Arsenic, nitrates, and PFAS require a point-of-use RO system added downstream.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>The iron limitation matters:</strong> The 0.3 ppm iron ceiling is the EPA&apos;s aesthetic standard &mdash; this is a very low limit. A well with 1 ppm iron, which is not unusual and often not considered severe by well owners, will cause the Aquasana&apos;s UV lamp sleeve to scale within months, dramatically reducing UV transmittance and disinfection effectiveness. Do not install this system if your iron exceeds 0.3 ppm without iron removal upstream. This is the single most important purchase decision for this system.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>System type</span><span className='text-slate-900 font-medium'>Dual-tank carbon/KDF + UV + SCM</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Flow rate</span><span className='text-slate-900 font-medium'>7 GPM (rated)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Capacity</span><span className='text-slate-900 font-medium'>500,000 gal or 5 years</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>UV classification</span><span className='text-slate-900 font-medium'>Class A (NSF/ANSI 55)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pre-filter</span><span className='text-slate-900 font-medium'>20-inch, every 3 months</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Post-filter</span><span className='text-slate-900 font-medium'>Every 6 months</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Maximum iron</span><span className='text-slate-900 font-medium'>0.3 ppm before system</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max hardness (SCM)</span><span className='text-slate-900 font-medium'>15 grains per gallon</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>10yr tank / 1yr UV &amp; electrical</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Annual ownership cost:</strong> Pre-filter cartridges ($30 to $50 every 3 months) plus post-filter ($20 to $30 every 6 months) plus UV lamp replacement ($50 to $80 annually) totals approximately $190 to $280 per year.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Installation:</strong> More complex than cartridge systems. The integrated package includes filter tank, conditioner tank, UV unit, pre-filter, post-filter, brass fittings for 1-inch or 3/4-inch pipes, shutoff valves, and bend supports. UV requires electrical connection. System footprint is approximately 69 inches wide for the PRO-AST configuration. Professional installation strongly recommended to ensure UV is correctly positioned and electrical work is code-compliant.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Why the 7 GPM flow rate is often misunderstood:</strong> The 7 GPM rating reflects the UV disinfection contact time requirement &mdash; water must move slowly enough through the UV chamber to receive the minimum 40 mJ/cm&sup2; dose required for Class A disinfection. At higher flow rates, contact time is insufficient and bacteria survive. If your household peak demand exceeds 7 GPM, you need a UV system with a higher-rated lamp or supplemental storage, or you accept that peak demand moments may receive lower UV doses.
            </p>

            <a href='https://amzn.to/48da8OK' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>

          {/* Pick 3: iSpring WGB32B */}
          <div id='pick-3' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#3</span>
              <h3 className='text-2xl font-black text-slate-900'>iSpring WGB32B</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Mild well water with primarily sediment and taste/odor concerns, or city water on a well-connected supply</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: WGB32B &middot; Purchase price: approximately $160 to $200</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The iSpring WGB32B is the most straightforward entry point into whole-house cartridge filtration. Three stages of filtration &mdash; 5-micron polypropylene sediment, coconut shell carbon block, second coconut shell carbon block &mdash; address the basic aesthetic concerns of sediment, rust, chlorine, taste, and odor. It is the correct system for wells where testing shows no bacteria, no significant iron (under 0.3 ppm), and the primary concern is turbidity and general water quality.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it removes:</strong> Sediment, rust, sand, and particles above 5 microns in Stage 1. Up to 99 percent of chlorine, herbicides, pesticides, industrial solvents, and organic chemicals in Stages 2 and 3. Two carbon stages provide redundancy and extended chlorine contact time versus single-stage systems.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it cannot remove:</strong> Iron, manganese, bacteria, viruses, hardness minerals, arsenic, nitrates, fluoride, PFAS, or dissolved heavy metals beyond limited carbon block performance. This is explicitly not a well water treatment system for wells with significant iron or bacterial contamination.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Where it makes sense for well owners:</strong> Many rural homeowners on well water also use shock chlorination periodically or continuous chlorination as their disinfection method. In these cases, the WGB32B downstream of the disinfection system addresses chlorine taste, any remaining sediment, and chemical contaminants &mdash; providing a genuinely useful final polish without the cost of a comprehensive well water system. It is also appropriate as a downstream carbon stage following a dedicated iron removal system.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Filter stages</span><span className='text-slate-900 font-medium'>3 (5&mu;m sediment + dual CTO carbon)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Flow rate</span><span className='text-slate-900 font-medium'>15 GPM</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1-inch NPT</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Filter capacity</span><span className='text-slate-900 font-medium'>100,000 gal (~12 months for 4)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Testing</span><span className='text-slate-900 font-medium'>NSF/ANSI standards (third-party)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>1-year limited</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Annual ownership cost:</strong> Replacement filter set runs approximately $60 to $100 per year. Lowest annual cost of any system on this list.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Installation:</strong> The most DIY-friendly system on this list. Pre-assembled housing, push-in connection fittings, standard 1-inch NPT. iSpring provides YouTube installation guides. Most homeowners with basic plumbing tools complete installation in 2 to 3 hours.
            </p>

            <a href='https://amzn.to/4uRVTbQ' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>

          {/* Pick 4: iSpring WGB32BM */}
          <div id='pick-4' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#4</span>
              <h3 className='text-2xl font-black text-slate-900'>iSpring WGB32BM</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Wells with moderate iron and manganese alongside sediment, at budget price</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: WGB32BM &middot; Purchase price: approximately $185 to $230</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The WGB32BM is the iron-specific variant of the WGB32B. Stage 3 replaces the second carbon block with an iron and manganese reduction filter, addressing the most common aesthetic well water complaints (orange staining, metallic taste, black manganese deposits) in a cartridge system that costs significantly less than tank-based iron removal systems.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it removes:</strong> Sediment (Stage 1), chlorine, pesticides, herbicides, organic chemicals (Stage 2 carbon), iron and manganese reduction (Stage 3 iron/manganese filter).
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>The iron limit:</strong> The Stage 3 iron/manganese cartridge is effective at low to moderate iron levels but is not a high-capacity iron removal system. At iron concentrations above 1 to 2 ppm, filter life will be shorter than the rated 12 months and iron breakthrough may occur before the cartridge is replaced. For wells with iron above 2 ppm, the Home Master HMF3SDGFEC (rated to 3 ppm) or a dedicated tank-based iron filter is a better fit.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it cannot remove:</strong> Bacteria, viruses, hardness, arsenic, nitrates, PFAS. Same limitations as the WGB32B.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Filter stages</span><span className='text-slate-900 font-medium'>3 (sediment, carbon, iron/manganese)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Flow rate</span><span className='text-slate-900 font-medium'>15 GPM</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1-inch NPT</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Filter capacity</span><span className='text-slate-900 font-medium'>100,000 gallons per set</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>1-year limited</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Annual ownership cost:</strong> Replacement filter set approximately $80 to $130 per year &mdash; slightly higher than the standard WGB32B due to iron/manganese cartridge cost.
            </p>

            <a href='https://amzn.to/4uVTDQZ' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>

          {/* Pick 5: iSpring WSP-50 */}
          <div id='pick-5' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#5</span>
              <h3 className='text-2xl font-black text-slate-900'>iSpring WSP-50 Spin-Down Sediment Pre-Filter</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Primary sediment protection before any other filter, reusable without cartridge cost</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: WSP-50 &middot; Purchase price: approximately $40 to $60</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The WSP-50 is not a complete whole-house filtration system. It is a 50-micron spin-down sediment filter that physically separates sand, silt, rust, and coarse sediment from the water flow via centrifugal action, collecting debris in a clear bowl that is flushed by opening a valve &mdash; no cartridge replacement required. It is the correct upstream pre-filter for any well system with significant sediment loading.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Why a spin-down pre-filter matters:</strong> The single most common reason whole-house filter cartridges fail before their rated capacity is sediment overload from well water. A 50-micron spin-down filter upstream of the main system catches coarse particles before they reach the more expensive main cartridges, extending those cartridges&apos; service life by months and significantly reducing annual maintenance costs. For wells in sandy or silty formations, this is not optional &mdash; it is essential.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Filtration</span><span className='text-slate-900 font-medium'>50 micron spin-down</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Flow rate</span><span className='text-slate-900 font-medium'>20+ GPM</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1&Prime; MNPT and 3/4&Prime; FNPT</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Cartridge replacement</span><span className='text-slate-900 font-medium'>None &mdash; flush when bowl fills</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Construction</span><span className='text-slate-900 font-medium'>Lead-free brass</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Annual ownership cost:</strong> Near zero after purchase. No consumables. Occasional flush maintenance only.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Not a substitute for main filtration:</strong> The WSP-50 removes coarse sediment only. It does not address iron, bacteria, chemicals, or fine particles. It belongs at the beginning of a treatment stack, not as a standalone solution.
            </p>

            <a href='#affiliate-wsp50' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>
        </div>

        {/* When These Systems Are Not Enough - amber background */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#FAEEDA' }}>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>When These Systems Are Not Enough</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Every product above has scenarios where it is the wrong tool. These are the situations where you need to look beyond what consumer retail systems offer.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Iron above 3 to 5 ppm:</strong> Cartridge-based systems including the Home Master cannot reliably handle sustained high iron concentrations. You need a dedicated tank-based air injection oxidizing filter. These are available from water treatment specialists and typically cost $1,200 to $2,500 installed. They automatically backwash to self-clean on a programmed cycle and are sized for your specific iron concentration and household flow rate.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Confirmed E. coli:</strong> E. coli in your well indicates fecal contamination and a structural problem with the well. UV disinfection kills E. coli effectively, but the Aquasana&apos;s 7 GPM flow limit means any demand spike above that rate receives insufficient UV dose. For E. coli wells, the more important steps are shock chlorination, structural well inspection, and potentially casing or cap repair. See the <a href='/guides/how-to-shock-chlorinate-well' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>shock chlorination guide</a> and the <Link href='/guides/well-water-contaminants' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well water contaminants guide</Link>. UV treatment is an ongoing safety net, not a substitute for fixing the source.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Arsenic, nitrates, or PFAS:</strong> None of the whole-house systems above address these health contaminants effectively. The correct solution is an NSF/ANSI 58-certified reverse osmosis system at the kitchen tap. See the <Link href='/guides/well-water-treatment-options' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well water treatment options guide</Link> for the complete decision framework.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>High hardness above 15 grains per gallon:</strong> The Aquasana&apos;s SCM conditioner reduces scale at hardness below 15 gpg. Above that, a traditional water softener is required. See the treatment options guide for softener selection guidance.
          </p>
        </div>

        {/* What If My Well Has Multiple Problems */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What If My Well Has Multiple Problems?</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            This is the most common real-world scenario and the one no single product on this list handles completely.
          </p>

          {/* Scenario 1: Iron + bacteria + hardness */}
          <div className='rounded-xl p-6 mb-6 bg-white border-2' style={{ borderColor: '#1D9E75' }}>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Iron + bacteria + hardness</h3>
            <p className='text-slate-700 leading-relaxed mb-4'>
              This is the trifecta many Midwest and Northeast well owners face. No single consumer retail system addresses all three simultaneously without trade-offs. The correct treatment stack is:
            </p>
            <ol className='list-decimal list-inside space-y-2 text-slate-700 mb-4'>
              <li>Sediment pre-filter (iSpring WSP-50 or equivalent) to protect everything downstream</li>
              <li>Iron removal (Home Master HMF3SDGFEC for iron under 3 ppm, or a dedicated tank-based air injection system for higher concentrations)</li>
              <li>Water softener to remove hardness before the UV lamp accumulates scale</li>
              <li>UV disinfection (NSF/ANSI 55 Class A) for bacteria</li>
            </ol>
            <p className='text-slate-700 leading-relaxed mb-4'>
              The Aquasana EQ-WELL-UV-PRO-AST cannot serve this stack because its 0.3 ppm iron ceiling is incompatible with the iron levels that trigger this combination. It is an excellent system for wells with very low iron and bacteria &mdash; not for the high-iron, high-bacteria scenario.
            </p>
            <p className='text-slate-700 leading-relaxed'>
              Total installed cost for the full four-component stack: approximately $1,800 to $4,500 depending on iron concentration, household size, and whether you use the Home Master cartridge approach or a tank-based iron filter. See the <Link href='/guides/well-water-treatment-options' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well water treatment options guide</Link> for the complete multi-component treatment sequences.
            </p>
          </div>

          {/* Scenario 2: Iron + PFAS */}
          <div className='rounded-xl p-6 mb-6 bg-white border-2' style={{ borderColor: '#1D9E75' }}>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Iron + PFAS</h3>
            <p className='text-slate-700 leading-relaxed'>
              The Home Master handles the iron. An NSF P473-certified under-sink reverse osmosis system at the kitchen tap handles the PFAS for drinking and cooking. These two systems do not interfere with each other. Total investment: $220 to $260 for the Home Master plus $200 to $500 for a quality RO system.
            </p>
          </div>

          {/* Scenario 3: Bacteria only */}
          <div className='rounded-xl p-6 mb-6 bg-white border-2' style={{ borderColor: '#1D9E75' }}>
            <h3 className='text-lg font-bold text-slate-900 mb-3'>Bacteria only (iron under 0.3 ppm, no hardness issues)</h3>
            <p className='text-slate-700 leading-relaxed'>
              The Aquasana EQ-WELL-UV-PRO-AST is the correct and complete solution. This is the scenario it was designed for.
            </p>
          </div>
        </div>

        {/* How to Choose */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How to Choose: The Three Questions</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Question 1: What does your water test show?</strong><br />
            The specific contaminants and their concentrations determine everything. Iron at 0.8 ppm, manganese at 0.04 ppm, no bacteria, pH 7.2: the iSpring WGB32BM is appropriate. Iron at 2.5 ppm, sulfur detected, pH 7.5, no bacteria: the Home Master HMF3SDGFEC. Iron at 0.2 ppm, total coliform present, hardness 8 gpg: the Aquasana Rhino EQ-WELL-UV-PRO-AST.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Question 2: What is your peak flow demand?</strong><br />
            Count bathrooms and appliances. A typical 3-bedroom, 2-bathroom home draws 4 to 6 GPM peak. A 5-bedroom, 3-bathroom home with irrigation draws 8 to 12 GPM peak. The Aquasana&apos;s 7 GPM UV limit is a real constraint for larger households.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Question 3: What are you willing to maintain?</strong><br />
            Cartridge systems (Home Master, iSpring) require annual filter changes &mdash; a 30-minute task once a year. Tank systems require programming of backwash cycles but no cartridge changes. UV systems require annual lamp replacement regardless of visible function. Honest maintenance expectations prevent system failures from neglect.
          </p>
        </div>

        {/* What Whole House Filters Cannot Do */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What Whole House Filters Cannot Do</h2>

          <p className='text-slate-700 leading-relaxed mb-4'>
            Every whole house filter review article should include this section. Most do not.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Whole house filtration addresses what it touches. Water that bypasses the system, water stored in the pressure tank before the filter, or water from fixtures connected upstream of the filter receives no treatment. Installation location matters.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Standard whole house filters do not remove: arsenic, nitrates, fluoride, total dissolved solids, PFAS (unless specifically equipped with certified GAC or RO stages), or hardness minerals. If your well water test shows any of these at concerning levels, a point-of-use reverse osmosis system at the kitchen tap is the appropriate additional layer.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            UV disinfection does not filter. A UV system that kills bacteria does not remove the dead bacteria cells from the water. A sediment post-filter downstream of UV ensures that inactivated organisms do not reach the tap.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            Carbon media exhausts silently. When activated carbon reaches its adsorption capacity, contaminants break through without warning, with no change in water appearance or taste. The only protection is replacing cartridges on schedule. Setting a calendar reminder at installation is the most practical safeguard.
          </p>
        </div>

        {/* FAQ Section */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the best whole house water filter for well water?</h3>
              <p className='text-slate-700 leading-relaxed'>There is no single best system for all wells. The correct system depends on your specific water test results. For iron and sulfur up to 3 ppm without bacteria, the Home Master HMF3SDGFEC is the best cartridge-based option at a reasonable price. For wells with bacteria plus general chemical contamination, the Aquasana EQ-WELL-UV-PRO-AST provides the broadest single-package coverage. For mild wells with primarily sediment concerns on a tight budget, the iSpring WGB32B is the most cost-effective starting point.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Do I need a whole house filter or just a drinking water filter?</h3>
              <p className='text-slate-700 leading-relaxed'>For iron and manganese that cause staining on laundry and fixtures, a whole house filter is necessary &mdash; the problem affects every water use. For health contaminants like arsenic, nitrates, and PFAS that are concerns only when consumed, a point-of-use reverse osmosis system at the kitchen sink costs far less and is equally protective for drinking and cooking. Many well owners use both: whole-house treatment for iron and bacteria, point-of-use RO for drinking water purity.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How often do whole house water filter cartridges need to be replaced?</h3>
              <p className='text-slate-700 leading-relaxed'>Most cartridge systems recommend annual replacement for a family of four under normal contamination levels. Wells with very high sediment, iron, or organic matter will exhaust cartridges faster. Monitoring water pressure is the practical indicator &mdash; a significant pressure drop from inlet to outlet (more than 15 PSI) indicates a clogged cartridge requiring replacement regardless of calendar schedule.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I install a whole house water filter myself?</h3>
              <p className='text-slate-700 leading-relaxed'>Cartridge-based systems like the iSpring WGB32B and Home Master HMF3SDGFEC are DIY-capable for homeowners comfortable with basic pipe cutting and threaded fitting work. UV systems require electrical connections and professional installation is recommended. Complex multi-tank systems benefit from professional installation to ensure correct sequencing, flow rates, and backwash programming.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What flow rate do I need for a whole house water filter?</h3>
              <p className='text-slate-700 leading-relaxed'>A standard 3-bedroom, 2-bathroom home requires 8 to 10 GPM peak capacity from the filtration system. Larger homes or homes with irrigation need 12 to 15 GPM minimum. The Aquasana Rhino&apos;s 7 GPM limit is a constraint for larger households, particularly those using it for well water disinfection where UV contact time cannot be compromised.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Does a whole house water filter remove bacteria?</h3>
              <p className='text-slate-700 leading-relaxed'>Standard carbon and sediment whole house filters do not reliably remove bacteria. UV filtration systems disinfect by inactivating bacteria with ultraviolet light. If your well water tests positive for bacteria, you need a UV system with NSF/ANSI 55 Class A certification. The Aquasana EQ-WELL-UV-PRO-AST includes a Class A UV unit. Shock chlorination should also be performed before relying on UV as the sole disinfection method for an established bacterial problem.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the difference between a whole house water filter and a water softener?</h3>
              <p className='text-slate-700 leading-relaxed'>A whole house water filter removes contaminants &mdash; sediment, iron, bacteria, chemicals &mdash; by physical filtration, adsorption, or UV disinfection. A water softener removes hardness minerals (calcium and magnesium) through ion exchange and does not remove other contaminants. They serve different purposes and are often used together. A water softener upstream of a whole house filter protects carbon and iron filter media from hardness fouling. The two systems are not interchangeable.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long do whole house water filter systems last?</h3>
              <p className='text-slate-700 leading-relaxed'>Tank-based systems (media tanks, backwashing iron filters) last 10 to 20 years with proper maintenance. Media may need replacement every 5 to 10 years depending on contamination levels and usage. Cartridge housing systems last indefinitely with proper maintenance &mdash; the housings themselves rarely fail. UV units last 5 to 10 years on the controller and lamp housing, with annual lamp replacement throughout. Control valves on backwashing systems typically last 10 to 15 years before requiring replacement.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Radial Flow Filter</h3>
              <p className='text-slate-700 leading-relaxed'>A filter design in which water enters the filter cartridge from the outside and flows radially inward through the filter media to exit through the center. Compared to axial flow (water flows straight through end to end), radial flow provides greater contact surface area with the media and produces lower pressure drop at equivalent flow rates. The Home Master HMF3SDGFEC uses radial flow design in its iron and carbon stages specifically to maintain high flow rate while allowing adequate contact time.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>KDF Media</h3>
              <p className='text-slate-700 leading-relaxed'>Kinetic Degradation Fluxion &mdash; a high-purity copper-zinc alloy granular media that uses a redox (oxidation-reduction) reaction to remove chlorine, chloramines, and heavy metals from water. Used in the Aquasana Rhino systems as a complement to activated carbon. Effective against chlorine, hydrogen sulfide, and some heavy metals. Does not remove bacteria or dissolved inorganic compounds like nitrates or arsenic.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>NSF/ANSI 55 Class A</h3>
              <p className='text-slate-700 leading-relaxed'>The <a href='https://www.nsf.org/consumer-resources/certified-products-systems' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>NSF International</a> certification standard for ultraviolet water treatment systems designed to disinfect potentially microbiologically unsafe water. Class A systems deliver a minimum UV dose of 40 mJ/cm&sup2; at the rated flow rate and are verified to inactivate bacteria, viruses, and cysts including Cryptosporidium and Giardia. Class B UV systems deliver lower doses intended only for reduction of non-pathogenic nuisance bacteria. For well water with confirmed bacterial contamination, Class A certification is required.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Backwash</h3>
              <p className='text-slate-700 leading-relaxed'>An automatic self-cleaning cycle in which a tank-based filtration system reverses the water flow direction through the filter media for a programmed period, flushing accumulated contaminants and oxidized particles down the drain. Backwashing prevents media channeling (where water finds preferential paths through the media rather than flowing evenly), maintains media porosity, and extends media life. Cartridge-based systems do not backwash &mdash; they are replaced instead of cleaned.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Salt-Free Conditioner (SCM)</h3>
              <p className='text-slate-700 leading-relaxed'>Scale Control Media technology, used in Aquasana systems, that converts dissolved calcium and magnesium into inactive crystalline form that does not adhere to pipe surfaces and appliance components. Unlike ion exchange water softeners, SCM does not remove hardness minerals from the water and does not add sodium. It prevents scale formation rather than removing the minerals. Effective at hardness levels below approximately 15 grains per gallon. Not a water softener.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Related Guides</h2>
          <div className='space-y-3'>
            <Link href='/guides/well-water-treatment-options' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Treatment Options</span>
            </Link>
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants: The Complete Guide</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <a href='/guides/how-to-shock-chlorinate-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Shock Chlorination Guide</span>
            </a>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
          </div>
        </div>

        {/* Lead Form */}
        <div className='border-t border-slate-200 pt-12'>
          <LeadForm />
        </div>

      </article>
    </>
  )
}
