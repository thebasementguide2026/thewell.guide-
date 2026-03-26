import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Pump Short Cycling: Causes, Diagnosis, and How to Fix It | The Well Guide',
  description: 'A well pump that turns on and off every few seconds is short cycling. Every rapid start draws 5 to 7 times normal running current and destroys motor windings. This guide shows you how to diagnose the cause, what to check yourself, and when to call a contractor.',
  openGraph: {
    title: 'Well Pump Short Cycling: Causes, Diagnosis, and How to Fix It',
    description: 'A well pump that turns on and off every few seconds is short cycling. This guide shows you how to diagnose the cause, what to check yourself, and when to call a contractor.',
    url: 'https://well.guide/problems/well-pump-short-cycling',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://well.guide/cycling.jpg', width: 1200, height: 630, alt: 'Hand testing pressure tank Schrader valve with tire gauge to diagnose well pump short cycling' }],
  },
  alternates: { canonical: 'https://well.guide/problems/well-pump-short-cycling' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does well pump short cycling mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Short cycling means your well pump turns on and off repeatedly and rapidly instead of running for a full 1 to 2-minute cycle before resting. A healthy pump cycles 6 to 8 times per hour at most during active water use. Short cycling happens because the pressure tank cannot store enough pressurized water between cycles, so every small demand immediately drops pressure to the cut-in point and restarts the pump. The most common cause is a waterlogged pressure tank whose rubber bladder has failed.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is well pump short cycling bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, short cycling is one of the most damaging conditions a well pump can experience. Each startup draws 5 to 7 times normal running current. A pump designed to last 12 to 15 years can fail within months under sustained rapid cycling. It also damages the pressure switch contacts, the check valve, and causes water hammer throughout the plumbing. Short cycling should be diagnosed and fixed as soon as it is noticed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I fix well pump short cycling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Start by testing the pressure tank. Turn off the pump and press the Schrader valve on top of the tank: if water comes out instead of air, the bladder has failed and the tank needs replacement. If air comes out but the pressure is low, recharge the air to 2 PSI below your pressure switch cut-in setting. If the tank tests normal, watch how quickly pressure drops after the pump shuts off with no fixtures open - a drop within 5 to 30 seconds with a healthy tank points to a failed check valve requiring a contractor.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my pressure tank bladder has failed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Three tests confirm bladder failure: press the Schrader valve on top of the tank with the pump off - if water sprays out, the bladder has failed. Tap the tank from top to bottom - a healthy tank sounds hollow at the top, a failed tank sounds uniformly solid throughout. Try to rock the tank when drained - a failed tank feels abnormally heavy. Any of these confirming failure means the tank needs replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the correct pressure tank pre-charge?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The pre-charge pressure should be 2 PSI below the pump's cut-in pressure. For a 30/50 pressure switch, the pre-charge is 28 PSI. For a 40/60 switch, 38 PSI. For a 20/40 switch, 18 PSI. Always check and set pre-charge with the tank completely drained of water and the pump off. Checking pre-charge with water in the tank gives a false inflated reading.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a pressure tank last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "A quality bladder pressure tank lasts 8 to 15 years under normal conditions. Cheaper tanks may fail in 3 to 5 years. Water chemistry affects lifespan significantly: acidic water, high chlorine, high manganese, and hydrogen peroxide treatment all accelerate rubber bladder degradation. Consistent short cycling itself damages the bladder through repeated pressure spikes, potentially cutting a tank's life in half.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can I just add air to fix short cycling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can add air if the bladder is intact but the pre-charge has dropped. First confirm the bladder is intact by doing the Schrader valve test with the tank drained - air should come out, not water. If the bladder is intact, adding air to the correct pre-charge may resolve the short cycling. If the bladder has failed, adding air is pointless - it will simply leak through the bladder into the water side and escape through the faucets within a day or two.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix well pump short cycling?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If the cause is low air pre-charge and the bladder is intact, the fix costs nothing DIY with a bicycle pump and tire gauge. If the pressure tank bladder has failed, replacement costs $300 to $800 including parts and labor. A pressure switch replacement costs $20 to $50 in parts. Check valve replacement runs $300 to $600. Leaving the problem unaddressed and allowing it to kill the pump results in $1,000 to $2,500 for pump replacement - far more than fixing the tank early.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Pump Short Cycling: Causes, Diagnosis, and How to Fix It',
  description: 'A well pump that turns on and off every few seconds is short cycling. Every rapid start draws 5 to 7 times normal running current. This guide diagnoses every cause with specific tests and explains what to fix yourself versus what needs a contractor.',
  image: 'https://well.guide/cycling.jpg',
  datePublished: '2026-03-26',
  dateModified: '2026-03-26',
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
  mainEntityOfPage: 'https://well.guide/problems/well-pump-short-cycling',
}

