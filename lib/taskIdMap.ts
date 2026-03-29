// Networx Task ID mapping for each article on thewell.guide
// Rule: when in doubt, add MORE task IDs for broader coverage

// Default task IDs applied to ALL articles (core well/water services)
const DEFAULT_TASK_IDS = [138, 139, 130]
// 138 = Water Line
// 139 = Water Treatment / Purification
// 130 = Plumbing (General)

export const FALLBACK_TASK_IDS = DEFAULT_TASK_IDS

export const TASK_ID_MAP: Record<string, number[]> = {
  // Guides
  'complete-well-guide': [...DEFAULT_TASK_IDS, 461, 232],
  'how-to-test-well-water': [...DEFAULT_TASK_IDS, 461],
  'how-well-pump-works': [...DEFAULT_TASK_IDS, 461, 232],
  'well-maintenance-checklist': [...DEFAULT_TASK_IDS, 461, 232],
  'buying-house-with-well': [...DEFAULT_TASK_IDS, 461, 283],
  'dug-well-vs-drilled-well': [...DEFAULT_TASK_IDS, 461, 232],
  'hard-water-well': [...DEFAULT_TASK_IDS, 461],
  'how-to-shock-chlorinate-well': [...DEFAULT_TASK_IDS, 461],
  'well-pressure-tank-guide': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'well-pump-maintenance': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'well-water-contaminants': [...DEFAULT_TASK_IDS, 461],
  'well-water-treatment-options': [...DEFAULT_TASK_IDS, 461],
  'well-water-vs-city-water': [...DEFAULT_TASK_IDS, 461],

  // Cost Guides
  'well-pump-replacement-cost': [...DEFAULT_TASK_IDS, 232, 461],
  'well-water-testing-cost': [...DEFAULT_TASK_IDS, 461],
  'pressure-tank-replacement-cost': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'well-drilling-cost': [...DEFAULT_TASK_IDS, 232, 461],
  'whole-house-water-filter-cost': [...DEFAULT_TASK_IDS, 461],

  // Problems
  'well-water-smells-like-sulfur': [...DEFAULT_TASK_IDS, 461],
  'well-water-pressure-low': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'brown-rusty-well-water': [...DEFAULT_TASK_IDS, 461],
  'no-water-from-well': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'well-pump-failing': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'well-pump-running-constantly': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'well-pump-short-cycling': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'well-running-dry': [...DEFAULT_TASK_IDS, 232, 461],
  'well-water-tastes-bad': [...DEFAULT_TASK_IDS, 461],

  // Reviews
  'best-pressure-tanks': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'best-well-water-test-kits': [...DEFAULT_TASK_IDS, 461],
  'best-whole-house-water-filters': [...DEFAULT_TASK_IDS, 461],
}

export function getTaskIdsForArticle(slug: string): number[] {
  return TASK_ID_MAP[slug] || FALLBACK_TASK_IDS
}
