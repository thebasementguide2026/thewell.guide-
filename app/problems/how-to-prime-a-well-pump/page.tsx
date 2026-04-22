import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'How to Prime a Well Pump: Step-by-Step Guide 2026 | The Well Guide',
  description: 'Prime a shallow well jet pump or convertible jet pump in 5 to 10 minutes with step-by-step instructions. Troubleshooting when priming does not hold, foot valve and check valve diagnosis, and when to call a professional.',
  openGraph: {
    title: 'How to Prime a Well Pump: Step-by-Step Guide 2026',
    description: 'Prime a shallow well jet pump or convertible jet pump in 5 to 10 minutes with step-by-step instructions. Troubleshooting when priming does not hold.',
    url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/primewellpump.jpg', width: 1200, height: 630, alt: 'Blue shallow well jet pump installed with plumbing fittings and electrical connections' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to prime a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Priming a shallow well jet pump typically takes 5 to 10 minutes once you have the tools ready: turn off the breaker, open a downstream faucet, unscrew the priming plug, fill the pump housing with 1 to 2 gallons of water from a hose or bucket, replace the plug with fresh thread seal tape, turn the breaker back on, and wait for the pump to build pressure. A convertible jet pump configured for a deep well takes longer (15 to 30 minutes) because both the suction pipe and pump housing must be completely filled with water, typically requiring 5 to 15 gallons. If priming fails on the first attempt, repeat the procedure 2 or 3 times to fully purge air from the suction line before concluding there is a deeper problem like a failed foot valve or air leak.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well pump keep losing prime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Well pumps lose prime repeatedly for one of three reasons: a failing foot valve at the bottom of the suction pipe in the well (the most common cause, accounting for roughly 70 percent of repeat prime-loss cases), an air leak in the suction pipe or at a pump fitting, or a failing discharge check valve between the pump and the pressure tank. To diagnose: prime the pump, shut it off at the breaker, and watch the pressure gauge for 10 minutes. If pressure drops to zero with no water use, you have a foot valve or check valve leak. If the pump runs but produces no water with a full housing, you likely have an air leak in the suction line. Repeated prime loss almost never resolves on its own and requires replacing the failing component.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I prime a submersible well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, submersible well pumps do not need priming and cannot be primed. Submersible pumps sit underwater at the bottom of the well casing and push water up to the surface rather than pulling it with suction. Because the pump is always underwater, it always has water to work with. If your submersible pump is not producing water, the problem is elsewhere in the system: a failed pump motor, a dropped water level in the well, a failed pressure switch, a failed pressure tank, or a tripped breaker. Attempting to prime a submersible pump wastes time and can delay diagnosis of the actual problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a foot valve and why does it matter for priming?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A foot valve is a one-way check valve installed at the bottom of the suction pipe in a shallow well or convertible jet pump system. The foot valve keeps water in the suction pipe and pump housing when the pump is off, maintaining the pump's prime so it can start immediately the next time it runs. When a foot valve fails (worn rubber seal, debris blocking the seat, corrosion of valve components), water drains back down into the well every time the pump shuts off, and the pump has to be manually re-primed before it can produce water again. Foot valve failure is the single most common cause of repeated prime loss in jet pump systems. Foot valve replacement costs $20 to $40 for the part plus $200 to $500 for a professional service call to pull the suction pipe from the well and replace the valve.",
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my well pump needs priming or if it has a bigger problem?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "If your jet pump or convertible jet pump is running (you can hear the motor) but no water is coming out of faucets, priming is almost certainly the immediate fix. If the pump is silent, priming will not help because the pump is not running; check for a tripped breaker, a failed pressure switch, or a motor failure. If you prime the pump and it produces water for a few seconds or minutes then stops, the well's water level may have dropped below the foot valve (drought or heavy use). If the pump primes correctly but loses prime again within hours or days, the problem is a failing foot valve, an air leak in the suction line, or a failed discharge check valve. If you have a submersible pump, priming does not apply and the problem is always elsewhere in the system.",
      },
    },
    {
      '@type': 'Question',
      name: 'What tools do I need to prime a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Priming a well pump requires basic household tools: an adjustable wrench or pipe wrench to remove the priming plug, thread seal tape (also called plumber's tape) for sealing the plug on reassembly, a garden hose or 2 to 5 gallon bucket of clean water, a clean rag for water spills, and a flashlight if the pump is in a dim basement or pump house. Total tool cost is $0 if you have these items on hand and less than $20 if you need to purchase thread seal tape and a basic adjustable wrench. Some homeowners also keep eye protection (safety glasses) for the moment when the priming plug is removed, since trapped pressure can sometimes force water out unexpectedly.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much water do I need to prime a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard shallow well jet pump requires 1 to 2 gallons of water to completely fill the pump housing during priming. A convertible jet pump in deep well configuration (25 to 90 foot well with two-pipe setup) requires 5 to 15 gallons to fill both the suction pipe and the pressure pipe down to the well, especially on first-time priming after installation or a long idle period. Use clean water from a garden hose, a rainwater collection barrel, or bottled water if municipal water is not available. Never use water that is visibly dirty or contaminated, because sediment introduced into the pump housing can damage the impeller and block the foot valve.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to prime a well pump myself or do I need a plumber?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Priming a well pump is a safe DIY task for most homeowners when done correctly. The main safety consideration is turning off the circuit breaker for the pump before removing the priming plug, which prevents accidental pump startup while the housing is open. The procedure uses only basic hand tools and requires no specialized training. However, if priming fails repeatedly, if the pump motor shows visible damage or makes abnormal sounds, if you smell something burning from the pump, or if you suspect a foot valve problem requiring the suction pipe to be pulled from the well, call a licensed well contractor. Foot valve replacement and suction line diagnosis both require specialized equipment and are better handled by a professional. Professional service calls typically run $150 to $400 for diagnosis plus parts and labor for any needed repairs.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Prime a Well Pump: Step-by-Step Guide 2026',
  description: 'Prime a shallow well jet pump or convertible jet pump in 5 to 10 minutes with step-by-step instructions. Troubleshooting when priming does not hold, foot valve and check valve diagnosis, and when to call a professional.',
  image: 'https://www.thewell.guide/primewellpump.jpg',
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  author: {
    '@type': 'Organization',
    name: 'The Well Guide Editorial Team',
    url: 'https://www.thewell.guide',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://www.thewell.guide',
    parentOrganization: {
      '@type': 'Organization',
      name: 'The Home Guide Network',
    },
  },
  mainEntityOfPage: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump',
}

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Prime a Jet Well Pump',
  description: 'Prime a shallow well jet pump or convertible jet pump in 5 to 10 minutes by turning off power, opening a downstream faucet, removing the priming plug, filling the pump housing with water, resealing the plug, and restoring power.',
  image: 'https://www.thewell.guide/primewellpump.jpg',
  totalTime: 'PT30M',
  estimatedCost: {
    '@type': 'MonetaryAmount',
    currency: 'USD',
    value: '20',
  },
  supply: [
    { '@type': 'HowToSupply', name: 'Garden hose or 2 to 5 gallon bucket of clean water' },
    { '@type': 'HowToSupply', name: "Thread seal tape (plumber's tape)" },
    { '@type': 'HowToSupply', name: 'Clean rag' },
  ],
  tool: [
    { '@type': 'HowToTool', name: 'Adjustable wrench or pipe wrench' },
    { '@type': 'HowToTool', name: 'Flashlight' },
    { '@type': 'HowToTool', name: 'Eye protection' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Turn Off Power at the Breaker',
      text: 'Go to the electrical panel and turn off the circuit breaker for the well pump. Do not just turn the pump off at a switch. The breaker ensures the pump cannot start accidentally while you have the priming plug removed, which would spray water across the space and risk damage to the pump.',
      url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump#step-1',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Open a Downstream Faucet to Release Pressure',
      text: 'Open any faucet downstream of the pump (a kitchen sink, outdoor hose bib, or laundry tap) and leave it open during the entire priming process. This releases any residual pressure in the system and gives trapped air a place to escape once the pump restarts.',
      url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump#step-2',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Locate and Remove the Priming Plug',
      text: 'The priming plug is a threaded bolt or plug on top of the pump housing, usually clearly labeled on the pump. On most residential jet pumps it is 1/2-inch or 3/4-inch NPT thread. Use an adjustable wrench or pipe wrench to unscrew it counterclockwise. Set the plug aside on a clean surface.',
      url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump#step-3',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Fill the Pump Housing with Water',
      text: 'Using a garden hose or bucket, pour clean water into the priming hole until water completely fills the pump housing and overflows from the priming hole. Do not stop at halfway full. On most residential jet pumps this takes 1 to 2 gallons of water.',
      url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump#step-4',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Replace the Priming Plug',
      text: 'Wrap 3 to 4 wraps of thread seal tape around the threads of the priming plug (clockwise, looking at the plug end). Screw the plug back into the pump housing by hand first, then tighten with a wrench. Do not overtighten; you risk cracking the pump housing. Snug plus 1/4 turn is the right amount.',
      url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump#step-5',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Restore Power at the Breaker',
      text: 'Go back to the electrical panel and turn the well pump breaker back on. Return to the pump location and listen for the motor starting.',
      url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump#step-6',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Watch for Water Flow',
      text: 'The pump should start running. Watch the pressure gauge on the pump or pressure tank. Within 30 seconds to 2 minutes, the pressure gauge should start climbing. Water should start coming out of the faucet you opened in Step 2, first in sputters with air mixed in, then in steady flow. If pressure does not build within 2 to 3 minutes, turn the pump off at the breaker and repeat the process.',
      url: 'https://www.thewell.guide/problems/how-to-prime-a-well-pump#step-7',
    },
  ],
}

