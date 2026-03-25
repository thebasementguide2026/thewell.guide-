import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About The Well Guide | Private Well Resources for Homeowners',
  description: 'Water quality and health guidance written for the 13 million US homeowners on private wells.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#0D3D30' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About The Well Guide</h1>
          <p className="text-xl text-white/60">Water quality and health guidance for the 13 million US homeowners on private wells</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h2>
          <p className="text-slate-600 mb-6">The Well Guide was created to help private well owners understand, protect, and maintain their water supply. Whether you are testing your water for the first time, troubleshooting a failing pump, or deciding between treatment options, we provide clear, honest information so you can make confident decisions.</p>
          <p className="text-slate-600 mb-8">Over 13 million US households rely on private wells as their primary source of drinking water. Unlike municipal water systems, private well owners are fully responsible for their own water quality and system maintenance. We exist to make that responsibility easier to manage.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">What We Cover</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Water Quality &amp; Testing</h3>
              <p className="text-slate-600 text-sm">What to test for, how often, what results mean, and what to do when something is wrong.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Well Pump &amp; System Maintenance</h3>
              <p className="text-slate-600 text-sm">Pump maintenance schedules, pressure tank care, and how to extend the life of your system.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Cost Information</h3>
              <p className="text-slate-600 text-sm">Real cost data for pump replacement, water treatment systems, drilling, and repairs.</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="font-bold text-slate-900 mb-2">Problem Diagnosis</h3>
              <p className="text-slate-600 text-sm">Low pressure, bad taste, cloudy water, pump failure — we help you identify what is wrong and what to do next.</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Approach</h2>
          <p className="text-slate-600 mb-6">We write for homeowners, not contractors. Every guide is written to be understandable without technical training, while still being detailed enough to actually help you. We do not sell contractor services, accept payment for editorial coverage, or recommend products we would not use ourselves.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Get Expert Help</h2>
          <p className="text-slate-600 mb-6">Need a licensed well contractor? We connect homeowners with qualified local professionals — no obligation, no spam.</p>
          <Link href="/get-quote" className="inline-block text-white font-semibold py-3 px-8 rounded-lg transition-colors text-sm" style={{ backgroundColor: '#1D9E75' }}>Get Free Quotes</Link>
        </div>
      </section>
    </main>
  )
}
