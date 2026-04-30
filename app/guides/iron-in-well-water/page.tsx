import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'Iron in Well Water: Types, Treatment, and Costs 2026 | The Well Guide',
  description: 'Iron in well water causes orange staining, metallic taste, and plumbing damage. Complete guide to the 4 types of iron, treatment options (air injection, water softeners, chlorination), costs, and the 0.3 mg/L EPA limit.',
  openGraph: {
    title: 'Iron in Well Water: Types, Treatment, and Costs 2026',
    description: 'Complete guide to iron in well water: the 4 types, treatment options, costs, and the 0.3 mg/L EPA limit.',
    url: 'https://www.thewell.guide/guides/iron-in-well-water',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/ironinwellwater.jpg', width: 1200, height: 630, alt: 'Orange iron staining visible on white porcelain bathroom fixtures caused by iron in well water' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/iron-in-well-water' },
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Iron in Well Water: Types, Treatment, and Costs 2026',
  description: 'Iron in well water causes orange staining, metallic taste, and plumbing damage. Complete guide to the 4 types of iron, treatment options (air injection, water softeners, chlorination), costs, and the 0.3 mg/L EPA limit.',
  image: 'https://www.thewell.guide/ironinwellwater.jpg',
  datePublished: '2026-04-23',
  dateModified: '2026-04-23',
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
  mainEntityOfPage: 'https://www.thewell.guide/guides/iron-in-well-water',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is iron in well water dangerous to drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Iron in well water is not dangerous at typical residential concentrations. The EPA classifies iron as a Secondary Contaminant with a recommended limit of 0.3 mg/L set for aesthetic reasons (taste, color, staining), not health reasons. Iron is an essential nutrient for human health, and typical well water levels (0.3 to 3 mg/L) contribute only a small fraction of the daily recommended intake of 8 to 18 mg per day for adults. Two exceptions apply: people with hereditary hemochromatosis (a genetic condition affecting about 1 in 200 people of Northern European descent) should minimize all iron sources including drinking water, and infants under 12 months should not have water above 0.3 mg/L used for formula preparation because infant digestive systems cannot handle excess iron. For everyone else, the cost of iron in well water is aesthetic and financial (staining, plumbing damage, failed appliances) rather than a health risk.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know what type of iron I have in my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Perform a 5-minute diagnostic: fill a clear glass with cold well water that has run for 30 seconds, set it on the counter, and observe for 5 minutes. If the water is clear when poured but turns red or brown while sitting, you have ferrous iron (clear-water iron). If the water comes out already red, orange, or yellow, you have ferric iron (red-water iron). If there is reddish-brown slime in toilet tanks or an oily sheen on the water surface, you have bacterial iron. If the water has a pink or reddish tinge that does not settle out even after hours, you have colloidal iron. Most wells have a mixture of ferrous and ferric iron; certified laboratory testing ($50 to $200) confirms exact concentrations and is essential before sizing treatment equipment. The iron type determines which treatment works: water softeners for low ferrous iron, air injection oxidation filters for moderate to high ferrous and ferric iron, shock chlorination for bacterial iron, and professional water analysis for colloidal iron.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does it cost to remove iron from well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Treatment costs vary by approach and iron severity. A water softener for low ferrous iron (under 2 to 5 mg/L) costs $500 to $1,500 for the system plus $300 to $800 installation, with annual maintenance of $100 to $200 for salt and resin care. An air injection oxidation filter for moderate to high iron (3 to 15 mg/L) costs $800 to $2,500 for the system plus $500 to $1,500 installation, with annual maintenance of $150 to $300 for media replacement every 5 to 10 years. Shock chlorination for bacterial iron costs $50 to $150 in DIY supplies but may need to be repeated annually. Continuous chlorination systems for persistent bacterial iron cost $1,000 to $3,000 installed. For homes with untreated iron, the 20-year cost of accumulated household damage (failed appliances, stained fixtures, increased plumbing repair) typically runs $3,000 to $8,000, meaning nearly any treatment system pays for itself within 5 to 15 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a water softener remove iron from well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A water softener removes iron only at low concentrations (typically under 2 to 5 mg/L of ferrous iron). Above that level, iron fouls the softener\'s ion-exchange resin rapidly, causing the softener to lose capacity within 6 to 12 months. Water softeners are never effective against ferric iron (already oxidized, passes through), bacterial iron (living organisms that clog the resin), or colloidal iron (particles too fine to capture). For wells with more than 2 to 5 mg/L of iron, install a dedicated iron filter (typically an air injection oxidation system) before the softener. The iron filter handles iron removal; the softener handles hardness. This combination is common in homes where both iron and hardness are problems. Do not rely on a softener alone as an iron treatment unless certified testing confirms low ferrous iron levels and no other iron types present.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is an air injection iron filter and how does it work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An air injection oxidation (AIO) filter is the standard whole-house iron treatment for moderate to high iron concentrations. The system works by pumping air into the incoming well water, which oxidizes dissolved ferrous iron (invisible, Fe2+) into particulate ferric iron (solid particles, Fe3+). The ferric iron particles are then captured by filter media (typically Katalox Light, BIRM, or manganese greensand) inside the main tank. Periodic automatic backwashing (typically daily) flushes accumulated iron particles down the drain and refreshes the media. AIO systems handle 5 to 30 mg/L of iron depending on the specific system and can simultaneously treat hydrogen sulfide (rotten-egg smell) and manganese. AIO systems cost $800 to $2,500 installed and last 15 to 20 years with proper maintenance (media replacement every 5 to 10 years). They do not treat bacterial iron, which requires shock chlorination first, but they handle ferrous iron, ferric iron, and mixed-type iron problems effectively.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I remove iron from well water with a carbon filter or reverse osmosis system?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Standard activated carbon filters do NOT effectively remove iron from well water. Carbon removes chlorine, VOCs, and improves taste and odor, but iron passes through carbon filters unchanged. Reverse osmosis (RO) systems CAN remove iron, but only at the point of use (typically kitchen sink drinking water) and only after pre-filtration to remove the bulk of iron before the RO membrane. An RO system without iron pre-treatment will foul the membrane within weeks to months, requiring expensive membrane replacement. For whole-house iron removal, always install a dedicated iron filter (AIO, greensand, or softener for low iron) rather than relying on carbon or RO alone. RO can be added after iron pre-treatment as a final polish for drinking water, but it is not a primary iron treatment.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is iron bacteria and is it dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Iron bacteria are naturally occurring microorganisms that feed on iron in well water and produce a slimy reddish-brown biofilm. According to the EPA, iron bacteria themselves are not known to cause disease in humans. However, the biofilm they create can harbor other, potentially harmful bacteria and clog plumbing, foul water treatment equipment, and produce unpleasant tastes and odors (often described as sewage, swamp, or musty smells). Signs of iron bacteria include reddish-brown slime in toilet tanks, oily or rainbow-colored sheen on water surfaces, clogs in low-flow areas of plumbing, and iron filters that fail rapidly. Treatment requires killing the bacterial colony first (typically through shock chlorination) before other iron treatments will work. For wells with persistent iron bacteria that return after shock chlorination, continuous chlorination followed by catalytic carbon filtration is the standard solution. Iron bacteria cannot be filtered out directly; the bacteria must be killed chemically first.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I test for iron in my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For wells with no known iron problem, test every 3 to 5 years as part of routine well water testing. For wells with existing iron treatment systems, test annually to verify the system is still reducing iron to acceptable levels. For wells where iron levels are close to the 0.3 mg/L threshold (between 0.1 and 0.5 mg/L), test annually to track whether levels are trending upward. After any major change to the well (new pump, increased depth, shock chlorination, flooding, or nearby construction), retest within 3 to 6 months because iron levels can shift with changes in water table or pump operation. When testing, order a comprehensive well water panel that includes total iron, ferrous vs ferric breakdown if available, manganese, pH, hardness, and hydrogen sulfide. Certified laboratory testing costs $50 to $200 depending on breadth. For general well water testing frequency guidance, see our how to test well water guide.',
      },
    },
  ],
}

