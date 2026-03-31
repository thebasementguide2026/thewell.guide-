'use client'

import { useState } from 'react'


const contactSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Contact Us | The Well Guide',
  description: 'Get in touch with The Well Guide. Send us your questions, feedback, or suggestions.',
  url: 'https://www.thewell.guide/contact',
  mainEntity: {
    '@type': 'Organization',
    name: 'The Well Guide',
    url: 'https://www.thewell.guide',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How can I contact The Well Guide?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can reach us by filling out the contact form on this page. We typically respond within 1–2 business days.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does it take to get a response?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We aim to respond to all inquiries within 1–2 business days.',
      },
    },
  ],
}

export default function ContactPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    setSuccess(false)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      })

      if (!res.ok) {
        const data = await res.json()
        throw new Error(data.error || 'Failed to send message')
      }

      setSuccess(true)
      setName('')
      setEmail('')
      setMessage('')
    } catch (err: any) {
      setError(err.message || 'Something went wrong. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <main className="min-h-screen bg-white">

      <section style={{ backgroundColor: '#0D3D30' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-white/60">Have a question or feedback? We'd love to hear from you.</p>
        </div>
      </section>

        <section className="container mx-auto px-4 max-w-2xl py-16">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Send Us a Message</h2>
            <p className="text-slate-600">
              Fill out the form below and we'll get back to you within 1–2 business days.
            </p>
          </div>

          {success && (
            <div className="mb-6 p-4 rounded-lg border bg-green-50 border-green-200 text-green-800">
              Thank you for reaching out! We'll get back to you soon.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 rounded-lg border bg-red-50 border-red-200 text-red-800">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-800 focus:border-emerald-800 outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-800 focus:border-emerald-800 outline-none transition-colors"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-emerald-800 focus:border-emerald-800 outline-none transition-colors resize-vertical"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:opacity-50"
              style={{ backgroundColor: submitting ? '#1a5c47' : '#0D3D30' }}
            >
              {submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-xl font-bold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900">How can I contact The Well Guide?</h3>
                <p className="text-slate-600 mt-1">You can reach us by filling out the contact form above. We typically respond within 1–2 business days.</p>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">How long does it take to get a response?</h3>
                <p className="text-slate-600 mt-1">We aim to respond to all inquiries within 1–2 business days.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
