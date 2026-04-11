import Link from 'next/link'

const footerSections = [
  {
    title: 'GUIDES',
    href: '/guides',
    links: [
      { label: 'Complete Well Guide', href: '/guides/complete-well-guide' },
      { label: 'How to Test Your Well Water', href: '/guides/how-to-test-well-water' },
      { label: 'How a Well Pump Works', href: '/guides/how-well-pump-works' },
      { label: 'Annual Well Maintenance Checklist', href: '/guides/well-maintenance-checklist' },
      { label: 'Well Water Contaminants', href: '/guides/well-water-contaminants' },
      { label: 'Well Pressure Tank Guide', href: '/guides/well-pressure-tank-guide' },
      { label: 'Well Water Treatment Options', href: '/guides/well-water-treatment-options' },
      { label: 'Buying a House With a Well', href: '/guides/buying-house-with-well' },
      { label: 'Well Water vs. City Water', href: '/guides/well-water-vs-city-water' },
      { label: 'Hard Water Well Guide', href: '/guides/hard-water-well' },
      { label: 'Dug Well vs. Drilled Well', href: '/guides/dug-well-vs-drilled-well' },
      { label: 'How to Shock Chlorinate a Well', href: '/guides/how-to-shock-chlorinate-well' },
      { label: 'Well Pump Maintenance', href: '/guides/well-pump-maintenance' },
    ],
  },
  {
    title: 'COST GUIDES',
    href: '/cost-guides',
    links: [
      { label: 'Well Pump Replacement Cost', href: '/cost-guides/well-pump-replacement-cost' },
      { label: 'Well Water Testing Cost', href: '/cost-guides/well-water-testing-cost' },
      { label: 'Pressure Tank Replacement Cost', href: '/cost-guides/pressure-tank-replacement-cost' },
      { label: 'Well Drilling Cost', href: '/cost-guides/well-drilling-cost' },
      { label: 'Whole House Water Filter Cost', href: '/cost-guides/whole-house-water-filter-cost' },
      { label: 'Well Inspection Cost', href: '/cost-guides/well-inspection-cost' },
    ],
  },
  { title: 'REVIEWS', href: '/reviews', links: [{ label: 'Best Well Water Test Kits', href: '/reviews/best-well-water-test-kits' },
      { label: 'Best Whole House Water Filters', href: '/reviews/best-whole-house-water-filters' },
      { label: 'Best Pressure Tanks', href: '/reviews/best-pressure-tanks' }] },
  {
    title: 'PROBLEMS',
    href: '/problems',
    links: [
      { label: 'Well Water Smells Like Sulfur', href: '/problems/well-water-smells-like-sulfur' },
      { label: 'Well Water Pressure Low', href: '/problems/well-water-pressure-low' },
      { label: 'Brown or Rusty Well Water', href: '/problems/brown-rusty-well-water' },
      { label: 'No Water from Well', href: '/problems/no-water-from-well' },
      { label: 'Well Pump Running Constantly', href: '/problems/well-pump-running-constantly' },
      { label: 'Well Pump Short Cycling', href: '/problems/well-pump-short-cycling' },
      { label: 'Well Water Tastes Bad', href: '/problems/well-water-tastes-bad' },
      { label: 'Well Running Dry', href: '/problems/well-running-dry' },
      { label: 'Signs Your Well Pump Is Failing', href: '/problems/well-pump-failing' },
    ],
  },
]

const networkLinks = [
  { label: 'The Septic Guide', href: 'https://theseptic.guide/' },
  { label: 'The Basement Guide', href: 'https://thebasement.guide/' },
  { label: 'The Garage Guide', href: 'https://thegarage.guide/' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0D3D30' }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Email Signup Row */}
        <div className='border-b border-white/10 pb-6 mb-6'>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-3'>
            <p className='font-semibold text-white text-sm'>Get free homeowner tips</p>
            <a
              href='https://thehomeservicesguide.beehiiv.com/subscribe'
              className='inline-block px-5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-colors'
            >
              Subscribe Free &rarr;
            </a>
          </div>
          <p className='text-white/30 text-[10px] text-center mt-2'>No spam. Unsubscribe anytime.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          <div className="lg:col-span-2">
            <Link href="/" className="text-xl font-black tracking-tight">
              The <span style={{ color: '#5DCAA5' }}>Well</span> Guide
            </Link>
            <p className="text-white/50 text-sm mt-4 leading-relaxed">
              Independent resource for private well water quality, maintenance, testing, and cost guidance. Written for the 13 million US homeowners on private wells.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 mb-4">
                <Link href={section.href} className="hover:text-white/70 transition-colors">
                  {section.title}
                </Link>
              </h4>
              {section.links && section.links.length > 0 && (
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/60 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/40 mb-4">NETWORK</h4>
            <ul className="space-y-2">
              {networkLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} The Well Guide. All rights reserved.
          </p>
          <p className="text-white/30 text-xs">Part of <a href="https://thehome.guide" className="hover:text-white/60">The Home Guide Network</a></p>
          <div className="flex gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs">Terms of Use</Link>
            <Link href="/contact" className="text-white/30 hover:text-white/60 text-xs">Contact Us</Link>
            <Link href="/affiliate-disclosure" className="text-white/30 hover:text-white/60 text-xs">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
