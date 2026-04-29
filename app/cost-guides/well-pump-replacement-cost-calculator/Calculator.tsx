'use client'

import { useEffect, useState } from 'react'

type Gtag = (...args: unknown[]) => void
function track(event: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: Gtag }
  if (typeof w.gtag === 'function') w.gtag('event', event, params)
}

type PumpType = 'shallow-jet' | 'deep-jet' | 'submersible' | 'constant-pressure'
type Depth = 'under-100' | '100-250' | '250-400' | '400-plus'
type Flow = 'low' | 'average' | 'high'
type Region = 'low' | 'average' | 'high'
type Complexity = 'easy' | 'average' | 'difficult'
type Extras = 'pump-only' | 'pump-controls' | 'pump-tank-controls'

interface Result {
  low: number
  high: number
  category: string
  note: string
}

// Anchored to published ranges on thewell.guide /cost-guides/well-pump-replacement-cost:
//   Shallow well jet pump: $800-$1,800
//   Deep well jet pump (25-100 ft): $1,200-$2,500
//   Submersible 100-200 ft: $1,500-$3,000
//   Submersible 200-300 ft: $2,000-$4,000
//   Submersible 300-400 ft: $2,800-$5,500
//   Submersible 400+ ft: $4,000-$8,000+
//   Constant pressure (VFD) adds $800-$2,000
function calculate(
  pump: PumpType,
  depth: Depth,
  flow: Flow,
  region: Region,
  complexity: Complexity,
  extras: Extras,
): Result {
  // 1. Base range by pump type + depth
  let baseLow = 0
  let baseHigh = 0
  let category = ''

  if (pump === 'shallow-jet') {
    baseLow = 800
    baseHigh = 1800
    category = 'Shallow well jet pump replacement'
  } else if (pump === 'deep-jet') {
    baseLow = 1200
    baseHigh = 2500
    category = 'Deep well jet pump replacement'
  } else if (pump === 'submersible') {
    if (depth === 'under-100') {
      baseLow = 1200
      baseHigh = 2200
      category = 'Submersible pump replacement (under 100 ft)'
    } else if (depth === '100-250') {
      baseLow = 1500
      baseHigh = 3200
      category = 'Submersible pump replacement (100-250 ft)'
    } else if (depth === '250-400') {
      baseLow = 2800
      baseHigh = 5500
      category = 'Submersible pump replacement (250-400 ft)'
    } else {
      baseLow = 4000
      baseHigh = 8000
      category = 'Submersible pump replacement (400+ ft)'
    }
  } else {
    // constant-pressure: starts from a deeper-well submersible base + premium for VFD
    if (depth === 'under-100') {
      baseLow = 2200
      baseHigh = 3500
    } else if (depth === '100-250') {
      baseLow = 2800
      baseHigh = 4800
    } else if (depth === '250-400') {
      baseLow = 3800
      baseHigh = 6800
    } else {
      baseLow = 5200
      baseHigh = 9500
    }
    category = 'Constant-pressure (VFD) system replacement'
  }

  // 2. Home demand / flow rate multiplier
  // Higher demand often means larger HP pump and larger tank
  const flowMult: Record<Flow, number> = {
    low: 0.94,
    average: 1.0,
    high: 1.1,
  }

  // 3. Regional cost factor (matches the regional table on the parent guide)
  const regionMult: Record<Region, number> = {
    low: 0.88,
    average: 1.0,
    high: 1.18,
  }

  // 4. Replacement difficulty / access
  const complexityMult: Record<Complexity, number> = {
    easy: 0.95,
    average: 1.0,
    difficult: 1.18,
  }

  const mult = flowMult[flow] * regionMult[region] * complexityMult[complexity]

  // 5. Flat additions for extras (controls, pressure tank)
  // Pressure tank replacement: $300-$700 incremental when crew is already on site
  // Control box / wiring refresh: $100-$400
  let extrasLow = 0
  let extrasHigh = 0
  if (extras === 'pump-controls') {
    extrasLow = 100
    extrasHigh = 400
  } else if (extras === 'pump-tank-controls') {
    extrasLow = 400
    extrasHigh = 1100
  }

  // Round to nearest $50 for low and $100 for high (tight rounding for smaller projects)
  const low = Math.round((baseLow * mult + extrasLow) / 50) * 50
  const high = Math.round((baseHigh * mult + extrasHigh) / 100) * 100

  // Planning note
  let note = 'Get two to four written quotes from licensed well contractors. Ask each one to itemize the pump, drop pipe, wiring, labor, and any electrical or controls work so you can compare apples to apples.'
  if (pump === 'submersible' && (depth === '250-400' || depth === '400-plus')) {
    note = 'On wells deeper than 250 feet, labor and drop pipe become a larger share of the bill than the pump itself. Make sure quotes specify whether new drop pipe and wire are included.'
  } else if (pump === 'shallow-jet') {
    note = 'Shallow jet pump jobs are usually completed in one visit. Ask whether the pressure switch, check valve, and foot valve are being replaced at the same time.'
  } else if (pump === 'constant-pressure') {
    note = 'Constant-pressure systems use a variable-frequency drive (VFD) and pay back over time in steadier pressure. Confirm the contractor has installed the specific VFD model before and offers a warranty on the controller.'
  } else if (extras === 'pump-tank-controls') {
    note = 'Replacing the pressure tank and controls during the same service visit avoids a second labor charge later. Ask for a 5-year tank warranty and a written start-up pressure setting.'
  }

  return { low, high, category, note }
}

