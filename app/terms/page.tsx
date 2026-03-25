import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Use | The Well Guide',
  description: 'Terms of Use for The Well Guide.',
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#0D3D30' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-xl text-white/60">Last updated: March 2026</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Acceptance of Terms</h2>
          <p className="text-slate-600 mb-8">By accessing or using thewell.guide (&quot;the Site&quot;), you agree to be bound by these Terms of Use. If you do not agree, please do not use the Site. We reserve the right to update these terms at any time.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Use of Content</h2>
          <p className="text-slate-600 mb-4">All content on The Well Guide is provided for informational purposes only. You may:</p>
          <ul className="text-slate-600 mb-4 space-y-2">
            <li>Read and use our content for personal, non-commercial purposes</li>
            <li>Share links to our articles</li>
            <li>Quote brief excerpts with attribution and a link back</li>
          </ul>
          <p className="text-slate-600 mb-4">You may not:</p>
          <ul className="text-slate-600 mb-8 space-y-2">
            <li>Copy, reproduce, or republish our content in full without written permission</li>
            <li>Use our content for commercial purposes without a license</li>
            <li>Scrape or systematically download content from the Site</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Informational Purposes Only</h2>
          <p className="text-slate-600 mb-8">The content on The Well Guide is for general informational purposes only. It is not a substitute for professional advice from a licensed well contractor, water quality specialist, or other qualified professional. Always consult a qualified professional before undertaking any well project.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contractor Referrals</h2>
          <p className="text-slate-600 mb-8">When you submit a quote request through our site, we connect you with third-party contractors and referral network partners. The Well Guide does not employ, endorse, or guarantee the work of any contractor.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Affiliate Links &amp; Advertising</h2>
          <p className="text-slate-600 mb-8">The Site contains affiliate links and may display advertising. See our <Link href="/affiliate-disclosure" className="text-blue-600 hover:text-blue-800 underline">Affiliate Disclosure</Link> for full details.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer of Warranties</h2>
          <p className="text-slate-600 mb-8">The Site and its content are provided &quot;as is&quot; without any warranty of any kind, express or implied.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
          <p className="text-slate-600 mb-8">To the fullest extent permitted by law, The Well Guide shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Site. Our total liability shall not exceed $100.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law</h2>
          <p className="text-slate-600 mb-8">These Terms shall be governed by the laws of the State of New York. Any disputes shall be resolved in the courts of Suffolk County, New York.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact</h2>
          <p className="text-slate-600 mb-8">Questions about these Terms? <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">Contact us here</Link>.</p>

          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">&larr; Back to Home</Link>
        </div>
      </section>
    </main>
  )
}
