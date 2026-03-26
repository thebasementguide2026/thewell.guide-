// Networx Task ID mapping for each article on thewell.guide
// Rule: when in doubt, add MORE task IDs for broader coverage

// Default task IDs applied to ALL articles (core well/water services)
const DEFAULT_TASK_IDS = [138, 139, 130]
// 138 = Well Water Line Repair
// 139 = Water Treatment / Purification
// 130 = Plumbing (General)

export const FALLBACK_TASK_IDS = DEFAULT_TASK_IDS

export const TASK_ID_MAP: Record<string, number[]> = {
  // Guides
  'complete-well-guide': [...DEFAULT_TASK_IDS, 461, 232],
  'how-to-test-well-water': [...DEFAULT_TASK_IDS, 461],
  'how-well-pump-works': [...DEFAULT_TASK_IDS, 461, 232],
  'well-maintenance-checklist': [...DEFAULT_TASK_IDS, 461, 232],

  // Cost Guides
  'well-pump-replacement-cost': [...DEFAULT_TASK_IDS, 232, 461],
  'well-water-testing-cost': [...DEFAULT_TASK_IDS, 461],

  // Problems
  'well-water-smells-like-sulfur': [...DEFAULT_TASK_IDS, 461],
  'well-water-pressure-low': [...DEFAULT_TASK_IDS, 232, 461, 229],
  'brown-rusty-well-water': [...DEFAULT_TASK_IDS, 461],
  'no-water-from-well': [...DEFAULT_TASK_IDS, 232, 461, 229],
}

export function getTaskIdsForArticle(slug: string): number[] {
  return TASK_ID_MAP[slug] || FALLBACK_TASK_IDS
}
