import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Running Dry: Diagnose the Cause and Know Exactly What to Do | The Well Guide',
  description: 'The complete guide to a well running dry. Four distinct scenarios, specific diagnosis and fix for each, and when deepening vs. drilling new is right.',
  openGraph: {
    title: 'Well Running Dry: Diagnose the Cause and Know Exactly What to Do',
    description: 'The complete guide to a well running dry. Four distinct scenarios, specific diagnosis and fix for each, and when deepening vs. drilling new is right.',
    url: 'https://www.thewell.guide/problems/well-running-dry',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/well dry.png', width: 1200, height: 630, alt: 'Person at a kitchen sink turning on the faucet with a concerned expression, no water coming out' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/problems/well-running-dry' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does it mean when your well runs dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "When a well runs dry, it means the pump is pulling air instead of water because the water level has dropped below the pump intake. This has four distinct causes: temporary drawdown where pumping outpaced the aquifer's recharge rate, seasonal water table decline, the pump set at the wrong depth, or genuine long-term aquifer depletion. The most common cause is temporary drawdown, which resolves on its own after 4 to 24 hours without pumping.",
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do immediately when my well runs dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turn off the pump at the circuit breaker immediately to prevent pump damage from running dry. Source temporary drinking water from bottled water or a neighbor. Do not pour water from outside sources into the well casing. Wait 24 hours with no water use to test whether the well recovers on its own. If it does, the problem was temporary drawdown. If it does not, contact a licensed well contractor for a static water level measurement and diagnosis.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my well refill itself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "In most cases, yes. The majority of wells that lose water have experienced temporary drawdown where the pump outpaced the aquifer's recharge rate. The well refills when pumping stops. Typical recovery time is 2 to 8 hours for normal-yield wells, up to 24 hours for low-yield wells. Seasonal water table drops also recover as precipitation returns. Only wells in areas of genuine long-term aquifer depletion or with structural problems do not recover without intervention.",
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take for a well to recover after running dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential wells recover within 2 to 8 hours after stopping pumping during a temporary drawdown event. Low-yield wells under 1 gallon per minute recharge can take 12 to 24 hours. Seasonal water table recovery after a dry summer can take weeks to months and requires the return of normal precipitation patterns. Permanent aquifer depletion does not recover on its own.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to fix a dry well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost depends entirely on the cause. Waiting for temporary drawdown to resolve costs nothing. Lowering the pump costs $300 to $800. Well rehabilitation costs $500 to $3,000. Hydrofracturing a bedrock well costs $2,000 to $7,000. Deepening an existing well costs $3,000 to $10,000. Drilling a new well costs $5,000 to $15,000. Confirming the diagnosis before proceeding is the single most important cost control measure.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a dry well be fixed?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In most cases, yes. Temporary drawdown resolves on its own. Pump depth problems are fixed by lowering the pump. Well fouling can be rehabilitated. Bedrock wells can often be hydrofractured to increase yield. Only in cases of severe, permanent regional aquifer depletion is a well truly unfixable, requiring drilling in a different location or alternative water supply.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if my well is permanently dry or just temporarily low?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Turn off the pump for 24 hours and see if water returns. If it does, the dryness was temporary. If not, have a contractor measure the current static water level and compare it to the level recorded when the well was drilled. If the current level is significantly lower and does not change after several days of no pumping, and if neighboring wells show the same pattern, the water table has declined. A single dry period during an unusually dry summer with full recovery after rain does not indicate permanent depletion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I pour water into my well to refill it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Never pour water from any outside source into your well casing. Your well connects to an underground aquifer and is not a storage tank. Introducing foreign water can introduce bacteria and other contaminants into your water supply and potentially damage the pump and well casing. Get water for household use from bottled sources or water haulers who deliver to above-ground storage tanks only.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Running Dry: Diagnose the Cause and Know Exactly What to Do',
  description: 'The complete guide to a well running dry. Four distinct scenarios, specific diagnosis and fix for each, and when deepening vs. drilling new is right.',
  image: 'https://www.thewell.guide/well dry.png',
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
  mainEntityOfPage: 'https://www.thewell.guide/problems/well-running-dry',
}

