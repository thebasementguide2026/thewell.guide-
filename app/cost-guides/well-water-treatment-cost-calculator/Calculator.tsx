'use client'

import { useEffect, useState } from 'react'

type Gtag = (...args: unknown[]) => void
function track(event: string, params: Record<string, unknown>) {
  if (typeof window === 'undefined') return
  const w = window as unknown as { gtag?: Gtag }
  if (typeof w.gtag === 'function') w.gtag('event', event, params)
}

type Issue = 'sediment' | 'hardness' | 'iron' | 'sulfur' | 'bacteria' | 'multiple'
type Level = 'basic' | 'standard' | 'premium'
type HomeSize = 'small' | 'medium' | 'large'
type Occupancy = '1-2' | '3-4' | '5-plus'
type Region = 'low' | 'average' | 'high'
type Complexity = 'easy' | 'average' | 'difficult'

interface Result {
  low: number
  high: number
  category: string
  recommendation: string
  explanation: string
  note: string
}

// Pricing baselines anchored to published well water treatment ranges:
//   Sediment filter: $200-$1,200
//   Water softener (hardness): $800-$2,800
//   Iron/manganese filter: $900-$4,000
//   Sulfur removal (oxidizing / chemical feed): $1,500-$4,000
//   Bacteria (UV system): $1,000-$2,500
//   Multi-stage system (multiple issues): $2,500-$8,000+
function calculate(
  issue: Issue,
  level: Level,
  homeSize: HomeSize,
  occupancy: Occupancy,
  region: Region,
  complexity: Complexity,
): Result {
  let baseLow = 0
  let baseHigh = 0
  let category = ''
  let recommendation = ''
  let explanation = ''

  if (issue === 'sediment') {
    baseLow = 200
    baseHigh = 1200
    category = 'Sediment filtration'
    recommendation = 'Whole-house sediment prefilter (5 to 20 micron) with a clear housing for visual checks'
    explanation = 'Sediment is the cheapest well water issue to fix. A whole-house spin-down or cartridge prefilter removes sand, silt, and rust particles before they reach your softener, water heater, or fixtures. Most homeowners can have a contractor install one in a half-day visit. A prefilter is also the first stage of nearly every multi-stage well treatment system.'
  } else if (issue === 'hardness') {
    baseLow = 800
    baseHigh = 2800
    category = 'Hard water treatment'
    recommendation = 'Whole-house ion-exchange water softener sized to your hardness level and household demand'
    explanation = 'Hard water is treated with a salt-based ion-exchange water softener that swaps calcium and magnesium ions for sodium. Sizing matters: undersized softeners regenerate too often and waste salt and water, oversized units sit idle and channel. A licensed installer will size the unit based on grains of hardness and household gallons per day, then plumb it into the main line after any sediment prefilter.'
  } else if (issue === 'iron') {
    baseLow = 900
    baseHigh = 4000
    category = 'Iron and manganese removal'
    recommendation = 'Dedicated iron filter (air injection or catalytic media), or a softener plus iron filter combo for higher iron loads'
    explanation = 'Iron and manganese stain fixtures, ruin laundry, and clog appliances. Low levels (under 3 ppm of dissolved iron) can sometimes be handled by an upgraded softener with iron-removing resin. Higher levels or any bacterial iron require a dedicated iron filter, often air-injection or catalytic media. If you have both hardness and iron, a softener plus iron filter combo is the standard pairing.'
  } else if (issue === 'sulfur') {
    baseLow = 1500
    baseHigh = 4000
    category = 'Sulfur and odor removal'
    recommendation = 'Air-injection oxidizing filter, or chemical feed (chlorine or peroxide) plus carbon filter for heavier sulfur loads'
    explanation = 'That rotten-egg smell is hydrogen sulfide gas. The standard fix is an air-injection oxidizing filter that converts the gas to elemental sulfur and traps it in a media bed. Heavier sulfur loads or cases combined with iron bacteria use a chemical feed system (chlorine or hydrogen peroxide) followed by a contact tank and carbon filter. Either approach should be paired with a sediment prefilter.'
  } else if (issue === 'bacteria') {
    baseLow = 1000
    baseHigh = 2500
    category = 'Bacteria and pathogen treatment'
    recommendation = 'Whole-house ultraviolet (UV) disinfection system sized for your peak flow rate, paired with a sediment prefilter'
    explanation = 'A UV disinfection system inactivates bacteria, viruses, and protozoa as water passes a UV bulb. UV requires clear water to work, so a 5-micron sediment prefilter is mandatory. Replace the bulb annually and monitor the UV intensity sensor. Shock chlorinate the well first to kill any biofilm before commissioning the UV unit.'
  } else {
    baseLow = 2500
    baseHigh = 8000
    category = 'Multi-stage whole-house treatment'
    recommendation = 'Multi-stage system: sediment prefilter, then issue-specific treatment (iron filter, softener, or oxidizer), then UV disinfection'
    explanation = 'When a well has more than one problem, the order of treatment matters. The standard sequence is sediment prefilter, then iron or sulfur removal, then a softener, then UV disinfection. Skipping or reordering stages shortens equipment life. A reputable installer will run a full water test before quoting and design the sequence to match your specific test results.'
  }

  // Treatment level multiplier (basic / standard / premium equipment grades)
  const levelMult: Record<Level, number> = {
    basic: 0.85,
    standard: 1.0,
    premium: 1.25,
  }

  // Home size multiplier (drives pipe runs, fitting count, contact tank size)
  const homeMult: Record<HomeSize, number> = {
    small: 0.92,
    medium: 1.0,
    large: 1.15,
  }

  // Occupancy multiplier (drives sizing, flow rate, regeneration frequency)
  const occMult: Record<Occupancy, number> = {
    '1-2': 0.94,
    '3-4': 1.0,
    '5-plus': 1.12,
  }

  // Regional cost factor
  const regionMult: Record<Region, number> = {
    low: 0.88,
    average: 1.0,
    high: 1.18,
  }

  // Install complexity (basement vs crawl space, electrical, drain)
  const complexityMult: Record<Complexity, number> = {
    easy: 0.95,
    average: 1.0,
    difficult: 1.2,
  }

  const mult = levelMult[level] * homeMult[homeSize] * occMult[occupancy] * regionMult[region] * complexityMult[complexity]

  // Round to nearest $50 for low and $100 for high
  const low = Math.round((baseLow * mult) / 50) * 50
  const high = Math.round((baseHigh * mult) / 100) * 100

  // Planning note
  let note = 'Always test your water before buying any equipment. A $50 to $200 lab test tells you exactly what you are treating, what concentrations you have, and what equipment is sized correctly. Get two to three written quotes from licensed water treatment installers and ask each one to itemize equipment, install labor, and annual service.'
  if (issue === 'multiple') {
    note = 'For wells with multiple problems, do not skip the water test. Treatment sequence matters: get a single licensed installer to design the full system rather than buying one stage at a time. Ask whether annual service contracts are available and what they include.'
  } else if (issue === 'bacteria') {
    note = 'Shock chlorinate the well before commissioning a UV system to kill any biofilm in the casing. Replace the UV bulb every 12 months even if it still glows, and clean the quartz sleeve annually. UV will not work on cloudy water, so a sediment prefilter is non-negotiable.'
  } else if (issue === 'sulfur') {
    note = 'Air-injection oxidizers handle most household sulfur loads and have lower operating cost than chemical feed systems. If your sulfur smell appears only on hot water, the issue is more likely a water heater anode rod, not the well itself.'
  } else if (issue === 'iron') {
    note = 'Get a full iron test that distinguishes ferrous (dissolved) from ferric (oxidized) iron and checks for iron bacteria. The right equipment depends on which form you have, and a softener alone will not solve a high iron problem.'
  }

  return { low, high, category, recommendation, explanation, note }
}

