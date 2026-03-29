import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Best Well Pressure Tanks (2026): Sizing, Specs, and Real Picks | The Well Guide',
  description: 'The best well pressure tanks for private wells reviewed with real specs, sizing guidance, and honest trade-offs. Bladder and diaphragm tanks compared by household size, budget, and installation type. Updated for 2026.',
  openGraph: {
    title: 'Best Well Pressure Tanks (2026): Sizing, Specs, and Real Picks',
    description: 'The best well pressure tanks for private wells reviewed with real specs, sizing guidance, and honest trade-offs.',
    url: 'https://www.thewell.guide/reviews/best-pressure-tanks',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/best pressure tanks.jpg', width: 1200, height: 630, alt: 'Well pressure tanks comparison for residential well systems' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/reviews/best-pressure-tanks' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Well Pressure Tanks (2026): Sizing, Specs, and Real Picks',
  description: 'The best well pressure tanks for private wells reviewed with real specs, sizing guidance, and honest trade-offs.',
  image: 'https://www.thewell.guide/best pressure tanks.jpg',
  datePublished: '2026-03-28',
  dateModified: '2026-03-28',
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
  mainEntityOfPage: 'https://www.thewell.guide/reviews/best-pressure-tanks',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Well Pressure Tanks 2026',
  description: 'Top well pressure tank picks for residential wells by household size and budget',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Amtrol WX-202',
      description: 'Best overall for most homes. 20-gallon pre-charged bladder tank with stainless steel system connection and 5-year warranty.',
      url: 'https://www.thewell.guide/reviews/best-pressure-tanks#pick-1',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Water Worker HT-32B',
      description: 'Best budget option. 32-gallon bladder tank with strong value and a 5-year warranty.',
      url: 'https://www.thewell.guide/reviews/best-pressure-tanks#pick-2',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Amtrol WX-250',
      description: 'Best for large homes. 44-gallon pre-charged bladder tank with heavy-duty stainless steel connection for 4+ bathroom households.',
      url: 'https://www.thewell.guide/reviews/best-pressure-tanks#pick-3',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Wellmate WM-9',
      description: 'Best for corrosion resistance and longevity. Composite fiberglass construction, no metal to corrode, lifetime corrosion warranty.',
      url: 'https://www.thewell.guide/reviews/best-pressure-tanks#pick-4',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What size pressure tank do I need for my well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tank size depends on your pump flow rate and the number of fixtures in the home. A 20-gallon tank is appropriate for most 2 to 3 bathroom homes with a pump delivering 8 to 12 GPM. Homes with 4 or more bathrooms, irrigation systems, or high-demand appliances should consider a 32 to 44-gallon tank. Undersizing causes short cycling, which is the number one killer of well pumps. Use the drawdown formula: drawdown gallons equals pump flow rate in GPM multiplied by one minute minimum run time. Your tank drawdown should always exceed this number.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do well pressure tanks last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quality bladder tank lasts 7 to 12 years with proper maintenance. Diaphragm tanks typically last 5 to 10 years. Composite tanks like the Wellmate can last 15 or more years because they cannot corrode. The primary failure mode is bladder or diaphragm rupture, which causes waterlogging. Checking air pressure annually with a tire gauge extends tank life significantly.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a bladder tank and a diaphragm tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A bladder tank uses a replaceable balloon-like bladder to separate air and water. Water enters the bladder and compressed air surrounds it. In a diaphragm tank, a permanent rubber diaphragm divides the tank into air and water halves. Bladder tanks are more common in residential wells, easier to diagnose, and the bladder can sometimes be replaced without replacing the entire tank. Diaphragm tanks are common in smaller sizes and booster applications.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check if my pressure tank is waterlogged?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turn off the pump at the breaker and open a faucet to drain pressure. With the system depressurized, check the air valve on top of the tank with a tire gauge. A properly charged tank should read 2 PSI below your cut-in pressure, typically 28 PSI for a 30/50 system. If you get zero or very low pressure, the bladder has likely failed and the tank is waterlogged. A waterlogged tank feels heavy and full when you tap or rock it compared to the hollow ring of a properly charged tank.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a pressure tank myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Replacing a same-size pressure tank is a manageable DIY project for homeowners comfortable with pipe wrenches and threaded fittings. The job requires shutting off the pump, draining the old tank, disconnecting it, connecting the new tank, charging it to the correct air pressure, and restarting the system. Allow 2 to 4 hours. If you are upgrading to a larger tank or relocating it, professional installation is recommended because of possible plumbing modifications and code requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What PSI should my well pressure tank be set at?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The air charge should be set 2 PSI below your pressure switch cut-in setting. For a 30/50 pressure switch (the most common residential setting), charge the tank to 28 PSI. For a 40/60 switch, charge to 38 PSI. Always check air pressure with the pump off and the system depressurized. Over-inflating reduces drawdown capacity. Under-inflating causes the bladder to expand excessively against the tank wall, shortening bladder life.',
      },
    },
  ],
}

