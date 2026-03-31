import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | The Well Guide',
  description: 'Get in touch with The Well Guide. Send us your questions, feedback, or suggestions.',
  alternates: { canonical: 'https://www.thewell.guide/contact' },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{}{children}</>
}
