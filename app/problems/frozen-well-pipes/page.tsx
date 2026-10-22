import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import AuthorBio from '@/components/AuthorBio'

export const metadata: Metadata = {
  "title": "Frozen Well Pipes: How to Thaw Them and Keep Your Well From Freezing | The Well Guide",
  "description": "No water in a cold snap? Find where your well system froze, thaw it safely, check for damage, and protect the pressure switch, tank, and pipes for under $150.",
  "alternates": {
    "canonical": "https://www.thewell.guide/problems/frozen-well-pipes"
  },
  "openGraph": {
    "title": "Frozen Well Pipes: How to Thaw Them and Keep Your Well From Freezing",
    "description": "No water in a cold snap? Find where your well system froze, thaw it safely, check for damage, and protect the pressure switch, tank, and pipes for under $150.",
    "url": "https://www.thewell.guide/problems/frozen-well-pipes",
    "siteName": "The Well Guide",
    "type": "article",
    "images": [
      {
        "url": "https://www.thewell.guide/frozen-well-pipes.jpg",
        "width": 1200,
        "height": 800,
        "alt": "Frozen pipe and pressure switch next to a well pressure tank."
      }
    ]
  }
}
const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Frozen Well Pipes: How to Thaw Them and Keep Your Well From Freezing",
    "description": "No water in a cold snap? Find where your well system froze, thaw it safely, check for damage, and protect the pressure switch, tank, and pipes for under $150.",
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
    "image": "https://www.thewell.guide/frozen-well-pipes.jpg",
    "mainEntityOfPage": "https://www.thewell.guide/problems/frozen-well-pipes"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do I know if my well pipe is frozen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No water or a sputter on a very cold morning, a pressure gauge near zero, and a pump that won't start are the usual signs. Frost on an exposed pipe confirms it."
        }
      },
      {
        "@type": "Question",
        "name": "Can a well itself freeze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Rarely. The water down in a drilled well stays well above freezing. What freezes is the equipment and pipe near the surface or inside cold buildings."
        }
      },
      {
        "@type": "Question",
        "name": "What part of a well system freezes first?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually the small sensing tube under the pressure switch. It holds very little water, so it freezes before anything else."
        }
      },
      {
        "@type": "Question",
        "name": "Should I turn off my well pump if the pipes are frozen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Turn off the pump's breaker until you've thawed the line, so the pump doesn't run against a blockage and overheat."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to thaw a frozen well line?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A frozen sensing tube usually thaws in 5 to 15 minutes with a hair dryer. Exposed pipe can take 30 minutes to a couple of hours. A buried line needs a contractor."
        }
      },
      {
        "@type": "Question",
        "name": "How do I keep my well house from freezing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Insulate and seal the well house, then plug a small heater into a thermostatic outlet that turns on below about 35°F. Add a Wi-Fi sensor so you get an alert if it fails."
        }
      },
      {
        "@type": "Question",
        "name": "Can a frozen pipe damage my well pump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. A pump that runs against a frozen line can overheat and burn out, and a jet pump can crack if water freezes inside it."
        }
      },
      {
        "@type": "Question",
        "name": "Should I let a faucet drip to keep well pipes from freezing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It helps on the coldest nights, but it makes the pump cycle more often. Fixing the cold spot with insulation, heat cable, or a heated well house is the better long-term fix."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Thawing the Pressure Switch Sensing Tube",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Find the pressure switch. It's usually a gray box mounted on a short pipe near the pressure tank."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "Find the small tube or fitting it sits on."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Warm the tube and the fitting below the switch with a hair dryer for 5 to 15 minutes."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Turn the breaker back on. If the pump starts and the pressure gauge climbs, the tube was the problem."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "If the pump doesn't start, turn the breaker off and keep going."
      }
    ]
  }
]
const faqs = [
  {
    "question": "How do I know if my well pipe is frozen?",
    "answer": "No water or a sputter on a very cold morning, a pressure gauge near zero, and a pump that won't start are the usual signs. Frost on an exposed pipe confirms it."
  },
  {
    "question": "Can a well itself freeze?",
    "answer": "Rarely. The water down in a drilled well stays well above freezing. What freezes is the equipment and pipe near the surface or inside cold buildings."
  },
  {
    "question": "What part of a well system freezes first?",
    "answer": "Usually the small sensing tube under the pressure switch. It holds very little water, so it freezes before anything else."
  },
  {
    "question": "Should I turn off my well pump if the pipes are frozen?",
    "answer": "Yes. Turn off the pump's breaker until you've thawed the line, so the pump doesn't run against a blockage and overheat."
  },
  {
    "question": "How long does it take to thaw a frozen well line?",
    "answer": "A frozen sensing tube usually thaws in 5 to 15 minutes with a hair dryer. Exposed pipe can take 30 minutes to a couple of hours. A buried line needs a contractor."
  },
  {
    "question": "How do I keep my well house from freezing?",
    "answer": "Insulate and seal the well house, then plug a small heater into a thermostatic outlet that turns on below about 35°F. Add a Wi-Fi sensor so you get an alert if it fails."
  },
  {
    "question": "Can a frozen pipe damage my well pump?",
    "answer": "Yes. A pump that runs against a frozen line can overheat and burn out, and a jet pump can crack if water freezes inside it."
  },
  {
    "question": "Should I let a faucet drip to keep well pipes from freezing?",
    "answer": "It helps on the coldest nights, but it makes the pump cycle more often. Fixing the cold spot with insulation, heat cable, or a heated well house is the better long-term fix."
  }
]
const beforeForm = "<blockquote class=\"mb-12 rounded-lg p-5 bg-[#E1F5EE] border-l-4 border-[#1D9E75]\">\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>TL;DR</strong></p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>When a well system freezes, it&#39;s usually the small tube under the pressure switch, the pipe where the water line enters the house, or exposed pipe in a well house. The well itself rarely freezes.</li>\n<li>Turn off the pump&#39;s breaker before you start. A pump running against a frozen line can overheat.</li>\n<li>Thaw with a hair dryer or space heater, starting at the pressure switch tube. Never use an open flame.</li>\n<li>After thawing, check the pressure switch, pressure tank, and pipes for cracks before turning the pump back on.</li>\n<li>A thermostatic outlet, a small heater, heat cable, and pipe insulation protect most systems for under $150.</li>\n</ul>\n</blockquote>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">You turn on the faucet on a frigid morning and get nothing, or a sputter and then nothing. On a well system, that usually means something froze between the well and your faucets. The good news: the freeze is almost always in a spot you can reach, and most frozen well lines thaw without a service call if you work in the right order.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">The Coldest-Point Rule</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Water freezes first wherever the pipe is smallest and the air is coldest. Check these spots in this order:</p>\n<div class=\"overflow-x-auto mb-6\"><table class=\"w-full text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Check</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Why it freezes</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">How often it&#39;s the culprit</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1. Pressure switch sensing tube</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">A 1/4-inch tube with almost no water in it. It chills fastest of anything in the system.</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Most common</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">2. Where the water line enters the house</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">The pipe passes through a cold foundation wall or crawl space</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Common</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">3. Exposed pipe in a well house or pump house</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Unheated or poorly heated small building</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Common if you have one</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">4. Pressure tank and fittings</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Sits in a cold garage, crawl space, or well house</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Less common</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">5. Above-ground pipe at the wellhead</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Some older systems run pipe above grade</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Older systems only</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">6. Buried line between the well and the house</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Only if it&#39;s buried above the frost line</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Rare, and a contractor job</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Start at the top. Most frozen well systems are fixed at step 1 or 2.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">5-Minute Diagnostic: Is It Frozen or Something Else?</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">No water in winter isn&#39;t always a freeze. Run through this first.</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Check the breaker.</strong> If the pump breaker tripped, it&#39;s an electrical problem, not a freeze. Our <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/no-water-from-well\">no water from well guide</a> covers the other causes.</li>\n<li><strong>Look at the pressure gauge.</strong> Near zero with the pump not running points to a frozen sensing tube. The switch can&#39;t tell the pressure is low, so it never calls the pump.</li>\n<li><strong>Listen for the pump.</strong> If a jet pump is running but no water comes out, the line between the pump and the house is likely frozen. Turn off the breaker now.</li>\n<li><strong>Feel the pipes.</strong> Run your hand along exposed pipe near the pressure tank and where the line enters the house. Frost on a pipe or a spot much colder than the rest marks the freeze.</li>\n<li><strong>Check the outdoor temperature history.</strong> A freeze usually follows a night in the single digits or a stretch of days below 20°F, especially with wind.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">If the gauge is near zero, the pump isn&#39;t running, and it&#39;s been bitterly cold, start with the sensing tube.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">How to Thaw a Frozen Well Line</h2>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Before You Start</h3>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Turn off the pump&#39;s breaker.</strong> A submersible pump running against a frozen line can overheat and burn out. Leave it off until you&#39;ve found and thawed the freeze.</li>\n<li><strong>Open a faucet</strong> near the pressure tank so melting water has somewhere to go.</li>\n<li><strong>Keep electricity in mind.</strong> The pressure switch has live high-voltage contacts inside. With the breaker off, it&#39;s safe to warm the outside of the switch and its tube. Don&#39;t open the switch cover with power on.</li>\n</ol>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Thawing the Pressure Switch Sensing Tube</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">This fixes most frozen well systems.</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>Find the pressure switch. It&#39;s usually a gray box mounted on a short pipe near the pressure tank.</li>\n<li>Find the small tube or fitting it sits on.</li>\n<li>Warm the tube and the fitting below the switch with a hair dryer for 5 to 15 minutes.</li>\n<li>Turn the breaker back on. If the pump starts and the pressure gauge climbs, the tube was the problem.</li>\n<li>If the pump doesn&#39;t start, turn the breaker off and keep going.</li>\n</ol>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Thawing Pipe Near the House or Pressure Tank</h3>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>Follow the line from the pressure tank back toward where it enters the house.</li>\n<li>Warm the coldest section with a hair dryer, a heating pad, or a space heater aimed at the pipe from a safe distance.</li>\n<li>Work from the open faucet back toward the frozen spot.</li>\n<li>Once water flows at the open faucet, turn the breaker back on and watch the pressure gauge.</li>\n</ol>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Thawing a Well House</h3>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>Put a space heater in the well house, keeping 3 feet of clearance from walls and anything flammable.</li>\n<li>Close the door and give it time. A small well house can take an hour or more to warm up.</li>\n<li>Check exposed pipe and the pump for cracks once things thaw.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>Never use a torch, propane heater, or any open flame.</strong> Besides the fire risk, a torch can boil water inside the pipe and make it burst. It can also damage plastic fittings and the pressure switch.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>If you can&#39;t find the freeze within an hour or two,</strong> or the line is buried, call a well contractor. A frozen buried line usually means it&#39;s above the frost line and needs a permanent fix.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">How Pros Thaw a Buried Line</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Knowing the methods helps you judge a quote:</p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Hot water thawing.</strong> The contractor disconnects the line at the house and feeds a small tube inside it, pushing warm water through until it reaches the ice and melts it from the inside. This is the most common method for plastic well lines.</li>\n<li><strong>Electric thawing.</strong> A machine runs current through metal pipe to heat it. It only works on metal pipe and should only be done by a pro, since the current can damage wiring and fittings if it&#39;s done wrong.</li>\n<li><strong>Excavation.</strong> If the line is cracked or keeps freezing, the contractor digs it up to repair it and lower it below the frost line.</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Thawing is usually a one-visit job. Excavation is a much bigger project, so ask whether the quote covers thawing only or a permanent fix.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">After It Thaws: Check for Damage</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Freezing can crack parts that only leak once the ice melts. Before you call it fixed:</p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Watch for leaks</strong> at the pressure switch fitting, tank connections, and any pipe you thawed.</li>\n<li><strong>Watch the pressure gauge.</strong> It should climb to the switch&#39;s cut-out pressure (often 50 or 60 PSI), then the pump should shut off. If the pump won&#39;t shut off, see <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/well-pump-running-constantly\">well pump running constantly</a>.</li>\n<li><strong>Listen for short cycling.</strong> A pump that clicks on and off every few seconds can mean the freeze damaged the pressure tank. See <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/well-pump-short-cycling\">well pump short cycling</a> and our <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/guides/well-pressure-tank-guide\">pressure tank guide</a>.</li>\n<li><strong>If you have a jet pump,</strong> a freeze can drain it and make it lose prime. If it runs but won&#39;t build pressure, see <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/how-to-prime-a-well-pump\">how to prime a well pump</a>.</li>\n<li><strong>Check the pressure switch.</strong> If it chatters, won&#39;t kick on, or has visible damage, it likely needs replacing.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">How to Keep Your Well From Freezing</h2>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Insulate Exposed Pipe and the Sensing Tube</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B04IJ5AOl\" rel=\"sponsored nofollow\" target=\"_blank\">Foam pipe insulation</a> on every exposed pipe near the pressure tank and where the line enters the house is the cheapest protection. Wrap the fitting under the pressure switch as well, leaving the switch&#39;s cover and vents clear.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Add Heat Cable to the Problem Spot</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">If the same spot freezes every winter, add self-regulating heat cable like <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B07t742MU\" rel=\"sponsored nofollow\" target=\"_blank\">Easy Heat Freeze Free</a> to that section of pipe and plug it into a GFCI outlet. Self-regulating cable adjusts its output to the temperature and is safer than older constant-wattage tape.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Heat the Well House Automatically</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">For a well house, pump house, or cold crawl space, the standard setup is a small heater plugged into a thermostatically controlled outlet. The <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B04aGEoRY\" rel=\"sponsored nofollow\" target=\"_blank\">Thermo Cube TC-3</a> turns power on at about 35°F and off at about 45°F, so the heater only runs when it&#39;s needed.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>The heater has to have mechanical controls.</strong> A heater with digital buttons usually stays off when power comes back and waits for someone to press a button, so a thermostatic outlet can&#39;t turn it on. A heater with mechanical knobs stays switched on and starts heating the moment the outlet sends power.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Our pick is the <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B09yWWKkN\" rel=\"sponsored nofollow\" target=\"_blank\">De&#39;Longhi TRH0715 Oil-Filled Radiator</a>. It has mechanical controls, no exposed heating element, and holds heat after it cycles off. Its built-in anti-frost setting also gives you a backup thermostat. Set its knobs to on and its own thermostat to high, then let the Thermo Cube do the switching. Plug the heater straight into the Thermo Cube with no extension cord, keep it as the only thing on that outlet, and give it 3 feet of clearance from walls and anything flammable.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Seal gaps in the well house walls and door, and insulate the walls and ceiling if they&#39;re bare. A well house that holds heat costs far less to keep above freezing.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Get an Alert Before It Freezes</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">A Wi-Fi temperature sensor next to the pressure tank or in the well house sends an alert to your phone when the temperature drops. Set it for 40°F so you have time to act. The <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B0h0m2DNZ\" rel=\"sponsored nofollow\" target=\"_blank\">Govee Wi-Fi Thermometer (H5179)</a> runs about $35.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">During a Winter Power Outage</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">A power outage shuts off both the pump and the well house heater, which is when many well systems freeze.</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Keep heat in.</strong> Close the well house door, and add a blanket or insulation board around the pressure tank and pipes if the outage drags on.</li>\n<li><strong>Drain the system if the outage will last.</strong> If temperatures are well below freezing and power won&#39;t be back for a day or more, turn off the pump breaker and open the lowest faucet to drain the pressure tank and lines.</li>\n<li><strong>Run the pump on a generator only through a proper connection.</strong> A well pump needs a generator large enough for its starting load, connected through a transfer switch or interlock installed by an electrician. Never backfeed through an outlet.</li>\n<li><strong>When power returns,</strong> leave the pump breaker off until you&#39;ve checked the pressure switch tube and exposed pipe for ice, then follow the after-thaw checks above.</li>\n</ol>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Fix Lines That Freeze Every Year</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">A buried line that freezes repeatedly is almost always above the frost line. Insulation and heat cable won&#39;t reach it. A well contractor can lower the line, insulate the trench, or reroute it. This is also worth asking about if you&#39;re <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/guides/buying-house-with-well\">buying a house with a well</a> in a cold climate.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">What to Buy</h2>\n<div class=\"overflow-x-auto mb-6\"><table class=\"w-full text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Product</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">What it does</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Where it goes</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Price tier</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B04aGEoRY\" rel=\"sponsored nofollow\" target=\"_blank\">Thermo Cube TC-3</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Turns a heater on only below about 35°F</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Well house, pump house, or crawl space</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B09yWWKkN\" rel=\"sponsored nofollow\" target=\"_blank\">De&#39;Longhi TRH0715 Oil-Filled Radiator</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Steady heat, mechanical controls that work with the Thermo Cube</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Plugged into the Thermo Cube</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B07t742MU\" rel=\"sponsored nofollow\" target=\"_blank\">Easy Heat Freeze Free Heat Cable</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Adds heat to pipe that freezes every year</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">The problem section of pipe</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B04IJ5AOl\" rel=\"sponsored nofollow\" target=\"_blank\">Pipe Insulation</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Slows heat loss on exposed pipe</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Near the pressure tank and where the line enters the house</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B0h0m2DNZ\" rel=\"sponsored nofollow\" target=\"_blank\">Govee Wi-Fi Thermometer (H5179)</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Sends a phone alert when the temperature drops</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Next to the pressure tank</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>If you only buy two things:</strong> the Thermo Cube with a heater if you have a well house, or pipe insulation and the Govee sensor if your equipment is indoors.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Cost Breakdown and 10-Year Total Cost of Ownership</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Typical estimates. Electricity at about 18 cents per kWh.</p>\n<div class=\"overflow-x-auto mb-6\"><table class=\"w-full text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Option</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Upfront cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Ongoing cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">10-year total cost</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Pipe insulation (DIY)</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$15 to $40</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">None</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$15 to $40</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Self-regulating heat cable, one run</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$50 to $120</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About $10 to $20 a year</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$150 to $320</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Thermostatic outlet plus small heater (well house)</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$80 to $170</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Varies with climate and insulation. The heater only runs below about 35°F.</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Depends on your winters, but usually far less than one pump replacement</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Wi-Fi temperature sensor</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$25 to $40</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Batteries</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$35 to $60</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Service call to thaw a frozen line</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Often $150 to $500</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Per event</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Repeats every bad cold snap if nothing changes</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replacing a pressure switch damaged by freezing</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">The part is usually under $60. With a service call, expect a few hundred dollars.</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Per event</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">The most common freeze repair</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Replacing a pump damaged by running against a frozen line</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Often well over $1,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Per event</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">See our <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/cost-guides/well-pump-replacement-cost\">well pump replacement cost guide</a></td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">The pattern: everything above the last two rows costs less than a single service call, and far less than a pump.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Common Mistakes</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Leaving the pump running.</strong> A submersible pump pushing against a frozen line can overheat. Turn off the breaker first.</li>\n<li><strong>Thawing with a torch.</strong> It&#39;s a fire hazard and can crack fittings or damage the pressure switch.</li>\n<li><strong>Opening the pressure switch with power on.</strong> The contacts inside carry high voltage. Breaker off first.</li>\n<li><strong>Forgetting the sensing tube.</strong> People insulate the big pipes and miss the small tube that actually freezes.</li>\n<li><strong>Unplugging the well house heater to save money.</strong> One frozen night costs more than a winter of electricity.</li>\n<li><strong>Using a heater that won&#39;t turn back on by itself.</strong> If the heater needs a button pressed after power returns, a thermostatic outlet can&#39;t control it. Use one with mechanical controls.</li>\n<li><strong>Heating a well house with a light bulb or heat lamp.</strong> It&#39;s a common old trick and a common cause of well house fires. Bulbs burn out without warning, and heat lamps can ignite dust, insulation, or wood. Use a heater with tip-over and overheat protection on a thermostatic outlet instead.</li>\n<li><strong>Assuming it&#39;s fixed once water flows.</strong> Check for leaks and short cycling. Freeze damage often shows up an hour later.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">When to Call a Pro</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>You can&#39;t find the frozen section within an hour or two</li>\n<li>The buried line between the well and the house is frozen</li>\n<li>A pipe, fitting, or the pressure tank cracked</li>\n<li>The pump runs but won&#39;t build pressure after thawing</li>\n<li>The pressure switch is damaged or won&#39;t kick on</li>\n<li>The same line freezes every winter and needs to be lowered or rerouted</li>\n<li>You want a generator connected to run the well pump during outages (an electrician job)</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">DIY-friendly: thawing the sensing tube and exposed pipe, insulating pipe, installing a thermostatic outlet and heater, and adding a temperature sensor.</p>\n"
const glossary = "<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Pressure switch:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The control that turns the pump on when pressure drops and off when it reaches the set point.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Sensing tube:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The small pipe or fitting the pressure switch sits on. Often the first part to freeze.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Cut-in and cut-out pressure:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The pressures at which the switch turns the pump on and off, such as 40 and 60 PSI.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Pressure tank:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The tank that stores pressurized water so the pump doesn't run every time you open a faucet.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Pitless adapter:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The fitting that lets the water line exit the well casing below ground, under the frost line.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Frost line:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The depth to which the ground freezes in winter. Buried water lines need to be below it.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Jet pump:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">An above-ground pump used with shallow wells, often housed in a basement or well house.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Submersible pump:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A pump that sits down inside the well.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Thermostatic outlet:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A plug-in outlet that turns power on and off based on temperature.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Self-regulating heat cable:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">Heat cable that automatically puts out more heat as temperatures drop.</dd></div>"
const related = "<a href=\"/problems/no-water-from-well\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">No Water From Well</a>\n<a href=\"/guides/well-pressure-tank-guide\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pressure Tank Guide</a>\n<a href=\"/problems/well-pump-running-constantly\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pump Running Constantly</a>\n<a href=\"/problems/well-pump-short-cycling\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pump Short Cycling</a>\n<a href=\"/problems/how-to-prime-a-well-pump\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">How to Prime a Well Pump</a>\n<a href=\"/cost-guides/well-pump-replacement-cost\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pump Replacement Cost</a>\n<a href=\"/guides/well-maintenance-checklist\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Maintenance Checklist</a>"

