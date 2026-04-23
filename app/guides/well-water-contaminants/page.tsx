import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Water Contaminants: The Complete Guide for Private Well Owners | The Well Guide',
  description: 'A complete reference guide to every contaminant in private well water — sources, health effects, EPA limits, regional risk, testing, and treatment.',
  openGraph: {
    title: 'Well Water Contaminants: The Complete Guide for Private Well Owners',
    description: 'A complete reference guide to every contaminant in private well water — sources, health effects, EPA limits, regional risk, testing, and treatment.',
    url: 'https://www.thewell.guide/guides/well-water-contaminants',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/wellguidecontaminants.jpg', width: 1200, height: 630, alt: 'A clean glass of water against a light neutral background' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/well-water-contaminants' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What contaminants are most common in well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The most commonly detected contaminants in private wells are coliform bacteria, nitrates, iron, manganese, arsenic, and hardness minerals. A USGS study found 13 percent of private wells exceeded at least one federal health standard. The EPA estimates 23 percent contain at least one contaminant at a level of health concern. Bacteria and nitrates are most urgently dangerous. Arsenic and lead are the most common causes of long-term health risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can well water make you sick?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Contaminated well water causes gastrointestinal illness (bacteria), developmental harm in children (lead, manganese, nitrates), and increased cancer risk with long-term exposure (arsenic, radon, PFAS, VOCs). Most well water contaminants are tasteless, odorless, and colorless at dangerous concentrations. Clear water that looks and smells normal can still contain harmful levels of bacteria, arsenic, lead, or PFAS. Annual testing is the only way to know.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is well water safe to drink without filtering?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends entirely on what is in it. Well water from a properly constructed well far from pollution sources may be safe without treatment. Well water with elevated arsenic, PFAS, lead, nitrates, or bacteria requires treatment. Annual testing establishes what is in your water and whether treatment is needed.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most dangerous well water contaminant?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For immediate risk: E. coli and pathogenic bacteria can cause serious illness within hours. For infants: nitrates above 10 mg/L cause blue baby syndrome and can be fatal rapidly. For long-term chronic risk: arsenic causes cancer with prolonged exposure even at concentrations that produce no symptoms. Lead causes irreversible neurological damage in children with no safe exposure level.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a water softener filter well water contaminants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard water softener removes only hardness minerals and low concentrations of ferrous iron. It does not remove bacteria, nitrates, arsenic, lead, PFAS, VOCs, or most contaminants of health concern. Water softeners are appliance protection systems, not health protection systems. For health contaminants, you need reverse osmosis, UV disinfection, or a specific media filter.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know if I need to filter my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test it first. Testing tells you what is actually in your water. A comprehensive baseline test costs $150 to $300 through a certified lab. Once you know what is in your water, you can choose treatment specifically designed to address what you actually have. Buying treatment equipment before testing often results in the wrong equipment for the actual problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'What do PFAS do to health?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PFAS are synthetic chemicals that accumulate in the body over a lifetime. Research links long-term PFAS exposure to kidney and testicular cancer, thyroid disease, high cholesterol, immune suppression, and developmental effects in children. The EPA set an MCL of 4 parts per trillion for PFOA and PFOS in public water systems in 2024. Private well owners near military bases, airports, or industrial facilities should test specifically for PFAS.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find what contaminants are common in my area?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Your county health department or state environmental agency is the best source for local groundwater quality information. State university extension programs publish county-level water quality data. The EPA's Private Wells program at epa.gov/privatewells lists state-by-state resources. The USGS National Water Information System provides historical groundwater quality data by aquifer and region.",
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Water Contaminants: The Complete Guide for Private Well Owners',
  description: 'A complete reference guide to every contaminant in private well water — sources, health effects, EPA limits, regional risk, testing, and treatment.',
  image: 'https://www.thewell.guide/wellguidecontaminants.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/guides/well-water-contaminants',
}