const formatCurrency = (n: number) => `$${n.toLocaleString('en-US')}`

const fieldClass = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#1D9E75] focus:outline-none focus:ring-1 focus:ring-[#1D9E75]'
const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5'

interface Props {
  onResult?: (low: number, high: number) => void
}

export default function WellPumpCostCalculator({ onResult }: Props) {
  const [pump, setPump] = useState<PumpType>('submersible')
  const [depth, setDepth] = useState<Depth>('100-250')
  const [flow, setFlow] = useState<Flow>('average')
  const [region, setRegion] = useState<Region>('average')
  const [complexity, setComplexity] = useState<Complexity>('average')
  const [extras, setExtras] = useState<Extras>('pump-only')
  const [result, setResult] = useState<Result | null>(null)
  const [started, setStarted] = useState(false)

  // Fire calculator_view once per mount when component becomes available
  useEffect(() => {
    track('calculator_view', {
      calculator_name: 'well_pump_replacement_cost',
      page_type: 'calculator',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    })
  }, [])

  const handleChange = <T,>(setter: (v: T) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value as T)
    if (!started) {
      setStarted(true)
      track('calculator_start', {
        calculator_name: 'well_pump_replacement_cost',
        page_type: 'calculator',
      })
    }
  }

  const handleCalculate = () => {
    const r = calculate(pump, depth, flow, region, complexity, extras)
    setResult(r)
    track('calculator_calculate', {
      calculator_name: 'well_pump_replacement_cost',
      page_type: 'calculator',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      pump_type: pump,
      depth_bucket: depth,
      flow_rate_bucket: flow,
      region_bucket: region,
      complexity_bucket: complexity,
      extras_bucket: extras,
      estimate_low: r.low,
      estimate_high: r.high,
      currency: 'USD',
    })
    if (onResult) onResult(r.low, r.high)
    setTimeout(() => {
      const el = document.getElementById('well-calc-result')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleReset = () => {
    setPump('submersible')
    setDepth('100-250')
    setFlow('average')
    setRegion('average')
    setComplexity('average')
    setExtras('pump-only')
    setResult(null)
    setStarted(false)
    track('calculator_reset', { calculator_name: 'well_pump_replacement_cost' })
  }

  return (
    <div className='rounded-2xl border border-[#C8DDD7] bg-white shadow-sm overflow-hidden'>
      <div className='px-6 py-5' style={{ backgroundColor: '#0D3D30' }}>
        <h2 className='text-xl font-bold text-white'>Well Pump Replacement Cost Calculator</h2>
        <p className='text-sm text-white/70 mt-1'>Free homeowner estimate. Six inputs, instant range.</p>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div>
            <label className={labelClass} htmlFor='pump'>Pump type</label>
            <select id='pump' value={pump} onChange={handleChange<PumpType>(setPump)} className={fieldClass}>
              <option value='submersible'>Submersible pump</option>
              <option value='shallow-jet'>Shallow well jet pump</option>
              <option value='deep-jet'>Deep well jet pump</option>
              <option value='constant-pressure'>Constant-pressure / premium system</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='depth'>Well depth</label>
            <select id='depth' value={depth} onChange={handleChange<Depth>(setDepth)} className={fieldClass}>
              <option value='under-100'>Under 100 ft</option>
              <option value='100-250'>100-250 ft</option>
              <option value='250-400'>250-400 ft</option>
              <option value='400-plus'>400+ ft</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='flow'>Home demand / flow rate</label>
            <select id='flow' value={flow} onChange={handleChange<Flow>(setFlow)} className={fieldClass}>
              <option value='low'>Lower demand (1-2 people, small home)</option>
              <option value='average'>Average demand (3-4 people)</option>
              <option value='high'>Higher demand (5+ people, irrigation)</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='region'>Regional cost factor</label>
            <select id='region' value={region} onChange={handleChange<Region>(setRegion)} className={fieldClass}>
              <option value='low'>Lower-cost market (rural South, parts of Midwest)</option>
              <option value='average'>Average-cost market (national)</option>
              <option value='high'>Higher-cost market (Northeast, West Coast)</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='complexity'>Replacement difficulty</label>
            <select id='complexity' value={complexity} onChange={handleChange<Complexity>(setComplexity)} className={fieldClass}>
              <option value='easy'>Straightforward access</option>
              <option value='average'>Average replacement</option>
              <option value='difficult'>Difficult pull / wiring / tank issues</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='extras'>Additional components</label>
            <select id='extras' value={extras} onChange={handleChange<Extras>(setExtras)} className={fieldClass}>
              <option value='pump-only'>Pump only</option>
              <option value='pump-controls'>Pump + control box / wiring refresh</option>
              <option value='pump-tank-controls'>Pump + pressure tank + controls</option>
            </select>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 mt-6'>
          <button
            type='button'
            onClick={handleCalculate}
            className='flex-1 rounded-lg px-5 py-3 text-sm font-bold text-white transition-colors'
            style={{ backgroundColor: '#1D9E75' }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#178a65')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1D9E75')}
          >
            Calculate my estimate
          </button>
          <button
            type='button'
            onClick={handleReset}
            className='rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors'
          >
            Reset
          </button>
        </div>

        {result && (
          <div id='well-calc-result' className='mt-6 rounded-xl border p-5' style={{ backgroundColor: '#E1F5EE', borderColor: '#1D9E75' }}>
            <p className='text-xs font-bold uppercase tracking-wider' style={{ color: '#0F6E56' }}>Estimated installed cost range</p>
            <p className='mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900'>
              {formatCurrency(result.low)} <span className='text-slate-400 font-bold'>-</span> {formatCurrency(result.high)}
            </p>
            <p className='mt-2 text-sm text-slate-700'>
              <span className='font-semibold'>Project scope:</span> {result.category}
            </p>
            <p className='mt-3 text-sm text-slate-700 leading-relaxed'>
              <span className='font-semibold'>Planning note:</span> {result.note}
            </p>
            <p className='mt-4 text-xs text-slate-500 leading-relaxed'>
              Estimates are based on published cost ranges from The Well Guide. Local labor rates, permit requirements, drop-pipe length, and electrical condition can move the actual quoted price meaningfully in either direction. Always get two to four itemized written quotes from licensed contractors in your area.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
