import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'Well Inspection Cost 2026: What You\'ll Actually Pay | The Well Guide',
  description: 'Well inspection costs $250 to $550 for most homes in 2026. Covers what is included, cost by inspection type, water testing add-ons, and when your lender requires one.',
  openGraph: {
    title: 'Well Inspection Cost 2026: What You\'ll Actually Pay',
    description: 'Well inspection costs $250 to $550 for most homes in 2026. Covers what is included, cost by inspection type, water testing add-ons, and when your lender requires one.',
    url: 'https://www.thewell.guide/cost-guides/well-inspection-cost',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/well-inspection.jpg', width: 1200, height: 630, alt: 'Licensed well inspector crouching next to residential wellhead with clipboard in suburban backyard' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/cost-guides/well-inspection-cost' },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a well inspection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most well inspections cost $250 to $550. A standard inspection with a flow test and pressure system check runs $250 to $400. Adding basic bacteria and nitrate testing brings it to $350 to $550, which is what most homebuyers should budget. A comprehensive inspection with a full water quality panel costs $500 to $800, and a combined well and septic inspection costs $600 to $1,200 when booked with the same company on the same visit. The biggest cost variable is how much water testing is included."
      }
    },
    {
      "@type": "Question",
      "name": "Is a well inspection required when buying a home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "VA loans require a water test for homes with a private well, and FHA loans require one in certain cases, such as new construction or a well within 100 feet of a septic system. Neither program requires a full well inspection on its own, but many lenders in rural markets do, and some states require testing when a property changes hands. Even when not required by a lender, a well inspection before purchasing a home with a private well is one of the most important steps a buyer can take. The cost of fixing a failed well after closing ($1,500 to $16,000 or more) far exceeds the cost of the inspection ($250 to $550)."
      }
    },
    {
      "@type": "Question",
      "name": "What does a well inspection include?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard well inspection includes a visual assessment of the wellhead and casing, flow rate testing to measure water production under load, pressure system evaluation including the pressure tank and switch, electrical component checks, and a written report of findings. Water quality laboratory testing is typically an add-on. A basic panel testing for bacteria and nitrates costs $50 to $150 extra. A comprehensive panel including heavy metals, VOCs, and other contaminants costs $200 to $400 extra."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a well inspection take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard well inspection takes 1 to 3 hours on site depending on well type, depth, and the number of tests performed. Water quality results from a certified lab typically take 3 to 7 business days after the sample is submitted. Plan for at least a week between scheduling the inspection and receiving complete results including water testing."
      }
    },
    {
      "@type": "Question",
      "name": "Can a regular home inspector inspect a well?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard home inspector is not trained or equipped to perform a thorough well inspection. Home inspectors assess visible components and may note obvious wellhead issues but do not perform flow rate testing, pump performance evaluation, or water quality laboratory testing. If a home inspection report simply notes \"well present\" without specific well system testing, you have not had a well inspection. Hire a licensed water systems professional or licensed well contractor for a dedicated well inspection."
      }
    },
    {
      "@type": "Question",
      "name": "How often should a well be inspected?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The EPA and most state health departments recommend annual professional inspection of private wells. At minimum, wells should be inspected every 3 to 5 years and any time there is a change in water quality (taste, odor, color), after flooding or nearby construction, after any work is performed on the well system, and when purchasing a property with a private well. Annual inspections cost $150 to $300 and are the most cost-effective way to prevent expensive emergency repairs."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if a well fails inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A well that fails inspection on flow rate, water quality, or structural grounds can be negotiated as a repair or credit item in a real estate transaction. The seller may be required to remediate contamination, replace a failing pump, or address structural issues before closing. For severe problems such as a failed casing, inadequate yield, or contamination that cannot be cost-effectively remediated, buyers may have grounds to renegotiate price or walk away from the transaction. See our buying a house with a well guide for how to handle well problems discovered during the inspection period."
      }
    },
    {
      "@type": "Question",
      "name": "Who performs well inspections?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Well inspections should be performed by a licensed water well system professional or licensed well contractor. Licensing requirements vary by state but most states require certification for anyone performing well inspections or water testing. Some states allow licensed home inspectors to perform basic well inspections. Ask for the inspector's license number and verify it with your state licensing board. The National Ground Water Association maintains a directory of certified professionals at ngwa.org."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a well and septic inspection cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A combined well and septic inspection typically costs $600 to $1,200 when one company does both on the same visit. That usually includes the full septic inspection plus a well inspection with basic water testing. Booking both together usually costs less than scheduling them separately, because you pay one trip charge. If the well and the septic system are within 100 feet of each other, test for bacteria and nitrates no matter what. See our septic inspection cost guide."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a well flow test cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A well flow or yield test typically costs $200 to $600, depending on how long the well is pumped and whether water sampling is included. The test pumps the well for 2 to 4 hours or more, measures how many gallons per minute it sustains, and tracks how quickly the water level recovers afterward. A basic flow check is often part of a standard inspection. A longer yield test is worth adding if the well is shallow or old, if the seller reports past dry spells, or if your lender or county requires one."
      }
    },
    {
      "@type": "Question",
      "name": "Who pays for a well inspection?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The buyer usually pays, the same as a home inspection, because it's part of the buyer's due diligence. Some states and counties require testing when a property changes hands, and in some cases the seller provides recent results. Buyers can also negotiate for the seller to pay or to credit the cost at closing. If the inspection finds problems, use the report to negotiate repairs or a price reduction."
      }
    }
  ]
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Inspection Cost 2026: What You\'ll Actually Pay',
  description: 'Well inspection costs $250 to $550 for most homes in 2026. Covers what is included, cost by inspection type, water testing add-ons, and when your lender requires one.',
  url: 'https://www.thewell.guide/cost-guides/well-inspection-cost',
  author: { '@type': 'Organization', name: 'The Well Guide Editorial Team', url: 'https://www.thewell.guide' },
  dateModified: '2026-10-27',
  publisher: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://www.thewell.guide',
  },
}

