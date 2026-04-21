import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'Best Well Pumps 2026: Top Picks for Shallow, Deep, and Convertible Applications | The Well Guide',
  description: 'Find the right well pump for your home in 2026. Tested picks for shallow wells, deep wells, and convertible jet applications from $300 to $900. Submersible and jet pump comparison with sizing by well depth and household size.',
  openGraph: {
    title: 'Best Well Pumps 2026: Top Picks for Shallow, Deep, and Convertible Applications',
    description: 'Find the right well pump for your home in 2026. Tested picks for shallow wells, deep wells, and convertible jet applications from $300 to $900.',
    url: 'https://www.thewell.guide/reviews/best-well-pumps',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/bestwellpumps.jpg', width: 1200, height: 630, alt: 'Submersible well pump being lowered into a residential well casing by a homeowner' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/reviews/best-well-pumps' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Best Well Pumps 2026: Top Picks for Shallow, Deep, and Convertible Applications',
  description: 'Find the right well pump for your home in 2026. Tested picks for shallow wells, deep wells, and convertible jet applications from $300 to $900. Submersible and jet pump comparison with sizing by well depth and household size.',
  image: 'https://www.thewell.guide/bestwellpumps.jpg',
  datePublished: '2026-04-21',
  dateModified: '2026-04-21',
  author: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://www.thewell.guide',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://www.thewell.guide',
  },
  mainEntityOfPage: 'https://www.thewell.guide/reviews/best-well-pumps',
}

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Best Well Pumps 2026',
  description: 'Four top residential well pumps reviewed and ranked for shallow wells, deep wells, and convertible jet applications.',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Red Lion RL12G05-2W2V Submersible Deep Well Pump',
      description: 'Best submersible well pump for most homeowners with standard 4-inch residential wells up to 250 feet deep.',
      url: 'https://www.thewell.guide/reviews/best-well-pumps#pick-1',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Red Lion RJS-100-PREM Shallow Well Jet Pump',
      description: 'Best shallow well jet pump for homes with wells under 25 feet, cabins, and budget-conscious buyers.',
      url: 'https://www.thewell.guide/reviews/best-well-pumps#pick-2',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Red Lion RJC-100 Convertible Jet Pump',
      description: 'Best convertible jet pump for wells in the 25 to 90 foot range with above-ground serviceability.',
      url: 'https://www.thewell.guide/reviews/best-well-pumps#pick-3',
    },
    {
      '@type': 'ListItem',
      position: 4,
      name: 'Red Lion RL22G10-3W2V Submersible Deep Well Pump',
      description: 'Best high-flow submersible for deep wells, larger households with 3 to 4 bathrooms, and light irrigation loads.',
      url: 'https://www.thewell.guide/reviews/best-well-pumps#pick-4',
    },
  ],
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if I need a shallow well pump or a deep well submersible pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "The determining factor is your well's static water level, which is the depth from the ground surface to the top of the water when the pump is not running. If the static water level is 25 feet or less, a shallow well jet pump works and is the most affordable option. If the static water level is more than 25 feet, a shallow well jet pump cannot physically lift water that far because of atmospheric pressure limits, and you need either a convertible jet pump (for depths up to 90 feet) or a submersible pump installed down in the well (for any depth up to 250+ feet). If you do not know your well's static water level, a well service company can measure it for $50 to $150, and this measurement should be the first step before buying any pump.",
      },
    },
    {
      '@type': 'Question',
      name: 'What size well pump do I need for a typical 3-bedroom home?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical 3-bedroom home with 2 bathrooms, a kitchen, a laundry room, and 2 outside faucets has 10 to 12 plumbing fixtures total, requiring a well pump rated at 10 to 12 gallons per minute (GPM) at the operating depth of the well. Count your fixtures at 1 GPM per fixture: every sink, toilet, shower, tub, outside hose bib, washing machine, and dishwasher. For horsepower, wells under 100 feet deep need a 1/2 HP pump, wells 100-200 feet deep need 3/4 HP, and wells 200-300 feet deep need 1 HP. The Red Lion RL12G05-2W2V (1/2 HP, 12 GPM, 4-inch submersible) covers this typical use case for wells up to 200 feet deep and is one of the best-selling residential well pumps in America.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a well pump last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A well-installed submersible well pump typically lasts 10 to 25 years, with all-stainless-steel pumps reaching the upper end of that range and budget pumps lasting closer to 10 to 15 years. Shallow well jet pumps typically last 10 to 15 years because they operate above ground and experience more thermal cycling and wear than submerged units. Factors that shorten pump life include: running dry from water table drops, sand or sediment in the water, voltage fluctuations, short-cycling from a failed pressure tank, and mineralized water that corrodes the pump body. Proper sizing and installation typically double the life of a pump compared to an oversized, overworked, or poorly installed unit.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a well pump myself or do I need a professional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A shallow well jet pump installation in a basement or pump house is a reasonable DIY project for a homeowner comfortable with plumbing and 230V electrical work, taking 4 to 8 hours for a first-time installer. Submersible pump installation in a well deeper than 100 feet typically requires professional installation because it involves specialized pump hoist equipment, underwater-rated wiring connections that must last 10 to 25 years without leaks, and electrical work on a dedicated 230V circuit that requires licensed electrical work in most jurisdictions. The labor cost for professional installation ranges from $400 to $1,200 on top of the pump cost. Most homeowners with deep wells correctly opt for professional installation because a single installation error means pulling the pump back up, which is a 4 to 6 hour job with specialized equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a 2-wire and 3-wire submersible well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A 2-wire submersible well pump has the starting mechanism built into the pump itself, requiring only two power wires plus a ground (three wires total) running from the surface down to the pump. A 3-wire submersible has an external starting mechanism housed in a control box installed at the pressure tank or near the well head, requiring three power wires plus a ground (four wires total) between the pump and the control box. 2-wire pumps are simpler to install (no control box required), have fewer components to fail, and are generally the better choice for 1/2 HP to 1 HP residential applications. 3-wire pumps are often required for horsepower ratings of 1 HP and above because the larger motors benefit from the external starting capacitor in the control box, and they are also easier to service because electronic components are accessible above ground rather than underwater.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why are all 4 of the recommended well pumps Red Lion brand?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Red Lion (manufactured by Franklin Electric) consistently delivers the best balance of price, reliability, and parts availability across the full range of residential well pump applications, from shallow wells to deep wells to convertible jet pumps. Other well-respected brands include Goulds, Grundfos, and Flotec, but Goulds and Grundfos premium pumps cost 50 to 100 percent more than equivalent Red Lion models without delivering meaningfully better residential performance, and Flotec is a budget brand owned by Pentair that does not match Red Lion's stainless steel construction or warranty terms in the equivalent price tier. Sticking with one brand also simplifies parts inventory and repair if multiple components need replacement over the 10 to 25 year life of the pump system. For wells in extremely sandy geology, iron-rich water, or applications requiring 1.5 HP or larger, Goulds and Grundfos premium models can be worth the price upgrade, and a licensed well contractor can specify those alternatives based on your specific water conditions.",
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to replace a well pump including labor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Professional well pump replacement costs $1,100 to $4,500 total including the pump, wiring, pipe, labor, and pump hoist service. The breakdown: pump $290 to $1,400, submersible wire $100 to $300, pipe and fittings $80 to $250, labor $400 to $1,200. If the pressure tank is also being replaced at the same time (recommended if the tank is over 10 years old), add $400 to $900 for the tank and installation. Shallow well jet pump replacements are meaningfully cheaper because no specialized pump hoist is needed, typically running $600 to $1,500 total installed. DIY replacement of a shallow well jet pump reduces the total cost to $500 to $900 for materials only. DIY replacement of a submersible pump is possible but requires renting a pump hoist truck for $200 to $400 per day.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to replace my pressure tank when I replace my well pump?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You should replace the pressure tank at the same time as the pump if the tank is more than 10 years old, or if the tank is showing signs of failure (short-cycling pump, waterlogged tank that has lost its air pre-charge, or rust on the tank shell). A failing pressure tank causes the new pump to short-cycle (turn on and off rapidly), which dramatically shortens the life of the new pump from 15+ years down to 2 to 5 years. Replacing both at the same time costs $400 to $900 extra for the tank, but protects the $370 to $1,400 pump investment. If the pressure tank is less than 5 years old, verify its air pre-charge is correct (typically 2 PSI below the pump cut-in pressure) and reuse it with the new pump.',
      },
    },
  ],
}

