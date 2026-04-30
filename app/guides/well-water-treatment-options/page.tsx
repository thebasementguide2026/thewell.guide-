import Link from 'next/link'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import type { Metadata } from 'next'
import LeadForm from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Well Water Treatment Options: Match the Right System to Your Contaminant | The Well Guide',
  description: 'Every well water treatment technology explained and matched to your specific contaminants — sediment, carbon, UV, softeners, RO, and oxidizing filters.',
  openGraph: {
    title: 'Well Water Treatment Options: Match the Right System to Your Contaminant',
    description: 'Every well water treatment technology explained and matched to your specific contaminants — sediment, carbon, UV, softeners, RO, and oxidizing filters.',
    url: 'https://www.thewell.guide/guides/well-water-treatment-options',
    siteName: 'The Well Guide',
    type: 'article',
    images: [{ url: 'https://www.thewell.guide/well treatmentoptions.jpg', width: 1200, height: 630, alt: 'Well water treatment system components including filters, UV disinfection, and reverse osmosis' }],
  },
  alternates: { canonical: 'https://www.thewell.guide/guides/well-water-treatment-options' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the best water treatment system for well water?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no single best system. The correct system depends entirely on what is in your water. Test your well water at a certified laboratory first, then match the treatment technology to your specific results. For most residential well systems with multiple issues, the most effective combination is a whole-house oxidizing filter for iron and manganese, a water softener for hardness, a UV disinfection system for bacteria, and an under-sink reverse osmosis system for dissolved health contaminants. Total installed cost is typically $3,000 to $8,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need a whole-house water filter or just a drinking water filter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on the contaminant. Iron, manganese, and bacteria affect the entire house and require whole-house treatment. Arsenic, nitrates, PFAS, and lead are health concerns only when consumed and can be addressed with a point-of-use reverse osmosis system at the kitchen sink at far lower cost. Many households benefit from both: whole-house treatment for aesthetic and appliance-protection issues, plus under-sink RO for the highest-purity drinking water.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does a water softener remove bacteria or other contaminants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. A water softener removes only hardness minerals (calcium and magnesium) and can reduce low concentrations of dissolved ferrous iron. It does not remove bacteria, viruses, nitrates, arsenic, lead, VOCs, or PFAS. Do not rely on a water softener as disinfection. If bacteria are present, you need UV disinfection or continuous chlorination in addition to softening.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does reverse osmosis remove bacteria?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'RO membranes physically block most bacteria due to pore size, but RO is not classified as a primary disinfection system. For well water with confirmed bacterial contamination, use UV disinfection upstream of RO rather than relying on the membrane alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is NSF certification and why does it matter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'NSF International independently tests and certifies water treatment systems to verify they actually remove what manufacturers claim. NSF/ANSI 53 covers health contaminants like lead and PFAS. NSF/ANSI 55 covers UV disinfection. NSF/ANSI 58 covers reverse osmosis. A system without NSF certification for a specific contaminant may be marketed as removing it without independent verification. Verify certification at nsf.org before purchasing.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I know what treatment my well water needs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Test your well water at a certified laboratory. Annual basic testing should cover coliform bacteria, E. coli, nitrates, and pH. Additional testing for iron, manganese, hardness, arsenic, lead, and PFAS is recommended based on your region. Your county health department can provide a list of certified labs. Treatment decisions must be based on specific test results - not symptoms alone.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I install a well water treatment system myself?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For some systems, yes. Sediment filter housings, under-sink carbon filters, and RO systems are DIY-manageable for homeowners with basic plumbing skills and save $200 to $500 in labor. UV systems require an electrical connection but are manageable with moderate comfort in electrical work. Whole-house oxidizing filters, water softeners, and chemical injection systems benefit from professional installation to ensure correct sizing and programming.',
      },
    },
    {
      '@type': 'Question',
      name: 'How often do well water treatment systems need maintenance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sediment cartridges every 3 to 6 months. Carbon cartridges every 6 to 12 months. UV lamps annually regardless of visible function. Softener salt monthly top-up. RO pre-filter cartridges every 6 to 12 months, membrane every 2 to 3 years. Oxidizing filter media every 3 to 7 years. Maintenance schedules that slip allow contaminants to pass through exhausted media or UV systems to operate below their rated disinfection dose.',
      },
    },
  ],
}

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Well Water Treatment Options: Match the Right System to Your Contaminant',
  description: 'Every well water treatment technology explained and matched to your specific contaminants — sediment, carbon, UV, softeners, RO, and oxidizing filters.',
  author: { '@type': 'Organization', name: 'The Well Guide' },
  publisher: { '@type': 'Organization', name: 'The Well Guide', url: 'https://well.guide' },
  mainEntityOfPage: 'https://www.thewell.guide/guides/well-water-treatment-options',
  dateModified: '2026-03-25',
}

