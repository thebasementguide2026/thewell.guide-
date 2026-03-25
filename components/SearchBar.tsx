'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { searchArticles, type Article } from '@/lib/articles'

export default function SearchBar({ onClose }: { onClose?: () => void }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Article[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    if (query.length >= 2) {
      setResults(searchArticles(query).slice(0, 6))
      setIsOpen(true)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (query.trim()) {
      setIsOpen(false)
      onClose?.()
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search guides..."
            className="w-full pl-10 pr-4 py-2 text-sm border border-white/20 rounded-lg bg-white/10 text-white placeholder-white/40 focus:bg-white/15 focus:border-[#5DCAA5] focus:ring-1 focus:ring-[#5DCAA5] outline-none transition-colors"
          />
          {query && (
            <button
              type="button"
              onClick={() => { setQuery(''); setResults([]); setIsOpen(false) }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
      </form>

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
          {results.map((article) => (
            <Link
              key={article.slug}
              href={`/${article.slug}`}
              onClick={() => { setIsOpen(false); onClose?.() }}
              className="block px-4 py-3 hover:bg-gray-50 border-b border-gray-100 last:border-b-0 transition-colors"
            >
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-xs font-medium text-[#0F6E56] bg-[#E1F5EE] px-1.5 py-0.5 rounded">{article.category}</span>
                <span className="text-xs text-gray-400">{article.readTime}</span>
              </div>
              <div className="text-sm font-medium text-gray-900">{article.title}</div>
            </Link>
          ))}
          <Link
            href={`/search?q=${encodeURIComponent(query)}`}
            onClick={() => { setIsOpen(false); onClose?.() }}
            className="block px-4 py-2.5 text-center text-sm font-medium text-[#1D9E75] bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            View all results for &quot;{query}&quot;
          </Link>
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 p-4 z-50">
          <p className="text-gray-500 text-sm">No guides found for &quot;{query}&quot;</p>
          <p className="text-gray-400 text-xs mt-1">Try a different search term</p>
        </div>
      )}
    </div>
  )
}
