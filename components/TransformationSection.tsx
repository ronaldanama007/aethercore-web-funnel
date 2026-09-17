"use client";

import React, { useState } from "react";
import { CheckCircle2, XCircle, Globe, Smartphone, Calendar, Search, ArrowRight } from "lucide-react";

interface TransformationSectionProps {
  onOpenModal: () => void;
}

export default function TransformationSection({ onOpenModal }: TransformationSectionProps) {
  const comparisonRows = [
    {
      feature: "Google Search Ranking",
      fb: "Invisible on Google Maps & Local Web Searches",
      web: "Ranked for localized keywords (e.g. 'dental clinic Quezon City')",
    },
    {
      feature: "Booking & Inquiries",
      fb: "Forced 'PM sent' delay; manual back-and-forth chat",
      web: "24/7 Automated calendar booking directly into your Google Calendar",
    },
    {
      feature: "Pricing & Service Menu",
      fb: "Buried in unsearchable photos from 6 months ago",
      web: "Clean, tiered pricing tables with instant booking buttons",
    },
    {
      feature: "Mobile Loading Speed",
      fb: "Forced login pop-ups & heavy, slow app redirects",
      web: "Loads in under 1.2s on Philippine 4G/5G mobile networks",
    },
    {
      feature: "Client Credibility",
      fb: "Perceived as temporary or home-based side hustle",
      web: "Official .ph/.com domain with SSL badge and corporate authority",
    },
    {
      feature: "Asset Ownership",
      fb: "Zuckerberg owns your followers & can restrict your page anytime",
      web: "100% your asset, database, and client list forever",
    },
  ];

  return (
    <section id="transformation" className="py-24 relative bg-obsidian">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="nocturne-badge text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
              <Globe className="w-3.5 h-3.5" />
              <span>The Transformation</span>
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-white tracking-tight mb-5">
            Turn Casual Browsers into{" "}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 bg-clip-text text-transparent">
              Confirmed Appointments
            </span>
          </h2>
          <p className="text-base sm:text-lg text-silver-muted leading-relaxed">
            See the concrete difference when you give your Philippine customers a modern, frictionless web experience.
          </p>
        </div>

        <div className="nocturne-card overflow-hidden border border-white/[0.08] shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 border-b border-white/[0.08]">
            <div className="p-6 md:p-8 bg-red-950/20 border-b md:border-b-0 md:border-r border-white/[0.08]">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-red-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span>
                The Status Quo
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                Facebook-Only Presence
              </h3>
              <p className="text-xs text-silver-muted mt-1">
                Friction-heavy, chaotic inbox, and lost high-intent inquiries.
              </p>
            </div>

            <div className="p-6 md:p-8 bg-emerald-950/20">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-emerald-400 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                The Upgrade
              </div>
              <h3 className="text-2xl font-display font-bold text-white">
                AetherCore Modern Website
              </h3>
              <p className="text-xs text-silver-muted mt-1">
                Automated 24/7 lead conversion, Google visibility, and brand authority.
              </p>
            </div>
          </div>

          <div className="divide-y divide-white/[0.06]">
            {comparisonRows.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-2 hover:bg-white/[0.02] transition-colors"
              >
                <div className="p-5 sm:p-6 md:border-r border-white/[0.06] flex items-start gap-3.5">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-silver-dim uppercase block mb-1">
                      {row.feature}
                    </span>
                    <span className="text-sm text-silver-muted leading-relaxed">
                      {row.fb}
                    </span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 flex items-start gap-3.5 bg-emerald-500/[0.02]">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[11px] font-mono text-emerald-400/80 uppercase block mb-1">
                      {row.feature}
                    </span>
                    <span className="text-sm text-silver-text font-medium leading-relaxed">
                      {row.web}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 bg-obsidian-elevated/80 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="text-sm text-silver-muted">
              Built specifically for Philippine clinics, salons, restaurants, contractors, and local service providers.
            </div>
            <button
              onClick={onOpenModal}
              className="nocturne-btn-primary text-sm py-2.5 px-6 whitespace-nowrap"
            >
              <span>See What Your Website Could Look Like</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
