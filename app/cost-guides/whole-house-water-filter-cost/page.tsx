import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Whole House Water Filter Cost: What Well Owners Actually Pay in 2026 | The Well Guide',
  description: 'The complete cost guide to whole house water filtration for well water. Equipment costs by system type, installation costs, annual maintenance costs, cost by contaminant problem, the 10-year ownership picture, and exactly what a quote should include — written specifically for well water, which costs more to treat than city water.',
  openGraph: {
    title: 'Whole House Water Filter Cost: What Well Owners Actually Pay in 2026',
    description: 'The complete cost guide to whole house water filtration for well water — equipment costs by system type, installation costs, annual maintenance, cost by contaminant problem, and the 10-year ownership picture.',
    url: 'https://www.thewell.guide/cost-guides/whole-house-water-filter-cost',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/whole-house-water-filter-cost.jpg', width: 1200, height: 630, alt: 'Multi-stage whole house water filtration system installed in a residential basement, showing multiple blue filter tanks, cartridge filter housings, a UV disinfection unit, and a digital control panel mounted on a brick wall.' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/cost-guides/whole-house-water-filter-cost' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a whole house water filter cost for well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Well water filtration costs $500 to $10,000 or more depending on your water test results. A basic sediment filter costs $200 to $600 installed. Most well owners with average water quality — hardness and some iron — need a multi-stage system costing $2,500 to $5,500 installed for a sediment filter, iron oxidizing filter, and water softener in sequence. Wells with bacteria add a UV system ($600 to $2,200). Always test your water before buying any equipment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does well water filtration cost more than city water filtration?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'City water arrives already treated for bacteria and adjusted for pH. A city water homeowner typically needs only a carbon filter — a $400 to $1,500 investment. Well water is raw groundwater that may contain iron, manganese, hardness, and bacteria requiring multiple treatment stages. Multiple systems add up, which is why well water treatment is consistently more expensive than city water filtration.',
      },
    },
    {
      '@type': 'Question',
      name: 'What whole house water filter do I need for well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The correct system depends entirely on your water test results. A well with hardness needs a softener. A well with iron and hardness needs a sediment filter, iron filter, and softener in that sequence. A well with bacteria needs a UV system as the final stage. Buying equipment without first testing is the most common and expensive mistake well owners make.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to install a water softener for well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A water softener for well water costs $800 to $2,800 installed depending on grain capacity. Annual salt cost adds $150 to $400 per year. For wells with iron above 1 to 2 ppm, an iron filter must be installed upstream of the softener or the resin will foul within one to three years, dramatically reducing softening effectiveness.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the annual maintenance cost for a whole house water filter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Annual maintenance costs depend on the system. A sediment cartridge filter costs $50 to $150 per year. A multi-stage carbon system costs $100 to $300. A water softener costs $150 to $400 primarily in salt. A UV system costs $80 to $150 for the annual lamp replacement. A complete multi-stage system with iron filter, softener, and UV costs $300 to $600 per year combined.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a whole house water filter myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Single-stage sediment filters, multi-stage cartridge systems, and UV systems added to an existing setup are DIY-appropriate for homeowners with basic plumbing skills, saving $200 to $600 in labor. Iron oxidizing filters with automated backwash valves, chemical injection systems, and any installation requiring electrical work or plumbing modifications should be professionally installed.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a whole house water filter last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Filter cartridges last 3 to 6 months. UV lamps must be replaced annually. Water softener resin lasts 10 to 20 years with proper maintenance and iron-free water. Iron filter media lasts 5 to 10 years. Tank and housing components last 10 to 15 years. The components that fail most frequently are the smallest and least expensive — cartridges, UV lamps, and control valve O-rings — not the tanks themselves.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is a whole house water filter worth it for well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "For wells with confirmed iron, hardness, or bacteria, a properly selected treatment system protects appliances and plumbing in ways that pay for themselves over time. A water heater in 15 GPG untreated hard water loses 12 percent or more of its energy efficiency and may fail years ahead of schedule — a $1,000 to $3,000 unplanned expense. A softener costing $1,600 installed and $275 per year typically costs less over 10 years than two premature water heater replacements.",
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Whole House Water Filter Cost: What Well Owners Actually Pay in 2026',
  description: 'The complete cost guide to whole house water filtration for well water — equipment costs by system type, installation costs, annual maintenance, cost by contaminant problem, and the 10-year ownership picture.',
  author: { '@type': 'Organization', name: 'The Well Guide' },
  publisher: { '@type': 'Organization', name: 'The Well Guide', url: 'https://well.guide' },
  mainEntityOfPage: 'https://www.thewell.guide/cost-guides/whole-house-water-filter-cost',
  dateModified: '2026-03-25',
}

export default function WholeHouseWaterFilterCostPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden">
        <Image src="/whole-house-water-filter-cost.jpg" alt="Multi-stage whole house water filtration system installed in a residential basement, showing multiple blue filter tanks, cartridge filter housings, a UV disinfection unit, and a digital control panel mounted on a brick wall." fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="container-custom">
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3" style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight max-w-4xl">Whole House Water Filter Cost: What Well Owners Actually Pay in 2026</h1>
            <p className="mt-3 text-sm text-white/80">WG / The Well Guide / Updated March 2026 · 13 min read</p>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ label: 'Cost Guides', href: '/cost-guides' }, { label: 'Whole House Water Filter Cost' }]} />

      <article className="py-12">
        <div className="container-custom max-w-3xl">

          {/* TL;DR Box */}
          <div className="rounded-lg p-5 mb-10" style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
            <p className="text-[#0D1F1A] leading-relaxed"><strong>Quick answer:</strong> Whole house water filtration for a private well costs $500 to $10,000 or more depending on what your water test shows. A basic single-stage sediment filter runs $200 to $600 installed. A water softener for hardness runs $800 to $2,800 installed. An iron and sulfur treatment system runs $1,500 to $4,000 installed. A UV disinfection system runs $600 to $2,200 installed. Most well owners with average water quality — hardness plus some iron, no bacteria — spend $2,000 to $5,000 for a properly sequenced multi-stage system. Well water systems consistently cost more than city water filtration because well water requires treatment for contaminants that municipalities already address before water reaches your home.</p>
          </div>

          {/* At a Glance Table */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-4">At a Glance: Whole House Water Filter Costs for Well Water</h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse rounded-lg overflow-hidden text-sm">
              <thead>
                <tr style={{ backgroundColor: '#0D3D30' }}>
                  <th className="text-left p-3 text-white font-bold">System Type</th>
                  <th className="text-left p-3 text-white font-bold">Equipment Cost</th>
                  <th className="text-left p-3 text-white font-bold">Installed Cost</th>
                  <th className="text-left p-3 text-white font-bold">Annual Maintenance</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Sediment filter (single cartridge)</td>
                  <td className="p-3 text-[#3D5A52]">$50 to $200</td>
                  <td className="p-3 text-[#3D5A52]">$200 to $600</td>
                  <td className="p-3 text-[#3D5A52]">$50 to $150</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Carbon/multi-stage cartridge system</td>
                  <td className="p-3 text-[#3D5A52]">$150 to $600</td>
                  <td className="p-3 text-[#3D5A52]">$400 to $1,200</td>
                  <td className="p-3 text-[#3D5A52]">$100 to $300</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Iron and sulfur oxidizing filter</td>
                  <td className="p-3 text-[#3D5A52]">$800 to $2,500</td>
                  <td className="p-3 text-[#3D5A52]">$1,500 to $4,000</td>
                  <td className="p-3 text-[#3D5A52]">$100 to $250</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Water softener (ion exchange)</td>
                  <td className="p-3 text-[#3D5A52]">$500 to $1,800</td>
                  <td className="p-3 text-[#3D5A52]">$800 to $2,800</td>
                  <td className="p-3 text-[#3D5A52]">$150 to $400</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">UV disinfection system</td>
                  <td className="p-3 text-[#3D5A52]">$300 to $1,200</td>
                  <td className="p-3 text-[#3D5A52]">$600 to $2,200</td>
                  <td className="p-3 text-[#3D5A52]">$80 to $150</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Salt-free water conditioner</td>
                  <td className="p-3 text-[#3D5A52]">$500 to $2,000</td>
                  <td className="p-3 text-[#3D5A52]">$900 to $3,000</td>
                  <td className="p-3 text-[#3D5A52]">$50 to $150</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Whole house RO system</td>
                  <td className="p-3 text-[#3D5A52]">$1,500 to $4,000</td>
                  <td className="p-3 text-[#3D5A52]">$3,000 to $7,000</td>
                  <td className="p-3 text-[#3D5A52]">$200 to $500</td>
                </tr>
                <tr style={{ backgroundColor: '#FAEEDA' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Multi-stage combination system</td>
                  <td className="p-3 text-[#3D5A52]">$2,000 to $6,000</td>
                  <td className="p-3 text-[#3D5A52]">$3,500 to $10,000+</td>
                  <td className="p-3 text-[#3D5A52]">$300 to $600</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#3D5A52] text-sm leading-relaxed mb-4">All installed costs include equipment plus professional installation labor. Equipment-only costs are for DIY installation. Annual maintenance includes consumables (filter cartridges, salt, UV bulbs) but not professional service calls.</p>

          {/* Why Well Water Costs More — Amber Callout */}
          <div className="rounded-lg p-6 my-10" style={{ backgroundColor: '#FAEEDA', border: '1px solid #854F0B' }}>
            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">Why Well Water Treatment Costs More Than City Water Treatment</h2>
            <p className="text-[#3D5A52] leading-relaxed mb-4">This is the first thing to understand when budgeting: well water filtration quotes are not comparable to city water filtration quotes because the problems are fundamentally different.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-4">City water arrives at your home already treated for bacteria, adjusted for pH, and free of the raw iron and sediment that come from a private well. A city water homeowner installing a whole house filter typically needs a single carbon block or multi-stage cartridge system to address chlorine taste, chloramines, and trace contaminants. Cost: $400 to $1,500 installed.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-4">A well water homeowner starts from raw groundwater that has not been treated for anything. Depending on local geology and land use, that water may contain iron, manganese, hydrogen sulfide, hardness minerals, bacteria, nitrates, arsenic, or other contaminants — often in combination. Each contaminant requires a specific treatment technology, and the technologies must be installed in the correct sequence or they interfere with each other.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-4">The result is that well water treatment almost always requires multiple system stages rather than a single filter, which is the primary driver of higher cost. A well owner in a hard water area with iron and no bacteria may need a sediment pre-filter, an iron oxidizing filter, and a water softener — three separate systems — before the water reaches the kitchen tap.</p>
            <p className="text-[#3D5A52] leading-relaxed">See the <Link href="/guides/well-water-treatment-options" className="text-[#1D9E75] underline hover:text-[#0D3D30]">well water treatment options guide</Link> for the full treatment decision tree and the <Link href="/reviews/best-whole-house-water-filters" className="text-[#1D9E75] underline hover:text-[#0D3D30]">best whole house water filters review</Link> for specific product recommendations by contaminant type.</p>
          </div>

          {/* Cost by System Type */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-6">Cost by System Type</h2>

          {/* Sediment */}
          <div className="rounded-lg p-6 mb-6 bg-white border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Sediment Filtration: $200 to $600 Installed</h3>
            <p className="text-[#3D5A52] leading-relaxed mb-3">A sediment filter is the most basic and least expensive whole house water filter. It is a single canister housing containing a replaceable cartridge that captures physical particles — sand, silt, rust, and grit — down to a specified micron rating (typically 5 to 50 microns for whole-house use).</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>When it is sufficient:</strong> Almost never as a standalone system for well water. Sediment filtration is the entry point for a well water treatment system, not the end point. It protects all downstream equipment (iron filters, softeners, UV systems) from physical particle clogging. It is the first stage of every multi-stage system.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>When it is the primary system:</strong> Only when a well water test shows no significant iron, no hardness, no bacteria, and the only issue is occasional turbidity or sediment. This is relatively uncommon for private wells.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>What the cartridge costs:</strong> $20 to $60 per replacement cartridge. Most well water applications require cartridge replacement every 3 to 6 months depending on sediment load.</p>
            <p className="text-[#3D5A52] leading-relaxed"><strong>Annual maintenance cost:</strong> $50 to $150 for cartridge replacements.</p>
          </div>

          {/* Carbon */}
          <div className="rounded-lg p-6 mb-6 bg-white border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Carbon and Multi-Stage Cartridge Systems: $400 to $1,200 Installed</h3>
            <p className="text-[#3D5A52] leading-relaxed mb-3">A multi-stage cartridge system runs water through two to five filter cartridges in sequence, each targeting different contaminants. Typical stages include a sediment pre-filter, one or two activated carbon blocks (for taste, odor, chlorine, and some organic compounds), and sometimes a KDF stage for heavy metal reduction.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>When it is appropriate for well water:</strong> When the primary issues are taste, odor, and trace organics — and the well water test shows no significant iron, no bacteria, and no hardness above 7 GPG. Carbon filtration does not remove iron, hardness minerals, or bacteria. A homeowner who installs a carbon system to address iron or bacteria will be disappointed.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>What drives cost up:</strong> Higher-capacity housing (4.5-inch diameter Big Blue style versus 10-inch standard), additional filter stages, and higher-rated cartridges with longer service life.</p>
            <p className="text-[#3D5A52] leading-relaxed"><strong>Annual maintenance cost:</strong> $100 to $300 for cartridge replacements, typically twice per year for sediment and annually for carbon.</p>
          </div>

          {/* Iron Filter */}
          <div className="rounded-lg p-6 mb-6 bg-white border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Iron and Sulfur Oxidizing Filter: $1,500 to $4,000 Installed</h3>
            <p className="text-[#3D5A52] leading-relaxed mb-3">This is the system most private well owners in hard water, iron-bearing geology actually need but most general filtration guides do not describe clearly. An iron filter works by oxidizing dissolved ferrous iron (clear water iron) into ferric iron (rust particles) and then filtering out the particulate. Most iron filters also address manganese and hydrogen sulfide (the rotten-egg odor).</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3">Three main oxidizing filter technologies exist, at different price points:</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Air injection / air pocket systems:</strong> A pocket of air is maintained in the top of the media tank. Water passes through the air pocket, oxidizing dissolved iron, and then through the filter media bed. No chemical addition required. Cost: $1,200 to $2,500 installed. Most effective for iron levels up to 10 to 15 ppm and moderate hydrogen sulfide.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Greensand / catalytic carbon filters:</strong> A specialized media (greensand or catalytic carbon) provides oxidation capacity. Requires periodic regeneration with potassium permanganate or chlorine. Cost: $1,000 to $2,500 installed. Effective for iron, manganese, and hydrogen sulfide.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Chemical injection (chlorine or hydrogen peroxide):</strong> A metering pump injects an oxidizing chemical (chlorine or hydrogen peroxide) ahead of a contact tank and filter. Most effective for high iron (above 15 ppm) or combined iron and bacteria problems. Cost: $1,500 to $4,000 installed. Higher maintenance due to chemical refilling and injection pump service.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-4"><strong>Annual maintenance cost:</strong> $100 to $250 for media cleaning, periodic potassium permanganate or chemical replenishment (where applicable), and annual inspection.</p>

            {/* Treatment Sequence Callout */}
            <div className="rounded-lg p-4" style={{ backgroundColor: '#E1F5EE', border: '1px solid #1D9E75' }}>
              <p className="font-bold text-[#0D1F1A] mb-2">Critical: Treatment Sequence</p>
              <p className="text-[#3D5A52] text-sm leading-relaxed">The iron filter must be installed before the water softener in the treatment sequence. Iron that reaches the softener will foul the resin and reduce softening effectiveness. See the <Link href="/guides/hard-water-well" className="text-[#1D9E75] underline hover:text-[#0D3D30]">hard water well guide</Link> for the complete treatment sequence explanation.</p>
            </div>
          </div>

          {/* Water Softener */}
          <div className="rounded-lg p-6 mb-6 bg-white border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Water Softener: $800 to $2,800 Installed</h3>
            <p className="text-[#3D5A52] leading-relaxed mb-3">A water softener addresses hardness — dissolved calcium and magnesium — through ion exchange resin. It is the appropriate solution for water hardness above 7 GPG and is often the most cost-effective single investment a well owner can make in terms of protecting appliances and plumbing.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-2"><strong>Equipment cost by size:</strong></p>
            <ul className="space-y-1 text-[#3D5A52] text-sm mb-3 ml-4">
              <li><strong>24,000-grain</strong> (small household, up to 3 people at 10 GPG): $500 to $900 equipment</li>
              <li><strong>32,000-grain</strong> (family of 4, moderate hardness): $700 to $1,200 equipment</li>
              <li><strong>48,000-grain</strong> (large household or very hard water): $900 to $1,600 equipment</li>
              <li><strong>64,000-grain</strong> (high hardness or large household): $1,200 to $1,800 equipment</li>
            </ul>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Installation cost:</strong> $200 to $600 additional for professional installation including plumbing connections, bypass valve, drain line, and programming.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Annual maintenance cost:</strong> $150 to $400 primarily for salt. Sodium chloride salt costs $5 to $10 per 40-pound bag. Potassium chloride (no sodium added to drinking water) costs $20 to $30 per 40-pound bag. A family of four with 10 GPG hardness uses approximately 50 to 120 pounds of salt per month.</p>
            <p className="text-[#3D5A52] leading-relaxed">Demand-initiated regeneration (DIR) softeners cost $100 to $300 more upfront than timer-based models but reduce salt consumption by 25 to 50 percent, lowering annual operating cost. See the <Link href="/cost-guides/pressure-tank-replacement-cost" className="text-[#1D9E75] underline hover:text-[#0D3D30]">pressure tank replacement cost guide</Link> for the comparable well system component cost reference.</p>
          </div>

          {/* UV */}
          <div className="rounded-lg p-6 mb-6 bg-white border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">UV Disinfection System: $600 to $2,200 Installed</h3>
            <p className="text-[#3D5A52] leading-relaxed mb-3">A UV system uses ultraviolet light to destroy bacteria, viruses, and other microorganisms without adding chemicals. Water passes through a stainless steel chamber housing a UV lamp, and organisms are rendered unable to reproduce.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>When it is necessary:</strong> Any well that tests positive for coliform bacteria or E. coli requires disinfection. UV is the preferred disinfection method for private wells because it adds no chemicals (unlike continuous chlorination) and leaves no residual in the water. UV is also standard practice for wells in areas with shallow water tables, nearby agricultural activity, or aging casing that may admit surface water.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Critical requirement:</strong> UV systems require clear water to work effectively. Turbidity or iron above 0.3 ppm interferes with UV penetration. A UV system must always be installed after the sediment filter and iron filter in the treatment sequence — it is the last stage before the point of use.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-2"><strong>Equipment cost by flow rate:</strong></p>
            <ul className="space-y-1 text-[#3D5A52] text-sm mb-3 ml-4">
              <li>8 to 12 GPM (1 to 2 bathrooms): $300 to $600 equipment</li>
              <li>12 to 18 GPM (2 to 3 bathrooms): $500 to $1,000 equipment</li>
              <li>18 to 25 GPM (3+ bathrooms): $800 to $1,200 equipment</li>
            </ul>
            <p className="text-[#3D5A52] leading-relaxed"><strong>Annual maintenance cost:</strong> $80 to $150 for UV lamp replacement. UV lamps must be replaced annually regardless of visible appearance — they continue to glow but lose germicidal effectiveness after approximately 9,000 hours (about one year) of continuous operation.</p>
          </div>

          {/* Salt-Free Conditioner */}
          <div className="rounded-lg p-6 mb-6 bg-white border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Salt-Free Water Conditioner: $900 to $3,000 Installed</h3>
            <p className="text-[#3D5A52] leading-relaxed mb-3">A salt-free conditioner uses template assisted crystallization (TAC) media to convert dissolved hardness minerals into microscopic crystals that stay suspended in the water but do not adhere to pipe surfaces or heating elements. No salt is used. No sodium is added to the water. No brine is discharged.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>What it does:</strong> Prevents scale formation in pipes and water heaters. Extends appliance life.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>What it does not do:</strong> Remove calcium and magnesium from the water. Soap will still not lather as well as with ion exchange softening. Clothes and dishes will not feel as different. True softening requires ion exchange.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>When it is appropriate:</strong> Hardness between 7 and 15 GPG, iron below 0.5 ppm, and the primary concern is scale prevention rather than full softening. Also appropriate where salt discharge concerns exist (septic system in high-density area) or where a sodium-restricted diet makes salt-based softening undesirable.</p>
            <p className="text-[#3D5A52] leading-relaxed"><strong>Annual maintenance cost:</strong> $50 to $150 for periodic TAC media inspection. No consumables in normal operation.</p>
          </div>

          {/* Whole House RO */}
          <div className="rounded-lg p-6 mb-6 bg-white border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className="text-xl font-bold text-[#0D1F1A] mb-3">Whole House Reverse Osmosis: $3,000 to $7,000 Installed</h3>
            <p className="text-[#3D5A52] leading-relaxed mb-3">A whole house RO system filters all water entering the home through semi-permeable membranes that reject dissolved contaminants at rates of 95 to 99 percent. It is the most comprehensive treatment technology available and the appropriate solution for wells with arsenic, PFAS, nitrates, fluoride, or very high TDS that other technologies cannot adequately address.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>When it is appropriate for well water:</strong> Wells with arsenic above the EPA action level of 10 ppb, PFAS contamination, very high nitrates (above 10 ppm), or TDS above 500 ppm that cannot be adequately addressed by standard filtration. Whole house RO is expensive and reduces water pressure — it is not appropriate as a general filtration upgrade.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Important limitation:</strong> RO membranes are destroyed by iron above 0.05 ppm and by oxidizing conditions. A complete pre-treatment sequence (sediment, iron removal, carbon) must precede any RO system. The total system cost including pre-treatment often puts whole house RO at $5,000 to $10,000 for a well water application.</p>
            <p className="text-[#3D5A52] leading-relaxed"><strong>Annual maintenance cost:</strong> $200 to $500 for membrane replacement (every 2 to 5 years depending on water quality) and pre-filter cartridges.</p>
          </div>

          {/* Cost by Contaminant Problem Table */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-4">Cost by Contaminant Problem</h2>
          <p className="text-[#3D5A52] leading-relaxed mb-4">This is the most useful framing for a well owner trying to budget: what does it cost to solve my specific water quality problem?</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse rounded-lg overflow-hidden text-sm">
              <thead>
                <tr style={{ backgroundColor: '#0D3D30' }}>
                  <th className="text-left p-3 text-white font-bold">Water Problem</th>
                  <th className="text-left p-3 text-white font-bold">Recommended System</th>
                  <th className="text-left p-3 text-white font-bold">Installed Cost Range</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Sediment and turbidity only</td>
                  <td className="p-3 text-[#3D5A52]">Sediment cartridge filter</td>
                  <td className="p-3 text-[#3D5A52]">$200 to $600</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Taste and odor, no iron or bacteria</td>
                  <td className="p-3 text-[#3D5A52]">Carbon multi-stage cartridge system</td>
                  <td className="p-3 text-[#3D5A52]">$400 to $1,200</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Hardness only (above 7 GPG)</td>
                  <td className="p-3 text-[#3D5A52]">Water softener</td>
                  <td className="p-3 text-[#3D5A52]">$800 to $2,800</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Iron only (below 5 ppm, no bacteria)</td>
                  <td className="p-3 text-[#3D5A52]">Iron oxidizing filter + sediment pre-filter</td>
                  <td className="p-3 text-[#3D5A52]">$1,500 to $3,500</td>
                </tr>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Iron plus hardness (most common)</td>
                  <td className="p-3 text-[#3D5A52]">Sediment + iron filter + softener</td>
                  <td className="p-3 text-[#3D5A52]">$2,500 to $5,500</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Bacteria only (no iron or hardness)</td>
                  <td className="p-3 text-[#3D5A52]">Sediment pre-filter + UV system</td>
                  <td className="p-3 text-[#3D5A52]">$800 to $2,500</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Iron plus bacteria (common rural)</td>
                  <td className="p-3 text-[#3D5A52]">Sediment + iron filter + UV</td>
                  <td className="p-3 text-[#3D5A52]">$2,500 to $5,000</td>
                </tr>
                <tr style={{ backgroundColor: '#FAEEDA' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Iron plus hardness plus bacteria</td>
                  <td className="p-3 text-[#3D5A52]">Sediment + iron filter + softener + UV</td>
                  <td className="p-3 text-[#3D5A52]">$3,500 to $7,000</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Hydrogen sulfide (rotten egg odor)</td>
                  <td className="p-3 text-[#3D5A52]">Air injection or H₂O₂ injection system</td>
                  <td className="p-3 text-[#3D5A52]">$1,500 to $4,000</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Arsenic, PFAS, or nitrates</td>
                  <td className="p-3 text-[#3D5A52]">Pre-treatment + whole house RO or POU RO</td>
                  <td className="p-3 text-[#3D5A52]">$3,000 to $10,000+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#3D5A52] leading-relaxed mb-4">The most common well water treatment scenario nationally — iron plus hardness, no bacteria — costs $2,500 to $5,500 installed for a properly sequenced three-stage system. The EPA recommends annual water testing for private wells to identify which contaminants are actually present before purchasing any treatment equipment.</p>

          {/* What Is Included in a Quote */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-4">What Is Included in a Quote (and What Is Not)</h2>
          <p className="text-[#3D5A52] leading-relaxed mb-4">Professional water treatment quotes vary significantly in what they include. Read every quote carefully for these common exclusions.</p>
          <p className="text-[#3D5A52] leading-relaxed mb-2"><strong>Usually included:</strong></p>
          <ul className="space-y-1 text-[#3D5A52] text-sm mb-6 ml-4">
            <li>• Equipment (tanks, filter housings, media, UV chamber)</li>
            <li>• Standard plumbing connections using existing supply lines</li>
            <li>• Bypass valve installation</li>
            <li>• Drain line connection (for softeners and backwashing filters)</li>
            <li>• Basic programming and startup</li>
          </ul>

          {/* Excluded items — Amber callout card */}
          <div className="rounded-lg p-6 mb-8" style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className="font-bold text-[#0D1F1A] mb-4">Often not included — ask specifically:</p>
            <div className="space-y-4 text-[#3D5A52] text-sm leading-relaxed">
              <div><strong>Electrical work:</strong> UV systems, iron filters with automated backwash valves, and water softeners with digital control heads all require electrical connections. If a dedicated outlet is not already present within 10 to 15 feet of the installation location, adding one costs $150 to $350. Some quotes assume the outlet exists. Many well water treatment installations are in basements or utility rooms where outlets are limited.</div>
              <div><strong>Water testing:</strong> The equipment quote assumes you already know what is in your water. If you have not tested, add $100 to $400 for a certified laboratory water quality test. Never buy treatment equipment without first testing — buying a softener for a well with bacteria is money wasted.</div>
              <div><strong>Permit:</strong> Some jurisdictions require a plumbing permit for whole house water treatment installation. Cost: $30 to $200. Ask whether the contractor handles the permit or whether you are responsible.</div>
              <div><strong>Pre-plumbing modifications:</strong> If the existing plumbing does not have a suitable installation point — a straight section of incoming supply line with adequate space — the contractor may need to reroute or modify plumbing. Add $200 to $800 for significant rerouting.</div>
              <div><strong>Removal of old equipment:</strong> If you are replacing an existing system, removal and disposal of the old equipment costs $75 to $200.</div>
              <div><strong>Annual service contract:</strong> Some contractors bundle the first year of maintenance into the installation quote. Others price it separately. Ask what annual service (cartridge replacement, lamp replacement, salt delivery, system inspection) costs and whether it is included.</div>
            </div>
          </div>

          {/* DIY vs Professional — Side by Side Cards */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-4">DIY vs. Professional Installation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="rounded-lg p-5 border border-[#C8DDD7]" style={{ borderLeft: '4px solid #1D9E75' }}>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-3">DIY Is Appropriate For</h3>
              <ul className="space-y-2 text-[#3D5A52] text-sm">
                <li className="flex items-start gap-2"><span className="text-[#1D9E75] mt-1">•</span><span>Single-stage sediment cartridge systems (straightforward connection to incoming supply line)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75] mt-1">•</span><span>Multi-stage cartridge housings (same basic plumbing, multiple housings in series)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75] mt-1">•</span><span>UV systems added to an existing filtration setup (connect in line, plug in)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#1D9E75] mt-1">•</span><span>Water softener in a standard installation location with existing drain and outlet</span></li>
              </ul>
              <p className="text-[#3D5A52] text-sm mt-3">DIY installation saves $200 to $600 in labor on simpler systems.</p>
            </div>
            <div className="rounded-lg p-5 border border-[#D1D5DB]" style={{ borderLeft: '4px solid #D1D5DB' }}>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-3">Professional Installation Recommended</h3>
              <ul className="space-y-2 text-[#3D5A52] text-sm">
                <li className="flex items-start gap-2"><span className="text-[#6B7280] mt-1">•</span><span>Iron oxidizing filter systems with automated backwash valves (require pressure balancing and programming)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6B7280] mt-1">•</span><span>New water softener installations where drain line and electrical must be run</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6B7280] mt-1">•</span><span>Any multi-stage system combining three or more components</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6B7280] mt-1">•</span><span>Chemical injection systems (chlorine or hydrogen peroxide)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6B7280] mt-1">•</span><span>Whole house RO systems (require flow balancing and pressure regulation)</span></li>
                <li className="flex items-start gap-2"><span className="text-[#6B7280] mt-1">•</span><span>Any installation in older homes with galvanized or mixed-metal plumbing</span></li>
              </ul>
              <p className="text-[#3D5A52] text-sm mt-3">Professional installation cost: $200 to $600 standard; $800 to $1,200 for complex systems.</p>
            </div>
          </div>

          {/* 10-Year Total Cost Table */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-4">The 10-Year Total Cost of Ownership</h2>
          <p className="text-[#3D5A52] leading-relaxed mb-4">Equipment cost is the sticker price. Total cost of ownership is what you actually spend. These are 10-year estimates for a typical family of four.</p>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse rounded-lg overflow-hidden text-sm">
              <thead>
                <tr style={{ backgroundColor: '#0D3D30' }}>
                  <th className="text-left p-3 text-white font-bold">System</th>
                  <th className="text-left p-3 text-white font-bold">Equipment + Install</th>
                  <th className="text-left p-3 text-white font-bold">Annual Maintenance</th>
                  <th className="text-left p-3 text-white font-bold">10-Year Total</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Sediment cartridge filter</td>
                  <td className="p-3 text-[#3D5A52]">$400</td>
                  <td className="p-3 text-[#3D5A52]">$100/yr</td>
                  <td className="p-3 font-bold text-[#0D1F1A]">$1,400</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Carbon multi-stage system</td>
                  <td className="p-3 text-[#3D5A52]">$800</td>
                  <td className="p-3 text-[#3D5A52]">$200/yr</td>
                  <td className="p-3 font-bold text-[#0D1F1A]">$2,800</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Iron oxidizing filter</td>
                  <td className="p-3 text-[#3D5A52]">$2,500</td>
                  <td className="p-3 text-[#3D5A52]">$175/yr</td>
                  <td className="p-3 font-bold text-[#0D1F1A]">$4,250</td>
                </tr>
                <tr style={{ backgroundColor: '#FFFFFF' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Water softener (32k grain, NaCl)</td>
                  <td className="p-3 text-[#3D5A52]">$1,600</td>
                  <td className="p-3 text-[#3D5A52]">$275/yr</td>
                  <td className="p-3 font-bold text-[#0D1F1A]">$4,350</td>
                </tr>
                <tr style={{ backgroundColor: '#F9FAFB' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">UV disinfection system</td>
                  <td className="p-3 text-[#3D5A52]">$1,200</td>
                  <td className="p-3 text-[#3D5A52]">$120/yr</td>
                  <td className="p-3 font-bold text-[#0D1F1A]">$2,400</td>
                </tr>
                <tr style={{ backgroundColor: '#FAEEDA' }}>
                  <td className="p-3 font-semibold text-[#0D1F1A]">Iron filter + softener + UV</td>
                  <td className="p-3 text-[#3D5A52]">$5,500</td>
                  <td className="p-3 text-[#3D5A52]">$500/yr</td>
                  <td className="p-3 font-bold text-[#0D1F1A]">$10,500</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[#3D5A52] leading-relaxed mb-4">The most important column is the 10-year total — not the equipment cost. A cheap cartridge system that requires $300 per year in replacements costs more over a decade than a higher-quality tank-based system with $100 per year in maintenance. Tank-based iron filters and softeners have higher upfront costs but lower annual maintenance costs than cartridge-based alternatives for the same contaminant.</p>

          {/* Red Flags — Red Callout */}
          <div className="rounded-lg p-6 my-10" style={{ backgroundColor: '#FCEBEB', border: '1px solid #A32D2D' }}>
            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">Red Flags in Water Treatment Quotes</h2>
            <div className="space-y-4 text-[#3D5A52] leading-relaxed">
              <p><strong>A quote with no water test.</strong> Any contractor who recommends equipment before seeing a water test result is either selling you what they have in stock or guessing. A legitimate water treatment contractor will not recommend specific equipment without knowing what your water actually contains.</p>
              <p><strong>Equipment sized for the house, not for the water.</strong> A 32,000-grain softener is right for some households and wrong for others. The correct size depends on hardness level, household size, and daily water usage — not on house square footage. A quote that recommends equipment without referencing your hardness number and household size is not properly sized.</p>
              <p><strong>Per-gallon claims without NSF certification.</strong> Any treatment system that claims to remove a specific contaminant should carry NSF certification for that contaminant. NSF 42 covers aesthetic contaminants (taste, odor, chlorine). NSF 44 covers softeners. NSF 55 covers UV disinfection. NSF 58 covers reverse osmosis. Ask for the NSF certification number and verify it.</p>
              <p><strong>Pressure to buy the same day.</strong> Legitimate water treatment companies do not require same-day decisions. Take time to compare at least two to three quotes for any system costing more than $1,500.</p>
              <p><strong>No mention of the treatment sequence.</strong> A contractor who proposes a softener without asking about iron, or a UV system without asking about turbidity, does not understand well water treatment. The sequence matters: sediment first, iron removal second, softener third, UV last.</p>
            </div>
          </div>

          {/* How to Get an Accurate Quote — Teal Callout */}
          <div className="rounded-lg p-6 my-10" style={{ backgroundColor: '#E1F5EE', border: '1px solid #1D9E75' }}>
            <h2 className="text-2xl font-bold text-[#0D1F1A] mb-4">How to Get an Accurate Quote</h2>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Step 1: Test your water first.</strong> A certified laboratory water test ($100 to $400) is the essential starting point. You cannot accurately budget for treatment without knowing what you are treating. See the <Link href="/guides/how-to-test-well-water" className="text-[#1D9E75] underline hover:text-[#0D3D30]">how to test your well water guide</Link> for what to test for and how.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Step 2: Get three quotes minimum, from licensed contractors.</strong> Water treatment pricing varies significantly. Three quotes give you a frame of reference and let you identify outliers.</p>
            <p className="text-[#3D5A52] leading-relaxed mb-3"><strong>Step 3: Ask every contractor these questions:</strong></p>
            <ul className="space-y-2 text-[#3D5A52] text-sm mb-4 ml-4">
              <li>• Is the quote based on my specific water test results?</li>
              <li>• What NSF certifications do the recommended systems carry?</li>
              <li>• What is the complete treatment sequence and why is each stage in that order?</li>
              <li>• What is included in the quoted price (equipment, installation, permit, electrical)?</li>
              <li>• What are the annual maintenance costs for everything included?</li>
              <li>• What is the warranty on equipment and labor?</li>
              <li>• Do you offer an annual service contract and what does it include?</li>
            </ul>
            <p className="text-[#3D5A52] leading-relaxed"><strong>Step 4: Request itemized quotes.</strong> A quote that shows equipment cost and installation cost separately lets you compare contractors on the same basis and identifies what each one is and is not including.</p>
          </div>

          {/* FAQ Section */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">How much does a whole house water filter cost for well water?</h3>
              <p className="text-[#3D5A52] leading-relaxed">Well water filtration costs $500 to $10,000 or more depending on what your water test shows. A basic sediment filter costs $200 to $600 installed. Most well owners with average water quality — hardness and some iron — need a multi-stage system costing $2,500 to $5,500 installed for a properly sequenced sediment filter, iron oxidizing filter, and water softener. Wells with bacteria add a UV system ($600 to $2,200) to the total. Always test your water before buying any equipment.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Why does well water filtration cost more than city water filtration?</h3>
              <p className="text-[#3D5A52] leading-relaxed">City water arrives already treated for bacteria and adjusted for pH. A city water homeowner typically needs only a carbon filter to address taste and trace contaminants — a $400 to $1,500 investment. Well water is raw groundwater that may contain iron, manganese, hardness, bacteria, and other contaminants requiring multiple treatment stages in the correct sequence. Multiple systems add up, which is why well water treatment is consistently more expensive than city water filtration.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">What whole house water filter do I need for well water?</h3>
              <p className="text-[#3D5A52] leading-relaxed">The correct system depends entirely on your water test results. There is no universal answer. A well with only hardness needs a softener. A well with iron and hardness needs a sediment filter, iron filter, and softener in that sequence. A well with bacteria needs a UV system as the final stage. Buying equipment without first testing is the most common and expensive mistake well owners make.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">How much does it cost to install a water softener for well water?</h3>
              <p className="text-[#3D5A52] leading-relaxed">A water softener for well water costs $800 to $2,800 installed, depending on grain capacity and whether a demand-initiated regeneration control is included. Annual salt cost adds $150 to $400 per year. However, for wells with iron above 1 to 2 ppm, an iron filter must be installed upstream of the softener or the resin will foul within one to three years, dramatically reducing softening effectiveness.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">What is the annual maintenance cost for a whole house water filter?</h3>
              <p className="text-[#3D5A52] leading-relaxed">Annual maintenance costs depend on the system. A sediment cartridge filter costs $50 to $150 per year in cartridge replacements. A multi-stage carbon system costs $100 to $300. A water softener costs $150 to $400 primarily in salt. A UV system costs $80 to $150 for the annual lamp replacement. A complete multi-stage system with iron filter, softener, and UV costs $300 to $600 per year in combined maintenance. Factor annual maintenance into any purchase decision — a cheap system with expensive consumables can cost more over 10 years than a more expensive system with lower annual costs.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Can I install a whole house water filter myself?</h3>
              <p className="text-[#3D5A52] leading-relaxed">Single-stage sediment filters, multi-stage cartridge systems, and UV systems added to an existing setup are DIY-appropriate for homeowners with basic plumbing skills. DIY saves $200 to $600 in labor. Iron oxidizing filters with automated backwash valves, chemical injection systems, and any installation requiring electrical work or plumbing modifications should be professionally installed. Incorrect installation can void equipment warranties and create water quality problems.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">How long does a whole house water filter last?</h3>
              <p className="text-[#3D5A52] leading-relaxed">Filter cartridges last 3 to 6 months in typical well water applications. UV lamps must be replaced annually. Water softener resin lasts 10 to 20 years with proper maintenance and iron-free water entering the softener. Iron filter media lasts 5 to 10 years before requiring replacement or regeneration media refresh. Tank and housing components last 10 to 15 years in most cases. The system components that fail most frequently are the smallest and least expensive — cartridges, UV lamps, and control valve O-rings — not the tanks themselves.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-2">Is a whole house water filter worth it for well water?</h3>
              <p className="text-[#3D5A52] leading-relaxed">For wells with confirmed iron, hardness, or bacteria, a properly selected and sized treatment system protects appliances, plumbing, and water quality in ways that pay for themselves over time. A water heater operating in 15 GPG untreated hard water loses 12 percent or more of its energy efficiency and may fail years ahead of its rated lifespan — a $1,000 to $3,000 unplanned expense. A softener that costs $1,600 installed and $275 per year in salt costs less over 10 years than two premature water heater replacements. Test your water first, treat what is actually in it, and the math typically favors treatment for any well with moderate to significant contaminant levels.</p>
            </div>
          </div>

          {/* Glossary */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-6">Glossary</h2>
          <div className="space-y-6 mb-10">
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-1">NSF Certification</h3>
              <p className="text-[#3D5A52] leading-relaxed">A third-party certification from NSF International (formerly the National Sanitation Foundation) that verifies a water treatment product&#39;s performance claims. Different NSF standards cover different treatment categories: NSF 42 covers aesthetic contaminants (taste, odor, chlorine reduction), NSF 44 covers water softeners for hardness reduction, NSF 55 covers UV systems for microbiological treatment, NSF 58 covers reverse osmosis systems, and NSF 401 covers emerging contaminants including certain PFAS compounds. An NSF certification on a specific contaminant means the product has been independently tested and verified to reduce that contaminant to claimed levels under defined conditions.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-1">Backwashing</h3>
              <p className="text-[#3D5A52] leading-relaxed">The self-cleaning cycle used by tank-based iron filters, greensand filters, and some carbon filters to flush accumulated particulate from the filter media bed. During backwashing, water flow through the tank is reversed, lifting and rinsing the media and sending the accumulated material to drain. Backwashing typically runs for 10 to 15 minutes on an automatic timer, usually during late night hours when water usage is minimal. Tank-based backwashing systems have lower long-term maintenance costs than cartridge systems because the media lasts years rather than months.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-1">Point of Entry (POE)</h3>
              <p className="text-[#3D5A52] leading-relaxed">A water treatment installation location at the point where the main water supply line enters the home — typically in the basement or utility room immediately after the pressure tank. A point-of-entry system treats all water that enters the home, including water used for bathing, laundry, and irrigation as well as drinking and cooking. Whole house water filters are point-of-entry systems. Contrasted with point-of-use (POU) systems such as under-sink filters or countertop units, which treat water only at a single tap.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-1">Treatment Sequence</h3>
              <p className="text-[#3D5A52] leading-relaxed">The order in which water treatment systems are installed on the incoming supply line. For well water, the correct sequence is: sediment pre-filter first (to protect all downstream equipment), iron and manganese filter second (to prevent resin fouling in the softener), water softener third (to remove hardness from iron-free water), and UV disinfection last (immediately before the point of use, after all turbidity and iron have been removed). Installing systems out of sequence — particularly putting a softener before an iron filter — causes equipment damage and treatment failure.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0D1F1A] mb-1">Grain Capacity</h3>
              <p className="text-[#3D5A52] leading-relaxed">The total amount of hardness minerals a water softener can remove before its resin bed requires regeneration, measured in grains of calcium carbonate equivalent. A 32,000-grain softener can remove 32,000 grains of hardness before regenerating. Daily grain demand equals water hardness in GPG multiplied by household members multiplied by 75 gallons per person per day. A family of four with 10 GPG hardness has a daily grain demand of 3,000 grains, requiring regeneration approximately every 10 days for a 32,000-grain softener at rated efficiency.</p>
            </div>
          </div>

          {/* External Resource */}
          <div className="rounded-lg p-5 mb-10" style={{ backgroundColor: '#F3F4F6', border: '1px solid #D1D5DB' }}>
            <h2 className="text-xl font-bold text-[#0D1F1A] mb-2">External Resource</h2>
            <p className="text-[#3D5A52] leading-relaxed">The EPA&#39;s guidance on private drinking water wells at <a href="https://www.epa.gov/privatewells" target="_blank" rel="noopener noreferrer" className="text-[#1D9E75] underline hover:text-[#0D3D30]">epa.gov/privatewells</a> includes resources on water testing, treatment options, and what contaminants to test for based on local land use. The EPA&#39;s Consumer Confidence Report program, while not directly applicable to private wells, provides context for what municipal treatment costs ratepayers — useful for understanding why private well treatment costs what it does by comparison.</p>
          </div>

          {/* Related Guides */}
          <h2 className="text-2xl font-bold text-[#0D1F1A] mt-10 mb-4">Related Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            <Link href="/reviews/best-whole-house-water-filters" className="block p-4 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Best Whole House Water Filters →</span>
            </Link>
            <Link href="/guides/well-water-treatment-options" className="block p-4 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Well Water Treatment Options →</span>
            </Link>
            <Link href="/guides/hard-water-well" className="block p-4 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Hard Water Well Guide →</span>
            </Link>
            <Link href="/guides/how-to-test-well-water" className="block p-4 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">How to Test Your Well Water →</span>
            </Link>
            <Link href="/guides/complete-well-guide" className="block p-4 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">The Complete Well Guide →</span>
            </Link>
            <Link href="/guides/well-water-vs-city-water" className="block p-4 rounded-lg border border-[#C8DDD7] hover:shadow-md transition-shadow bg-white">
              <span className="text-[#1D9E75] font-semibold text-sm">Well Water vs. City Water →</span>
            </Link>
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
