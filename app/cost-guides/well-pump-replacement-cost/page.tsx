import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'Well Pump Replacement Cost 2026: What You\'ll Actually Pay | The Well Guide',
  description: 'Well pump replacement costs $1,500 to $4,000 for most residential systems, but depth is the single biggest variable — a 100-foot well costs roughly half what a 400-foot well costs. This guide breaks down every cost factor, explains when to repair vs replace, and shows you how to get an accurate quote.',
  openGraph: {
    title: 'Well Pump Replacement Cost 2026: What You\'ll Actually Pay',
    description: 'Well pump replacement costs $1,500 to $4,000 for most residential systems. This guide breaks down every cost factor by depth and pump type.',
    url: 'https://www.thewell.guide/cost-guides/well-pump-replacement-cost',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/well%20cost.jpg', width: 1200, height: 630, alt: 'Well contractor service truck at a rural property' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/cost-guides/well-pump-replacement-cost' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does it cost to replace a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential well pump replacements cost $1,500 to $4,000 fully installed including pump, drop pipe, wiring, and labor. The national average is around $1,900. Shallow well jet pumps run $800 to $1,800. Submersible pumps in 100 to 200 foot wells run $1,500 to $3,000. Submersible pumps in 300 to 400 foot wells run $2,800 to $5,500. Emergency weekend service adds 25 to 50 percent.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most expensive part of replacing a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For shallow wells, the pump unit is the dominant cost. For deep wells (200 feet or more), labor is the largest line item — pulling a pump from 300 feet with a service truck and two-person crew costs more than the pump itself in many cases. The combination of labor, drop pipe replacement, and wiring replacement on a deep well job often exceeds the pump unit cost.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to replace a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential pump replacements complete in one day. A shallow jet pump replacement takes 2 to 4 hours. A submersible pump in a 100 to 200 foot well takes 4 to 6 hours. A submersible pump in a 300 to 400 foot well takes 6 to 8 hours. Complex jobs with difficult access or electrical upgrades can extend into a second day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I replace the pressure tank at the same time as the pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes, if the tank is more than 8 years old or near the pump's age. Adding pressure tank replacement while the contractor is already on site costs $200 to $500 incremental — far less than scheduling a separate service call. Replacing them separately later would cost $300 to $700 just for the tank job.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I replace a well pump myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A shallow well jet pump above ground is within DIY capability for someone comfortable with plumbing and electrical work. A submersible pump in any well deeper than 25 feet is not a practical DIY project. Pulling a submersible pump requires a cable hoist to manage hundreds of feet of pipe and wire without dropping the assembly into the well. Dropping the pump results in an extremely expensive recovery operation.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does homeowners insurance cover well pump replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard homeowners insurance does not cover well pump replacement due to normal wear, mechanical failure, or end of service life. Insurance may cover replacement if a covered peril caused the damage — lightning strike, fire, or in some cases a power surge. Document the event thoroughly before filing a claim. Some insurers offer equipment breakdown endorsements that cover mechanical failure — ask about adding this before you need it.',
      },
    },
    {
      '@type': 'Question',
      name: 'What brands of well pump are most reliable?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Franklin Electric is the dominant residential brand, with motors used as OEM components in many other pump housings. Grundfos makes reliable variable-speed and constant-pressure systems. Goulds (owned by Xylem) is another quality choice widely used by professional contractors. Ask your contractor which brand they are installing and whether they carry warranty replacement stock for it.',
      },
    },
    {
      '@type': 'Question',
      name: 'When should I repair vs replace my well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Apply the 50 percent rule: if a repair costs more than 50 percent of full replacement, replace the pump. Always repair surface components (pressure switch, control box capacitor, pressure tank) without replacing the pump. Replace the pump when the motor or impellers have failed, the pump is over 12 years old, it has had multiple service calls in two years, or it ran dry at any point. Dry running destroys internal components within minutes even if the pump continues to operate.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: "Well Pump Replacement Cost 2026: What You'll Actually Pay",
  description: 'Well pump replacement costs $1,500 to $4,000 for most residential systems. This guide breaks down every cost factor by depth and pump type, explains when to repair vs replace, and shows how to get an accurate quote.',
  image: 'https://www.thewell.guide/well%20cost.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/cost-guides/well-pump-replacement-cost',
}

