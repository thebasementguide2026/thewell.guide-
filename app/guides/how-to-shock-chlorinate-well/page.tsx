import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'How to Shock Chlorinate a Well: Step-by-Step Instructions for Homeowners | The Well Guide',
  description: 'Complete instructions for shock chlorinating a private well after a positive bacteria test, flooding, or well service. Includes the casing volume calculation, correct bleach dose by well diameter and depth, the full 8-step procedure, flushing instructions, safety precautions, and the retest requirement. Sourced from Penn State Extension and university cooperative extension guidance.',
  openGraph: {
    title: 'How to Shock Chlorinate a Well: Step-by-Step Instructions for Homeowners',
    description: 'Complete instructions for shock chlorinating a private well after a positive bacteria test, flooding, or well service.',
    url: 'https://www.thewell.guide/guides/how-to-shock-chlorinate-well',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/how-to-shock-chlorinate-well.jpg', width: 1200, height: 630, alt: 'Well disinfection supplies arranged on a residential lawn next to an open steel well casing with the cap removed, including a 5-gallon bucket with funnel, rubber gloves, and a bleach bottle.' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/how-to-shock-chlorinate-well' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Shock Chlorinate a Well: Step-by-Step Instructions for Homeowners',
  description: 'Complete instructions for shock chlorinating a private well after a positive bacteria test, flooding, or well service, including the casing volume calculation, bleach dose, 8-step procedure, flushing instructions, and retest requirement.',
  image: 'https://www.thewell.guide/how-to-shock-chlorinate-well.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/guides/how-to-shock-chlorinate-well',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do you shock chlorinate a well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shock chlorination involves adding a calculated dose of unscented household bleach to the well, circulating the chlorine through the entire plumbing system, holding for 12 to 24 hours, and then flushing until no chlorine odor remains. The bleach dose is 3 pints per 100 gallons of water in the well plus 3 additional pints for the household plumbing. After flushing, do not drink the water until a follow-up bacteria test 10 to 14 days later confirms the system is clear.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much bleach do I use to shock a well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The dose is 3 pints of standard household bleach (5.25 percent sodium hypochlorite) per 100 gallons of water in the well, plus 3 additional pints for the household plumbing. Multiply the depth of the water column in feet by the gallons-per-foot factor for your casing diameter: 0.65 for a 4-inch casing, 1.47 for a 6-inch casing, 2.61 for an 8-inch casing. For a 6-inch well with 100 feet of water column, that is 147 gallons requiring approximately 7.5 pints total.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do you leave bleach in a well before flushing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The chlorinated water should remain in the system for a minimum of 12 hours and ideally 24 hours. Do not run any water or flush toilets during the hold period. After the hold period, flush outdoor faucets first until the strong chlorine smell dissipates, then flush indoor fixtures until the chlorine odor is gone throughout the house.',
      },
    },
    {
      '@type': 'Question',
      name: 'What kind of bleach do you use to shock a well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Use plain unscented household liquid chlorine bleach with 5.25 to 8.25 percent sodium hypochlorite. Do not use scented bleach, splash-less bleach, or bleach with additives. Do not use pool shock without recalculating the dose for its higher chlorine concentration.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long after shock chlorination can you drink the water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Do not drink the water until a laboratory bacteria test 10 to 14 days after flushing confirms the system is bacteria-free. The waiting period allows all residual chlorine to dissipate so the test accurately reflects the bacterial status of the well. Testing too soon can produce a false negative because residual chlorine may still be suppressing bacteria in the sample.',
      },
    },
    {
      '@type': 'Question',
      name: 'What if the well still tests positive after shock chlorination?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A positive result 10 to 14 days after shock chlorination indicates a structural problem, typically a cracked casing, a failed grout seal, or an improperly sealed wellhead. Shock chlorination cannot correct structural problems. Have a licensed well contractor inspect the casing and wellhead. If structural repair is not feasible, a UV disinfection system or continuous chlorinator is the appropriate long-term solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does shock chlorination kill all bacteria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Shock chlorination at 200 ppm with a 12 to 24-hour contact time kills the vast majority of coliform bacteria, E. coli, and most common waterborne pathogens. It is less effective against some cyst-forming protozoa such as Cryptosporidium and Giardia. It does not address chemical contaminants, nitrates, or minerals.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can shock chlorination damage my water treatment equipment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. High chlorine concentrations can exhaust activated carbon filter media in a single pass, affect UV lamp components, and may damage reverse osmosis membranes. Bypass all water treatment equipment before shock chlorinating. Reconnect only after the system has been fully flushed and chlorine is no longer detectable.',
      },
    },
  ],
}

