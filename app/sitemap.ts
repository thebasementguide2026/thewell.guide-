import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thewell.guide'

  const updatedPaths = new Set([
    '/guides/well-abandonment',
    '/guides/buying-house-with-well',
    '/problems/air-in-well-water-lines',
    '/problems/well-pump-failing',
    '/problems/frozen-well-pipes',
    '/guides/generator-for-well-pump',
    '/guides/well-pressure-switch',
    '/problems/well-pump-short-cycling',
    '/problems/well-pump-running-constantly',
  ])

  const existingPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/cost-guides/well-inspection-cost`, lastModified: '2026-10-27', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-pressure-switch`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/generator-for-well-pump`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/guides/complete-well-guide`, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/problems/well-water-smells-like-sulfur`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-water-pressure-low`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-pump-replacement-cost`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-pump-replacement-cost-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cost-guides/well-drilling-cost-calculator`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cost-guides/well-water-treatment-cost-calculator`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/guides/how-to-test-well-water`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/brown-rusty-well-water`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-water-testing-cost`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/how-well-pump-works`, lastModified: '2026-10-22T18:51:39.073Z', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-maintenance-checklist`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/no-water-from-well`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/frozen-well-pipes`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-pump-running-constantly`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-water-contaminants`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/arsenic-in-well-water`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/iron-in-well-water`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-well-water-test-kits`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-pump-short-cycling`, lastModified: '2026-10-22', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-pressure-tank-guide`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-running-dry`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-water-tastes-bad`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/pressure-tank-replacement-cost`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-drilling-cost`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-water-treatment-options`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-whole-house-water-filters`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-iron-filters`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-pressure-tanks`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-well-pumps`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/buying-house-with-well`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/guides/well-water-vs-city-water`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/hard-water-well`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/dug-well-vs-drilled-well`, lastModified: '2026-10-26', changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/how-to-shock-chlorinate-well`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-pump-maintenance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-pump-failing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/how-to-prime-a-well-pump`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/whole-house-water-filter-cost`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/get-quote`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/affiliate-disclosure`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Retain special routes and their settings, while automatically including
  // newly published articles from the site's shared content registry.
  const pages = new Map(existingPages.map((page) => [page.url, page]))
  for (const article of articles) {
    const url = `${baseUrl}/${article.slug.replace(/^\/+/, '')}`
    if (!pages.has(url)) {
      pages.set(url, {
        url,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return Array.from(pages.values()).map((page) => ({
    ...page,
    lastModified: updatedPaths.has(new URL(page.url).pathname)
      ? '2026-10-23'
      : page.lastModified,
  }))
}
