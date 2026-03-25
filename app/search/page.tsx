'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'
import { searchArticles } from '@/lib/articles'

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''
  const results = query ? searchArticles(query) : []

  return (
    <div className="min-h-screen bg-white">
      <div className="py-12" style={{ backgroundColor: '#0D3D30' }}>
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white mb-2">Search Results</h1>
          {query && (
            <p className="text-white/60">
              {results.length} result{results.length !== 1 ? 's' : ''} for &quot;{query}&quot;
            </p>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {!query && (
          <p className="text-gray-500 text-center py-12">Enter a search term to find guides.</p>
        )}

        {query && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg mb-2">No guides found for &quot;{query}&quot;</p>
            <p className="text-gray-400">Try a different search term or browse our <Link href="/" className="text-[#1D9E75] underline">homepage</Link>.</p>
          </div>
        )}

        {results.length > 0 && (
          <div className="space-y-4">
            {results.map((article) => (
              <Link
                key={article.slug}
                href={`/${article.slug}`}
                className="block p-6 border border-gray-200 rounded-lg hover:border-[#1D9E75] hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-[#0F6E56] bg-[#E1F5EE] px-2 py-0.5 rounded">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.readTime}</span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">{article.title}</h2>
                <p className="text-sm text-gray-600">{article.description}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <div className="py-12" style={{ backgroundColor: '#0D3D30' }}>
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-3xl font-bold text-white">Search Results</h1>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-4 py-8 text-center text-gray-400">Loading...</div>
      </div>
    }>
      <SearchResults />
    </Suspense>
  )
}
