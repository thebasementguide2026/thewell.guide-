'use client'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'

const navItems = [
  { label: 'Guides', href: '/guides' },
  { label: 'Cost Guides', href: '/cost-guides' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Problems', href: '/problems' },
  { label: 'About', href: '/about' },
]

function DropletLogo({ color = '#5DCAA5' }: { color?: string }) {
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 4 C20 4 8 18 8 26 C8 33.2 13.4 38 20 38 C26.6 38 32 33.2 32 26 C32 18 20 4 20 4Z" fill="none" stroke={color} strokeWidth="2.5" strokeLinejoin="round"/>
      <path d="M14 28 C14 28 15 32 20 32" stroke={color} strokeWidth="1.8" strokeLinecap="round" opacity="0.6"/>
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={{ backgroundColor: '#0D3D30' }} className="border-b border-[#1A5C48] sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <DropletLogo />
            <span className="text-xl">
              <span className="font-semibold text-white opacity-70">The </span>
              <span className="font-extrabold" style={{ color: '#5DCAA5' }}>Well</span>
              <span className="font-extrabold text-white"> Guide</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-white/80 hover:text-white transition-colors rounded-lg hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/get-quote"
              className="text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
              style={{ backgroundColor: '#1D9E75' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#178A64')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1D9E75')}
            >
              Get Free Quotes
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden border-t border-white/10 py-4 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="block px-4 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/get-quote"
              className="block mx-4 mt-3 text-white px-4 py-2.5 rounded-lg text-sm font-semibold text-center transition-colors"
              style={{ backgroundColor: '#1D9E75' }}
              onClick={() => setMenuOpen(false)}
            >
              Get Free Quotes
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
