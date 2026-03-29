import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Water Tastes Bad: What Each Taste Tells You and How to Fix It | The Well Guide',
  description: 'A complete taste-to-cause diagnostic guide for private well water. Every bad taste (metallic, sulfur, earthy, salty, bitter, chemical, sweet) mapped to its specific cause, health risk level, required test, and treatment. Know what your water is telling you.',
  openGraph: {
    title: 'Well Water Tastes Bad: What Each Taste Tells You and How to Fix It',
    description: 'A complete taste-to-cause diagnostic guide for private well water. Every bad taste mapped to its specific cause, health risk level, required test, and treatment.',
    url: 'https://www.thewell.guide/problems/well-water-tastes-bad',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/well tastebad.jpg', width: 1200, height: 630, alt: 'Person holding a glass of well water up to the light with a concerned expression, examining water quality in a kitchen' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/problems/well-water-tastes-bad' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my well water taste metallic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Metallic-tasting well water most commonly indicates elevated iron or manganese - naturally occurring minerals in groundwater. Iron gives a rusty, blood-like metallic taste; manganese gives a more bitter metallic flavor. A second cause is low pH corroding metal pipes, which dissolves iron, copper, zinc, and potentially lead into the water. Orange-brown staining confirms iron. Blue-green staining confirms copper. Test for iron, manganese, and pH to confirm and choose the correct treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well water taste like rotten eggs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rotten egg taste and smell is hydrogen sulfide (H2S), either dissolved in groundwater from geological sources or produced by sulfur-reducing bacteria. If only hot water smells, the water heater\'s anode rod is the most likely source. If both hot and cold water smell, H2S is in the well water itself. H2S is an aesthetic problem at typical well concentrations but corrodes plumbing and indicates sulfur bacteria that may warrant shock chlorination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is it safe to drink well water that tastes bad?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the cause. Metallic, sulfur, earthy, salty, and bitter tastes are usually aesthetic problems from naturally occurring minerals - unpleasant but not immediately dangerous. Chemical, gasoline, or petroleum tastes require stopping water use immediately. Most critically: the dangerous contaminants - arsenic, nitrates, lead, PFAS, E. coli - have no taste at all. Bad taste does not mean dangerous water, and good taste does not mean safe water. Test annually regardless.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well water suddenly taste different?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A sudden taste change indicates a contamination event. Common causes include surface water intrusion after flooding or heavy rain, a new contamination source nearby, well equipment failure, or residual chlorine from shock chlorination. Test within the week of any sudden taste change regardless of what the difference is.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well water taste salty?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Salty-tasting well water contains elevated chloride, sodium, or sulfate from natural sources (coastal saltwater intrusion, geological deposits, road de-icing salt runoff) or a malfunctioning water softener. If the salty taste appeared suddenly, test immediately for bacteria - human and animal waste is high in sodium and chlorides, and sudden saltiness can indicate sewage contamination.',
      },
    },
    {
      '@type': 'Question',
      name: 'What causes earthy or musty-tasting well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Earthy, musty, or swampy well water taste most commonly comes from iron bacteria forming biofilm in the well casing, pipes, or pressure tank. Iron bacteria produce a gelatinous orange-brown slime visible in toilet tanks. Tannins from decaying organic matter in peaty soils also produce earthy taste with yellow water color. Test for iron bacteria and tannins. Shock chlorination addresses iron bacteria but often requires ongoing maintenance as they recolonize.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my well water taste like chemicals or gasoline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chemical or gasoline taste in well water is a contamination emergency indicating volatile organic compounds (VOCs) such as benzene or MTBE from petroleum. The most common source is a leaking underground storage tank at a nearby gas station. Stop using the water for drinking or cooking immediately. Test for a full VOC panel at a certified laboratory and contact your state environmental agency.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can a water filter fix bad-tasting well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only when properly matched to the specific cause. Activated carbon removes earthy tastes, tannins, hydrogen sulfide, and VOCs. Reverse osmosis removes salty taste, metallic taste from dissolved metals, and most dissolved contaminants. Oxidizing filtration removes iron and manganese. pH neutralizing filtration addresses acidic water and metallic taste from pipe corrosion. Test first to identify the cause, then choose the treatment designed for what you actually have.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Water Tastes Bad: What Each Taste Tells You and How to Fix It',
  description: 'A complete taste-to-cause diagnostic guide for private well water. Every bad taste mapped to its specific cause, health risk level, required test, and treatment.',
  image: 'https://www.thewell.guide/well tastebad.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/problems/well-water-tastes-bad',
}

