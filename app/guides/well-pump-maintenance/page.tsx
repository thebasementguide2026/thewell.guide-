import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Pump Maintenance: The Complete Annual Schedule for Private Well Owners | The Well Guide',
  description: 'The complete well pump and system maintenance guide for private well owners. Annual maintenance schedule by task and season, the pressure tank pre-charge check procedure, wellhead inspection checklist, what professional inspection covers versus what homeowners can do themselves, how to track well yield over time, and how to maintain a maintenance log that protects resale value.',
  openGraph: {
    title: 'Well Pump Maintenance: The Complete Annual Schedule for Private Well Owners',
    description: 'The complete well pump and system maintenance guide for private well owners. Annual maintenance schedule, pressure tank pre-charge check, wellhead inspection, seasonal tasks, yield monitoring, and maintenance log guidance.',
    url: 'https://www.thewell.guide/guides/well-pump-maintenance',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/well-pump-maintenance.jpg', width: 1200, height: 630, alt: 'Blue well water pressure tank installed in a residential basement utility room with copper pipe connection, pressure gauge, and pressure switch visible.' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/well-pump-maintenance' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Pump Maintenance: The Complete Annual Schedule for Private Well Owners',
  description: 'The complete well pump and system maintenance guide for private well owners — annual schedule, pressure tank pre-charge check, wellhead inspection, seasonal tasks, yield monitoring, professional inspection scope, and maintenance log guidance.',
  image: 'https://www.thewell.guide/well-pump-maintenance.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/guides/well-pump-maintenance',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should a well pump be serviced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The submersible pump itself requires professional service every 5 to 7 years for inspection or when it fails. It cannot be serviced at the surface. What homeowners maintain annually is the system around the pump: water quality testing, pressure tank pre-charge check, wellhead inspection, and treatment equipment service. A professional well inspection every 3 to 5 years covers pump motor performance, flow rate, and water level measurements.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my well pump needs maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'System signals to watch for: the pump short-cycling (turning on and off rapidly), declining water pressure during normal use, the pump running longer than usual to achieve normal pressure, sudden changes in water taste or odor, and a spike in electricity use with no change in household consumption. Annual water testing and the pressure tank pre-charge check are the two proactive maintenance tasks that prevent the most common system failures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most important well maintenance task?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Annual water quality testing for bacteria and nitrates. The pump and pressure system give visible signals when they develop problems. Bacterial contamination gives no signal at all — it is odorless, colorless, and tasteless and can cause serious illness without warning. A well that is never tested may have had a contamination problem for years without the owner knowing. The CDC and NGWA both recommend annual testing for private well owners.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I check my well pressure tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shut off the pump at the circuit breaker, open a cold faucet until water stops, then close it. Locate the Schrader valve on the tank and check pressure with a tire gauge. It should read 2 PSI below the cut-in pressure: 28 PSI for a 30/50 system, 38 PSI for a 40/60 system. If water sprays out instead of air, the diaphragm has failed and the tank needs replacement. Add air with a bicycle pump if pressure is low.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a well pump last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quality submersible pump typically lasts 10 to 15 years with normal residential use. Lifespan is shortened by short-cycling from a waterlogged pressure tank, pumping water with abrasive sediment, and voltage irregularities. A pump on a properly maintained system with correct pressure tank sizing may run 20 years or more.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do to maintain my well in winter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Keep pipes and the pressure tank in heated or insulated spaces. In extreme cold below 0 degrees Fahrenheit, let a small trickle of water run overnight to prevent freezing. Disconnect and drain outdoor hose bibs before the first freeze. Confirm the pressure switch and control box are in a heated location. If the property will be vacant over winter, have a professional winterize the system or drain it completely.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I keep records of my well maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Keep a simple notebook or spreadsheet near the pressure tank. Record the date and results of every water test, every professional inspection, every repair or replacement, and every pressure tank pre-charge check. Note any changes in water quality, pressure, or system behavior and when they first appeared. This record is invaluable for diagnosing future problems and significantly improves the well's value perception when selling the property.",
      },
    },
    {
      '@type': 'Question',
      name: 'When should I have my well professionally inspected?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The NGWA recommends a professional inspection every 3 to 5 years for a normally performing well, or annually for wells older than 15 years. Also schedule after flooding, nearby construction, a sudden change in water quality or pressure, or after a positive bacteria test that does not resolve with shock chlorination. A professional inspection covers flow rate, pump motor performance, water level measurement, and wellhead condition.',
      },
    },
  ],
}