export default function WellPumpShortCycling() {
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
          src='/cycling.jpg'
          alt='Hand testing pressure tank Schrader valve with tire gauge to diagnose well pump short cycling'
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
            Well Pump<br />
            <span style={{ color: '#5DCAA5' }}>Short Cycling:<br />Causes &amp; Fixes</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Turn it off at the breaker. Then test the pressure tank. This guide walks you through every cause and what to do about each one.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 12 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Problems', href: '/problems' },
        { label: 'Well Pump Short Cycling' }
      ]} />

      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* TL;DR */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed'>
            A well pump that turns on and off every few seconds or every minute or two is short cycling. The cause is almost always a waterlogged pressure tank whose bladder has failed. The fastest diagnosis: turn off the pump, press the Schrader valve (tire-valve stem) on top of your pressure tank. If water sprays out instead of air, the bladder has failed and you need a new tank ($300 to $800 installed). If air comes out but pressure is low, you may only need to add air with a bicycle pump. Each rapid start draws 5 to 7 times the motor&apos;s normal running current. A pump designed for 10 to 15 years of service can fail in months under sustained short cycling. Turn the pump off at the breaker while you diagnose.
          </p>
        </div>

        <p className='text-slate-700 leading-relaxed mb-8'>
          Short cycling is the third most common well problem after no water and low pressure, and it is the one most likely to destroy the pump before the homeowner realizes what is happening. The clicking on-off pattern is so regular and routine that many households adapt to it and assume it is normal. It is not normal. A healthy well pump cycles on when pressure drops to cut-in (30 or 40 PSI) and shuts off when pressure reaches cut-out (50 or 60 PSI). That full cycle should take at least 1 to 2 minutes. A pump cycling every 10 to 30 seconds has lost its pressure storage and is running on borrowed time.
        </p>

        {/* Short Cycling vs Running Constantly */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Short Cycling vs. Pump Running Constantly: Two Different Problems</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Before diagnosing, confirm which problem you have. They look similar from a distance but have different causes and different urgency levels.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Short cycling:</strong> The pump turns on, runs for a few seconds to a minute, shuts off, and turns on again within seconds to a few minutes. You hear repeated click-hum-click-hum at regular intervals. The pressure gauge oscillates rapidly between the cut-in and cut-out settings. This is the subject of this article. The cause is almost always inside the pressure tank.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Pump running continuously:</strong> The pump turns on and stays on for many minutes or indefinitely without shutting off. The pressure gauge either climbs slowly or stays stuck at a low reading. This means the system cannot reach cut-out pressure due to a leak, failed check valve, low water table, or worn pump. See <Link href='/problems/well-pump-running-constantly' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump running constantly</Link> for that diagnosis.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>The key distinction:</strong> Short cycling means the system reaches cut-out pressure very quickly (the tank still holds pressure briefly but with almost no volume). Continuous running means the system never reaches cut-out pressure at all.
          </p>
        </div>

        {/* Why Short Cycling Destroys Pumps */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Why Short Cycling Destroys Pumps</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            This matters before you decide whether to get to it &ldquo;sometime this week&rdquo; or today.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Every time a submersible pump motor starts, it draws an inrush current 5 to 7 times higher than its normal running current. This startup surge generates heat in the motor windings. Under normal operation, the pump runs for 1 to 2 minutes, dissipates that heat, then rests for several minutes before the next start. The heat generated by each startup has time to dissipate before the next cycle.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            During severe short cycling, the pump might start 100 or more times in a single day. At that frequency, motor windings heat faster than they cool. Insulation degrades. Capacitors and relays fail from constant electrical stress. Bearings wear at an accelerated rate from the mechanical shock of repeated starts. A pump that would normally last 12 to 15 years can fail within months of sustained short cycling.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The pressure switch itself takes damage too. Each time the contacts close to start the pump, they arc. At normal cycling rates, this arcing is manageable. At 100 or more cycles per day, contacts pit and burn, leading to switch failure that can cause the pump to either refuse to start or refuse to stop.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>How many cycles per hour is too many?</strong> A properly functioning system with a correctly sized pressure tank should cycle 6 to 8 times per hour at most during active water use. Cycling more than once every few minutes with no water being used indicates a problem requiring immediate attention. Cycle Stop Valve industry guidance and Water Well Journal technical specifications both document that a 1 HP pump has a maximum service life of approximately 100 starts per day before accelerated motor degradation occurs.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>What a healthy pump cycle sounds and looks like:</strong> A click as the pressure switch closes, then a low hum for 1 to 3 minutes while the pump fills the tank, then a click as the switch opens. Silence for several minutes. The pressure gauge rises steadily from cut-in to cut-out and holds there. If you are hearing click-hum-click-hum in rapid succession with only seconds between cycles, that is short cycling. If the pump runs for many minutes without ever shutting off, that is continuous running &mdash; a different problem covered in the <Link href='/problems/well-pump-running-constantly' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pump running constantly</Link> article.
          </p>
        </div>

        {/* All Causes at a Glance Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>All Causes at a Glance</h2>

          <div className='overflow-x-auto mb-8'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Cause</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Frequency</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>DIY Fix Possible</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Urgency</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Waterlogged pressure tank (failed bladder)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Most common by far</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No &mdash; tank replacement</td>
                  <td className='p-3 border border-slate-200 font-semibold' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>High</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Low air pre-charge in pressure tank (intact bladder)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Common</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes &mdash; add air</td>
                  <td className='p-3 border border-slate-200 font-semibold' style={{ backgroundColor: '#FFF8E1', color: '#7A5900' }}>Moderate</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Failed or leaking check valve</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Moderately common</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No &mdash; pull pump</td>
                  <td className='p-3 border border-slate-200 font-semibold' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>High</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Pressure switch failure or miscalibration</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Less common</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes &mdash; replace switch</td>
                  <td className='p-3 border border-slate-200 font-semibold' style={{ backgroundColor: '#FFF8E1', color: '#7A5900' }}>Moderate</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>System leak (indoor plumbing)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Less common</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Yes &mdash; fix leak</td>
                  <td className='p-3 border border-slate-200 font-semibold' style={{ backgroundColor: '#FFF8E1', color: '#7A5900' }}>Moderate</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Undersized pressure tank</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Less common</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No &mdash; tank replacement</td>
                  <td className='p-3 border border-slate-200 font-semibold' style={{ backgroundColor: '#FFF8E1', color: '#7A5900' }}>Moderate</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Low well yield</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Rare for short cycling</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No &mdash; contractor</td>
                  <td className='p-3 border border-slate-200 font-semibold' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The Three-Minute Diagnosis */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>The Three-Minute Diagnosis</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Before calling a contractor, these three tests take three minutes and identify the most likely cause.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Test 1: The Schrader Valve Test (1 minute)</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Find the Schrader valve on top of your pressure tank. It looks exactly like a tire valve stem. With the pump off and no fixtures open, press the center pin of the valve with a small screwdriver, pen cap, or your fingernail.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            If air comes out under pressure: the bladder is intact and the tank has an air charge. The problem may be a low air charge rather than a failed bladder. Skip to the air pressure check below.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            If water sprays out: the bladder has failed. Water has invaded the air side of the tank, eliminating all air cushion. The tank must be replaced. No repair is possible. This is the most common finding.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            If nothing comes out and you feel no pressure: the bladder has failed and the air has been absorbed into the water over time. The tank needs replacement.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Test 2: The Tap Test (30 seconds)</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>
            With the pump off, tap the pressure tank firmly from top to bottom with your knuckle or a small wrench. A healthy tank sounds hollow in the upper portion (compressed air) and solid in the lower portion (water). A waterlogged tank sounds uniformly solid from top to bottom &mdash; there is no hollow section because the entire tank is full of water.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Test 3: The Rock Test (30 seconds)</h3>
          <p className='text-slate-700 leading-relaxed mb-6'>
            With the pump off and no pressure in the system, try to rock the pressure tank slightly by pushing on its top. A properly functioning tank should move with moderate force because only the lower portion is water. A completely waterlogged tank feels extremely heavy and barely moves because it is entirely full of water.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            If all three tests point to a failed bladder, proceed to the pressure tank section below. If the Schrader valve test suggests an intact bladder with low air charge, proceed to the air recharge procedure below.
          </p>
        </div>

        {/* Cause 1: Waterlogged Pressure Tank */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Cause 1: Waterlogged Pressure Tank (Failed Bladder)</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>This is the cause in the majority of short cycling cases.</strong>
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Inside every modern pressure tank is a rubber bladder that separates the water from a cushion of compressed air. When water enters the tank from the pump, it compresses the air, and that compressed air is what maintains pressure while the pump is off. The air pushes water out to the house as pressure slowly drops from cut-out toward cut-in.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            When the bladder tears, develops a hole, or separates from its fittings, water floods the air chamber. The tank fills completely with water. There is no longer any compressible air cushion. Now when the pump shuts off at cut-out pressure, there is essentially no stored energy to deliver water. One faucet opened for 5 seconds draws out the tiny amount of water that can fit without air compression, pressure drops to cut-in, and the pump starts again. If the bladder failure is complete, the pump may cycle every 10 to 30 seconds even with no fixtures open, because the pressure at the tank itself drops to cut-in almost immediately after the pump shuts off.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Galvanized vs. bladder tanks:</strong> If your pressure tank is unpainted grey metal without a Schrader valve on top, you have an older galvanized steel tank. These tanks have no bladder &mdash; water and air are in direct contact inside a single chamber. Galvanized tanks waterlog differently: over time, air is absorbed directly into the water until no air cushion remains. The Schrader valve test does not apply. To test a galvanized tank, turn off the pump, drain the tank completely through a hose bib, then use an air compressor to add air through the tank&apos;s air fitting or drain port until pressure reaches the target pre-charge. If the tank waterlogged rapidly (within days to weeks after recharging), the tank has corrosion or scale preventing the air volume control from maintaining the charge. Galvanized tanks that repeatedly lose their air charge need replacement, and replacing with a modern bladder tank is strongly recommended.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>What causes bladder failure?</strong> Age is the primary cause. Most bladders last 8 to 15 years depending on water chemistry and usage. Chlorinated water, acidic water (low pH), water with high manganese content, and water treated with hydrogen peroxide for iron removal all accelerate rubber degradation. Pressure spikes from water hammer or from a pressure switch that allows over-pressurization can rupture a bladder mechanically. Some lower-quality tanks have bladders that fail prematurely within 3 to 5 years.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Can you fix a failed bladder?</strong> No. Bladder tanks are not serviceable. The bladder itself is a sealed component that cannot be accessed, patched, or replaced without specialized equipment. The entire pressure tank must be replaced.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>How much does pressure tank replacement cost?</strong> A new residential pressure tank costs $150 to $400 depending on size and brand. Installation labor runs $150 to $400 depending on location and access. Total installed cost is typically $300 to $800. Tank replacement is generally a half-day job for a licensed plumber or well contractor.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Tank sizing at replacement time:</strong> This is the most commonly missed opportunity at tank replacement. Many older residential systems were installed with undersized tanks that contributed to the bladder failure through excessive cycling. If your pump is 1 HP or more, you should have at minimum a 30-gallon tank, and a 44 to 86-gallon tank is better. The correct formula: tank drawdown capacity (which is about 25 to 30 percent of tank volume) should equal pump flow rate in GPM multiplied by 1 minute minimum runtime. A 10 GPM pump needs 10 gallons of drawdown, which requires roughly a 40-gallon tank. See the sizing section below for the full calculation.
          </p>
        </div>

        {/* Cause 2: Low Air Pre-Charge */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Cause 2: Low Air Pre-Charge (Intact Bladder)</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>This is the most fixable cause and costs nothing if you do it yourself.</strong>
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Even in tanks with intact bladders, the pre-charge air pressure can drop over time. Air slowly permeates through the rubber bladder into the water side, or slow leaks at the Schrader valve itself allow the air charge to escape. When the pre-charge pressure drops significantly below the recommended level, the effective storage capacity of the tank decreases even though the bladder is still functional.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The correct pre-charge pressure is always 2 PSI below the pump&apos;s cut-in pressure. For a 30/50 pressure switch, the pre-charge should be 28 PSI. For a 40/60 switch, 38 PSI. For a 20/40 switch, 18 PSI. If the pre-charge has dropped to, say, 15 PSI on a 30/50 system, the tank is operating well below its designed capacity and will cause short cycling.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>How to Check and Recharge Pre-Charge Pressure</h3>

          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 1:</strong> Turn off the pump at the breaker.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 2:</strong> Open a faucet or hose bib and let water run until the pressure gauge reads zero and no more water flows. The tank must be completely empty of water for an accurate reading.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 3:</strong> Use a standard tire pressure gauge on the Schrader valve. Note the pressure. If it reads the correct pre-charge (2 PSI below your cut-in), the bladder is intact but something else is causing the cycling. If it reads significantly lower, the pre-charge has dropped.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 4:</strong> Use a bicycle pump or air compressor to add air to the correct pre-charge level. Do not exceed the pre-charge target. Overfilling the air side will cause the pump to shut off prematurely before the tank fills with its intended volume of water, reducing the effective drawdown.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Step 5:</strong> Restore power to the pump and let the system pressurize. Watch the gauge. If it reaches cut-out and the pump shuts off, let it sit for 5 minutes with no water use. If pressure holds and the pump does not start, the pre-charge recharge may have resolved the problem. Monitor for a few days.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Important:</strong> If you recharge the air and water comes out of the Schrader valve after a day or two, the bladder has developed a leak. The air is leaking back through the bladder into the water and escaping through the faucets. Tank replacement is required.
          </p>
        </div>

        {/* Cause 3: Failed Check Valve */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Cause 3: Failed Check Valve</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>This is the cause that most homeowners miss because the tank tests fine.</strong>
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The check valve is a one-way valve located just above the submersible pump in the drop pipe, whose job is to keep the water column pressurized when the pump shuts off. When the check valve fails, water drains back into the well immediately after the pump stops. Pressure at the system drops rapidly to cut-in, the pump starts, refills the drop pipe, builds to cut-out, shuts off, and the cycle repeats.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>How a failed check valve mimics a waterlogged tank:</strong> Both cause rapid cycling after the pump shuts off. The critical difference is what you find when you test the tank. A waterlogged tank gives you water from the Schrader valve. A healthy tank with a failed check valve gives you normal air pressure at the Schrader valve, passes the tap test, and passes the rock test. The tank is fine. The pressure is dropping because water is draining back into the well, not because the tank has no air cushion.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>The pressure drop rate diagnostic:</strong> After the pump shuts off at cut-out pressure with all fixtures closed, watch the pressure gauge for 10 minutes. How quickly pressure drops tells you exactly where to look.
          </p>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Pressure Drop Rate After Pump Stops</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Most Likely Cause</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#FFF8E1' }}>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Drops to cut-in within 5 to 30 seconds</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Failed check valve</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Contractor &mdash; pull pump</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Drops to cut-in within 1 to 5 minutes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Underground supply line leak</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Contractor &mdash; leak detection</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Drops to cut-in within 5 to 30 minutes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Slow indoor plumbing leak</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY &mdash; check toilets and fixtures</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Holds steady for 30+ minutes</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Tank and check valve healthy</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Check pressure switch and switch tube</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed mb-6'>
            If you have a waterlogged tank, pressure will also drop nearly instantly after shutdown &mdash; but in that case the Schrader test shows water, not air. The pressure drop rate diagnostic is most useful when the tank tests healthy and you need to distinguish between a check valve failure and a plumbing leak. A failed check valve drops pressure in seconds because an entire column of water is draining into the well. A plumbing leak drops pressure more slowly because it is a finite flow rate from a fixture or pipe, not a full drain path.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Fix:</strong> Check valve replacement requires pulling the submersible pump from the well. This is not a DIY repair for most homeowners. A well contractor performs this as a service call. Cost: $300 to $600 typically, depending on well depth. If the pump is near or past its expected service life, this is the right time to evaluate pump replacement simultaneously.
          </p>
        </div>

        {/* Cause 4: Pressure Switch Failure */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Cause 4: Pressure Switch Failure or Miscalibration</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>This is the cause that keeps short cycling going even after you fix the tank.</strong>
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The pressure switch is a small electromechanical device that senses system water pressure through a 1/4-inch sensing port and tube. When pressure drops to cut-in, its contacts close and start the pump. When pressure reaches cut-out, the contacts open and stop it.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Short cycling from a pressure switch problem usually takes one of two forms:
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Clogged sensing port:</strong> The 1/4-inch tube that connects the switch body to the water system can clog with mineral deposits, sediment, or biofilm. When this happens, the switch cannot accurately sense system pressure and reads a false low pressure even when the tank is properly pressurized. The pump starts based on the false reading, builds a small amount of pressure that clears the clog momentarily, the switch reads the correct pressure and shuts off, and the cycle repeats. The diagnostic signature is cycling that resolves temporarily when you tap the pressure switch body.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Burned or pitted contacts:</strong> Each time the switch contacts close to start the pump, they arc. Over years of service, contacts pit and corrode. Pitted contacts may stick closed (causing the pump to run continuously) or produce intermittent contact that causes erratic on-off behavior. This is more likely to produce irregular cycling than the metronomic regular cycling of a waterlogged tank.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Fix:</strong> Replace the pressure switch. A new 30/50 or 40/60 pressure switch costs $20 to $50 and installs in 20 to 30 minutes. Turn off the pump power completely before touching the switch. Label all wires before removing them. Use pipe dope or thread tape on the sensing port threads. After replacement, verify the new switch&apos;s pre-charge setting matches your tank&apos;s pre-charge.
          </p>
        </div>

        {/* Cause 5: Undersized Pressure Tank */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Cause 5: Undersized Pressure Tank</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>This is the cause no one talks about but many wells have.</strong>
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            A pressure tank that is technically functional but too small for the pump&apos;s flow rate will cause short cycling even with a perfectly healthy bladder and correct pre-charge. The tank simply runs out of stored water too quickly.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Here is why: only about 25 to 30 percent of a pressure tank&apos;s total volume is usable drawdown water. The rest is compressed air. A 20-gallon tank typically provides only 5 to 7 gallons of drawdown. A pump delivering 10 GPM fills 5 to 7 gallons in 30 to 42 seconds, then the pressure reaches cut-out and the pump shuts off. If demand is greater than that, the pump restarts almost immediately.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The correct drawdown for any system is pump flow rate in GPM multiplied by 1 minute (the minimum recommended runtime to allow motor cooling). A 10 GPM pump needs 10 gallons of drawdown, which requires a tank approximately 40 gallons in total volume. A 5 GPM pump needs 5 gallons of drawdown, requiring a 20-gallon tank. Verify your pump&apos;s flow rate using the bucket test: fill a 5-gallon bucket from a hose bib and time it, then calculate: 300 seconds per 5 gallons equals 1 GPM.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Tank Sizing Quick Reference</h3>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Pump Flow Rate</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Minimum Drawdown Needed</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Minimum Tank Size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>5 GPM or less</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>5 gallons</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>20-gallon tank</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>6 to 8 GPM</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>7 gallons</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>30-gallon tank</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>9 to 12 GPM</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10 gallons</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>44-gallon tank</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>13 to 16 GPM</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>14 gallons</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>62-gallon tank</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>17 to 20 GPM</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>18 gallons</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>86-gallon tank</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed mb-8'>
            Note: larger is always better for pump life. There is no such thing as a pressure tank that is too large. The only cost is the tank itself.
          </p>
        </div>

        {/* Air Recharge Procedure */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>The Air Recharge Procedure: Step by Step</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            For tanks where the Schrader test confirms the bladder is intact but the pre-charge is low:
          </p>

          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 1:</strong> Identify your pressure switch setting. It is stamped on the switch cover or body: 20/40, 30/50, or 40/60. The first number is your cut-in pressure. Your target pre-charge is cut-in minus 2 PSI (so 28 PSI for a 30/50 switch, 38 PSI for a 40/60 switch).
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 2:</strong> Turn off the pump at the breaker.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 3:</strong> Open the lowest faucet in the house or an outdoor hose bib. Let it run until the pressure gauge reads zero and water flow stops. Do not proceed until the tank is fully drained of water. An undrained tank gives a false high reading.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 4:</strong> With a standard tire pressure gauge, check the Schrader valve on top of the pressure tank. Note the exact reading.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 5:</strong> If the reading is below your target: use a bicycle pump or air compressor set to low pressure to add air. Check the pressure after every few pumps. Do not overshoot.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Step 6:</strong> If the reading is above your target: release air carefully through the Schrader valve until you reach the target.
          </p>
          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Step 7:</strong> Close the faucet. Restore power to the pump. Let the system pressurize to cut-out. Confirm the pump shuts off. Watch the gauge for 5 minutes with no water use. If it holds steady, the recharge was successful.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Common mistake:</strong> Checking pre-charge with water still in the tank. This gives an inflated reading that makes the pre-charge appear correct when it is actually low. Always drain the tank completely first.
          </p>
        </div>

        {/* DIY vs Hire Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>DIY vs. Hire Table</h2>

          <div className='overflow-x-auto mb-8'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Task</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>DIY or Hire</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Schrader valve test</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Takes 30 seconds</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Tap test and rock test</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>No tools required</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Air pre-charge check</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Needs tire pressure gauge</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Air pre-charge recharge</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Needs bicycle pump or air compressor</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Pressure switch replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY (careful)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>230V circuit &mdash; power must be fully off</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Pressure tank replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Hire recommended</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Plumbing work under pressure</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Check valve diagnosis</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY (partial)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Pressure drop test at gauge</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Check valve replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Hire always</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Requires pulling submersible pump</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Tank sizing calculation</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>DIY</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>See formula above</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-medium text-slate-900'>Pump replacement</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Hire always</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Requires pump pulling equipment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What Happens If You Ignore */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What Happens If You Ignore Short Cycling</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Many homeowners notice the rapid clicking and decide to deal with it later. Here is what later looks like:
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The pump motor overheats from repeated inrush current. Winding insulation fails. Eventually the pump stops delivering water or trips the breaker repeatedly. At this point the problem has progressed from a $300 to $800 pressure tank replacement to a $1,000 to $2,500 pump replacement, which requires pulling the submersible unit from the well.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The pressure switch contacts burn from hundreds of daily arcing cycles. The switch fails open (pump will not start) or fails closed (pump will not stop). Either failure causes a service call.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The check valve takes repeated water hammer shock from each rapid startup. It fails, leading to the diagnosis above.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            In short: a $300 tank replacement deferred becomes a $1,500 to $2,500 pump replacement later. The cascading failure pattern is well documented in the water well industry. The <a href='https://www.epa.gov/privatewells' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>EPA&apos;s private wells program</a> recommends annual well system inspections specifically because problems like short cycling are early warning signs that most homeowners miss until a failure forces the repair. The tank is almost always the cheapest component to replace in the entire system.
          </p>
        </div>

        {/* FAQ */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>

          <div className='space-y-8'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>What does well pump short cycling mean?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Short cycling means your well pump turns on and off repeatedly and rapidly instead of running for a full 1 to 2-minute cycle before resting. A healthy pump cycles 6 to 8 times per hour at most during active water use. Short cycling happens because the pressure tank cannot store enough pressurized water between cycles, so every small demand immediately drops pressure to the cut-in point and restarts the pump. The most common cause is a waterlogged pressure tank whose rubber bladder has failed.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Is well pump short cycling bad?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Yes, short cycling is one of the most damaging conditions a well pump can experience. Each startup draws 5 to 7 times normal running current. A pump designed to last 12 to 15 years can fail within months under sustained rapid cycling. It also damages the pressure switch contacts, the check valve, and causes water hammer throughout the plumbing. Short cycling should be diagnosed and fixed as soon as it is noticed.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How do I fix well pump short cycling?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Start by testing the pressure tank. Turn off the pump, press the Schrader valve on top of the tank: if water comes out instead of air, the bladder has failed and the tank needs replacement. If air comes out but the pressure is low, recharge the air to 2 PSI below your pressure switch cut-in setting. If the tank tests normal, watch how quickly pressure drops after the pump shuts off with no fixtures open &mdash; a drop within 5 to 30 seconds with a healthy tank points to a failed check valve requiring a contractor.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How do I know if my pressure tank bladder has failed?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Three tests confirm bladder failure: press the Schrader valve on top of the tank with the pump off &mdash; if water sprays out, the bladder has failed. Tap the tank from top to bottom &mdash; a healthy tank sounds hollow at the top, a failed tank sounds uniformly solid throughout. Try to rock the tank when drained &mdash; a failed tank feels abnormally heavy and barely moves. Any of these tests confirming failure means the tank needs replacement.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>What is the correct pressure tank pre-charge?</h3>
              <p className='text-slate-700 leading-relaxed'>
                The pre-charge pressure should be 2 PSI below the pump&apos;s cut-in pressure. For a 30/50 pressure switch, the pre-charge is 28 PSI. For a 40/60 switch, 38 PSI. For a 20/40 switch, 18 PSI. Always check and set pre-charge with the tank completely drained of water and the pump off. Checking pre-charge with water in the tank gives a false inflated reading.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How long does a pressure tank last?</h3>
              <p className='text-slate-700 leading-relaxed'>
                A quality bladder pressure tank lasts 8 to 15 years under normal conditions. Cheaper tanks may fail in 3 to 5 years. Water chemistry affects lifespan significantly: acidic water (pH below 6.5), high chlorine, high manganese, and hydrogen peroxide water treatment all accelerate rubber bladder degradation. Consistent short cycling itself damages the bladder through repeated pressure spikes and water hammer, potentially cutting a tank&apos;s life in half.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>Can I just add air to fix short cycling?</h3>
              <p className='text-slate-700 leading-relaxed'>
                You can add air if the bladder is intact but the pre-charge has dropped below the correct level. First confirm the bladder is intact by doing the Schrader valve test with the tank drained &mdash; air should come out, not water. If the bladder is intact, adding air to the correct pre-charge may resolve the short cycling. If the bladder has failed, adding air is pointless &mdash; the air will simply leak through the bladder into the water side and escape through the faucets within a day or two.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-3'>How much does it cost to fix well pump short cycling?</h3>
              <p className='text-slate-700 leading-relaxed'>
                If the cause is low air pre-charge and the bladder is intact, the fix costs nothing if you do it yourself with a bicycle pump and tire gauge. If the pressure tank bladder has failed, replacement costs $300 to $800 including parts and labor. A new pressure switch replacement costs $20 to $50 in parts plus a service call if you hire out. Check valve replacement (which requires pulling the pump from the well) typically runs $300 to $600. Leaving the problem unaddressed and allowing it to kill the pump results in $1,000 to $2,500 for pump replacement.
              </p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Drawdown</h3>
              <p className='text-slate-700 leading-relaxed'>
                The volume of usable water a pressure tank delivers between pump cycles, measured in gallons. Drawdown is approximately 25 to 30 percent of the tank&apos;s total volume rating. A 40-gallon tank has roughly 10 to 12 gallons of drawdown. Adequate drawdown ensures the pump runs for at least 1 minute per cycle, allowing the motor to cool before the next start.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pre-charge Pressure</h3>
              <p className='text-slate-700 leading-relaxed'>
                The air pressure in the pressure tank&apos;s air chamber, set before the tank is placed in service and maintained over the tank&apos;s life. Pre-charge should always be 2 PSI below the pressure switch cut-in pressure. Correct pre-charge maximizes drawdown capacity and ensures the bladder never bottoms out against the tank wall during low-demand cycles.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Waterlogged</h3>
              <p className='text-slate-700 leading-relaxed'>
                A condition in which a pressure tank&apos;s rubber bladder has failed, allowing water to fill the entire tank with no air cushion. A waterlogged tank provides almost no drawdown, causing the pump to restart every few seconds. Bladder tanks cannot be repaired when waterlogged &mdash; the entire tank must be replaced.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Cut-in Pressure</h3>
              <p className='text-slate-700 leading-relaxed'>
                The pressure setting at which the pressure switch closes its contacts and starts the pump. Common residential settings are 20, 30, or 40 PSI. The pump starts when system pressure drops to this level.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Cut-out Pressure</h3>
              <p className='text-slate-700 leading-relaxed'>
                The pressure setting at which the pressure switch opens its contacts and stops the pump. Common residential settings are 40, 50, or 60 PSI. The pump stops when system pressure reaches this level. The difference between cut-in and cut-out is the differential, typically 20 PSI.
              </p>
            </div>

            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Inrush Current</h3>
              <p className='text-slate-700 leading-relaxed'>
                The surge of electrical current drawn by a pump motor at the moment it starts, before reaching running speed. Inrush current is typically 5 to 7 times the motor&apos;s rated running current. Frequent starts from short cycling generate enough repeated heat from inrush current to degrade motor winding insulation over time.
              </p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Related Guides</h2>
          <div className='space-y-3'>
            <Link href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </Link>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/problems/no-water-from-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>No Water from Well</span>
            </Link>
            <a href='/cost-guides/pressure-tank-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Pressure Tank Replacement Cost</span>
            </a>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
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