export default function BestPressureTanks() {
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
          src='/best pressure tanks.jpg'
          alt='Well pressure tanks comparison for residential well systems'
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
            Best Well Pressure<br />
            <span style={{ color: '#5DCAA5' }}>Tanks (2026)</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Sizing, specs, and real picks. The best pressure tanks for private wells, reviewed with honest trade-offs and the sizing math most guides skip.
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
        { label: 'Best Pressure Tanks' }
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
            The right pressure tank depends on your household size, pump flow rate, and whether you want the cheapest working solution or the longest-lasting investment. For most 2 to 3 bathroom homes, the <strong>Amtrol WX-202</strong> (20 gal) is the standard. If you need more drawdown on a budget, the <strong>Water Worker HT-32B</strong> (32 gal) delivers the best value per gallon. Larger homes with 4 or more bathrooms should step up to the <strong>Amtrol WX-250</strong> (44 gal). For corrosive water, coastal environments, or homeowners who want a tank that will outlast the pump, the <strong>Wellmate WM-9</strong> is the premium choice with a composite shell that cannot corrode.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>One rule before buying:</strong> Know your pressure switch settings and your pump&apos;s flow rate before selecting a tank size. An undersized tank causes short cycling &mdash; the number one killer of well pumps. See the <Link href='/guides/well-pressure-tank-guide' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>complete pressure tank guide</Link> for the sizing formula, or the <Link href='/cost-guides/pressure-tank-replacement-cost' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>pressure tank replacement cost guide</Link> for what you should expect to pay installed.
          </p>
        </div>

        {/* How We Selected */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How We Selected These Products</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Every product in this guide was verified as currently available through major retailers. Specifications were confirmed against manufacturer documentation. We evaluated each tank on five criteria:
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Drawdown capacity:</strong> The actual usable water between pump cycles &mdash; not the total tank volume, which is always larger than the usable drawdown. We verified drawdown figures against factory specs and standard 30/50 pressure switch settings.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Build quality and warranty:</strong> Shell material, bladder quality, connection fitting type, and the manufacturer&apos;s warranty commitment. Stainless steel connections resist corrosion better than standard steel nipples.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Sizing for real households:</strong> We matched each tank to specific household sizes based on pump flow rate and fixture count, not vague marketing recommendations.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Installation practicality:</strong> Weight, dimensions, connection size, and whether the tank requires a floor stand or can be wall-mounted. Some tanks are too heavy for one person to carry when empty.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Long-term reliability:</strong> Industry track record, common failure modes, and how long each tank typically lasts in real-world residential well service.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            For a complete breakdown of pressure tank replacement costs including labor, see the <Link href='/cost-guides/pressure-tank-replacement-cost' className='underline' style={{ color: '#1D9E75' }}>pressure tank replacement cost guide</Link>. For the full explanation of how pressure tanks work, sizing formulas, and maintenance schedules, see the <Link href='/guides/well-pressure-tank-guide' className='underline' style={{ color: '#1D9E75' }}>complete pressure tank guide</Link>.
          </p>
        </div>

        {/* At a Glance Comparison Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>At a Glance: Top Picks by Use Case</h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse min-w-[700px]'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Best For</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Tank</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Total Volume</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Drawdown (30/50)</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Type</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Most homes (2&ndash;3 bath)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Amtrol WX-202</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>20 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~5.7 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Bladder</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>5 year</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Budget / more drawdown</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Water Worker HT-32B</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>32 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~9.3 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Bladder</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>5 year</td>
                </tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Large homes (4+ bath)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Amtrol WX-250</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>44 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~14.0 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Bladder</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>5 year</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Corrosion resistance / longevity</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Wellmate WM-9</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>30 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>~9.6 gal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Composite</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Lifetime (shell)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The Four Best Picks */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>The Four Best Pressure Tanks</h2>

          {/* Pick 1: Amtrol WX-202 */}
          <div id='pick-1' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#1</span>
              <h3 className='text-2xl font-black text-slate-900'>Amtrol WX-202</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Most 2 to 3 bathroom homes, standard residential well systems, reliable all-around pick</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: WX-202 &middot; Total volume: 20 gallons &middot; Drawdown at 30/50: approximately 5.7 gallons</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The Amtrol WX-202 is the most commonly installed residential pressure tank in the United States for good reason. Amtrol invented the pre-charged diaphragm-style well tank and the WX-202 reflects decades of iteration on a proven design. The 20-gallon total volume provides approximately 5.7 gallons of drawdown at standard 30/50 pressure switch settings &mdash; enough to prevent short cycling on pumps delivering up to 10 GPM in typical residential demand patterns.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Why Amtrol over cheaper alternatives:</strong> The stainless steel system connection is the critical differentiator. Budget tanks use galvanized steel nipples that corrode from the inside out, eventually leaking at the tank connection before the bladder fails. The WX-202&apos;s stainless connection eliminates this failure mode entirely. The controlled-action butyl bladder is designed for full expansion without folding or creasing against the shell wall, which is how bladders develop pinhole leaks in lesser tanks.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it handles well:</strong> Standard residential duty on wells from 50 to 300 feet deep with submersible pumps delivering 5 to 12 GPM. Homes with 2 to 3 bathrooms and normal water usage patterns. Works with 20/40, 30/50, or 40/60 pressure switch configurations.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Where it falls short:</strong> Homes with 4 or more bathrooms, irrigation systems, or high-demand fixtures will outrun the 5.7-gallon drawdown during peak use, causing the pump to cycle more frequently than ideal. If your household regularly runs multiple showers, a dishwasher, and a washing machine simultaneously, step up to the WX-250 or a 32-gallon alternative.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Total volume</span><span className='text-slate-900 font-medium'>20 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Drawdown (30/50)</span><span className='text-slate-900 font-medium'>~5.7 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1&Prime; stainless steel</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pre-charge</span><span className='text-slate-900 font-medium'>38 PSI factory (adjustable)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max pressure</span><span className='text-slate-900 font-medium'>150 PSI</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Bladder</span><span className='text-slate-900 font-medium'>Controlled-action butyl rubber</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Dimensions</span><span className='text-slate-900 font-medium'>16&Prime; diameter &times; 27.5&Prime; tall</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>5-year limited</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Installation notes:</strong> Ships pre-charged to 38 PSI. You must adjust the air charge to 2 PSI below your cut-in pressure before connecting to the system. For a 30/50 switch, charge to 28 PSI. For 40/60, charge to 38 PSI (the factory setting). Weight empty is approximately 16 pounds &mdash; manageable for one person. Standard 1-inch NPT connection fits most residential well plumbing without adapters.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Expected lifespan:</strong> 7 to 12 years with annual air pressure checks. The most common failure mode is gradual bladder degradation, which manifests as waterlogging. Check the air valve annually with a tire gauge when the system is depressurized. See the <Link href='/guides/well-pressure-tank-guide' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>pressure tank guide</Link> for the complete maintenance protocol.
            </p>

            <a href='https://amzn.to/4v1OGX2' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>

          {/* Pick 2: Water Worker HT-32B */}
          <div id='pick-2' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#2</span>
              <h3 className='text-2xl font-black text-slate-900'>Water Worker HT-32B</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Homeowners wanting more drawdown at a budget price, 3 to 4 bathroom homes, upgrade from a smaller failing tank</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: HT-32B &middot; Total volume: 32 gallons &middot; Drawdown at 30/50: approximately 9.3 gallons</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The Water Worker HT-32B delivers the most drawdown per dollar on this list. At 32 gallons total volume with approximately 9.3 gallons of drawdown at 30/50, it provides 63 percent more usable water per pump cycle than the Amtrol WX-202 at a modest price premium. For homeowners replacing a waterlogged tank and wanting to upgrade capacity without jumping to a premium brand, the HT-32B is the practical choice.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Why it earns the budget pick:</strong> Water Worker uses a heavy-gauge steel shell with a baked enamel exterior finish and a butyl rubber bladder. The construction is not as refined as Amtrol &mdash; the system connection is standard steel rather than stainless &mdash; but the fundamentals are sound. The 32-gallon size provides a meaningful buffer against short cycling for households with moderately high demand.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Where it makes sense:</strong> Homes where the existing 20-gallon tank caused the pump to cycle too frequently. Households with 3 to 4 bathrooms. Well systems where the pump flow rate is 10 to 15 GPM and a 20-gallon tank does not provide enough drawdown to keep cycle times above the one-minute minimum.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Where it falls short:</strong> The steel system connection will corrode faster than Amtrol&apos;s stainless steel fitting in aggressive water chemistry &mdash; particularly water with low pH, high chlorides, or high dissolved solids. If your well water is corrosive (pH below 6.5 or high mineral content), the Amtrol or Wellmate is a better long-term investment. The larger footprint (20 inches diameter, 33 inches tall) requires more floor space than the WX-202.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Total volume</span><span className='text-slate-900 font-medium'>32 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Drawdown (30/50)</span><span className='text-slate-900 font-medium'>~9.3 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1&Prime; NPT steel</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pre-charge</span><span className='text-slate-900 font-medium'>38 PSI factory (adjustable)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max pressure</span><span className='text-slate-900 font-medium'>100 PSI</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Bladder</span><span className='text-slate-900 font-medium'>Butyl rubber</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Dimensions</span><span className='text-slate-900 font-medium'>20&Prime; diameter &times; 33&Prime; tall</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>5-year limited</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Installation notes:</strong> Same pre-charge adjustment applies &mdash; set air pressure to 2 PSI below cut-in before connecting. Weight empty is approximately 25 pounds. Manageable for one person but awkward due to size. Verify clearance in your mechanical space before ordering &mdash; the 20-inch diameter is wider than many existing tank locations designed for 16-inch tanks.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Expected lifespan:</strong> 5 to 10 years. The steel connection is the likely first point of failure in corrosive water environments. Annual air pressure checks and visual inspection of the connection fitting extend useful life.
            </p>

            <a href='https://amzn.to/4s0Dd78' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>

          {/* Pick 3: Amtrol WX-250 */}
          <div id='pick-3' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#3</span>
              <h3 className='text-2xl font-black text-slate-900'>Amtrol WX-250</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Large homes with 4+ bathrooms, high-demand households, well systems with 12+ GPM pumps</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: WX-250 &middot; Total volume: 44 gallons &middot; Drawdown at 30/50: approximately 14.0 gallons</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The Amtrol WX-250 is the right tank for homes that regularly run multiple fixtures simultaneously &mdash; morning rush with two showers, a dishwasher, and a washing machine. At 44 gallons total with approximately 14 gallons of drawdown, it provides enough buffer to prevent short cycling even on high-flow pumps delivering 12 to 20 GPM. It shares the same build quality as the WX-202 &mdash; stainless steel system connection, controlled-action butyl bladder &mdash; in a larger shell.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>When you need this size:</strong> If your pump delivers 12 GPM or more and your household regularly uses 10 or more gallons in quick bursts (long showers, filling bathtubs, running irrigation), a 20-gallon tank will cause the pump to cycle every 30 to 45 seconds during peak demand. The WX-250&apos;s 14-gallon drawdown keeps cycle times above one minute even at high flow rates, which is critical for pump longevity.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>What it handles:</strong> Homes with 4 to 6 bathrooms. Well systems with 1 HP or larger submersible pumps. Properties with irrigation systems on well water. Households with consistently high simultaneous demand.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Practical constraints:</strong> At 22 inches in diameter and 48 inches tall, the WX-250 requires significant floor space. Empty weight is approximately 38 pounds &mdash; still manageable for two people but not a solo installation project. Verify doorway clearance and mechanical room floor space before ordering. If replacing a smaller tank, confirm that the existing plumbing can accommodate the larger footprint.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Total volume</span><span className='text-slate-900 font-medium'>44 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Drawdown (30/50)</span><span className='text-slate-900 font-medium'>~14.0 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1-1/4&Prime; stainless steel</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pre-charge</span><span className='text-slate-900 font-medium'>38 PSI factory (adjustable)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max pressure</span><span className='text-slate-900 font-medium'>150 PSI</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Bladder</span><span className='text-slate-900 font-medium'>Controlled-action butyl rubber</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Dimensions</span><span className='text-slate-900 font-medium'>22&Prime; diameter &times; 48&Prime; tall</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>5-year limited</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Expected lifespan:</strong> 7 to 12 years, same as the WX-202. The stainless connection and quality bladder extend service life in the same way. Annual air pressure checks are the single most important maintenance task. See the <Link href='/problems/well-pump-short-cycling' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>short cycling guide</Link> for diagnosis steps if your pump starts rapid cycling despite having this tank.
            </p>

            <a href='https://amzn.to/4t5o2dK' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>

          {/* Pick 4: Wellmate WM-9 */}
          <div id='pick-4' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#4</span>
              <h3 className='text-2xl font-black text-slate-900'>Wellmate WM-9</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Corrosive water, coastal environments, homeowners who want the longest-lasting tank, water treatment system applications</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Model: WM-9 &middot; Total volume: 30 gallons &middot; Drawdown at 30/50: approximately 9.6 gallons</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              The Wellmate WM-9 is fundamentally different from every other tank on this list. Instead of a steel shell, it uses a composite fiberglass-wound construction that cannot corrode &mdash; ever. No rust, no pitting, no galvanic corrosion at the fittings, no failed exterior coatings exposing raw steel. For well owners dealing with aggressive water chemistry &mdash; low pH, high chlorides, hydrogen sulfide, or coastal salt air &mdash; the Wellmate eliminates the most common non-bladder failure mode entirely.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Why composite matters:</strong> Steel pressure tanks in corrosive environments frequently develop exterior rust or connection fitting corrosion within 3 to 5 years, even with baked-on finishes. The connection point between a steel tank and a galvanized or brass fitting is particularly vulnerable to galvanic corrosion. The Wellmate&apos;s composite shell and engineered connection eliminate this chemistry entirely. The manufacturer backs the shell with a lifetime corrosion warranty &mdash; a claim no steel tank manufacturer can match.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Also ideal for water treatment systems:</strong> The WM-9 is widely used by water treatment professionals as the pressure tank in treatment system installations because the composite shell is not affected by residual treatment chemicals, ozone, chlorine, or acid water that would degrade a steel tank over time.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>The trade-off:</strong> Premium pricing. The WM-9 costs significantly more than steel tanks of comparable size. If your water chemistry is neutral (pH 7.0 to 8.0, low dissolved solids, no sulfur) and you are in a dry inland climate, a steel Amtrol or Water Worker will last nearly as long at lower cost. The Wellmate&apos;s premium is justified specifically by corrosion-prone environments and water chemistry.
            </p>

            {/* Verified Specifications */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Total volume</span><span className='text-slate-900 font-medium'>30 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Drawdown (30/50)</span><span className='text-slate-900 font-medium'>~9.6 gallons</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Shell material</span><span className='text-slate-900 font-medium'>Composite fiberglass</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Connection</span><span className='text-slate-900 font-medium'>1-1/4&Prime; molded-in</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pre-charge</span><span className='text-slate-900 font-medium'>38 PSI factory (adjustable)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max pressure</span><span className='text-slate-900 font-medium'>125 PSI</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Weight (empty)</span><span className='text-slate-900 font-medium'>~15 lbs (lighter than steel)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>Lifetime (shell) / 5-year (bladder)</span></div>
              </div>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Installation advantage:</strong> At approximately 15 pounds empty, the WM-9 is significantly lighter than steel tanks of the same capacity. One person can easily carry and position it. The composite construction also means the tank is not affected by condensation, so no insulation wrap or drip pan is needed in humid basements.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Expected lifespan:</strong> 15 or more years for the shell. The bladder remains the wear component at 7 to 12 years, but the tank shell itself should outlast two or more bladder replacements. In non-corrosive environments, the lifespan advantage over steel is less pronounced. In corrosive environments, the Wellmate will outlast steel tanks by a factor of two or more.
            </p>

            <a href='https://amzn.to/3O73P8H' target='_blank' rel='noopener noreferrer nofollow' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Current Price
            </a>
          </div>
        </div>

        {/* Sizing Your Pressure Tank - callout box */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#FAEEDA' }}>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Sizing Your Pressure Tank: The Math Most Guides Skip</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            The number one mistake homeowners make is buying a tank based on total volume without understanding drawdown. A 20-gallon tank does not store 20 gallons of usable water. The actual usable water between pump cycles &mdash; the drawdown &mdash; depends on your pressure switch settings and is always a fraction of total volume.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>The minimum run time rule:</strong> Your pump should run for at least one minute per cycle. Running less than one minute per cycle is short cycling and dramatically reduces pump motor life. To calculate the minimum drawdown you need:
          </p>
          <div className='bg-white rounded-xl p-5 mb-6 border border-slate-200'>
            <p className='text-sm font-bold text-slate-900 mb-2'>Minimum drawdown formula:</p>
            <p className='text-slate-700 font-mono text-sm mb-2'>Minimum drawdown (gallons) = Pump flow rate (GPM) &times; 1 minute</p>
            <p className='text-slate-700 text-sm'>Example: 10 GPM pump &rarr; need at least 10 gallons drawdown &rarr; WX-202 (5.7 gal) is too small &rarr; need WX-250 (14.0 gal) or HT-32B (9.3 gal) minimum</p>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to find your pump&apos;s flow rate:</strong> Check the pump nameplate for model number and look up the spec sheet, or time how long the pump runs to fill a known container with all other fixtures closed. Most residential submersible pumps deliver 8 to 15 GPM depending on depth and motor size.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            For the complete sizing walkthrough with pressure switch settings and the full drawdown table, see the <Link href='/guides/well-pressure-tank-guide' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>pressure tank guide</Link>.
          </p>
        </div>

        {/* Signs Your Pressure Tank Needs Replacement */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Signs Your Pressure Tank Needs Replacement</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Pressure tanks do not fail suddenly &mdash; they degrade gradually, and the symptoms are easy to miss if you do not know what to watch for.
          </p>

          <div className='space-y-4'>
            <div className='rounded-xl p-5 bg-white border-2' style={{ borderColor: '#1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pump rapid cycling</h3>
              <p className='text-slate-700 leading-relaxed'>The pump turns on and off every few seconds when water is running. This is the most common and most damaging symptom. A waterlogged tank has no air cushion, so the pump starts as soon as pressure drops slightly and stops almost immediately. See the <Link href='/problems/well-pump-short-cycling' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>short cycling guide</Link> for full diagnosis.</p>
            </div>
            <div className='rounded-xl p-5 bg-white border-2' style={{ borderColor: '#1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pressure fluctuations at fixtures</h3>
              <p className='text-slate-700 leading-relaxed'>Water pressure surges and drops noticeably during use &mdash; shower gets hot and cold, faucet flow varies. This indicates the tank is not maintaining consistent pressure between pump cycles.</p>
            </div>
            <div className='rounded-xl p-5 bg-white border-2' style={{ borderColor: '#1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Zero air pressure at the valve</h3>
              <p className='text-slate-700 leading-relaxed'>With the pump off and the system depressurized, check the Schrader valve on top of the tank with a tire gauge. If the reading is zero or water comes out of the valve, the bladder has ruptured and the tank is waterlogged. Replacement is required.</p>
            </div>
            <div className='rounded-xl p-5 bg-white border-2' style={{ borderColor: '#1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Visible rust or corrosion</h3>
              <p className='text-slate-700 leading-relaxed'>Rust on the shell exterior, at the system connection, or at the base of the tank indicates corrosion has compromised the shell integrity. A corroded tank is a safety hazard under pressure and should be replaced immediately.</p>
            </div>
          </div>

          <p className='text-slate-700 leading-relaxed mt-6'>
            For the full list of pressure-related problems and their causes, see the <Link href='/problems/well-water-pressure-low' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>low water pressure guide</Link> and the <Link href='/problems/well-pump-running-constantly' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>pump running constantly guide</Link>.
          </p>
        </div>

        {/* Bladder vs Diaphragm vs Composite */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Bladder vs. Diaphragm vs. Composite</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Understanding the three tank types helps you choose the right technology for your situation.
          </p>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Bladder tanks (Amtrol WX series, Water Worker HT series)</h3>
              <p className='text-slate-700 leading-relaxed'>Water enters a replaceable balloon-like bladder inside the steel shell. Compressed air surrounds the bladder. When the bladder wears out, some tanks allow bladder replacement without replacing the entire tank. Bladder tanks are the most common type in residential wells and are the standard recommendation for most installations.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Diaphragm tanks</h3>
              <p className='text-slate-700 leading-relaxed'>A permanent rubber diaphragm is sealed across the middle of the tank, creating separate air and water chambers. The diaphragm is not replaceable &mdash; when it fails, the tank is replaced. Common in smaller booster pump applications and older installations. Diaphragm tanks are increasingly less common in new residential well installations.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Composite tanks (Wellmate)</h3>
              <p className='text-slate-700 leading-relaxed'>Fiberglass-wound composite shell with an internal bladder. The composite shell eliminates corrosion entirely. Premium cost but longest shell life. Ideal for corrosive water or environments where steel tanks fail prematurely. The bladder inside is still the wear component and has the same service life as steel tank bladders.</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What size pressure tank do I need for my well?</h3>
              <p className='text-slate-700 leading-relaxed'>Tank size depends on your pump flow rate and the number of fixtures in the home. A 20-gallon tank is appropriate for most 2 to 3 bathroom homes with a pump delivering 8 to 12 GPM. Homes with 4 or more bathrooms, irrigation systems, or high-demand appliances should consider a 32 to 44-gallon tank. Undersizing causes short cycling, which is the number one killer of well pumps. Use the drawdown formula: minimum drawdown equals pump GPM times one minute run time. Your tank drawdown should always exceed this number.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long do well pressure tanks last?</h3>
              <p className='text-slate-700 leading-relaxed'>A quality bladder tank lasts 7 to 12 years with proper maintenance. Diaphragm tanks typically last 5 to 10 years. Composite tanks like the Wellmate can last 15 or more years because the shell cannot corrode. The primary failure mode is bladder or diaphragm rupture, which causes waterlogging. Checking air pressure annually with a tire gauge extends tank life significantly.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the difference between a bladder tank and a diaphragm tank?</h3>
              <p className='text-slate-700 leading-relaxed'>A bladder tank uses a replaceable balloon-like bladder to separate air and water. Water enters the bladder and compressed air surrounds it. In a diaphragm tank, a permanent rubber diaphragm divides the tank into air and water halves. Bladder tanks are more common in residential wells, easier to diagnose, and the bladder can sometimes be replaced without replacing the entire tank. Diaphragm tanks are common in smaller sizes and booster applications.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I check if my pressure tank is waterlogged?</h3>
              <p className='text-slate-700 leading-relaxed'>Turn off the pump at the breaker and open a faucet to drain pressure. With the system depressurized, check the air valve on top of the tank with a tire gauge. A properly charged tank should read 2 PSI below your cut-in pressure &mdash; typically 28 PSI for a 30/50 system. If you get zero or very low pressure, the bladder has likely failed and the tank is waterlogged. A waterlogged tank feels heavy and full when you tap or rock it compared to the hollow ring of a properly charged tank.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I install a pressure tank myself?</h3>
              <p className='text-slate-700 leading-relaxed'>Replacing a same-size pressure tank is a manageable DIY project for homeowners comfortable with pipe wrenches and threaded fittings. The job requires shutting off the pump, draining the old tank, disconnecting it, connecting the new tank, charging it to the correct air pressure, and restarting the system. Allow 2 to 4 hours. If you are upgrading to a larger tank or relocating it, professional installation is recommended because of possible plumbing modifications and code requirements.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What PSI should my well pressure tank be set at?</h3>
              <p className='text-slate-700 leading-relaxed'>The air charge should be set 2 PSI below your pressure switch cut-in setting. For a 30/50 pressure switch (the most common residential setting), charge the tank to 28 PSI. For a 40/60 switch, charge to 38 PSI. Always check air pressure with the pump off and the system depressurized. Over-inflating reduces drawdown capacity. Under-inflating causes the bladder to expand excessively against the tank wall, shortening bladder life.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Drawdown</h3>
              <p className='text-slate-700 leading-relaxed'>The volume of usable water a pressure tank delivers between the pump cut-in pressure and cut-out pressure in a single cycle. Drawdown is always less than total tank volume because a portion of the tank is occupied by compressed air. Drawdown varies with pressure switch settings &mdash; higher pressure differentials yield more drawdown from the same tank.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Short Cycling</h3>
              <p className='text-slate-700 leading-relaxed'>A condition where the well pump turns on and off in rapid succession, typically every few seconds. Caused by an undersized or waterlogged pressure tank that cannot maintain pressure between cycles. Short cycling overheats the pump motor and dramatically shortens pump life. See the <Link href='/problems/well-pump-short-cycling' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>short cycling guide</Link> for diagnosis and solutions.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Waterlogged</h3>
              <p className='text-slate-700 leading-relaxed'>A pressure tank condition where the air charge has been lost, usually due to bladder or diaphragm failure, and the tank is completely filled with water. A waterlogged tank provides no pressure buffering, causing the pump to cycle every time a fixture is opened. Diagnosis involves checking the Schrader valve with a tire gauge when the system is depressurized.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Cut-In / Cut-Out Pressure</h3>
              <p className='text-slate-700 leading-relaxed'>The pressure switch settings that control pump operation. Cut-in is the lower pressure at which the pump turns on (typically 30 or 40 PSI). Cut-out is the upper pressure at which the pump shuts off (typically 50 or 60 PSI). Common residential settings are 30/50 or 40/60. The air pre-charge in the pressure tank should always be set 2 PSI below the cut-in value.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pre-Charge</h3>
              <p className='text-slate-700 leading-relaxed'>The air pressure inside the tank when no water pressure is present. Tanks ship with a factory pre-charge (typically 38 PSI) that must be adjusted to match your pressure switch settings before installation. Correct pre-charge is 2 PSI below cut-in pressure. Over-charging or under-charging reduces drawdown and shortens bladder life.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Related Guides</h2>
          <div className='space-y-3'>
            <Link href='/guides/well-pressure-tank-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pressure Tank: The Complete Guide</span>
            </Link>
            <Link href='/cost-guides/pressure-tank-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Pressure Tank Replacement Cost</span>
            </Link>
            <Link href='/problems/well-pump-short-cycling' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Short Cycling</span>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </Link>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
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
