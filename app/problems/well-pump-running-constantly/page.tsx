import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Pump Running Constantly: 6 Causes and How to Diagnose Each One | The Well Guide',
  description: 'A well pump that won\'t shut off is an emergency. Continuous operation overheats the motor and can destroy a $2,000 pump within hours. This guide shows you how to diagnose every cause in order of likelihood and what to do right now to protect the pump while you fix the problem.',
  openGraph: {
    title: 'Well Pump Running Constantly: 6 Causes and How to Diagnose Each One',
    description: 'A well pump that won\'t shut off is an emergency. This guide shows you how to diagnose every cause in order of likelihood and what to do right now to protect the pump.',
    url: 'https://well.guide/problems/well-pump-running-constantly',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://well.guide/constantlyrunning.jpg', width: 1200, height: 630, alt: 'A well pump system with pressure gauge showing continuous operation' }],
  },
  alternates: { canonical: 'https://well.guide/problems/well-pump-running-constantly' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my well pump running constantly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well pump runs continuously because it cannot reach the cut-off pressure that signals it to stop. Six causes prevent this: a water leak in the system (most common), a pressure switch stuck in the on position, a waterlogged pressure tank with a failed bladder, a failed check valve letting water drain back into the well, the well running dry, or a worn pump that can no longer produce full pressure output. Start with the leak check - close the house supply valve and see if the pump shuts off. If it does, the leak is inside the house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it bad for a well pump to run constantly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, continuous operation is a serious problem. Submersible pump motors rely on water flowing past the housing for cooling. Most residential pumps are designed for intermittent cycles, not continuous operation. Running for more than 20 to 30 minutes generates concerning heat. Running for hours causes significant motor degradation and can lead to failure within days to weeks. Turn the pump off between uses while you diagnose the cause.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I stop my well pump from running constantly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'First, turn the pump off at the breaker to protect it. Then use the leak isolation test: close the shutoff valve between the pressure tank and the house, let the pump run briefly. If it shuts off, fix the indoor leak (running toilet is most likely). If it still runs, check the pressure switch contacts for burning, and the pressure tank Schrader valve for water coming out (bladder failure). If both are fine, you likely have a check valve failure or underground supply line leak requiring a contractor.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a leaking toilet cause a well pump to run constantly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A toilet flapper that does not seal properly allows water to continuously trickle from the tank to the bowl, bleeding pressure from the system and triggering the pump repeatedly. Test by adding food coloring to the toilet tank - if color appears in the bowl without flushing, the flapper is leaking. Toilet flapper replacement costs $5 to $15 and takes five minutes.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long can a well pump run before it gets damaged?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential submersible pumps can sustain 20 to 30 minutes of continuous operation without immediate damage. Running beyond an hour generates heat that accelerates motor wear and insulation degradation. A pump running continuously for hours is at serious risk of failure. If you discover your pump has been running continuously for an extended period, turn it off and have a contractor evaluate pump condition before resuming normal use.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean when a well pump runs every few minutes?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pump that cycles every few minutes is most likely experiencing pressure tank bladder failure. When the bladder tears, the tank cannot store pressure. Every small amount of water used drops pressure instantly to cut-in, starting the pump. This rapid short cycling destroys pump motors through repeated start-up stress. Confirm by pressing the Schrader valve on top of the pressure tank with the pump off. Water coming out means the bladder has failed and the tank needs replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well pump run when no water is being used?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A pump that runs with all fixtures off means water is leaving the system through a leak or backflow. Common causes: a running toilet, a leaking outdoor hose bib, a failed check valve allowing water to drain into the well, a cracked underground supply line, or water treatment equipment in an active cycle. The leak isolation test confirms whether the loss is inside the house or outside: close the house supply valve and see if the pump shuts off.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pressure drop test for a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'After the pump shuts off, watch the pressure gauge with all fixtures closed. If pressure drops to cut-in within 5 to 15 seconds, the check valve has likely failed. If pressure drops within 1 to 5 minutes, suspect an underground supply line leak. If pressure drops within 5 to 30 minutes, look for a slow indoor leak or water treatment equipment cycling. If pressure holds for hours, the pump and system are healthy and the problem is likely the pressure switch not opening.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Pump Running Constantly: 6 Causes and How to Diagnose Each One',
  description: 'A well pump that won\'t shut off is an emergency. Continuous operation overheats the motor. This guide diagnoses every cause in order of likelihood with specific tests for each.',
  image: 'https://well.guide/constantlyrunning.jpg',
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
  mainEntityOfPage: 'https://well.guide/problems/well-pump-running-constantly',
}

