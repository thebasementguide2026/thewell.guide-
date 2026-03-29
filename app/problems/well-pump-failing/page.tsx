import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Signs Your Well Pump Is Failing: 8 Warning Signs and What to Do | The Well Guide',
  description: 'The complete guide to recognizing a failing well pump. Eight warning signs, urgency levels, the age factor, and the repair vs. replace framework.',
  openGraph: {
    title: 'Signs Your Well Pump Is Failing: 8 Warning Signs and What to Do',
    description: 'The complete guide to recognizing a failing well pump. Eight warning signs, urgency levels, the age factor, and the repair vs. replace framework.',
    url: 'https://www.thewell.guide/problems/well-pump-failing',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/pressure tank fail.jpg', width: 1200, height: 630, alt: 'Hand turning a residential faucet with no water coming out, indicating a well pump failure.' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/problems/well-pump-failing' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Signs Your Well Pump Is Failing: 8 Warning Signs and What to Do',
  description: 'The complete guide to recognizing a failing well pump. Eight warning signs, urgency levels, the age factor, and the repair vs. replace framework.',
  image: 'https://www.thewell.guide/pressure tank fail.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/problems/well-pump-failing',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if my well pump is failing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The eight most common signs are: declining water pressure over time, the pump running longer than normal to reach pressure, short cycling, air spitting from faucets, discolored or sediment-laden water, a higher electricity bill with no change in usage, unusual sounds from the pressure switch or control box, and complete loss of water. Age is the most important context \u2014 a pump over 12 years old showing any symptom warrants professional evaluation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a well pump last before it needs to be replaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A quality submersible pump typically lasts 10 to 15 years with normal use and proper pressure tank sizing. Pumps on clean neutral-pH water may run 20 years. Pumps on acidic, corrosive, or high-sediment water may fail in 7 to 8 years. A pump at or past 12 years showing any warning sign should be evaluated by a professional with replacement budgeted as a likely outcome.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes a well pump to fail?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most common causes are age-related motor winding degradation, bearing wear, impeller wear from pumping sediment-laden water, short-cycling damage from a failed pressure tank, running dry when the water level drops below the pump intake, lightning or power surge damage to the motor or control box, and corrosion from acidic or high-iron water.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a failing well pump sound like?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sounds associated with a failing well pump system are primarily heard at the pressure switch and control box at the surface. Rapid clicking from the pressure switch indicates short cycling. Buzzing or humming louder than normal from the control box indicates the capacitor or relay is working harder than it should. Grinding or squealing audible through the plumbing may indicate severe bearing failure in the pump motor.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to replace a well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A complete well pump replacement typically costs $800 to $2,500 all-in, including the pump, drop pipe labor, and associated components. Deeper wells cost more to service. Emergency replacement adds 25 to 50 percent to these costs. A professional diagnostic visit to confirm the pump is the problem typically costs $150 to $300.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a well pump be repaired rather than replaced?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Some failures are repairable \u2014 a failed control box capacitor costs $100 to $300, a pressure switch replacement costs $50 to $150. The pump motor itself is generally not economically repairable for residential submersible pumps. For pumps under 8 years old with an isolated failure, repair may be appropriate. For pumps over 12 years old, replacement is usually the better investment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I turn off my well pump if I think it is failing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, in specific situations: if the circuit breaker trips and trips again when reset, if you smell burning from the control box, if water is brown or muddy and does not clear, if you have no water and resetting the breaker does not restore it, or if the pump is making grinding sounds. Running a pump through these conditions can turn a repairable problem into a burned-out motor. Shut off at the circuit breaker and call a professional.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a failing pump and a failing pressure tank?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A failing pressure tank typically causes short cycling, sputtering or air in the water lines, and rapidly fluctuating pressure. A failing pump typically causes gradual pressure decline over time, extended pump run time, discolored water, increased electricity bills, or complete loss of water. The two problems can coexist and a failed pressure tank can cause pump failure if short cycling is not corrected promptly.',
      },
    },
  ],
}

