import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Annual Well Maintenance Checklist: Everything You Need to Do Each Year | The Well Guide',
  description: 'A complete seasonal well maintenance checklist for private well owners. Covers spring, summer, fall, and winter tasks with specific instructions for each check, what you are looking for, DIY vs hire guidance, and red flags that require same-day contractor calls.',
  openGraph: {
    title: 'Annual Well Maintenance Checklist: Everything You Need to Do Each Year',
    description: 'A complete seasonal well maintenance checklist covering spring, summer, fall, and winter tasks with specific instructions, DIY vs hire guidance, and red flags that require same-day contractor calls.',
    url: 'https://www.thewell.guide/guides/well-maintenance-checklist',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/well maintance.jpg', width: 1200, height: 630, alt: 'Homeowner kneeling at a wellhead doing a visual inspection' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/well-maintenance-checklist' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should a private well be inspected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The National Ground Water Association recommends annual professional inspections. The CDC recommends annual water testing at minimum. A homeowner visual inspection cannot measure pump output, test motor performance, or assess water level changes. Annual professional inspections for wells more than 10 years old are strongly advised. For newer wells in good condition, some owners choose professional inspections every two years with diligent self-monitoring in between.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does annual well maintenance include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Annual well maintenance includes four core elements: a water test for at least bacteria, nitrates, pH, and total dissolved solids; a physical inspection of the wellhead including casing height, well cap condition, and drainage slope; a pressure tank air charge check using the Schrader valve; and a visual inspection of all above-ground equipment. A professional annual inspection adds flow rate testing, pump motor performance testing, water level measurement, and a formal written report.',
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year to service a well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Spring is the best time for water testing because snowmelt creates the highest contamination risk and the test results are most informative. Fall is the best time for the professional inspection because contractors have better availability before the emergency season. Pressure tank and pressure switch checks should happen at least twice a year: spring and fall.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are signs that a well needs maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Warning signs requiring immediate attention: positive bacteria test, pump running continuously without building pressure, sudden pressure loss, new odor in the water, milky water after flooding, buzzing from the pressure switch, and a missing or cracked well cap. Signs needing attention within a few weeks: increased pump cycling frequency, lower pressure at peak demand, pressure tank that sounds fully solid when tapped, and new staining on fixtures.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a well last with proper maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A properly maintained well can supply clean water for 40 to 50 years or more. Pumps typically last 10 to 15 years. Pressure tanks last 10 to 15 years. Pressure switches last 5 to 10 years. Regular maintenance extends all lifespans by reducing damage from short cycling, sediment, and corrosion. Wells in areas with high iron, sediment, or low pH groundwater may have shorter equipment lifespans without treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a professional well inspection every year?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The NGWA recommends it. A homeowner cannot measure pump output, test motor performance, or assess water level changes without specialized equipment. Annual professional inspections for wells more than 10 years old are strongly advised. The cost of an annual inspection ($250 to $550) is modest relative to the cost of an undetected pump failure ($400 to $2,500 for replacement) or contaminated water going undetected for a full year.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I keep in my well maintenance records?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep the original well construction report, all water test results with original lab reports, notes from each seasonal inspection, receipts for replaced parts, and written reports from all contractor visits. Store these in a dedicated folder, both paper and digital. Your well log tells contractors the depth and original yield. Your test history shows trends. Your maintenance records are requested by buyers during real estate transactions in many states.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I never put near my well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep all hazardous chemicals at least 50 to 100 feet from the wellhead: pesticides, herbicides, fertilizers, motor oil, gasoline, paint, and cleaning chemicals. Maintain at least 50 feet of separation between the well and any septic system or livestock operation. Never mix chemicals near the well casing. Never leave hoses connected to chemical applicators near the well where back-siphonage could pull chemicals into the water supply.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Annual Well Maintenance Checklist: Everything You Need to Do Each Year',
  description: 'A complete seasonal well maintenance checklist for private well owners covering spring, summer, fall, and winter tasks with specific instructions, DIY vs hire guidance, and red flags that require same-day contractor calls.',
  image: 'https://www.thewell.guide/well maintance.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/guides/well-maintenance-checklist',
}

