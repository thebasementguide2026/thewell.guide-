import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'No Water from Well: A Step-by-Step Diagnosis Guide | The Well Guide',
  description: 'Turned on the tap and got nothing? This guide walks you through every cause of no water from a well in order of likelihood, from a tripped breaker you can fix in 30 seconds to a failed pump that needs a contractor. Do these checks before you call anyone.',
  openGraph: {
    title: 'No Water from Well: A Step-by-Step Diagnosis Guide',
    description: 'Turned on the tap and got nothing? This guide walks through every cause of no water from a well in order of likelihood, from a tripped breaker to a failed pump.',
    url: 'https://www.thewell.guide/problems/no-water-from-well',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/nowaterinwell.jpg', width: 1200, height: 630, alt: 'A hand turning on a kitchen faucet with no water coming out' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/problems/no-water-from-well' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my well have no water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common causes in order of frequency are a tripped circuit breaker, a failed pressure switch, a failed pump motor or start capacitor, a well running dry from seasonal low water tables or drought, a frozen pressure switch sensing tube in winter, and a failed check valve. Start by checking the breaker, then the pressure switch contacts, before assuming the pump has failed. Many no-water situations are resolved by a $25 pressure switch replacement or a simple breaker reset.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do I do if I have no water from my well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "First, check your circuit breaker panel for a tripped double-pole breaker labeled 'well pump.' Reset it firmly (push to OFF then to ON). If water returns, you may be done. If not, check the pressure switch contacts for burning or corrosion, check the pressure gauge reading, and listen for whether the pump is running. If the pump runs but delivers no water, turn it off immediately to prevent dry-run damage and call a contractor.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for a well to recover after running dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well that ran dry from brief overuse in an unconfined aquifer may recover in 1 to 4 hours after the pump is turned off. A well depleted by extended drought may take weeks to months to recover fully. Shallow, unconfined aquifer wells recover faster than deep confined aquifer wells. If your well recovers after an hour of rest but continues to struggle under normal use, you have a yield limitation that needs professional assessment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a tripped breaker cause no water from a well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A tripped double-pole circuit breaker is one of the most common causes of sudden complete water loss from a well. The breaker protects the 240-volt circuit powering the pump. When it trips, the pump receives no power and no water is delivered. Check the breaker panel first, before any other diagnosis. A breaker that trips repeatedly indicates a pump or wiring problem requiring professional attention.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is my well pump not turning on?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common reasons: no power (tripped breaker or disconnected shutoff switch), a failed pressure switch not sending the start signal, a frozen pressure switch sensing tube in winter, a burned start capacitor on a three-wire pump, or a failed pump motor. Check the breaker first, then open the pressure switch with the power off and examine the contacts. On three-wire systems, check the control box for a burned capacitor before concluding the pump has failed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to drink water from a well after it has run dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test before drinking after any well has run dry. When a well runs dry, the pump draws from very near the bottom, which may disturb sediment and introduce bacteria. After the well recovers, flush the system thoroughly, then test for total coliform bacteria and nitrates before resuming use for drinking and cooking. Use bottled water in the interim.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my well pump has failed or if the well is just dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dry well typically shows a progression: sputtering and air bubbles, then intermittent flow, then nothing. A failed pump stops more abruptly, often with the system pressurized normally right before failure. The clearest diagnostic: turn off the pump, wait two hours, restore power. If water returns even weakly, the aquifer was temporarily depleted and the pump is likely fine. If nothing returns despite all electrical components working correctly, the pump has likely failed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes a well to suddenly have no water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sudden complete loss of water from a well is most commonly caused by a tripped circuit breaker, a failed pressure switch, or a pump motor failure. Less common causes include a frozen pressure switch sensing tube in winter, a sudden drop in the water table from drought, a cracked drop pipe, or a short circuit in the pump wiring. Check the breaker first, then the pressure switch, then the control box for three-wire pumps, then call a contractor.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'No Water from Well: A Step-by-Step Diagnosis Guide',
  description: 'When a well has no water, start at the breaker panel. This guide walks through every cause of well water loss in order of likelihood, from a tripped breaker to a failed pump, with specific diagnostic steps for each.',
  image: 'https://www.thewell.guide/nowaterinwell.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/problems/no-water-from-well',
}