export default function WellWaterTastesBad() {
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
          src='/well tastebad.jpg'
          alt='Person holding a glass of well water up to the light with a concerned expression, examining water quality in a kitchen'
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
            Well Water Tastes Bad:<br />
            What Each Taste Tells You<br />
            <span style={{ color: '#5DCAA5' }}>and How to Fix It</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            The taste tells you what to test for and how urgently to act. Start with the diagnostic table.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated Mar 2026 &middot; 12 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Problems', href: '/problems' },
        { label: 'Well Water Tastes Bad' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Bad-tasting well water is your water communicating a specific problem. The taste tells you what to test for and how urgently to act. Metallic taste means iron, manganese, or low pH corroding your pipes. Sulfur or rotten egg taste means hydrogen sulfide or sulfur bacteria. Earthy or musty taste means iron bacteria, biofilm, or organic matter. Salty taste means elevated sodium, chlorides, or sulfates. Bitter taste means copper corrosion, tannins, or high total dissolved solids. A chemical or gasoline taste is an emergency requiring immediate water testing and the only taste on this list that warrants stopping water use before testing. Sweet taste is usually harmless elevated minerals. Most bad tastes in well water are aesthetic problems with a clear fix. A few are health warnings. This guide maps every taste to its cause, its health risk, and what to do next.</p>
        </div>

        {/* Critical Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm'>One critical fact before diagnosing: most truly dangerous well water contaminants have no taste at all. Arsenic, nitrates, lead, PFAS, E. coli, and radon are all tasteless, odorless, and colorless at dangerous concentrations. A well that tastes fine may still be unsafe. Annual testing covers what your taste buds cannot detect. This guide addresses what you can taste, but it is not a substitute for testing.</p>
        </div>

        {/* Taste Diagnostic Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Taste Diagnostic Table: Start Here</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Find your taste, confirm the urgency level, and jump to the relevant section below.</p>

          <div className='overflow-x-auto rounded-lg border border-slate-200'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>What Your Water Tastes Like</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Most Likely Cause</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Health Risk</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Act Now?</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Metallic, like pennies or blood</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Iron, manganese, zinc, or low pH</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Low (aesthetic) unless lead</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test; urgent if pipes are old</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Rotten eggs or sulfur</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hydrogen sulfide or sulfur bacteria</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Low (aesthetic) but corrosive</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test within 1 to 2 weeks</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Earthy, musty, or swampy</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Iron bacteria, biofilm, or organic matter</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Low to moderate</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test within 1 to 2 weeks</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Salty or brackish</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Sodium, chlorides, or sulfates</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Low unless near coast or sewage</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test within 1 month</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Bitter, like medicine or baking soda</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Copper, tannins, or high TDS</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Low unless copper above 1.3 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test within 1 month</td>
                </tr>
                <tr style={{ backgroundColor: '#FCEBEB' }}>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Chemical, gasoline, or solvent</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>VOCs or MTBE from fuel contamination</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>High &mdash; stop using water</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Stop use and test immediately</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Chlorine or bleach</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Residual from shock chlorination</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>None &mdash; wait and flush</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Flush and retest</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Sweet</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Dissolved calcium and magnesium</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>None</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>No action needed</td>
                </tr>
                <tr style={{ backgroundColor: '#FAEEDA' }}>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Sudden change with no specific taste</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Any contaminant event</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Unknown &mdash; could be high</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Test immediately</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Metallic Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Taste</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Metallic Taste</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>What it is:</strong> A metallic taste in well water (often described as tasting like pennies, blood, or old pipes) is one of the most common well water complaints. It has several distinct causes that require different responses.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Iron and Manganese</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The most common cause of metallic-tasting well water. Iron and manganese occur naturally in groundwater throughout the United States and are particularly common in the Midwest, Northeast, and Mountain West. Iron gives water a rusty, metallic, or slightly blood-like taste. Manganese gives a more bitter metallic or astringent taste.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>At typical well concentrations, neither iron nor manganese is a health hazard. The EPA{`'`}s secondary standards are 0.3 mg/L for iron and 0.05 mg/L for manganese, both set for aesthetic reasons only. However, manganese above 0.3 mg/L does have a health advisory based on potential neurological effects in children, a distinction the EPA{`'`}s aesthetic standard does not reflect. Minnesota Department of Health specifically recommends testing well water for manganese before infants drink it.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Both metals produce visible secondary symptoms: iron causes orange-brown staining on sinks, laundry, and toilets. Manganese causes black or dark gray staining. If you have either of these staining patterns alongside a metallic taste, you have confirmed the cause.</p>

          {/* Manganese Health Advisory Callout */}
          <div className='mb-6 rounded-lg p-5' style={{ backgroundColor: '#FAEEDA', border: '1px solid #854F0B' }}>
            <p className='text-slate-900 text-sm leading-relaxed'><strong>Manganese health advisory &mdash; important for families with young children:</strong> The EPA{`'`}s aesthetic standard for manganese is 0.05 mg/L, but the EPA{`'`}s separate health advisory is 0.3 mg/L &mdash; six times higher &mdash; based on potential neurological effects in children with chronic exposure. Water that meets the aesthetic standard (no visible staining, no strong metallic taste) can still exceed the health advisory. The Minnesota Department of Health specifically recommends testing well water for manganese before infants drink it, regardless of taste. If you have young children or are pregnant, request manganese on your panel and compare the result to 0.3 mg/L, not just 0.05 mg/L.</p>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Test for:</strong> Iron, manganese, hardness. A basic metals panel covers both.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'><strong>Treatment:</strong> Oxidizing filtration (air injection or media filter) removes iron and manganese together. Water softeners remove low concentrations of ferrous iron (under 3 mg/L) but not ferric iron or manganese above certain thresholds. For more detail, see the <Link href='/problems/brown-rusty-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>brown water guide</Link>.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Low pH (Acidic Water)</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Water with pH below 6.5 is acidic enough to corrode metal pipes, fittings, and solder joints. As water moves through the system it dissolves copper, zinc, iron, and sometimes lead from those surfaces, producing a metallic taste. The taste intensifies if water sits in pipes overnight.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The first-flush test confirms this cause: fill a glass from the tap immediately after the water has been sitting overnight (without running any fixtures). If the metallic taste is significantly worse in the first-flush sample versus a sample taken after running water for a minute, the source is pipe corrosion from acidic water.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Health risk:</strong> If your pipes contain lead solder or lead service connections (common in homes built before 1986), acidic water is a serious concern. Lead dissolves readily in acidic water, is tasteless, and causes irreversible neurological damage in children with no safe exposure level.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Test for:</strong> pH, lead, copper. If you have old plumbing, use first-flush sampling protocol for lead.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'><strong>Treatment:</strong> pH neutralizing filter (calcite or magnesia media) raises pH and stops the corrosive action. Reverse osmosis removes dissolved metals at the point of use.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Zinc</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>Zinc enters water when galvanized steel pipes corrode. Galvanized pipes were common in homes built before 1960. Zinc produces a distinctly metallic taste that may also have a slight sweet or dry edge. At drinking water concentrations zinc is not a health hazard, but its presence signals corroding pipes worth evaluating.</p>
        </div>

        {/* Rotten Egg or Sulfur Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Taste</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Rotten Egg or Sulfur Taste</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>What it is:</strong> The unmistakable rotten egg or sulfur smell and taste in well water is caused by hydrogen sulfide (H2S), either dissolved in the groundwater from geological sources or produced by sulfur-reducing bacteria in the well, water heater, or distribution system.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Locating the Source</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Before testing, a simple location test narrows the diagnosis. This matters because the fix is entirely different depending on where the hydrogen sulfide is being generated.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Does only the hot water smell?</strong> The most common cause of rotten egg smell limited to hot water is the water heater{`'`}s sacrificial anode rod. The anode rod is a magnesium or aluminum rod designed to corrode instead of the tank. When it reacts with water containing natural sulfates, it produces hydrogen sulfide. The fix is replacing the anode rod with an aluminum/zinc anode or switching to a different rod type.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Does the cold water also smell after running briefly?</strong> The hydrogen sulfide is in the well water itself or in the pipes. Fill a glass and carry it to another room. If the smell persists in the glass, it is in the water. If it dissipates within 30 seconds, it is the sink drain.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>Does the smell disappear within 30 seconds in a glass?</strong> The source is almost certainly the drain, not the water.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Groundwater Hydrogen Sulfide</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>In areas with shale, sandstone, or volcanic rock geology &mdash; particularly the Mountain West, Southeast coastal plain, and parts of New England, where hydrogen sulfide occurs naturally as organic material decomposes in oxygen-poor groundwater. Concentrations can range from trace levels (detectable at 0.05 ppm, the human nose threshold) to several ppm. The EPA{`'`}s secondary standard for hydrogen sulfide is 0.3 mg/L.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Health risk:</strong> At typical well concentrations, hydrogen sulfide is an aesthetic concern, not a health threat. It is corrosive to iron, steel, copper, and brass plumbing components and will accelerate pipe deterioration over time.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Test for:</strong> Hydrogen sulfide, sulfate, iron. Note: H2S degasses rapidly from water samples. The test requires special sampling bottles and immediate lab analysis. Standard mail-in tests are unreliable for H2S. Test onsite with a field test kit or have a water professional collect the sample.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>Treatment:</strong> Aeration oxidizes and removes H2S effectively. Oxidizing filters (air injection) combined with activated carbon filtration remove both H2S and the resulting sulfur particles. Continuous chlorination followed by carbon filtration works for severe cases.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Sulfur Bacteria</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Sulfur-reducing bacteria are naturally occurring microorganisms that use sulfates as an energy source, converting them to hydrogen sulfide. They colonize wells, pipes, pressure tanks, and water heaters. Iron bacteria often coexist with sulfur bacteria and can produce a combined metallic-sulfur taste.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>Sulfur bacteria are not pathogenic but indicate conditions where other bacteria may thrive. A well with sulfur bacteria should be shock chlorinated. See the <a href='/guides/how-to-shock-chlorinate-well' className='font-semibold underline' style={{ color: '#1D9E75' }}>shock chlorination guide</a>. Note that chlorination suppresses sulfur bacteria but often does not eliminate them permanently. Recurrence is common and may eventually require continuous disinfection.</p>
        </div>

        {/* Earthy, Musty, or Swampy Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Taste</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Earthy, Musty, or Swampy Taste</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>What it is:</strong> An earthy, musty, damp basement, or swamp-like taste in well water has several causes ranging from harmless to concerning.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Locate the Source First</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Before testing for earthy taste, a 60-second self-test narrows the diagnosis. Run the cold water tap for 60 seconds. Fill a glass. Carry it to a different room away from the sink &mdash; kitchen, living room, anywhere the drain is not nearby. Swirl the glass and taste.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If the earthy taste is gone or significantly weaker in the glass: the source is almost certainly drain biofilm, not the water. The sink drain contains a thin bacterial film that releases earthy compounds when water flows past it. This is not a water quality problem. Clean the drain with a diluted bleach solution and brush. The taste will resolve.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If the earthy taste persists at the same intensity in the glass: the source is in the water itself. Continue to the Iron Bacteria and Organic Matter sections below and test.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Iron Bacteria and Biofilm</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Iron bacteria are naturally occurring microorganisms that feed on iron in groundwater. They form a gelatinous orange, brown, or reddish slime (biofilm) on the inside of well casings, pipes, pressure tanks, and fixtures. The biofilm itself produces a distinctly earthy, swampy, or petroleum-like taste. You may also notice:</p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Reddish-brown slime visible on the inside of toilet tanks</li>
            <li className='text-slate-700 text-sm'>Orange or brown deposits in the pressure tank</li>
            <li className='text-slate-700 text-sm'>Water that turns brownish after standing in pipes</li>
          </ul>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Iron bacteria are not a health hazard but create conditions favorable to other problematic bacteria. They are notoriously difficult to eradicate. Shock chlorination can suppress them, but they typically recolonize from deep in the well formation. Effective long-term control usually requires continuous low-level chlorination followed by carbon filtration.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>Test for:</strong> Iron, manganese, iron bacteria. Some labs offer specific iron-related bacteria (IRB), sulfate-reducing bacteria (SRB), and slime-forming bacteria panels as a single test.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Organic Matter in the Aquifer</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Shallow wells in areas with peaty soils, decaying vegetation, or high organic material in the aquifer can produce earthy tastes from naturally occurring organic compounds called tannins and geosmin. Tannins are byproducts of plant decay; geosmin is produced by certain bacteria and actinomycetes in soil. Both are detectable by the human nose at very low concentrations.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Tannins also cause a yellowish water color and a bitter edge to the earthy taste. They are not health hazards but indicate the well may be vulnerable to surface water influence, particularly after heavy rain.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>Test for:</strong> Tannins, bacteria. If the earthy taste worsens after rainfall, test specifically for coliform bacteria as surface water is likely reaching the well.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Seasonal Patterns</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>An earthy taste that appears or worsens in spring and summer and improves in fall and winter typically points to seasonal biological activity &mdash; either algae in surface water influencing a shallow aquifer, or bacterial growth in warm water. This seasonal pattern is a diagnostic signal worth noting when you describe the problem to a water testing professional.</p>
        </div>

        {/* Salty or Brackish Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Taste</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Salty or Brackish Taste</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>What it is:</strong> Well water that tastes salty, brackish, or like ocean water contains elevated chloride, sodium, or sulfate concentrations. Pure water is tasteless. The perception of saltiness in water begins around 250 mg/L of chloride.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Natural Causes</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'>Chlorides and sodium occur naturally in groundwater, particularly in:</p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Coastal areas where saltwater intrusion reaches freshwater aquifers (increasingly common as sea levels rise and aquifers are depleted)</li>
            <li className='text-slate-700 text-sm'>The Midwest where ancient marine sediments contribute naturally saline groundwater</li>
            <li className='text-slate-700 text-sm'>Areas where road de-icing salt runoff has reached the water table</li>
            <li className='text-slate-700 text-sm'>The Southwest where naturally occurring mineral brines influence local aquifers</li>
          </ul>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Sulfates from natural geological sources also create a salty taste with a laxative effect in people not accustomed to the water. The human body habituates to sulfates over time. Infants and visitors are most susceptible.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Serious Sources</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'>A sudden onset of salty taste that was not present previously warrants concern about:</p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Road salt contamination of shallow wells (most common in the northern United States near heavily salted roadways)</li>
            <li className='text-slate-700 text-sm'>Sewage contamination &mdash; human and animal waste is high in sodium and chlorides. Salty water that appears suddenly alongside any change in odor requires immediate bacteria testing</li>
            <li className='text-slate-700 text-sm'>Oil and gas wastewater &mdash; in regions with active extraction, produced water brine can reach groundwater</li>
          </ul>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Water Softener Brine Bypass: The Time-of-Day Test</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If you have a water softener and notice salty taste, the softener may be bypassing brine into the supply line during its overnight regeneration cycle. This is one of the most common &mdash; and most easily diagnosed &mdash; causes of sudden salty taste that most water quality guides overlook entirely.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The diagnostic test: pay attention to when the salty taste appears. Does it show up primarily in the first morning draw &mdash; the first glass of water you pour before 8 AM &mdash; and then improve or disappear as the day goes on? If yes, the softener regenerated overnight and left residual brine in the plumbing. The regeneration cycle for most home softeners is set for 2 to 4 AM to avoid disrupting household use.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>To confirm: shut off the water softener and bypass it (most softeners have a bypass valve on the inlet and outlet). Use water normally for 24 to 48 hours. If the salty taste resolves completely, the softener is the source. A well water test at this point will likely show normal chloride and sodium levels, confirming the source is equipment rather than the aquifer. Have the softener serviced &mdash; the brine injector, regeneration timer, or control valve may need cleaning or replacement.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Test for:</strong> Chloride, sodium, sulfate, TDS. If the taste appeared suddenly: also test for bacteria.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Treatment:</strong> Reverse osmosis removes sodium, chloride, and sulfate at the point of use. Whole-house desalination is expensive and typically not cost-justified for residential systems unless the chloride level is very high.</p>
        </div>

        {/* Bitter Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Taste</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Bitter Taste</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>What it is:</strong> A bitter taste in well water &mdash; described variously as medicine-like, baking soda-like, or astringent &mdash; has three primary causes with distinct secondary symptoms.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Copper Corrosion</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Copper pipes dissolving in acidic or aggressive water produce a distinctive bitter, slightly metallic taste that can also have a blue-green tint in severe cases. Blue-green staining on sinks, tubs, and shower fixtures is the diagnostic giveaway. Copper becomes detectable by taste around 1.3 mg/L. It is not a health concern until above 60 mg/L, which is far above typical residential plumbing concentrations. However, the blue-green staining also signals the same acidic water conditions that dissolve lead from older solder joints.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>Test for:</strong> Copper, pH, lead (using first-flush protocol if plumbing is older than 1986).</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Tannins</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>As described above under earthy taste, tannins produce both an earthy smell and a bitter, slightly astringent taste. Yellow-tinged water with a bitter-earthy combination almost certainly contains tannins.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Test for:</strong> Tannins, color.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>Treatment:</strong> Anion exchange specifically configured for tannins removes them effectively. Standard water softeners have limited effectiveness against tannins.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>High TDS and Sulfates</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Total dissolved solids above 500 mg/L can produce a flat, slightly bitter, or stale taste. Sulfates in particular create a pronounced bitter-medicine taste. Glauber{`'`}s salt (sodium sulfate) and Epsom salt (magnesium sulfate) both taste distinctly bitter and medicinal at elevated concentrations.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Test for:</strong> TDS, sulfate, hardness.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Treatment:</strong> Reverse osmosis is the most effective broad treatment for high TDS and sulfates.</p>
        </div>

        {/* Chemical, Gasoline, or Solvent Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Emergency</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-4'>Chemical, Gasoline, or Solvent Taste</h2>

          {/* Bold callout line */}
          <div className='mb-6 rounded-lg p-4' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
            <p className='font-bold text-slate-900 text-sm'>This is the only taste on this page that requires stopping water use before testing.</p>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm mb-6'>A taste or smell of gasoline, petroleum, diesel, turpentine, paint thinner, or any chemical solvent in well water is a serious contamination signal. Do not use the water for drinking, cooking, or any purpose involving ingestion until it has been tested and the source identified.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Volatile Organic Compounds (VOCs) and MTBE</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'>These tastes indicate the presence of volatile organic compounds: benzene, toluene, ethylbenzene, and xylenes (BTEX compounds from petroleum), methyl tert-butyl ether (MTBE from gasoline additives), trichloroethylene (TCE from industrial solvents), or similar chemicals. These compounds enter groundwater from:</p>
          <ul className='list-disc pl-6 mb-4 space-y-1'>
            <li className='text-slate-700 text-sm'>Leaking underground storage tanks at gas stations (the most common residential source)</li>
            <li className='text-slate-700 text-sm'>Fuel spills from above-ground storage or driveways</li>
            <li className='text-slate-700 text-sm'>Industrial discharge</li>
            <li className='text-slate-700 text-sm'>Dry cleaning facility contamination (PCE)</li>
          </ul>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>Health risk:</strong> VOCs are carcinogens and neurotoxins. The BTEX compounds are associated with leukemia, nervous system damage, and liver and kidney disease with chronic exposure. Gasoline taste in water is not a temporary inconvenience &mdash; it is a contamination emergency.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'><strong>What to do:</strong> Stop using the water for drinking and cooking immediately. Use bottled water. Test for a full VOC panel at a certified lab (standard well water tests do not include VOCs &mdash; you must specifically request this panel). Contact your state environmental agency if a VOC contamination source is identified. Many states have remediation programs for underground storage tank contamination.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-2'><strong>Test for:</strong> Full VOC panel (EPA Method 524 or equivalent), MTBE specifically.</p>
          <p className='text-slate-700 leading-relaxed text-sm'><strong>Treatment:</strong> Activated carbon filtration removes most VOCs effectively. Reverse osmosis with carbon pre-filtration provides additional removal. However, the contamination source must be identified and addressed &mdash; continued contamination from an ongoing source makes treatment a temporary measure.</p>
        </div>

        {/* Chlorine or Bleach Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Taste</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Chlorine or Bleach Taste</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Well water that tastes or smells of chlorine after shock chlorination is normal and expected. It confirms the disinfectant reached the fixture. It resolves as you flush the system.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>If you are tasting chlorine in well water and have not recently shock chlorinated, a neighbor{`'`}s well or a shared water line may have cross-contamination issues. This is uncommon but worth investigating if the taste persists. Test for free chlorine with a pool test strip.</p>
        </div>

        {/* Sweet Taste */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Taste</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Sweet Taste</h2>
          <p className='text-slate-700 leading-relaxed text-sm'>A slightly sweet taste in well water is almost always the result of elevated dissolved calcium and magnesium &mdash; hard water minerals. This is not a health concern. It can indicate very high hardness that may scale appliances, but the taste itself signals no danger. No action is required unless you want to address hardness for appliance protection or aesthetics.</p>
        </div>

        {/* The Sudden Change Rule */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Critical</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Sudden Change Rule</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The most important diagnostic signal in all of well water taste troubleshooting is sudden change. Water that has always tasted fine and now tastes different &mdash; any different &mdash; regardless of what that difference is, warrants testing.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Gradual changes in taste over months can reflect seasonal aquifer changes or gradual equipment deterioration. A sudden taste change that appeared within days indicates a contamination event: surface water intrusion after flooding, a new nearby contamination source, well equipment failure introducing contaminants, or shock chlorination residual.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>Never ignore a sudden taste change. Test within the week.</p>
        </div>

        {/* What to Test and What to Do Table */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Reference</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What to Test and What to Do</h2>

          <div className='overflow-x-auto rounded-lg border border-slate-200'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Taste</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Test For</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Urgency</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Treatment</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Metallic</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Iron, manganese, pH, lead (if old pipes)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Moderate; urgent if pre-1986 home</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Oxidizing filter; pH neutralizer; RO for lead</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Rotten egg / sulfur</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hydrogen sulfide (onsite), sulfate, bacteria</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Moderate</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Aeration; oxidizing filter; shock chlorinate</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Earthy / musty</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Iron bacteria, tannins, coliform bacteria</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Moderate</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Shock chlorinate; tannin filter; iron bacteria treatment</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Salty</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Chloride, sodium, sulfate, TDS</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Moderate; urgent if sudden onset</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>RO for point of use</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Bitter</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Copper, pH, tannins, TDS</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Moderate</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>pH neutralizer; tannin filter; RO</td>
                </tr>
                <tr style={{ backgroundColor: '#FCEBEB' }}>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Chemical / gasoline</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Full VOC panel, MTBE</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Urgent &mdash; stop using water</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Stop use; call state environmental agency</td>
                </tr>
                <tr className='bg-slate-50/50 hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Chlorine residual</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Free chlorine test strip</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>None &mdash; flush and retest bacteria</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Flush, wait 7 to 14 days, retest</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Sweet</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hardness, TDS</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>None</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Water softener if hardness is very high</td>
                </tr>
                <tr style={{ backgroundColor: '#FAEEDA' }}>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Sudden change (any)</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Full baseline panel including bacteria</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Urgent</td>
                  <td className='p-3 border border-slate-200 font-bold text-slate-900'>Depends on results</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What to Tell a Water Testing Lab */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Lab Guide</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What to Tell a Water Testing Lab</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Every taste article on the internet tells you to test your water. None of them tell you that a standard well water test will not test for most of what this article describes. Here is exactly what to request based on your taste.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'><strong>Standard annual panel (coliform, E. coli, nitrate, pH, hardness):</strong> Does not cover iron bacteria, hydrogen sulfide, VOCs, tannins, or manganese at the health advisory level. It is a necessary baseline, not a complete answer.</p>

          <div className='space-y-4'>
            <div className='border-l-4 pl-4' style={{ borderColor: '#1D9E75' }}>
              <p className='font-bold text-slate-900 text-sm mb-1'>Metallic taste</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Request iron, manganese (specify you want comparison against the 0.3 mg/L health advisory, not just the 0.05 mg/L aesthetic standard), pH, copper. If your home has pre-1986 plumbing, request lead using first-flush sampling protocol &mdash; tell the lab you want a first-draw sample collected before running any water that morning.</p>
            </div>
            <div className='border-l-4 pl-4' style={{ borderColor: '#1D9E75' }}>
              <p className='font-bold text-slate-900 text-sm mb-1'>Rotten egg or sulfur taste</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Hydrogen sulfide must be tested onsite or with special airtight sample bottles. It degasses out of a standard sample within minutes of collection, making mail-in tests unreliable. Tell the lab or testing professional you need an H2S-specific protocol. Also request sulfate and bacteria.</p>
            </div>
            <div className='border-l-4 pl-4' style={{ borderColor: '#1D9E75' }}>
              <p className='font-bold text-slate-900 text-sm mb-1'>Earthy or musty taste</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Request a biological iron bacteria panel &mdash; this tests for iron-related bacteria (IRB), sulfate-reducing bacteria (SRB), and slime-forming bacteria as a group. This is a separate biological test, not a chemical metals test. Also request tannins and coliform bacteria.</p>
            </div>
            <div className='border-l-4 pl-4' style={{ borderColor: '#1D9E75' }}>
              <p className='font-bold text-slate-900 text-sm mb-1'>Salty taste</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Request chloride, sodium, sulfate, and TDS. If the taste appeared suddenly, add bacteria to rule out sewage contamination.</p>
            </div>
            <div className='border-l-4 pl-4' style={{ borderColor: '#1D9E75' }}>
              <p className='font-bold text-slate-900 text-sm mb-1'>Bitter taste</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Request copper (using first-flush sampling if plumbing is older), pH, tannins, TDS.</p>
            </div>
            <div className='border-l-4 pl-4' style={{ borderColor: '#A32D2D' }}>
              <p className='font-bold text-slate-900 text-sm mb-1'>Chemical or gasoline taste</p>
              <p className='text-slate-700 text-sm leading-relaxed'>Request a full VOC panel using EPA Method 524 or 502.2. Standard panels do not include VOCs. You must specifically request this. Also request MTBE specifically, as it is not always included in standard VOC panels.</p>
            </div>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm mt-6'><strong>The bottom line:</strong> When you call a certified lab, describe your specific taste symptom and ask what panel covers it. A good lab will tell you exactly what to order. A lab that just offers a single standard package without asking about your specific concerns is not giving you the test you actually need.</p>
        </div>

        {/* The Invisible Danger */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#A32D2D' }}>Warning</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Invisible Danger: What Tastes Normal But May Not Be Safe</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>This section belongs in every well taste article and appears in almost none of them.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A <a href='https://www.usgs.gov/mission-areas/water-resources/science/private-wells' target='_blank' rel='noopener noreferrer' className='font-semibold underline' style={{ color: '#1D9E75' }}>USGS national study of private wells</a> found that approximately 11 percent contained arsenic above EPA limits, 8 percent had excessive nitrate, and over 70 percent had radon levels exceeding safety thresholds. Nearly all of this contaminated water looked, tasted, and smelled completely normal.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The dangerous contaminants that have no taste: arsenic (bladder, lung, and skin cancer risk), nitrates (blue baby syndrome in infants), lead (neurological damage in children), PFAS (cancer, thyroid disease, immune suppression), E. coli (severe gastrointestinal illness), radon (lung cancer from aerosolization during showers).</p>
          <p className='text-slate-700 leading-relaxed text-sm'>Diagnosing and fixing whatever you can taste is worthwhile. But the annual water test is what catches everything you cannot. If your well has not been tested in the past year, schedule a certified lab test through your county health department or a mail-in lab like those reviewed in the <Link href='/reviews/best-well-water-test-kits' className='font-semibold underline' style={{ color: '#1D9E75' }}>best well water test kits guide</Link>. Do not rely on taste to assess safety.</p>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why does my well water taste metallic?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Metallic-tasting well water most commonly indicates elevated iron or manganese &mdash; both naturally occurring minerals in groundwater. Iron gives a rusty, blood-like metallic taste; manganese gives a more bitter metallic flavor. A second cause is low pH (acidic water) corroding metal pipes, which dissolves iron, copper, zinc, and potentially lead into the water as it travels through your plumbing. Orange-brown staining confirms iron. Blue-green staining confirms copper. Test for iron, manganese, and pH to confirm and choose the correct treatment.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why does my well water taste like rotten eggs?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Rotten egg taste and smell is hydrogen sulfide (H2S), either dissolved in the groundwater from geological sources or produced by sulfur-reducing bacteria. If only hot water smells, the water heater{`'`}s anode rod is the most likely source. If both hot and cold water smell, H2S is in the well water itself. H2S is an aesthetic problem at typical well concentrations &mdash; not a health hazard &mdash; but it corrodes plumbing and indicates sulfur bacteria that may warrant shock chlorination.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Is it safe to drink well water that tastes bad?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>It depends entirely on what is causing the taste. Metallic, sulfur, earthy, salty, and bitter tastes are usually aesthetic problems caused by naturally occurring minerals or bacteria. They are unpleasant but not immediately dangerous for most people. Chemical, gasoline, or petroleum tastes are a different matter entirely and require stopping water use immediately. But the most important point is this: most truly dangerous contaminants &mdash; arsenic, nitrates, lead, PFAS, E. coli &mdash; have no taste at all. Bad taste alone does not mean dangerous water, and good taste does not mean safe water. Test annually regardless of how the water tastes.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why does my well water suddenly taste different?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A sudden taste change is the most important signal in well water quality monitoring. Sudden changes indicate a contamination event rather than a gradual geological or equipment issue. Common causes include surface water intrusion after flooding or heavy rain, a new contamination source nearby (fuel spill, septic failure), well equipment failure that allows outside material to enter the casing, or residual chlorine from recent shock chlorination. Test within the week of any sudden taste change. Do not wait.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why does my well water taste salty?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Salty-tasting well water contains elevated chloride, sodium, or sulfate. Natural sources include coastal saltwater intrusion into freshwater aquifers, ancient marine geological deposits, and road de-icing salt runoff into shallow wells. An existing water softener regeneration cycle can also produce salty water if the regeneration timing allows softened brine into the supply line. If the salty taste appeared suddenly, test immediately for bacteria &mdash; human and animal waste is high in sodium and chlorides, and sudden saltiness can indicate sewage contamination.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>What causes earthy or musty-tasting well water?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Earthy, musty, or swampy-tasting well water most commonly comes from iron bacteria forming biofilm in the well casing, pipes, or pressure tank. Iron bacteria feed on iron in the water and produce a gelatinous orange-brown slime with a characteristic earthy or swampy odor and taste. You may see this slime in the back of your toilet tank. Organic matter in the aquifer, particularly tannins from decaying vegetation in peaty soils, also produces earthy taste. Test for iron bacteria and tannins. Shock chlorination addresses iron bacteria but often requires ongoing maintenance as they recolonize.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Why does my well water taste like chemicals or gasoline?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Chemical or gasoline taste in well water is a contamination emergency. It indicates volatile organic compounds (VOCs) such as benzene, MTBE, or similar petroleum chemicals have reached your groundwater. The most common source is a leaking underground storage tank at a nearby gas station or a fuel spill. Stop using the water for drinking or cooking immediately. Use bottled water. Test for a full VOC panel at a certified laboratory. Contact your state environmental agency to report the possible contamination source.</p>
            </div>
            <div>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Can a water filter fix bad-tasting well water?</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Yes &mdash; for most aesthetic taste problems, a properly matched filter is highly effective. The critical word is matched. No single filter treats all bad tastes. Activated carbon removes earthy tastes, tannins, hydrogen sulfide, and VOCs. Reverse osmosis removes salty taste (chlorides, sodium, sulfates), metallic taste (dissolved metals), bitter taste (TDS, copper), and most dissolved contaminants. Oxidizing filtration removes iron and manganese. pH neutralizing filtration addresses acidic water and metallic taste from pipe corrosion. Test first, then choose the treatment designed for what you actually have.</p>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Hydrogen Sulfide (H2S)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A colorless gas with a distinctive rotten egg odor, produced either from natural geological decay of organic material in oxygen-poor aquifers or from sulfur-reducing bacteria that convert naturally occurring sulfates to H2S. Detectable by the human nose at concentrations as low as 0.05 ppm. Aesthetic concern at typical well levels, but corrosive to plumbing metals.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Iron Bacteria</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Naturally occurring microorganisms that oxidize dissolved iron as an energy source, depositing it as a gelatinous orange-brown biofilm on well casings, pipes, and fixtures. Not pathogenic, but produce characteristic earthy-swampy taste, can clog systems, and create conditions favorable to other bacteria. Difficult to permanently eliminate with shock chlorination alone.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Total Dissolved Solids (TDS)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The combined measurement of all dissolved minerals, metals, and salts in water, expressed in parts per million (mg/L). High TDS produces a flat, slightly stale, or bitter taste at concentrations above 500 mg/L. Low TDS (very pure water) can taste flat or {`"`}empty.{`"`} TDS alone is not a health measure but serves as a general indicator of overall dissolved mineral load.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Tannins</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Naturally occurring organic compounds produced when water passes through soils containing decaying vegetation, leaf litter, or peat. Produce yellow to brown water color and a bitter, earthy taste. Common in shallow wells near forested or wetland areas. Not a health hazard, but indicate the well may be influenced by surface water. Treated with anion exchange specifically configured for tannins.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Volatile Organic Compounds (VOCs)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A class of carbon-based industrial and petroleum chemicals that vaporize readily at room temperature. Includes benzene, toluene, MTBE, trichloroethylene, and many others. Enter groundwater from fuel leaks, industrial spills, and dry cleaning operations. Carcinogenic and neurotoxic at chronic exposure levels. Detectable by a distinctive chemical, gasoline, or solvent taste and odor. Require specific EPA-method laboratory testing &mdash; not included in standard well water panels.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>pH</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A measure of water acidity or alkalinity on a scale of 0 to 14. Below 7 is acidic, above 7 is alkaline, 7 is neutral. Well water pH below 6.5 is considered corrosive and dissolves metals from plumbing. EPA{`'`}s secondary standard for pH is 6.5 to 8.5. Low pH contributes to metallic taste by leaching iron, copper, zinc, and potentially lead from pipes and fittings.</p>
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
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants: The Complete Guide</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Smells Like Sulfur</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <a href='/guides/how-to-shock-chlorinate-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Shock Chlorination Guide</span>
            </a>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
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