export default function WellWaterContaminants() {
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
          src='/wellguidecontaminants.jpg'
          alt='A clean glass of water against a light neutral background'
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
            Well Water<br />
            <span style={{ color: '#5DCAA5' }}>Contaminants:<br />The Complete Guide</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Every contaminant, where it comes from, what it does, and how to treat it. The only reference a private well owner needs.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 18 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Well Water Contaminants' }
      ]} />

      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* TL;DR */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed'>
            Most well water contaminants are tasteless, odorless, and colorless at dangerous concentrations. Clear water that looks and tastes normal can contain arsenic, lead, nitrates, PFAS, or bacteria at levels that harm health. The EPA recommends every private well owner test annually for total coliform bacteria, nitrates, total dissolved solids, and pH &mdash; these four cover the most common and most urgently dangerous threats. Beyond that baseline, which additional contaminants to test for depends on where you live and what surrounds your well: arsenic in New England, the Upper Midwest, and the Southwest; radon in granite geology across New England and Appalachia; PFAS near military bases, airports, and industrial facilities; nitrates near agricultural land; lead in homes built before 1986. A USGS study found 13 percent of private wells exceed at least one federal health standard. Test before assuming yours is safe.
          </p>
        </div>

        <p className='text-slate-700 leading-relaxed mb-8'>
          Unlike municipal water, private well water is not regulated, not monitored by any government agency, and not treated before it reaches your tap. An estimated 43 million Americans rely on private wells. The EPA and CDC have established what to test for, but the testing is voluntary and the responsibility is entirely the homeowner&apos;s. This guide covers every category of well water contaminant with specific information on health effects, EPA standards, regional prevalence, and treatment options, so you have one complete reference for every question about what might be in your water.
        </p>

        {/* Start Here Callout */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='rounded-2xl p-8' style={{ backgroundColor: '#E1F5EE', border: '1px solid #1D9E75' }}>
            <div className='flex items-center gap-3 mb-6'>
              <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
              <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Start Here</span>
              <div className='flex-1 h-px' style={{ backgroundColor: '#1D9E75', opacity: 0.3 }}></div>
            </div>
            <h2 className='text-2xl font-bold text-slate-900 mb-6'>What to Test for Right Now</h2>
            <p className='text-slate-700 leading-relaxed mb-4'>
              If you have never tested your well water or have not tested recently, these are the five tests that matter most. Do these before any others.
            </p>
            <div className='space-y-4'>
              <div className='bg-white/60 rounded-lg p-4'>
                <p className='text-slate-700 leading-relaxed'>
                  <strong>Annual minimum:</strong> Total coliform bacteria, E. coli, nitrates, pH, total dissolved solids. Together these cost $20 to $60 through a county health department. Free in many counties.
                </p>
              </div>
              <div className='bg-white/60 rounded-lg p-4'>
                <p className='text-slate-700 leading-relaxed'>
                  <strong>If you have never done a comprehensive baseline:</strong> Add arsenic, lead, iron, manganese, and hardness to the annual minimum. This covers the most common naturally occurring contaminants. Total cost $150 to $300 through a certified mail-in lab.
                </p>
              </div>
              <div className='bg-white/60 rounded-lg p-4'>
                <p className='text-slate-700 leading-relaxed'>
                  <strong>If you live within 10 miles of a military base, airport, or industrial facility:</strong> Add a PFAS panel. This requires a specialized certified laboratory. Cost $150 to $300.
                </p>
              </div>
              <div className='bg-white/60 rounded-lg p-4'>
                <p className='text-slate-700 leading-relaxed'>
                  <strong>If you are near agricultural land:</strong> Test nitrates more frequently (every 6 months during high-risk seasons) and add a pesticide panel every 3 years.
                </p>
              </div>
              <div className='bg-white/60 rounded-lg p-4'>
                <p className='text-slate-700 leading-relaxed'>
                  <strong>If your home was built before 1986:</strong> Test for lead using the first-draw method.
                </p>
              </div>
            </div>
            <p className='text-slate-600 text-sm mt-4 leading-relaxed'>
              Everything below explains each contaminant in detail so you understand what you are testing for and why.
            </p>
          </div>
        </div>

        {/* The Four Contaminant Categories */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Overview</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Four Contaminant Categories</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Every well water contaminant falls into one of four categories. Understanding the categories helps you understand why different contaminants require different treatment approaches and why a single filter cannot solve every problem.
          </p>
          <div className='space-y-4'>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Microbiological contaminants</strong> are living organisms: bacteria, viruses, and parasites. They cause acute illness, sometimes within hours of exposure. They are the most urgently dangerous category because the health effects are immediate and can be severe.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Inorganic chemical contaminants</strong> are naturally occurring minerals and metals: arsenic, lead, nitrates, manganese, iron, fluoride, uranium, radon. Some cause acute harm at high levels (nitrates in infants). Most cause chronic health effects from long-term exposure (arsenic, lead, uranium).
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Organic chemical contaminants</strong> are human-made chemicals: VOCs from fuel and solvents, pesticides from agriculture, PFAS from industrial and military use. They enter groundwater through spills, leaks, land application, and industrial discharge. Most cause chronic health effects from prolonged exposure.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Aesthetic contaminants</strong> affect taste, odor, and appearance but are not health hazards at typical concentrations: iron, manganese (at low levels), hardness, hydrogen sulfide (sulfur odor), total dissolved solids. They are annoying and can damage appliances but are not immediately dangerous.
              </p>
            </div>
          </div>
          <p className='text-slate-600 text-sm mt-4 leading-relaxed'>
            Note: the same contaminant can appear in multiple categories. Manganese at low levels is aesthetic. Manganese above 0.1 mg/L is a neurological health concern. This is why understanding concentration thresholds matters as much as knowing whether a contaminant is present.
          </p>
        </div>

        {/* Category 1: Microbiological */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Category 1</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-8'>Microbiological Contaminants</h2>

          {/* Total Coliform */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Total Coliform Bacteria</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Coliform bacteria are a family of bacteria that live naturally in soil, on plants, and in the intestines of warm-blooded animals. Total coliform is a broad indicator group. The presence of total coliform bacteria in well water does not automatically mean the water is dangerous, but it does mean contamination has entered the system and that dangerous organisms may be present.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> The coliform family itself is not uniformly harmful. But its presence in water indicates a pathway for contamination exists. Some coliform strains cause gastrointestinal illness. More importantly, total coliform presence signals that E. coli, Giardia, and other pathogens may also be present.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> Zero coliform bacteria per 100 milliliter sample. Any detection in a private well warrants immediate action: stop drinking the water for drinking and cooking, identify and fix the contamination pathway, and shock chlorinate before retesting.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How it enters wells:</strong> Surface water carrying animal waste or human sewage infiltrates through a compromised well cap, cracked casing, inadequate casing depth, flooding, or grout failure around the casing. Septic systems too close to the well are a common source. Heavy rain events that overwhelm drainage and carry surface contaminants into the groundwater are a seasonal risk.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Who is most at risk:</strong> Infants, elderly people, pregnant women, and immunocompromised individuals. Healthy adults typically recover from most coliform-related gastrointestinal illnesses. Vulnerable populations can become seriously ill or die.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> UV disinfection is the most effective whole-house treatment for bacteria and viruses without adding chemicals. Chlorination (continuous or shock) treats bacterial contamination. Reverse osmosis at the point of use removes bacteria and most other microbiological threats from drinking and cooking water. A positive total coliform result also requires structural investigation to find the contamination pathway.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Testing:</strong> Annual testing is the minimum recommended by both the CDC and EPA. Test immediately after any flooding, heavy rain event, or any work that opens the well system.
          </p>

          {/* E. coli */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>E. coli (Fecal Coliform)</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> E. coli is a specific bacterium whose presence in water definitively indicates fecal contamination from humans or animals. Unlike total coliform, E. coli in water is an unambiguous health emergency.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> E. coli strains cause gastrointestinal illness ranging from diarrhea and cramping to severe illness. E. coli O157:H7, the most dangerous strain, causes hemorrhagic colitis and can lead to hemolytic uremic syndrome (HUS), which causes kidney failure and death, particularly in children.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> Zero E. coli per 100 milliliter sample. No safe level exists. Any detection means stop using the water for drinking and cooking immediately.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Treatment:</strong> Same as total coliform. Shock chlorinate, retest, find and fix the contamination source. Consider UV disinfection as an ongoing protective measure.
          </p>

          {/* Giardia and Cryptosporidium */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Giardia and Cryptosporidium</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What they are:</strong> Protozoan parasites that survive in groundwater and are resistant to standard chlorination at typical doses.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Both cause giardiasis and cryptosporidiosis respectively, characterized by severe diarrhea, vomiting, and abdominal cramping lasting weeks. Cryptosporidium is particularly dangerous for immunocompromised individuals, with no effective treatment.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How they enter wells:</strong> Surface water infiltration, flooding, and wells near livestock operations. Shallow, unconfined aquifer wells are most vulnerable.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Treatment:</strong> Standard chlorination does not kill Cryptosporidium at typical doses. UV disinfection is effective against both organisms. Reverse osmosis membranes block both. A combination of fine filtration (1 micron or smaller absolute-rated filter) and UV treatment provides reliable protection.
          </p>
        </div>

        {/* Category 2: Inorganic Chemical */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Category 2</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-8'>Inorganic Chemical Contaminants</h2>

          {/* Nitrates */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Nitrates</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Nitrate is a naturally occurring compound in soil and water. At low levels it is benign. At elevated levels it is acutely dangerous to infants and has been linked to cancer in adults.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Nitrate in drinking water is converted to nitrite in the body, which interferes with the blood&apos;s ability to carry oxygen. In infants under six months, this causes methemoglobinemia &mdash; &ldquo;blue baby syndrome&rdquo; &mdash; in which the infant&apos;s skin turns blue due to oxygen deprivation. This condition can cause brain damage and death rapidly. The EPA&apos;s 10 mg/L limit is specifically set to protect infants. Adults can tolerate higher levels but long-term exposure above 10 mg/L has been associated with increased colorectal cancer risk.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> 10 mg/L (MCL). The MCLG is also 10 mg/L. No safe level for infants under six months &mdash; do not use well water above 10 mg/L to prepare formula, regardless.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Where it comes from:</strong> Chemical fertilizers and manure applied to agricultural land are the dominant source. Poorly maintained or improperly located septic systems are a residential source. Concentrated animal feeding operations (CAFOs) are a major regional source. Nitrate is highly mobile in water and moves readily through porous soil into groundwater.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Regional prevalence:</strong> Highest in the Midwest Corn Belt (Iowa, Illinois, Indiana, Ohio, Nebraska, Kansas), the Mid-Atlantic agricultural regions, and California&apos;s Central Valley. Well owners near any agricultural land or feedlot operation should test annually. Southeast Minnesota has a federally recognized nitrate contamination crisis requiring ongoing state and EPA intervention.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> Reverse osmosis is the most effective point-of-use treatment for nitrates. Ion exchange (anion exchange, distinct from water softeners) removes nitrates at the whole-house level. Distillation removes nitrates. Standard activated carbon filters and water softeners do not remove nitrates.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Testing:</strong> Annual testing is the minimum. Test more frequently if you have an infant, are pregnant, or if your well is in an agricultural area. Nitrate levels can change seasonally, with the highest concentrations typically occurring in spring when fertilizer runoff is highest.
          </p>

          {/* Arsenic */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Arsenic</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Arsenic is a naturally occurring element found in bedrock and soil throughout the United States. It dissolves into groundwater through natural geochemical processes, particularly in certain rock formations. It has no taste, odor, or color at dangerous concentrations. You cannot know it is in your water without testing.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Arsenic is classified as a human carcinogen by the EPA and the International Agency for Research on Cancer. Long-term consumption of water with arsenic above the EPA limit increases the risk of bladder, lung, and skin cancer. Arsenic is also linked to cardiovascular disease, diabetes, neurological effects, and skin lesions. The World Health Organization notes that arsenic health effects appear at levels below the current US standard of 10 ppb, leading some public health experts to advocate for a lower limit of 3 ppb.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> 10 micrograms per liter (10 ppb or 10 parts per billion) MCL. This is the enforceable standard for public water systems. Private wells are not regulated but should use this as the action threshold.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Regional prevalence:</strong> Arsenic is a national problem but concentrated in specific geologies. The highest prevalence is in:
          </p>
          <ul className='space-y-2 mb-4'>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>New England (particularly Maine, New Hampshire, Massachusetts) &mdash; granite bedrock geology</li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>Upper Midwest (Minnesota, Wisconsin, Michigan, North Dakota)</li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>Southwest (Nevada, Arizona, New Mexico, California Central Valley)</li>
            <li className='text-slate-700 leading-relaxed pl-4 border-l-2' style={{ borderColor: '#1D9E75' }}>Mountain West (Wyoming, Montana, Idaho)</li>
          </ul>
          <p className='text-slate-700 leading-relaxed mb-4'>
            The USGS found that 1 in 10 wells in Maine exceeds the federal arsenic standard. A USGS national study found arsenic exceeded health benchmarks in 13 percent of private wells tested. USGS research also notes that deeper bedrock wells in certain geologies may have higher arsenic concentrations than shallow wells, contradicting the intuition that deeper means safer.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> Reverse osmosis is the most effective point-of-use treatment, removing over 95 percent of arsenic. Adsorptive media filters (iron-based or zirconium-based) are effective at the whole-house level for arsenic removal. Water softeners do not remove arsenic. Treatment cost: RO system $200 to $600 for point-of-use; whole-house arsenic treatment $1,500 to $4,000.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Testing:</strong> Test once as a baseline regardless of region. Test every 3 to 5 years in low-risk areas. Test annually in high-arsenic geology regions.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            Arsenic is one of the most dangerous well water contaminants because it is colorless, tasteless, and linked to multiple cancers at levels above 10 parts per billion. For a complete guide to testing and treating arsenic in well water, see our dedicated article on <a href='/guides/arsenic-in-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>arsenic in well water</a>.
          </p>

          {/* Lead */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Lead</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Lead rarely occurs naturally in groundwater at dangerous levels. The source of lead in drinking water is almost always the household plumbing: lead pipes, lead solder joints, and brass fixtures containing lead alloys. As water sits in pipes, it corrodes the lead components and absorbs lead. Water that is acidic (low pH) or soft (low mineral content) is more corrosive and leaches more lead.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Lead is a neurotoxin with no safe level of exposure in children. The CDC states that no safe blood lead level has been identified in children. Lead causes developmental delays, learning disabilities, reduced IQ, hearing problems, and behavior disorders. In adults, lead causes hypertension, kidney disease, and reproductive problems. Lead exposure in pregnancy causes premature birth, low birth weight, and developmental harm to the fetus.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> Action Level of 15 micrograms per liter (15 ppb). This is not an MCL &mdash; it is a level that triggers action if more than 10 percent of samples in a public system exceed it. The EPA&apos;s MCLG for lead is zero, reflecting the position that no level of lead is safe.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Who is at highest risk:</strong> Homes built before 1986 when lead solder was banned in plumbing. Homes with original lead service lines. Homes with brass fixtures manufactured before 2014.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>The first-draw test:</strong> Lead testing requires collecting the first water drawn from a faucet that has sat idle for at least 6 to 8 hours &mdash; called a first-draw sample. This water has been in contact with plumbing for the longest time and shows the maximum potential lead exposure. If you use filtered water for drinking, the filter should be bypassed for the lead sample collection.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> Certified point-of-use filters (NSF/ANSI Standard 53 for lead reduction) are effective and affordable. Reverse osmosis removes lead. Replacing lead pipes and fixtures eliminates the source.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Testing:</strong> Test once in any home built before 1986 that has never been tested for lead. Retest after any plumbing work. New parents should test before feeding a new infant from the tap.
          </p>

          {/* Manganese */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Manganese</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Manganese is a naturally occurring metal found in soil and bedrock, commonly coexisting with iron in groundwater. It is one of the most underdiagnosed well water concerns because it is primarily known as an aesthetic contaminant (black staining) while its health effects at elevated concentrations receive inadequate attention.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> At low concentrations, manganese is an essential nutrient. At elevated levels, it is a neurological concern. Research has linked chronic exposure to manganese above 0.1 mg/L to neurological effects in children, including problems with memory, attention, and motor skills. The EPA Health Advisory for manganese is 0.3 mg/L, based on neurological concerns. The Minnesota Department of Health explicitly recommends testing well water for manganese before allowing an infant to drink it.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> Secondary MCL of 0.05 mg/L (aesthetic standard). Health Advisory of 0.3 mg/L. The Secondary MCL is an aesthetic standard for staining. The Health Advisory is the health-based threshold. Both matter for private well owners.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How to recognize it:</strong> Black or dark gray staining on sinks, fixtures, and laundry. A bitter or metallic taste distinct from iron. Black particles or dark sediment.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Treatment:</strong> Oxidizing filters with manganese greensand media are the standard whole-house treatment. Air injection oxidizing filters remove both iron and manganese together and are the most common residential treatment. Water softeners have limited effectiveness against manganese.
          </p>

          {/* Iron */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Iron</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Iron is the most common aesthetic complaint in private well water. It is virtually universal in certain groundwater formations. Iron is not a health hazard at typical well concentrations &mdash; the EPA standard is set for aesthetics, not health. However, elevated iron creates conditions where harmful bacteria (iron bacteria) can thrive, and the staining and taste impacts are significant.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> Secondary MCL of 0.3 mg/L (aesthetic standard only, not a health standard).
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Forms of iron in well water:</strong> Ferrous (dissolved, clear-water iron) &mdash; invisible in the tap but turns orange-brown when exposed to air. Ferric (oxidized, red-water iron) &mdash; already visible as orange-brown particles. Iron bacteria &mdash; microorganisms that feed on iron and create slime, staining, and musty odors. See the <Link href='/problems/brown-rusty-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>brown or rusty water guide</Link> for complete diagnosis.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> Depends on the form and concentration. Water softeners for ferrous iron under 3 mg/L. Air injection oxidizing filters for higher concentrations and for ferric iron. Chemical injection (chlorine or hydrogen peroxide) for very high concentrations or iron bacteria.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            Iron is the most common well water contaminant in the United States, affecting the majority of private wells to some degree. Unlike arsenic or bacteria, iron is not a serious health threat at typical residential levels; the costs are aesthetic (orange staining on fixtures and laundry) and financial (early appliance failure and plumbing damage totaling thousands of dollars over 20 years). For a complete guide to identifying which of the four iron types you have and which treatment works for each, see our <Link href='/guides/iron-in-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>iron in well water guide</Link>.
          </p>

          {/* pH and TDS */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>pH and Total Dissolved Solids: The Indicator Metrics</h3>
          <p className='text-slate-700 leading-relaxed mb-8'>
            pH and total dissolved solids (TDS) are included in the EPA&apos;s four recommended annual tests not because they are directly dangerous at typical levels, but because they indicate other risks and changes. Low pH (acidic water, below 6.5) corrodes plumbing and leaches lead and copper into the water &mdash; this is why pH testing matters even when the water looks and tastes fine. High TDS indicates elevated dissolved mineral content. Changes in TDS over time signal changes in water quality that warrant investigation even if no specific contaminant has been identified. Think of pH and TDS as early warning indicators: stable results are reassuring, and changes prompt investigation.
          </p>

          {/* Radon */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Radon</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Radon is a naturally occurring radioactive gas produced by the decay of uranium and radium in rock and soil. It dissolves into groundwater and enters homes when water is used. When water containing dissolved radon hits the air &mdash; during showering, running the dishwasher, doing laundry &mdash; radon gas is released into the household air. Most radon in well water is subsequently inhaled, not ingested. The Surgeon General ranks radon as the second-leading cause of lung cancer in the United States, behind smoking.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Lung cancer from inhalation of radon gas released from water use. The risk from ingestion is much lower than the risk from inhalation. Radon released from well water during showers and other household water use can contribute meaningfully to indoor air radon levels in high-radon geologies.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standard:</strong> No enforceable MCL for radon in private wells. The EPA proposed a Multimedia Mitigation (MMM) approach with guidance of 300 to 4,000 pCi/L for water radon, but this was never finalized. A commonly used rule of thumb from the EPA: for every 10,000 pCi/L of radon in water, indoor air radon increases by approximately 1 pCi/L. The EPA action level for air radon is 4 pCi/L.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Regional prevalence:</strong> Radon in well water is highest in areas with granite, schist, and shale bedrock formations. New England is the most affected region &mdash; New Hampshire is sometimes called the Granite State for a reason. Other high-radon regions include Pennsylvania and the Appalachian range, Iowa, Colorado, and parts of the Rocky Mountain states.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> Aeration systems (packed tower aerators or diffused bubble aerators) are the most effective whole-house treatment for radon in water, removing 95 to 99 percent. Activated carbon filters remove radon at the point of use but concentrate the radon in the filter itself, which becomes a radiation source and must be disposed of carefully. Cost: whole-house aeration $3,000 to $5,000.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Testing:</strong> Test if you are in a high-radon geology region, particularly New England and Appalachia. Test if indoor air radon testing shows elevated levels and you have a private well. Mail-in test kits cost $25 to $109.
          </p>

          {/* Uranium */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Uranium</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What it is:</strong> Uranium is a naturally occurring radioactive element found in certain rock formations, particularly granites and phosphate-bearing rocks. It dissolves into groundwater in specific geologies and is rarely detected unless tested specifically.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Uranium primarily damages the kidneys (it is chemically toxic, not just radioactive) and is a weak carcinogen. The EPA MCL for uranium is 30 micrograms per liter.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Regional prevalence:</strong> New England granite regions (coexists with arsenic and radon), portions of the Rocky Mountain West, areas with phosphate mining history.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Treatment:</strong> Reverse osmosis removes uranium effectively. Ion exchange and lime softening are also effective.
          </p>
        </div>

        {/* Category 3: Organic Chemical */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Category 3</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-8'>Organic Chemical Contaminants</h2>

          {/* PFAS */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>PFAS (Per- and Polyfluoroalkyl Substances)</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What they are:</strong> PFAS are a family of thousands of synthetic chemicals used since the 1940s in nonstick cookware coatings, stain-resistant fabrics, food packaging, firefighting foam (AFFF), and hundreds of industrial applications. They are called &ldquo;forever chemicals&rdquo; because they do not break down in the environment or in the human body. They bioaccumulate over a lifetime of exposure.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Long-term exposure to PFAS has been linked to kidney and testicular cancer, thyroid disease, high cholesterol, immune system suppression, hormone disruption, and developmental effects in children and fetuses. The health research is ongoing and the list of documented effects continues to expand.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>EPA standards (current as of 2026):</strong> In April 2024, the EPA finalized the first enforceable MCLs for PFAS in public drinking water: 4 parts per trillion (ppt) for PFOA and PFOS individually, and 10 ppt for PFHxS, PFNA, and HFPO-DA (GenX chemicals). In May 2025, the EPA confirmed it would retain the 4 ppt MCLs for PFOA and PFOS while extending the compliance deadline to 2031 and proposing to rescind standards for the other four PFAS pending re-evaluation. These MCLs apply to public water systems, not private wells &mdash; but they are the best available health-based guidance for private well owners.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Private well exposure:</strong> The USGS found in a 2023 study that 45 percent of US tap water samples, both from public systems and private wells, contained at least one PFAS compound. Private wells had roughly the same PFAS detection rate as public water systems. USGS estimates that approximately 20 percent of private wells contain PFAS.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Where PFAS contamination is most concentrated:</strong> Military installations and airports where AFFF firefighting foam was used and stored. Industrial facilities that manufactured or used PFAS-containing products. Areas where wastewater treatment plant biosolids (sewage sludge containing PFAS) were applied to agricultural fields as fertilizer.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Testing:</strong> PFAS testing requires EPA Method 533 or EPA Method 537.1 at a laboratory specifically certified for these methods. Standard well water panels do not include PFAS. Cost: $150 to $300 for a panel covering 40 or more compounds. Several states (New York, Maine, Michigan) offer free PFAS testing for well owners in affected areas.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Treatment:</strong> Reverse osmosis and granular activated carbon (GAC) filters are the two most effective treatment options, both achieving significant PFAS reduction. Point-of-use RO systems cost $200 to $600. Whole-house GAC systems cost $1,500 to $3,500. GAC media requires replacement based on usage volume.
          </p>

          {/* VOCs */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Volatile Organic Compounds (VOCs)</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What they are:</strong> VOCs are a broad class of carbon-based chemicals including solvents, fuels, and industrial chemicals. Common well water VOCs include benzene, toluene, ethylbenzene, and xylenes (BTEX compounds from petroleum), trichloroethylene (TCE) and tetrachloroethylene (PCE) from dry cleaning solvents and industrial degreasers, and MTBE from gasoline additives.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> VOCs are carcinogens and neurotoxins at elevated concentrations. Benzene causes leukemia. TCE and PCE are probable human carcinogens. Many VOCs also cause liver and kidney damage with chronic exposure.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>How they enter wells:</strong> Underground storage tank leaks (gas stations, fuel oil tanks) are the most common residential source. Industrial spills and improper chemical disposal. Dry cleaning establishments with PCE. VOCs are mobile in groundwater and can migrate significant distances from their source, contaminating wells far from the original release point.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Who needs to test:</strong> Any well within 1 mile of a gas station, dry cleaner, industrial facility, landfill, or known contamination site. Wells in urban and suburban areas with dense commercial activity. Wells near former military sites.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> Activated carbon filtration removes most VOCs. Reverse osmosis with an activated carbon pre-filter provides comprehensive protection. Aeration also removes volatile compounds.
          </p>
          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Testing cost:</strong> $100 to $250 for a VOC panel.
          </p>

          {/* Pesticides */}
          <h3 className='text-xl font-bold text-slate-900 mb-4'>Pesticides and Herbicides</h3>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>What they are:</strong> Agricultural chemicals applied to fields, orchards, golf courses, and residential lawns that migrate through soil into groundwater. Common concerns include atrazine (corn herbicide), glyphosate (broad-spectrum herbicide), chlorpyrifos (insecticide), and lindane (now banned but persistent in soil for decades).
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Health effects:</strong> Pesticides range from mildly harmful to acutely toxic depending on the compound. Many are endocrine disruptors. Atrazine is linked to developmental harm in fetuses and elevated cancer risk with long-term exposure. Many banned pesticides persist in groundwater because they degrade very slowly.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Who needs to test:</strong> Wells downslope from agricultural land, orchards, or golf courses. Wells in areas with known pesticide application history. Wells in rural areas where pesticide mixing and loading operations occur nearby.
          </p>
          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Treatment:</strong> Activated carbon filtration is effective for most pesticides. Reverse osmosis removes most pesticide residues.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            <strong>Testing cost:</strong> $100 to $200 for a pesticide panel.
          </p>
        </div>

        {/* Regional Testing Guide Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Regional Guide</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Contaminants You Test For Based on Where You Live</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Every well owner should test for the core four annually. Beyond that, use this regional and circumstantial guide to determine what additional testing applies to your situation.
          </p>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-4 font-bold text-slate-900'>If your well is...</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Test additionally for...</th>
                  <th className='text-left p-4 font-bold text-slate-900'>How often</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>In New England or granitic geology anywhere</td>
                  <td className='p-4 text-slate-700'>Arsenic, radon, uranium</td>
                  <td className='p-4 text-slate-700'>Once as baseline; every 3 to 5 years</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Near agricultural land or a feedlot</td>
                  <td className='p-4 text-slate-700'>Nitrates (more frequent), pesticides</td>
                  <td className='p-4 text-slate-700'>Nitrates annually; pesticides every 3 years</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Within 10 miles of a military base or airport</td>
                  <td className='p-4 text-slate-700'>PFAS</td>
                  <td className='p-4 text-slate-700'>Once as baseline; annually if any detection</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Near agricultural land where biosolids have been applied</td>
                  <td className='p-4 text-slate-700'>PFAS</td>
                  <td className='p-4 text-slate-700'>Once as baseline</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>In a home built before 1986</td>
                  <td className='p-4 text-slate-700'>Lead</td>
                  <td className='p-4 text-slate-700'>Once; retest after any plumbing work</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>In the Upper Midwest (Minnesota, Wisconsin, Michigan)</td>
                  <td className='p-4 text-slate-700'>Arsenic, manganese</td>
                  <td className='p-4 text-slate-700'>Once as baseline; every 3 to 5 years</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>In the Southwest or Mountain West</td>
                  <td className='p-4 text-slate-700'>Arsenic, uranium, fluoride</td>
                  <td className='p-4 text-slate-700'>Once as baseline</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Near an industrial facility, gas station, or dry cleaner</td>
                  <td className='p-4 text-slate-700'>VOCs</td>
                  <td className='p-4 text-slate-700'>Once; every 3 years if in high-risk area</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>In any area after flooding</td>
                  <td className='p-4 text-slate-700'>Bacteria, nitrates</td>
                  <td className='p-4 text-slate-700'>Immediately after and 2 weeks after disinfection</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>New to the home or new well</td>
                  <td className='p-4 text-slate-700'>Everything above relevant to your area</td>
                  <td className='p-4 text-slate-700'>Comprehensive baseline test</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Contaminant Quick Reference Table */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Reference</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Contaminant Quick Reference Table</h2>
          <div className='overflow-x-auto rounded-xl border border-slate-200'>
            <table className='w-full text-sm'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-4 font-bold text-slate-900'>Contaminant</th>
                  <th className='text-left p-4 font-bold text-slate-900'>EPA Limit</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Health Risk</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Tasteable / Visible</th>
                  <th className='text-left p-4 font-bold text-slate-900'>Requires Lab Test</th>
                </tr>
              </thead>
              <tbody className='divide-y divide-slate-100'>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Total coliform bacteria</td>
                  <td className='p-4 text-slate-700'>Zero detected</td>
                  <td className='p-4 text-slate-700'>Acute illness, indicator of pathogens</td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>E. coli</td>
                  <td className='p-4 text-slate-700'>Zero detected</td>
                  <td className='p-4' style={{ backgroundColor: '#FEF2F2' }}><span className='text-red-800 font-semibold'>Acute severe illness</span></td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Nitrates</td>
                  <td className='p-4 text-slate-700'>10 mg/L</td>
                  <td className='p-4 text-slate-700'>Blue baby syndrome in infants; cancer risk</td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Arsenic</td>
                  <td className='p-4 text-slate-700'>10 ppb</td>
                  <td className='p-4 text-slate-700'>Bladder, lung, skin cancer; cardiovascular</td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Lead</td>
                  <td className='p-4 text-slate-700'>15 ppb action level</td>
                  <td className='p-4' style={{ backgroundColor: '#FEF2F2' }}><span className='text-red-800 font-semibold'>Neurological damage, no safe level for children</span></td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes &mdash; first draw</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Manganese</td>
                  <td className='p-4 text-slate-700'>0.05 mg/L (aesthetic) / 0.3 mg/L (health)</td>
                  <td className='p-4 text-slate-700'>Neurological effects in children at high levels</td>
                  <td className='p-4 text-slate-700'>Black staining only</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Iron</td>
                  <td className='p-4 text-slate-700'>0.3 mg/L (aesthetic only)</td>
                  <td className='p-4' style={{ backgroundColor: '#F9FAFB' }}><span className='text-slate-500'>None at typical levels; enables iron bacteria</span></td>
                  <td className='p-4 text-slate-700'>Orange staining, taste</td>
                  <td className='p-4 text-slate-700'>Yes for quantification</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>PFAS (PFOA/PFOS)</td>
                  <td className='p-4 text-slate-700'>4 ppt MCL (public systems)</td>
                  <td className='p-4' style={{ backgroundColor: '#FEF2F2' }}><span className='text-red-800 font-semibold'>Cancer, thyroid, immune effects</span></td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes &mdash; specialized lab</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>VOCs</td>
                  <td className='p-4 text-slate-700'>Varies by compound</td>
                  <td className='p-4 text-slate-700'>Cancer, organ damage</td>
                  <td className='p-4 text-slate-700'>Gasoline/solvent odor sometimes</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Radon</td>
                  <td className='p-4 text-slate-700'>No MCL for private wells</td>
                  <td className='p-4 text-slate-700'>Lung cancer (from inhalation)</td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Nitrites</td>
                  <td className='p-4 text-slate-700'>1 mg/L</td>
                  <td className='p-4 text-slate-700'>Same as nitrates, faster acting</td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Uranium</td>
                  <td className='p-4 text-slate-700'>30 ppb</td>
                  <td className='p-4 text-slate-700'>Kidney damage, carcinogen</td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Pesticides</td>
                  <td className='p-4 text-slate-700'>Varies by compound</td>
                  <td className='p-4 text-slate-700'>Cancer, endocrine disruption</td>
                  <td className='p-4 text-slate-700'>No</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>pH</td>
                  <td className='p-4 text-slate-700'>6.5 to 8.5 recommended</td>
                  <td className='p-4 text-slate-700'>Indicates corrosiveness (lead/copper risk)</td>
                  <td className='p-4 text-slate-700'>Not reliably</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-4 font-medium text-slate-900'>Hardness</td>
                  <td className='p-4 text-slate-700'>No health limit</td>
                  <td className='p-4' style={{ backgroundColor: '#F9FAFB' }}><span className='text-slate-500'>Scale buildup, appliance damage</span></td>
                  <td className='p-4 text-slate-700'>Soap scum</td>
                  <td className='p-4 text-slate-700'>Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What Your Water Test Results Mean */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Results</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What Your Water Test Results Mean</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            Receiving a lab report is one thing. Understanding what the numbers mean and what to do about them is another. Here is how to read and act on typical well water test results.
          </p>
          <div className='space-y-4'>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Total coliform: Absent</strong> &mdash; This is the passing result. No coliform bacteria detected. Annual retesting recommended.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Total coliform: Present</strong> &mdash; Stop using the water for drinking and cooking. Identify the contamination pathway (well cap, casing, flooding). Shock chlorinate and retest. Do not resume drinking the water until a retest shows &ldquo;absent.&rdquo;
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>E. coli: Present</strong> &mdash; Same immediate action as total coliform positive but more urgent. E. coli is definitive evidence of fecal contamination. Consider UV disinfection as an ongoing protective measure after resolving the source.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Nitrates below 10 mg/L</strong> &mdash; Safe for all uses including infant formula. Continue annual testing.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Nitrates above 10 mg/L</strong> &mdash; Do not use for infant formula or during pregnancy. Install reverse osmosis for drinking and cooking water. Investigate source (nearby fertilized fields, septic system).
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Arsenic at any detectable level above 5 ppb</strong> &mdash; Install reverse osmosis for drinking and cooking water. Consult your county health department about local geology and regional context.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Lead above 15 ppb</strong> &mdash; Do not use first-draw water for drinking or cooking, especially for infants and children. Install a certified lead-removal filter at the point of use. Investigate plumbing for lead pipes, solder, or brass fixtures.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>PFAS at any detectable level</strong> &mdash; The current best guidance based on EPA&apos;s 4 ppt health-based threshold for PFOA and PFOS: if detections are above 4 ppt, install reverse osmosis or GAC treatment for drinking and cooking water. Contact your state environmental agency for guidance and to inquire about any remediation programs.
              </p>
            </div>
          </div>
        </div>

        {/* Treatment Methods Matrix */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Treatment</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Treatment Methods and What They Remove</h2>
          <p className='text-slate-700 leading-relaxed mb-6'>
            No single treatment removes all contaminants. Choosing the right treatment requires knowing what you are treating.
          </p>
          <div className='space-y-4'>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Reverse osmosis (RO)</strong> removes: bacteria (most), arsenic, lead, nitrates, uranium, many PFAS, most heavy metals, most pesticides. Does not remove: radon (significantly), VOCs (partially), all bacteria. Best for: point-of-use drinking and cooking water treatment.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Activated carbon (GAC or block carbon)</strong> removes: chlorine, VOCs, many pesticides, PFAS (significantly, varies by compound), radon (partially), sediment. Does not remove: bacteria, nitrates, arsenic, lead (unless specifically rated), metals. Best for: VOCs, PFAS, taste and odor.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>UV disinfection</strong> removes: bacteria, viruses, Giardia, Cryptosporidium. Does not remove: any chemical contaminants. Requires clear water to work effectively. Best for: microbiological protection at the whole house.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Ion exchange (water softeners)</strong> removes: hardness minerals (calcium, magnesium), ferrous iron (low concentrations), some heavy metals (depends on resin type). Does not remove: bacteria, nitrates (standard softener), arsenic. Note: anion exchange specifically configured for nitrates does remove nitrates &mdash; this is different from a standard water softener.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Sediment filtration</strong> removes: particles, turbidity, some bacteria (large), sand, silt. Does not remove: dissolved chemicals, bacteria in general, any chemical contaminants. Best for: protecting downstream equipment.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Oxidizing filters (air injection or media-based)</strong> removes: ferrous and ferric iron, manganese, hydrogen sulfide. Does not remove: bacteria, chemical contaminants. Best for: iron and manganese treatment.
              </p>
            </div>
            <div className='bg-slate-50 rounded-lg p-4'>
              <p className='text-slate-700 leading-relaxed'>
                <strong>Aeration</strong> removes: radon (very effectively), hydrogen sulfide, dissolved gases, some VOCs. Does not remove: bacteria, metals, nitrates, PFAS. Best for: radon removal from well water.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What contaminants are most common in well water?</h3>
              <p className='text-slate-700 leading-relaxed'>
                The most commonly detected contaminants in private wells in the United States are coliform bacteria, nitrates, iron, manganese, arsenic, and hardness minerals. A USGS study found that 13 percent of private drinking water wells exceeded at least one federal health standard. The EPA estimates approximately 23 percent of private wells contain at least one contaminant at a level of health concern. Bacteria and nitrates are the most urgently dangerous. Arsenic and lead are the most common causes of long-term health risk from chronic exposure.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Can well water make you sick?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Yes. Contaminated well water causes gastrointestinal illness (bacteria), developmental harm in children (lead, manganese, nitrates), and increased cancer risk with long-term exposure (arsenic, radon, PFAS, VOCs). Most well water contaminants are tasteless, odorless, and colorless at dangerous concentrations. Clear water that looks and smells normal can still contain harmful levels of bacteria, arsenic, lead, or PFAS. Testing is the only way to know.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Is well water safe to drink without filtering?</h3>
              <p className='text-slate-700 leading-relaxed'>
                It depends entirely on what is in it. Well water from a properly constructed well in geology without natural contaminant problems and far from pollution sources may be safe without treatment. Well water with elevated arsenic, PFAS, lead, nitrates, or bacteria requires treatment. Annual testing establishes what is in your water and whether treatment is needed. Do not assume well water is safe without testing.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the most dangerous well water contaminant?</h3>
              <p className='text-slate-700 leading-relaxed'>
                For immediate risk: E. coli and pathogenic bacteria can cause serious illness within hours. For infants specifically: nitrates above 10 mg/L cause blue baby syndrome and can be fatal rapidly. For long-term chronic risk: arsenic causes cancer with prolonged exposure even at concentrations that produce no symptoms. Lead causes irreversible neurological damage in children with no safe exposure level.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Does a water softener filter well water contaminants?</h3>
              <p className='text-slate-700 leading-relaxed'>
                A standard water softener removes hardness minerals (calcium and magnesium) and low concentrations of ferrous iron. It does not remove bacteria, nitrates, arsenic, lead, PFAS, VOCs, or most other contaminants of health concern. Water softeners are appliance protection systems, not health protection systems. For health contaminants, you need a reverse osmosis system, UV disinfection, or a specific media filter designed for the contaminant.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I know if I need to filter my well water?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Test it first. Testing tells you what is actually in your water rather than what might be in it based on location or assumption. A comprehensive baseline test for your region costs $150 to $300 through a certified mail-in lab or state university extension laboratory. Once you know what is in your water, you can choose treatment specifically designed to address what you actually have. Buying treatment equipment before testing often results in the wrong equipment for the actual problem.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>What do PFAS do to health?</h3>
              <p className='text-slate-700 leading-relaxed'>
                PFAS (per- and polyfluoroalkyl substances) are synthetic chemicals that do not break down in the body and accumulate over a lifetime. Research links long-term PFAS exposure to kidney and testicular cancer, thyroid disease, high cholesterol, immune suppression, and developmental effects in children and fetuses. The EPA set an MCL of 4 parts per trillion for PFOA and PFOS in public water systems in 2024, reflecting the very low concentrations at which health effects appear. Private well owners near military bases, airports, or industrial facilities should test specifically for PFAS.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I find what contaminants are common in my area&apos;s groundwater?</h3>
              <p className='text-slate-700 leading-relaxed'>
                Your county health department or state environmental agency is the best source for local groundwater quality information. State university extension programs (Penn State Extension, University of Minnesota Extension, and others) publish county-level water quality data and contamination risk maps. The EPA&apos;s Private Wells program at <a href='https://www.epa.gov/privatewells' target='_blank' rel='noopener noreferrer' className='font-semibold underline' style={{ color: '#1D9E75' }}>epa.gov/privatewells</a> lists state-by-state resources. The USGS National Water Information System provides historical groundwater quality data by aquifer and region.
              </p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Glossary</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Glossary</h2>
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Maximum Contaminant Level (MCL)</h3>
              <p className='text-slate-700 leading-relaxed'>
                The highest level of a contaminant allowed in public drinking water systems, set by the EPA under the Safe Drinking Water Act. Private well water is not regulated by the Safe Drinking Water Act, so MCLs are not legally enforceable for private wells. However, MCLs represent the best available health-based guidance for private well owners to use as action thresholds.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Maximum Contaminant Level Goal (MCLG)</h3>
              <p className='text-slate-700 leading-relaxed'>
                The level of a contaminant below which no known or expected health risk exists. MCLGs are non-enforceable public health goals. For many carcinogens (lead, arsenic, PFAS), the MCLG is zero, meaning there is no known safe level.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Secondary Maximum Contaminant Level (SMCL)</h3>
              <p className='text-slate-700 leading-relaxed'>
                An EPA standard set for aesthetic reasons (taste, odor, color, staining) rather than health protection. Iron (0.3 mg/L), manganese (0.05 mg/L), and hydrogen sulfide have SMCLs. These are non-enforceable guidelines. Note that manganese also has a health-based advisory (0.3 mg/L) separate from its aesthetic SMCL.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Health Advisory</h3>
              <p className='text-slate-700 leading-relaxed'>
                A non-enforceable EPA guidance level based on health effects data. Health advisories are issued when enforceable MCLs do not exist or when health effects are observed below the established MCL. Manganese has a health advisory of 0.3 mg/L for neurological effects.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>First-Draw Sample</h3>
              <p className='text-slate-700 leading-relaxed'>
                A water sample collected from a faucet immediately upon opening, without running the water first, after the water has been sitting in pipes for at least 6 to 8 hours. First-draw sampling is required for lead testing because it captures the water most likely to have leached lead from plumbing fixtures during the standing period.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-1'>Coliform Bacteria</h3>
              <p className='text-slate-700 leading-relaxed'>
                A group of bacteria used as indicators of water contamination. Total coliform includes many species found in soil, vegetation, and the intestinal tracts of warm-blooded animals. Fecal coliform (E. coli) is a subset whose presence definitively indicates fecal contamination. Total coliform presence in a well indicates a contamination pathway exists; E. coli presence is an immediate health emergency.
              </p>
            </div>
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

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Related</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/well-water-treatment-options' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Treatment Options</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/cost-guides/well-water-testing-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Testing Cost</span>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Smells Like Sulfur</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
            <Link href='/problems/well-water-tastes-bad' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Tastes Bad</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/guides/complete-well-guide' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>The Complete Guide to Private Well Water Systems</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