export default function NoWaterFromWell() {
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
          src='/nowaterinwell.jpg'
          alt='A hand turning on a kitchen faucet with no water coming out'
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
            No Water from Well:<br />
            <span style={{ color: '#5DCAA5' }}>A Step-by-Step<br />Diagnosis Guide</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Do these checks before you call anyone. Most no-water calls are a tripped breaker or a $25 pressure switch.
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
        { label: 'Problems', href: '/problems' },
        { label: 'No Water from Well' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>When a well-fed home suddenly has no water, go to the breaker panel first. A tripped double-pole circuit breaker is the single most common cause of complete water loss and takes 30 seconds to fix. If the breaker is fine, check the pressure switch contacts (2 minutes) and the pressure tank bladder (2 minutes). These three checks cost nothing and resolve the majority of no-water calls without a contractor. If all three check out, the problem is the pump itself, a frozen component, the well running dry, or a failed check valve — each with specific actions described below. Do not call anyone and do not pay an emergency rate until you have done these checks. If you hear the pump running but no water is coming, turn the pump off at the breaker immediately — running a submersible pump without water destroys it within minutes.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>No water at the tap is one of the most alarming things that can happen in a home. The instinct is to call a contractor immediately. That instinct is often wrong and always expensive if you have not done five minutes of self-diagnosis first. Many no-water situations are caused by a tripped breaker, a bumped shutoff switch, a stuck pressure switch, or a temporarily overtaxed well that just needs an hour of rest. None of these require a contractor.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>The causes that do require professional help — a failed pump, a cracked drop pipe, a permanently dry well — cannot be reached without first ruling out the simpler causes anyway. So the diagnostic sequence below is the right path regardless of the eventual outcome. Work through it in order.</p>
        </div>

        {/* All Causes at a Glance Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Overview</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>All Causes at a Glance</h2>
          <div className='overflow-x-auto -mx-4 px-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Cause</th>
                  <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Key Symptom</th>
                  <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>DIY Fix?</th>
                  <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Urgency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Tripped circuit breaker</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No pump sound, gauge zero, breaker in middle position</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes — reset once</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check first, takes 30 seconds</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Failed pressure switch</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No pump start, contacts burned or corroded inside switch</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes — $25 replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check second, takes 10 minutes</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Frozen sensing tube</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No water in winter, pump silent, small tube near switch is cold</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes — hair dryer</td>
                  <td className='p-3 border border-slate-200 text-slate-700' style={{ backgroundColor: '#FEF3C7' }}>Immediate in freezing weather</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Frozen supply pipe</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No water in winter, pump may run, no flow at fixtures</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Partial — gentle heat only</td>
                  <td className='p-3 border border-slate-200 text-slate-700' style={{ backgroundColor: '#FEF3C7' }}>Immediate — do not run pump</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Well running dry</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Sputtering before loss, drought or heavy use, late summer</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Partial — turn off pump and wait</td>
                  <td className='p-3 border border-slate-200 text-slate-700' style={{ backgroundColor: '#FEE2E2' }}>Turn off pump immediately</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Failed pump motor</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Breaker trips repeatedly, hum but no start, pump over 12 years old</td>
                  <td className='p-3 border border-slate-200 text-slate-700' style={{ backgroundColor: '#F3F4F6' }}>No — contractor required</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Call contractor</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Failed check valve</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pressure drops quickly after pump shuts off</td>
                  <td className='p-3 border border-slate-200 text-slate-700' style={{ backgroundColor: '#F3F4F6' }}>No — contractor required</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Non-emergency, address soon</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Cracked drop pipe or wiring</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pump runs, no pressure builds, no dry-well symptoms</td>
                  <td className='p-3 border border-slate-200 text-slate-700' style={{ backgroundColor: '#F3F4F6' }}>No — contractor required</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Call contractor</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Safety First */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Safety</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Safety First: What to Do Before Touching Anything</h2>
          <div className='mb-6 rounded-lg p-5 border-l-4 border-red-400 bg-red-50'>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>Well pump systems operate on 240-volt circuits. That is twice the voltage of a standard household outlet and enough current to cause serious injury or death. Before you open any electrical component on the well system:</p>
          </div>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Turn off the circuit breaker</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Turn off the circuit breaker for the well pump before opening the pressure switch housing or touching any wiring. The pump breaker is a double-pole breaker (two switches connected by a bar) in your main electrical panel. It is labeled {`"`}well pump,{`"`} {`"`}water pump,{`"`} or sometimes just {`"`}pump.{`"`}</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Use a non-contact voltage tester</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>These cost $15 to $25 at any hardware store and confirm that a circuit is dead before you touch it. Never assume a circuit is dead because the breaker is off.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Do not repeatedly reset a breaker that keeps tripping</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A breaker that trips again immediately after reset indicates a short circuit or motor failure. Continued resetting can cause a fire or permanently damage the pump wiring.</p>
            </div>
          </div>
        </div>

        {/* The 5-Minute Check Sequence */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The 5-Minute Check Sequence</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Do these four checks before anything else. They are in order of likelihood and speed.</p>

          {/* Check 1 */}
          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Check 1: The Circuit Breaker (30 Seconds)</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Go to your main electrical panel. Find the double-pole breaker labeled for the well pump. A tripped breaker sits in a middle position between ON and OFF, not firmly in either direction. It may also be fully OFF because it tripped through OFF.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>To reset: push the breaker firmly to OFF, then flip it firmly to ON. You should hear a click. Go turn on a faucet and wait 60 seconds. If water flows, you are done.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>If the breaker trips again immediately, stop. Do not reset it a third time. A breaker that trips immediately indicates a short circuit in the pump motor, wiring, or control box. Call a licensed well contractor.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Also check: many older systems and some newer ones have a separate well shutoff switch, often a red or standard toggle switch mounted on the wall near the pressure tank. It can be bumped accidentally. Make sure it is in the ON position before going further.</p>
          </div>

          {/* Check 2 */}
          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Check 2: The Pressure Gauge (1 Minute)</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-6'>Look at the pressure gauge on your system. It is typically mounted at the pressure tank tee or on the supply pipe near the tank. The needle tells you a great deal.</p>

            {/* Pressure Gauge Diagnostic Table */}
            <div className='overflow-x-auto -mx-4 px-4 mb-6'>
              <table className='w-full text-sm border-collapse'>
                <thead>
                  <tr style={{ backgroundColor: '#E1F5EE' }}>
                    <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Gauge Reading</th>
                    <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Pump Sound</th>
                    <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>What It Means</th>
                    <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Go To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='p-3 border border-slate-200 text-slate-700'>Zero</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Silent</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>No power or pressure switch not starting pump</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Check 3 (pressure switch)</td>
                  </tr>
                  <tr>
                    <td className='p-3 border border-slate-200 text-slate-700'>Zero</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Running</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Pump running but not delivering water — dry well or failed pump</td>
                    <td className='p-3 border border-slate-200 text-slate-700' style={{ backgroundColor: '#FEE2E2' }}>Cause 4 and Cause 5 — turn off pump</td>
                  </tr>
                  <tr>
                    <td className='p-3 border border-slate-200 text-slate-700'>Normal (30–60 PSI)</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Running</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Blockage between tank and fixtures — not a well problem</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Check shutoff valves and sediment filters</td>
                  </tr>
                  <tr>
                    <td className='p-3 border border-slate-200 text-slate-700'>Normal (30–60 PSI)</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Silent</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>System still pressurized — you may have water, check again</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Open a faucet and wait</td>
                  </tr>
                  <tr>
                    <td className='p-3 border border-slate-200 text-slate-700'>Stuck, does not move</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Any</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Gauge may have failed — proceed to Check 3 regardless</td>
                    <td className='p-3 border border-slate-200 text-slate-700'>Check 3</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Gauge reads zero and pump is not running:</strong> No power is reaching the pump, or the pressure switch is not sending the start signal. Go to Check 3.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Gauge reads zero and you can hear the pump running:</strong> The pump is running but not delivering water. This is serious. Turn off the pump at the breaker immediately to prevent dry-run damage, then see Cause 4 and Cause 5 below.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Gauge reads a normal pressure (30 to 60 PSI) but no water flows at fixtures:</strong> The blockage is between the pressure tank and the fixtures — a shutoff valve accidentally closed, a frozen pipe between the tank and the house, or a completely clogged sediment filter. These are plumbing issues, not well issues.</p>
            <p className='text-slate-700 leading-relaxed text-sm'><strong>Gauge needle is stuck and does not move:</strong> The gauge itself may have failed. This is less informative but does not change the diagnostic sequence. Proceed to Check 3.</p>
          </div>

          {/* Check 3 */}
          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Check 3: The Pressure Switch (3 Minutes)</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>The pressure switch is a small gray or black box mounted on a quarter-inch sensing tube near the pressure tank. It senses system pressure and sends the electrical signal that starts and stops the pump.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>With the pump breaker OFF and confirmed dead with a voltage tester:</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Remove the plastic cover of the pressure switch (one nut at the top holds it). Look at the electrical contacts inside. They should be copper-colored, shiny or dull copper. If they appear black, heavily pitted, or show burn marks, the switch contacts have failed and are not closing to start the pump.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Temporary fix for burned contacts:</strong> with power still off, use a nail file or emery board to lightly sand the contact surfaces until you see copper color. This is a temporary measure only. Replace the switch as soon as possible. A new pressure switch costs $20 to $50.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Also check:</strong> look inside the switch for insects. Ants colonize pressure switches regularly and can bridge the contacts, preventing proper operation. If you see ants, clear them out and check whether the contacts were damaged.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Also check:</strong> the quarter-inch sensing tube connecting the switch to the pipe. In cold weather this small tube is the first component to freeze. If it is winter and temperatures have been below freezing, the sensing tube may be blocked with ice. See the Frozen System section below.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Restore power and test. If the pump starts and water flows, check complete.</p>
          </div>

          {/* Check 4 */}
          <div className='mb-10'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Check 4: The Pressure Tank (2 Minutes)</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>If power is reaching the system but no water is flowing, check whether the pressure tank has failed. A waterlogged tank (bladder failure) does not directly cause complete loss of water, but a failed tank combined with a pump that is struggling can result in no usable water pressure.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Quick tank test:</strong> with the pump breaker OFF, open a faucet and drain the system until flow stops. Press the Schrader valve (tire-valve stem) on top of the tank. Air should come out. If water sprays out, the bladder has failed.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>A waterlogged tank combined with a pump that is failing can result in effectively no water delivery even though the pump is running. If the tank test shows bladder failure and you also have no water, the tank needs replacement and the pump should be assessed separately.</p>
          </div>
        </div>

        {/* Cause 1: Tripped Breaker */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 1</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Tripped Breaker or Power Loss</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who it affects:</strong> Everyone. No exceptions.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it happens:</strong> Submersible pumps draw high starting current every time they start. Over years of cycling, this strains the breaker. Breakers also trip when the pump motor draws excess current due to a tight impeller, low voltage, or a partially failed motor winding. A single trip that resets successfully is usually a fluke. A breaker that trips repeatedly means something is drawing too much current.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What to check:</strong> Reset once as described in Check 1. If it holds, run water normally for 10 minutes and observe. If it trips during use, have a contractor check the pump{`'`}s amp draw. Normal amp draw is printed on the pump motor nameplate. If the pump is drawing more than rated amps, the motor is failing.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Cost to fix:</strong> Nothing if it was a fluke trip. Breaker replacement: $15 to $40 for the part, simple electrical work. Motor replacement: $400 to $2,500 for the full pump replacement if the motor has failed.</p>
        </div>

        {/* Cause 2: Failed Pressure Switch */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 2</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Failed Pressure Switch</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who it affects:</strong> Any well system.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it happens:</strong> Pressure switches cycle on and off dozens of times per day. The electrical contacts gradually pit and corrode. Age, insects, moisture intrusion, and sediment in the sensing tube all accelerate failure. The average pressure switch lasts 5 to 10 years.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Symptoms:</strong> Pump does not start when it should. Gauge reads zero. Power is reaching the switch but the pump does not activate. Contacts look black or burned inside the switch housing.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>DIY repair:</strong> A pressure switch is one of the few well system components that many homeowners can replace themselves. Turn off power, confirm it is dead, label the wires, remove the old switch, thread in the new switch with pipe dope on the threads, and reconnect the wires. New switch: $20 to $50. Takes about 30 minutes.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Important: when you replace a pressure switch, check the pressure tank air charge immediately after. The air pre-charge must be 2 PSI below the cut-in pressure of the new switch. If you install a 30/50 switch, the tank needs 28 PSI pre-charge. If you install a 40/60 switch, the tank needs 38 PSI.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Contractor cost:</strong> $150 to $300 including parts and labor if you prefer not to DIY.</p>
        </div>

        {/* Cause 3: Frozen Pipes */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 3</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frozen Pipes or Frozen Pressure Switch Sensing Tube</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who it affects:</strong> Well systems in freezing climates, systems in unheated spaces, systems with inadequate insulation.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it happens:</strong> Two separate freeze scenarios cause no-water in winter. The more common and less serious one is a frozen pressure switch sensing tube. The small quarter-inch tube that connects the pressure switch to the plumbing is the first thing to freeze in any cold snap because its small volume chills rapidly. When ice forms in this tube, the switch cannot sense pressure changes and will not start the pump. The pump is fine. The well is fine. Only this tiny tube is frozen.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The more serious scenario is a frozen supply pipe between the well and the house or within the home in an unheated space. If the pipe connecting the pitless adapter to the house supply line freezes, no water can flow regardless of whether the pump is running.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How to tell them apart:</strong> Turn on the pump breaker. Listen at the wellhead or at the pressure tank. Is the pump running but no water building in the system? That points to a frozen supply pipe. Is there no pump sound at all and the gauge reads zero? That points to a frozen sensing tube or frozen pressure switch.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Frozen sensing tube fix:</strong> Identify the small quarter-inch tube running from the bottom of the pressure switch to the pipe. Apply a hair dryer to this tube on low heat. It takes 2 to 5 minutes. Do not apply open flame. Restore power and test. Once thawed, insulate the tube with pipe foam and seal any air drafts reaching that area.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Frozen supply pipe:</strong> Do not run the pump while the supply pipe is frozen. Running a submersible pump with a blocked discharge line risks catastrophic pressure buildup. Locate the frozen section and apply gentle heat (hair dryer, heating pad, warm wet towels) starting at the faucet end and working back toward the well. Never use open flame on pipes.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If you cannot locate the frozen section or if the pipe runs underground between the well and the house at insufficient depth, call a plumber. Improperly thawing a frozen pipe can cause it to burst.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Prevention:</strong> Insulate the pressure switch sensing tube. Keep the utility room or pump house above 40 degrees Fahrenheit. Make sure the supply line from the well to the house is buried below the frost line for your region.</p>
        </div>

        {/* Cause 4: Failed Well Pump */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 4</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Failed Well Pump</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who it affects:</strong> Any well system, particularly those with pumps more than 10 years old.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it happens:</strong> Submersible pump motors wear out. Common failure modes include burned motor windings from sustained overcurrent, worn bearings from long-term operation, failed starting capacitor (three-wire systems) or internal starting components (two-wire systems), and impeller damage from sand or sediment.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Symptoms specific to pump failure:</strong></p>
          <div className='space-y-3 mb-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>The breaker trips repeatedly.</strong> Pump failure often manifests as a motor drawing excessive current, which trips the breaker. A breaker that trips immediately and consistently (not just once) points to motor failure or a wiring short.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>The pump hums but does not start and no water flows.</strong> The motor is receiving power but cannot develop starting torque. On three-wire systems, this is almost always a failed start capacitor in the control box above ground. Replace the capacitor ($30 to $75) before concluding the pump itself has failed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>No sound from the pump at all</strong> when the breaker is on and the pressure switch contacts are confirmed closed. The motor has failed or wiring has failed between the switch and the pump.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Pump was running dry and you are certain of it.</strong> Running a submersible dry destroys the motor within minutes by removing the water cooling from the motor housing. If the well ran completely dry and the pump kept running, assume motor damage.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What you can check yourself:</strong> On three-wire systems, open the control box (the gray or beige box mounted above ground near the pressure tank). Look for a bulging, burned, or visibly failed start capacitor. Replace it with an exact match. This is a $30 to $75 fix that does not require pulling the pump.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What requires a contractor:</strong> Any pump problem that is not the control box components requires pulling the pump from the well. This requires a cable or tripod rig to safely extract the pump and drop pipe from potentially hundreds of feet down. This is not DIY work. Average pump replacement cost: $400 to $2,500 depending on depth and pump size.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>If pump failure is confirmed as the cause, our <Link href='/cost-guides/well-pump-replacement-cost-calculator' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump cost calculator</Link> gives you a replacement cost estimate based on your specific pump type, well depth, and regional pricing.</p>
        </div>

        {/* Cause 5: Well Running Dry */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 5</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Well Running Dry or Low Yield</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who it affects:</strong> Shallow wells, wells in drought-prone areas, wells in late summer and early fall when water tables reach their annual lowest point, wells that have been heavily pumped.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it happens:</strong> According to the <a href='https://www.usgs.gov/faqs/what-determines-if-a-well-will-go-dry' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>USGS</a>, a well is said to have gone dry when water levels drop below the pump intake. This does not mean the well is permanently dry. The water level may recover as recharge increases. Shallow, unconfined aquifer wells are the most vulnerable to seasonal fluctuation. Deeper wells in confined aquifers are more stable but not immune.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The natural annual cycle of groundwater levels produces the lowest water tables in late summer and early fall in most of the continental US. The Penn State Extension well drought resources document that shallow wells may see water levels rise and fall more quickly with rainfall, while deeper wells tend to withstand drought better but may take longer to recover.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Symptoms that distinguish a dry well from a failed pump:</strong></p>
          <div className='space-y-3 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'>Sputtering, air in the water, and intermittent flow before complete loss. When the water table drops to near the pump intake, the pump draws a mix of water and air before losing water entirely. This sputtering phase is the signature of a declining water level.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'>Water loss coincides with heavy demand, drought, or late summer. If the well ran fine all spring and stopped in August after a dry summer or after running the irrigation system heavily, the water table is the likely cause.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'>Neighbors on wells in the same area report the same problem. Regional aquifer drawdown affects multiple wells simultaneously.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'>Water that was turbid, gritty, or discolored just before loss. The pump drawing from near the well bottom pulls sediment before losing water entirely.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What to do when you suspect the well has run dry:</strong></p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Turn off the pump at the breaker immediately. Running a submersible pump dry destroys it rapidly. This is the single most important action when you suspect a dry well.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Wait 1 to 2 hours, then restore power and try again with minimal demand. If the aquifer is temporarily depleted from heavy use, a rest period allows some recovery. Use water sparingly for the rest of the day.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If the well recovers after rest but continues to struggle during normal use, you have a yield limitation that needs professional assessment. A contractor can measure the static and dynamic water levels to determine how much water the well is actually producing and recommend solutions.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Long-term solutions for a well with yield problems:</strong></p>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Lower the pump</strong> to a deeper setting within the existing borehole if the current pump position allows it. This may reach water that the current setting cannot.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Hydrofracture the existing well</strong> (sometimes called hydro-fracking for wells, not to be confused with oil and gas fracking). High-pressure water is injected into the borehole to open fractures in surrounding bedrock, potentially increasing yield. Cost: $1,500 to $3,000.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Deepen the existing well</strong> by drilling further through the bottom of the borehole. Cost varies significantly by geology and depth required.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Drill a new well.</strong> If the existing well location has reached its productive limit, a new well at a better location or deeper depth may be the only permanent solution. Cost: $6,000 to $16,000 depending on depth and location.</p>
            </div>
          </div>
        </div>

        {/* Cause 6: Failed Check Valve */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 6</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Failed Check Valve</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who it affects:</strong> Any well with a submersible pump.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it happens:</strong> The check valve is a one-way valve located just above the submersible pump. It prevents pressurized water from draining back into the well when the pump shuts off. When the check valve fails (the valve seat wears or debris holds the valve open), the water column in the drop pipe drains back into the well every time the pump shuts off. The pump has to refill the entire drop pipe from scratch every time it starts, which takes longer than normal and depletes the pressure tank before pressure builds.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Symptoms:</strong> Pressure drops to zero more quickly than normal after the pump shuts off. The pump short-cycles (turns on and off frequently) without the bladder-failure signature. You can hear the water draining back down the drop pipe after the pump shuts off (a gurgling sound at the wellhead).</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it matters here:</strong> A failed check valve alone does not usually cause complete loss of water, but a failed check valve in combination with a marginally performing pump, an undersized pressure tank, or heavy demand can result in effectively no usable pressure. Address check valve failure promptly.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Fix:</strong> Replacing a check valve requires pulling the pump from the well. Contractor work. Cost: typically absorbed into the service call, $150 to $400 for the visit plus valve replacement.</p>
        </div>

        {/* Cause 7: Broken Drop Pipe or Wiring */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 7</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Broken Drop Pipe or Wiring</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who it affects:</strong> Older systems, systems with deteriorated materials, systems after electrical events.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Why it happens:</strong> The drop pipe is the pipe that carries water from the pump up through the well casing. It is typically PVC plastic in 20-foot threaded sections. After years in the well, thread couplings can crack or fail. A cracked drop pipe means the pump is delivering water, but some or all of it is dropping back into the well casing rather than reaching the surface.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Similarly, the electrical wiring running alongside the drop pipe can suffer insulation failure after years of immersion. A wiring failure between the control box and the pump may allow the pump to receive some power but not enough to run at full capacity, or may cause intermittent operation.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Symptoms:</strong> Pump runs but no water or very little water reaches the surface despite confirmed pump operation. The breaker does not trip. The pump hums normally but pressure does not build.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Fix:</strong> Drop pipe failure and wiring failure both require pulling the pump. Contractor work. A contractor doing a pump service call will inspect the drop pipe and wiring before concluding the pump has failed.</p>
        </div>

        {/* The No-Water Decision Tree */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Decision Tree</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The No-Water Decision Tree</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Use this to find your situation quickly:</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>No sound from system, gauge reads zero, power is on</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Check the breaker first. If the breaker is fine, check the pressure switch contacts. If contacts are burned, replace the switch. If contacts are clean, check for a frozen sensing tube in winter. If none of the above, the pump wiring or motor has failed — call a contractor.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump runs, gauge reads zero, no water delivered</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pump is running but not moving water. Possible causes: dry well (water table below intake), failed pump impellers, cracked drop pipe. Turn off the pump immediately to prevent dry-run damage. Call a contractor.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump runs, gauge builds pressure briefly, pressure then drops quickly</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Failed check valve or a leak in the supply line from the well to the house. If the gauge drops slowly, check for wet ground between the wellhead and the house (indicating a buried pipe leak). If it drops quickly, the check valve is the likely culprit.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>No water only in winter, system was working fine before the cold</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Frozen pressure switch sensing tube or frozen supply pipe. Thaw the sensing tube first. If that does not restore water, locate and thaw the supply pipe.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water sputtered and had air in it before going completely dry</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The well is likely running dry. Turn off the pump, wait 1 to 2 hours, try again with minimal use. If water returns, you have a yield limitation.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Breaker trips immediately upon reset</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Short circuit in the motor or wiring. Do not reset again. Call a contractor.</p>
            </div>
          </div>
        </div>

        {/* When to Call a Contractor — DIY vs Contractor Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Action</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>When to Call a Contractor: The Clear List</h2>
          <div className='overflow-x-auto -mx-4 px-4 mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Situation</th>
                  <th className='text-left p-3 font-semibold text-slate-900 border border-slate-200'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>The breaker tripped once and resets cleanly</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#0F6E56' }}>DIY — done</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>The pressure switch contacts are burned</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#0F6E56' }}>DIY — replace the switch ($20–$50)</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>The control box capacitor on a three-wire pump has failed</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#0F6E56' }}>DIY — replace capacitor ($30–$75)</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>The pressure switch sensing tube is frozen</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#0F6E56' }}>DIY — hair dryer fix</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>You suspect the well ran dry</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#0F6E56' }}>DIY — rest the well first before calling</td>
                </tr>
                <tr style={{ backgroundColor: '#FEF3C7' }}>
                  <td className='p-3 border border-slate-200 text-slate-700'>The breaker trips immediately and repeatedly</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#A32D2D' }}>Call contractor same-day</td>
                </tr>
                <tr style={{ backgroundColor: '#FEF3C7' }}>
                  <td className='p-3 border border-slate-200 text-slate-700'>The pump runs but delivers no water and the well is not dry</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#A32D2D' }}>Call contractor same-day</td>
                </tr>
                <tr style={{ backgroundColor: '#FEF3C7' }}>
                  <td className='p-3 border border-slate-200 text-slate-700'>You smell burning from the pressure switch or control box</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#A32D2D' }}>Call contractor same-day</td>
                </tr>
                <tr style={{ backgroundColor: '#FEF3C7' }}>
                  <td className='p-3 border border-slate-200 text-slate-700'>Water has returned but pressure remains very low after all checks</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#A32D2D' }}>Call contractor same-day</td>
                </tr>
                <tr style={{ backgroundColor: '#FEF3C7' }}>
                  <td className='p-3 border border-slate-200 text-slate-700'>You cannot identify the cause after working through this sequence</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold' style={{ color: '#A32D2D' }}>Call contractor same-day</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>The well appears to have a yield limitation</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold text-slate-500'>Call contractor — no emergency</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>The check valve appears to have failed</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold text-slate-500'>Call contractor — no emergency</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>The pump is more than 12 years old with intermittent failures</td>
                  <td className='p-3 border border-slate-200 text-slate-700 font-semibold text-slate-500'>Call contractor — no emergency</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Temporary Water Solutions */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Emergency</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Temporary Water Solutions While You Wait for Repairs</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If you are without water and waiting for a contractor, here are your immediate options:</p>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Bottled water</strong> for drinking and cooking. Plan for approximately one gallon per person per day minimum for drinking and sanitation.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Fill bathtubs and large containers</strong> before the water stops entirely if you have warning. A standard bathtub holds 40 to 60 gallons, enough for toilet flushing for several days.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>For toilet flushing,</strong> a bucket of water poured directly into the toilet bowl (not the tank) will flush it.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Contact your local fire department</strong> or emergency management office if you are in a prolonged outage. Many rural areas have emergency water delivery resources for households without water.</p>
            </div>
          </div>
        </div>

        {/* What a Contractor Will Do */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Contractor</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What a Contractor Will Do on a No-Water Call</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Understanding what a contractor actually does on arrival helps you know whether the work is appropriate and the price is fair.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>First, they will run through the same electrical checks described above: breaker, pressure switch, control box. Any competent contractor starts at the cheap stuff.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Next, they will test pump motor performance with an amp clamp. This measures whether the pump is drawing current within the nameplate range. A motor drawing higher than rated amps is failing. A motor drawing zero amps is not running at all.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If the pump motor is confirmed failed, they will pull the pump. This requires a cable puller or tripod, is physical work, and typically takes 2 to 4 hours for a standard residential well. They will inspect the drop pipe and wiring as they pull.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>They will quote you pump replacement on the spot once they can see the pump specifications. Get the pump brand, model, and horsepower confirmed in writing before you agree to replacement. The replacement pump should match the original specifications unless the contractor recommends otherwise with a clear explanation.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>After installation they will run the system through several pressure cycles to confirm proper operation and measure the pump output in gallons per minute to confirm adequate yield.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Average cost:</strong> $400 to $2,500 for a complete pump replacement depending on depth, pump size, and labor rates in your region. Emergency or weekend rates add $150 to $300 to the call.</p>
        </div>

        {/* FAQ Section */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Why does my well have no water?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The most common causes in order of frequency are a tripped circuit breaker, a failed pressure switch, a failed pump motor or start capacitor, a well running dry from seasonal low water tables or drought, a frozen pressure switch sensing tube in winter, and a failed check valve. Start by checking the breaker, then the pressure switch contacts, before assuming the pump has failed. Many no-water situations are resolved by a $25 pressure switch replacement or a simple breaker reset.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                What do I do if I have no water from my well?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>First, check your circuit breaker panel for a tripped double-pole breaker labeled {`"`}well pump.{`"`} Reset it firmly (push to OFF then to ON). If water returns, you may be done. If not, check the pressure switch contacts for burning or corrosion, check the pressure gauge reading, and listen for whether the pump is running. If the pump runs but delivers no water, turn it off immediately to prevent dry-run damage and call a contractor.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                How long does it take for a well to recover after running dry?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>It depends entirely on the aquifer type and local recharge conditions. A well that ran dry from brief overuse in an unconfined aquifer may recover in 1 to 4 hours after the pump is turned off. A well depleted by extended drought may take weeks to months to recover fully. The USGS documents that shallow, unconfined aquifer wells recover faster than deep confined aquifer wells after drought. If your well recovers after an hour of rest but continues to struggle under normal use, you have a yield limitation that needs professional assessment.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Can a tripped breaker cause no water from a well?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Yes. A tripped double-pole circuit breaker is one of the most common causes of sudden complete water loss from a well. The breaker protects the 240-volt circuit powering the pump. When it trips, the pump receives no power and no water is delivered. Check the breaker panel first, before any other diagnosis. A single trip that resets cleanly is usually a fluke. A breaker that trips repeatedly indicates a pump or wiring problem requiring professional attention.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Why is my well pump not turning on?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The most common reasons a well pump will not turn on are: no power reaching the pump (tripped breaker or disconnected well shutoff switch), a failed pressure switch that is not sending the start signal, a frozen pressure switch sensing tube in winter, a burned start capacitor on a three-wire pump, or a failed pump motor. Check the breaker first, then open the pressure switch with the power off and examine the contacts. On three-wire systems, check the control box for a burned capacitor before concluding the pump itself has failed.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Is it safe to drink water from a well after it has run dry?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Test before drinking after any well has run dry. When a well runs dry, the pump draws from very near the bottom of the well, which may disturb sediment and introduce bacteria. After the well recovers, flush the system thoroughly (run water until clear), then test for total coliform bacteria and nitrates before resuming use for drinking and cooking. Use bottled water in the interim.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                How do I know if my well pump has failed or if the well is just dry?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Listen and observe carefully. A dry well typically shows a progression: first sputtering and air bubbles in the water, then intermittent flow, then nothing. A failed pump stops more abruptly, often with the system pressurized normally right before failure. The clearest diagnostic: turn off the pump, wait two hours, restore power. If water returns (even weakly), the aquifer was temporarily depleted and the pump is likely fine. If nothing returns despite all electrical components working correctly, the pump has likely failed.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                What causes a well to suddenly have no water?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Sudden complete loss of water from a well is most commonly caused by a tripped circuit breaker, a failed pressure switch, or a pump motor failure. Less common causes include a frozen pressure switch sensing tube (in winter), a sudden drop in the water table from drought or nearby heavy pumping, a cracked drop pipe, or a short circuit in the pump wiring. The diagnostic sequence is the same regardless: check breaker, check pressure switch, check control box (for three-wire pumps), then call a contractor if those components are functioning normally.</div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Circuit Breaker, Double-Pole</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The electrical protection device for the well pump circuit. Well pumps run on 240 volts and require a double-pole breaker (two switches connected by a bar) in the main electrical panel. A tripped breaker sits between ON and OFF. Reset by pushing firmly to OFF then to ON. A breaker that trips immediately upon reset indicates an electrical fault requiring professional diagnosis.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure Switch</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The device that senses system water pressure and turns the pump on at a low setpoint and off at a high setpoint. Mounted near the pressure tank on a small sensing tube. A failed pressure switch is among the most common causes of a pump not starting. New switch costs $20 to $50 and is one of the few well components homeowners can safely replace.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Control Box</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The above-ground component box on three-wire well pump systems that houses the start capacitor, run capacitor, and relay for the pump motor. Mounted on a wall near the pressure tank. A failed start capacitor in the control box is the most common fixable cause of a well pump that hums but does not start. Control box components cost $30 to $150 to replace without pulling the pump.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Check Valve</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A one-way valve located just above the pump in the drop pipe that prevents water from draining back into the well when the pump stops. Check valve failure causes pressure to bleed down quickly after the pump shuts off and requires pulling the pump for replacement.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Static Water Level</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The depth from the surface to the water level in the well when the pump is not running. When drought or overuse drops this level below the pump intake, the well has effectively run dry. Recovery time depends on the aquifer type and local rainfall.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Dry-Run Damage</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Damage to a submersible pump motor that occurs when the pump runs without water flowing past the motor housing. Submersible motors are water-cooled. Without water, heat builds rapidly and destroys motor windings and bearings within minutes. Suspected dry-run is the most urgent reason to shut off the pump breaker immediately.</p>
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
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <Link href='/problems/well-running-dry' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Running Dry</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
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
