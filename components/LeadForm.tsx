'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { getTaskIdsForArticle, FALLBACK_TASK_IDS } from '@/lib/taskIdMap'

// All Networx task IDs with human-readable labels (well/water related)
const PROJECT_TYPE_OPTIONS = [
  { value: '138', label: 'Well Water Line Repair' },
  { value: '232', label: 'Water Main - Replace / Repair' },
  { value: '139', label: 'Water Treatment / Purification' },
  { value: '130', label: 'Plumbing (General)' },
  { value: '461', label: 'Plumbing Inspection' },
  { value: '129', label: 'Plumbing Leak Detection / Repair' },
  { value: '229', label: 'Sump Pump - Repair / Replace' },
  { value: '573', label: 'French Drain Installation / Repair' },
  { value: '337', label: 'Crawl Space / Basement Water Remediation' },
  { value: '393', label: 'Crawl Space / Basement Waterproofing' },
  { value: '123', label: 'Drain Clog / Blockage - Clear' },
  { value: '227', label: 'Drain Line Break - Camera Locate' },
  { value: '234', label: 'Sewer Main - Clear' },
  { value: '233', label: 'Sewer Main - Replace / Repair' },
  { value: '463', label: 'Backflow Preventer Install' },
  { value: '569', label: 'Backflow Testing' },
  { value: '483', label: 'Excavation or Major Grading' },
  { value: '254', label: 'Storm / Water Damage Restoration' },
  { value: '287', label: 'Mold Remediation' },
]

interface LeadFormProps {
  taskIds?: number[]
}

export default function LeadForm({ taskIds }: LeadFormProps) {
  const pathname = usePathname()

  // Auto-detect task IDs from URL if not explicitly passed
  const resolvedTaskIds = taskIds || (() => {
    const segments = pathname.split('/')
    const slug = segments[segments.length - 1] || segments[segments.length - 2]
    return slug ? getTaskIdsForArticle(slug) : FALLBACK_TASK_IDS
  })()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    zipCode: '',
    projectType: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')

    // Get TrustedForm cert URL from hidden field injected by TrustedForm script
    const certInput = document.querySelector('input[name="xxTrustedFormCertUrl"]') as HTMLInputElement
    const trustedFormCertUrl = certInput?.value || ''

    // Build final task IDs: start with the user-selected project type,
    // then include the page-level auto-detected IDs for full coverage
    const selectedTaskId = formData.projectType ? parseInt(formData.projectType) : null
    let finalTaskIds = [...resolvedTaskIds]
    if (selectedTaskId && !finalTaskIds.includes(selectedTaskId)) {
      finalTaskIds = [selectedTaskId, ...finalTaskIds]
    }

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          taskIds: finalTaskIds,
          trustedFormCertUrl,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
        if (typeof window !== 'undefined' && typeof (window as unknown as {gtag?: (...a: unknown[]) => void}).gtag === 'function') {
          ;(window as unknown as {gtag: (...a: unknown[]) => void}).gtag('event', 'generate_lead', {
            currency: 'USD',
            value: 0,
            form_location: pathname,
            project_type: formData.projectType,
          })
        }
      } else {
        let msg = 'Something went wrong. Please try again.'
        try {
          const data = await response.json()
          if (data && data.fields && typeof data.fields === 'object') {
            const firstField = Object.values(data.fields)[0]
            if (typeof firstField === 'string') msg = firstField
          } else if (data && typeof data.error === 'string') {
            msg = data.error
          }
        } catch {}
        setError(msg)
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-[#0F6E56] mb-2">Thank You!</h3>
        <p className="text-gray-600">We&apos;ve received your information. You&apos;ll receive quotes from local well professionals within 24 hours.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-8 space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
          <input type="text" id="firstName" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent" value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
          <input type="text" id="lastName" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent" value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" id="email" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
        <input type="tel" id="phone" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
      </div>

      <div>
        <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">ZIP Code *</label>
        <input type="text" id="zipCode" required pattern="[0-9]{5}" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent" value={formData.zipCode} onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })} />
      </div>

      <div>
        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">Project Type *</label>
        <select id="projectType" required className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent bg-white" value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}>
          <option value="">Select your project type</option>
          {PROJECT_TYPE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Briefly describe your project (optional)</label>
        <textarea id="description" maxLength={500} rows={3} className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1D9E75] focus:border-transparent" placeholder="Tell us about your well issue, any specific concerns, timeline, etc." value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <p className="text-xs text-gray-400 mt-1 text-right">{formData.description.length}/500</p>
      </div>

      {error && (
        <p className="text-red-600 text-sm mt-2">{error}</p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full text-white font-semibold py-3 rounded-lg mt-6 transition-colors disabled:opacity-50"
        style={{ backgroundColor: '#1D9E75' }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#178a65')}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = '#1D9E75')}
      >
        {submitting ? 'Submitting...' : 'Get Free Quotes'}
      </button>

      <p className="text-xs text-gray-500 mt-4 text-center leading-relaxed">
        By clicking &quot;Get Free Quotes,&quot; I consent to be contacted by home service professionals at the phone number and/or email address I provided, including via automated calls, texts, and prerecorded messages, even if my number is on a Do Not Call list. I understand this consent is not a condition of purchase. I also agree to The Well Guide&apos;s{' '}
        <a href="/terms" className="underline">Terms of Service</a> and{' '}
        <a href="/privacy" className="underline">Privacy Policy</a>.
      </p>
    </form>
  )
}
