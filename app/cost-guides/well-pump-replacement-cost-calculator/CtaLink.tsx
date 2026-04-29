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
        w.gtag('event', 'quote_cta_click', {
          calculator_name: 'well_pump_replacement_cost',
          cta_text: ctaText,
          cta_destination: href,
          placement,
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
