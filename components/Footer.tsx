import Link from 'next/link'

const footerSections = [
  {
    title: 'GUIDES',
    href: '/guides',
    links: [
      { label: 'Complete Well Guide', href: '/guides/complete-well-guide' },
    ],
  },
  {
    title: 'COST GUIDES',
    href: '/cost-guides',
    links: [
      { label: 'Well Pump Replacement Cost', href: '/cost-guides/well-pump-replacement-cost' },
    ],
  },
  { title: 'REVIEWS', href: '/reviews', links: [] },
  {
    title: 'PROBLEMS',
    href: '/problems',
    links: [
      { label: 'Well Water Smells Like Sulfur', href: '/problems/well-water-smells-like-sulfur' },
      { label: 'Well Water Pressure Low', href: '/problems/well-water-pressure-low' },
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
          <div className="flex gap-4">
            <Link href="/privacy" className="text-white/30 hover:text-white/60 text-xs">Privacy Policy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/60 text-xs">Terms of Use</Link>
            <Link href="/affiliate-disclosure" className="text-white/30 hover:text-white/60 text-xs">Affiliate Disclosure</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