const formatCurrency = (n: number) => `$${n.toLocaleString('en-US')}`

const fieldClass = 'w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 focus:border-[#1D9E75] focus:outline-none focus:ring-1 focus:ring-[#1D9E75]'
const labelClass = 'block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5'

interface Props {
  onResult?: (low: number, high: number) => void
}

export default function WellWaterTreatmentCostCalculator({ onResult }: Props) {
  const [issue, setIssue] = useState<Issue>('hardness')
  const [level, setLevel] = useState<Level>('standard')
  const [homeSize, setHomeSize] = useState<HomeSize>('medium')
  const [occupancy, setOccupancy] = useState<Occupancy>('3-4')
  const [region, setRegion] = useState<Region>('average')
  const [complexity, setComplexity] = useState<Complexity>('average')
  const [result, setResult] = useState<Result | null>(null)
  const [started, setStarted] = useState(false)
  const [completedFor, setCompletedFor] = useState<string>('')

  // Fire calculator_view once per mount
  useEffect(() => {
    track('calculator_view', {
      calculator_name: 'well_water_treatment_cost',
      page_type: 'calculator',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
    })
  }, [])

  // Fire calculator_complete after a valid result renders (gated so it fires once per unique result)
  useEffect(() => {
    if (!result) return
    const key = `${result.low}-${result.high}-${result.category}`
    if (key === completedFor) return
    setCompletedFor(key)
    track('calculator_complete', {
      calculator_name: 'well_water_treatment_cost',
      page_type: 'calculator',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      estimate_low: result.low,
      estimate_high: result.high,
      currency: 'USD',
      result_category: result.category,
    })
  }, [result, completedFor])

  const handleChange = <T,>(setter: (v: T) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    setter(e.target.value as T)
    if (!started) {
      setStarted(true)
      track('calculator_start', {
        calculator_name: 'well_water_treatment_cost',
        page_type: 'calculator',
      })
    }
  }

  const handleCalculate = () => {
    const r = calculate(issue, level, homeSize, occupancy, region, complexity)
    setResult(r)
    track('calculator_calculate', {
      calculator_name: 'well_water_treatment_cost',
      page_type: 'calculator',
      page_path: typeof window !== 'undefined' ? window.location.pathname : '',
      water_issue: issue,
      treatment_level: level,
      home_size: homeSize,
      occupancy_bucket: occupancy,
      region_bucket: region,
      complexity_bucket: complexity,
      estimate_low: r.low,
      estimate_high: r.high,
      currency: 'USD',
    })
    if (onResult) onResult(r.low, r.high)
    setTimeout(() => {
      const el = document.getElementById('wwt-calc-result')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 50)
  }

  const handleReset = () => {
    setIssue('hardness')
    setLevel('standard')
    setHomeSize('medium')
    setOccupancy('3-4')
    setRegion('average')
    setComplexity('average')
    setResult(null)
    setStarted(false)
    setCompletedFor('')
    track('calculator_reset', { calculator_name: 'well_water_treatment_cost' })
  }

  return (
    <div className='rounded-2xl border border-[#C8DDD7] bg-white shadow-sm overflow-hidden'>
      <div className='px-6 py-5' style={{ backgroundColor: '#0D3D30' }}>
        <h2 className='text-xl font-bold text-white'>Well Water Treatment Cost Calculator</h2>
        <p className='text-sm text-white/70 mt-1'>Free homeowner estimate. Six inputs, instant range and recommended setup.</p>
      </div>

      <div className='p-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div>
            <label className={labelClass} htmlFor='issue'>Main water issue</label>
            <select id='issue' value={issue} onChange={handleChange<Issue>(setIssue)} className={fieldClass}>
              <option value='sediment'>Sediment / sand / cloudy water</option>
              <option value='hardness'>Hard water / scale buildup</option>
              <option value='iron'>Iron or manganese (orange / black staining)</option>
              <option value='sulfur'>Sulfur smell (rotten egg odor)</option>
              <option value='bacteria'>Bacteria or coliform (failed water test)</option>
              <option value='multiple'>Multiple issues at once</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='level'>Treatment level</label>
            <select id='level' value={level} onChange={handleChange<Level>(setLevel)} className={fieldClass}>
              <option value='basic'>Basic (entry-level equipment)</option>
              <option value='standard'>Standard (mid-grade, most homes)</option>
              <option value='premium'>Premium (upgraded media, smart controls, longer warranty)</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='homeSize'>Home size</label>
            <select id='homeSize' value={homeSize} onChange={handleChange<HomeSize>(setHomeSize)} className={fieldClass}>
              <option value='small'>Small (under 1,500 sq ft)</option>
              <option value='medium'>Medium (1,500 to 3,000 sq ft)</option>
              <option value='large'>Large (3,000+ sq ft)</option>
            </select>
          </div>

          <div>
            <label className={labelClass} htmlFor='occupancy'>Occupancy</label>
            <select id='occupancy' value={occupancy} onChange={handleChange<Occupancy>(setOccupancy)} className={fieldClass}>
              <option value='1-2'>1 to 2 people</option>
              <option value='3-4'>3 to 4 people</option>
              <option value='5-plus'>5 or more people</option>
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
            <label className={labelClass} htmlFor='complexity'>Install complexity</label>
            <select id='complexity' value={complexity} onChange={handleChange<Complexity>(setComplexity)} className={fieldClass}>
              <option value='easy'>Easy (open basement, drain and outlet nearby)</option>
              <option value='average'>Average install</option>
              <option value='difficult'>Difficult (crawl space, new drain or wiring needed)</option>
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
          <div id='wwt-calc-result' className='mt-6 rounded-xl border p-5' style={{ backgroundColor: '#E1F5EE', borderColor: '#1D9E75' }}>
            <p className='text-xs font-bold uppercase tracking-wider' style={{ color: '#0F6E56' }}>Estimated installed cost range</p>
            <p className='mt-1 text-3xl sm:text-4xl font-extrabold text-slate-900'>
              {formatCurrency(result.low)} <span className='text-slate-400 font-bold'>-</span> {formatCurrency(result.high)}
            </p>
            <p className='mt-2 text-sm text-slate-700'>
              <span className='font-semibold'>Project scope:</span> {result.category}
            </p>
            <p className='mt-3 text-sm text-slate-700 leading-relaxed'>
              <span className='font-semibold'>Recommended setup:</span> {result.recommendation}
            </p>
            <p className='mt-3 text-sm text-slate-700 leading-relaxed'>
              <span className='font-semibold'>Why this works:</span> {result.explanation}
            </p>
            <p className='mt-3 text-sm text-slate-700 leading-relaxed'>
              <span className='font-semibold'>Planning note:</span> {result.note}
            </p>
            <p className='mt-4 text-xs text-slate-500 leading-relaxed'>
              Estimates are based on published cost ranges from The Well Guide. Local labor rates, water test results, plumbing condition, and equipment brand can move the actual quoted price meaningfully in either direction. Always test your well water and get two to three itemized written quotes from licensed water treatment installers in your area.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
