import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Affiliate Disclosure | The Well Guide',
  description: 'Learn about affiliate relationships and how The Well Guide earns revenue.',
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#0D3D30' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Affiliate Disclosure</h1>
          <p className="text-xl text-white/60">Last updated: March 2026</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Short Version</h2>
          <p className="text-slate-600 mb-6">Some links on The Well Guide are affiliate links. If you click one and make a purchase, we may earn a commission at no extra cost to you. This helps us keep our content free.</p>
          <p className="text-slate-600 mb-8">We only recommend products and services we genuinely believe are worth your money. Our editorial opinions are never influenced by affiliate relationships.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">The Full Disclosure</h2>
          <p className="text-slate-600 mb-4">The Well Guide is a participant in affiliate advertising programs, including:</p>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li>Amazon Services LLC Associates Program</li>
            <li>Home Depot Affiliate Program</li>
            <li>Other home improvement and contractor referral programs</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Identify Affiliate Links</h2>
          <p className="text-slate-600 mb-8">We do our best to clearly identify affiliate links throughout the site. This disclosure page applies site-wide in accordance with FTC guidelines.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Editorial Independence</h2>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li>We research products independently before including affiliate links</li>
            <li>We will recommend a non-affiliate product over an affiliate product if it is genuinely better</li>
            <li>Negative reviews are published even when we have an affiliate relationship</li>
            <li>Brands cannot pay for positive editorial coverage</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contractor Lead Referrals</h2>
          <p className="text-slate-600 mb-8">The Well Guide also operates a contractor quote request form. We may receive compensation for referrals. You are under no obligation to hire any contractor. See our <Link href="/privacy" className="text-blue-600 hover:text-blue-800 underline">Privacy Policy</Link> for details.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Questions?</h2>
          <p className="text-slate-600 mb-8">If you have any questions, please <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">contact us</Link>.</p>

          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">&larr; Back to Home</Link>
        </div>
      </section>
    </main>
  )
}
