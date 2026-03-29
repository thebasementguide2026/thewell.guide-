import LeadForm from '@/components/LeadForm'
import Breadcrumbs from '@/components/Breadcrumbs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get a Free Well Quote | The Well Guide',
  description: 'Connect with qualified well and water professionals in your area. Get free, no-obligation quotes for well drilling, pump repair, water treatment, and more.',
  alternates: {
    canonical: 'https://www.thewell.guide/get-quote',
  },
  openGraph: {
    title: 'Get a Free Well Quote | The Well Guide',
    description: 'Connect with qualified well and water professionals in your area. Get free, no-obligation quotes for well drilling, pump repair, water treatment, and more.',
    url: 'https://www.thewell.guide/get-quote',
    siteName: 'The Well Guide',
    type: 'website',
  },
}

export default function GetQuotePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: 'Get a Free Quote' }]} />
      <section style={{ backgroundColor: '#0D3D30' }} className="text-white py-16">
        <div className="container-custom text-center">
          <h1 className="text-4xl font-extrabold mb-4">Get Your Free Well Quote</h1>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Fill out the form below and we&apos;ll connect you with qualified well and water professionals in your area.
          </p>
        </div>
      </section>
      <section className="py-16 bg-[#F7F5F0]">
        <div className="container-custom max-w-2xl">
          <LeadForm />
        </div>
      </section>
    </>
  )
}
