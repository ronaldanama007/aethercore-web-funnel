"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Search, Zap, Star } from "lucide-react";

interface HeroSectionProps {
  onOpenModal: () => void;
}

export default function HeroSection({ onOpenModal }: HeroSectionProps) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      <div className="nocturne-glow-orb w-[500px] h-[500px] -top-32 -left-20 bg-violet-600/30"></div>
      <div className="nocturne-glow-orb w-[650px] h-[650px] top-1/4 -right-40 bg-indigo-600/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="nocturne-badge">
              <Sparkles className="w-3.5 h-3.5 text-violet-light" />
              <span>Philippine SME Digital Transformation</span>
            </span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-white leading-[1.1] mb-6">
            Is Your Business Still Relying on{" "}
            <span className="bg-gradient-to-r from-violet-accent via-indigo-400 to-violet-light bg-clip-text text-transparent">
              Facebook Alone?
            </span>
          </h1>

          <p className="text-lg md:text-xl text-silver-muted leading-relaxed mb-8 max-w-2xl mx-auto">
            Your customers are actively searching Google. Give them a professional, lightning-fast website they can trust. Stop losing high-intent buyers to messy comment sections and delayed &ldquo;PM sent&rdquo; replies.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <button
              onClick={onOpenModal}
              className="w-full sm:w-auto nocturne-btn-primary text-base py-3.5 px-8 group"
            >
              <Sparkles className="w-5 h-5 text-violet-light group-hover:rotate-12 transition-transform" />
              <span>Get My Free Website Assessment</span>
              <ArrowRight className="w-5 h-5 text-white/80 group-hover:translate-x-1 transition-transform" />
            </button>

            <Link
              href="/scorecard/demo"
              className="w-full sm:w-auto nocturne-btn-secondary text-base py-3.5 px-7 text-center"
            >
              View Sample Scorecard
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-silver-dim font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              100% Free Initial Assessment
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-violet-accent" />
              Instant 5-Pillar Scorecard
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Custom Interactive Mockup
            </span>
          </div>
        </div>

        <div className="mt-14 md:mt-20 max-w-5xl mx-auto">
          <div className="relative p-1 rounded-[24px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl">
            <div className="bg-obsidian-surface rounded-[22px] p-6 md:p-8 border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center justify-between pb-6 border-b border-white/[0.08] mb-6 flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <span className="text-xs font-mono text-silver-dim">
                    audit.aethercore.ph/scorecard/sample-audit
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/30 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    LIVE SME AUDIT
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-5 rounded-xl bg-obsidian-elevated/60 border border-white/[0.06] hover:border-violet-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-silver-muted tracking-wider">
                      Google Visibility
                    </span>
                    <Search className="w-4 h-4 text-violet-accent" />
                  </div>
                  <div className="text-3xl font-display font-bold text-red-400 mb-1">
                    28 / 100
                  </div>
                  <p className="text-xs text-silver-dim leading-relaxed">
                    Facebook posts do not rank on Google local maps. Lost organic local searches.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-obsidian-elevated/60 border border-white/[0.06] hover:border-violet-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-silver-muted tracking-wider">
                      Inquiry Conversion
                    </span>
                    <Zap className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="text-3xl font-display font-bold text-amber-400 mb-1">
                    32 / 100
                  </div>
                  <p className="text-xs text-silver-dim leading-relaxed">
                    60%+ abandoned inquiries caused by manual &ldquo;PM sent&rdquo; messaging delays.
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-obsidian-elevated/60 border border-white/[0.06] hover:border-violet-accent/40 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono uppercase text-silver-muted tracking-wider">
                      With AetherCore Website
                    </span>
                    <Star className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-3xl font-display font-bold text-emerald-400 mb-1">
                    94 / 100
                  </div>
                  <p className="text-xs text-silver-dim leading-relaxed">
                    Automated booking, transparent pricing, and instant credible .ph domain presence.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-silver-muted">
                  Ready to see your business&apos;s custom scorecard?
                </div>
                <button
                  onClick={onOpenModal}
                  className="text-xs font-mono text-violet-light hover:text-white flex items-center gap-1.5 transition-colors underline underline-offset-4"
                >
                  Generate Your Own Audit Now &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