export default function WellMaintenanceChecklist() {
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
          src='/well maintance.jpg'
          alt='Homeowner kneeling at a wellhead doing a visual inspection'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0D3D30] via-[#0D3D30]/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#5DCAA5' }}>Guide</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Annual Well<br />
            Maintenance Checklist:<br />
            <span style={{ color: '#5DCAA5' }}>Everything You Need to Do Each Year</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Seasonal tasks, DIY vs hire guidance, red flags that need same-day attention, and what proper maintenance actually costs.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 16 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Annual Well Maintenance Checklist' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>The three things every private well owner must do every year: test the water for bacteria and nitrates in spring (free through most county health departments), inspect the wellhead for physical damage, and check the pressure tank air charge with a tire gauge. These three tasks take under 45 minutes total and cost nothing if you use county lab testing. Beyond this baseline, a full annual routine divides into four seasonal checkpoints: spring is the most important (highest contamination risk after snowmelt), summer monitors yield and water quality during peak demand, fall prepares the system for freezing, and winter checks for freeze damage and cycling problems. The CDC recommends annual water testing. The National Ground Water Association recommends annual professional inspections ($250 to $550). Most homeowners can maintain their well for $100 to $300 per year using county testing and doing their own visual checks. Skipping maintenance does not save money. It defers costs until they are ten times higher.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Most well owners do nothing until something breaks. That is the wrong model. A well is a mechanical system with moving parts, electrical components, and a direct connection to groundwater that changes with the seasons. Treating it like a set-and-forget utility rather than a maintained asset is how wells fail early, how contamination goes undetected for years, and how a $300 service call becomes a $3,000 emergency.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This checklist gives you specific tasks for each season, explains exactly what you are looking for on each check, separates what you can do yourself from what requires a licensed contractor, and flags the signs that mean stop using the water and call today rather than next month.</p>
        </div>

        {/* Annual Well Maintenance At a Glance */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Overview</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Annual Well Maintenance At a Glance</h2>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Season</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Task</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Who Does It</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Time</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Cost</th>
                </tr>
              </thead>
              <tbody>
                {/* Spring rows - light green tint */}
                <tr style={{ backgroundColor: '#F0FDF4' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Spring</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Water test — bacteria, nitrates, pH</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY sample; county lab</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>15 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Free to $60</td>
                </tr>
                <tr style={{ backgroundColor: '#F0FDF4' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Spring</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Wellhead and cap inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>10 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#F0FDF4' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Spring</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pressure tank air charge check</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>15 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#F0FDF4' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Spring</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pressure switch contact inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY (power off)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>15 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#F0FDF4' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Spring</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Filter and treatment system service</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>30 to 60 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$20 to $150</td>
                </tr>
                {/* Summer rows - light yellow tint */}
                <tr style={{ backgroundColor: '#FEFCE8' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Summer</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Well yield monitoring during peak demand</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY observation</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Ongoing</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#FEFCE8' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Summer</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Monthly wellhead visual check</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>5 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#FEFCE8' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Summer</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test water after flooding or heavy rain</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY sample; lab</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>15 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$50 to $100</td>
                </tr>
                {/* Fall rows - light amber tint */}
                <tr style={{ backgroundColor: '#FFFBEB' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Fall</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Exposed pipe insulation inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>20 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0 to $30</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFBEB' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Fall</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pressure switch draft protection check</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>10 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFBEB' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Fall</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Disconnect and drain outdoor hoses</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>15 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFBEB' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Fall</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Professional annual inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hire</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>2 to 3 hours</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$250 to $550</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFBEB' }}>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Fall</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pressure tank air charge recheck</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>15 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                {/* Winter rows - unstyled (white) */}
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Winter</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Monitor pump cycling during cold snaps</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY observation</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Ongoing</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Winter</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Check for freezing after extreme cold</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>10 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
                {/* Anytime rows - unstyled */}
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Anytime</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test if taste, odor, or color changes</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY sample; lab</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>15 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$50 to $150</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Anytime</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Inspect cap after flooding or well work</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>5 min</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>Everything below explains exactly how to do each task, what a passing result looks like, and when to call a contractor instead.</p>
        </div>

        {/* The Core Three */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Essentials</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Core Three: What Every Well Owner Must Do Every Year</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before any seasonal specifics, these three tasks are the non-negotiable annual baseline. Everything else builds on them.</p>

          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>1. Test your water for bacteria and nitrates</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>The <a href='https://www.cdc.gov/drinking-water/safety/guidelines-for-testing-well-water.html' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>CDC recommends testing every private well annually</a> for total coliform bacteria, nitrates, total dissolved solids, and pH. These four contaminants are the most common threats to private well water and the ones most likely to change from year to year without any visible sign.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Spring is the best time to test because snowmelt and spring rain cause the most significant groundwater movement of the year, introducing the highest risk of bacterial contamination from surface runoff. Many county health departments offer free or subsidized testing for bacteria and nitrates. Call your county health department before paying a commercial lab.</p>
            <p className='text-slate-700 text-sm leading-relaxed'>Cost: Free to $60 through a county health department. $50 to $100 through a certified mail-in lab.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>2. Inspect the wellhead</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>Walk out to your well casing and spend five minutes on a visual check. The casing should extend at least 12 inches above the surrounding ground surface. The well cap should be tightly sealed with no cracks, missing gaskets, or insect entry points. The ground around the wellhead should slope away from the casing in all directions so that surface water drains away rather than pooling at the base. No vegetation with deep root systems should be growing within 10 feet.</p>
            <p className='text-slate-700 text-sm leading-relaxed'>This takes five minutes and costs nothing. Missing damage to a well cap is how surface contamination reaches an otherwise clean well.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>3. Check the pressure tank air charge</h3>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>The rubber bladder inside your pressure tank separates pressurized air from the stored water. Over time the air charge leaks down. If the air charge drops too low, the tank loses its ability to buffer the pump from short cycling. If the bladder fails entirely, the tank becomes waterlogged and the pump cycles on and off every few seconds, wearing itself out rapidly.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>How to check: Turn off the pump at the breaker. Open a faucet and let the system drain until water stops flowing. Press the Schrader valve on top of the tank (it looks like a tire valve stem). Air should come out. If water comes out, the bladder has failed and the tank needs replacement soon. If air comes out, use a tire gauge to read the pressure. It should be 2 PSI below your cut-in pressure. For a 30/50 system that is 28 PSI. For a 40/60 system that is 38 PSI. Add air with a bicycle pump or compressor if the reading is low.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-3'>What a passing result looks like: Air comes out of the Schrader valve (not water). The tire gauge reads within 2 PSI of the target: 28 PSI for a 30/50 system, 38 PSI for a 40/60 system. You restore power, the pump builds to cut-out pressure, and the gauge holds steady for several minutes with no fixtures open. If any of these three conditions are not met, address before moving on.</p>
            <p className='text-slate-700 text-sm leading-relaxed'>Cost: Free. Takes 15 minutes.</p>
          </div>
        </div>

        {/* Spring Checklist */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Spring</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Spring Checklist: The Most Important Season</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Spring is the highest-risk period for well contamination and the best time for a thorough annual inspection. Frost heaving can shift the wellhead. Snowmelt and spring rain drive the highest bacterial contamination risk of the year. Winter damage becomes visible as the ground thaws.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Wellhead and Casing Inspection</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Walk the perimeter of the casing and check each of these specifically:</p>

          <div className='space-y-4 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Casing height</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Measure from the ground surface to the top of the casing. The minimum standard is 12 inches above grade. If frost heaving has raised the surrounding ground or the casing has settled, this measurement may have changed since you last checked. A casing that sits too low allows surface water to run directly toward the well opening.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Well cap condition</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>The cap should have an intact rubber gasket that compresses against the top of the casing when tightened. Look for cracks in the cap body, gaps in the seal, missing or corroded bolts, and damage to the vent screen. The vent screen keeps insects out while allowing pressure equalization. Replace any cap with a missing or torn screen immediately. A replacement sanitary well cap costs $15 to $40 at any plumbing supply store and installs in minutes.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Cap insects and intrusion</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Look inside the cap if you can do so safely. Spiders, ants, and wasps commonly nest in well caps. Ants in particular are a documented problem because they reach the electrical pressure switch through wiring pathways and can cause erratic pump behavior by bridging contacts. Clear insects from the cap area. If ants are present in significant numbers, check the pressure switch for ant activity.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Ground slope and drainage</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>The soil around the casing should slope away from the well in all directions. A flat or inward-sloping grade allows rainwater and snowmelt to pool at the base of the casing, increasing contamination risk. If the grade has shifted, add soil or gravel sloped away from the well.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>10-foot clearance zone</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>No trees, shrubs, or deep-rooted plants within 10 feet. Root systems can damage the casing and create pathways for surface contamination. Remove any new vegetation that established itself over winter.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Separation distances to verify</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>While you are at the wellhead, confirm that required distances are still being maintained. The standard minimum separations are 50 feet from a septic tank or leach field, 50 feet from any kennel or livestock pen, 50 feet from underground fuel storage tanks, and 50 feet from any chemical storage area including fertilizer or pesticide storage. These distances are minimums. Many states require 100 feet or more for certain contamination sources. If any activity or structure has been added near the well since your last check, verify it meets the required setback. A well contractor or your county health department can tell you your state{`'`}s specific requirements.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Water Testing After Snowmelt</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Schedule water testing in early to mid spring, after the majority of snowmelt runoff has passed through the aquifer. Spring is when contamination risk peaks because surface water infiltrates rapidly through unfrozen soil and carries bacteria, nitrates, and sediment into shallow aquifers.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Test at minimum for total coliform bacteria, E. coli, and nitrates. If you are near agricultural land, add nitrates to a more frequent schedule. If you have never tested comprehensively, spring is the time to run a full panel including metals, pH, hardness, and any contaminants of regional concern.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>See <Link href='/guides/how-to-test-well-water' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>how to test your well water</Link> for step-by-step sample collection instructions that prevent invalidating the test.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Pressure Tank and Pressure Switch Check</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Complete the air charge check described in the Core Three section above. In addition, inspect the pressure switch:</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Turn off power to the pump at the breaker. Remove the plastic cover from the pressure switch (one nut at the top holds it). Look at the electrical contacts inside. They should be copper-colored and shiny or dull copper, not black or pitted. Burned or heavily corroded contacts indicate the switch is wearing out and should be replaced before it fails. A new pressure switch costs $25 to $75 and takes about 30 minutes to replace. Also check that the sensing tube (the small tube connecting the switch to the pipe) is free of mineral scale blockage. A blocked sensing tube causes the switch to misread pressure.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Check for insects inside the switch housing. Ants are the most common problem and can bridge the electrical contacts, causing erratic pump behavior.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Filter and Treatment System Inspection</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If you have any point-of-entry or point-of-use water treatment equipment, spring is the time to service it:</p>
          <div className='space-y-3 mb-4'>
            <p className='text-slate-700 leading-relaxed text-sm'><strong>Sediment filters:</strong> Replace cartridges based on the manufacturer schedule or when pressure drop across the filter exceeds 15 PSI. A clogged filter that is not replaced does not just slow flow rate. It can allow bacteria to colonize the filter media.</p>
            <p className='text-slate-700 leading-relaxed text-sm'><strong>Water softeners:</strong> Check salt level and break up any salt bridges (hardened salt crusts above the brine level that prevent regeneration). Inspect resin for iron fouling if your water has elevated iron.</p>
            <p className='text-slate-700 leading-relaxed text-sm'><strong>UV disinfection systems:</strong> Replace the UV lamp annually regardless of whether it appears to be working. UV output degrades over time, and a lamp that is glowing may still be providing inadequate disinfection.</p>
            <p className='text-slate-700 leading-relaxed text-sm'><strong>Carbon filters:</strong> Replace according to manufacturer schedule. Overused carbon filters can leach absorbed contaminants back into the water.</p>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>Cost: Filter cartridge replacement $20 to $80 depending on type. UV lamp replacement $50 to $150.</p>
        </div>

        {/* Summer Checklist */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Summer</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Summer Checklist: Monitoring Yield and Quality</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Summer places the highest demand on residential wells. Irrigation, increased household use, and lower water tables from reduced rainfall create the conditions for two problems that are otherwise invisible: declining well yield and heat-related bacterial growth.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Monitor Well Yield</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Pay attention to how the system performs during periods of sustained high demand. Signs of a yield problem:</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The pump runs continuously during extended use without reaching cut-off pressure. Pressure drops noticeably after 20 to 30 minutes of continuous irrigation or multiple fixtures running. Recovery is slow after filling a bathtub or running a sprinkler.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If you notice any of these, reduce demand by spacing out high-use activities and scheduling irrigation during the early morning rather than the hottest part of the day. A yield test by a licensed contractor measures how many gallons per minute the well can sustain and at what depth the water table sits during pumping. If the well is marginally meeting demand, a yield test tells you whether you need to deepen the well or whether a storage tank would solve the problem.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Check for Sediment</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Fill a clear glass from a cold tap and hold it against a white background. Any cloudiness, sandy grit, or visible particles need investigation. Summer is when wells most often begin showing sediment because:</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Drought lowers the water table, forcing the pump to draw from a lower depth that may be closer to the bottom of the well where sediment accumulates. Pump intake screens degrade over time and eventually allow fine particles to pass. The pump may have been set too low when installed.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Persistent sediment despite running water for several minutes signals a well or pump issue that needs a contractor assessment. Sediment wears pump impellers and clogs treatment equipment.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Wellhead Visual Check (Monthly in Summer)</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Do a quick monthly pass through summer, particularly after heavy rain events. Check the well cap seal, the casing condition, and the drainage grade around the wellhead. Summer storms can deposit debris around the wellhead and disturb the drainage slope.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Test After Any Flooding or Heavy Rain Event</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>If the wellhead was submerged, flooded around, or if heavy runoff reached the casing area during a significant storm, test for bacteria and nitrates before resuming normal water use. The EPA notes that any well drawing from 50 feet or less that was flooded or is more than 10 years old should be disinfected and tested after significant flooding.</p>
        </div>

        {/* Fall Checklist */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Fall</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Fall Checklist: Before the Freeze</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Fall maintenance has one dominant focus: protecting the system from winter damage. Frozen pipes and frozen pressure switches are the most common well system failures in cold climates, and both are entirely preventable.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Inspect Exposed Pipe Insulation</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Any pipe that runs through an unheated space is at risk. Check insulation on:</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The pressure tank supply line where it exits the well casing into the crawl space or basement. Any horizontal pipe run in an unheated garage, crawl space, or outbuilding. The section of pipe between the pitless adapter and the point where it enters the heated envelope of the house.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Replace missing or degraded pipe insulation before the first hard freeze. Foam pipe insulation sleeves cost $3 to $8 per linear foot and install in minutes. For pipes in particularly exposed locations, consider heat tape as a backup.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Check the Pressure Switch for Draft Exposure</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If your pressure tank and pressure switch are in a garage, outbuilding, or area with air infiltration, the pressure switch is vulnerable to freezing. A frozen pressure switch cannot read pressure correctly and will fail to start the pump when pressure drops. Check for gaps in walls or ceilings around the pressure tank area and seal them. If the space genuinely cannot be kept above freezing, a small electric heat cable around the pressure switch housing is a low-cost solution.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Disconnect and Drain Outdoor Connections</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Disconnect garden hoses from all outdoor hose bibs before first frost. A hose left connected traps water in the supply line, which can freeze back into the well supply piping. Even frost-free hose bibs require the hose to be disconnected to drain properly.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If you have any above-ground irrigation supply lines that are not below the frost line, drain and blow them out with compressed air before the ground freezes.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Annual Professional Inspection: Schedule for Fall or Spring</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The NGWA recommends that private wells receive an annual professional inspection by a licensed or certified water well systems professional. This inspection covers what homeowners cannot safely or practically do themselves:</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A flow test measuring gallons per minute at the pump. A check of the water level before and during pumping to establish the dynamic and static levels. Pump motor performance check including amp load, grounding, and line voltage. Pressure tank and pressure switch assessment. Visual inspection of all wellhead equipment for code compliance and sanitary condition.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Cost: $250 to $550 for a standard inspection. $300 to $500 for an inspection with basic water testing included. Schedule in fall or spring when contractors are less likely to be emergency-dispatched and have availability.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Pressure Tank Recheck</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>Do the Schrader valve air charge check again in fall before the cold sets in. Temperature changes affect air pressure. A tank that read correctly in spring may need a small air top-up before winter. Correct pressure going into winter means one less issue to troubleshoot if the system behaves oddly during a cold snap.</p>
        </div>

        {/* Winter Checklist */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Winter</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Winter Checklist: Cold-Weather Monitoring</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Winter maintenance is mostly monitoring with a few active checks. The goal is catching problems before they become emergencies during the worst possible time to call a contractor.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Monitor Pump Cycling</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>On a cold day, listen to the system. Is the pump cycling on and off more frequently than usual? Short cycling in winter can indicate that the air charge in the pressure tank dropped further due to temperature, or that the pressure switch contacts are stiffening in the cold and not making clean contact. Neither is an emergency but both warrant attention before they fail completely.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Check for Freezing Risk After Extreme Cold Events</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>After any extended period below 10 degrees Fahrenheit, check:</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Is water flowing normally at all fixtures? A reduction in flow or a completely dead tap on the ground floor or in an area near an exterior wall may indicate a frozen section. Do not leave a suspected frozen pipe situation and hope it resolves itself. Turn off the pump at the breaker and address the frozen section before it thaws and floods.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Is the pressure gauge reading normally? If pressure is extremely high (above 70 PSI) or does not drop when a fixture is opened, the pressure switch sensing tube may be frozen.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Keep Records During Winter Service Calls</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>Any time a contractor opens the system in winter, document exactly what was done, what parts were replaced, what the water level reading was, and any observations about system performance. Winter service calls are expensive and the documentation is valuable for the spring inspection.</p>
        </div>

        {/* DIY vs Hire */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>DIY vs Hire</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>DIY vs. Hire: The Clear Division</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Many well maintenance tasks are safe and appropriate for homeowners. Some tasks are not, regardless of skill level.</p>

          <div className='overflow-x-auto mb-4'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Task</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>DIY or Hire</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Visual wellhead inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>No tools or electrical knowledge required</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Well cap replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Simple threaded replacement, no well access</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pressure tank air charge check</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Tire gauge on Schrader valve, pump off at breaker</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Water sample collection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>With correct technique; see testing guide</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Filter and softener service</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Manufacturer instructions are adequate</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pressure switch replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY (careful)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Power must be fully off; 230V circuit</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Flow test and water level check</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hire</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Requires specialized equipment</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pump motor amp and voltage testing</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hire</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Live 230V work inside the well system</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Any work below the well cap</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hire always</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Requires proper equipment and licensing</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pump removal or replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hire always</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Specialized equipment; licensing required in most states</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Shock chlorination</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY or hire</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>DIY is possible but professional disinfection is more thorough</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Well camera inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hire</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Requires downhole camera equipment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Red Flags */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Red Flags</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Red Flags: Call Today, Not Next Month</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Some signs warrant calling a licensed well contractor the same day rather than waiting for the next scheduled inspection. Delaying on these costs significantly more in the end and some carry health risks.</p>

          <div className='space-y-4'>
            <div className='bg-white border-l-4 border-red-400 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The water tests positive for E. coli or fecal coliform.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Stop using the water for drinking, cooking, and infant bathing immediately. Use bottled water. Call a contractor for shock chlorination and follow-up testing. E. coli in a well indicates fecal contamination has entered the system, which may also mean other pathogens are present.</p>
            </div>
            <div className='bg-white border-l-4 border-red-400 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The pump runs continuously without building pressure.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pump is running but not delivering water or not reaching cut-off pressure. This means the pump has failed, the water table has dropped below the pump intake, or there is a break in the drop pipe. Running a submersible pump with no water flow destroys it within minutes. Shut off the pump at the breaker and call a contractor.</p>
            </div>
            <div className='bg-white border-l-4 border-red-400 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure drops to near zero between cycles.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If the system loses pressure quickly after the pump shuts off, the check valve above the pump has failed. The water column in the drop pipe is draining back into the well. Not an immediate emergency but causes the pump to work harder on every start. Address within a week or two.</p>
            </div>
            <div className='bg-white border-l-4 border-red-400 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>You see cloudy or milky water that does not clear after running the tap for several minutes following a flooding event.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Surface water has likely entered the well. Do not drink the water until a lab test confirms it is safe.</p>
            </div>
            <div className='bg-white border-l-4 border-red-400 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The pressure switch makes buzzing, chattering, or clicking sounds.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Electrical arcing inside the switch housing indicates contact failure. Left unaddressed, an arcing pressure switch can cause a fire or damage the pump wiring. Replace the switch immediately.</p>
            </div>
            <div className='bg-white border-l-4 border-red-400 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>The well cap is missing, cracked, or lifted off the casing.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A well without a sealed cap is an open contamination pathway. Replace the cap same day. A new sanitary cap costs $15 to $40.</p>
            </div>
            <div className='bg-white border-l-4 border-red-400 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>You smell sewage, gasoline, or chemicals when running water.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>These odors indicate surface contamination from a septic system, underground storage tank, or chemical spill has reached the aquifer. Stop using the water and contact your county health department.</p>
            </div>
          </div>
        </div>

        {/* Yellow Flags */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Yellow Flags</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Yellow Flags: Address Within 60 Days</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>These signs are not emergencies but indicate a deteriorating condition that will become a problem if left unaddressed.</p>

          <div className='space-y-3'>
            <p className='text-slate-700 leading-relaxed text-sm'>The pump cycles more frequently than it used to but not every few seconds. Check the pressure tank air charge first. If that is correct, a contractor should evaluate.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Water pressure is lower than usual at peak demand times. Monitor over two weeks. If it does not self-correct, have a contractor test pump output and well yield.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>The pressure tank makes a hollow metallic clang when tapped. A properly charged tank sounds hollow at the top (air) and more solid toward the bottom (water). Uniform solid sound suggests waterlogging. Confirm with the Schrader valve test.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Orange or rust staining has appeared or worsened since the last test. Test for iron and manganese. If levels have increased, investigate whether corrosion from aging pipes is a new contributing factor.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>The water has a slight odor that was not there previously. Not strong enough to stop use, but noticeable. Test immediately. A new odor is always worth investigating because it may indicate a change in water quality that a test will quantify and that you will want documented.</p>
          </div>
        </div>

        {/* The Maintenance Record */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Records</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Maintenance Record: What to Track and Why</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Every well owner should keep a maintenance log. Not an elaborate system, but a simple record that answers four questions about any given year: what did the water test show, what physical condition was the wellhead in, what did the pressure system show, and what contractor work was done.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>When a well develops a problem, the first thing a contractor needs to know is whether the problem appeared suddenly or gradually over time. A homeowner who can say {`"`}the pressure tank air charge has been dropping about 5 PSI per year for three years{`"`} is giving the contractor diagnostic information that saves time and money. A homeowner who says {`"`}it just stopped working{`"`} gives the contractor nothing to work with.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Records also matter for property resale. A documented maintenance history is evidence of responsible ownership and reduces buyer concerns about well condition. New Jersey law requires sellers to provide well water test results to buyers. Many buyers in other states now request maintenance records as standard due diligence.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>What to record after each maintenance check</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Date of inspection. Water test results (save the actual lab report in the same folder or file). Wellhead condition notes (cap condition, grade slope, any visible damage, casing height measurement if you re-measure). Pressure tank air charge reading before and after any adjustment. Any equipment replaced, including the date, part name, and supplier. Contractor visit notes including what was checked, what was found, and what was recommended.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Where to keep records</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Keep paper copies in the same location as your well construction report, which should be a document you received when the well was drilled or when you purchased the property. Digital copies in a cloud folder or emailed to yourself provide a backup. If you cannot find your original well construction report, contact your state environmental or water resources agency. Most states require contractors to file well logs and maintain them in a public database searchable by address.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>What to ask for from a contractor after any service call</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>A written report listing everything that was checked, every observation made, and every recommendation. A copy of any water test results. The make, model, and serial number of any replaced equipment. A contractor who does not provide written documentation after an inspection is not providing a complete service.</p>
        </div>

        {/* Annual Cost Summary */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Costs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Annual Well Maintenance Cost Summary</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Understanding what maintenance actually costs makes it easier to budget and to recognize when a quote is out of line.</p>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Task</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>DIY Cost</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Hired Cost</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Frequency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Water testing (bacteria + nitrates)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Free to $60 (county lab)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$50 to $100 (mail-in lab)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annual</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Comprehensive water panel</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$150 to $300</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$200 to $400</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Every 3 to 5 years</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pressure tank air check and adjustment</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0 (tire gauge)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Included in inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annual</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Well cap inspection and replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$0 to $40</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$75 to $150 labor + cap</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annual inspection; replace as needed</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Filter cartridge replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$20 to $80</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$75 to $200 with labor</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Per manufacturer schedule</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>UV lamp replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$50 to $150</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$100 to $250 with labor</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annual</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Professional annual inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>N/A</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$250 to $550</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annual (NGWA recommendation)</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pressure switch replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$25 to $75</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$150 to $300 with labor</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Every 5 to 10 years or as needed</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pressure tank replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$150 to $400 (tank only)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$400 to $900 installed</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Every 10 to 15 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>A homeowner doing their own visual inspections and filter service, using county health department water testing, and having a professional inspection every other year can maintain a well for $100 to $300 per year on average. Annual professional inspection every year adds $250 to $550. The NGWA annual inspection recommendation is sound, particularly for wells more than 10 years old.</p>
        </div>

        {/* FAQ Section */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            {faqSchema.mainEntity.map((faq, i) => (
              <details key={i} className='group bg-white border border-slate-200 rounded-lg'>
                <summary className='flex items-center justify-between p-5 cursor-pointer list-none'>
                  <span className='font-bold text-sm text-slate-900 pr-4'>{faq.name}</span>
                  <span className='text-slate-400 group-open:rotate-45 transition-transform text-xl flex-shrink-0'>+</span>
                </summary>
                <div className='px-5 pb-5'>
                  <p className='text-slate-700 text-sm leading-relaxed'>{faq.acceptedAnswer.text}</p>
                </div>
              </details>
            ))}
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Well Log (Well Construction Report)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A document filed with the state by the well driller at the time of construction. Contains the well depth, casing type and depth, grouting information, static and pumping water levels, aquifer description, and the results of the initial pump test. A critical reference for any future contractor working on the well. Available from your state environmental or water resources agency if you cannot locate your original copy.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Schrader Valve</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The tire-valve-style fitting on top of the pressure tank used to check and adjust the air pre-charge. Checking the Schrader valve with the tank drained is the standard test for pressure tank bladder integrity. Air coming out means the bladder is intact. Water coming out means the bladder has failed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Static Water Level</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The depth from the ground surface to the water surface in the well when the pump is not running. Measured by a contractor with a sounding device. Rising or falling static water levels over time indicate changes in the aquifer. A declining static water level over several years of testing may indicate regional groundwater depletion or increased local demand.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Dynamic Water Level</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The depth from the ground surface to the water surface in the well while the pump is running at full output. The difference between static and dynamic levels is the drawdown. A large drawdown means the well is struggling to supply water as fast as the pump can remove it, which indicates a yield limitation.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Shock Chlorination</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A disinfection procedure in which a high-concentration chlorine solution is introduced into the well casing, circulated through all pipes and fixtures, allowed to sit for 12 to 24 hours, and then flushed from the system. Used after a positive bacteria test, after flooding, after any work that opens the well, and as part of periodic preventive maintenance for wells with recurring bacterial contamination.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Sanitary Well Cap</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A well cap designed with a rubber gasket that compresses against the top of the casing when the cap is tightened, forming a watertight and insect-proof seal. Older wells may have simple screw-on aluminum or plastic caps without gaskets. Replacing these with sanitary caps is one of the most cost-effective contamination prevention measures available, costing $15 to $40.</p>
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
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
            </Link>
            <Link href='/guides/well-pressure-tank-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pressure Tank Guide</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/cost-guides/well-water-testing-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Testing Cost</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Smells Like Sulfur</span>
            </Link>
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Guide to Private Well Water Systems</span>
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
