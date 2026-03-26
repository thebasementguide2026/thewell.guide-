import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'How a Well Pump Works: The Complete System Explained | The Well Guide',
  description: 'Understanding how a well pump works - from aquifer to faucet - is the foundation for diagnosing every well problem. This guide explains the full pressure cycle, how submersible and jet pumps differ, what the pressure tank actually does, why the pressure switch matters, and what two-wire vs three-wire means for repairs.',
  openGraph: {
    title: 'How a Well Pump Works: The Complete System Explained',
    description: 'Understanding how a well pump works is the foundation for diagnosing every well problem. This guide explains the full pressure cycle, submersible vs jet pumps, what the pressure tank does, and what two-wire vs three-wire means for repairs.',
    url: 'https://well.guide/guides/how-well-pump-works',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://well.guide/howwellworks.jpg', width: 1200, height: 630, alt: 'Pressure tank and pressure switch in a basement utility room with pipes and gauges visible' }],
  },
  alternates: { canonical: 'https://well.guide/guides/how-well-pump-works' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How does a well pump work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well pump pulls water from the aquifer and pushes it into a sealed pressure tank. The pressure tank stores water under compressed air pressure, delivering water to fixtures without the pump running constantly. A pressure switch monitors system pressure and turns the pump on when pressure drops to a low setpoint (30 or 40 PSI) and off when pressure recovers to a high setpoint (50 or 60 PSI). This cycle repeats dozens of times daily, with each pump run lasting 1 to 2 minutes on a properly functioning system.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the pressure tank for in a well system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The pressure tank protects the pump motor by preventing it from having to start every time a small amount of water is used. Without it, opening a faucet would immediately trigger the pump to cycle on and off every few seconds. Electric motors wear out fastest during starting. The pressure tank stores enough pressurized water to supply typical brief demands without starting the pump, extending pump life significantly. A 40-gallon tank typically delivers 10 to 12 gallons of usable water per cycle.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a submersible pump and a jet pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A submersible pump sits below the waterline inside the well and pushes water up from below. A jet pump sits above ground and pulls water up through suction. Submersible pumps can work at any depth because they push rather than pull. Jet pumps are limited to approximately 25 feet for single-pipe models and 80 to 100 feet for two-pipe models. Submersible pumps are quieter, more efficient, and longer-lived.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does the 30/50 or 40/60 pressure switch setting mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'These numbers are the cut-in and cut-out pressure settings. A 30/50 setting means the pump turns on when system pressure drops to 30 PSI and off when pressure recovers to 50 PSI. A 40/60 setting means on at 40 PSI and off at 60 PSI. Most single-story homes use 30/50. Homes with multiple floors or long pipe runs often benefit from 40/60, which provides higher working pressure throughout.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well pump keep turning on and off rapidly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rapid cycling every few seconds almost always means the pressure tank bladder has failed. When the bladder tears, water fills the entire tank with no air cushion. The pump builds pressure, it is immediately consumed, pressure drops back to cut-in, and the pump cycles again. Confirm with the Schrader valve test: press the valve on top of the tank with the pump off. Air should come out. Water means the bladder has failed and the tank needs replacement.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if a well pump runs dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Running dry damages the pump rapidly. Submersible pump motors are water-cooled by the surrounding water flowing past the motor housing. Without this cooling, heat builds up within minutes. Motor windings overheat, lubricants break down, and bearings fail. Turn off the pump at the breaker if you suspect the well is running dry and wait for recovery. A pump that has run dry may continue operating for weeks before the damage causes complete failure.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a two-wire and three-wire well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both pump water identically. The difference is where the motor starting components are located. A two-wire pump has the starting capacitor and relay sealed inside the motor down in the well. If they fail, the entire pump must be pulled to access them. A three-wire pump has starting components in a separate control box above ground. If they fail, the control box can be repaired without pulling the pump. Three-wire systems are used for pumps larger than 1.5 HP.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long should a well pump run per cycle?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well pump should run 1 to 2 minutes per cycle for pumps under 1 HP. This minimum runtime allows the motor to dissipate heat before the next start. If your pump runs less than 30 seconds before shutting off, the pressure tank is undersized or the bladder has failed. If your pump runs continuously without shutting off, the pump output is insufficient to build pressure to cut-out - check for worn impellers, declining well yield, or a failed check valve.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How a Well Pump Works: The Complete System Explained',
  description: 'Understanding how a well pump works is the foundation for diagnosing every well problem. This guide explains the full pressure cycle, submersible vs jet pumps, what the pressure tank actually does, and what two-wire vs three-wire means for repairs.',
  image: 'https://well.guide/howwellworks.jpg',
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
  mainEntityOfPage: 'https://well.guide/guides/how-well-pump-works',
}

