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
    title: 'The Complete Guide to Private Well Water Systems (2026)',
    description: 'The definitive guide to private well water systems for homeowners. How wells work, the full system from aquifer to faucet, all 12 components explained, water quality by region, annual maintenance schedule, 10-year cost table, seasonal care, what fails when, and links to every deep-dive guide on well.guide.',
    slug: 'guides/complete-well-guide',
    category: 'Guide',
    readTime: '22 min read',
    image: '/complete-well-guide.jpg',
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
    title: 'Well Drilling Cost: What Homeowners Actually Pay in 2026',
    description: 'The complete well drilling cost guide for 2026. Per-foot drilling rates, all-in system costs by depth, regional price differences, what every contractor quote should include, the hidden costs most homeowners miss, and exactly what questions to ask before you sign.',
    slug: 'cost-guides/well-drilling-cost',
    category: 'Cost Guide',
    readTime: '14 min read',
    image: '/well-drilling-cost.jpg',
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
    title: 'Buying a House With a Well: The Complete Homebuyer\'s Due Diligence Guide',
    description: 'Everything a homebuyer needs to know before purchasing a house with a private well. Well inspection checklist with pass/fail criteria, required water tests by contaminant, loan requirements for FHA/VA/USDA/conventional, negotiating well problems with specific dollar amounts, seller disclosure laws, walk-away conditions, and a 30-day post-closing checklist.',
    slug: 'guides/buying-house-with-well',
    category: 'Guide',
    readTime: '18 min read',
    image: '/buying a home on well.jpg',
  },
  {
    title: 'Well Water vs. City Water: An Honest Comparison for Homeowners',
    description: 'A complete comparison of well water and city water covering cost, quality, taste, health risk, maintenance, reliability, and which is better for your specific situation. Includes side-by-side comparison table, annual cost breakdown, and the honest answer to which is actually safer.',
    slug: 'guides/well-water-vs-city-water',
    category: 'Guide',
    readTime: '14 min read',
    image: '/_well-water-vs-city-water.jpg',
  },
  {
    title: 'Hard Water in Wells: What It Is, What It Costs You, and How to Fix It',
    description: 'The complete guide to hard water in private wells. What hardness levels mean in grains per gallon, how to test for hardness at home, the real cost of untreated hard water on appliances and plumbing, and the correct treatment sequence for wells with both iron and hardness.',
    slug: 'guides/hard-water-well',
    category: 'Guide',
    readTime: '13 min read',
    image: '/hard-water-well.jpg',
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
    title: 'Best Whole House Water Filters for Well Water: 2026 Picks by Contaminant',
    description: 'The best whole house water filters for well water reviewed by contaminant type - iron, sulfur, bacteria, sediment, and comprehensive systems. Real specs, verified Amazon availability, honest limitations, and a complete buying guide so you buy the right system for your actual water test results.',
    slug: 'reviews/best-whole-house-water-filters',
    category: 'Review',
    readTime: '14 min read',
    image: '/waterfilters.jpg',
  },
  {
    title: 'Best Well Water Test Kits (2026): Lab and DIY Options Reviewed',
    description: 'The four best well water test kits for private well owners, reviewed and compared. Includes certified lab tests for annual baseline testing and DIY strips for monitoring between lab tests. All four are available on Amazon with free shipping.',
    slug: 'reviews/best-well-water-test-kits',
    category: 'Review',
    readTime: '14 min read',
    image: '/welltestkits.jpg',
  },
  {
    title: 'Best Pressure Tanks for Wells',
    description: 'Top-rated pressure tanks compared by size, durability, and value.',
    slug: 'reviews/best-pressure-tanks',
    category: 'Review',
    readTime: '10 min read',
  },

  {
    title: 'Well Water Treatment Options: Match the Right System to Your Contaminant',
    description: 'The complete neutral guide to well water treatment. Every treatment technology explained - sediment filters, carbon filters, UV disinfection, water softeners, reverse osmosis, oxidizing filters, and more - with the specific contaminants each removes, what each cannot do, costs, and the treatment sequence that works for well water.',
    slug: 'guides/well-water-treatment-options',
    category: 'Guide',
    readTime: '14 min read',
    image: '/well treatmentoptions.jpg',
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
    title: 'Well Water Tastes Bad: What Each Taste Tells You and How to Fix It',
    description: 'A complete taste-to-cause diagnostic guide for private well water. Every bad taste (metallic, sulfur, earthy, salty, bitter, chemical, sweet) mapped to its specific cause, health risk level, required test, and treatment.',
    slug: 'problems/well-water-tastes-bad',
    category: 'Problem',
    readTime: '12 min read',
    image: '/well tastebad.jpg',
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
  {
    title: 'Well Pump Short Cycling: Causes, Diagnosis, and How to Fix It',
    description: 'A well pump that turns on and off every few seconds is short cycling. The cause is almost always a waterlogged pressure tank. This guide shows you how to diagnose every cause, what to check yourself, and when to call a contractor.',
    slug: 'problems/well-pump-short-cycling',
    category: 'Problem',
    readTime: '12 min read',
    image: '/cycling.jpg',
  },
  {
    title: 'Well Pressure Tank: The Complete Guide for Private Well Owners',
    description: 'Everything a private well owner needs to know about pressure tanks: how they work, the three types, how to size one correctly with the actual formula, the best brands, maintenance schedule, failure signs, and when to replace. The only pressure tank reference you need.',
    slug: 'guides/well-pressure-tank-guide',
    category: 'Guide',
    readTime: '16 min read',
    image: '/pressureguide.jpg',
  },
  {
    title: 'Pressure Tank Replacement Cost: What to Expect in 2026',
    description: 'The complete cost breakdown for well pressure tank replacement: tank prices by size and brand, labor rates, what add-ons are worth it, regional price differences, DIY vs professional, and how to avoid overpaying. Real numbers from 2026 contractor data.',
    slug: 'cost-guides/pressure-tank-replacement-cost',
    category: 'Cost Guide',
    readTime: '11 min read',
    image: '/pressurecost.jpg',
  },
  {
    title: 'Well Running Dry: Diagnose the Cause and Know Exactly What to Do',
    description: 'The complete guide to a well running dry. Learn the four distinct scenarios - temporary drawdown, seasonal water table drop, pump set wrong, and true aquifer depletion - and the specific diagnosis and fix for each.',
    slug: 'problems/well-running-dry',
    category: 'Problem',
    readTime: '13 min read',
    image: '/well dry.png',
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
