import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

const HERO_IMG = '/Arsenic%20in%20well%20water%20.jpg'
const HERO_IMG_ABS = 'https://www.thewell.guide/Arsenic%20in%20well%20water%20.jpg'

export const metadata: Metadata = {
  title: 'Arsenic in Well Water: How to Test, Treat, and Protect Your Family 2026 | The Well Guide',
  description: 'Arsenic in well water is a serious health risk at levels above 10 ppb. Complete guide to testing, treatment options (reverse osmosis, activated alumina, whole-house systems), costs, and EPA standards for private well owners.',
  openGraph: {
    title: 'Arsenic in Well Water: How to Test, Treat, and Protect Your Family 2026',
    description: 'Complete guide to arsenic in well water: testing, treatment options, costs, and EPA standards for private well owners.',
    url: 'https://www.thewell.guide/guides/arsenic-in-well-water',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: HERO_IMG_ABS, width: 1200, height: 630, alt: 'Clear glass of water representing the invisible nature of arsenic contamination in private well water' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/arsenic-in-well-water' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I tell if my well water has arsenic by looking at it or tasting it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, arsenic in well water has no taste, smell, or color at any concentration, even at levels that pose serious health risks. The only reliable way to detect arsenic in well water is through a certified laboratory test using EPA method 200.8 or equivalent analytical methods. This is fundamentally different from contaminants like iron (which causes brown staining), sulfur (which causes a rotten egg smell), or sediment (which causes cloudiness). Many homeowners assume their well water is safe because it tastes and looks clean, but arsenic contamination is invisible. If you have a private well and have never had the water tested for arsenic, testing should be a priority regardless of how the water tastes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the safe level of arsenic in drinking water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The EPA sets the Maximum Contaminant Level (MCL) for arsenic in public drinking water at 10 parts per billion (ppb), equivalent to 10 micrograms per liter (ug/L) or 0.010 mg/L. The health-based goal (MCL Goal) that the EPA considers fully safe is 0 ppb, meaning any detectable arsenic increases cancer risk to some degree. The 10 ppb limit is a regulatory compromise between health protection and the cost of treatment. Private well water is not federally regulated, so homeowners must test and treat voluntarily. Drinking water with 5 to 10 ppb of arsenic over many years still increases cancer risk above drinking water with 0 ppb, just less dramatically than water above 10 ppb. For households with pregnant women, infants, or young children, some public health experts recommend treating to below 5 ppb rather than just below 10 ppb.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I test my well water for arsenic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Send a water sample to a certified drinking water testing laboratory using EPA method 200.8 or equivalent. Do not rely on home test strips or kits; these are unreliable for arsenic and can give dangerous false negatives. Options for certified arsenic testing include mail-in services like Tap Score by SimpleLab ($30 to $80 for arsenic-specific tests, $150 to $400 for comprehensive well panels), your state health department laboratory (often free or reduced cost for private well owners), and local commercial environmental testing laboratories. When ordering a test, request "arsenic speciation" which distinguishes between arsenic III (arsenite) and arsenic V (arsenate). Knowing the specific form of arsenic in your water is essential for selecting correct treatment technology, since arsenic III is significantly harder to remove than arsenic V.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to remove arsenic from well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatment costs vary significantly by approach and arsenic concentration. Point-of-use reverse osmosis at the kitchen sink costs $200 to $600 for the system plus $0 to $400 for installation (DIY possible), with ongoing maintenance of $80 to $200 per year for filter replacement. Whole-house activated alumina treatment costs $1,500 to $4,000 installed, with $100 to $200 per year for media replacement. Whole-house ion exchange costs $1,800 to $4,500 installed, with $150 to $300 per year for salt regeneration. Point-of-use reverse osmosis is the most cost-effective solution for arsenic levels between 10 and 100 ppb where only drinking water needs treatment. Whole-house treatment makes sense for arsenic levels above 50 ppb or when young children are in the household and bathing exposure is a concern.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does boiling water remove arsenic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, boiling water does not remove arsenic and actually concentrates it. Arsenic does not evaporate at normal boiling temperatures; only water does. As water boils and evaporates, the arsenic remaining in the pot becomes more concentrated. A pot of water boiled down to half its original volume has roughly double the arsenic concentration of the starting water. Do not boil water to "purify" it if you know or suspect arsenic contamination. Effective arsenic removal requires reverse osmosis, activated alumina, ion exchange, or distillation (and distillation specifically because the steam captures water while arsenic stays behind in the boiling chamber, which is the opposite of simply boiling).',
      },
    },
    {
      '@type': 'Question',
      name: "Is arsenic dangerous at levels below the EPA's 10 ppb limit?",
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, arsenic exposure carries health risk at any detectable level, though the risk increases with concentration and duration of exposure. The EPA sets the ideal health-based goal (MCL Goal) for arsenic at 0 ppb, not 10 ppb, meaning zero arsenic is considered fully safe. The 10 ppb regulatory limit (MCL) is a compromise between health protection and the cost of achieving lower levels through treatment. Long-term drinking of water at 5 to 10 ppb carries measurably higher cancer risk than drinking water with 0 ppb of arsenic, just less dramatically than water above 10 ppb. For households with pregnant women, infants, or young children, some public health experts recommend treatment to below 5 ppb. If your well tests between 1 and 10 ppb, retest annually to confirm levels are not trending upward and consider point-of-use reverse osmosis for drinking water as an inexpensive additional protection.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can arsenic in well water cause health problems even if I do not drink it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bathing, showering, and handwashing with arsenic-contaminated water at typical residential levels (10 to 100 ppb) pose minimal health risk because arsenic is not absorbed through intact skin in meaningful amounts. The primary exposure route is ingestion: drinking the water, cooking with it, making coffee or tea, preparing baby formula, making ice cubes, and brushing teeth. For homes with arsenic levels above 500 ppb, some experts recommend avoiding prolonged bathing especially for infants, but this level is severe contamination well beyond typical residential cases. Inhalation of arsenic from showering has been studied and found to contribute negligibly to total exposure at residential levels. The focus of treatment for typical arsenic contamination should be on preventing ingestion through drinking water treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if my landlord or seller will not test for arsenic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you rent or are buying a property with a private well, you have several options. For renters, request written confirmation that the well water has been tested within the past 3 years and ask to see the results; most states have no legal requirement for landlords to test private wells serving rental properties, but landlords are generally responsible for providing habitable housing. For home buyers, include water testing as a condition of the purchase contract, specifying certified lab testing for arsenic and other common well contaminants. A seller who refuses water testing during a real estate transaction is a significant red flag. Real estate contracts in high-arsenic regions often require a satisfactory water test as a standard contingency. If you are already in a home with untested water, order a certified lab test yourself for $30 to $80 and know the result for your own peace of mind.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Arsenic in Well Water: How to Test, Treat, and Protect Your Family',
  description: 'Arsenic in well water is a serious health risk at levels above 10 ppb. Complete guide to testing, treatment options (reverse osmosis, activated alumina, whole-house systems), costs, and EPA standards for private well owners.',
  image: HERO_IMG_ABS,
  datePublished: '2026-04-22',
  dateModified: '2026-04-22',
  about: [
    {
      '@type': 'Thing',
      name: 'Arsenic',
      sameAs: 'https://wwwn.cdc.gov/TSP/PHS/PHS.aspx?phsid=18&toxid=3',
    },
    {
      '@type': 'MedicalCondition',
      name: 'Arsenic toxicity',
    },
  ],
  author: {
    '@type': 'Organization',
    name: 'The Well Guide Editorial Team',
    url: 'https://www.thewell.guide',
  },
  publisher: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://www.thewell.guide',
    parentOrganization: {
      '@type': 'Organization',
      name: 'The Home Guide Network',
    },
  },
  mainEntityOfPage: 'https://www.thewell.guide/guides/arsenic-in-well-water',
}