export default function WellPumpReplacementCost() {
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
          src='/well cost.jpg'
          alt='Well contractor service truck at a rural property'
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
            Well Pump Replacement<br />
            Cost 2026:<br />
            <span style={{ color: '#5DCAA5' }}>What You{`'`}ll Actually Pay</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Depth is the single biggest variable. A 100-foot well costs roughly half what a 400-foot well costs.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated Mar 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Well Pump Replacement Cost' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Most residential well pump replacements cost $1,500 to $4,000 fully installed, including the pump, drop pipe, wiring, and labor. The national average is around $1,900. Well depth is the single biggest cost driver — every 100 feet adds roughly $500 to $1,000 in pipe, wire, and labor. A shallow well jet pump replacement runs $800 to $1,800. A submersible pump in a 200-foot well runs $1,800 to $3,000. A submersible pump in a 400-foot well can reach $4,000 to $6,000 or more. Emergency weekend service adds 25 to 50 percent to any of these figures.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Most homeowners find out they need a well pump replacement at the worst possible moment — no water on a Saturday morning, guests arriving, no time to comparison shop. This guide gives you the numbers and the framework to understand exactly what you should be paying before anyone starts work, so you can evaluate quotes with confidence rather than desperation.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>Three factors explain 90 percent of the variation in well pump replacement costs. First, well depth — every 100 feet of depth adds roughly $500 to $1,000 in pipe, wire, and labor, and a 400-foot well can cost two to three times more than a 100-foot well for the same pump. Second, whether the job is scheduled or emergency — weekend and after-hours service adds 25 to 50 percent to the labor portion automatically. Third, whether the drop pipe and wire need replacing — contractors who exclude these from their initial quote will add them to the final invoice. Understand these three variables and you can estimate your project cost within a few hundred dollars before making a single phone call.</p>
        </div>

        {/* What Is Included */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Breakdown</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What Is Included in a Well Pump Replacement</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before looking at numbers, understand what a complete pump replacement actually involves. Many quotes leave out components that will inevitably need to be replaced, making them look artificially low.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The pump itself</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The motor and impeller assembly that sits at the bottom of the well. For a submersible pump, this is a sealed cylindrical unit. Pump cost alone ranges from $300 to $1,500 depending on horsepower rating and brand.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The drop pipe</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Connects the pump to the surface, running the full depth of the well. Standard residential drop pipe is Schedule 80 PVC or polyethylene in 20-foot sections. Replacing all of it during a pump swap adds $1 to $3 per foot of depth — so $200 to $600 for a 200-foot well, and $400 to $1,200 for a 400-foot well. Most contractors recommend replacing the drop pipe whenever the pump is pulled.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The wiring</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Runs alongside the drop pipe from the pump motor to the control box above ground. Like the drop pipe, most contractors replace it whenever the pump comes out. Budget $1 to $3 per foot.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The control box</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>On three-wire pump systems, sits above ground and houses the capacitors and relay that govern motor startup. If the pump motor failed partly due to a failed capacitor, the control box may need replacement too. Control box replacement: $100 to $400.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pitless adapter and well cap</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Seal the casing where the water line exits below the frost line and at the top of the casing respectively. Often replaced during a pump job if they show corrosion or wear. Budget $50 to $200 for both.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Labor</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The largest single line item after the pump on deep wells. Pulling a submersible pump from 400 feet requires a service truck with a cable hoist, a two-person crew, and 4 to 8 hours of work. Labor alone can reach $1,500 on a deep well job.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Permits</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Required in some jurisdictions for pump replacement. Check with your contractor and local health department. Budget $50 to $200 if permits are required in your area.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-6'>A complete, honest quote for a submersible pump replacement should include all of the above. If a quote seems low, ask specifically whether it includes new drop pipe and wire. Some contractors quote the pump and labor only, leaving the pipe and wire as line items that appear later.</p>
        </div>

        {/* Cost by Pump Type and Depth */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cost Data</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Well Pump Replacement Cost by Pump Type and Depth</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>This is the table most homeowners actually need — a realistic cost range by the type of system you have, fully installed including pump, pipe, wire, and labor.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>System Type</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Well Depth</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Total Installed Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Shallow well jet pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Under 25 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$800 to $1,800</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Deep well jet pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>25 to 100 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$1,200 to $2,500</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>100 to 200 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$1,500 to $3,000</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>200 to 300 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$2,000 to $4,000</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>300 to 400 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$2,800 to $5,500</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>400 feet or deeper</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$4,000 to $8,000+</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Constant pressure (VFD) system</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Any depth</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Add $800 to $2,000 to standard cost</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>These ranges assume scheduled weekday installation. Emergency or weekend service typically adds 25 to 50 percent to the labor portion.</p>
        </div>

        {/* Regional Cost Variation */}
        <div className='mb-16'>
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Regional Cost Variation</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Labor rates and regional market conditions affect total cost meaningfully. Use this as a calibration guide when evaluating local quotes:</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Region</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Adjustment vs National Average</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Northeast (NY, CT, MA, NJ)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>15 to 30% above</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>High labor costs, permit requirements common</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Mid-Atlantic (PA, MD, VA, DE)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>At or slightly above average</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Wide rural/suburban variation</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Southeast (NC, SC, GA, FL, AL)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>At or slightly below average</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>High well density, competitive market</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Midwest (OH, IN, IL, MI, WI)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10 to 15% below average</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Lower base labor rates, many rural contractors</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>South Central (TX, OK, AR, MO)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>At or below average</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Varies significantly by metro vs rural</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Mountain West (CO, UT, AZ, NM)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10 to 20% above average</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Rocky terrain adds labor; permit requirements vary</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pacific Northwest (WA, OR)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>20 to 35% above average</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>High labor costs; stringent permitting</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>California</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>25 to 40% above average</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Highest labor rates nationally; permit almost always required</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>One counterintuitive note: rural areas do not always cost less than suburban areas. Rural wells are often deeper, requiring more pipe and labor. And in areas with fewer well contractors, travel fees and reduced competition can push rural prices above suburban averages in the same state.</p>
        </div>

        {/* Six Key Variables */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Variables</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-8'>What Drives the Cost: The Six Key Variables</h2>

          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Variable 1: Well Depth</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Depth is the single largest cost driver in any well pump replacement. Every additional foot of depth adds:</p>
            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 text-sm leading-relaxed'>
              <li>More drop pipe material</li>
              <li>More wiring material</li>
              <li>More time pulling and lowering the pump assembly</li>
              <li>Potentially a larger hoist or specialized pulling equipment</li>
            </ul>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Depth costs roughly $3 to $8 per foot in combined material and labor. This means the difference between a 100-foot and a 400-foot well is $900 to $2,400 in depth-related costs alone, before factoring in the pump itself.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Wells over 300 feet often require a truck-mounted hoist rather than a portable hand hoist. The cost of mobilizing that equipment adds to the job. Wells in rocky terrain or difficult-to-access locations add further.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>If you do not know your well depth, check your well completion report. Most states require drillers to file one, and your county health department or state environmental agency can provide a copy. The well depth is listed on the first page.</p>
          </div>

          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Variable 2: Pump Horsepower and Brand</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Submersible pump motors are rated in horsepower. Most residential wells under 200 feet use a 1/2 HP pump. Wells 200 to 300 feet deep typically use 3/4 HP. Wells deeper than 300 feet or serving homes with high water demand use 1 HP or larger.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Half HP pumps cost roughly half what 1 HP units cost. A basic 1/2 HP submersible pump unit costs $300 to $600. A quality 3/4 HP unit costs $500 to $900. A 1 HP unit costs $700 to $1,400.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Brand affects both upfront cost and longevity. Franklin Electric is the dominant brand in the residential market — their motors are OEM components in many other pump brands. Grundfos and Goulds (Xylem) are the other major quality brands. Premium brands cost 15 to 25 percent more than budget brands but typically last 15 to 25 years versus 5 to 10 years for lower-tier options. Over a 20-year ownership period, premium brands are almost always less expensive when you factor in the labor cost of one or two additional replacements.</p>
          </div>

          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Variable 3: Drop Pipe and Wire Condition</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>If your existing drop pipe and wire are in good condition and made of current materials, a contractor may reuse them and save significant cost. Ask specifically whether your contractor plans to replace them and why. Reasons to replace both regardless of apparent condition: old polyethylene pipe degrades and develops pinhole leaks that are impossible to detect until after reassembly; old wire insulation cracks and creates short-circuit risk deep in the well where it cannot be repaired without pulling the pump again.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>If your pump has reached the end of its service life (10 to 15 years), the pipe and wire are a similar age. Replacing them proactively at the same time the pump comes out saves the full cost of pulling the pump a second time in a few years. The labor to pull the pump is the expensive part — adding new pipe and wire while it is already out costs a fraction of what it would cost as a separate service call.</p>
          </div>

          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Variable 4: Additional Components Needed</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Several components beyond the pump itself commonly need replacement during a pump job:</p>
            <div className='space-y-3'>
              <div className='bg-white border border-slate-200 rounded-lg p-4'>
                <p className='text-slate-700 text-sm leading-relaxed'><strong>Pressure tank:</strong> If your pressure tank is the same age as the pump, replacing it at the same time saves a future service call. A new tank costs $300 to $700 installed. Adding it to an existing pump replacement typically adds $200 to $400. See our <Link href='/guides/well-pressure-tank-guide' className='underline' style={{ color: '#1D9E75' }}>well pressure tank guide</Link> for more on sizing and selection.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-4'>
                <p className='text-slate-700 text-sm leading-relaxed'><strong>Pressure switch:</strong> A $25 part that takes 30 minutes to replace. Almost always worth replacing when the pump comes out, especially if the switch is over 5 years old.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-4'>
                <p className='text-slate-700 text-sm leading-relaxed'><strong>Check valve:</strong> Installed just above the pump on the drop pipe. Prevents pressurized water from flowing back down into the well. If the existing check valve is leaking, it is the cause of short-cycling that accelerates pump wear. Replace it whenever the pump comes out.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-4'>
                <p className='text-slate-700 text-sm leading-relaxed'><strong>Torque arrestor and safety rope:</strong> A torque arrestor prevents the pump from spinning in the casing when it starts. A safety rope provides a backup if the pump assembly ever disconnects from the drop pipe. Both are inexpensive (combined $50 to $100) and should be included on every installation.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-4'>
                <p className='text-slate-700 text-sm leading-relaxed'><strong>Control box:</strong> On three-wire pump systems, replace the control box when the pump is replaced if the box is over 10 years old or shows any sign of corrosion or burn marks.</p>
              </div>
            </div>
          </div>

          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Variable 5: Scheduled vs Emergency Service</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Emergency pump replacement — no water, weekend, immediate service required — almost always costs more than scheduled replacement. Emergency and after-hours premiums run 25 to 50 percent above standard rates. A job that costs $2,500 during the week can cost $3,500 or more on a Saturday.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>If your pump is over 10 years old and showing early signs of decline (occasional pressure drops, slightly elevated electricity bills, occasional air spurting), scheduling a proactive replacement before failure saves both the emergency premium and the stress of losing water without notice.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Signs that predict imminent failure and justify proactive scheduling: pump age over 12 years, increasing electricity consumption from the well pump circuit, occasional air in faucets during heavy use, and recovery time that has noticeably lengthened since the well was new.</p>
          </div>

          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Variable 6: Water Quality and Well Conditions</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Wells with high iron, manganese, sand, or sediment accelerate pump wear. A pump serving high-mineral water may need replacement in 8 to 10 years rather than 12 to 15. Abrasive particles — sand, grit — damage impellers and accelerate wear significantly faster than clean water.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>If your water has known quality issues, factor a shorter replacement interval into your long-term cost planning. Installing an appropriate pre-pump filter or sediment separator during the pump replacement protects the new unit and extends its service life. This adds $100 to $400 to the job but can add years to pump life.</p>
          </div>
        </div>

        {/* Repair vs Replace */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Decision</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What It Costs to Replace vs Repair: The 50 Percent Rule</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Not every pump problem requires full replacement. Before authorizing a complete pump swap, understand which problems are worth repairing and which justify replacement.</p>

          <div className='grid md:grid-cols-2 gap-6 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-3'>Always repair, not replace</h3>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>These problems do not require pulling the pump from the well:</p>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                <li>Pressure switch failure: $100 to $300</li>
                <li>Pressure tank bladder failure: $300 to $800</li>
                <li>Control box capacitor: $100 to $250</li>
                <li>Corroded wire connection at wellhead: $100 to $300</li>
              </ul>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-3'>Replace without question when</h3>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                <li>Pump is over 12 years old with a motor or impeller problem</li>
                <li>Pump has required two or more service calls in the past two years</li>
                <li>Pump ran dry at any point (destroys impellers and motor windings within minutes)</li>
                <li>Pump is a no-name brand from the original installation</li>
              </ul>
            </div>
          </div>

          <div className='rounded-lg p-5 mb-6' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className='font-semibold text-sm mb-2' style={{ color: '#854F0B' }}>The 50 percent rule:</p>
            <p className='text-slate-700 text-sm leading-relaxed'>If a repair requires pulling the pump and the repair cost exceeds 50 percent of full replacement cost, replace the pump. A $1,500 repair on a system that costs $2,800 to replace completely means you are paying more than half the replacement price to keep an old pump in service — and that pump could fail again within a year or two.</p>
          </div>

          <div className='bg-white border border-slate-200 rounded-lg p-5'>
            <h3 className='font-bold text-slate-900 text-sm mb-3'>Repair makes sense when</h3>
            <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
              <li>The pump is under 8 years old</li>
              <li>The failed component is a surface-mounted electrical part (capacitor, pressure switch, control box)</li>
              <li>This is the first repair the pump has required</li>
              <li>A licensed contractor has tested the pump output and confirmed the motor is in good condition</li>
            </ul>
          </div>
        </div>

        {/* Component Repair Costs Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Reference</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Component Repair Costs: Reference Table</h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Component</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Repair/Replacement Cost</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Pull Pump Required?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pressure switch</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$100 to $300</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pressure tank (bladder failure)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$300 to $800</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Control box (full replacement)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$200 to $500</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Capacitor (single component)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$75 to $200</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Wiring at wellhead</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$100 to $350</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check valve</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$200 to $500</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Usually yes</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Foot valve (jet pump)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$150 to $300</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pump motor (rebuild or replacement)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$600 to $1,500+</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Drop pipe repair or replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$300 to $1,200</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Full pump replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>$1,500 to $4,000+</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Signs Your Pump Needs Replacement */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Signs Your Well Pump Needs Replacement vs Repair</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-3'>Signs that typically mean replacement</h3>
              <ul className='space-y-3 text-slate-700 text-sm leading-relaxed'>
                <li>Low water pressure gradually worsening over months or years — almost always means impeller wear or well screen clogging</li>
                <li>Pump is 12+ years old and needs a motor-level repair — economics rarely favor repairing an old motor</li>
                <li>Electricity consumption from the well pump circuit has increased noticeably over 12 months</li>
                <li>The pump ran dry — internal damage is very likely even if the pump currently operates</li>
              </ul>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-3'>Signs that might be repaired</h3>
              <ul className='space-y-3 text-slate-700 text-sm leading-relaxed'>
                <li>Sudden complete loss of pressure — more often a tripped breaker, failed pressure switch, or waterlogged tank</li>
                <li>Pump hums but does not start — typically a failed starting capacitor ($75 to $200)</li>
                <li>Rapid short-cycling — pressure tank bladder failure, not pump failure</li>
                <li>Pressure drops during simultaneous use but recovers — a capacity or well yield issue</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How to Get an Accurate Quote */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Quotes</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Get an Accurate Quote and Avoid Overpaying</h2>
          <div className='space-y-4 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Get three quotes minimum</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Well pump replacement pricing varies significantly between contractors. The difference between the highest and lowest responsible quote on the same job is often $500 to $1,000. Prices that look low often exclude drop pipe, wire, or other components.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Ask for an itemized quote</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Request a line-item breakdown: pump unit, drop pipe and wiring materials (cost per foot times depth), control box, pressure switch, labor hours and rate, any additional components. A legitimate contractor will provide this. A contractor who quotes a single lump sum and refuses to itemize is a risk.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Confirm what is being replaced</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Ask specifically: are you replacing the drop pipe and wire? Why or why not? Are you replacing the check valve and torque arrestor? Is the pressure tank being evaluated? If the tank is the same age as the pump, should it be replaced at the same time?</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Ask about pump brand and warranty</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pump brand matters for longevity. Ask what brand and model is being installed and look it up. Ask about the parts warranty (typically one to five years) and the labor warranty (typically one year from most contractors).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Schedule during business hours</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If you have any water at all, even low pressure, call during business hours on a weekday. Avoid weekend and holiday emergency rates if possible.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Ask about bundling</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If your pressure tank is over 8 years old, ask for a combined quote for pump and tank replacement. The incremental cost of adding the tank while the contractor is already on site is much lower than a separate service call.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Check the contractor{`'`}s license</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Well pump replacement typically requires a licensed well contractor or licensed plumber depending on your state. Verify the license number with your state licensing board. An unlicensed contractor may offer lower prices but voids any permits, creates liability, and provides no warranty protection.</p>
            </div>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Questions to Ask Every Contractor — Verbatim</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Use these exact questions when getting quotes. A contractor who cannot answer them clearly or becomes evasive is a risk:</p>
          <div className='space-y-3'>
            {[
              '"What brand and model pump are you installing?" (Look it up. Franklin Electric, Grundfos, and Goulds are the quality brands. No-name pumps are a red flag.)',
              '"Does this quote include new drop pipe and wire for the full depth of the well? If not, why not, and what will those cost if needed?"',
              '"Are you replacing the check valve and torque arrestor as part of this job?"',
              '"My pressure tank is [X] years old. Should I replace it at the same time? What would that add to the cost?"',
              '"What is your standard hourly labor rate and what is your emergency or weekend rate?"',
              '"How long is your parts warranty on the pump and your labor warranty on the installation?"',
              '"Are permits required for this job in my county? If so, are they included in this quote?"',
              '"What is your license number?" (Verify with your state licensing board before signing anything.)',
            ].map((q, i) => (
              <div key={i} className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
                <p className='text-slate-700 text-sm leading-relaxed'>{q}</p>
              </div>
            ))}
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-4'>Any contractor who answers these questions clearly and willingly is demonstrating the transparency you want. Anyone who is vague, irritated, or unwilling to itemize should be crossed off your list before you compare their price.</p>
        </div>

        {/* Worked Example Quote */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Example</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What a Fair Quote Actually Looks Like: A Worked Example</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Project:</strong> Submersible pump replacement, 200-foot well, 3/4 HP, scheduled weekday installation, Midwest/Mid-Atlantic region</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Use it as a template to evaluate the quotes you receive.</p>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Line Item</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Description</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pump unit</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Franklin Electric 3/4 HP submersible, 10 GPM</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$650 to $900</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Drop pipe</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>200 ft of 1.25{`"`} Schedule 80 PVC at $1.50/ft</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$300</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Wire</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>200 ft of 10-gauge pump wire at $1.00/ft</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$200</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check valve</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Brass, installed on drop pipe</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$75 to $125</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Torque arrestor and safety rope</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Standard installation hardware</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$50 to $100</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pressure switch</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>New 40/60 switch (replace proactively)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$25 to $50</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pitless adapter inspection and seal</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Replace if corroded</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$0 to $150</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Labor</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>5 to 6 hours at $85/hour, two-person crew</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$425 to $510</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Service truck / hoist fee</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Mobilization</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$100 to $200</td>
                </tr>
                <tr className='bg-slate-100'>
                  <td className='p-3 border border-slate-200 text-slate-900 font-bold'>Total</td>
                  <td className='p-3 border border-slate-200 text-slate-900'></td>
                  <td className='p-3 border border-slate-200 text-slate-900 font-bold'>$1,825 to $2,335</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If a quote for this same job comes in at $1,200, ask which line items are missing. If a quote comes in at $3,500, ask what is driving the premium — more expensive pump brand, higher local labor rates, or unexpected conditions. Both outliers deserve an explanation before you accept or reject them.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>A quote that is simply a single number — {`"`}$2,100 for well pump replacement{`"`} — with no itemization should be followed immediately by the questions in the section above. A legitimate contractor quotes this work in line items because the variables are too significant to lump together honestly.</p>
        </div>

        {/* Insurance */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Insurance</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Does Homeowners Insurance Cover Well Pump Replacement?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Standard homeowners insurance policies typically do not cover well pump replacement due to normal wear, mechanical failure, or end of service life. This is classified as maintenance rather than a sudden covered peril.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'>Insurance may cover pump replacement in a few specific circumstances:</p>
          <div className='space-y-3 mb-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Lightning strike:</strong> If a lightning strike damaged the pump motor and you can demonstrate the cause, most policies cover the pump as equipment damaged by a covered peril. Document the event with dates and any visible damage before calling the insurance company.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Fire:</strong> Same principle — if a fire damaged the pump or associated wiring, document and file.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Power surge:</strong> Some policies cover equipment damaged by electrical surges. Check your specific policy language.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What insurance does not cover:</strong> Gradual wear, age-related failure, sediment damage, and running the pump dry are all maintenance issues excluded from standard policies.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>Some insurers offer equipment breakdown endorsements that cover mechanical failure. If you have not yet had a pump failure, ask your insurer about adding this endorsement before you need it. The annual premium is typically modest relative to replacement costs.</p>
        </div>

        {/* How Long Should a Replacement Pump Last */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Longevity</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How Long Should a Replacement Pump Last?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A quality submersible pump in a clean, appropriately-sized well with good water quality should last 12 to 20 years. Several factors affect where in that range you land:</p>
          <div className='space-y-4 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water quality</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The biggest variable. Clean, low-sediment water produces minimal wear. High iron, manganese, or sand accelerates impeller and bearing wear significantly.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump cycling frequency</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The second biggest variable. A pump that cycles on and off many times per day wears motor windings and bearings faster than one that runs fewer, longer cycles. A properly sized pressure tank reduces cycling frequency and extends pump life.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Brand and build quality</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Premium brands (Franklin Electric, Grundfos, Goulds) use higher-quality motor windings, better impeller materials, and tighter quality control. Budget brands save money upfront but fail more quickly in demanding conditions.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Running dry</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The single event most likely to cause immediate or premature pump failure. Never allow the pump to run when the well has run low — turn off the breaker at the first sign of air sputtering and wait for the well to recover.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>To maximize the life of your new pump: install the correct size pressure tank with the correct air pre-charge, add a low-water cutoff switch if your well has a history of running low, and install appropriate pre-pump filtration if your water has elevated sediment, iron, or sand.</p>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How much does it cost to replace a well pump?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Most residential well pump replacements cost $1,500 to $4,000 fully installed. The national average is around $1,900. Shallow well jet pump replacements run $800 to $1,800. Submersible pumps in wells 100 to 200 feet deep run $1,500 to $3,000. Submersible pumps in wells 300 to 400 feet deep run $2,800 to $5,500. Emergency weekend service adds 25 to 50 percent. Get three quotes with itemized breakdowns before authorizing work.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What is the most expensive part of replacing a well pump?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>For shallow wells (under 100 feet), the pump itself is the dominant cost. For deep wells (200 feet or more), labor is the largest line item — pulling a pump from 300 feet with a service truck, a two-person crew, and 4 to 8 hours of work costs more than the pump itself in many cases. The combination of labor, drop pipe replacement, and wiring replacement on a deep well job often exceeds the pump unit cost.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How long does it take to replace a well pump?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Most residential pump replacements complete in one day. A shallow jet pump replacement takes 2 to 4 hours. A submersible pump in a 100 to 200 foot well takes 4 to 6 hours. A submersible pump in a 300 to 400 foot well takes 6 to 8 hours. Complex jobs — difficult site access, corroded pipe that must be replaced section by section, electrical upgrades — can extend into a second day.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Should I replace the pressure tank at the same time as the pump?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Yes, if the tank is more than 8 years old or within a few years of the pump{`'`}s age. The incremental cost of adding pressure tank replacement while the contractor is already on site is much lower than scheduling a separate service call later. A new pressure tank typically adds $200 to $500 to the total cost when bundled with a pump replacement. Replacing them separately later would cost $300 to $700 just for the tank job.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Can I replace a well pump myself?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A shallow well jet pump above ground is within DIY capability for a homeowner comfortable with plumbing and electrical work. A submersible pump in any well deeper than 25 feet is not a practical DIY project. Pulling a submersible pump requires a cable hoist to manage hundreds of feet of pipe and wire without dropping the assembly into the well. Dropping the pump results in an extremely expensive recovery operation. The electrical work (230V wiring, pressure switch, control box) also carries real shock risk.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Is it worth replacing a well pump on an old house?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pump{`'`}s age matters, not the house{`'`}s age. A pump that is 8 to 12 years old with a single repair is worth replacing. A pump that is 15 or more years old or has had multiple repairs should be replaced. The condition of the drop pipe and wiring, well yield, and water quality all factor in, but age of the pump itself is the primary variable. A professional inspection before replacement can determine whether the well casing, screen, and yield support a new pump.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What brands of well pumps are the most reliable?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Franklin Electric is the dominant residential brand, with motors used as OEM components in many other pump housings. Grundfos makes reliable variable-speed and constant-pressure systems. Goulds (owned by Xylem) is another quality choice widely used by professional contractors. Ask your contractor which brand they are installing and whether they carry warranty replacement stock for it. Avoid off-brand pumps sold through online marketplaces without local contractor support.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What happens if I do not replace a failing well pump?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A pump that is failing but still delivering some water will eventually fail completely, leaving you with no water. The timing is unpredictable — it could be months or it could be the next time power cycles. A failing pump also draws more electricity than a healthy one, increasing utility bills. Continued operation on a worn pump can also damage the pressure tank (short-cycling) and stress the wiring from repeated starts against mechanical resistance. Replacing at first signs of decline rather than waiting for complete failure typically reduces total project cost.</p>
            </div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Submersible Pump</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A sealed motor and impeller assembly installed inside the well casing, below the water level. Submersible pumps push water up from below rather than pulling it from above. They are the standard for modern residential wells deeper than 25 feet. Most operate on 230V single-phase power. Average residential service life is 10 to 20 years depending on water quality and operating conditions.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Jet Pump</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A pump installed above ground that draws water up from the well through suction. Shallow well jet pumps work for wells 25 feet or less. Deep well jet pumps use a two-pipe system for wells up to 80 to 100 feet. Jet pumps are less expensive than submersible pumps but are noisier, less efficient, and more prone to loss of prime. They are being replaced by submersible pumps in new residential installations.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Drop Pipe</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pipe that runs from the submersible pump at the bottom of the well to the pitless adapter at the casing wall. It carries water from the pump to the surface. Standard residential drop pipe is Schedule 80 PVC or polyethylene in 20-foot sections joined with threaded couplings. It is typically replaced whenever the pump is pulled because old pipe degrades and can introduce contamination.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Control Box</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The above-ground electrical enclosure on three-wire submersible pump systems that houses the starting capacitor, running capacitor, and relay that govern pump motor startup and operation. Two-wire pump systems integrate these components internally and do not have a separate control box. Control box failure is a common and inexpensive repair that does not require pulling the pump from the well.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Constant Pressure System</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A pump configuration that uses a variable frequency drive (VFD) controller to maintain steady water pressure at a single set point regardless of demand. Constant pressure systems eliminate the pressure fluctuation characteristic of standard well systems and can make well water feel comparable to municipal supply. They cost $800 to $2,000 more than standard pump installations but deliver better comfort and can reduce pump cycling wear.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Torque Arrestor</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A rubber collar installed on the drop pipe near the pump that prevents the pump motor{`'`}s starting torque from spinning the pump assembly against the well casing. Without a torque arrestor, the pump rotates as the motor starts, wearing against the casing wall and eventually damaging the casing. An inexpensive component ($20 to $50) that should be included on every new pump installation.</p>
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
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low: 6 Causes and Fixes</span>
            </Link>
            <Link href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </Link>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
            </Link>
            <Link href='/guides/well-pressure-tank-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pressure Tank Guide</span>
            </Link>
            <Link href='/cost-guides/well-water-testing-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FFF8E1', color: '#F57F17' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Testing Cost</span>
            </Link>
            <Link href='/cost-guides/well-drilling-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FFF8E1', color: '#F57F17' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Drilling Cost</span>
            </Link>
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Guide to Private Well Water Systems</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/problems/no-water-from-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>No Water from Well</span>
            </Link>
            <Link href='/problems/well-running-dry' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Signs Your Well Is Running Dry</span>
            </Link>
          </div>
        </div>

        {/* Lead Form */}
        <section className='py-12 bg-[#E1F5EE] rounded-2xl mt-12'>
          <div className='max-w-2xl mx-auto px-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#0F6E56] text-center mb-3'>Get Expert Well Help</h2>
            <p className='text-gray-600 text-center mb-8'>Connect with qualified well professionals in your area. Free quotes, no obligation.</p>
            <BeehiivEmailCapture />

            <LeadForm />
          </div>
        </section>

      </article>
    </>
  )
}
