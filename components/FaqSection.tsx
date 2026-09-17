"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Why can't I just keep using my Facebook page alone?",
      a: "Facebook is great for social updates, but when potential customers search Google for services in your city, Facebook posts rarely rank. Furthermore, forced logins, buried photo albums, and slow 'PM sent' replies cause over 60% of interested buyers to drop off and book with competitors who offer instant online details.",
    },
    {
      q: "How long does it take to launch our website?",
      a: "Our Starter package (₱15K) is delivered in 7 business days. The Business package (₱25K) with automated booking calendar and full SEO takes 10 to 14 business days from the moment we receive your initial materials.",
    },
    {
      q: "Do I have to write all the content and text myself?",
      a: "No! AetherCore writes the core persuasive copy for your business. We extract your service details, rates, and past work directly from your Facebook page and optimize them into high-converting headlines and descriptions.",
    },
    {
      q: "Can my Philippine customers pay via GCash, Maya, or Bank Transfer?",
      a: "Yes. On our Business and Business Pro tiers, we integrate Philippine payment gateways (such as PayMongo, GCash, Maya, and BDO/BPI transfers) so clients can pay deposits or full amounts effortlessly.",
    },
    {
      q: "Will our website actually show up on Google in our area?",
      a: "Yes. Every AetherCore website includes local search engine optimization (SEO), localized meta titles (e.g. 'Dental Clinic in BGC Taguig'), and structured schema so Google connects nearby searchers directly to your site.",
    },
    {
      q: "What happens after the website is launched? Are there recurring fees?",
      a: "No hidden monthly rental fees. You own your code, domain, and database completely. We provide 30 days of complimentary post-launch support, and standard hosting is hosted on high-speed global infrastructure with low-to-zero recurring maintenance costs.",
    },
  ];

  return (
    <section id="faq" className="py-24 relative bg-obsidian border-t border-white/[0.08]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="nocturne-badge text-silver-text border-white/20 bg-white/[0.05]">
              <HelpCircle className="w-3.5 h-3.5 text-violet-light" />
              <span>Got Questions?</span>
            </span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-silver-muted text-sm sm:text-base">
            Everything Philippine SME owners need to know about transitioning to a modern website.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="nocturne-card overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <span className="font-display font-semibold text-base sm:text-lg text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-silver-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-violet-accent" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm text-silver-muted leading-relaxed border-t border-white/[0.04] mt-2 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
