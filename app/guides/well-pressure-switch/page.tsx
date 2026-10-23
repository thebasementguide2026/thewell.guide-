import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import AuthorBio from '@/components/AuthorBio'

export const metadata: Metadata = {
  "title": "How to Adjust or Replace a Well Pressure Switch | The Well Guide",
  "description": "Step-by-step guide to adjusting your well pressure switch from 30/50 to 40/60, changing the cut-in and cut-out, and replacing a failed switch safely for $20 to $50.",
  "alternates": {
    "canonical": "https://www.thewell.guide/guides/well-pressure-switch"
  },
  "openGraph": {
    "title": "How to Adjust or Replace a Well Pressure Switch",
    "description": "Step-by-step guide to adjusting your well pressure switch from 30/50 to 40/60, changing the cut-in and cut-out, and replacing a failed switch safely for $20 to $50.",
    "url": "https://www.thewell.guide/guides/well-pressure-switch",
    "siteName": "The Well Guide",
    "type": "article",
    "images": [
      {
        "url": "https://www.thewell.guide/well-pressure-switch.jpg",
        "width": 1200,
        "height": 800,
        "alt": "Well pressure switch mounted next to a pressure tank and gauge."
      }
    ]
  }
}
const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Adjust or Replace a Well Pressure Switch",
    "description": "Step-by-step guide to adjusting your well pressure switch from 30/50 to 40/60, changing the cut-in and cut-out, and replacing a failed switch safely for $20 to $50.",
    "author": {
      "@type": "Organization",
      "name": "The Well Guide Editorial Team",
      "url": "https://www.thewell.guide"
    },
    "publisher": {
      "@type": "Organization",
      "name": "The Well Guide",
      "url": "https://www.thewell.guide"
    },
    "datePublished": "2026-10-22",
    "dateModified": "2026-10-22",
    "image": "https://www.thewell.guide/well-pressure-switch.jpg",
    "mainEntityOfPage": "https://www.thewell.guide/guides/well-pressure-switch"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I increase my well water pressure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your system is set to 30/50, raising it to 40/60 is the most common fix. Turn the large nut on the pressure switch clockwise with the power off, then reset the tank's air charge to 2 PSI below the new cut-in. If pressure is low even at normal settings, see our low water pressure guide."
        }
      },
      {
        "@type": "Question",
        "name": "Which nut on the pressure switch does what?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The large nut moves both the cut-in and the cut-out together. The small nut changes only the cut-out. Clockwise raises pressure and counterclockwise lowers it."
        }
      },
      {
        "@type": "Question",
        "name": "What should my well pressure switch be set to?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most homes use 30/50 or 40/60. 40/60 gives stronger pressure and is the most common setting today. Your pump and tank need to be able to handle it."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a well pressure switch last?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Many last years, but the contacts wear with every pump cycle, and sediment or insects can cause failure sooner. Short-cycling wears a switch out much faster."
        }
      },
      {
        "@type": "Question",
        "name": "How much does it cost to replace a well pressure switch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The switch costs $20 to $50, and a homeowner can install it in about 30 minutes. A contractor typically charges $150 to $300 including parts and labor."
        }
      },
      {
        "@type": "Question",
        "name": "Can I replace a pressure switch myself?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, if you're comfortable with basic wiring. Turn off the breaker, confirm the power is dead with a tester, photograph the wiring, and follow the steps above."
        }
      },
      {
        "@type": "Question",
        "name": "Why does my pump keep running after I adjusted the switch?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The cut-out is probably set higher than the pump can reach. Turn off the power and lower it a turn at a time until the pump shuts off normally."
        }
      },
      {
        "@type": "Question",
        "name": "What does the lever on my pressure switch do?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It's a low-pressure cutoff. It shuts off the pump if pressure drops about 10 PSI below the cut-in. Hold the lever in the start position until the pressure builds to restart it."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Adjust a Well Pressure Switch",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Turn off the pump's breaker. It's a double-pole breaker, usually labeled \"well\" or \"pump.\""
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Remove the switch cover. It's usually held on by one nut on top."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Confirm the power is dead. Hold a non-contact voltage tester near the wire terminals. If it beeps or lights up, stop and find the right breaker."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Raise the cut-in and cut-out together. Turn the large nut clockwise. Make small changes, one full turn at a time."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Put the cover back on and turn the breaker on. Open a faucet and watch the gauge through a full cycle to see where the pump now turns on and off."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "text": "Repeat until you hit your target. Breaker off, confirm dead, adjust, breaker on, test. Never adjust with the power on."
      },
      {
        "@type": "HowToStep",
        "position": 7,
        "text": "Adjust the cut-out only if needed. If you want to change the gap, turn the small nut clockwise to raise the cut-out only. Keep the gap at 20 PSI unless your tank manufacturer says otherwise."
      },
      {
        "@type": "HowToStep",
        "position": 8,
        "text": "Reset the tank's air charge if you changed the cut-in. See the next section."
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Replace a Well Pressure Switch",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Turn off the pump's breaker and confirm the power is dead with a voltage tester."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Drain the system. Open a faucet until the pressure gauge reads zero."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Photograph the wiring before touching anything, then label each wire."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Disconnect the wires from the terminals."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Unscrew the old switch from its fitting. Hold the fitting below it with a second wrench so you don't twist the pipe."
      },
      {
        "@type": "HowToStep",
        "position": 6,
        "text": "Clean or replace the fitting under the switch. Sediment clogs this port and causes many switch problems. If it's crusted or rusted, replace the fitting."
      },
      {
        "@type": "HowToStep",
        "position": 7,
        "text": "Apply pipe thread sealant to the fitting threads and screw on the new switch hand-tight, then snug it with a wrench."
      },
      {
        "@type": "HowToStep",
        "position": 8,
        "text": "Reconnect the wires exactly as they were: breaker cable to LINE, pump cable to LOAD, grounds to the green screw. Tighten each terminal."
      },
      {
        "@type": "HowToStep",
        "position": 9,
        "text": "Put the cover on, turn the breaker on, and watch a full cycle on the gauge. Check the fitting for leaks."
      },
      {
        "@type": "HowToStep",
        "position": 10,
        "text": "Set the tank's air charge to 2 PSI below the new cut-in, as described above."
      }
    ]
  }
]
const faqs = [
  {
    "question": "How do I increase my well water pressure?",
    "answer": "If your system is set to 30/50, raising it to 40/60 is the most common fix. Turn the large nut on the pressure switch clockwise with the power off, then reset the tank's air charge to 2 PSI below the new cut-in. If pressure is low even at normal settings, see our low water pressure guide.",
    "answerHtml": "If your system is set to 30/50, raising it to 40/60 is the most common fix. Turn the large nut on the pressure switch clockwise with the power off, then reset the tank&#39;s air charge to 2 PSI below the new cut-in. If pressure is low even at normal settings, see our <a class=\"text-[#1D9E75] underline\" href=\"/problems/well-water-pressure-low\">low water pressure guide</a>."
  },
  {
    "question": "Which nut on the pressure switch does what?",
    "answer": "The large nut moves both the cut-in and the cut-out together. The small nut changes only the cut-out. Clockwise raises pressure and counterclockwise lowers it.",
    "answerHtml": "The large nut moves both the cut-in and the cut-out together. The small nut changes only the cut-out. Clockwise raises pressure and counterclockwise lowers it."
  },
  {
    "question": "What should my well pressure switch be set to?",
    "answer": "Most homes use 30/50 or 40/60. 40/60 gives stronger pressure and is the most common setting today. Your pump and tank need to be able to handle it.",
    "answerHtml": "Most homes use 30/50 or 40/60. 40/60 gives stronger pressure and is the most common setting today. Your pump and tank need to be able to handle it."
  },
  {
    "question": "How long does a well pressure switch last?",
    "answer": "Many last years, but the contacts wear with every pump cycle, and sediment or insects can cause failure sooner. Short-cycling wears a switch out much faster.",
    "answerHtml": "Many last years, but the contacts wear with every pump cycle, and sediment or insects can cause failure sooner. Short-cycling wears a switch out much faster."
  },
  {
    "question": "How much does it cost to replace a well pressure switch?",
    "answer": "The switch costs $20 to $50, and a homeowner can install it in about 30 minutes. A contractor typically charges $150 to $300 including parts and labor.",
    "answerHtml": "The switch costs $20 to $50, and a homeowner can install it in about 30 minutes. A contractor typically charges $150 to $300 including parts and labor."
  },
  {
    "question": "Can I replace a pressure switch myself?",
    "answer": "Yes, if you're comfortable with basic wiring. Turn off the breaker, confirm the power is dead with a tester, photograph the wiring, and follow the steps above.",
    "answerHtml": "Yes, if you&#39;re comfortable with basic wiring. Turn off the breaker, confirm the power is dead with a tester, photograph the wiring, and follow the steps above."
  },
  {
    "question": "Why does my pump keep running after I adjusted the switch?",
    "answer": "The cut-out is probably set higher than the pump can reach. Turn off the power and lower it a turn at a time until the pump shuts off normally.",
    "answerHtml": "The cut-out is probably set higher than the pump can reach. Turn off the power and lower it a turn at a time until the pump shuts off normally."
  },
  {
    "question": "What does the lever on my pressure switch do?",
    "answer": "It's a low-pressure cutoff. It shuts off the pump if pressure drops about 10 PSI below the cut-in. Hold the lever in the start position until the pressure builds to restart it.",
    "answerHtml": "It&#39;s a low-pressure cutoff. It shuts off the pump if pressure drops about 10 PSI below the cut-in. Hold the lever in the start position until the pressure builds to restart it."
  }
]
const beforeForm = "<blockquote class=\"mb-12 rounded-lg p-5 bg-[#E1F5EE] border-l-4 border-[#1D9E75]\">\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>TL;DR</strong></p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>The pressure switch turns your well pump on at the cut-in pressure and off at the cut-out pressure. Most homes are set to 30/50 or 40/60 PSI.</li>\n<li>The large nut raises or lowers both settings together. The small nut changes only the cut-out. Turn clockwise to raise, counterclockwise to lower.</li>\n<li>After changing the cut-in, reset the pressure tank&#39;s air charge to 2 PSI below it. Skip this and the pump will short-cycle.</li>\n<li>A new switch costs $20 to $50 and takes about 30 minutes to install. A contractor typically charges $150 to $300.</li>\n<li>The switch carries 240V. Turn off the breaker and confirm the power is dead before you open the cover.</li>\n</ul>\n</blockquote>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">The pressure switch is the small gray box on the pipe near your pressure tank. It&#39;s the brain of a well system: it watches the water pressure and tells the pump when to run. Most of the time you never think about it. But if you want stronger water pressure, or the pump won&#39;t turn on or off, the switch is usually the first thing to adjust or replace.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">The Adjust-or-Replace Rule</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Match what&#39;s going on to the right fix:</p>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[760px] text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">What&#39;s happening</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">What to do</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Water pressure works but feels weak, and the switch is in good shape</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Adjust the switch, for example from 30/50 to 40/60</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Pump turns on and off every few seconds</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Check the tank&#39;s air charge first. Adjusting the switch rarely fixes this. See <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/well-pump-short-cycling\">well pump short cycling</a>.</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Pump won&#39;t turn on, and tapping the switch cover makes it start</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replace the switch. The contacts are worn.</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Pump won&#39;t shut off</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Check for a leak or a clogged sensing port, then replace the switch if the contacts are stuck. See <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/well-pump-running-constantly\">well pump running constantly</a>.</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Switch chatters or buzzes</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replace it, and check the sensing port for clogs</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Burned, pitted, or melted contacts, or bugs inside</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replace it</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Switch froze and cracked</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replace it. See <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/frozen-well-pipes\">frozen well pipes</a>.</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Pressure is low everywhere and the switch settings are normal</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">The switch may not be the problem. See <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/well-water-pressure-low\">low well water pressure</a>.</td>\n</tr>\n</tbody></table></div>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">5-Minute Diagnostic: Check Your Switch and Settings</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">You&#39;ll need a flashlight and a pen. Don&#39;t open the switch yet.</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Read the settings.</strong> The cut-in and cut-out are usually printed on the switch cover or a label, such as &quot;30/50&quot; or &quot;40/60.&quot;</li>\n<li><strong>Watch a full cycle.</strong> Open a faucet and watch the pressure gauge near the tank. Note where the pump turns on (cut-in) and where it shuts off (cut-out). They should be close to the printed settings.</li>\n<li><strong>Check the gap.</strong> Cut-out minus cut-in is the differential. It&#39;s normally 20 PSI.</li>\n<li><strong>Look for a lever on the side of the switch.</strong> If there&#39;s one, you have a low-pressure cutoff switch, covered below.</li>\n<li><strong>Note the brand and model.</strong> Square D is the most common. The model number is on the label inside or on the side of the cover.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">If the gauge reads very differently from the printed settings, the gauge itself may have failed. Gauges are cheap and wear out, so replace one if it sticks or reads zero with water flowing. A <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B08V4JgZl\" rel=\"sponsored nofollow\" target=\"_blank\">0 to 100 PSI pressure gauge</a> with a 1/4-inch threaded fitting fits most systems. To swap it, turn off the pump&#39;s breaker, drain the system to zero, unscrew the old gauge, wrap the threads with sealant, and screw in the new one.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">How a Pressure Switch Works</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Inside the cover are two springs on threaded posts, each with a nut:</p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Large nut (range spring):</strong> Moves both the cut-in and the cut-out up or down together. Turning it doesn&#39;t change the gap between them.</li>\n<li><strong>Small nut (differential spring):</strong> Changes only the cut-out, which widens or narrows the gap.</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Turning either nut <strong>clockwise raises</strong> pressure. Turning it <strong>counterclockwise lowers</strong> it. Some switches have only the large nut, so the gap can&#39;t be changed.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">These directions apply to Square D Pumptrol switches, the most common type. Other brands, such as Hubbell (Furnas), and the controllers on constant-pressure systems adjust differently. If your switch isn&#39;t a Square D, follow its own instructions, usually printed inside the cover.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Under the switch is a small sensing port, a 1/4-inch fitting where water pressure pushes on a diaphragm. If that port clogs with sediment or freezes, the switch can&#39;t read the pressure correctly.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">How to Adjust a Well Pressure Switch</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">The most common change is raising the pressure from 30/50 to 40/60 for stronger water pressure. Here&#39;s how.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Before You Start</h3>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Check what your system can handle.</strong> Square D&#39;s standard switches go up to a 65 PSI cut-out. Your pump must be able to reach the new cut-out, and the cut-out must stay well below your pressure relief valve&#39;s rating (often 75 to 100 PSI, printed on the valve). If the pump can&#39;t reach the cut-out, it will run constantly.</li>\n<li><strong>Have a voltage tester ready.</strong> You&#39;ll use it to confirm the power is off.</li>\n</ul>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Step-by-Step</h3>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Turn off the pump&#39;s breaker.</strong> It&#39;s a double-pole breaker, usually labeled &quot;well&quot; or &quot;pump.&quot;</li>\n<li><strong>Remove the switch cover.</strong> It&#39;s usually held on by one nut on top.</li>\n<li><strong>Confirm the power is dead.</strong> Hold a non-contact voltage tester near the wire terminals. If it beeps or lights up, stop and find the right breaker.</li>\n<li><strong>Raise the cut-in and cut-out together.</strong> Turn the large nut clockwise. Make small changes, one full turn at a time.</li>\n<li><strong>Put the cover back on and turn the breaker on.</strong> Open a faucet and watch the gauge through a full cycle to see where the pump now turns on and off.</li>\n<li><strong>Repeat until you hit your target.</strong> Breaker off, confirm dead, adjust, breaker on, test. Never adjust with the power on.</li>\n<li><strong>Adjust the cut-out only if needed.</strong> If you want to change the gap, turn the small nut clockwise to raise the cut-out only. Keep the gap at 20 PSI unless your tank manufacturer says otherwise.</li>\n<li><strong>Reset the tank&#39;s air charge</strong> if you changed the cut-in. See the next section.</li>\n</ol>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Reset the Pressure Tank Air Charge</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">This step is what most people skip, and it&#39;s why the pump starts short-cycling after an adjustment.</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>Turn off the pump&#39;s breaker.</li>\n<li>Open a faucet and drain the system until the pressure gauge reads zero.</li>\n<li>Check the air valve on top of the tank (it looks like a tire valve) with a tire pressure gauge.</li>\n<li>Adjust it to 2 PSI below your new cut-in. For a 40/60 setting, that&#39;s 38 PSI. To add air, use a bike pump or a portable air inflator. To release air, press the pin in the center of the valve briefly, then recheck.</li>\n<li>Close the faucet and turn the breaker back on.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Our <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/guides/well-pressure-tank-guide\">pressure tank guide</a> covers the air charge in more detail.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Low-Pressure Cutoff Switches</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Some pressure switches have a lever on the side. That&#39;s a low-pressure cutoff. If pressure drops about 10 PSI below the cut-in, which happens when a well runs dry or a pipe bursts, the switch shuts the pump off so it doesn&#39;t run dry and burn out.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>To restart after a cutoff:</strong> fix the cause first, then hold the lever in the start position until the pressure climbs past the cut-in, and release it.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">If the cutoff trips often, the well may be running low. See <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/well-running-dry\">well running dry</a>. If you&#39;re replacing a switch and your well has ever run low, upgrading to a low-pressure cutoff model is cheap insurance for a pump that costs far more to replace.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">How to Replace a Well Pressure Switch</h2>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Choose the Right Replacement</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Match these to your old switch:</p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Pressure setting:</strong> 30/50 or 40/60. You can adjust within the switch&#39;s range later.</li>\n<li><strong>Low-pressure cutoff:</strong> get one if your old switch had a lever, or if you want the protection.</li>\n<li><strong>Voltage:</strong> most well pumps are 240V. Standard switches handle both 120V and 240V, but confirm on the box.</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">The <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B08ba6bCh\" rel=\"sponsored nofollow\" target=\"_blank\">Square D Pumptrol 9013FSG2J21</a> (30/50), <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B07CPo3w6\" rel=\"sponsored nofollow\" target=\"_blank\">Square D Pumptrol 9013FSG2J24</a> (40/60), and <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B0c0ttNhl\" rel=\"sponsored nofollow\" target=\"_blank\">Square D Pumptrol 9013FSG2J24M4</a> (40/60 with low-pressure cutoff) cover most homes.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Understand the Wiring</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">A standard pressure switch has four wire terminals and a ground screw:</p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>LINE terminals (2):</strong> bring power in from the breaker. On a Square D switch they&#39;re usually the two outer terminals, marked LINE.</li>\n<li><strong>LOAD terminals (2):</strong> send power out to the pump, or to the control box on a 3-wire pump. They&#39;re usually the two inner terminals, marked LOAD or MOTOR.</li>\n<li><strong>Ground screw (green):</strong> the bare or green ground wires from both cables attach here.</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Each cable has two insulated wires. The cable from the breaker goes to LINE, and the cable to the pump or control box goes to LOAD. Mixing them up is the most common replacement mistake. The switch may still work, but the LOAD terminals stay live even when the switch turns the pump off, and the low-pressure cutoff won&#39;t work correctly.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Step-by-Step</h3>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Turn off the pump&#39;s breaker</strong> and confirm the power is dead with a voltage tester.</li>\n<li><strong>Drain the system.</strong> Open a faucet until the pressure gauge reads zero.</li>\n<li><strong>Photograph the wiring</strong> before touching anything, then label each wire.</li>\n<li><strong>Disconnect the wires</strong> from the terminals.</li>\n<li><strong>Unscrew the old switch</strong> from its fitting. Hold the fitting below it with a second wrench so you don&#39;t twist the pipe.</li>\n<li><strong>Clean or replace the fitting under the switch.</strong> Sediment clogs this port and causes many switch problems. If it&#39;s crusted or rusted, replace the fitting.</li>\n<li><strong>Apply pipe thread sealant</strong> to the fitting threads and screw on the new switch hand-tight, then snug it with a wrench.</li>\n<li><strong>Reconnect the wires</strong> exactly as they were: breaker cable to LINE, pump cable to LOAD, grounds to the green screw. Tighten each terminal.</li>\n<li><strong>Put the cover on, turn the breaker on, and watch a full cycle</strong> on the gauge. Check the fitting for leaks.</li>\n<li><strong>Set the tank&#39;s air charge</strong> to 2 PSI below the new cut-in, as described above.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">If anything about the wiring looks different from your photo, or the wires are scorched, stop and call a pro.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">What to Buy</h2>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[760px] text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Product</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">What it&#39;s for</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Price tier</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B08ba6bCh\" rel=\"sponsored nofollow\" target=\"_blank\">Square D Pumptrol 9013FSG2J21 (30/50)</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Standard replacement switch, 30/50 setting</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B07CPo3w6\" rel=\"sponsored nofollow\" target=\"_blank\">Square D Pumptrol 9013FSG2J24 (40/60)</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Standard replacement switch, 40/60 setting</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B0c0ttNhl\" rel=\"sponsored nofollow\" target=\"_blank\">Square D Pumptrol 9013FSG2J24M4 (40/60, low-pressure cutoff)</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Protects the pump if the well runs low or a pipe bursts</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B04NuSR36\" rel=\"sponsored nofollow\" target=\"_blank\">Klein Tools NCVT1P Non-Contact Voltage Tester</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Confirms the power is off before you touch anything</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B06ocZvuf\" rel=\"sponsored nofollow\" target=\"_blank\">Digital Tire Pressure Gauge</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Checks and sets the tank&#39;s air charge</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B08NYigfV\" rel=\"sponsored nofollow\" target=\"_blank\">RectorSeal T Plus 2 Pipe Thread Sealant</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Seals the switch fitting threads</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B08V4JgZl\" rel=\"sponsored nofollow\" target=\"_blank\">0 to 100 PSI Well Pressure Gauge</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replaces a stuck or inaccurate system gauge</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Portable Air Inflator</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Adds air to the pressure tank when setting the air charge</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$$</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>If you&#39;re replacing a switch,</strong> get the voltage tester even if you have one somewhere. It&#39;s the step that keeps this a safe DIY job.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Cost Breakdown and 10-Year Total Cost of Ownership</h2>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[760px] text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Option</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Upfront cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Ongoing cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">10-year total cost</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Adjust the switch yourself</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$0, or about $15 to $30 for a voltage tester and tire gauge</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">None</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$0 to $30</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replace the switch yourself</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$20 to $50 for the switch, plus a few dollars in sealant</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Switches can wear out, so you may replace it again</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About $40 to $100</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Hire a contractor to replace it</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$150 to $300 including parts and labor</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Same</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About $150 to $600</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Upgrade to a low-pressure cutoff switch</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">A little more than a standard switch</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">None</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Small compared with one pump replacement. See our <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/cost-guides/well-pump-replacement-cost\">well pump replacement cost guide</a>.</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Adjusting and replacing a switch are two of the cheapest well repairs there are. The real cost risk is ignoring a failing switch until the pump runs dry or burns out.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Common Mistakes</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Adjusting with the power on.</strong> The terminals carry 240V, a few inches from your fingers and next to water pipes. Breaker off and test every time.</li>\n<li><strong>Skipping the tank air charge.</strong> Raise the cut-in without resetting the tank, and the pump will short-cycle.</li>\n<li><strong>Using adjustment to fix short-cycling.</strong> Short-cycling is almost always a tank problem. Turning the nuts won&#39;t fix it.</li>\n<li><strong>Setting the cut-out higher than the pump can reach.</strong> The pump will run nonstop and can overheat. If it never shuts off after an adjustment, turn the power off and lower the setting.</li>\n<li><strong>Cranking the nut several turns at once.</strong> Small changes and a test after each one.</li>\n<li><strong>Twisting the pipe when removing the switch.</strong> Use a second wrench to hold the fitting.</li>\n<li><strong>Ignoring a clogged sensing port.</strong> A new switch on a clogged fitting will fail the same way. Clean or replace the fitting.</li>\n<li><strong>Losing track of the wiring.</strong> Take a photo before you disconnect anything.</li>\n<li><strong>Swapping LINE and LOAD.</strong> The breaker cable goes to LINE and the pump cable goes to LOAD. Swapped wires leave parts of the switch live when they shouldn&#39;t be.</li>\n<li><strong>Following Square D directions on a different switch.</strong> Other brands adjust differently. Check the instructions inside the cover.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">When to Call a Pro</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>You&#39;re not comfortable working near a 240V circuit</li>\n<li>Wires are scorched, melted, or don&#39;t match the diagram</li>\n<li>The switch is fine but the pump still won&#39;t run</li>\n<li>You want to go above 60 PSI, or aren&#39;t sure what your pump and tank can handle</li>\n<li>You&#39;re considering a constant-pressure system instead of a standard switch</li>\n<li>The fitting or pipe below the switch is badly corroded</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">DIY-friendly: reading the settings, adjusting the nuts with the power off, setting the tank&#39;s air charge, and replacing the switch for most homeowners comfortable with basic wiring.</p>\n"
const afterForm = ""
const glossary = "<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Pressure switch:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The control that turns the well pump on and off based on water pressure.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Cut-in pressure:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The pressure at which the switch turns the pump on.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Cut-out pressure:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The pressure at which the switch turns the pump off.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Differential:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The gap between cut-in and cut-out, usually 20 PSI.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Range nut:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The large nut that moves both settings together.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Differential nut:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The small nut that changes only the cut-out.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Sensing port:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The small fitting under the switch where water pressure reaches the switch's diaphragm.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Low-pressure cutoff:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A switch feature that shuts the pump off if pressure drops too low.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Air charge (pre-charge):</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The air pressure inside the pressure tank, set 2 PSI below the cut-in.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Pressure relief valve:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A safety valve that releases water if system pressure gets dangerously high.</dd></div>"
const related = "<a href=\"/guides/well-pressure-tank-guide\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pressure Tank Guide</a>\n<a href=\"/problems/well-water-pressure-low\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Low Well Water Pressure</a>\n<a href=\"/problems/well-pump-short-cycling\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pump Short Cycling</a>\n<a href=\"/problems/well-pump-running-constantly\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pump Running Constantly</a>\n<a href=\"/problems/no-water-from-well\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">No Water From Well</a>\n<a href=\"/problems/frozen-well-pipes\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Frozen Well Pipes</a>\n<a href=\"/problems/well-running-dry\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Running Dry</a>\n<a href=\"/guides/how-well-pump-works\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">How a Well Pump Works</a>"

