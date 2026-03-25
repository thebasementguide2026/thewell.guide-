import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Complete Guide to Private Well Water Systems 2026 | The Well Guide',
  description: 'Everything a well owner needs to know: how wells work, types of wells and pumps, water quality testing, common contaminants including PFAS and bacteria, maintenance schedules, and when to call a pro. Written for the 43 million Americans on private wells.',
  openGraph: {
    title: 'The Complete Guide to Private Well Water Systems 2026',
    description: 'Everything a well owner needs to know: how wells work, types of wells and pumps, water quality testing, common contaminants including PFAS and bacteria, maintenance schedules, and when to call a pro.',
    url: 'https://well.guide/guides/complete-well-guide',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://well.guide/wellguidehero.jpg', width: 1200, height: 630, alt: 'Complete guide to private well water systems' }],
  },
  alternates: { canonical: 'https://well.guide/guides/complete-well-guide' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How do I know if my well water is safe to drink?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You cannot know without testing. Arsenic, nitrates, bacteria, and PFAS are all completely undetectable by taste, smell, or appearance. Test annually for total coliform bacteria, nitrates, pH, and total dissolved solids through a state-certified laboratory. Do baseline testing for arsenic, lead, and PFAS if you have never done it. A clean annual test plus baseline testing for the major threats gives you the most complete picture of safety available to a private well owner.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often should I test my well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test for total coliform bacteria, nitrates, pH, and total dissolved solids at minimum once per year. Spring is the recommended timing. Test immediately any time your water changes in taste, color, or smell, after any well repair, or after flooding. Every 3 to 5 years, do more comprehensive testing including a metals panel.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the most dangerous well water contaminants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For acute illness, coliform bacteria and E. coli pose the most immediate risk. For long-term health effects, arsenic, nitrates above 10 mg/L (especially dangerous to infants), PFAS, and radon in certain geological areas are the primary concerns. None of these can be detected by taste, smell, or appearance — testing is the only way to know they are present.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a well pump last?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The average lifespan of a submersible well pump is 8 to 15 years. Pumps in clean, low-sediment water with a properly sized pressure tank regularly last 15 to 20 years. Pumps in high-iron or high-sediment water conditions may need replacement sooner. Begin budgeting for replacement when the pump reaches 10 years.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does it mean when my well pump keeps cycling on and off rapidly?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Rapid pump cycling — turning on and off every few seconds — almost always indicates a failed pressure tank bladder. The tank is waterlogged, having lost the air cushion that buffers the system. This causes constant cycling that will burn out the pump motor if not addressed quickly. Replace the pressure tank immediately.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is well water safe to drink without treatment?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "It depends on your specific well and local geology. Many private wells produce clean, safe water that needs no treatment beyond annual testing. Others have naturally occurring contaminants including arsenic, iron, or radon that require treatment. The only way to know is to test. Start with the annual core test and expand based on results and your region's known groundwater concerns.",
      },
    },
    {
      '@type': 'Question',
      name: 'Can a septic system contaminate a well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. A failing or improperly located septic system is one of the most common sources of bacterial and nitrate contamination in private wells. Minimum setback requirements between a well and a septic system typically range from 50 to 100 feet depending on state and county rules. If your well and septic system are on the same property, annual bacterial testing is especially important.',
      },
    },
    {
      '@type': 'Question',
      name: 'What should I do if my well water test comes back positive for bacteria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Stop drinking the water and switch to bottled water immediately. Shock chlorinate the well, wait 12 to 24 hours, flush the system thoroughly, and retest. If the test comes back positive again after chlorination, there is a structural problem with the well requiring a licensed contractor to diagnose and repair. Do not return to using the well until a test confirms it is clear.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a dug well and a drilled well?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A dug well is shallow (under 30 feet), hand-excavated, and highly vulnerable to surface contamination and seasonal drying. A drilled well goes 100 to 400 feet or more, reaches a deeper aquifer, and is sealed with grouted casing that provides significantly better protection against surface contamination. Almost all new wells installed today are drilled wells.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'The Complete Guide to Private Well Water Systems 2026',
  description: 'Everything a well owner needs to know: how wells work, types of wells and pumps, water quality testing, common contaminants including PFAS and bacteria, maintenance schedules, and when to call a pro.',
  image: 'https://well.guide/wellguidehero.jpg',
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
  mainEntityOfPage: 'https://well.guide/guides/complete-well-guide',
}

