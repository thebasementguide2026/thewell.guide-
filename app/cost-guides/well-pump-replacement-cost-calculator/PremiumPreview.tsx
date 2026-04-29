'use client'

import { useEffect, useRef } from 'react'

type Gtag = (...args: unknown[]) => void

export default function PremiumPreview() {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return
    let fired = false
    const fire = () => {
      if (fired) return
      fired = true
      const w = window as unknown as { gtag?: Gtag }
      if (typeof w.gtag === 'function') {
        w.gtag('event', 'premium_preview_view', {
          calculator_name: 'well_pump_replacement_cost',
          page_type: 'calculator',
        })
      }
    }
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fire()
            obs.disconnect()
          }
        })
      }, { threshold: 0.25 })
      obs.observe(ref.current)
      return () => obs.disconnect()
    } else {
      // Fallback: fire on mount if IntersectionObserver unavailable
      fire()
    }
  }, [])

  return (
    <div ref={ref} className='relative rounded-2xl border-2 border-dashed bg-white p-6 sm:p-8' style={{ borderColor: '#1D9E75' }}>
      <div className='flex items-center gap-3 mb-4'>
        <span className='inline-block px-3 py-1 text-xs font-bold rounded-full' style={{ backgroundColor: '#FAEEDA', color: '#854F0B' }}>PREMIUM PREVIEW</span>
        <span className='text-xs uppercase tracking-wider text-slate-500 font-semibold'>Coming soon</span>
      </div>
      <h3 className='text-2xl font-bold text-slate-900 mb-2'>Enhanced cost breakdown</h3>
      <p className='text-sm text-slate-600 mb-6 max-w-2xl'>
        A premium estimate breaks the homeowner range into the line items a contractor will actually itemize on a written quote, so you can spot inflated numbers and gaps before you sign anything.
      </p>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='rounded-lg border border-slate-200 p-4 bg-slate-50/60'>
          <div className='flex items-center justify-between mb-1'>
            <p className='text-xs font-bold uppercase tracking-wider text-slate-500'>Pump equipment allowance</p>
            <span className='text-xs font-mono text-slate-400 select-none'>$ - - -</span>
          </div>
          <p className='text-sm text-slate-600'>Pump unit cost by horsepower, brand, and warranty tier.</p>
        </div>

        <div className='rounded-lg border border-slate-200 p-4 bg-slate-50/60'>
          <div className='flex items-center justify-between mb-1'>
            <p className='text-xs font-bold uppercase tracking-wider text-slate-500'>Pulling labor and reinstall</p>
            <span className='text-xs font-mono text-slate-400 select-none'>$ - - -</span>
          </div>
          <p className='text-sm text-slate-600'>Service truck, crew hours, drop pipe, and wire re-run.</p>
        </div>

        <div className='rounded-lg border border-slate-200 p-4 bg-slate-50/60'>
          <div className='flex items-center justify-between mb-1'>
            <p className='text-xs font-bold uppercase tracking-wider text-slate-500'>Electrical and controls</p>
            <span className='text-xs font-mono text-slate-400 select-none'>$ - - -</span>
          </div>
          <p className='text-sm text-slate-600'>Pressure switch, control box, and any wiring upgrades.</p>
        </div>

        <div className='rounded-lg border border-slate-200 p-4 bg-slate-50/60'>
          <div className='flex items-center justify-between mb-1'>
            <p className='text-xs font-bold uppercase tracking-wider text-slate-500'>Contingency / service-call reserve</p>
            <span className='text-xs font-mono text-slate-400 select-none'>$ - - -</span>
          </div>
          <p className='text-sm text-slate-600'>Buffer for surprises like a stuck pitless adapter or corroded torque arrestor.</p>
        </div>
      </div>

      <div className='mt-6 rounded-lg p-4' style={{ backgroundColor: '#E1F5EE' }}>
        <p className='text-xs font-bold uppercase tracking-wider mb-1' style={{ color: '#0F6E56' }}>Planning summary</p>
        <p className='text-sm text-slate-700 leading-relaxed'>
          A line-by-line view of how your range breaks down so you can compare two contractor quotes side by side and see where each one is high or low.
        </p>
      </div>

      <div className='mt-6 flex items-center gap-2 text-xs text-slate-500'>
        <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
          <path strokeLinecap='round' strokeLinejoin='round' d='M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z' />
        </svg>
        <span>Locked preview. Premium estimate launching alongside our pro tools.</span>
      </div>
    </div>
  )
}
