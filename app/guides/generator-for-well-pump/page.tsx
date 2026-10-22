import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import LeadForm from '@/components/LeadForm'
import AuthorBio from '@/components/AuthorBio'

export const metadata: Metadata = {
  "title": "What Size Generator Do You Need to Run a Well Pump? | The Well Guide",
  "description": "Size a generator for your well pump by horsepower, why you need 240V, how to connect it safely, and what portable, standby, and battery backup cost over 10 years.",
  "alternates": {
    "canonical": "https://www.thewell.guide/guides/generator-for-well-pump"
  },
  "openGraph": {
    "title": "What Size Generator Do You Need to Run a Well Pump?",
    "description": "Size a generator for your well pump by horsepower, why you need 240V, how to connect it safely, and what portable, standby, and battery backup cost over 10 years.",
    "url": "https://www.thewell.guide/guides/generator-for-well-pump",
    "siteName": "The Well Guide",
    "type": "article",
    "images": [
      {
        "url": "https://www.thewell.guide/generator-for-well-pump.jpg",
        "width": 1200,
        "height": 800,
        "alt": "Portable generator connected to a home's power inlet to run a well pump."
      }
    ]
  }
}
const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Size Generator Do You Need to Run a Well Pump?",
    "description": "Size a generator for your well pump by horsepower, why you need 240V, how to connect it safely, and what portable, standby, and battery backup cost over 10 years.",
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
    "image": "https://www.thewell.guide/generator-for-well-pump.jpg",
    "mainEntityOfPage": "https://www.thewell.guide/guides/generator-for-well-pump"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What size generator do I need to run a well pump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "For a 1/2 to 1 HP pump alone, the generator needs roughly 3,000 to 6,000 starting watts. With a refrigerator, furnace blower, and lights, a generator rated around 7,500 running and 9,500 starting watts covers most homes. It must have a 240V outlet."
        }
      },
      {
        "@type": "Question",
        "name": "Can a 5,000-watt generator run a well pump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Usually, for a 1/2 or 3/4 HP pump, as long as it has a 240V outlet. A 1 HP pump is borderline, and the generator may struggle if other loads are already running when the pump starts. Check the generator's starting watts against the chart above."
        }
      },
      {
        "@type": "Question",
        "name": "Can I run my well pump on a 120V generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if your pump is a 120V model, which is uncommon. Most submersible well pumps need 240V."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need a transfer switch to run a well pump on a generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You need either a transfer switch or an interlock kit with a power inlet, installed by an electrician. Most well pumps are hardwired, so they can't simply be plugged in."
        }
      },
      {
        "@type": "Question",
        "name": "Will an inverter generator run a well pump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only if it has a 240V outlet and enough starting watts. Many inverter generators are 120V only. Inverter generators do provide clean power, which some constant-pressure pump drives need."
        }
      },
      {
        "@type": "Question",
        "name": "How long can a generator run a well pump?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "As long as it has fuel. A typical portable generator runs about 8 to 11 hours on a tank of gas at half load. A well pump only runs when water is used, so it adds less to fuel use than you might expect."
        }
      },
      {
        "@type": "Question",
        "name": "Is propane or gasoline better for a backup generator?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Propane stores indefinitely and won't go stale, which makes it more reliable for occasional use. Gasoline delivers slightly more power. A dual fuel generator lets you use either."
        }
      },
      {
        "@type": "Question",
        "name": "How much water do I have when the power goes out?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Only what's in the pressure tank, usually a few gallons of usable water. See our pressure tank guide for how tank size affects this."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "5-Minute Diagnostic: Find Your Pump's Specs",
    "step": [
      {
        "@type": "HowToStep",
        "position": 1,
        "text": "Check the control box. Many submersible pumps have a gray control box mounted near the pressure tank. Its label lists horsepower and voltage. This means you have a 3-wire pump."
      },
      {
        "@type": "HowToStep",
        "position": 2,
        "text": "No control box? You likely have a 2-wire pump, where the controls are built into the pump down in the well. Check your well records or the original installer's paperwork."
      },
      {
        "@type": "HowToStep",
        "position": 3,
        "text": "Check the breaker. A double-pole breaker (two linked switches) for the pump means it runs on 240V. A single breaker usually means 120V, which is rare for submersible pumps."
      },
      {
        "@type": "HowToStep",
        "position": 4,
        "text": "Check the well records. Your well log, home inspection report, or the well contractor's invoice often lists the pump model. Search the model number for its specs."
      },
      {
        "@type": "HowToStep",
        "position": 5,
        "text": "Calculate running watts if you have the amps. Running watts equals volts times amps. A 240V pump drawing 8 amps runs at about 1,920 watts."
      }
    ]
  }
]
const faqs = [
  {
    "question": "What size generator do I need to run a well pump?",
    "answer": "For a 1/2 to 1 HP pump alone, the generator needs roughly 3,000 to 6,000 starting watts. With a refrigerator, furnace blower, and lights, a generator rated around 7,500 running and 9,500 starting watts covers most homes. It must have a 240V outlet.",
    "answerHtml": "For a 1/2 to 1 HP pump alone, the generator needs roughly 3,000 to 6,000 starting watts. With a refrigerator, furnace blower, and lights, a generator rated around 7,500 running and 9,500 starting watts covers most homes. It must have a 240V outlet."
  },
  {
    "question": "Can a 5,000-watt generator run a well pump?",
    "answer": "Usually, for a 1/2 or 3/4 HP pump, as long as it has a 240V outlet. A 1 HP pump is borderline, and the generator may struggle if other loads are already running when the pump starts. Check the generator's starting watts against the chart above.",
    "answerHtml": "Usually, for a 1/2 or 3/4 HP pump, as long as it has a 240V outlet. A 1 HP pump is borderline, and the generator may struggle if other loads are already running when the pump starts. Check the generator&#39;s starting watts against the chart above."
  },
  {
    "question": "Can I run my well pump on a 120V generator?",
    "answer": "Only if your pump is a 120V model, which is uncommon. Most submersible well pumps need 240V.",
    "answerHtml": "Only if your pump is a 120V model, which is uncommon. Most submersible well pumps need 240V."
  },
  {
    "question": "Do I need a transfer switch to run a well pump on a generator?",
    "answer": "You need either a transfer switch or an interlock kit with a power inlet, installed by an electrician. Most well pumps are hardwired, so they can't simply be plugged in.",
    "answerHtml": "You need either a transfer switch or an interlock kit with a power inlet, installed by an electrician. Most well pumps are hardwired, so they can&#39;t simply be plugged in."
  },
  {
    "question": "Will an inverter generator run a well pump?",
    "answer": "Only if it has a 240V outlet and enough starting watts. Many inverter generators are 120V only. Inverter generators do provide clean power, which some constant-pressure pump drives need.",
    "answerHtml": "Only if it has a 240V outlet and enough starting watts. Many inverter generators are 120V only. Inverter generators do provide clean power, which some constant-pressure pump drives need."
  },
  {
    "question": "How long can a generator run a well pump?",
    "answer": "As long as it has fuel. A typical portable generator runs about 8 to 11 hours on a tank of gas at half load. A well pump only runs when water is used, so it adds less to fuel use than you might expect.",
    "answerHtml": "As long as it has fuel. A typical portable generator runs about 8 to 11 hours on a tank of gas at half load. A well pump only runs when water is used, so it adds less to fuel use than you might expect."
  },
  {
    "question": "Is propane or gasoline better for a backup generator?",
    "answer": "Propane stores indefinitely and won't go stale, which makes it more reliable for occasional use. Gasoline delivers slightly more power. A dual fuel generator lets you use either.",
    "answerHtml": "Propane stores indefinitely and won&#39;t go stale, which makes it more reliable for occasional use. Gasoline delivers slightly more power. A dual fuel generator lets you use either."
  },
  {
    "question": "How much water do I have when the power goes out?",
    "answer": "Only what's in the pressure tank, usually a few gallons of usable water. See our pressure tank guide for how tank size affects this.",
    "answerHtml": "Only what&#39;s in the pressure tank, usually a few gallons of usable water. See our <a class=\"text-[#1D9E75] underline\" href=\"/guides/well-pressure-tank-guide\">pressure tank guide</a> for how tank size affects this."
  }
]
const beforeForm = "<blockquote class=\"mb-12 rounded-lg p-5 bg-[#E1F5EE] border-l-4 border-[#1D9E75]\">\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>TL;DR</strong></p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li>When the power goes out, a well pump stops and your water stops with it. A generator is how most well owners keep water running.</li>\n<li>Most well pumps run on 240 volts. Your generator needs a 240V outlet (usually labeled L14-30R). A 120V-only generator can&#39;t run them.</li>\n<li>Size for the starting surge, not the running load. A pump can pull 2 to 3 times its running watts for a second or two at startup.</li>\n<li>For a typical 1/2 to 1 HP pump plus a few essentials, a generator rated around 7,500 running and 9,500 starting watts covers most homes. Larger pumps need more.</li>\n<li>Connect through a transfer switch or interlock kit installed by an electrician. Never backfeed through an outlet.</li>\n</ul>\n</blockquote>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">On city water, a power outage means no lights. On a well, it also means no water to drink, flush toilets, or wash hands, beyond the few gallons stored in the pressure tank. Winter storms make it worse, since an outage can also freeze the pipes. This guide walks through sizing a generator for your pump, connecting it safely, and what each backup option costs over time.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">The Surge-Plus-Everything Rule</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">A generator has two ratings: <strong>running watts</strong> (what it can supply continuously) and <strong>starting watts</strong> (a brief surge it can handle for a few seconds). A well pump&#39;s startup surge is what usually decides the size.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Check both numbers:</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Running watts:</strong> add up the running watts of everything you&#39;ll power at once (pump, refrigerator, furnace blower, lights). Add 20%. The generator&#39;s running watts must meet that.</li>\n<li><strong>Starting watts:</strong> take the running watts of everything except the pump, then add the pump&#39;s starting watts. Add 20%. The generator&#39;s starting (peak) watts must meet that.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">The 20% headroom matters. A generator pushed to its limit drops voltage when the pump kicks on, which can stall the motor, and it wears out faster.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Sizing Chart by Pump Horsepower</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Typical figures for 240V submersible pumps, calculated with the rule above. Your pump&#39;s nameplate is the real source, and the diagnostic below shows how to find it.</p>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[760px] text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Pump size</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Typical pump running watts</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Typical pump starting watts</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Generator needed, pump alone (running / starting)</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Generator needed, pump plus essentials (running / starting)</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1/2 HP</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About 1,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">2,000 to 3,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1,200 / 3,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">3,600 / 5,400</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">3/4 HP</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About 1,500</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">3,000 to 4,500</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1,800 / 4,500</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">4,200 / 6,900</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1 HP</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About 2,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">4,000 to 6,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">2,400 / 6,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">4,800 / 8,400</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1.5 HP</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">2,500 to 3,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">6,000 to 7,500</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">3,300 / 8,100</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">5,700 / 10,500</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">2 HP</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About 3,500</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">8,000 to 10,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">4,200 / 10,800</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">6,600 / 13,200</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">&quot;Essentials&quot; here means a refrigerator, a gas furnace blower, a few lights, and phone chargers, about 2,000 running watts total. Electric heat, an electric water heater, or central air add far more. Starting watts use the middle of each pump&#39;s typical range.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Most residential well pumps fall between 1/2 and 1 HP. A generator rated around 7,500 running and 9,500 starting watts, with a 240V outlet, covers any of those pumps plus essentials. That&#39;s why it&#39;s the most common choice for well owners, and why our pick is the <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B09HabCgJ\" rel=\"sponsored nofollow\" target=\"_blank\">Westinghouse WGen7500DFc</a>. For a 2 HP pump plus essentials, you&#39;ll need a larger generator, a soft-start device, or to start the pump before turning anything else on.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">5-Minute Diagnostic: Find Your Pump&#39;s Specs</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">You need the pump&#39;s horsepower and voltage. Here&#39;s where to look:</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Check the control box.</strong> Many submersible pumps have a gray control box mounted near the pressure tank. Its label lists horsepower and voltage. This means you have a 3-wire pump.</li>\n<li><strong>No control box?</strong> You likely have a 2-wire pump, where the controls are built into the pump down in the well. Check your well records or the original installer&#39;s paperwork.</li>\n<li><strong>Check the breaker.</strong> A double-pole breaker (two linked switches) for the pump means it runs on 240V. A single breaker usually means 120V, which is rare for submersible pumps.</li>\n<li><strong>Check the well records.</strong> Your well log, home inspection report, or the well contractor&#39;s invoice often lists the pump model. Search the model number for its specs.</li>\n<li><strong>Calculate running watts if you have the amps.</strong> Running watts equals volts times amps. A 240V pump drawing 8 amps runs at about 1,920 watts.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Still unsure? A well contractor can tell you on a routine visit. Our guide on <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/guides/how-well-pump-works\">how a well pump works</a> explains 2-wire vs. 3-wire systems.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>Jet pumps</strong> (above-ground pumps for shallow wells) have a nameplate on the motor. Many run on either 115V or 230V. Check which way yours is wired.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Three Things That Change the Math</h2>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">240V Is Non-Negotiable for Most Pumps</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Most well pumps run on 240V. Many smaller portable generators and most inverter generators only put out 120V. Before buying, confirm the generator has a <strong>120/240V outlet</strong>, usually an L14-30R twist-lock or a 14-50R. If it doesn&#39;t, it can&#39;t run a 240V pump, no matter how many watts it&#39;s rated for.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">Soft Start and Constant-Pressure Pumps Need Less</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Some pumps start gently instead of with a big surge:</p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Soft-start pumps,</strong> such as the Grundfos SQ series, ramp up slowly and need far less starting power.</li>\n<li><strong>Constant-pressure systems</strong> with a variable frequency drive (VFD) also ramp up gradually. Check the drive&#39;s manual for generator guidance. Some drives need clean power, meaning a generator with low total harmonic distortion (THD), often listed as under 5%.</li>\n<li><strong>Add-on soft-start devices</strong> can be installed on some standard pumps to cut the startup surge. Ask a well contractor whether yours is compatible.</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">If your pump has one of these, you may get by with a smaller generator than the chart shows.</p>\n<h3 class=\"text-lg font-bold text-slate-900 mb-3 mt-8\">A 30-Amp Connection Caps Your Output</h3>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">The standard L14-30 connection carries up to about 7,200 watts at 240V. That&#39;s enough for most homes running a pump plus essentials. If you need more, you&#39;ll need a 50-amp connection (14-50), which costs more to install.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">How to Connect a Generator to Your Well Pump</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Most well pumps are hardwired to a breaker, so you can&#39;t just plug them into a generator. There are three safe ways to connect:</p>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[760px] text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Method</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">How it works</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Typical installed cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Best for</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Interlock kit plus power inlet</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">A plate on your main panel that keeps the main breaker and the generator breaker from both being on. You pick which circuits to run.</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About $500 to $1,200 with an electrician</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Most homes. Cheapest and most flexible.</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Manual transfer switch</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">A separate subpanel with switches for a set number of circuits, including the well pump</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About $700 to $1,500 with an electrician</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Homes where an interlock doesn&#39;t fit the panel</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Automatic transfer switch</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Switches to a standby generator automatically when the power fails</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Included with most standby generator installs</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Standby generators</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">All three need a <strong>power inlet box</strong> on the outside of the house, a short heavy-duty <strong>generator cord</strong>, and an electrician. Many areas require a permit.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>Never backfeed.</strong> A &quot;double male&quot; cord plugged into a dryer outlet or wall outlet can send power back down the utility line, where it can kill a line worker or start a fire. It&#39;s illegal in most places and voids insurance coverage. Don&#39;t do it.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Generator Safety</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Every winter, people die from carbon monoxide poisoning from generators run in the wrong place.</p>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Outdoors only.</strong> Never run a generator in a garage, basement, crawl space, or well house, even with the door open.</li>\n<li><strong>Keep it at least 20 feet from the house,</strong> with the exhaust pointed away from doors, windows, and vents.</li>\n<li><strong>Buy a generator with a CO shutoff sensor.</strong> Many current models turn themselves off if carbon monoxide builds up around them.</li>\n<li><strong>Put a battery-powered CO alarm inside the house,</strong> like the <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B03WAlt8O\" rel=\"sponsored nofollow\" target=\"_blank\">First Alert CO400</a>. Plug-in alarms without a battery backup go silent during an outage, which is exactly when you need them.</li>\n<li><strong>Let it cool before refueling,</strong> and store fuel away from the house.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">What to Buy</h2>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[760px] text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Product</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">What it does</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Best for</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Price tier</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B09HabCgJ\" rel=\"sponsored nofollow\" target=\"_blank\">Westinghouse WGen7500DFc Dual Fuel Generator</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">7,500 running / 9,500 peak watts on gasoline, L14-30R 240V outlet, CO shutoff sensor, electric start, runs on gas or propane</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1/2 to 1 HP pumps plus essentials. Our pick for most well owners.</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$$$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B0aYmu1dk\" rel=\"sponsored nofollow\" target=\"_blank\">Westinghouse WGen9500DFc Dual Fuel Generator</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">9,500 running / 12,500 peak watts on gasoline, L14-30R and 14-50R outlets, CO shutoff sensor</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">1.5 to 2 HP pumps, or homes running more than the essentials</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$$$$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B0gghuC7A\" rel=\"sponsored nofollow\" target=\"_blank\">Reliance Controls PB30 Power Inlet Box</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Weatherproof 30-amp L14-30 inlet mounted outside the house</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Connecting through an interlock or transfer switch</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B0eOq8qoi\" rel=\"sponsored nofollow\" target=\"_blank\">L14-30 Generator Cord, 25 ft</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Carries 240V power from the generator to the inlet box</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Every setup with an inlet box</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B03WAlt8O\" rel=\"sponsored nofollow\" target=\"_blank\">First Alert CO400 Battery CO Alarm</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Battery-powered carbon monoxide alarm that keeps working in an outage</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Every home running a generator</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\"><a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"https://link.amazon/B01fr0Q50\" rel=\"sponsored nofollow\" target=\"_blank\">STA-BIL Fuel Stabilizer</a></td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Keeps stored gasoline fresh for up to 2 years</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Anyone storing gas for the generator</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>Why dual fuel:</strong> propane stores indefinitely and doesn&#39;t go stale, which makes it more reliable for a generator that sits unused for months. Gasoline gives a little more power, so it&#39;s useful to have both.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>Why a CO sensor matters:</strong> it&#39;s the single most important safety feature on a portable generator. Both picks have one.</p>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\"><strong>The interlock kit isn&#39;t on this list</strong> because each kit is made for a specific panel brand and model. Your electrician will order the right one.</p>\n"
const afterForm = "<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Before the Next Storm</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">A generator only helps if it starts. Before winter:</p>\n<ol class=\"list-decimal pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Test it monthly.</strong> Run it under load for 15 to 20 minutes, ideally powering the well pump through your inlet.</li>\n<li><strong>Treat or rotate the fuel.</strong> Add stabilizer to stored gasoline, or keep a full propane tank on hand.</li>\n<li><strong>Change the oil</strong> on the schedule in the manual. Most new generators need a first oil change after a short break-in period.</li>\n<li><strong>Keep the cord, a flashlight, and the manual together</strong> next to the generator.</li>\n<li><strong>Fill bathtubs and water jugs</strong> when a big storm is forecast, as a backup for flushing and drinking.</li>\n<li><strong>Know your pressure tank&#39;s limit.</strong> Most hold only a few gallons of usable water. That&#39;s all you&#39;ll have until the generator is running.</li>\n</ol>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">During a winter outage, freezing is a second risk. See our <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/problems/frozen-well-pipes\">frozen well pipes guide</a> for what to do if the pump or pipes are exposed to the cold.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Cost Breakdown and 10-Year Total Cost of Ownership</h2>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">Typical estimates. Fuel costs vary widely with how often and how long your power goes out.</p>\n<div class=\"w-full max-w-full overflow-x-auto mb-6\" role=\"region\" aria-label=\"Scrollable comparison table\" tabindex=\"0\"><table class=\"w-full min-w-[760px] text-sm border-collapse\">\n<thead class=\"bg-[#E1F5EE]\">\n<tr>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Option</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Upfront cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Ongoing cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">10-year total cost</th>\n<th class=\"text-left p-3 font-semibold text-slate-900 border border-slate-200\">Notes</th>\n</tr>\n</thead>\n<tbody><tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Portable dual fuel generator plus interlock and inlet</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$1,400 to $2,600 ($900 to $1,400 for the generator, $500 to $1,200 installed connection)</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Fuel, oil, and stabilizer, roughly $50 to $150 a year plus outage fuel</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About $2,000 to $4,500</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Most common choice. You start it and plug it in.</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Portable generator plus manual transfer switch</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">$1,600 to $2,900</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Same as above</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">About $2,200 to $4,800</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Similar, with a separate switch panel</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Whole-home standby generator</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Often $10,000 to $20,000 installed</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Annual service plus natural gas or propane</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Often $12,000 to $25,000</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Starts automatically. Best for frequent or long outages.</td>\n</tr>\n<tr>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Home battery backup</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Varies widely. A system that can start a 240V well pump often costs $5,000 or more.</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Minimal</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Depends on the system</td>\n<td class=\"p-3 border border-slate-200 text-slate-700\">Quiet and indoor-safe, but must be sized carefully for the pump&#39;s surge, and runtime is limited without solar</td>\n</tr>\n</tbody></table></div>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">The pattern: a portable generator with a proper connection covers most well owners for a fraction of a standby system. Standby makes sense if outages are frequent, long, or someone at home can&#39;t handle a portable generator in a storm.</p>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">Common Mistakes</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Buying a 120V-only generator.</strong> It won&#39;t run a 240V pump, regardless of wattage. Check for an L14-30R or 14-50R outlet.</li>\n<li><strong>Sizing for running watts only.</strong> The startup surge is what stalls an undersized generator.</li>\n<li><strong>Backfeeding through an outlet.</strong> It&#39;s dangerous for utility workers, illegal, and a fire risk. Use an interlock or transfer switch.</li>\n<li><strong>Running the generator in the garage or well house.</strong> Carbon monoxide builds up fast, even with doors open.</li>\n<li><strong>Starting everything at once.</strong> Start the well pump first, let it settle, then add other loads one at a time.</li>\n<li><strong>Letting fuel go stale.</strong> Old gasoline is the top reason generators won&#39;t start during a storm. Stabilize it or use propane.</li>\n<li><strong>Never testing it.</strong> Find problems on a calm day, not in a blizzard.</li>\n<li><strong>Forgetting the cord.</strong> A generator with no way to connect to the house is just a loud box.</li>\n</ul>\n<h2 class=\"text-2xl font-bold text-slate-900 mb-6 mt-12\">When to Call a Pro</h2>\n<ul class=\"list-disc pl-6 space-y-2 text-slate-700 text-sm leading-relaxed mb-6\">\n<li><strong>Electrician:</strong> installing an interlock kit, transfer switch, or power inlet box. This is required work in most areas, often with a permit.</li>\n<li><strong>Electrician:</strong> installing a standby generator and automatic transfer switch.</li>\n<li><strong>Well contractor:</strong> confirming your pump&#39;s horsepower and voltage if you can&#39;t find them.</li>\n<li><strong>Well contractor:</strong> adding a soft-start device or upgrading to a soft-start or constant-pressure pump to reduce the generator size you need. See our <a class=\"text-[#1D9E75] underline hover:text-[#0F6E56]\" href=\"/reviews/best-well-pumps\">best well pumps</a> for options.</li>\n</ul>\n<p class=\"text-slate-700 text-sm leading-relaxed mb-4\">DIY-friendly: finding your pump specs, buying the generator, and running and maintaining it.</p>\n"
const glossary = "<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Running watts:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The power a generator can supply continuously.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Starting watts:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">The brief surge of power a generator can supply for a few seconds to start motors. Also called peak or surge watts.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">2-wire pump:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A submersible pump with its start controls built in, so there's no separate control box.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">3-wire pump:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A submersible pump with a separate control box near the pressure tank.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">L14-30R:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A 30-amp, 120/240V twist-lock outlet found on generators that can power 240V circuits.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Power inlet box:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A weatherproof outdoor receptacle that lets a generator cord connect to your home's wiring safely.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Interlock kit:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A panel device that prevents the main breaker and the generator breaker from being on at the same time.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Transfer switch:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A switch that moves selected circuits from utility power to generator power.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Backfeeding:</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">Sending generator power into the house through an outlet without a transfer switch or interlock. Dangerous and usually illegal.</dd></div>\n<div class=\"bg-white border border-slate-200 rounded-lg p-5\"><dt class=\"font-bold text-slate-900 text-sm mb-2\">Total harmonic distortion (THD):</dt><dd class=\"text-slate-700 text-sm leading-relaxed\">A measure of how clean a generator's power is. Lower is better for sensitive electronics and some pump drives.</dd></div>"
const related = "<a href=\"/guides/how-well-pump-works\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">How a Well Pump Works</a>\n<a href=\"/problems/frozen-well-pipes\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Frozen Well Pipes</a>\n<a href=\"/problems/no-water-from-well\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">No Water From Well</a>\n<a href=\"/guides/well-pressure-tank-guide\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pressure Tank Guide</a>\n<a href=\"/reviews/best-well-pumps\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Best Well Pumps</a>\n<a href=\"/cost-guides/well-pump-replacement-cost\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Pump Replacement Cost</a>\n<a href=\"/guides/well-maintenance-checklist\" class=\"block bg-white p-4 rounded-lg border border-slate-200 hover:shadow-md transition-shadow text-sm font-bold text-slate-900 hover:text-[#1D9E75]\">Well Maintenance Checklist</a>"

export default function GeneratorForWellPumpPage() {
  return (
    <>
      {schemas.map((schema) => <script key={schema['@type']} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />)}
      <Breadcrumbs items={[{ label: 'Guides', href: '/guides' }, { label: 'Generator for a Well Pump' }]} />
      <article className="w-full min-w-0 max-w-4xl mx-auto px-4 py-12">
        <span className="font-bold tracking-[0.3em] text-sm uppercase text-[#0F6E56]">Guide</span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 mt-4 leading-tight tracking-tight">{"What Size Generator Do You Need to Run a Well Pump?"}</h1>
        <div className="flex items-center space-x-4 mb-8">
          <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm bg-[#1D9E75]">WG</div>
          <div><p className="text-slate-900 font-semibold">The Well Guide</p><p className="text-slate-500 text-sm">Updated October 22, 2026 &middot; 11 min read</p></div>
        </div>
        <div className="relative w-full aspect-[3/2] rounded-xl overflow-hidden mb-8">
          <Image src="/generator-for-well-pump.jpg" alt="Portable generator connected to a home's power inlet to run a well pump." fill className="object-cover" priority sizes="(max-width: 896px) 100vw, 864px" />
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