export default function CompleteWellGuide() {
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
          src='/wellguidehero.jpg'
          alt='Complete guide to private well water systems'
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
            The Complete Guide to<br />
            Private Well Water<br />
            <span style={{ color: '#5DCAA5' }}>Systems 2026</span>
          </h1>
          <p className='text-lg text-white/70 max-w-2xl mb-10 font-medium leading-relaxed'>
            Everything a well owner needs to know. Written for the 43 million Americans on private wells.
          </p>
          <div className='flex items-center space-x-4'>
            <div className='w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm' style={{ backgroundColor: '#1D9E75' }}>WG</div>
            <div>
              <p className='text-white font-semibold'>The Well Guide</p>
              <p className='text-white/50 text-sm'>Updated Mar 2026 &middot; 18 min read</p>
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[
        { label: 'Guides', href: '/guides' },
        { label: 'Complete Well Guide' }
      ]} />

      {/* Main Content */}
      <article className='max-w-4xl mx-auto px-4 py-12'>

        {/* TL;DR Box */}
        <div className='mb-12 rounded-lg p-5' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-semibold text-sm mb-2' style={{ color: '#0F6E56' }}>Quick answer:</p>
          <p className='text-slate-700 text-sm leading-relaxed'>More than 43 million Americans rely on private wells with zero government oversight of their water quality &mdash; the EPA does not regulate private wells and never tests yours. Test annually at minimum for coliform bacteria and nitrates. The single most important fact: most dangerous contaminants are completely invisible, tasteless, and odorless. Your water can look and taste perfect while harboring bacteria, arsenic, or PFAS at levels that cause serious harm.</p>
        </div>

        {/* Intro */}
        <div className='mb-12'>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>More than 43 million Americans &mdash; roughly 15 percent of the US population &mdash; rely on a private well as their only source of drinking water, according to the US Geological Survey. Every one of them is entirely responsible for their own water quality. The EPA does not regulate private wells. No government agency tests the water or tells you when something is wrong. When your water becomes contaminated, the only person who will find out &mdash; if anyone does &mdash; is you.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Well water, properly understood and maintained, is clean, reliable, and independent. But it requires a different kind of attention than city water. The households that run into problems are almost always the ones who assumed their water was fine because it looked and tasted fine. The ones who stay ahead of problems test annually, know their system, and act early when something changes.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This guide covers everything: how water gets from the ground to your tap, the five types of wells, every system component and what it does, the contaminants that matter and how to test for them, what your pump and pressure tank cost to maintain and replace, and the maintenance schedule that prevents emergencies.</p>
        </div>

        {/* How a Private Well Works */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Basics</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How a Private Well Works: Water from Ground to Tap</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Rain falls. Some of it runs off into streams and rivers. The rest filters down through layers of soil, sand, gravel, and rock, moving slowly through permeable materials until it reaches a saturated zone called an aquifer. An aquifer is not an underground lake &mdash; it is a geological formation where water fills the spaces between rock, sand, or gravel particles. The water table is the upper boundary of this saturated zone, and it fluctuates seasonally with rainfall and drought.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>A well is a vertical opening drilled or dug down into the aquifer. The casing &mdash; a tube of steel or PVC pipe &mdash; lines this opening to keep dirt and surface water out and to maintain structural integrity. The pump, installed inside the casing, pulls water up through a drop pipe to a pitless adapter, which channels the water horizontally through the casing wall below the frost line and into the home. From there, water travels to the pressure tank, which stores a reserve volume and maintains the system pressure that makes water flow when you open a tap.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The pressure tank works through a simple mechanical principle. Inside the tank, a rubber bladder separates air from water. When the pump fills the tank, water pressure compresses the air above the bladder. When you open a faucet, the compressed air pushes water out without the pump needing to run. A pressure switch monitors system pressure and tells the pump to turn on when pressure drops to its lower threshold &mdash; typically 30 PSI &mdash; and off when it reaches the upper threshold &mdash; typically 50 or 60 PSI.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>This cycling behavior is important. Every time the pump turns on and off, it accumulates wear on its motor and bearings. A properly sized pressure tank reduces the number of cycles per day and directly extends pump life.</p>
        </div>

        {/* Five Types of Wells */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Well Types</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>The Five Types of Wells</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Not all wells are the same. The type you have determines how vulnerable your water is to contamination, how deep you go to find reliable water, and what maintenance issues are most likely over time.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Drilled Wells</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>The most common type for modern residential use and the standard for any new well installed today. A rotary drill rig bores a hole from 100 to over 400 feet deep, through rock and soil, until it reaches a reliable aquifer. The hole is lined with steel or PVC casing and sealed with grout to prevent surface water from traveling down the outside of the casing and contaminating the groundwater. Drilled wells provide the best protection against surface contamination because of their depth and sealed construction. A submersible pump sits inside the casing below the water level.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Dug Wells</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Shallow hand-excavated pits, typically 3 to 10 feet in diameter and rarely more than 30 feet deep, often lined with stone, brick, or concrete tile. They draw from the uppermost groundwater layer, which is directly influenced by surface conditions &mdash; rainfall, runoff, nearby septic systems, and agricultural activity. Dug wells are highly vulnerable to bacterial contamination and seasonal drying. Most are in older properties, and many have been decommissioned or replaced. If you have a dug well, annual bacterial testing is non-negotiable.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Driven Wells</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Small-diameter pipes driven into the ground by impact, reaching depths of 30 to 50 feet into sandy or gravelly soils. They are inexpensive to install but limited to areas where shallow groundwater is available and the soil permits the installation method. Like dug wells, they draw from shallow aquifers and face higher contamination risk than drilled wells.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Bored Wells</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Similar to dug wells in depth and vulnerability, created with an auger rather than hand tools, typically lined with concrete tile or casing. Common in earlier construction periods, less common in new installations today.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-5'>
              <h3 className='font-bold text-slate-900 text-sm mb-2'>Bedrock or Rock Wells</h3>
              <p className='text-slate-700 text-sm leading-relaxed'>Drilled directly into fractured rock formations. The water source is fractures and fissures in the bedrock rather than a porous sandy aquifer. Bedrock wells can be very deep and are common in New England and other areas with granitic geology. Yield can vary significantly depending on how many fractures the well intersects. These wells sometimes have naturally occurring contaminants related to local geology &mdash; arsenic is a concern in certain bedrock formations in New England and the upper Midwest, and radon can be elevated in granite-rich areas.</p>
            </div>
          </div>
        </div>

        {/* Every Component */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Components</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Every Component of Your Well System</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Well Casing</h3>
              <p className='text-slate-600 text-xs'>The tube that lines the borehole from ground level down to and through the aquifer. Modern casings are typically steel or PVC pipe, 4 to 6 inches in diameter. State codes typically require the casing to extend at least 12 inches above the ground surface. The space between casing and borehole wall should be sealed with grout &mdash; one of the most important protective barriers against contamination.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Well Cap</h3>
              <p className='text-slate-600 text-xs'>Sits at the top of the casing at ground level. A properly sealed sanitary well cap prevents insects, small animals, surface water, and debris from entering the well. Caps have a screened vent to allow pressure equalization during pumping. Broken, loose, or missing caps are a common route for bacterial contamination. Check yours every spring.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Well Screen</h3>
              <p className='text-slate-600 text-xs'>Attaches to the bottom of the casing where it enters the water-bearing zone. It filters out sand, gravel, and sediment while allowing water to enter. Screen slot size is matched to the aquifer material. A clogged screen can reduce well yield over time.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Submersible Pump</h3>
              <p className='text-slate-600 text-xs'>The workhorse of the system. Sits inside the casing below the water level &mdash; sometimes 100 feet or more below ground &mdash; and pushes water up through the drop pipe to the surface. Average lifespan is 8 to 15 years. Pumps in clean, low-sediment water with a properly sized pressure tank regularly reach 15 to 20 years.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Jet Pump</h3>
              <p className='text-slate-600 text-xs'>An alternative pump type used primarily for shallow wells or low-budget installations. Sits above ground and uses suction to pull water up. Limited to wells less than about 25 feet deep for shallow-well configuration, or up to 80 feet with a two-pipe deep-well configuration. Noisier and less efficient than submersible pumps. Lifespan of 8 to 12 years.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Pressure Tank</h3>
              <p className='text-slate-600 text-xs'>Stores water and maintains system pressure. Modern tanks contain a rubber bladder separating water from a pre-charged air cushion. Standard size for a 3-bedroom home is 32 to 50 gallons. Lifespan is 10 to 15 years. Most common failure: bladder rupture, causing rapid pump cycling.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Pressure Switch</h3>
              <p className='text-slate-600 text-xs'>A small spring-loaded device that reads system pressure and signals the pump to turn on and off at the set cut-in and cut-off pressures. Standard residential settings are 30/50 PSI or 40/60 PSI. Relatively inexpensive and occasionally fails on its own.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Pitless Adapter</h3>
              <p className='text-slate-600 text-xs'>The fitting where the drop pipe exits the casing horizontally below the frost line to connect to the home&apos;s water supply. Allows the pump to be pulled from the well without excavating.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Electrical Control Box</h3>
              <p className='text-slate-600 text-xs'>Sits above ground near the pressure tank and controls the pump motor. Contains the starting capacitor and relay. If the pump hums but does not start, the capacitor is often the cause. Capacitors typically last 3 to 5 years and are inexpensive to replace.</p>
            </div>
          </div>
        </div>

        {/* Water Quality */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Water Quality</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Your Water Quality: What Is Actually in Your Well</h2>
          <div className='rounded-lg p-4 mb-6' style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #E8A020' }}>
            <p className='text-slate-900 font-semibold text-sm'>This is the section most well owners skip until something goes wrong. Do not skip it.</p>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>The EPA does not regulate private wells. The Safe Drinking Water Act, which sets standards for public water systems, does not apply to homes on private wells. Your county health department may have some construction and siting rules, but in most states, testing your water &mdash; and acting on the results &mdash; is entirely your responsibility.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The critical fact that changes how you think about this: most dangerous well water contaminants have no taste, smell, or color. Your water can look completely clear, taste normal, and smell fine while containing bacteria, arsenic, nitrates, or PFAS at concentrations that pose serious health risks. You cannot evaluate your water safety by looking at it or drinking it. Testing is the only way to know.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Bacterial Contamination</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Coliform bacteria are the primary indicator contaminants in well water testing. Total coliform bacteria themselves are not always harmful, but their presence indicates that surface water has reached your well &mdash; and wherever surface water goes, harmful pathogens including E. coli, giardia, Cryptosporidium, and viruses can follow. Studies of private wells across multiple states have found coliform contamination rates ranging from 26 percent in Maryland to 45 percent in Ohio. These are not rare events.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>E. coli &mdash; specifically, E. coli detected in a water test &mdash; means fecal contamination has reached your well. This requires immediate action: stop drinking the water, use bottled or boiled water, and shock-chlorinate the well. E. coli in well water causes severe gastrointestinal illness and can be life-threatening for infants, elderly people, and immunocompromised individuals.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Common entry routes for bacteria include a cracked or loose well cap, a compromised casing seal, a nearby failing septic system, flooding, and surface runoff after heavy rain. Even a well that has tested clean for years can develop a bacterial problem. The CDC recommends annual testing for coliform bacteria as the minimum standard for every private well.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Nitrates</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Nitrates in well water come primarily from agricultural fertilizers, animal waste, and failing septic systems. Nitrate contamination is especially common in rural areas with intensive agriculture, shallow wells, and sandy soils that allow rapid downward movement of water. The EPA maximum contaminant level for nitrate in public water is 10 mg/L &mdash; a threshold that exists because nitrate at or above this level can cause methemoglobinemia, commonly called blue baby syndrome, in infants under six months. Blue baby syndrome occurs when nitrate converts hemoglobin to a form that cannot carry oxygen, causing an infant&apos;s blood to fail to oxygenate properly. The condition can be fatal. If you have or are expecting an infant in the household, test specifically for nitrates and test more frequently than once per year.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Arsenic</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Arsenic occurs naturally in the geology of certain regions &mdash; it leaches from rock formations into groundwater without any human contribution. It is colorless, odorless, and tasteless in water. The EPA maximum contaminant level for arsenic is 10 parts per billion (ppb). Long-term exposure at levels above this threshold is associated with increased risk of bladder, lung, and skin cancers, as well as cardiovascular disease and diabetes. Minnesota&apos;s Department of Health estimates that approximately 40 percent of wells in the state have detectable arsenic. High-risk areas include New England, the upper Midwest, and parts of the Southwest. Arsenic testing is recommended at least once for any private well, and periodically thereafter depending on initial results.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>PFAS &mdash; Forever Chemicals</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>PFAS (per- and polyfluoroalkyl substances) are a class of synthetic chemicals that have been used in firefighting foam, non-stick coatings, water-repellent fabrics, food packaging, and many other industrial and consumer applications since the 1940s. They are called forever chemicals because they do not break down in the environment or in the human body. A USGS study found that at least one PFAS compound could be detected in approximately 45 percent of US drinking water samples, including samples from private wells. Research published in Science in 2024 estimated that about 80 million people in the contiguous US rely on groundwater with detectable amounts of PFAS before treatment.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The EPA set new maximum contaminant levels for PFOA and PFOS &mdash; the two most studied PFAS compounds &mdash; at 4 parts per trillion in April 2024. These apply to public water systems, not private wells. Well owners must test voluntarily. Human health effects associated with PFAS exposure include immune system suppression, thyroid disruption, liver damage, and increased risk of kidney and testicular cancer. PFAS testing is not cheap, but if your property is near a military base, airport, landfill, manufacturing site, or agricultural land that received PFAS-containing biosolids, the test is worth doing. Contact your state environmental agency to find out if known PFAS contamination has been identified in your area.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Hardness, Iron, and Manganese</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>These are water quality issues that affect your household systems and comfort rather than posing acute health risks, but they cause significant damage over time. Hard water &mdash; high calcium and magnesium content &mdash; leaves scale deposits inside water heaters, pipes, dishwashers, and washing machines. It reduces soap lather, leaves spots on dishes and fixtures, and can reduce appliance lifespan significantly.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Iron in well water causes red, orange, or brown staining on fixtures, laundry, and any surface water contacts. It gives water a metallic taste at higher concentrations and can support the growth of iron bacteria &mdash; not harmful themselves, but they clog pipes and equipment and create a foul odor. Manganese, similarly, causes black or dark brown staining and at elevated levels is a health concern, particularly for children. The USGS has flagged elevated manganese as a potential human health risk at drinking water depths in significant portions of the glacial aquifer system serving parts of the northern US.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>pH and Corrosivity</h3>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Well water with low pH is corrosive to pipes, fixtures, and the well casing itself. Acidic water leaches lead and copper from plumbing, which then enters your drinking water. Lead exposure at any level is harmful to children&apos;s brain development and has no safe threshold. If your home was built before 1986 and you have a private well, test for lead in addition to routine parameters &mdash; especially if your water has a low pH.</p>

          <h3 className='text-lg font-bold text-slate-900 mb-2'>Radon</h3>
          <p className='text-slate-700 leading-relaxed text-sm'>Radon is a naturally occurring radioactive gas that forms from the decay of uranium in rock and soil. It dissolves into groundwater and can be released into indoor air when water from a drilled well is used for showering, dishwashing, and other activities. Radon in well water is most common in areas with granite or other uranium-bearing bedrock, including New England, the Appalachians, and parts of the Mountain West. It is odorless, colorless, and tasteless. The primary health risk is lung cancer from inhaling radon gas released from the water into indoor air. Testing for radon in well water is recommended for homes in high-radon geological areas.</p>
        </div>

        {/* How to Know If Safe */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Safety</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>How to Know If Your Well Water Is Safe to Drink</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>This is the question most well owners ask first, and the answer is almost always the same: you cannot know without testing. There is no visual indicator, no taste test, and no smell that reliably tells you whether your water is safe. This is not a theoretical concern. Arsenic has no taste. Nitrates have no smell. Bacteria produce no visible change in clear water. PFAS are completely undetectable by any human sense. The water that looks the cleanest and tastes the freshest can be carrying contaminants that accumulate in your body over years.</p>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The only exception is an obvious physical change &mdash; water that suddenly runs brown, smells of rotten eggs, or produces visible sediment. Those changes tell you something is wrong and testing is urgently needed. But the absence of those changes tells you nothing about chemical contamination or bacterial load.</p>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Annual testing is the baseline.</strong> Test for total coliform bacteria, nitrates, pH, and total dissolved solids every year through a state-certified laboratory. If those four parameters are clear and you have no known contamination risks in your area, your water is likely safe for the current year. It does not guarantee safety next year &mdash; water quality changes.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>One-time baseline testing for the big threats.</strong> If you have never tested for arsenic, lead, and PFAS, do it once. These contaminants come from geology and legacy industrial activity, not from current events, so they are unlikely to appear suddenly &mdash; but you need to know whether they are present at your baseline.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Know your regional risks.</strong> Your state health department or county extension office can tell you which contaminants are commonly found in groundwater in your area. In parts of New England, arsenic in bedrock aquifers is a known risk. In agricultural areas, nitrates from fertilizer runoff are a consistent concern. Near military bases or industrial sites, PFAS testing is worth prioritizing. Local context tells you what to add to the annual core test.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Test after any change.</strong> Any change in your water&apos;s appearance, taste, or smell is a signal to test immediately, not at the next annual interval. Any well repair or opening of the system warrants testing and shock chlorination before returning to normal use.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-4'>If your most recent annual test came back clean on all four core parameters and you have done baseline testing for arsenic, lead, and PFAS, you have the most complete picture of safety available to a private well owner. That is what knowing your water is safe looks like.</p>
        </div>

        {/* What and When to Test */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Testing</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>What and When to Test</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The CDC and EPA both recommend annual testing of private well water for, at minimum: total coliform bacteria, nitrates, total dissolved solids, and pH. These four tests form the non-negotiable core. Spring testing, after snowmelt and the first rains of the season, is the recommended timing because contamination risk is highest when soil is saturated.</p>
          <div className='overflow-x-auto mb-6'>
            <table className='w-full text-sm border-collapse'>
              <thead>
                <tr style={{ backgroundColor: '#E1F5EE' }}>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Test</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Frequency</th>
                  <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Triggered By</th>
                </tr>
              </thead>
              <tbody>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Total coliform / E. coli</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annually</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Always</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Nitrates</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annually</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Always; more often with infant in home</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>pH and total dissolved solids</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Annually</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Always</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Arsenic</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>At least once; every 5 years in high-risk areas</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Baseline; regional geology</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Lead</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>At least once</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Older home with pre-1986 plumbing</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Iron and manganese</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>At least once; periodically</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Staining, metallic taste</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Hardness</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>At least once</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Scale, soap problems</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>PFAS</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>At least once</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Near military, industrial, or agricultural land</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Radon</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>At least once</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Bedrock well in high-radon geology</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>VOCs</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>As needed</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Near industrial sites, fuel storage</td>
                </tr>
                <tr className='hover:bg-slate-50'>
                  <td className='p-3 border border-slate-200 font-semibold text-slate-900'>Pesticides and herbicides</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>As needed</td>
                  <td className='p-3 border border-slate-200 text-slate-600'>Near agricultural land</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='rounded-lg p-4 mb-4' style={{ backgroundColor: '#FDECEA', borderLeft: '4px solid #D32F2F' }}>
            <p className='text-slate-900 font-semibold text-sm mb-2'>Test immediately &mdash; do not wait for the annual schedule &mdash; if:</p>
            <ul className='text-slate-700 text-sm space-y-1 list-disc list-inside'>
              <li>Your water changes in taste, color, smell, or clarity</li>
              <li>Your well has been flooded or submerged</li>
              <li>Any well component has been opened, repaired, or replaced</li>
              <li>A new potential contaminant source appears nearby (new development, fuel spill, new agricultural activity)</li>
              <li>Anyone in your household becomes ill with gastrointestinal symptoms of unknown cause</li>
            </ul>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mb-4'>Always use a state-certified laboratory for testing. At-home test strips are inadequate for bacteria, PFAS, arsenic, and heavy metals. Your county health department can provide a list of certified labs in your state, and some offer free or subsidized basic testing. Testing costs range from $70 to $110 for the annual core panel and $200 to $500 for comprehensive testing including metals and PFAS.</p>
          <p className='text-slate-700 leading-relaxed text-sm'>The <a href='https://www.epa.gov/privatewells' target='_blank' rel='noopener noreferrer' className='underline hover:opacity-80' style={{ color: '#1D9E75' }}>EPA&apos;s private well protection resources page</a> includes a searchable list of state programs, certified labs, and local health department contacts.</p>
        </div>

        {/* Treatment Options */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Treatment</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Well Water Treatment Options</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>If testing identifies a problem, treatment options exist for virtually every contaminant. The key is matching the treatment technology to the specific contaminant &mdash; no single system removes everything.</p>
          <div className='space-y-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Activated Carbon Filters</h3>
              <p className='text-slate-700 text-sm'>Remove chlorine, VOCs, certain pesticides, and some heavy metals. They do not remove bacteria, nitrates, fluoride, or most PFAS compounds. Point-of-use carbon filters under the kitchen sink are appropriate for VOC removal and taste improvement.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Reverse Osmosis (RO) Systems</h3>
              <p className='text-slate-700 text-sm'>Force water through a semi-permeable membrane that removes a very wide range of contaminants including nitrates, arsenic, PFAS, heavy metals, fluoride, and most dissolved solids. Point-of-use RO systems under the kitchen sink are the most common configuration for well homes concerned about nitrates or PFAS. They waste a significant volume of water in the process &mdash; typically 3 to 5 gallons rejected for every gallon of treated water.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>UV Ultraviolet Systems</h3>
              <p className='text-slate-700 text-sm'>Use ultraviolet light to disinfect water by destroying the DNA of bacteria, viruses, and protozoa. They do not remove chemical contaminants or change the taste of water. They require clear, low-turbidity water to work effectively.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Water Softeners</h3>
              <p className='text-slate-700 text-sm'>Remove calcium and magnesium through an ion-exchange process, replacing them with sodium. They solve hard water problems effectively but add sodium to the water. Should be installed on the cold supply only, leaving unsoftened water at the kitchen tap for drinking. Softeners do not remove bacteria, nitrates, arsenic, PFAS, or heavy metals.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Iron Filters</h3>
              <p className='text-slate-700 text-sm'>Use oxidation and filtration to remove dissolved iron and manganese. Several technologies exist including air injection, birm filtration, and greensand filtration. Testing that quantifies iron type is needed before selecting a filter.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Shock Chlorination</h3>
              <p className='text-slate-700 text-sm'>A disinfection procedure &mdash; not ongoing treatment &mdash; used to address bacterial contamination. Chlorine bleach is introduced to the well casing, circulated through the system, and flushed out over 12 to 24 hours. Appropriate as a first response to a positive coliform test and after any well repair.</p>
            </div>
          </div>
          <p className='text-slate-700 leading-relaxed text-sm mt-4'>If you have a septic system and a private well on the same property, keeping both properly maintained is critical &mdash; a failing septic system is one of the most common sources of bacterial and nitrate contamination in private wells. See our network&apos;s <a href='https://theseptic.guide/guides/maintenance-guide' target='_blank' rel='noopener noreferrer' className='underline hover:opacity-80' style={{ color: '#1D9E75' }}>septic system maintenance guide at theseptic.guide</a> for a full guide to protecting both systems.</p>
        </div>

        {/* Maintenance Schedule */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Maintenance</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Maintenance Schedule: What to Do and When</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The majority of well problems develop slowly from deferred maintenance rather than sudden failure. A consistent annual schedule catches issues at the minor stage.</p>
          <div className='space-y-4'>
            <div className='rounded-lg p-4' style={{ backgroundColor: '#E1F5EE' }}>
              <h3 className='font-bold text-sm mb-2' style={{ color: '#0F6E56' }}>Every Month</h3>
              <ul className='text-slate-700 text-sm space-y-1 list-disc list-inside'>
                <li>Visually inspect the well cap to confirm it is secure and undamaged</li>
                <li>Check around the wellhead for pooling water, which can indicate drainage problems</li>
                <li>Check your pressure tank for leaks or moisture around fittings</li>
              </ul>
            </div>
            <div className='rounded-lg p-4' style={{ backgroundColor: '#E1F5EE' }}>
              <h3 className='font-bold text-sm mb-2' style={{ color: '#0F6E56' }}>Every Spring</h3>
              <ul className='text-slate-700 text-sm space-y-1 list-disc list-inside'>
                <li>Conduct the annual water test (bacteria, nitrates, pH, TDS)</li>
                <li>Inspect the wellhead area for damage from winter frost heave or equipment</li>
                <li>Check well cap bolts &mdash; tighten or replace if loose</li>
                <li>Inspect the area around the well for new potential contamination sources</li>
              </ul>
            </div>
            <div className='rounded-lg p-4' style={{ backgroundColor: '#E1F5EE' }}>
              <h3 className='font-bold text-sm mb-2' style={{ color: '#0F6E56' }}>Every Year (Fall)</h3>
              <ul className='text-slate-700 text-sm space-y-1 list-disc list-inside'>
                <li>Check the pressure tank air charge using a tire gauge on the Schrader valve</li>
                <li>Inspect all visible plumbing connections for drips or corrosion</li>
                <li>Test your water heater anode rod &mdash; well water accelerates anode corrosion</li>
              </ul>
            </div>
            <div className='rounded-lg p-4' style={{ backgroundColor: '#E1F5EE' }}>
              <h3 className='font-bold text-sm mb-2' style={{ color: '#0F6E56' }}>Every 3 to 5 Years</h3>
              <ul className='text-slate-700 text-sm space-y-1 list-disc list-inside'>
                <li>Comprehensive water testing including metals panel, hardness, and regional contaminants</li>
                <li>Professional inspection of the well system by a licensed water well contractor</li>
              </ul>
            </div>
          </div>
          <div className='rounded-lg p-4 mt-4' style={{ backgroundColor: '#FFF3E0', borderLeft: '4px solid #E8A020' }}>
            <p className='text-slate-900 font-semibold text-sm mb-2'>When the pump is 10 or more years old:</p>
            <p className='text-slate-700 text-sm'>Begin budgeting for pump replacement. Have the pump inspected at the next professional service visit. Replacing a pump proactively before it fails costs no more than emergency replacement and avoids the disruption of losing water without notice.</p>
          </div>
          <div className='rounded-lg p-4 mt-4' style={{ backgroundColor: '#FDECEA', borderLeft: '4px solid #D32F2F' }}>
            <p className='text-slate-900 font-semibold text-sm mb-2'>Call a licensed well contractor immediately if you experience:</p>
            <ul className='text-slate-700 text-sm space-y-1 list-disc list-inside'>
              <li>No water or dramatically reduced pressure</li>
              <li>Pump running continuously without building pressure</li>
              <li>Air spitting from faucets</li>
              <li>Sudden change in water taste, color, or smell</li>
              <li>Sediment or grit in water</li>
              <li>Rapid pump cycling (turning on and off every few seconds)</li>
            </ul>
          </div>
        </div>

        {/* Costs */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Costs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Well System Costs: What to Budget</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>Understanding the major costs helps you plan rather than react. Well system expenses are infrequent but significant.</p>
          <div className='grid md:grid-cols-2 gap-4'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Pump Replacement</h3>
              <p className='text-slate-600 text-xs'>$800 to $2,500 depending on well depth and pump size. If electrical control box and wiring need updating, add $200 to $500. See our <Link href='/cost-guides/well-pump-replacement-cost' className='underline hover:opacity-80' style={{ color: '#1D9E75' }}>well pump replacement cost guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Pressure Tank Replacement</h3>
              <p className='text-slate-600 text-xs'>$300 to $700 with installation. See our <Link href='/cost-guides/pressure-tank-replacement-cost' className='underline hover:opacity-80' style={{ color: '#1D9E75' }}>pressure tank replacement cost guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Water Testing</h3>
              <p className='text-slate-600 text-xs'>$50 to $110 for annual core test. $150 to $300 for comprehensive metals panel. $250 to $500 for full testing including PFAS. See our <Link href='/cost-guides/well-water-testing-cost' className='underline hover:opacity-80' style={{ color: '#1D9E75' }}>well water testing cost guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Treatment Systems</h3>
              <p className='text-slate-600 text-xs'>Whole-house filter: $500 to $2,000. RO system: $200 to $600. UV system: $400 to $900. Water softener: $800 to $2,500. See our <Link href='/cost-guides/whole-house-water-filter-cost' className='underline hover:opacity-80' style={{ color: '#1D9E75' }}>whole house water filter cost guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Well Drilling (New Well)</h3>
              <p className='text-slate-600 text-xs'>$5,000 to $15,000 depending on depth, geology, and regional labor rates. See our <Link href='/cost-guides/well-drilling-cost' className='underline hover:opacity-80' style={{ color: '#1D9E75' }}>well drilling cost guide</Link>.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <h3 className='font-bold text-slate-900 text-sm mb-1'>Annual Maintenance Budget</h3>
              <p className='text-slate-600 text-xs'>$200 to $400 per year for testing, minor maintenance, and a growing replacement reserve. Increase the reserve when the pump approaches 10 to 12 years.</p>
            </div>
          </div>
        </div>

        {/* Signs Your Well Needs Attention */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Warning Signs</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Signs Your Well System Needs Attention</h2>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Reduced water pressure throughout the house:</strong> Most commonly a pump beginning to fail or a pressure tank with a compromised bladder. Can also indicate a drop in the water table during drought.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Rapid pump cycling:</strong> If the pump turns on and off every few seconds, the pressure tank bladder has failed (waterlogged tank). This condition burns out the pump motor. Replace the pressure tank immediately.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Air spitting from faucets:</strong> Indicates air is entering the water supply. Can mean the water table has dropped below the pump intake, the pump screen is damaged, or a pressure tank bladder failure.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Sand or sediment in water:</strong> The pump screen may be worn or damaged, or the water table may have dropped enough that the pump is approaching the bottom of the well.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Red, brown, or orange water:</strong> Iron in the water, possibly worsened by pump screen corrosion or a water heater issue. Test for iron and manganese.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Rotten egg smell:</strong> Hydrogen sulfide gas, naturally occurring in some aquifers or produced by sulfate-reducing bacteria in the water system. Requires testing to determine the source.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Sudden change in water taste:</strong> Test immediately. Do not wait for the annual schedule.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'><strong>Spike in electricity bill without explanation:</strong> A failing pump that is running longer to maintain pressure will increase electricity consumption noticeably.</p>
            </div>
          </div>
        </div>

        {/* Well Water vs City Water */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Comparison</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Well Water vs City Water: The Core Differences</h2>
          <p className='text-slate-700 leading-relaxed text-sm mb-6'>The most important things to understand if you have recently moved from municipal to well water, or are evaluating a property with a well:</p>
          <div className='space-y-3'>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'>City water is tested continuously and treated to meet EPA Safe Drinking Water Act standards. The utility is responsible for everything up to your meter. Well water receives no government monitoring and no automatic treatment. You are the water utility for your property.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'>City water contains chlorine or chloramine added as disinfectants, and in many systems, fluoride. Well water contains neither unless you add treatment. This means no disinfection by-product concerns from well water, but also no built-in bacterial protection.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'>City water costs a monthly fee regardless of usage. Well water costs primarily come up-front (drilling) and as periodic maintenance and replacement expenses. Over a 20-year ownership period, a well is typically less expensive than municipal water rates &mdash; but the expenses are lumpy and unpredictable rather than steady.</p>
            </div>
            <div className='bg-white border border-slate-200 rounded-lg p-4'>
              <p className='text-slate-700 text-sm'>City water supply can fail during a main break or utility emergency. A well with a backup generator is the most reliable water source available during a power outage or natural disaster.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className='mb-16'>
          <div className='flex items-center space-x-3 mb-4'>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>FAQ</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Frequently Asked Questions</h2>
          <div className='space-y-4'>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>How do I know if my well water is safe to drink?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>You cannot know without testing &mdash; there is no visual, taste, or smell indicator that reliably confirms safety. Arsenic, nitrates, bacteria, and PFAS are all completely undetectable by human senses. Test annually for total coliform bacteria, nitrates, pH, and total dissolved solids through a state-certified laboratory. Do baseline testing for arsenic, lead, and PFAS if you have never done it. Know your regional contamination risks by contacting your county health department. A clean annual test plus baseline testing for the major threats gives you the most complete picture of safety available to a private well owner.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>How often should I test my well water?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Test for total coliform bacteria, nitrates, pH, and total dissolved solids at minimum once per year. Spring is the recommended timing. Test immediately &mdash; outside this schedule &mdash; any time your water changes in taste, color, or smell, after any well repair, or after flooding. Every 3 to 5 years, do more comprehensive testing including a metals panel. Test for arsenic, lead, and PFAS at least once as a baseline if you have not already done so.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>What are the most dangerous well water contaminants?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>For acute illness, coliform bacteria and E. coli pose the most immediate risk. For long-term health effects, arsenic, nitrates above 10 mg/L (especially for infants), PFAS, and radon in certain geological areas are the primary concerns. Nitrates above 10 mg/L are dangerous specifically to infants under six months. The critical point is that none of these contaminants can be detected by taste, smell, or appearance &mdash; testing is the only way to know they are present.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>How long does a well pump last?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>The average lifespan of a submersible well pump is 8 to 15 years. Pumps in clean, low-sediment water with a properly sized pressure tank regularly last 15 to 20 years. Pumps in high-iron or high-sediment water conditions may need replacement sooner. Jet pumps, used in shallow wells, typically last 8 to 12 years. Begin budgeting for replacement when the pump reaches 10 years.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>What does it mean when my well pump keeps cycling on and off rapidly?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Rapid pump cycling &mdash; turning on and off every few seconds &mdash; almost always indicates a failed pressure tank bladder. The tank is waterlogged: the air cushion that normally buffers the system has been lost, and the pump is trying to maintain pressure directly with no buffer. This is an urgent issue that needs to be addressed quickly. The constant cycling will burn out the pump motor. Call a well contractor to replace the pressure tank.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>Is well water safe to drink without treatment?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>It depends entirely on your specific well and local geology. Many private wells produce clean, safe water that needs no treatment beyond annual testing. Others have naturally occurring contaminants including arsenic, iron, manganese, or radon that require treatment. The only way to know is to test. Start with the annual core test and expand based on your results and your region&apos;s known groundwater concerns.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>Do I need a whole house water filter for well water?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Not necessarily. A filter should be selected based on what your test results show is actually in your water. Buying a filter before testing is like prescribing medication without a diagnosis. Test first. If bacteria are confirmed, UV treatment or shock chlorination is appropriate. If arsenic, nitrates, or PFAS are detected, a point-of-use reverse osmosis system is usually the most effective and economical solution. If iron or hardness is the issue, a dedicated iron filter or water softener addresses those specifically.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>What is the difference between a dug well and a drilled well?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>A dug well is shallow (typically under 30 feet), hand-excavated, and draws from the uppermost groundwater layer. It is highly vulnerable to surface contamination including bacterial runoff, nitrates from nearby agriculture, and drying during drought. A drilled well goes much deeper &mdash; 100 to 400 feet or more &mdash; reaches a deeper aquifer, is sealed with grouted casing, and is significantly more protected from surface contamination. Almost all new wells installed today are drilled wells. If you have an older property with a dug well, discuss its condition, vulnerability, and potential replacement with a licensed well contractor.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>Can a septic system contaminate a well?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Yes. A failing or improperly located septic system is one of the most common sources of bacterial and nitrate contamination in private wells. Setback requirements &mdash; the minimum distance between a well and a septic system &mdash; vary by state and county, typically ranging from 50 to 100 feet. If your well and septic system are on the same property, annual bacterial testing is especially important, and any indication of septic system problems should be investigated promptly. See theseptic.guide for comprehensive guidance on maintaining your septic system to protect both systems.</div>
            </details>
            <details className='group bg-white border border-slate-200 rounded-lg'>
              <summary className='cursor-pointer p-4 font-semibold text-slate-900 text-sm'>What should I do if my well water test comes back positive for bacteria?</summary>
              <div className='px-4 pb-4 text-slate-700 text-sm leading-relaxed'>Stop drinking the water and switch to bottled water immediately. Do not boil water for drinking without first filtering it if the water is turbid or cloudy &mdash; boiling concentrates some contaminants. Shock chlorinate the well following standard procedures, wait 12 to 24 hours, flush the system thoroughly, and retest. If the test comes back positive again after chlorination, there is a structural problem with the well &mdash; a cracked casing, compromised cap, or contaminated pump assembly &mdash; that requires a licensed well contractor to diagnose and repair. Do not return to using the well until a test confirms it is clear.</div>
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
          <div className='space-y-6'>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Aquifer</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>An underground layer of permeable rock, sand, gravel, or other material that stores and transmits groundwater. Wells draw their water from aquifers. The depth and character of an aquifer determines water quality, yield, and vulnerability to contamination. Confined aquifers sit between layers of impermeable rock and are generally more protected from surface contamination. Unconfined aquifers are directly connected to the surface and more vulnerable.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Coliform Bacteria</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>A group of bacteria used as indicator organisms in water quality testing. The presence of total coliform bacteria in well water signals that the well has been infiltrated by surface water and that potentially harmful pathogens may also be present. Fecal coliform bacteria and E. coli specifically indicate contamination from fecal material &mdash; human or animal waste.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pitless Adapter</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>The fitting that allows the well&apos;s water supply pipe to exit the casing horizontally below the frost line without requiring the casing to be cut or the surrounding soil to be excavated for servicing. It provides a watertight seal where the pipe exits the casing and allows the pump and drop pipe assembly to be removed from the well for service.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Pressure Tank</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>A sealed tank that stores water and maintains system pressure in a well water system. Modern residential pressure tanks contain a rubber bladder that separates water from a pre-charged air cushion. The air cushion provides the pressure that pushes water to faucets without the pump running on every demand. When the bladder fails, the tank becomes waterlogged and the pump cycles rapidly.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Total Dissolved Solids (TDS)</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>A measure of all dissolved inorganic and organic material in water, expressed in milligrams per liter (mg/L) or parts per million (ppm). High TDS can indicate the presence of minerals, salts, metals, or other dissolved substances. It is one of the four parameters in the CDC and EPA&apos;s recommended annual core test for private wells.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>PFAS (Per- and Polyfluoroalkyl Substances)</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>A class of thousands of synthetic chemicals characterized by extremely strong carbon-fluorine bonds that make them virtually indestructible in the environment and in the human body. Used since the 1940s in industrial applications and consumer products including non-stick coatings, water-repellent fabrics, firefighting foam, and food packaging. Linked to immune system disruption, thyroid disorders, liver damage, and certain cancers. The EPA set maximum contaminant levels for PFOA and PFOS at 4 parts per trillion in April 2024 for public water systems. Private well owners must test voluntarily.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Shock Chlorination</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>A well disinfection procedure in which a calculated amount of chlorine bleach is added to the well casing, allowed to circulate through the pump, pressure tank, and all household plumbing, and then flushed from the system over 12 to 24 hours. Used to address confirmed bacterial contamination and as a standard practice after any well repair or component replacement.</p>
            </div>
            <div>
              <h3 className='text-lg font-bold text-slate-900 mb-2'>Water Table</h3>
              <p className='text-slate-700 leading-relaxed text-sm'>The upper boundary of the saturated zone in the ground &mdash; the level below which all spaces in soil and rock are filled with water. The water table rises after significant rainfall and drops during drought. Wells that draw from near the water table are vulnerable to running dry during extended dry periods. Deep drilled wells typically penetrate far enough below the normal seasonal variation in the water table to maintain reliable yield through drought.</p>
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
            <Link href='/guides/how-to-test-well-water' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>How to Test Your Well Water</p>
            </Link>
            <Link href='/guides/how-well-pump-works' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>How a Well Pump Works</p>
            </Link>
            <Link href='/guides/well-water-contaminants' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Well Water Contaminants Guide</p>
            </Link>
            <Link href='/guides/well-maintenance-checklist' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Annual Well Maintenance Checklist</p>
            </Link>
            <Link href='/guides/well-water-vs-city-water' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Well Water vs City Water</p>
            </Link>
            <Link href='/cost-guides/well-pump-replacement-cost' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Well Pump Replacement Cost</p>
            </Link>
            <Link href='/cost-guides/well-water-testing-cost' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Well Water Testing Cost</p>
            </Link>
            <Link href='/problems/well-water-smells-like-sulfur' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Well Water Smells Like Sulfur</p>
            </Link>
            <Link href='/problems/well-water-pressure-low' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Well Water Pressure Low</p>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Brown or Rusty Well Water</p>
            </Link>
            <Link href='/reviews/best-well-water-test-kits' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Best Well Water Test Kits</p>
            </Link>
            <Link href='/reviews/best-whole-house-water-filters' className='block bg-white border border-slate-200 rounded-lg p-4 hover:border-[#1D9E75] transition-colors'>
              <p className='font-semibold text-slate-900 text-sm'>Best Whole House Water Filters for Wells</p>
            </Link>
          </div>
        </div>

      </article>
    </>
  )
}