export default function WellPumpMaintenance() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className='max-w-3xl mx-auto px-4 py-12'>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Guides', href: '/guides' },
            { label: 'Well Pump Maintenance' },
          ]}
        />

        {/* Badge + Reading Time */}
        <div className='flex items-center gap-3 mb-4 mt-6'>
          <span className='inline-block px-3 py-1 text-xs font-bold rounded-full' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>Guide</span>
          <span className='text-sm text-slate-500'>13 min read</span>
        </div>

        {/* Title */}
        <h1 className='text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight'>
          Well Pump Maintenance: The Complete Annual Schedule for Private Well Owners
        </h1>

        {/* Byline */}
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs' style={{ backgroundColor: '#1D9E75' }}>WG</div>
          <div>
            <p className='text-sm font-semibold text-slate-900'>The Well Guide</p>
            <p className='text-xs text-slate-500'>Updated March 2026 &middot; 13 min read</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className='rounded-xl overflow-hidden mb-8'>
          <Image
            src='/well-pump-maintenance.jpg'
            alt='Blue well water pressure tank installed in a residential basement utility room with copper pipe connection, pressure gauge, and pressure switch visible.'
            width={1200}
            height={630}
            className='w-full h-auto'
            priority
          />
        </div>

        {/* TL;DR Box */}
        <div className='rounded-lg p-5 mb-10' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            Well pump maintenance is primarily system maintenance, not pump maintenance. The submersible pump itself is sealed underground and inaccessible for DIY service &mdash; it runs until it fails and is then replaced. What homeowners maintain is everything around it: annual water quality testing, annual pressure tank pre-charge check, annual wellhead inspection, seasonal preparations for winter and spring, and the maintenance records that track the system&apos;s health over time. A well owner who tests the water annually, checks the pressure tank air charge once a year, and keeps the wellhead properly sealed and graded will prevent the vast majority of preventable failures on a private well system.
          </p>
        </div>

        {/* The Honest Reality About Well Pump Maintenance */}
        <div className='mb-12 rounded-lg p-6 bg-slate-50 border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Honest Reality About Well Pump Maintenance</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Before going through the maintenance schedule, it is worth being clear about what &ldquo;well pump maintenance&rdquo; actually means for a homeowner &mdash; because most people imagine something closer to car maintenance than what the reality actually is.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            A submersible well pump sits at the bottom of a casing 100 to 400 feet underground, submerged in water, and runs on 240-volt electrical power. There is no oil to change, no filter to replace, no belt to inspect. The pump is a sealed unit. The only way to access it is to pull the entire drop pipe and pump out of the well, which requires a pump hoist truck and a licensed well contractor. It costs $800 to $2,500 for a professional to pull and replace a submersible pump.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            What this means practically: homeowners do not maintain the pump itself. They maintain the system around the pump, and they monitor the signals that indicate whether the pump is healthy or developing problems. The pump is maintained by professional contractors every 5 to 7 years for inspection or when it fails and needs replacement.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            The maintenance tasks that fall to homeowners are the ones that actually prevent the most common well failures: contamination events, pressure system problems, and seasonal damage. These tasks are genuinely manageable, do not require specialized tools, and take a total of 2 to 3 hours per year.
          </p>
        </div>

        {/* Annual Maintenance Schedule Table */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Complete Annual Well Maintenance Schedule</h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#0D3D30' }}>
                  <th className='text-left p-3 font-bold text-white border border-slate-300'>Task</th>
                  <th className='text-left p-3 font-bold text-white border border-slate-300'>Frequency</th>
                  <th className='text-left p-3 font-bold text-white border border-slate-300'>DIY or Professional</th>
                  <th className='text-left p-3 font-bold text-white border border-slate-300'>Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Water quality test (bacteria and nitrates minimum)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Annually &mdash; spring</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY sample, lab analysis</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$100 to $300</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Extended water quality panel</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Every 3 to 5 years or when problems noticed</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY sample, lab analysis</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$150 to $400</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pressure tank pre-charge check</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Annually</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$0</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Wellhead visual inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Annually &mdash; spring and fall</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#FAEEDA' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Professional well inspection</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Every 3 to 5 years</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Professional</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$250 to $500</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Treatment equipment service</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Per manufacturer schedule</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY or professional</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$50 to $300</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Maintenance log update</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>After every test, inspection, or service</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$0</td>
                </tr>
                <tr style={{ backgroundColor: '#FAEEDA' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>Winter preparation (cold climates)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Annually &mdash; fall</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$20 to $100</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Spring startup check</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Annually &mdash; spring</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$0</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Septic pumping (if applicable)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Every 3 to 5 years</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Professional</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$300 to $600</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Task 1: Annual Water Quality Testing */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Task 1: Annual Water Quality Testing</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            This is the single most important maintenance task for a private well owner and the one most commonly skipped. The CDC and NGWA both recommend annual water testing for private wells at minimum. Unlike city water, which is tested hundreds of times per year by the utility, a private well is tested only when the owner initiates it.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>What to test annually:</strong></p>
          <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed mb-4'>
            <li>Total coliform bacteria</li>
            <li>E. coli bacteria</li>
            <li>Nitrates</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            These three are the minimum annual panel. Bacteria and nitrates are the two most common health-relevant contaminants in private wells nationally, and both are odorless, colorless, and tasteless &mdash; undetectable without testing.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>When to test:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Spring is the recommended testing season. Snowmelt and spring rainfall increase groundwater recharge and can carry surface contamination into shallow aquifers. A spring test catches any contamination introduced over winter before it goes undetected through summer.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>When to test immediately regardless of schedule:</strong></p>
          <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed mb-4'>
            <li>After any flooding event that affects the property</li>
            <li>After any work is done on the well or pump</li>
            <li>After a nearby land use change (new agricultural operation, new construction, underground fuel storage)</li>
            <li>When water changes in taste, odor, or appearance</li>
            <li>When a household member develops unexplained gastrointestinal illness</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>Extended panel every 3 to 5 years:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            In addition to the annual bacteria and nitrates test, a more comprehensive panel every 3 to 5 years should cover pH, hardness, iron, manganese, TDS (total dissolved solids), and any contaminants relevant to local geology or land use. Wells in agricultural areas should test for pesticides and herbicides. Wells in areas with natural arsenic geology should test for arsenic. Wells in areas with uranium-bearing bedrock should test for uranium and radon.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            See the <a href='/guides/how-to-test-well-water' className='underline' style={{ color: '#1D9E75' }}>how to test your well water guide</a> for the complete panel recommendations by region and the correct sample collection procedure.
          </p>
        </div>

        {/* Task 2: Pressure Tank Pre-Charge Check */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Task 2: Pressure Tank Pre-Charge Check</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            The pressure tank pre-charge is the air pressure in the tank&apos;s air chamber. If it drops below the correct level, the pump begins short-cycling &mdash; turning on and off every few seconds &mdash; which dramatically shortens pump life. Checking and correcting pre-charge pressure takes 10 minutes and requires only a standard tire pressure gauge.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>The correct pre-charge pressure:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-1'>2 PSI below the pump&apos;s cut-in pressure.</p>
          <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed mb-6'>
            <li>For a 30/50 pressure switch: pre-charge should be 28 PSI</li>
            <li>For a 40/60 pressure switch: pre-charge should be 38 PSI</li>
          </ul>

          {/* Pre-Charge Procedure Step Card */}
          <div className='rounded-lg p-5 bg-white border border-slate-200 mb-6' style={{ borderLeft: '4px solid #1D9E75' }}>
            <p className='font-bold text-slate-900 mb-4'>The procedure:</p>
            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>1</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>Turn off the pump at the circuit breaker</p>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>2</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>Open a cold water faucet and let it run until water completely stops &mdash; the tank is now empty</p>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>3</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>Close the faucet</p>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>4</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>Locate the Schrader valve on the pressure tank &mdash; it looks like a standard tire valve and is usually at the top or side of the tank</p>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>5</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>Check the pressure with a tire gauge</p>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>6</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>If the pressure is low, add air with a bicycle pump or air compressor until you reach the target pressure</p>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>7</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>If water sprays out of the Schrader valve when you press it, the diaphragm has failed and the tank needs replacement. See the <a href='/cost-guides/pressure-tank-replacement-cost' className='underline' style={{ color: '#1D9E75' }}>pressure tank replacement cost guide</a> for what this costs.</p>
              </div>
              <div className='flex items-start gap-4'>
                <span className='flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>8</span>
                <p className='text-slate-700 text-sm leading-relaxed pt-1'>Restore power to the pump</p>
              </div>
            </div>
          </div>

          {/* Incorrect Pre-Charge Amber Callout */}
          <div className='rounded-lg p-5 mb-4' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className='font-bold text-slate-900 mb-3'>What incorrect pre-charge causes:</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>Too low:</strong> the diaphragm bottoms out against the tank shell on every cycle, accelerating wear and failure.</p>
            <p className='text-slate-700 text-sm leading-relaxed'><strong className='text-slate-900'>Too high:</strong> the tank delivers less drawdown capacity than rated, causing more frequent pump cycling.</p>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed'>
            Check pre-charge annually, always with the tank empty. Never check pre-charge with water in the tank &mdash; the water pressure will give a false reading.
          </p>
        </div>

        {/* Task 3: Wellhead Visual Inspection */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Task 3: Wellhead Visual Inspection</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>
            The wellhead is the surface-level opening through which contamination most commonly enters a well. An annual visual inspection takes 10 minutes and can identify problems before they become contamination events.
          </p>
          <p className='font-bold text-slate-900 mb-4'>What to check at the wellhead:</p>

          {/* Checklist Items */}
          <div className='space-y-4'>
            <div className='flex items-start gap-3'>
              <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' viewBox='0 0 20 20'><rect x='1' y='1' width='18' height='18' rx='3' stroke='#1D9E75' strokeWidth='2' /><path d='M5 10l3 3 7-7' stroke='#1D9E75' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
              <div>
                <p className='text-slate-900 text-sm font-bold mb-1'>Casing height</p>
                <p className='text-slate-700 text-sm leading-relaxed'>The well casing should extend at least 12 inches above the surrounding ground surface. If soil has settled or eroded and the casing now extends less than 12 inches above grade, surface water can pool around and potentially enter the well. This is correctable &mdash; a licensed well contractor can add a casing extension.</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' viewBox='0 0 20 20'><rect x='1' y='1' width='18' height='18' rx='3' stroke='#1D9E75' strokeWidth='2' /><path d='M5 10l3 3 7-7' stroke='#1D9E75' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
              <div>
                <p className='text-slate-900 text-sm font-bold mb-1'>Well cap condition</p>
                <p className='text-slate-700 text-sm leading-relaxed'>The sanitary well cap should be intact, properly seated, and undamaged. No cracks, no gaps where the cap meets the casing, no evidence that insects or small animals have entered. A damaged well cap should be replaced immediately &mdash; it is an inexpensive part ($20 to $50) and the first line of defense against surface contamination.</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' viewBox='0 0 20 20'><rect x='1' y='1' width='18' height='18' rx='3' stroke='#1D9E75' strokeWidth='2' /><path d='M5 10l3 3 7-7' stroke='#1D9E75' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
              <div>
                <p className='text-slate-900 text-sm font-bold mb-1'>Surface drainage</p>
                <p className='text-slate-700 text-sm leading-relaxed'>The ground immediately around the wellhead should slope away from the casing in all directions. Standing water anywhere near the wellhead is a contamination risk. Regrade or add gravel if water pools near the well.</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' viewBox='0 0 20 20'><rect x='1' y='1' width='18' height='18' rx='3' stroke='#1D9E75' strokeWidth='2' /><path d='M5 10l3 3 7-7' stroke='#1D9E75' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
              <div>
                <p className='text-slate-900 text-sm font-bold mb-1'>Vegetation clearance</p>
                <p className='text-slate-700 text-sm leading-relaxed'>No trees, shrubs, or plants with woody root systems should be within 10 feet of the wellhead. Tree roots can damage the casing and create pathways for surface contamination to enter. Grass and shallow-rooted plants are acceptable and actually help prevent soil erosion.</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' viewBox='0 0 20 20'><rect x='1' y='1' width='18' height='18' rx='3' stroke='#1D9E75' strokeWidth='2' /><path d='M5 10l3 3 7-7' stroke='#1D9E75' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
              <div>
                <p className='text-slate-900 text-sm font-bold mb-1'>Chemical storage proximity</p>
                <p className='text-slate-700 text-sm leading-relaxed'>No pesticides, fertilizers, motor oil, paint, or other chemicals should be stored within 50 feet of the wellhead. Check that nothing has accumulated near the well over the past year.</p>
              </div>
            </div>
            <div className='flex items-start gap-3'>
              <svg className='w-5 h-5 mt-0.5 flex-shrink-0' fill='none' viewBox='0 0 20 20'><rect x='1' y='1' width='18' height='18' rx='3' stroke='#1D9E75' strokeWidth='2' /><path d='M5 10l3 3 7-7' stroke='#1D9E75' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' /></svg>
              <div>
                <p className='text-slate-900 text-sm font-bold mb-1'>Flooding vulnerability</p>
                <p className='text-slate-700 text-sm leading-relaxed'>If the well is in a low-lying area that flooded in the past year, assess whether the wellhead needs to be raised or the casing extended. A well that floods should be shock chlorinated and tested before use. See the <a href='/guides/how-to-shock-chlorinate-well' className='underline' style={{ color: '#1D9E75' }}>how to shock chlorinate a well guide</a> for the full procedure.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Seasonal Maintenance */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Seasonal Maintenance</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            {/* Spring */}
            <div className='rounded-lg p-5 bg-white border border-slate-200'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-lg'>🌱</span>
                <h3 className='text-lg font-bold text-slate-900'>Spring</h3>
              </div>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                Spring is the highest-priority maintenance season for private well owners. Snowmelt and spring rainfall represent the period of greatest contamination risk for shallow wells.
              </p>
              <p className='text-slate-900 text-sm font-bold mb-2'>Spring tasks:</p>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed mb-3'>
                <li>Conduct the annual water test (bacteria, nitrates minimum)</li>
                <li>Perform the wellhead visual inspection</li>
                <li>Check the well cap for any winter damage</li>
                <li>Inspect pressure tank and plumbing for any damage that may have occurred if temperatures dropped below freezing</li>
                <li>Flush the system if the home has been vacant over winter &mdash; run all faucets for 5 minutes to clear any stale or potentially contaminated water before resuming normal use</li>
                <li>Check treatment equipment (filters, softeners, UV systems) and replace any cartridges or consumables per the manufacturer&apos;s schedule</li>
              </ul>
              <p className='text-slate-700 text-sm leading-relaxed'>
                <strong className='text-slate-900'>For seasonal properties:</strong> If the property was closed over winter, treat the spring reopening as a full system restart. Inspect, test, and flush before using the water for drinking or cooking.
              </p>
            </div>

            {/* Summer */}
            <div className='rounded-lg p-5 bg-white border border-slate-200'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-lg'>☀️</span>
                <h3 className='text-lg font-bold text-slate-900'>Summer</h3>
              </div>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                Summer is the season of drought risk for wells drawing from shallow unconfined aquifers. Dry periods cause the water table to drop, reducing well yield and occasionally causing wells to run low.
              </p>
              <p className='text-slate-900 text-sm font-bold mb-2'>Summer tasks:</p>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                <li>Monitor water pressure during peak demand periods (morning showers, irrigation, laundry)</li>
                <li>If pressure seems lower than normal or recovery seems slower after high use, note it and compare to the same period in previous years</li>
                <li>Avoid excessive simultaneous water use (filling a pool while running irrigation and doing laundry simultaneously) that can temporarily exceed the well&apos;s yield</li>
                <li>Keep the wellhead clear of vegetation growth &mdash; summer growth is fast and weeds can accumulate quickly around the casing</li>
                <li>If a pool is being filled from the well, do it over multiple days in sessions to allow well recovery. See the <a href='/guides/complete-well-guide' className='underline' style={{ color: '#1D9E75' }}>complete well guide</a> for yield management guidance.</li>
              </ul>
            </div>

            {/* Fall */}
            <div className='rounded-lg p-5 bg-white border border-slate-200'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-lg'>🍂</span>
                <h3 className='text-lg font-bold text-slate-900'>Fall</h3>
              </div>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                Fall preparation is critical in cold climates where freezing temperatures can damage above-ground system components.
              </p>
              <p className='text-slate-900 text-sm font-bold mb-2'>Fall tasks:</p>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                <li>Inspect insulation on any exposed pipes in unheated spaces (garages, crawlspaces, utility rooms where temperatures drop below freezing)</li>
                <li>Check the pressure switch &mdash; in unheated spaces, the contacts can freeze in winter. Consider wrapping with heat tape or moving to a heated space if possible.</li>
                <li>Disconnect and drain any outdoor hose bibs or irrigation lines that connect to the well system</li>
                <li>Replace treatment equipment cartridges before winter &mdash; a fresh filter going into the season that may see reduced maintenance access is better than an exhausted one</li>
                <li>Service the water softener if applicable: check salt level, clean brine tank if needed, verify settings</li>
              </ul>
            </div>

            {/* Winter */}
            <div className='rounded-lg p-5 bg-white border border-slate-200'>
              <div className='flex items-center gap-2 mb-3'>
                <span className='text-lg'>❄️</span>
                <h3 className='text-lg font-bold text-slate-900'>Winter</h3>
              </div>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                In cold climates, winter maintenance is primarily about freeze prevention.
              </p>
              <p className='text-slate-900 text-sm font-bold mb-2'>Winter tasks:</p>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                <li>Keep the pump house or utility room where pressure tank and controls are located heated to above freezing</li>
                <li>If pipes run through unheated spaces (garages, crawlspaces), confirm heat tape is functioning</li>
                <li>In extreme cold events (sustained temperatures below 0&deg;F), let a small trickle of water run overnight through a cold water faucet to prevent freezing in pipes</li>
                <li>Do not let snow or ice accumulate on the wellhead &mdash; periodically check that the well cap is visible and accessible</li>
                <li>If the home will be vacant for extended winter periods, have a professional winterize the system or drain it completely to prevent damage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Treatment Equipment Service Intervals */}
        <div className='mb-12 rounded-lg p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Treatment Equipment Service Intervals</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>
            Most well owners have at least one piece of water treatment equipment installed. Each has its own service schedule that is independent of the annual well maintenance tasks above. Neglecting treatment equipment does not just reduce its effectiveness &mdash; it can make water quality worse than having no treatment at all (an exhausted carbon filter, for example, can release accumulated contaminants back into the water).
          </p>
          <div className='space-y-5'>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Sediment filter cartridge</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Replace every 3 to 6 months depending on your water&apos;s sediment load. A whole-house sediment filter with a heavily loaded cartridge reduces water pressure noticeably before it fails completely. If you notice pressure dropping, check the sediment filter first &mdash; it is the most common and most overlooked maintenance item in a treated well system.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>UV disinfection lamp</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Replace the UV lamp annually regardless of whether it appears to be working. UV lamps degrade gradually over approximately 9,000 hours of operation (roughly one year of continuous use), producing less and less germicidal output before they fail visibly. A lamp that appears illuminated may be producing insufficient UV intensity to disinfect the water. Most UV systems have an annual lamp replacement reminder built into the controller. Do not skip it.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Water softener</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Check the brine tank salt level monthly and refill as needed. The resin bed that softens the water regenerates automatically using salt brine and does not require replacement under normal circumstances, but it does require a salt supply to function. At least once per year, inspect the brine tank for salt bridges (a hardened crust that prevents salt from dissolving properly) and break up any bridging with a broom handle. Every 5 to 10 years, a professional cleaning of the resin bed may be warranted if softening performance declines.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Activated carbon filter</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Replace the carbon block or granular activated carbon media annually. Carbon filters remove chlorine, taste, odor, and some organic compounds by adsorption &mdash; the carbon surface captures contaminants until it is saturated, at which point it stops working without warning. An exhausted carbon filter can also release previously captured contaminants back into the water if flow rates or water chemistry change. Annual replacement is the correct interval for most residential carbon filters regardless of visible condition.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Reverse osmosis membrane</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Replace the RO membrane every 2 to 3 years under normal use. The sediment and carbon pre-filters on an RO system should be replaced every 6 to 12 months. A declining flow rate from the RO faucet or a noticeable change in water taste are the first signs that pre-filters or the membrane are exhausted.</p>
            </div>
          </div>
        </div>

        {/* Monitoring Well Yield Over Time */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Monitoring Well Yield Over Time</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Declining well yield is one of the earliest warning signs of a developing problem &mdash; and one of the least monitored by homeowners because there is no alarm that goes off when yield drops gradually over years.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>The signs of declining yield:</strong></p>
          <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed mb-4'>
            <li>Water pressure that takes noticeably longer to recover after heavy use than it did in previous years</li>
            <li>The pump running for longer periods to achieve the same pressure level</li>
            <li>Low or no water during summer dry periods when the same well produced adequately in previous summers</li>
            <li>A pressure gauge that drops lower than usual during normal household use before the pump activates</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>How to track yield informally:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Note the pump run time and pressure recovery time after a high-demand event &mdash; filling a bathtub, running the dishwasher and clothes washer simultaneously &mdash; at the same season each year. If the same event takes noticeably longer for the system to recover over successive years, yield is declining.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong className='text-slate-900'>When to act:</strong></p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            Yield decline that is catching up to household demand needs professional evaluation before it becomes a no-water situation. Options include hydrofracturing to open fractures in bedrock wells, deepening the well to reach a lower productive zone, or drilling a new well. All are significantly more manageable when addressed proactively rather than as an emergency. See the <a href='/problems/well-running-dry' className='underline' style={{ color: '#1D9E75' }}>well running dry guide</a> for the complete decision framework.
          </p>
        </div>

        {/* What a Professional Well Inspection Covers */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What a Professional Well Inspection Covers</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>
            The NGWA recommends a professional well inspection every 3 to 5 years, or annually for wells older than 15 years. A professional inspection includes components that homeowners cannot assess themselves.
          </p>
          <div className='space-y-4'>
            <div>
              <p className='text-slate-900 text-sm font-bold mb-1'>Flow rate test</p>
              <p className='text-slate-700 text-sm leading-relaxed'>The contractor measures how many gallons per minute the well produces under pumping conditions. This is compared to the original well completion report if available. Declining flow rate identifies yield problems before they become failures.</p>
            </div>
            <div>
              <p className='text-slate-900 text-sm font-bold mb-1'>Pump motor performance check</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Using an amp meter, the contractor measures the motor&apos;s electrical draw and compares it to rated specifications. A motor drawing more amperage than rated is working harder than it should &mdash; typically indicating wear or partial blockage.</p>
            </div>
            <div>
              <p className='text-slate-900 text-sm font-bold mb-1'>Pressure switch inspection</p>
              <p className='text-slate-700 text-sm leading-relaxed'>The contractor checks the switch contacts for corrosion, verifies the cut-in and cut-out pressure settings are correct, and confirms the switch is cycling the pump properly.</p>
            </div>
            <div>
              <p className='text-slate-900 text-sm font-bold mb-1'>Water level measurement</p>
              <p className='text-slate-700 text-sm leading-relaxed'>The contractor measures the static water level and the pumping water level, comparing to historical records. Declining water levels indicate aquifer stress or pump intake issues.</p>
            </div>
            <div>
              <p className='text-slate-900 text-sm font-bold mb-1'>Wellhead and casing inspection</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Visual inspection of casing condition, grouting, cap seal, and surface drainage &mdash; the same items homeowners check annually, but with a professional&apos;s eye for subtle signs of deterioration.</p>
            </div>
            <div>
              <p className='text-slate-900 text-sm font-bold mb-1'>Water quality test</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Most professional inspections include a standard bacteria and nitrates test at minimum. Extended panels are available as add-ons.</p>
            </div>
            <div>
              <p className='text-slate-900 text-sm font-bold mb-1'>Cost</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Professional well inspection typically costs $250 to $500 depending on scope and region. This is not an emergency expense &mdash; budget for it every 3 to 5 years as part of normal homeownership.</p>
            </div>
          </div>
        </div>

        {/* The Maintenance Log */}
        <div className='mb-12 rounded-lg p-6' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Maintenance Log: The Most Underrated Well Ownership Practice</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            A maintenance log is a simple record of every test, inspection, service, and repair performed on the well system. Most homeowners do not keep one. Those who do have a significant advantage in two situations: diagnosing problems and selling the property.
          </p>
          <p className='text-slate-900 text-sm font-bold mb-2'>What to record:</p>
          <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed mb-4'>
            <li>Date of every water test, the lab used, and the results</li>
            <li>Date and results of every professional inspection</li>
            <li>Date and details of any repairs &mdash; what was replaced, who did the work, what it cost</li>
            <li>Date and results of pressure tank pre-charge checks</li>
            <li>Any observed changes in water quality, pressure, or system behavior and when they first appeared</li>
            <li>Treatment equipment service dates and cartridge replacement dates</li>
          </ul>
          <p className='text-slate-900 text-sm font-bold mb-2'>Why it matters for problem diagnosis:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            When a problem develops, a maintenance log lets you say &ldquo;pressure has been declining since last August&rdquo; rather than &ldquo;I think the pressure might be lower than it used to be.&rdquo; Contractors diagnose problems faster and more accurately when the history is documented.
          </p>
          <p className='text-slate-900 text-sm font-bold mb-2'>Why it matters for resale:</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            A well with documented annual water test results showing clean water, documented professional inspections, and a complete service history is a selling point. A well with no maintenance records is a question mark that buyers and their inspectors treat as a liability. The maintenance log is the difference between a buyer feeling confident in the system and a buyer requesting a price reduction.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            A simple notebook or spreadsheet kept near the pressure tank is sufficient. There is no required format.
          </p>
        </div>

        {/* When to Call a Professional Immediately */}
        <div className='mb-12 rounded-lg p-6' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>When to Call a Professional Immediately</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Some signs require professional attention without delay. Do not attempt to diagnose or repair these yourself.
          </p>
          <p className='text-slate-900 text-sm font-bold mb-3'>Call a professional immediately if:</p>
          <div className='space-y-3'>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>No water from any tap &mdash; the pump may have failed or lost prime</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>A sudden spike in the electric bill with no change in usage &mdash; a pump drawing excessive amperage is a sign of motor failure</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>The pump runs continuously without shutting off &mdash; indicates a failed pressure switch, a leak in the system, or a pump unable to build adequate pressure</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>Pump short-cycling (turning on and off every few seconds) and the pressure tank pre-charge check does not resolve it &mdash; a failed diaphragm or serious system issue</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>Water that suddenly changes color, odor, or taste with no recent event to explain it</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>Any electrical burning smell near the pump controls or pressure switch</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>A visible crack in the well casing above grade</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How often should a well pump be serviced?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The submersible pump itself requires professional service every 5 to 7 years for inspection or when it fails and needs replacement. It cannot be serviced at the surface because it sits at the bottom of the well casing. What homeowners maintain annually is the system around the pump: water quality testing, pressure tank pre-charge check, wellhead inspection, and treatment equipment service. A professional well inspection every 3 to 5 years covers the pump motor performance, flow rate, and water level measurements that homeowners cannot assess themselves.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How do I know if my well pump needs maintenance?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The pump itself gives few direct warning signs accessible to homeowners. The system signals to watch for are: the pump short-cycling (turning on and off rapidly), declining water pressure during normal use, the pump running longer than usual to achieve normal pressure, sudden changes in water taste or odor, and a spike in electricity use with no change in household consumption. Annual water testing and the pressure tank pre-charge check are the two proactive maintenance tasks that prevent the most common system failures.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                What is the most important well maintenance task?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Annual water quality testing for bacteria and nitrates. The pump and pressure system will give visible and audible signals when they develop problems. Bacterial contamination in the water gives no signal at all &mdash; it is odorless, colorless, and tasteless and can cause serious illness without any warning. A well that is never tested may have had a contamination problem for years without the owner knowing. The CDC and NGWA both recommend annual testing for private well owners at minimum.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How do I check my well pressure tank?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Shut off the pump at the circuit breaker, open a cold water faucet and let it run until water stops completely, then close the faucet. The tank is now empty. Locate the Schrader valve (looks like a tire valve) on the tank and press a standard tire pressure gauge against it. The reading should be 2 PSI below the cut-in setting of your pressure switch &mdash; typically 28 PSI for a 30/50 system or 38 PSI for a 40/60 system. If water sprays out instead of air, the diaphragm has failed and the tank needs replacement. Add air with a bicycle pump or compressor if the pressure is low.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How long does a well pump last?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>A quality submersible pump from a reputable manufacturer (Grundfos, Franklin, Goulds) typically lasts 10 to 15 years with normal residential use. The lifespan is shortened by short-cycling from a waterlogged or undersized pressure tank, running against a partially blocked intake screen, pumping water with abrasive sediment, and voltage irregularities. A pump that has been short-cycling for years may fail in 5 to 7 years. A pump on a properly maintained system with correct pressure tank sizing and clean water may run 20 years or more.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                What should I do to maintain my well in winter?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>In cold climates, keep all pipes and the pressure tank in heated or well-insulated spaces. In extreme cold (below 0&deg;F), let a small trickle of water run overnight from a cold tap to prevent freezing. Disconnect and drain outdoor hose bibs before the first freeze. Check that the pressure switch and control box are in a heated location or adequately insulated &mdash; pressure switches can freeze and fail to activate the pump in extreme cold. If the property will be vacant over winter, have a professional winterize the system or drain it completely.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How do I keep records of my well maintenance?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Keep a simple notebook or spreadsheet near the pressure tank. Record the date and results of every water test, the date and findings of every professional inspection, the date and details of every repair or replacement, and the date of every pressure tank pre-charge check. Note any changes in water quality, pressure, or system behavior and when they first appeared. This record is invaluable for diagnosing future problems and significantly improves the well&apos;s value perception when selling the property.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                When should I have my well professionally inspected?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The NGWA recommends a professional well inspection every 3 to 5 years for a well that is performing normally, or annually for wells older than 15 years. Also schedule a professional inspection after any event that may have affected the well: flooding, nearby construction, a sudden change in water quality or pressure, or after a positive bacteria test that does not resolve with shock chlorination. A professional inspection covers flow rate testing, pump motor performance, water level measurement, and wellhead condition &mdash; things homeowners cannot assess themselves.</div>
            </details>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-12 border-t border-slate-200 pt-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Static Water Level</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The distance from the ground surface to the water surface in the well when the pump has not been running for an extended period, measured when the aquifer is at its undisturbed natural level. Static water level is measured during professional inspections and compared to previous measurements to track whether the water table is declining over time. A rising static water level over years indicates good aquifer recharge. A declining static water level indicates aquifer stress and is an early warning of potential yield problems.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Pressure Switch</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The electrical component mounted near the pressure tank that controls when the well pump turns on and off. The pressure switch monitors the water pressure in the system and activates the pump when pressure drops to the cut-in setting (typically 30 or 40 PSI) and deactivates it when pressure reaches the cut-out setting (typically 50 or 60 PSI). A failing pressure switch can cause the pump to run continuously, fail to start, or short-cycle. Pressure switches cost $20 to $50 and can be replaced by a homeowner with basic electrical knowledge, though most choose to have a professional handle it due to the 240-volt wiring involved.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Short Cycling</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The condition where the well pump turns on and off every few seconds rather than running for the normal 1 to 2 minutes per cycle. Short cycling is most commonly caused by a waterlogged pressure tank that has lost its air charge and can no longer buffer the pressure change between pump cycles. It can also be caused by an undersized pressure tank, a failed diaphragm, or a pressure switch set with too narrow a differential. Short cycling dramatically accelerates pump motor wear &mdash; a pump rated for 15 years of normal service may fail in 2 to 5 years if short-cycling continuously.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Flow Rate</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The volume of water a well produces per unit of time, typically expressed in gallons per minute (GPM). Residential wells are typically required to produce a minimum of 1 GPM for FHA loan qualification, though most families of four need 5 GPM or more for comfortable daily use. Flow rate is measured during a professional well inspection by pumping the well and monitoring output while recording the water level. Declining flow rate over successive inspections is one of the earliest indicators of a developing well performance problem.</p>
            </div>
          </div>
        </div>

        {/* External Resource */}
        <div className='mb-12 rounded-lg p-5 bg-slate-50 border border-slate-200'>
          <h2 className='text-lg font-bold text-slate-900 mb-2'>External Resource</h2>
          <p className='text-slate-700 text-sm leading-relaxed'>
            The <a href='https://www.ngwa.org' target='_blank' rel='noopener noreferrer' className='font-semibold underline' style={{ color: '#1D9E75' }}>National Ground Water Association (NGWA)</a> maintains a comprehensive well owner resource center including their annual maintenance checklist, guidance on finding a licensed well contractor, and state-by-state well regulation information. The NGWA checklist aligns with the maintenance schedule in this guide and is the industry standard reference for private well maintenance recommendations.
          </p>
        </div>

        {/* Also on Our Network */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Also on Our Network</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Well pump maintenance does not exist in isolation. These guides from our partner sites cover the systems that interact directly with your well.
          </p>
          <div className='space-y-3'>
            <a href='https://www.theseptic.guide/maintenance/septic-system-maintenance-checklist' target='_blank' rel='noopener noreferrer' className='block rounded-lg p-4 bg-white border border-slate-200 hover:shadow-md transition-shadow'>
              <p className='text-sm font-bold text-slate-900 mb-1'>Septic System Maintenance Checklist</p>
              <p className='text-xs text-slate-500 mb-2'>The Septic Guide</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Most properties with a private well also have a septic system. The annual septic maintenance schedule mirrors the well maintenance schedule in structure and pairs naturally with it. Keeping both systems on the same annual service calendar simplifies the work.</p>
            </a>
            <a href='https://www.theseptic.guide/guides/water-softener-septic-systems' target='_blank' rel='noopener noreferrer' className='block rounded-lg p-4 bg-white border border-slate-200 hover:shadow-md transition-shadow'>
              <p className='text-sm font-bold text-slate-900 mb-1'>Water Softeners and Septic Systems</p>
              <p className='text-xs text-slate-500 mb-2'>The Septic Guide</p>
              <p className='text-slate-700 text-sm leading-relaxed'>If your well water is hard and you run a water softener, the brine discharge from the softener affects your septic system. This guide covers what the interaction looks like, what concentrations are problematic, and how to configure your softener to minimize septic impact.</p>
            </a>
            <a href='https://www.thebasement.guide/articles/complete-basement-waterproofing-guide' target='_blank' rel='noopener noreferrer' className='block rounded-lg p-4 bg-white border border-slate-200 hover:shadow-md transition-shadow'>
              <p className='text-sm font-bold text-slate-900 mb-1'>The Complete Basement Waterproofing Guide</p>
              <p className='text-xs text-slate-500 mb-2'>The Basement Guide</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Your pressure tank, pressure switch, and treatment equipment almost certainly live in the basement. Basement water intrusion is the most common cause of pressure switch corrosion and equipment damage. This guide covers what to look for and how to address it before it affects your well system.</p>
            </a>
          </div>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Well Guide</span>
            </Link>
            <Link href='/guides/well-pressure-tank-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pressure Tank Guide</span>
            </Link>
            <Link href='/cost-guides/pressure-tank-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FFF7ED', color: '#854F0B' }}>COST</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Pressure Tank Replacement Cost</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/guides/how-to-shock-chlorinate-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Shock Chlorinate a Well</span>
            </Link>
            <Link href='/problems/well-running-dry' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Running Dry</span>
            </Link>
            <Link href='/guides/buying-house-with-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Buying a House With a Well</span>
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