export default function WellPumpRunningConstantly() {
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
          src='/constantlyrunning.jpg'
          alt='A well pump system with pressure gauge showing continuous operation'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0D3D30] via-[#0D3D30]/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#A32D2D' }}>Problem</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Well Pump Running<br />
            <span style={{ color: '#5DCAA5' }}>Constantly:<br />6 Causes &amp; Fixes</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Turn it off at the breaker right now. Then use this guide to find which of the six causes applies to your system.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated Mar 2026 &middot; 13 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Problems', href: '/problems' },
        { label: 'Well Pump Running Constantly' }
      ]} />

      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* TL;DR */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed'>
            If your well pump is running continuously right now, turn it off at the breaker. A residential submersible pump is designed for short cycles &mdash; typically 1 to 2 minutes on, then off. Running nonstop for more than 20 to 30 minutes generates heat faster than the motor can dissipate it. A pump running for hours can fail within days. Turn it off, fill a few containers for immediate use, then diagnose. The six causes of a pump that will not shut off are: a water leak somewhere in the system (by far the most common), a pressure switch stuck in the on position, a waterlogged pressure tank, a failed check valve, the well running dry, or a worn pump that cannot reach cut-off pressure. The fastest first test: close the shutoff valve between the pressure tank and the house. If the pump shuts off, the problem is a leak inside your house &mdash; check the toilets first. If it still runs, the problem is between the tank and the bottom of the well.
          </p>
        </div>

        <p className='text-slate-700 leading-relaxed mb-8'>
          A well pump that runs all the time is not just an annoyance and not just a high electric bill. It is a mechanical system operating outside its design parameters, building heat faster than the water flowing past the motor can remove it, wearing bearings and seals at an accelerated rate, and heading toward a failure that will cost $400 to $2,500 to fix. The urgency here is real. The fastest path to protecting the pump is identifying which of the six causes applies to your system, because the fix is completely different for each one.
        </p>

        {/* Continuous vs Rapid Cycling */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Continuous vs Rapid Cycling: Two Different Problems</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Before diagnosing, confirm which problem you actually have. They look similar from a distance but have different causes and different fixes.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Continuous running:</strong> The pump turns on and stays on indefinitely. You can hear it humming for 10, 20, 30 minutes or more without shutting off. The pressure gauge either climbs very slowly and never reaches cut-off, or reads at a low pressure and stays there. This is the subject of this article.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Rapid short cycling:</strong> The pump turns on for a few seconds, shuts off, turns on again within seconds or minutes, and repeats this cycle rapidly. You hear quick on-off cycles rather than sustained running. This almost always means the pressure tank bladder has failed. See <Link href='/problems/well-pump-short-cycling' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump short cycling</Link> for that diagnosis.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Why the distinction matters:</strong> The most common treatment given for both problems is &ldquo;check the pressure tank.&rdquo; That advice is correct for short cycling. For continuous running, a waterlogged pressure tank is a possible cause but far from the only one, and often not the most likely one. Spending money on a new pressure tank when the real problem is a toilet flapper or a failed check valve wastes time and hundreds of dollars.
          </p>

          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>The pressure gauge is your first diagnostic tool.</strong> Watch it while the pump runs.
          </p>
          <ul className='space-y-3 mb-6'>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              <strong>If pressure climbs steadily but never reaches cut-off (50 or 60 PSI):</strong> water is leaving the system faster than the pump can add it. This means a leak or a failed check valve. Go to Cause 1 and Cause 3.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              <strong>If pressure climbs partway and stalls at a low reading (under 30 PSI):</strong> the pump cannot produce full output. This means pump wear, low water table, or air in the system. Go to Cause 5 and Cause 6.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              <strong>If pressure stays at or near zero despite the pump running:</strong> severe pump failure, no water in the well, or a broken drop pipe. See the <Link href='/problems/no-water-from-well' className='font-semibold underline' style={{ color: '#1D9E75' }}>no water from well</Link> article.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              <strong>If pressure is already at or above cut-off but the pump still runs:</strong> the pressure switch contacts are stuck closed. Go to Cause 2.
            </li>
          </ul>
        </div>

        {/* All Causes at a Glance Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Overview</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>All Causes at a Glance</h2>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-4 font-bold text-slate-900'>Cause</th>
                  <th className='text-left p-4 font-bold text-slate-900'>What the Pressure Gauge Shows</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Key Symptom</th>
                  <th className='text-left p-4 font-bold text-slate-900'>DIY Fix?</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Water leak in the system</td>
                  <td className='p-4 text-slate-700'>Climbs slowly or stalls, never reaches cut-off</td>
                  <td className='p-4 text-slate-700'>Pump runs even when all fixtures are off</td>
                  <td className='p-4'><span className='text-green-700 font-semibold'>Yes &mdash; check plumbing first</span></td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Stuck or failed pressure switch</td>
                  <td className='p-4 text-slate-700'>Already at or above cut-off; pump still runs</td>
                  <td className='p-4 text-slate-700'>Contacts welded closed or insect-blocked</td>
                  <td className='p-4'><span className='text-green-700 font-semibold'>Yes &mdash; $25 replacement</span></td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Waterlogged pressure tank</td>
                  <td className='p-4 text-slate-700'>Rapid short cycling alongside continuous run</td>
                  <td className='p-4 text-slate-700'>Water from Schrader valve, tank feels fully solid</td>
                  <td className='p-4'><span className='text-red-700 font-semibold'>No &mdash; tank replacement</span></td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Failed check valve</td>
                  <td className='p-4 text-slate-700'>Pressure drops within seconds of pump stopping</td>
                  <td className='p-4 text-slate-700'>Cycling resumes quickly after each shutdown</td>
                  <td className='p-4'><span className='text-red-700 font-semibold'>No &mdash; pull pump required</span></td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Well running dry or low yield</td>
                  <td className='p-4 text-slate-700'>Pressure stalls under 20 PSI, sputtering water</td>
                  <td className='p-4 text-slate-700'>Air in water, pump cavitating sound</td>
                  <td className='p-4'><span className='text-amber-700 font-semibold'>Partial &mdash; turn off and wait</span></td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Worn pump or pump undersized</td>
                  <td className='p-4 text-slate-700'>Pressure climbs slowly, barely reaches cut-off</td>
                  <td className='p-4 text-slate-700'>Problem worse at peak demand times</td>
                  <td className='p-4'><span className='text-red-700 font-semibold'>No &mdash; contractor required</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The Single Most Important Thing */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Urgent</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Single Most Important Thing to Do Right Now</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            If your pump has been running continuously for more than 30 minutes and you do not yet know why: <strong>turn it off at the breaker.</strong>
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Do not leave a continuously running pump operating while you research and diagnose at leisure. Residential submersible pumps are designed for intermittent duty. Most can sustain 20 to 30 minutes of continuous running before generating problematic heat. After that, motor windings begin to degrade. A pump that has been running for hours may still be running, but its service life has been shortened significantly.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Turn the pump off. Fill some containers with water for immediate household needs. Then work through the diagnosis below and turn the pump back on only for brief periods to test your findings.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            The exception: if you suspect the well is running dry, turn the pump off and leave it off for 1 to 2 hours before testing. See Cause 5.
          </p>
        </div>

        {/* Cause 1: Water Leak */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 1</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>A Water Leak Somewhere in the System</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>This is the most common cause of a pump that runs continuously.</strong>
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A pump shuts off when system pressure reaches the cut-off setpoint (50 or 60 PSI). Any leak &mdash; anywhere from the pressure tank to the faucets &mdash; bleeds pressure from the system faster than the pump can build it. The pressure never reaches cut-off, so the pump never shuts off.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            The maddening thing about leak-caused continuous running is that the leak does not have to be dramatic. A toilet flapper leaking a few ounces per minute is enough to keep a pump running. A slow drip from a garden hose connection, a reverse osmosis system in regeneration mode, or a backwashing iron filter in its flush cycle can all produce the same result.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>The Leak Isolation Test</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            This is the most valuable diagnostic test for a continuously running pump and it costs nothing.
          </p>
          <div className='space-y-4 mb-6'>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Step 1:</strong> Close the shutoff valve between the pressure tank and the house supply. This valve is typically located just after the pressure tank on the supply side. Turn it clockwise until it stops. You have now isolated the well system (pump, tank, and underground supply line) from the house plumbing.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Step 2:</strong> With the pump on, let it build pressure until it shuts off. If it shuts off, the leak is inside the house. Open the valve, check every fixture, listen for running toilets, check the water softener, check the reverse osmosis system.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Step 3:</strong> If the pump still runs continuously even with the house supply valve closed, the leak is between the pressure tank and the bottom of the well. This means a failed check valve, a leaking drop pipe, or a compromised pitless adapter fitting.
              </p>
            </div>
          </div>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Where Indoor Leaks Hide</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Running toilets</strong> are the single most common cause. A toilet flapper that does not seal completely allows water to constantly drain from the tank to the bowl. You can hear this as a faint hissing from inside the toilet tank. The dye test confirms it: add food coloring to the toilet tank (not the bowl). If color appears in the bowl within 15 minutes without flushing, the flapper is leaking. New toilet flapper: $5 to $15, five-minute replacement.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Faucet drips.</strong> A single slowly dripping faucet may not trigger the pump visibly, but multiple slow drips across the house add up.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Garden hoses</strong> left connected and dripping. An outdoor hose bib with a slow leak is often overlooked because it is out of sight.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Water treatment equipment.</strong> Reverse osmosis systems require a small continuous flow during the purification process. Iron filters and water softeners go through backwash cycles that use significant water. If the pump runs during the night when no one is using water, a water treatment system on an automated cycle is a strong suspect.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Irrigation systems.</strong> A stuck-open irrigation zone valve leaks continuously even when the controller is not calling for water.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Where Underground Leaks Hide</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            If the leak isolation test above confirms the leak is outside the house, the possible locations are limited. The underground supply line running from the well to the house is the most common location for external leaks. Wet or unusually green grass along the path between the wellhead and the house entry point is the best surface indicator of an underground pipe leak.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A leak in the underground supply line typically causes a slower pressure drop than a failed check valve. The pump may run for 5 to 15 minutes before cycling again rather than every few seconds.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>DIY fix for indoor leaks:</strong> Fix running toilets and dripping fixtures yourself. These are straightforward and inexpensive.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Professional help needed for:</strong> Underground supply line leaks. Locating and accessing a buried pipe requires excavation. A well contractor or plumber with leak detection equipment should handle this.
          </p>
        </div>

        {/* Cause 2: Stuck Pressure Switch */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 2</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Stuck or Failed Pressure Switch</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>This is the only cause where the pump runs even though system pressure is already at or above the cut-off setpoint.</strong>
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The pressure switch is supposed to open its electrical contacts when pressure reaches cut-off (50 or 60 PSI) and stop the pump. When the contacts fail in the closed (on) position, the pump runs regardless of pressure. You will see the pressure gauge reading normal or even elevated pressure, but the pump keeps running.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How contact failure happens:</strong> The electrical contacts inside the pressure switch pit and corrode from years of making and breaking the circuit. Eventually they can weld together in the closed position from electrical arcing. A switch that has been in service for 5 to 10 years is a reasonable suspect. Ants are the other common cause &mdash; they colonize the warm interior of the switch and can bridge the contacts, holding them closed mechanically.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to confirm a stuck switch:</strong> Turn off the pump at the breaker. Open the pressure switch cover (one nut on top). With a non-contact voltage tester confirming power is dead, look at the contacts. If they are visibly burned, melted, or stuck together, the switch has failed. Also look for insects.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A simple functional test with power on and proper caution: watch the pressure gauge as the pump runs. If pressure reaches or exceeds the cut-off setting (50 or 60 PSI on most systems) but the pump does not shut off, the switch contacts are not opening. Verify the gauge is accurate by comparison to a second gauge if you have one.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Fix:</strong> Replace the pressure switch. A new switch costs $20 to $50 and takes 30 minutes to install. Turn off power completely. Label the wires before disconnecting. Use pipe dope or thread tape on the sensing tube threads. Reconnect wires to matching terminals. After replacement, verify the pressure tank air pre-charge is 2 PSI below the new switch&apos;s cut-in setting.
          </p>
        </div>

        {/* Cause 3: Waterlogged Pressure Tank */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 3</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Waterlogged Pressure Tank</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>A waterlogged tank contributes to continuous running by reducing or eliminating the system&apos;s pressure storage capacity.</strong>
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A properly functioning pressure tank stores water under compressed air pressure. This stored pressure is what allows the pump to shut off &mdash; the compressed air continues supplying the house while the pump is off, maintaining pressure above the cut-in setpoint until demand draws it down to cut-in.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            When the rubber bladder inside the tank tears or leaks, water fills the air side of the tank. There is no longer any compressed air cushion. The tank now holds only water with no storage capacity. Every time a tiny amount of water is used, pressure drops instantly to cut-in, the pump starts, builds pressure to cut-off, shuts off, and the cycle repeats in seconds. In severe waterlogging, the pressure storage is so minimal that the pump cannot maintain cut-off pressure at all and runs continuously.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to test the tank:</strong> With the pump off, press the Schrader valve (tire valve stem) on top of the tank. Air should come out under pressure. If water sprays out, the bladder has failed.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            You can also tap the tank from top to bottom with your knuckle while it is charged. A properly functioning tank sounds hollow at the top (air) and more solid toward the bottom (water). A waterlogged tank sounds uniformly solid all the way to the top.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Fix:</strong> Replace the pressure tank. Bladders cannot be repaired. A new tank costs $150 to $400. Installation is a half-day plumbing job typically costing $200 to $500 for labor. Total replacement runs $350 to $900 installed. After replacement, the pre-charge must be set to 2 PSI below the cut-in pressure before filling.
          </p>
        </div>

        {/* Cause 4: Failed Check Valve */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 4</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Failed Check Valve</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>A failed check valve is a specific leak path that most homeowners miss in the leak diagnosis above because the water goes back into the well rather than anywhere visible.</strong>
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The check valve is a one-way valve located just above the submersible pump in the drop pipe. Its job is to keep the water column in the drop pipe pressurized when the pump shuts off, preventing it from draining back into the well. When the check valve fails (the valve seat wears, debris holds it open, or it corrodes), water drains back into the well every time the pump shuts off. Pressure in the system drops, the pressure switch senses cut-in, the pump starts, refills the drop pipe from scratch, builds to cut-off, shuts off, and the water drains again. The cycle can repeat every 1 to 5 minutes indefinitely.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>The diagnostic test:</strong> After the pump shuts off, watch the pressure gauge for 60 to 90 seconds. If pressure drops from 50 or 60 PSI to the cut-in range within 30 to 60 seconds without any house water being used, and the leak isolation test confirmed no leaks inside the house or in the underground supply line, the check valve is the most likely cause. A system with a healthy check valve holds pressure for hours without the pump running.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>The sound clue:</strong> After the pump shuts off, listen at the wellhead. With a failed check valve you can sometimes hear water draining back down the casing &mdash; a faint rushing or gurgling sound in the first few seconds after the pump stops. This is diagnostic.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Fix:</strong> Replacing the check valve requires pulling the submersible pump from the well. This is not a DIY repair for most homeowners. A well contractor pulls the pump, replaces the check valve (and typically inspects the drop pipe and wiring while it is out), and reinstalls. Cost: $300 to $600 for a service call that includes the check valve replacement if no other issues are found.
          </p>
        </div>

        {/* Cause 5: Well Running Dry */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 5</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Well Running Dry or Low Yield</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>When the water table drops below the pump intake, the pump draws a mix of water and air, then pure air, and pressure cannot build to cut-off.</strong>
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            This is a seasonal cause in most of the country. Late summer and early fall are when water tables reach their annual low. Wells in unconfined, water-table aquifers are most vulnerable. Shallow wells and wells that have been in heavy use are the first to show yield problems.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Signs That Distinguish a Yield Problem from a Leak</h3>
          <ul className='space-y-3 mb-6'>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              The pump runs but you also have <strong>sputtering or air in the water</strong>. When the water table drops to near the pump intake, the pump draws a mix of water and air before the water is entirely gone. Sputtering faucets &mdash; intermittent flow with air bubbles &mdash; are the signature of declining water level, not of a leak.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              The problem is <strong>worse or exclusive to summer and early fall</strong>. Seasonal patterns point to aquifer drawdown.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              The problem appeared or worsened after <strong>sustained heavy use</strong> &mdash; filling a pool, extended irrigation, or a period of high household demand.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              <strong>Neighbors with wells</strong> in the same area report the same problem simultaneously.
            </li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>What to Do</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            If you suspect the well is running dry, <strong>turn the pump off immediately</strong>. Running a submersible pump dry destroys it within minutes. The motor is water-cooled. Without water flowing past the housing, heat builds catastrophically fast.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Let the well rest for 1 to 2 hours, then restore power briefly and try a fixture. If water returns even weakly, the aquifer is temporarily depleted and recovering. Use water sparingly for the rest of the day and reassess.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            If the pump has been running with no water delivery (gauge at zero, pump running), it may have already suffered damage from dry-run overheating. Have a contractor assess pump output before assuming it is undamaged.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Long-term solutions for a yield-limited well:</strong> Lower the pump depth, hydrofracture the existing borehole, deepen the well, or drill a new well. See <Link href='/cost-guides/well-pump-replacement-cost' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump replacement cost</Link> for cost guidance on each option.
          </p>
        </div>

        {/* Cause 6: Worn Pump */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 6</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Worn Pump or Undersized Pump</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>A pump whose impellers are worn from years of sediment exposure cannot generate enough pressure to reach cut-off.</strong>
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Impellers are the spinning discs that generate the pump&apos;s pressure output. Sand, sediment, and mineral deposits gradually wear the impellers and reduce the pump&apos;s output capacity. A pump that originally reached 60 PSI cut-off easily may, after years of service, only be able to reach 45 to 50 PSI under load. If demand draws the pressure down even slightly, the worn pump cannot build it back to cut-off and runs continuously.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Signs of Pump Wear Rather Than Other Causes</h3>
          <ul className='space-y-3 mb-6'>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              The problem has developed <strong>gradually over months or years</strong> rather than appearing suddenly. Sudden continuous running points to a switch, leak, or check valve. Gradual continuous running at peak demand points to pump wear.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              The pump <strong>shuts off fine when no water is being used</strong> but runs continuously when multiple fixtures are open. This is the wear pattern: the pump can meet zero-demand output (shut-off pressure) but cannot maintain cut-off pressure under real load.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>
              The pump is <strong>more than 10 to 12 years old</strong> and in service with water that has elevated iron, sand, or sediment content.
            </li>
          </ul>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Confirming pump wear requires a contractor.</strong> An amp draw test (measuring whether the motor is drawing current within its nameplate rating) and a flow test (measuring actual gallons per minute output against the pump&apos;s specifications) determine whether the pump is performing to spec. A pump drawing less than rated GPM against normal head pressure is worn.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Fix:</strong> Pump replacement. This is a contractor job requiring pulling the pump from the well. Average cost: $800 to $2,500 depending on well depth and pump size. A pump showing wear is almost always replaced rather than repaired because the cost of refurbishment approaches the cost of a new pump.
          </p>
        </div>

        {/* The Listening Test */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Listening Test: What Your System Sounds Like</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            The sounds your system makes when the pump shuts off are often more diagnostic than anything else. Here is what to listen for in the 30 to 60 seconds after the pump stops:
          </p>
          <div className='space-y-4 mb-4'>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Silence followed by sustained pressure:</strong> The system is healthy. Pressure holds, no water moving, pump stays off. No problem here.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Quick click-click-click from the pressure switch, pump restarts within seconds:</strong> Waterlogged pressure tank. The switch is cycling on and off because there is no stored pressure. Replace the tank.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Faint rushing or gurgling from the wellhead area:</strong> Check valve failure. Water is draining back into the well casing. Pressure will drop to cut-in within seconds to a minute.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Sustained pressure followed by gradual drop over 5 to 15 minutes with nothing running:</strong> Slow leak somewhere in the system. Could be underground supply line, plumbing fixture, or water treatment equipment.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Pressure holds fine with the house supply valve closed but drops when opened:</strong> The leak is inside the house. Check toilets first.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Grinding or rattling during pump operation:</strong> Pump cavitation (drawing air due to low water table) or worn bearings. Turn the pump off immediately. Cavitation destroys impellers rapidly.
              </p>
            </div>
          </div>
        </div>

        {/* Pressure Drop Rate Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Reference</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Pressure Drop Rate Diagnostic Table</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Use this to interpret what you observe on the pressure gauge after the pump shuts off with all fixtures closed and house supply valve open:
          </p>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-4 font-bold text-slate-900'>Pressure Drop Rate After Pump Stops</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Most Likely Cause</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Second Suspect</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr className='hover:bg-slate-50' style={{ backgroundColor: '#FFFBEB' }}>
                  <td className='p-4 font-medium text-slate-900'>Drops to cut-in within 5 to 15 seconds</td>
                  <td className='p-4 text-slate-700'>Failed check valve</td>
                  <td className='p-4 text-slate-700'>Cracked drop pipe or pitless adapter fitting</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Drops to cut-in within 1 to 5 minutes</td>
                  <td className='p-4 text-slate-700'>Supply line leak (underground)</td>
                  <td className='p-4 text-slate-700'>Multiple small indoor leaks</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Drops to cut-in within 5 to 30 minutes</td>
                  <td className='p-4 text-slate-700'>Slow indoor leak</td>
                  <td className='p-4 text-slate-700'>Water treatment equipment cycling</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Pressure holds for hours with no water use</td>
                  <td className='p-4 text-slate-700'>System is healthy &mdash; look at pressure switch</td>
                  <td className='p-4 text-slate-700'>None</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Pressure never reaches cut-off even with pump running</td>
                  <td className='p-4 text-slate-700'>Worn pump, low yield, or severe leak</td>
                  <td className='p-4 text-slate-700'>Pump undersized for current demand</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-600 text-sm mt-4 leading-relaxed'>
            <strong>How to use this table:</strong> After the pump shuts off at cut-out pressure, close all fixtures, do nothing, and watch the gauge for 30 to 60 minutes. Note how quickly pressure drops. Match what you observe to the table above. If you are not sure whether the pressure is dropping from inside the house or outside, perform the leak isolation test first: close the house supply valve and repeat the observation.
          </p>
        </div>

        {/* DIY vs Hire Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Action</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>DIY vs. Hire: What You Can Do Yourself</h2>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-4 font-bold text-slate-900'>Task</th>
                  <th className='text-left p-4 font-bold text-slate-900'>DIY or Hire</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Notes</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Toilet flapper and fixture leak repairs</td>
                  <td className='p-4'><span className='text-green-700 font-semibold'>DIY</span></td>
                  <td className='p-4 text-slate-700'>$5 to $30, 15 minutes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Pressure switch replacement</td>
                  <td className='p-4'><span className='text-green-700 font-semibold'>DIY</span></td>
                  <td className='p-4 text-slate-700'>Power must be fully off; 230V circuit</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Schrader valve bladder test on pressure tank</td>
                  <td className='p-4'><span className='text-green-700 font-semibold'>DIY</span></td>
                  <td className='p-4 text-slate-700'>Takes 2 minutes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Pressure tank replacement</td>
                  <td className='p-4'><span className='text-amber-700 font-semibold'>Hire recommended</span></td>
                  <td className='p-4 text-slate-700'>Plumbing work; tank handling</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Leak isolation test (house valve shutoff)</td>
                  <td className='p-4'><span className='text-green-700 font-semibold'>DIY</span></td>
                  <td className='p-4 text-slate-700'>Requires locating house supply valve</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Underground supply line leak location</td>
                  <td className='p-4'><span className='text-red-700 font-semibold'>Hire</span></td>
                  <td className='p-4 text-slate-700'>Excavation and leak detection equipment</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Check valve replacement</td>
                  <td className='p-4'><span className='text-red-700 font-semibold'>Hire always</span></td>
                  <td className='p-4 text-slate-700'>Requires pulling the submersible pump</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Pump output testing</td>
                  <td className='p-4'><span className='text-red-700 font-semibold'>Hire</span></td>
                  <td className='p-4 text-slate-700'>Requires amp clamp and GPM measurement</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Pump replacement</td>
                  <td className='p-4'><span className='text-red-700 font-semibold'>Hire always</span></td>
                  <td className='p-4 text-slate-700'>Requires pump pulling equipment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How Much Continuous Running Costs */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cost</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How Much Continuous Running Costs</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Beyond motor damage, a continuously running pump has an immediate financial cost that homeowners often notice before they identify the problem.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A typical 1 HP submersible pump draws approximately 750 watts while running. At the US national average electricity rate of about $0.16 per kWh, a pump running continuously for 24 hours costs approximately $2.88 per day in electricity alone, versus a healthy pump cycling for 30 to 60 minutes total per day costing $0.12 to $0.24.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A pump running nonstop for a week adds $20 to the electric bill. A month adds $80 to $90. This is on top of the water being lost if the cause is a leak.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            More important than the electricity cost is the motor wear. Submersible pump motors are designed for intermittent duty. Continuous operation at elevated temperature accelerates bearing wear and insulation degradation. A pump that normally lasts 15 years may fail in months if it runs continuously for extended periods. The EPA&apos;s private wells guidance at <a href='https://www.epa.gov/privatewells' target='_blank' rel='noopener noreferrer' className='font-semibold underline' style={{ color: '#1D9E75' }}>epa.gov/privatewells</a> recommends annual professional inspections partly because problems like excessive pump cycling and continuous running are early warning signs that most homeowners miss until a complete failure occurs.
          </p>
        </div>

        {/* Signs Your Pump Motor Has Already Been Damaged (deduplicated - single instance) */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Warning</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Signs Your Pump Motor Has Already Been Damaged</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            If your pump has been running continuously for hours or days before you discovered the problem, the motor may already have suffered heat damage even if it is still running. A pump that has been overheated often continues to operate for days to weeks before the accumulated insulation damage causes complete failure. These signs suggest motor damage has occurred:
          </p>
          <ul className='space-y-3 mb-6'>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#A32D2D' }}>
              The pump motor or wiring at the control box feels <strong>noticeably hot to the touch</strong> even an hour after being shut off. Normal pump components in the utility room run warm but not uncomfortably hot.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#A32D2D' }}>
              The <strong>breaker trips</strong> during normal operation after a period of continuous running. Damaged motor windings draw higher-than-rated current, which trips the overcurrent protection.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#A32D2D' }}>
              <strong>Water pressure is lower than before</strong> the continuous running event, even after the cause has been fixed. Worn impellers from overheating deliver less pressure than new ones.
            </li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#A32D2D' }}>
              A <strong>burning smell</strong> from the control box or pressure switch area. Insulation breakdown produces a characteristic electrical burning odor.
            </li>
          </ul>
          <p className='text-slate-700 leading-relaxed'>
            If any of these signs are present, have a contractor test the pump&apos;s amp draw before resuming normal use. A pump drawing more amps than its nameplate rating has motor damage. Operating a damaged motor until it fails completely typically results in more expensive repairs than catching and addressing the damage early.
          </p>
        </div>

        {/* FAQ Section */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why is my well pump running constantly?</h3>
              <p className='text-slate-700 leading-relaxed'>
                A well pump runs continuously because it cannot reach the cut-off pressure that signals it to stop. Six causes prevent this: a water leak in the system (most common), a pressure switch stuck in the on position, a waterlogged pressure tank with a failed bladder, a failed check valve letting water drain back into the well, the well running dry so the pump cannot move water, or a worn pump that can no longer produce full pressure output. Start with the leak check &mdash; turn off the house supply valve and see if the pump shuts off. If it does, the leak is inside the house. If it does not, the problem is between the tank and the bottom of the well.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Is it bad for a well pump to run constantly?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Yes. Continuous operation is a serious problem. Submersible pump motors rely on water flowing past the motor housing for cooling. During normal cycling, the pump runs briefly then rests, allowing heat to dissipate. Continuous operation generates heat faster than the cooling mechanism can remove it. Most residential pumps are designed to run in cycles, not continuously. Running for more than 20 to 30 minutes generates concerning heat. Running for hours causes significant motor degradation. A pump that runs continuously can fail within days to weeks if the cause is not resolved. Turn the pump off between uses while you diagnose.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I stop my well pump from running constantly?</h3>
              <p className='text-slate-700 leading-relaxed'>
                First, turn the pump off at the breaker to protect it. Then identify the cause using the leak isolation test: close the shutoff valve between the pressure tank and the house, let the pump run briefly. If it shuts off with the house isolated, fix the indoor leak (running toilet is most likely). If it still runs, the problem is between the tank and the well. Check the pressure switch contacts for burning or insect damage. Check the pressure tank Schrader valve &mdash; water coming out means bladder failure. If both are fine, you likely have a check valve failure or supply line leak requiring a contractor.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can a leaking toilet cause a well pump to run constantly?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Yes, absolutely. A toilet flapper that does not seal properly allows water to continuously trickle from the tank to the bowl. This constant small water loss bleeds pressure from the system, triggering the pump to restart every few minutes or run continuously to compensate. A toilet leaking at even a slow rate of a few ounces per minute is enough to keep a residential well pump running far more than it should. Test by adding food coloring to the toilet tank &mdash; if color appears in the bowl without flushing, the flapper is leaking. Toilet flapper replacement costs $5 to $15 and takes five minutes.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long can a well pump run before it gets damaged?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Most residential submersible pumps can sustain 20 to 30 minutes of continuous operation without immediate damage, though this is above their design duty cycle. Running beyond an hour generates heat that accelerates motor wear and insulation degradation. A pump running continuously for hours is at serious risk of failure. If motor insulation fails from overheating, the pump will likely burn out within hours to days of sustained continuous operation. If you discover your pump has been running continuously for an extended period, turn it off and have a contractor evaluate pump condition before resuming normal use.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What does it mean when a well pump runs every few minutes?</h3>
              <p className='text-slate-700 leading-relaxed'>
                A pump that cycles every few minutes (rather than running continuously) is most likely experiencing pressure tank bladder failure. When the bladder tears, the tank loses its air cushion and cannot store pressure. Every small amount of water used drops pressure instantly to cut-in, starting the pump. This rapid cycling is called short cycling and it destroys pump motors through repeated start-up stress just as effectively as continuous running. The Schrader valve test confirms it: press the valve on top of the pressure tank with the pump off. Water coming out means the bladder has failed and the tank needs replacement.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why does my well pump run when no water is being used?</h3>
              <p className='text-slate-700 leading-relaxed'>
                A pump that runs when all fixtures are off means water is leaving the system through a leak or backflow. The most common causes are a running toilet (check the toilet tank for hissing), a leaking outdoor hose bib, a failed check valve allowing water to drain back into the well, a cracked underground supply line, or water treatment equipment (softener, iron filter, reverse osmosis) in an active treatment cycle. The leak isolation test confirms whether the loss is inside the house or outside: close the house supply valve, see if the pump shuts off.
              </p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Cut-Off Pressure (Cut-Out Pressure)</h3>
              <p className='text-slate-700 leading-relaxed'>
                The pressure setpoint at which the pressure switch opens its contacts and shuts the pump off. Standard residential settings are 50 PSI (for 30/50 systems) or 60 PSI (for 40/60 systems). When any problem prevents the system from reaching this pressure, the pump runs continuously.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Pressure Switch Contacts</h3>
              <p className='text-slate-700 leading-relaxed'>
                The electrical contacts inside the pressure switch that physically close to start the pump and open to stop it. When contacts corrode, pit, or weld together from electrical arcing, the pump may fail to start (open-failure) or fail to stop (closed-failure). Closed-contact failure causes continuous running even when pressure is adequate.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Check Valve</h3>
              <p className='text-slate-700 leading-relaxed'>
                The one-way valve above the submersible pump that prevents pressurized water from draining back into the well when the pump shuts off. A properly functioning check valve holds system pressure for hours after the pump stops. A failed check valve causes rapid pressure loss after each pump cycle.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Waterlogged</h3>
              <p className='text-slate-700 leading-relaxed'>
                A condition in which the pressure tank&apos;s rubber bladder has failed, allowing water to occupy the entire tank volume with no air cushion. A waterlogged tank cannot store pressurized water and causes either rapid short cycling or continuous running.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Duty Cycle</h3>
              <p className='text-slate-700 leading-relaxed'>
                The operational pattern a pump motor is designed for, specifying how long it can run versus rest. Residential submersible pumps are designed for intermittent duty &mdash; short run cycles followed by rest periods. Continuous operation exceeds the design duty cycle, generates excess heat, and accelerates failure.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Impeller Wear</h3>
              <p className='text-slate-700 leading-relaxed'>
                Gradual erosion of the rotating discs inside the pump that generate pressure. Sand, sediment, and mineral-laden water abrade impeller surfaces over years of service, reducing the pump&apos;s maximum pressure output. A pump with worn impellers may not be able to reach cut-off pressure under load, causing continuous running.
              </p>
            </div>
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

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Related</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
            </Link>
            <Link href='/problems/no-water-from-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>No Water from Well</span>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