export default function HowToShockChlorinateWell() {
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
            { label: 'How to Shock Chlorinate a Well' },
          ]}
        />

        {/* Badge + Reading Time */}
        <div className='flex items-center gap-3 mb-4 mt-6'>
          <span className='inline-block px-3 py-1 text-xs font-bold rounded-full' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>Guide</span>
          <span className='text-sm text-slate-500'>14 min read</span>
        </div>

        {/* Title */}
        <h1 className='text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight'>
          How to Shock Chlorinate a Well: Step-by-Step Instructions for Homeowners
        </h1>

        {/* Byline */}
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs' style={{ backgroundColor: '#1D9E75' }}>WG</div>
          <div>
            <p className='text-sm font-semibold text-slate-900'>The Well Guide</p>
            <p className='text-xs text-slate-500'>Updated March 2026 &middot; 14 min read</p>
          </div>
        </div>

        {/* Hero Image */}
        <div className='rounded-xl overflow-hidden mb-8'>
          <Image
            src='/how-to-shock-chlorinate-well.jpg'
            alt='Well disinfection supplies arranged on a residential lawn next to an open steel well casing with the cap removed, including a 5-gallon bucket with funnel, rubber gloves, and a bleach bottle.'
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
            Shock chlorination is the process of adding a concentrated bleach solution to a private well to kill bacteria throughout the entire water system. It is the recommended first response after a positive coliform or E. coli bacteria test, after flooding or surface water intrusion, and after any work is done on the well or pump. The process uses unscented household bleach (5.25 to 8.25 percent sodium hypochlorite) at a dose of 3 pints per 100 gallons of water in the well, circulates the chlorine through the entire plumbing system, holds for 12 to 24 hours, then flushes. A follow-up water test 10 to 14 days after flushing confirms whether the disinfection was successful.
          </p>
        </div>

        {/* When to Shock Chlorinate Your Well */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>When to Shock Chlorinate Your Well</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>
            Shock chlorination is appropriate in three specific scenarios. Understanding which scenario applies to your situation helps you prepare correctly and set realistic expectations for the outcome.
          </p>

          {/* Scenario Cards */}
          <div className='space-y-4'>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Scenario 1: Positive Bacteria Test Result</h3>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                A water test showing the presence of total coliform bacteria or E. coli is the most common reason homeowners shock chlorinate a well. Penn State Extension notes that approximately 35 percent of private wells in Pennsylvania have tested positive for coliform bacteria, and similar rates are documented in other states. Not every positive test indicates a chronic contamination problem. Some positive results occur from surface water entering the well during an unusually heavy rain, from bacteria introduced when a pump is replaced, or from contamination of the sample collection process.
              </p>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Shock chlorination is the appropriate first step for a positive test result. If the follow-up test 10 to 14 days after chlorination is negative, the contamination was likely a one-time event and no further treatment is needed. If the follow-up test is still positive, a structural problem with the well is likely the cause and professional repair is needed before any treatment will be effective long-term.
              </p>
            </div>

            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Scenario 2: Flooding or Surface Water Intrusion</h3>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                Floodwater, surface runoff, or any event that introduces surface water into the well requires shock chlorination before the well is used again. Surface water carries bacteria, viruses, agricultural chemicals, and other contaminants that can directly contaminate the aquifer via the well opening.
              </p>
              <p className='text-slate-700 text-sm leading-relaxed'>
                If the well has been physically submerged or overtaken by floodwater, clean and scrub the wellhead and the inside of the casing above the waterline before shock chlorinating. Shock chlorination alone cannot overcome contamination that has physically coated well components.
              </p>
            </div>

            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Scenario 3: New Well or Post-Service Disinfection</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                Any time a pump is installed or replaced, any time work is done on the well casing, or any time a new well is completed, shock chlorination is standard practice. The drilling equipment, pump components, and tools introduced into the well carry surface bacteria. Disinfecting the well before first use or first use after service ensures the water system starts clean.
              </p>
            </div>
          </div>
        </div>

        {/* What You Need Before You Start */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>What You Need Before You Start</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Gather all supplies before beginning. Once chlorine is added to the well, the process should proceed without interruption.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>Supplies:</strong></p>
          <ul className='list-disc list-inside space-y-2 text-slate-700 text-sm leading-relaxed mb-6'>
            <li>Unscented household liquid chlorine bleach at 5.25 to 8.25 percent sodium hypochlorite concentration. Do not use scented bleach, splash-less bleach, or any bleach with additives. Do not use pool shock (calcium hypochlorite) unless you specifically calculate for its higher chlorine concentration.</li>
            <li>Clean 5-gallon plastic bucket</li>
            <li>Funnel</li>
            <li>Garden hose long enough to reach from an outdoor faucet back to the well opening</li>
            <li>Bottled water for drinking during the 12 to 24-hour hold period</li>
            <li>Safety glasses or goggles, rubber gloves, old clothes you do not mind bleaching</li>
          </ul>
          <p className='text-slate-700 text-sm leading-relaxed mb-2'><strong>What you need to know before calculating:</strong></p>
          <ul className='list-disc list-inside space-y-2 text-slate-700 text-sm leading-relaxed'>
            <li>Your well&apos;s total depth in feet</li>
            <li>Your well casing diameter in inches (most residential drilled wells are 4 to 6 inches)</li>
            <li>Your static water level in feet. If unknown, use the total well depth.</li>
          </ul>
        </div>

        {/* Step 1 */}
        <div className='mb-8 rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #1D9E75' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#1D9E75' }}>1</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Calculate Your Well&apos;s Water Volume</h2>
            </div>

            <div className='rounded-lg p-5 mb-6' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
              <p className='text-slate-700 text-sm leading-relaxed mb-4'>
                This is the step most homeowners skip and most problems trace back to. Using too little bleach leaves bacteria alive. Using excessive bleach creates unnecessary flushing work and can corrode seals and components.
              </p>

              <p className='text-slate-900 text-sm font-bold mb-3'>The Casing Volume Formula:</p>
              <p className='text-slate-900 text-sm font-bold mb-4 font-mono bg-white rounded p-3 border border-slate-200'>
                Gallons of water in the well = Depth of water column (feet) &times; gallons per foot for your casing diameter
              </p>
              <p className='text-slate-700 text-sm leading-relaxed mb-4'>
                Depth of water column = Total well depth minus static water level.
              </p>

              <p className='text-slate-900 text-sm font-bold mb-3'>Gallons Per Foot by Casing Diameter:</p>
              <div className='overflow-x-auto mb-4'>
                <table className='w-full text-sm border-collapse'>
                  <thead>
                    <tr style={{ backgroundColor: '#0D3D30' }}>
                      <th className='text-left p-3 font-bold text-white border border-slate-300'>Casing Diameter</th>
                      <th className='text-left p-3 font-bold text-white border border-slate-300'>Gallons Per Foot of Water</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='p-3 border border-slate-200 text-slate-700'>4 inches</td>
                      <td className='p-3 border border-slate-200 text-slate-700'>0.65 gallons/ft</td>
                    </tr>
                    <tr>
                      <td className='p-3 border border-slate-200 text-slate-700'>5 inches</td>
                      <td className='p-3 border border-slate-200 text-slate-700'>1.02 gallons/ft</td>
                    </tr>
                    <tr style={{ backgroundColor: '#E1F5EE' }}>
                      <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>6 inches</td>
                      <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>1.47 gallons/ft</td>
                    </tr>
                    <tr>
                      <td className='p-3 border border-slate-200 text-slate-700'>8 inches</td>
                      <td className='p-3 border border-slate-200 text-slate-700'>2.61 gallons/ft</td>
                    </tr>
                    <tr>
                      <td className='p-3 border border-slate-200 text-slate-700'>10 inches</td>
                      <td className='p-3 border border-slate-200 text-slate-700'>4.08 gallons/ft</td>
                    </tr>
                    <tr>
                      <td className='p-3 border border-slate-200 text-slate-700'>12 inches</td>
                      <td className='p-3 border border-slate-200 text-slate-700'>5.88 gallons/ft</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className='text-slate-900 text-sm font-bold mb-2'>Worked example:</p>
              <div className='bg-white rounded p-4 border border-slate-200 mb-4 ml-4'>
                <p className='text-slate-700 text-sm leading-relaxed mb-2'>A 6-inch diameter well, 150 feet total depth, static water level at 50 feet.</p>
                <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm'>
                  <li>Depth of water column: 150 minus 50 = 100 feet</li>
                  <li>Gallons in well: 100 feet &times; 1.47 gallons/ft = 147 gallons</li>
                  <li>Bleach dose: (147 / 100) &times; 3 pints = 4.4 pints for the well, plus 3 pints for plumbing = 7.4 pints total. Round up to 8 pints.</li>
                </ul>
              </div>

              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                <strong>If static water level is unknown:</strong> Use the total well depth. This slightly overestimates the volume and results in a slightly higher bleach dose, which is the safer direction to err.
              </p>
              <p className='text-slate-700 text-sm leading-relaxed mb-3'>
                <strong>If using 8.25 percent bleach</strong> (higher concentration bleach now common): Reduce the dose by approximately 35 percent compared to the 5.25 percent calculation.
              </p>
              <p className='text-slate-700 text-sm leading-relaxed'>
                <strong>Dug wells:</strong> Dug wells have much larger diameters (24 to 48 inches or more) and contain substantially more water. A 36-inch dug well at 20 feet of water depth holds approximately 880 gallons. Calculate carefully using the formula above.
              </p>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className='mb-8 rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #1D9E75' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#1D9E75' }}>2</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Prepare the Wellhead</h2>
            </div>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Turn off the circuit breaker to the well pump before removing the well cap. Never remove a well cap with the pump running.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Remove the well cap or cover. Inspect the inside of the casing above the waterline for debris, sediment, or signs of damage. Remove visible debris with a clean tool or cloth.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              If the well has recently been flooded or exposed to surface water, scrub the accessible interior surfaces of the casing above the waterline with a strong chlorine solution (half a gallon of bleach per 5 gallons of clean water) before proceeding with the main dose. This physical cleaning step removes biofilm and sediment that chlorine in the water alone cannot reach.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed'>
              Inspect the wellhead condition. If the well cap is cracked or does not seal properly, replace it before or immediately after the chlorination process.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className='mb-8 rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #1D9E75' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#1D9E75' }}>3</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Mix and Add the Chlorine Solution</h2>
            </div>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Fill the 5-gallon bucket approximately three-quarters full with clean water. Add the calculated amount of bleach to the bucket of water. Always add bleach to water, not water to bleach. Stir gently to mix.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Using the funnel, slowly pour the bleach solution into the well casing. If your calculated bleach dose exceeds 5 gallons, pour the bleach directly into the well without pre-mixing. Restore power to the pump by turning the circuit breaker back on.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed'>
              <strong>Safety during this step:</strong> Work upwind from the well opening. Do not lean directly over the well casing while pouring. If you feel eye or throat irritation, move away from the well immediately and flush with the clean water you set aside for emergencies.
            </p>
          </div>
        </div>

        {/* Step 4 */}
        <div className='mb-8 rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #1D9E75' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#1D9E75' }}>4</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Circulate the Chlorine Throughout the System</h2>
            </div>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Connect a clean garden hose to the outdoor faucet nearest the well. Place the end of the hose back into the well opening. Turn on the outdoor faucet and let the water recirculate back into the well for 15 to 30 minutes, or until you can clearly smell chlorine in the water coming out of the hose.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              After the recirculation, go through the house and open each faucet individually, starting with outdoor faucets then working inside. Run each faucet until you smell chlorine, then close it. Do both hot and cold taps at every fixture. Flush each toilet once. Run the dishwasher and clothes washer through one cycle.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              If you cannot detect chlorine at any fixture, add an additional 3 pints of bleach to the well and repeat the recirculation step.
            </p>

            {/* Bypass callout */}
            <div className='rounded-lg p-4' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
              <p className='text-sm font-bold text-slate-900 mb-2'>Important: Bypass Your Treatment Equipment</p>
              <p className='text-slate-700 text-sm leading-relaxed'>
                If your water system includes a reverse osmosis unit, activated carbon filter, or UV system, bypass or disconnect these before the chlorination process. High chlorine concentrations can exhaust carbon filter media in a single pass and can damage UV lamp components. Reactivate treatment equipment only after the system has been fully flushed and chlorine is no longer detectable.
              </p>
            </div>
          </div>
        </div>

        {/* Step 5 - Amber background */}
        <div className='mb-8 rounded-lg overflow-hidden' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#854F0B' }}>5</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Hold for 12 to 24 Hours</h2>
            </div>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Replace the well cap securely. Turn off the pump circuit breaker. Allow the chlorinated water to stand in the entire system for a minimum of 12 hours. A 24-hour hold is preferred and recommended by the University of Georgia Extension and Virginia Tech Cooperative Extension as more reliably effective.
            </p>
            <p className='text-slate-900 text-sm leading-relaxed font-bold'>
              Do not use any water from the well system during the hold period. Do not flush toilets. Use bottled water for drinking, cooking, and brushing teeth.
            </p>
          </div>
        </div>

        {/* Step 6 */}
        <div className='mb-8 rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #1D9E75' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#1D9E75' }}>6</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Flush the System</h2>
            </div>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              After the hold period, restore power to the pump by turning on the circuit breaker.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Start flushing from outdoor faucets. Connect a hose to an outdoor faucet and run the water onto the lawn or a gravel area well away from the septic system, any wells, streams, or storm drains. The University of Georgia Extension recommends not running more than 100 gallons of heavily chlorinated water into a septic system during flushing, as excess chlorine can disrupt septic bacteria.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Run each outdoor faucet until you can no longer detect a strong chlorine smell, then move to indoor faucets. Run indoor faucets one at a time, both hot and cold at each fixture, until the chlorine smell is gone and the water runs clear. Flush each toilet. Run the clothes washer and dishwasher through empty cycles.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed'>
              The flush is complete when you can no longer detect chlorine odor at any indoor faucet and the water runs clear. For a typical 150-foot drilled well serving a 3-bedroom home, flushing takes 1 to 3 hours and uses 300 to 600 gallons of water.
            </p>
          </div>
        </div>

        {/* Step 7 - Red/safety background */}
        <div className='mb-8 rounded-lg overflow-hidden' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>7</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Do Not Drink the Water Until Tested</h2>
            </div>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              After flushing, the water may be visually clear and free of chlorine odor. This does not mean it is safe to drink. Continue using bottled water for drinking, cooking, and brushing teeth until a laboratory water test confirms the bacteria are gone.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>
              Wait 10 to 14 days after completing the flush before collecting a water sample for testing. This waiting period allows any residual chlorine to dissipate completely so the test accurately reflects the bacterial status of the well. Testing immediately after flushing can produce a false negative because residual chlorine may still be killing bacteria in the sample.
            </p>
            <p className='text-slate-700 text-sm leading-relaxed'>
              See the <Link href='/guides/how-to-test-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>how to test your well water guide</Link> for the complete sampling procedure.
            </p>
          </div>
        </div>

        {/* Step 8 */}
        <div className='mb-12 rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #1D9E75' }}>
          <div className='p-5'>
            <div className='flex items-start gap-4 mb-4'>
              <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#1D9E75' }}>8</span>
              <h2 className='text-2xl font-bold text-slate-900 pt-1'>Retest and Evaluate the Results</h2>
            </div>

            {/* Side-by-side outcome cards */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='rounded-lg p-4 bg-white' style={{ border: '2px solid #1D9E75' }}>
                <p className='text-sm font-bold text-slate-900 mb-2' style={{ color: '#1D9E75' }}>If the retest is negative (no bacteria detected):</p>
                <p className='text-slate-700 text-sm leading-relaxed'>
                  The shock chlorination was successful. Penn State Extension recommends retesting again 2 to 3 months later to confirm the well remains bacteria-free.
                </p>
              </div>
              <div className='rounded-lg p-4 bg-white' style={{ border: '2px solid #854F0B' }}>
                <p className='text-sm font-bold mb-2' style={{ color: '#854F0B' }}>If the retest is still positive:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>
                  The shock chlorination did not resolve the contamination. This typically means the well casing has a crack or gap allowing surface water to continuously re-enter the well, the grout seal is inadequate, or the wellhead is not properly sealed. A licensed well contractor should inspect the casing condition and wellhead. Repeated shock chlorination without addressing the structural cause will not produce a lasting result. A continuous disinfection system such as a UV unit or chlorinator may be the appropriate long-term solution. See the <Link href='/guides/well-water-treatment-options' className='font-semibold underline' style={{ color: '#1D9E75' }}>well water treatment options guide</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shock Chlorination vs. Continuous Chlorination */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Shock Chlorination vs. Continuous Chlorination</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>
            Shock chlorination and continuous chlorination are two different approaches to bacterial contamination in well water.
          </p>

          <div className='space-y-4'>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Shock chlorination</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                A one-time, high-dose treatment intended to disinfect a well system contaminated by a specific event. It is not a treatment system and does not prevent future contamination. Its purpose is to return a contaminated well to a bacteria-free baseline.
              </p>
            </div>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Continuous chlorination</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                An ongoing treatment system in which a chemical feed pump doses the water supply with a low concentration of chlorine continuously. It is appropriate for wells with a chronic, recurring bacteria problem that cannot be resolved through structural repair alone.
              </p>
            </div>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>UV disinfection</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>
                The alternative to continuous chlorination for wells with recurring bacteria problems. A UV system destroys bacteria without adding any chemicals. It requires no chemical feed and adds nothing to the water. Its limitation is that it treats the water after it leaves the well but does not disinfect the well itself.
              </p>
            </div>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed mt-4'>
            See the <Link href='/guides/well-water-treatment-options' className='font-semibold underline' style={{ color: '#1D9E75' }}>well water treatment options guide</Link> for a complete comparison of continuous disinfection options.
          </p>
        </div>

        {/* Safety Precautions - Red background */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Safety Precautions</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            Household bleach at the concentrations used for shock chlorination can cause serious eye and skin injury.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            <strong>Before you begin:</strong> Fill a 5-gallon bucket with clean water and set it near the work area. If bleach contacts your eyes or skin, flush immediately with large amounts of water for 10 to 15 minutes. Seek medical attention after eye exposure.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            <strong>Personal protective equipment:</strong> Wear safety glasses or goggles, rubber gloves, and old clothing. Rubber boots are recommended for dug wells where splash risk is higher.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>
            <strong>Ventilation:</strong> Work upwind from the well opening when pouring. Never work over a confined well pit with poor ventilation.
          </p>
          <p className='text-slate-900 text-base font-black leading-relaxed mb-4 py-2'>
            Never mix bleach with other chemicals. Combining bleach with ammonia (found in many cleaners), acids, or other household chemicals produces toxic chlorine gas.
          </p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            <strong>Chlorine and the environment:</strong> Do not flush heavily chlorinated water into storm drains, ditches, or waterways. Direct initial flush water onto a gravel or lawn area well away from any surface water body.
          </p>
        </div>

        {/* FAQ Section */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do you shock chlorinate a well?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Shock chlorination involves adding a calculated dose of unscented household bleach to the well, circulating the chlorine through the entire plumbing system, holding for 12 to 24 hours, and then flushing until no chlorine odor remains. The bleach dose is 3 pints per 100 gallons of water in the well plus 3 additional pints for the household plumbing. After flushing, do not drink the water until a follow-up bacteria test 10 to 14 days later confirms the system is clear.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much bleach do I use to shock a well?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The dose is 3 pints of standard household bleach (5.25 percent sodium hypochlorite) per 100 gallons of water in the well, plus 3 additional pints for the household plumbing. To find the gallons in your well, multiply the depth of the water column in feet by the gallons-per-foot factor for your casing diameter: 0.65 for a 4-inch casing, 1.47 for a 6-inch casing, 2.61 for an 8-inch casing. For a 6-inch well with 100 feet of water column, that is 147 gallons requiring approximately 7.5 pints total.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long do you leave bleach in a well before flushing?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The chlorinated water should remain in the system for a minimum of 12 hours and ideally 24 hours. Do not run any water or flush toilets during the hold period. After the hold period, flush the system by running outdoor faucets first until the strong chlorine smell dissipates, then flush indoor fixtures until the chlorine odor is gone throughout the house.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What kind of bleach do you use to shock a well?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Use plain unscented household liquid chlorine bleach with 5.25 to 8.25 percent sodium hypochlorite. Do not use scented bleach, splash-less bleach, or bleach with additives. Do not use pool shock without recalculating the dose for its higher chlorine concentration.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long after shock chlorination can you drink the water?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Do not drink the water until a laboratory bacteria test 10 to 14 days after flushing confirms the system is bacteria-free. The waiting period allows all residual chlorine to dissipate so the test accurately reflects the bacterial status of the well. Testing too soon can produce a false negative because residual chlorine may still be suppressing bacteria in the sample.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What if the well still tests positive after shock chlorination?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A positive result 10 to 14 days after shock chlorination indicates a structural problem with the well, typically a cracked casing, a failed grout seal, or an improperly sealed wellhead allowing surface water to continuously re-enter. Shock chlorination cannot correct structural problems. Have a licensed well contractor inspect the casing and wellhead. If structural repair is not feasible, a UV disinfection system or continuous chlorinator is the appropriate long-term solution.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Does shock chlorination kill all bacteria?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Shock chlorination at 200 ppm with a 12 to 24-hour contact time kills the vast majority of coliform bacteria, E. coli, and most common waterborne pathogens. It is less effective against some cyst-forming protozoa such as Cryptosporidium and Giardia. It does not address chemical contaminants, nitrates, or minerals. If the water test showed other contaminants in addition to bacteria, address those separately.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can shock chlorination damage my water treatment equipment?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Yes. High chlorine concentrations can exhaust activated carbon filter media in a single pass, affect UV lamp components, and may damage reverse osmosis membranes. Bypass all water treatment equipment before shock chlorinating. Reconnect treatment equipment only after the system has been fully flushed and chlorine is no longer detectable.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Total Coliform Bacteria</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A group of bacteria used as an indicator of water quality in private wells and public water systems. The presence of total coliform in a water sample indicates the water may have been contaminated by surface water or animal waste and that more dangerous pathogens may also be present. Total coliform is measured as present or absent rather than by concentration. A positive result triggers the recommendation for shock chlorination as the first response.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>E. coli (Escherichia coli)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A specific type of coliform bacteria whose presence in a water sample indicates direct fecal contamination from human waste, animal waste, or septic system failure. E. coli is a more serious finding than total coliform alone because it specifically indicates a fecal contamination pathway. A positive E. coli result requires immediate cessation of drinking the water, shock chlorination, and investigation of the contamination source.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Static Water Level</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The distance from the ground surface to the water surface in a well when the pump has not been running for an extended period and the aquifer has fully recovered to its natural pressure level. Static water level is used in calculating the depth of the water column in a well, which determines how many gallons of water the well contains and therefore how much bleach is needed for shock chlorination.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 mb-1'>Sodium Hypochlorite</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The active ingredient in household liquid chlorine bleach. Standard household bleach contains 5.25 to 8.25 percent sodium hypochlorite by weight. When added to water, sodium hypochlorite releases hypochlorous acid, which is the primary disinfecting agent in chlorine-based disinfection. The concentration of sodium hypochlorite in the bleach product determines how much volume is needed to achieve the target chlorine dose in the well.</p>
            </div>
          </div>
        </div>

        {/* External Resource */}
        <div className='mb-12 rounded-lg p-5 bg-slate-50 border border-slate-200'>
          <h2 className='text-lg font-bold text-slate-900 mb-2'>External Resource</h2>
          <p className='text-slate-700 text-sm leading-relaxed'>
            <a href='https://extension.psu.edu/shock-chlorination-of-wells-and-springs' target='_blank' rel='noopener noreferrer' className='font-semibold underline' style={{ color: '#1D9E75' }}>Penn State Extension&apos;s Shock Chlorination of Wells and Springs</a> guidance is the most comprehensive and well-cited university extension resource for private well owners on this topic. It covers the complete procedure, the bleach calculation by well type, the retest requirements, and the decision framework for when shock chlorination is appropriate versus when a continuous disinfection system is needed.
          </p>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/guides/well-water-treatment-options' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Treatment Options</span>
            </Link>
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Well Guide</span>
            </Link>
            <Link href='/guides/buying-house-with-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Buying a House With a Well</span>
            </Link>
            <Link href='/problems/well-running-dry' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Running Dry</span>
            </Link>
            <Link href='/reviews/best-whole-house-water-filters' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Whole House Water Filters</span>
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
