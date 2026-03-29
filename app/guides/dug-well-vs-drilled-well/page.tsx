import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Dug Well vs. Drilled Well: The Complete Comparison for Homeowners | The Well Guide',
  description: 'The complete comparison of dug wells and drilled wells covering depth, contamination risk, drought vulnerability, water quality, construction standards, setback requirements, cost, lifespan, and what to do if you are buying a property with a dug well. Includes a homebuyer\'s evaluation checklist and the honest answer on whether a dug well needs to be replaced.',
  openGraph: {
    title: 'Dug Well vs. Drilled Well: The Complete Comparison for Homeowners',
    description: 'The complete comparison of dug wells and drilled wells covering depth, contamination risk, drought vulnerability, water quality, construction standards, setback requirements, cost, and what to do if buying a property with a dug well.',
    url: 'https://www.thewell.guide/guides/dug-well-vs-drilled-well',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/dug-well-vs-drilled-well.jpg', width: 1200, height: 630, alt: 'Split image comparing a traditional dug well with concrete block ring construction and flat cover in a rural yard on the left, and a modern drilled well steel casing with sanitary cap and pressure gauge on a residential lawn on the right.' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/dug-well-vs-drilled-well' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the difference between a dug well and a drilled well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dug well is a large-diameter (2 to 4 feet) hole excavated to a shallow depth of 10 to 30 feet, drawing water from the unconfined water table. A drilled well is a narrow-diameter (4 to 8 inches) borehole drilled to depths of 100 to 400 feet or more, typically reaching a confined aquifer. Dug wells have higher contamination risk and drought vulnerability. Drilled wells are the modern standard required for all new construction in most states.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are dug wells safe to drink from?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dug well can produce safe drinking water with proper casing construction, adequate setback from contamination sources, and clean water test results. The risk profile is higher than a drilled well. Penn State Extension recommends testing dug wells twice per year — spring and fall. Never assume a dug well is safe without recent laboratory test results for bacteria and nitrates at minimum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a dug well run dry?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Dug wells draw from the unconfined water table, which drops during dry summers and droughts. When the water table falls below the well bottom, the well runs dry until it recovers. This is a recurring seasonal problem in drought-prone regions. Deep drilled wells reaching confined aquifers are significantly more drought-resilient because confined aquifers maintain more stable water levels year-round.',
      },
    },
    {
      '@type': 'Question',
      name: 'How deep is a dug well compared to a drilled well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dug wells are typically 10 to 30 feet deep with a maximum of approximately 50 feet. Drilled wells are typically 100 to 400 feet deep for residential use, though they can exceed 1,000 feet in challenging geology. The depth difference explains most of the performance difference — deeper confined aquifers are more protected and more reliable than shallow unconfined aquifers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the lifespan of a dug well compared to a drilled well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both types have a potential lifespan of 30 to 50 years or more with proper maintenance. However, old dug wells built before modern construction standards may have aging or cracked casings requiring rehabilitation. Pump and pressure system components for both types typically need replacement every 10 to 15 years. The structural well itself lasts longer than the mechanical components in either case.',
      },
    },
    {
      '@type': 'Question',
      name: 'How close can a dug well be to a septic system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dug wells typically require greater setback distances from septic systems than drilled wells. Common requirements are 50 to 100 feet from the septic tank and 100 to 150 feet from the drainfield for a dug well. Always verify with your county health department. On older rural properties, a dug well and septic system installed before modern codes may be closer than current requirements allow — a genuine contamination risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I replace a dug well with a drilled well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily, if the dug well is producing clean tested water with no contamination history, adequate yield in dry months, and intact casing construction. Replace when the well shows recurring contamination, yield fails during dry summers, the casing is structurally compromised, or the well cannot meet setback requirements from the septic system. Converting costs $6,000 to $22,000 all-in and is only warranted by genuine performance or safety problems.',
      },
    },
    {
      '@type': 'Question',
      name: 'What pump does a dug well use?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Dug wells use a jet pump installed above ground in the house or a pump house. Shallow well jet pumps work for wells up to 25 feet deep. Deep well jet pumps work for wells 25 to 50 feet deep using a two-pipe configuration. Jet pumps are more accessible for maintenance than submersible pumps used in drilled wells but are less efficient and more vulnerable to freezing in cold climates.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Dug Well vs. Drilled Well: The Complete Comparison for Homeowners',
  description: 'The complete comparison of dug wells and drilled wells covering depth, contamination risk, drought vulnerability, water quality, construction standards, setback requirements, cost, and what to do if buying a property with a dug well.',
  author: { '@type': 'Organization', name: 'The Well Guide' },
  publisher: { '@type': 'Organization', name: 'The Well Guide', url: 'https://well.guide' },
  mainEntityOfPage: 'https://www.thewell.guide/guides/dug-well-vs-drilled-well',
  dateModified: '2026-03-25',
}

export default function DugWellVsDrilledWellPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
        <Image src="/dug-well-vs-drilled-well.jpg" alt="Split image comparing a traditional dug well with concrete block ring construction and flat cover in a rural yard on the left, and a modern drilled well steel casing with sanitary cap and pressure gauge on a residential lawn on the right." fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container-custom">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>GUIDE</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-4xl">Dug Well vs. Drilled Well: The Complete Comparison for Homeowners</h1>
            <p className="mt-3 text-sm text-white/80">WG / The Well Guide / Updated March 2026 &middot; 13 min read</p>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Dug Well vs. Drilled Well' }]} />

      <article className="py-12">
        <div className="container-custom max-w-3xl">

          {/* TL;DR Box */}
          <div className="rounded-lg p-5 mb-10" style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
            <p className="text-[#0D1F1A] leading-relaxed"><strong>Quick answer:</strong> Dug wells are shallow (typically 10 to 30 feet), wide (2 to 4 feet in diameter), and draw from the unconfined water table &mdash; the most vulnerable groundwater zone for surface contamination and seasonal drought. Drilled wells are deep (typically 100 to 400 feet), narrow (4 to 8 inches in diameter), and access confined aquifers protected by layers of rock or clay. Drilled wells are the modern standard and are required for all new construction in most states. Dug wells are almost exclusively found on older rural properties. A dug well producing clean, tested water with proper construction can continue to serve a household &mdash; but it requires more vigilant annual testing, has a higher contamination risk profile, and is more vulnerable to drought than a drilled well of comparable age.</p>
          </div>

          {/* What Is a Dug Well? */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is a Dug Well?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">A dug well is exactly what the name suggests &mdash; a large-diameter hole excavated by hand, shovel, backhoe, or auger until the water table is reached. The excavation continues slightly below the water table to provide a reservoir, then the walls are lined with stone, brick, concrete rings, or precast concrete tile to prevent collapse. A cover &mdash; historically stone or wood, more recently concrete &mdash; is placed over the opening to reduce contamination risk.</p>
          <p className="text-slate-700 leading-relaxed mb-4">Dug wells are almost always shallow, typically 10 to 30 feet deep. This limitation is inherent to the construction method &mdash; hand excavation becomes progressively more difficult and dangerous below 30 feet, and the economics of excavating deeper do not compete with drilling. Most dug wells in the United States were constructed before the 1950s, many before 1900. They are the original residential water supply system in most of rural America.</p>
          <p className="text-slate-700 leading-relaxed mb-4">The large diameter of a dug well (2 to 4 feet, sometimes larger) creates a substantial reservoir of standing water that acts as a buffer during high-demand periods &mdash; the well holds gallons of water even when the aquifer inflow rate is slow. This is one reason dug wells historically served households adequately even with low natural yield.</p>

          {/* What Is a Drilled Well? */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">What Is a Drilled Well?</h2>
          <p className="text-slate-700 leading-relaxed mb-4">A drilled well is constructed using a rotary or percussion drilling rig that bores a narrow borehole (typically 4 to 8 inches in diameter) through soil, sediment, and rock until it reaches a productive water-bearing zone. Steel or PVC casing is installed in the borehole and sealed with cement grout or bentonite clay in the annular space between the casing and the borehole wall. The grout seal prevents surface water from channeling down the outside of the casing into the aquifer.</p>
          <p className="text-slate-700 leading-relaxed mb-4">Drilled wells can reach any depth the geology requires. Residential drilled wells in the United States typically range from 100 to 400 feet, though wells deeper than 500 feet are common in arid western states, fractured granite geology, and areas with declining water tables. The narrow diameter of the borehole means the well itself holds very little standing water, but the pump draws directly from the aquifer, which replenishes continuously.</p>
          <p className="text-slate-700 leading-relaxed mb-4">Drilled wells are the required construction method for all new residential water wells in virtually every US state. A homeowner looking for a new well on a property that does not already have one will be drilling, not digging.</p>

          {/* Side-by-Side Comparison Table */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Side-by-Side Comparison</h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse min-w-[600px]">
              <thead>
                <tr style={{ backgroundColor: '#0D3D30' }}>
                  <th className="p-3 text-left font-bold text-white border border-slate-300">Feature</th>
                  <th className="p-3 text-left font-bold text-white border border-slate-300">Dug Well</th>
                  <th className="p-3 text-left font-bold text-white border border-slate-300">Drilled Well</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Typical depth</td>
                  <td className="p-3 border border-slate-200 text-slate-700">10 to 30 feet</td>
                  <td className="p-3 border border-slate-200 text-slate-700">100 to 400 feet</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Diameter</td>
                  <td className="p-3 border border-slate-200 text-slate-700">2 to 4 feet</td>
                  <td className="p-3 border border-slate-200 text-slate-700">4 to 8 inches</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Construction method</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Hand or machine excavation</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Rotary or percussion drilling rig</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Aquifer type</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Unconfined water table</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Often confined aquifer</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Contamination risk</td>
                  <td className="p-3 border border-slate-200 text-slate-700" style={{ backgroundColor: '#FCEBEB' }}>High &mdash; draws from surface-influenced zone</td>
                  <td className="p-3 border border-slate-200 text-slate-700" style={{ backgroundColor: '#E1F5EE' }}>Low &mdash; depth and casing provide protection</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Drought vulnerability</td>
                  <td className="p-3 border border-slate-200 text-slate-700" style={{ backgroundColor: '#FAEEDA' }}>High &mdash; water table fluctuates seasonally</td>
                  <td className="p-3 border border-slate-200 text-slate-700" style={{ backgroundColor: '#E1F5EE' }}>Low to moderate &mdash; confined aquifers more stable</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Casing material</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Stone, brick, concrete tile</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Steel or PVC with grout seal</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Sanitary seal quality</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Variable &mdash; often inadequate in older wells</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Required by modern construction code</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Typical age on US properties</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Pre-1950s, many pre-1900</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Post-1950s, many post-1970s</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">New construction permitted</td>
                  <td className="p-3 border border-slate-200" style={{ backgroundColor: '#FCEBEB' }}><strong className="text-slate-900">No</strong> <span className="text-slate-700">&mdash; prohibited in most states</span></td>
                  <td className="p-3 border border-slate-200" style={{ backgroundColor: '#E1F5EE' }}><strong className="text-slate-900">Yes</strong> <span className="text-slate-700">&mdash; the required standard</span></td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Cost to install new</td>
                  <td className="p-3 border border-slate-200 text-slate-700">$3,000 to $10,000 (rarely done today)</td>
                  <td className="p-3 border border-slate-200 text-slate-700">$5,500 to $20,000+ depending on depth</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Typical lifespan</td>
                  <td className="p-3 border border-slate-200 text-slate-700">30 to 50 years with maintenance</td>
                  <td className="p-3 border border-slate-200 text-slate-700">30 to 50+ years</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Annual testing requirement</td>
                  <td className="p-3 border border-slate-200 text-slate-700" style={{ backgroundColor: '#FAEEDA' }}>Twice per year minimum recommended</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Once per year minimum recommended</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 border border-slate-200 font-medium text-slate-900">Pump type</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Jet pump (above ground)</td>
                  <td className="p-3 border border-slate-200 text-slate-700">Submersible pump (in-well)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* The Contamination Risk Difference */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Contamination Risk Difference</h2>

          {/* Important safety callout */}
          <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className="text-slate-800 leading-relaxed font-medium">This is the most important practical distinction between the two well types and the one that matters most for a homeowner evaluating a dug well.</p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Why Dug Wells Are More Vulnerable</h3>
          <p className="text-slate-700 leading-relaxed mb-4">A dug well draws water from the unconfined aquifer &mdash; the shallow groundwater zone that lies between the surface and the first impermeable rock or clay layer. This zone is called unconfined because it has a direct hydraulic connection to the surface. Rainwater, snowmelt, agricultural runoff, road salt, septic effluent, and surface water all influence the unconfined water table.</p>
          <p className="text-slate-700 leading-relaxed mb-4">Everything that happens at the surface eventually reaches the unconfined aquifer. Fertilizer applications in fields drain downward. Septic drainfield effluent percolates through the soil and enters the shallow groundwater. Road salt applied in winter dissolves and migrates into the water table. Flooding events can deliver contaminated surface water directly into a dug well if the well cover is not perfectly sealed.</p>
          <p className="text-slate-700 leading-relaxed mb-4">The USGS has documented that the unconfined water table is the most contamination-prone groundwater zone in the United States, with bacteria, nitrates, and agricultural chemicals all occurring at higher rates in shallow wells than in deep drilled wells.</p>

          {/* Setback Distances callout */}
          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Setback Distances From Septic Systems</h3>
          <div className="rounded-xl p-6 mb-6" style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
            <p className="text-slate-800 leading-relaxed mb-4">The required setback distance between a well and a septic system is typically greater for dug wells than drilled wells because the vulnerability is greater. Where a drilled well in bedrock may require a <strong>50-foot setback</strong> from a septic drainfield, a dug well in the same jurisdiction may require <strong>100 to 150 feet</strong>. Some states require dug wells to be located uphill and upgradient from any septic system on the property.</p>
            <p className="text-slate-800 leading-relaxed">If a property has both a dug well and a septic system, measuring the actual distance between them and verifying it meets current code is essential &mdash; particularly on older rural properties where both systems may predate current setback requirements. A septic system and a dug well installed in the 1940s may be within 50 feet of each other on a small lot, a situation that would not be permitted under modern codes and that represents a genuine contamination risk.</p>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Casing and Seal Quality in Old Dug Wells</h3>
          <p className="text-slate-700 leading-relaxed mb-4">The contamination risk of a dug well depends heavily on the quality of its construction, and many dug wells in the United States were built before modern sanitary standards existed. An old dug well may have:</p>
          <ul className="list-disc pl-6 space-y-2 text-slate-700 mb-6">
            <li>A concrete ring or stone lining that has cracked or shifted over decades, creating gaps that allow surface water to enter</li>
            <li>A cover that does not seal completely, allowing insects, small animals, and surface water to enter</li>
            <li>No grouted annular seal &mdash; meaning the space between the lining and the surrounding soil is open, allowing shallow groundwater to enter at multiple depths rather than only from below</li>
            <li>No pitless adapter or proper wellhead protection, allowing above-grade contamination pathways</li>
          </ul>
          <p className="text-slate-700 leading-relaxed mb-4">A dug well with any of these conditions is operating at much higher contamination risk than a dug well with intact, properly sealed construction. Visual inspection of the wellhead and professional assessment of the casing condition are essential when evaluating an older dug well.</p>

          {/* Drought Vulnerability */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Drought Vulnerability</h2>
          <p className="text-slate-700 leading-relaxed mb-4">The second most important distinction is drought resilience.</p>
          <p className="text-slate-700 leading-relaxed mb-4">A dug well draws from the water table &mdash; the top of the saturated zone in the unconfined aquifer. The water table is not static. It rises during wet periods when precipitation recharges the aquifer and drops during dry periods when evapotranspiration and human use exceed recharge. In a severe drought, the water table can drop below the bottom of a dug well, leaving the well without water.</p>
          <p className="text-slate-700 leading-relaxed mb-4">This is a genuine and recurring problem for households on dug wells in drought-prone regions. A dug well that produces adequate water in a normal year may run low or dry during a dry summer &mdash; often precisely when water demand is highest. The larger diameter of a dug well creates a buffer, but when the aquifer drops below the well bottom, even a full well casing empties within hours of household use.</p>
          <p className="text-slate-700 leading-relaxed mb-4">A drilled well typically reaches a confined aquifer &mdash; groundwater held between impermeable rock or clay layers under pressure. Confined aquifers are significantly more drought-resilient than unconfined water table aquifers because they are sealed from surface conditions. Recharge occurs over long distances and timescales rather than locally and seasonally. A household on a deep drilled well in bedrock can typically pump through a dry summer that would leave a neighboring dug well household without water.</p>
          <p className="text-slate-700 leading-relaxed mb-4">See the <Link href="/problems/well-running-dry" className="underline" style={{ color: '#1D9E75' }}>well running dry guide</Link> for the full diagnostic and solution framework when a dug well shows signs of seasonal yield decline.</p>

          {/* Water Quality Differences */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Water Quality Differences</h2>
          <p className="text-slate-700 leading-relaxed mb-6">Water quality from a dug well versus a drilled well depends heavily on local geology and land use, but some patterns are consistent enough to note.</p>

          {/* Dug Wells Water Quality - Amber border */}
          <div className="rounded-xl p-6 mb-6" style={{ borderLeft: '4px solid #854F0B', backgroundColor: '#FAFAF8' }}>
            <h3 className="text-lg font-bold text-slate-900 mb-3">What Dug Wells Typically Show</h3>
            <p className="text-slate-700 leading-relaxed mb-3">Because they draw from the shallow unconfined zone, dug wells in agricultural areas frequently show elevated nitrates from fertilizer and livestock waste. Bacteria &mdash; both coliform and E. coli &mdash; appear more commonly in dug well samples than drilled well samples because shallow groundwater receives more biological input from surface sources. Road salt contamination (elevated sodium and chloride) is common in dug wells near roads that receive winter treatment.</p>
            <p className="text-slate-700 leading-relaxed">Penn State Extension recommends that dug well owners test at minimum twice per year &mdash; spring and fall &mdash; rather than the once-per-year minimum typically recommended for drilled wells. The spring test captures any contamination introduced during winter and spring snowmelt. The fall test captures any dry-season concentration effects.</p>
          </div>

          {/* Drilled Wells Water Quality - Teal border */}
          <div className="rounded-xl p-6 mb-6" style={{ borderLeft: '4px solid #1D9E75', backgroundColor: '#FAFAF8' }}>
            <h3 className="text-lg font-bold text-slate-900 mb-3">What Drilled Wells Typically Show</h3>
            <p className="text-slate-700 leading-relaxed mb-3">A drilled well reaching a confined aquifer is largely isolated from surface contamination. The primary water quality concerns in deep drilled wells are naturally occurring minerals and gases from the geology &mdash; iron, manganese, hardness (calcium and magnesium), arsenic in certain bedrock formations, radon in uranium-bearing rock, and hydrogen sulfide. These contaminants come from the rock itself, not from surface activity, and their presence depends entirely on local geology.</p>
            <p className="text-slate-700 leading-relaxed">The depth advantage of a drilled well in terms of contamination protection does not mean drilled wells are automatically safe &mdash; it means the contamination risk profile is different. Testing is still essential, and the specific panel of tests should reflect the regional geology. See the <Link href="/guides/how-to-test-well-water" className="underline" style={{ color: '#1D9E75' }}>how to test your well water guide</Link> for what to test by well type and region.</p>
          </div>

          {/* Construction Standards */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Construction Standards: Why Age Matters for Dug Wells</h2>
          <p className="text-slate-700 leading-relaxed mb-4">Most dug wells in the United States were constructed before modern well construction codes existed. The federal Safe Drinking Water Act was passed in 1974. State-level well construction standards became widespread in the 1970s and 1980s. A dug well built in 1935, 1950, or even 1965 was almost certainly not built to the standards that would be required today.</p>
          <p className="text-slate-700 leading-relaxed mb-4">Modern well construction requirements include: a grout seal in the annular space to at least 20 feet below grade; a pitless adapter or equivalent wellhead protection; a sanitary well cap; a minimum setback from septic systems and other contamination sources; and construction materials that meet current durability standards.</p>
          <p className="text-slate-700 leading-relaxed mb-4">An old dug well may lack all of these features. This does not mean it is not producing safe water &mdash; a well can be producing perfectly safe water despite outdated construction if it is located well away from contamination sources and the casing happens to be intact. But it means the structural safeguards that prevent contamination events are weaker, and the margin for error is smaller.</p>
          <p className="text-slate-700 leading-relaxed mb-4">When evaluating an old dug well, ask: when was it constructed, what is the casing material and condition, when was it last professionally inspected, and what do the last two years of water test results show?</p>

          {/* Is a Dug Well a Problem When Buying a Property? */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Is a Dug Well a Problem When Buying a Property?</h2>
          <p className="text-slate-700 leading-relaxed mb-6">This is the question most people searching this topic are actually asking. The honest answer is: it depends on several specific factors.</p>

          {/* Side-by-side cards */}
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {/* Not a problem card */}
            <div className="rounded-xl p-5 border-2" style={{ borderColor: '#1D9E75', backgroundColor: '#FAFAF8' }}>
              <h3 className="text-lg font-bold text-slate-900 mb-3">A dug well is not automatically a problem if:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#1D9E75] font-bold">&#10003;</span><span>Recent water tests (within the last 12 months) show clean results for bacteria, nitrates, and any contaminants relevant to local land use</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#1D9E75] font-bold">&#10003;</span><span>The well is at least 100 feet from any septic system component and uphill or upgradient from any potential contamination source</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#1D9E75] font-bold">&#10003;</span><span>The casing is intact and the wellhead is properly sealed with a sanitary cap</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#1D9E75] font-bold">&#10003;</span><span>The well has not experienced yield problems during dry summers in recent years</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#1D9E75] font-bold">&#10003;</span><span>The property is not in an agricultural area with documented nitrate or pesticide issues in shallow groundwater</span></li>
              </ul>
            </div>

            {/* Serious concern card */}
            <div className="rounded-xl p-5 border-2" style={{ borderColor: '#A32D2D', backgroundColor: '#FAFAF8' }}>
              <h3 className="text-lg font-bold text-slate-900 mb-3">A dug well warrants serious concern if:</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#A32D2D] font-bold">&#10007;</span><span>Water test results show bacteria or nitrate contamination</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#A32D2D] font-bold">&#10007;</span><span>The well is less than 100 feet from the septic system or downhill from it</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#A32D2D] font-bold">&#10007;</span><span>The casing is visibly cracked, the cover does not seal properly, or the wellhead lacks basic sanitary protection</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#A32D2D] font-bold">&#10007;</span><span>The current owners report running low or dry in summer months</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#A32D2D] font-bold">&#10007;</span><span>The property is in an area with documented shallow groundwater contamination</span></li>
                <li className="flex items-start gap-2"><span className="mt-0.5 text-[#A32D2D] font-bold">&#10007;</span><span>The well predates 1950 and has never been professionally inspected or relined</span></li>
              </ul>
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-4"><strong className="text-slate-900">The negotiating position:</strong> A property with a dug well showing recent clean test results and good casing condition is acceptable. A property with an untested or contaminated dug well, a dug well too close to the septic system, or a dug well that regularly runs low in summer is a known risk that should factor into the purchase price or repair negotiation. See the <Link href="/guides/buying-house-with-well" className="underline" style={{ color: '#1D9E75' }}>buying a house with a well guide</Link> for the full homebuyer framework.</p>

          {/* Homebuyer's Dug Well Evaluation Checklist */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">The Homebuyer&apos;s Dug Well Evaluation Checklist</h2>
          <p className="text-slate-700 leading-relaxed mb-4">Before accepting a property with a dug well, confirm the following:</p>

          <div className="rounded-xl p-6 mb-8" style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
            <ol className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1D9E75' }}>1</span>
                <span className="text-slate-800"><strong>Obtain the well construction record</strong> from the county health department if available. This shows construction date, depth, casing material, and any inspection history.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1D9E75' }}>2</span>
                <span className="text-slate-800"><strong>Measure the distance from the well to the septic tank and drainfield.</strong> Confirm it meets current county setback requirements. The minimum is typically 50 to 100 feet; check local code.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1D9E75' }}>3</span>
                <span className="text-slate-800"><strong>Inspect the wellhead.</strong> The casing should extend at least 12 inches above grade. The well cap should seal completely with no cracks, gaps, or insect entry points. There should be no standing water pooling around the wellhead.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1D9E75' }}>4</span>
                <span className="text-slate-800"><strong>Have the water tested by a certified laboratory</strong> for bacteria (total coliform and E. coli), nitrates, pH, hardness, and any contaminants relevant to local land use (arsenic, pesticides, or agricultural chemicals if the property is in a farming area).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1D9E75' }}>5</span>
                <span className="text-slate-800"><strong>Ask the current owners about summer yield.</strong> Specifically: has the well ever run low or dry in a dry summer, and if so, in which years? This gives you the drought vulnerability history.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1D9E75' }}>6</span>
                <span className="text-slate-800"><strong>Have a licensed well contractor assess the casing condition.</strong> Concrete and stone linings crack over time. A professional assessment determines whether the casing has structural integrity.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold text-white" style={{ backgroundColor: '#1D9E75' }}>7</span>
                <span className="text-slate-800"><strong>Determine whether a treatment system is installed and what it addresses.</strong> If there is a UV system, that suggests the well has a bacteria history. If there is a softener, the water may be hard. Ask for the equipment installation history and most recent service records.</span>
              </li>
            </ol>
          </div>

          {/* Converting From a Dug Well to a Drilled Well */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4">Converting From a Dug Well to a Drilled Well</h2>
          <p className="text-slate-700 leading-relaxed mb-4">When a dug well fails &mdash; through contamination, drought-related yield loss, or casing failure &mdash; the typical solution is to drill a new well at a different location rather than attempt to rehabilitate the dug well. Drilling through an existing dug well is possible but complicated and risks casing collapse. Most well drillers recommend abandoning the old dug well properly and drilling a new well nearby.</p>

          {/* Abandonment process card */}
          <div className="rounded-xl p-6 mb-6" style={{ borderLeft: '4px solid #854F0B', backgroundColor: '#FAFAF8' }}>
            <p className="text-slate-800 leading-relaxed mb-4"><strong className="text-slate-900">The abandonment process:</strong> A dug well must be properly abandoned when it is taken out of service. Most states require filling the casing with clean gravel, sand, and concrete to prevent the old well from becoming a contamination conduit to the shallow aquifer. State requirements vary &mdash; contact your county health department for the specific procedure required. Improper abandonment of a dug well &mdash; simply covering or capping it without filling &mdash; leaves an open pathway for surface contamination to reach groundwater.</p>
            <p className="text-slate-800 leading-relaxed mb-4"><strong className="text-slate-900">Cost:</strong> Drilling a new well costs $5,500 to $20,000 all-in for a complete system including the well, casing, pump, pressure tank, electrical, and permit. Properly abandoning the old dug well adds $500 to $2,000. <strong>Total conversion cost: $6,000 to $22,000.</strong> See the <Link href="/cost-guides/well-drilling-cost" className="underline" style={{ color: '#1D9E75' }}>well drilling cost guide</Link> for the full cost breakdown.</p>
            <p className="text-slate-800 leading-relaxed"><strong className="text-slate-900">When rehabilitation is worth considering:</strong> If the dug well has failed due to drought but the casing and water quality are otherwise sound, deepening the well (if the geology permits) or installing a storage tank system can extend its useful life at lower cost than drilling. A licensed well contractor can assess whether deepening is feasible for a specific well.</p>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Frequently Asked Questions</h2>

          <div className="space-y-6 mb-10">
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What is the difference between a dug well and a drilled well?</h3>
              <p className="text-slate-700 leading-relaxed">A dug well is a large-diameter (2 to 4 feet) hole excavated by hand or machine to a shallow depth of 10 to 30 feet, drawing water from the unconfined water table. A drilled well is a narrow-diameter (4 to 8 inches) borehole drilled by a rotary rig to depths of 100 to 400 feet or more, typically reaching a confined aquifer sealed by impermeable rock or clay. Dug wells have higher contamination risk and drought vulnerability because they draw from shallow, surface-influenced groundwater. Drilled wells are the modern standard and required for all new construction in most states.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Are dug wells safe to drink from?</h3>
              <p className="text-slate-700 leading-relaxed">A dug well can produce safe drinking water if it has proper casing construction, adequate setback from contamination sources, and clean water test results. The risk profile is higher than a drilled well because dug wells draw from shallow groundwater that is more vulnerable to surface contamination. Penn State Extension recommends testing dug wells twice per year &mdash; spring and fall &mdash; rather than the once-yearly minimum for drilled wells. Never assume a dug well is safe without recent laboratory test results for bacteria and nitrates at minimum.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Can a dug well run dry?</h3>
              <p className="text-slate-700 leading-relaxed">Yes, and this is one of the most common problems with dug wells. Dug wells draw from the unconfined water table, which drops during dry summers and droughts. When the water table falls below the bottom of the dug well, the well runs dry until the water table recovers. This is a recurring seasonal problem in drought-prone regions. Deep drilled wells reaching confined aquifers are significantly more drought-resilient because confined aquifers are sealed from surface conditions and maintain more stable water levels year-round.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">How deep is a dug well compared to a drilled well?</h3>
              <p className="text-slate-700 leading-relaxed">Dug wells are typically 10 to 30 feet deep, with a maximum of approximately 50 feet &mdash; the practical limit of hand excavation. Drilled wells are typically 100 to 400 feet deep for residential use, though they can exceed 1,000 feet in challenging geology or very dry regions. The depth difference explains most of the performance difference between the two well types &mdash; depth determines which aquifer is accessed, and deeper confined aquifers are more protected and more reliable than shallow unconfined aquifers.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What is the lifespan of a dug well compared to a drilled well?</h3>
              <p className="text-slate-700 leading-relaxed">Both types have a potential lifespan of 30 to 50 years or more with proper maintenance. However, old dug wells &mdash; particularly those built before modern construction standards &mdash; may have aging, cracked, or shifted casings that require rehabilitation or replacement. The pump and pressure system components for both types typically require replacement every 10 to 15 years regardless of well type. The structural well itself lasts longer than the mechanical components in either case.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">How close can a dug well be to a septic system?</h3>
              <p className="text-slate-700 leading-relaxed">This varies by state and county but dug wells typically require greater setback distances from septic systems than drilled wells because of their higher contamination vulnerability. Common requirements are 50 to 100 feet from the septic tank and 100 to 150 feet from the drainfield for a dug well, compared to 50 feet from the drainfield for a drilled well in many jurisdictions. Always verify with your county health department. On older rural properties, a dug well and septic system installed before modern codes may be closer than current requirements allow.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">Should I replace a dug well with a drilled well?</h3>
              <p className="text-slate-700 leading-relaxed">Not necessarily, if the dug well is producing clean, tested water with no contamination history, adequate yield in dry months, and intact casing construction. A functioning dug well with good water quality does not need to be replaced simply because it is a dug well. Replace or convert to a drilled well when: the well shows recurring contamination; yield fails during dry summers; the casing is structurally compromised; or the well cannot meet the setback requirements from the property&apos;s septic system. The cost of converting &mdash; <strong>$6,000 to $22,000</strong> all-in for drilling and abandonment &mdash; is significant and only warranted by genuine performance or safety problems.</p>
            </div>
            <div className="border-b border-slate-200 pb-6">
              <h3 className="text-lg font-bold text-slate-900 mb-3">What pump does a dug well use?</h3>
              <p className="text-slate-700 leading-relaxed">Dug wells use a jet pump &mdash; a pump installed above ground, either in the house, a pump house, or a pit adjacent to the well. The jet pump creates suction to draw water up from the well. Shallow well jet pumps work for wells up to 25 feet deep. Deep well jet pumps work for wells 25 to 50 feet deep using a two-pipe configuration. Jet pumps are more accessible for maintenance than the submersible pumps used in drilled wells but are less efficient and more vulnerable to freezing in cold climates.</p>
            </div>
          </div>

          {/* Glossary */}
          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">Glossary</h2>
          <div className="space-y-6 mb-10">
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Unconfined Aquifer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A groundwater-bearing formation that has a direct hydraulic connection to the land surface, allowing precipitation, surface water, and surface-applied chemicals to recharge it from above. The upper boundary of an unconfined aquifer is the water table, which rises and falls with seasonal precipitation and land use. Dug wells draw from unconfined aquifers, which are the most vulnerable to contamination from septic systems, agriculture, road salt, and flooding. Also called a water table aquifer or phreatic aquifer.</p>
            </div>
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Confined Aquifer</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A groundwater-bearing formation sealed between two impermeable layers &mdash; typically rock or dense clay &mdash; that prevent direct recharge from the surface above. Confined aquifers are under pressure (artesian conditions) and are significantly more drought-resilient and contamination-resistant than unconfined aquifers because their recharge occurs over long distances and timescales. Most residential drilled wells in bedrock geology draw from confined or semi-confined aquifers. Also called a pressurized aquifer or artesian aquifer.</p>
            </div>
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Annular Seal (Grout Seal)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">The cement or bentonite clay material pumped into the space between the well casing and the borehole wall in a drilled well. The annular seal prevents surface water and shallow contaminated groundwater from channeling down the outside of the casing to the aquifer. It is one of the most important sanitary protections in modern well construction and is required to extend to at least 20 feet below grade by most state construction codes. Older dug wells typically lack a proper annular seal, which is one reason they are more vulnerable to contamination.</p>
            </div>
            <div className="border-b border-slate-200 pb-4">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Jet Pump</h3>
              <p className="text-slate-600 text-sm leading-relaxed">A type of water pump used with shallow wells (under 50 feet) that creates suction to lift water to the surface. Jet pumps are installed above ground &mdash; in the house, a pump house, or a pit &mdash; and are the standard pump type for dug wells. Shallow well jet pumps can lift water from up to 25 feet. Deep well jet pumps use a two-pipe configuration to extend the range to approximately 50 feet. Jet pumps are more accessible for maintenance than submersible pumps but are less energy-efficient and more vulnerable to freezing. Drilled wells use submersible pumps installed inside the casing below the water level.</p>
            </div>
          </div>

          {/* External Resource */}
          <div className="rounded-xl p-5 mb-10" style={{ backgroundColor: '#F8F8F8', border: '1px solid #E5E7EB' }}>
            <h3 className="text-lg font-bold text-slate-900 mb-2">External Resource</h3>
            <p className="text-slate-700 leading-relaxed text-sm">The USGS National Water Information System at <a href="https://waterdata.usgs.gov" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#1D9E75' }}>waterdata.usgs.gov</a> provides well log data and water quality records from thousands of domestic wells across the United States, including records that show typical depths and geology for wells in specific counties and states. Reviewing nearby well log records before purchasing a property with a dug well &mdash; or before deciding whether to drill a new well &mdash; gives the most realistic picture of what depth and geology to expect.</p>
          </div>

          {/* Related Guides */}
          <div className="border-t border-slate-200 pt-12 mt-12 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px" style={{ backgroundColor: '#1D9E75' }}></div>
              <span className="font-bold tracking-[0.3em] text-xs uppercase" style={{ color: '#0F6E56' }}>Related</span>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2>
            <div className="grid md:grid-cols-2 gap-3">
              <Link href="/guides/complete-well-guide" className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0" style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]">The Complete Well Guide</span>
              </Link>
              <Link href="/cost-guides/well-drilling-cost" className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0" style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]">Well Drilling Cost</span>
              </Link>
              <Link href="/guides/how-to-test-well-water" className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0" style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]">How to Test Your Well Water</span>
              </Link>
              <Link href="/problems/well-running-dry" className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0" style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]">Well Running Dry</span>
              </Link>
              <Link href="/guides/buying-house-with-well" className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0" style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]">Buying a House With a Well</span>
              </Link>
              <Link href="/guides/well-water-treatment-options" className="flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group">
                <span className="inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0" style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
                <span className="text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]">Well Water Treatment Options</span>
              </Link>
            </div>
          </div>

        </div>
      </article>

      {/* Lead Form CTA */}
      <section className="py-16" style={{ backgroundColor: '#0D3D30' }}>
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Need a Well Water Professional?</h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto mb-8">Get free quotes from licensed well contractors in your area. No obligation, no spam.</p>
          <LeadForm />
        </div>
      </section>
    </>
  )
}
