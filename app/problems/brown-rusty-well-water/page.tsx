import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Brown or Rusty Well Water: 6 Causes and How to Fix Each One | The Well Guide',
  description: 'Brown, orange, or rusty well water is almost always caused by iron, manganese, sediment, corroded pipes, disturbed sediment, or surface water infiltration. The color and timing of the discoloration are the diagnostic keys. This guide shows you how to identify which cause you have in minutes and what to do about it.',
  openGraph: {
    title: 'Brown or Rusty Well Water: 6 Causes and How to Fix Each One',
    description: 'Brown, orange, or rusty well water is almost always caused by iron, manganese, sediment, corroded pipes, disturbed sediment, or surface water infiltration.',
    url: 'https://well.guide/problems/brown-rusty-well-water',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://well.guide/Well guide brown water.jpg', width: 1200, height: 630, alt: 'Brown rusty well water in a glass' }],
  },
  alternates: { canonical: 'https://well.guide/problems/brown-rusty-well-water' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why did my well water suddenly turn brown?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sudden brown water almost always means one of four things: recent pump or well work disturbed accumulated sediment, heavy rain or flooding allowed surface water to enter through a compromised casing or cap, drought lowered the water table so the pump is drawing near the well bottom, or a water heater or pipe has begun corroding. If the onset correlates with rain or flooding, treat it as a potential contamination issue and test before drinking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is rust-colored well water safe to drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Usually the iron itself is not harmful at typical well concentrations. The EPA secondary standard for iron is set for taste and aesthetics, not health. However, you should not assume brown water is safe without knowing the cause. Surface water infiltration can produce similar discoloration but carries bacteria and nitrates that are genuinely dangerous. If you do not know why the water is brown, test before drinking.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will brown well water clear on its own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sometimes. If the cause is temporarily disturbed sediment from pump work or an aquifer disturbance, running water for 15 to 30 minutes typically clears it. If the cause is iron, manganese, or tannins in the groundwater, the discoloration will not clear on its own because those minerals are continuously present in the water supply.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a water softener fix brown well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A water softener can remove dissolved ferrous iron at low concentrations, typically below 2 to 3 mg/L. It cannot remove ferric iron (already-oxidized rust particles), manganese reliably, tannins, or sediment. For most brown-water problems involving iron above 3 mg/L, a dedicated iron filter is more appropriate. Testing first determines which you actually need.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes orange staining in my toilet and sinks from well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Orange or rust-colored staining on fixtures, laundry, and toilet bowls is the signature of dissolved ferrous iron oxidizing on surfaces. Iron is present above the 0.3 mg/L aesthetic threshold. It is not a health risk but causes permanent staining if not treated. An air injection iron filter or iron-capable water softener removes dissolved iron before it reaches your fixtures.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why is only my hot water brown?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Hot-water-only discoloration almost always means the source is the water heater rather than the well. Common causes are a corroding steel tank releasing rust particles, or sediment accumulation at the tank bottom being disturbed when the heater fires. Draining and flushing the water heater addresses sediment. If the tank is corroding internally and is more than 10 years old, replacement is the appropriate fix.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I test my well water before or after treating brown water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test before treatment. Testing before tells you what you have, in what form, and at what concentration - the information needed to choose the right treatment. Buying an iron filter for a tannin problem, or a water softener for ferric iron, wastes money and does not fix the water. A certified lab test for iron (ferrous, ferric, and total), manganese, pH, and coliform bacteria costs $100 to $200 and prevents several times that in misdirected treatment expenses.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does black staining from well water mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Black or dark gray staining is the signature of manganese rather than iron. Manganese commonly co-occurs with iron but produces dark gray to black deposits rather than the orange-red of iron. The EPA secondary standard for manganese is 0.05 mg/L, but research has linked manganese above 0.1 mg/L to neurological effects in children. Unlike iron, elevated manganese should be addressed as a health concern, not just an aesthetic one. Treatment requires an oxidizing filter with greensand media.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Brown or Rusty Well Water: 6 Causes and How to Fix Each One',
  description: 'Brown, orange, or rusty well water is caused by iron, manganese, sediment, corroded pipes, or surface water infiltration. The color and timing of the discoloration are the diagnostic keys. This guide identifies your specific cause and treatment in minutes.',
  image: 'https://well.guide/Well guide brown water.jpg',
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
  mainEntityOfPage: 'https://well.guide/problems/brown-rusty-well-water',
}