export default function WellInspectionCost() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src='/well-inspection.jpg'
          alt='Licensed well inspector crouching next to residential wellhead with clipboard in suburban backyard'
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
            Well Inspection<br />
            Cost 2026:<br />
            <span style={{ color: '#5DCAA5' }}>What You{`'`}ll Actually Pay</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            The biggest cost variable is how much water testing is included. Most homebuyers should budget $350 to $550 for a standard inspection with basic lab testing.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>By The Well Guide Editorial Team</p>
              <p className='text-white/50 text-sm'>Updated October 2026 &middot; 11 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Cost Guides', href: '/cost-guides' },
        { label: 'Well Inspection Cost' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <div dangerouslySetInnerHTML={{ __html: "<p class=\"text-slate-700 text-sm leading-relaxed\">A well inspection costs $250 to $550 for most residential wells in 2026. A standard inspection with a flow test and pressure system check runs $250 to $400. Add basic bacteria and nitrate lab testing, which most homebuyers need, and the total is $350 to $550. A comprehensive inspection with a full water panel runs $500 to $800, and a combined well and septic inspection runs $600 to $1,200. VA loans require a water test before closing, and FHA loans require one in certain cases. Neither requires a full well inspection, but many rural lenders do. Even when nobody requires it, skipping a well inspection when buying a home with a well is one of the most expensive mistakes a homebuyer makes.</p>\n" }} />
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>You are buying a house. The listing mentions a private well. Your agent says the inspection is optional. Your lender says it is required. The seller says the well has never had a problem. The inspector{`'`}s quote is $450 and you are already stretched on closing costs.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>This is the moment most well inspection mistakes happen.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A well that looks fine can have bacteria in the water, a pump that is three months from failure, a pressure tank with a waterlogged bladder, or a casing crack that allows surface runoff to contaminate the water supply. None of these show up in a standard home inspection. None of them are visible without specific equipment and tests. And all of them cost significantly more to fix after closing than the $450 inspection costs before it.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>This guide covers exactly what a well inspection includes, what it costs broken down by type, what add-ons are worth paying for, and when an inspection is not optional regardless of what your agent says.</p>
        </div>

        {/* The Pre-Purchase Rule */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Pre-Purchase Rule</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before getting into costs, establish this principle: <strong>The Pre-Purchase Rule:</strong> if you are buying a home with a private well, a professional well inspection is not optional. It is the single most important inspection on the property.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A standard home inspector is not trained or equipped to assess a well system. They look at visible components and note obvious problems. They do not pull pump performance data, test flow rate under load, check water quality at a certified lab, or evaluate the condition of a submersible pump that is 200 feet underground. That requires a licensed well contractor or water systems professional with specific equipment.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>The cost of fixing a contaminated well, replacing a failed pump, or drilling a new well after closing ranges from $1,500 for a pump to $16,000 or more for <Link href='/cost-guides/well-drilling-cost' className='font-semibold underline' style={{ color: '#1D9E75' }}>a new well</Link>. A well inspection costs $250 to $550. The math is straightforward.</p>
        </div>

        {/* What a Well Inspection Includes */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What a Well Inspection Includes</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A standard professional well inspection covers five components. Understanding what each involves helps you evaluate what your inspector is actually doing and whether the price is reasonable.</p>

          {/* Red callout box */}
          <div className='mb-6 rounded-lg p-5 border-l-4 border-red-400 bg-red-50'>
            <p className='text-slate-700 text-sm leading-relaxed'>A well inspection performed by a licensed water systems professional is different from a well mention in a standard home inspection report. If your home inspection report simply says {`"`}well present, no visible issues,{`"`} you have not had a well inspection. You have had a home inspector look at the wellhead from a distance. Schedule a dedicated well inspection with a licensed well contractor before closing.</p>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Visual inspection of the wellhead:</strong> The inspector examines the well casing above ground for damage, corrosion, or improper sealing. The well cap should be intact with no cracks or gaps. The area around the wellhead should slope away from the casing and be free of contamination sources. The casing itself should be above grade with no signs of surface water intrusion.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Pressure system evaluation:</strong> The pressure tank, pressure switch, and associated plumbing are checked for proper operation. The inspector tests the pump cycling behavior, including how often it starts and stops, how quickly pressure builds and drops, to identify waterlogged tanks, failing pressure switches, or pumps that are short cycling or running continuously.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Flow rate testing:</strong> The inspector runs water at multiple fixtures simultaneously and measures the gallons per minute the well delivers under load. A common guideline is at least 3 to 5 GPM for a typical home, and some states, counties, and lenders set their own minimum. A well that cannot meet minimum flow rate may require pump replacement, well rehabilitation, or in worst cases, a new well.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Electrical components:</strong> The pump circuit, pressure switch wiring, and control box are checked for proper function, correct amperage draw, and any signs of electrical problems that could indicate a pump running in distress.</p>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Water quality testing:</strong> This is where inspection costs vary most significantly. Basic inspections include a visual assessment of water color, odor, and clarity. Comprehensive inspections include laboratory water testing for bacteria, nitrates, and other contaminants. Lab results typically take 3 to 7 business days and are the only reliable way to know whether the water is safe to drink.</p>
        </div>

        {/* Well Inspection Cost by Type */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Well Inspection Cost by Type</h2>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200'>Inspection Type</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200'>What Is Included</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200'>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Basic visual inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Wellhead, cap, visible components only</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$150 to $250</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Standard inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Visual plus flow rate test and pressure system evaluation</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$250 to $400</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Standard with basic water testing</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Above plus bacteria and nitrate lab test</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$350 to $550</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Comprehensive inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>All of the above plus extended water panel (heavy metals, VOCs, pH)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$500 to $800</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Well and septic combined</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Standard well inspection plus septic inspection in same visit</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$600 to $1,200</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Camera inspection (borehole)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Drops camera into well to inspect casing and screen condition</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Add $200 to $500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed'>Most homebuyers purchasing a home with a well should budget for a standard inspection with basic water testing, the $350 to $550 range. This covers the minimum components needed to evaluate whether the well is functioning correctly and whether the water is safe.</p>
        </div>

        {/* Water Testing Add-Ons */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Water Testing Add-Ons: What Is Worth Paying For</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Water testing is sold in panels, which are groups of tests run together at a certified lab. The price increases with the number and complexity of tests included. Here is what to know about each tier:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Basic bacteria and nitrate panel ($50 to $150 added to inspection):</strong> The minimum test for any well used for drinking water. Total coliform and E. coli confirm whether pathogenic bacteria are present. Nitrates indicate potential contamination from agricultural runoff or septic systems. Required for VA loans, and for FHA loans whenever a water test is required. Worth paying for on any inspection.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Standard water quality panel ($100 to $250 added to inspection):</strong> Adds heavy metals (arsenic, lead, iron, manganese), pH, hardness, and turbidity to the basic panel. Recommended for any well being purchased as a primary residence, particularly in areas with known agricultural activity, older homes with galvanized plumbing, or regions with naturally occurring arsenic in groundwater.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Comprehensive panel ($200 to $400 added to inspection):</strong> Adds volatile organic compounds (VOCs), pesticides, radon, and a broader suite of metals. Appropriate for wells near industrial sites, agricultural areas with pesticide use, or properties with a history of unknown contamination. Also appropriate for wells that have not been tested in more than five years.</p>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>What to test for in your specific area:</strong> Contaminants vary by region. Arsenic is a concern in parts of New England, the Southwest, and the upper Midwest. Radon is elevated in granite-heavy regions. Nitrate contamination is most common in agricultural areas. Your local health department or county extension office can tell you which contaminants are most common in your area. See our <Link href='/guides/how-to-test-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>well water testing guide</Link> for a complete breakdown of contaminants by region and what each test result means.</p>
        </div>

        {/* Cost Factors That Move the Price */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Cost Factors That Move the Price</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Well depth:</strong> Deeper wells require more time to evaluate and more specialized equipment for flow rate testing. Wells under 100 feet are straightforward to inspect. Wells over 300 feet may require additional equipment and expertise, adding $50 to $150 to the base cost.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Well type:</strong> Drilled wells are the most common and most straightforward to inspect. Dug wells (older, shallow wells typically found on historic properties) require more extensive contamination testing because their construction makes them more vulnerable to surface water intrusion. Artesian wells and driven point wells have their own inspection considerations.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Pump type:</strong> Submersible pumps are underground and cannot be visually inspected directly. The inspector evaluates pump performance through pressure testing and electrical measurements. Jet pumps are above ground and can be visually inspected, making them faster to evaluate. Submersible pump inspections may cost $50 to $100 more than jet pump inspections.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Location and travel:</strong> Inspectors in rural areas often charge a travel fee of $50 to $100 for properties more than 30 to 45 minutes from their service area. This is standard practice and worth asking about when getting quotes.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Age of the system:</strong> Older wells with more components to evaluate take longer and may require additional testing. A well installed before 1990 may use older materials that require additional assessment.</p>
          <p className='text-slate-700 text-sm leading-relaxed'><strong>Combined inspections:</strong> Scheduling a well and septic inspection with the same company on the same visit saves a second trip charge and often results in a bundled price that is less than booking each separately.</p>
        </div>

        {/* When a Well Inspection Is Required vs Recommended */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>When a Well Inspection Is Required vs Recommended</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Required by lender:</strong> VA loans require a water test for any home with a private well, collected by a third party who has no stake in the sale and meeting local health standards, or EPA standards where there are none. VA does not require a separate well inspection. FHA loans require a water test in certain cases, including new construction, a well within 100 feet of a septic system, nearby contamination sources such as farms or landfills, or an appraiser who flags a problem. The sample must also be collected by a disinterested third party. USDA loans commonly require water testing for rural properties. Conventional loans don't universally require well testing, but many lenders in rural markets require an inspection, a water test, or both. Ask your lender exactly what they need before you schedule anything.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Required by state or local regulation:</strong> Some states require a well inspection at the time of property transfer. Check with your real estate attorney or local health department to confirm whether your state has mandatory well inspection requirements at closing.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Strongly recommended regardless of requirement:</strong></p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Any home purchase where the well is the primary water source</li>
            <li>Any property where the well has not been tested in more than 3 years</li>
            <li>Properties near agricultural land, industrial sites, or gas stations</li>
            <li>Properties with a septic system within 100 feet of the well</li>
            <li>Any property where the seller cannot provide documentation of recent well testing</li>
            <li>Annual inspection for existing well owners as part of routine maintenance</li>
          </ul>
        </div>

        {/* Annual Well Inspection Cost for Existing Owners */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Annual Well Inspection Cost for Existing Owners</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If you already own a home with a well, an annual inspection is the most cost-effective maintenance decision you can make.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Annual inspection cost:</strong> $150 to $300 for a professional evaluation of the pressure system, wellhead condition, and basic water quality test.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>What annual inspections catch:</strong></p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Waterlogged pressure tanks before they cause pump short cycling and premature pump failure</li>
            <li>Early signs of pump wear before a complete pump failure</li>
            <li>Changes in water quality that indicate developing contamination</li>
            <li>Wellhead damage from frost heave, settling, or animal activity</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A pump replacement costs <Link href='/cost-guides/well-pump-replacement-cost' className='font-semibold underline' style={{ color: '#1D9E75' }}>$1,500 to $4,000</Link>. An annual inspection that catches early pump wear costs $150 to $300. The inspection pays for itself if it prevents even one emergency pump replacement.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>See our <Link href='/guides/well-maintenance-checklist' className='font-semibold underline' style={{ color: '#1D9E75' }}>well maintenance checklist</Link> for the full annual maintenance schedule beyond the professional inspection.</p>
        </div>

        {/* DIY Well Inspection */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>DIY Well Inspection: What You Can Check Yourself</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>A licensed professional inspection is not something homeowners should attempt to replace with DIY. But between annual professional visits, there are checks an owner can perform:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Monthly:</strong></p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Listen for pump short cycling (rapid on-off cycling when running water)</li>
            <li>Check the pressure gauge for normal 40/60 or 30/50 operation</li>
            <li>Look at the wellhead for visible damage, animal activity, or debris</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Annually:</strong></p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>Test the air charge on the pressure tank using a tire pressure gauge on the Schrader valve with the pump off</li>
            <li>Inspect the wellhead for cracks, gaps, or corrosion</li>
            <li>Order a basic water test kit and test for bacteria and nitrates</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed'>DIY water test kits cost $25 to $150 and are available online and at hardware stores. They are appropriate for routine annual monitoring between professional inspections but do not replace a comprehensive lab panel when purchasing a property. See our <Link href='/reviews/best-well-water-test-kits' className='font-semibold underline' style={{ color: '#1D9E75' }}>well water test kit reviews</Link> for the best options at each price point.</p>
        </div>

        {/* How to Get an Accurate Quote */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>How to Get an Accurate Quote</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Getting accurate quotes for a well inspection requires asking the right questions. Use this framework:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Ask specifically:</strong></p>
          <ul className='list-disc pl-6 text-slate-700 text-sm space-y-1 mb-4'>
            <li>What does the inspection include? (Visual only, flow rate test, pressure evaluation)</li>
            <li>Is water testing included or is it an add-on?</li>
            <li>Which water tests are included and what lab do they use?</li>
            <li>Is the lab state-certified?</li>
            <li>How long until water test results are available?</li>
            <li>Do you charge a travel fee?</li>
            <li>Are you licensed by the state as a water systems professional?</li>
            <li>What is included in the written report?</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Get at least two quotes.</strong> The difference between the highest and lowest responsible quote on the same scope of work is often $100 to $200. Price differences above that usually reflect differences in what is included, not just labor rates.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>Check licensing.</strong> Well inspectors should be licensed water well system professionals or licensed well contractors in your state. Licensing requirements vary by state but most states require certification for anyone performing well work. Ask for the inspector{`'`}s license number and verify it with your state{`'`}s licensing board before booking.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the inspection reveals pump failure or imminent pump replacement, use our <Link href='/cost-guides/well-pump-replacement-cost-calculator' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump replacement cost calculator</Link> to estimate the replacement project before requesting contractor quotes.</p>
          <p className='text-slate-700 text-sm leading-relaxed'>If inspection reveals the well itself has failed (lost yield, corroded casing, contaminated aquifer), use our <Link href='/cost-guides/well-drilling-cost-calculator' className='font-semibold underline' style={{ color: '#1D9E75' }}>well drilling cost calculator</Link> to estimate the new well replacement project before requesting drilling contractor quotes.</p>
        </div>

        {/* External Link */}
        <p className='text-slate-600 text-sm mb-12'>
          For official EPA guidance on private well water safety, see the{' '}
          <a
            href='https://www.epa.gov/privatewells'
            target='_blank'
            rel='noopener noreferrer'
            className='font-semibold underline'
            style={{ color: '#1D9E75' }}
          >
            EPA: Private Drinking Water Wells
          </a>
          .
        </p>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How much does a well inspection cost?</h3>
              <div dangerouslySetInnerHTML={{ __html: "<p class=\"text-slate-700 text-sm leading-relaxed\">Most well inspections cost $250 to $550. A standard inspection with a flow test and pressure system check runs $250 to $400. Adding basic bacteria and nitrate testing brings it to $350 to $550, which is what most homebuyers should budget. A comprehensive inspection with a full water quality panel costs $500 to $800, and a combined well and septic inspection costs $600 to $1,200 when booked with the same company on the same visit. The biggest cost variable is how much water testing is included.</p>\n" }} />
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Is a well inspection required when buying a home?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>VA loans require a water test for homes with a private well, and FHA loans require one in certain cases, such as new construction or a well within 100 feet of a septic system. Neither program requires a full well inspection on its own, but many lenders in rural markets do, and some states require testing when a property changes hands. Even when not required by a lender, a well inspection before purchasing a home with a private well is one of the most important steps a buyer can take. The cost of fixing a failed well after closing ($1,500 to $16,000 or more) far exceeds the cost of the inspection ($250 to $550).</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What does a well inspection include?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A standard well inspection includes a visual assessment of the wellhead and casing, flow rate testing to measure water production under load, pressure system evaluation including the pressure tank and switch, electrical component checks, and a written report of findings. Water quality laboratory testing is typically an add-on. A basic panel testing for bacteria and nitrates costs $50 to $150 extra. A comprehensive panel including heavy metals, VOCs, and other contaminants costs $200 to $400 extra.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How long does a well inspection take?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A standard well inspection takes 1 to 3 hours on site depending on well type, depth, and the number of tests performed. Water quality results from a certified lab typically take 3 to 7 business days after the sample is submitted. Plan for at least a week between scheduling the inspection and receiving complete results including water testing.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Can a regular home inspector inspect a well?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A standard home inspector is not trained or equipped to perform a thorough well inspection. Home inspectors assess visible components and may note obvious wellhead issues but do not perform flow rate testing, pump performance evaluation, or water quality laboratory testing. If a home inspection report simply notes {`"`}well present{`"`} without specific well system testing, you have not had a well inspection. Hire a licensed water systems professional or licensed well contractor for a dedicated well inspection.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How often should a well be inspected?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The EPA and most state health departments recommend annual professional inspection of private wells. At minimum, wells should be inspected every 3 to 5 years and any time there is a change in water quality (taste, odor, color), after flooding or nearby construction, after any work is performed on the well system, and when purchasing a property with a private well. Annual inspections cost $150 to $300 and are the most cost-effective way to prevent expensive emergency repairs.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What happens if a well fails inspection?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A well that fails inspection on flow rate, water quality, or structural grounds can be negotiated as a repair or credit item in a real estate transaction. The seller may be required to remediate contamination, replace a failing pump, or address structural issues before closing. For severe problems such as a failed casing, inadequate yield, or contamination that cannot be cost-effectively remediated, buyers may have grounds to renegotiate price or walk away from the transaction. See our <Link href='/guides/buying-house-with-well' className='font-semibold underline' style={{ color: '#1D9E75' }}>buying a house with a well guide</Link> for how to handle well problems discovered during the inspection period.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Who performs well inspections?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Well inspections should be performed by a licensed water well system professional or licensed well contractor. Licensing requirements vary by state but most states require certification for anyone performing well inspections or water testing. Some states allow licensed home inspectors to perform basic well inspections. Ask for the inspector{`'`}s license number and verify it with your state licensing board. The National Ground Water Association maintains a directory of certified professionals at ngwa.org.</p>
            </div>
          <div><h3 className='font-bold text-slate-900 text-sm mb-2'>How much does a well and septic inspection cost?</h3><div dangerouslySetInnerHTML={{ __html: "<p class=\"text-slate-700 text-sm leading-relaxed\">A combined well and septic inspection typically costs $600 to $1,200 when one company does both on the same visit. That usually includes the full septic inspection plus a well inspection with basic water testing. Booking both together usually costs less than scheduling them separately, because you pay one trip charge. If the well and the septic system are within 100 feet of each other, test for bacteria and nitrates no matter what. See our <a href=\"https://theseptic.guide/cost-guides/septic-inspection-cost\" class=\"font-semibold underline\" style=\"color:#1D9E75\">septic inspection cost guide</a>.</p>\n" }} /></div>
<div><h3 className='font-bold text-slate-900 text-sm mb-2'>How much does a well flow test cost?</h3><div dangerouslySetInnerHTML={{ __html: "<p class=\"text-slate-700 text-sm leading-relaxed\">A well flow or yield test typically costs $200 to $600, depending on how long the well is pumped and whether water sampling is included. The test pumps the well for 2 to 4 hours or more, measures how many gallons per minute it sustains, and tracks how quickly the water level recovers afterward. A basic flow check is often part of a standard inspection. A longer yield test is worth adding if the well is shallow or old, if the seller reports past dry spells, or if your lender or county requires one.</p>\n" }} /></div>
<div><h3 className='font-bold text-slate-900 text-sm mb-2'>Who pays for a well inspection?</h3><div dangerouslySetInnerHTML={{ __html: "<p class=\"text-slate-700 text-sm leading-relaxed\">The buyer usually pays, the same as a home inspection, because it's part of the buyer's due diligence. Some states and counties require testing when a property changes hands, and in some cases the seller provides recent results. Buyers can also negotiate for the seller to pay or to credit the cost at closing. If the inspection finds problems, use the report to negotiate repairs or a price reduction.</p>\n" }} /></div></div>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Related</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/buying-house-with-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Buying a House With a Well</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Maintenance Checklist</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FFF8E1', color: '#F57F17' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <Link href='/cost-guides/pressure-tank-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FFF8E1', color: '#F57F17' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Pressure Tank Replacement Cost</span>
            </Link>
          <Link href='/cost-guides/well-drilling-cost' className='block p-4 bg-white border border-slate-200 rounded-lg'><p className='text-sm font-semibold text-slate-900'>Well Drilling Cost</p></Link><Link href='https://theseptic.guide/cost-guides/septic-inspection-cost' className='block p-4 bg-white border border-slate-200 rounded-lg'><p className='text-sm font-semibold text-slate-900'>Septic Inspection Cost</p></Link><Link href='/reviews/best-well-water-test-kits' className='block p-4 bg-white border border-slate-200 rounded-lg'><p className='text-sm font-semibold text-slate-900'>Best Well Water Test Kits</p></Link></div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Flow Rate</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The volume of water a well can produce measured in gallons per minute (GPM). Flow rate is tested by running water at multiple fixtures simultaneously and measuring output over a set period. A common guideline is at least 3 to 5 GPM for a typical home, though states, counties, and lenders may set their own minimum. A well with inadequate flow rate cannot reliably meet household water demand during peak use periods.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Coliform Bacteria</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A group of bacteria used as indicators of water contamination. Total coliform bacteria indicate that the water may have been exposed to contamination. E. coli, a specific type of coliform bacteria, indicates fecal contamination and poses direct health risks. Both are tested in basic well water panels and must be absent to pass a lender-required water test.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Nitrates</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A chemical compound found naturally in soil and water that becomes elevated near agricultural land, septic systems, and fertilizer application areas. High nitrate levels in drinking water pose serious health risks, particularly for infants. The EPA maximum contaminant level for nitrates is 10 mg/L. Commonly included in lender-required water tests.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Wellhead</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The visible portion of the well casing that extends above ground level. The wellhead should be at least 8 to 12 inches above the surrounding grade to prevent surface water from entering the well. The well cap should be secured and watertight. Visual inspection of the wellhead is the first step in any well inspection.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Well Casing</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The cylindrical lining, typically steel or PVC, that lines the drilled hole from the surface to below the water table. The casing prevents the borehole from collapsing, keeps surface contaminants out of the water supply, and houses the drop pipe and pump wire. Casing damage or improper sealing at the surface is one of the most common causes of bacterial contamination in private wells.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure Tank</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The storage vessel that maintains water pressure in the home{`'`}s plumbing system by holding a reserve of pressurized water and air. A functioning pressure tank prevents the pump from cycling on and off every time water is used. A waterlogged pressure tank (bladder failed) causes the pump to short cycle, dramatically reducing pump lifespan. Pressure tank condition is evaluated during every professional well inspection. See our <Link href='/cost-guides/pressure-tank-replacement-cost' className='font-semibold underline' style={{ color: '#1D9E75' }}>pressure tank replacement cost guide</Link> for what replacement involves.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Schrader Valve</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The tire-valve-style fitting on top of a bladder pressure tank used to check and set the air charge. With the pump off and all pressure relieved, pressing this valve should release air only. If water comes out, the bladder has failed and the tank needs replacement. A simple test any homeowner can perform between professional inspections.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>FHA Minimum Property Standards</h3>
              <div dangerouslySetInnerHTML={{ __html: "<p class=\"text-slate-700 text-sm leading-relaxed\">The requirements a property must meet to qualify for an FHA-insured mortgage. For private wells, FHA requires the water to meet local health standards, or EPA standards where there are none, and requires a water test collected by a disinterested third party in certain cases, such as new construction, a well within 100 feet of a septic system, or a problem flagged by the appraiser. FHA also sets well-to-septic distance rules, and for existing homes it accepts the local distance requirements when water test results are acceptable. VA loans require a water test for every private well.</p>\n" }} />
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water Well Contractor</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A licensed professional who drills, repairs, and inspects private water wells. Licensing requirements vary by state but most states require water well contractors to pass an examination and maintain continuing education. Well inspections should be performed by a licensed contractor or a licensed water systems inspector, not a general home inspector.</p>
            </div>
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
