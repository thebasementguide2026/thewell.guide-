export interface Article {
  title: string
  description: string
  slug: string
  category: string
  readTime: string
  image?: string
}

export const articles: Article[] = [
  {
    title: 'The Complete Guide to Private Well Water Systems 2026',
    description: 'Everything a well owner needs to know: how wells work, types of wells and pumps, water quality testing, common contaminants including PFAS and bacteria, maintenance schedules, and when to call a pro.',
    slug: 'guides/complete-well-guide',
    category: 'Guide',
    readTime: '18 min read',
    image: '/wellguidehero.jpg',
  },
  {
    title: 'Well Water Smells Like Sulfur or Rotten Eggs: Causes and Fixes',
    description: 'If your well water smells like sulfur or rotten eggs, the cause is hydrogen sulfide gas — but where it comes from determines how you fix it. Covers all four sources, diagnosis, and every treatment option.',
    slug: 'problems/well-water-smells-like-sulfur',
    category: 'Problem',
    readTime: '14 min read',
    image: '/glassofwater.jpg',
  },
  {
    title: 'Well Water Pressure Low: 6 Causes and How to Fix Each One',
    description: 'Low well water pressure has six distinct causes — waterlogged pressure tank, failing pump, dropping water table, clogged well screen, faulty pressure switch, or clogged filters — and each requires a different fix.',
    slug: 'problems/well-water-pressure-low',
    category: 'Problem',
    readTime: '15 min read',
    image: '/well pressure.jpg',
  },
  {
    title: 'Well Pump Replacement Cost 2026: What You\'ll Actually Pay',
    description: 'Well pump replacement costs $1,500 to $4,000 for most residential systems. This guide breaks down every cost factor by depth and pump type, explains when to repair vs replace, and shows how to get an accurate quote.',
    slug: 'cost-guides/well-pump-replacement-cost',
    category: 'Cost Guide',
    readTime: '14 min read',
    image: '/well cost.jpg',
  },
  {
    title: 'Well Water Testing: What to Test For and When',
    description: 'How often to test, which contaminants matter, and what to do if results are bad.',
    slug: 'guides/well-water-testing',
    category: 'Guide',
    readTime: '12 min read',
  },
  {
    title: 'Well Pump Maintenance Guide',
    description: 'Keep your pump running for decades with these maintenance steps.',
    slug: 'guides/well-pump-maintenance',
    category: 'Guide',
    readTime: '10 min read',
  },
  {
    title: 'How to Shock Chlorinate Your Well',
    description: 'Step-by-step disinfection guide after contamination or flooding.',
    slug: 'guides/how-to-shock-chlorinate-well',
    category: 'Guide',
    readTime: '8 min read',
  },
  {
    title: 'Buying a Home with a Private Well',
    description: 'What to inspect, test, and negotiate before closing on a well property.',
    slug: 'guides/buying-home-with-private-well',
    category: 'Guide',
    readTime: '12 min read',
  },
  {
    title: 'Well Water Pressure Problems',
    description: "Low pressure, no water, or pressure surges — here's what causes them.",
    slug: 'problems/well-water-pressure-problems',
    category: 'Problem',
    readTime: '10 min read',
  },
  {
    title: 'How Much Does Well Water Treatment Cost?',
    description: 'Real pricing for water treatment systems, filters, and ongoing maintenance costs.',
    slug: 'cost-guides/well-water-treatment-cost',
    category: 'Cost Guide',
    readTime: '10 min read',
  },
  {
    title: 'Best Well Water Filters Reviewed',
    description: 'Top-rated whole house water filters for private wells, compared and ranked.',
    slug: 'reviews/best-well-water-filters',
    category: 'Review',
    readTime: '12 min read',
  },
  {
    title: 'Well Pump Replacement Cost',
    description: 'What you will actually pay to replace a well pump, by type and depth.',
    slug: 'cost-guides/well-pump-replacement-cost',
    category: 'Cost Guide',
    readTime: '8 min read',
  },
  {
    title: 'Signs Your Well Pump Is Failing',
    description: 'The warning signs that your well pump is on its way out and what to do about it.',
    slug: 'problems/well-pump-failing',
    category: 'Problem',
    readTime: '8 min read',
  },
  {
    title: 'Best Whole House Well Water Filters',
    description: 'Complete reviews of the best whole house filtration systems for well water.',
    slug: 'reviews/best-whole-house-water-filters',
    category: 'Review',
    readTime: '14 min read',
  },
  {
    title: 'Best Well Water Test Kits',
    description: 'The best at-home and mail-in test kits for private well water.',
    slug: 'reviews/best-well-water-test-kits',
    category: 'Review',
    readTime: '10 min read',
  },
  {
    title: 'Best Pressure Tanks for Wells',
    description: 'Top-rated pressure tanks compared by size, durability, and value.',
    slug: 'reviews/best-pressure-tanks',
    category: 'Review',
    readTime: '10 min read',
  },

  {
    title: 'Well Water Treatment Options',
    description: 'Every treatment method for private well water explained and compared.',
    slug: 'guides/well-water-treatment-options',
    category: 'Guide',
    readTime: '12 min read',
  },
  {
    title: 'Annual Well Maintenance Checklist',
    description: 'The complete seasonal and annual maintenance schedule every well owner needs. Covers spring startup, summer monitoring, fall winterization, and professional inspections — with a printable at-a-glance table, DIY vs. hire-a-pro breakdown, and typical costs.',
    slug: 'guides/well-maintenance-checklist',
    category: 'Guide',
    readTime: '14 min read',
    image: '/well maintance.jpg',
  },
  {
    title: 'Brown or Rusty Well Water: 6 Causes and How to Fix Each One',
    description: 'Brown, orange, or rusty well water is almost always caused by iron, manganese, sediment, corroded pipes, disturbed sediment, or surface water infiltration. The color and timing of the discoloration are the diagnostic keys.',
    slug: 'problems/brown-rusty-well-water',
    category: 'Problem',
    readTime: '15 min read',
    image: '/Well guide brown water.jpg',
  },
  {
    title: 'Well Water Tastes Bad',
    description: 'Common causes of bad-tasting well water and what to do about each one.',
    slug: 'problems/well-water-tastes-bad',
    category: 'Problem',
    readTime: '10 min read',
  },
  {
    title: 'How to Test Your Well Water',
    description: '43 million Americans on private wells are solely responsible for testing their own water. This guide covers what to test for, when to test, how to collect a sample correctly, and what to do when something comes back wrong.',
    slug: 'guides/how-to-test-well-water',
    category: 'Guide',
    readTime: '16 min read',
  },
  {
    title: 'Well Water Testing Cost: What You\'ll Pay in 2026',
    description: 'Well water testing costs range from free to $500 depending on what you test for and where you get it done. Most homeowners spend $50 to $200 for annual testing. This guide breaks down every cost by contaminant type and explains free testing programs by state.',
    slug: 'cost-guides/well-water-testing-cost',
    category: 'Cost Guide',
    readTime: '13 min read',
    image: '/watertestingcost.jpg',
  },
  {
    title: 'How a Well Pump Works: The Complete System Explained',
    description: 'Understanding how a well pump works is the foundation for diagnosing every well problem. This guide explains the full pressure cycle, how submersible and jet pumps differ, what the pressure tank actually does, and what two-wire vs three-wire means for repairs.',
    slug: 'guides/how-well-pump-works',
    category: 'Guide',
    readTime: '14 min read',
    image: '/howwellworks.jpg',
  },
  {
    title: 'No Water from Well: A Step-by-Step Diagnosis Guide',
    description: 'Turned on the tap and got nothing? This guide walks you through every cause of no water from a well in order of likelihood, from a tripped breaker you can fix in 30 seconds to a failed pump that needs a contractor. Do these checks before you call anyone.',
    slug: 'problems/no-water-from-well',
    category: 'Problem',
    readTime: '14 min read',
    image: '/nowaterinwell.jpg',
  },
  {
    title: 'Well Pump Running Constantly: 6 Causes and How to Diagnose Each One',
    description: 'A well pump that won\'t shut off is an emergency. Continuous operation overheats the motor and can destroy a $2,000 pump within hours. This guide shows you how to diagnose every cause in order of likelihood and what to do right now to protect the pump.',
    slug: 'problems/well-pump-running-constantly',
    category: 'Problem',
    readTime: '13 min read',
    image: '/constantlyrunning.jpg',
  },
  {
    title: 'Well Water Contaminants: The Complete Guide for Private Well Owners',
    description: 'A complete reference guide to every contaminant found in private well water. For each contaminant: where it comes from, what it does to health, the EPA limit, which regions are most affected, how to test, and how to treat.',
    slug: 'guides/well-water-contaminants',
    category: 'Guide',
    readTime: '18 min read',
    image: '/wellguidecontaminants.jpg',
  },
]

export function searchArticles(query: string): Article[] {
  const lower = query.toLowerCase()
  const terms = lower.split(/\s+/).filter(Boolean)

  return articles
    .map((article) => {
      const text = `${article.title} ${article.description} ${article.category}`.toLowerCase()
      let score = 0
      for (const term of terms) {
        if (text.includes(term)) score++
      }
      if (article.title.toLowerCase().includes(lower)) score += 3
      if (article.description.toLowerCase().includes(lower)) score += 1
      return { article, score }
    })
    .filter((r) => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((r) => r.article)
}
