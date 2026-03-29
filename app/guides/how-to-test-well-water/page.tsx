import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'How to Test Your Well Water: The Complete Guide | The Well Guide',
  description: '43 million Americans on private wells are solely responsible for testing their own water. This guide covers what to test for, when to test, how to collect a sample without contaminating it, how to choose between home kits and certified labs, what your results actually mean, and exactly what to do when something comes back wrong.',
  openGraph: {
    title: 'How to Test Your Well Water: The Complete Guide',
    description: '43 million Americans on private wells are solely responsible for testing their own water. This guide covers what to test for, when to test, how to collect a sample correctly, and what to do when something is wrong.',
    url: 'https://www.thewell.guide/guides/how-to-test-well-water',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/watertest.jpg', width: 1200, height: 630, alt: 'Glass of water being tested near a kitchen window' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/how-to-test-well-water' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How often should I test my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test every year at minimum for total coliform bacteria, E. coli, nitrates, pH, and total dissolved solids. Test every three to five years for a comprehensive panel including arsenic, lead, hardness, iron, and manganese. Test immediately after any flood, well repair, pump replacement, or noticeable change in water quality. Test once for PFAS as a baseline, then annually if near a military base, airport, or industrial facility.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the most important thing to test for in well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bacteria (total coliform and E. coli) and nitrates are the most urgent annual tests. E. coli can cause acute illness quickly and is particularly dangerous for infants, elderly people, and immunocompromised individuals. Nitrates above 10 mg/L are acutely dangerous for infants under six months and can be fatal. Both can be present in perfectly clear, odorless, normal-tasting water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I use a home test kit for my annual well water test?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, not for health-critical parameters. Home test strips cannot reliably detect bacteria, and their sensitivity for nitrates, lead, arsenic, and PFAS is insufficient for health decisions. Use a state-certified laboratory for all annual testing. Home strips are useful for monitoring between lab tests - checking whether your iron filter is working or pH has shifted - but they are not a substitute for certified testing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I find a certified lab to test my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Start by calling your county health department - many offer free or low-cost basic well water testing. For comprehensive testing, use the EPA's certified laboratory directory at epa.gov/dwlabcert to find certified labs in your state. For mail-in convenience, Tap Score (SimpleLab) ships sample containers and uses certified lab networks nationally.",
      },
    },
    {
      '@type': 'Question',
      name: 'Why does my bacteria sample have to arrive at the lab within 24 hours?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Bacteria in a water sample continue to multiply or die after collection, changing the count and making results invalid. The 24-hour rule ensures the bacterial population reflects what was actually in the water when collected. Samples that sit too long before analysis are rejected as unreliable. Collect bacteria samples on a day when you can ship overnight or deliver to the lab the same day.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does a positive coliform test mean?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It means bacteria have found a pathway into your well from outside - surface water, soil, livestock waste, or a failing septic system. Total coliform itself is not always a direct health threat, but its presence signals the well is vulnerable to contamination by more dangerous bacteria. Shock chlorinate the well and retest. If coliform persists after chlorination, have a professional inspect the well for physical entry points.',
      },
    },
    {
      '@type': 'Question',
      name: 'Should I test my well water for PFAS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, at least once as a baseline. PFAS are found in groundwater across the country near industrial facilities, military bases, airports, and agricultural areas. They are completely invisible in water and cause serious health effects at very low concentrations. The EPA set enforceable limits for six PFAS compounds in public water in 2024. Test specifically for PFAS by EPA Method 533 or 537.1 at a lab certified for these methods.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does boiling water remove nitrates or chemical contaminants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Boiling kills bacteria and viruses but does not remove nitrates, heavy metals, arsenic, PFAS, or any other chemical contaminants. Boiling water high in nitrates actually concentrates them as water evaporates, making the problem worse. Chemical contamination requires certified point-of-use treatment - reverse osmosis, distillation, or specific filter media depending on the contaminant.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Test Your Well Water: The Complete Guide',
  description: '43 million Americans on private wells are solely responsible for testing their own water. This guide covers what to test for, when to test, how to collect a sample correctly, how to choose between home kits and certified labs, what results mean, and what to do when something is wrong.',
  image: 'https://www.thewell.guide/watertest.jpg',
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
  mainEntityOfPage: 'https://www.thewell.guide/guides/how-to-test-well-water',
}