export default function ArsenicInWellWater() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className='relative h-[70vh] min-h-[500px] overflow-hidden' style={{ backgroundColor: '#0D3D30' }}>
        <Image
          src={HERO_IMG}
          alt='Clear glass of water representing the invisible nature of arsenic contamination in private well water'
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
            Arsenic in<br />
            <span style={{ color: '#5DCAA5' }}>Well Water:<br />Test, Treat, Protect</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Arsenic has no taste, smell, or color. A certified lab test and the right treatment are the only way to keep your family safe.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide Editorial Team</p>
              <p className='text-white/50 text-sm'>Updated April 2026 &middot; 16 min read &middot; The Home Guide Network</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Arsenic in Well Water' }
      ]} />

      <article className='max-w-4xl mx-auto px-6 py-16'>

        {/* TL;DR */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed'>
            Arsenic is a naturally occurring toxic element that contaminates well water in many parts of the United States and cannot be detected by taste, smell, or appearance. The EPA limit for public water systems is 10 parts per billion (ppb), but private wells are not federally regulated and must be tested by the homeowner. Long-term exposure above 10 ppb is linked to bladder, lung, skin, and kidney cancers. If your well tests above 10 ppb, stop drinking the water immediately and install treatment. Point-of-use reverse osmosis at the kitchen sink is the most cost-effective solution for typical residential levels. Whole-house activated alumina treatment protects against bathing exposure at higher levels. Home test kits are not reliable for arsenic; use a certified laboratory test.
          </p>
        </div>

        {/* The 10 ppb Rule */}
        <div className='rounded-xl p-6 mb-12' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
          <p className='font-bold text-slate-900 mb-3'>The 10 ppb Rule</p>
          <p className='text-slate-700 leading-relaxed'>
            If your well water tests at or above 10 parts per billion of arsenic, stop drinking the water immediately and switch to bottled water or another confirmed safe source until treatment is installed. This is not a situation that can wait for next month&apos;s paycheck or a convenient weekend. The EPA set the 10 ppb limit in 2001 specifically because levels above that threshold cause measurable increases in bladder and lung cancer risk over years of exposure. Arsenic has no taste, smell, or color, so you cannot tell whether water is safe by looking at it or drinking it. Only a certified laboratory test result tells you whether your water is safe. If your test came back above 10 ppb, the most important action you can take today is to stop drinking the water. Treatment can be planned over the next week or two; drinking water safety cannot wait.
          </p>
        </div>

        {/* 24-Hour Action Checklist (urgent) */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
          <div className='flex items-center gap-3 mb-4'>
            <span className='inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider' style={{ backgroundColor: '#A32D2D', color: 'white' }}>Urgent</span>
            <h2 className='text-2xl font-black text-slate-900'>What to Do in the Next 24 Hours If You Tested Positive</h2>
          </div>
          <p className='text-slate-700 leading-relaxed mb-4'>If you just received a lab report showing arsenic in your well water, work through these steps in order:</p>
          <ol className='list-decimal list-outside ml-5 space-y-3 text-slate-700 leading-relaxed'>
            <li>Stop drinking the water and stop using it to make coffee, tea, ice, baby formula, or ice cubes. Switch to bottled water for all consumption, cooking, and beverage preparation.</li>
            <li>Continue to use the water for bathing, showering, and handwashing. Arsenic is not absorbed through the skin in meaningful amounts, and boiling does not remove it (boiling actually concentrates arsenic as water evaporates).</li>
            <li>Read your test report carefully. Note the exact arsenic level in ppb or ug/L (both are the same unit) and whether the report distinguishes between arsenic III and arsenic V. This distinction matters for treatment selection.</li>
            <li>If anyone in the household is pregnant, breastfeeding, or under age 6, call your doctor today. Children and fetuses are significantly more vulnerable to arsenic than adults.</li>
            <li>Contact a licensed water treatment professional or research treatment options (below) within the next 7 days. Most treatment installations can be completed within 1 to 3 weeks of ordering.</li>
          </ol>
        </div>

        {/* What Is Arsenic */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What Is Arsenic and Why Is It in Well Water</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            If you just got a positive arsenic test result, you probably have two reactions running at the same time: fear for your family&apos;s health and frustration that this was never something you thought to worry about. Both are reasonable. Arsenic contamination is almost always a natural geological phenomenon that has been quietly in the water of that well for decades or longer, but most well owners never learn this until they get a test result. The good news is that arsenic is one of the more treatable water contaminants, and the treatment options below are proven technologies used in millions of homes. The rest of this section explains what arsenic is and why it ends up in well water so you can understand what you are treating against.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Arsenic is a semi-metal chemical element (atomic symbol As) that occurs naturally in soil, rocks, and bedrock throughout the Earth&apos;s crust. In groundwater, arsenic dissolves out of arsenic-bearing minerals and enters the water that private wells draw from.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Arsenic contamination of well water is a natural geological process in most cases, not a sign of industrial pollution. Certain regions of the United States have much higher rates of arsenic in groundwater due to their underlying geology:
          </p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-6'>
            <li><strong>New England</strong> (especially Maine, New Hampshire, and Massachusetts bedrock aquifers)</li>
            <li><strong>The Southwest</strong> (parts of Arizona, New Mexico, Nevada, California)</li>
            <li><strong>The Upper Midwest</strong> (parts of Michigan, Wisconsin, Minnesota)</li>
            <li><strong>The Central Plains</strong> (parts of Nebraska, Oklahoma, Kansas)</li>
          </ul>

          <p className='text-slate-700 leading-relaxed mb-6'>
            If you live in one of these regions, arsenic testing should be a routine part of well water maintenance, not an afterthought. The US Geological Survey has found that roughly 8 percent of wells in high-risk regions contain arsenic levels at or above 10 ppb.
          </p>

          <p className='text-slate-700 leading-relaxed mb-4'>Arsenic can also enter well water from human activity, though this is less common:</p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-8'>
            <li>Historical pesticide use (arsenic was a common pesticide until the 1980s)</li>
            <li>Mining operations and ore processing</li>
            <li>Industrial manufacturing of electronics and glass</li>
            <li>Treated wood products (CCA-treated lumber used to contain arsenic)</li>
            <li>Agricultural runoff from arsenic-containing feed additives in poultry operations</li>
          </ul>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Two Forms of Arsenic Matter for Treatment</h3>

          <p className='text-slate-700 leading-relaxed mb-6'>Arsenic in water exists in two chemical forms that behave differently in treatment systems:</p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Arsenic V (arsenate)</strong> is the oxidized form and is easier to remove. Most treatment technologies including reverse osmosis, activated alumina, and iron oxide media handle arsenic V effectively.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Arsenic III (arsenite)</strong> is the reduced form and is significantly harder to remove. Most treatment media must first oxidize arsenic III to arsenic V before removing it. Reverse osmosis can struggle with arsenic III without pre-oxidation. Chlorination or oxidizing media like manganese dioxide converts arsenic III to arsenic V during treatment.
          </p>

          <p className='text-slate-700 leading-relaxed'>
            If your lab report distinguishes between the two forms, bring this information to any water treatment professional. A system designed only for arsenic V will not adequately remove arsenic III, which is a common and expensive mistake.
          </p>
        </div>

        {/* Health Effects */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Health Effects of Arsenic in Drinking Water</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Arsenic is classified by the International Agency for Research on Cancer as a Group 1 carcinogen, meaning there is conclusive evidence that it causes cancer in humans. Long-term exposure to arsenic in drinking water at levels above the EPA&apos;s 10 ppb limit is associated with:
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Cancers:</strong> Bladder cancer, lung cancer, skin cancer, kidney cancer, liver cancer, and prostate cancer. The EPA estimated in 2000 that long-term exposure at 50 ppb (the old limit) caused between 1 in 100 and 1 in 300 excess lung and bladder cancer cases.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Cardiovascular disease:</strong> Increased risk of heart disease, stroke, hypertension, and peripheral vascular disease.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Skin changes:</strong> Thickening, discoloration, and lesions on palms, soles, and torso (known as arsenical keratoses). These changes can appear 5 to 20 years after long-term exposure begins.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Neurological effects:</strong> Numbness and tingling in hands and feet, partial paralysis, cognitive impairment in children.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Developmental effects:</strong> Reduced birth weight, impaired cognitive development in children, and increased infant mortality with prenatal exposure.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Diabetes:</strong> Some studies show increased risk of type 2 diabetes with long-term arsenic exposure.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The lethal acute dose of arsenic is in the range of 50,000 to 300,000 ppb. This is dramatically higher than the chronic exposure limit because acute poisoning and chronic cancer risk operate on different biological mechanisms. You will not die from drinking a glass of 15 ppb well water. You could develop bladder cancer from drinking the same water for 20 years.
          </p>

          <p className='text-slate-700 leading-relaxed'>
            The <a href='https://wwwn.cdc.gov/TSP/PHS/PHS.aspx?phsid=18&toxid=3' target='_blank' rel='noopener' className='font-semibold underline' style={{ color: '#1D9E75' }}>Centers for Disease Control and Prevention (CDC)</a> maintains comprehensive health information on arsenic exposure and its effects.
          </p>
        </div>

        {/* EPA Standards */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>EPA Standards and What the Numbers Mean</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The EPA&apos;s Maximum Contaminant Level (MCL) for arsenic in public drinking water is 10 parts per billion (ppb), which is equivalent to 10 micrograms per liter (ug/L) or 0.010 mg/L. These three units are all the same concentration; different labs report results in different units.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>The 10 ppb standard applies to public water systems only.</strong> Private well owners are not federally required to test for arsenic, treat arsenic, or meet any limit. The 10 ppb number is simply the health-based threshold that public systems must meet, and the EPA recommends private well owners use the same limit as a guideline.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            The <a href='https://www.epa.gov/dwreginfo/chemical-contaminant-rules' target='_blank' rel='noopener' className='font-semibold underline' style={{ color: '#1D9E75' }}>EPA&apos;s Chemical Contaminant Rules</a> page provides the official regulatory framework and technical background on the arsenic standard.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>What Different Arsenic Levels Mean for Your Well</h3>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden text-sm'>
              <thead style={{ backgroundColor: '#0D3D30' }}>
                <tr>
                  <th className='p-3 text-left text-white font-bold'>Arsenic Level</th>
                  <th className='p-3 text-left text-white font-bold'>What It Means</th>
                  <th className='p-3 text-left text-white font-bold'>Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Below 1 ppb (below detection)</td>
                  <td className='p-3 text-slate-700'>No arsenic detected</td>
                  <td className='p-3 text-slate-700'>Retest every 3 to 5 years</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>1 to 5 ppb</td>
                  <td className='p-3 text-slate-700'>Trace arsenic present</td>
                  <td className='p-3 text-slate-700'>Retest annually; consider treatment if trending upward</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>5 to 10 ppb</td>
                  <td className='p-3 text-slate-700'>Below EPA limit but elevated</td>
                  <td className='p-3 text-slate-700'>Retest every 6 months; consider point-of-use treatment for drinking water</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>10 to 50 ppb</td>
                  <td className='p-3 text-slate-700'>Above EPA limit; health risk present</td>
                  <td className='p-3 text-slate-700'>Stop drinking; install treatment; retest after treatment installed</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Above 50 ppb</td>
                  <td className='p-3 text-slate-700'>Significantly above EPA limit</td>
                  <td className='p-3 text-slate-700'>Stop drinking immediately; install treatment within 7 to 14 days</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Above 500 ppb</td>
                  <td className='p-3 text-slate-700'>Severe contamination</td>
                  <td className='p-3 text-slate-700'>Stop all use including bathing of infants; consult water treatment professional immediately</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed'>
            Important context on the &quot;below EPA limit&quot; range (1 to 10 ppb): the EPA set the MCL goal (the health-based ideal) at 0 ppb, not 10 ppb. The 10 ppb limit is a regulatory compromise between health protection and the cost of treatment. Drinking water with 5 to 10 ppb of arsenic over many years still increases your cancer risk above drinking water with 0 ppb, just less dramatically than water above 10 ppb. Some public health experts recommend treating to below 5 ppb for sensitive populations including pregnant women, infants, and young children.
          </p>
        </div>

        {/* How to Test */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How to Test for Arsenic Properly</h2>

          <div className='rounded-xl p-6 mb-8' style={{ backgroundColor: '#FCEBEB', borderLeft: '4px solid #A32D2D' }}>
            <p className='font-bold text-slate-900 mb-2'>Critical warning</p>
            <p className='text-slate-700 leading-relaxed'>
              This is the single most important technical point in this article: <strong>do not rely on home test kits for arsenic.</strong> Home test kits (the strip-style tests sold for $20 to $50 that test for multiple contaminants) are not reliable for arsenic. They can give false negatives at dangerous levels, false positives from interfering compounds, and cannot distinguish between arsenic III and arsenic V. Some kits do not detect arsenic below 50 ppb, which is 5 times the EPA limit and well above the level that causes health harm.
            </p>
          </div>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Use a Certified Laboratory Test</h3>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Certified laboratory testing uses EPA method 200.8 (ICP-MS, inductively coupled plasma mass spectrometry) or similar analytical methods that measure arsenic concentrations as low as 1 ppb accurately. The results are legally defensible and reliable.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>Options for getting a certified arsenic test:</p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Mail-in test kits from certified labs.</strong> Services like Tap Score (by SimpleLab) and ETR Labs send a sample collection kit to your home. You collect a water sample per the instructions, mail it back, and receive certified lab results in 7 to 14 days. Arsenic-specific tests cost $30 to $80. Comprehensive well water panels (including arsenic plus other common contaminants) cost $150 to $400.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Your state health department lab.</strong> Many state health departments offer well water testing at reduced cost or free for homeowners. Contact your state environmental health office or county health department. Some states provide free arsenic testing programs in high-risk regions.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            <strong>Local environmental testing labs.</strong> Search for &quot;certified drinking water testing labs&quot; in your area. Most larger cities have commercial environmental labs that accept residential samples.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Get Complete Speciation</h3>

          <p className='text-slate-700 leading-relaxed mb-8'>
            When ordering an arsenic test, ask specifically whether the test provides &quot;arsenic speciation&quot; (distinguishing arsenic III from arsenic V). This costs slightly more than a total arsenic test but is essential for selecting correct treatment. Many residential tests only report total arsenic, which is adequate for knowing whether treatment is needed but inadequate for choosing the specific technology.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>When to Retest</h3>

          <p className='text-slate-700 leading-relaxed mb-4'>After initial testing, retest at these intervals:</p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-6'>
            <li><strong>Every 3 to 5 years</strong> if your well consistently tests below 5 ppb</li>
            <li><strong>Annually</strong> if your well tests between 5 and 10 ppb</li>
            <li><strong>Every 6 months</strong> during the first year of any new treatment system to verify the system is working</li>
            <li><strong>After any major change</strong> to the well: new pump, increased depth, after shock chlorination, after flooding, or after any neighbor reports contamination</li>
          </ul>

          <p className='text-slate-700 leading-relaxed'>
            Arsenic levels can vary seasonally with changes in the water table and pumping rate, so a single &quot;clean&quot; test does not guarantee ongoing safety.
          </p>
        </div>

        {/* Treatment Options */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Treatment Options for Arsenic in Well Water</h2>

          <p className='text-slate-700 leading-relaxed mb-8'>
            Three treatment technologies effectively remove arsenic from residential well water. Choice depends on arsenic level, whether you need whole-house or point-of-use treatment, and budget.
          </p>

          {/* Option 1: RO */}
          <div className='rounded-2xl p-8 mb-8 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-black text-sm' style={{ backgroundColor: '#1D9E75' }}>1</span>
              <h3 className='text-2xl font-black text-slate-900'>Reverse Osmosis (Point of Use)</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Reverse osmosis (RO) is the most effective arsenic removal technology for drinking water, achieving 95 to 99 percent removal of both arsenic III and arsenic V. RO systems install under the kitchen sink and provide treated water at a dedicated faucet for drinking, cooking, and making ice. The RO membrane rejects arsenic along with hundreds of other dissolved contaminants.
            </p>

            <dl className='grid md:grid-cols-2 gap-4 bg-slate-50 rounded-lg p-6 mb-6'>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>What it treats</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>Only the water at the RO faucet (typically kitchen sink). Water at other taps in the house remains untreated.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Cost</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>$200 to $600 for the system (an <a href='https://amzn.to/4tXJxxG' target='_blank' rel='nofollow sponsored noopener' className='font-semibold underline' style={{ color: '#1D9E75' }}>APEC ROES-50</a> or similar WQA-certified under-sink system runs $200 to $400). Installation by a plumber costs $200 to $400 additional, though DIY is feasible.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Maintenance</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>Filter cartridges replaced every 6 to 12 months ($50 to $120/year). RO membrane replaced every 2 to 5 years ($50 to $150).</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Best for</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>Homes with arsenic in the 10 to 100 ppb range where bathing exposure is acceptable and only drinking water needs treatment. Also the right choice for renters or homeowners on tight budgets.</dd>
              </div>
              <div className='md:col-span-2'>
                <dt className='font-bold text-slate-900 mb-1'>Certification to look for</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>NSF/ANSI 58 certification for reverse osmosis systems, specifically tested for arsenic reduction. WQA Gold Seal is another credible certification mark.</dd>
              </div>
            </dl>
          </div>

          {/* Option 2: Activated Alumina */}
          <div className='rounded-2xl p-8 mb-8 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-black text-sm' style={{ backgroundColor: '#1D9E75' }}>2</span>
              <h3 className='text-2xl font-black text-slate-900'>Whole-House Activated Alumina Filter (Point of Entry)</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Activated alumina is a specialized filter media (aluminum oxide) that selectively adsorbs arsenic from water passing through. A whole-house activated alumina filter installs where the water line enters the house, treating all water including showers, sinks, washing machines, and outside hose bibs.
            </p>

            <dl className='grid md:grid-cols-2 gap-4 bg-slate-50 rounded-lg p-6 mb-6'>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>What it treats</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>All water in the house.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Cost</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>$1,500 to $4,000 installed. A <a href='https://amzn.to/4trmJ9B' target='_blank' rel='nofollow sponsored noopener' className='font-semibold underline' style={{ color: '#1D9E75' }}>WECO whole-house activated alumina filter</a> or similar residential unit costs $800 to $2,000 for the system itself; professional installation adds $500 to $2,000 depending on plumbing complexity.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Maintenance</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>Media replacement every 3 to 7 years depending on water usage and arsenic concentration ($200 to $600). Some systems require periodic pH adjustment for optimal arsenic removal.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Best for</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>Homes with arsenic above 50 ppb, homes with young children or pregnant women where even bathing exposure is concerning, or homes that want comprehensive treatment rather than point-of-use.</dd>
              </div>
              <div className='md:col-span-2'>
                <dt className='font-bold text-slate-900 mb-1'>Certification to look for</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>NSF/ANSI 53 certification specific to arsenic reduction. Standard NSF/ANSI 42 (aesthetic) certification does not cover arsenic.</dd>
              </div>
            </dl>

            <p className='text-slate-700 leading-relaxed'>
              <strong>Important limitations:</strong> Activated alumina works best in a specific pH range (typically 5.5 to 8.5). Well water above pH 8.2 may require pre-treatment. Activated alumina removes arsenic V effectively but arsenic III only after pre-oxidation. Water chemistry matters significantly for whole-house systems; a professional water analysis is essential before sizing an activated alumina system.
            </p>
          </div>

          {/* Option 3: Ion Exchange */}
          <div className='rounded-2xl p-8 mb-8 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
            <div className='flex items-center gap-3 mb-4'>
              <span className='inline-flex items-center justify-center w-10 h-10 rounded-full text-white font-black text-sm' style={{ backgroundColor: '#1D9E75' }}>3</span>
              <h3 className='text-2xl font-black text-slate-900'>Ion Exchange (Whole House)</h3>
            </div>
            <p className='text-slate-700 leading-relaxed mb-6'>
              Anion exchange resin is a plastic bead media that exchanges chloride ions for arsenic V ions as water passes through. Ion exchange is highly effective at arsenic V removal (90 to 100 percent) but struggles with arsenic III, making pre-oxidation essential.
            </p>

            <dl className='grid md:grid-cols-2 gap-4 bg-slate-50 rounded-lg p-6 mb-6'>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>What it treats</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>All water in the house.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Cost</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>$1,800 to $4,500 installed.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Maintenance</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>Salt regeneration (similar to a water softener) every 1 to 2 weeks ($50 to $150/year in salt). Resin replacement every 5 to 10 years.</dd>
              </div>
              <div>
                <dt className='font-bold text-slate-900 mb-1'>Best for</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>Wells with arsenic levels above 100 ppb, wells where arsenic V is the dominant form, and homes that already have a water softener (since the regeneration mechanism is similar).</dd>
              </div>
              <div className='md:col-span-2'>
                <dt className='font-bold text-slate-900 mb-1'>Certification to look for</dt>
                <dd className='text-slate-700 leading-relaxed text-sm'>NSF/ANSI 58 certification for arsenic reduction.</dd>
              </div>
            </dl>

            <p className='text-slate-700 leading-relaxed'>
              <strong>Limitations:</strong> Ion exchange generates salty waste water that drains to the sewer or septic (typically 30 to 60 gallons per regeneration cycle). Not appropriate for homes on septic systems with strict salt-loading limits.
            </p>
          </div>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>What About Carbon Filters and Pitcher Filters?</h3>

          <p className='text-slate-700 leading-relaxed'>
            Standard activated carbon filters (like Brita pitchers or basic under-sink filters) do NOT remove arsenic. Carbon removes chlorine, taste and odor compounds, and some organics, but arsenic passes through unchanged. Any system advertising &quot;arsenic removal&quot; must use reverse osmosis, activated alumina, ion exchange, or distillation. Carbon alone is not adequate.
          </p>
        </div>

        {/* Cost Breakdown */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Cost Breakdown by Approach</h2>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden text-sm'>
              <thead style={{ backgroundColor: '#0D3D30' }}>
                <tr>
                  <th className='p-3 text-left text-white font-bold'>Treatment Approach</th>
                  <th className='p-3 text-left text-white font-bold'>System Cost</th>
                  <th className='p-3 text-left text-white font-bold'>Installation</th>
                  <th className='p-3 text-left text-white font-bold'>Annual Maintenance</th>
                  <th className='p-3 text-left text-white font-bold'>10-Year Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Point-of-use reverse osmosis</td>
                  <td className='p-3 text-slate-700'>$200 to $600</td>
                  <td className='p-3 text-slate-700'>$0 to $400 (DIY possible)</td>
                  <td className='p-3 text-slate-700'>$80 to $200</td>
                  <td className='p-3 text-slate-700'>$1,000 to $2,600</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Whole-house activated alumina</td>
                  <td className='p-3 text-slate-700'>$800 to $2,000</td>
                  <td className='p-3 text-slate-700'>$500 to $2,000</td>
                  <td className='p-3 text-slate-700'>$100 to $200</td>
                  <td className='p-3 text-slate-700'>$2,500 to $5,000</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Whole-house ion exchange</td>
                  <td className='p-3 text-slate-700'>$1,200 to $3,000</td>
                  <td className='p-3 text-slate-700'>$600 to $1,500</td>
                  <td className='p-3 text-slate-700'>$150 to $300</td>
                  <td className='p-3 text-slate-700'>$3,300 to $7,500</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Bottled water only (no treatment)</td>
                  <td className='p-3 text-slate-700'>$0</td>
                  <td className='p-3 text-slate-700'>$0</td>
                  <td className='p-3 text-slate-700'>$800 to $2,000</td>
                  <td className='p-3 text-slate-700'>$8,000 to $20,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed mb-4'>
            For context on well system costs generally, see our <Link href='/cost-guides/whole-house-water-filter-cost' className='font-semibold underline' style={{ color: '#1D9E75' }}>whole-house water filter cost guide</Link>.
          </p>

          <p className='text-slate-700 leading-relaxed'>
            The striking comparison is that buying bottled water for 10 years is the most expensive option by a wide margin and solves only the drinking water problem, not bathing or cooking exposure. Almost any installed treatment system pays for itself in 1 to 4 years compared to bottled water, while also providing better safety.
          </p>
        </div>

        {/* DIY vs Professional */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>DIY vs Professional Installation</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Point-of-use reverse osmosis is reasonably DIY-friendly.</strong> Most under-sink RO systems install in 2 to 4 hours with basic plumbing tools (adjustable wrench, drill with hole saw if adding a dedicated faucet, plumber&apos;s tape). The systems are sold pre-assembled and include detailed instructions. Anyone comfortable installing a garbage disposal or replacing a kitchen faucet can install an RO system.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Whole-house treatment is almost always a professional installation.</strong> Activated alumina and ion exchange systems require:
          </p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-6'>
            <li>Tying into the main water line with proper shutoff valves</li>
            <li>Adequate drainage for backwashing</li>
            <li>Pre-testing the specific water chemistry (pH, alkalinity, competing ions) to size the media correctly</li>
            <li>Post-installation testing to verify the system is achieving target arsenic removal</li>
            <li>Ongoing service contracts for media replacement</li>
          </ul>

          <p className='text-slate-700 leading-relaxed mb-8'>
            A well-sized system from a licensed water treatment professional is worth the $500 to $2,000 installation cost because an undersized or wrong-media system will fail to remove arsenic adequately and the homeowner may not know until the next lab test months later.
          </p>

          <div className='rounded-xl p-6 mb-6' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className='font-bold text-slate-900 mb-2'>Need a water treatment professional?</p>
            <p className='text-slate-700 leading-relaxed'>
              Arsenic treatment requires proper sizing based on your specific water chemistry, and a licensed installer can verify the system is actually reducing arsenic to safe levels. <Link href='/get-quote' className='text-[#854F0B] underline font-semibold hover:text-[#6B3F09]'>Get free quotes from licensed water treatment specialists near you.</Link>
            </p>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Common Mistakes When Dealing with Arsenic in Well Water</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Assuming you can taste or smell arsenic.</strong> Arsenic has no taste, smell, or color at any concentration. Relying on sensory detection is a health mistake.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Relying on home test kits.</strong> Most home test kits cannot reliably detect arsenic below 50 ppb, which is 5 times the EPA limit. Always use a certified laboratory test for the initial diagnosis and post-treatment verification.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Boiling the water.</strong> Boiling concentrates arsenic rather than removing it, because water evaporates and arsenic does not. A pot of water boiled down to half its volume has roughly double the arsenic concentration. Do not boil water to &quot;purify&quot; it if you know or suspect arsenic contamination.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Installing a standard carbon filter and assuming you are protected.</strong> Carbon removes chlorine and improves taste, but does nothing to arsenic. If your water treatment system uses only carbon, it is not treating arsenic regardless of marketing claims.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Treating only drinking water when levels are high.</strong> At arsenic levels above 50 ppb, showering and bathing exposure becomes a concern especially for small children. Consider whole-house treatment for levels above 50 ppb or any level where young children are in the household.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Skipping post-installation retesting.</strong> Install the system, let it run for 2 weeks, then submit another certified lab test to verify the system is actually working. A system can fail or be undersized for your specific water chemistry, and you will not know without testing.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Ignoring arsenic III vs V distinction.</strong> Systems optimized for arsenic V only may fail at removing arsenic III. Request speciation in your initial lab test so you can select correct treatment technology.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Assuming a &quot;clean&quot; test 5 years ago still applies.</strong> Arsenic levels can change as the water table shifts or the well pump moves to a different stratum. Retest at the intervals recommended above.
          </p>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Related Guides</h2>
          <div className='space-y-3'>
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants Overview</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Well Water</span>
            </Link>
            <Link href='/guides/well-water-treatment-options' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Treatment Options</span>
            </Link>
            <Link href='/reviews/best-whole-house-water-filters' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Whole House Water Filters</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
            <Link href='/cost-guides/whole-house-water-filter-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Whole House Water Filter Cost</span>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Frequently Asked Questions</h2>

          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Can I tell if my well water has arsenic by looking at it or tasting it?</h3>
              <p className='text-slate-700 leading-relaxed'>No, arsenic in well water has no taste, smell, or color at any concentration, even at levels that pose serious health risks. The only reliable way to detect arsenic in well water is through a certified laboratory test using EPA method 200.8 or equivalent analytical methods. This is fundamentally different from contaminants like iron (which causes brown staining), sulfur (which causes a rotten egg smell), or sediment (which causes cloudiness). Many homeowners assume their well water is safe because it tastes and looks clean, but arsenic contamination is invisible. If you have a private well and have never had the water tested for arsenic, testing should be a priority regardless of how the water tastes.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What is the safe level of arsenic in drinking water?</h3>
              <p className='text-slate-700 leading-relaxed'>The EPA sets the Maximum Contaminant Level (MCL) for arsenic in public drinking water at 10 parts per billion (ppb), equivalent to 10 micrograms per liter (ug/L) or 0.010 mg/L. The health-based goal (MCL Goal) that the EPA considers fully safe is 0 ppb, meaning any detectable arsenic increases cancer risk to some degree. The 10 ppb limit is a regulatory compromise between health protection and the cost of treatment. Private well water is not federally regulated, so homeowners must test and treat voluntarily. Drinking water with 5 to 10 ppb of arsenic over many years still increases cancer risk above drinking water with 0 ppb, just less dramatically than water above 10 ppb. For households with pregnant women, infants, or young children, some public health experts recommend treating to below 5 ppb rather than just below 10 ppb.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How do I test my well water for arsenic?</h3>
              <p className='text-slate-700 leading-relaxed'>Send a water sample to a certified drinking water testing laboratory using EPA method 200.8 or equivalent. Do not rely on home test strips or kits; these are unreliable for arsenic and can give dangerous false negatives. Options for certified arsenic testing include mail-in services like Tap Score by SimpleLab ($30 to $80 for arsenic-specific tests, $150 to $400 for comprehensive well panels), your state health department laboratory (often free or reduced cost for private well owners), and local commercial environmental testing laboratories. When ordering a test, request &quot;arsenic speciation&quot; which distinguishes between arsenic III (arsenite) and arsenic V (arsenate). Knowing the specific form of arsenic in your water is essential for selecting correct treatment technology, since arsenic III is significantly harder to remove than arsenic V.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How much does it cost to remove arsenic from well water?</h3>
              <p className='text-slate-700 leading-relaxed'>Treatment costs vary significantly by approach and arsenic concentration. Point-of-use reverse osmosis at the kitchen sink costs $200 to $600 for the system plus $0 to $400 for installation (DIY possible), with ongoing maintenance of $80 to $200 per year for filter replacement. Whole-house activated alumina treatment costs $1,500 to $4,000 installed, with $100 to $200 per year for media replacement. Whole-house ion exchange costs $1,800 to $4,500 installed, with $150 to $300 per year for salt regeneration. Point-of-use reverse osmosis is the most cost-effective solution for arsenic levels between 10 and 100 ppb where only drinking water needs treatment. Whole-house treatment makes sense for arsenic levels above 50 ppb or when young children are in the household and bathing exposure is a concern.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Does boiling water remove arsenic?</h3>
              <p className='text-slate-700 leading-relaxed'>No, boiling water does not remove arsenic and actually concentrates it. Arsenic does not evaporate at normal boiling temperatures; only water does. As water boils and evaporates, the arsenic remaining in the pot becomes more concentrated. A pot of water boiled down to half its original volume has roughly double the arsenic concentration of the starting water. Do not boil water to &quot;purify&quot; it if you know or suspect arsenic contamination. Effective arsenic removal requires reverse osmosis, activated alumina, ion exchange, or distillation (and distillation specifically because the steam captures water while arsenic stays behind in the boiling chamber, which is the opposite of simply boiling).</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Is arsenic dangerous at levels below the EPA&apos;s 10 ppb limit?</h3>
              <p className='text-slate-700 leading-relaxed'>Yes, arsenic exposure carries health risk at any detectable level, though the risk increases with concentration and duration of exposure. The EPA sets the ideal health-based goal (MCL Goal) for arsenic at 0 ppb, not 10 ppb, meaning zero arsenic is considered fully safe. The 10 ppb regulatory limit (MCL) is a compromise between health protection and the cost of achieving lower levels through treatment. Long-term drinking of water at 5 to 10 ppb carries measurably higher cancer risk than drinking water with 0 ppb of arsenic, just less dramatically than water above 10 ppb. For households with pregnant women, infants, or young children, some public health experts recommend treatment to below 5 ppb. If your well tests between 1 and 10 ppb, retest annually to confirm levels are not trending upward and consider point-of-use reverse osmosis for drinking water as an inexpensive additional protection.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Can arsenic in well water cause health problems even if I do not drink it?</h3>
              <p className='text-slate-700 leading-relaxed'>Bathing, showering, and handwashing with arsenic-contaminated water at typical residential levels (10 to 100 ppb) pose minimal health risk because arsenic is not absorbed through intact skin in meaningful amounts. The primary exposure route is ingestion: drinking the water, cooking with it, making coffee or tea, preparing baby formula, making ice cubes, and brushing teeth. For homes with arsenic levels above 500 ppb, some experts recommend avoiding prolonged bathing especially for infants, but this level is severe contamination well beyond typical residential cases. Inhalation of arsenic from showering has been studied and found to contribute negligibly to total exposure at residential levels. The focus of treatment for typical arsenic contamination should be on preventing ingestion through drinking water treatment.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What should I do if my landlord or seller will not test for arsenic?</h3>
              <p className='text-slate-700 leading-relaxed'>If you rent or are buying a property with a private well, you have several options. For renters, request written confirmation that the well water has been tested within the past 3 years and ask to see the results; most states have no legal requirement for landlords to test private wells serving rental properties, but landlords are generally responsible for providing habitable housing. For home buyers, include water testing as a condition of the purchase contract, specifying certified lab testing for arsenic and other common well contaminants. A seller who refuses water testing during a real estate transaction is a significant red flag. Real estate contracts in high-arsenic regions often require a satisfactory water test as a standard contingency. If you are already in a home with untested water, order a certified lab test yourself for $30 to $80 and know the result for your own peace of mind. For more guidance on well water due diligence during home purchases, see our <Link href='/guides/buying-house-with-well' className='font-semibold underline' style={{ color: '#1D9E75' }}>buying a house with a well guide</Link>.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Glossary</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Arsenic</h3>
              <p className='text-slate-700 leading-relaxed'>Arsenic is a naturally occurring semi-metal chemical element (atomic symbol As) found throughout the Earth&apos;s crust in soil, rocks, and minerals. In groundwater, arsenic dissolves from arsenic-bearing rocks into the water that private wells draw from, creating a public health concern when concentrations exceed the EPA&apos;s 10 parts per billion (ppb) limit. Arsenic has no taste, smell, or color at any concentration in water, which means contamination can only be detected through laboratory testing. Long-term exposure to arsenic in drinking water is linked to bladder, lung, skin, kidney, and prostate cancers, cardiovascular disease, and developmental effects in children. The International Agency for Research on Cancer classifies arsenic as a Group 1 human carcinogen with conclusive evidence of causing cancer in humans.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Maximum Contaminant Level (MCL)</h3>
              <p className='text-slate-700 leading-relaxed'>The Maximum Contaminant Level is the legally enforceable limit that the EPA sets for contaminants in public drinking water under the Safe Drinking Water Act. For arsenic, the MCL is 10 parts per billion (ppb), effective since 2006. MCLs apply to public water systems serving 15 or more connections or 25 or more people, but do not apply to private wells. Private well owners are not legally required to test for or treat arsenic. The EPA recommends that private well owners use public water system MCLs as guidelines for their own wells. The MCL represents a compromise between health protection (ideal limit would be zero for most contaminants) and the cost of achieving lower levels through treatment.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Parts per billion (ppb)</h3>
              <p className='text-slate-700 leading-relaxed'>Parts per billion is a unit of concentration used to measure very low levels of contaminants in water. One ppb equals one microgram per liter (ug/L) or 0.001 milligrams per liter (mg/L). To visualize this: 10 ppb of arsenic in water is equivalent to 10 drops of arsenic in 1 million drops of water, or approximately 1 grain of sand in a gallon of water. Despite the extremely small quantities involved, arsenic at 10 ppb poses measurable long-term health risk because arsenic accumulates in the body and damages tissue at the cellular level over years of exposure. Arsenic lab results may be reported in ppb, ug/L, or mg/L; all three are equivalent units (10 ppb = 10 ug/L = 0.010 mg/L).</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Arsenic III (arsenite)</h3>
              <p className='text-slate-700 leading-relaxed'>Arsenic III, also called arsenite, is the reduced chemical form of arsenic commonly found in anaerobic groundwater, particularly in deep wells with limited oxygen exposure. Arsenic III is significantly more toxic than arsenic V and is also harder to remove from water. Most water treatment technologies must first oxidize arsenic III to arsenic V before removing it effectively, either through chlorination, ozone treatment, or oxidizing media like manganese dioxide. Reverse osmosis membranes have reduced effectiveness on arsenic III without pre-oxidation. Any arsenic treatment system for a well containing arsenic III must include an oxidation step or risk inadequate arsenic removal. Arsenic speciation testing distinguishes between the two forms and is essential for proper treatment system selection.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Arsenic V (arsenate)</h3>
              <p className='text-slate-700 leading-relaxed'>Arsenic V, also called arsenate, is the oxidized chemical form of arsenic commonly found in oxygenated surface water and shallow wells. Arsenic V is less toxic than arsenic III and much easier to remove from water using standard treatment technologies. Reverse osmosis, activated alumina, ion exchange, and iron oxide media all effectively remove arsenic V without pre-treatment. Water that contains only arsenic V (or has been pre-oxidized to convert arsenic III to arsenic V) can be treated reliably with any major technology. Arsenic speciation testing is the laboratory analysis that determines whether your well water contains arsenic V, arsenic III, or a mixture of both.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Reverse osmosis (RO)</h3>
              <p className='text-slate-700 leading-relaxed'>Reverse osmosis is a water treatment technology that forces water under pressure through a semi-permeable membrane with pores small enough to block dissolved ions and contaminants including arsenic, lead, fluoride, chromium, and hundreds of other substances. RO systems typically install under a kitchen sink as point-of-use treatment, providing treated water at a dedicated faucet for drinking and cooking. A properly sized RO system removes 95 to 99 percent of arsenic from water, making it the gold standard for arsenic removal at point of use. NSF/ANSI 58 certification specifically verifies arsenic reduction performance. RO systems waste 1 to 3 gallons of water per gallon of treated water produced (newer efficient systems operate at 2:1 or better ratios), which is an important consideration for wells with limited capacity.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Activated alumina</h3>
              <p className='text-slate-700 leading-relaxed'>Activated alumina is a specialized filter media made from aluminum oxide that selectively adsorbs arsenic from water passing through a filter bed. Activated alumina is typically used in whole-house treatment systems treating water for all fixtures in the home, not just drinking water. The media removes 85 to 90 percent of arsenic V from water within the optimal pH range of 5.5 to 8.5 and requires replacement every 3 to 7 years depending on arsenic concentration and water usage. Activated alumina performs poorly at high pH (above 8.2) or with competing ions like sulfate and fluoride, which makes pre-testing of water chemistry essential before installing this type of system. Whole-house activated alumina systems cost $1,500 to $4,000 installed, compared to $200 to $600 for point-of-use reverse osmosis.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Ion exchange</h3>
              <p className='text-slate-700 leading-relaxed'>Ion exchange is a water treatment technology that removes arsenic V (and other negatively charged ions) by exchanging chloride ions from a resin bed for arsenic ions from the water. Ion exchange systems are similar in concept to water softeners but use anion resin specifically designed for arsenic and other anionic contaminants rather than cation resin for hardness. Ion exchange systems remove 90 to 100 percent of arsenic V and install as whole-house point-of-entry treatment. The resin regenerates with salt brine (similar to a water softener), generating 30 to 60 gallons of salty wastewater per regeneration cycle, which must drain to a sewer or septic system. Ion exchange costs $1,800 to $4,500 installed and is most appropriate for wells with high arsenic levels (above 100 ppb) where arsenic V is the dominant form.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Point-of-use vs point-of-entry treatment</h3>
              <p className='text-slate-700 leading-relaxed'>Point-of-use (POU) treatment means treating water at a specific faucet or appliance, typically the kitchen sink for drinking and cooking water. Reverse osmosis under-sink systems are the most common POU treatment for arsenic, producing 50 to 100 gallons per day of purified water at one dedicated faucet while leaving water at other taps in the house untreated. Point-of-entry (POE) treatment means treating all water entering the house at the main water line, so every faucet, shower, and appliance receives treated water. Activated alumina and ion exchange systems are typical POE treatment for arsenic. The tradeoff: POU is cheaper and simpler but only protects drinking water; POE is more expensive and complex but protects against all potential exposure routes including bathing, brushing teeth, and cooking. For typical residential arsenic contamination between 10 and 100 ppb, POU reverse osmosis provides adequate health protection at a fraction of the cost of POE systems.</p>
            </div>
          </div>
        </div>

        {/* Editorial disclaimer */}
        <div className='rounded-lg p-5 mb-12 bg-slate-50 border border-slate-200 text-sm text-slate-600 leading-relaxed'>
          <p><strong>Editorial note:</strong> This article is educational content reviewed by The Well Guide Editorial Team and is not a substitute for advice from a licensed water treatment professional or medical provider. If you have received a positive arsenic test result, consult both a certified water treatment specialist for appropriate remediation and a medical provider for any health questions specific to your household.</p>
        </div>

        {/* Newsletter */}
        <div className='my-8'>
          <BeehiivEmailCapture />
        </div>

        {/* Lead Form */}
        <div className='border-t border-slate-200 pt-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Get Expert Help</h2>
          <p className='text-slate-600 mb-6'>Connect with a licensed water treatment specialist in your area for a free, no-obligation quote on arsenic testing, whole-house filter installation, or well water treatment.</p>
          <LeadForm />
        </div>

      </article>
    </>
  )
}
