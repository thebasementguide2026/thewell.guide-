import Link from 'next/link'
import type { Metadata } from 'next'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'
import WellDrillingCostCalculator from './Calculator'
import CtaLink from './CtaLink'

const PAGE_URL = 'https://www.thewell.guide/cost-guides/well-drilling-cost-calculator'
const LAST_UPDATED = 'May 2026'

export const metadata: Metadata = {
  title: 'Well Drilling Cost Calculator (2026): Estimate New Water Well Cost | The Well Guide',
  description: "Use our 2026 well drilling cost calculator to estimate what you will pay to drill and equip a new residential water well based on depth, geology, casing size, system type, and region.",
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Well Drilling Cost Calculator 2026: Estimate New Water Well Cost',
    description: 'Free 2026 calculator that estimates the cost to drill and equip a new water well by depth, geology, casing size, pump system, and region.',
    url: PAGE_URL,
    siteName: 'The Well Guide',
    type: 'article',
  },
}

const faqs = [
  {
    q: 'How accurate is this calculator?',
    a: "This calculator produces a planning-grade range, not a contractor quote. It uses 2026 national drilling pricing for depth, geology, casing diameter, pump system, trenching distance, permits, and a regional cost factor. Most homeowners find their actual contractor quotes fall within the calculator's estimated range, but local geology and contractor pricing can move real quotes meaningfully above or below it. The calculator is most accurate when you have realistic information about expected depth (from neighbors, state geological survey data, or your local well drilling contractor) and accurate geology assessment for your area. For projects where depth or geology is uncertain, the high end of the calculator's range is the more conservative budget anchor. Once you have the estimate, request two to four written line-item quotes from licensed local contractors to convert it into a binding price.",
  },
  {
    q: 'What is included in a per-foot price?',
    a: "A per-foot drilling rate normally covers the actual drilling labor, the casing material installed in the borehole, basic well log documentation, and well development. It usually does not cover the pump, pressure tank, trenching from the well to the house, electrical hookup, water testing, or permit fees. Always ask each contractor for a written line-item breakdown so you know exactly what is in their per-foot number. The biggest hidden cost in well drilling quotes is unbundled pricing where the per-foot rate looks competitive but excluded items (pump, pressure tank, trenching, electrical, permits) push the total $3,000 to $7,000 above competitors offering all-in pricing. Request itemized quotes from every contractor you talk to so you can compare like-to-like rather than comparing per-foot rates without context.",
  },
  {
    q: 'Do I have to pay extra for permits and inspections?',
    a: 'Most jurisdictions require a permit and at least one inspection for a new residential well. Permit and inspection fees vary widely by state and county, ranging from $250 to $1,200 in total. Some contractors include permit and inspection fees in their quote and some bill them separately. Strict-permitting regions (parts of California, the Northeast, and certain protected watersheds) sit at the upper end of that range. Ask each contractor whether their quote includes permit fees, inspection fees, water quality testing required by the jurisdiction, and well log filing. Some areas also require post-drilling inspections by the local health department before the well can be put into service, which can add $150 to $500.',
  },
  {
    q: 'How do I estimate the depth if I do not have an existing well?',
    a: 'Start with neighbors. Ask two or three nearby homeowners what depth their wells were drilled to and what year they were drilled. Your local well drilling contractor and your state geological survey usually have a sense of typical depths for your area, and most state databases publish well log data by parcel that you can search online. As a rough national benchmark, most residential wells fall between 100 and 300 feet, with deeper wells more common in dry, mountainous, or hard-rock regions. Wells in coastal sandy soil often go shallower (50 to 150 feet); wells in hard-rock regions like New England, Appalachia, or the Rocky Mountains commonly run 300 to 500 feet or deeper. The depth your contractor actually drills depends on where they hit usable water yield, which only becomes clear during drilling, so neighbor data and state databases give you a planning estimate but not a guarantee.',
  },
  {
    q: 'Can I finance a new well?',
    a: 'Yes. Many homeowners finance a new well with a home equity loan, HELOC, personal loan, or a contractor financing program. The USDA Rural Development program also offers loan and grant programs for water systems on qualifying rural properties through their Single Family Housing Repair Loans and Grants program. Some states and counties offer low-interest loan programs specifically for residential well drilling, particularly in regions where municipal water is not available. Get the written contract and full cost estimate first, then compare financing options on overall interest rate, term length, and any prepayment penalties. For lower-income rural homeowners, the USDA grant component can cover part of the project cost without repayment requirements; check eligibility through your local USDA Rural Development office before committing to commercial financing.',
    usdaLink: true,
  },
  {
    q: 'How long does it take to drill a residential well?',
    a: 'Most residential well drilling projects take 1 to 3 days of actual drilling time once the rig is on site. The full project timeline including permit approval, contractor scheduling, drilling, casing, pump installation, trenching, electrical hookup, water testing, and final inspection typically runs 2 to 6 weeks. Permit approval alone takes 1 to 4 weeks in most jurisdictions. Strict-permitting regions and seasonal demand peaks (spring through summer in most of the country) push timelines toward the longer end. Active drilling itself runs faster in soft soil (one day for a 150 to 200 foot well) and slower in hard rock (two to four days for the same depth). Most contractors will not start drilling until permits are approved and a written contract is signed.',
  },
  {
    q: 'What is the difference between a drilled well and a dug well, and how does cost compare?',
    a: 'A drilled well is created with rotary or percussion drilling equipment that bores a narrow shaft (typically 4 to 8 inches in diameter) hundreds of feet down to reach a stable aquifer. A dug well is excavated with backhoes or hand tools, typically 3 to 20 feet wide and 10 to 30 feet deep, drawing from shallow groundwater. Drilled wells are dramatically more reliable, deliver consistently safe water from deeper aquifers, and last 30 to 50 years or more, which is why they are the standard for new residential wells in 2026. Dug wells cost $1,500 to $5,000 to construct (significantly less than drilled wells) but are vulnerable to surface contamination, can dry up during droughts, and rarely meet modern health code for new construction. Most jurisdictions no longer permit new dug wells. For a complete comparison, see our dug well vs drilled well guide.',
    dugWellLink: true,
  },
]

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${PAGE_URL}#webpage`,
  url: PAGE_URL,
  name: 'Well Drilling Cost Calculator (2026)',
  description: 'Use our 2026 well drilling cost calculator to estimate what you will pay to drill and equip a new residential water well based on depth, geology, casing size, system type, and region.',
  inLanguage: 'en-US',
  isPartOf: { '@type': 'WebSite', name: 'The Well Guide', url: 'https://www.thewell.guide' },
  breadcrumb: { '@id': `${PAGE_URL}#breadcrumb` },
  mainEntity: { '@id': `${PAGE_URL}#article` },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  '@id': `${PAGE_URL}#breadcrumb`,
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.thewell.guide' },
    { '@type': 'ListItem', position: 2, name: 'Cost Guides', item: 'https://www.thewell.guide/cost-guides' },
    { '@type': 'ListItem', position: 3, name: 'Well Drilling Cost Calculator', item: PAGE_URL },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': `${PAGE_URL}#article`,
  headline: 'Well Drilling Cost Calculator (2026)',
  description: 'Use our 2026 well drilling cost calculator to estimate what you will pay to drill and equip a new residential water well based on depth, geology, casing size, system type, and region.',
  url: PAGE_URL,
  mainEntityOfPage: PAGE_URL,
  datePublished: '2026-05-08',
  dateModified: '2026-05-08',
  author: { '@type': 'Organization', name: 'The Well Guide Team' },
  publisher: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://www.thewell.guide',
    parentOrganization: { '@type': 'Organization', name: 'The Home Guide Network', url: 'https://thehome.guide' },
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': `${PAGE_URL}#faq`,
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

