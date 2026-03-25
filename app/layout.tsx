import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'The Well Guide — Expert Private Well Advice for Homeowners',
  description: 'Independent resource for private well water quality, maintenance, testing, and cost guidance. Written for the 13 million US homeowners on private wells.',
  keywords: 'private well, well water, well pump, water quality, well maintenance, well testing, well water treatment',
  openGraph: {
    title: 'The Well Guide — Expert Private Well Advice for Homeowners',
    description: 'Independent resource for private well water quality, maintenance, testing, and cost guidance. Written for homeowners, not contractors.',
    siteName: 'The Well Guide',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-8LFRQKH7F9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8LFRQKH7F9');
          `}
        </Script>
      </head>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