export default function WellWaterTreatmentOptions() {
  return (
    <>
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <div className='relative w-full' style={{ height: '70vh', minHeight: '500px' }}>
        <Image src='/well treatmentoptions.jpg' alt='Well water treatment system components including filters, UV disinfection, and reverse osmosis' fill className='object-cover' priority />
        <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30' />
        <div className='absolute inset-0 flex items-end'>
          <div className='max-w-4xl mx-auto px-6 pb-12 w-full'>
            <span className='inline-block px-3 py-1 text-xs font-bold rounded-md mb-4 tracking-wide' style={{ backgroundColor: '#E8F4FD', color: '#0D3D30' }}>GUIDE</span>
            <h1 className='text-4xl md:text-5xl font-black text-white leading-tight mb-3'>Well Water Treatment Options: Match the Right System to Your Contaminant</h1>
            <p className='text-white/70 text-base'>14 min read &middot; Updated March 2026</p>
          </div>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className='max-w-4xl mx-auto px-6 mt-6 mb-2'>
        <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Well Water Treatment Options' }]} />
      </div>

      <article className='max-w-4xl mx-auto px-6 py-8'>

        {/* TL;DR */}
        <div className='rounded-xl p-6 mb-10' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-2'>Quick answer:</p>
          <p className='text-slate-700 leading-relaxed'>
            Test first, treat second. No treatment system addresses every contaminant, and many systems that fix one problem make another worse. The correct sequence for any well owner is: identify what is actually in your water through certified lab testing, then match the treatment technology to the specific contaminant. For most residential well systems with multiple issues, the answer is a combination of technologies in the correct order &mdash; sediment filter first, then the targeted treatment (iron filter, softener, UV), then a point-of-use reverse osmosis system for drinking water if you need to address dissolved contaminants like arsenic, nitrates, or PFAS that whole-house systems cannot reliably remove. This guide explains every treatment technology available, what each one actually removes, what it cannot remove, what it costs, and how to build the right stack for your specific water test results.
          </p>
          <p className='text-slate-700 leading-relaxed mt-3'>
            Want a quick budget number before you start reading? Use our <Link href='/cost-guides/well-water-treatment-cost-calculator' className='underline font-semibold' style={{ color: '#0F6E56' }}>well water treatment cost calculator</Link> to estimate your installed cost based on your water issue, home size, and region.
          </p>
          <p className='text-slate-500 text-sm italic mt-4'>This guide is written without product endorsements and without affiliation to any water treatment company. Every recommendation follows EPA guidance and NSF/ANSI certification standards.</p>
        </div>

        {/* The Rule No Treatment Company Will Tell You */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>The Rule No Treatment Company Will Tell You</h2>
        <p className='text-slate-700 leading-relaxed mb-4'>
          One treatment technology cannot address all well water problems. Water treatment companies benefit from selling you a comprehensive system whether you need it or not. The homeowner who buys a water softener to fix iron staining, a UV system to fix hardness, and an RO system for bacteria has spent $5,000 to $10,000 on partially redundant equipment, some of which will actively interfere with the other components.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          The principle that governs correct well water treatment is called treatment matching: the technology must match the contaminant, the contaminant concentration must be known from testing, and the treatment sequence must be correct (some systems foul upstream technologies if installed in the wrong order).
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>Three questions determine every treatment decision:</p>

        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What is specifically in the water?</strong> Not &ldquo;my water tastes funny&rdquo; but &ldquo;my iron is 3.2 mg/L, my manganese is 0.08 mg/L, my pH is 6.4, and my total coliform came back present.&rdquo; Specific numbers from a certified lab determine the correct technology and the correct sizing.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Is this a whole-house problem or a drinking water problem?</strong> Iron staining destroys laundry and fixtures throughout the house &mdash; it requires whole-house (point-of-entry) treatment. Arsenic and nitrates are health concerns only when consumed &mdash; they can be addressed with a point-of-use system at the kitchen tap at a fraction of the cost of whole-house treatment.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>What is the treatment sequence?</strong> Sediment and iron must be removed before water enters a UV system (particles block UV penetration). Hardness minerals must be reduced before an RO membrane (they scale and foul the membrane within months). Getting the order wrong means equipment failures, expensive repairs, and contaminants that pass through untreated.
        </p>

        {/* Contaminant-to-Treatment Master Table */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>The Contaminant-to-Treatment Master Table</h2>
        <p className='text-slate-700 leading-relaxed mb-6'>
          Find your test result contaminant and its concentration. The table maps each to the correct treatment technology, whether whole-house or point-of-use treatment is necessary, and the urgency level.
        </p>
        <div className='overflow-x-auto mb-10'>
          <table className='w-full text-sm border-collapse'>
            <thead>
              <tr style={{ backgroundColor: '#E1F5EE' }}>
                <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Contaminant</th>
                <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Treatment Technology</th>
                <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>POE or POU</th>
                <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Health Risk</th>
                <th className='text-left p-3 font-bold text-slate-900 border border-slate-200'>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Iron above 0.3 mg/L</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Oxidizing filter (air injection or greensand)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE &mdash; whole house</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aesthetic only</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Type matters: ferrous vs ferric vs iron bacteria &mdash; see section below</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Iron above 10 mg/L</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Chemical oxidation (chlorine or H₂O₂) + filter</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aesthetic only</td>
                <td className='p-3 border border-slate-200 text-slate-700'>High concentrations need stronger oxidation</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Manganese above 0.05 mg/L</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Oxidizing filter (greensand, birm, or catalytic media)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Low; health advisory at 0.3 mg/L for infants</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Test specifically &mdash; manganese health advisory differs from aesthetic standard</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Hardness above 120 mg/L (7 gpg)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Water softener (ion exchange)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>None &mdash; scale and damage to appliances</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Softener exchanges calcium and magnesium for sodium &mdash; not appropriate if sodium is also a concern</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Hydrogen sulfide (rotten egg)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aeration or oxidizing filter + carbon</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aesthetic; corrosive to pipes</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aeration most effective; carbon removes residual odor</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Iron bacteria</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Shock chlorination first, then oxidizing filter + disinfection</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>None directly</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Iron bacteria defeat oxidizing filters without prior disinfection</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Bacteria (coliform)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>UV disinfection; continuous chlorination</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Moderate to high</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Shock chlorinate first; UV requires clear water upstream</td>
              </tr>
              {/* VOCs / E. coli rows - red highlight */}
              <tr style={{ backgroundColor: '#FCEBEB' }}>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>E. coli</td>
                <td className='p-3 border border-slate-200 text-slate-700'>UV disinfection + structural well repair</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>High &mdash; fecal contamination</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Fix structural source or contamination recurs</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Nitrates above 10 mg/L</td>
                <td className='p-3 border border-slate-200 text-slate-700'>RO or ion exchange</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POU (drinking only) or POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>High for infants &mdash; blue baby syndrome</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Do not use water softeners &mdash; they do not remove nitrates</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Arsenic above 10 ppb</td>
                <td className='p-3 border border-slate-200 text-slate-700'>RO, activated alumina, or adsorptive media</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POU or POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>High &mdash; carcinogenic with chronic exposure</td>
                <td className='p-3 border border-slate-200 text-slate-700'>As(III) vs As(V) speciation affects treatment choice &mdash; test both forms</td>
              </tr>
              {/* PFAS row - amber highlight */}
              <tr style={{ backgroundColor: '#FAEEDA' }}>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>PFAS</td>
                <td className='p-3 border border-slate-200 text-slate-700'>RO (broadest removal) or high-capacity GAC (NSF P473) for long-chain PFAS; RO required for short-chain PFAS</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POU</td>
                <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>High &mdash; EPA MCL 4 ppt as of 2024 for PFOA/PFOS</td>
                <td className='p-3 border border-slate-200 text-slate-700'>See PFAS section below for critical short-chain distinction</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Lead above 15 ppb</td>
                <td className='p-3 border border-slate-200 text-slate-700'>RO or NSF/ANSI 53 certified carbon</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POU</td>
                <td className='p-3 border border-slate-200 text-slate-700'>High &mdash; neurological damage, no safe level</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Fix corrosive pH upstream &mdash; low pH dissolves pipe lead</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Low pH below 6.5</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Calcite neutralizer or soda ash injection</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Indirect &mdash; dissolves lead and copper from pipes</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Fix pH before treating metals &mdash; acidic water is the cause</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>High TDS above 500 mg/L</td>
                <td className='p-3 border border-slate-200 text-slate-700'>RO</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POU</td>
                <td className='p-3 border border-slate-200 text-slate-700'>None directly</td>
                <td className='p-3 border border-slate-200 text-slate-700'>RO removes virtually all dissolved solids</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Radon</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aeration (whole house) or activated carbon</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>High &mdash; lung cancer risk from aerosolization</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Contact state radon program for guidance specific to your state</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Tannins</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Anion exchange resin</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aesthetic &mdash; yellow color and bitter taste</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Standard softeners ineffective; requires specific tannin-removal resin</td>
              </tr>
              <tr>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>Sediment and turbidity</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Sediment filter (5 micron or appropriate size)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE &mdash; first stage always</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Aesthetic</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Must be first in any treatment sequence</td>
              </tr>
              {/* VOCs row - red highlight */}
              <tr style={{ backgroundColor: '#FCEBEB' }}>
                <td className='p-3 border border-slate-200 text-slate-700 font-medium'>VOCs</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Activated carbon (GAC or carbon block)</td>
                <td className='p-3 border border-slate-200 text-slate-700'>POE or POU</td>
                <td className='p-3 border border-slate-200 text-slate-700 font-semibold'>High for many compounds</td>
                <td className='p-3 border border-slate-200 text-slate-700'>Stop using water if VOCs confirmed &mdash; see <Link href='/guides/well-water-contaminants' className='underline' style={{ color: '#1D9E75' }}>contaminants guide</Link></td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* NSF/ANSI Certification */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>Understanding NSF/ANSI Certification: The Only Independent Verification That Matters</h2>
        <p className='text-slate-700 leading-relaxed mb-4'>
          Before explaining each treatment technology, understand NSF/ANSI certification because it is the single most important piece of information when evaluating any water treatment product claim.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          NSF International (now NSF/ANSI jointly with the American National Standards Institute) sets independent testing standards for water treatment performance. A manufacturer claiming their system removes lead without NSF certification has made an unverified marketing claim. A system certified to NSF/ANSI 53 for lead reduction has been independently tested to confirm it actually reduces lead to below the standard in controlled conditions.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>The relevant standards for well water:</p>

        <p className='text-slate-700 leading-relaxed mb-3'>
          <strong className='text-slate-900'>NSF/ANSI 42:</strong> Aesthetic contaminants &mdash; chlorine taste and odor, sediment, particulates. Does not address health contaminants.
        </p>
        <p className='text-slate-700 leading-relaxed mb-3'>
          <strong className='text-slate-900'>NSF/ANSI 53:</strong> Health-related contaminants &mdash; lead, VOCs, cysts (Cryptosporidium, Giardia), PFAS/PFOA (added as P473 in 2019). This is the critical standard for any system making health-related removal claims.
        </p>
        <p className='text-slate-700 leading-relaxed mb-3'>
          <strong className='text-slate-900'>NSF/ANSI 55:</strong> UV disinfection systems. Class A is for treatment of potentially contaminated water. Class B is for reducing non-pathogenic nuisance organisms only. For well water with confirmed bacteria, you need Class A, not Class B.
        </p>
        <p className='text-slate-700 leading-relaxed mb-3'>
          <strong className='text-slate-900'>NSF/ANSI 58:</strong> Reverse osmosis systems. Covers performance of the RO membrane and removal of dissolved contaminants including arsenic, nitrates, fluoride, TDS.
        </p>
        <p className='text-slate-700 leading-relaxed mb-3'>
          <strong className='text-slate-900'>NSF/ANSI 44:</strong> Water softeners. Covers ion exchange performance for hardness reduction.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>NSF P473:</strong> PFAS-specific &mdash; covers reduction of PFOA and PFOS. Now incorporated into NSF/ANSI 53 certification listings.
        </p>

        {/* NSF Verification Steps - Grey Callout */}
        <div className='rounded-xl p-6 mb-10 bg-slate-100 border border-slate-200'>
          <p className='font-bold text-slate-900 mb-3'>The certification verification rule: Do not rely on the manufacturer&apos;s claim of certification. Verify directly at the NSF product search database at <a href='https://www.nsf.org' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: '#1D9E75' }}>nsf.org</a>. Here is the exact 90-second process:</p>
          <ol className='list-decimal list-inside space-y-2 text-slate-700'>
            <li>Go to <a href='https://www.nsf.org' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: '#1D9E75' }}>nsf.org</a> and find the &ldquo;Certified Products&rdquo; database (search &ldquo;NSF certified products database&rdquo; if you cannot locate it directly).</li>
            <li>Enter the brand name in the manufacturer field and the product model number in the product name field.</li>
            <li>In the results, look at the &ldquo;Standards&rdquo; column. A system may show multiple standards &mdash; NSF 42, NSF 53, NSF 58, and so on.</li>
            <li>Click through to the specific product listing and look at the &ldquo;Contaminants Reduced&rdquo; column under each standard. This is the critical step. NSF 42 certification for chlorine taste does not appear next to NSF 53 certification for lead &mdash; they are separate listings.</li>
            <li>Find the specific contaminant you are trying to remove (lead, PFAS, arsenic, nitrate) and confirm it appears under the correct standard in the certified product listing.</li>
          </ol>
          <p className='text-slate-700 mt-4'>A product may carry NSF 42 certification for chlorine and taste improvement while making marketing claims about lead reduction that are not independently certified. The database verification takes 90 seconds and costs nothing. It is the most important step before any water treatment purchase.</p>
        </div>

        {/* Treatment Technology Deep Dives */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-6'>Treatment Technology Deep Dives</h2>

        {/* Sediment Filters */}
        <h3 className='text-xl font-bold text-slate-900 mt-8 mb-4'>Sediment Filters</h3>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they do:</strong> Mechanical filtration that physically blocks particles above a certain size. Pore sizes range from 50 microns (coarse &mdash; visible sediment, sand) to 1 micron (fine &mdash; most bacteria, Cryptosporidium, Giardia) to 0.1 micron (ultrafiltration &mdash; most viruses).
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they cannot do:</strong> Remove dissolved contaminants. A sediment filter does not remove iron in its soluble ferrous form, does not remove hardness minerals, does not kill bacteria (it filters them, but a clogged sediment filter harbors bacteria colonization), and does not remove any chemical contaminants.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Where they belong:</strong> Always first in any treatment sequence. Sediment protects and extends the life of every downstream component &mdash; carbon filters, UV lamps, softener resin, and RO membranes. A UV system with turbid water upstream cannot disinfect effectively because particles shield bacteria from UV exposure.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>Cost:</strong> Cartridge-style sediment pre-filters cost $30 to $80 for the housing plus $5 to $20 per replacement cartridge changed every 3 to 6 months. Whole-house backwashing sediment systems cost $400 to $1,200.
        </p>

        {/* Activated Carbon Filters */}
        <h3 className='text-xl font-bold text-slate-900 mt-8 mb-4'>Activated Carbon Filters</h3>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they do:</strong> Activated carbon (AC) uses adsorption to bind organic molecules to the porous carbon surface as water passes through. It removes chlorine, chloramines, many VOCs, pesticides, certain herbicides, hydrogen sulfide (at low concentrations), and improves taste and odor significantly. Catalytic carbon (a modified form) is more effective against chloramines and hydrogen sulfide.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they cannot do:</strong> Remove dissolved inorganic contaminants. Carbon does not remove arsenic, nitrates, fluoride, lead (unless specifically certified to NSF 53 for lead removal &mdash; not all carbon systems are), hardness minerals, or bacteria. Carbon also does not remove dissolved iron.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Where they belong:</strong> After sediment filtration and after iron removal (if iron is present). High iron concentrations foul carbon media rapidly. Carbon is commonly used as a final polish stage after heavier contaminant treatment, and as the post-filter in RO systems to improve taste of permeate water.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Media lifespan:</strong> Carbon filter cartridges in under-sink systems need replacement every 6 to 12 months. Whole-house GAC (granular activated carbon) tanks need media replacement every 3 to 5 years depending on water quality and usage.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>Cost:</strong> Under-sink carbon filters: $100 to $400. Whole-house GAC systems: $500 to $2,000.
        </p>

        {/* Oxidizing Filters */}
        <h3 className='text-xl font-bold text-slate-900 mt-8 mb-4'>Oxidizing Filters (Iron and Manganese Removal)</h3>

        {/* Iron type self-test callout */}
        <div className='rounded-xl p-6 mb-6' style={{ backgroundColor: '#E1F5EE', borderLeft: '4px solid #1D9E75' }}>
          <p className='font-bold text-slate-900 mb-3'>Identify your iron type before choosing a system: The treatment that works for one type of iron fails on another. Use this 10-minute self-test before calling a contractor or purchasing equipment.</p>
          <p className='text-slate-700 mb-4'>Fill a clear glass from the cold tap and hold it to the light. Note the color immediately. Then set it on a white counter and return in 10 minutes.</p>
          <ul className='space-y-3 text-slate-700'>
            <li><strong className='text-slate-900'>Water runs clear at the tap and turns orange-red after 10 minutes:</strong> Ferrous iron (dissolved, invisible until oxidized by air contact). Air injection or greensand works well.</li>
            <li><strong className='text-slate-900'>Water comes out orange-red immediately:</strong> Ferric iron (already oxidized to particulate form). A sediment filter or greensand can address this directly. May not need full air injection.</li>
            <li><strong className='text-slate-900'>Water is clear but has a rainbow sheen on the surface, or you see reddish-brown slime in toilet tank:</strong> Iron bacteria present. Oxidizing filters will not permanently fix this. Shock chlorinate the well first, then consider an oxidizing filter for residual iron.</li>
            <li><strong className='text-slate-900'>Water is clear and stays clear but smells of sulfur:</strong> Hydrogen sulfide or sulfur bacteria &mdash; not iron. Aeration or catalytic carbon, not an iron filter.</li>
          </ul>
          <p className='text-slate-700 mt-4'>This self-test takes 10 minutes and saves the cost of a treatment system purchased for the wrong iron type.</p>
        </div>

        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they do:</strong> Oxidizing filters convert dissolved ferrous iron (clear-water iron that is invisible in the tap but turns orange on contact with air) into particulate ferric iron, then filter out the particles. The same process works for dissolved manganese. Technologies include:
        </p>
        <ul className='list-disc list-inside space-y-3 text-slate-700 mb-4 ml-4'>
          <li><strong className='text-slate-900'>Air injection (air-charged) systems:</strong> Inject a pocket of air into the water to create natural oxidation. Most effective for iron up to 7 to 10 mg/L at normal pH. Chemical-free. Requires backwashing. Good choice for iron and mild hydrogen sulfide together.</li>
          <li><strong className='text-slate-900'>Greensand (manganese greensand):</strong> Filter media coated with manganese dioxide that catalyzes oxidation. Effective for iron up to 10 to 15 mg/L and manganese up to 1 to 2 mg/L. Requires periodic regeneration with potassium permanganate. Best choice for higher iron concentrations.</li>
          <li><strong className='text-slate-900'>Birm:</strong> Catalytic media that uses dissolved oxygen in the water for oxidation. Requires pH above 6.8 and adequate dissolved oxygen &mdash; does not work in acidic well water without pH correction upstream. No chemical regeneration required.</li>
          <li><strong className='text-slate-900'>Catalytic carbon (Filox, Katalox, Centaur):</strong> Manganese dioxide catalytic media with high surface area. Most effective for the widest range of iron, manganese, and hydrogen sulfide concentrations. Works at lower pH than Birm. Higher cost but longest media life.</li>
          <li><strong className='text-slate-900'>Chemical oxidation (chlorine or hydrogen peroxide injection):</strong> For iron above 10 to 15 mg/L or with high iron bacteria presence. Injects a measured dose of chlorine or hydrogen peroxide before the filter. Most effective but requires chemical storage and injector maintenance.</li>
        </ul>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they cannot do:</strong> Oxidizing filters are not disinfection systems. They do not kill bacteria. They do not remove arsenic, nitrates, or hardness.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Important distinction &mdash; iron bacteria:</strong> If iron bacteria are present (indicated by rusty slime in toilet tanks, biofilm in plumbing), the iron bacteria will colonize and defeat oxidizing filter media over time. Shock chlorinate the well first, then install the oxidizing filter. Running an oxidizing filter without first addressing iron bacteria typically leads to progressive loss of performance.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Cost:</strong> Air injection systems: $1,200 to $2,500. Greensand systems: $1,000 to $2,200. Catalytic media systems: $1,500 to $3,000. All require professional installation. Annual maintenance cost: $100 to $300.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          For iron specifically, treatment selection depends on which of the four iron types you have (ferrous, ferric, bacterial, or colloidal) and the iron concentration in your water. A water softener handles low-level ferrous iron, an air injection oxidation filter handles moderate to high iron, and shock chlorination is required before filtration for wells with bacterial iron. Installing the wrong equipment for your iron type is the single most common iron treatment mistake. For a complete breakdown of iron types, diagnostic testing, and treatment comparison with real costs, see our <Link href='/guides/iron-in-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>iron in well water guide</Link>.
        </p>

        {/* Water Softeners */}
        <h3 className='text-xl font-bold text-slate-900 mt-8 mb-4'>Water Softeners</h3>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they do:</strong> Water softeners use ion exchange to swap hardness minerals (calcium and magnesium) for sodium or potassium ions. This prevents scale buildup in pipes, water heaters, dishwashers, and appliances. Water with hardness above 120 mg/L (7 grains per gallon) will visibly scale appliances and reduce their efficiency and lifespan. Hardness above 250 mg/L (15 gpg) causes rapid scale accumulation.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          Water softeners also remove low concentrations of dissolved ferrous iron, typically up to 2 to 5 mg/L depending on the unit. They are not primarily iron removal systems &mdash; using a softener as the sole iron treatment at concentrations above 5 mg/L will foul the resin quickly.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they cannot do:</strong> Softeners do not remove bacteria, nitrates, arsenic, lead, VOCs, PFAS, or sediment. They do not disinfect. They increase sodium concentration in the water.
        </p>

        {/* Sodium calculation callout */}
        <div className='rounded-xl p-6 mb-6' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
          <p className='font-bold text-slate-900 mb-3'>The sodium calculation that matters:</p>
          <p className='text-slate-700 leading-relaxed mb-3'>
            A water softener adds approximately 8 milligrams of sodium per liter for every grain per gallon (gpg) of hardness removed. If your water has 20 gpg hardness and you fully soften it, you are adding approximately 160 mg/L of sodium to every liter of water you drink. The EPA&apos;s secondary drinking water guideline for sodium is 20 mg/L for taste &mdash; softened water from a moderately hard well can exceed this by a factor of 8 or more.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            For anyone on a physician-prescribed low-sodium diet (common for heart disease, hypertension, or kidney conditions), this is clinically significant. For households feeding infants formula mixed with tap water, fully softened water is not recommended &mdash; use the unsoftened bypass line or filtered water. Potassium chloride (KCl) can substitute for sodium chloride salt in the regeneration cycle and adds potassium rather than sodium, which is worth discussing with your water treatment installer if sodium is a concern.
          </p>
        </div>

        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>The brine discharge consideration:</strong> Water softeners regenerate with salt (sodium chloride), discharging brine to your drain and ultimately your septic system. New Hampshire Department of Environmental Services notes that brine discharge from softeners can contaminate nearby groundwater including neighboring wells. If your well is shallow and you are in a high-density well area, this is worth discussing with your contractor.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>Cost:</strong> Residential water softeners: $600 to $2,000 for the unit. Installation: $300 to $600. Salt cost: $100 to $200 per year. Total 10-year cost: approximately $2,000 to $5,000.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          For the full cost breakdown of every treatment system type &mdash; sediment filters, iron filters, softeners, UV systems, and multi-stage combinations &mdash; including installed costs, annual maintenance, and the 10-year ownership picture, see the <Link href='/cost-guides/whole-house-water-filter-cost' className='underline' style={{ color: '#1D9E75' }}>whole house water filter cost guide</Link>.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          For the complete guide to hard water in private wells &mdash; including how to test at home, the real cost of untreated hard water on appliances and plumbing, the iron co-occurrence problem, and the correct treatment sequence &mdash; see the <Link href='/guides/hard-water-well' className='underline' style={{ color: '#1D9E75' }}>hard water well guide</Link>.
        </p>

        {/* UV Disinfection Systems */}
        <h3 className='text-xl font-bold text-slate-900 mt-8 mb-4'>UV Disinfection Systems</h3>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they do:</strong> UV systems expose water to ultraviolet light at 254 nanometers wavelength, which damages the DNA of microorganisms and prevents them from reproducing. Class A UV systems certified to NSF/ANSI 55 deliver a minimum dose of 40 mJ/cm&sup2; and are verified to inactivate bacteria, viruses, Giardia, and Cryptosporidium.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          UV is the most effective, lowest-maintenance chemical-free disinfection available for residential well water. It does not add anything to the water, does not change taste or pH, and leaves no disinfection byproducts.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they cannot do:</strong> UV systems do not remove any contaminant. They inactivate organisms. A UV system cannot remove iron, hardness, nitrates, arsenic, sediment, or anything chemical. They also require clear water upstream &mdash; any turbidity above 1 NTU or iron above 0.3 mg/L significantly reduces UV transmittance and disinfection effectiveness.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>The pre-treatment requirement:</strong> This is the most important rule for UV systems. Water entering the UV chamber must be clear. This means: sediment filter first, iron removal if iron is present, and ideally hardness treatment if hardness is high (scale can build on the quartz sleeve that surrounds the UV lamp, blocking UV penetration). A UV system installed without pre-treatment in well water with iron is not providing reliable disinfection.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Annual lamp replacement:</strong> UV lamps must be replaced annually even if they appear to be working. UV output degrades over time. After approximately 9,000 hours (one year of continuous operation), output has dropped below the certified disinfection dose. A UV system with a three-year-old lamp may look functional but is not reliably disinfecting.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Cost:</strong> Residential Class A UV systems: $200 to $800 for the unit. Annual lamp replacement: $50 to $150. Installation: $150 to $300. UV is cost-effective compared to continuous chlorination and produces no chemical taste or byproducts.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>If you use continuous chlorination instead of UV:</strong> pH determines how effective your chlorine injection is. At pH 6.0, approximately 96 percent of dissolved chlorine exists as hypochlorous acid (HOCl), the active disinfecting form. At pH 8.0, that drops to approximately 3 percent &mdash; chlorine is 30 times less effective at pH 8 than pH 6. Many well owners with acidic water who add a pH neutralizer upstream of their chlorination point inadvertently reduce their chlorination effectiveness dramatically without adding more chlorine to compensate. The EPA guidance is to target pH between 6.5 and 7.5 and maintain a free chlorine residual of at least 0.2 mg/L at the far end of the distribution system. If you are correcting pH and using continuous chlorination, verify the free chlorine residual at your farthest tap after any pH adjustment.
        </p>

        {/* Reverse Osmosis Systems */}
        <h3 className='text-xl font-bold text-slate-900 mt-8 mb-4'>Reverse Osmosis Systems</h3>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they do:</strong> RO systems force water through a semi-permeable membrane with pores of approximately 0.0001 microns &mdash; small enough to block dissolved molecules. A properly functioning RO system removes up to 99 percent of total dissolved solids including arsenic, fluoride, nitrates, lead, sodium, PFAS, chromium, radium, uranium, copper, and sulfate. RO is the broadest-spectrum dissolved-contaminant removal technology available for residential use.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they cannot do:</strong> RO membranes foul with iron, manganese, and hardness minerals. A well water RO system must have pre-treatment upstream &mdash; sediment filter, iron removal if iron is present, and water softener or scale inhibitor if hardness is above 120 mg/L. Installing an RO system in hard or iron-bearing well water without pre-treatment will require membrane replacement every 6 to 12 months rather than every 2 to 3 years.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          RO also produces reject water &mdash; water that carries the concentrated removed contaminants down the drain. Standard RO systems produce approximately 3 to 4 gallons of drain water for every 1 gallon of treated water. High-efficiency RO systems reduce this ratio but at higher upfront cost.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Point of use is almost always correct for well water RO:</strong> Whole-house reverse osmosis systems exist but cost $5,000 to $15,000 and waste enormous water volumes. For the vast majority of well water situations, an under-sink RO system at the kitchen tap serves drinking and cooking needs at a cost of $200 to $600. If the concern is arsenic or nitrates, only ingested water requires treatment &mdash; showering in arsenic-bearing water above the EPA limit is not a significant health risk, making whole-house RO unnecessary for these contaminants.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Cost:</strong> Under-sink RO systems: $200 to $600. Filter replacement (sediment and carbon stages): $50 to $100 per year. Membrane replacement: $30 to $100 every 2 to 3 years.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          For arsenic specifically, treatment technology selection depends on the concentration in your water and whether you need point-of-use protection (kitchen sink drinking water only) or whole-house protection. Reverse osmosis at the kitchen sink is cost-effective for typical residential arsenic levels, while whole-house activated alumina or ion exchange systems protect against bathing exposure at higher concentrations. For a complete comparison of arsenic treatment options with costs and limitations, see our dedicated article on <a href='/guides/arsenic-in-well-water' className='font-semibold underline' style={{ color: '#1D9E75' }}>arsenic in well water</a>.
        </p>

        {/* PFAS short-chain callout */}
        <div className='rounded-xl p-6 mb-6' style={{ backgroundColor: '#FAEEDA', borderLeft: '4px solid #854F0B' }}>
          <p className='font-bold text-slate-900 mb-3'>The PFAS treatment distinction that most articles get wrong:</p>
          <p className='text-slate-700 leading-relaxed mb-3'>
            Activated carbon (GAC) removes long-chain PFAS compounds &mdash; specifically PFOA and PFOS, the original compounds regulated by the EPA &mdash; effectively when the filter is properly sized and not exhausted. However, as manufacturers phased out PFOA and PFOS under regulatory pressure, they replaced them with shorter-chain PFAS compounds including PFBS, PFHxS, and GenX (HFPO-DA). The EPA&apos;s 2024 PFAS maximum contaminant level rule sets limits on six PFAS compounds, including these shorter-chain variants. Short-chain PFAS compounds have significantly lower affinity for activated carbon surfaces and pass through GAC filters at much higher rates than long-chain PFAS. Only reverse osmosis and ion exchange (anion exchange) reliably remove both long-chain and short-chain PFAS across the regulated spectrum.
          </p>
          <p className='text-slate-700 leading-relaxed'>
            The practical implication: if your well water test showed PFAS contamination and your test measured only PFOA and PFOS (the two historically most tested compounds), you may have short-chain PFAS present that was not tested. If your treatment system is activated carbon only, you may not be removing the full range of PFAS in your water. Request a comprehensive PFAS panel from your certified lab (look for panels testing the six EPA-regulated compounds) and verify that any treatment system is certified to NSF P473 and ideally also tested against the newer short-chain compounds.
          </p>
        </div>

        {/* Acid Neutralizers */}
        <h3 className='text-xl font-bold text-slate-900 mt-8 mb-4'>Acid Neutralizers (pH Correction)</h3>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they do:</strong> Wells with pH below 6.5 produce corrosive water that dissolves copper, iron, zinc, and lead from plumbing. A calcite neutralizer tank filled with crushed limestone (calcium carbonate) raises pH as water passes through by dissolving small amounts of calcium into the water. Soda ash (sodium carbonate) injection is used for very low pH water (below 6.0) where calcite alone is insufficient.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Why pH correction is often the correct first step:</strong> Low pH causes metallic taste, blue-green staining from copper corrosion, and lead dissolution from any solder joints or lead-containing components in older plumbing. An RO system at the tap removes dissolved lead &mdash; but the corrosion continues to damage your pipes. Correcting pH upstream stops the cause rather than just filtering the result.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What they cannot do:</strong> pH neutralizers add calcium to the water, which increases hardness. If hardness is already elevated, a calcite neutralizer may require pairing with a water softener downstream. They also do not remove any existing contaminants &mdash; they only address the ongoing corrosion mechanism.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>Cost:</strong> Calcite neutralizer tanks: $500 to $1,500. Professional installation: $200 to $400. Media (calcite) replacement: $50 to $100 every 1 to 3 years.
        </p>

        {/* How to Build the Right Treatment Stack */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>How to Build the Right Treatment Stack for Your Well</h2>
        <p className='text-slate-700 leading-relaxed mb-8'>
          Treatment sequence matters as much as technology selection. Here are the correct stacks for the most common well water problem profiles.
        </p>

        {/* Profile 1 */}
        <div className='mb-6 rounded-xl p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Profile 1: Iron and Manganese Only (no bacteria, normal pH)</h3>
          <div className='flex flex-wrap items-center gap-2 mb-3 text-sm'>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Sediment pre-filter (5 micron)</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Oxidizing filter (air injection or catalytic media)</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Optional carbon polish for taste</span>
          </div>
          <p className='text-slate-600 text-sm'>Annual maintenance cost: $150 to $300.</p>
        </div>

        {/* Profile 2 */}
        <div className='mb-6 rounded-xl p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Profile 2: Hard Water Only (no iron, no bacteria)</h3>
          <div className='flex flex-wrap items-center gap-2 mb-3 text-sm'>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Sediment pre-filter</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Water softener</span>
          </div>
          <p className='text-slate-600 text-sm'>Annual maintenance cost: $100 to $200 in salt plus filter cartridges.</p>
        </div>

        {/* Profile 3 */}
        <div className='mb-6 rounded-xl p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Profile 3: Iron, Manganese, and Hard Water (common in Midwest and Northeast)</h3>
          <div className='flex flex-wrap items-center gap-2 mb-3 text-sm'>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Sediment pre-filter</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Oxidizing filter</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Water softener</span>
          </div>
          <p className='text-slate-700 text-sm mb-2'>The oxidizing filter must come before the softener. Iron-bearing water entering a softener directly will quickly foul the resin. This stack addresses both iron staining and scale.</p>
          <p className='text-slate-600 text-sm'>Annual maintenance cost: $200 to $400.</p>
        </div>

        {/* Profile 4 */}
        <div className='mb-6 rounded-xl p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Profile 4: Bacteria Present, Otherwise Good Water Quality</h3>
          <div className='flex flex-wrap items-center gap-2 mb-3 text-sm'>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Sediment pre-filter (1 micron or below)</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>UV disinfection (NSF 55 Class A)</span>
          </div>
          <p className='text-slate-700 text-sm mb-2'>Shock chlorinate the well before installing the UV system. Address any structural issues that allowed contamination.</p>
          <p className='text-slate-600 text-sm'>Annual maintenance cost: $50 to $150 for annual lamp replacement plus cartridges.</p>
        </div>

        {/* Profile 5 */}
        <div className='mb-6 rounded-xl p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Profile 5: Iron, Bacteria, and Hard Water (comprehensive well water system)</h3>
          <div className='flex flex-wrap items-center gap-2 mb-3 text-sm'>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Sediment pre-filter</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Oxidizing filter</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Water softener</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>UV disinfection</span>
          </div>
          <p className='text-slate-700 text-sm mb-2'>UV goes after the softener because hardness scale on the quartz sleeve reduces UV output. All upstream stages protect the UV chamber.</p>
          <p className='text-slate-600 text-sm'>Annual maintenance cost: $300 to $500.</p>
        </div>

        {/* Profile 6 */}
        <div className='mb-6 rounded-xl p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Profile 6: Arsenic, Nitrates, or PFAS (health contaminants, otherwise acceptable water)</h3>
          <div className='flex flex-wrap items-center gap-2 mb-3 text-sm'>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Sediment pre-filter</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Iron removal if needed</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Softener if hardness elevated</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Under-sink RO for drinking and cooking</span>
          </div>
          <p className='text-slate-700 text-sm mb-2'>Whole-house treatment is not necessary or cost-justified for dissolved health contaminants consumed only through drinking and cooking. Under-sink RO at $200 to $600 handles this. Make sure the RO system is certified to NSF/ANSI 58 and, for PFAS specifically, NSF P473.</p>
          <p className='text-slate-600 text-sm'>Annual maintenance cost: $100 to $200 for RO filter cartridge and membrane replacement.</p>
        </div>

        {/* Profile 7 */}
        <div className='mb-10 rounded-xl p-6 bg-white border border-slate-200' style={{ borderLeft: '4px solid #1D9E75' }}>
          <h3 className='text-lg font-bold text-slate-900 mb-3'>Profile 7: Low pH (Acidic Water)</h3>
          <div className='flex flex-wrap items-center gap-2 mb-3 text-sm'>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Calcite neutralizer</span>
            <span className='text-slate-400 text-lg'>&rarr;</span>
            <span className='bg-slate-100 px-3 py-1.5 rounded-lg font-medium text-slate-800'>Address downstream issues (iron, bacteria) as needed after pH is corrected</span>
          </div>
          <p className='text-slate-600 text-sm'>Annual maintenance cost: $50 to $100 for calcite top-up.</p>
        </div>

        {/* Point of Entry vs. Point of Use */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>Point of Entry vs. Point of Use: The Decision Framework</h2>
        <p className='text-slate-700 leading-relaxed mb-4'><strong className='text-slate-900'>Whole-house (Point of Entry, POE) treatment is correct when:</strong></p>
        <ul className='list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4'>
          <li>The contaminant causes damage throughout the house (iron staining on laundry, fixtures, appliances)</li>
          <li>The contaminant is absorbed through skin or inhaled (radon, some VOCs during showering)</li>
          <li>Bacteria must be eliminated from all water uses including bathing (immunocompromised household members, infants)</li>
        </ul>
        <p className='text-slate-700 leading-relaxed mb-4'><strong className='text-slate-900'>Kitchen-tap (Point of Use, POU) treatment is correct when:</strong></p>
        <ul className='list-disc list-inside space-y-2 text-slate-700 mb-6 ml-4'>
          <li>The contaminant is a health concern only when consumed (arsenic, nitrates, PFAS, lead)</li>
          <li>Whole-house treatment for the contaminant would be cost-prohibitive</li>
          <li>The household only wants to address drinking and cooking water</li>
        </ul>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>Both together is the most common optimal solution for complex well water:</strong> Whole-house iron removal, softening, and UV at point of entry for protection throughout the home, plus under-sink RO at the kitchen tap for the highest purity drinking and cooking water. This combination costs $3,000 to $8,000 installed and addresses virtually every common well water contaminant.
        </p>

        {/* What to Ask Before Buying */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-4'>What to Ask Before Buying Any Treatment System</h2>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What contaminants is this system certified to remove?</strong> Not &ldquo;tested to remove&rdquo; or &ldquo;designed to remove&rdquo; &mdash; certified to remove by NSF, WQA, or IAPMO. Ask for the specific NSF standard number and the specific contaminants listed in that certification. Verify at <a href='https://www.nsf.org' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: '#1D9E75' }}>nsf.org</a>.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What does it not remove?</strong> Every system has limits. A salesperson who cannot clearly articulate what a system does not treat is not giving you complete information.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What pre-treatment does this system require?</strong> Any system sold without discussing pre-treatment requirements is being sold incompletely. Ask specifically whether your water&apos;s iron, hardness, and turbidity levels require upstream treatment before this system.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>What is the annual maintenance cost?</strong> Salt, filter cartridges, UV lamps, media replacement &mdash; get a specific annual cost estimate. Total cost of ownership over 10 years is a more honest comparison than purchase price alone.
        </p>
        <p className='text-slate-700 leading-relaxed mb-4'>
          <strong className='text-slate-900'>Is this system sized for my flow rate?</strong> Whole-house systems must be sized to deliver adequate pressure at your peak demand. A system rated for 8 GPM on a house that uses 15 GPM at peak will produce pressure drops. Ask for the rated flow rate and compare to your household&apos;s peak demand.
        </p>
        <p className='text-slate-700 leading-relaxed mb-6'>
          <strong className='text-slate-900'>Does this system require professional servicing or can I maintain it myself?</strong> Salt softeners, UV lamp replacement, and sediment cartridge changes are reasonable DIY maintenance tasks. Chemical injection systems, backwashing oxidizing filters, and RO membrane replacement are manageable with basic comfort in following instructions. Multi-stage whole-house systems with complex controls benefit from annual professional service.
        </p>

        {/* Glossary */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-6'>Glossary</h2>
        <div className='space-y-4 mb-10'>
          <div>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Point of Entry (POE)</h3>
            <p className='text-slate-700 leading-relaxed'>A treatment system installed at the main water supply line where water enters the home, treating all water to all fixtures. The correct choice for contaminants that affect the entire house &mdash; iron staining, hardness scale, bacteria at all taps, radon aerosolization in showers.</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Point of Use (POU)</h3>
            <p className='text-slate-700 leading-relaxed'>A treatment system installed at a specific fixture, typically the kitchen sink, treating only the water dispensed at that location. The correct choice for health contaminants consumed only through drinking and cooking &mdash; arsenic, nitrates, PFAS, lead.</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Ion Exchange</h3>
            <p className='text-slate-700 leading-relaxed'>A water treatment process in which unwanted ions in the water (calcium, magnesium for softening; nitrates for anion exchange; iron for certain resins) are swapped for less problematic ions held on a resin bed. Water softeners use cation exchange (removing positive ions &mdash; calcium and magnesium &mdash; replacing them with sodium). Nitrate-specific systems use anion exchange (removing negative nitrate ions).</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>NSF/ANSI 53</h3>
            <p className='text-slate-700 leading-relaxed'>The NSF International and American National Standards Institute certification standard for water treatment systems that reduce health-related contaminants including lead, VOCs, cysts, and PFAS. The most important standard to verify for any system making health-related removal claims.</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>Oxidation</h3>
            <p className='text-slate-700 leading-relaxed'>A chemical process in which electrons are removed from a substance. In iron and manganese treatment, dissolved ferrous iron (Fe&sup2;+) is oxidized to ferric iron (Fe&sup3;+), converting it from a soluble dissolved form that passes through filters into an insoluble particulate form that can be physically filtered out. Oxidation can be achieved with air injection (natural), potassium permanganate (chemical regeneration), or chlorine and hydrogen peroxide (chemical injection).</p>
          </div>
          <div>
            <h3 className='text-lg font-bold text-slate-900 mb-1'>UV Transmittance</h3>
            <p className='text-slate-700 leading-relaxed'>The percentage of UV light that passes through a water sample at 254 nanometers. Clear water at 100 percent transmittance delivers full UV dose to microorganisms. Water with iron, turbidity, or dissolved organics has lower transmittance, reducing the effective UV dose and potentially allowing microorganism survival. UV systems must be preceded by adequate pre-treatment to maintain sufficient transmittance for reliable disinfection.</p>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className='text-2xl font-bold text-slate-900 mt-12 mb-6'>Frequently Asked Questions</h2>
        <div className='space-y-6 mb-10'>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>What is the best water treatment system for well water?</h3>
            <p className='text-slate-700 leading-relaxed'>There is no single best system. The correct system depends entirely on what is in your water. Test your well water at a certified laboratory first, then match the treatment technology to your specific results. For most residential well systems with multiple issues, the most effective combination is a whole-house oxidizing filter for iron and manganese, a water softener for hardness, a UV disinfection system for bacteria, and an under-sink reverse osmosis system for dissolved health contaminants like arsenic, nitrates, or PFAS. The total installed cost for this complete stack is typically $3,000 to $8,000.</p>
          </div>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Do I need a whole-house water filter or just a drinking water filter?</h3>
            <p className='text-slate-700 leading-relaxed'>It depends on the contaminant. Iron, manganese, and bacteria affect the entire house through staining, appliance damage, and health risk at every fixture &mdash; these require whole-house treatment. Arsenic, nitrates, PFAS, and lead are health concerns only when consumed &mdash; they can be addressed with a point-of-use reverse osmosis system at the kitchen sink at far lower cost. Many households benefit from both: whole-house treatment for aesthetic and appliance-protection issues, plus under-sink RO for the highest-purity drinking water.</p>
          </div>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Does a water softener remove bacteria or other contaminants?</h3>
            <p className='text-slate-700 leading-relaxed'>No. A water softener removes hardness minerals (calcium and magnesium) through ion exchange and can reduce low concentrations of dissolved ferrous iron. It does not remove bacteria, viruses, nitrates, arsenic, lead, VOCs, PFAS, or any other health contaminant. Do not rely on a water softener as disinfection. If bacteria are present in your well, you need UV disinfection or continuous chlorination in addition to softening.</p>
          </div>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Does reverse osmosis remove bacteria?</h3>
            <p className='text-slate-700 leading-relaxed'>RO membranes physically block most bacteria due to pore size, but RO is not classified or certified as a primary disinfection system. Bacteria can potentially bypass or colonize RO systems under certain conditions. For well water with confirmed bacterial contamination, use UV disinfection upstream of RO rather than relying on the membrane alone.</p>
          </div>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>What is NSF certification and why does it matter?</h3>
            <p className='text-slate-700 leading-relaxed'>NSF International independently tests and certifies water treatment systems to verify that they actually remove what manufacturers claim. NSF/ANSI 53 covers health-related contaminants like lead and PFAS. NSF/ANSI 55 covers UV disinfection performance. NSF/ANSI 58 covers reverse osmosis performance. A system without NSF certification may be marketed as removing a contaminant it has not been independently verified to remove. Verify certification for any system making health-related claims at <a href='https://www.nsf.org' target='_blank' rel='noopener noreferrer' className='underline' style={{ color: '#1D9E75' }}>nsf.org</a> before purchasing.</p>
          </div>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>How do I know what treatment my well water needs?</h3>
            <p className='text-slate-700 leading-relaxed'>Test your well water at a certified laboratory. Annual basic testing should cover coliform bacteria, E. coli, nitrates, and pH. Additional testing for iron, manganese, hardness, arsenic, lead, and PFAS is recommended based on your region and local contamination risks. Your county health department can provide a list of certified labs. See the <Link href='/guides/how-to-test-well-water' className='underline' style={{ color: '#1D9E75' }}>how to test your well water guide</Link> for a full testing protocol.</p>
          </div>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I install a well water treatment system myself?</h3>
            <p className='text-slate-700 leading-relaxed'>For some systems, yes. Sediment filter housings, under-sink carbon filters, and RO systems under the kitchen sink are DIY-manageable for homeowners with basic plumbing skills and typically save $200 to $500 in labor. UV systems require an electrical connection and are manageable with moderate comfort in electrical work. Whole-house oxidizing filters, water softeners, and chemical injection systems are more complex and benefit from professional installation to ensure correct sizing, pre-charge settings, and programming. Incorrect installation of a softener or oxidizing filter can damage downstream equipment.</p>
          </div>
          <div className='border-b border-slate-200 pb-6'>
            <h3 className='text-lg font-bold text-slate-900 mb-2'>How often do well water treatment systems need maintenance?</h3>
            <p className='text-slate-700 leading-relaxed'>Sediment cartridges: every 3 to 6 months. Carbon cartridges: every 6 to 12 months. UV lamps: annually (every 9,000 hours regardless of visible function). Softener salt: monthly top-up for average household. RO pre-filter cartridges: every 6 to 12 months. RO membrane: every 2 to 3 years. Oxidizing filter media: every 3 to 7 years. Maintenance schedules that slip allow contaminants to pass through exhausted media or UV systems to operate below their rated disinfection dose.</p>
          </div>
        </div>

        {/* Lead Form */}
        <div className='my-12'>
          <LeadForm />
        </div>

        {/* Related Guides */}
        <div className='border-t border-slate-200 pt-12 mt-12 mb-12'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-8 h-px' style={{ backgroundColor: '#1D9E75' }}></div>
            <span className='font-bold tracking-[0.3em] text-xs uppercase' style={{ color: '#0F6E56' }}>Related</span>
            <div className='flex-1 h-px bg-slate-200'></div>
          </div>
          <h2 className='text-2xl font-bold text-slate-900 mb-6'>Related Guides</h2>
          <div className='grid md:grid-cols-2 gap-3'>
            <Link href='/guides/well-water-contaminants' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Contaminants: The Complete Guide</span>
            </Link>
            <Link href='/guides/how-to-test-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#E1F5EE', color: '#0F6E56' }}>GUIDE</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>How to Test Your Well Water</span>
            </Link>
            <Link href='/problems/well-water-tastes-bad' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Well Water Tastes Bad</span>
            </Link>
            <Link href='/problems/brown-rusty-well-water' className='flex items-center gap-3 bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow group'>
              <span className='inline-block px-2.5 py-1 text-xs font-semibold rounded-md flex-shrink-0' style={{ backgroundColor: '#FCEBEB', color: '#A32D2D' }}>PROBLEM</span>
              <span className='text-sm font-bold text-slate-900 group-hover:text-[#1D9E75]'>Brown or Rusty Well Water</span>
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

      </article>
    </>
  )
}