const graphSchema = {
  '@context': 'https://schema.org',
  '@graph': [webPageSchema, breadcrumbSchema, articleSchema, faqSchema],
}

export default function WellDrillingCostCalculatorPage() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(graphSchema) }} />

      {/* Hero */}
      <section className='relative overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <div className='relative max-w-7xl mx-auto px-6 pt-16 pb-12'>
          <div className='flex items-center space-x-3 mb-6'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#854F0B' }}>Calculator</span>
          </div>
          <h1 className='text-4xl md:text-5xl font-black text-white mb-5 leading-[1] tracking-tight'>
            Well Drilling Cost Calculator <span style={{ color: '#5DCAA5' }}>(2026)</span>
          </h1>
          <p className='text-lg text-white/75 max-w-2xl font-medium leading-relaxed'>
            Estimate the all-in cost to drill and equip a new residential water well in 2026. Plug in depth, geology, casing size, pump system, trenching distance, and region for a planning range you can take to local contractors.
          </p>
          <p className='text-xs text-white/60 mt-4 font-medium uppercase tracking-wider'>Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Well Drilling Cost Calculator' },
      ]} />

      {/* Main two-column layout */}
      <div className='max-w-7xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

          {/* Calculator column - mobile shows first, desktop sticky right */}
          <aside className='lg:col-span-1 lg:order-2'>
            <div className='lg:sticky lg:top-6'>
              {/* TL;DR callout */}
              <div className='mb-5 rounded-xl border-l-4 p-5 bg-white shadow-sm' style={{ borderLeftColor: '#1D9E75' }}>
                <p className='text-xs font-bold uppercase tracking-[0.2em] mb-2' style={{ color: '#0F6E56' }}>TL;DR</p>
                <p className='text-slate-700 text-sm leading-relaxed'>
                  Most residential well drilling projects in 2026 land between $5,500 and $18,000 fully equipped, with deep or hard-rock wells reaching $25,000 or more. Depth, geology, and whether you include a pump and pressure system drive most of the spread. This calculator estimates your specific range based on depth, geology, casing size, pump system, trenching distance, and region. Use the result as a planning anchor before requesting two to four written quotes from licensed local well drilling contractors.
                </p>
              </div>

              {/* Pump-First Rule decision callout */}
              <div className='mb-5 rounded-xl p-5 border' style={{ backgroundColor: '#FFF8EC', borderColor: '#E9D29A' }}>
                <div className='flex items-center space-x-2 mb-2'>
                  <span className='text-lg'>⚠️</span>
                  <p className='text-xs font-bold uppercase tracking-[0.2em]' style={{ color: '#854F0B' }}>The Pump-First Rule</p>
                </div>
                <p className='text-slate-700 text-sm leading-relaxed'>
                  Before drilling a new well, rule out pump replacement. If your existing well, casing, and yield are fine but your pump is failing, pump replacement typically costs $1,500 to $4,000 (see our <Link href='/cost-guides/well-pump-replacement-cost-calculator' className='underline font-semibold' style={{ color: '#854F0B' }}>well pump replacement cost calculator</Link>). New well drilling costs five to ten times more for the same outcome. Drilling a new well makes sense when the well itself has failed (lost yield, corroded casing, contaminated aquifer) or you need higher flow than the existing well can deliver. Use this calculator only after confirming a new well is genuinely needed.
                </p>
              </div>

              <WellDrillingCostCalculator />
              <div className='mt-5 rounded-xl p-5 text-white' style={{ backgroundColor: '#0D3D30' }}>
                <p className='text-xs font-bold uppercase tracking-[0.2em] mb-2' style={{ color: '#5DCAA5' }}>Need a real number?</p>
                <h3 className='text-lg font-bold mb-2'>Compare quotes from local well drillers</h3>
                <p className='text-white/70 text-sm mb-4'>Free, no obligation, no spam.</p>
                <CtaLink
                  href='#get-quotes'
                  scrollToId='get-quotes'
                  ctaText='Get free quote'
                  placement='sidebar'
                  className='inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-bold text-white transition-colors bg-[#1D9E75] hover:bg-[#178a65]'
                >
                  Get free quote &rarr;
                </CtaLink>
              </div>
            </div>
          </aside>

          {/* Article column */}
          <article className='lg:col-span-2 lg:order-1'>

            {/* Quick answer */}
            <div className='mb-10 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
              <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Most residential well drilling projects in 2026 land between $5,500 and $18,000 fully equipped, with deep or hard-rock wells reaching $25,000 or more. Depth, geology, and whether you include a pump and pressure system drive most of the spread. Use the calculator to your right (or above on mobile) for a personalized range, then compare it against two to four written contractor quotes. For the full breakdown by component, see our <Link href='/cost-guides/well-drilling-cost' className='underline font-semibold' style={{ color: '#0F6E56' }}>well drilling cost guide</Link>.
              </p>
            </div>

            {/* Intro */}
            <p className='text-slate-700 leading-relaxed mb-8'>
              This calculator estimates the realistic price range to drill and equip a new water well on your property in 2026. It is built on national drilling pricing data weighted for depth, geology, casing size, pump system, trenching, and regional labor cost. Local quotes will still vary because actual rock conditions, water yield, and contractor pricing only become clear once a driller is on site.
            </p>

            {/* Section 1 */}
            <section className='mb-12'>
              <div className='flex items-center space-x-3 mb-3'>
                <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>2026 Pricing</span>
                <div className='flex-1 h-px bg-slate-200'></div>
              </div>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>What does it really cost to drill a well in 2026?</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Most residential water wells in 2026 cost between $5,500 and $18,000 fully equipped. Drilling itself is priced per foot, and contractors then add casing, the pump and pressure tank, trenching from the well to the house, electrical hookup, permits, and inspections.
              </p>
              <div className='overflow-x-auto rounded-xl border border-[#C8DDD7]'>
                <table className='w-full text-sm'>
                  <thead className='bg-slate-50 text-slate-700'>
                    <tr>
                      <th className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Scenario</th>
                      <th className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Typical depth</th>
                      <th className='text-left font-semibold px-4 py-3 border-b border-slate-200'>Total installed range</th>
                    </tr>
                  </thead>
                  <tbody className='text-slate-700'>
                    <tr className='border-b border-slate-100'>
                      <td className='px-4 py-3'>Shallow well (easier soil)</td>
                      <td className='px-4 py-3 whitespace-nowrap'>50 to 100 ft</td>
                      <td className='px-4 py-3 font-semibold whitespace-nowrap'>$3,000 to $7,500</td>
                    </tr>
                    <tr className='border-b border-slate-100 bg-slate-50/50'>
                      <td className='px-4 py-3'>Standard residential well</td>
                      <td className='px-4 py-3 whitespace-nowrap'>100 to 200 ft</td>
                      <td className='px-4 py-3 font-semibold whitespace-nowrap'>$5,500 to $12,000</td>
                    </tr>
                    <tr className='border-b border-slate-100'>
                      <td className='px-4 py-3'>Moderate-depth well</td>
                      <td className='px-4 py-3 whitespace-nowrap'>200 to 300 ft</td>
                      <td className='px-4 py-3 font-semibold whitespace-nowrap'>$10,000 to $18,000</td>
                    </tr>
                    <tr>
                      <td className='px-4 py-3'>Deep well (hard rock)</td>
                      <td className='px-4 py-3 whitespace-nowrap'>300 to 500+ ft</td>
                      <td className='px-4 py-3 font-semibold whitespace-nowrap'>$15,000 to $30,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className='text-xs text-slate-500 mt-3'>Ranges are typical homeowner totals fully equipped, with significant variation based on geology and region.</p>
            </section>

            {/* Section 2 */}
            <section className='mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>How this well drilling cost calculator builds your estimate</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                The calculator combines six homeowner-supplied inputs into a planning range:
              </p>
              <ul className='space-y-2 text-slate-700 leading-relaxed list-disc pl-6 mb-4'>
                <li><span className='font-semibold'>Depth</span> drives the largest single cost variable, since drilling and casing scale per foot.</li>
                <li><span className='font-semibold'>Geology</span> sets the per-foot multiplier. Soft soil drills faster than hard rock.</li>
                <li><span className='font-semibold'>Casing diameter</span> changes both material cost and rig productivity.</li>
                <li><span className='font-semibold'>Pump and pressure system</span> adds a flat band (or zero, if you only want drilling and casing).</li>
                <li><span className='font-semibold'>Trenching distance</span> from the well to the house adds excavation, line, and backfill.</li>
                <li><span className='font-semibold'>Region</span> applies a final cost multiplier to drilling and permits.</li>
              </ul>
              <p className='text-slate-700 leading-relaxed'>
                The tool blends those factors into a low and high estimate so you walk into contractor conversations with a realistic planning range, not a single dollar figure that pretends to be a quote.
              </p>
            </section>

            {/* Section 3 */}
            <section className='mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>The biggest factors that change well drilling cost</h2>
              <div className='space-y-4'>
                <div className='bg-white border border-slate-200 rounded-lg p-5'>
                  <h3 className='font-bold text-slate-900 text-sm mb-2'>Depth</h3>
                  <p className='text-slate-700 text-sm leading-relaxed'>Drilling is priced per foot, so doubling depth roughly doubles the drilling and casing line. Going from a 150-foot well to a 350-foot well at the same per-foot rate often adds $7,000 to $12,000.</p>
                </div>
                <div className='bg-white border border-slate-200 rounded-lg p-5'>
                  <h3 className='font-bold text-slate-900 text-sm mb-2'>Ground conditions</h3>
                  <p className='text-slate-700 text-sm leading-relaxed'>Soft soil and sand drill quickly. Mixed soil with some rock is the typical case. Hard rock raises the per-foot rate by 25 to 40 percent because of slower progress, more bit wear, and tougher casing work.</p>
                </div>
                <div className='bg-white border border-slate-200 rounded-lg p-5'>
                  <h3 className='font-bold text-slate-900 text-sm mb-2'>Casing diameter</h3>
                  <p className='text-slate-700 text-sm leading-relaxed'>4-inch casing is the budget option, 6-inch is the standard residential choice, and 8-inch is built for higher flow homes or small farms. Each step up adds roughly 10 to 20 percent to drilling and casing cost.</p>
                </div>
                <div className='bg-white border border-slate-200 rounded-lg p-5'>
                  <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump and pressure system</h3>
                  <p className='text-slate-700 text-sm leading-relaxed'>A basic submersible pump and pressure tank package adds $1,500 to $3,000. A high-output system with larger pump, larger pressure tank, or a constant-pressure controller can add $3,500 to $6,500.</p>
                </div>
                <div className='bg-white border border-slate-200 rounded-lg p-5'>
                  <h3 className='font-bold text-slate-900 text-sm mb-2'>Location, permits, and access</h3>
                  <p className='text-slate-700 text-sm leading-relaxed'>Strict-permitting jurisdictions, long trench runs from the well to the house, steep or wooded sites, and tight access for the rig all push cost up. Rural sites with easy truck access and lighter permitting tend to come in lower.</p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section className='mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>Example well drilling estimates for common setups</h2>
              <div className='space-y-5'>
                <div className='rounded-xl border border-[#C8DDD7] bg-white p-5'>
                  <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Shallow well</p>
                  <h3 className='font-bold text-slate-900 mb-2'>Soft soil, 100 ft, 6&quot; casing, basic pump, average region</h3>
                  <p className='text-slate-700 text-sm leading-relaxed mb-2'>A straightforward shallow well in soft soil with a basic pump and pressure tank. Roughly 75 to 100 feet of drilling, light trenching to a nearby house, and standard permitting.</p>
                  <p className='text-slate-900 font-semibold'>Typical range: $5,000 to $9,000</p>
                </div>
                <div className='rounded-xl border border-[#C8DDD7] bg-white p-5'>
                  <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Standard residential</p>
                  <h3 className='font-bold text-slate-900 mb-2'>Mixed soil and some rock, 150 ft, 6&quot; casing, basic pump, average region</h3>
                  <p className='text-slate-700 text-sm leading-relaxed mb-2'>The most common scenario nationally. Mixed-condition drilling, standard casing, basic pump and pressure tank, and a 25 to 75 foot trench to the house.</p>
                  <p className='text-slate-900 font-semibold'>Typical range: $8,500 to $14,000</p>
                </div>
                <div className='rounded-xl border border-[#C8DDD7] bg-white p-5'>
                  <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Deep hard-rock</p>
                  <h3 className='font-bold text-slate-900 mb-2'>Hard rock, 400 ft, 6&quot; casing, high-output system, high-cost region</h3>
                  <p className='text-slate-700 text-sm leading-relaxed mb-2'>A deep hard-rock well with a high-output pump and pressure system, a long trench, and strict-permitting region. The full premium scenario the calculator is designed to surface.</p>
                  <p className='text-slate-900 font-semibold'>Typical range: $22,000 to $32,000+</p>
                </div>
              </div>
              <p className='text-slate-700 leading-relaxed mt-5'>
                Plug similar inputs into the calculator to see your own range tuned to your project type, depth, geology, and region.
              </p>
            </section>

            {/* Section 5 */}
            <section className='mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>Questions to ask a well drilling contractor before you hire</h2>
              <ul className='space-y-2.5 text-slate-700 leading-relaxed list-disc pl-6 mb-5'>
                <li>Are you licensed and insured in my state, and can you share your license number?</li>
                <li>What exactly is included in this estimate, line by line?</li>
                <li>How deep do you expect this well to be, and what are you basing that on?</li>
                <li>What happens if you do not hit enough water at the expected depth?</li>
                <li>What casing size and material do you recommend, and why?</li>
                <li>Will you perform yield testing and water quality testing, or is that a separate vendor?</li>
                <li>Who handles permits and inspections, and are those fees in the quote?</li>
                <li>What warranty do you provide on drilling, casing, and the pump system?</li>
                <li>Will you give me a written contract and a final well log when the job is finished?</li>
                <li>Can you share references from recent nearby jobs in the same geology?</li>
              </ul>
              <p className='text-slate-700 leading-relaxed'>
                Use the estimate above as a planning range, then <CtaLink href='#get-quotes' scrollToId='get-quotes' ctaText='fill out the quote form' placement='inline_questions' className='underline font-semibold text-[#0F6E56]'>fill out the form</CtaLink> to get your free quote from licensed well drilling contractors in your area.
              </p>
            </section>

            {/* Section 6 */}
            <section className='mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-4'>When drilling a new well makes more sense than more repairs</h2>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Replacing a worn pump or pressure tank is usually the right move when the well itself is producing well, the casing is sound, and water quality is good. A pump-only replacement typically lands between $1,500 and $4,000, far cheaper than drilling new.
              </p>
              <p className='text-slate-700 leading-relaxed mb-4'>
                Drilling a new (or deeper) well becomes the smarter play when:
              </p>
              <ul className='space-y-2 text-slate-700 leading-relaxed list-disc pl-6 mb-4'>
                <li>The existing well has lost yield as the water table dropped</li>
                <li>The casing is corroded, collapsed, or contaminated and cannot be rehabilitated</li>
                <li>Repeated rehabilitation, acid treatment, or pump replacements are not solving the underlying problem</li>
                <li>You need a higher flow rate than the existing well can deliver</li>
                <li>Local water quality has changed and a different aquifer offers cleaner water</li>
              </ul>
              <p className='text-slate-700 leading-relaxed'>
                If you are not sure which side of that line you are on, start with the <Link href='/cost-guides/well-pump-replacement-cost' className='underline font-semibold' style={{ color: '#0F6E56' }}>well pump replacement cost guide</Link> and the <Link href='/cost-guides/well-pump-replacement-cost-calculator' className='underline font-semibold' style={{ color: '#0F6E56' }}>well pump replacement cost calculator</Link>. If a pump-only fix gets you back in service for under $4,000, that is almost always the better path. Also worth reviewing if you suspect water quality is the issue: our <Link href='/cost-guides/well-water-testing-cost' className='underline font-semibold' style={{ color: '#0F6E56' }}>well water testing cost guide</Link> and <Link href='/cost-guides/well-water-treatment-cost-calculator' className='underline font-semibold' style={{ color: '#0F6E56' }}>well water treatment calculator</Link>.
              </p>
            </section>

            {/* FAQ */}
            <section className='mb-12'>
              <h2 className='text-2xl md:text-3xl font-bold text-slate-900 mb-6'>FAQ</h2>
              <div className='space-y-4'>
                {faqs.map((f, i) => {
                  let answerNode: any = f.a
                  if (f.usdaLink) {
                    const parts = f.a.split('USDA Rural Development program')
                    answerNode = (
                      <>
                        {parts[0]}
                        <a href='https://www.rd.usda.gov/programs-services/single-family-housing-programs/single-family-housing-repair-loans-grants' target='_blank' rel='noopener' className='underline font-semibold' style={{ color: '#0F6E56' }}>USDA Rural Development program</a>
                        {parts[1]}
                      </>
                    )
                  } else if (f.dugWellLink) {
                    const parts = f.a.split('dug well vs drilled well guide')
                    answerNode = (
                      <>
                        {parts[0]}
                        <Link href='/guides/dug-well-vs-drilled-well' className='underline font-semibold' style={{ color: '#0F6E56' }}>dug well vs drilled well guide</Link>
                        {parts[1]}
                      </>
                    )
                  }
                  return (
                    <div key={i} className='rounded-lg border border-slate-200 bg-white p-5'>
                      <h3 className='text-lg font-bold text-slate-900 mb-2'>{f.q}</h3>
                      <p className='text-slate-700 leading-relaxed text-sm'>{answerNode}</p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Newsletter */}
            <div className='mb-12'>
              <BeehiivEmailCapture />
            </div>

            {/* Lead form */}
            <section id='get-quotes' className='py-12 px-6 sm:px-10 rounded-2xl mt-8 scroll-mt-24' style={{ backgroundColor: '#0D3D30' }}>
              <div className='max-w-2xl mx-auto text-center mb-8'>
                <h2 className='text-3xl font-bold text-white mb-3'>Get free well drilling quotes</h2>
                <p className='text-white/70'>Connect with licensed local well drilling contractors. No obligation, no spam, no robo-calls.</p>
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
                <Link href='/cost-guides/well-drilling-cost' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
                  <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Cost Guide</p>
                  <h3 className='font-bold text-slate-900 mb-1'>Well Drilling Cost 2026</h3>
                  <p className='text-sm text-slate-600'>The full cost breakdown by component, depth, and geology that this calculator is built on.</p>
                </Link>
                <Link href='/cost-guides/well-pump-replacement-cost-calculator' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
                  <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Calculator</p>
                  <h3 className='font-bold text-slate-900 mb-1'>Well Pump Replacement Cost Calculator</h3>
                  <p className='text-sm text-slate-600'>If your well itself is fine and you only need a pump replacement, start here for a tighter range.</p>
                </Link>
                <Link href='/cost-guides/pressure-tank-replacement-cost' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
                  <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Cost Guide</p>
                  <h3 className='font-bold text-slate-900 mb-1'>Pressure Tank Replacement Cost</h3>
                  <p className='text-sm text-slate-600'>What it costs to replace the pressure tank alone or alongside a pump or new well job.</p>
                </Link>
                <Link href='/cost-guides/well-water-testing-cost' className='block rounded-lg border border-[#C8DDD7] p-5 bg-white hover:shadow-md transition-shadow'>
                  <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#854F0B' }}>Cost Guide</p>
                  <h3 className='font-bold text-slate-900 mb-1'>Well Water Testing Cost</h3>
                  <p className='text-sm text-slate-600'>Test before you treat. What the major water tests cost and what each one measures.</p>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