export default function WellRunningDry() {
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
          src='/well dry.png'
          alt='Person at a kitchen sink turning on the faucet with a concerned expression, no water coming out'
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
            Well Running Dry:<br />
            Diagnose the Cause<br />
            <span style={{ color: '#5DCAA5' }}>and Know What to Do</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Most wells that appear dry have not permanently failed. The right first step determines everything.
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
        { label: 'Well Running Dry' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Turn off the pump at the breaker right now if you have no water or sputtering faucets. Running a pump dry destroys it within minutes from overheating. With the pump off, you have time to diagnose the actual problem. Most wells that appear to have run dry have not &mdash; the most common cause is temporary drawdown where the pump outpaced the aquifer{`'`}s recharge rate for a few hours and the water will return on its own. The second most common cause is the pump set at the wrong depth for the current water table, which a contractor can fix in one visit without drilling. True permanent aquifer depletion is real but accounts for a small fraction of sudden dry well calls. This guide walks through each of the four distinct scenarios, how to distinguish them, and the correct response to each.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm'>The most expensive mistake well owners make is calling a driller before confirming the diagnosis. Deepening a well costs $3,000 to $10,000. Lowering a pump costs $300 to $800. Waiting 24 hours costs nothing. The right first step determines everything.</p>
        </div>

        {/* Do These Two Things Right Now */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Urgent</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Do These Two Things Right Now</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before diagnosing anything, do these two things immediately.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Turn off the pump at the breaker.</strong> Your submersible pump is cooled by water flowing past it. When the water level drops below the pump intake, the pump pulls air instead of water. Without water cooling it, the motor windings overheat within minutes. Pump replacement costs $1,000 to $2,500 installed. Turning the breaker off prevents a temporary water shortage from becoming an equipment failure. Turn it off now and leave it off while you work through the diagnosis.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Source temporary water.</strong> The diagnosis and repair process may take anywhere from a few hours to several days. You need drinking water in the meantime. Fill containers from a neighbor, local fire department, grocery store, or use bottled water. Do not pour outside water into your well casing &mdash; your well is connected to an aquifer, not a storage tank, and introducing foreign water can contaminate the system.</p>
        </div>

        {/* Warning Signs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Prevention</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Warning Signs Your Well Is Running Low: Catch It Before Complete Failure</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Most wells give a progression of warnings before complete failure. Recognizing these early buys time to diagnose and act before you lose water entirely.</p>

          {/* Stage 1 - Green */}
          <div className='rounded-lg p-5 mb-4' style={{ backgroundColor: '#E1F5EE' }}>
            <p className='font-bold text-slate-900 text-sm mb-2'>Stage 1 &mdash; Early warning (days to weeks before failure):</p>
            <p className='text-slate-700 text-sm leading-relaxed'>Pressure drops slightly when multiple fixtures run simultaneously. The pump runs noticeably longer than usual after heavy use. Water takes longer to recover pressure after a shower or laundry cycle. These are the first signs the water table is approaching the pump intake.</p>
          </div>

          {/* Stage 2 - Amber */}
          <div className='rounded-lg p-5 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
            <p className='font-bold text-slate-900 text-sm mb-2'>Stage 2 &mdash; Mid-stage warning (hours to days before failure):</p>
            <p className='text-slate-700 text-sm leading-relaxed'>Pressure drops perceptibly during single-fixture use. You hear the pump cycling on more frequently than normal. Water occasionally sputters briefly at faucets during the tail end of a draw. The pump may make a slightly different sound during operation &mdash; a higher pitch or intermittent clicking as it briefly pulls air.</p>
          </div>

          {/* Stage 3 - Red */}
          <div className='rounded-lg p-5 mb-6' style={{ backgroundColor: '#FCEBEB' }}>
            <p className='font-bold text-slate-900 text-sm mb-2'>Stage 3 &mdash; Imminent failure (minutes to hours before):</p>
            <p className='text-slate-700 text-sm leading-relaxed'>Faucets spit air and sputter noticeably. Water pressure drops mid-shower or mid-cycle. Water turns slightly cloudy or carries fine sediment &mdash; the pump is now drawing from near the bottom of the water column. The pump runs continuously without building pressure. These are the last signals before complete loss.</p>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>What to do at each stage:</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>At Stage 1:</strong> Reduce demand. Stagger high-use activities. Check your well log for the original static water level and consider having a contractor measure the current level.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>At Stage 2:</strong> Immediately reduce demand to essentials only. Turn off irrigation. Do not run laundry or dishwasher. Have a contractor scheduled. Begin sourcing backup water.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>At Stage 3:</strong> Turn off the pump at the breaker now. Do not run it again until a contractor has confirmed water is available. At this stage, continued pumping will destroy the pump within minutes.</p>
        </div>

        {/* The Four Scenarios */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Four Scenarios: Which One Do You Have?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Every dry well situation falls into one of four categories. They look nearly identical from inside the house &mdash; no water from the tap, sputtering, or very low pressure &mdash; but have completely different causes and completely different fixes. Jumping to a solution without confirming the scenario wastes money and sometimes makes the problem worse.</p>

          {/* Scenario 1 */}
          <div className='mb-10 pl-5' style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className='text-lg font-bold text-slate-900 mb-4'>Scenario 1: Temporary Drawdown &mdash; Aquifer Outpaced, Will Recover</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What it is:</strong> The aquifer around your well is a finite reservoir that recharges at a specific rate. If you pump water faster than the aquifer can refill &mdash; running multiple showers, filling a pool, running irrigation for hours, or having high household demand during a dry stretch &mdash; the water level around the pump drops below the pump intake. The well is not dry. The aquifer still has water. The water level just needs time to recover without further pumping.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who gets this:</strong> Any well owner who had unusually high water demand in the hours before losing water. Also common in homes with low-yield wells where normal daily demand occasionally exceeds the recharge rate.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How to confirm it:</strong> With the pump off, wait 4 to 24 hours. Do not use any water during this period. After waiting, turn the pump on briefly and try a faucet. If water flows normally, even briefly, the water level has recovered. This confirms temporary drawdown.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How to estimate your well{`'`}s recharge rate:</strong> Before calling anyone, this 30-minute test gives you the single most useful piece of information about your well{`'`}s actual yield.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Turn off the pump and wait until water pressure returns fully &mdash; at least 2 hours. Note the time. Turn the pump on and fill a 5-gallon bucket repeatedly, timing each fill. Keep filling buckets and dumping them (outside, away from the well) until the pressure drops noticeably or the pump begins to sputter. Count total gallons pumped and total time elapsed. Divide gallons by minutes. That is your pump{`'`}s output rate. The point at which pressure dropped is approximately when your pump outran the aquifer{`'`}s supply.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>Now turn the pump off again and wait exactly 60 minutes. Turn it back on and repeat &mdash; count how many gallons flow before pressure drops again. Divide by 60 minutes. That number in gallons per minute is approximately your well{`'`}s sustainable recharge rate. If it is below 1 GPM, you have a low-yield well. If it is under 0.5 GPM, you need a storage cistern system.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>This test gives your contractor extremely useful baseline data and may save you a diagnostic service call.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The recovery timeline:</strong> Most residential aquifers recover to usable levels within 2 to 8 hours of stopping pumping. Slower aquifers (under 1 gallon per minute recharge) may take 12 to 24 hours. If water does not return after a full 24-hour rest, move to the other scenarios.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The fix:</strong> Reduce demand. Spread high-demand activities across the day. Stagger showers, laundry, and dishwasher use by at least an hour. If this happens repeatedly, your pump output rate may exceed your well{`'`}s sustainable yield and you may need a pump cycle controller or storage tank system. This is a low-yield well management problem, not a drilling problem.</p>

            {/* Do not call a driller callout */}
            <div className='rounded-lg p-4 mb-2' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
              <p className='font-bold text-slate-900 text-sm'>Do not call a driller before trying the 24-hour rest. This is the single most important advice in this article. A driller who arrives before you have confirmed recovery has an incentive to recommend drilling. Many homeowners have paid $5,000 to $10,000 for a new well when waiting 24 hours would have resolved the issue.</p>
            </div>
          </div>

          {/* Scenario 2 */}
          <div className='mb-10 pl-5' style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className='text-lg font-bold text-slate-900 mb-4'>Scenario 2: Seasonal Water Table Drop &mdash; Will Recover With Recharge</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What it is:</strong> Groundwater levels are not static. They rise and fall with seasons, precipitation patterns, and regional pumping activity. In most of the United States, groundwater levels peak in March and April after winter snowmelt and spring rain, then decline through summer and fall as vegetation draws moisture from the soil and precipitation decreases. Shallow wells in unconfined aquifers are most vulnerable. A shallow well that has reliably produced water for 10 or 20 years can fail in an unusually dry summer or during a regional drought.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Who gets this:</strong> Owners of shallow wells (under 100 feet) in areas with distinct wet and dry seasons, particularly the Northeast, Southeast, and Pacific Northwest. Also owners of dug wells and bored wells, which are almost always shallow. Vermont{`'`}s Department of Environmental Conservation reported over 400 wells running dry in fall 2025 &mdash; four times the rate of any prior year &mdash; almost entirely shallow dug and spring-fed wells during an unusually dry season.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How to confirm it:</strong> The seasonal pattern is the key diagnostic. Has your well produced water reliably in past years? Has the dry period corresponded with dry weather or preceded by a dry summer? Do neighboring wells show similar issues? A contractor who measures your static water level and finds it lower than your well log{`'`}s original measurement but still showing water in the casing (just below the pump intake) is confirming seasonal drawdown, not permanent depletion.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The fix:</strong> Conservation is the immediate measure. The permanent fix is either lowering the pump to access water at the current lower water level (if the well is deep enough), or installing a storage tank and pump cycle controller that maximizes use of water during the aquifer{`'`}s natural recovery periods. In most cases, normal precipitation eventually restores the water table. The question is how to manage in the meantime.</p>
            <p className='text-slate-700 leading-relaxed text-sm'><strong>The low-yield management option:</strong> A storage cistern of 1,000 to 2,000 gallons with a slow fill rate that matches the aquifer{`'`}s recharge rate provides on-demand water pressure from storage rather than directly from the well. The well fills the cistern slowly; a booster pump draws from the cistern to supply the house. This completely decouples the household demand rate from the well{`'`}s recharge rate and is the correct long-term solution for shallow wells in areas with seasonal water table variation.</p>
          </div>

          {/* Scenario 3 */}
          <div className='mb-10 pl-5' style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className='text-lg font-bold text-slate-900 mb-4'>Scenario 3: Pump Set at the Wrong Depth</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What it is:</strong> Your well may have more water than it has for years. The problem is that the pump cannot reach it. This scenario has two versions:</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Version A: Water table has dropped over time, pump is now above it.</strong> The pump was set at an appropriate depth when installed, but the seasonal or long-term water table has declined below the pump intake. The pump draws air. Water is present in the well below the pump &mdash; the pump just cannot reach it.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Version B: Pump was never set at the right depth.</strong> Pump intake should be set at roughly 70 percent of the available drawdown depth &mdash; deep enough to always be in water even during maximum pumping, but not so deep that it draws sediment from the bottom. An incorrectly installed or replaced pump that was set too shallow will hit air during any significant draw, even when the aquifer has water.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How to confirm it:</strong> A contractor measures the static water level (depth to water with the pump off for several hours) and compares it to the known pump depth. If the static water level is below the pump intake depth, the pump needs to be lowered. If the static water level is above the pump intake but the well still loses water quickly, the pump may be set at a depth that allows drawdown to exceed the intake level during pumping.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The fix:</strong> Lower the pump. A contractor removes the pump, extends the drop pipe, and reinstalls the pump at a greater depth. This typically costs $300 to $800 in labor depending on well depth and pump type. It is the fastest and cheapest solution when it is the correct diagnosis. The caveat from Penn State Extension: lowering the pump in an existing well is often a short-term solution if the underlying cause is a genuinely declining water table. Confirm the diagnosis before deciding whether lowering is a long-term fix or a bridge to a more permanent solution.</p>
            <p className='text-slate-700 leading-relaxed text-sm'><strong>Do not lower the pump to the very bottom of the well.</strong> Sediment accumulates at the well bottom. A pump set too deep draws sand and silt into the pump, destroying the impellers. A contractor will set the pump with appropriate clearance above the bottom, typically at least 10 to 20 feet.</p>
          </div>

          {/* Scenario 4 */}
          <div className='mb-2 pl-5' style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className='text-lg font-bold text-slate-900 mb-4'>Scenario 4: True Aquifer Depletion or Permanent Yield Loss</h3>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What it is:</strong> In some situations, the water that previously supplied your well is genuinely gone or reduced to an insufficient level. This can result from regional aquifer depletion (the High Plains Ogallala Aquifer, parts of the Southwest, Central Valley of California have experienced documented multi-decade decline), drought that has reduced a shallow aquifer below recoverable levels, structural well problems including clogged screens or collapsed casing that have reduced the well{`'`}s ability to draw from the aquifer, or a neighbor drilling a new deep well that intercepts the same water-bearing formation.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'>According to <a href='https://www.usgs.gov/special-topics/water-science-school/science/groundwater-decline-and-depletion' target='_blank' rel='noopener noreferrer' className='font-semibold underline' style={{ color: '#1D9E75' }}>USGS data on groundwater decline</a>, estimated groundwater depletion in the United States during the 20th and early 21st centuries has totaled approximately 1,000 cubic kilometers, with the rate of depletion accelerating since 1950. Regional depletion is real and increasingly common. But it is still far less common than temporary drawdown as the cause of any individual dry well event.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>How to confirm it:</strong> This scenario is confirmed by elimination. If the well does not recover after 24 to 48 hours of rest, if the static water level measured by a contractor is significantly lower than the original well log measurement, if neighboring wells are showing similar problems without explanation, and if lowering the pump does not resolve the issue, you are dealing with genuine yield loss.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-6'>A well contractor can measure the current static water level and compare it against the static level recorded at construction. A decline of more than 20 to 30 feet from the original static level, combined with no recovery after rest, is a strong indicator of long-term aquifer change rather than temporary drawdown.</p>

            <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The fix options:</strong> Multiple paths exist, from least to most expensive.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><em>Well rehabilitation:</em> Clogged screens, mineral buildup, and iron bacteria can reduce well yield dramatically. A licensed contractor can clean or redevelop the well using techniques including chemical treatment (acidizing), high-pressure jetting, or mechanical brushing. If the yield decline is from well fouling rather than true aquifer change, rehabilitation can restore flow.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><em>Hydrofracturing:</em> For wells drilled in bedrock, high-pressure water injection into the bore can open existing fractures in the rock and create pathways for water to enter the well. Success rates range from 60 to 90 percent. Cost is typically $2,000 to $7,000. It is significantly cheaper than drilling a new well and worth attempting for bedrock wells before committing to a new drill.</p>
            <p className='text-slate-700 leading-relaxed text-sm mb-4'><em>Lowering the pump or deepening the well:</em> If the static water level is still present but lower than the pump can reach, lowering the pump is tried first. If the well is not deep enough to lower the pump sufficiently, deepening the borehole to reach a lower water-bearing formation is an option. Deepening costs $3,000 to $10,000 and is not guaranteed &mdash; deeper drilling in the same location does not always find water.</p>
            <p className='text-slate-700 leading-relaxed text-sm'><em>New well:</em> When the existing well cannot be rehabilitated, deepened, or made to access water reliably, drilling a new well in a different location is the solution. Average cost is $5,000 to $15,000 depending on depth, geology, and region. A licensed well driller can advise on the most promising location based on local hydrogeology. The old well must be properly decommissioned according to state regulations.</p>
          </div>
        </div>

        {/* Diagnostic Timeline Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Timeline</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Diagnostic Timeline: What to Do and When</h2>

          <div className='overflow-x-auto rounded-lg border border-slate-200'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Time Since Losing Water</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Immediately</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Turn off pump at breaker. Source temporary water.</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>First hour</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Check pressure switch, breaker, and pressure tank (rule out equipment failure before assuming dry well)</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Hours 1 to 24</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pump off, no water use. Wait for recovery.</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>After 24 hours</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Try pump briefly. Water returns: Scenario 1 (temporary drawdown). No water: continue</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Day 2</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Note weather history, recent usage, neighbor well status. Call a contractor for static water level measurement</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Contractor visit</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Static level measured. Pump depth confirmed. Scenario 2, 3, or 4 diagnosed</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>After diagnosis</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Lower pump (Scenario 3), manage conservation (Scenario 2), or evaluate rehabilitation/deepening/new well (Scenario 4)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Rule Out Equipment Failure */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Equipment</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Rule Out Equipment Failure Before Assuming a Dry Well</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before assuming the aquifer is the problem, check these equipment failures that produce identical symptoms. A well that appears dry from inside the house may have full water pressure available &mdash; the pump or electrical system simply cannot deliver it.</p>

          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>What a pump running dry sounds and acts like:</strong> Before you can rule out equipment failure, know what pump distress actually sounds like. A pump that is running dry or near-dry makes specific sounds: a higher-pitched hum than normal, intermittent clicking or chattering as it briefly pulls air bubbles through, and in advanced stages, a grinding or rattling sound from impellers spinning without water to cool and lubricate them. The pump may also run continuously without building pressure &mdash; the motor is working but not moving water. If you press your ear against the drop pipe or the pressure tank and hear anything other than a steady low hum followed by silence when pressure is reached, the pump is struggling.</p>

          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The pressure switch.</strong> The pressure switch tells the pump when to run. A failed switch may not signal the pump to start, leaving the system depressurized even though the pump and water supply are fine. Check whether the pump is running at all by listening at the wellhead for the pump hum. If you hear nothing with water demand present, the pressure switch may be stuck open. A pressure switch replacement costs $45 to $75 in parts.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The circuit breaker.</strong> A tripped breaker at the main panel cuts power to the pump. The pump cannot run. The system pressure drops. Open the panel, find the breaker labeled for the well pump, and check whether it has tripped. If it has tripped repeatedly, an electrician needs to investigate the cause rather than simply resetting it.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The pressure tank.</strong> A failed pressure tank can cause the system to appear to have lost water when the issue is actually a waterlogged tank providing no drawdown storage. See the <Link href='/guides/well-pressure-tank-guide' className='font-semibold underline' style={{ color: '#1D9E75' }}>well pressure tank guide</Link> for the bladder failure diagnosis test.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Sediment in the pump inlet.</strong> If the water that did come through before loss was cloudy or contained sediment, the pump screen may be clogged with sand or silt drawn from the bottom during low-water conditions. The pump may still be running but unable to pull water through the blocked inlet.</p>
        </div>

        {/* How to Measure Your Static Water Level */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Measurement</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Measure Your Static Water Level</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The static water level &mdash; the depth to water in the well when the pump has not run for several hours &mdash; is the single most diagnostic measurement for a dry well. It tells you whether water is present, how deep it is, and whether the water table has changed since the well was drilled.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What you need:</strong> An electric water level sounder (depth gauge), available at well supply stores and online for $100 to $300. Or a weighted string or measuring tape with carpenter{`'`}s chalk coated on the bottom 10 feet, dried before use.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>The chalk tape method:</strong> Coat the lower 10 feet of a measuring tape with carpenter{`'`}s chalk and let it dry completely. Lower it slowly into the well through the well cap access port until you feel the weight touch something or the resistance changes. Pull it up and look for the wet/dry line on the chalk. Measure from the wet line to the mark at the top of the casing. That measurement is your current static water level depth.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Important:</strong> This measurement must be taken after the pump has been off for at least 6 to 12 hours. Measuring during or just after pumping captures the pumping water level, not the static level, which will read significantly deeper and not reflect actual aquifer conditions.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>What to compare it to:</strong> Your original well drilling report (well log) lists the static water level at the time of construction. Compare your current measurement to that number. If the current static level is deeper by 20 feet or more, the water table has declined. If it is similar to the original, the aquifer is stable and the problem is likely pump depth or temporary drawdown.</p>
        </div>

        {/* If the Pump Already Ran Dry */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Emergency</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>If the Pump Already Ran Dry Before You Could Turn It Off</h2>

          <div className='rounded-lg p-5' style={{ backgroundColor: '#FAEEDA', border: '1px solid #854F0B' }}>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'>If the pump ran dry for an unknown period before you discovered the problem, the question before restarting is whether the motor sustained heat damage.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>What to inspect:</strong> Touch the pressure tank and the drop pipe above it. If they are unusually warm &mdash; warmer than ambient room temperature &mdash; the pump has been running and generating heat recently. This does not confirm damage but indicates the pump ran recently under stress.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The 2-hour cooling test:</strong> With the pump off, wait at least 2 hours before attempting a restart. This allows any heat in the motor windings to dissipate. Modern submersible pumps have thermal overload protection that shuts down the motor when it overheats &mdash; the motor may restart on its own after cooling if the overload tripped rather than a winding failure occurring.</p>
            <p className='text-slate-700 text-sm leading-relaxed mb-4'><strong>The restart test:</strong> After 2 hours with power restored, attempt to start the pump briefly. Listen at the wellhead or pressure tank. If the pump hums and pressure builds normally, it survived the dry run. If the pump hums but pressure does not build, the pump may have lost prime or sustained impeller damage. If there is no sound at all, the motor may have burned out or the overload is still engaged.</p>
            <p className='text-slate-700 text-sm leading-relaxed'><strong>When to call before restarting:</strong> If you suspect the pump ran dry for more than 30 to 60 minutes, have a contractor assess before restarting. The cost of a diagnostic visit ($100 to $200) is far less than the cost of burning out an already-damaged motor by running it a second time. A contractor can measure current draw (amperage) against the nameplate rating &mdash; a pump drawing more amps than rated has motor damage and will fail again.</p>
          </div>
        </div>

        {/* Interim Water */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Practical</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Interim Water: How to Get Through the Wait</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Whether you are waiting for the aquifer to recover, waiting for a contractor, or waiting for a new well to be completed, you need water. Here are the practical options.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Bottled water:</strong> Fastest and most reliable for drinking and cooking. Cost is real but manageable for a few days.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Water hauling:</strong> A water delivery company can bring a tank truck to your property and fill an above-ground storage tank or cistern. Cost ranges from $100 to $400 per delivery depending on volume and distance. Do not have them pour water into your well casing. The well is not a storage tank. Foreign water introduced into the casing can introduce bacteria, contaminate the aquifer, and potentially damage the pump.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Neighbors and community:</strong> Many rural communities have informal arrangements for water sharing during well outages. Local fire departments sometimes allow residents to fill containers.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Conservation priority list during an outage:</strong> Drinking water is the absolute priority. Toilet flushing can be managed with a bucket of gray water from other sources. Bathing can be reduced to essentials. Laundry and dishwashing can wait.</p>
        </div>

        {/* Long-Term Solutions */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Solutions</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Long-Term Solutions for Low-Yield Wells</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If your well has a pattern of running dry in summer or during any sustained demand, the well has a yield problem. These are the permanent solutions.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Pump cycle controller:</strong> A device that limits how long the pump runs per cycle based on the well{`'`}s actual recharge rate. Prevents the pump from outrunning the aquifer. Cost: $200 to $500. Best for wells with consistent but slow recharge.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Low-water cutoff (pump saver):</strong> An automatic switch that shuts off the pump before it runs dry. Installed in the pump control box. Protects the pump from overheating damage during low-water events. Cost: under $150. Not a yield solution, but a critical pump protection measure for any low-yield well. Oregon State University{`'`}s Well Water Program specifically recommends this for any well with a history of running dry.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Storage cistern system:</strong> A large above-ground or buried tank (500 to 2,000 gallons) that the well fills slowly at its natural recharge rate. A separate booster pump supplies the house from the cistern at full pressure. This completely decouples household water demand from the well{`'`}s recharge rate. Cost: $2,000 to $8,000 installed depending on tank size and system complexity. The correct long-term solution for wells that cannot meet peak household demand.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Well rehabilitation:</strong> Cleaning, acidizing, or redeveloping an older well can restore 20 to 50 percent of lost yield in some cases. Worth attempting on wells over 15 years old before committing to deepening or drilling.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Hydrofracturing:</strong> For bedrock wells. Injects high-pressure water to open fractures. Success rate 60 to 90 percent. Cost $2,000 to $7,000.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Well deepening:</strong> Access to a deeper, more stable aquifer. Not guaranteed to find water. Cost $3,000 to $10,000. Only appropriate after confirming the current aquifer cannot supply adequate water.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>New well:</strong> The last resort when all other options fail or when the well is too old to rehabilitate. Cost $5,000 to $15,000.</p>
        </div>

        {/* When to Call a Contractor */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Contractor</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>When to Call a Contractor and What to Tell Them</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Call a well contractor when the pump-off recovery test fails &mdash; the well does not return water after 24 hours of no use.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>What to tell them when you call:</strong></p>
          <ul className='list-disc pl-6 mb-6 space-y-1'>
            <li className='text-slate-700 text-sm'>Your well{`'`}s total depth and original static water level from the well log (find this in your home records or through your county health department)</li>
            <li className='text-slate-700 text-sm'>Your pump{`'`}s current set depth if known</li>
            <li className='text-slate-700 text-sm'>Whether the loss was sudden or gradual</li>
            <li className='text-slate-700 text-sm'>Whether you had unusually high water use in the hours before the loss</li>
            <li className='text-slate-700 text-sm'>Whether neighboring wells are experiencing similar issues</li>
            <li className='text-slate-700 text-sm'>Whether the dry period coincides with an unusually dry summer or drought conditions</li>
            <li className='text-slate-700 text-sm'>The age of the well and pump</li>
          </ul>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>A contractor with this information can arrive with the right equipment and a diagnostic plan rather than spending the first hour collecting information you already have.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>What a contractor should do:</strong> Measure the current static water level. Compare it to the original well log. Determine whether the pump intake is above the water level. Recommend the least invasive and least expensive fix that addresses the actual diagnosis. Be skeptical of a contractor who recommends drilling a new well on a first visit without first ruling out temporary drawdown, pump depth issues, and well rehabilitation.</p>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What does it mean when your well runs dry?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>When a well runs dry, it means the pump is pulling air instead of water because the water level has dropped below the pump intake. This can have four distinct causes: temporary drawdown where pumping outpaced the aquifer{`'`}s recharge rate for a few hours, seasonal water table decline from drought or dry season, the pump set at the wrong depth for the current water level, or genuine long-term aquifer depletion. The most common cause is temporary drawdown, which resolves on its own after 4 to 24 hours without pumping.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What should I do immediately when my well runs dry?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Turn off the pump at the circuit breaker immediately to prevent pump damage from running dry. Source temporary drinking water from bottled water or a neighbor. Do not pour water from outside sources into the well casing. Wait 24 hours with no water use to test whether the well recovers on its own. If it does, the problem was temporary drawdown. If it does not recover, contact a licensed well contractor for a static water level measurement and diagnosis.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Will my well refill itself?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>In most cases, yes. The majority of wells that lose water have experienced temporary drawdown &mdash; the pump outpaced the aquifer{`'`}s recharge rate. The well refills when pumping stops. Typical recovery time is 2 to 8 hours for normal-yield wells, up to 24 hours for low-yield wells. Seasonal water table drops also recover as precipitation returns. Only wells in areas of genuine long-term aquifer depletion or with structural problems do not recover without intervention.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How long does it take for a well to recover after running dry?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Most residential wells recover within 2 to 8 hours after stopping pumping during a temporary drawdown event. Low-yield wells under 1 gallon per minute recharge can take 12 to 24 hours. Seasonal water table recovery after a dry summer can take weeks to months and requires the return of normal precipitation patterns. Permanent aquifer depletion does not recover on its own.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How much does it cost to fix a dry well?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Cost depends entirely on the cause. Waiting for temporary drawdown to resolve costs nothing. Lowering the pump to reach a lower water table costs $300 to $800. Well rehabilitation (cleaning and redevelopment) costs $500 to $3,000. Hydrofracturing a bedrock well costs $2,000 to $7,000. Deepening an existing well costs $3,000 to $10,000. Drilling a new well costs $5,000 to $15,000. Confirming the diagnosis before proceeding is the single most important cost control measure.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Can a dry well be fixed?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>In most cases, yes. Temporary drawdown resolves on its own. Pump depth problems are fixed by lowering the pump. Well fouling from mineral scale and bacteria can be rehabilitated. Bedrock wells can often be hydrofractured to increase yield. Only in cases of severe, permanent regional aquifer depletion is a well truly unfixable, requiring drilling in a different location or alternative water supply.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>How do I know if my well is permanently dry or just temporarily low?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Turn off the pump for 24 hours and see if water returns. If it does, the dryness was temporary. If it does not, have a contractor measure the current static water level and compare it to the level recorded when the well was drilled. If the current level is significantly lower and does not change after several days of no pumping, and if neighboring wells show the same pattern, the water table has declined. A single dry period during an unusually hot, dry summer with full recovery after rain does not indicate permanent depletion.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Should I pour water into my well to refill it?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>No. Never pour water from any outside source into your well casing. Your well connects to an underground aquifer and is not a storage tank. Introducing foreign water can introduce bacteria and other contaminants into your water supply, potentially contaminating the aquifer. It can also damage the pump and well casing. Get water for household use from bottled sources or water haulers who deliver to above-ground storage tanks only.</p>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Static Water Level</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The depth to water in a well when the pump has not been running for at least 6 to 12 hours and the water has returned to its natural, undisturbed equilibrium. Measured from the top of the well casing. The most important measurement for diagnosing dry well problems. Compared against the static level recorded in the original well drilling report to assess whether the water table has changed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pumping Water Level</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The depth to water in the well while the pump is actively running at a constant rate. Always deeper than the static water level because pumping creates a cone of depression. The difference between static water level and pumping water level is the drawdown.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Drawdown</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The temporary drop in water level inside the well caused by pumping. Measured in feet. Drawdown = static water level depth minus pumping water level depth. Excessive drawdown that approaches the pump intake depth causes the pump to pull air. A well that consistently produces more drawdown than its recovery rate can support will run dry under sustained demand.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Well Yield</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The rate at which a well can sustainably produce water, measured in gallons per minute (GPM). Determined by the aquifer{`'`}s permeability and the well{`'`}s construction. A well with a yield below 1 GPM is considered a low-yield well and requires special management strategies to match household demand to the well{`'`}s natural recharge rate.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Aquifer Recharge</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The natural process by which precipitation, snowmelt, and surface water seep into the ground and replenish groundwater. Recharge rate varies by geology, soil type, and seasonal precipitation. In unconfined aquifers recharged primarily by local precipitation, drought reduces recharge and the water table falls. In confined aquifers with distant recharge areas, local drought has less immediate effect.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Hydrofracturing</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A well rehabilitation technique used for bedrock wells in which high-pressure water is injected into the borehole to open or extend fractures in the surrounding rock, creating additional pathways for groundwater to enter the well. Not the same as hydraulic fracturing (fracking) used in oil and gas extraction. Success rates of 60 to 90 percent for increasing yield in fractured bedrock aquifers.</p>
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
            <Link href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </Link>
            <Link href='/problems/well-pump-short-cycling' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Short Cycling</span>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/guides/well-pressure-tank-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pressure Tank Guide</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
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
