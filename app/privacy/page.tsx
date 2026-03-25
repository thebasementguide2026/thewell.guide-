import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy | The Well Guide',
  description: 'Privacy Policy for The Well Guide.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section style={{ backgroundColor: '#0D3D30' }} className="text-white py-16">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-white/60">Last updated: March 2026</p>
        </div>
      </section>
      <section className="container mx-auto px-4 max-w-3xl py-16">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Overview</h2>
          <p className="text-slate-600 mb-8">The Well Guide (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates thewell.guide. This Privacy Policy explains what information we collect, how we use it, and your rights regarding that information.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Information You Provide</h3>
          <p className="text-slate-600 mb-6">When you submit a quote request, we collect your name, email address, phone number, ZIP code, and project type to connect you with contractors in your area.</p>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Information Collected Automatically</h3>
          <p className="text-slate-600 mb-8">We automatically collect IP address, browser type, pages visited, and time spent via cookies and analytics tools like Google Analytics.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">How We Use Your Information</h2>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li>To connect you with licensed contractors when you submit a quote request</li>
            <li>To share your lead information with our referral network partners</li>
            <li>To improve our website content and user experience</li>
            <li>To analyze site traffic and performance</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Lead Form Data &amp; Third-Party Sharing</h2>
          <p className="text-slate-600 mb-8">When you submit a quote request, your information may be shared with up to three licensed contractors and/or our referral network partners. You are under no obligation to hire any contractor.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Cookies</h2>
          <p className="text-slate-600 mb-8">We use cookies to analyze site traffic and improve your experience. You can control cookie settings through your browser preferences.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Affiliate Links</h2>
          <p className="text-slate-600 mb-8">Our site contains affiliate links. See our <Link href="/affiliate-disclosure" className="text-blue-600 hover:text-blue-800 underline">Affiliate Disclosure</Link> for full details.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Your Rights</h2>
          <ul className="list-disc pl-6 text-slate-600 mb-8 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="text-slate-600 mb-8">To exercise any of these rights, <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">contact us</Link>.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security</h2>
          <p className="text-slate-600 mb-8">We take reasonable measures to protect your personal information. However, no method of internet transmission is 100% secure.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Children&apos;s Privacy</h2>
          <p className="text-slate-600 mb-8">Our site is not directed at children under 13. We do not knowingly collect personal information from children.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Changes to This Policy</h2>
          <p className="text-slate-600 mb-8">We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.</p>

          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <p className="text-slate-600 mb-8">Questions? <Link href="/about" className="text-blue-600 hover:text-blue-800 underline">Contact us here</Link>.</p>

          <Link href="/" className="text-blue-600 hover:text-blue-800 underline">&larr; Back to Home</Link>
        </div>
      </section>
    </main>
  )
}
