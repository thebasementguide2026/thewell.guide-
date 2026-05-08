'use client'

import Link from 'next/link'
import type { ReactNode, MouseEvent } from 'react'

type Gtag = (...args: unknown[]) => void

interface Props {
  href: string
  className?: string
  ctaText: string
  placement: string
  scrollToId?: string
  children: ReactNode
}

export default function CtaLink({ href, className, ctaText, placement, scrollToId, children }: Props) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== 'undefined') {
      const w = window as unknown as { gtag?: Gtag }
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'select_content', {
          content_type: 'quote_cta',
          link_text: ctaText,
          calculator_name: 'well_drilling_cost',
          page_slug: 'well-drilling-cost-calculator',
          placement,
          cta_destination: href,
        })
      }
    }
    if (scrollToId && href.startsWith('#')) {
      e.preventDefault()
      const el = document.getElementById(scrollToId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        history.replaceState(null, '', `#${scrollToId}`)
      }
    }
  }
  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
