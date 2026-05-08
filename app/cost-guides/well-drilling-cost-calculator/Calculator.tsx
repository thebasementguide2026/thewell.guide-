'use client'

import { useEffect, useRef, useState } from 'react'

type Gtag = (...args: unknown[]) => void
function track(event: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: Gtag }
  if (typeof w.gtag === 'function') w.gtag('event', event, params)
}

type ProjectType = 'new-well' | 'replace-failed' | 'deepen-existing'
type Depth = '0-100' | '100-200' | '200-300' | '300-500' | '500-plus'
type Geology = 'soft' | 'mixed' | 'hard'
type Casing = '4' | '6' | '8'
type PumpSystem = 'drilling-only' | 'basic' | 'high-output'
type Distance = 'under-25' | '25-75' | '75-150' | '150-plus'
type Region = 'low' | 'average' | 'high'

interface Result {
  low: number
  high: number
  drillingLow: number
  drillingHigh: number
  pumpLow: number
  pumpHigh: number
  trenchingLow: number
  trenchingHigh: number
  permitsLow: number
  permitsHigh: number
}

const DEPTH_FT: Record<Depth, number> = {
  '0-100': 75,
  '100-200': 150,
  '200-300': 250,
  '300-500': 400,
  '500-plus': 550,
}

const GEOLOGY_MULT: Record<Geology, number> = { soft: 0.85, mixed: 1.0, hard: 1.35 }
const CASING_MULT: Record<Casing, number> = { '4': 0.92, '6': 1.0, '8': 1.18 }
const REGION_MULT: Record<Region, number> = { low: 0.88, average: 1.0, high: 1.18 }

// Pump & pressure system flat bands
const PUMP_BANDS: Record<PumpSystem, { low: number; high: number }> = {
  'drilling-only': { low: 0, high: 0 },
  basic: { low: 1500, high: 3000 },
  'high-output': { low: 3500, high: 6500 },
}

// Trenching by distance band
const TRENCH_BANDS: Record<Distance, { low: number; high: number }> = {
  'under-25': { low: 250, high: 700 },
  '25-75': { low: 600, high: 1600 },
  '75-150': { low: 1200, high: 2800 },
  '150-plus': { low: 2200, high: 4500 },
}

const PERMITS = { low: 250, high: 1200 }

// Base per-foot drilling + casing rate at: mixed geology, 6" casing, average region
const BASE_PER_FT_LOW = 35
const BASE_PER_FT_HIGH = 60

function calculate(
  project: ProjectType,
  depth: Depth,
  geology: Geology,
  casing: Casing,
  pump: PumpSystem,
  distance: Distance,
  region: Region,
): Result {
  const ft = DEPTH_FT[depth]
  const drillMult = GEOLOGY_MULT[geology] * CASING_MULT[casing] * REGION_MULT[region]

  // "Deepen existing" only adds the marginal depth at a slight premium for setup
  const deepenFactor = project === 'deepen-existing' ? 0.7 : 1.0
  // Replace failed well usually skips some site setup but is otherwise full new well
  const replaceFactor = project === 'replace-failed' ? 0.95 : 1.0

  const drillingLowRaw = BASE_PER_FT_LOW * ft * drillMult * deepenFactor * replaceFactor
  const drillingHighRaw = BASE_PER_FT_HIGH * ft * drillMult * deepenFactor * replaceFactor

  const drillingLow = Math.round(drillingLowRaw / 100) * 100
  const drillingHigh = Math.round(drillingHighRaw / 100) * 100

  const pumpLow = PUMP_BANDS[pump].low
  const pumpHigh = PUMP_BANDS[pump].high

  // Skip trenching for deepen-existing (no new line run typically)
  const trenchingLow = project === 'deepen-existing' ? 0 : TRENCH_BANDS[distance].low
  const trenchingHigh = project === 'deepen-existing' ? 0 : TRENCH_BANDS[distance].high

  // Permits scale modestly with region
  const permitsLow = Math.round(PERMITS.low * REGION_MULT[region])
  const permitsHigh = Math.round(PERMITS.high * REGION_MULT[region])

  const low = drillingLow + pumpLow + trenchingLow + permitsLow
  const high = drillingHigh + pumpHigh + trenchingHigh + permitsHigh

  return {
    low,
    high,
    drillingLow,
    drillingHigh,
    pumpLow,
    pumpHigh,
    trenchingLow,
    trenchingHigh,
    permitsLow,
    permitsHigh,
  }
}