export default function HowWellPumpWorks() {
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
          src='/howwellworks.jpg'
          alt='Pressure tank and pressure switch in a basement utility room with pipes and gauges visible'
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
            How a Well Pump<br />
            Works:<br />
            <span style={{ color: '#5DCAA5' }}>The Complete System Explained</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            From aquifer to faucet — the full pressure cycle, how submersible and jet pumps differ, and what two-wire vs three-wire means for repairs.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'How a Well Pump Works' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>A well pump pulls water from underground and pushes it into a steel storage tank called a pressure tank. The pressure tank holds water under pressure so your faucets have instant flow without the pump running every second. When you use water and the pressure drops low enough, a small electrical sensor called a pressure switch turns the pump on. When pressure builds back up, the switch turns the pump off. This cycle happens dozens of times a day. On a healthy system, the pump runs for 1 to 2 minutes per cycle. If it runs only a few seconds before stopping, the storage tank has a problem. If it runs nonstop, the pump or the well itself is struggling. Almost every well problem traces back to a failure somewhere in this three-part system: the pump, the storage tank, or the pressure switch.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm'>Most homeowners only think about their well when something goes wrong. By then, understanding how the system works saves time, money, and the frustration of explaining symptoms to a contractor without context. This guide walks through the complete system from aquifer to faucet, explains what each component does and why it exists, and connects that mechanical knowledge to the problems you are most likely to encounter.</p>
        </div>

        {/* The Four Core Components */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Components</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Four Core Components</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Every residential well system has four components that work together as an integrated system. Understanding what each one does before looking at how they interact makes the whole system make sense.</p>

          {/* System Overview Table */}
          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Component</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>What It Does</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>Where It Is</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>What Breaks</th>
                  <th className='p-3 text-left font-bold text-slate-900 border border-slate-200' style={{ backgroundColor: '#E1F5EE' }}>What That Causes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Well and pump</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pulls water from the aquifer and pushes it to the surface</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Inside the well casing (submersible) or above ground (jet pump)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Motor windings, impellers, capacitor</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>No water, low pressure, pump runs constantly</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Drop pipe and wiring</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Carries water up from the pump; delivers power down to the motor</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Running the full depth of the well alongside the pump cable</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Cracks, joint failures, wire insulation breakdown</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pressure loss, no water, pump runs but no delivery</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pressure tank</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Stores water under pressure so the pump does not run every time you open a faucet</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Utility room, basement, or well house above ground</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Rubber bladder tears or leaks (waterlogging)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pump short-cycles every few seconds; rapid pressure swings</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pressure switch</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Turns the pump on when pressure drops and off when pressure recovers</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Mounted on a small tube at the pressure tank</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Corroded contacts, clogged sensing tube, insect damage</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pump does not start, does not stop, or cycles erratically</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Check valve</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Prevents pressurized water from draining back into the well when the pump stops</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Just above the pump on the drop pipe</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Valve seat wears or debris holds it open</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Pressure bleeds back down continuously; pump short-cycles</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>The check valve is sometimes listed as a fifth component because its failure mimics pressure tank failure exactly. Both cause short-cycling. The Schrader valve test on the tank tells them apart: if the tank test is normal but you still have short-cycling, the check valve is the next suspect.</p>
        </div>

        {/* The Pressure Cycle */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cycle</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Pressure Cycle: From Tap to Aquifer and Back</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>This is the complete sequence of what happens every time you use water in a home served by a private well. Understanding this cycle is the single most useful thing for diagnosing well problems.</p>

          <div className='space-y-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 1: You open a faucet.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Water begins flowing from the pressure tank through the household pipes to the faucet. This water is already pressurized — you are not waiting for the pump to turn on. The pressure tank is doing its job as a storage buffer.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 2: Pressure in the system drops.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>As water flows out of the pressure tank, the compressed air inside expands to fill the space. This expansion reduces the air pressure. The pressure throughout the household plumbing system drops accordingly. You experience this as a gradual slight decline in flow as you run water — the water pressure at your shower or faucet is highest right after the pump shuts off and lowest just before it kicks back on.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 3: The pressure switch senses the drop and starts the pump.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>When system pressure falls to the cut-in setpoint — typically 30 or 40 PSI depending on how the switch is configured — the pressure switch closes its electrical contacts and sends power to the pump motor. The most common residential settings are 30/50 PSI (pump on at 30, off at 50) or 40/60 PSI (pump on at 40, off at 60).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 4: The pump runs and fills the system.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pump draws water from the aquifer and pushes it up the drop pipe, through the pitless adapter, and into the household water supply. Water enters the pressure tank and simultaneously supplies any open fixtures. The pump will deliver water faster than most fixtures can use it when running normally, so the tank begins to refill.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 5: The pressure switch senses the recovery and stops the pump.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>When system pressure rises back to the cut-out setpoint (50 or 60 PSI), the pressure switch opens its contacts and cuts power to the pump motor. The pump stops. The system is now fully pressurized and ready to supply the next demand.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 6: The cycle repeats.</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This cycle happens dozens of times per day in a typical household. A properly functioning system with a correctly sized pressure tank runs the pump for 1 to 2 minutes per cycle. Short cycling (pump running only a few seconds before shutting off) is a sign of pressure tank failure. The pump running continuously without reaching cut-out pressure is a sign of pump failure, low well yield, or a pressure switch problem.</p>
            </div>
          </div>
        </div>

        {/* What the Pressure Tank Actually Does */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Pressure Tank</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What the Pressure Tank Actually Does</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The pressure tank is the most misunderstood component in a residential well system. Many homeowners think of it as a storage reservoir — it is not. Its primary function is protecting the pump.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A submersible pump motor is an electrical motor. Electric motors wear out fastest during starting, when inrush current is high and mechanical stress from going from zero to full RPM is greatest. If the pump had to start every time a faucet was opened or a toilet flushed, it might cycle hundreds of times per day. Motor manufacturers recommend a minimum of 1 minute of runtime per cycle for small pumps to allow the motor to dissipate heat before the next start. The pressure tank provides the buffer that makes this possible.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Without a pressure tank, opening a faucet would immediately drop system pressure below cut-in. The pump would start, build pressure almost instantly (because water is nearly incompressible), reach cut-out, and shut off. This cycle would repeat every few seconds as long as the faucet was open. This is called short cycling and it destroys pumps rapidly.</p>

          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>The drawdown misconception</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>A pressure tank labeled as {`"`}40 gallons{`"`} does not deliver 40 gallons of usable water between pump cycles. Only about 25 to 30 percent of a bladder tank{`'`}s nominal capacity is available as drawdown — the water delivered between cut-out pressure and cut-in pressure. A 40-gallon tank on a 40/60 pressure switch delivers approximately 10 to 12 gallons of drawdown. An 85-gallon tank delivers approximately 25 gallons. This is why a properly sized tank is important for pump longevity — a tank that is too small results in the pump cycling far more frequently than the motor is designed to handle.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>How the bladder works</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Inside the tank, a rubber bladder separates the water from a pocket of pre-charged air. When the pump forces water into the tank, the water compresses the air bladder from the outside. When water is drawn from the tank, the compressed air pushes back against the bladder, forcing water out. The air never mixes with the water because the bladder keeps them separated. The air pre-charge pressure should be set to 2 PSI below the cut-in pressure — 28 PSI for a 30/50 system, 38 PSI for a 40/60 system. This ensures the full drawdown capacity is available.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Bladder failure</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>When the rubber bladder develops a leak or tears, water enters the air chamber and the air cushion is lost. The tank becomes {`"`}waterlogged{`"`} — completely full of water with no air pressure. The pump must then build pressure from scratch every time it starts, causing short cycling even with a large tank. The test: press the Schrader valve (the tire valve stem on top of the tank) with the pump off. Air should come out. If water sprays out, the bladder has failed.</p>
          </div>
        </div>

        {/* Submersible Pumps */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Submersible</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Submersible Pumps: How They Work</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The overwhelming majority of modern residential wells use submersible pumps — sealed, torpedo-shaped units that sit submerged below the waterline inside the well casing. Understanding the mechanics makes it clear why they are the standard choice for anything deeper than 25 feet.</p>

          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>The push principle</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>A submersible pump pushes water up from below rather than pulling it from above. This is a fundamental mechanical advantage. Suction (the pulling method used by jet pumps) is limited by atmospheric pressure — you cannot pull water up more than about 25 feet using atmospheric pressure differential. A pump that pushes from below has no such theoretical limit and can efficiently deliver water from hundreds of feet deep.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Impellers and stages</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>The pump achieves pressure through a series of centrifugal stages, each consisting of a spinning impeller disk and a stationary diffuser. The motor drives a shaft connected to all the impellers. As the impellers spin, centrifugal force accelerates water outward and upward through each stage. Each stage raises the pressure of the water by a fixed amount. A pump for a shallow 100-foot well might have 3 to 5 stages. A pump for a 400-foot well might have 12 to 20 stages. The number of stages and the diameter of the impellers determine the pump{`'`}s pressure output and flow rate in gallons per minute.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>The motor and water cooling</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Submersible pump motors are sealed and water-cooled. The surrounding water in the well flows past the motor housing continuously, carrying away the heat generated by the motor. This is why running a submersible pump dry — when the water level drops below the pump intake — destroys the pump rapidly. Without water flowing past the motor, heat builds up within minutes. The motor windings overheat, the internal lubricant breaks down, and the bearings fail. A pump that has run dry even briefly may continue to operate for weeks before the damage causes failure, but its service life has been significantly shortened.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>The check valve</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Just above the pump, the drop pipe includes a check valve — a one-way valve that prevents pressurized water from flowing back down into the well when the pump shuts off. Without the check valve, the water column in the drop pipe would drain back into the well every time the pump stopped, and the pump would have to refill the pipe before delivering any pressure to the house. Check valve failure causes the pressure to bleed back down slowly after the pump shuts off, eventually triggering the pressure switch again and causing frequent short cycling similar to a waterlogged pressure tank.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>The drop pipe and safety rope</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>The drop pipe is the pipe that carries water from the pump to the pitless adapter at the casing wall. In residential applications it is typically Schedule 80 PVC or polyethylene in 20-foot sections connected by threaded couplings. A safety rope or safety cable connects the pump to the top of the well casing as a backup in case the drop pipe connection ever fails — preventing the pump from falling to the bottom of the well.</p>
          </div>
        </div>

        {/* Jet Pumps */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Jet Pumps</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Jet Pumps: How They Work</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Jet pumps are above-ground pumps used for shallow wells and older installations. They are less common in new construction but still found in many older homes, particularly in areas with high water tables.</p>

          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Single-pipe shallow well jet pumps</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Single-pipe shallow well jet pumps work for wells up to 25 feet deep. The pump creates suction by spinning an impeller that generates a low-pressure area (venturi effect). Atmospheric pressure pushing down on the water surface in the well forces water up the suction pipe to fill the low-pressure area. The pump then re-pressurizes and delivers this water to the household system. A foot valve at the bottom of the suction pipe keeps water in the pipe when the pump is off — without it the pump would lose its prime and have to be manually re-primed. This is the fundamental limitation: suction can only overcome atmospheric pressure up to about 25 feet at sea level (less at elevation).</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Double-pipe deep well jet pumps</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Double-pipe deep well jet pumps extend the range to about 80 to 100 feet by using two pipes. One pipe carries water down to a venturi nozzle assembly at the bottom. The second pipe carries the mixture of new water and recirculated pressure water back up. The recirculated high-pressure flow through the narrow venturi creates a low-pressure zone that draws water from the well, amplifying the suction effect. This is less efficient than a submersible pump and requires priming, but it keeps all mechanical components above ground where they are accessible.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Why submersibles replaced jet pumps</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Jet pumps are noisier, less efficient at depth, and susceptible to losing prime. Submersible pumps are quieter (the water around them absorbs motor noise), more efficient, longer-lived, and capable of operating at depths of 400 feet or more. The trade-off is that accessing a submersible pump for repair requires pulling it from the well, while a jet pump is fully accessible above ground. <a href='https://extension.psu.edu/water-systems-pumps' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>Penn State Extension{`'`}s private water systems resources</a> provide additional technical detail on pump selection and maintenance for well owners.</p>
          </div>
        </div>

        {/* The Pressure Switch in Detail */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Pressure Switch</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Pressure Switch in Detail</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The pressure switch is the electrical brain of the well system. It is a small device typically mounted on a quarter-inch sensing tube connected to the pressure tank tee, containing a spring-loaded diaphragm mechanism and electrical contacts.</p>

          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>How it senses pressure</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>The sensing tube connects the pressure switch to the household water supply, exposing the switch{`'`}s internal diaphragm to the same pressure as the water system. When pressure is high, the diaphragm is pushed up, compressing the spring and holding the electrical contacts open (pump off). When pressure drops to cut-in, the spring pushes the diaphragm back down, the contacts close, and current flows to the pump.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Standard settings</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Residential pressure switches come in three standard factory configurations: 20/40, 30/50, and 40/60 PSI. The 30/50 setting is most common for single-story homes. The 40/60 setting is better for two-story homes or homes with long pipe runs where pressure loss between the tank and the upper floor would otherwise result in inadequate pressure at fixtures. The differential between cut-in and cut-out is always 20 PSI and should not be changed.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Why ants are a real problem</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Pressure switches are well-known in the well service industry for being invaded by insects, particularly ants. Ants are attracted to the warmth of the electrical components and the small enclosed space. Ant bodies can bridge electrical contacts and cause erratic switching behavior, or block the sensing tube and cause the switch to misread pressure. This is not a joke or an edge case — it is a documented common failure mode. If you open a pressure switch and find insects, clean it thoroughly and replace the switch if the contacts show any damage.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Adjusting pressure switch settings</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>The large center nut on a pressure switch adjusts both cut-in and cut-out together (turning clockwise increases both). The small nut adjusts only the differential and should generally not be touched. If you want to raise your system from 30/50 to 40/60, it is easier and more reliable to replace the switch with a factory 40/60 switch than to adjust a 30/50 switch. Whenever you change pressure switch settings, the pressure tank air pre-charge must be reset to 2 PSI below the new cut-in pressure.</p>
          </div>
        </div>

        {/* Two-Wire vs Three-Wire */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Wiring</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Two-Wire vs Three-Wire Submersible Pumps</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If you ever need to repair or replace a submersible pump, the two-wire vs three-wire distinction matters significantly for diagnosing problems and understanding repair options.</p>

          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Two-wire pumps</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>The motor starting components (start capacitor, run capacitor, and relay) are built into the pump motor itself, sealed inside the housing down in the well. The pump connects to the surface via two power wires and a ground wire. Installation is simpler because there is no external control box. The limitation is that if any starting component fails, the entire pump must be pulled from the well to access them. Two-wire pumps are the more common choice for smaller residential applications, typically up to 1 HP.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Three-wire pumps</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>The starting components are housed in a separate control box mounted above ground near the pressure tank. The pump connects via three wires (plus ground). The extra complexity of the above-ground control box is exactly the advantage: if a capacitor or relay fails, you replace the component in the control box without pulling the pump. Control boxes typically cost $100 to $400 and can be replaced in under an hour. Three-wire systems are standard for pumps larger than 1.5 HP because the starting components for larger motors are too large to fit inside the pump housing.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5 mb-4'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>Why this matters for troubleshooting</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>If you have a three-wire pump and the pump stops working, the first thing to check is the control box. Open it with power off and look for burned components, bulging capacitors, or burn marks. A failed start capacitor (the most common failure) costs $30 to $75 and takes 20 minutes to replace. This repair does not require touching the pump in the well. If you have a two-wire pump, there is no control box to check — if the motor has failed, the pump must be pulled.</p>
          </div>
          <div className='bg-white border border-slate-200 rounded-lg p-5'>
            <h3 className='font-bold text-slate-900 text-sm mb-2'>How to identify which you have</h3>
            <p className='text-slate-700 text-sm leading-relaxed'>Look for a gray or beige metal or plastic box mounted on the wall near your pressure tank or in the utility room. It will have wires going to the pressure tank and wires going toward the well. That is a control box, meaning you have a three-wire system. If there is no such box and wires go directly from the pressure switch toward the well, you have a two-wire system.</p>
          </div>
        </div>

        {/* Constant Pressure Systems */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Constant Pressure</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Constant Pressure Systems: How They Differ</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Standard well systems cycle between cut-in and cut-out pressure setpoints. Constant pressure systems use a variable frequency drive (VFD) controller that adjusts pump motor speed in real time to maintain a single steady pressure regardless of demand.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>In a standard system, pressure at your shower varies from 60 PSI right after the pump shuts off to 40 PSI just before it starts again. That 20 PSI swing is imperceptible most of the time but noticeable when pressure is at its lowest and demand is high.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A constant pressure controller solves this by running the pump at partial speed to match exactly the flow being demanded, rather than running full speed until cut-out and shutting off. A household using 2 GPM gets the pump running at low speed. A household using 10 GPM gets the pump running at higher speed. Pressure stays constant throughout.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>The mechanical benefits are significant: because the pump runs more continuously at lower speeds rather than repeatedly starting at full load, motor stress from starting current is dramatically reduced. Pump life often extends as a result. The trade-off is higher upfront cost ($300 to $800 for the controller) and more complex electronics that require professional service if they fail.</p>
        </div>

        {/* Common System Problems */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Troubleshooting</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Common System Problems and Their Causes</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Understanding the pressure cycle makes it straightforward to connect symptoms to causes. Each problem below starts with the symptom you experience at the tap or on the pressure gauge, followed by the most likely cause and what to check first.</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump turns on and off every few seconds</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pressure tank bladder has failed and the tank is waterlogged. There is no stored air to buffer demand, so every cup of water drawn triggers the pump. The fix is replacing the pressure tank, not the pump. Confirm it: press the Schrader valve (the tire-valve stem on top of the tank) with the pump off. Air should come out. Water means the bladder has failed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>No water at all, pump does not turn on</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Check the circuit breaker first — well pumps run on a dedicated 230V double-pole breaker and that breaker trips more often than most people expect. If the breaker is fine, check the pressure switch contacts for corrosion or insect damage, and check the sensing tube for blockage. If both are fine, the pump motor may have failed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump runs but pressure builds very slowly</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The pump is delivering significantly less water than it should. Most likely causes are worn impellers from long-term sediment exposure, a pump that has run dry at some point and suffered motor damage, or declining well yield where the pump is drawing a mix of water and air. Have a contractor test pump output in gallons per minute before replacing — the problem may be the well yield rather than the pump itself.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure is fine normally but drops badly when two things run at once</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The system cannot meet peak demand. The pump{`'`}s flow rate in gallons per minute is insufficient for simultaneous use, or the pressure tank is too small causing the pump to cycle too fast to keep up. This is a capacity issue, not a mechanical failure.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pressure gauge reads near zero with pump running continuously</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Water is not reaching the surface despite the pump running. Most likely causes are a failed check valve allowing water to drain back, the water table dropping below the pump intake so the pump is drawing air (cavitation), or a cracked or disconnected drop pipe. All of these require a licensed well contractor.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump hums but does not start, no water delivered</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The motor is receiving power but cannot generate starting torque. On a three-wire pump, check the control box for a bulging or burned start capacitor — this is a $30 to $75 repair that does not require pulling the pump. On a two-wire pump, the starting components are sealed inside the motor and the pump must be pulled for diagnosis.</p>
            </div>
          </div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Aquifer</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>An underground layer of permeable rock, sand, or gravel that holds and transmits groundwater. Wells are drilled into aquifers to access this groundwater. The rate at which water flows into the well borehole from the surrounding aquifer is the well yield, measured in gallons per minute.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Cut-In Pressure (Cut-On Pressure)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The system water pressure at which the pressure switch closes its electrical contacts and starts the pump. Standard residential settings are 30 PSI (for 30/50 systems) or 40 PSI (for 40/60 systems). When pressure drops to this point, the pump turns on.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Cut-Out Pressure (Cut-Off Pressure)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The system water pressure at which the pressure switch opens its electrical contacts and stops the pump. Standard residential settings are 50 PSI (for 30/50 systems) or 60 PSI (for 40/60 systems). When pressure recovers to this point, the pump turns off.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Drawdown</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The volume of water a pressure tank delivers between the cut-out pressure and the cut-in pressure — the usable water stored per pump cycle. Drawdown is approximately 25 to 30 percent of a bladder tank{`'`}s nominal rated capacity. A 40-gallon tank delivers approximately 10 to 12 gallons of drawdown on a 40/60 system.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Impeller</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A rotating disc with curved vanes inside a centrifugal pump. As the impeller spins, centrifugal force accelerates water outward and upward, increasing its pressure and velocity. A submersible pump stacks multiple impeller stages to build the pressure required to lift water from deep wells.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pitless Adapter</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A fitting that allows the water supply pipe to exit the well casing below the frost line while keeping the casing sealed. It is installed in the casing wall and provides a watertight, sanitary connection between the drop pipe inside the well and the household supply line outside.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Short Cycling</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A condition in which the well pump turns on and off much more frequently than normal, typically every few seconds rather than every 1 to 2 minutes. Almost always caused by a waterlogged pressure tank (bladder failure) that cannot store pressurized water. Short cycling accelerates wear on the pump motor, pressure switch, and all associated electrical components.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Waterlogged</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A condition in which a pressure tank{`'`}s rubber bladder has failed, allowing water to fill the entire tank volume with no air cushion. A waterlogged tank causes short cycling because there is no stored pressure to buffer demand. Identified by pressing the Schrader valve on top of the tank and getting water rather than air.</p>
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
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <a href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </a>
            <a href='/problems/no-water-from-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>No Water from Well</span>
            </a>
            <a href='/guides/well-pressure-tank-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pressure Tank Guide</span>
            </a>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
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