export default function BestWellPumps() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src='/bestwellpumps.jpg'
          alt='Submersible well pump being lowered into a residential well casing by a homeowner'
          fill
          className='object-cover opacity-45 scale-105 transition-transform duration-700 hover:scale-100'
          priority
        />
        <div className='absolute inset-0 bg-gradient-to-t from-[#0D3D30] via-[#0D3D30]/40 to-transparent' />
        <div className='relative h-full max-w-7xl mx-auto px-6 flex flex-col justify-end pb-20'>
          <div className='flex items-center space-x-3 mb-8'>
            <div className='w-12 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-sm uppercase' style={{ color: '#5DCAA5' }}>Review</span>
          </div>
          <h1 className='text-4xl md:text-6xl font-black text-white mb-6 leading-[0.9] tracking-tighter'>
            Best Well Pumps<br />
            <span style={{ color: '#5DCAA5' }}>(2026)</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Top picks for shallow, deep, and convertible applications. Four residential well pumps reviewed with real specs, sizing guidance, and the depth-first rule most guides skip.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated April 2026 &middot; 16 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Reviews', href: '/reviews' },
        { label: 'Best Well Pumps' }
      ]} />

      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* Affiliate Disclosure */}
        <p className='text-sm text-slate-400 mb-6'>
          Some links on this page are affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you. This does not affect our recommendations.
        </p>

        {/* TL;DR */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Well pump selection comes down to one question before anything else: how deep is your well? Shallow wells under 25 feet use jet pumps mounted above ground. Wells deeper than 25 feet use submersible pumps installed down inside the well casing. Buy the wrong type and the pump either will not pull water at all or will burn out within months.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            The 4 picks below cover the major buyer segments: the <strong>Red Lion RL12G05-2W2V</strong> for most homeowners with standard deep wells, the <strong>Red Lion RJS-100-PREM</strong> for shallow wells, the <strong>Red Lion RJC-100</strong> convertible for wells in the 25 to 90 foot range, and the <strong>Red Lion RL22G10-3W2V</strong> for high-demand deep wells with larger households. For complete installation costs, see the <Link href='/cost-guides/well-pump-replacement-cost' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well pump replacement cost guide</Link>.
          </p>
        </div>

        {/* The Depth-First Rule callout */}
        <div className='rounded-xl p-6 mb-12' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
          <h2 className='text-2xl font-black text-slate-900 mb-4'>The Depth-First Rule</h2>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Before comparing any pumps on price, brand, or specs, determine your well depth from the ground to the static water level. This single measurement decides which type of pump you can use. Wells with water within 25 feet of the surface use shallow well jet pumps mounted above ground. Wells with water deeper than 25 feet require either a submersible pump installed down inside the well casing, or a convertible jet pump (for wells up to about 90 feet).
          </p>
          <p className='text-slate-700 leading-relaxed'>
            Buying a shallow well jet pump for a well deeper than 25 feet is one of the most common and most expensive mistakes in well pump purchasing. The pump will run continuously trying to lift water it physically cannot reach, and the motor burns out in weeks. If you do not know your well depth, a well service company will measure it for $50 to $150 before installation. Do this first. Everything else in this guide flows from that one number.
          </p>
        </div>

        {/* How Well Pumps Actually Work */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How Well Pumps Actually Work</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Most people buy the wrong pump because they ask the wrong first question. The first question is not &ldquo;which brand is best&rdquo; or &ldquo;how much should I spend.&rdquo; The first question is &ldquo;how deep is my water,&rdquo; because the answer determines whether you can use a pump that costs $290 or whether you need one that costs $620, and getting it wrong means a pump that burns out in weeks. Once depth is settled, everything else (flow rate, horsepower, brand, features) becomes a straightforward sizing exercise.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            A well pump moves water from an underground aquifer up into your house plumbing. Residential wells use one of two pump types, and the choice is determined by physics, not preference.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Shallow Well Jet Pumps (Wells Up to 25 Feet)</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Jet pumps sit above ground, typically in the basement, garage, or a dedicated pump house. A suction pipe runs down into the well casing. The pump uses centrifugal force and a venturi jet to pull water up through the suction pipe. Because water cannot be pulled up more than about 25 feet by atmospheric pressure (this is the physical limit of suction lift at sea level), jet pumps only work for shallow wells.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Advantages:</strong> Easy to service (accessible above ground), lower upfront cost, simple to replace without specialized tools. <strong>Disadvantages:</strong> Limited to shallow wells, requires priming, less energy efficient than submersibles, noisier because the motor is in the living space.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Submersible Pumps (Wells Over 25 Feet, Up to 250+ Feet)</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Submersible pumps sit underwater at the bottom of the well casing. The motor and pump body are a sealed unit roughly 3 to 4 inches in diameter and 2 to 4 feet long. Because the pump pushes water up from below rather than pulling it from above, depth is not a physical limit. A submersible in a 250-foot well pushes water up just as reliably as one in a 100-foot well.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Advantages:</strong> Works at any residential well depth, more energy efficient, quieter (motor is underground), longer service life. <strong>Disadvantages:</strong> Harder to service (pump must be pulled up from the well), higher upfront cost, replacement typically requires a contractor with a pump hoist.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Convertible Jet Pumps (Wells Up to 90 Feet)</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Convertible jet pumps bridge the gap between shallow and deep well applications. They use a two-pipe system with a foot-valve assembly lowered into the well. Convertible pumps work for wells up to about 90 feet deep and stay above ground like shallow jet pumps. They are less efficient than submersibles for the same depth but easier to service and less expensive to replace.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Advantages:</strong> Works for wells between 25 and 90 feet, above-ground serviceability, single pump covers a wide depth range. <strong>Disadvantages:</strong> Less efficient than a submersible for deeper wells, installation is more complex than shallow jet (requires foot valve and two pipes down the well).
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-4'>Quick Decision Matrix by Well Depth</h3>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse min-w-[700px]'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Well Depth</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Pump Type</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Typical Cost (Pump Only)</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Expected Life</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>0 to 25 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Shallow well jet pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$290 to $500</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10 to 15 years</td>
                </tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>25 to 90 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Convertible jet pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$380 to $700</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10 to 15 years</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>90 to 250 feet (4&Prime; casing)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible pump</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$370 to $1,400</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10 to 25 years</td>
                </tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Over 250 feet</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible pump (higher HP)</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$800 to $2,500</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>10 to 25 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed'>
            For complete installation cost including labor, wiring, and accessories, see our <Link href='/cost-guides/well-pump-replacement-cost' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well pump replacement cost guide</Link>.
          </p>
        </div>

        {/* Sizing */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Sizing Your Well Pump: GPM and Horsepower</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            After pump type, the next two decisions are flow rate (GPM) and horsepower (HP). Both are determined by how much water your household actually uses, not by what feels like a safer overspend.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>GPM Calculation</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Flow rate is measured in gallons per minute. For a residential well, calculate your required GPM by counting your home&apos;s plumbing fixtures. Each fixture counts as 1 GPM:
          </p>
          <ul className='list-disc pl-6 mb-4 text-slate-700 leading-relaxed space-y-1'>
            <li>Every bathroom sink</li>
            <li>Every bathtub or shower</li>
            <li>Every toilet</li>
            <li>Every kitchen sink</li>
            <li>Any outside hose bibb that uses well water</li>
            <li>Washing machine</li>
            <li>Dishwasher</li>
          </ul>
          <p className='text-slate-700 leading-relaxed mb-8'>
            A typical 3-bedroom home with 2 bathrooms, a kitchen, a laundry room, and 2 outside faucets totals 10 to 12 fixtures, requiring a 10 to 12 GPM pump. A larger 4-bedroom home with 3 bathrooms and an outdoor irrigation loop may need 15 to 22 GPM. Do not undersize: a pump that cannot keep up with household demand runs constantly and burns out early. Do not massively oversize either: an overpowered pump short-cycles and wears out the pressure tank prematurely (see our guide on <Link href='/problems/well-pump-short-cycling' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well pump short cycling</Link>).
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Horsepower Sizing</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Horsepower needed depends on well depth, not household size. The deeper the well, the higher the HP required to push water to the surface and through the house plumbing at adequate pressure.
          </p>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Well Depth</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Typical HP Needed</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Up to 100 feet</td><td className='p-3 border border-slate-200 text-slate-700'>1/2 HP</td></tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}><td className='p-3 border border-slate-200 text-slate-700 font-medium'>100 to 200 feet</td><td className='p-3 border border-slate-200 text-slate-700'>3/4 HP</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700 font-medium'>200 to 300 feet</td><td className='p-3 border border-slate-200 text-slate-700'>1 HP</td></tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}><td className='p-3 border border-slate-200 text-slate-700 font-medium'>300 to 450 feet</td><td className='p-3 border border-slate-200 text-slate-700'>1.5 HP</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Over 450 feet</td><td className='p-3 border border-slate-200 text-slate-700'>2 HP or larger</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed'>
            The depth measurement that matters is &ldquo;total dynamic head,&rdquo; which includes the vertical lift plus pressure losses in the pipe plus the required tank pressure (usually 30 to 50 PSI). A well installer or pump supplier can calculate this precisely if you give them your well depth, desired pressure, and pipe size.
          </p>
        </div>

        {/* At a Glance */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Our Top Picks at a Glance</h2>
          <div className='overflow-x-auto'>
            <table className='w-full text-sm border-collapse min-w-[700px]'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Pump</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Best For</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Type</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Well Depth</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Price Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Red Lion RL12G05-2W2V</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Most homeowners with standard deep wells</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible, 1/2 HP, 2-wire</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Up to 250 ft</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$370 to $550</td>
                </tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Red Lion RJS-100-PREM</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Shallow wells, cabins, budget-conscious buyers</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Shallow well jet, 1 HP</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Up to 25 ft</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$290 to $420</td>
                </tr>
                <tr>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Red Lion RJC-100</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Wells in the 25 to 90 ft range</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Convertible jet, 1 HP</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>25 to 90 ft</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$380 to $520</td>
                </tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Red Lion RL22G10-3W2V</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Deep wells, larger households, irrigation</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Submersible, 1 HP, 3-wire</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>Up to 300+ ft</td>
                  <td className='p-3 border border-slate-200 text-slate-700'>$620 to $880</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* The 4 Best Picks */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>The 4 Best Well Pumps</h2>

          {/* Pick 1 */}
          <div id='pick-1' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#1</span>
              <h3 className='text-2xl font-black text-slate-900'>Red Lion RL12G05-2W2V Submersible Deep Well Pump</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Most homeowners with a 4-inch or larger residential well between 50 and 250 feet deep who need reliable, proven hardware at a reasonable price point.</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Price: $370 to $550 &middot; Type: Submersible, 1/2 HP, 2-wire &middot; Max depth: 250 feet</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Compatibility:</strong> Fits 4-inch diameter wells or larger. Rated for depths up to 250 feet. Requires a 230-volt dedicated circuit. NSF/ANSI 372 certified for potable water.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Household size:</strong> 2 to 4 people, standard 2-bathroom home with typical fixture count.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Pros:</strong> Widely considered the best-selling residential well pump in America for a reason. Stainless steel construction resists corrosion over decades. Built-in check valve prevents backflow and reduces pump cycling. Two-wire design eliminates the need for a separate control box, simplifying installation and reducing failure points. NSF/ANSI 372 potable water certification. Replacement parts are readily available because the pump has been in continuous production for years.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Cons:</strong> At 1/2 HP, this pump handles wells up to 250 feet but struggles at the deeper end of that range. Wells deeper than 200 feet benefit from a 3/4 HP or 1 HP upgrade. The 12 GPM flow rate is adequate for most 2-bathroom homes but may be tight for 4+ bathroom homes with simultaneous fixture use. Installation into the well requires specialized hoisting equipment for most DIY-ers.
            </p>

            {/* Verified specs */}
            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Type</span><span className='text-slate-900 font-medium'>Submersible, 4-inch</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Horsepower</span><span className='text-slate-900 font-medium'>1/2 HP</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max flow rate</span><span className='text-slate-900 font-medium'>12 GPM at 30 PSI, 40 ft lift</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max shut-off</span><span className='text-slate-900 font-medium'>212 feet</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Voltage</span><span className='text-slate-900 font-medium'>230V, 2-wire (no control box)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pump body</span><span className='text-slate-900 font-medium'>Stainless steel shell</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Check valve</span><span className='text-slate-900 font-medium'>Built-in</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>3 years</span></div>
              </div>
            </div>

            <a href='https://amzn.to/3Qqi9Kg' target='_blank' rel='nofollow sponsored noopener' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Price on Amazon
            </a>
          </div>

          {/* Pick 2 */}
          <div id='pick-2' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#2</span>
              <h3 className='text-2xl font-black text-slate-900'>Red Lion RJS-100-PREM Shallow Well Jet Pump</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Homes with shallow wells under 25 feet, cabins, cottages, small farms, and rural buyers who want a serviceable above-ground pump at budget-friendly pricing.</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Price: $290 to $420 &middot; Type: Shallow well jet, 1 HP &middot; Max lift: 25 feet</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Compatibility:</strong> For shallow wells with water level within 25 feet of the ground surface. Dual voltage (115V or 230V, factory set to the customer&apos;s choice). Must be installed above ground in a protected location (basement, garage, pump house).
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Household size:</strong> 2 to 5 people, full residential plumbing with normal fixture counts.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Pros:</strong> Cast iron casing is rugged and handles years of service with minimal corrosion. Glass-filled thermoplastic impeller and diffuser resist wear from sediment. Includes a factory pre-set 30/50 pressure switch and pressure gauge, which saves $30 to $50 in additional parts. Dual voltage is a meaningful flexibility advantage because it allows installation in homes wired for either 115V or 230V. Field-serviceable with common tools and a $30 overhaul kit replaces the impeller, seal, and nozzle when wear eventually occurs.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Cons:</strong> Only works for shallow wells (under 25 feet). Installing this pump on a well deeper than 25 feet means it will run continuously trying to lift water it physically cannot reach, and the motor will burn out quickly. Above-ground installation means the pump is noisier than a submersible (roughly 70-80 dB when running) and must be protected from freezing in cold climates. Requires priming before initial startup and after power outages in some cases.
            </p>

            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Type</span><span className='text-slate-900 font-medium'>Shallow well jet pump</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Horsepower</span><span className='text-slate-900 font-medium'>1 HP</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max flow rate</span><span className='text-slate-900 font-medium'>23 GPM</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max lift</span><span className='text-slate-900 font-medium'>25 feet</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max pressure</span><span className='text-slate-900 font-medium'>50 PSI</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Voltage</span><span className='text-slate-900 font-medium'>115V or 230V selectable</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pump body</span><span className='text-slate-900 font-medium'>Cast iron casing</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pressure switch</span><span className='text-slate-900 font-medium'>30/50 PSI factory pre-set</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>3 years</span></div>
              </div>
            </div>

            <a href='https://amzn.to/4cUBQCK' target='_blank' rel='nofollow sponsored noopener' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Price on Amazon
            </a>
          </div>

          {/* Pick 3 */}
          <div id='pick-3' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#3</span>
              <h3 className='text-2xl font-black text-slate-900'>Red Lion RJC-100 Convertible Jet Pump</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Wells in the 25 to 90 foot range where a shallow well jet will not work but a submersible feels like overkill, or homeowners who prefer above-ground serviceability even at greater depths.</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Price: $380 to $520 &middot; Type: Convertible jet, 1 HP &middot; Max depth: 90 feet</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Compatibility:</strong> Convertible design works for both shallow wells (under 25 feet, configured as single pipe) and deep wells (25 to 90 feet, configured as two-pipe with deep well injector included). Includes the deep well injector kit in the box.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Household size:</strong> 2 to 4 people, standard residential plumbing.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Pros:</strong> The deep well injector kit comes included, which most competitors sell separately for $60 to $120 additional. Above-ground installation means the pump is accessible for service, repair, and inspection without pulling anything from the well. Handles wells from 0 to 90 feet, which covers the vast majority of homes not in regions with very deep water tables. Cast iron construction. 30/50 pressure switch included.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Cons:</strong> Less efficient than a submersible for deeper wells (60 to 90 foot range). Homeowners in that range who prioritize efficiency and quiet operation often step up to a submersible instead. Above-ground installation must be protected from freezing. Noisier than submersibles. Installation requires running a two-pipe system down the well (suction pipe and pressure pipe) which is more complex than installing a single pipe for a submersible.
            </p>

            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Type</span><span className='text-slate-900 font-medium'>Convertible jet pump</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Horsepower</span><span className='text-slate-900 font-medium'>1 HP</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max flow rate</span><span className='text-slate-900 font-medium'>20 GPM at 5 ft lift (30 PSI)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max depth</span><span className='text-slate-900 font-medium'>90 feet (deep well config)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Voltage</span><span className='text-slate-900 font-medium'>115V or 230V selectable</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pump body</span><span className='text-slate-900 font-medium'>Cast iron casing</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Injector kit</span><span className='text-slate-900 font-medium'>Included (deep well)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>3 years</span></div>
              </div>
            </div>

            <a href='https://amzn.to/3OdBfmk' target='_blank' rel='nofollow sponsored noopener' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Price on Amazon
            </a>
          </div>

          {/* Pick 4 */}
          <div id='pick-4' className='border border-slate-200 rounded-2xl p-8 mb-8 bg-white shadow-sm'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-block px-3 py-1 text-xs font-bold rounded-full bg-[#E1F5EE] text-[#0F6E56]'>#4</span>
              <h3 className='text-2xl font-black text-slate-900'>Red Lion RL22G10-3W2V Submersible Deep Well Pump</h3>
            </div>
            <p className='text-sm font-semibold text-[#1D9E75] mb-4'>Best for: Deep wells, larger households with 3-4 bathrooms, homes with irrigation or livestock watering needs, or any application requiring high flow at depth.</p>
            <div className='bg-slate-50 rounded-xl p-4 mb-6'>
              <p className='text-sm text-slate-600'>Price: $620 to $880 &middot; Type: Submersible, 1 HP, 3-wire &middot; Max depth: 300+ feet</p>
            </div>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Compatibility:</strong> Fits 4-inch diameter wells or larger. Rated for depths up to 300+ feet. Requires a 230-volt dedicated circuit. 3-wire configuration includes a control box. NSF/ANSI 372 certified for potable water.
            </p>
            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Household size:</strong> 4 to 8 people, 3-4 bathroom homes, homes with light irrigation loads.
            </p>

            <p className='text-slate-700 leading-relaxed mb-4'>
              <strong>Pros:</strong> Nearly double the flow rate of the standard 1/2 HP Red Lion (22 GPM vs 12 GPM), making this the right choice for larger households or homes with simultaneous fixture demand (multiple showers running at once, irrigation while household is using water). The 1 HP motor handles deeper wells and higher total dynamic head than the 1/2 HP option. Stainless steel construction. Built-in check valve and suction screen. Same Red Lion parts ecosystem as the other recommended pumps, which makes warranty service and replacement parts easy. NSF/ANSI 372 certified.
            </p>
            <p className='text-slate-700 leading-relaxed mb-6'>
              <strong>Cons:</strong> 3-wire configuration requires the included control box to be installed above ground at the well head or pressure tank, adding complexity compared to 2-wire designs. The control box itself is a potential failure point that 2-wire pumps eliminate. The 22 GPM flow rate is overkill for typical 2-bathroom homes and may cause short-cycling issues if the pressure tank is undersized. Significantly more expensive than the 1/2 HP option ($620 to $880 vs $370 to $550), so only worth the upgrade if your home actually needs the extra capacity.
            </p>

            <div className='bg-slate-50 rounded-xl p-5 mb-6'>
              <p className='text-sm font-bold text-slate-900 mb-3'>Verified specifications</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-sm'>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Type</span><span className='text-slate-900 font-medium'>Submersible, 4-inch</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Horsepower</span><span className='text-slate-900 font-medium'>1 HP</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max flow rate</span><span className='text-slate-900 font-medium'>22 GPM at 30 PSI, 40 ft lift</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Max shut-off</span><span className='text-slate-900 font-medium'>305 feet</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Voltage</span><span className='text-slate-900 font-medium'>230V, 3-wire (control box incl.)</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Pump body</span><span className='text-slate-900 font-medium'>Stainless steel shell</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Check valve</span><span className='text-slate-900 font-medium'>Built-in, with suction screen</span></div>
                <div className='flex justify-between border-b border-slate-200 pb-1'><span className='text-slate-500'>Warranty</span><span className='text-slate-900 font-medium'>3 years</span></div>
              </div>
            </div>

            <a href='https://amzn.to/4tZKUvI' target='_blank' rel='nofollow sponsored noopener' className='inline-block px-8 py-3 rounded-lg font-bold text-white text-sm transition-colors' style={{ backgroundColor: '#1D9E75' }}>
              Check Price on Amazon
            </a>
          </div>
        </div>

        {/* How to Pick */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How to Pick the Right Pump for Your Well</h2>
          <p className='text-slate-700 leading-relaxed mb-8'>
            The decision process is mechanical rather than intuitive. Work through these four questions in order.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Question 1: What Is Your Static Water Level?</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The static water level is the depth from the ground to the top of the water in the well when no pumping is happening. This is NOT the total well depth. A 300-foot well may have a static water level of only 80 feet if the well drills down into a well-saturated aquifer. Check your well report (if you have one) or have a well service company measure it for $50 to $150.
          </p>
          <ul className='list-disc pl-6 mb-8 text-slate-700 leading-relaxed space-y-2'>
            <li>If static water level is under 25 feet: pick a shallow well jet pump (RJS-100-PREM).</li>
            <li>If static water level is 25 to 90 feet: pick a convertible jet pump (RJC-100) or a submersible (RL12G05-2W2V).</li>
            <li>If static water level is over 90 feet: pick a submersible (RL12G05-2W2V for up to 200 feet, Red Lion RL22G10-3W2V for over 200 feet or homes with high simultaneous demand).</li>
          </ul>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Question 2: How Many Fixtures Does Your Home Have?</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Count all plumbing fixtures at 1 GPM each (see the sizing section above). Most 2-bathroom homes need 10 to 12 GPM. Most 3-4 bathroom homes need 15 to 18 GPM. Irrigation or livestock watering adds 5 to 15 GPM on top of household demand.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            Match your count to the pump&apos;s rated GPM at the specific depth of your well. All major manufacturers publish performance curves showing GPM at various depths. The GPM drops as depth increases, so a pump rated &ldquo;12 GPM&rdquo; at 40 feet of lift may only deliver 8 GPM at 150 feet of lift.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Question 3: What Is Your Household Growth Trajectory?</h3>
          <p className='text-slate-700 leading-relaxed mb-8'>
            If you plan to add a bathroom, install irrigation, or expand the home in the next 5 years, size the pump for the expanded use case. Retrofitting a larger pump later costs the same as the original installation plus 100% of a new pump.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Question 4: What Is Your Well Casing Diameter?</h3>
          <p className='text-slate-700 leading-relaxed'>
            Most residential wells have 4-inch or 6-inch casings. Submersible pumps are sold in 3-inch, 3.5-inch, and 4-inch diameters. A 4-inch pump will not fit in a 3-inch casing (rare in newer wells but exists in older ones). Measure the interior diameter of your well casing or check the well driller&apos;s report before buying. Getting this wrong means the pump cannot be installed at all.
          </p>
        </div>

        {/* DIY vs Pro */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>When to Hire a Professional vs DIY Install</h2>
          <p className='text-slate-700 leading-relaxed mb-8'>
            Well pump installation is not like changing a faucet. Submersible installation in particular involves specific risks that DIY enthusiasm does not overcome.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>DIY-Friendly Scenarios</h3>
          <p className='text-slate-700 leading-relaxed mb-8'>
            A shallow well jet pump replacement in a basement or pump house can reasonably be a DIY project for a homeowner comfortable with plumbing and electrical work. The pump sits above ground, connections are accessible, and the worst-case failure mode (a leak or a non-functioning pump) is recoverable without major risk. Budget 4 to 8 hours for the first-time installer.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Call a Professional For</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            Submersible pump installation in a well deeper than 100 feet requires a pump hoist truck and specialized torque wrenches to tighten joints that will sit underwater for 10 to 25 years. A single leak at depth means pulling the entire pump back up to fix it, which is a 4 to 6 hour job with specialized equipment. Most homeowners correctly opt to pay a licensed well contractor $400 to $1,200 for installation labor on top of the pump cost. See our <Link href='/cost-guides/well-pump-replacement-cost' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well pump replacement cost guide</Link> for regional pricing.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            Electrical work connecting the pump to a 230V circuit also requires licensed electrical work in most jurisdictions. Well pumps are typically on their own dedicated circuit with specific wire gauge requirements based on pump distance and HP.
          </p>

          <h3 className='text-xl font-bold text-slate-900 mb-3'>Safety Warnings</h3>
          <ul className='list-disc pl-6 mb-8 text-slate-700 leading-relaxed space-y-2'>
            <li>Never work on a well pump with power connected. Lock out the circuit breaker before any work.</li>
            <li>Never install a shallow well jet pump in a damp or flooding basement without GFCI protection.</li>
            <li>Never attempt to service submersible pump wiring underwater or while the pump is in the well.</li>
            <li>Never pull a submersible pump from a well without confirming the safety rope is rated for the pump weight plus pipe weight.</li>
          </ul>

          {/* Lead-gen callout */}
          <div className='rounded-xl p-6 mb-6' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className='font-bold text-slate-900 mb-2'>Need a licensed well contractor?</p>
            <p className='text-slate-700 leading-relaxed'>
              If your project involves a submersible pump installation deeper than 100 feet or any 230V electrical work, hiring a vetted well contractor protects both the $370 to $1,400 pump investment and the long-term reliability of your water system. <Link href='/get-quote' className='text-[#854F0B] underline font-semibold hover:text-[#6B3F09]'>Get free quotes from licensed well contractors near you.</Link>
            </p>
          </div>
        </div>

        {/* Total Cost */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Total Cost of Well Pump Replacement</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Pump purchase price is only part of the total installation cost. The full budget includes pump, wire, pipe, labor, and often a new pressure tank.
          </p>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse min-w-[600px]'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Line Item</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>DIY Cost</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Professional Install Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Pump</td><td className='p-3 border border-slate-200 text-slate-700'>$290 to $1,400</td><td className='p-3 border border-slate-200 text-slate-700'>$290 to $1,400</td></tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Submersible pump wire</td><td className='p-3 border border-slate-200 text-slate-700'>$100 to $300</td><td className='p-3 border border-slate-200 text-slate-700'>Included in labor</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Well pipe and fittings</td><td className='p-3 border border-slate-200 text-slate-700'>$80 to $250</td><td className='p-3 border border-slate-200 text-slate-700'>Included in labor</td></tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Pressure switch (if replacing)</td><td className='p-3 border border-slate-200 text-slate-700'>$25 to $60</td><td className='p-3 border border-slate-200 text-slate-700'>Included in labor</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Pressure tank (if replacing)</td><td className='p-3 border border-slate-200 text-slate-700'>$200 to $500</td><td className='p-3 border border-slate-200 text-slate-700'>$400 to $900 installed</td></tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Labor</td><td className='p-3 border border-slate-200 text-slate-700'>N/A</td><td className='p-3 border border-slate-200 text-slate-700'>$400 to $1,200</td></tr>
                <tr><td className='p-3 border border-slate-200 text-slate-700 font-medium'>Pump hoist truck call</td><td className='p-3 border border-slate-200 text-slate-700'>N/A</td><td className='p-3 border border-slate-200 text-slate-700'>Usually included in labor</td></tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}><td className='p-3 border border-slate-200 text-slate-900 font-bold'>Total range</td><td className='p-3 border border-slate-200 text-slate-900 font-bold'>$500 to $2,500</td><td className='p-3 border border-slate-200 text-slate-900 font-bold'>$1,100 to $4,500</td></tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed'>
            For detailed installation cost breakdowns by region and pump type, see our <Link href='/cost-guides/well-pump-replacement-cost' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well pump replacement cost guide</Link>.
          </p>
        </div>

        {/* Common Mistakes */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Common Mistakes When Buying a Well Pump</h2>

          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Buying the wrong pump type for your well depth.</strong> This is the number one mistake. Running a shallow well jet pump on a deep well or vice versa leads to pump failure within weeks. Always confirm static water level before buying.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Massive HP over-sizing.</strong> Buying a 2 HP pump for a 100-foot well with a 2-bathroom house wastes electricity every month for the life of the pump and often causes short cycling that wears out the pressure tank. Size the pump to the job.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Ignoring NSF certification.</strong> Pumps sold for potable water should be NSF/ANSI 372 (lead-free components) and NSF/ANSI 61 (drinking water system components) certified. All four pumps reviewed here meet these standards. Imported no-name pumps from unknown brands sometimes do not. For reference on private well water safety standards, the <a href='https://www.cdc.gov/healthywater/drinking/private/wells/index.html' target='_blank' rel='noopener' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>Centers for Disease Control and Prevention</a> publishes official private well guidance including testing and maintenance recommendations.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Skipping the pressure tank when replacing a pump.</strong> A 15-year-old pressure tank paired with a brand-new pump leads to the new pump short-cycling because the old tank has lost its air charge. If the pressure tank is 10+ years old, replace it at the same time. See our <Link href='/reviews/best-pressure-tanks' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>best pressure tanks review</Link>.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Mismatching voltage.</strong> A 230V pump will not run on a 115V circuit, and running a 115V pump on 230V damages the motor immediately. Confirm the circuit voltage before buying.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Forgetting the control box for 3-wire submersibles.</strong> 3-wire submersibles like the Red Lion RL22G10-3W2V require a control box (included in the box from Red Lion). 2-wire submersibles like the Red Lion RL12G05-2W2V do not. Buying a 3-wire pump from a brand that does not include the control box and forgetting to budget for a $100 to $200 control box is common.
          </p>
        </div>

        {/* FAQ Section */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I know if I need a shallow well pump or a deep well submersible pump?</h3>
              <p className='text-slate-700 leading-relaxed'>The determining factor is your well&apos;s static water level, which is the depth from the ground surface to the top of the water when the pump is not running. If the static water level is 25 feet or less, a shallow well jet pump works and is the most affordable option. If the static water level is more than 25 feet, a shallow well jet pump cannot physically lift water that far because of atmospheric pressure limits, and you need either a convertible jet pump (for depths up to 90 feet) or a submersible pump installed down in the well (for any depth up to 250+ feet). If you do not know your well&apos;s static water level, a well service company can measure it for $50 to $150, and this measurement should be the first step before buying any pump.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What size well pump do I need for a typical 3-bedroom home?</h3>
              <p className='text-slate-700 leading-relaxed'>A typical 3-bedroom home with 2 bathrooms, a kitchen, a laundry room, and 2 outside faucets has 10 to 12 plumbing fixtures total, requiring a well pump rated at 10 to 12 gallons per minute (GPM) at the operating depth of the well. Count your fixtures at 1 GPM per fixture: every sink, toilet, shower, tub, outside hose bib, washing machine, and dishwasher. For horsepower, wells under 100 feet deep need a 1/2 HP pump, wells 100-200 feet deep need 3/4 HP, and wells 200-300 feet deep need 1 HP. The Red Lion RL12G05-2W2V (1/2 HP, 12 GPM, 4-inch submersible) covers this typical use case for wells up to 200 feet deep and is one of the best-selling residential well pumps in America.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How long does a well pump last?</h3>
              <p className='text-slate-700 leading-relaxed'>A well-installed submersible well pump typically lasts 10 to 25 years, with all-stainless-steel pumps reaching the upper end of that range and budget pumps lasting closer to 10 to 15 years. Shallow well jet pumps typically last 10 to 15 years because they operate above ground and experience more thermal cycling and wear than submerged units. Factors that shorten pump life include: running dry from water table drops, sand or sediment in the water, voltage fluctuations, short-cycling from a failed pressure tank, and mineralized water that corrodes the pump body. Proper sizing and installation typically double the life of a pump compared to an oversized, overworked, or poorly installed unit.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I install a well pump myself or do I need a professional?</h3>
              <p className='text-slate-700 leading-relaxed'>A shallow well jet pump installation in a basement or pump house is a reasonable DIY project for a homeowner comfortable with plumbing and 230V electrical work, taking 4 to 8 hours for a first-time installer. Submersible pump installation in a well deeper than 100 feet typically requires professional installation because it involves specialized pump hoist equipment, underwater-rated wiring connections that must last 10 to 25 years without leaks, and electrical work on a dedicated 230V circuit that requires licensed electrical work in most jurisdictions. The labor cost for professional installation ranges from $400 to $1,200 on top of the pump cost. Most homeowners with deep wells correctly opt for professional installation because a single installation error means pulling the pump back up, which is a 4 to 6 hour job with specialized equipment.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the difference between a 2-wire and 3-wire submersible well pump?</h3>
              <p className='text-slate-700 leading-relaxed'>A 2-wire submersible well pump has the starting mechanism built into the pump itself, requiring only two power wires plus a ground (three wires total) running from the surface down to the pump. A 3-wire submersible has an external starting mechanism housed in a control box installed at the pressure tank or near the well head, requiring three power wires plus a ground (four wires total) between the pump and the control box. 2-wire pumps are simpler to install (no control box required), have fewer components to fail, and are generally the better choice for 1/2 HP to 1 HP residential applications. 3-wire pumps are often required for horsepower ratings of 1 HP and above because the larger motors benefit from the external starting capacitor in the control box, and they are also easier to service because electronic components are accessible above ground rather than underwater.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Why are all 4 of the recommended well pumps Red Lion brand?</h3>
              <p className='text-slate-700 leading-relaxed'>Red Lion (manufactured by Franklin Electric) consistently delivers the best balance of price, reliability, and parts availability across the full range of residential well pump applications, from shallow wells to deep wells to convertible jet pumps. Other well-respected brands include Goulds, Grundfos, and Flotec, but Goulds and Grundfos premium pumps cost 50 to 100 percent more than equivalent Red Lion models without delivering meaningfully better residential performance, and Flotec is a budget brand owned by Pentair that does not match Red Lion&apos;s stainless steel construction or warranty terms in the equivalent price tier. Sticking with one brand also simplifies parts inventory and repair if multiple components need replacement over the 10 to 25 year life of the pump system. For wells in extremely sandy geology, iron-rich water, or applications requiring 1.5 HP or larger, Goulds and Grundfos premium models can be worth the price upgrade, and a licensed well contractor can specify those alternatives based on your specific water conditions.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How much does it cost to replace a well pump including labor?</h3>
              <p className='text-slate-700 leading-relaxed'>Professional well pump replacement costs $1,100 to $4,500 total including the pump, wiring, pipe, labor, and pump hoist service. The breakdown: pump $290 to $1,400, submersible wire $100 to $300, pipe and fittings $80 to $250, labor $400 to $1,200. If the pressure tank is also being replaced at the same time (recommended if the tank is over 10 years old), add $400 to $900 for the tank and installation. Shallow well jet pump replacements are meaningfully cheaper because no specialized pump hoist is needed, typically running $600 to $1,500 total installed. DIY replacement of a shallow well jet pump reduces the total cost to $500 to $900 for materials only. DIY replacement of a submersible pump is possible but requires renting a pump hoist truck for $200 to $400 per day.</p>
            </div>
            <div className='border-b border-slate-200 pb-6'>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Do I need to replace my pressure tank when I replace my well pump?</h3>
              <p className='text-slate-700 leading-relaxed'>You should replace the pressure tank at the same time as the pump if the tank is more than 10 years old, or if the tank is showing signs of failure (short-cycling pump, waterlogged tank that has lost its air pre-charge, or rust on the tank shell). A failing pressure tank causes the new pump to short-cycle (turn on and off rapidly), which dramatically shortens the life of the new pump from 15+ years down to 2 to 5 years. Replacing both at the same time costs $400 to $900 extra for the tank, but protects the $370 to $1,400 pump investment. If the pressure tank is less than 5 years old, verify its air pre-charge is correct (typically 2 PSI below the pump cut-in pressure) and reuse it with the new pump.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-8'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Submersible well pump</h3>
              <p className='text-slate-700 leading-relaxed'>A submersible well pump is a sealed pump and motor unit installed inside the well casing underwater at the bottom of the well, typically 3 to 4 inches in diameter and 2 to 4 feet long. Submersible pumps push water up to the surface rather than pulling it with suction, which allows them to work at any residential well depth from 25 feet to 500+ feet. The pump is connected to the surface through a discharge pipe and a waterproof electrical cable. Submersible pumps typically last 10 to 25 years depending on construction quality, and require professional installation because servicing involves pulling the pump up from the well with a specialized pump hoist truck.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Jet pump</h3>
              <p className='text-slate-700 leading-relaxed'>A jet pump is a well pump installed above ground (usually in a basement, garage, or pump house) that uses a venturi jet and suction pipe to pull water up from the well. Jet pumps are limited by atmospheric pressure to a maximum suction lift of about 25 feet, which restricts them to shallow wells with water within 25 feet of the ground surface. Jet pumps are cheaper than submersibles, easier to install and service, and do not require specialized hoisting equipment. Common residential shallow well jet pump configurations include 1/2 HP and 1 HP models at prices ranging from $250 to $500. Noisier than submersible pumps and must be protected from freezing temperatures.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Convertible jet pump</h3>
              <p className='text-slate-700 leading-relaxed'>A convertible jet pump is a hybrid well pump that can be installed as either a shallow well jet pump (single-pipe configuration) or a deep well jet pump (two-pipe configuration with a deep well injector kit). Convertible jet pumps work for wells from 0 to approximately 90 feet deep, bridging the gap between shallow well jet pumps (limited to 25 feet) and submersible pumps (typically used for wells over 25 feet). Convertible jet pumps stay above ground like shallow jet pumps, which makes them easier to service than submersibles, but less efficient than a submersible for wells deeper than 50 feet. The Red Lion RJC-100 is a popular convertible jet pump that includes the deep well injector kit in the box.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Static water level</h3>
              <p className='text-slate-700 leading-relaxed'>Static water level is the depth from the ground surface to the top of the water in the well casing when no water is being pumped out. Static water level determines which type of well pump is physically capable of working in a given well. Wells with a static water level of 25 feet or less can use shallow well jet pumps (above ground). Wells with a static water level greater than 25 feet require either convertible jet pumps (up to 90 feet) or submersible pumps (any depth). Static water level is different from total well depth: a 300-foot well can have a static water level of only 80 feet if the aquifer is well-saturated. Static water level can shift by 10 to 50 feet seasonally depending on drought and local water table conditions.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>GPM (gallons per minute)</h3>
              <p className='text-slate-700 leading-relaxed'>GPM stands for gallons per minute and measures the flow rate that a well pump delivers at a specific operating pressure and depth. Residential well pumps typically produce 8 to 25 GPM at the pressure tank, with the exact rating depending on pump horsepower, well depth, and multi-stage configuration. To size a pump correctly, count every plumbing fixture in the house (each sink, toilet, shower, tub, outside hose bib, washing machine, dishwasher) at 1 GPM per fixture, and match the total to the pump&apos;s rated GPM at your well&apos;s depth. A pump rated &ldquo;12 GPM&rdquo; on the box is typically measured at a shallow lift (40 feet) and produces less than 12 GPM at deeper lifts, which is why pump performance curves matter for deep wells.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Total dynamic head (TDH)</h3>
              <p className='text-slate-700 leading-relaxed'>Total dynamic head is the combined pressure a well pump must overcome to deliver water at the desired flow rate, measured in feet. Total dynamic head includes vertical lift from the water level to the surface, plus vertical lift from the surface to the highest fixture in the house, plus friction losses in the pipe, plus the required operating pressure at the pressure tank (typically 30 to 50 PSI). Total dynamic head determines the horsepower required for the pump. A well-sized pump matches its performance curve to the actual total dynamic head of the specific installation rather than rating the pump by depth alone. Pump installers and pump suppliers calculate TDH precisely when specifying a pump for a new well or replacement.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>NSF/ANSI 61 and 372 certification</h3>
              <p className='text-slate-700 leading-relaxed'>NSF/ANSI 61 and NSF/ANSI 372 are the two primary certifications for well pumps and plumbing components that contact drinking water. NSF/ANSI 61 certifies that the pump materials do not leach harmful contaminants into the water. NSF/ANSI 372 certifies that the pump is lead-free per the Reduction of Lead in Drinking Water Act. All four pumps reviewed in this guide meet these standards. Pumps without NSF certification may still function mechanically but are not certified for potable water use and can introduce contaminants into the household water supply. Well pumps sold for irrigation, livestock watering, or industrial applications sometimes lack NSF certification and should not be installed on a well supplying drinking water.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>2-wire vs 3-wire submersible pump</h3>
              <p className='text-slate-700 leading-relaxed'>A 2-wire submersible pump has the starting capacitor and relay built into the pump body underwater, requiring only two power wires plus a ground running from the pressure tank down to the pump. A 3-wire submersible pump has an external starting mechanism housed in a control box installed above ground near the pressure tank, requiring three power wires plus a ground between the control box and the pump. 2-wire pumps are simpler and have fewer components that can fail, which makes them the better choice for most residential 1/2 HP to 3/4 HP applications. 3-wire pumps are typical for 1 HP and above because larger motors benefit from the external starting capacitor, and 3-wire pumps are generally easier to service because the electronic components are accessible above ground rather than underwater. Mixing 2-wire and 3-wire components is not possible; the pump and the wiring configuration must match.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pump short cycling</h3>
              <p className='text-slate-700 leading-relaxed'>Pump short cycling is when a well pump turns on and off rapidly (every 30 seconds to 2 minutes) instead of running for longer sustained periods. Short cycling is almost always caused by a failed pressure tank that has lost its air pre-charge or developed a leak in its internal bladder. A well-functioning pressure tank stores 5 to 20 gallons of pressurized water, allowing the pump to refill the tank and then shut off for 10 to 30 minutes before the next cycle. When the tank fails, there is no stored water and the pump must turn on every time a faucet opens, resulting in dramatic pump wear. Short cycling reduces pump life from 15+ years to 2 to 5 years and is the most common reason for premature pump failure. See the full <Link href='/problems/well-pump-short-cycling' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well pump short cycling troubleshooting guide</Link> for diagnosis and fixes.</p>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Related Guides</h2>
          <div className='space-y-3'>
            <Link href='/cost-guides/well-pump-replacement-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Replacement Cost</span>
            </Link>
            <Link href='/guides/how-well-pump-works' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How a Well Pump Works</span>
            </Link>
            <Link href='/guides/well-pump-maintenance' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Maintenance</span>
            </Link>
            <Link href='/reviews/best-pressure-tanks' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Pressure Tanks</span>
            </Link>
            <Link href='/problems/well-pump-short-cycling' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Pump Short Cycling Troubleshooting</span>
            </Link>
          </div>
        </div>

        {/* Newsletter */}
        <div className='my-8'>
          <BeehiivEmailCapture />
        </div>

        {/* Lead Form */}
        <div className='border-t border-slate-200 pt-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Get Expert Help</h2>
          <p className='text-slate-600 mb-6'>Connect with a licensed well contractor in your area for a free, no-obligation quote on your well pump project.</p>
          <LeadForm />
        </div>

      </article>
    </>
  )
}