export default function HowToPrimeAWellPump() {
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
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src='/primewellpump.jpg'
          alt='Blue shallow well jet pump installed with plumbing fittings and electrical connections'
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
            How to Prime a<br />
            <span style={{ color: '#5DCAA5' }}>Well Pump:<br />Step-by-Step</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Five to ten minutes, a wrench, and a bucket of water. Here is how to get water flowing again on a jet or convertible jet pump.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated April 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Problems', href: '/problems' },
        { label: 'How to Prime a Well Pump' }
      ]} />

      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* TL;DR */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed'>
            Priming a shallow well jet pump takes 5 to 10 minutes: turn off the breaker for the well pump, open a downstream faucet to release pressure, unscrew the priming plug on top of the pump housing, fill the housing with water from a hose or bucket until water overflows, replace the plug with fresh thread seal tape, and turn the breaker back on. The pump should build pressure within 2 to 3 minutes. Only jet pumps and convertible jet pumps need priming. Submersible pumps are already underwater and cannot be primed. If the pump primes but loses prime again within hours or days, the foot valve at the bottom of the well is the usual culprit and will need replacement.
          </p>
        </div>

        {/* Pump Type Test */}
        <div className='rounded-xl p-6 mb-12' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
          <p className='font-bold text-slate-900 mb-3'>The Pump Type Test</p>
          <p className='text-slate-700 leading-relaxed'>
            Before doing anything else, confirm which type of well pump you have. Priming only applies to jet pumps (installed above ground in your basement, garage, or pump house) and convertible jet pumps (also above ground, but with two pipes running into the well). Submersible pumps sit underwater at the bottom of the well casing and do not need priming at any point in their life. If you have a submersible pump and you are losing water, priming is not your fix. The problem is likely the pump itself, the pressure tank, the pressure switch, or a drop in the well&apos;s water level. See our guides on <Link href='/problems/well-pump-failing' className='font-semibold underline' style={{ color: '#854F0B' }}>well pump failing</Link>, <Link href='/problems/well-pump-short-cycling' className='font-semibold underline' style={{ color: '#854F0B' }}>well pump short cycling</Link>, or <Link href='/problems/no-water-from-well' className='font-semibold underline' style={{ color: '#854F0B' }}>no water from well</Link> instead. If you have a jet pump or convertible jet pump, continue reading.
          </p>
        </div>

        {/* 5-Minute Checklist */}
        <div className='rounded-2xl p-8 mb-12 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h2 className='text-2xl font-black text-slate-900 mb-4'>5-Minute Priming Checklist</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>Before pulling tools and opening the pump, walk through this quick diagnostic:</p>
          <ol className='list-decimal list-outside ml-5 space-y-3 text-slate-700 leading-relaxed'>
            <li><strong>Confirm the pump has power.</strong> Check the breaker for the well pump circuit. A tripped breaker looks like a normal water-off situation but is fixed in 10 seconds.</li>
            <li><strong>Confirm the pump is actually running but not pumping water.</strong> If you can hear the pump motor running but no water comes from faucets, that is a classic prime-loss symptom. If the pump is silent, priming will not help; power or the pressure switch is the issue.</li>
            <li><strong>Confirm the well has water.</strong> If the water table has dropped below the foot valve in a drought or during heavy use, no amount of priming will work. Shine a flashlight down the well casing if accessible, or ask a neighbor whether their well is also affected.</li>
            <li><strong>Confirm you have the right type of pump.</strong> Submersibles do not prime.</li>
          </ol>
          <p className='text-slate-700 leading-relaxed mt-4'>If all four check out, proceed to the priming procedure below.</p>
        </div>

        {/* What Priming Is */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What Priming Actually Is and Why It Matters</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            If you are reading this at 10 PM with no water coming out of your faucets and a family waiting to shower, skip ahead to the step-by-step section below. The physics explanation can wait until after your water is back on. For readers who have a few minutes and want to understand what is actually happening inside the pump, this section explains why priming is necessary and when it will not fix your problem.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            A jet pump sits above ground and pulls water up from the well using suction. The pump impeller spins inside a housing, creating a pressure vacuum that draws water through the suction pipe. Air cannot be moved by the pump the same way water can, so if the pump housing or suction line contains air instead of water, the pump will spin at full speed but produce no water flow at all.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Priming means filling the pump housing and suction pipe with water so the pump has water to grip when it starts. Once the pump is primed and running, it maintains its own prime as long as water keeps flowing through the system and the foot valve or check valve holds water in the suction pipe when the pump shuts off.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Submersible pumps do not work this way. A submersible sits underwater and pushes water up to the surface rather than pulling. Because it is already underwater, it always has water to work with and never needs priming.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            For general reference on private well operation and maintenance, the <a href='https://www.epa.gov/privatewells' target='_blank' rel='noopener' className='font-semibold underline' style={{ color: '#1D9E75' }}>Environmental Protection Agency publishes official guidance for private well owners</a> covering testing, maintenance, and water quality protection.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Why Pumps Lose Prime</h3>

          <p className='text-slate-700 leading-relaxed mb-6'>A primed jet pump can lose its prime for several reasons:</p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Foot valve or check valve failure.</strong> The foot valve sits at the bottom of the suction pipe in the well and acts as a one-way gate. It lets water up and into the pump but keeps water from draining back down into the well when the pump shuts off. When the foot valve fails (worn rubber seal, stuck open, damaged by sediment), water drains back down the pipe every time the pump shuts off, leaving the pump housing empty and requiring re-priming before the next use.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Air leaks in the suction line.</strong> Even a pinhole leak in the suction pipe or at a threaded fitting lets air into the system. The pump cannot maintain vacuum with an air leak, so the water drains back and the pump loses prime. Air leaks can also show up at the pump housing gasket, the priming plug, unions, or where the suction pipe enters the well casing.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Dropped water level.</strong> If the well&apos;s water level drops below the foot valve (due to drought, heavy simultaneous use, or a drawdown problem), the pump simply runs out of water to pull. Priming will not fix this. The water table needs to recover or the pump needs to be reset lower in the well.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Cracked impeller or worn pump seal.</strong> Internal pump damage can prevent the pump from creating vacuum even with a full housing of water. This is a pump replacement situation, not a priming situation.
          </p>
        </div>

        {/* How to Prime Step by Step */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How to Prime a Jet Well Pump: Step-by-Step</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The procedure below applies to shallow well jet pumps and convertible jet pumps in shallow well configuration. For convertible jet pumps in deep well configuration (25 to 90 foot wells with two-pipe setup), see the additional steps in the next section.
          </p>

          {/* Time and cost */}
          <div className='rounded-lg p-6 mb-8 bg-slate-50 border border-slate-200'>
            <h3 className='text-xl font-black text-slate-900 mb-4'>Total time and cost</h3>
            <ul className='space-y-2 text-slate-700 leading-relaxed'>
              <li><strong>Active work time:</strong> 5 to 10 minutes for a successful prime</li>
              <li><strong>Total project time:</strong> 15 to 30 minutes including diagnostic steps</li>
              <li><strong>Material cost:</strong> $0 if the prime holds; $20 to $80 if parts are needed</li>
              <li><strong>Tools cost:</strong> $0 if you have basic tools on hand</li>
            </ul>
          </div>

          {/* Tools */}
          <div className='rounded-lg p-6 mb-8 bg-slate-50 border border-slate-200'>
            <h3 className='text-xl font-black text-slate-900 mb-4'>Tools and materials you need</h3>
            <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed'>
              <li>Garden hose or 2 to 5 gallon bucket of clean water</li>
              <li>Adjustable wrench or pipe wrench to remove the priming plug</li>
              <li>Thread seal tape (plumber&apos;s tape) for re-sealing the plug if needed</li>
              <li>Clean rag for wiping water spills</li>
              <li>Flashlight (if the pump is in a dim basement or pump house)</li>
              <li>Eye protection</li>
            </ul>
          </div>

          {/* Steps */}
          <div id='step-1' className='mb-8'>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Step 1: Turn Off Power at the Breaker</h3>
            <p className='text-slate-700 leading-relaxed'>
              Go to the electrical panel and turn off the circuit breaker for the well pump. Do not just turn the pump off at a switch. The breaker ensures the pump cannot start accidentally while you have the priming plug removed, which would spray water across the space and risk damage to the pump.
            </p>
          </div>

          <div id='step-2' className='mb-8'>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Step 2: Open a Downstream Faucet to Release Pressure</h3>
            <p className='text-slate-700 leading-relaxed'>
              Open any faucet downstream of the pump (a kitchen sink, outdoor hose bib, or laundry tap) and leave it open during the entire priming process. This releases any residual pressure in the system and gives trapped air a place to escape once the pump restarts. Skipping this step means the pump has to push air out through the system before water can flow, which lengthens the priming process and sometimes causes the prime to fail.
            </p>
          </div>

          <div id='step-3' className='mb-8'>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Step 3: Locate and Remove the Priming Plug</h3>
            <p className='text-slate-700 leading-relaxed'>
              The priming plug is a threaded bolt or plug on top of the pump housing, usually clearly labeled on the pump. On most residential jet pumps it is 1/2-inch or 3/4-inch NPT thread. Use an adjustable wrench or pipe wrench to unscrew it counterclockwise. Set the plug aside on a clean surface. Some water may come out as you remove the plug; this is normal and indicates the pump housing has at least partial water in it.
            </p>
          </div>

          <div id='step-4' className='mb-8'>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Step 4: Fill the Pump Housing with Water</h3>
            <p className='text-slate-700 leading-relaxed'>
              Using a garden hose or bucket, pour clean water into the priming hole until water completely fills the pump housing and overflows from the priming hole. Do not stop at halfway full. The housing must be completely filled with water (no air pockets) for priming to work. On most residential jet pumps this takes 1 to 2 gallons of water. If the water level drops faster than you can pour, water is draining down through a failing foot valve; you can still proceed, but you likely have a foot valve problem that needs addressing.
            </p>
          </div>

          <div id='step-5' className='mb-8'>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Step 5: Replace the Priming Plug</h3>
            <p className='text-slate-700 leading-relaxed'>
              Wrap 3 to 4 wraps of thread seal tape around the threads of the priming plug (clockwise, looking at the plug end). Screw the plug back into the pump housing by hand first, then tighten with a wrench. Do not overtighten; you risk cracking the pump housing. Snug plus 1/4 turn is the right amount.
            </p>
          </div>

          <div id='step-6' className='mb-8'>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Step 6: Restore Power at the Breaker</h3>
            <p className='text-slate-700 leading-relaxed'>
              Go back to the electrical panel and turn the well pump breaker back on. Return to the pump location and listen for the motor starting.
            </p>
          </div>

          <div id='step-7' className='mb-8'>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Step 7: Watch for Water Flow</h3>
            <p className='text-slate-700 leading-relaxed mb-4'>
              The pump should start running. Watch the pressure gauge on the pump or pressure tank (if equipped). Within 30 seconds to 2 minutes, the pressure gauge should start climbing. Water should start coming out of the faucet you opened in Step 2, first in sputters with air mixed in, then in steady flow.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>If pressure builds and water flows normally:</strong> priming was successful. Close the open faucet. The pump should shut off at its cut-off pressure (usually 50 PSI) within another minute or two.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>If pressure does not build within 2 to 3 minutes:</strong> turn the pump off at the breaker and repeat the process. Sometimes it takes 2 or 3 attempts to fully purge air from the suction line. Refill the housing, reset the plug, and try again.
            </p>
            <p className='text-slate-700 leading-relaxed'>
              <strong>If pressure still does not build after 3 attempts:</strong> the foot valve or suction line has a problem that priming alone will not fix. See the troubleshooting section below.
            </p>
          </div>
        </div>

        {/* Convertible Jet Pump */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Priming a Convertible Jet Pump in Deep Well Configuration</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Convertible jet pumps configured for deep wells (25 to 90 feet) use a two-pipe system with a deep well injector. Priming requires filling both pipes, not just the pump housing.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>The additional steps:</p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Before priming the pump housing:</strong> remove both prime plugs on the pump (some convertible pumps have separate plugs for the pressure pipe and suction pipe) and fill the suction pipe to the well with water. On most installations this means pouring water through a priming tee installed on the suction pipe between the pump and the well.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Fill the pump housing</strong> following Steps 3 through 5 above.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Both pipes must be completely full before starting the pump.</strong> If the pressure pipe is empty, the jet injector cannot create the pressure differential needed to lift water from 25 to 90 feet below ground. A convertible pump with only the suction pipe primed will run but produce no water.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>First-time priming</strong> of a convertible jet pump after installation or servicing typically requires 5 to 15 gallons of water to fill both pipes all the way down the well. Subsequent re-priming (if the prime has only partially lost) requires less water.
          </p>
        </div>

        {/* Troubleshooting */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Troubleshooting When Priming Does Not Hold</h2>

          <p className='text-slate-700 leading-relaxed mb-8'>
            If you have successfully primed the pump but it loses prime again within hours or days, the cause is almost always one of three things.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Cause 1: Failing Foot Valve</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The foot valve at the bottom of the suction pipe is the single most common cause of repeated prime loss. Over time, the rubber seal inside the foot valve wears out, sediment can prevent the valve from seating properly, or mineral buildup can corrode the valve components. When the foot valve fails, water drains back down into the well every time the pump shuts off, and the pump has to be re-primed constantly.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to diagnose:</strong> Prime the pump, let it run for 30 seconds, then shut it off at the breaker. Wait 10 minutes. If the pressure gauge drops to zero during that wait (with no faucets open and no water use in the house), water is draining backward through a failed foot valve or check valve.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>How to fix:</strong> Foot valve replacement requires pulling the suction pipe out of the well to access the foot valve at the bottom. This is a job for a well contractor in most cases because it requires pulling 20+ feet of pipe with the attached assembly out through the well casing. Replacement cost: $200 to $500 for a service call plus $20 to $40 for the foot valve itself.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Cause 2: Air Leak in the Suction Line</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            A pinhole leak in the suction pipe, a loose fitting, or a failed gasket at the pump housing can let air into the system. The pump cannot maintain vacuum with even a small air leak, so the system slowly loses prime every time the pump shuts off.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to diagnose:</strong> With the pump running, look and listen for air bubbles at joints and fittings in the suction pipe. Some leaks are visible as water drops or wet spots; others are audible as a faint hissing sound when the pump runs. Check every threaded fitting, union, and the pump housing itself. The most common leak points are the pump housing gasket, the priming plug, and the fitting where the suction pipe enters the pump.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>How to fix:</strong> Tighten loose fittings and replace any visibly damaged sections of pipe. Apply fresh thread seal tape on reassembled fittings. If the pump housing gasket is damaged, order a replacement from the pump manufacturer. Most gaskets cost $10 to $30. If the air leak is in the buried portion of the suction pipe (between the well and the pump), the pipe will need to be excavated and replaced, which is typically a professional job costing $500 to $1,500.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Cause 3: Check Valve Failure at the Pump Outlet</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Some installations have a check valve on the discharge side of the pump (between the pump and the pressure tank) in addition to the foot valve at the bottom of the well. A failed discharge check valve can cause pressure to drain backward from the pressure tank through the pump, which slowly forces air back up into the pump housing.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to diagnose:</strong> Watch the pressure gauge with the pump off. If pressure drops slowly even with no water use, and you have ruled out a foot valve problem (Step 1 above), the discharge check valve may be failing.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to fix:</strong> Check valve replacement is a DIY-friendly job. The valve typically costs $15 to $40. Turn off the pump, drain the system, unscrew the old check valve, apply fresh thread seal tape to the new one, and screw it in place. Total time: 30 to 60 minutes.
          </p>
        </div>

        {/* When Priming Will Not Fix It */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>When Priming Will Not Fix It: Other Causes of Water Loss</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            If you have primed correctly, ruled out foot valve and check valve issues, and the pump still will not pump water, the problem is likely elsewhere in the system.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Pressure switch failure:</strong> The pressure switch turns the pump on when tank pressure drops and off when it climbs. A failed pressure switch may prevent the pump from running at all, even when primed correctly. Replacement cost: $25 to $60 for the part, 30 minutes for a DIY install.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Pump motor failure:</strong> If the pump motor has seized or the start capacitor has failed, the motor will not run or will run with a humming sound but no water movement. See our full <Link href='/problems/well-pump-failing' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump failing troubleshooting guide</Link>.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Well ran dry:</strong> If the water table has dropped below the foot valve, priming will appear to work briefly but water production will cease within seconds. See our guide on <Link href='/problems/well-running-dry' className='font-semibold underline' style={{ color: '#1D9E75' }}>well running dry</Link>.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Clogged suction line or foot valve:</strong> Sediment, sand, or mineral buildup can block water flow through the foot valve or suction pipe. The pump primes successfully but produces no water flow. This requires pulling and cleaning or replacing the foot valve.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Impeller damage:</strong> Internal pump damage from running dry or sediment ingestion can destroy the impeller. A damaged impeller cannot create vacuum even with a full housing. This is a pump replacement situation; see our <Link href='/reviews/best-well-pumps' className='font-semibold underline' style={{ color: '#1D9E75' }}>best well pumps review</Link> for replacement options.
          </p>
        </div>

        {/* When to Call a Professional */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>When to Call a Professional</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Priming the pump yourself is a reasonable DIY task. Most homeowners can complete the procedure above in 10 to 20 minutes without specialized skills or tools. Call a professional when:
          </p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-8'>
            <li>Priming has failed 3 or more times and you cannot identify an air leak or pressure drop</li>
            <li>You suspect a foot valve problem (pulling the suction pipe from the well requires specialized equipment)</li>
            <li>The pump motor has visible damage, rust, or is making abnormal sounds</li>
            <li>You have a deep well submersible pump and water production has stopped (priming will not help; diagnosis is needed)</li>
            <li>You smell something burning from the pump or motor</li>
            <li>The pump has been running continuously for more than 30 minutes without producing water (this can damage the pump)</li>
          </ul>

          <div className='rounded-xl p-6 mb-6' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className='font-bold text-slate-900 mb-2'>Need a licensed well contractor?</p>
            <p className='text-slate-700 leading-relaxed'>
              Persistent priming problems, foot valve replacement, and submersible pump diagnosis all benefit from a professional service call. <Link href='/get-quote' className='text-[#854F0B] underline font-semibold hover:text-[#6B3F09]'>Get free quotes from licensed well contractors near you.</Link>
            </p>
          </div>
        </div>

        {/* Cost Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Cost of Well Pump Priming Solutions</h2>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden text-sm'>
              <thead style={{ backgroundColor: '#0D3D30' }}>
                <tr>
                  <th className='p-3 text-left text-white font-bold'>Scenario</th>
                  <th className='p-3 text-left text-white font-bold'>DIY Cost</th>
                  <th className='p-3 text-left text-white font-bold'>Professional Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Successful self-prime</td>
                  <td className='p-3 text-slate-700'>$0</td>
                  <td className='p-3 text-slate-700'>N/A</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Priming plug thread tape replacement</td>
                  <td className='p-3 text-slate-700'>$5</td>
                  <td className='p-3 text-slate-700'>$150 service call</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Discharge check valve replacement</td>
                  <td className='p-3 text-slate-700'>$20 to $40</td>
                  <td className='p-3 text-slate-700'>$200 to $400 installed</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Foot valve replacement</td>
                  <td className='p-3 text-slate-700'>$20 to $40 (parts only; requires pipe pull)</td>
                  <td className='p-3 text-slate-700'>$350 to $700</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Pressure switch replacement</td>
                  <td className='p-3 text-slate-700'>$25 to $60</td>
                  <td className='p-3 text-slate-700'>$200 to $350 installed</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Pump replacement</td>
                  <td className='p-3 text-slate-700'>$290 to $1,400 (parts only)</td>
                  <td className='p-3 text-slate-700'>$1,100 to $4,500 installed</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed'>
            For full breakdowns of replacement costs, see our <Link href='/cost-guides/well-pump-replacement-cost' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump replacement cost guide</Link>.
          </p>
        </div>

        {/* Common Mistakes */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Common Mistakes When Priming a Well Pump</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Not turning off power before removing the priming plug.</strong> A pump that starts with the plug removed sprays water across the space and can damage the pump impeller if no water is in the housing. Always turn off the breaker first.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Not opening a downstream faucet.</strong> Trapped air has nowhere to escape, which lengthens priming time and often causes the prime to fail. Always open a faucet downstream of the pump before priming.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Only filling the housing halfway.</strong> The pump housing must be completely full of water, with water overflowing through the priming hole. Air pockets prevent priming from working. Keep pouring until water overflows and does not absorb into the housing anymore.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Overtightening the priming plug.</strong> The plastic or metal housing around the priming plug can crack from overtightening, creating a new air leak. Hand-tight plus 1/4 turn with a wrench is enough.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Skipping thread seal tape.</strong> A priming plug without fresh tape can seep air slowly over days, causing repeated prime loss. Always apply 3 to 4 wraps of tape on reassembly.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Trying to prime a submersible pump.</strong> Submersibles do not need priming and there is nothing to prime on them. Wasted effort on the wrong pump type can delay diagnosis of the actual problem. Confirm pump type first (see the Pump Type Test at the top of this guide).
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Giving up after one failed attempt.</strong> First-time priming or re-priming after a long idle period often takes 2 to 3 tries to fully purge air from the suction line. Repeat the procedure before concluding the prime will not hold.
          </p>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Related Guides</h2>
          <div className='space-y-3'>
            <Link href='/problems/well-pump-failing' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Failing Troubleshooting</span>
            </Link>
            <Link href='/problems/well-pump-short-cycling' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Short Cycling</span>
            </Link>
            <Link href='/problems/no-water-from-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>No Water From Well</span>
            </Link>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
            </Link>
            <Link href='/reviews/best-well-pumps' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Pumps Review</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Frequently Asked Questions</h2>

          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How long does it take to prime a well pump?</h3>
              <p className='text-slate-700 leading-relaxed'>Priming a shallow well jet pump typically takes 5 to 10 minutes once you have the tools ready: turn off the breaker, open a downstream faucet, unscrew the priming plug, fill the pump housing with 1 to 2 gallons of water from a hose or bucket, replace the plug with fresh thread seal tape, turn the breaker back on, and wait for the pump to build pressure. A convertible jet pump configured for a deep well takes longer (15 to 30 minutes) because both the suction pipe and pump housing must be completely filled with water, typically requiring 5 to 15 gallons. If priming fails on the first attempt, repeat the procedure 2 or 3 times to fully purge air from the suction line before concluding there is a deeper problem like a failed foot valve or air leak.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Why does my well pump keep losing prime?</h3>
              <p className='text-slate-700 leading-relaxed'>Well pumps lose prime repeatedly for one of three reasons: a failing foot valve at the bottom of the suction pipe in the well (the most common cause, accounting for roughly 70 percent of repeat prime-loss cases), an air leak in the suction pipe or at a pump fitting, or a failing discharge check valve between the pump and the pressure tank. To diagnose: prime the pump, shut it off at the breaker, and watch the pressure gauge for 10 minutes. If pressure drops to zero with no water use, you have a foot valve or check valve leak. If the pump runs but produces no water with a full housing, you likely have an air leak in the suction line. Repeated prime loss almost never resolves on its own and requires replacing the failing component.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Can I prime a submersible well pump?</h3>
              <p className='text-slate-700 leading-relaxed'>No, submersible well pumps do not need priming and cannot be primed. Submersible pumps sit underwater at the bottom of the well casing and push water up to the surface rather than pulling it with suction. Because the pump is always underwater, it always has water to work with. If your submersible pump is not producing water, the problem is elsewhere in the system: a failed pump motor, a dropped water level in the well, a failed pressure switch, a failed pressure tank, or a tripped breaker. Attempting to prime a submersible pump wastes time and can delay diagnosis of the actual problem. See our guide on <Link href='/problems/well-pump-failing' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump failing</Link> for diagnosing a submersible pump that has stopped producing water.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What is a foot valve and why does it matter for priming?</h3>
              <p className='text-slate-700 leading-relaxed'>A foot valve is a one-way check valve installed at the bottom of the suction pipe in a shallow well or convertible jet pump system. The foot valve keeps water in the suction pipe and pump housing when the pump is off, maintaining the pump&apos;s prime so it can start immediately the next time it runs. When a foot valve fails (worn rubber seal, debris blocking the seat, corrosion of valve components), water drains back down into the well every time the pump shuts off, and the pump has to be manually re-primed before it can produce water again. Foot valve failure is the single most common cause of repeated prime loss in jet pump systems. Foot valve replacement costs $20 to $40 for the part plus $200 to $500 for a professional service call to pull the suction pipe from the well and replace the valve.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How do I know if my well pump needs priming or if it has a bigger problem?</h3>
              <p className='text-slate-700 leading-relaxed'>If your jet pump or convertible jet pump is running (you can hear the motor) but no water is coming out of faucets, priming is almost certainly the immediate fix. If the pump is silent, priming will not help because the pump is not running; check for a tripped breaker, a failed pressure switch, or a motor failure. If you prime the pump and it produces water for a few seconds or minutes then stops, the well&apos;s water level may have dropped below the foot valve (drought or heavy use). If the pump primes correctly but loses prime again within hours or days, the problem is a failing foot valve, an air leak in the suction line, or a failed discharge check valve. If you have a submersible pump, priming does not apply and the problem is always elsewhere in the system.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What tools do I need to prime a well pump?</h3>
              <p className='text-slate-700 leading-relaxed'>Priming a well pump requires basic household tools: an adjustable wrench or pipe wrench to remove the priming plug, thread seal tape (also called plumber&apos;s tape) for sealing the plug on reassembly, a garden hose or 2 to 5 gallon bucket of clean water, a clean rag for water spills, and a flashlight if the pump is in a dim basement or pump house. Total tool cost is $0 if you have these items on hand and less than $20 if you need to purchase thread seal tape and a basic adjustable wrench. Some homeowners also keep eye protection (safety glasses) for the moment when the priming plug is removed, since trapped pressure can sometimes force water out unexpectedly.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How much water do I need to prime a well pump?</h3>
              <p className='text-slate-700 leading-relaxed'>A standard shallow well jet pump requires 1 to 2 gallons of water to completely fill the pump housing during priming. A convertible jet pump in deep well configuration (25 to 90 foot well with two-pipe setup) requires 5 to 15 gallons to fill both the suction pipe and the pressure pipe down to the well, especially on first-time priming after installation or a long idle period. Use clean water from a garden hose, a rainwater collection barrel, or bottled water if municipal water is not available. Never use water that is visibly dirty or contaminated, because sediment introduced into the pump housing can damage the impeller and block the foot valve.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Is it safe to prime a well pump myself or do I need a plumber?</h3>
              <p className='text-slate-700 leading-relaxed'>Priming a well pump is a safe DIY task for most homeowners when done correctly. The main safety consideration is turning off the circuit breaker for the pump before removing the priming plug, which prevents accidental pump startup while the housing is open. The procedure uses only basic hand tools and requires no specialized training. However, if priming fails repeatedly, if the pump motor shows visible damage or makes abnormal sounds, if you smell something burning from the pump, or if you suspect a foot valve problem requiring the suction pipe to be pulled from the well, call a licensed well contractor. Foot valve replacement and suction line diagnosis both require specialized equipment and are better handled by a professional. Professional service calls typically run $150 to $400 for diagnosis plus parts and labor for any needed repairs.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Glossary</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Priming</h3>
              <p className='text-slate-700 leading-relaxed'>Priming is the process of filling a well pump&apos;s housing and suction pipe with water so the pump can create the vacuum pressure needed to draw water from the well. Jet pumps and convertible jet pumps require priming because they sit above ground and must pull water up from below, while submersible pumps do not require priming because they sit underwater and push water up. Priming typically involves removing a priming plug on top of the pump housing, filling the housing with 1 to 2 gallons of water until it overflows, replacing the plug, and restarting the pump. A properly primed pump maintains its own prime as long as water flows through the system and the foot valve holds water in the suction pipe when the pump shuts off.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Jet pump</h3>
              <p className='text-slate-700 leading-relaxed'>A jet pump is a well pump installed above ground (typically in a basement, garage, or pump house) that uses a venturi jet and suction pipe to pull water up from a well. Jet pumps are limited to shallow wells (under 25 feet of water lift for standard shallow well jet pumps, up to 90 feet for convertible jet pumps with a deep well injector kit). Because jet pumps rely on suction, they must be primed with water before they can produce water flow. A primed jet pump creates a vacuum pressure inside the pump housing that draws water up through the suction pipe. Jet pumps typically cost $290 to $520 for residential units and last 10 to 15 years with proper maintenance.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Submersible pump</h3>
              <p className='text-slate-700 leading-relaxed'>A submersible pump is a well pump installed underwater at the bottom of the well casing, typically 3 to 4 inches in diameter and 2 to 4 feet long. Submersible pumps push water up to the surface rather than pulling it with suction, which means they do not need priming and can work at any residential well depth from 25 feet to 500+ feet. A submersible pump with no water output has a different root cause than a jet pump with no water output; submersible problems are usually motor failure, pressure switch failure, or a dropped water level in the well. Submersible pumps typically cost $370 to $880 for residential units and last 10 to 25 years.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Foot valve</h3>
              <p className='text-slate-700 leading-relaxed'>A foot valve is a one-way check valve installed at the bottom of the suction pipe in a shallow well or convertible jet pump system. The foot valve allows water to flow up into the pump when the pump is running but closes to prevent water from draining back down into the well when the pump is off. This keeps the suction pipe and pump housing full of water between pump cycles, maintaining the pump&apos;s prime so it can start immediately the next time it runs. Foot valve failure is the single most common cause of repeated prime loss in jet pump systems. A functioning foot valve is essential for any well system using a jet pump or convertible jet pump.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Check valve</h3>
              <p className='text-slate-700 leading-relaxed'>A check valve is a one-way valve that allows water to flow in one direction but prevents backflow. In well pump systems, check valves are installed at the bottom of the suction pipe (foot valve) and sometimes on the discharge side between the pump and the pressure tank. A failing check valve on the discharge side allows pressurized water to drain backward from the pressure tank through the pump, which can force air back into the pump housing and cause slow prime loss. Check valve replacement is typically a DIY-friendly job taking 30 to 60 minutes with a $15 to $40 part cost.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Suction lift</h3>
              <p className='text-slate-700 leading-relaxed'>Suction lift is the vertical distance a jet pump can pull water upward from a well, limited by atmospheric pressure to a theoretical maximum of 33.9 feet at sea level but practically limited to about 25 feet for residential jet pumps due to friction losses and real-world inefficiencies. Suction lift is why shallow well jet pumps only work for wells with water within 25 feet of the ground surface. Deep wells (over 25 feet of water lift) require either a convertible jet pump with a deep well injector kit (up to 90 feet) or a submersible pump installed down inside the well casing. Understanding suction lift prevents the common mistake of installing a shallow well jet pump on a deep well, which results in the pump running continuously without producing water.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Priming plug</h3>
              <p className='text-slate-700 leading-relaxed'>A priming plug is the removable threaded bolt or plug on top of a jet pump&apos;s housing used to fill the pump with water during priming. Residential jet pumps typically have priming plugs in 1/2-inch or 3/4-inch NPT (National Pipe Taper) thread size. The priming plug must be removed to pour water into the pump housing, then replaced with fresh thread seal tape after priming is complete. A loose or improperly sealed priming plug is a common source of air leaks that cause repeated prime loss. Overtightening the priming plug can crack the pump housing and create a permanent leak that requires pump replacement.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Pressure switch</h3>
              <p className='text-slate-700 leading-relaxed'>A pressure switch is an electrical switch mounted on the pressure tank or pump that turns the well pump on when system pressure drops below a set point (typically 30 PSI) and off when pressure climbs above a set point (typically 50 PSI). A pressure switch failure can make a jet pump appear to have a priming problem because the pump does not start even when water demand exists. Before concluding a jet pump needs priming, confirm the pump is actually running (listen for the motor). A silent pump indicates a pressure switch problem, a tripped breaker, or a motor failure rather than a priming issue. Pressure switch replacement is a DIY-friendly job costing $25 to $60 for the part.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Air leak</h3>
              <p className='text-slate-700 leading-relaxed'>An air leak in a well pump suction line is a small opening (pinhole crack, loose fitting, failed gasket) that allows air to enter the suction pipe or pump housing while the pump is running or idle. Because jet pumps rely on vacuum pressure, even a small air leak prevents the pump from maintaining prime and producing water flow. Air leaks commonly occur at threaded fittings along the suction pipe, the pump housing gasket, the priming plug seal, and unions. Diagnosing air leaks requires visual inspection of all fittings for water weepage, careful listening for faint hissing sounds while the pump runs, and sometimes pressure-testing the suction line with the pump shut off and the discharge closed. Most air leaks are fixed by tightening fittings or applying fresh thread seal tape.</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className='my-8'>
          <BeehiivEmailCapture />
        </div>

        {/* Lead Form */}
        <div className='border-t border-slate-200 pt-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Get Expert Help</h2>
          <p className='text-slate-600 mb-6'>Connect with a licensed well contractor in your area for a free, no-obligation quote on your well pump repair, installation, or replacement.</p>
          <LeadForm />
        </div>

      </article>
    </>
  )
}