export default function BrownRustyWellWater() {
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
          src='/Well guide brown water.jpg'
          alt='Brown rusty well water in a glass'
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
            Brown or Rusty Well Water:<br />
            <span style={{ color: '#5DCAA5' }}>6 Causes and How to Fix Each One</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            The color, timing, and location of the discoloration narrow six causes to one or two within minutes.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 15 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Problems', href: '/problems' },
        { label: 'Brown or Rusty Well Water' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Brown or rusty well water has six distinct causes: dissolved ferrous iron in the groundwater, oxidized ferric iron, manganese, disturbed sediment, corroded pipes or a water heater, or surface water infiltrating a compromised well. The single most useful diagnostic is the glass test: fill a clear glass from the cold tap and watch it. If the water comes out clear but turns orange or brown after sitting for 15 to 30 minutes, you have dissolved ferrous iron. If the water comes out already brown or orange, you have ferric iron, sediment, or manganese. If the discoloration appeared suddenly after heavy rain, flooding, or recent well work, treat it as a potential safety concern and test before drinking. One critical distinction that most guides miss: if the staining in your fixtures is black or dark gray rather than orange-red, test specifically for manganese — it is not just an aesthetic problem. Research has linked manganese above 0.1 mg/L to neurological effects in children, making it a genuine health concern that requires prompt treatment rather than a cosmetic nuisance to address eventually.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Opening your tap to orange or rust-colored water is alarming. The good news is that in most cases, the cause is natural iron in the groundwater and the fix is a treatment system rather than a crisis. The less good news is that {`"`}brown water{`"`} has six different causes that require different fixes, and the most dangerous cause looks similar to the most harmless one. Getting this wrong wastes money and leaves the real problem in place.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>The diagnostic approach that nobody explains clearly: the color, the timing, and whether the problem is in hot water, cold water, or both are the three questions that narrow the cause from six to one or two within minutes. This guide walks through that diagnostic first, then covers each cause with specific treatment options.</p>
        </div>

        {/* Is Your Water Brown, Cloudy, or Something Else? */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Is Your Water Brown, Cloudy, or Something Else?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before running any tests, confirm you are dealing with discoloration rather than a different type of water quality issue. Different problems look similar but require different responses.</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Orange, rust-red, or brown water</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This is the subject of this article. The cause is almost always iron, manganese, sediment, corroded pipes, or surface water contamination. Continue below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Milky white or cloudy water that clears from the bottom up</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This is dissolved air coming out of solution, not contamination. It is harmless and typically resolves on its own. Common after pump work or pressure changes. No treatment needed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Milky white water that stays cloudy</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Sediment, fine clay particles, or extremely high mineral content. Test for turbidity and TDS.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Tea-colored or golden water with no visible particles</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Tannins from organic matter, not iron. The overnight glass test distinguishes them — see Cause 4 below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Blue or green tinge, or blue-green staining on fixtures</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Copper pipe corrosion caused by acidic water (low pH). A health and plumbing concern. See Cause 5 below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Black water or dark gray particles</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Manganese, not iron. Treat this as a health concern. See Cause 3 below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Strong sewage, gasoline, or chemical smell alongside the discoloration</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Stop using the water immediately and contact your county health department. This suggests contamination beyond mineral discoloration.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-6'>If your water is orange, rust-red, or brown — continue to the glass test below.</p>
        </div>

        {/* The Glass Test */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Testing</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Glass Test: Your First Diagnostic Step</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before calling anyone or ordering any treatment, do this test. It takes two minutes and rules out two of the six causes immediately.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Fill a clear drinking glass with cold water from your kitchen tap. Set it on a white surface and watch it for 20 to 30 minutes.</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water comes out clear and stays clear</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Iron is not the problem. The discoloration you noticed was likely sediment, temporary turbidity from a disturbance, or confined to the hot water system. Check the other causes below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water comes out clear but turns orange, brown, or rust-colored as it sits</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This is dissolved ferrous iron (also called clear-water iron) oxidizing on contact with air. Ferrous iron is invisible while dissolved in the oxygen-depleted groundwater, then precipitates out as it is exposed to atmospheric oxygen. This is the most common cause of brown well water and has a clear treatment path. See Cause 1 below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water comes out already orange, brown, or rust-colored</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The iron has already oxidized before reaching your tap, meaning it is in the ferric (oxidized, particulate) form. You may also be looking at sediment, manganese, or a combination. The particles will settle to the bottom of the glass within a few minutes if they are iron or sediment. If the color stays uniform and does not settle, consider tannins or organic iron. See Causes 2 and 4 below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water comes out brown or dark and you can see particles</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Sediment, rust flakes, or oxidized iron/manganese particles. The color and particle characteristics provide more clues. See the color guide table below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Hot water is affected but cold water is clear</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The issue is in your water heater, not in the well or groundwater. The most common cause is a corroding steel water heater tank or a failing anode rod. See Cause 5 below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Discoloration appeared suddenly after heavy rain, flooding, or recent well work</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>This is the pattern that requires immediate caution. See Cause 6.</p>
            </div>
          </div>
        </div>

        {/* Color Diagnostic Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Reference</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Color as a Diagnostic: What Different Colors Mean</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The specific color of the discoloration is a reliable additional clue:</p>

          <div className='overflow-x-auto rounded-lg border border-slate-200'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-semibold text-slate-900'>Color</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Most Likely Cause</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Secondary Possibility</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Clear, turns orange-brown when left standing</td>
                  <td className='p-3 text-slate-700'>Ferrous (dissolved) iron</td>
                  <td className='p-3 text-slate-700'>Organic iron</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Orange to rust-red, visible from the tap</td>
                  <td className='p-3 text-slate-700'>Ferric (oxidized) iron</td>
                  <td className='p-3 text-slate-700'>Iron bacteria</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Yellow to golden</td>
                  <td className='p-3 text-slate-700'>Iron bacteria or organic iron</td>
                  <td className='p-3 text-slate-700'>Tannins</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Tea-colored to dark brown, no particles</td>
                  <td className='p-3 text-slate-700'>Tannins</td>
                  <td className='p-3 text-slate-700'>Organic iron</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Black or dark gray particles</td>
                  <td className='p-3 text-slate-700'>Manganese</td>
                  <td className='p-3 text-slate-700'>Water heater sediment</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Reddish-brown with slime or oily sheen</td>
                  <td className='p-3 text-slate-700'>Iron bacteria</td>
                  <td className='p-3 text-slate-700'>Sulfur bacteria</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Blue-green tinge</td>
                  <td className='p-3 text-slate-700'>Copper pipe corrosion</td>
                  <td className='p-3 text-slate-700'>Acidic water (low pH)</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Milky white that clears from the bottom up</td>
                  <td className='p-3 text-slate-700'>Dissolved air, harmless</td>
                  <td className='p-3 text-slate-700'>Fine sediment</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Cause 1: Ferrous Iron */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 1</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Ferrous Iron (Dissolved, Clear-Water Iron)</h2>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How common</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The most common cause of brown well water nationwide. Iron is one of the most abundant elements in earth{`'`}s geology. As groundwater moves through iron-bearing rock and soil, it dissolves iron into solution. In the oxygen-depleted environment of a deep aquifer, dissolved ferrous iron is invisible and colorless. The problem becomes apparent when this water is pumped to the surface and exposed to oxygen.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to recognize it</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Water flows clear from the tap. After sitting in a glass for 15 to 30 minutes, it turns orange or reddish-brown. Orange or rust staining develops on sinks, toilets, tub walls, and laundry — particularly on anything left wet. The metallic taste is often noticeable. The EPA secondary standard for iron is 0.3 mg/L — at this level, staining begins. The taste threshold for most people is around 0.1 mg/L.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>Is it a health concern?</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Iron is not considered a health hazard at levels found in well water. Your body needs iron and absorbs it poorly from water anyway. However, iron above certain concentrations creates conditions where harmful bacteria can thrive more easily, which is why testing for coliform bacteria alongside iron is recommended when iron levels are high.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to treat ferrous iron</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The treatment approach depends on the concentration:</p>

          <div className='space-y-4 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Under 2 to 3 mg/L</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>A water softener can remove ferrous iron through ion exchange, the same mechanism it uses to remove calcium and magnesium. This is the lowest-cost entry point. Water softeners handle iron removal as a secondary function and will foul the resin faster than with hard water alone. The Minnesota Department of Health notes that water softeners are most effective for ferrous iron below 2 to 5 mg/L depending on the softener and the water{`'`}s hardness level.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>2 to 10 mg/L</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>An air injection oxidizing filter (also called an iron filter or oxidizing filter) is the standard whole-house treatment. These systems inject a pocket of air into the incoming water, oxidizing the dissolved ferrous iron into ferric (solid) particles that are then trapped by the filter media. The system automatically backwashes to flush out accumulated iron. Manganese greensand media, Katalox, Pyrolox, and BIRM are common filter media choices. Penn State Extension notes that manganese greensand filters are effective for ferrous iron up to 10 to 15 mg/L.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Above 10 mg/L</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Chemical pre-oxidation using chlorine or hydrogen peroxide injection is typically required before filtration. Hydrogen peroxide is increasingly preferred for residential applications because it produces no chlorine byproduct taste and handles iron bacteria simultaneously. The oxidized iron is then removed by a backwashing filter.</p>
            </div>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm'><strong>Cost:</strong> Air injection oxidizing filter installed: $1,200 to $3,000. Water softener (iron-capable model) installed: $1,200 to $2,500. Chemical injection system: $1,500 to $3,500.</p>
        </div>

        {/* Cause 2: Ferric Iron */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 2</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Ferric Iron (Oxidized, Red-Water Iron)</h2>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How common</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Less common than dissolved ferrous iron but occurs in shallow wells, springs, and wells where oxygen reaches the water before it arrives at the tap. Also occurs when ferrous iron oxidizes inside the well or drop pipe.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to recognize it</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Water comes out of the tap already colored — orange, rust-red, or reddish-brown. Particles settle to the bottom of a glass within a few minutes as fine rust-colored sediment. Staining patterns are similar to ferrous iron but the water is visually discolored immediately rather than after standing.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>The distinction that matters for treatment</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Ferric iron is already in solid particle form, which means it can be removed with physical filtration without the oxidation step required for ferrous iron. A standard backwashing sediment filter with fine media will remove ferric iron particles. However, most wells with ferric iron also have some ferrous iron, because the same aquifer that produces one often produces both. Testing for total iron, ferrous iron, and ferric iron separately gives you the information needed to choose the right system.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to treat ferric iron</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>A backwashing sediment filter handles low concentrations. An air injection oxidizing filter handles both ferric and ferrous iron together and is the better choice if both forms are present. For concentrations below 1 mg/L, a cartridge sediment filter may be sufficient for point-of-entry removal of visible particles, though the filter will need frequent replacement at higher concentrations.</p>

          <p className='text-slate-700 leading-relaxed text-sm'><strong>Cost:</strong> Whole-house cartridge sediment filter: $150 to $400 installed. Backwashing iron filter: $1,200 to $3,000 installed.</p>
        </div>

        {/* Cause 3: Manganese */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 3</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Manganese</h2>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How common</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Manganese occurs alongside iron in many groundwater formations and is underdiagnosed because it produces a different color than iron. Many homeowners treat for iron and wonder why the discoloration persists — often because manganese was also present and untreated.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to recognize it</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Manganese produces dark gray to black staining rather than orange-red. Black staining in the toilet tank, on silverware, around faucets, and on laundry are the signature signs. The water may appear brown to dark brown or have a bitter metallic taste distinct from iron{`'`}s flavor. Penn State Extension describes the manganese stain as {`"`}dense black{`"`} rather than the orange-brown of iron. Georgia Cooperative Extension notes that manganese sediment in a glass has a dark gray or black color.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>Why manganese matters beyond aesthetics</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The EPA secondary standard for manganese is 0.05 mg/L. A more recent EPA Health Advisory is 0.3 mg/L, based on neurological concerns from chronic exposure at higher levels. Research has linked manganese above 0.1 mg/L to neurological effects in children, including problems with memory, attention, and motor skills. Unlike iron, elevated manganese is a health concern, particularly for infants and young children. If you have black staining or suspect manganese, test specifically for it and take the result seriously.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to treat manganese</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Manganese requires slightly higher pH and oxidation conditions than iron for removal. An air injection oxidizing filter with manganese greensand media removes manganese up to approximately 6 mg/L. At higher concentrations, chlorine or potassium permanganate injection followed by filtration is more effective. Water softeners have limited effectiveness against manganese and may fail to remove it reliably. Test for both iron and manganese before selecting a treatment system — the two often coexist and can be removed simultaneously with the right filter media.</p>

          <p className='text-slate-700 leading-relaxed text-sm'><strong>Cost:</strong> Same as iron treatment: $1,200 to $3,000 for a quality whole-house oxidizing filter.</p>
        </div>

        {/* Cause 4: Sediment, Tannins, and Organic Iron */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 4</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Sediment, Tannins, and Organic Iron</h2>

          {/* Sediment */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Sediment</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Sediment enters wells through several pathways: a pump set too close to the bottom of the well pulling silt and sand, a cracked or damaged well screen, aquifer disturbance from drought or heavy pumping that stirs up fine particles, or nearby construction or drilling activity.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>How to recognize sediment</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Water appears turbid or cloudy-brown. Particles settle to the bottom of a glass within minutes. The discoloration is often worse after heavy pump use or first thing in the morning. Sandy or gritty feel to the water. You may notice a pressure drop as filters clog faster than usual.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>Fix</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>A sediment filter at the point of entry — typically a cartridge-style filter with a 5 to 25 micron rating for sand and silt, or a spin-down filter for heavier loads. If the sediment is persistent rather than episodic, the underlying cause (pump depth, screen damage, well rehabilitation) needs professional assessment.</p>

          {/* Tannins */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Tannins</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Tannins are naturally occurring organic compounds released by decaying plant matter — leaves, root systems, peat deposits, and woody material in the soil. They enter well water when surface water infiltrates a shallow well or when the well draws from a formation with high organic content.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>How to recognize tannins</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The water has a tea-brown to golden color that does not settle out — the color remains uniform when the glass sits overnight. An earthy or slightly astringent taste. The discoloration intensifies after heavy rain events. Tannins are most common in shallow wells, wells near wetlands or bogs, and in coastal plain regions with peaty soil.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The overnight glass test is the standard diagnostic: if the color settles to the bottom, it is iron or sediment. If the color remains uniform after sitting overnight, it is tannins.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>Are tannins a health concern?</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Tannins themselves are not a health hazard. They are found in coffee, tea, and red wine. However, their presence often signals that surface water is reaching the well, which can also carry bacteria and nitrates that are health concerns. Test for coliform bacteria and nitrates alongside any tannin investigation.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>Fix</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Anion exchange treatment designed specifically for tannins. Standard softeners and iron filters do not remove tannins reliably. Penn State Extension notes that organic iron and tannins can slow or prevent oxidation, making standard iron treatment approaches ineffective. A dedicated tannin filter (anion exchange resin) combined with addressing any well cap or casing issues that allow surface water entry is the appropriate approach.</p>

          {/* Iron Bacteria */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Iron Bacteria: The Jar Test That Tells Them Apart</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Iron bacteria are a distinct cause that most homeowners confuse with ordinary iron discoloration. They are microorganisms — not minerals — and they require a completely different treatment. Treating iron bacteria with an oxidizing filter alone does not work. Treating ordinary iron with shock chlorination alone does not work. Getting the diagnosis right here matters.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>How to tell iron bacteria from mineral iron</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Fill a clear glass jar with water and let it sit undisturbed for 30 minutes. Then examine the bottom of the glass carefully.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If the sediment at the bottom appears as a thin layer of fine rusty flour-like substance: that is oxidized mineral iron or manganese precipitating out. No iron bacteria present. Use an oxidizing filter.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If the sediment at the bottom consists of rust-colored fluffy strands or clumps with a three-dimensional appearance — like strands of rust-colored cotton or a loose, stringy mass: iron bacteria are almost certainly present. Georgia Cooperative Extension developed this visual test and notes it is a reliable field indicator distinguishing the two.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Additional signs of iron bacteria beyond the color: a rainbow-colored oily sheen on still water surfaces (toilet tank, standing water in bowls), reddish-brown or orange slime coating the inside of the toilet tank, a musty or swampy odor distinct from the metallic smell of dissolved iron, and slime deposits on pipe walls that occasionally break free and produce colored water.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>Treatment for iron bacteria</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Shock chlorination of the well and entire plumbing system is the required first step — a high-concentration chlorine solution introduced into the well casing, circulated through all pipes, held for 12 to 24 hours, then flushed. This kills the bacteria colonizing the well and pipes. After shock chlorination, a whole-house treatment system (typically an air injection oxidizing filter) prevents recolonization by addressing the elevated iron and oxygen conditions the bacteria require. Iron bacteria frequently return after shock chlorination alone if the water chemistry is not treated. The Minnesota Department of Health notes that it is almost impossible to kill all iron bacteria in a system — ongoing treatment is necessary to manage recurrence.</p>

          {/* Organic Iron */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Organic Iron</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Organic iron forms when dissolved iron combines with humic or fulvic acids (organic matter compounds) in water. It produces a yellow to brown color and resists standard oxidation-based iron removal because the organic compounds prevent precipitation. It is most common in shallow wells and wells influenced by surface water.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>Fix</h4>
          <p className='text-slate-700 leading-relaxed text-sm'>Organic iron is one of the more difficult iron forms to remove. Standard iron filters are often ineffective. Chemical oxidation using chlorine or hydrogen peroxide followed by filtration, or reverse osmosis for the drinking water supply, are the most reliable approaches.</p>
        </div>

        {/* Cause 5: Corroded Pipes */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Cause 5</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Corroded Pipes, Well Casing, or Water Heater</h2>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to recognize pipe or water heater corrosion</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Hot water is discolored but cold water is clear. Or, discoloration is worse at first draw (water sitting in pipes overnight) and clears after running water for a minute or two. Reddish-brown flakes or particles that are clearly rust. Blue-green staining on fixtures (copper pipe corrosion from acidic water). The problem is present in some areas of the house but not others.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>Common pipe corrosion sources</h3>
          <div className='space-y-4 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Galvanized steel pipes</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Common in homes built before 1960, these rust from the inside as the zinc coating deteriorates. The result is orange-brown particles and a metallic taste. Replacement is the only permanent fix.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Corroding water heater</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>A corroding water heater tank releases rust flakes and sediment, causing brown hot water. Draining and flushing the tank may provide temporary relief. If the tank is more than 10 years old and producing rust particles, replacement is the appropriate solution.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Acidic well water</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Water with pH below 6.5 corrodes copper pipes, releasing blue-green copper compounds and potentially lead from solder joints. This is both a staining problem and a health concern. An acid neutralizer (calcite filter) raises pH and protects plumbing.</p>
            </div>
          </div>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>Fix</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>Identify whether the source is the water heater (brown hot water only), specific pipes (discoloration at some fixtures but not others), or whole-system (all taps affected). Replace galvanized pipes. Replace an aging water heater. Test pH and install an acid neutralizer if pH is below 6.5.</p>
        </div>

        {/* Cause 6: Surface Water Infiltration */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Cause 6 — Urgent</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Surface Water Infiltration (The One Cause That Requires Immediate Action)</h2>

          <div className='mb-6 rounded-lg p-5' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
            <p className='font-semibold text-sm' style={{ color: '#A32D2D' }}>This is the only cause of brown well water that represents a potential safety emergency. All other causes listed above are primarily aesthetic or health-concern issues that can be addressed on a reasonable timeline. Surface water infiltration warrants stopping use for drinking and cooking until the water is tested.</p>
          </div>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>What it is</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>When surface water from rainfall, flooding, or ground runoff bypasses the grouting or casing seal that is supposed to protect the well from contamination, it carries surface contaminants directly into the well. This water may contain coliform bacteria, E. coli, nitrates, sediment, pesticides, and anything else present on the land surface and in shallow soil.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>How to recognize it</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Discoloration appeared suddenly or worsened dramatically after heavy rain, flooding, or snowmelt. The water has an earthy, musty, or swampy smell. Discoloration is worse immediately after rain and improves with dry weather. The well cap, casing, or surrounding area shows signs of damage or flooding. A properly constructed, properly sealed well should not show increased discoloration after rainfall, even heavy rainfall. If the pattern consistently correlates with rain events, assume surface water is entering the well until proven otherwise.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>What to do</h3>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Stop using the water</strong> for drinking, cooking, and infant use until lab testing confirms safety. Switch to bottled water.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Test immediately</strong> for total coliform bacteria, E. coli, and nitrates. These are the contaminants most likely to accompany surface water entry.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Have a licensed well contractor inspect</strong> the well cap, casing, and grouting around the casing. The most common entry points are a cracked or loose well cap, damaged grouting around the casing pipe, an improper wellhead elevation (the casing should extend at least 12 inches above the surrounding ground surface), and old wells that were never properly grouted.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'><strong>Do not shock chlorinate until you know what you are dealing with.</strong> Chlorination addresses bacteria but does not fix the structural problem allowing surface water in.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <p className='text-slate-700 text-sm leading-relaxed'>The Vermont Department of Health recommends <strong>turning off the pump at the breaker during flood events</strong> to prevent the pump from running dry or drawing contaminated water through the system.</p>
            </div>
          </div>
        </div>

        {/* Treatment Summary Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Summary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Treatment Summary by Cause</h2>

          <div className='overflow-x-auto rounded-lg border border-slate-200'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-semibold text-slate-900'>Cause</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Key Diagnostic Clue</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Urgency</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Treatment</th>
                  <th className='text-left p-3 font-semibold text-slate-900'>Typical Cost</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-200'>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Ferrous iron</td>
                  <td className='p-3 text-slate-700'>Clear water turns brown in the glass</td>
                  <td className='p-3 text-slate-700'>Low — aesthetic concern</td>
                  <td className='p-3 text-slate-700'>Air injection iron filter or water softener</td>
                  <td className='p-3 text-slate-700'>$1,200 to $3,000 installed</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Ferric iron</td>
                  <td className='p-3 text-slate-700'>Brown water from the tap, particles settle</td>
                  <td className='p-3 text-slate-700'>Low — aesthetic concern</td>
                  <td className='p-3 text-slate-700'>Backwashing iron filter or sediment filter</td>
                  <td className='p-3 text-slate-700'>$800 to $3,000 installed</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Manganese (with children)</td>
                  <td className='p-3 text-slate-700'>Black or dark gray staining</td>
                  <td className='p-3'><span className='inline-block px-2 py-0.5 rounded text-xs font-semibold' style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}>High — health concern</span></td>
                  <td className='p-3 text-slate-700'>Oxidizing filter with greensand media</td>
                  <td className='p-3 text-slate-700'>$1,200 to $3,000 installed</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Manganese (no children)</td>
                  <td className='p-3 text-slate-700'>Black or dark gray staining</td>
                  <td className='p-3 text-slate-700'>Moderate</td>
                  <td className='p-3 text-slate-700'>Oxidizing filter with greensand media</td>
                  <td className='p-3 text-slate-700'>$1,200 to $3,000 installed</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Sediment</td>
                  <td className='p-3 text-slate-700'>Particles settle quickly, gritty feel</td>
                  <td className='p-3 text-slate-700'>Low unless persistent</td>
                  <td className='p-3 text-slate-700'>Sediment filter; well inspection if persistent</td>
                  <td className='p-3 text-slate-700'>$150 to $600</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Tannins</td>
                  <td className='p-3 text-slate-700'>Tea color stays uniform overnight</td>
                  <td className='p-3 text-slate-700'>Low — test for bacteria alongside</td>
                  <td className='p-3 text-slate-700'>Anion exchange tannin filter</td>
                  <td className='p-3 text-slate-700'>$1,000 to $2,500 installed</td>
                </tr>
                <tr className='bg-white'>
                  <td className='p-3 text-slate-700'>Corroded pipes</td>
                  <td className='p-3 text-slate-700'>Hot only, or limited to some fixtures</td>
                  <td className='p-3 text-slate-700'>Moderate — test for lead if old plumbing</td>
                  <td className='p-3 text-slate-700'>Replace pipes or water heater; acid neutralizer</td>
                  <td className='p-3 text-slate-700'>$500 to $3,000+</td>
                </tr>
                <tr className='bg-slate-50'>
                  <td className='p-3 text-slate-700'>Surface water infiltration</td>
                  <td className='p-3 text-slate-700'>After rain or flooding — sudden onset</td>
                  <td className='p-3'><span className='inline-block px-2 py-0.5 rounded text-xs font-semibold' style={{ backgroundColor: '#FEE2E2', color: '#991B1B' }}>Immediate — stop drinking; test now</span></td>
                  <td className='p-3 text-slate-700'>Stop use; test; professional casing inspection and repair</td>
                  <td className='p-3 text-slate-700'>$500 to $3,000 for repair</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Is Brown Well Water Safe to Drink? */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Safety</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Is Brown Well Water Safe to Drink?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>This depends entirely on the cause, which is why testing before drawing conclusions is essential.</p>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>Generally safe to drink (with caveats)</h3>
          <div className='space-y-3 mb-6'>
            <p className='text-slate-700 leading-relaxed text-sm'>Iron and ferric iron at typical well concentrations are not health hazards. Iron is an essential nutrient and the body cannot easily absorb it from water. The EPA secondary standard for iron (0.3 mg/L) is set for aesthetics, not health. Iron-colored water is unpleasant but not dangerous.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Sediment from the aquifer or disturbed well bottom is generally inert mineral matter. The issue is more about equipment wear (sediment damages pump impellers and clogs fixtures) than health risk.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Tannins are not a health concern at concentrations found in well water.</p>
          </div>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>Warrants caution</h3>
          <div className='space-y-3 mb-6'>
            <p className='text-slate-700 leading-relaxed text-sm'>Manganese above 0.1 mg/L is a health concern, particularly for infants and children. The EPA Health Advisory is 0.3 mg/L. If black staining suggests manganese, test before determining safety.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Iron bacteria are not themselves pathogenic but can create conditions favorable to other bacteria. Test for total coliform alongside iron bacteria treatment.</p>
          </div>

          <h3 className='font-bold text-slate-900 text-sm mb-3'>Do not drink until tested</h3>
          <div className='space-y-3'>
            <p className='text-slate-700 leading-relaxed text-sm'>Any sudden discoloration following flooding, heavy rain, or recent well or pump work.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Discoloration accompanied by unusual odor beyond the typical metallic smell of iron — particularly sewage, chemical, or gasoline smells.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Any brown water in a well you have never had tested.</p>
            <p className='text-slate-700 leading-relaxed text-sm'>Any brown water if you have infants, pregnant women, or immunocompromised individuals in the household.</p>
          </div>
        </div>

        {/* Step-by-Step Diagnostic */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Action Plan</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Step-by-Step Diagnostic Process</h2>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 1: Do the glass test</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Fill a clear glass from the cold tap, watch for 20 to 30 minutes. Clear-to-brown means ferrous iron. Already brown means ferric iron, sediment, or manganese. Uniform tea color that does not settle means tannins.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 2: Check the hot water</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If hot water is discolored but cold water is clear, the source is the water heater or hot water pipes, not the well.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 3: Check timing and trigger</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Did the discoloration start suddenly after rain, a flood, or recent pump or well work? If yes, stop drinking the water and test immediately.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 4: Look at the staining pattern</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Orange-red stains mean iron. Black or dark gray stains mean manganese. Blue-green stains mean copper pipe corrosion from acidic water. Oil sheen or slime in the toilet tank means iron bacteria.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 5: Run the tap</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Run cold water for 5 to 10 minutes. If the discoloration clears, the problem is likely sediment disturbance or standing water in pipes. If it stays discolored, the source is in the groundwater or the well itself.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Step 6: Test</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A certified lab test for iron, manganese, pH, total coliform, and turbidity covers the most likely causes and tells you exactly what you are dealing with. See <Link href='/guides/how-to-test-well-water' className='underline' style={{ color: '#1D9E75' }}>how to test your well water</Link> for step-by-step collection instructions.</p>
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
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Why did my well water suddenly turn brown?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Sudden brown water almost always means one of four things: recent pump or well work disturbed accumulated sediment at the well bottom, heavy rain or flooding allowed surface water to enter through a compromised casing or cap, the water table dropped during drought and the pump is drawing from near the bottom of the well, or a water heater or pipe has begun corroding. If the onset was sudden and correlates with rain or flooding, treat it as a potential contamination issue and test before drinking. If it followed recent pump work, it is likely sediment disturbance that will clear within 24 to 48 hours of running the system.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Is rust-colored well water safe to drink?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Usually the iron itself is not harmful at typical well concentrations — the EPA secondary standard for iron is set for taste and aesthetics, not health. However, you should not assume brown water is safe without knowing the cause. Surface water infiltration can produce similar discoloration but carries bacteria and nitrates that are genuinely dangerous. If you do not know why the water is brown, test before drinking.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Will the brown color clear on its own?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Sometimes. If the cause is temporarily disturbed sediment from pump work or a brief aquifer disturbance, running water for 15 to 30 minutes typically clears it and it does not return. If the cause is iron, manganese, or tannins in the groundwater, the discoloration will not clear on its own because those minerals are continuously present in the water supply. Running the tap temporarily removes what is already in the pipes but the next fill brings the same minerals from the aquifer.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Can a water softener fix brown well water?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>A water softener can remove dissolved ferrous iron at low to moderate concentrations, typically below 2 to 3 mg/L. It cannot remove ferric iron (already-oxidized rust particles), manganese reliably, tannins, or sediment. For most brown-water problems involving iron above 3 mg/L, a dedicated iron filter is more appropriate than a softener. Testing first determines which you actually need.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>What causes orange staining in my toilet and sinks?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Orange or rust-colored staining on plumbing fixtures, laundry, and toilet bowls is the signature of dissolved ferrous iron oxidizing on surfaces. The iron is present at concentrations above the 0.3 mg/L aesthetic threshold. It is not a health risk but causes permanent staining if not treated. Iron staining is very difficult to remove once established — prevention through treatment is far easier than remediation.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Why is only my hot water brown?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Hot-water-only discoloration almost always means the source is the water heater rather than the well. Two common causes: a corroding steel tank releasing rust particles, or sediment that has accumulated at the bottom of the tank being disturbed when the heater fires. Draining and flushing the water heater addresses sediment. If the tank is corroding internally, replacement is the appropriate fix. A water heater that is more than 10 years old and producing rust-colored hot water should be replaced rather than patched.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Does iron bacteria make well water brown?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Iron bacteria produce yellow, orange, red, or reddish-brown discoloration and a distinctive slimy or fluffy texture in the water. The signature signs are a rainbow-colored oily sheen on standing water, reddish-brown or orange slime in the toilet tank, and a musty or swampy odor distinct from the metallic smell of dissolved iron. Iron bacteria are not themselves a health hazard, but they create conditions where other harmful bacteria can establish more easily. The Minnesota Department of Health recommends testing for coliform bacteria alongside any iron bacteria investigation. Treatment involves shock chlorination of the well and plumbing, followed by an appropriate filtration system.</p>
              </div>
            </details>
            <details className='bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-5 font-bold text-slate-900 text-sm'>Should I test before or after treatment?</summary>
              <div className='px-5 pb-5'>
                <p className='text-slate-700 text-sm leading-relaxed'>Test before treatment. Testing after treatment tells you whether the treatment is working. Testing before treatment tells you what you actually have, in what form, and at what concentration — the information you need to choose the right treatment in the first place. Buying an iron filter for a tannin problem, or a water softener for ferric iron, wastes money and does not fix the water. A certified lab test for iron (specifying ferrous, ferric, and total), manganese, pH, hardness, and total coliform costs $100 to $200 and prevents several times that in misdirected treatment expenses.</p>
              </div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Ferrous Iron</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The dissolved form of iron, also called clear-water iron. Ferrous iron is invisible while dissolved in oxygen-depleted groundwater. When exposed to air or oxidizing conditions, it converts to ferric iron and forms visible orange-brown particles. Water containing ferrous iron comes out of the tap clear but turns orange-brown after sitting in a glass. Treatment involves oxidation (to convert it to filterable ferric form) followed by filtration.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Ferric Iron</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The oxidized, particulate form of iron. Water containing ferric iron comes out of the tap visibly colored orange, rust-red, or brown. Ferric iron particles settle to the bottom of a clear glass within minutes. Unlike ferrous iron, ferric iron does not require an oxidation step before filtration — it can be captured directly by filter media.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Manganese</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A naturally occurring mineral that co-occurs with iron in many groundwater formations. Manganese produces dark gray to black staining rather than the orange-red of iron. The EPA secondary standard is 0.05 mg/L for aesthetic reasons, but the EPA Health Advisory of 0.3 mg/L reflects neurological concerns from chronic exposure. Research has linked manganese above 0.1 mg/L to neurological effects in children. Unlike iron, elevated manganese is a genuine health concern, not just an aesthetic one.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Tannins</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Naturally occurring organic compounds produced by the decomposition of plant material — leaves, roots, peat, and woody matter in soil. Tannins produce a tea-brown to golden color in water without visible particles. The color remains uniform in a glass left overnight (it does not settle). Tannins are not a health concern at well water concentrations but their presence often signals surface water influence, which can also carry bacteria and nitrates. Standard iron treatment is ineffective for tannins.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Iron Bacteria</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Microorganisms that use iron (and sometimes manganese) as an energy source, combining it with oxygen to form orange-red or brownish slime deposits. Iron bacteria are not known to cause disease but create conditions favorable to other bacteria. Signature signs include a rainbow-colored oily sheen on water surfaces, reddish-brown slime in toilet tanks, and musty or swampy odors. Treatment requires shock chlorination followed by appropriate filtration.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Oxidizing Filter</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A whole-house water treatment system that removes dissolved iron and manganese by exposing the water to oxygen (through air injection) or a chemical oxidant (chlorine or hydrogen peroxide), converting the dissolved metals to solid particles that are then trapped by filter media. The system automatically backwashes to flush accumulated metal particles from the media. Effective for iron up to 10 to 30 mg/L depending on the media used and the oxidation method.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Secondary Maximum Contaminant Level (SMCL)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>An EPA standard set for aesthetic reasons (taste, odor, color) rather than health protection. SMCLs are non-enforceable guidelines rather than legal limits. Iron (0.3 mg/L) and manganese (0.05 mg/L) have SMCLs. However, manganese also has a Health Advisory (0.3 mg/L) based on neurological concerns, which means elevated manganese should be treated as more than just an aesthetic issue despite its SMCL classification.</p>
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
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Smells Like Sulfur or Rotten Eggs</span>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants Guide</span>
            </Link>
            <Link href='/reviews/best-whole-house-water-filters' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Whole House Water Filters for Wells</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
            <Link href='/cost-guides/well-water-testing-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Testing Cost</span>
            </Link>
            <Link href='/guides/hard-water-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How Hard Water Affects Your Well</span>
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
