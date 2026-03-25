import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Well Water Pressure Low: 6 Causes and How to Fix Each One | The Well Guide',
  description: 'Low well water pressure has six distinct causes — waterlogged pressure tank, failing pump, dropping water table, clogged well screen, faulty pressure switch, or clogged filters — and each requires a different fix. This guide shows you how to diagnose which one you have in minutes and what to do about it.',
  openGraph: {
    title: 'Well Water Pressure Low: 6 Causes and How to Fix Each One',
    description: 'Low well water pressure has six distinct causes — waterlogged pressure tank, failing pump, dropping water table, clogged well screen, faulty pressure switch, or clogged filters — and each requires a different fix.',
    url: 'https://well.guide/problems/well-water-pressure-low',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://well.guide/well%20pressure.jpg', width: 1200, height: 630, alt: 'Well water pressure gauge on a residential pressure tank' }],
  },
  alternates: { canonical: 'https://well.guide/problems/well-water-pressure-low' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why is my well water pressure low all of a sudden?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sudden low pressure almost always points to a mechanical failure. The most likely causes in order of probability are: a waterlogged pressure tank (bladder failure), a failed or sticking pressure switch, a tripped circuit breaker, or a failed pump capacitor. Check the circuit breaker first, then watch the pressure gauge while running water and look for rapid pump cycling every few seconds, which confirms a waterlogged tank.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well water pressure drop when I use multiple fixtures at once?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is almost always a capacity problem. Your well pump\'s flow rate cannot keep up with simultaneous demand — the pressure tank empties faster than the pump refills it. Possible causes include an undersized pump, a low-yield well, an undersized pressure tank, or peak-season water table decline. Running high-demand activities sequentially helps in the short term. A storage tank or constant pressure system is the long-term solution.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my pressure tank is bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Press the Schrader valve (the tire valve stem) on top of the tank with the pump off and pressure released. Air should come out. If water sprays out, the bladder has failed. A simpler test: if your pump turns on and off every few seconds when water is running, the tank is waterlogged. A healthy pressure tank should allow the pump to run for at least one to two minutes between cycles.',
      },
    },
    {
      '@type': 'Question',
      name: 'What PSI should my well water pressure be?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard residential well system operates between 30 and 60 PSI. Most comfortable household use falls between 40 and 60 PSI. The system cycles between a cut-in pressure (where the pump starts) and a cut-out pressure (where it shuts off), typically 30/50 or 40/60 PSI. Do not exceed 60 PSI on a residential well system — higher pressure stresses pipes, fixtures, and the pump.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fix low well water pressure myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the cause. Replacing a sediment filter, cleaning aerators, checking the circuit breaker, and replacing the pressure switch are reasonable DIY tasks. Replacing a pressure tank is manageable for a confident homeowner. Anything involving the submersible pump itself — pulling it from the well, testing output, or replacing it — requires a licensed well contractor with proper hoisting equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix low well water pressure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost depends entirely on the cause. Sediment filter cartridge: $5 to $30. Pressure switch replacement: $15 to $200 including labor. Pressure tank replacement: $300 to $700 installed. Pump capacitor: $30 to $75 DIY. Well pump replacement: $800 to $2,500 installed. Storage tank for a low-yield well: $1,500 to $4,000. Get the diagnosis right before spending money — replacing a pump to fix a $25 pressure switch problem is a very common mistake.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a water softener cause low water pressure?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, a clogged or improperly sized water softener can restrict flow and reduce household pressure. If the resin bed has channeled, the injector is clogged, or the bypass valve is partially engaged, pressure downstream will be lower than what the well system is delivering. Always check the softener bypass before diagnosing pressure problems elsewhere.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well pressure drop after being away for several days?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'This is an early sign of pressure tank bladder failure. A weak bladder loses its air cushion over time when the pump is not cycling. After several days without use, the tank is partially waterlogged and pressure is low at first draw. It improves once the pump refills the system. The tank is not bad enough to short-cycle constantly yet, but it is declining. Budget for pressure tank replacement.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Water Pressure Low: 6 Causes and How to Fix Each One',
  description: 'Low well water pressure has six distinct causes — waterlogged pressure tank, failing pump, dropping water table, clogged well screen, faulty pressure switch, or clogged filters — and each requires a different fix.',
  image: 'https://well.guide/well%20pressure.jpg',
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
  mainEntityOfPage: 'https://well.guide/problems/well-water-pressure-low',
}