const formatCurrency = (n: number) => `$${n.toLocaleString('en-US')}`

const fieldClass = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#1D9E75] focus:outline-none focus:ring-1 focus:ring-[#1D9E75]'
const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5'

const PAGE_SLUG = 'well-drilling-cost-calculator'
const CALC_NAME = 'well_drilling_cost'

export default function WellDrillingCostCalculator() {
  const [project, setProject] = useState<ProjectType>('new-well')
  const [depth, setDepth] = useState<Depth>('100-200')
  const [geology, setGeology] = useState<Geology>('mixed')
  const [casing, setCasing] = useState<Casing>('6')
  const [pump, setPump] = useState<PumpSystem>('basic')
  const [distance, setDistance] = useState<Distance>('25-75')
  const [region, setRegion] = useState<Region>('average')
  const [result, setResult] = useState<Result | null>(null)
  const [started, setStarted] = useState(false)
  const completedRef = useRef<string>('')

  // Fire calculator_view once per mount
  useEffect(() => {
    track('calculator_view', {
      calculator_name: CALC_NAME,
      page_type: 'cost_guide',
      page_slug: PAGE_SLUG,
    })
  }, [])

  // Fire calculator_complete once per unique valid result
  useEffect(() => {
    if (!result) return
    const key = project + ':' + depth + ':' + geology + ':' + casing + ':' + pump + ':' + distance + ':' + region + ':' + result.low + ':' + result.high
    if (completedRef.current === key) return
    completedRef.current = key
    track('calculator_complete', {
      calculator_name: CALC_NAME,
      project_type: project,
      depth_band: depth,
      geology,
      casing_diameter: casing,
      pump_system: pump,
      distance_to_house: distance,
      region_factor: region,
      estimate_low: result.low,
      estimate_high: result.high,
      currency: 'USD',
    })
  }, [result, project, depth, geology, casing, pump, distance, region])

  const handleChange = <T,>(setter: (v: T) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value as T)
    if (!started) {
      setStarted(true)
      track('form_start', {
        form_name: 'well_drilling_calculator',
        calculator_name: CALC_NAME,
      })
    }
  }

  const handleCalculate = () => {
    const r = calculate(project, depth, geology, casing, pump, distance, region)
    setResult(r)
    track('calculate_estimate', {
      calculator_name: CALC_NAME,
      project_type: project,
      depth_band: depth,
      geology,
      casing_diameter: casing,
      pump_system: pump,
      distance_to_house: distance,
      region_factor: region,
      estimate_low: r.low,
      estimate_high: r.high,
      currency: 'USD',
    })
    setTimeout(() => {
      const el = document.getElementById('well-drill-result')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleReset = () => {
    setProject('new-well')
    setDepth('100-200')
    setGeology('mixed')
    setCasing('6')
    setPump('basic')
    setDistance('25-75')
    setRegion('average')
    setResult(null)
    setStarted(false)
    completedRef.current = ''
    track('calculator_reset', { calculator_name: CALC_NAME })
  }

  return (
    <div className='rounded-2xl border border-[#C8DDD7] bg-white shadow-sm overflow-hidden'>
      <div className='px-6 py-5' style={{ backgroundColor: '#0D3D30' }}>
        <p className='text-xs font-bold uppercase tracking-[0.2em] text-amber-300'>Free homeowner estimate</p>
        <h2 className='text-xl font-bold text-white mt-1'>Estimate the cost to drill a new water well</h2>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div className='sm:col-span-2'>
            <label className={labelClass} htmlFor='project'>Project type</label>
            <select id='project' value={project} onChange={handleChange<ProjectType>(setProject)} className={fieldClass}>
              <option value='new-well'>New well (no existing well)</option>
              <option value='replace-failed'>Replace failed well (new well on property)</option>
              <option value='deepen-existing'>Deepen existing well</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='depth'>Expected well depth</label>
            <select id='depth' value={depth} onChange={handleChange<Depth>(setDepth)} className={fieldClass}>
              <option value='0-100'>0 to 100 ft</option>
              <option value='100-200'>100 to 200 ft</option>
              <option value='200-300'>200 to 300 ft</option>
              <option value='300-500'>300 to 500 ft</option>
              <option value='500-plus'>500+ ft</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='geology'>Geology / drilling difficulty</label>
            <select id='geology' value={geology} onChange={handleChange<Geology>(setGeology)} className={fieldClass}>
              <option value='soft'>Mostly soft soil / sand</option>
              <option value='mixed'>Mixed soil and some rock (typical)</option>
              <option value='hard'>Hard rock / difficult drilling</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='casing'>Casing diameter</label>
            <select id='casing' value={casing} onChange={handleChange<Casing>(setCasing)} className={fieldClass}>
              <option value='4'>4&quot; residential</option>
              <option value='6'>6&quot; standard residential</option>
              <option value='8'>8&quot; large residential / small farm</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='pump'>Include pump &amp; pressure system</label>
            <select id='pump' value={pump} onChange={handleChange<PumpSystem>(setPump)} className={fieldClass}>
              <option value='drilling-only'>Drilling and casing only</option>
              <option value='basic'>Drilling + basic pump and pressure tank</option>
              <option value='high-output'>Drilling + high-output system</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='distance'>Distance from well to house</label>
            <select id='distance' value={distance} onChange={handleChange<Distance>(setDistance)} className={fieldClass}>
              <option value='under-25'>Within 25 ft</option>
              <option value='25-75'>25 to 75 ft</option>
              <option value='75-150'>75 to 150 ft</option>
              <option value='150-plus'>150+ ft</option>
            </select>
          </div>

          <div className='sm:col-span-2'>
            <label className={labelClass} htmlFor='region'>Region / cost factor</label>
            <select id='region' value={region} onChange={handleChange<Region>(setRegion)} className={fieldClass}>
              <option value='low'>Low-cost rural area</option>
              <option value='average'>Average (national)</option>
              <option value='high'>High-cost region / strict permitting</option>
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
            Calculate estimate
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
          <div id='well-drill-result' className='mt-6 rounded-xl border p-5' style={{ backgroundColor: '#E1F5EE', borderColor: '#1D9E75' }}>
            <p className='text-xs font-bold uppercase tracking-wider' style={{ color: '#0F6E56' }}>Estimated total cost</p>
            <p className='mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900'>
              {formatCurrency(result.low)} <span className='text-slate-400 font-bold'>to</span> {formatCurrency(result.high)}
            </p>

            <div className='mt-4 rounded-lg border border-[#C8DDD7] bg-white divide-y divide-slate-100 text-sm'>
              <div className='flex items-center justify-between px-4 py-2.5'>
                <span className='text-slate-600'>Drilling and casing</span>
                <span className='font-semibold text-slate-900'>{formatCurrency(result.drillingLow)} to {formatCurrency(result.drillingHigh)}</span>
              </div>
              <div className='flex items-center justify-between px-4 py-2.5'>
                <span className='text-slate-600'>Pump and pressure system</span>
                <span className='font-semibold text-slate-900'>{result.pumpLow === 0 && result.pumpHigh === 0 ? 'Not included' : `${formatCurrency(result.pumpLow)} to ${formatCurrency(result.pumpHigh)}`}</span>
              </div>
              <div className='flex items-center justify-between px-4 py-2.5'>
                <span className='text-slate-600'>Trenching and hookup</span>
                <span className='font-semibold text-slate-900'>{result.trenchingLow === 0 && result.trenchingHigh === 0 ? 'Not included' : `${formatCurrency(result.trenchingLow)} to ${formatCurrency(result.trenchingHigh)}`}</span>
              </div>
              <div className='flex items-center justify-between px-4 py-2.5'>
                <span className='text-slate-600'>Permits and inspections</span>
                <span className='font-semibold text-slate-900'>{formatCurrency(result.permitsLow)} to {formatCurrency(result.permitsHigh)}</span>
              </div>
            </div>

            <p className='mt-4 text-xs text-slate-500 leading-relaxed'>
              Depth, rock conditions, and local contractor pricing can push real quotes above or below this planning range.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
