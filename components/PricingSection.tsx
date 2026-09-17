"use client";

import React from "react";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";

interface PricingSectionProps {
  onOpenModal: (tier?: string) => void;
}

export default function PricingSection({ onOpenModal }: PricingSectionProps) {
  const tiers = [
    {
      name: "Starter",
      badge: "Fast Launch",
      price: "₱15,000",
      description:
        "Ideal for solo practitioners and micro-businesses stepping beyond Facebook for the first time.",
      features: [
        "1–3 High-Converting Pages (Home, Services, Contact)",
        "Mobile-first responsive design (loads under 1.5s)",
        "Direct 1-Click Viber & WhatsApp contact buttons",
        "Google Maps pin & basic local search setup",
        "Free SSL certificate configuration",
        "Delivery in 7 business days",
      ],
      cta: "Choose Starter",
      highlight: false,
    },
    {
      name: "Business",
      badge: "Most Popular",
      price: "₱25,000",
      description:
        "Engineered for established clinics, salons, and service providers wanting automated customer bookings.",
      features: [
        "Up to 5 Custom Pages (Home, About, Services, Rates, Booking)",
        "Automated 24/7 Calendar Scheduling (Google Calendar sync)",
        "Interactive Service Menu & Tiered Pricing Tables",
        "Full Local SEO optimization (Title tags, Schema markup)",
        "Google Business Profile & Reviews Widget integration",
        ".ph or .com Custom Domain configuration",
        "Delivery in 10–14 business days",
      ],
      cta: "Claim Free Assessment For Business Tier",
      highlight: true,
    },
    {
      name: "Business Pro",
      badge: "Full Automation",
      price: "₱40,000+",
      description:
        "Comprehensive digital system for growing brands needing GCash/Maya checkouts and multi-staff bookings.",
      features: [
        "Everything in Business tier + Unlimited custom sections",
        "Online Payment Gateway (GCash, Maya, Debit/Credit cards)",
        "Multi-staff or multi-branch appointment routing",
        "Lead capture connected to Supabase / Google Sheets / CRM",
        "Ultra-fast PageSpeed (95+ score guaranteed)",
        "Dedicated 30-day post-launch maintenance & staff training",
      ],
      cta: "Inquire Business Pro",
      highlight: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 relative bg-obsidian-surface border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="nocturne-badge text-violet-light border-violet-accent/30 bg-violet-accent/10">
              <Zap className="w-3.5 h-3.5" />
              <span>Transparent Investment</span>
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Transparent Pricing Built for{" "}
            <span className="bg-gradient-to-r from-violet-accent via-indigo-400 to-violet-light bg-clip-text text-transparent">
              Philippine SMEs
            </span>
          </h2>
          <p className="text-base sm:text-lg text-silver-muted leading-relaxed">
            No recurring website rental fees. You own your domain, code, and customer data 100%.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                tier.highlight
                  ? "bg-obsidian-elevated/90 border-2 border-violet-accent shadow-glow scale-[1.02] lg:-translate-y-2"
                  : "nocturne-card"
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 rounded-full bg-violet-accent text-white text-xs font-mono font-semibold uppercase tracking-wider shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-display font-bold text-2xl text-white">
                    {tier.name}
                  </h3>
                  {!tier.highlight && (
                    <span className="text-xs font-mono text-silver-dim px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06]">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="mb-6">
                  <div className="font-display font-bold text-4xl text-white tracking-tight">
                    {tier.price}
                  </div>
                  <span className="text-xs font-mono text-silver-muted">
                    One-time build • Zero monthly lock-in
                  </span>
                </div>

                <p className="text-sm text-silver-muted leading-relaxed mb-8">
                  {tier.description}
                </p>

                <div className="space-y-3.5 mb-8">
                  <span className="text-xs font-mono text-silver-dim uppercase tracking-wider block">
                    What&apos;s Included:
                  </span>
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-violet-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-violet-accent" />
                      </div>
                      <span className="text-xs sm:text-sm text-silver-text leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-white/[0.08]">
                <button
                  onClick={() => onOpenModal(tier.name)}
                  className={`w-full py-3.5 text-sm font-semibold rounded-full flex items-center justify-center gap-2 transition-all ${
                    tier.highlight
                      ? "nocturne-btn-primary"
                      : "nocturne-btn-secondary"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center max-w-2xl mx-auto p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
          <p className="text-xs sm:text-sm text-silver-muted leading-relaxed">
            <strong className="text-white">Our 100% Launch Guarantee:</strong> If your website doesn&apos;t meet the exact specifications agreed upon during your strategy session, we will revise it until you are completely satisfied before making the site live.
          </p>
        </div>
      </div>
    </section>
  );
}