export default function WellPressureSwitchPage() {
  return (
    <>
      {schemas.map((schema, index) => <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Well Pressure Switch' }]} />
      <article className="w-full min-w-0 max-w-4xl mx-auto px-4 py-12">
        <span className="font-bold tracking-[0.3em] text-sm uppercase text-[#0F6E56]">Guide</span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 mt-4 leading-tight tracking-tight">{"How to Adjust or Replace a Well Pressure Switch"}</h1>
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-[#1D9E75]">WG</div>
          <div><p className="text-slate-900 font-semibold">The Well Guide</p><p className="text-slate-500 text-sm">Updated October 22, 2026 &middot; 11 min read</p></div>
        </div>
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-8">
          <Image src="/well-pressure-switch.jpg" alt="Well pressure switch mounted next to a pressure tank and gauge." fill className="object-cover" priority sizes="(max-width: 896px) 100vw, 864px" />
        </div>
        <p className="text-slate-500 text-xs mb-8">Some links on this page are affiliate links. If you purchase through them, we may earn a small commission at no extra cost to you. This does not affect our recommendations. <Link href="/affiliate-disclosure" className="text-[#1D9E75] underline">Affiliate disclosure</Link>.</p>
        <div dangerouslySetInnerHTML={{ __html: beforeForm }} />
        <section className="py-12 bg-[#E1F5EE] rounded-2xl mt-12">
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0F6E56] text-center mb-3">Get Expert Well Help</h2>
            <p className="text-gray-600 text-center mb-8">Connect with qualified well professionals in your area. Free quotes, no obligation.</p>
            <LeadForm defaultProjectType="232" />
          </div>
        </section>
        <div dangerouslySetInnerHTML={{ __html: afterForm }} />
        <section className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqs.map(faq => <div key={faq.question} className="bg-white border border-slate-200 rounded-lg p-5"><h3 className="font-bold text-slate-900 text-sm mb-2">{faq.question}</h3><p className="text-slate-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.answerHtml }} /></div>)}</div>
        </section>
        <section className="mb-16"><h2 className="text-2xl font-bold text-slate-900 mb-6">Glossary</h2><dl className="space-y-4" dangerouslySetInnerHTML={{ __html: glossary }} /></section>
        <section className="mb-16"><h2 className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2><div className="grid md:grid-cols-2 gap-4" dangerouslySetInnerHTML={{ __html: related }} /></section>
        <AuthorBio />
      </article>
    </>
  )
}
