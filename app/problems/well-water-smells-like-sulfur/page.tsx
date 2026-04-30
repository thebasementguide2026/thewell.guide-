import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'
import BeehiivEmailCapture from '@/components/BeehiivEmailCapture'

export const metadata: Metadata = {
  title: 'Well Water Smells Like Sulfur or Rotten Eggs: Causes and Fixes | The Well Guide',
  description: 'If your well water smells like sulfur or rotten eggs, hydrogen sulfide is the cause. Four sources, hot vs. cold water diagnosis, and every treatment option.',
  openGraph: {
    title: 'Well Water Smells Like Sulfur or Rotten Eggs: Causes and Fixes',
    description: 'If your well water smells like sulfur or rotten eggs, hydrogen sulfide is the cause. Four sources, hot vs. cold water diagnosis, and every treatment option.',
    url: 'https://www.thewell.guide/problems/well-water-smells-like-sulfur',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/glassofwater.jpg', width: 1200, height: 630, alt: 'Glass of water on a kitchen counter' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/problems/well-water-smells-like-sulfur' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Why does my well water smell like rotten eggs only in the hot water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Hot water only means the source is almost certainly your water heater's magnesium anode rod. The rod reacts with sulfate-reducing bacteria and sulfates in the water inside the warm tank, producing hydrogen sulfide. The fix is replacing the magnesium anode rod with an aluminum-zinc alloy anode rod or a powered titanium anode. This resolves completely in most cases.",
      },
    },
    {
      '@type': 'Question',
      name: 'Is sulfur smell in well water dangerous?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In the vast majority of cases, no. Sulfate-reducing bacteria that produce hydrogen sulfide are not pathogenic. Naturally occurring hydrogen sulfide in groundwater is an aesthetic problem, not a direct health hazard at residential concentrations. However, always test for coliform bacteria and nitrates when you first notice the sulfur smell — the conditions that allow sulfur bacteria in can also allow harmful pathogens in.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will a water softener fix the sulfur smell in my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Water softeners do not remove hydrogen sulfide and can make the problem worse by creating a favorable environment for sulfate-reducing bacteria and accelerating anode rod consumption in the water heater. You need a dedicated sulfur treatment system — either a whole-house air injection filter, continuous chlorination, or anode rod replacement depending on the source.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I permanently get rid of the sulfur smell in my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The permanent fix depends on the source. For hot-water-only odor from the anode rod: replace with a powered anode rod. For sulfate-reducing bacteria in the well: an air injection oxidizing filter provides ongoing treatment. For naturally occurring hydrogen sulfide from the aquifer: a whole-house treatment system matched to your measured concentration. Test the water first to determine the source and concentration before selecting a system.',
      },
    },
    {
      '@type': 'Question',
      name: 'Why does the sulfur smell in my well water come and go?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Intermittent odor often means the source is condition-related rather than constant. Common causes include seasonal water table changes, periods of low water use allowing stagnant water to develop more hydrogen sulfide, or bacterial growth that fluctuates with temperature. If the smell correlates with heavy rain, check the well cap and casing for signs of surface water entry and test for coliform bacteria.',
      },
    },
    {
      '@type': 'Question',
      name: 'My water smells like rotten eggs after being away for a week. Is that normal?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, this is common. When water sits stagnant in your pressure tank, pipes, and water heater, sulfate-reducing bacteria multiply and produce more hydrogen sulfide. The smell is strongest at first draw after standby and diminishes as fresh water cycles through. If the odor only appears after non-use periods and clears quickly, shock chlorination followed by anode rod replacement usually resolves it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does sulfur smell mean my well is contaminated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Not necessarily. The smell means hydrogen sulfide is present, and the source is almost always natural — aquifer geology or sulfate-reducing bacteria, neither of which indicates sewage or chemical contamination. However, always test for coliform bacteria and nitrates at the same time you investigate the sulfur issue to rule out the possibility that the conditions causing the smell have also introduced harmful contamination.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I shock chlorinate my own well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Shock chlorination is a procedure homeowners can do with standard household bleach. The basic steps involve calculating your well water volume, mixing bleach at approximately 3 pints per 100 gallons of well water, introducing the solution into the well casing, circulating it to every tap, allowing 12 to 24 hours contact time, then flushing. Your county health department or state extension service will have detailed instructions. Call a licensed well contractor if you are unsure about any step.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Water Smells Like Sulfur or Rotten Eggs: Causes and Fixes',
  description: 'If your well water smells like sulfur or rotten eggs, hydrogen sulfide is the cause. Four sources, hot vs. cold water diagnosis, and every treatment option.',
  image: 'https://www.thewell.guide/glassofwater.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/problems/well-water-smells-like-sulfur',
}