export default function WellPumpFailing() {
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

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src='/pressure tank fail.jpg'
          alt='Hand turning a residential faucet with no water coming out, indicating a well pump failure.'
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
            Signs Your Well Pump<br />
            Is Failing:<br />
            <span style={{ color: '#5DCAA5' }}>8 Warning Signs</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            A well pump rarely fails without warning. Knowing what to watch for buys you time to plan rather than panic.
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
        { label: 'Signs Your Well Pump Is Failing' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>A well pump rarely fails without warning. The eight most common signs of a failing pump are: declining water pressure over time, the pump running longer than normal to reach pressure, short cycling, air spitting from faucets, discolored or sediment-laden water, a higher electricity bill with no change in usage, unusual sounds from the pressure switch or control box, and complete loss of water. Age matters more than most homeowners realize &mdash; a pump showing any of these signs at 12 or more years old is statistically near end of life and warrants professional evaluation regardless of severity. A pump showing the same signs at 3 years old is a very different situation.</p>
        </div>

        {/* The Age Factor */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Context</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>The Age Factor: Start Here Before Anything Else</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>Before working through the eight warning signs, check your pump&apos;s age. This single piece of information changes how you interpret every symptom below.</p>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>A quality submersible well pump from a reputable manufacturer (Grundfos, Franklin, Goulds) has a typical lifespan of 10 to 15 years under normal residential use. Some pumps on clean water with correct pressure tank sizing run 20 years or more. Others in areas with corrosive, acidic, or sediment-heavy water fail in 7 to 8 years.</p>

          {/* Age Tier Cards */}
          <div className='grid md:grid-cols-3 gap-4 mb-6'>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <p className='text-lg font-black text-slate-900 mb-2'>Under 7 Years</p>
              <p className='text-slate-700 text-sm leading-relaxed'>A pump under 7 years old showing warning signs almost certainly has a fixable cause &mdash; a failed pressure tank, a pressure switch issue, a plumbing leak, or a water quality problem affecting the pump. The pump itself is probably not the culprit and replacing it prematurely would be expensive and unnecessary.</p>
            </div>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #854F0B' }}>
              <p className='text-lg font-black text-slate-900 mb-2'>7 to 12 Years</p>
              <p className='text-slate-700 text-sm leading-relaxed'>A pump between 7 and 12 years old showing warning signs is in its mid-life range. Some causes are still fixable. Others may indicate wear that will progress to failure. Professional evaluation is warranted.</p>
            </div>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #A32D2D' }}>
              <p className='text-lg font-black text-slate-900 mb-2'>Over 12 Years</p>
              <p className='text-slate-700 text-sm leading-relaxed'>A pump over 12 years old showing any of the signs below should be evaluated by a professional with replacement budgeted as a likely outcome. At 15 years, any significant symptom is a strong indicator that replacement is coming. Planning proactively costs significantly less than an emergency replacement.</p>
            </div>
          </div>

          <p className='text-slate-700 text-sm leading-relaxed'><strong className='text-slate-900'>How to find your pump&apos;s age:</strong> Check the well completion report filed with your county health department when the well was drilled. The report lists the pump model and installation date. If the pump has been replaced since the well was drilled, check any paperwork from that service. If no records exist, a licensed well contractor can often estimate age from the pump model number.</p>
        </div>

        {/* Warning Signs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Warning Signs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <div className='space-y-6'>

            {/* Warning Sign 1 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>1</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Declining Water Pressure Over Time</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>Water pressure that was adequate a year or two ago now seems lower during showers, when running the dishwasher, or when using multiple fixtures simultaneously. The decline is gradual rather than sudden.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-4'>Gradual pressure decline in a submersible pump most commonly indicates worn impellers &mdash; the rotating components inside the pump that move water upward through the drop pipe. Impellers made of plastic or stainless steel wear over time, particularly in water with sand or sediment. Gradual pressure decline can also indicate a partially clogged well screen or a slowly declining well yield.</p>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#854F0B' }}>Urgency: Moderate.</span> <span className='text-slate-700 text-sm leading-relaxed'>Gradual pressure decline is not an emergency but warrants professional evaluation within the next few weeks, particularly if the pump is over 10 years old.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>Schedule a professional well inspection. Do not attempt to pull and inspect the pump yourself &mdash; it requires specialized equipment and a trained contractor.</p>
              </div>
            </div>

            {/* Warning Sign 2 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>2</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Pump Running Longer Than Normal to Reach Pressure</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>You notice the pump running for noticeably longer periods after water use than it did previously. Where it used to cycle on for 2 to 3 minutes and reach pressure, it now runs for 5 to 10 minutes or longer before the pressure switch shuts it off.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-4'>Extended run time to reach cut-out pressure indicates the pump is moving less water per unit of time than it should. This can also indicate a check valve problem &mdash; if the check valve is failing and allowing water to slowly leak back down the drop pipe, the pump has to re-pressurize the drop pipe on every cycle, adding significant run time.</p>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#854F0B' }}>Urgency: Moderate to high.</span> <span className='text-slate-700 text-sm leading-relaxed'>Extended run time increases electricity consumption and accelerates motor wear. Schedule professional evaluation promptly.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>Monitor and note the run time on several consecutive cycles to confirm the pattern. Check the pressure gauge and confirm the pump is actually reaching the cut-out pressure &mdash; if it is not reaching cut-out, that is a more urgent issue. Call a professional for a diagnostic visit.</p>
              </div>
            </div>

            {/* Warning Sign 3 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>3</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Short Cycling</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>The pump turns on and off rapidly &mdash; every few seconds rather than running for minutes at a time. You hear repeated clicking from the pressure switch with the pump running in short bursts.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-4'>Short cycling is most commonly caused by a waterlogged pressure tank rather than a failing pump. When the pressure tank&apos;s diaphragm fails and the air charge is lost, the tank can no longer buffer the pressure change between pump cycles. Short cycling caused by a waterlogged tank does not necessarily mean the pump is failing &mdash; but it will cause the pump to fail prematurely if not corrected. A pump rated for 10 to 15 years can fail in 2 to 3 years if short-cycling continuously. See the <a href='/problems/well-pump-short-cycling' className='underline' style={{ color: '#1D9E75' }}>well pump short cycling guide</a> for the complete diagnostic procedure.</p>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#A32D2D' }}>Urgency: High.</span> <span className='text-slate-700 text-sm leading-relaxed'>Short cycling damages the pump motor rapidly. Address it within days, not weeks.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>Perform the pressure tank pre-charge check (described in the <a href='/guides/well-pump-maintenance' className='underline' style={{ color: '#1D9E75' }}>well pump maintenance guide</a>). If the Schrader valve releases air normally and pre-charge adjustment does not resolve the short cycling, the tank diaphragm has likely failed and the tank needs replacement. If the tank is replaced and short cycling continues, the pressure switch or pump may be the cause.</p>
              </div>
            </div>

            {/* Warning Sign 4 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>4</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Air Spitting or Sputtering From Faucets</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>Faucets spit or sputter when first opened, releasing air before water flows normally. This may happen consistently or only at certain times of day or after periods of high water use.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-4'>Air in the water lines typically has one of three causes: a failing pressure tank diaphragm allowing air to enter the water side, a drop in the well water level to near the pump intake (pump cavitation), or a crack in the drop pipe. Pump cavitation is the most serious because the pump relies on water for cooling &mdash; remove the water and the motor temperature rises quickly to a point of damage.</p>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#A32D2D' }}>Urgency: High</span> <span className='text-slate-700 text-sm leading-relaxed'>when accompanied by reduced flow or during drought conditions. Persistent air spitting warrants professional evaluation promptly.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>Note when the air spitting occurs and report this pattern to the professional. Do not run the pump continuously if you suspect it is drawing air. See the <a href='/problems/well-running-dry' className='underline' style={{ color: '#1D9E75' }}>well running dry guide</a> if you suspect yield is the issue.</p>
              </div>
            </div>

            {/* Warning Sign 5 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>5</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Discolored or Sediment-Laden Water</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>Water that has been clear suddenly appears brown, rust-colored, or muddy. You may also notice sediment or grit in the water that was not present previously.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-4'>Sudden discoloration indicates iron from corroding well casing or pump components, or the pump drawing from the very bottom of the available water column and pulling sediment. Running a pump in sediment-laden water dramatically accelerates impeller wear. Sudden discoloration in an older pump may also indicate internal pump corrosion.</p>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#A32D2D' }}>Urgency: High</span> <span className='text-slate-700 text-sm leading-relaxed'>for sudden onset, especially brown or muddy water. Stop drinking the water until it has been tested. Do not run the pump continuously if the water is muddy. See the <a href='/guides/how-to-test-well-water' className='underline' style={{ color: '#1D9E75' }}>how to test your well water guide</a> for the correct testing procedure after a water quality change.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>Run the water for several minutes to see if it clears. If it does not clear within 5 to 10 minutes of running, call a professional. Do not drink the water until you have a clean test result. Have the water tested and the well inspected.</p>
              </div>
            </div>

            {/* Warning Sign 6 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>6</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Higher Electricity Bill With No Change in Usage</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>Your electricity bill has increased noticeably &mdash; 20 to 30 percent or more &mdash; without any obvious explanation such as new appliances, increased occupants, or a change in season.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-4'>A failing pump motor draws more electrical current than a healthy one. As motor windings degrade, bearing friction increases, or impellers wear, the motor compensates by drawing more power. A pump that previously drew 8 amps may draw 12 to 14 amps as it nears failure. A pump that is short-cycling also increases electricity consumption significantly.</p>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#854F0B' }}>Urgency: Moderate.</span> <span className='text-slate-700 text-sm leading-relaxed'>An unexplained electricity increase is a diagnostic signal worth investigating, but it is not an emergency in isolation.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>Review your electricity bills for the past 12 months and identify when the increase began. A licensed well contractor can perform an amp draw test and compare it to the pump&apos;s rated specifications.</p>
              </div>
            </div>

            {/* Warning Sign 7 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>7</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Unusual Sounds From the Pressure Switch or Control Box</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>You hear clicking, buzzing, or rapid on-off sounds coming from the pressure switch or the control box. The sounds may occur constantly or in rapid repetitive bursts.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-4'>Rapid clicking from the pressure switch is the audible sound of short cycling. Buzzing or humming from the control box that is louder than normal indicates the capacitor or relay is working harder than it should. Control box components are rated for 10 to 15 years. Grinding or squealing sounds from the pump area can sometimes be heard through the plumbing when bearing failure or impeller damage is severe.</p>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#A32D2D' }}>Urgency: High</span> <span className='text-slate-700 text-sm leading-relaxed'>for buzzing or humming from the control box that is new or increasing. Electrical issues can damage the pump motor. Call a professional promptly.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <p className='text-slate-700 text-sm leading-relaxed'>Note exactly what you hear and where &mdash; pressure switch vs. control box &mdash; and when the sounds occur. Do not attempt to open or service the control box yourself. The 240-volt wiring can cause serious injury. Call a licensed well contractor.</p>
              </div>
            </div>

            {/* Warning Sign 8 */}
            <div className='rounded-lg bg-white border border-slate-200 overflow-hidden' style={{ borderLeft: '4px solid #A32D2D' }}>
              <div className='p-5'>
                <div className='flex items-start gap-4 mb-4'>
                  <span className='flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-black text-lg' style={{ backgroundColor: '#A32D2D' }}>8</span>
                  <h2 className='text-xl font-bold text-slate-900 pt-1'>Complete Loss of Water</h2>
                </div>
                <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FAEEDA' }}>
                  <p className='text-slate-900 text-sm font-bold mb-1'>What you observe:</p>
                  <p className='text-slate-700 text-sm leading-relaxed'>You turn on a faucet and nothing comes out, or the flow drops to essentially zero. This is a sudden onset rather than a gradual decline.</p>
                </div>
                <p className='text-slate-900 text-sm font-bold mb-1'>What it means mechanically:</p>
                <p className='text-slate-700 text-sm leading-relaxed mb-2'>Complete loss of water has several possible causes ranging from simple to serious. In order of likelihood:</p>
                <ul className='list-disc list-inside space-y-1 text-slate-700 text-sm leading-relaxed mb-4'>
                  <li>The circuit breaker to the pump has tripped &mdash; check this first</li>
                  <li>The pressure switch has failed in the open position</li>
                  <li>The control box has failed</li>
                  <li>The pump motor has burned out entirely</li>
                  <li>The well has run dry or the water level has dropped below the pump intake</li>
                  <li>The drop pipe has separated underground</li>
                </ul>
                <p className='mb-4'><span className='text-sm font-bold' style={{ color: '#A32D2D' }}>Urgency: Immediate.</span> <span className='text-slate-700 text-sm leading-relaxed'>Loss of water is an emergency. Do not attempt to repeatedly cycle the breaker if the pump is not responding.</span></p>
                <p className='text-slate-900 text-sm font-bold mb-1'>What to do:</p>
                <ol className='list-decimal list-inside space-y-1 text-slate-700 text-sm leading-relaxed'>
                  <li>Check the circuit breaker first. If it has tripped, reset it once. If it trips again immediately, do not reset it again &mdash; call a professional.</li>
                  <li>Check the pressure gauge on the pressure tank. If it reads zero, the system has lost pressure entirely. If it reads in the normal range, the problem may be downstream of the tank.</li>
                  <li>Call a licensed well contractor for same-day service.</li>
                </ol>
              </div>
            </div>

          </div>
        </div>

        {/* When to Turn the Pump Off Immediately */}
        <div className='mb-16 rounded-lg p-6' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
          <div className='flex items-center gap-3 mb-4'>
            <svg className='w-6 h-6 flex-shrink-0' viewBox='0 0 24 24' fill='none'><path d='M12 9v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' stroke='#A32D2D' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'/></svg>
            <h2 className='text-2xl font-bold text-slate-900'>When to Turn the Pump Off Immediately</h2>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mb-4'>These specific situations require shutting off the pump at the circuit breaker and calling a professional before running it again:</p>
          <div className='space-y-3'>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>The circuit breaker trips and resets only to trip again</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>You smell burning from the control box or pressure switch area</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>Water is brown or muddy and does not clear after 10 minutes of running</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>Air spitting is accompanied by significantly reduced flow during dry weather</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>The pump makes grinding or mechanical sounds audible through the plumbing</p>
            </div>
            <div className='flex items-start gap-3'>
              <span className='flex-shrink-0 w-2 h-2 mt-1.5 rounded-full' style={{ backgroundColor: '#A32D2D' }} />
              <p className='text-slate-700 text-sm leading-relaxed'>You have no water and resetting the breaker does not restore it</p>
            </div>
          </div>
          <p className='text-slate-900 text-sm leading-relaxed font-bold mt-4'>Running a pump through these conditions accelerates motor damage and can turn a repairable problem into a full replacement situation. Shut off, call a professional.</p>
        </div>

        {/* DIY vs. Professional */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>DIY Diagnosis vs. Professional Diagnosis</h2>
          <div className='grid md:grid-cols-2 gap-4 mb-4'>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <p className='text-lg font-bold text-slate-900 mb-3'>What Homeowners Can Assess</p>
              <ul className='space-y-2 text-slate-700 text-sm leading-relaxed'>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#1D9E75' }} /><span>Pump age &mdash; from the well completion record or service history</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#1D9E75' }} /><span>Pressure gauge readings during normal operation</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#1D9E75' }} /><span>Whether the circuit breaker has tripped</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#1D9E75' }} /><span>The pressure tank pre-charge and whether the tank is waterlogged</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#1D9E75' }} /><span>Whether the pressure switch is clicking rapidly</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#1D9E75' }} /><span>Electricity bill trend over the past 12 months</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#1D9E75' }} /><span>Water color and clarity</span></li>
              </ul>
            </div>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #854F0B' }}>
              <p className='text-lg font-bold text-slate-900 mb-3'>What Requires a Professional</p>
              <ul className='space-y-2 text-slate-700 text-sm leading-relaxed'>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#854F0B' }} /><span>Amp draw test &mdash; measuring actual motor current draw versus rated specifications</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#854F0B' }} /><span>Flow rate test &mdash; measuring actual pump output in gallons per minute</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#854F0B' }} /><span>Water level measurement &mdash; determining static and pumping water levels</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#854F0B' }} /><span>Drop pipe inspection &mdash; determining whether the pipe is intact</span></li>
                <li className='flex items-start gap-2'><span className='mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0' style={{ backgroundColor: '#854F0B' }} /><span>Pump pull &mdash; physically removing the pump for visual inspection</span></li>
              </ul>
            </div>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed'>A diagnostic visit from a licensed well contractor typically costs $150 to $300 and covers most of the professional assessments above. This is money well spent before committing to a pump replacement &mdash; the diagnostic visit determines whether the pump, the pressure tank, the pressure switch, the control box, or the well itself is the actual problem.</p>
        </div>

        {/* Repair vs. Replace */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Decision</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Repair vs. Replace: The Decision Framework</h2>
          <p className='text-slate-700 text-sm leading-relaxed mb-6'>When a professional diagnosis confirms the pump is failing, the repair vs. replace decision depends on three factors:</p>
          <div className='space-y-4'>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <p className='text-lg font-bold text-slate-900 mb-2'>Age</p>
              <p className='text-slate-700 text-sm leading-relaxed'>A pump under 8 years old with a specific, isolated failure (a burned winding from a lightning strike, a failed bearing from a manufacturing defect) may be worth repairing if the repair cost is less than 50 percent of replacement cost. A pump over 12 years old with wear-related failure should almost always be replaced &mdash; repairing one component on an aged pump often leads to another failure within months.</p>
            </div>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <p className='text-lg font-bold text-slate-900 mb-2'>Repair Cost as a Percentage of Replacement Cost</p>
              <p className='text-slate-700 text-sm leading-relaxed'>A full pump replacement (pump, drop pipe labor, installation) typically costs $800 to $2,500 depending on well depth and pump size. <strong className='text-slate-900'>If a repair quote exceeds 50 percent of replacement cost on an older pump, replacement is usually the better investment.</strong></p>
            </div>
            <div className='rounded-lg p-5 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
              <p className='text-lg font-bold text-slate-900 mb-2'>Water Quality</p>
              <p className='text-slate-700 text-sm leading-relaxed'>In areas with acidic, corrosive, or high-iron water, pump components deteriorate faster. If water quality caused the failure, the same conditions will cause the same failure in a repaired pump. Address the water quality issue as part of the replacement, not as an afterthought.</p>
            </div>
          </div>
          <p className='text-slate-700 text-sm leading-relaxed mt-4'>See the <a href='/cost-guides/well-drilling-cost' className='underline' style={{ color: '#1D9E75' }}>well drilling cost guide</a> if the diagnostic reveals the well itself &mdash; rather than the pump &mdash; needs replacement or significant rehabilitation.</p>
        </div>

        {/* FAQ Section */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How do I know if my well pump is failing?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The eight most common signs are: declining water pressure over time, the pump running longer than normal to reach pressure, short cycling (rapid on-off), air spitting from faucets, discolored or sediment-laden water, a higher electricity bill with no change in usage, unusual sounds from the pressure switch or control box, and complete loss of water. Age is the most important context for interpreting any of these signs &mdash; a pump over 12 years old showing any symptom is statistically near end of life and warrants professional evaluation.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How long does a well pump last before it needs to be replaced?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>A quality submersible pump from a reputable manufacturer (Grundfos, Franklin, Goulds) typically lasts 10 to 15 years with normal residential use and proper pressure tank sizing. Pumps on clean, neutral-pH water with correct maintenance may run 20 years. Pumps on acidic, corrosive, or high-sediment water may fail in 7 to 8 years. A pump at or past 12 years showing any warning sign should be evaluated by a professional with replacement budgeted as a likely outcome.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                What causes a well pump to fail?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The most common causes are age-related motor winding degradation, bearing wear from years of normal operation, impeller wear from pumping sediment-laden water, short-cycling damage from a failed pressure tank (the pump starts and stops too frequently, burning out the motor), running dry when the water level drops below the pump intake, lightning or power surge damage to the motor or control box, and corrosion from acidic or high-iron water.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                What does a failing well pump sound like?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The sounds associated with a failing well pump system are primarily heard at the pressure switch and control box at the surface rather than from the pump itself underground. Rapid clicking from the pressure switch indicates short cycling. Buzzing or humming louder than normal from the control box indicates the capacitor or relay is working harder than it should. If grinding or squealing sounds are audible through the plumbing, it may indicate severe bearing failure in the pump motor.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                How much does it cost to replace a well pump?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>A complete well pump replacement typically costs $800 to $2,500 all-in, including the pump, drop pipe labor to pull the old pump and install the new one, and any associated components such as a new pitless adapter or check valve. Deeper wells cost more to service because of the greater labor involved in pulling and reinstalling the drop pipe. An emergency replacement (after-hours, weekend, or holiday service) adds 25 to 50 percent to these costs. A professional diagnostic visit to confirm the pump is the problem typically costs $150 to $300.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                Can a well pump be repaired rather than replaced?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Some well pump failures are repairable &mdash; a failed control box capacitor or relay can be replaced for $100 to $300, a pressure switch replacement costs $50 to $150, and a failed check valve can be replaced during a pump pull. The pump motor itself is generally not economically repairable for residential submersible pumps &mdash; the cost of motor rewinding or rebuilding typically approaches or exceeds replacement cost for a new pump. For pumps under 8 years old with an isolated failure, repair may be appropriate. For pumps over 12 years old, replacement is usually the better investment.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                Should I turn off my well pump if I think it is failing?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Yes, in specific situations: if the circuit breaker trips and trips again when reset, if you smell burning from the control box, if water is brown or muddy and does not clear, if you have no water and resetting the breaker does not restore it, or if the pump is making grinding or mechanical sounds. Running a pump through these conditions can turn a repairable problem into a burned-out motor requiring full replacement. Shut off at the circuit breaker and call a professional.</div>
            </details>
            <details className='group border border-slate-200 rounded-lg'>
              <summary className='flex items-center justify-between cursor-pointer p-4 font-bold text-slate-900 text-sm'>
                What is the difference between a failing pump and a failing pressure tank?
                <svg className='w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' /></svg>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>A failing pressure tank typically causes short cycling (rapid on-off cycling of the pump), sputtering or air in the water lines, and inconsistent pressure that fluctuates rapidly during use. A failing pump typically causes gradual pressure decline over time, extended pump run time to reach pressure, discolored or sediment-laden water, increased electricity bills, or complete loss of water. The two problems can coexist and a failed pressure tank can cause pump failure if the resulting short cycling is not corrected promptly. A professional diagnostic visit can definitively distinguish between the two.</div>
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
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Impeller</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The rotating component inside a submersible pump that moves water upward through centrifugal force. A submersible pump contains a stack of impellers, each adding pressure to the water. Impellers are made of plastic or stainless steel and wear over time, particularly when the pump operates in water containing sand or sediment. Worn impellers reduce pump output and pressure without causing the pump to fail entirely.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Control Box</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The electrical panel that controls the starting and running of a submersible well pump motor, typically mounted on the wall near the pressure tank. Contains a start capacitor, a run capacitor, and relay contacts. Control box components are rated for 10 to 15 years of service and are one of the more commonly replaced components in an aging well system.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump Cavitation</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The condition in which a submersible pump draws air along with water, typically because the water level has dropped near or below the pump intake screen. Cavitation causes air spitting at faucets, reduced pressure, and a characteristic rattling or vibration. It is damaging because the pump relies on the water it is pumping for cooling. Prolonged cavitation can destroy a pump motor in hours.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Amp Draw Test</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A professional diagnostic procedure in which a technician uses a clamp-style electrical meter to measure the actual current the pump motor is drawing during operation. The result is compared to the pump&apos;s rated amperage. A motor drawing significantly more than rated amperage is working harder than designed, typically due to worn bearings, degraded windings, or impeller wear. One of the most reliable indicators of pump motor health.</p>
            </div>
          </div>
        </div>

        {/* External Resource */}
        <div className='mb-16 rounded-lg p-5 bg-slate-50 border border-slate-200'>
          <h2 className='text-lg font-bold text-slate-900 mb-2'>External Resource</h2>
          <p className='text-slate-700 text-sm leading-relaxed'>
            The <a href='https://www.ngwa.org' target='_blank' rel='noopener noreferrer' className='font-semibold underline' style={{ color: '#1D9E75' }}>National Ground Water Association (NGWA)</a> maintains the industry standard guidance for well pump diagnosis, replacement, and contractor qualification. Their well owner resources include guidance on finding a licensed well contractor, understanding pump specifications, and navigating the pump replacement process. The NGWA also operates a contractor search tool for finding certified well service professionals by state and county.
          </p>
        </div>

        {/* Related Guides */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Related</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/well-pump-maintenance' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Maintenance</span>
            </Link>
            <Link href='/problems/well-pump-short-cycling' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Short Cycling</span>
            </Link>
            <Link href='/problems/well-pump-running-constantly' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Running Constantly</span>
            </Link>
            <Link href='/problems/well-running-dry' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Running Dry</span>
            </Link>
            <Link href='/reviews/best-pressure-tanks' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Pressure Tanks</span>
            </Link>
            <Link href='/cost-guides/pressure-tank-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FFF7ED', color: '#854F0B' }}>COST</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Pressure Tank Replacement Cost</span>
            </Link>
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Well Guide</span>
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