export default function FrozenWellPipesPage() {
  return (
    <>
      {schemas.map((schema) => <script key={schema['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Breadcrumbs items={[{ label: 'Problems', href: '/problems' }, { label: 'Frozen Well Pipes' }]} />
      <article className="max-w-4xl mx-auto px-4 py-12">
        <span className="font-bold tracking-[0.3em] text-sm uppercase text-[#A32D2D]">Problem</span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 mt-4 leading-tight tracking-tight">{"Frozen Well Pipes: How to Thaw Them and Keep Your Well From Freezing"}</h1>
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-[#1D9E75]">WG</div>
          <div><p className="text-slate-900 font-semibold">The Well Guide</p><p className="text-slate-500 text-sm">Updated October 22, 2026 &middot; 12 min read</p></div>
        </div>
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-8">
          <Image src="/frozen-well-pipes.jpg" alt="Frozen pipe and pressure switch next to a well pressure tank." fill className="object-cover" priority sizes="(max-width: 896px) 100vw, 864px" />
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
        <section className="mt-12 mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">{faqs.map(faq => <div key={faq.question} className="bg-white border border-slate-200 rounded-lg p-5"><h3 className="font-bold text-slate-900 text-sm mb-2">{faq.question}</h3><p className="text-slate-700 text-sm leading-relaxed">{faq.answer}</p></div>)}</div>
        </section>
        <section className="mb-16"><h2 className="text-2xl font-bold text-slate-900 mb-6">Glossary</h2><dl className="space-y-4" dangerouslySetInnerHTML={{ __html: glossary }} /></section>
        <section className="mb-16"><h2 className="text-2xl font-bold text-slate-900 mb-6">Related Guides</h2><div className="grid md:grid-cols-2 gap-4" dangerouslySetInnerHTML={{ __html: related }} /></section>
        <AuthorBio />
      </article>
    </>
  )
}
