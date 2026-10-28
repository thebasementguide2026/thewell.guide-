import { MetadataRoute } from 'next'
import { articles } from '@/lib/articles'
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import ts from 'typescript'

export const dynamic = 'force-static'

function contentDate(pathname: string): string | undefined {
  const filename = join(process.cwd(), 'app', pathname.slice(1), 'page.tsx')
  if (!existsSync(filename)) return undefined

  const source = ts.createSourceFile(
    filename,
    readFileSync(filename, 'utf8'),
    ts.ScriptTarget.Latest,
    true,
    ts.ScriptKind.TSX,
  )
  const bindings = new Map<string, ts.Expression>()
  function collectBindings(node: ts.Node) {
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && node.initializer) {
      bindings.set(node.name.text, node.initializer)
    }
    ts.forEachChild(node, collectBindings)
  }
  collectBindings(source)

  function resolve(value: ts.Expression | undefined, seen = new Set<string>()): ts.Expression | undefined {
    if (!value) return undefined
    if (ts.isIdentifier(value)) {
      if (seen.has(value.text)) return undefined
      seen.add(value.text)
      return resolve(bindings.get(value.text), seen)
    }
    if (ts.isAsExpression(value) || ts.isSatisfiesExpression(value) || ts.isParenthesizedExpression(value)) {
      return resolve(value.expression, seen)
    }
    return value
  }
  function literal(value: ts.Expression | undefined): string | undefined {
    const resolved = resolve(value)
    return resolved && (ts.isStringLiteral(resolved) || ts.isNoSubstitutionTemplateLiteral(resolved))
      ? resolved.text
      : undefined
  }
  function date(value: ts.Expression | undefined): string | undefined {
    return literal(value)?.trim().match(/^(\d{4}-\d{2}-\d{2})(?:$|T)/)?.[1]
  }

  let articleModified: string | undefined
  let articlePublished: string | undefined
  let pagePublished: string | undefined
  function visit(node: ts.Node) {
    if (ts.isObjectLiteralExpression(node)) {
      const properties = new Map<string, ts.Expression>()
      for (const property of node.properties) {
        if (ts.isPropertyAssignment(property) &&
            (ts.isIdentifier(property.name) || ts.isStringLiteral(property.name))) {
          properties.set(property.name.text, property.initializer)
        }
      }
      const type = resolve(properties.get('@type'))
      const isArticle = literal(type) === 'Article' ||
        (type && ts.isArrayLiteralExpression(type) && type.elements.some(value => literal(value) === 'Article'))
      if (isArticle) {
        articleModified ??= date(properties.get('dateModified'))
        articlePublished ??= date(properties.get('datePublished'))
      }
      pagePublished ??= date(properties.get('datePublished'))
    }
    ts.forEachChild(node, visit)
  }
  visit(source)
  return articleModified ?? articlePublished ?? pagePublished
}

function withContentDate(page: MetadataRoute.Sitemap[number]): MetadataRoute.Sitemap[number] {
  const lastModified = contentDate(new URL(page.url).pathname)
  return lastModified ? { ...page, lastModified } : page
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.thewell.guide'

  const existingPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/cost-guides/well-inspection-cost`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-pressure-switch`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/generator-for-well-pump`, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/guides/complete-well-guide`, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${baseUrl}/problems/well-water-smells-like-sulfur`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-water-pressure-low`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-pump-replacement-cost`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-pump-replacement-cost-calculator`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cost-guides/well-drilling-cost-calculator`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/cost-guides/well-water-treatment-cost-calculator`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/guides/how-to-test-well-water`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/brown-rusty-well-water`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-water-testing-cost`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/how-well-pump-works`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-maintenance-checklist`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/no-water-from-well`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/frozen-well-pipes`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-pump-running-constantly`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-water-contaminants`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/arsenic-in-well-water`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/iron-in-well-water`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-well-water-test-kits`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-pump-short-cycling`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-pressure-tank-guide`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-running-dry`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-water-tastes-bad`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/pressure-tank-replacement-cost`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/well-drilling-cost`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-water-treatment-options`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-whole-house-water-filters`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-iron-filters`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-pressure-tanks`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/reviews/best-well-pumps`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/buying-house-with-well`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/guides/well-water-vs-city-water`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/hard-water-well`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/dug-well-vs-drilled-well`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/how-to-shock-chlorinate-well`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/guides/well-pump-maintenance`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/well-pump-failing`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/problems/how-to-prime-a-well-pump`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cost-guides/whole-house-water-filter-cost`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/get-quote`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${baseUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/affiliate-disclosure`, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Retain special routes and their settings, while automatically including
  // newly published articles from the site's shared content registry.
  const pages = new Map(existingPages.map((page) => [page.url, page]))
  for (const article of articles) {
    const url = `${baseUrl}/${article.slug.replace(/^\/+/, '')}`
    if (!pages.has(url)) {
      pages.set(url, {
        url,
        changeFrequency: 'monthly',
        priority: 0.8,
      })
    }
  }

  return Array.from(pages.values()).map(withContentDate)
}