export default function IronInWellWater() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className='max-w-3xl mx-auto px-4 py-12'>
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: 'Guides', href: '/guides' },
            { label: 'Iron in Well Water' },
          ]}
        />

        {/* Badge + Reading Time */}
        <div className='flex items-center gap-3 mb-4 mt-6'>
          <span className='inline-block px-3 py-1 text-xs font-bold rounded-full' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>Guide</span>
          <span className='text-sm text-slate-500'>14 min read</span>
        </div>

        {/* Title */}
        <h1 className='text-3xl md:text-4xl font-black text-slate-900 mb-4 leading-tight'>
          Iron in Well Water: Types, Treatment, and Costs
        </h1>

        {/* Byline */}
        <div className='flex items-center gap-3 mb-6'>
          <div className='w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs' style={{ backgroundColor: '#1D9E75' }}>WG</div>
          <div>
            <p className='text-sm font-semibold text-slate-900'>The Well Guide Editorial Team</p>
            <p className='text-xs text-slate-500'>Updated April 2026 &middot; 14 min read</p>
          </div>
        </div>

        {/* Hero Image (inline) */}
        <div className='rounded-xl overflow-hidden mb-8'>
          <Image
            src='/ironinwellwater.jpg'
            alt='Orange iron staining visible on white porcelain bathroom fixtures caused by iron in well water'
            width={1200}
            height={630}
            className='w-full h-auto'
            priority
          />
        </div>

        {/* TL;DR */}
        <div className='rounded-lg p-5 mb-10' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>
            Iron in well water is the single most common well water problem in the United States, affecting the majority of private wells to some degree. Unlike arsenic or bacteria, iron is not a serious health threat at typical residential levels; the real costs are aesthetic and financial: orange staining on fixtures and laundry, metallic-tasting water, early appliance failure, and clogged pipes. The EPA sets the Secondary Maximum Contaminant Level for iron at 0.3 mg/L (aesthetic guideline, not a health-based legal limit). Treatment depends on which of the four iron types you have: ferrous (clear-water iron), ferric (red-water iron), bacterial iron, or colloidal iron. A water softener handles low-level ferrous iron, an air injection oxidation filter handles moderate to high iron, and shock chlorination kills bacterial iron. Testing your water to identify the iron type is the essential first step.
          </p>
        </div>

        {/* The 0.3 mg/L Rule */}
        <div className='rounded-xl p-6 mb-12' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
          <p className='font-bold text-slate-900 mb-3'>The 0.3 mg/L Rule</p>
          <p className='text-slate-700 leading-relaxed'>
            If your well water tests above 0.3 mg/L iron, you will see staining on fixtures and laundry, taste iron in your drinking water, and eventually damage your plumbing and appliances. The EPA&apos;s Secondary Maximum Contaminant Level is set at 0.3 mg/L for aesthetic reasons, not health reasons, and the limit is not federally enforceable for private wells. But above this threshold, iron causes real, measurable household damage: orange-stained white laundry, rusted toilet bowls, clogged water heaters, and failing dishwashers. Iron is not a health emergency the way arsenic or bacteria are, but it is a slow, expensive, household-damaging problem that gets worse over time and does not fix itself. Treating iron pays for itself in reduced plumbing repairs and longer appliance lifespan.
          </p>
        </div>

        {/* The 5-Minute Diagnostic (actionable dark callout) */}
        <div className='rounded-2xl p-8 mb-12' style={{ backgroundColor: '#0D3D30', color: 'white' }}>
          <div className='flex items-center gap-3 mb-4'>
            <span className='inline-block px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider' style={{ backgroundColor: '#1D9E75', color: 'white' }}>Diagnostic</span>
            <h2 className='text-2xl font-black text-white'>The 5-Minute Diagnostic</h2>
          </div>
          <p className='text-white/80 leading-relaxed mb-5'>
            Before buying any treatment equipment, fill a clear glass with well water from a cold tap that has been running for 30 seconds. Set it on the counter and observe it for 5 minutes. The result of this simple test tells you which of the four iron types you have:
          </p>
          <ol className='list-decimal list-outside ml-5 space-y-3 text-white/90 leading-relaxed'>
            <li><strong className='text-white'>Water is clear when poured, then turns red or brown while sitting in the glass:</strong> You have ferrous iron (clear-water iron). Water softeners and air injection filters treat this effectively.</li>
            <li><strong className='text-white'>Water comes out of the tap already red, orange, or yellow:</strong> You have ferric iron (red-water iron). Sediment filters and backwashing iron filters handle this.</li>
            <li><strong className='text-white'>Water has reddish-brown slime or oily sheen on the surface, especially in toilet tanks:</strong> You have bacterial iron. Shock chlorination is required before filtration will work.</li>
            <li><strong className='text-white'>Water has a pink or reddish tinge and does not settle out even after hours:</strong> You have colloidal iron. This is the hardest type to treat and usually requires professional water analysis.</li>
          </ol>
          <p className='text-white/70 text-sm leading-relaxed mt-5'>
            Most wells contain a mixture of ferrous and ferric iron. Testing at a certified lab (see the testing section below) will give you precise concentrations and confirm which treatment category applies.
          </p>
        </div>

        {/* What Is Iron in Well Water and Where It Comes From */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>What Is Iron in Well Water and Where It Comes From</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            If you have seen orange streaks on your toilet bowl, rust-colored water from a faucet that has been unused overnight, or your white towels turning a dingy yellow after washing, you already know iron in well water is a persistent problem. What is less obvious is that iron is not actually dangerous at the levels most wells have. It is, however, one of the most expensive household nuisances a well owner can face because the costs compound slowly: a ruined white shirt here, a prematurely failing dishwasher there, a water heater replacement five years earlier than it should have needed.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Iron is a chemical element (atomic symbol Fe) that occurs naturally throughout the Earth&apos;s crust. In groundwater, iron dissolves out of iron-bearing minerals and rocks, particularly in regions with high iron content in the soil and bedrock. Iron can also enter well water from corroded pipes in older well casings or household plumbing, though this is less common than natural geological sources.
          </p>

          <p className='text-slate-700 leading-relaxed mb-4'>
            Wells in certain regions of the United States consistently show higher iron levels due to underlying geology:
          </p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-6'>
            <li><strong>The Great Lakes region</strong> (Michigan, Wisconsin, Minnesota)</li>
            <li><strong>The Northeast</strong> (New England bedrock aquifers)</li>
            <li><strong>The Southeast coastal plains</strong> (parts of Georgia, Alabama, Mississippi)</li>
            <li><strong>The Upper Midwest and Northern Plains</strong></li>
            <li><strong>Parts of the Pacific Northwest</strong></li>
          </ul>

          <p className='text-slate-700 leading-relaxed'>
            Wells drilled into deeper aquifers (typically 100 to 400 feet) tend to have more ferrous iron because the water sits in low-oxygen environments where iron stays dissolved. Shallow wells (under 50 feet) tend to have more ferric iron because water encounters oxygen more readily and oxidizes dissolved iron into particles. Wells with high organic content (near surface water, in marshy areas) are more likely to have bacterial or organic iron.
          </p>
        </div>

        {/* The Four Types of Iron */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>The Four Types of Iron</h2>

          <p className='text-slate-700 leading-relaxed mb-8'>
            This is the single most important technical section in the article. The iron type determines which treatment works, and installing the wrong equipment for your iron type is the #1 reason iron treatment fails. Get this right and you solve your iron problem; get it wrong and you spend thousands on equipment that does not work.
          </p>

          {/* Type 1: Ferrous Iron */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Type 1: Ferrous Iron (Clear-Water Iron)</h3>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>What it is:</strong> Dissolved iron in its reduced chemical state (Fe2+). Ferrous iron is completely soluble in water and invisible.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>How to identify it:</strong> Water comes out of the tap looking clear and clean. When the water sits in a glass or bucket for 5 to 30 minutes, the dissolved iron oxidizes and turns the water red, brown, or yellow. A rust ring forms in toilet bowls between flushes. White laundry develops orange stains after washing.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>Common concentration range:</strong> 0.3 to 10 mg/L in typical affected wells.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Treatment:</strong></p>
            <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed'>
              <li><strong>Under 2 to 5 mg/L:</strong> A water softener with iron-removal capability is often adequate. The softener&apos;s ion-exchange resin captures ferrous iron along with calcium and magnesium.</li>
              <li><strong>Above 5 mg/L:</strong> An air injection oxidation (AIO) filter is the standard solution. The system converts dissolved ferrous iron to particulate ferric iron through oxidation, then filters out the particles.</li>
            </ul>
          </div>

          {/* Type 2: Ferric Iron */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #854F0B' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Type 2: Ferric Iron (Red-Water Iron)</h3>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>What it is:</strong> Iron in its oxidized chemical state (Fe3+). Ferric iron is already oxidized and exists as tiny solid particles suspended in the water.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>How to identify it:</strong> Water comes out of the tap already red, orange, yellow, or brown. You can see the color immediately without waiting.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>Common concentration range:</strong> 0.3 to 15 mg/L in typical affected wells.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Treatment:</strong></p>
            <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed'>
              <li><strong>Low levels (under 3 mg/L):</strong> A sediment filter with a 5 to 10 micron rating captures ferric iron particles.</li>
              <li><strong>Moderate to high levels:</strong> A backwashing iron filter with Katalox, BIRM, or greensand media handles higher concentrations and self-cleans through periodic backwashing.</li>
              <li><strong>Air injection oxidation systems also handle ferric iron</strong> because the filtration stage captures the already-oxidized particles.</li>
            </ul>
          </div>

          {/* Type 3: Bacterial Iron */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #A32D2D' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Type 3: Bacterial Iron (Organic Iron)</h3>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>What it is:</strong> Iron-loving bacteria (not harmful to health directly) that feed on iron in water and produce a slimy biofilm. The bacteria themselves bind iron into organic compounds that are difficult to filter.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>How to identify it:</strong> Reddish-brown slime in toilet tanks, on fixtures, or inside pipes. Oily, rainbow-colored sheen on the surface of water. Foul smell like sewage, swamp, or rotten vegetation. Clogs in low-flow areas of the plumbing system. Iron filters that fail or lose effectiveness quickly are often experiencing bacterial fouling. See also our <Link href='/problems/brown-rusty-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>brown or rusty well water</Link> problem page for related symptom-based diagnosis.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>Common concentration range:</strong> Not measured by concentration directly; presence is binary (you either have it or you don&apos;t).</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Treatment:</strong> Iron bacteria require a two-step approach:</p>
            <ol className='list-decimal list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-3'>
              <li><strong>Shock chlorination of the well</strong> to kill the existing bacterial colony in the well casing and plumbing. See our <Link href='/guides/how-to-shock-chlorinate-well' className='font-semibold underline' style={{ color: '#1D9E75' }}>how to shock chlorinate a well guide</Link> for the full procedure.</li>
              <li><strong>Continuous chlorination followed by catalytic carbon filtration</strong> for persistent cases where shock chlorination alone does not prevent bacterial regrowth.</li>
            </ol>
            <p className='text-slate-700 leading-relaxed'>
              Bacterial iron is the most stubborn of the four types because the bacteria regenerate from any colony left behind. A single shock chlorination is often inadequate; many wells with iron bacteria require annual or semi-annual shock chlorination indefinitely, or permanent continuous chlorination.
            </p>
          </div>

          {/* Type 4: Colloidal Iron */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #6B3F09' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Type 4: Colloidal Iron</h3>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>What it is:</strong> Extremely fine iron particles (smaller than 1 micron) that remain suspended in water due to their small size and electrical charge. Often bound with organic matter.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>How to identify it:</strong> Water has a pink or reddish tinge when poured into a clear glass. Unlike ferrous iron, the color does not change over time. Unlike ferric iron, the particles are too small to settle out even after hours of standing.</p>
            <p className='text-slate-700 leading-relaxed mb-3'><strong className='text-slate-900'>Common concentration range:</strong> Typically 0.3 to 3 mg/L when present.</p>
            <p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Treatment:</strong> Colloidal iron is the hardest type to remove reliably. Standard sediment filters and iron filters do not capture particles this small. Treatment usually requires a combination of chemical oxidation (chlorine or potassium permanganate) plus a coagulant to bind the fine particles together, followed by fine filtration. This is almost always a professional installation.</p>
          </div>

          <p className='text-slate-700 leading-relaxed'>
            Some wells have multiple iron types simultaneously. A well with ferrous iron and bacterial iron, for example, requires both shock chlorination AND an air injection filter, because each treatment addresses only one of the two problems. Proper water testing is essential to identify all iron forms present before selecting equipment.
          </p>
        </div>

        {/* Health Effects vs Aesthetic Effects */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Health Effects vs Aesthetic Effects</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Iron in well water is primarily an aesthetic and household damage problem, not a health threat. The <a href='https://www.epa.gov/sdwa/secondary-drinking-water-standards-guidance-nuisance-chemicals' target='_blank' rel='noopener' className='font-semibold underline' style={{ color: '#1D9E75' }}>EPA classifies iron as a Secondary Contaminant</a> under the Safe Drinking Water Act, meaning the 0.3 mg/L recommended limit is based on taste, color, odor, and staining rather than health risk. Iron is essential to human nutrition (the Recommended Dietary Allowance ranges from 8 to 18 mg per day for adults), and typical well water levels (0.3 to 3 mg/L) contribute only a small fraction of daily iron intake.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Who Should Pay Attention to Iron Health Effects</h3>

          <p className='text-slate-700 leading-relaxed mb-6'>
            While iron is not a broad health concern, two specific populations should minimize iron exposure:
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>People with hereditary hemochromatosis</strong> (a genetic condition causing excessive iron absorption, affecting approximately 1 in 200 people of Northern European descent) should minimize all unnecessary iron sources including drinking water. Iron accumulation from hemochromatosis can cause liver damage, heart problems, and diabetes over decades.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Infants under 12 months</strong> should not consume water with iron levels above 0.3 mg/L for formula preparation, because infant digestive systems cannot process excess iron efficiently. Use bottled water or install treatment before preparing formula.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            For everyone else, the health risk from iron in well water is minimal. The real costs are aesthetic and financial.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Real Costs of Untreated Iron</h3>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Household staining.</strong> Orange, red, or yellow stains on toilet bowls, bathtubs, sinks, and any white surface touched by the water. Laundry turns dingy over time; white towels and sheets gradually yellow.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Appliance damage.</strong> Iron accumulation clogs water heater elements, dishwasher sprayers, clothes washer fill valves, ice maker lines, and coffee maker heating elements. Appliances with iron exposure typically fail 3 to 7 years earlier than they should.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Plumbing damage.</strong> Iron buildup narrows pipes over decades, reducing water pressure and flow. Water heater lifespan drops from 10-15 years to 5-8 years. Well pumps work harder and wear faster.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Metallic taste.</strong> Water tastes like iron, which makes drinking water unpleasant and affects the taste of coffee, tea, and food cooked in the water.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Iron bacteria slime and odor.</strong> In wells with bacterial iron, slimy deposits in toilets and foul odors make the problem particularly unpleasant.
          </p>

          <p className='text-slate-700 leading-relaxed'>
            Over a 20-year period, untreated iron in well water typically causes $3,000 to $8,000 in accumulated household damage (appliance replacement, plumbing repair, laundry damage, reduced home value). A $1,500 iron filter system pays for itself within 5 to 10 years through avoided damage alone.
          </p>
        </div>

        {/* EPA Standards */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>EPA Standards and What 0.3 mg/L Means</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The EPA&apos;s Secondary Maximum Contaminant Level (SMCL) for iron is 0.3 mg/L (milligrams per liter), equivalent to 0.3 ppm (parts per million). Three important facts about this standard:
          </p>

          <ol className='list-decimal list-outside ml-5 space-y-3 text-slate-700 leading-relaxed mb-8'>
            <li><strong>It is not federally enforceable.</strong> Secondary Standards are recommendations, not legal limits. Public water systems are not legally required to meet them (though many states adopt them as enforceable at the state level). Private wells are never federally regulated for iron.</li>
            <li><strong>It is aesthetic, not health-based.</strong> The 0.3 mg/L threshold was set based on the concentration at which iron starts causing visible staining, taste issues, and plumbing problems. The EPA has no primary health-based standard for iron because iron is not considered a health risk at residential well water concentrations.</li>
            <li><strong>The 0.3 mg/L threshold is for iron alone.</strong> Wells often have iron plus manganese (a related mineral with its own 0.05 mg/L SMCL). Manganese causes black staining rather than orange staining and often appears in combination with iron.</li>
          </ol>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>What Different Iron Levels Mean for Your Well</h3>

          <div className='overflow-x-auto mb-6'>
            <table className='w-full border-collapse bg-white border border-slate-200 rounded-lg overflow-hidden text-sm'>
              <thead style={{ backgroundColor: '#0D3D30' }}>
                <tr>
                  <th className='p-3 text-left text-white font-bold'>Iron Level</th>
                  <th className='p-3 text-left text-white font-bold'>What It Means</th>
                  <th className='p-3 text-left text-white font-bold'>Recommended Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Below 0.3 mg/L</td>
                  <td className='p-3 text-slate-700'>Below EPA aesthetic limit</td>
                  <td className='p-3 text-slate-700'>No treatment needed; retest every 3 to 5 years</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>0.3 to 1 mg/L</td>
                  <td className='p-3 text-slate-700'>Low iron; minor staining may occur</td>
                  <td className='p-3 text-slate-700'>Water softener may be adequate; consider if staining bothers you</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>1 to 3 mg/L</td>
                  <td className='p-3 text-slate-700'>Moderate iron; clear aesthetic issues</td>
                  <td className='p-3 text-slate-700'>Water softener (for ferrous) or iron filter (for ferric)</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>3 to 10 mg/L</td>
                  <td className='p-3 text-slate-700'>High iron; household damage occurring</td>
                  <td className='p-3 text-slate-700'>Air injection oxidation filter recommended</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Above 10 mg/L</td>
                  <td className='p-3 text-slate-700'>Severe iron; accelerated appliance damage</td>
                  <td className='p-3 text-slate-700'>Professional-grade iron filter or whole-house treatment system</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed'>
            For context on the broader treatment landscape, see our <Link href='/guides/well-water-treatment-options' className='font-semibold underline' style={{ color: '#1D9E75' }}>well water treatment options guide</Link>.
          </p>
        </div>

        {/* How to Test for Iron Properly */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>How to Test for Iron Properly</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Unlike arsenic testing, iron testing is reasonably reliable with home test kits for basic presence confirmation. But for selecting the right treatment system, you need precise concentrations from a certified lab.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Basic Home Testing</h3>

          <p className='text-slate-700 leading-relaxed mb-8'>
            The 5-Minute Diagnostic above tells you whether you have ferrous, ferric, or bacterial iron. This is enough information to choose the general treatment category. Home test strips can confirm approximate iron concentration (low, medium, high) but are not accurate enough to size equipment.
          </p>

          <h3 className='text-2xl font-black text-slate-900 mb-4'>Certified Laboratory Testing</h3>

          <p className='text-slate-700 leading-relaxed mb-4'>
            For selecting and sizing treatment equipment, order a comprehensive well water test from a certified lab that includes:
          </p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-6'>
            <li><strong>Total iron</strong> (in mg/L)</li>
            <li><strong>Ferrous iron vs ferric iron breakdown</strong> (if available)</li>
            <li><strong>Manganese</strong> (often co-occurs with iron, affects treatment choice)</li>
            <li><strong>pH</strong> (affects which treatment media works best)</li>
            <li><strong>Hardness</strong> (affects whether a water softener is viable)</li>
            <li><strong>Hydrogen sulfide</strong> (causes sulfur smell, often present with iron bacteria)</li>
            <li><strong>Iron bacteria test</strong> (separate test, often not included in standard panels)</li>
          </ul>

          <p className='text-slate-700 leading-relaxed mb-6'>
            Certified testing costs $50 to $200 depending on the breadth of the panel. Services like Tap Score by SimpleLab and ETR Labs offer mail-in kits. Your state health department lab may offer reduced-cost testing for private wells.
          </p>

          <p className='text-slate-700 leading-relaxed'>
            For full guidance on well water testing, see our <Link href='/guides/how-to-test-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>how to test well water guide</Link> and <Link href='/reviews/best-well-water-test-kits' className='font-semibold underline' style={{ color: '#1D9E75' }}>best well water test kits review</Link>.
          </p>
        </div>

        {/* Treatment Options */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Treatment Options for Iron in Well Water</h2>

          <p className='text-slate-700 leading-relaxed mb-8'>
            Four main treatment approaches cover residential iron removal. Choice depends on iron type, concentration, and whether additional contaminants (manganese, sulfur, bacterial iron) are present.
          </p>

          {/* Option 1: Water Softener */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Option 1: Water Softener (Low Iron Levels)</h3>
            <p className='text-slate-700 leading-relaxed mb-3'>
              A standard water softener uses ion-exchange resin to capture ferrous iron along with calcium and magnesium. Softeners are not dedicated iron filters, but they handle low levels effectively.
            </p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Effective for:</strong> Ferrous iron only, under 2 to 5 mg/L concentration. Not effective against ferric iron, bacterial iron, or colloidal iron.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Cost:</strong> $500 to $2,000 for a residential softener with installation.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Maintenance:</strong> Salt refill every 4 to 8 weeks ($5 to $15 per refill). Resin bed replacement every 10 to 15 years.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Best for:</strong> Homes where iron is the only contaminant, levels are low, and water hardness treatment is also desired. Often the right choice when a well has 1 to 3 mg/L iron plus moderate hardness.</p>
            <p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Limitations:</strong> Iron fouls softener resin over time, reducing capacity. High iron levels require a dedicated iron filter installed before the softener, or the softener will fail prematurely.</p>
          </div>

          {/* Option 2: AIO Filter */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #854F0B' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Option 2: Air Injection Oxidation (AIO) Filter</h3>
            <p className='text-slate-700 leading-relaxed mb-3'>
              Air injection systems pump air into the incoming water, which oxidizes dissolved ferrous iron into particulate ferric iron. The particles are then captured by filter media (Katalox, BIRM, or greensand) and flushed out during periodic backwashing. AIO systems are the standard whole-house solution for moderate to high iron.
            </p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Effective for:</strong> Ferrous iron, ferric iron, hydrogen sulfide, and manganese simultaneously. Typical capacity 5 to 30 mg/L iron depending on system.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Cost:</strong> $800 to $3,000 installed. The <a href='https://amzn.to/42tN2QA' target='_blank' rel='nofollow sponsored noopener' className='font-semibold underline' style={{ color: '#1D9E75' }}>AIS10-25SXT Air Injection system</a> is a commonly recommended residential unit with a Fleck 5600SXT valve, handling typical residential iron loads. For a complete comparison of the top 5 iron filters ranked by iron type, including detailed specs, pricing, and real cost of ownership over 10 years, see our <Link href='/reviews/best-iron-filters' className='font-semibold underline' style={{ color: '#1D9E75' }}>best iron filters review</Link>.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Maintenance:</strong> Automatic backwashing requires no daily attention. Filter media replacement every 5 to 10 years ($200 to $400).</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Best for:</strong> Moderate to high ferrous and ferric iron (3 to 15 mg/L), wells with combined iron and sulfur problems, and homes wanting a single whole-house solution.</p>
            <p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Limitations:</strong> Does not treat bacterial iron (requires shock chlorination first). Backwashing uses 30 to 60 gallons of water per cycle. Professional installation typically required for electrical and plumbing integration.</p>
          </div>

          {/* Option 3: Shock + Continuous Chlorination */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #A32D2D' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Option 3: Shock Chlorination + Continuous Chlorination (Bacterial Iron)</h3>
            <p className='text-slate-700 leading-relaxed mb-3'>
              Bacterial iron requires a completely different approach because the problem is living organisms, not just a metal. Treatment is a two-step process:
            </p>
            <p className='text-slate-700 leading-relaxed mb-3'>
              <strong className='text-slate-900'>Step 1: Shock chlorination</strong> floods the well with high-concentration chlorine (typically 100 to 200 ppm) for 12 to 24 hours to kill the bacterial colony. This is DIY-feasible for most homeowners but requires following specific procedures to avoid damaging the pump or contaminating other parts of the system. See our <Link href='/guides/how-to-shock-chlorinate-well' className='font-semibold underline' style={{ color: '#1D9E75' }}>shock chlorination guide</Link> for the full procedure.
            </p>
            <p className='text-slate-700 leading-relaxed mb-3'>
              <strong className='text-slate-900'>Step 2: Continuous chlorination + catalytic carbon filtration</strong> (for persistent cases) injects low-level chlorine continuously into the water supply to prevent bacterial regrowth, followed by a carbon filter that removes the chlorine before the water reaches taps.
            </p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Cost:</strong> Shock chlorination alone costs $50 to $150 for supplies (chlorine bleach, garden hose, pressure gauge). Continuous chlorination systems cost $1,000 to $3,000 installed.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Best for:</strong> Any well with confirmed bacterial iron. Often required before any other iron filter will function correctly.</p>
            <p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Limitations:</strong> Shock chlorination may need to be repeated annually or semi-annually if bacterial iron returns. Continuous chlorination requires ongoing chlorine refill and annual system maintenance.</p>
          </div>

          {/* Option 4: Greensand */}
          <div className='rounded-xl p-6 mb-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #6B3F09' }}>
            <h3 className='text-2xl font-black text-slate-900 mb-3'>Option 4: Manganese Greensand Filter</h3>
            <p className='text-slate-700 leading-relaxed mb-3'>
              Manganese greensand is a specialized iron filter media that removes iron through contact filtration, typically regenerated with potassium permanganate. Greensand systems predate air injection technology and are still used for specific water chemistry.
            </p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Effective for:</strong> Ferrous iron up to 15 mg/L, manganese up to 5 mg/L. Works well in water with pH between 6.5 and 8.5.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Cost:</strong> $1,200 to $2,500 installed. Similar cost to AIO but requires potassium permanganate refill.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Maintenance:</strong> Potassium permanganate refill every 3 to 6 weeks. Media replacement every 5 to 8 years.</p>
            <p className='text-slate-700 leading-relaxed mb-2'><strong className='text-slate-900'>Best for:</strong> Homes with both iron and manganese, water chemistry compatible with greensand, and owners comfortable with chemical handling.</p>
            <p className='text-slate-700 leading-relaxed'><strong className='text-slate-900'>Limitations:</strong> Potassium permanganate is a strong oxidizer that requires careful handling. Less forgiving of water chemistry variations than air injection systems. Being gradually replaced by AIO systems in new installations.</p>
          </div>
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
                  <td className='p-3 text-slate-700'>Water softener (low iron)</td>
                  <td className='p-3 text-slate-700'>$500 to $1,500</td>
                  <td className='p-3 text-slate-700'>$300 to $800</td>
                  <td className='p-3 text-slate-700'>$100 to $200</td>
                  <td className='p-3 text-slate-700'>$1,800 to $4,300</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Air injection oxidation filter</td>
                  <td className='p-3 text-slate-700'>$800 to $2,500</td>
                  <td className='p-3 text-slate-700'>$500 to $1,500</td>
                  <td className='p-3 text-slate-700'>$150 to $300</td>
                  <td className='p-3 text-slate-700'>$2,800 to $7,000</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Shock chlorination (DIY)</td>
                  <td className='p-3 text-slate-700'>$50 to $150</td>
                  <td className='p-3 text-slate-700'>$0</td>
                  <td className='p-3 text-slate-700'>$50 to $150 per treatment</td>
                  <td className='p-3 text-slate-700'>$500 to $1,500</td>
                </tr>
                <tr className='border-t border-slate-200 bg-slate-50'>
                  <td className='p-3 text-slate-700'>Continuous chlorination system</td>
                  <td className='p-3 text-slate-700'>$1,000 to $3,000</td>
                  <td className='p-3 text-slate-700'>$500 to $1,500</td>
                  <td className='p-3 text-slate-700'>$200 to $400</td>
                  <td className='p-3 text-slate-700'>$3,500 to $8,500</td>
                </tr>
                <tr className='border-t border-slate-200'>
                  <td className='p-3 text-slate-700'>Manganese greensand filter</td>
                  <td className='p-3 text-slate-700'>$1,200 to $2,500</td>
                  <td className='p-3 text-slate-700'>$500 to $1,500</td>
                  <td className='p-3 text-slate-700'>$150 to $300</td>
                  <td className='p-3 text-slate-700'>$3,200 to $7,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className='text-slate-700 leading-relaxed'>
            For homes with untreated iron, the 20-year cost of accumulated household damage (failed appliances, stained fixtures, reduced home value) typically runs $3,000 to $8,000. Any treatment system that costs less than that pays for itself within the useful life of the equipment.
          </p>
          <p className='text-slate-700 leading-relaxed mt-4'>
            For a personalized iron filter cost estimate based on your water test results, home size, and region, use our <Link href='/cost-guides/well-water-treatment-cost-calculator' className='text-[#0F6E56] underline font-semibold hover:text-[#0a4f3e]'>well water treatment cost calculator</Link>.
          </p>
        </div>

        {/* DIY vs Professional */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>DIY vs Professional Installation</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            The DIY vs Professional decision for iron treatment is often the biggest financial decision in the whole project, because an undersized or incorrectly installed system can waste the full purchase price and require starting over.
          </p>

          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>DIY makes sense if all of the following are true:</strong>
          </p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-8'>
            <li>You have confirmed iron type through a glass test AND a certified lab report</li>
            <li>Your iron concentration is on the low end of your type&apos;s treatable range</li>
            <li>You have basic plumbing and electrical skills (comfortable with copper or PEX, comfortable running a 20-amp circuit)</li>
            <li>You are installing a straightforward water softener (for low ferrous iron) or performing shock chlorination (for bacterial iron)</li>
            <li>You are NOT trying to size your own air injection oxidation system</li>
          </ul>

          <p className='text-slate-700 leading-relaxed mb-4'>
            <strong>Hire a licensed water treatment professional if any of the following are true:</strong>
          </p>

          <ul className='list-disc list-outside ml-5 space-y-2 text-slate-700 leading-relaxed mb-8'>
            <li>You have high iron concentration (above 5 mg/L of ferrous or ferric iron)</li>
            <li>You have confirmed bacterial iron that has returned after prior shock chlorination attempts</li>
            <li>You have colloidal iron or complex water chemistry (multiple contaminants, unusual pH)</li>
            <li>You are installing an air injection oxidation system (correct sizing requires a water analysis most homeowners cannot do accurately)</li>
            <li>You have combustion appliances, septic drainage concerns, or other complications in your water system</li>
            <li>Your test results show iron PLUS manganese PLUS hydrogen sulfide (common combination requiring integrated treatment)</li>
          </ul>

          <p className='text-slate-700 leading-relaxed mb-6'>
            For a moderate iron problem (2 to 8 mg/L ferrous plus ferric), a licensed water treatment professional installing an AIO system costs $1,500 to $3,500 total. Compared to the 20-year damage cost of $3,000 to $8,000 from untreated iron, this is a clearly cost-effective investment, and a professional install protects against the far more expensive scenario of buying the wrong equipment, installing it incorrectly, and having to replace it within 3 years.
          </p>

          <p className='text-slate-700 leading-relaxed mb-8'>
            The single most common iron treatment mistake is buying an undersized water softener based on low iron test results, then discovering six months later that the iron level was actually higher than the initial test showed (iron concentrations vary seasonally) and the softener has already failed. A professional water analysis before purchase typically costs $100 to $300 and prevents this scenario entirely.
          </p>

          <div className='rounded-xl p-6 mb-6' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
            <p className='font-bold text-slate-900 mb-2'>Need a well water treatment professional?</p>
            <p className='text-slate-700 leading-relaxed'>
              Iron treatment requires correct sizing based on your specific water chemistry (iron type, concentration, pH, hardness, and co-occurring contaminants). A licensed installer can test your water, recommend the right system, and install it correctly. <Link href='/get-quote' className='text-[#854F0B] underline font-semibold hover:text-[#6B3F09]'>Get free quotes from licensed well water specialists near you.</Link>
            </p>
          </div>
        </div>

        {/* Common Mistakes */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Common Mistakes</h2>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Installing a water softener for high iron levels.</strong> Softeners handle only low ferrous iron (under 2 to 5 mg/L). Above that, the softener&apos;s resin fouls quickly and the softener fails, often within 6 to 12 months.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Installing an iron filter without addressing bacterial iron first.</strong> Iron filters accumulate bacterial iron biofilm and lose effectiveness rapidly. Shock chlorinate the well first if you have bacterial iron.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Not testing for the specific iron type before buying equipment.</strong> Ferrous iron, ferric iron, bacterial iron, and colloidal iron all require different treatment. Equipment designed for one type often fails on another.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Assuming a whole-house sediment filter removes iron.</strong> Standard sediment filters capture particulate ferric iron but miss dissolved ferrous iron entirely. A home with mostly ferrous iron installing a sediment filter will see no improvement.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Skipping manganese testing.</strong> Manganese almost always co-occurs with iron in well water and causes black staining. A system sized only for iron may fail to address manganese, leaving the homeowner with half-solved water.
          </p>

          <p className='text-slate-700 leading-relaxed mb-6'>
            <strong>Ignoring pH and water chemistry.</strong> Iron treatment media (greensand, BIRM, Katalox) require specific pH ranges to function. Water with pH below 6.5 or above 8.5 may need pH adjustment before iron filtration will work.
          </p>

          <p className='text-slate-700 leading-relaxed'>
            <strong>Buying the cheapest equipment to save money.</strong> Undersized or poor-quality iron equipment often fails within 3 to 5 years, requiring replacement. A properly sized professional-grade system lasts 15 to 20 years.
          </p>
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Related Guides</h2>
          <div className='space-y-3'>
            <Link href='/reviews/best-iron-filters' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Iron Filters for Well Water</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
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
            <Link href='/guides/how-to-shock-chlorinate-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Shock Chlorinate a Well</span>
            </Link>
            <Link href='/guides/hard-water-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Hard Water from a Well</span>
            </Link>
            <Link href='/reviews/best-whole-house-water-filters' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Whole House Water Filters</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
          </div>
        </div>

        {/* FAQs */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Frequently Asked Questions</h2>

          <div className='space-y-8'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Is iron in well water dangerous to drink?</h3>
              <p className='text-slate-700 leading-relaxed'>Iron in well water is not dangerous at typical residential concentrations. The EPA classifies iron as a Secondary Contaminant with a recommended limit of 0.3 mg/L set for aesthetic reasons (taste, color, staining), not health reasons. Iron is an essential nutrient for human health, and typical well water levels (0.3 to 3 mg/L) contribute only a small fraction of the daily recommended intake of 8 to 18 mg per day for adults. Two exceptions apply: people with hereditary hemochromatosis (a genetic condition affecting about 1 in 200 people of Northern European descent) should minimize all iron sources including drinking water, and infants under 12 months should not have water above 0.3 mg/L used for formula preparation because infant digestive systems cannot handle excess iron. For everyone else, the cost of iron in well water is aesthetic and financial (staining, plumbing damage, failed appliances) rather than a health risk.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How do I know what type of iron I have in my well water?</h3>
              <p className='text-slate-700 leading-relaxed'>Perform a 5-minute diagnostic: fill a clear glass with cold well water that has run for 30 seconds, set it on the counter, and observe for 5 minutes. If the water is clear when poured but turns red or brown while sitting, you have ferrous iron (clear-water iron). If the water comes out already red, orange, or yellow, you have ferric iron (red-water iron). If there is reddish-brown slime in toilet tanks or an oily sheen on the water surface, you have bacterial iron. If the water has a pink or reddish tinge that does not settle out even after hours, you have colloidal iron. Most wells have a mixture of ferrous and ferric iron; certified laboratory testing ($50 to $200) confirms exact concentrations and is essential before sizing treatment equipment. The iron type determines which treatment works: water softeners for low ferrous iron, air injection oxidation filters for moderate to high ferrous and ferric iron, shock chlorination for bacterial iron, and professional water analysis for colloidal iron.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How much does it cost to remove iron from well water?</h3>
              <p className='text-slate-700 leading-relaxed'>Treatment costs vary by approach and iron severity. A water softener for low ferrous iron (under 2 to 5 mg/L) costs $500 to $1,500 for the system plus $300 to $800 installation, with annual maintenance of $100 to $200 for salt and resin care. An air injection oxidation filter for moderate to high iron (3 to 15 mg/L) costs $800 to $2,500 for the system plus $500 to $1,500 installation, with annual maintenance of $150 to $300 for media replacement every 5 to 10 years. Shock chlorination for bacterial iron costs $50 to $150 in DIY supplies but may need to be repeated annually. Continuous chlorination systems for persistent bacterial iron cost $1,000 to $3,000 installed. For homes with untreated iron, the 20-year cost of accumulated household damage (failed appliances, stained fixtures, increased plumbing repair) typically runs $3,000 to $8,000, meaning nearly any treatment system pays for itself within 5 to 15 years.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Will a water softener remove iron from well water?</h3>
              <p className='text-slate-700 leading-relaxed'>A water softener removes iron only at low concentrations (typically under 2 to 5 mg/L of ferrous iron). Above that level, iron fouls the softener&apos;s ion-exchange resin rapidly, causing the softener to lose capacity within 6 to 12 months. Water softeners are never effective against ferric iron (already oxidized, passes through), bacterial iron (living organisms that clog the resin), or colloidal iron (particles too fine to capture). For wells with more than 2 to 5 mg/L of iron, install a dedicated iron filter (typically an air injection oxidation system) before the softener. The iron filter handles iron removal; the softener handles hardness. This combination is common in homes where both iron and hardness are problems. Do not rely on a softener alone as an iron treatment unless certified testing confirms low ferrous iron levels and no other iron types present.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What is an air injection iron filter and how does it work?</h3>
              <p className='text-slate-700 leading-relaxed'>An air injection oxidation (AIO) filter is the standard whole-house iron treatment for moderate to high iron concentrations. The system works by pumping air into the incoming well water, which oxidizes dissolved ferrous iron (invisible, Fe2+) into particulate ferric iron (solid particles, Fe3+). The ferric iron particles are then captured by filter media (typically Katalox Light, BIRM, or manganese greensand) inside the main tank. Periodic automatic backwashing (typically daily) flushes accumulated iron particles down the drain and refreshes the media. AIO systems handle 5 to 30 mg/L of iron depending on the specific system and can simultaneously treat hydrogen sulfide (rotten-egg smell) and manganese. AIO systems cost $800 to $2,500 installed and last 15 to 20 years with proper maintenance (media replacement every 5 to 10 years). They do not treat bacterial iron, which requires shock chlorination first, but they handle ferrous iron, ferric iron, and mixed-type iron problems effectively.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>Can I remove iron from well water with a carbon filter or reverse osmosis system?</h3>
              <p className='text-slate-700 leading-relaxed'>Standard activated carbon filters do NOT effectively remove iron from well water. Carbon removes chlorine, VOCs, and improves taste and odor, but iron passes through carbon filters unchanged. Reverse osmosis (RO) systems CAN remove iron, but only at the point of use (typically kitchen sink drinking water) and only after pre-filtration to remove the bulk of iron before the RO membrane. An RO system without iron pre-treatment will foul the membrane within weeks to months, requiring expensive membrane replacement. For whole-house iron removal, always install a dedicated iron filter (AIO, greensand, or softener for low iron) rather than relying on carbon or RO alone. RO can be added after iron pre-treatment as a final polish for drinking water, but it is not a primary iron treatment.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>What is iron bacteria and is it dangerous?</h3>
              <p className='text-slate-700 leading-relaxed'>Iron bacteria are naturally occurring microorganisms that feed on iron in well water and produce a slimy reddish-brown biofilm. According to the EPA, iron bacteria themselves are not known to cause disease in humans. However, the biofilm they create can harbor other, potentially harmful bacteria and clog plumbing, foul water treatment equipment, and produce unpleasant tastes and odors (often described as sewage, swamp, or musty smells). Signs of iron bacteria include reddish-brown slime in toilet tanks, oily or rainbow-colored sheen on water surfaces, clogs in low-flow areas of plumbing, and iron filters that fail rapidly. Treatment requires killing the bacterial colony first (typically through shock chlorination) before other iron treatments will work. For wells with persistent iron bacteria that return after shock chlorination, continuous chlorination followed by catalytic carbon filtration is the standard solution. Iron bacteria cannot be filtered out directly; the bacteria must be killed chemically first.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-3'>How often should I test for iron in my well water?</h3>
              <p className='text-slate-700 leading-relaxed'>For wells with no known iron problem, test every 3 to 5 years as part of routine well water testing. For wells with existing iron treatment systems, test annually to verify the system is still reducing iron to acceptable levels. For wells where iron levels are close to the 0.3 mg/L threshold (between 0.1 and 0.5 mg/L), test annually to track whether levels are trending upward. After any major change to the well (new pump, increased depth, shock chlorination, flooding, or nearby construction), retest within 3 to 6 months because iron levels can shift with changes in water table or pump operation. When testing, order a comprehensive well water panel that includes total iron, ferrous vs ferric breakdown if available, manganese, pH, hardness, and hydrogen sulfide. Certified laboratory testing costs $50 to $200 depending on breadth. For general well water testing frequency guidance, see our <Link href='/guides/how-to-test-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>how to test well water guide</Link>.</p>
            </div>
          </div>
        </div>

        {/* Glossary */}
        <div className='border-t border-slate-200 pt-12 mb-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-6'>Glossary</h2>

          <div className='space-y-6'>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Iron (Fe)</h3>
              <p className='text-slate-700 leading-relaxed'>Iron is a naturally occurring chemical element (atomic symbol Fe) that is essential to human nutrition but causes significant aesthetic and household damage problems when present in well water at levels above 0.3 mg/L. Iron enters well water primarily through natural dissolution from iron-bearing rocks and soil, with additional sources from corroded pipes in older well casings and household plumbing. Iron in water exists in multiple forms (ferrous, ferric, bacterial, and colloidal), each requiring different treatment approaches. The EPA classifies iron as a Secondary Contaminant with a recommended limit of 0.3 mg/L based on taste, color, and staining rather than health risk. Iron in well water causes orange staining on fixtures and laundry, metallic taste, early appliance failure, and plumbing damage totaling an estimated $3,000 to $8,000 over 20 years for typical affected homes.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Ferrous iron (clear-water iron)</h3>
              <p className='text-slate-700 leading-relaxed'>Ferrous iron is the reduced chemical form of iron (Fe2+) that is completely dissolved in water and invisible to the eye. Water containing ferrous iron appears clear when drawn from the tap but turns red, brown, or yellow as the iron oxidizes on exposure to air. Ferrous iron is the most common form in deep wells and aquifers with low oxygen content. Treatment options include water softeners (for low concentrations under 2 to 5 mg/L) and air injection oxidation filters (for moderate to high concentrations up to 10 to 30 mg/L). Ferrous iron is distinguished from ferric iron by the 5-Minute Diagnostic: ferrous water is initially clear and changes color while sitting, while ferric water is already colored when drawn.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Ferric iron (red-water iron)</h3>
              <p className='text-slate-700 leading-relaxed'>Ferric iron is the oxidized chemical form of iron (Fe3+) that exists as small solid particles suspended in water. Water containing ferric iron appears red, orange, yellow, or brown directly from the tap because the iron has already oxidized before reaching the faucet. Ferric iron is more common in shallow wells with greater oxygen exposure and in wells with aerated aquifers. Treatment options include sediment filters (for low concentrations), backwashing iron filters with media like Katalox or BIRM (for moderate concentrations), and air injection oxidation systems (which handle both ferrous and ferric iron simultaneously). Ferric iron is easier to remove than ferrous iron because the particles are already in a filterable form.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Bacterial iron (iron bacteria)</h3>
              <p className='text-slate-700 leading-relaxed'>Bacterial iron refers to iron-loving bacteria (species including Gallionella, Leptothrix, and Crenothrix) that naturally occur in well water and metabolize dissolved iron. The bacteria themselves are not directly harmful to human health according to EPA guidance, but they produce a slimy reddish-brown biofilm that clogs plumbing, fouls water treatment equipment, and produces foul tastes and odors. Bacterial iron is identified by slime deposits in toilet tanks, oily rainbow sheen on water surfaces, and persistent iron problems that worsen over time despite filtration. Treatment requires a two-step approach: shock chlorination to kill the existing bacterial colony, followed by filter-based treatment for residual iron. For persistent bacterial iron that returns after shock chlorination, continuous chlorination systems provide long-term control.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Colloidal iron</h3>
              <p className='text-slate-700 leading-relaxed'>Colloidal iron is iron in extremely fine particle form (smaller than 1 micron) that remains suspended in water due to the particles&apos; small size and electrical charge. Water containing colloidal iron has a pink or reddish tinge that does not settle out even after hours of standing, distinguishing it from ferric iron (which does settle) and ferrous iron (which changes color). Colloidal iron is the hardest of the four iron types to remove because standard sediment filters and most iron filters cannot capture particles this small. Treatment typically requires chemical oxidation combined with a coagulant to bind the fine particles together, followed by fine filtration. Colloidal iron treatment is almost always a professional installation requiring custom water analysis. Colloidal iron is less common than ferrous or ferric iron but can occur in wells with high organic content or complex water chemistry.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Secondary Maximum Contaminant Level (SMCL)</h3>
              <p className='text-slate-700 leading-relaxed'>The Secondary Maximum Contaminant Level is a non-enforceable EPA guideline for contaminants that affect the aesthetic quality of drinking water (taste, color, odor, staining) rather than health. For iron, the SMCL is 0.3 mg/L (or 0.3 ppm); for manganese, it is 0.05 mg/L. SMCLs differ fundamentally from Primary MCLs (health-based legal limits for contaminants like arsenic, lead, and nitrates) in that SMCLs are recommendations, not requirements. Public water systems are not federally required to meet SMCLs, though many states adopt them as enforceable state-level standards. Private wells are never federally regulated for SMCL contaminants. The 0.3 mg/L iron SMCL represents the threshold above which iron starts causing visible staining, taste issues, and plumbing damage in typical residential use.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Air injection oxidation (AIO)</h3>
              <p className='text-slate-700 leading-relaxed'>Air injection oxidation is the most common whole-house iron treatment technology for moderate to high iron concentrations. An AIO system pumps air into the incoming well water stream, which oxidizes dissolved ferrous iron (Fe2+) into particulate ferric iron (Fe3+). The oxidized iron particles are then captured by filter media inside the main tank, typically Katalox Light, BIRM, or manganese greensand. Automatic periodic backwashing flushes accumulated iron particles down the drain and refreshes the media bed. AIO systems handle 5 to 30 mg/L of iron depending on the specific system, simultaneously treat hydrogen sulfide and manganese, and cost $800 to $2,500 installed. AIO is the industry standard for whole-house iron removal in wells with moderate to high iron, though it does not handle bacterial iron (which requires shock chlorination first) or colloidal iron (which requires professional water analysis).</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Shock chlorination</h3>
              <p className='text-slate-700 leading-relaxed'>Shock chlorination is a disinfection procedure that floods a well with high-concentration chlorine (typically 100 to 200 ppm) to kill bacteria, including iron bacteria, in the well casing and plumbing. The procedure involves adding household chlorine bleach or calcium hypochlorite to the well, circulating the chlorinated water through the plumbing system, and allowing 12 to 24 hours of contact time before flushing the chlorine out. Shock chlorination is DIY-feasible for most homeowners and costs $50 to $150 in supplies (bleach, pressure gauge, garden hose). For iron bacteria specifically, shock chlorination is the essential first step before any iron filter will function correctly because iron bacteria biofilm fouls filter media rapidly. Shock chlorination may need to be repeated annually or semi-annually in wells with persistent iron bacteria.</p>
            </div>
            <div>
              <h3 className='text-xl font-bold text-slate-900 mb-2'>Manganese</h3>
              <p className='text-slate-700 leading-relaxed'>Manganese is a chemical element (atomic symbol Mn) that almost always co-occurs with iron in well water and causes similar but distinct problems. While iron causes orange and red staining, manganese causes black or dark brown staining on fixtures, laundry, and appliances. The EPA&apos;s Secondary MCL for manganese is 0.05 mg/L, significantly lower than iron&apos;s 0.3 mg/L. Manganese in well water is typically addressed with the same treatment equipment as iron (air injection oxidation filters, greensand filters, water softeners), though system sizing must account for both contaminants. Wells with iron and manganese often also have hydrogen sulfide (rotten-egg smell), creating a three-contaminant problem that AIO systems can address in a single unit. Comprehensive well water testing should always include manganese alongside iron.</p>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className='my-8'>
          <BeehiivEmailCapture />
        </div>

        {/* Lead Form */}
        <div className='border-t border-slate-200 pt-12'>
          <h2 className='text-3xl font-black text-slate-900 mb-2'>Get Expert Help</h2>
          <p className='text-slate-600 mb-6'>Connect with a licensed water treatment specialist in your area for a free, no-obligation quote on iron testing, whole-house filter installation, or well water treatment.</p>
          <LeadForm />
        </div>

      </article>
    </>
  )
}

