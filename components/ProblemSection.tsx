"use client";

import React from "react";
import { AlertTriangle, Clock, Search, MessageSquareOff, ShieldAlert, Sparkles } from "lucide-react";

interface ProblemSectionProps {
  onOpenModal: () => void;
}

export default function ProblemSection({ onOpenModal }: ProblemSectionProps) {
  const painPoints = [
    {
      icon: Search,
      title: "Google Search Invisibility",
      description:
        "High-intent customers searching Google for clinics, salons, or contractors near them never see Facebook posts. Your competitors with websites capture 100% of that organic search traffic.",
      stat: "83% of buyers search Google first",
    },
    {
      icon: MessageSquareOff,
      title: "The 'PM Sent' Bottleneck & Drop-off",
      description:
        "Customers don't want to wait hours for a reply just to know your business hours or pricing. Over 60% of potential buyers abandon inquiries when forced to message for basic details.",
      stat: "60%+ drop-off from reply delay",
    },
    {
      icon: Clock,
      title: "Wasted Hours Answering 'HM Po?'",
      description:
        "Because prices and service menus are buried in old photo albums, your team wastes valuable hours repeating the exact same answers instead of confirming bookings.",
      stat: "10+ hours lost per week in DMs",
    },
    {
      icon: ShieldAlert,
      title: "Zero Platform Ownership",
      description:
        "Facebook algorithms change constantly, limiting organic post reach to under 5% of your followers. An account restriction or glitch can halt your entire customer flow overnight.",
      stat: "Organic reach capped at <5%",
    },
  ];

  return (
    <section id="problem" className="py-24 relative bg-obsidian-surface border-y border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="nocturne-badge text-amber-400 border-amber-500/30 bg-amber-500/10">
              <AlertTriangle className="w-3.5 h-3.5 text-amber-400" />
              <span>The Reality Check</span>
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            The Hidden Cost of Relying{" "}
            <span className="text-red-400">Only on Facebook</span>
          </h2>
          <p className="text-base sm:text-lg text-silver-muted leading-relaxed">
            Facebook is great for social updates, but using it as your primary digital storefront is quietly costing your business thousands of pesos in lost inquiries every week.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {painPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="nocturne-card p-8 group relative overflow-hidden flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Icon className="w-24 h-24 text-violet-accent" />
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-white/[0.05] border border-white/10 flex items-center justify-center mb-6 group-hover:border-violet-accent/40 group-hover:bg-violet-accent/10 transition-colors">
                    <Icon className="w-6 h-6 text-violet-light" />
                  </div>

                  <h3 className="text-xl font-display font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-silver-muted leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-amber-400/90 font-medium">
                    {item.stat}
                  </span>
                  <span className="text-xs font-mono text-silver-dim">
                    0{idx + 1} // FRICTION
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-violet-accent/15 via-indigo-950/40 to-obsidian-elevated border border-violet-accent/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-display font-bold text-white">
              Want to calculate your business&apos;s specific drop-off rate?
            </h4>
            <p className="text-sm text-silver-muted">
              Get an instant 5-pillar scorecard customized for your industry and Facebook page.
            </p>
          </div>
          <button
            onClick={onOpenModal}
            className="nocturne-btn-primary text-sm py-3 px-6 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Generate Free Scorecard</span>
          </button>
        </div>
      </div>
    </section>
  );
}