export default function WellWaterSmellsLikeSulfur() {
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
          src='/glassofwater.jpg'
          alt='Glass of water on a kitchen counter'
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
            Well Water Smells Like<br />
            Sulfur or Rotten Eggs:<br />
            <span style={{ color: '#5DCAA5' }}>Causes and Fixes</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            The source determines the fix entirely. Start with the hot-water-only vs cold-water diagnosis.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated Mar 2026 &middot; 14 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Problems', href: '/problems' },
        { label: 'Well Water Smells Like Sulfur' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>The rotten egg smell in well water is hydrogen sulfide gas. The source determines the fix entirely. Start here: fill a glass of cold water and a glass of hot water and smell both. Hot water only means your water heater{`'`}s magnesium anode rod is almost certainly the cause — replace it with an aluminum-zinc alloy or powered anode rod and the smell goes away. Both hot and cold means the source is in the well or aquifer — test for hydrogen sulfide concentration before buying any treatment, because the right fix at 0.5 mg/L is completely different from the right fix at 7 mg/L. The smell is almost always a nuisance rather than a health hazard, but always test for coliform bacteria when you first notice it.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>That smell. You fill a glass at the kitchen tap and it hits you before the water even reaches your lips. It is unmistakable: sulfur, rotten eggs, something that does not belong in drinking water. You are not imagining it and your well is not broken. Hydrogen sulfide is one of the most common water quality complaints from private well owners, and it affects wells in every region of the country, in every type of geology, in brand new systems and wells that have run clean for decades.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The frustration is not just the smell itself — it is that most of the advice out there jumps straight to treatment without explaining that the source of the hydrogen sulfide completely changes what you need to do. Shock chlorinating your well will not fix a problem that starts inside your water heater. Replacing your water heater{`'`}s anode rod will not fix a problem that starts in the aquifer. Getting this wrong costs money and leaves the smell exactly where it started.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This guide walks through every source, shows you how to diagnose which one you have in about five minutes, and then matches each source to the treatment options that actually work.</p>
        </div>

        {/* Is It Actually Sulfur? */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Diagnosis</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Is It Actually Sulfur? How to Confirm Before You Do Anything</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before diagnosing the source, confirm you are actually dealing with hydrogen sulfide and not a different odor problem. The rotten egg smell is distinctive but a few other odors are sometimes mistaken for it — and they have completely different causes and fixes.</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Rotten egg or sulfur</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Sharp, unmistakable, sulfurous. Often strongest when you first run the tap after water has been sitting. Sometimes detected more strongly in the shower because heat volatilizes the gas faster. This is hydrogen sulfide. Keep reading.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Musty or earthy smell</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Damp basement smell in your water. Usually indicates iron bacteria or general bacterial activity in the well, plumbing, or pressure tank rather than hydrogen sulfide specifically. Requires bacterial testing and treatment aimed at iron bacteria rather than sulfate-reducing bacteria.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Chemical, gasoline, or solvent smell</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A safety concern. Stop using the water immediately, test for VOCs and coliform bacteria, and contact your county health department. This pattern suggests contamination from a nearby fuel leak, industrial site, or agricultural chemical source.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Bleach or chlorine smell</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>If you recently shock chlorinated the well, this is expected and will flush out within 24 to 48 hours. If you have not chlorinated recently, this is unusual — contact your local water authority to check whether a public supply is nearby.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Metallic taste with mild odor</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Usually iron or manganese in the water, or corrosion from older pipes, rather than hydrogen sulfide. The smell is more of a flat mineral note than the sharp sulfurous punch of hydrogen sulfide. See our guide on <span className='text-slate-500'>brown or rusty well water</span> for diagnosis and treatment.</p>
            </div>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm mt-6'>If what you have is the sharp, rotten egg smell that is worse when water is running and fades in the open air — that is hydrogen sulfide. Continue with the diagnosis below.</p>
        </div>

        {/* What Causes the Sulfur Smell */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Science</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What Causes the Sulfur Smell: Hydrogen Sulfide</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The smell comes from hydrogen sulfide gas (H₂S), a colorless gas that dissolves readily in water and escapes as a vapor when water is disturbed — when you run a tap, fill a glass, or take a shower. Even at extremely low concentrations, the human nose detects it immediately. Most people can smell hydrogen sulfide at levels well below 0.5 milligrams per liter. The nose is, in this case, a very sensitive instrument.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Hydrogen sulfide does not have a federal drinking water standard because the smell makes the water essentially undrinkable long before concentrations reach levels that cause direct health harm. Penn State Extension notes that at the concentrations typically found in residential wells, hydrogen sulfide is an aesthetic concern rather than a health hazard. That said, it is corrosive to metals — it attacks copper, steel, galvanized pipe, and pump components — and it can combine with iron to form black iron sulfide deposits that stain fixtures, darken silverware, and clog well screens and pump intakes over time. Left untreated for years, a significant hydrogen sulfide problem shortens the life of your plumbing and pump.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>There is one exception to the {`"`}nuisance rather than hazard{`"`} framing: in very rare cases, the rotten egg smell can come from sewage contamination rather than natural hydrogen sulfide sources. This is uncommon but serious. When you first notice the sulfur smell, test for coliform bacteria and nitrates alongside any hydrogen sulfide investigation. If coliform bacteria are present, the contamination source needs to be identified and addressed immediately before treating the odor.</p>
        </div>

        {/* The Four Sources */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Sources</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Four Sources of Hydrogen Sulfide in Well Water</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Every case of sulfur-smelling well water originates from one or more of these four sources. Knowing which one you have is the entire diagnostic challenge — and it is simpler than most people think.</p>
        </div>

        {/* The Diagnosis */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Test</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Diagnosis: Hot Water Only vs Both Hot and Cold</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Before reading about the four sources in detail, do this five-minute test. It tells you which source you are almost certainly dealing with and saves you from reading content that does not apply to your situation.</p>

          <div className='space-y-3 mb-6'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 1:</strong> Wait at least two hours after the last water use in your home so water has been sitting in the system.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 2:</strong> Fill a glass from the cold water tap at your kitchen sink. Smell it. Note the intensity.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 3:</strong> Run the hot water for 30 seconds, then fill a glass. Smell it. Compare to the cold.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>What your results mean:</h3>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Smell in hot water only, none or very mild in cold</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>The source is almost certainly your water heater{`'`}s magnesium anode rod reacting with sulfate-reducing bacteria in the tank. The aquifer and well are not the primary problem. Start with anode rod replacement before any other treatment.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Smell in both hot and cold water, stronger in hot</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>The primary source is in the well or aquifer — sulfate-reducing bacteria in the system or naturally occurring hydrogen sulfide in the groundwater. The water heater amplifies the smell because heat drives off more gas. Whole-house treatment is needed, not just a heater fix. Test for hydrogen sulfide concentration before selecting a treatment system.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Smell in both hot and cold equally</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>The source is in the groundwater itself, in the well, or in the plumbing upstream of the water heater. Whole-house treatment is needed. Test for hydrogen sulfide concentration first.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Smell only when the hot water first runs in the morning, fades after a minute</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Strong indicator of SRB colonization in the water heater tank specifically. The bacteria produce hydrogen sulfide overnight in stagnant warm water. The smell clears as fresh water displaces it. Anode replacement and a tank disinfection flush are the starting point.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Smell intermittent or comes and goes with rainfall</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>May indicate surface water infiltrating a shallow or damaged well, or seasonal water table changes. Test for coliform bacteria immediately and inspect the well cap and casing.</p>
            </div>
          </div>

          <p className='text-slate-700 leading-relaxed text-sm mt-6'>Now that you know roughly which source you are dealing with, here is the detail on each one.</p>
        </div>

        {/* Source 1: Aquifer */}
        <div className='mb-16'>
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Source 1: The Aquifer Itself</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Groundwater in certain geological formations naturally contains hydrogen sulfide. The gas forms through the decay of organic matter and chemical reactions with sulfur-bearing minerals in the rock and soil surrounding the aquifer. Wells drilled into shale, sandstone, and certain sedimentary formations are most commonly affected. The hydrogen sulfide is present in the groundwater itself before it ever reaches your pump. This type of problem is consistent across time — the smell does not come and go, it is present in cold water at every tap, and it has likely been present since the well was drilled.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This is the most persistent and difficult-to-treat source because you cannot change the geology. Treatment must happen to the water after it leaves the well.</p>
        </div>

        {/* Source 2: SRB */}
        <div className='mb-16'>
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Source 2: Sulfate-Reducing Bacteria in the Well or Plumbing</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Sulfate-reducing bacteria (SRB) are anaerobic microorganisms that thrive in the low-oxygen environment inside a well casing, pressure tank, or plumbing system. They metabolize sulfate — a naturally occurring mineral compound in groundwater — and produce hydrogen sulfide as a metabolic byproduct. As Culligan{`'`}s water scientists describe it, these bacteria essentially breathe in sulfate and breathe out hydrogen sulfide, the same way humans breathe in oxygen and breathe out carbon dioxide.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>SRB contamination has several distinguishing characteristics. The smell is often strongest at first draw — the water that has been sitting in the pressure tank and pipes overnight — and may diminish somewhat as fresh water flows in. You may see black staining on fixtures, silverware, and inside pipes (iron sulfide, a reaction product of hydrogen sulfide and iron). You may see white, grey, black, or reddish-brown slime in the toilet tank or at tap aerators. SRB can coexist with iron bacteria and often make iron problems worse.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This source responds to shock chlorination as a first measure, but the relief is typically temporary — bacteria reestablish in the well environment within weeks to months. Permanent resolution usually requires ongoing treatment, most commonly continuous chlorination or an air injection oxidizing filter.</p>
        </div>

        {/* Source 3: Water Heater */}
        <div className='mb-16'>
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Source 3: The Water Heater Anode Rod</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>This is the source most homeowners do not know about, and it explains the most common pattern of sulfur complaints: smell in hot water only, none in cold.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Standard tank-style water heaters contain a sacrificial anode rod — a long metal rod inserted into the tank that corrodes preferentially to protect the steel tank from rusting. Most anode rods are made of magnesium. When sulfate-reducing bacteria are present in water with even trace sulfate content (which includes most private well water), they react with the magnesium anode in the warm, low-oxygen environment of the water heater tank and produce hydrogen sulfide. The warm temperature of the heater creates an ideal environment for SRB growth. The magnesium anode supplies the electrons that drive the reaction.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The result: hot water smells like sulfur, cold water from the same source smells fine. This pattern is almost diagnostic on its own.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>The fix is replacing the magnesium anode rod with an aluminum-zinc alloy anode rod or a powered (impressed current) titanium anode. The aluminum-zinc alloy rod is the standard first step — it provides corrosion protection without the sulfide-generating reaction. A powered anode rod uses low-voltage electrical current rather than metal sacrifice, eliminating the reaction entirely and providing permanent protection. Powered anode rods (such as the Corro-Protec) are more expensive than alloy rods but do not need replacement.</p>
          <p className='text-slate-700 leading-relaxed text-sm mt-4'>One important nuance: replacing the anode with a pure aluminum rod does not solve the problem because pure aluminum also drives the reaction. The rod must be an aluminum-zinc alloy (zinc is the key ingredient) or a powered anode. And removing the anode entirely — sometimes suggested as a quick fix — voids the water heater warranty and significantly shortens tank life.</p>
        </div>

        {/* Source 4: Sewage */}
        <div className='mb-16'>
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Source 4: Sewage or Pollution (Rare)</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>In rare cases, hydrogen sulfide in well water comes from a contaminated groundwater source — a nearby failing septic system, underground fuel leak, landfill, or industrial site. This source is less common than the three above and is usually accompanied by other signs of contamination: a coliform bacteria positive test, unusual taste beyond sulfur, or a known contamination event in the area. If you suspect a sewage or pollution source, stop using the water for drinking and cooking, test immediately for coliform bacteria, and contact your county health department.</p>
        </div>

        {/* Treatment Options */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Treatment</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Treatment Options by Source</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Once you know the source, match it to the right treatment. The table below gives you a quick reference before the detailed explanations.</p>

          {/* Treatment Table */}
          <div className='overflow-x-auto mb-8'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Source</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Best First Step</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Long-Term Solution</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>H₂S Level</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Typical Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Water heater anode</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Replace with Al-Zn or powered anode</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Powered anode rod</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Any</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$30 to $200 DIY</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>SRB in well or plumbing</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Shock chlorination</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Air injection filter or continuous chlorination</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Low to moderate</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Free to $300 (shock); $1,200 to $3,000 (filter installed)</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Aquifer geology (low H₂S)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Aeration or activated carbon</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Air injection oxidizing filter</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Under 2 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$800 to $1,500 installed</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Aquifer geology (moderate H₂S)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Air injection oxidizing filter</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Air injection + carbon polish</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>2 to 6 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$1,200 to $3,000 installed</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Aquifer geology (high H₂S)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Continuous chlorination + filter</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Hydrogen peroxide injection + carbon</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 6 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$800 to $2,000 installed</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Fixing the Water Heater Anode Rod */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Fixing the Water Heater Anode Rod</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If your diagnosis points to the water heater:</p>

          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Replace the magnesium anode with an aluminum-zinc alloy rod.</strong> This is the recommended first step for most households. The aluminum-zinc alloy provides corrosion protection without the sulfide-generating reaction of a magnesium rod. This typically costs $30 to $80 for the rod and one to two hours of labor if you hire a plumber. It is a DIY-friendly job for someone comfortable with basic plumbing. Fully drain and flush the tank with the new anode to remove bacteria before refilling.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Replace with a powered anode rod.</strong> A powered anode rod (such as the Corro-Protec or similar titanium impressed-current anode) uses low-voltage electricity rather than metal sacrifice to protect the tank. It generates no hydrogen sulfide reaction, requires no replacement, and provides a permanent solution. Powered anodes cost $100 to $200 and work in any tank-style water heater from any brand. This is the best long-term solution, particularly for households with water softeners, because softened water accelerates anode consumption and makes the odor worse with standard sacrificial anodes.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Flush and disinfect the tank.</strong> Before or alongside anode replacement, flushing the tank with a hydrogen peroxide solution kills the sulfate-reducing bacteria colonizing the tank. This provides immediate short-term relief. Use hydrogen peroxide rather than chlorine bleach inside the water heater — chlorine can leave an aftertaste and drives the pH up in ways that reduce its effectiveness.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Raise the water heater temperature temporarily.</strong> Setting the water heater to 160 degrees Fahrenheit for several hours kills sulfate-reducing bacteria in the tank. This provides temporary relief but does not address the anode reaction and is not a substitute for anode replacement. Also note that 160 degrees is a scalding risk — if you have young children in the household, turn the temperature back down before returning to normal use.</p>
            </div>
          </div>

          {/* Shock Chlorination */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Shock Chlorination for SRB in the Well</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>If your diagnosis points to sulfate-reducing bacteria in the well or plumbing:</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Shock chlorination introduces a high concentration of chlorine bleach into the well casing, where it circulates through the pump, pressure tank, and household plumbing to kill bacteria throughout the system. The procedure involves pouring a chlorine and water solution directly into the well (typically 3 pints of household bleach per 100 gallons of water volume), recirculating with a garden hose, running the chlorinated water to every tap until you smell chlorine at each one, then letting it sit for 12 to 24 hours before flushing.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Shock chlorination frequently provides complete relief from sulfur smell caused by SRB. The limitation is that sulfate-reducing bacteria reestablish in the well environment, especially in the biofilm on the casing walls, within weeks to several months. <a href='https://extension.psu.edu/water-testing-shock-chlorination' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>Penn State Extension</a> notes that in most cases, shock chlorination alone does not provide a permanent solution for SRB-caused odor. If the smell returns within a few months of shock chlorination, ongoing treatment is needed.</p>

          {/* Air Injection Filters */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Air Injection Oxidizing Filters (Whole-House)</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>For aquifer-based hydrogen sulfide or persistent SRB problems, an air injection oxidizing filter is the most common whole-house solution. These systems inject a pocket of air into the water as it enters from the well. Hydrogen sulfide gas, when exposed to oxygen, oxidizes and converts to elemental sulfur particles, which are then filtered out by the filter media. The system automatically backwashes overnight to flush out accumulated sulfur.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Air injection filters work well for hydrogen sulfide concentrations up to approximately 6 mg/L without additional chemistry. Below 2 mg/L, aeration alone — a simpler and less expensive system that agitates the water in a vented tank — may be sufficient. Penn State Extension recommends aeration specifically for concentrations below 2 mg/L as a cost-effective chemical-free option.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>For concentrations above 6 mg/L, air injection alone may not achieve full odor removal and is typically paired with a post-filter activated carbon stage to polish the remaining gas.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Whole-house air injection filter systems cost approximately $1,200 to $3,000 installed, depending on system size and local labor rates. They require minimal maintenance — periodic backwash media inspection and occasional media replacement, typically every 5 to 10 years.</p>

          {/* Continuous Chlorination */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Continuous Chlorination or Hydrogen Peroxide Injection</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>For high hydrogen sulfide concentrations above 6 mg/L, or for cases where air injection alone is insufficient, chemical injection is the standard approach. A small chemical feed pump injects a metered dose of chlorine or hydrogen peroxide into the water line upstream of a holding tank, providing at least 20 minutes of contact time. The oxidized sulfur particles are then removed by a backwashing filter.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The recommended dosage for chlorine injection is 2 mg/L of chlorine for each mg/L of hydrogen sulfide. An activated carbon filter installed downstream removes residual chlorine taste from the treated water.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Hydrogen peroxide injection is increasingly preferred over chlorine for residential applications because it is a stronger oxidizer, produces fewer byproducts, and does not leave a chlorine taste. It does less disinfection work than chlorine, so if bacterial contamination is also a concern, pairing with a UV disinfection system is recommended.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Both chlorine and hydrogen peroxide injection systems require routine maintenance: chemical tanks must be refilled regularly, mechanical filters must be backwashed, and carbon filters must be replaced periodically. The frequency depends on hydrogen sulfide concentration and household water usage.</p>

          {/* Activated Carbon */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Activated Carbon Filters (Low Concentrations Only)</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>For very low hydrogen sulfide concentrations below 1 mg/L, activated carbon filtration can be effective. Carbon adsorbs hydrogen sulfide on its surface, removing both the gas and the odor. The limitation is capacity — carbon exhausts relatively quickly when treating hydrogen sulfide, and at higher concentrations the carbon is consumed so rapidly that replacement becomes frequent and costly. Penn State Extension recommends carbon filtration specifically for concentrations below 1 mg/L. Above that threshold, it is most useful as a polishing stage after another primary treatment method, not as a standalone solution.</p>

          {/* What Does Not Work */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>What Does Not Work</h3>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Water softeners</strong> do not remove hydrogen sulfide. In fact, water softeners can make sulfur problems worse by creating an environment favorable to sulfate-reducing bacteria and by accelerating anode rod consumption in the water heater.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Standard reverse osmosis systems</strong> are not rated for hydrogen sulfide treatment. RO membranes require pre-treatment to remove hydrogen sulfide before it reaches the membrane — adding a carbon pre-filter can handle low concentrations, but H₂S at higher levels damages RO membranes.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Removing the anode rod entirely</strong> from the water heater eliminates the odor source but also eliminates the corrosion protection that keeps the tank from rusting through prematurely. This voids the manufacturer{`'`}s warranty. It is not a recommended solution.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-6'>Sulfur removal systems typically cost $1,500 to $4,000 fully installed depending on sulfur concentration, home size, and whether iron bacteria are also present. For a personalized estimate based on your specific situation, use our <Link href='/cost-guides/well-water-treatment-cost-calculator' className='underline font-semibold' style={{ color: '#0F6E56' }}>well water treatment cost calculator</Link>.</p>
        </div>

        {/* Safety */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Safety</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Does Sulfur Well Water Indicate a Safety Problem?</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Usually not. The Minnesota Department of Health states directly that in most cases, the rotten egg smell does not indicate a problem with the sanitary quality of the water. Sulfate-reducing bacteria that produce hydrogen sulfide are not pathogenic — they do not cause illness. Naturally occurring hydrogen sulfide from the aquifer is not a direct health hazard at concentrations found in residential wells.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>However, the smell should always prompt a coliform bacteria and nitrate test when you first notice it. This is because the conditions that allow surface contamination to enter a well — a compromised casing, a cracked cap, a nearby failing septic system — can introduce both sulfur bacteria and disease-causing pathogens at the same time. The sulfur bacteria are harmless, but they can be traveling companions with bacteria that are not. Testing rules out that possibility and gives you a clean picture of what is actually in the water.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>The one situation where hydrogen sulfide carries a genuine safety concern is in confined spaces. At high concentrations, hydrogen sulfide is toxic and displaces oxygen. Well pits and enclosed well houses should never be entered without proper ventilation when hydrogen sulfide is suspected. This is a professional safety matter — if you have an enclosed well space with a significant sulfur odor, contact a licensed well contractor rather than entering it yourself.</p>
        </div>

        {/* When to Call a Contractor */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Pro Help</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>When to Call a Well Contractor</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Handle the anode rod replacement and basic water heater diagnosis yourself if you are comfortable with plumbing. For everything else, involving a licensed water well contractor or water treatment professional is the right call.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Call a contractor when:</p>
          <ul className='list-disc list-inside space-y-2 text-slate-700 text-sm mb-4'>
            <li>The smell is in both hot and cold water and does not resolve after shock chlorination</li>
            <li>You need a whole-house treatment system sized and installed correctly</li>
            <li>The smell appeared suddenly after previously being absent, suggesting a change in the well condition</li>
            <li>You have any question about whether your well casing or cap may be compromised</li>
            <li>Coliform bacteria or nitrates are detected alongside the hydrogen sulfide</li>
            <li>You have an enclosed well pit or well house with a sulfur odor</li>
          </ul>
          <p className='text-slate-700 leading-relaxed text-sm'>A licensed water treatment specialist can test your water for exact hydrogen sulfide concentration, iron, manganese, and bacteria simultaneously, and recommend a system sized to your specific flow rate, concentration levels, and water chemistry. This matters because the wrong treatment system installed for the wrong concentration range either fails to remove the odor or wastes money on overkill. See our <Link href='/guides/complete-well-guide' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>complete well water guide</Link> for more on finding licensed well contractors in your state.</p>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>F A Q</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-3'>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Why does my well water smell like rotten eggs only in the hot water?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Hot water only means the source is almost certainly your water heater{`'`}s magnesium anode rod. The rod reacts with sulfate-reducing bacteria and trace sulfates in the water inside the warm, low-oxygen environment of the tank, producing hydrogen sulfide. The fix is replacing the magnesium anode rod with an aluminum-zinc alloy anode rod or a powered titanium anode. This is a common problem on private wells and resolves completely in most cases with the right anode replacement.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Is sulfur smell in well water dangerous?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>In the vast majority of cases, no. Sulfate-reducing bacteria that produce hydrogen sulfide are not pathogenic and do not cause illness. Naturally occurring hydrogen sulfide in groundwater is an aesthetic problem, not a direct health hazard at residential concentrations. However, always test for coliform bacteria and nitrates when you first notice the sulfur smell — the same conditions that allow sulfur bacteria into the well can allow harmful pathogens in too. And never enter a well pit or enclosed well space with a significant sulfur odor without proper ventilation.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Will a water softener fix the sulfur smell in my well water?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>No. Water softeners are not designed to remove hydrogen sulfide and will not reduce the sulfur smell. In fact, softeners can make the problem worse by creating a favorable environment for sulfate-reducing bacteria and by accelerating anode rod consumption in the water heater, intensifying the hot-water odor. You need a dedicated sulfur treatment system — either a whole-house air injection filter, continuous chlorination, or anode rod replacement depending on the source.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                How do I get rid of the sulfur smell in my well water permanently?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>The permanent fix depends entirely on the source. For hot-water-only odor from the anode rod: replace with a powered anode rod, which requires no maintenance and does not generate hydrogen sulfide. For sulfate-reducing bacteria in the well or plumbing: an air injection oxidizing filter with automatic backwash provides ongoing treatment without the recurring labor of shock chlorination. For naturally occurring hydrogen sulfide from the aquifer: a whole-house treatment system matched to your measured hydrogen sulfide concentration — air injection for lower levels, chemical injection for higher ones. Test the water first to determine the source and concentration before selecting a treatment system.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Why does the sulfur smell come and go?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Intermittent odor often means the source is related to specific conditions rather than a constant background level in the aquifer. Common causes include: seasonal water table changes that draw different groundwater into the well, periods of low water use that allow stagnant water to develop more hydrogen sulfide in standing pipes and the pressure tank, or bacterial growth that fluctuates with temperature. If the smell correlates with heavy rain, check the well cap and casing for signs of surface water entry.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Can I shock chlorinate my own well?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Yes, shock chlorination is a procedure homeowners can do themselves with standard household bleach. The basic steps involve calculating the water volume in your well, mixing bleach with water in the correct ratio (approximately 3 pints of bleach per 100 gallons of well water), introducing the solution into the well casing, circulating it by running a hose from an outdoor tap back into the well, running the chlorinated water to every tap in the house, allowing contact time of 12 to 24 hours, then flushing. Your county health department or state extension service will have detailed instructions for your region. Call a licensed well contractor if you are unsure about any step or if your well is unusually deep, has a submersible pump, or shows signs of structural compromise.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Does sulfur smell mean my well is contaminated?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Not necessarily. The smell means hydrogen sulfide is present, and the source is almost always natural — either the aquifer geology or sulfate-reducing bacteria, neither of which indicates sewage or chemical contamination. However, test for coliform bacteria and nitrates at the same time you investigate the sulfur issue. This rules out the possibility that the conditions causing the sulfur smell — a compromised well cap, surface water infiltration — have also introduced harmful contamination.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                My water smells like rotten eggs after we were away for a week. Is that normal?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Yes, this is a very common pattern. When water sits stagnant in your pressure tank, pipes, and especially your water heater for several days, sulfate-reducing bacteria that are present at low levels in normal use have time to multiply and produce more hydrogen sulfide. The smell is typically strongest at first draw after a period of non-use and diminishes as fresh water cycles through the system. If the odor is only present after standby periods and clears quickly with use, the problem is mild SRB activity rather than a high-concentration geological source. Shock chlorination followed by anode replacement in the water heater usually resolves this pattern.</div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Hydrogen Sulfide (H₂S)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A colorless, flammable gas with a distinctive rotten egg odor. In well water, it forms through bacterial metabolism of sulfate compounds or through geological reactions in certain aquifer formations. The human nose detects it at concentrations well below 0.5 milligrams per liter. At residential concentrations in well water it is an aesthetic concern rather than a direct health hazard, though it is corrosive to metals and plumbing components. High concentrations in confined spaces are toxic and oxygen-displacing.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Sulfate-Reducing Bacteria (SRB)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Anaerobic microorganisms that metabolize sulfate compounds in water and produce hydrogen sulfide as a byproduct. They thrive in low-oxygen environments including well casings, pressure tanks, water heaters, and plumbing systems where water sits without circulation. SRB themselves are not pathogenic and do not cause illness, but they produce the hydrogen sulfide gas that creates the rotten egg odor in well water.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Anode Rod</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A sacrificial metal rod installed inside a tank-style water heater to prevent the steel tank from corroding. Standard anode rods are made of magnesium, which corrodes preferentially to protect the tank. In the presence of sulfate-reducing bacteria and sulfate compounds common in well water, magnesium anode rods drive a chemical reaction that produces hydrogen sulfide, creating the rotten egg smell in hot water. Aluminum-zinc alloy anode rods and powered (impressed current) anode rods eliminate this reaction.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Shock Chlorination</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A well disinfection procedure in which a high concentration of chlorine bleach is introduced to the well casing, circulated through the pump and plumbing system, and allowed to contact all surfaces for 12 to 24 hours before flushing. Used to kill sulfate-reducing bacteria and other microbial contamination in the well and plumbing. Effective as a first response to bacterial contamination but typically temporary for SRB problems because the bacteria reestablish within weeks to months.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Air Injection Oxidizing Filter</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A whole-house water treatment system that injects a pocket of air into the water stream as it enters from the well. The oxygen in the injected air oxidizes dissolved hydrogen sulfide, converting it from a dissolved gas to solid sulfur particles that are then captured by filter media. The system automatically backwashes to clean the media. Effective for hydrogen sulfide concentrations up to approximately 6 mg/L without additional chemicals.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Manganese Greensand Filter</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A filtration media coated with manganese dioxide that oxidizes dissolved hydrogen sulfide and iron, converting them to solid particles that are then filtered out. The media must be periodically regenerated with a potassium permanganate solution. Effective for hydrogen sulfide concentrations up to approximately 6 mg/L, and commonly used when both iron and hydrogen sulfide are present.</p>
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
            <Link href='/problems/well-water-tastes-bad' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Tastes Bad</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants Guide</span>
            </Link>
            <Link href='/guides/well-water-treatment-options' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Treatment Options</span>
            </Link>
            <Link href='/reviews/best-whole-house-water-filters' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Whole House Water Filters for Wells</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
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
            <BeehiivEmailCapture />

            <LeadForm />
          </div>
        </section>

      </article>
    </>
  )
}