export default function HowToTestWellWater() {
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
          src='/watertest.jpg'
          alt='Glass of water being held up near a kitchen window with natural light'
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
            How to Test Your<br />
            Well Water:<br />
            <span style={{ color: '#5DCAA5' }}>The Complete Guide</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            What to test for, when to test, how to collect a sample correctly, and what to do when something comes back wrong.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated March 2026 &middot; 16 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'How to Test Your Well Water' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>Test your well water every year at minimum for total coliform bacteria, E. coli, nitrates, pH, and total dissolved solids. Use a state-certified laboratory — not home test strips — for anything health-related. Bacteria samples must reach the lab within 24 hours of collection, kept cold. Lead samples must be collected before flushing — first draw only. Do not rinse the sterile bottle or touch the inside of the cap. If your results show any E. coli, stop drinking the water immediately and call a well contractor. If you have not tested in the past year and you are reading this, that is your sign to do it this week.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The EPA rules that protect public water systems do not apply to private wells. No government agency monitors, tests, or treats water from your well. That responsibility belongs entirely to you as the well owner. The CDC recommends annual testing as the minimum. The USGS has found that roughly one in four private wells contains at least one contaminant at an unsafe level. Most of those homeowners had no idea.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The stakes are higher than most people realize because the most dangerous contaminants — bacteria, nitrates, arsenic, PFAS — are completely invisible. Your water can look crystal clear, smell fine, and taste normal while containing levels of bacteria that will make an infant seriously ill or arsenic concentrations that increase cancer risk with every glass. There is no substitute for testing.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This guide covers everything a well owner needs to know: what to test for and when, how to find a certified lab, how to collect a sample correctly so the results are valid, how to interpret what comes back, and what to do when something is wrong.</p>
        </div>

        {/* Before You Order Tests */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Context</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Before You Order Tests: What Obvious Changes in Water Quality Tell You</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If your water has recently changed in appearance, smell, or taste, that change can help narrow down what to test for. This does not replace testing — it adds context:</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Water that looks, smells, or tastes obviously wrong</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Still requires a lab test to identify the cause precisely, but some problems give immediate clues. Brown or orange water typically means iron or manganese. Rotten egg smell means hydrogen sulfide — see our <Link href='/problems/well-water-smells-like-sulfur' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>well water sulfur smell guide</Link>. Blue-green staining on fixtures means corrosive, low-pH water dissolving copper pipes. Cloudy white water that clears from the bottom up when you fill a glass is usually dissolved air — harmless. Cloudy water that does not clear is a concern and warrants an immediate test.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>You just moved into a home with a well</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Test immediately and comprehensively before drawing conclusions about water quality. Previous owner test results from more than a year ago tell you very little about current conditions.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Your water has tested fine for years</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Annual testing is still mandatory. Groundwater conditions change. Septic systems age and develop leaks. Agricultural activity shifts. New construction upgrades the local drainage pattern. A well that tested clean in 2021 may not be clean today.</p>
            </div>
          </div>
        </div>

        {/* What to Test For and When */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Annual Testing</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What to Test For and When: The Annual Testing Schedule</h2>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>The Baseline Four: Test Every Year</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The CDC and EPA both recommend testing these four parameters at a minimum every year for every private well:</p>

          <div className='space-y-4 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Total coliform bacteria</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>The broadest indicator of contamination pathways. Coliform bacteria are found in soil, surface water, and animal waste. Their presence in a well does not necessarily mean the water will make you sick, but it means a pathway exists for contamination to enter the well. Any positive result requires immediate follow-up.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>E. coli</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>A specific coliform that comes only from fecal matter (human or animal). Any detection of E. coli in drinking water is a serious health emergency. Stop drinking the water immediately and contact your county health department and a licensed well contractor. There is no safe level of E. coli in drinking water.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Nitrates</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Enter groundwater from fertilizer runoff, septic system effluent, livestock waste, and decaying organic matter. The EPA maximum contaminant level for nitrates is 10 mg/L. Concentrations above this level are particularly dangerous for infants under six months — high nitrate levels cause methemoglobinemia, known as blue baby syndrome, which reduces the blood{`'`}s ability to carry oxygen and can be fatal. Pregnant women and immunocompromised individuals are also at elevated risk.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>pH</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Measures whether your water is acidic or alkaline on a scale of 0 to 14. The EPA recommends 6.5 to 8.5 for drinking water. Low pH (acidic water) is corrosive — it leaches lead and copper from plumbing, causes blue-green staining on fixtures and sinks, and can damage water heaters and appliances. Many wells in the Northeast and Mid-Atlantic have naturally low pH. High pH is less common but can cause scaling and bitter taste. pH is a cheap test that provides important context for everything else in your water.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Total dissolved solids (TDS)</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>A general measure of the total concentration of dissolved minerals, metals, salts, and compounds in the water. The EPA secondary guideline is 500 mg/L. TDS above this level does not necessarily indicate a health problem, but it signals that mineral content is high enough to affect taste, create scale buildup, and potentially stress water treatment equipment.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Extended Testing: Every Three to Five Years</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Beyond the annual baseline, the EPA recommends more comprehensive testing every three to five years. These parameters do not change as rapidly as bacterial contamination, but they need periodic baseline documentation:</p>

          <div className='space-y-4 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Hardness</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>The concentration of calcium and magnesium. Hard water (above 120 mg/L) causes scale buildup in pipes, water heaters, and appliances. It dramatically reduces the effectiveness of soaps and detergents. Not a health risk but a significant quality-of-life and equipment-life issue. Knowing your hardness level tells you whether a water softener makes sense.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Iron and manganese</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Natural groundwater minerals that cause staining (red-orange from iron, black-brown from manganese), clogging of well screens and pipes, and bitter or metallic taste. The EPA secondary standard for iron is 0.3 mg/L. For manganese the secondary standard is 0.05 mg/L — but new research has linked manganese exposure above 0.1 mg/L to neurological effects in children, making this one worth testing even if your water does not stain.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Arsenic</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>A naturally occurring carcinogen found in certain rock formations, particularly in the Northeast, Southwest, and Midwest. The EPA MCL is 10 micrograms per liter (10 ppb). Long-term exposure above this level is associated with bladder, lung, and skin cancers. Arsenic is completely invisible in water — no color, no smell, no taste. Wells in New England, parts of the Southwest, and the Upper Midwest have elevated natural arsenic more frequently than other regions, but arsenic can appear in any geology.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Lead</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Does not come from the aquifer in most cases. Lead in well water typically comes from lead solder in older plumbing (pre-1986 homes), lead service lines, or brass fittings. The EPA action level is 15 ppb, but the EPA{`'`}s own MCLG (the health goal) is zero — there is no safe level of lead exposure for children. Lead testing requires a specific &quot;first draw&quot; collection method — see the sample collection section below.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Radon</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>A naturally occurring radioactive gas that dissolves into groundwater from uranium-bearing rock. Particularly common in granite regions of New England, the Appalachians, and parts of the Southeast. The EPA has not set a final MCL for radon in drinking water, but the proposed standard is 300 picocuries per liter (pCi/L) with an alternative of 4,000 pCi/L if states implement programs to address airborne radon. Radon dissolved in well water is released into indoor air when you shower or run the tap — ingestion risk is real but inhalation from water releases is also a concern.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>PFAS: Test at Least Once, Then Based on Risk</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>PFAS (per- and polyfluoroalkyl substances) are man-made chemicals used in industrial processes, food packaging, firefighting foam, and many consumer products since the 1940s. They are called &quot;forever chemicals&quot; because they do not break down in the environment. In April 2024, the EPA set enforceable maximum contaminant levels for six PFAS compounds in public water systems — the first federal regulation of PFAS in drinking water. PFOA and PFOS are regulated at 4 parts per trillion (ppt), individually. Private wells are not regulated, but the same health-based thresholds apply as guidance.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A 2025 USGS study found that PFAS were detectable in groundwater samples from across the country, with higher concentrations near military bases, industrial facilities, airports, and areas where firefighting foam has been used. PFAS have also been detected in agricultural areas where PFAS-containing biosolids (sewage sludge) have been applied as fertilizer.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Test for PFAS at least once as a baseline. Test annually if you live within 10 miles of a military installation, airport, industrial facility, or agricultural area known to use biosolid application. Your county health department or state environmental agency may have local PFAS groundwater data that can tell you whether your area is a higher-risk zone before you spend money on testing.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>PFAS testing requires a specialized lab and specific sample containers — not all certified labs offer it. Request specifically &quot;PFAS in drinking water by EPA Method 533 or 537.1&quot; when contacting labs.</p>
        </div>

        {/* When to Test Immediately */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Urgent</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>When to Test Immediately — Outside the Annual Schedule</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Test your well right away, regardless of when you last tested, after any of these events:</p>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Flooding</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Any flood that reaches the wellhead or the area surrounding the well. Floodwater carries surface contamination directly into the wellhead, casing, and potentially the well itself. Test for bacteria and nitrates before resuming normal use after any flood event. Do not turn the pump back on until the well has been inspected.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Pump replacement or any well repair</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Opening the well for any maintenance introduces potential contamination from tools, hands, new components, and atmospheric exposure. Test for total coliform and E. coli after any well work, after allowing the system to run for 24 hours.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>New septic system nearby or evidence of septic failure</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Failing septic systems are a leading source of coliform bacteria and nitrate contamination in private wells. If a neighbor installs a new septic system within 100 feet of your well, or if you notice sewage odors or unusually lush green patches in your yard near the septic field, test immediately.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Moving into a home with an existing well</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Previous owner test results may be outdated, fabricated, or limited in scope. Test comprehensively before concluding the water is safe.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>New baby or pregnancy</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Nitrates are acutely dangerous for infants under six months. Test specifically for nitrates when pregnant and again before feeding formula to a newborn.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Sudden change in taste, odor, or appearance</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A well that ran clean for years and then develops a new smell, taste, or color is signaling something has changed. Test immediately and do not assume the change is harmless.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>New industrial or agricultural activity nearby</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A new industrial facility, a change in nearby land use, or the beginning of agricultural chemical application on adjacent land can all shift local groundwater chemistry. Test within a season of any significant nearby land use change.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Drought followed by heavy rainfall</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Extended drought concentrates contaminants in the remaining water column. The first heavy rains after drought flush surface contaminants into shallow wells. Test after this pattern.</p>
            </div>
          </div>
        </div>

        {/* Home Test Kits vs Certified Lab */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Lab vs DIY</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Home Test Kits vs Certified Lab: Which One Do You Need</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>This is the question most people get wrong, and the answer has real consequences.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Home Test Strips and DIY Kits</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Home test kits — the color-changing strips sold at hardware stores and online — are suitable for one narrow use case: quick monitoring between annual lab tests for parameters like pH, hardness, iron, and chlorine. They are not suitable for any health-critical decision.</p>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>What home strips cannot do:</h4>
          <ul className='list-disc list-inside space-y-2 text-slate-700 text-sm mb-6'>
            <li>Detect bacteria reliably. Strip-based bacteria tests have high false-negative rates and are not accepted by any health authority as confirmation that water is safe to drink.</li>
            <li>Detect PFAS, arsenic, lead, radon, or VOCs at health-relevant concentrations.</li>
            <li>Detect nitrates accurately at low concentrations — the range that matters most for infant safety (5 to 10 mg/L) is often below the reliable detection range of consumer strips.</li>
            <li>Produce results that are consistent — results vary with water temperature, mineral content, and the technique of the person running the test.</li>
          </ul>

          <h4 className='font-bold text-slate-900 text-sm mb-3'>When home strips are appropriate:</h4>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Checking whether your iron filter is working between annual tests. Monitoring pH after installing an acid neutralizer. Checking chlorine residual after shock chlorinating the well. Screening for gross changes in water chemistry that would prompt you to order a lab test.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Certified Laboratory Testing</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A state-certified laboratory uses validated analytical methods, calibrated instruments, and accredited quality control procedures. Results from a certified lab are legally defensible, accepted by health departments, and accurate to the precision relevant for health decisions.</p>

          <div className='space-y-4 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Mail-in lab kits</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Tap Score from SimpleLab is one of the most convenient options for most well owners. You order the test package, receive sterile sample containers and detailed collection instructions, collect and ship the samples, and receive results within 5 to 14 business days. Their well water packages cover bacteria, nitrates, heavy metals, and other parameters appropriate for private wells and include plain-English interpretation of results.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>State and county health department labs</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Often offer basic bacterial and nitrate testing at low or no cost for private well owners. Contact your county health department first — many offer free annual testing or heavily subsidized testing and can provide sample containers and collection instructions specific to their lab{`'`}s requirements.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h4 className='font-bold text-slate-900 text-sm mb-2'>Local certified labs</h4>
              <p className='text-slate-700 text-sm leading-relaxed'>Delivering samples in person is the best option for bacteria testing because of the 24-hour delivery requirement. Find labs in your state through the <a href='https://www.epa.gov/dwlabcert' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>EPA certified laboratory directory</a>.</p>
            </div>
          </div>

          {/* Testing Cost Table */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>What Well Water Testing Costs</h3>
          <div className='overflow-x-auto mb-8'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Test Type</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>What It Covers</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Typical Cost</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Best Source</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Basic bacteria + nitrates</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Total coliform, E. coli, nitrates</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Free to $50</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>County health department</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Annual baseline panel</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Bacteria, nitrates, pH, TDS, hardness</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$50 to $120</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Health dept or mail-in lab</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Comprehensive metals panel</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above plus arsenic, lead, iron, manganese, copper</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$150 to $300</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Certified mail-in lab</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>PFAS only</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>6 to 40 PFAS compounds by EPA Method 533 or 537.1</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$150 to $300</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Specialized certified lab</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Full well water panel</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Bacteria, metals, PFAS, VOCs, radiologicals</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$300 to $500</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Mail-in certified lab</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>VOCs and pesticides</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Volatile organic compounds, agricultural chemicals</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>$100 to $250</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Certified lab</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm'>Some states offer free or subsidized comprehensive testing for private well owners — check with your state department of health before spending money. Many county health departments offer basic annual testing at no charge. The <Link href='/cost-guides/well-water-testing-cost' className='underline' style={{ color: '#1D9E75' }}>well water testing cost guide</Link> covers pricing in detail, including how to find free testing programs in your state.</p>
        </div>

        {/* How to Collect a Water Sample Correctly */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Collection</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Collect a Water Sample Correctly</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Sample collection is where most homeowners make mistakes that invalidate their results. An improperly collected sample can produce a false positive (causing unnecessary alarm and expense) or a false negative (falsely reassuring you that your water is safe). Follow these steps precisely.</p>

          {/* Warning Callout Box */}
          <div className='mb-8 rounded-lg p-5 border border-amber-300' style={{ backgroundColor: '#FEF9E7' }}>
            <div className='flex items-start gap-3'>
              <span className='text-2xl flex-shrink-0'>⚠️</span>
              <div>
                <p className='font-bold text-amber-900 text-sm mb-3'>Three Things That Will Invalidate Your Bacteria Sample Before You Even Begin</p>
                <p className='text-amber-900 text-sm leading-relaxed mb-2'>Read these before touching anything. These are the mistakes most likely to ruin the test:</p>
                <div className='space-y-3'>
                  <p className='text-amber-900 text-sm leading-relaxed'><strong>Do not rinse the bacteria bottle.</strong> The bottle contains sodium thiosulfate — a white powder or tablet — that neutralizes chlorine and protects the sample. Rinsing removes it and the test is worthless. The bottle should be used exactly as received.</p>
                  <p className='text-amber-900 text-sm leading-relaxed'><strong>Do not touch the inside of the cap or bottle opening.</strong> Bacteria live on your skin. A single touch of a finger to the inside of the cap introduces contamination. Hold the cap by its outside edges only, with the inside facing down, for the entire time it is off the bottle.</p>
                  <p className='text-amber-900 text-sm leading-relaxed'><strong>Deliver the sample within 24 hours, kept cold.</strong> Bacteria multiply or die at room temperature, changing the count. A sample older than 30 hours is rejected by most labs. Collect on a Tuesday, Wednesday, or Thursday so it reaches the lab before the weekend.</p>
                </div>
                <p className='text-amber-900 text-sm leading-relaxed mt-3 font-semibold'>Everything else is detail. If you remember only these three rules, your bacteria sample will be valid.</p>
              </div>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Before You Start</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Order your test kit from a certified lab and use only the bottles they provide. The containers are pre-sterilized and may contain a preservative (sodium thiosulfate, a white powder or tablet inside the bacteria bottle). That preservative neutralizes chlorine and protects the sample integrity. Do not rinse the bottle. Do not remove or disturb the preservative. Using any other container will invalidate the test.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Plan your collection day carefully. Bacteria samples must reach the lab within 24 to 30 hours of collection, kept cold (but not frozen) during transport. This means you must collect on a day when you can deliver the sample or ship it with overnight service. Most labs do not accept bacteria samples that arrive on weekends or holidays — collect Tuesday through Thursday if shipping, or call ahead if hand-delivering. Do not collect late on a Friday.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Collecting the Bacteria (Total Coliform and E. coli) Sample</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>This is the most contamination-sensitive collection of any standard water test. Follow every step.</p>

          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 1:</strong> Select the right faucet. Choose a cold-water tap you use regularly for drinking — typically the kitchen cold tap. Do not sample from a tap with an aerator attached, a point-of-use filter, or a touchless sensor tap. Remove the aerator before sampling.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 2:</strong> Wipe the faucet opening. Use a clean cloth or alcohol wipe to clean the outside of the faucet opening. Some labs recommend briefly flaming the tap opening with a lighter to sterilize it — check your lab{`'`}s instructions before doing this.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 3:</strong> Flush the line. Run the cold water for five minutes at full flow. This draws fresh water from the well and clears standing water from the household pipes. Reducing flush time is the most common collection mistake.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 4:</strong> Reduce the flow to a gentle stream, about pencil width. Turbulent flow can splash bacteria from the faucet surface into the sample.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 5:</strong> Open the sterile bottle. Hold it in one hand. With the other hand, twist off the cap but do not set the cap down on any surface. Hold the cap with your fingers, with the inside of the cap facing down. Do not touch the inside of the cap with your fingers. Do not touch the inside of the bottle opening. Do not let the bottle touch the faucet.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 6:</strong> Fill the bottle to the indicated line — typically 100 mL. Do not overfill and do not underfill. Do not rinse the bottle first.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 7:</strong> Cap immediately and tightly.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 8:</strong> Label the bottle with your name, date, time, and sample location (for example: &quot;kitchen cold tap&quot;).</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 9:</strong> Keep cold. Place the sample in a cooler with ice packs (not frozen ice that may crack the bottle). Deliver to the lab or ship with overnight service within 24 hours.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Collecting the Lead Sample: First Draw Only</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Lead testing requires a completely different approach. Lead accumulates in water that has been sitting in pipes — particularly in lead solder joints, lead service lines, or brass fittings. To capture this lead exposure, you need a &quot;first draw&quot; sample: water that has been sitting in the pipes for at least six hours without any water use.</p>

          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 1:</strong> Do not use any water from the test tap for at least six hours before collecting. The best time is first thing in the morning before anyone runs any water.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 2:</strong> Collect the first water that comes out of the tap without flushing. This is the standing water that has been in contact with your plumbing the longest.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 3:</strong> Use the bottle provided by the lab for lead testing — it is a different container from the bacteria bottle, usually smaller and with a different preservative.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Step 4:</strong> Fill to the indicated line and cap. Ship or deliver to the lab promptly.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>Note: A lead test from a flushed sample will often show zero or very low lead even in a home with lead plumbing, because flushing removes the standing water where leaching has occurred. The first-draw method captures the actual exposure your household is experiencing.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Collecting the Nitrate and Chemical Sample</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>For nitrate and most chemical tests, the procedure is simpler than bacteria collection:</p>
          <ul className='list-disc list-inside space-y-2 text-slate-700 text-sm mb-6'>
            <li>Flush the tap for five minutes (if you already collected the bacteria sample, skip the flush — the water is already fresh from the well).</li>
            <li>Rinse the chemical sample bottle three times with tap water before filling. This is the opposite of the bacteria bottle — rinsing is required here to displace any residue.</li>
            <li>Fill to the top and cap tightly.</li>
            <li>Chemical samples are less time-sensitive than bacteria samples but should still be kept cool and delivered within the lab{`'`}s specified holding time. Chemical sample holding times range from 24 hours to several weeks depending on the parameter.</li>
          </ul>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Common Mistakes That Invalidate Results</h3>
          <ul className='list-disc list-inside space-y-2 text-slate-700 text-sm'>
            <li>Rinsing the bacteria bottle (the preservative inside is destroyed)</li>
            <li>Touching the inside of the cap or bottle with bare hands</li>
            <li>Collecting from a filtered tap, softener output, or refrigerator water line (these reflect treatment, not the well)</li>
            <li>Not flushing for the full five minutes before the bacteria sample</li>
            <li>Delivering a bacteria sample more than 24 to 30 hours after collection</li>
            <li>Collecting the lead sample after flushing (misses the actual lead exposure)</li>
            <li>Collecting on a Friday when the sample cannot reach the lab before the weekend</li>
          </ul>
        </div>

        {/* How to Find a Certified Lab */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Find a Lab</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Find a Certified Lab in Your State</h2>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Option 1: Your county health department</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Call your county health department and ask whether they offer well water testing for private wells. Many counties provide free or low-cost basic testing (bacteria and nitrates) and will supply you with sample bottles and collection instructions at no charge. This is the best starting point before spending money on a commercial lab.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Option 2: EPA certified laboratory directory</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The EPA maintains a searchable directory of state-certified drinking water laboratories at <a href='https://www.epa.gov/dwlabcert' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>epa.gov/dwlabcert</a>. Search by state to find labs certified to perform the specific tests you need. For PFAS testing, look specifically for labs certified for EPA Method 533 or EPA Method 537.1.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Option 3: Mail-in certified lab services</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Tap Score (SimpleLab) is one of the most widely recommended national mail-in services for private well owners. Their Well Water Test packages are priced by scope — starting with basic bacteria and common parameters and scaling up to comprehensive panels including metals, PFAS, and VOCs. SimpleLab uses EPA, NELAC, and state-certified laboratories and provides detailed, plain-English reports with specific treatment recommendations.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Option 4: Your state{`'`}s department of health or environment</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Most state environmental or health agency websites maintain lists of certified labs in the state, along with information on any free or subsidized testing programs for private well owners. Some states offer free comprehensive testing in certain regions based on known groundwater issues.</p>
            </div>
          </div>
        </div>

        {/* How to Read Your Results */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Results</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Read Your Results: What Every Number Means</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-8'>When your results arrive, the report will list each parameter tested, your result, and a reference value or maximum contaminant level. Here is how to read the critical ones.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Bacteria Results</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Bacteria results are reported as Present or Absent (for E. coli and total coliform) or as colony-forming units per 100 milliliters (CFU/100 mL).</p>
          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Total coliform — Absent:</strong> No concern. File the result and retest next year.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Total coliform — Present (with E. coli Absent):</strong> Coliform bacteria have entered the well. The source is likely surface water infiltration, a compromised well cap, or nearby agricultural runoff. Shock chlorinate the well and retest. If total coliform is present on a retest after chlorination, have a licensed well contractor inspect the casing and cap for structural issues.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>E. coli — Present:</strong> Stop using the water for drinking and cooking immediately. Use bottled water. Contact your county health department. Have a licensed well contractor inspect the well and perform shock chlorination. Retest after chlorination — do not resume drinking the water until a lab test confirms E. coli is absent. Any presence of E. coli indicates fecal contamination and represents an immediate health risk.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Nitrate Results</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Nitrate is reported in mg/L (milligrams per liter, equivalent to parts per million). Note that some labs report nitrate as nitrogen (NO3-N) while others report total nitrate (NO3). The EPA{`'`}s 10 mg/L limit is for nitrate-nitrogen (NO3-N). If your result is reported as total nitrate (NO3), the equivalent limit is 44 mg/L. If you are unsure how your lab is reporting nitrate, call them and ask — this is a normal question.</p>
          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Below 5 mg/L:</strong> Low. No action needed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>5 to 10 mg/L:</strong> Elevated. The source is likely nearby — septic system, agricultural runoff, or livestock. Do not use for infant formula. Test quarterly and investigate potential sources.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Above 10 mg/L:</strong> Exceeds EPA limit. Do not use for infant formula, cooking infant food, or drinking by infants under six months. Use bottled water or a certified reverse osmosis system for infant use. Install point-of-use treatment — reverse osmosis or distillation — for the tap used for drinking and cooking. Boiling does not remove nitrates and actually concentrates them as water evaporates.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>pH Results</h3>
          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>6.5 to 8.5:</strong> Normal range. No action needed.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Below 6.5:</strong> Corrosive water. Likely dissolving lead or copper from plumbing. Test for lead, copper, and iron alongside pH. Consider an acid neutralizer (calcite filter) to raise pH into the safe range.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Above 8.5:</strong> Alkaline. Usually not a health concern but can cause bitter taste and scale. Consult a water treatment professional if above 9.0.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Lead Results</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Lead is reported in micrograms per liter (µg/L), also written as parts per billion (ppb). The EPA action level is 15 µg/L for public water systems. The EPA health goal (MCLG) is zero — there is no safe exposure level for children.</p>
          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Below 5 µg/L:</strong> Low. Monitor periodically.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>5 to 15 µg/L:</strong> Elevated. Run the tap for 30 to 60 seconds before using water for drinking or cooking to flush standing water. Consider replacing lead solder connections if your home was built before 1986.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Above 15 µg/L:</strong> Action required. Use certified point-of-use treatment (NSF/ANSI 58 certified reverse osmosis or NSF/ANSI 53 certified filter) for all drinking and cooking water. Do not use unfiltered water for infant formula, drinking, or cooking. Investigate the source — likely old plumbing rather than the well itself.</p>
            </div>
          </div>

          <h3 className='text-lg font-bold text-slate-900 mb-4'>Arsenic Results</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Arsenic is reported in micrograms per liter (µg/L) or parts per billion (ppb). The EPA MCL is 10 µg/L.</p>
          <div className='space-y-3 mb-8'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Below 5 µg/L:</strong> Low. Retest every three to five years.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>5 to 10 µg/L:</strong> Approaching the limit. Increase testing frequency to annually. Consider certified treatment.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Above 10 µg/L:</strong> Exceeds EPA limit. Install certified arsenic treatment — point-of-use reverse osmosis, distillation, or a whole-house arsenic-specific filter. Use treated water for all drinking and cooking. Long-term exposure above the MCL is linked to bladder, lung, and skin cancers.</p>
            </div>
          </div>

          {/* Results Quick Reference Table */}
          <h3 className='text-lg font-bold text-slate-900 mb-4'>Quick Reference: Results at a Glance</h3>
          <div className='overflow-x-auto mb-4'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Parameter</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Safe Level</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Concern Level</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>If Over Limit: Do This</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Total coliform</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Absent</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Present</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Shock chlorinate well; retest within 1 to 2 weeks</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>E. coli</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Absent</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Any detection</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Stop drinking immediately; call county health dept and well contractor same day</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Nitrates</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 5 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 10 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>No tap water for infants; install point-of-use RO; test quarterly</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>pH</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>6.5 to 8.5</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 6.5</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Test for lead and copper; install acid neutralizer (calcite filter)</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Lead</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 5 µg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 15 µg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Install NSF/ANSI 53 certified filter; flush tap 60 sec before use</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Arsenic</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 5 µg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 10 µg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Install NSF/ANSI 58 certified RO; do not boil (concentrates arsenic)</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Iron</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 0.3 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 0.3 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Install iron filter; aesthetic issue but accelerates appliance wear</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Manganese</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 0.05 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 0.05 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Install oxidizing filter; above 0.1 mg/L is neurological concern for children</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>TDS</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 500 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 1,000 mg/L</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Identify dominant mineral; comprehensive retest for metals and hardness</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>PFAS (PFOA/PFOS)</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Below 4 ppt</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Above 4 ppt</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Install NSF/ANSI 58 certified RO or NSF 177 certified carbon block</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* What to Do When Something Comes Back Wrong */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Action</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What to Do When Something Comes Back Wrong</h2>

          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>E. coli detected</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Stop using the water for drinking, cooking, and baby formula immediately. Use bottled water. Call your county health department the same day. Contact a licensed well contractor to inspect the well casing and cap for structural compromise and perform shock chlorination. Retest with a certified lab 24 to 48 hours after shock chlorination is complete and the well is flushed. Do not resume drinking the water until a post-treatment test confirms absence. If E. coli returns on the second test, there is a structural problem allowing continuous contamination — the well cap, casing, or pitless adapter needs professional inspection and likely repair or replacement.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Nitrates above 10 mg/L</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Do not panic but do act immediately if infants or pregnant women are in the household. Use bottled water or certified point-of-use reverse osmosis for drinking and cooking. Investigate the source — septic system proximity, nearby agriculture, livestock. Nitrate contamination often fluctuates seasonally (higher after fertilizer application and spring rains). Test quarterly to understand the pattern.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Arsenic above 10 µg/L</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Use certified treatment immediately for drinking and cooking water. Reverse osmosis certified to NSF/ANSI Standard 58 is effective. Arsenic cannot be removed by boiling, carbon filters, or standard sediment filters. This is a long-term health concern requiring a permanent treatment solution.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Lead above 15 µg/L</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The source is almost certainly your home{`'`}s plumbing rather than the aquifer. Flush the tap for 60 seconds before any use of water for drinking or cooking. Install a certified point-of-use filter (NSF/ANSI 53 for lead reduction). Test again using the first-draw protocol to confirm the level.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Total coliform present without E. coli</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Shock chlorinate and retest. If a second test is positive after chlorination, have the well professionally inspected for casing or cap issues that allow surface water entry.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Results you cannot interpret</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Call the lab directly. Lab scientists are available to explain results and standard interpretation is part of the service at most certified labs. Your county health department is also a resource — they interpret private well results regularly and can guide you on next steps specific to your location and water chemistry.</p>
            </div>
          </div>
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
                How often should I test my well water?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>At minimum, test every year for total coliform bacteria, E. coli, nitrates, pH, and total dissolved solids. Test every three to five years for a more comprehensive panel including arsenic, lead, hardness, iron, manganese, and any contaminants of regional concern. Test immediately after any flood, well repair, pump replacement, or noticeable change in water quality. Test once for PFAS as a baseline, then annually if you live near a military base, airport, or industrial facility.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                What is the most important thing to test for in well water?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Bacteria (total coliform and E. coli) and nitrates are the most urgent annual tests. E. coli can cause acute illness very quickly — particularly dangerous for infants, elderly people, and immunocompromised individuals. Nitrates at high levels are acutely dangerous for infants under six months and can be fatal. Both can be present in perfectly clear, odorless water.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Can I use a home test kit for my annual well water test?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>No, not for health-critical parameters. Home test strips cannot reliably detect bacteria, and their sensitivity for nitrates, lead, arsenic, and PFAS is insufficient for health decisions. Use a state-certified laboratory for all annual testing. Home strips are fine for monitoring between lab tests — checking whether your iron filter is working or your pH has shifted — but they are not a substitute for certified testing.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                How do I find a certified lab to test my well water?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Start by calling your county health department — many offer free or low-cost basic well water testing. For comprehensive testing, use the EPA{`'`}s certified laboratory directory at <a href='https://www.epa.gov/dwlabcert' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>epa.gov/dwlabcert</a> to find certified labs in your state. For mail-in convenience, Tap Score (SimpleLab) is a widely used option that ships sample containers and uses certified lab networks nationally.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Why does my bacteria sample have to arrive at the lab within 24 hours?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Bacteria in a water sample continue to multiply or die after collection depending on temperature, which changes the count and can make results invalid. The 24-hour rule ensures the bacterial population in the sample reflects what was actually in the water when you collected it. Samples that sit too long before analysis are rejected as unreliable. Collect bacteria samples on a day when you can ship overnight or deliver to the lab the same day.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                What does a positive coliform test mean?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>It means bacteria have found a pathway into your well from outside — surface water, soil, nearby livestock waste, or a failing septic system. Total coliform itself is not a direct health threat in most cases, but its presence signals that the well is vulnerable to contamination by bacteria that are dangerous. Shock chlorinate the well and retest. If coliform persists after chlorination, have a professional inspect the well for physical entry points.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Should I test my well water for PFAS?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>Yes, at least once as a baseline. PFAS are found in groundwater across the country near industrial facilities, military bases, airports, and agricultural areas where PFAS-containing biosolids have been applied. They are completely invisible in water and cause serious health effects — cancer, immune disruption, reproductive harm, developmental effects in children — at very low concentrations. The EPA set enforceable limits for six PFAS compounds in public water in 2024. Private wells are not regulated but those same thresholds apply as health guidance. Test specifically for PFAS by EPA Method 533 or 537.1 at a lab certified for these methods.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-sm text-slate-900 flex justify-between items-center'>
                Does boiling water remove nitrates or other chemical contaminants?
                <span className='text-slate-400 group-open:rotate-45 transition-transform text-lg'>+</span>
              </summary>
              <div className='px-4 pb-4 text-sm text-slate-700 leading-relaxed'>No. Boiling water kills bacteria and viruses but does not remove nitrates, heavy metals, arsenic, PFAS, or any other chemical contaminants. Boiling water that is high in nitrates actually concentrates them as water evaporates, making the problem worse. Chemical contamination requires certified point-of-use treatment — reverse osmosis, distillation, or specific filter media depending on the contaminant.</div>
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
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Maximum Contaminant Level (MCL)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The highest level of a contaminant that the EPA allows in public drinking water systems. MCLs are legally enforceable for public systems. Private well water is not regulated, but EPA MCLs serve as the primary health-based reference points for evaluating private well test results. MCLs are set as close to health goals as is technically and economically feasible.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Total Coliform Bacteria</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A broad group of bacteria found in soil, surface water, and animal and human intestines. In drinking water testing, total coliform serves as an indicator organism — their presence signals a pathway for contamination to enter the well rather than a direct health threat. Any positive total coliform result requires follow-up testing for E. coli and likely remediation.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>E. coli</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A specific coliform bacterium that originates only from fecal matter. Any detection of E. coli in drinking water indicates fecal contamination and represents an immediate health risk. The EPA health goal for E. coli in public drinking water is zero. E. coli detection requires stopping water use for drinking and cooking immediately and contacting health authorities.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Nitrate-Nitrogen (NO3-N)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The form in which many labs report nitrate results. The EPA MCL of 10 mg/L applies to nitrate-nitrogen. If a lab reports nitrate as total nitrate (NO3), the equivalent limit is 44 mg/L. Confirm with your lab which form they are reporting to interpret results correctly.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>First Draw Sample</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A water sample collected from water that has been sitting in the plumbing for at least six hours without use. Used specifically for lead testing because lead accumulates in standing water through contact with lead solder, service lines, and brass fittings. A flushed sample will typically show lower lead levels and misrepresents actual daily exposure.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>PFAS (Per- and Polyfluoroalkyl Substances)</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A group of more than 7,000 man-made chemicals that have been used in industrial and commercial applications since the 1940s. PFAS do not break down in the environment, accumulate in human tissue, and are linked to cancer, immune disruption, reproductive harm, and developmental effects in children. In April 2024, the EPA set MCLs for six PFAS compounds at 4 parts per trillion (ppt) for PFOA and PFOS individually.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Certified Laboratory</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A laboratory that has been certified by the state or by a recognized accreditation body (NELAC/TNI) to perform specific drinking water analyses using validated methods. State certification ensures that a lab{`'`}s procedures, equipment, and quality controls meet the standards required for results to be used in health and regulatory decisions. The EPA maintains a directory of state-certified drinking water laboratories at <a href='https://www.epa.gov/dwlabcert' target='_blank' rel='noopener noreferrer' className='text-[#1D9E75] underline hover:text-[#0F6E56]'>epa.gov/dwlabcert</a>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Sodium Thiosulfate</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>A chemical preservative included in sterile bacteria sample bottles as a white powder or tablet. It neutralizes chlorine, which can kill bacteria in the sample and produce a false-negative result. Do not rinse the bottle before collecting a bacteria sample — the sodium thiosulfate must remain in the bottle to protect sample integrity.</p>
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
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants: What Is in Your Well Water</span>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Smells Like Sulfur</span>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Pressure Low</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
            </Link>
            <Link href='/cost-guides/well-water-testing-cost' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>COST GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Testing Cost</span>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Well Water Test Kits</span>
            </Link>
            <Link href='/reviews/best-whole-house-water-filters' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E8F5E9', color: '#1B5E20' }}>REVIEW</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Best Whole House Water Filters for Wells</span>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Annual Well Maintenance Checklist</span>
            </Link>
            <Link href='/guides/buying-house-with-well' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>What to Do When You Buy a House With a Well</span>
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