export default function WellWaterPressureLow() {
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
          src='/well pressure.jpg'
          alt='Well water pressure gauge on a residential pressure tank'
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
            Well Water Pressure Low:<br />
            <span style={{ color: '#5DCAA5' }}>6 Causes and How to<br />Fix Each One</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            The fastest fix starts with your pressure gauge. Watch it while someone runs water — what it does in the first 30 seconds tells you the cause.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated Mar 2026 &middot; 15 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Problems', href: '/problems' },
        { label: 'Well Water Pressure Low' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Low well water pressure has six distinct causes: a waterlogged pressure tank, a failing well pump, a dropping water table, a clogged well screen or intake, a faulty pressure switch, or clogged filters and treatment equipment. The fastest way to start diagnosing is to watch the pressure gauge on your pressure tank while someone runs water in the house. If the gauge drops quickly and the pump cycles on and off every few seconds, the pressure tank is the problem. If the gauge builds slowly and the pump runs a long time before shutting off, the pump or well yield is the likely culprit. Start there, then follow the diagnostic steps below to confirm.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Low water pressure from a well is one of the most frustrating problems a homeowner can face, and it almost always gets misdiagnosed. The instinct is to blame the pump, which leads to expensive pump replacements that leave the real problem untouched. In reality, a failing pump is one of the less common causes. A $25 pressure switch or a $300 pressure tank is far more likely to be the culprit, and both are fixable without pulling anything out of the ground.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The reason misdiagnosis is so common is that every cause produces the same symptom at the tap: weak flow. You cannot tell from a dribbling shower whether the problem is the pressure tank, the pump, the water table, a clogged screen, the pressure switch, or a blocked filter. But you can tell in minutes with the right diagnostic steps, without expensive service calls.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This guide walks through all six causes, gives you a step-by-step diagnosis path, and explains exactly what to do for each one.</p>
        </div>

        {/* Is It Actually Low Pressure or Low Flow? */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Basics</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Is It Actually Low Pressure or Low Flow?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Before diagnosing, it helps to understand that pressure and flow are related but distinct.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Pressure</strong> is the force pushing water through the pipes, measured in PSI (pounds per square inch). A standard residential well system cycles between a cut-in pressure of 30 or 40 PSI and a cut-out of 50 or 60 PSI. Most households run comfortably at 40 to 60 PSI.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Flow rate</strong> is the volume of water delivered per unit of time, measured in gallons per minute (GPM). A typical residential well pump delivers 5 to 20 GPM. A household of four people typically needs 5 to 8 GPM for comfortable simultaneous use.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>You can have adequate pressure but poor flow if your pipes are undersized or your pump cannot sustain its rated GPM. You can have adequate flow but poor pressure if your pressure switch settings are too low. Most homeowners report {`"`}low pressure{`"`} when they experience either problem or both together.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>Checking your pressure gauge gives you the starting data point. If the gauge reads below 30 PSI while water is being used, pressure is genuinely low. If it reads 40 to 50 PSI but showers still feel weak, the problem may be flow restriction somewhere between the well and the fixture.</p>
        </div>

        {/* Is It a Pressure Problem or Something Else? */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Rule-Outs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Is It a Pressure Problem or Something Else?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>A few situations can mimic low pressure but have different causes worth ruling out first:</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Single fixture only</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If pressure is weak at only one faucet or showerhead, clean or replace the aerator or showerhead. Mineral buildup is the most common cause of localized flow restriction and takes two minutes to check.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure fine normally but drops when two things run at once</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This is a capacity issue — your pump{`'`}s flow rate is adequate for single-use but cannot keep up with simultaneous demand. Possible causes include an undersized pump, a low-yield well, or undersized supply pipes.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure fine until recently, then sudden drop</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Sudden changes usually point to a mechanical failure — waterlogged tank, failing pump, or a stuck check valve — rather than gradual system decline.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure drops in summer or during drought</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Water table decline. The well cannot deliver water as fast as the pump is demanding it. This is a yield problem, not a mechanical one.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-6'>Once you have ruled out single-fixture issues and confirmed the problem is system-wide, start the diagnostic below.</p>
        </div>

        {/* The 5-Minute Pressure Gauge Test */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The 5-Minute Pressure Gauge Test</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>This is the fastest way to narrow down the cause before doing anything else.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>What you need:</strong> A clear view of the pressure gauge on your pressure tank. This is the round dial gauge mounted near the tank or on the pipe entering the tank. If you do not have one, a gauge can be installed on any hose bib close to the tank for about $15.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The test:</strong></p>
          <ol className='list-decimal list-inside space-y-2 mb-6 text-slate-700 text-sm leading-relaxed'>
            <li>Note the gauge reading when no water is running. It should sit at or near the cut-out pressure — 50 or 60 PSI on most systems.</li>
            <li>Have someone run a faucet fully open. Watch the gauge.</li>
            <li>Note: how quickly does the pressure drop? At what PSI does the pump kick on? How quickly does it recover? Does the pump cycle on and off rapidly?</li>
          </ol>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What the results tell you:</strong></p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure drops quickly (within seconds), pump cycles on and off repeatedly</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Waterlogged pressure tank. The bladder has failed and there is no air cushion to buffer demand. The pump is working correctly — the tank is not.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump turns on and runs for a long time but pressure builds slowly or barely reaches cut-out</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Pump is underperforming. Possible failing pump, worn impellers, or declining well yield.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure drops and the pump does not turn on, or turns on briefly and shuts off</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Pressure switch failure or wiring issue. The switch is not reading pressure correctly or not sending the correct signal.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure at the gauge looks fine (40+ PSI) but flow at fixtures is weak</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Flow restriction downstream — clogged filter, partially closed valve, or mineral buildup in pipes.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure gauge reads zero with no water running</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Pump has stopped delivering water entirely. Check the circuit breaker first, then the pressure switch.</p>
            </div>
          </div>
        </div>

        {/* The Six Causes */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Causes &amp; Fixes</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-8'>The Six Causes: Diagnosis and Fix</h2>

          {/* Cause 1 */}
          <div className='mb-12'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Cause 1: Waterlogged Pressure Tank</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How common:</strong> The most frequent cause of sudden-onset low pressure on residential well systems.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What happens:</strong> Inside a modern bladder-type pressure tank, a rubber bladder separates the water from a pre-charged air cushion. When the pump fills the tank, water compresses the air. That compressed air is what pushes water through the house when you open a tap, allowing the pump to rest between cycles. When the bladder ruptures or develops a leak, water fills the entire tank and the air cushion is lost. The pump now has to cycle on every time you open a faucet, building pressure from scratch each time. This is called short-cycling.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Symptoms:</strong></p>
            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 text-sm leading-relaxed'>
              <li>Pressure gauge fluctuates rapidly when water is running</li>
              <li>Pump turns on and off every 5 to 10 seconds</li>
              <li>Water pressure pulses or surges rather than flowing steadily</li>
              <li>You can hear the pump clicking on and off frequently</li>
            </ul>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Confirm it:</strong> With the pump off and pressure relieved, press the Schrader valve on top of the pressure tank (it looks like a tire valve). If water sprays out rather than air, the bladder has failed and the tank is waterlogged.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Fix:</strong> Replace the pressure tank. This is the appropriate fix and is not negotiable — a failed bladder cannot be repaired. A standard 32 to 50 gallon residential pressure tank costs $150 to $400. Installation by a plumber or well contractor typically adds $150 to $300. This is a straightforward job and one of the less expensive well system repairs.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Before replacing the tank, confirm the air pre-charge is correct on the new tank. The pre-charge should be set to 2 PSI below the cut-in pressure of the pressure switch. For a 30/50 switch, the pre-charge should be 28 PSI. For a 40/60 switch, the pre-charge should be 38 PSI. Setting this correctly prevents short-cycling from day one.</p>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm font-semibold'>Typical cost: $300 to $700 installed.</p>
            </div>
          </div>

          {/* Cause 2 */}
          <div className='mb-12'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Cause 2: Faulty Pressure Switch</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How common:</strong> Second most common cause, often overlooked because it is cheap and easy to check.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What happens:</strong> The pressure switch is a small device mounted near the pressure tank on a quarter-inch tube. It reads system water pressure and tells the pump when to turn on (at cut-in PSI) and when to shut off (at cut-out PSI). Standard residential settings are 30/50 PSI or 40/60 PSI.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Several things can go wrong. The contacts inside can burn, pit, or corrode, causing a poor electrical connection that prevents the pump from starting reliably. The sensing tube can clog with sediment, preventing the switch from reading pressure accurately. Insects — particularly ants, which are famously attracted to the electrical components inside the switch — can clog or damage the internal mechanism. The spring mechanism can wear out, causing the switch to read incorrectly.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Symptoms:</strong></p>
            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 text-sm leading-relaxed'>
              <li>Pressure gauge reads normal but pump will not turn on</li>
              <li>Pump turns on but does not turn off</li>
              <li>Pump turns on erratically or needs to be manually reset</li>
              <li>Low pressure despite the pump running normally</li>
              <li>Pump hums but does not start (can also indicate a bad capacitor)</li>
            </ul>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Confirm it:</strong> With power off, remove the cover of the pressure switch. Look for burned or pitted contacts, insect debris, rust, or corrosion on the sensing port. Tapping the switch casing sometimes temporarily restores a connection on corroded contacts — if the pump kicks on after a tap, the contacts are the problem.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Fix:</strong> Replace the pressure switch. A new switch costs $15 to $40 and takes about 30 minutes to install if you are comfortable with basic electrical work — it involves connecting a few wires and a threaded fitting. Turn off power to the pump at the circuit breaker before starting. Label the wires before disconnecting.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>If you adjust the switch settings rather than replace it, note that the large center nut adjusts both cut-in and cut-out pressure together. Turning clockwise raises pressure. A full turn typically changes the setting by a few PSI. Do not set cut-out pressure above 60 PSI — this stresses pumps and plumbing. Always reset the pressure tank pre-charge to 2 PSI below the new cut-in setting whenever you change switch settings.</p>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm font-semibold'>Typical cost: $15 to $40 for DIY; $75 to $200 including professional labor.</p>
            </div>
          </div>

          {/* Cause 3 */}
          <div className='mb-12'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Cause 3: Failing Well Pump</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How common:</strong> Third most common cause. More likely if the pump is over 10 years old, if water quality is poor, or if the well has run dry at any point.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What happens:</strong> A submersible well pump has a motor and a series of impellers that force water up the drop pipe. Several specific failure modes cause low pressure rather than complete failure:</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Worn impellers reduce the pump{`'`}s output GPM even when the motor runs normally. Abrasive sediment in sandy aquifers accelerates impeller wear. A pump with worn impellers runs continuously but cannot build pressure past a certain point.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>A failing check valve — located just above the pump at the bottom of the drop pipe — allows pressurized water to flow back down into the well when the pump shuts off. The system must re-pressurize from zero every time the pump cycles. Symptoms are similar to a waterlogged tank but the tank itself tests fine.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>A bad capacitor in the control box prevents the motor from starting at full power. The pump may hum, start slowly, or draw more current than normal. Control box capacitors are inexpensive and are one of the most common electrical failures on submersible pumps, accounting for a significant fraction of {`"`}pump failures{`"`} that turn out to be nothing more than a $30 capacitor replacement.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Cavitation occurs when the water table drops below the pump intake during periods of heavy use, causing the pump to draw air. This produces distinctive sputtering from faucets, erratic pressure, and can cause impeller damage if it occurs repeatedly.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Symptoms:</strong></p>
            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 text-sm leading-relaxed'>
              <li>Pump runs for long periods but pressure builds slowly or never reaches cut-out</li>
              <li>Pressure is adequate at first but drops significantly during sustained use</li>
              <li>Air sputtering from faucets during or after heavy water use</li>
              <li>Pump has been in service more than 10 years</li>
              <li>Sudden pressure loss following unusual events (power surge, running dry during drought)</li>
            </ul>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Confirm it:</strong> A licensed well contractor can measure the pump{`'`}s output in GPM and compare it to the manufacturer specification. Clamp-on ammeter readings can also indicate motor wear. These tests are definitive but require professional equipment.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Fix:</strong> Depends on the specific failure mode. A bad capacitor: $30 to $75 and a DIY repair if the control box is above ground. A failed check valve: requires pulling the pump assembly, typically $500 to $1,500 depending on well depth. Worn impellers or motor failure: pump replacement, typically $800 to $2,500 installed depending on depth and pump size. See our <Link href='/cost-guides/well-pump-replacement-cost' className='underline' style={{ color: '#1D9E75' }}>well pump replacement cost guide</Link> for regional pricing breakdowns.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>One important note: do not simply replace the pump if you have not ruled out the pressure tank and pressure switch first. Both present similar symptoms and cost a fraction of pump replacement.</p>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm font-semibold'>Typical cost: $800 to $2,500 installed for full pump replacement. Capacitor: $30 to $75 DIY.</p>
            </div>
          </div>

          {/* Cause 4 */}
          <div className='mb-12'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Cause 4: Dropping Water Table or Low Well Yield</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How common:</strong> Highly common during drought and dry seasons; also occurs as a permanent condition in wells that have been over-drilled for the aquifer{`'`}s natural yield.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What happens:</strong> Every well has a yield — the rate at which the aquifer can deliver water to the borehole. A typical household needs 5 GPM or more for comfortable simultaneous use. Many rural wells yield 3 to 5 GPM under normal conditions. During drought or high seasonal demand, the water table drops and the pump{`'`}s intake approaches the water surface. The pump begins drawing air alongside water, pressure becomes erratic, and eventually the pump runs dry.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><a href='https://extension.psu.edu/water-supply-for-rural-areas' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: '#1D9E75' }}>Penn State Extension</a> and the US Geological Survey both note that seasonal aquifer depletion is a common and expected phenomenon, not necessarily a sign of permanent well failure. In most cases, the water table recovers when rainfall returns. In areas with severe groundwater depletion from agricultural or municipal extraction — parts of California, the Great Plains, and the Southwest — the decline can be more lasting.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Symptoms that distinguish this from mechanical failure:</strong></p>
            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 text-sm leading-relaxed'>
              <li>Problem is seasonal — worse in late summer and fall, better in spring</li>
              <li>Problem worsens significantly during drought conditions in your region</li>
              <li>Pressure is fine at low-demand times (overnight, early morning) but collapses during peak use</li>
              <li>Air sputtering from faucets during heavy use that clears up when you stop drawing water and wait</li>
              <li>Muddy or sandy water at low-pressure moments (pump is approaching the bottom of the well and pulling sediment)</li>
              <li>Pressure recovers after resting the system for 30 to 60 minutes</li>
            </ul>
            <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Fix options:</strong></p>
            <div className='space-y-4 mb-4'>
              <div className='bg-white border border-slate-200 rounded-lg p-5'>
                <h4 className='font-bold text-slate-900 text-sm mb-2'>Conservation during dry periods</h4>
                <p className='text-slate-700 text-sm leading-relaxed'>Stagger high-demand activities (laundry, dishwasher, irrigation, showers) across the day rather than running them simultaneously. Avoid heavy water use during periods of known drought stress.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-5'>
                <h4 className='font-bold text-slate-900 text-sm mb-2'>Lower the pump</h4>
                <p className='text-slate-700 text-sm leading-relaxed'>A licensed well contractor can lower the pump further into the borehole to access water below the current pump depth. This is appropriate when there is water available below the current pump position. Not appropriate if the borehole itself is running dry.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-5'>
                <h4 className='font-bold text-slate-900 text-sm mb-2'>Add a storage tank</h4>
                <p className='text-slate-700 text-sm leading-relaxed'>A holding tank installed between the well and the pressure tank stores water during periods of low demand (overnight) and buffers peak demand periods. This is the most reliable solution for genuinely low-yield wells.</p>
              </div>
              <div className='bg-white border border-slate-200 rounded-lg p-5'>
                <h4 className='font-bold text-slate-900 text-sm mb-2'>Deepen or redrill the well</h4>
                <p className='text-slate-700 text-sm leading-relaxed'>For wells that have declined permanently due to aquifer changes, deepening to a lower aquifer or drilling a new well may be the only long-term solution. This is expensive ($5,000 to $15,000 or more) and should only be considered after confirming that lower aquifers exist and are accessible.</p>
              </div>
            </div>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Do not run the pump dry. If the well is running low, turn off the pump and wait for recovery rather than running it continuously. A pump running without water overheats and damages impellers within minutes.</p>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm font-semibold'>Typical cost: Storage tank installation: $1,500 to $4,000. Pump lowering: $400 to $1,000. Well deepening: $5,000 to $15,000+.</p>
            </div>
          </div>

          {/* Cause 5 */}
          <div className='mb-12'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Cause 5: Clogged Well Screen or Intake</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How common:</strong> Less common than the causes above but worth knowing, particularly in older wells and those with high iron or manganese.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What happens:</strong> At the bottom of the well casing, a well screen filters sediment and allows water to enter from the aquifer. Over years and decades, mineral scale, sediment, and most significantly iron bacteria can accumulate on the screen and the surrounding borehole wall. Iron bacteria form thick, reddish-brown or orange slime that coats surfaces and dramatically restricts water flow into the borehole. The pump output drops not because the pump has failed but because water cannot get into the borehole fast enough.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>This failure mode is often gradual — pressure declines slowly over months or years rather than suddenly overnight. Homeowners sometimes attribute this to an {`"`}aging system{`"`} without recognizing that the well can often be rehabilitated.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Symptoms:</strong></p>
            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 text-sm leading-relaxed'>
              <li>Gradual pressure decline over months or years</li>
              <li>Well has high iron or iron bacteria in the water</li>
              <li>Flow rate has declined from what it was when the well was new</li>
              <li>Water has reddish-brown or orange staining or slime</li>
              <li>The pump tests fine but yield has dropped significantly</li>
            </ul>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Confirm it:</strong> A well contractor can perform a yield test (comparing current output to the well{`'`}s original driller{`'`}s log) and a pump test to determine whether reduced yield is coming from the well or the pump.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Fix:</strong> Well rehabilitation, which involves brushing the screen and casing mechanically, surging water to dislodge deposits, and chemical treatment with acidic or oxidizing solutions to dissolve mineral scale and kill iron bacteria. This is a licensed contractor job. Well rehabilitation can restore significant yield in a well that appears exhausted from biofouling and mineral deposits.</p>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm font-semibold'>Typical cost: $500 to $2,000 for professional well rehabilitation depending on well depth and severity of clogging.</p>
            </div>
          </div>

          {/* Cause 6 */}
          <div className='mb-12'>
            <h3 className='text-xl font-bold text-slate-900 mb-4'>Cause 6: Clogged Filters or Treatment Equipment</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How common:</strong> Surprisingly common and almost always overlooked — the most easily fixed cause of low well water pressure.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What happens:</strong> A sediment filter installed at the point of entry, or a water softener or iron filter in the treatment train, becomes clogged and restricts flow before water ever reaches the household plumbing. Many homes check the pump, the tank, and the pressure switch while ignoring a filter housing that has not been serviced in two years.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Symptoms:</strong></p>
            <ul className='list-disc list-inside space-y-1 mb-4 text-slate-700 text-sm leading-relaxed'>
              <li>Pressure is low throughout the house but the pressure gauge at the tank reads normal</li>
              <li>Pressure immediately before the filter is normal, pressure downstream is low</li>
              <li>Flow has declined gradually, not suddenly</li>
              <li>Pressure improves noticeably when you open the bypass valve on a softener or iron filter</li>
            </ul>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Confirm it:</strong> If you have any treatment equipment installed, use its bypass valve to route water around it and check whether pressure at the fixtures improves immediately. If pressure returns to normal on bypass, the treatment equipment is the restriction.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Also check the sediment filter housing. A clogged 5-micron sediment filter creates significant back-pressure. If the filter has not been changed recently, swap it before investigating anything else.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Fix:</strong> Replace the sediment filter cartridge. Regenerate or service the water softener or iron filter. If a filter is consistently clogging faster than expected, check whether the filter micron rating is appropriate for your water{`'`}s sediment level — you may need a coarser pre-filter ahead of a fine filter to extend cartridge life.</p>
            <div className='bg-slate-50 border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm font-semibold'>Typical cost: $5 to $30 for a sediment filter cartridge. Service call for a stuck or failed softener: $100 to $300.</p>
            </div>
          </div>
        </div>

        {/* Diagnosis Decision Tree */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Decision Tree</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Diagnosis Decision Tree</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Use this to find your most likely cause before calling a contractor.</p>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-slate-100'>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Question</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Answer</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Likely Cause / Next Step</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 align-top' rowSpan={2}>Is pressure low at all fixtures throughout the house?</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No, only one fixture</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Clean the aerator or showerhead on that fixture</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Continue below</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700 align-top' rowSpan={2}>Is your pressure gauge reading below 30 PSI while water is running?</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No, gauge reads normal but flow feels weak</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check for clogged filters. Bypass any treatment equipment and retest.</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Continue below</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 align-top' rowSpan={2}>Does the pump cycle on and off every few seconds?</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Waterlogged pressure tank. Confirm with the Schrader valve test and replace the tank.</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Continue below</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700 align-top' rowSpan={2}>Does the pump turn on at all when pressure drops?</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check the circuit breaker. If breaker is fine, check the pressure switch contacts and sensing tube.</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Continue below</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 align-top' rowSpan={2}>Does the pump run a long time but pressure builds slowly?</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes, pump under 10 years old</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check well yield and water table. Is it dry season? Have the well yield tested.</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes, pump over 10 years old</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pump wear is likely. Have a contractor test output GPM before replacing.</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 text-slate-700'>Does pressure drop sharply when you run multiple things at once but recover when you stop?</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Low well yield or undersized pump. Have a licensed well contractor perform a yield test. The fix is almost always a storage tank, not a new pump.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* DIY vs Call a Contractor */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Guidance</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>DIY vs Call a Contractor</h2>
          <div className='grid md:grid-cols-2 gap-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-3'>Handle yourself</h3>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                <li>Replacing a sediment filter cartridge</li>
                <li>Cleaning an aerator or showerhead</li>
                <li>Checking the circuit breaker</li>
                <li>Inspecting pressure switch contacts (power off)</li>
                <li>Replacing a pressure switch (if comfortable with basic electrical)</li>
                <li>Checking and refilling pressure tank air charge via the Schrader valve</li>
                <li>Replacing a pressure tank (if comfortable with basic plumbing)</li>
              </ul>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-3'>Call a licensed well contractor</h3>
              <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                <li>Any diagnosis involving the pump itself</li>
                <li>Pulling and replacing a submersible pump</li>
                <li>Well yield testing and static water level measurement</li>
                <li>Well rehabilitation for a clogged screen</li>
                <li>Lowering the pump in the borehole</li>
                <li>Any work that requires opening the well casing</li>
              </ul>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-4'>Attempting to pull a submersible pump without the right equipment risks dropping the pump and drop pipe assembly into the well, which is an expensive recovery operation. Well contractors have the hoisting equipment and experience to pull pumps without damage.</p>
        </div>

        {/* How to Increase Well Water Pressure Without a New Pump */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Upgrades</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Increase Well Water Pressure Without a New Pump</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If your system is functional but pressure is chronically lower than you would like, a few adjustments can increase it without major expense:</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Adjust the pressure switch settings</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If your system currently runs on a 30/50 setting and the pump is capable of higher pressure, switching to 40/60 increases the working pressure range by 10 PSI. To do this, replace the pressure switch with a 40/60 model (the same price as a 30/50), then adjust the pressure tank pre-charge to 38 PSI. This change improves pressure at fixtures without affecting pump life, as long as the pump is rated for 60 PSI output.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Install a constant pressure system</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A standard well system lets pressure rise and fall between two setpoints — the pump kicks on at 30 or 40 PSI and off at 50 or 60 PSI. A constant pressure controller is an electronic device that varies the pump motor speed in real time to hold pressure at a single steady setpoint regardless of demand, the same way a dimmer switch varies light intensity rather than turning fully on or off. The most common options are a Cycle Stop Valve (a mechanical flow control device) or a variable frequency drive (VFD) controller that adjusts pump speed electronically. This eliminates pressure fluctuation entirely and can make a 40 PSI well system feel much closer to city water. Cost ranges from $300 to $800 installed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Add a booster pump</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>For low-yield wells or homes with chronic demand shortfalls, a booster pump installed downstream of the pressure tank adds pressure beyond what the well system delivers. This is especially useful for homes that converted from city water and find well pressure noticeably different.</p>
            </div>
          </div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why is my well water pressure low all of a sudden?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Sudden low pressure points to a mechanical failure rather than a gradual decline. The most likely causes in order of probability are: a waterlogged pressure tank (bladder failure), a failed or sticking pressure switch, a tripped circuit breaker, or a failed pump capacitor. Check the circuit breaker first — it takes five seconds. Then watch the pressure gauge while someone runs water and look for rapid pump cycling, which confirms a waterlogged tank. See the diagnostic steps above to narrow it down before calling a contractor.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why does my well water pressure drop when I use multiple fixtures at once?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This is almost always a capacity problem rather than a mechanical failure. Your well pump{`'`}s flow rate cannot keep up with simultaneous demand. The pressure tank empties faster than the pump refills it. Possible causes include an undersized pump, a low-yield well, an undersized pressure tank, or peak-season water table decline. Running high-demand activities sequentially rather than simultaneously helps in the short term. A storage tank or constant pressure system is the long-term solution.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How do I know if my pressure tank is bad?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The most reliable field test: with the pump running, rock or tap the pressure tank. A healthy bladder tank with water and air inside will have some give when you push against it. A waterlogged tank feels completely rigid and heavy throughout. Then press the Schrader valve (the tire valve stem on top of the tank) with the pump off and pressure released. Air should come out. If water sprays out, the bladder has failed.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What PSI should my well water pressure be?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A standard residential well system operates between 30 and 60 PSI. Most comfortable household use falls between 40 and 60 PSI. If you have fixtures on multiple floors, 40/60 settings are typically better than 30/50 because pressure drops 0.43 PSI per foot of elevation. City water is typically delivered at 60 to 80 PSI, so well water at 40 to 60 PSI may feel lower by comparison even when the system is functioning correctly. Do not exceed 60 PSI on a residential well system — higher pressure stresses pipes, fixtures, and the pump.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Can I fix low well water pressure myself?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>It depends on the cause. Replacing a sediment filter, cleaning aerators, checking the circuit breaker, and even replacing the pressure switch are reasonable DIY tasks for someone comfortable with basic plumbing and electrical work. Replacing a pressure tank is a bigger job but manageable for a confident homeowner. Anything involving the pump itself — pulling it from the well, testing output, or replacing it — requires a licensed well contractor with the right equipment.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Will a water softener cause low water pressure?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A clogged or improperly sized water softener can restrict flow and reduce pressure at household fixtures. If the softener resin bed has channeled, the venturi injector is clogged, or the bypass valve is partially engaged, pressure downstream will be lower than what the well system is actually delivering. Always check the softener bypass before diagnosing pressure problems elsewhere in the system.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How much does it cost to fix low well water pressure?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>It depends entirely on the cause. A new sediment filter cartridge: $5 to $30. Pressure switch replacement: $15 to $200 including labor. Pressure tank replacement: $300 to $700 installed. Pump capacitor: $30 to $75 DIY. Well pump replacement: $800 to $2,500 installed depending on well depth. Storage tank for a low-yield well: $1,500 to $4,000. Well rehabilitation: $500 to $2,000. Get the diagnosis right before spending money — replacing a pump to fix a problem that was actually a $25 pressure switch is a very common and very expensive mistake.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why does my well pressure drop after I have been away for a few days?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Water sitting in a pressure tank that has a weak or failing bladder loses its air cushion over time. After several days without use, the air has partially escaped and the tank is partially waterlogged. Pressure is low at first draw and improves once the pump refills the system. This is an early sign of bladder failure — the tank is not bad enough to short-cycle constantly yet, but it is declining. Budget for pressure tank replacement.</p>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Cut-In Pressure</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The PSI level at which the pressure switch signals the well pump to turn on. Standard residential cut-in settings are 30 PSI (for a 30/50 system) or 40 PSI (for a 40/60 system). When water use causes tank pressure to drop to this point, the pump starts and runs until it reaches the cut-out pressure.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Cut-Out Pressure</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The PSI level at which the pressure switch signals the well pump to shut off. Standard residential cut-out settings are 50 or 60 PSI. The difference between cut-in and cut-out is called the differential, typically set at 20 PSI. Do not set cut-out above 60 PSI on a residential well system.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Waterlogged Pressure Tank</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A pressure tank in which the rubber bladder has failed, allowing water to fill the entire tank volume with no air cushion. A waterlogged tank causes the pump to short-cycle — turning on and off every few seconds — because there is no pressurized air to buffer demand between cycles. The remedy is pressure tank replacement, not pump replacement.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure Switch</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A spring-loaded electromechanical device that monitors water pressure in the system and signals the pump to start at the cut-in setpoint and stop at the cut-out setpoint. Typically mounted on a quarter-inch tube near the pressure tank. Replacement switches cost $15 to $40 and are one of the most common and least expensive well system repairs.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Short-Cycling</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A condition in which the well pump turns on and off much more frequently than normal, typically every few seconds rather than every few minutes. The most common cause is a waterlogged pressure tank. Short-cycling accelerates pump motor wear significantly and should be corrected as quickly as possible.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Well Yield</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The rate at which a well can sustainably deliver water, typically measured in gallons per minute (GPM). A residential well typically needs 5 GPM or more to meet household demand comfortably, though many wells yield less and can still serve a household with proper system design including storage tanks. Well yield is distinct from pump capacity — the pump can only deliver what the aquifer provides.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Schrader Valve</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The tire-valve-style fitting on top of a bladder-type pressure tank that allows checking and adjusting the air pre-charge. The pre-charge should be 2 PSI below the cut-in pressure of the pressure switch. On a 30/50 system, set to 28 PSI. On a 40/60 system, set to 38 PSI. Check with the pump off and all pressure released from the tank.</p>
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
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Guide to Private Well Water Systems</span>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Smells Like Sulfur</span>
            </Link>
            <Link href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </Link>
            <Link href='/problems/no-water-from-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>No Water from Well</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
            <Link href='/problems/well-running-dry' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Running Dry</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FFF8E1', color: '#F57F17' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <Link href='/guides/well-pressure-tank-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pressure Tank Guide</span>
            </Link>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
